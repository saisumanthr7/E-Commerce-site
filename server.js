const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
// const PORT = (process.env.PORT || 4000);
 const PORT = 4000;
dbConnect();

const app = express();

app.use = ("/", (req, res)=>{
    res.send("hello there");
})


app.listen(PORT, ()=> {
    console.log(`server is running at PORT ${PORT}`);
})