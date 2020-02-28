//node_modules
const mongoose = require('mongoose');


const RolesSchema = new mongoose.Schema({
 name: String
});

module.exports = mongoose.model('Roles', RolesSchema);