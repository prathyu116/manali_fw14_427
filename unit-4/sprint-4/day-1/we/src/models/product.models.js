const mongoose = require("mongoose");
 const bcrypt = require("bcryptjs");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true,  },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema); // user => users

module.exports = Product;