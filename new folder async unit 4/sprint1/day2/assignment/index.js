const express=require('express')

const app=express();

app.use(express.json());

app.get("",(req,res)=>{

    return res.send ("Hello");
});
// app.post("/users",async(req,res)=>{
// try{
// const book=await Book.create(req.body)
// return res.send(book)



// }catch(err){
// return res.send(err.message)

// }



// })


app.get("/users",async(req,res)=>{
try{

return res.send([{name:"manali",price:"500"},{name:"manali678",price:"500"},{name:"mnali",price:"50"},{name:"manali2",price:"509"}])



}catch(err){
return res.send(err.message)

}



})






app.listen(2345,function(){


console.log("listening");

})

