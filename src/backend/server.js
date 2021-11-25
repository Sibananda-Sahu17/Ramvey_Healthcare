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
     tls: {rejectUnauthorized: false},
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
      from: `basak.manisha94@gmail.com`, // sender address
      to: `ramvey123@gmail.com`, // list of receivers
      subject: `Ramvey Healthcare from ${text.name}`, // Subject line
      html: `<h2>${text.email} </h2>`,
    };
    
    
        transporter.sendMail(mail, function (err, response) {
            if (err) console.log(err);
            else console.log(response);      
        })
})


// app.get("/careers", (req, res) => {
//   res.json("careers");
// });

// app.get('/contact', (req, res) => {
//     res.json("contact")
// })
app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log("Server Running");
})