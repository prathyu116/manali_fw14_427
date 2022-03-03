const express=require("express");


const app = express();


app.get("/users", function (req, res) {
    res.send({ name: "Dhaval" });
  });
  
  app.get("/students", function (req, res) {
    res.send({ student: "Abc" });
  });

//   app.get(("/manali", async function(req,res){
//     await  res.send([{name:manali,price:300}])
//   })

  app.listen(4000, async (req,res) => {
    console.log("listening on port 4000");
  });