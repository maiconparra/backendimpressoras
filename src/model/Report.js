//node_modules
const mongoose = require('mongoose');
//Utils
const PointSchema = require('../utils/PointSchema');

const ReportSchema = new mongoose.Schema({
 userId: String,
 urgencyLevelId: String,
 reportStatusId: String,
 title: String,
 description: String,
 location: {
  type: PointSchema,
  index: '2dsphere'
 },
 accuracy: Number,
 creationDate: Date
});

module.exports = mongoose.model('Report', ReportSchema);