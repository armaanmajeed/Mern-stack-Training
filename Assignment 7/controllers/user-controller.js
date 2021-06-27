const mongoose = require('mongoose');

const User = require("../models/user");
const HttpError = require("../utils/http-error");

const userSignup = (req, res, next) => {
    try{
        res.send({
            Message: "User Signed Up"
        });
    }catch(err) {
        const error = new HttpError("User signup failed", 500);
        return next(error);
    }
};

const userLogin = (req, res, next) => {
    try{
        res.send({
            Message: "User Logged In"
        });
    }catch(err) {
        const error = new HttpError("User signup failed", 500);
        return next(error);
    }
};

const userGetUser = (req, res, next) => {
    try{
        res.send({
            Message: "User Info"
        });
    }catch(err) {
        const error = new HttpError("User signup failed", 500);
        return next(error);
    }
};

const userPostBlog = (req, res, next) => {
    try{
        res.send({
            Message: "User Posted Blog"
        });
    }catch(err) {
        const error = new HttpError("User signup failed", 500);
        return next(error);
    }
};

const userGetBlog = (req, res, next) => {
    try{
        res.send({
            Message: "User Blog info"
        });
    }catch(err) {
        const error = new HttpError("User signup failed", 500);
        return next(error);
    }
};

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userGetUser = userGetUser;
exports.userPostBlog = userPostBlog;
exports.userGetBlog = userGetBlog;