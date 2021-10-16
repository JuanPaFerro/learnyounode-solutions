import fs from "fs";
const route = process.argv[2];

fs.readFile(route, "utf8", (err, data) => {
  err ? console.log(err) : console.log(data.split("\n").length - 1);
});
