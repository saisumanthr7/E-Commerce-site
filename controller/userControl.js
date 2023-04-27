const User = require("../models/userModel");

const createNewUser = async(req, res) =>{
    const email = req.body.email;
    const userExist = await User.findOne({email});
    try{
        if(!userExist){
            const newUser = await User.create(req.body);
            res.json(newUser);
            res.json("User is successfully created!");
        }else{
            res.json({
                msg:"User already exists!",
                Success:false
            });
        }
    }catch(err){
        console.log("Error", err)
    }
}

module.exports = {createNewUser}