const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("i am rooting");
});

app.listen(3000);
