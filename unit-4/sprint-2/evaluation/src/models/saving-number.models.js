const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique:true },
    balance: { type: Number, required: true,  },
    intrestrate: { type: Number, required: true,  },
 
 
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("savingAccount",savingAccountSchema ); 