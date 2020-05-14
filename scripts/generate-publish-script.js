#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");
const should = require("should");

function generateScript() {
  return new Promise((resolve, reject) => {
    const packages = [
      "enebular-node-red-util",
      "enebular-node-red-runtime",
      "enebular-node-red-registry",
      "enebular-node-red-nodes",
      "enebular-node-red-editor-client",
      "enebular-node-red-editor-api",
      "enebular-node-red",
    ];
    const rootPackage = require(path.join(__dirname, "..", "package.json"));
    const version = rootPackage.version;

    const tagArg = /-/.test(version) ? "--tag next" : "";

    const lines = [];

    packages.forEach((name) => {
      lines.push(`npm publish ${name}-${version}.tgz ${tagArg}\n`);
    });
    resolve(lines.join(""));
  });
}

if (require.main === module) {
  generateScript().then((output) => {
    console.log(output);
  });
} else {
  module.exports = generateScript;
}
