const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        likes:{type:Number, default:0},
        coverImage:{type:Number, default:1},
        content:{type:String, required:true},
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

module.exports = new mongoose.model("book", bookSchema );