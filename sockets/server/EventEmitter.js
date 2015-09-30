"use strict"

var EventEmitter = function(IO) {
	this.emit = function(socket, variable, obj) {
		socket.emit(variable, obj);
	}
}

module.exports = EventEmitter;