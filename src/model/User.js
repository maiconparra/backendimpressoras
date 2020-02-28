//node_modules
const mongoose = require('mongoose');
//models
const UserRoles = require('./UserRoles')

const UserSchema = new mongoose.Schema({
 firstName: String,
 lastName: String,
 email: String,
 profileUrl: String,
 dateCreation: String,
 password: String,
 userRole: String,
});

module.exports = mongoose.model('User', UserSchema);