#!/usr/bin/env node
const path = require("path");
const execSync = require("child_process").execSync;

const {
  createDir,
  removeDir,
  writeJsonFile,
  replaceWhitespacesWithUnderscores,
} = require("./utils.js");

const {
  exportPages,
  exportArtboards,
  exportSlices,
  exportLayer
} = require("./exporter.js");

const createComponents = require('./createComponents');

const paths = require('./paths').paths;

const platform = process.argv[2];

if (!paths.getOriginalSketchFile || ! paths.getDestination){
  console.error('Please specify the path to the Sketch file and destination path.');
  process.exit();
}



let layers, meta, slices;

const initializeDirectories = (directories = [paths.getData, paths.getPages, paths.getArtboards, paths.getLayers, paths.getSlices]) => {
  // remove existing directories and create them again:
  directories.forEach(dir => removeDir(dir));
  createDir(paths.destination);
  directories.forEach(dir => createDir(dir));
}



// copy sketch file in order to not break the original one, e.g. when detaching symbols:
// TODO: use fs instead of exec process
const duplicateSketchFile = () => {
  execSync(`cp ${paths.getOriginalSketchFile} ${paths.getSketchFile}`);
}



// write data files
const createJSONFiles = () => {
  meta = JSON.parse(
    execSync(paths.getSketchtool + " metadata " + paths.getSketchFile)
  );
  layers = JSON.parse(
    execSync(paths.getSketchtool  + " list layers " + paths.getSketchFile)
  );
  slices = JSON.parse(
    execSync(paths.getSketchtool  + " list slices " + paths.getSketchFile)
  );
  console.log("exporting meta data");
  writeJsonFile(path.resolve(paths.getData, "meta.json"), meta);
  console.log("exporting layers data");
  writeJsonFile(path.resolve(paths.getData, "layers.json"), layers);
  console.log("exporting slices data");
  writeJsonFile(path.resolve(paths.getData, "slices.json"), slices);
  console.log("");
}



// export layers and create framerx components
const exportLayersAndBuildPlatformComponents = () => {
  console.log("exporting pages as svgs");
  exportPages();
  createComponents.create(platform, {dir: paths.getPages}, false);
  console.log("");

  console.log("exporting artboards as svgs");
  let artboardConstructors = exportArtboards(platform, layers);
  artboardConstructors.forEach(constructor => {
    createComponents.create(constructor.platform, constructor.data, constructor.createWrapperComponents)
  })



  console.log("exporting slices (layers made exportable) as svgs");
  let sliceConstructors = exportSlices(platform, layers, slices);
  sliceConstructors.forEach(constructor => {
    createComponents.create(constructor.platform, constructor.data, constructor.createWrapperComponents)
  })

  console.log("exporting all layers as svgs");
  const exportLayersRecursively = (platform, layers, dir) => {
    if(!layers.length){
      return
    }
    dir = replaceWhitespacesWithUnderscores(dir);
    createDir(dir);
    layers.forEach(layer => {
      exportLayer(layer.id, dir);
      createComponents.create(platform, {dir: dir}, false);
      exportLayersRecursively(platform, layer.layers, path.resolve(dir, layer.name))
    }) 
  }


  layers.pages.forEach(page => {
    exportLayersRecursively(platform, page.layers, path.resolve(paths.getLayers, page.name));
    createComponents.create(platform, {
      layers: page.layers,
      path: path.resolve(paths.getLayers, page.name),
      isArtboard: true
    }, true);
  });
}



try{
  initializeDirectories();
  duplicateSketchFile();
  createJSONFiles();
  exportLayersAndBuildPlatformComponents();
}
catch(err){
  throw new Error(err);
}