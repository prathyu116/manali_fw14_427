const express= require("express");

const mongoose = require("mongoose")



const app= express();

app.use(express.json())

const connect=()=>{

    return mongoose.connect("mongodb+srv://mana:mana_123@cluster0.duupc.mongodb.net/fw1234?retryWrites=true&w=majority")
};

//section schema   only name

const sectionSchema= new mongoose.Schema({

    name:{type: String , required: true},

},{
    versionKey:false,
    timestamps:true,
});

let Section 
try{
Section = mongoose.model("section", sectionSchema)

}catch(err){
         console.log(err.message)
}


//books schema


const bookSchema= new mongoose.Schema({
    name: {type: String, required:true},
    body:{type: String, required:true},
    section_id:{type:mongoose.Schema.Types.ObjectId, ref:"section", required:true},
    author_id:[{type:mongoose.Schema.Types.ObjectId, ref:"author", required:true}]
},{
    versionKey:false,
    timestamps:true,
});

const Book= mongoose.model("books", bookSchema)




//author schema



const authorSchema= new mongoose.Schema({
    first_name:{type: String, required:true},
    last_name:{type: String, required:true},
    
},{
    versionKey:false,
    timestamps:true,
})

const Author= mongoose.model("author", bookSchema)



// work with user collection ;

// GET => get/users

// POST => post/users

// GET SINGLE ITEM => get/users/:id

// UPDATE SINGLE ITEM => patch/users/:id

// DELETE SINGLE ITEM => delete/user/:id


//---------------------section crud-----------------------------------

app.get("/sections", async  (req,res)=>{
    const section = await Section.find().lean().exec();//capital
 
     return res.send(section);
 
     res.send("hello")
 
 });

app.post("/sections", async (req,res) =>{
    try {
        const section= await Section.create(req.body); 

         return res.status(201).send (section)

    } catch (err) {
        return res.status(500).send(err.message)
    }
});

app.get("/sections/:id", async(req,res)=>{
    try {
        const section= await Section.findById(req.params.id).lean().exec();
        return res.send(section);

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.patch("/sections/:id", async(req,res)=>{
    try {
        const section = await Section.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.status(201).send(section)
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

app.delete("/sections/:id", async(req,res)=>{
    try {
        // console.log(req.params)
        // res.send("hello")
        const section= await Section.findByIdAndDelete(req.params.id).lean().exec();
      return  res.send(section)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//---------------------book crud-----------------------------------

app.get("/books", async  (req,res)=>{
    try {
        const book = await Book.find().populate({path:"section_id", select:["name"]}).lean().exec();
 
        return res.send(book);
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
    
 
 });

app.post("/books", async (req,res) =>{
    try {
        const book= await Book.create(req.body); 

         return res.status(201).send (book)

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/books/:id", async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id)
        .populate([
        {path:"section_id", select:["name"]},
        {path:"author_id", select:["first_name","last_name"]}])
        .lean().exec();
        return res.send(book);

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.patch("/books/:id", async(req,res)=>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.status(201).send(book)
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

app.delete("/books/:id", async(req,res)=>{
    try {
      
        const book= await Book.findByIdAndDelete(req.params.id).lean().exec();
      return  res.send(book)
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

//---------------------author crud-----------------------------------

app.get("/authors", async  (req,res)=>{
    try {
        const author = await Author.find().lean().exec();
 
        return res.send(author);
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
    
 
 });

app.post("/authors", async (req,res) =>{
    try {
        const   author   = await Author.create(req.body); 

         return res.status(201).send (author )

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/authors/:id", async(req,res)=>{
    try {
        const author  = await Author.findById(req.params.id).lean().exec();
        return res.send(author);

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.patch("/authors/:id", async(req,res)=>{
    try {
        const author  = await Author.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.status(201).send(author)
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

app.delete("/authors/:id", async(req,res)=>{
    try {
      
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
      return  res.send(author)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


//server

app.listen(2345, async function (){
    try {
        await connect();
        console.log("liseing on the port 2345")
        
    } catch (err) {
        console.log("err: ", err.message)
    }
})



