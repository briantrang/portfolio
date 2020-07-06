const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.get("/", (req, res) => {
  res.send("Portfolio Server Started! HOMEPAGE!");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send", (req, res) => {
  console.log(req.body);
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: `${process.env.GMAIL_USER}`, // generated ethereal user
            pass: `${process.env.GMAIL_PASSWORD}`  // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Website Portfolio" <brianemail1337@gmail.com>', // sender address
          to: 'briantrang1@gmail.com', // list of receivers
          subject: 'Node Contact Request', // Subject line
          text: 'Hello world?', // plain text body
          html: output // html body
      };
    
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
          res.render('contact', {msg:'Email has been sent'});
      });
});

app.listen(3030, () => {
  console.log("Port started!");
});
