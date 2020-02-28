//node_modules
const mongoose = require('mongoose');


const CityHallSchema = new mongoose.Schema({
 cityId: String,
 name: String,
 cnpj: String,
 verified: Boolean,
 address: String,
 number: String,
 neighBorHood: String,
 zipCode: String
});

module.exports = mongoose.model('CityHall', CityHallSchema);