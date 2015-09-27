var EventCaller = function(socketio) {

	var socketio = socketio;

	console.log(' >> user '+socketio.dataManager.get("id")+' connected');

	this.connect = function(addr) {
		socketio.socket.emit("coValid", {address: addr});
	}
}

module.exports = EventCaller;