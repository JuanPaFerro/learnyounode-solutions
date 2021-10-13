const fs = require("fs");

module.exports = (route, extension, callback) => {
  fs.readdir(route, (err, data) => {
    if (err) return callback(err, null);
    let lista = data.filter((e) => e.includes(`.${extension}`));
    callback(null,lista);
  });
};
