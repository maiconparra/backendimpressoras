//node_modules
const mongoose = require('mongoose');


const UserRolesSchema = new mongoose.Schema({
 userId: String,
 rolesId: String
});

module.exports = mongoose.model('UserRoles', UserRolesSchema);