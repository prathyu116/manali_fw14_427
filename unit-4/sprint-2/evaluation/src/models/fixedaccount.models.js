const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema(
  {
    balance: { type: Number, required: true,  },
    balance: { type: Number, required: true,  },
    createdAT: { type: String, required: true,  },
    updatedAt: { type: String, required: true, }
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("masterAccount",masterAccountSchema ); 