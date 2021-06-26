const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    }catch(err){
        console.log(err);
        const error = new HttpError("Signup failed", 500);
        return next(error);
    }

    // Token creation
    let token;
    try{
        token = jwt.sign({userId: existingUser.id, email: existingUser.email}, "userSecretKey", {expiresIn: "1h"});
    }catch(err){
        const error = new HttpError("Login Failed, Please try again later", 500);
        return next(error);
    }

    return res.json({
        userId: createUser.id,
        email: createUser.email,
        name: createUser.name,
        token: token
    });
}

const userLogin = async (req, res, next) => {
    const {email, password} = req.body;

    // Check for existing user
    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
    }catch(err){
        const error = new HttpError("Login Failed, Please try again later", 500);
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError("Invalid Credentials, Please try again later", 403);
        return next(error);
    }

    // Check for valid password
    let isValidPassword = false;
    try{
        // return true when value matches
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    }catch(err){
        const error = new HttpError("Invalid Credentials, Please try again later", 403);
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError("Invalid Credentials, Please try again later", 403);
        return next(error);
    }

    // Token creation
    let token;
    try{
        token = jwt.sign({userId: existingUser.id, email: existingUser.email}, "userSecretKey", {expiresIn: "1h"});
    }catch(err){
        const error = new HttpError("Login Failed, Please try again later", 500);
        return next(error);
    }

    res.status(200).json({
        name: existingUser.name,
        email: existingUser.email,
        token: token
    });
}

const userGetInfo = (req, res, next) => {
    console.log(req.query);
    console.log(req.params);

    res.json({User: {Name: "AMK", Age: "21"}});
}

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;