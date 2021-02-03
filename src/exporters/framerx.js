const execSync = require("child_process").execSync;
const fs = require("fs-extra");
const path = require("path");
const paths = require('../paths').paths;

const {
  createCamelCase,
  createStyle,
  replaceWhitespacesWithUnderscores,
} = require("../utils.js");

const imports = `
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";
`;



const createComponents = (dir) => {
  execSync(
    paths.getSvgr +
      "  --ext tsx --template " +
      paths.getRelativeTemplate +
      "  --no-svgo --no-dimensions -d " +
      dir +
      " " +
      dir
  );
};



const createPropertyControls = (layer) => {
  if (!layer.layers.length) {
    return `{}`;
  }
  let propControls = `{
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }`;
  layer.layers.forEach(childLayer => {
    const name = replaceWhitespacesWithUnderscores(childLayer.name);
    propControls += `, ${name}:
        {
          title: "${name}",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }`;
  });

  propControls += `}`;
  return propControls;
};



const createWrapperComponents = (layers, dir, isArtboard) => {
  // write streams, transform streams
  if (!layers.length) {
    return;
  }

  dir = replaceWhitespacesWithUnderscores(dir);

  layers.forEach(layer => {
    const layerName = replaceWhitespacesWithUnderscores(layer.name);

    if (layer.layers.length) {
      let content = imports;
      layer.layers.forEach(childLayer => {
        const childLayerName = replaceWhitespacesWithUnderscores(
          childLayer.name
        );
        if (childLayer.layers.length) {
          content += `
                import { ${createCamelCase(
                  "Wrapper",
                  childLayer.name
                )} } from "./${replaceWhitespacesWithUnderscores(
            layerName
          )}/${createCamelCase("Wrapper", childLayerName)}";
                `;
        } else {
          content += `
                import {${createCamelCase(
                  "Svg",
                  childLayer.name
                )} } from "./${layerName}/${childLayerName}";
                `;
        }
      });
      if (isArtboard) {
        content += `
          export function ${createCamelCase("Wrapper", layerName)}(props) {
            return (
                <div className="content" style={${createStyle(
                  {},
                  0,
                  0,
                  layer.relative.width,
                  layer.relative.height
                )}}>
          `;
      } else {
        content += `
          export function ${createCamelCase("Wrapper", layerName)}(props) {
            return (
                <div className="content" style={${createStyle(
                  {},
                  layer.relative.x,
                  layer.relative.y,
                  layer.relative.width,
                  layer.relative.height
                )}}>
          `;
      }
      layer.layers.forEach(layer => {
        const layerName = replaceWhitespacesWithUnderscores(layer.name);
        if (layer.layers.length) {
          content += `
                {props.${layerName} && <${createCamelCase(
            "Wrapper",
            layerName
          )} style={${createStyle(
            {},
            layer.relative.x,
            layer.relative.y,
            layer.relative.width,
            layer.relative.height
          )}} />}
                `;
        } else {
          content += `
          {props.${layer.name} && <${createCamelCase(
            "Svg",
            layer.name
          )} style={${createStyle(
            {},
            layer.relative.x,
            layer.relative.y,
            layer.relative.width,
            layer.relative.height
          )}} />
          }`;
        }
      });

      content += `
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            `;

      content += `
              addPropertyControls(${createCamelCase(
                "Wrapper",
                layer.name
              )}, ${createPropertyControls(layer)})
              `;
      fs.writeFileSync(
        path.resolve(dir, createCamelCase("Wrapper", layer.name) + ".tsx"),
        content
      );
    }
    createWrapperComponents(
      layer.layers,
      path.resolve(dir, layer.name),
      false
    );
  });
};

exports.createComponents = createComponents;
exports.createPropertyControls = createPropertyControls;
exports.createWrapperComponents = createWrapperComponents;
exports.imports = imports;
