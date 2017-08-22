var GameHandlers = function(appState, clientSocket) {
  this.appState = appState;
  this.clientSocket = clientSocket;
  this.handler = {};
};

module.exports = GameHandlers;
