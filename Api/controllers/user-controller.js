const HttpError = require("../utils/http-error");

const userSignup = (req, res, next) => {
    console.log(req.body);

    res.json({Message: "User Signed Up!"});
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