let db = require("../db/db.json");
const fs = require("fs");
const router = require("express").Router();

router.get("/api/notes", function (req, res) {
  res.json(db);
});

router.post("/api/notes", function (req, res) {
  let newNote = {
    id: db.length,
    title: req.body.title,
    text: req.body.text,
  };
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (error) {
    if (error) console.log(error);
    res.json(db);
  });
});

router.delete("/api/notes/:id", function (req, res) {
  var notes = [];
  for (let i = 0; i < db.length; i++) {
    if (parseInt(db[i].id) !== parseInt(req.params.id)) {
      notes.push(db[i]);
    }
  }
  db = notes;
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (error) {
    if (error) console.log(error);
    res.json(db);
  });
});

module.exports = router;
