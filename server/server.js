var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
var mongoose = require('mongoose');
var SavedActivity = require('../data/db/userSavedActivityMDBModel.js');
// var allActivities = require('../src/db_models/allActivitiesMDBModel.js'); // jenna 3/13/16 don't need this yet

var db = require('../config/db.js');

var app = express();

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

// additional middleware to set headers that we need on ea request
app.use(function(req, res, next) {
  // disable caching so we'll always get the latest activities
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/getActivity', function(req, res) {
  console.log('------------inside server, get request!');
  res.send('finished get request');
});

app.post('/api/postActivity', function(req, res) {

  var savedActivity = new SavedActivity({
    Title: req.body.Title,
    Locale: req.body.Locale,
    Description: req.body.Description,
    Links: req.body.Links
  });

  savedActivity.save(function(err) {
    if (err) {
      console.log('savedActivity post save error! ', err);
      throw err;
    }
    else {
      console.log('Activity saved!');
    }
  });

  res.end('finished post request');
});

app.listen(port, function () {
 console.log('Proxy listening on port 3000!');
});