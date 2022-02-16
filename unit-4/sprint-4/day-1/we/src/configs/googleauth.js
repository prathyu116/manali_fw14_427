const passport = require("passport");
const User = require("../models/user.models");

const User=require("../models/user.models")

require("dotenv")
const GOOGLE_CLIENT_ID=hesuhfshf

const i{ v4 : uuidv4 } =require("uuid")// 'uuid';

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2345/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });

const user=await User.findOne({email:profile?.email}).lean().exec();

if(!user){
    user=await User.create({
        mail:profile?.email,
        password:uuid4(),
        role:["customer"]

    })
}
//console.log("accessToken,refreshToken,profile",accessToken,refreshToken,profile)

console.log("user",user);

    return done(null,"user");
  }
));

module.exports=passport;