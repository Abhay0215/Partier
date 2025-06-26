const mongoose = require("mongoose");

const userForm = new mongoose.Schema({
    name: {type: String, required: true},
    email:{type: String, required: true}
});

module.exports = mongoose.model("inviteForm", userForm );