const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Yes my first get API working!!!");
});
app.get("/department", (req, res) => {
  res.send("i am in departmnet");
});
app.get("/app", (req, res) => {
  res.send("i am in app");
});
app.listen(3355, () => {
  console.log("My Server Is Working on Port.No-3355");
});
