'use strict'

var EventCaller = function(socketio) {

	var socketio = socketio;

	console.log(' >> user '+socketio.dataManager.get("id")+' connected');

	this.connect = function(o) {
		socketio.socket.emit("coValid", o);
	}
}

module.exports = EventCaller;