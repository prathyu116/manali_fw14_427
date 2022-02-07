const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema(
  {
    
    balance: { type: Number, required: true,  },
   
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("masterAccount",masterAccountSchema ); 