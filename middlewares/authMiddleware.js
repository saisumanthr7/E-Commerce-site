//In this middle ware we will verify the jwt token and also check if the user is admin.

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async(req, res, next) => {
    let token;
    if(req?.headers?.authorization.startsWith('TokenBearer')){
        token = req.headers.authorization.split(" ")[1];
        try{
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                console.log(decoded);
            }

        }catch(error){
            throw new Error("Please login again, token expired!")
        }

    }else {
        throw new Error("There is no token attached with the header!")
    }
})

module.exports = authMiddleware;