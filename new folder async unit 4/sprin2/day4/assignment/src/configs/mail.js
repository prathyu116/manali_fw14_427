 
const nodemailer = require("nodemailer");
 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "21d156d53351be", // generated ethereal user
      pass: "5afadf71b17675", // generated ethereal password
    },
 });
module.exports = transporter;