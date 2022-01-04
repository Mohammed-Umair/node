const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("this is default route");
});
app.get("/app", (req, res) => {
  //(get api)
  res.send("this is app route");
});
app.post("/post", (req, res) => {
  // (post api)
  const data = req.body.map((item) => {
    `${item.city},${item.state},${item.country}`;
  });

  res.json(data);
});
app.listen(2222, () => {
  console.log("this is my Server on port.no-2222");
});
