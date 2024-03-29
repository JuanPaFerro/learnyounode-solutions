/*THE FIRST ONE WAS MY FIRST SOLUTION, AND IT PASSED ALL THE TESTS BUT THE OFFICIAL SOLUTION USED ".pipe()". SO I TRIED
TO CODE IT THAT WAY AND I SUCCEED */

/*
 import http from "http";
 import bl as BufferList from "bl";
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
*/

import http from "http";
import bl from "bl";
const url = process.argv[2];

http.get(url, (res) => {
  res.pipe(
    bl((err, data) => {
      if (err) {
        return console.log(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
