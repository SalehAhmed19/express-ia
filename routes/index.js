var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const count = 2 * 2;

  res.render("index", { title: "ExpressJs", count: count });
});

module.exports = router;
