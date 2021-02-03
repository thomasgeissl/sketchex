#!/usr/bin/env node
const path = require("path");

exports.paths = {
  sketchtool:         "/Applications/Sketch.app/Contents/MacOS/sketchtool",
  template:           path.resolve( __dirname, "svgr_template_framerx.js"),
  relativeTemplate:   path.relative( process.cwd(), path.resolve( __dirname, "svgr_template_framerx.js")),
  svgr:               path.resolve( __dirname, "../node_modules/@svgr/cli/bin/svgr"),
  originalSketchFile: path.resolve( process.argv[3]),
  destination:        path.resolve( process.argv[4]),
  sketchFile:         path.resolve( path.resolve( path.resolve( process.argv[4]), "data"), "tmp.sketch"),
  data:               path.resolve( path.resolve( process.argv[4]), "data"),
  pages:              path.resolve( path.resolve( process.argv[4]), "pages"),
  artboards:          path.resolve( path.resolve( process.argv[4]), "artboards"),
  layers:             path.resolve( path.resolve( process.argv[4]), "layers"),
  slices:             path.resolve( path.resolve( process.argv[4]), "slices"),
  get getSketchtool()         {return this.sketchtool},
  get getTemplate()           {return this.template},
  get getRelativeTemplate()   {return this.relativeTemplate},
  get getSvgr()               {return this.svgr},
  get getOriginalSketchFile() {return this.originalSketchFile},
  get getDestination()        {return this.destination},
  get getSketchFile()         {return this.sketchFile},
  get getData()               {return this.data},
  get getPages()              {return this.pages},
  get getArtboards()          {return this.artboards},
  get getLayers()             {return this.layers},
  get getSlices()             {return this.slices},
}