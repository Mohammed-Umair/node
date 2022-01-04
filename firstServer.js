const http = require("http"); // step (1)      this is old version
http
  .createServer((req, res) => {
    res.write("My Server Working-at PDAC");
    res.end();
  })
  .listen(4040);
