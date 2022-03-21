const express = require("express");
const Comment = require("../models/comment.model");

const router = express.Router();


router.post("",async(req, res)=>{
    try{
        
        const comment = await Comment.create(req.body)
        res.send(comment);
    }
    catch(e){
        res.send(e.message);
    }
});

module.exports = router;