const express = require("express");


const User = require("../models/user.models.js");

const {body,validationResult}=require('express-validator')

const router = express.Router();


router.post("",

body("first_name").notEmpty().withMessage("first name is not valid"),

body("last_name").notEmpty(),

body("email").notEmpty().isEmail().custom(async(value)=>{
    const user=await User.findOne({email:value});
    if(user){
        throw new Error("Email is already exist")
    }
    return true;
}),

body("pincode").notEmpty().isInt().isLength(6),

body("age").notEmpty().isInt({min:1,max:100}),


body("gender").custom
(async(value)=>{

    const user=await User.findOne({gender:value})
    if(value=="Male"||value=="Female"||value=="Other"){
        return true;
    }
    throw new Error("Enter fixed value")
}),



async( req, res )=>{
        
  try {
      const errors = validationResult(req);
      if ( !errors.isEmpty() ) {

          let newErrors;
          newErrors = errors.array().map((err)=>{
              return {key :err.param , message: err.msg}
          })
        return res.status(400).send({errors:newErrors});
      }
        
  return res.send("users")
     
  } catch (err) {
      return res.status(500).send(err.message)
  }
});

module.exports = router;