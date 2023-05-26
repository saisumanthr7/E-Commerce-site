const express = require("express");
const { createNewUser, loginUserControl, getAllUsers, getAUser, deleteUser, updateUser } = require("../controller/userControl");
const router = express.Router();

router.post("/sign-up", createNewUser);
router.post("/login", loginUserControl);
router.get("/getUsers", getAllUsers);
router.get("/:id", getAUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);



module.exports = router;