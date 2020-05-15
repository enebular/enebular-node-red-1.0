#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");
const should = require("should");

function generateScript() {
  return new Promise((resolve, reject) => {
    const packages = [
      "uhuru-enebular-node-red-util",
      "uhuru-enebular-node-red-runtime",
      "uhuru-enebular-node-red-registry",
      "uhuru-enebular-node-red-nodes",
      "uhuru-enebular-node-red-editor-client",
      "uhuru-enebular-node-red-editor-api",
      "uhuru-enebular-node-red",
    ];
    const rootPackage = require(path.join(__dirname, "..", "package.json"));
    const version = rootPackage.version;

    //    const tagArg = /-/.test(version) ? "--tag test" : "";
    const tagArg = "--tag test";

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
