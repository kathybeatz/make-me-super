var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

var kathybeatz = [
  { name: 'Albrey',
    image: 'http://static1.squarespace.com/static/54d53828e4b0e1d1a7d75bbf/t/56b10dc962cd9416699645ce/1454443988362/?format=300w',
    attributes: {
      strength: 80,
      intelligence: 70,
      charisma: 60,
      otherthing: 42
    }
  },
  { name: 'Bianca',
    image: 'http://static1.squarespace.com/static/54d53828e4b0e1d1a7d75bbf/t/56b10e458259b562ca19c5aa/1454444106294/?format=300w',
    attributes: {
      strength: 80,
      intelligence: 70,
      charisma: 60,
      otherthing: 42
    }
  },
  { name: 'Jamil',
    image: 'http://static1.squarespace.com/static/54d53828e4b0e1d1a7d75bbf/56b0fba407eaa096f03e712f/56b0fbce40261d778a9447d4/1454439374960/jamil_round.png?format=300w',
    attributes: {
      strength: 80,
      intelligence: 70,
      charisma: 60,
      otherthing: 42
    }
  },
  { name: 'Claire',
    image: 'http://static1.squarespace.com/static/54d53828e4b0e1d1a7d75bbf/56b0fba407eaa096f03e712f/56b0fc1804426214620e8b33/1454439450733/claire_round.png?format=300w',
    attributes: {
      strength: 80,
      intelligence: 70,
      charisma: 60,
      otherthing: 42
    }
  }
  ];
app.use(express.static(publicPath));

// If you only want this for development, you would of course
// put it in the "if" block below
app.get('/images', function(req, res) {
  res.send(kathybeatz);
})

if (!isProduction) {
  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});

