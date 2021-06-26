const jwt = require('jsonwebtoken');

const HttpError = require("../utils/http-error");

module.exports = (req, res, next) => {
    if (req.body === 'OPTIONS') {
        return next();
    }

    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log("Inside check auth");
        if (!token) {
            const error = new HttpError("Token doesn't exist, Please try again later", 500);
            return next(error);
        }
        let decodedToken = jwt.verify(token, "userSecretKey");
        next();
    }catch(err){
        const error = new HttpError("Error occured in middleware, Please try again later", 500);
        return next(error);
    }
}