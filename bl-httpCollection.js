const http = require("http");
const BufferList = require("bl");
const { Buffer } = require("safe-buffer");
const url = process.argv[2];

let bl = new BufferList();

http.get(url, (res) => {
  res.on("data", (chunk) => bl.append(new Buffer(chunk)));
  res.on("end", () => {
       console.log(bl.length);
       console.log(bl.toString())
  });
});
