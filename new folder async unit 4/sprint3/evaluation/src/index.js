const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const commentController = require("./controllers/comment.controller.js")
const {body} = require("express-validator");

const app = express();
app.use(express.json());

app.use("/post", postController);
app.use("/comment", commentController);


app.use("/user",
body('firstName').isLength({min:3, max:30}),
body("lastName").isLength({min:3, max:30}),
body("age").custom((value)=>{
    if(value<1 || value > 15){
        throw new Error("Age is not accepted");
    }
    return true;
}),
body("profileImages").custom((value)=>{
    if(value.length==0){
        throw new Error("Atleast one profile image is required");
    }
    return true;
}),
userController,
)








app.listen(4444, ()=>{
    connect();
    console.log("Listening at 4444");
})