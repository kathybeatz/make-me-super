var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var allActivities = new Schema ({
  Type: String,
  Title: String,
  Locale: String, 
  Description: String,
  Links: String 

});

module.exports = mongoose.model("allActivities", allActivities);