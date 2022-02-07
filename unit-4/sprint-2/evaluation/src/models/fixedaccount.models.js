const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique:true },
    balance: { type: Number, required: true,  },
    intrestRate: { type: Number, required: true,  },
    StartDate: { type: Number, required: true,  },
    maturityDate: { type: Number, required: true,  },
   
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("fixedAccountSchema",fixedAccountSchema); 