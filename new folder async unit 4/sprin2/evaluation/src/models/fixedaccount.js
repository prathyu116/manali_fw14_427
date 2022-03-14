const mongoose = require("mongoose");

const fixedaccountSchema= new mongoose.Schema({//change
    account_number:{type:Number, required: true},
    balance:{type:Number, required: true},
    intrestRate:{type:Number, required: true},
    startDate:{type:Number, required: true},
    maturityDate:{type:Number, required: true},

},{
    versionKey:false,
    timestamps:true,
});

module.exports= mongoose.model("fixedaccount", fixedaccountSchema)//change