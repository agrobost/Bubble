'use strict'

var EventEmitter = function(socketio) {

	var socketio = socketio;

	console.log(' >> user '+socketio.clientData.get("id")+' connected');

	this.connect = function(o) {
		socketio.socket.emit("coValid", o);
	}
}

<<<<<<< HEAD:sockets/client/EventEmitter.js
module.exports = EventEmitter;
=======
module.exports = EventCaller;
>>>>>>> gargantua:sockets/EventCaller.js
