const { createDir, replaceWhitespacesWithUnderscores } = require("./utils.js");
const path = require("path");
const execSync = require("child_process").execSync;
const paths = require('./paths').paths;


const getPath = (id, layers, dir) => {
  dir = replaceWhitespacesWithUnderscores(dir);
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    if (id === layer.id) {
      return path.resolve(dir, layer.name);
    } else {
      const newDir = getPath(id, layer.layers, path.resolve(dir, layer.name));
      if (newDir) {
        return newDir;
      }
    }
  }
  return dir;
};



const exportLayer = (id, dest) => {
  execSync(
    paths.getSketchtool +
      " export layers --formats=svg --scales=1 --output=" +
      dest +
      " " +
      "--item=" +
      id +
      " " +
      paths.getSketchFile
  );
};



const exportPages = () => {
  execSync(
    paths.getSketchtool +
      " export pages " +
      paths.getSketchFile +
      " --formats=svg --scales=1 --output=" +
      paths.getPages
  );
};



const exportArtboards = (platform, layers) => {
  let constructors = [];
  layers.pages.forEach(page => {
    const dir = replaceWhitespacesWithUnderscores(path.resolve( paths.getArtboards, page.name ) );
    createDir(dir);
    page.layers.forEach(layer => {
      exportLayer(layer.id, dir);
      constructors.push({
        platform: platform,
        data: {
          dir: paths.getPages,
        },
        createWrapperComponents: false
      })
    });
  });
  return constructors
};



const exportSlices = (platform, layers, slices) => {
  let constructors = [];
  slices.pages.forEach((page, index) => {
    const dir = replaceWhitespacesWithUnderscores(path.resolve( paths.getSlices, page.name ) );
    createDir(dir);
    page.slices.forEach(slice => {
      const pathOfPage = path.resolve(paths.getSlices, page.name);
      const pathOfSlice = getPath(
        slice.id,
        layers.pages[index].layers,
        pathOfPage
      );
      if (pathOfSlice != pathOfPage) {
        exportLayer(slice.id, pathOfSlice);
        constructors.push({
          platform: platform,
          data: {
            dir: pathOfSlice
          },
          createWrapperComponents: false
        })
      }
    });
  });
  return constructors;
};



exports.exportPages = exportPages;
exports.exportArtboards = exportArtboards;
exports.exportSlices = exportSlices;
exports.exportLayer = exportLayer;