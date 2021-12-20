const express = require("express");
const app = express();

app.get("/", () => {
  console.log("Hello Express Js");
});

app.listen(5000, () => console.log("Server run..."));
