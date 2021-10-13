const fs = require("fs");
const route = process.argv[2];
const extension = process.argv[3];

fs.readdir(route, (err, data) => {
  if (err) return console.log(err);
  data.map((e)=> {if(e.includes(`.${extension}`)){
      console.log(e)
  }})
});
