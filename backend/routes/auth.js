const express = require("express");
const router = express.Router();

const UserCtrl = require("../controllers/usersctrl");

router.post("/login", UserCtrl.loginUser);
router.post("/register", UserCtrl.registerUser);

module.exports = router;
