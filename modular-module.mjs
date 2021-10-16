import fs from "fs";
import path from "path";

function myModule(route, extension, callback) {
  fs.readdir(route, (err, data) => {
    if (err) return callback(err, null);
    let lista = data.filter((e) => path.extname(e)===`.${extension}`);
    callback(null, lista);
  });
}

export default myModule;
