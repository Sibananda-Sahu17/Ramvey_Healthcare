const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const multer = require("multer");
const app = express();
const upload = multer();
require("dotenv").config();
app.use(express.json());
app.use(cors());

/* -----------HOME PAGE----------- */
app.post("/", cors(), (req, res) => {
  let text = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // true for 465, false for other ports
    secure: false,
    tls: { rejectUnauthorized: false },
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
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
    from: process.env.AUTH_USER, // sender address
    to: process.env.AUTH_USER, // list of receivers
    subject: `Contact Form Details`, // Subject line
    html: `<h2>Name: ${text.name} </h2>
            <h2>Email: ${text.email}</h2>
            <h3>Mobile No: +91 ${text.mobileno}</h3>
            <h3>Address:  ${text.address}</h3>
            <h3>Message:</h3>
            <p>${text.message}</p>`,
  };

  const thanksmail = {
    from: process.env.AUTH_USER, // sender address
    to: `${text.email}`, // list of receivers
    subject: `Ramvey Healthcare Pvt Ltd`, // Subject line
    html: `<h1>Thank You ${text.name}</h1>
            <h2>We will be in touch soon</h2>`,
  };
  transporter.sendMail(mail, (err, response) => {
    if (err) console.log(err);
    else {
      console.log(response);
      transporter.sendMail(thanksmail, (err, response) => {
        if (err) console.log(err);
        else console.log(response);
      });
    }
  });
  res.status(200).json("Mail Send");
});

/* -----------CAREERS PAGE----------- */

app.post("/careers", upload.single("file"), (req, res) => {
  let text = req.body;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // true for 465, false for other ports
    secure: false,
    tls: { rejectUnauthorized: false },
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
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
    from: process.env.AUTH_USER, // sender address
    to: process.env.AUTH_USER, // list of receivers
    subject: `Contact Form Details`, // Subject line
    html: `<h2>Name: ${text.name} </h2>
            <h2>Email: ${text.email}</h2>
            <h3>Mobile No: +91 ${text.mobileno}</h3>`,
    attachments: [
      {
        filename: req.file.originalname,
        content: req.file.buffer,
      },
    ],
  };

  const thanksmail = {
    from: process.env.AUTH_USER, // sender address
    to: `${text.email}`, // list of receivers
    subject: `Ramvey Healthcare Pvt Ltd`, // Subject line
    html: `<h1>Thank You ${text.name}</h1>
            <h2>We will be in touch soon</h2>`,
  };
  console.log(req.file);
  transporter.sendMail(mail, (err, response) => {
    if (err) console.log(err);
    else {
      console.log(response);
      transporter.sendMail(thanksmail, (err, response) => {
        if (err) console.log(err);
        else {
          console.log(response);
          fs.unlink(path, (err) => {
            if (err) console.log(err);
            else console.log("Success upload");
          });
        }
      });
    }
  });
  res.status(200).json("Mail Send");
});

/* -----------CONTACT PAGE----------- */
app.post("/contact", (req, res) => {
  let text = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // true for 465, false for other ports
    secure: false,
    tls: { rejectUnauthorized: false },
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
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
    from: process.env.AUTH_USER, // sender address
    to: process.env.AUTH_USER, // list of receivers
    subject: `Contact Form Details`, // Subject line
    html: `<h2>Name: ${text.name} </h2>
           <h2>Email: ${text.email}</h2>
           <h3>Mobile No: +91 ${text.mobileno}</h3>
           <h3>Address:  ${text.address}</h3>
           <h3>Message:</h3>
           <p>${text.message}</p>`,
  };

  const thanksmail = {
    from: process.env.AUTH_USER, // sender address
    to: `${text.email}`, // list of receivers
    subject: `Ramvey Healthcare Pvt Ltd`, // Subject line
    html: `<h1>Thank You ${text.name}</h1>
           <h2>We will be in touch soon</h2>`,
  };

  transporter.sendMail(mail, (err, response) => {
    if (err) console.log(err);
    else {
      console.log(response);
      transporter.sendMail(thanksmail, (err, response) => {
        if (err) console.log(err);
        else console.log(response);
      });
    }
  });
  res.status(200).json("Mail Send");
});

app.listen(5000, (err) => {
  if (err) console.log(err);
  console.log("Server Running");
});
