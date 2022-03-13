const mongoose = require("mongoose");

const userScheema = new mongoose.Schema({
    "id": { required: true, type: Number, unique: true },
    "first_name": { required: true, type: String },
    "last_name": { required: true, type: String },
    "email": { required: true, type: String },
    
}, {
    versionKey: false,
    timestamps: true
});
const User = mongoose.model("user", userScheema);
module.exports = User;