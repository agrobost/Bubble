var ClientData = require("./../sockets/ClientData");
var dataManager;
var sockets = {};

var socketio = function(io) {
	io.on('connection', function(socket){
		dataManager = new ClientData(socket);
		dataManager.push("id", socket.id);
	  	
	  	console.log(' >> user '+dataManager.get("id")+' connected');

	  	socket.on('disconnect', function(){
	    	console.log(' << user '+dataManager.get("id")+' disconnected');
	  	});
	});
}

exports.load = socketio;