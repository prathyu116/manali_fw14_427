const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true,  },
    balance: { type: Number, required: true,  },
    createdAT: { type: String, required: true,  },
    updatedAt: { type: String, required: true, }
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("savingAccount",savingAccountSchema ); 