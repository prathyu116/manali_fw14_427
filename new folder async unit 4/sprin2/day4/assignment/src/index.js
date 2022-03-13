const express = require("express");
const app = express();
const connect=require("./configs/db")
app.use(express.json());
const userController = require("./controllers/user.controller");
app.use("/users", userController);

app.listen(6789, async () => {
    try {
        await connect();
    console.log("listnening to port 6789");
    }
    catch (e) {
        console.log(e.message);
    }
   
})