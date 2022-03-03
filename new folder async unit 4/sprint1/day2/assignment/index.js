const express=require('express')

const app=express();



app.get("",(req,res)=>{

    return res.send ("Hello");
});






app.listen(2345,function(){


console.log("listening");

})

