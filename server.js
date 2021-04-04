// const http = require('http');
// const fs = require('fs');
// const { get } = require('https');
const express = require("express");
// const path = require("path");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   var path = req.url;
//   let baseFilePath = `${__dirname}/public/`;
//   // let filePath;

//   switch (path) {
//     case '/':
//       return getHtml(baseFilePath + 'index.html', res);
//     case '/notes':
//       return getHtml(baseFilePath +  'notes.html', res)
//   }
//   // `It Works!! Path Hit: ${path}`
//   res.end();
// };


require('./routes/apiroutes.js')(app);
require('./routes/htmlroutes.js')(app);


// function getHtml(filePath, res) {
//   return fs.readFile(filePath, (err, data) => {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(data);
//   });
// }


app.listen(PORT, function() {
  console.log("Server is listening at http://localhost:" + PORT);
});