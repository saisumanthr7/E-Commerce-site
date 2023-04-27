const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler")

const createNewUser = expressAsyncHandler(async(req, res) =>{
    const email = req.body.email;
    const userExist = await User.findOne({email});
        if(!userExist){
            const newUser = User.create(req.body);
            res.json(newUser);
            // res.json("User is successfully created!");
        }else{
            throw new Error("User already exists!")
        }
   
}) 

module.exports = {createNewUser}