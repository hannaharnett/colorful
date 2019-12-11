const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Colors Schema
const ColorsSchema = new Schema({
  name: String,
  color: String
});

// Create Palette Schema
const PaletteSchema = new Schema({
  name: String,
  colors: [ColorsSchema]
});

module.exports = Palette = mongoose.model("Palette", PaletteSchema);
