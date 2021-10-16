import http from "http";
const url = process.argv[2];

http.get(url, (res) => {
  let result = "";
  res.on("data", (chunk) => {
    result += chunk.toString();
  });
  res.on("end", () => {
    console.log(result.length);
    console.log(result);
  });
});
