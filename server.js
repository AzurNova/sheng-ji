var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var SetupHandlers = require('./src/server/handlers/setupHandlers');
var GameHandlers = require('./src/server/handlers/gameHandlers');

var appState = {
  'allSockets': [],
  'players': {},
  'gameState': null
};

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(clientSocket){
  // Create event handlers for this socket
  var eventHandlers = {
      'setup': new SetupHandlers(appState, clientSocket),
      'game': new GameHandlers(appState, clientSocket)
  };

  // Bind events to handlers
  for (var category in eventHandlers) {
      var handler = eventHandlers[category].handler;
      for (var event in handler) {
          clientSocket.on(event, handler[event]);
      }
  }

  // Keep track of the socket
  appState.allSockets.push(clientSocket);
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Listening on *:3000');
});
