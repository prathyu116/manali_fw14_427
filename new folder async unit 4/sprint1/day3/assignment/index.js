const express= require("express");

const app = express();

app.get("/books",logger1, (req, res) => {

  return res.send("All books");
});

app.get("/book/:name",logger2, (req, res) => {

   req.name = req.params.name;
   res.send({bookName: req.name});

});

function logger1(req, res, next) {
  console.log ( "Fetching all books")
  next();
 
}

function logger2(req, res, next) {
   
  console.log(req.params)

    next();
  
}

app.listen(2001, function () {
  console.log("listening on port 2001");
})