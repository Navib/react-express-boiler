const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const messageSchema = new Schema({
  message: String,
  sentBy: String,
  messageSent: { type: Date, default: Date.now },
  likes: [Number],
  reMessage: [Number]
});

// Create the model class
const ModelClass = mongoose.model('message', messageSchema);

// Export the model
module.exports = ModelClass;
