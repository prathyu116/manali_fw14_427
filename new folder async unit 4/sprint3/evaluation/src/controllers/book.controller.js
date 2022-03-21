const express = require("express");
//const book = require("../models/book.model");
const book=require("../models/book.model");
const upload = require("../middlewares/upload");
const authenticate = require("../middlewares/authenticate")
const router = express.Router();


router.get("",async(req, res)=>{
    try{
        const page = req.query.page || 1
        const book = await Post.find().skip((page-1)*10).limit(10).lean().exec();
        res.send(post);
    }
    catch(e){
        res.send(e.message);
    }
});
router.post("", upload.single("image"),async(req, res)=>{
    try{
        if(req.file){
            req.body.image=req.file.path;
        }
        const book = await Post.create(req.body)
        res.send(post);
    }
    catch(e){
        res.send(e.message);
    }
});

router.patch("/:id",authenticate(), upload.single("image"),async(req, res)=>{
    try{
        if(req.file){
            req.body.image=req.file.path;
        }
        
        var post = await Post.findById(req.params.id).lean().exec();

        if (post.userId.toString()!==req.user._id){

            res.send("You are not authorized to edit this post");
        }
        post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(post);
    }
    catch(e){
        res.send(e.message);
    }
});

router.delete("/:id",authenticate(),async(req, res)=>{
    try{
        if(req.file){
            req.body.image=req.file.path;
        }
        
        var post = await Post.findById(req.params.id).lean().exec();

        if (post.userId.toString()!==req.user._id){

            res.send("You are not authorized to delete this post");
        }
        post = await Post.findByIdAndDelete(req.params.id).lean().exec();
        res.send(post);
    }
    catch(e){
        res.send(e.message);
    }
});

module.exports = router;