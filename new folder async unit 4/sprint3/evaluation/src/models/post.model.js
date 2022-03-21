const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        body:{type:String, required:false},
        likes:{type:Number, default:0},
        image:{type:String, required:false},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }
    },
    {
        versionKey:false,
        timestamps:true
    }

);