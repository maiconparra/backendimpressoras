const mongoose = require('mongoose');

const PrinterSchema = new mongoose.Schema({
  model: String,
  catergory: [String, String, Number],
  ppm: Number,
  wifi: Boolean,
  consumption: Number
});

module.exports = mongoose.model('Printer', PrinterSchema);