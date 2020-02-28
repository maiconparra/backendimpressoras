//node_modules
const mongoose = require('mongoose');


const ReportClassificationSchema = new mongoose.Schema({
 reportId: String,
 userId: String,
 rating: Number
});

module.exports = mongoose.model('ReportClassification', ReportClassificationSchema);