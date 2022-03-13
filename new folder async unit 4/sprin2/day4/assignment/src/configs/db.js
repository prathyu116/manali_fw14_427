let mongoose = require("mongoose");
let connect = ()=>{
    return mongoose.connect("mongodb+srv://Divya-Pidugu:pidugu_123@cluster0.9tbkn.mongodb.net/usermailDatabase?retryWrites=true&w=majority")
}
module.exports = connect;