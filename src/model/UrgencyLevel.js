//node_modules
const mongoose = require('mongoose');


const UrgencyLevelSchema = new mongoose.Schema({
 description: String,
 priority: Number
});

module.exports = mongoose.model('UrgencyLevel', UrgencyLevelSchema);