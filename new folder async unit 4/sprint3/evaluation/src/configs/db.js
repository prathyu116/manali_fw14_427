const mongoose = require("mongoose");

module.exports = async()=>{
    await mongoose.connect("mongodb+srv://mana:mana_123@cluster0.duupc.mongodb.net/fw12345evaluation")
}