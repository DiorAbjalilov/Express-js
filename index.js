const express = require("express");
const app = express();
app.set("view engine", "ejs");
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.render("index", { title: "World" });
});
app.use("/user/", userRouter);

app.listen(5000, () => console.log("Server is run..."));
