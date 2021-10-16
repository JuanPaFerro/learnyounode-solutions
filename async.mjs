import http from "http";
import bl from "bl"
const urls = [process.argv[2], process.argv[3], process.argv[4]];

let responses = [];
let counter = 0;

let request = (i) => {
  http.get(urls[i], (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) {
          return console.log(err);
        }
        data = data.toString();
        responses[i] = data;
        counter++;

        if (counter === 3) {
          for (let j = 0; j < responses.length; j++) {
            console.log(responses[j]);
          }
        }
      })
    );
  });
};

for (let i = 0; i < urls.length; i++) {
  request(i);
}
