const express = require("express");
const { createNewUser, loginUserControl, getAllUsers, getAUser, deleteUser, updateUser } = require("../controller/userControl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/sign-up", createNewUser);
router.post("/login", loginUserControl);
router.get("/getUsers", getAllUsers);
router.get("/:id", getAUser);
router.put("/update-user", authMiddleware, updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", authMiddleware, isAdmin);



module.exports = router;