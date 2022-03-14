const express= require("express");

const savingaccount= require("../models/savingaccount");//change

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(savingaccount).post);//change

router.get("", crudController(savingaccount).getAll);//change

router.get("/:id", crudController(savingaccount).getOne);//change

router.patch("/:id", crudController(savingaccount).updateOne);//change

router.delete("/:id", crudController(savingaccount).deleteOne)//change

module.exports = router