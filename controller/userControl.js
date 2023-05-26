const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler")


//Create a new User
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
   
});

//User Login
const loginUserControl = expressAsyncHandler(async (req, res) =>{
    const {email, password} = req.body
    // console.log(`email: ${email}, password: ${password}`)
    const findUser = await User.findOne({email});
    if(findUser && await findUser.passwordMatched(password)){
        res.json({
            findUser,
            token: generateToken(findUser?._id)
        })
    }else{
        throw new Error("Invalid Credentials entered!");
    }
});

//Retrieve all Users
const getAllUsers = expressAsyncHandler(async (req, res)=>{
    try{
        const retrieveUsers = await User.find();
        res.json(retrieveUsers);
    }catch(error){
        throw new Error(error);
    }
})

//Retrieve a single user
const getAUser = expressAsyncHandler(async (req, res)=>{
    const {id}  = req.params;
    try{
        // console.log(id);
        const findUser = await User.findById(id);
        // console.log(findUser)
        res.json(findUser);
    }catch(error){
        throw new Error(error);
    }

})

//Update a User

const updateUser = expressAsyncHandler(async (req, res)=>{
    const {id} = req.params;
    try{
        const findUser = await User.findByIdAndUpdate(id);


    }catch(error){
        throw new Error(error);
    }

})

//Delete a user from database
const deleteUser = expressAsyncHandler(async(req, res)=>{
    const {id} = req.params;
    try{
        const deleteUser = await User.findByIdAndDelete(id);
        res.json(deleteUser);
        
    }catch(error){
        throw new Error(error);
    }
    getAllUsers();
})

module.exports = {createNewUser, loginUserControl, getAllUsers, getAUser, updateUser, deleteUser};