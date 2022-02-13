const express= require("express");

const Student= require("../models/student.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(Student).post);

router.get("", async(req,res)=>{
    try {     
     const students= await Student.find().populate({ path: "batch_id" , select:["batch_name"] }).lean().exec()
           return  res.send(students)

    } catch (err) {
        return res.status(500).send(err.message)
    }
});

router.get("/:id", crudController(Student).getOne);

router.patch("/:id", crudController(Student).updateOne);

router.delete("/:id", crudController(Student).deleteOne)

module.exports = router