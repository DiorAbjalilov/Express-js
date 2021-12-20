const express = require("express");
const app = express();

const path = require("path");

app.get("/", (req, res) => {
  //   console.log("Hello Express Js");
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(5000, () => console.log("Server is run..."));
