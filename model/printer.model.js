const mongoose = require('mongoose');


const PrinterSchema = new mongoose.Schema({
    model: String,
    category: {
        marc: String,
        type: {
            type: String,
            enumerable: Number,
            required: true
        }
    },
    ppm: Number,
    wifi: Boolean,
    consumption: Number
});

module.exports = module.model('printer', PrinterSchema);