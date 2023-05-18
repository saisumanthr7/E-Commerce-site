const express = require("express");
const { createNewUser, loginUserControl } = require("../controller/userControl");
const router = express.Router();

router.post("/sign-up", createNewUser);
router.post("/login", loginUserControl);



module.exports = router;