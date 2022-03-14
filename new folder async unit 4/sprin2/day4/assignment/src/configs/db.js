let mongoose = require("mongoose");
let connect = ()=>{
    return mongoose.connect("mongodb+srv://mana:mana_123@cluster0.duupc.mongodb.net/fw1234")
}
module.exports = connect;