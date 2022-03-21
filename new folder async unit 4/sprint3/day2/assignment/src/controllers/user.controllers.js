const express = require("express");

const User = require("../models/user.model");

const uploads = require("../middlewares/uploads");

const router = express.Router();


router.get("", async (req, res) => {
    try{
        const user = await User.find().lean().exec();

        return res.status(200).send(users);
    }
    catch(err) {
       return  res.status(500).send(err.message);
    }
})

router.post("", uploads.any("profile_picture"), async (req, res) => {
    try{
        const user = await User.create({
            firstName: req.body.firstName,
            profilePic: req.file.path,
        });

        return res.status(200).send(users);
    }
    catch(err) {
       return  res.status(500).send(err.message);
    }
})

router.post("/multiple", uploads.any("profilePic"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const user = await User.create({
        firstName: req.body.firstName,
        profilePic: filePaths,
      });
  
      return res.status(200).send(users);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = router;