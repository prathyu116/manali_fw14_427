

const express = require("express");

const app = express();

const connect = require("./configs/db");

app.use(express.json());


app.listen(2345, async function () {
    try {
      await connect();
      console.log("listening on port 2345");
    } catch (e) {
      console.error("error is ", e.message);
    }
  });