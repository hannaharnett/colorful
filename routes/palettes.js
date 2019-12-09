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

// @route   POST api/palettes
// @desc    Create An Palette
// @access  Public
router.post("/", (req, res) => {
  const newPalette = new Palette({
    name: req.body.name,
    colors: req.body.colors
  });

  newPalette.save().then(palette => res.json(palette));
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
