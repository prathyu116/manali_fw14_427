const express = require("express");

const connect = require("./configs/db");

const app = express();

const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller");

const {login,register}=require("./controllers/auth.controller")

app.use(express.json());

app.post("/register",register);
app.post("/login",login)

app.listen(2345, async () => {
    try {
      await connect();
    } catch (err) {
      console.error(err.message);
    }
    console.log("listening on port 2345");
  });