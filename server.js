const express = require("express");
const { env } = require("process");
const app = express();

app.get("/", (req, res) => {
  res.send("<H1>Hello World!</H1>");
});

app.listen(process.env.PORT || 3000);
