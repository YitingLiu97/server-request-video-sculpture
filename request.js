// const fs = require('fs');
// const path = require('path');
// const express = require("express");
// const app = express();
// app.use(express.static('public'));
// // if there is a request body, parse it as JSON
// app.use(express.json());

// app.get("/request", (req, res) => {

// });


// app.listen(process.env.PORT || 3000, () => {
//     console.log("Server listening at http://localhost:3000!")
//   });


const http = require('http');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);