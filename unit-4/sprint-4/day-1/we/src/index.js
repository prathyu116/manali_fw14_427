const express = require("express");

const connect = require("./configs/db");

const app = express();

const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller");

const {login,register}=require("./controllers/auth.controller")

const passport=require("./configs/googleauth")

app.use(express.json());

app.post("/register",register);
app.post("/login",login)

app.use("/users", userController);
app.use("/products", productController);

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

app.listen(2345, async () => {
    try {
      await connect();
    } catch (err) {
      console.error(err.message);
    }
    console.log("listening on port 2345");
  });