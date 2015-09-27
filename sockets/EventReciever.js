var EventReciever = function(socketio) {

	socketio.socket.on('disconnect', function(){
	    console.log(' << user '+socketio.dataManager.get("id")+' disconnected');
	});
	socketio.socket.on("requestLogging", function(o) {
		socketio.connection.requestConnection(o.pseudo);
	});
}

module.exports = EventReciever;