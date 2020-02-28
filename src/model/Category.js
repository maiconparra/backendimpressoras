//node_modules
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
 name: String,
 categoryId: String
});

module.exports = mongoose.model('Category', CategorySchema);