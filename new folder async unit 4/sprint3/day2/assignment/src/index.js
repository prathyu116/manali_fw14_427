const express = require("express");

const userController = require("./controllers/user.controllers");

const app = express();

app.use(express.json());

app.use("./users", userController);

//module.exports = app;

const connect = require("./configs/db");



app.listen(2890, async function (){

    try{
        await connect();
        console.log("listening on port 2890");
    }
    catch(err) {
        console.log(err.message);
    }
   

});