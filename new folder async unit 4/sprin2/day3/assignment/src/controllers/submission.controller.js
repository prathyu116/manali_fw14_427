const express= require("express");

const Submission= require("../models/submission.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(Submission).post);

router.get("", async(req,res)=>{
    try {
         let submission;
        let filter= {$and:[{}], $or:[{}]};
      if(req.query.marks){
           filter.marks= {$gt: req.query.marks}
      }
        submission= await Submission.find(filter).populate([{
            path: "evaluation_id" ,
            select:  [ "date_of_evaluation"],
            populate: [ { path: "batch_id" , select:["batch_name"] },
            { path: "instructor",select:["first_name", "last_name"]}
               
               ],
               },{path: "student_id" , select:["rollId"]}])
    
           .lean().exec()

          
           return  res.send(submission)

    } catch (err) {
        return res.status(500).send(err.message)
    }
});


module.exports = router