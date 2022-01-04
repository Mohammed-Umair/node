const express = require("express");
const cros = require("cors");
const data=require("./movie")
const app = express();

app.use(cros())


app.get("/",(req,res)=>{
    res.send('hi')
})
app.get("/movie",(req,res)=>{
    res.send(data)
})




app.listen(2222);
