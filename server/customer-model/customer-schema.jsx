const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    email: String
  });

  module.exports = mongoose.model('Customer', customerSchema);