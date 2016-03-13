var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
var mongoose = require('mongoose');
var db = require('./config/db.js');

var app = express();


var databaseCollection = require('../data/db/MongooseSchema.model.js');

//Database Names have an 's' added

//Uncomment line 20 if you wish to connect to a local database
//If so, ensure you have mongod running in terminal

mongoose.connect(db.url);

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

new WebpackDevServer(webpack(config), {
 hot: true,
 historyApiFallback: true,
 proxy: {
   "*": "http://localhost:3000"
 }
}).listen(3001, 'localhost', function (err, result) {
 if (err) {
   console.log(err);
 }
  console.log('Listening at localhost:3001');
});

// ===================================================================
// ROUTES
// ===================================================================

// additional middleware to set headers that we need on ea request
app.use(function(req, res, next) {

  // disable caching so we'll always get the latest activities
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// get saved activities
app.get('/profile/api/savedActivities', function(req, res) { // Q: do we need to setHeaders to res?

  console.log('inside /profile/api/savedActivities!!');
});

// get all activities
app.get('/search/api/activities', function(req, res) {

  // mongoose.find({});
  console.log('inside /search/api/activities!!');
});

// post saved actvities
app.post('/search/api/postActivity', function(req, res) {

  console.log('/search/api/postActivity!!');
});


app.listen(port, function () {
 console.log('Proxy listening on port 3000!');
});






/////////////////////////////
