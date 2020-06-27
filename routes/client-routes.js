const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/notes.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = router;
