const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.get("/sendmail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Sujith",
      address: process.env.SMTP_MAIL,
    },
    to: "sujithkumar.sk175@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Mailed Successful");
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
});

module.exports = router;
