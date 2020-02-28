//node_modules
const mongoose = require('mongoose');


const UserNotificationSchema = new mongoose.Schema({
 userId: String,
 title: String,
 shortDescription: String,
 urlClickDescription: String,
 read: Boolean
});

module.exports = mongoose.model('UserNotification', UserNotificationSchema);