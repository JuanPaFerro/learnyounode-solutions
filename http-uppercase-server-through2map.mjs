import http from "http";
const PORT = process.argv[2];

const map = require("through2-map");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req
      .pipe(
        map((chunk) => {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  }
});

server.listen(PORT);
