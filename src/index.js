var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var port = process.env.PORT || process.env.NODE_PORT || 3000;

var index = fs.readFileSync(__dirname + '/../client/client.html');

function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write(index);
  response.end();
}

var app = http.createServer(onRequest).listen(port);

console.log("Listening on 127.0.0.1:" + port);

var io = socketio(app);

io.on('connection', function(socket){
   
    socket.join('room1');
    
    

    
    socket.on('disconnect', function(data){
       socket.leave('room1'); 
    });
    
});


console.log("listening on port 3000");