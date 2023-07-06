const http = require('http');

const server = http.createServer((req, res) => {
  
  res.end("Akshaya");
});

server.listen(4000, () => {
    
  console.log("Hello");
});