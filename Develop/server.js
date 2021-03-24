const http = require('http');
const fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;


  res.end(`It Works!! Path Hit: ${path}`);
};

server.listen(PORT, function() {
  console.log("Server is listening at localhost:" + PORT);
});