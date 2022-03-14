const express= require("express");

const fixedaccount= require("../models/fixedaccount");//change

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(fixedaccount).post);//change

router.get("", crudController(fixedaccount).getAll);//change

router.get("/:id", crudController(fixedaccount).getOne);//change

router.patch("/:id", crudController(fixedaccount).updateOne);//change

router.delete("/:id", crudController(fixedaccount).deleteOne)//change

module.exports = router