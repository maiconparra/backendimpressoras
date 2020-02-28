//node_modules
const mongoose = require('mongoose');

const ReportAttachmentSchema = new mongoose.Schema({
 reportId: String,
 mediaType: String,
 url: String
});

module.exports = mongoose.model('ReportAttachment', ReportAttachmentSchema);