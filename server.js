const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const bodyParser = require("body-parser");
// const PORT = Number(process.env.PORT);
// console.log("port", typeof process.env.PORT);
 const PORT = 3000;
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/user", authRouter)
app.use("/", (req, res)=>{
    res.send("hello there");
})


app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})