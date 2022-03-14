const express= require("express");

const User= require("../models/user.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(User).post);//change

router.get("", crudController(User).getAll);//change

router.get("/:id", crudController(User).getOne);//change

router.patch("/:id", crudController(User).updateOne);//change

router.delete("/:id", crudController(User).deleteOne)//change

module.exports = router