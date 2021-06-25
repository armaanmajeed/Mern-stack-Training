const HttpError = require("../utils/http-error");

const adminSignup = (req, res, next) => {
    console.log(req.body);

    res.json({Message: "Admin Signed Up!"});
}

const adminLogin = (req, res, next) => {
    console.log(req.body);

    res.json({Message: "Admin Logged In!"});
}

exports.adminSignup = adminSignup;
exports.adminLogin = adminLogin;