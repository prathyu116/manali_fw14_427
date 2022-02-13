const express= require("express");

const Evaluation= require("../models/evaluation.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(Evaluation).post);

router.get("", async(req,res)=>{
    try {     
     const evaluation= await Evaluation.find().populate([
         { path: "batch_id" , select:["batch_name"] },
         { path: "instructor",select:["first_name", "last_name"]}
      ] )
      .lean().exec()
           return  res.send(evaluation)

    } catch (err) {
        return res.status(500).send(err.message)
    }
});


module.exports = router