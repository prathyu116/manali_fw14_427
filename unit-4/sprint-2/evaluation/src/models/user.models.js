const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true },
      middleName: { type: String, required: false},
      lastName: [{ type: String, required: true }],
      age: [{ type: Number, required: true }],
      email: [{ type: String, required: true }],
      address: [{ type: String, required: true }],
      gender: [{ type: String, required: false,default:"Female" }],
      type: [{ type: Number, required: false,default:"costomer" }],
     

    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  module.exports = mongoose.model("user", userSchema);