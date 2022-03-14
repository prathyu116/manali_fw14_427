const express= require("express");

const branchDetail= require("../models/branchdetail");//change

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(branchDetail).post);//change

router.get("", crudController(branchDetail).getAll);//change

router.get("/:id", crudController(branchDetail).getOne);//change

router.patch("/:id", crudController(branchDetail).updateOne);//change

router.delete("/:id", crudController(branchDetail).deleteOne)//change

module.exports = router