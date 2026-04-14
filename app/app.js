const http = require('http');
require('express');

const PORT = 3000;

console.log("Starting application...");

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ status: "UP" }));
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("App running in environment");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});