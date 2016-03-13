var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
var mongoose = require('mongoose');
var allActivities = require('../src/db_models/allActivitiesMDBModel.js');

var app = express();


var databaseCollection = require('../data/db/MongooseSchema.model.js');

//Database Names have an 's' added
var db = 'mongodb://localhost/databaseName';

//Uncomment line 20 if you wish to connect to a local database
//If so, ensure you have mongod running in terminal

//mongoose.connect(db);

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

// test get request
app.get('/api/search', function(req, res) {

  console.log('--------------------inside server get request!');

  res.send('end get request');

  // allActivities.find({}).then(function (activities) {
  //   if (activities) {
  //     res.status(200).send(activities);
  //   }
  //   else {
  //     res.status(404).send('Not Found');
  //   }
  // });
});

// test post request
app.post('/api/test', function(req, res) {

  console.log('------------------inside server post request!');

  res.send('end post request');
  
  // var test = new allActivities({
  //
  // });
});

app.listen(port, function () {
 console.log('Proxy listening on port 3000!');
});

/////////////////////////////
