const express = require("express");

const masteraccount = require("../models/masterAccount.js");

const crudcontroller = require("./crudcontroller");

const router = express.Router();

router.post("", crudController(User).post);

router.get("", crudController(User).getAll);

router.get("/:id", async (req, res) => {
    try {
      const masteraccount = await masteraccount.findById(req.params.id).lean().exec();
  
      if (masteraccount) {
        return res.send(masteraccount);
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  
  router.patch("/:id", async (req, res) => {
    try {
      const masteraccount = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  
  router.delete("/:id", async (req, res) => {
    try {
      const masteraccount = await masteraccount.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;