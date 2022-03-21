const express = require("express");
const publication = require("../models/publication.model");

const router = express.Router();


router.post("",async(req, res)=>{
    try{
        
        const publication = await Comment.create(req.body)
        res.send(publication);
    }
    catch(e){
        res.send(e.message);
    }
});

module.exports = router;