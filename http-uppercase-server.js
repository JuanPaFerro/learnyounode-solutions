const http = require("http");

const PORT = process.argv[2];
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let aux = "";
    req.on("data", (chunk) => {
      aux += chunk.toString().toUpperCase();
    });
    req.on("end", () => {
      res.end(aux);
    });
  }
});

server.listen(PORT);
