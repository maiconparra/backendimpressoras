//node_modules
const mongoose = require('mongoose');


const ReasonDenySchema = new mongoose.Schema({
 description: String
});

module.exports = mongoose.model('ReassonDany', ReasonDenySchema);