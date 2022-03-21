const express = require("express");
const upload = require("../middlewares/upload");
const {validationResult}=require("express-validator");
const router = express.Router();
const User = require("../models/user.model")
const jwt = require("jsonwebtoken");

const newToken = function (user){
    return jwt.sign({user}, "MYSECRETKEY")
}

router.get("", async(req, res)=>{
    try{
        const users = await User.find().lean().exec();
        res.send(users);
    }
    catch(e){
        res.send(e.message);
    }
})

router.post("/login", async(req, res)=>{
    try{
        const user = await User.find({email:req.body.email});
        if(user.length==0){
            res.send("email do not exist")
        }
        else{
            let token = newToken(user);
            res.send({user,token})
        }
    }
    catch(e){
        res.send(e.message)
    }
})

router.post("", upload.array("profileImages", 5), async(req, res)=>{
    try{
        const errors = validationResult(req);

        var array=[]
        req.files.forEach((elem)=>{
            array.push(elem.path);

        })
        req.body.profileImages=array
        console.log(req.body)
        const user = await User.create(req.body);
        const token = newToken(user);
        res.send({user, token})

    }
    catch(e){
        res.send(e.message);
    }
})

module.exports = router;