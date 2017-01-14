var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})