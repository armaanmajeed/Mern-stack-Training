const express = require('express');

const router = express.Router();
const userController = require("../controllers/user-controller");

router.post('/signup', userController.userSignup);
router.post('/login', userController.userLogin);
router.get('/getuser', userController.userGetUser);
router.post('/postblog', userController.userPostBlog);
router.get('/getblog', userController.userGetBlog);

module.exports = router;