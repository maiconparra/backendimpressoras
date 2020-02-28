//node_modules
const mongoose = require('mongoose');


const ReportCommentSchema = new mongoose.Schema({
 userId: String,
 reportId: String,
 comment: String,
 approved: Boolean,
 creationDate: Date
});

module.exports = mongoose.model('ReportComment', ReportCommentSchema);