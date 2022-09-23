const connect = require('connect');

// instantiate app-server
const app = connect();

//custom middleware
function hello1(req, res, next){
      res.setHeader('Content-Type','text/plain' )
      res.end('Hello from NodeJS Application')
};

//custom middleware
function hello2(req, res, next){
      res.setHeader('Content-Type','text/html');
      res.end('<h1> Hello from NodeJS Application as html</h1>');
};

//custom middleware
function hello3(req, res, next){
      res.setHeader('Content-Type','application/json');
      res.end('message: Hello from NodeJS Application as json');
};

// add middleware to connect application
app.use( '/h1', hello1);
app.use( '/h2', hello2);
app.use( '/h3', hello3);
// run app
app.listen(3000);

console.log('Server running at http://localhost:3000');
