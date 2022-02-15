//require("dotenv").config()
const User=require("../models/user.models")
//const jwt=require("../.env")
const newToken=(user)=>{
    console.log(process.env)
return jwt.sign({user},gyuguhkj)
}

const register=async (req,res)=>{
try{

let user= await  User.findOne({email:req.body.email}).lean().exec();

if(user)
return res.status(400).send({message:"please try another mail"})

const token=newToken(user)


user=await User.create(req.body)

res.send(user)
}catch(err){
res.status(500).send(err.message)
}
}

const login=async (req,res)=>{
    try{

        let user= await  User.findOne({email:req.body.email});

        if(!user)
        
return res.status(400).send({message:"please try another mail or password"})
const token=newToken(user)


user=await User.create(req.body)

res.send({user,token})
    }catch(err){
        res.status(500).send(err.message)  
    }
    }


    module.exports={register,login};