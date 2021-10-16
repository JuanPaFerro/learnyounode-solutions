import myModule from "./modular-module.mjs";
const route = process.argv[2];
const extension = process.argv[3];

myModule(route, extension, (err, resp) => {
  if (err) return console.log(err);
  resp.forEach((e) => {
    console.log(e);
  });
});
