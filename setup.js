const fs = require("fs");

const projectName = process.argv[2];

if (!projectName) {
  console.log("Please provide project name");
  process.exit(1);
}

const packageJson = require("./package.json");

packageJson.name = projectName;

fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

console.log(`Project renamed to ${projectName}`);
