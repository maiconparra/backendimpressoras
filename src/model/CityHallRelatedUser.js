//node_modules
const mongoose = require('mongoose');

const CityHallRelatedUserSchema = new mongoose.Schema({
 userId: String,
 cityHallId: String
});

module.exports = mongoose.model('CityHallRelatedUser', CityHallRelatedUserSchema);