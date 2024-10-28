var express = require("express");
var router = express.Router();

// Index Chatbox Page
router.get("/", function (req, res, next) {
  const { title } = "Express";
  res.render("index", { title: "Express" });
});

module.exports = router;
