const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("Hello world");
});

/**  POST /notes */
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Notes created successfully",
  });
});

/** GET /notes */
app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

/** DELETE /notes
 *  params
 *  /notes/1
 */
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(204).json({
     message : "Notes deleted successfully"
     });
});

/**  /notes:index */
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].descripition = req.body.descripition; 

  res.status(200).json({
    message : "Notes Updated successfully."
  })
});

module.exports = app;
