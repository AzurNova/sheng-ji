var SetupHandlers = function(appState, clientSocket) {
  this.appState = appState;
  this.clientSocket = clientSocket;
  this.handler = {
    'join': join.bind(this),
    'ready': ready.bind(this),
    'start': start.bind(this)
  };
};

// Event Handlers

/**
 * Handles players joining the game
 * @param {string} name The user's chosen name
 * @returns {void}
 */
var join = (name) => {
  console.log(name + ' joining game.');
};

/**
 * Handles being ready to start the game
 * @returns {void}
 */
var ready = () => {
  console.log(' is ready.');
};

/**
 * Handles the starting of the game
 * @returns {void}
 */
var start = () => {
  console.log(' starting game.');
};

module.exports = SetupHandlers;
