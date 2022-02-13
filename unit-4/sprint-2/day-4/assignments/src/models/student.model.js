const mongoose = require("mongoose");


const studentSchema= new mongoose.Schema({
    rollId: {type:Number, required: true},
    batch_id:{type: mongoose.Schema.Types.ObjectId , ref:"batch", required:true},

},{
    versionKey:false,
    timestamps:true,
});

module.exports= mongoose.model("student", studentSchema)