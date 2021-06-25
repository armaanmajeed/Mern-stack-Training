const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require("../models/user");
const HttpError = require("../utils/http-error");

const userSignup = async (req, res, next) => {
    // console.log(req.body);

    const {name, age, email, password} = req.body;

    // Existing User
    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
    }catch(err){
        console.log(err);
        const error = new HttpError("Signup failed", 500);
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError("Email already in use", 422);
        return next(error);
    }

    // Encrypt Password
    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash(password,7);
    }catch(err) {
        console.log(err);
        const error = new HttpError("Password Encryption failed", 500);
        return next(error);
    }

    // User Create
    const createUser = new User({
        name: name,
        password: hashedPassword,
        email: email,
        age: age || 0
    });

    try{
        await createUser.save();
        res.json({Message: "User Signed Up!"});
    }catch(err){
        console.log(err);
        const error = new HttpError("Signup failed", 500);
        return next(error);
    }
}

const userLogin = (req, res, next) => {
    console.log(req.body);

    res.json({Message: "User Logged In!"});
}

const userGetInfo = (req, res, next) => {
    console.log(req.query);
    console.log(req.params);

    res.json({User: {Name: "AMK", Age: "21"}});
}

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;