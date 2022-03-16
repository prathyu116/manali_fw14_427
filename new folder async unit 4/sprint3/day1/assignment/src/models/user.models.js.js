const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
     // _id => MongoID, id => regular id
    first_name: { type: String, required: true },
     last_name: { type: String, required: true },
    email: { type: String, required: true ,unique:true},
    pincode: { type: Number, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: false, default: "Male" },
    

    
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);