//node_modules
const mongoose = require('mongoose');


const ReportSolutionAttachmentSchema = new mongoose.Schema({
 reportSolutionId: String,
 medidaType: String,
 url: String
});


module.exports = mongoose.model('ReportSolutionAttachment', ReportSolutionAttachmentSchema);