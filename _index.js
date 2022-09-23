//import http web-server-nodejs core package
const http = require('http');

//create the web server event handler
const server = http.createServer((req, res) => {
res.writeHead(200,{'content-Type': 'text/html'});
res.end('<h1>Hello World</h1>');

});
//start the Server
server.listen(3000);

console.log('Server running at http://localhost:3000');