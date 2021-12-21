const express = require("express");
const router = express.Router();

router.use(middileLogger);

router.get("/", (req, res) => {
  res.send("User name");
});

router.get("/new", (req, res) => {
  res.send("User new");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Put user id: ${req.params.id}`);
  });

const users = [{ name: "Diyor" }, { name: "Abdurahmon" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function middileLogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
