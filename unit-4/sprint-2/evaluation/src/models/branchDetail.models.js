const mongoose = require("mongoose");

const branchDetailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, },
    address: { type: String, required: true, },
    IFSC: { type: String, required: true, },
    MICR: { type: Number, required: true,  },
    createdAT: { type: String, required: true,  },
    updatedAt: { type: String, required: true, }
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("branchDetail", branchDetailSchema); 