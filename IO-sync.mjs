import fs from "fs";
const route = process.argv[2];

console.log(fs.readFileSync(route).toString().split("\n").length - 1);
