'use strict'

var EventCaller = function(socketio) {

	var socketio = socketio;

	console.log(' >> user '+socketio.clientData.get("id")+' connected');

	this.connect = function(o) {
		socketio.socket.emit("coValid", o);
	}
}

module.exports = EventCaller;
