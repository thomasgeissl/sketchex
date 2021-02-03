const execSync = require("child_process").execSync;
const fs = require("fs-extra");
const path = require("path");
const paths = require("../paths").paths;

const {
  createCamelCase,
  createStyle,
  replaceWhitespacesWithUnderscores
} = require("../utils.js");

const imports = `
import React from "react";
`;

const createComponents = dir => {
  execSync(paths.getSvgr + "  --no-svgo -d " + dir + " " + dir);
};

const createWrapperComponents = (layers, dir, isArtboard) => {};

exports.createComponents = createComponents;
exports.createWrapperComponents = createWrapperComponents;
exports.imports = imports;
