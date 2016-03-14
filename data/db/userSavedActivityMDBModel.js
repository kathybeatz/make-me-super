var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSavedActivity = new Schema ({
  Type: String,
  Title: String,
  Locale: String,
  Description: String,
  Links: String


}, { collection: 'current_user_activity' });

module.exports = mongoose.model("userSavedActivity", userSavedActivity);
