var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Battle = require('./models/battle');

app.set('port', (process.env.PORT || 5000));
app.set('mongodb_uri', (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/localhost'));

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
			res.send("Failure!\n" + err);
		}
	});
});
 
mongoose.connect(app.get('mongodb_uri'));
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
	app.listen(app.get('port'), function() {
		console.log('Node app is running on port', app.get('port'));
	});                         
});