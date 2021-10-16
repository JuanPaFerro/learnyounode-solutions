import fs from "fs";
import path from "path";

const route = process.argv[2];
const extension = process.argv[3];

fs.readdir(route, (err, data) => {
  if (err) return console.log(err);
  data.map((e) => {
    if (path.extname(e) === `.${extension}`) {
      console.log(e);
    }
  });
});
