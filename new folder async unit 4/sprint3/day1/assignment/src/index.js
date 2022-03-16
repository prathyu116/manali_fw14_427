const express = require("express");

const connect = require("./configs/db");



const userController = require("./controllers/user.controller");

const app = express();

app.use("/users", userController);

app.use(express.json())

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345"); 

  } catch (err) {
    console.error(err.message);
  }
//  console.log("listening on port 2345");
})