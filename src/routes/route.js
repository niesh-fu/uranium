const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController.js")

router.get("/test-me", function (req, res) {
    res.send("my first ever api!")
})

router.post("/createUser", UserController.createUser) // handler



router.get("/getUserData", UserController.getUsersData)


module.exports = router;