const fs = require("fs-extra");



exports.createDir = path => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};



exports.removeDir = path => {
  if (fs.existsSync(path)) {
    fs.removeSync(path);
  }
};



exports.createCamelCase = (prefix, suffix) => {
  prefix = this.replaceWhitespacesWithUnderscores(prefix);
  suffix = this.replaceWhitespacesWithUnderscores(suffix);
  return prefix + suffix.charAt(0).toUpperCase() + suffix.substring(1);
};



exports.createStyle = (style, x, y, width, height) => {
  return JSON.stringify({
    ...style,
    position: "absolute",
    left: x + "px",
    top: y + "px",
    width: width + "px",
    height: height + "px"
  });
};



exports.writeJsonFile = (filePath, content) => {
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
};



exports.replaceWhitespacesWithUnderscores = text => {
  return text.replace(/ /g, "_");
};