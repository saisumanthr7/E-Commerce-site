const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const validateMongoDBID = require("../utils/validateMongoDBID");


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
    validateMongoDBID(id);
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
    const {_id} = req.user;
    validateMongoDBID(id);
    try{
        const findAndUpdateUser = await User.findByIdAndUpdate(
            _id,
            {
                firstName: req.body.firstName,
       			lastName: req.body.lastName,
        		email: req.body.email,
        		mobile: req.body.mobile,
            },
            {
                new: true,
            }

        );
        res.json(findAndUpdateUser);
    }catch(error){
        throw new Error(error);
    }

});

//Delete a user from database
const deleteUser = expressAsyncHandler(async(req, res)=>{
    const {id} = req.params;
    validateMongoDBID(id);
    try{
        const deleteAUser = await User.findByIdAndDelete(id);
        res.json(deleteAUser);
        
    }catch(error){
        throw new Error(error);
    }
    getAllUsers();
})

module.exports = {createNewUser, loginUserControl, getAllUsers, getAUser, updateUser, deleteUser};