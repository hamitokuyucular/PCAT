const mongoose = require('mongoose');
const { Schema } = mongoose;

// creat Schema
const PhotoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  desc: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  }
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;