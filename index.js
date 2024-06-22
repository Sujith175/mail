const express = require("express");
const app = express();
const mailRouter = require("./Controllers/mail");

const serverless = require("serverless-http");

require("dotenv").config(); // Ensure dotenv is called as a function

// Use the mail router for specific paths
// app.use("/api/users", mailRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use("/api/users", mailRouter);

module.exports.handler = serverless(app);
