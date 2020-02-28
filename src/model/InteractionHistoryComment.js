//node_modules
const mongoose = require('mongoose');


const InteractionHistoryCommentSchema = new mongoose.Schema({
 userId: String,
 interactionHistoryId: String,
 interactionHistoryCommentId: String,
 comment: String 
});

module.exports = mongoose.model('InteractionHistoryComment', InteractionHistoryCommentSchema);