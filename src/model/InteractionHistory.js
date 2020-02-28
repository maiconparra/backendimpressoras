//node_modules
const mongoose = require('mongoose');

const InteractionHistorySchema = new mongoose.Schema({
 userId: String,
 reportId: String,
 newReportStatusId: String,
 oldReportStatusId: String,
 description: String,
 creationDate: Date
});

module.exports = mongoose.model('InteractionHistory', InteractionHistorySchema);