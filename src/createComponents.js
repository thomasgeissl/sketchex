const framerx = require("./exporters/framerx");
const vue = require("./exporters/vue");
const react = require("./exporters/react");

/**
 * @description
 * @argument $string  platform                  | framework target (e.g., 'framerx', 'vue', 'react')
 * @argument $object  data                      | paths, JSON, whatever is needed
 * @argument $boolean createWrapperComponents   | whether or not to createWrapperComponents
 * @return   void
 */
exports.create = (platform, data = {}, createWrapperComponents) => {
  switch (platform) {
    case "framerx": {
      if (createWrapperComponents) {
        framerx.createWrapperComponents(
          data.layers,
          data.path,
          data.isArtboard
        );
      } else {
        framerx.createComponents(data.dir);
      }
      break;
    }
    case "react": {
      if (createWrapperComponents) {
        console.warn("react::createWrapperComponents is not yet implemented");
        react.createWrapperComponents(data.layers, data.path, data.isArtboard);
      } else {
        react.createComponents(data.dir);
      }
    }
    default:
      {
      }
      break;
  }
};
