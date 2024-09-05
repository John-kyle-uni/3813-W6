var express = require('express');
var app = express();
var http = require('http').Server(app)
app.use(express.static(__dirname + '/www'));
var socketIo = require('socket.io');
var server = http.createServer(app);
var io = socketIo(server);


io.on('connection', (socket) => {
    console.log ('user connected');
    socket.on ( 'disconnect', ()=> {
        console.log('user disconnected');
    });
});

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on:" + host +"port:" + port);
});