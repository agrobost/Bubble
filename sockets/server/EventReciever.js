"use strict"

var EventReciever = function(IO) {
	IO.io.on('connection', function (socket) {
		console.log(" ->> Server try to connect with id "+ socket.id);
  		socket.on('disconnect', function () {
	    	IO.io.emit(' <<- Server '+ socket.id + ' has been disconnected');
	  	});
	});
}

module.exports = EventReciever;