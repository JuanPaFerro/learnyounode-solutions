const net = require("net");

const PORT = process.argv[2];

const server = net.createServer((socket) => {
  let date = new Date();
  let aux = {
    year: date.getFullYear(),
    month: date.getMonth() < 9 ? `0${date.getMonth()}` : date.getMonth() + 1,
    day: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    minutes:
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
  };

  let formDate = `${aux.year}-${aux.month}-${aux.day} ${aux.hours}:${aux.minutes}`;

  socket.end(formDate + "\n");
});
server.listen(PORT);
