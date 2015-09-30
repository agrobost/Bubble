"use strict"

var EventReciever = function(IO) {
	IO.io.on('connection', function (socket) {
		console.log("[GameServer] Server try to connect with id "+ socket.id);

  		socket.on('disconnect', function () {
	    	console.log('[GameServer] Server '+ socket.id + ' has been disconnected');
	    	IO.serverManager.removeServer(socket.id);
	  	});

	  	socket.on("gameConfig", function(o) {
	  		console.log("[GameServer] Server "+socket.id+" logged");
	  		socket.emit("Validation", {id: socket.id});
	  		IO.serverManager.addServer(socket.id, o);
	  	});
	});
}

module.exports = EventReciever;