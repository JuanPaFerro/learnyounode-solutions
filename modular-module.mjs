import fs from "fs";

function myModule(route, extension, callback) {
  fs.readdir(route, (err, data) => {
    if (err) return callback(err, null);
    let lista = data.filter((e) => e.includes(`.${extension}`));
    callback(null, lista);
  });
}

export default myModule;
