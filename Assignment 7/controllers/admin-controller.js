const mongoose = require('mongoose');

const Admin = require("../models/admin");
const HttpError = require("../utils/http-error");

const adminSignup = (req, res, next) => {
    try{
        res.send({
            Message: "Admin Signed Up"
        });
    }catch(err) {
        const error = new HttpError("Admin signup failed", 500);
        return next(error);
    }
};

const adminLogin = (req, res, next) => {
    try{
        res.send({
            Message: "Admin Logged In"
        });
    }catch(err) {
        const error = new HttpError("Admin signup failed", 500);
        return next(error);
    }
};

exports.adminSignup = adminSignup;
exports.adminLogin = adminLogin;