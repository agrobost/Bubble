'use strict'

var EventEmitter = function() {
	this.emit = function(socket, variable, obj) {
		socket.emit(variable, obj);
	}
}
module.exports = EventEmitter;
