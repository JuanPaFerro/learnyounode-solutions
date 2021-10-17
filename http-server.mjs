import fs from "fs";
import http from "http";

const PORT = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  //using events (the way I first solved it)
  let aux = "";
  const reader = fs.createReadStream(filePath);

  reader.on("data", (chunk) => (aux += chunk.toString()));
  reader.on("end", () => {
    res.end(aux);
  });

  /*using pipe (recommended) this is the way they propose to do it 
  so i coded it this way too just for practice and to remember this 
  way is better*/
  //fs.createReadStream(filePath).pipe(res)
});

server.listen(PORT);
