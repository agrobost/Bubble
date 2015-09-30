"use strict"

var EventReciever = function(IO) {
	this.listen = function(socket, variable, fct) {
		socket.on(variable, fct);
	}
}

module.exports = EventReciever;