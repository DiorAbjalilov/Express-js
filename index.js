const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "World" });
});
app.get("/about", (req, res) => {
  res.render("index", { title: "About" });
});
app.get("/contact", (req, res) => {
  res.render("index", { title: "Contact" });
});
app.listen(5000, () => console.log("Server is run..."));
