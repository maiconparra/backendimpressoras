//node_modules
const mongoose = require('mongoose');


const StateSchema = new mongoose.Schema({
 ufConde: String,
 name: String
});

module.exports = mongoose.model('State', StateSchema);