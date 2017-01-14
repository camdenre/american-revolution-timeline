var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Battle = require('./models/battle');

mongoose.connect('mongodb://heroku_9wc8t3xm:heroku_9wc8t3xm@ds111549.mlab.com:11549/heroku_9wc8t3xm');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  var battle = new Battle({
  	title: "Demo Battle",
  	start_date: "1/15/2017"
  });

  battle.save(function(err) {
  	if (err) {
  		res.send("Success!");
  	} else {
  		res.send("Failure!");
  	}
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});