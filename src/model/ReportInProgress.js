//node_modules
const mongoose = require('mongoose');


const ReportInProgressSchema = new mongoose.Schema({
 reportId: String,
 interactionHistoryId: String,
 userId: String,
 creationDate: Date,
 estimateFinishDate: Date,
 startDate: Date,
 doneDate: Date
});

module.exports = mongoose.model('ReportInProgress', ReportInProgressSchema);