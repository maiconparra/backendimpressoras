//node_modules
const mongoose = require('mongoose');


const ReportStatusSchema = new mongoose.Schema({
 description: String,
 denied: Boolean,
 approved: Boolean,
 review: Boolean,
 inProgress: Boolean
});

module.exports = mongoose.model("ReportStatus", ReportStatusSchema);