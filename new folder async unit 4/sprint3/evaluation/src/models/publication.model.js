const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema(
    {
        name:{type:String, required:true}, 
        bookId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"book",
            required:true,
        },
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

module.exports = new mongoose.model("publication", publicationSchema);