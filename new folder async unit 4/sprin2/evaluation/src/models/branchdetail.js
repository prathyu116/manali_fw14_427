const mongoose = require("mongoose");

let branchDetailSchema= new mongoose.Schema({//change
    name:{type:String, required: true},
    address:{type:String, required: true},
    IFSC:{type:String, required: true},
    MICR:{type:Number, required: true},

},{
    versionKey:false,
    timestamps:true,
});

module.exports= mongoose.model("branchDetail", branchDetailSchema)//change