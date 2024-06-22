const express = require("express");
const app = express();
const mailRouter = require("./Controllers/mail");
require("dotenv").config(); // Ensure dotenv is called as a function

app.get("/", (req, res) => {
  res.send("hello");
});

// Use the mail router for specific paths
app.use("/api/users", mailRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
