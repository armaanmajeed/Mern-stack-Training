const express = require('express');
const userController = require("../controllers/user-controller");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);

router.use(checkAuth);

router.get("/getInfo", userController.userInfo);

module.exports = router;