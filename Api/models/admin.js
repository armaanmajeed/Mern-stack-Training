const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 8}
});

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Admin", adminSchema);