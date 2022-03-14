const mongoose = require("mongoose");

const masteraccountSchema= new mongoose.Schema({//change
    balance:{type:Number, required: true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true}
    

},{
    versionKey:false,
    timestamps:true,
});

module.exports= mongoose.model("masteraccount", masteraccountSchema )//change