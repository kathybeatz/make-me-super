var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSavedActivity = new Schema ({
  Type: String
  Title: String
  Location: String //location is a reserved word, but also one of our fields. Looking in to workarounds/using 'locale'
  Description: String
  Link: String //Same situation as Location. Links is not reserved.


});

module.exports = mongoose.model("userSavedActivity", userSavedActivity);