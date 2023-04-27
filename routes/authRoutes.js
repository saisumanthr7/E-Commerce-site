const express = require("express");
const { createNewUser } = require("../controller/userControl");
const router = express.Router();

router.post("/sign-up", createNewUser);



module.exports = router;