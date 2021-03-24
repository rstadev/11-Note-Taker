const http = require('http');
const fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;
  let baseFilePath = `${__dirname}/public/`;
  let filePath;

  switch (path) {
    case '/':
      return getHtml(baseFilePath + 'index.html', res)
  }

  res.end(`It Works!! Path Hit: ${path}`);
};


function getHtml(filePath, res) {
  return fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}


server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:" + PORT);
});