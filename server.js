const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const {notFound, errorHandler} = require("./middlewares/errorHandler");
// const PORT = Number(process.env.PORT);
// console.log("port", typeof process.env.PORT);
 const PORT = 3000;
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/user", authRouter)
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})