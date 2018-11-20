var app = require('./config/app');
var http = require('http');

http.createServer(app)
    .listen(9090)
    .on('listening', () => {
        console.log('server on listening...');
    });
