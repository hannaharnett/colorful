const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Colors Schema
const ColorsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

// Create Palette Schema
const PaletteSchema = new Schema({
  name: String,
  colors: [ColorsSchema]
});

module.exports = Palette = mongoose.model("palette", PaletteSchema);
