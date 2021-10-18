const http = require("http");

const PORT = process.argv[2];

function getTimeObject(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function getUnixTime(time) {
  return {
    unixtime: time.getTime(),
  };
}

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    const url = new URL("https://" + request.url);
    const time = new Date(url.searchParams.get("iso"));
    let endpoint;

    if (url.pathname === "/parsetime") {
      endpoint = getTimeObject(time);
    }
    if (url.pathname === "/unixtime") {
      endpoint = getUnixTime(time);
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(endpoint));
  }
});

server.listen(PORT);
