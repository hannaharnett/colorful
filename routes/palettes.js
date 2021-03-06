const express = require("express");
const router = express.Router();

// Palette Model
const Palette = require("../models/Palette");

// @route   GET api/palettes
// @desc    Get All Palettes
// @access  Public
router.get("/", (req, res) => {
  Palette.find().then(palettes => res.json(palettes));
});

// @route   POST api/palettes/new
// @desc    Create A Palette
// @access  Public
router.post("/new", (req, res) => {
  const newPalette = new Palette({
    name: req.body.name,
    colors: req.body.colors
  });

  newPalette
    .save()
    .then(palette => res.json(palette))
    .catch(err => console.log(err));
  console.log(req.body);
});

// @route   GET api/palettes/:id
// @desc    Get A Palette
// @access  Public
router.get("/:id", (req, res) => {
  Palette.findById(req.params.id)
    .then(palette => res.json(palette))
    .catch(err => res.status(404).json({ nopalettefound: "No Palette found" }));
});

// @route   PUT api/palette/edit/:id
// @desc    Update A Palette
// @access  Public
router.put("/edit/:id", (req, res) => {
  Palette.findByIdAndUpdate(req.params.id, req.body)
    .then(palette => res.json({ msg: "Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route   DELETE api/palettes/:id
// @desc    Delete A Palette
// @access  Public
router.delete("/:id", (req, res) => {
  Palette.findById(req.params.id)
    .then(palette => palette.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
