var express = require('express');
var fs = requre('fs');

var index = fs.readFileSync(index.html);
var buffer = new Buffer(256);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  respone.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
