const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json())
app.use(cors());


app.post('/', cors(),(req, res) => {

  let text = req.body;
  
   let transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587, // true for 465, false for other ports
     secure: false,
     auth: {
       user: "ramvey123@gmail.com",
       pass: "vhdtgaszlcljgpoh",
      },
   });
  
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
  
    const mail = {
      from: `ramvey123@gmail.com`, // sender address
      to: `ramvey123@gmail.com`, // list of receivers
      subject: `Contact Form Details`, // Subject line
      html: `<h2>Name: ${text.name} </h2>
            <h2>Email: ${text.email}</h2>
            <h3>Mobile No: +91 ${text.mobileno}</h3>
            <h3>Address:  ${text.address}</h3>
            <h3>Message:</h3>
            <p>${text.message}</p>`,
    };
    
  const thanksmail = {
    from: `ramvey123@gmail.com`, // sender address
    to: `${text.email}`, // list of receivers
    subject: `Ramvey Healthcare Pvt Ltd`, // Subject line
    html: `<h1>Thank You ${text.name}</h1>
            <h2>We will be in touch soon</h2>`,
  };
        transporter.sendMail(mail,(err, response)=> {
            if (err) console.log(err);
            else console.log(response);
        })
        transporter.sendMail(thanksmail, (err, response) => {
          if (err) console.log(err);
          else console.log(response);
        });
})


// app.get("/careers", (req, res) => {
//   res.json("careers");
// });

app.post('/contact', (req, res) => {
  let text = req.body;
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // true for 465, false for other ports
    secure: false,
    auth: {
      user: "ramvey123@gmail.com",
      pass: "vhdtgaszlcljgpoh",
     },
  });
 
   transporter.verify(function (error, success) {
     if (error) {
       console.log(error);
     } else {
       console.log("Server is ready to take our messages");
     }
   });
 
   const mail = {
     from: `ramvey123@gmail.com`, // sender address
     to: `ramvey123@gmail.com`, // list of receivers
     subject: `Contact Form Details`, // Subject line
     html: `<h2>Name: ${text.name} </h2>
           <h2>Email: ${text.email}</h2>
           <h3>Mobile No: +91 ${text.mobileno}</h3>
           <h3>Address:  ${text.address}</h3>
           <h3>Message:</h3>
           <p>${text.message}</p>`,
   };
   
 const thanksmail = {
   from: `ramvey123@gmail.com`, // sender address
   to: `${text.email}`, // list of receivers
   subject: `Ramvey Healthcare Pvt Ltd`, // Subject line
   html: `<h1>Thank You ${text.name}</h1>
           <h2>We will be in touch soon</h2>`,
 };
       transporter.sendMail(mail,(err, response)=> {
           if (err) console.log(err);
           else console.log(response);
       })
       transporter.sendMail(thanksmail, (err, response) => {
         if (err) console.log(err);
         else console.log(response);
       });
})
app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log("Server Running");
})