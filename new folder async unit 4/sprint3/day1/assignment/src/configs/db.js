const mongoose=require("mongoose")


module.exports=()=>{
return mongoose.connect("mongodb+srv://mana:mana_123@cluster0.duupc.mongodb.net/fw1234")

}