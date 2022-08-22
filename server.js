require('dotenv').config();

const http = require('http');
const app = require('./index')
const port = process.env.DEFAULT_PORT || 4000;
const server = http.createServer(app);

server.listen(port);
console.log("API listening at port: " + port)
