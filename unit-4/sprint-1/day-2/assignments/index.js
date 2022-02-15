const express=require('express');
//console.log("express",express);

const app=express();


app.get("",(req,res)=>{

    return res.send("Hello");
});

app.get("/home",(req,res)=>{

    return res.send([
{
    "name":"manali",
    "author":"shinchen"
},
{
    "name":"manali",
    "author":"shinchen"
}
    ]);
});


app.listen(2346,function(){

    
    
console.log("2345 port")




    
    
    
    
    
})