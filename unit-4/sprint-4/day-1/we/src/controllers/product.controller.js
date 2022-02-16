 const express = require("express");

const Product = require("../models/product.models");

 const authenticate = require("../middleware/authenticate");

const router = express.Router();
const autjorise=require("../middleware/authorise")

router.post("", authenticate,autjorise(["seller","admin"]), async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const product = await Product.create(req.body);

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.patch(":/id", authenticate, async (req, res) => {
  try {
    
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const product= await Product.find().lean().exec();

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;