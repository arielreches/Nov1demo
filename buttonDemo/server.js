var express = require('express');
var app = express();

/*
install npm by "sudo apt install npm"
install node by "npm install node"
I think that should work and install node, then 
you can run this file by running
"node server.js"
*/

//allows localhost use
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var counter = 0;

//when recieving a post request for "/button-click"
app.post('/button-click', function(req, res) {
	
	console.log("Recieved");
	//increment counter and send text to client
	counter++;
	res.send("This many button clicks: " + counter);
});

//start server on localhost:3000 and log it to console
var server = app.listen(3000, "localhost", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});