"use strict"

var EventReciever = function(IO) {
	IO.io.on('connection', function (socket) {
		var prefix = "::cyan::[GameServer]::white::"
		console.log("Server try to connect with id ::green::"+ socket.id,prefix);

  		socket.on('disconnect', function () {
	    	console.log('Server ::green::'+ socket.id + '::white:: has been disconnected',prefix);
	    	IO.serverManager.removeServer(socket.id);
	  	});

	  	socket.on("gameConfig", function(o) {
	  		console.log("Server ::green::"+socket.id+"::white:: logged",prefix);
	  		socket.emit("Validation", {id: socket.id});
	  		IO.serverManager.addServer(socket.id, o);
	  	});
	});
}

module.exports = EventReciever;