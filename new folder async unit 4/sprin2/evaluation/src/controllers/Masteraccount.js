const express= require("express");

const masteraccount= require("../models/Masteraccount");//change

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(masteraccount).post);//change

router.get("", crudController(masteraccount).getAll);//change

router.get("/:id", crudController(masteraccount).getOne);//change

router.patch("/:id", crudController(masteraccount).updateOne);//change

router.delete("/:id", crudController(masteraccount).deleteOne)//change

module.exports = router