var socketio = function(io, socket) {
	io.on('connection', function(socket){
	  	console.log('a user connected');
	  	socket.on('disconnect', function(){
	    	console.log('user disconnected');
	  	});
	});
}

exports.load = socketio;