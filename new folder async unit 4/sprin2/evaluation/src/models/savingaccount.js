const mongoose = require("mongoose");

const savingaccountSchema= new mongoose.Schema({//change
    name:{type:String, required: true},
    address:{type:String, required: true},
    
    interestRate:{type:Number, required: true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true}

},{
    versionKey:false,
    timestamps:true,
});

module.exports= mongoose.model("savingaccount", savingaccountSchema)//change