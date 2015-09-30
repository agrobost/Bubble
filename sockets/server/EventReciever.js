"use strict"

var EventReciever = function() {
	this.listen = function(socket, variable, fct) {
		socket.on(variable, fct);
	}
}

module.exports = EventReciever;