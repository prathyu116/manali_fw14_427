const express= require("express");

const mongoose = require("mongoose");

const app= express();

app.use(express.json());

const connect =require("./configs/db");

//--------------------------------------------------------

const userController = require("./controllers/user.controller");//change
const branchDetailController = require("./controllers/branchdetail");//change
const savingaccountController = require("./controllers/savingaccount");//change
const fixedaccountController = require("./controllers/fixedaccount");//change
const masteraccountController=require("./controllers/Masteraccount")





app.use("/users", userController);//change
app.use("/branchDetail",branchDetailController);
app.use("/savingaccount",savingaccountController);
app.use("/masteraccount",masteraccountController);
app.use("/fixedaccount",fixedaccountController);


app.listen(2345,async function (){
    try {
        await connect();

        console.log("listening on port 2345")
    } catch (err) {
        console.log("err",err.message)
    }
})