const fs = require("fs");

const schemas = require("./index.js");

fs.writeFileSync("./index.json", JSON.stringify(schemas, null, 2));
