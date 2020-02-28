//node_modules
const mongoose = require('mongoose');
//utils
const PointSchema = require('../utils/PointSchema');

const CitySchema = new mongoose.Schema({
 ibgeCode: Number,
 name: String,
 stateId: String,
 location: {
  type: PointSchema,
  index: '2dsphere'
 }
});

module.exports = mongoose.model('City', CitySchema);