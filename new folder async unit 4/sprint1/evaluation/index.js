const express = require("express");

const app = express();

app.use(logger);

app.get("/books",  (req, res) => {
    return res.send({ route: "/books", role: req.role });
  });


  
  app.get("/libraries", logger,checkPermission("library"),(req, res) => {
      return res.send({ route: "/libraries", role: req.role,Permission:req.responce });
    });
    
  app.get("/authors",logger,checkPermission("authour"), (req, res) => {
      return res.send({ route: "/authors", role: req.role,Permission:req.responce });
    });

function logger(req,res,next){
    if(req.path==="/books")
    {
        req.role="books"
    }
    else if(req.path==="/libraries"){
        req.role="libraries"
    }
    else if(req.path=="/authors"){
req.path="authors";
    }
}

    function checkPermission(permission){
      return function logger(req,res,next){
          if(permission=="library")
          {
              req.permission=true

          }
         else if(permission=="author")
          {
              req.permission=true

          }
      }
    }


app.listen(5000, () => {
    console.log("listening on port 5000");
  });



