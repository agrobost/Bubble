var ServerManager = function(IO, callback) {
	var prefix = "::cyan::[GameServer]::white::";
	var servers = {};
	var addServer = function(id, server) {
		servers[id]= server;
	}
	var removeServer = function(id) {
		delete servers[id];
	}
	var getSize = function() {
		return Object.keys(servers).length;
	}

	this.event = function(socket) {
  		IO.bind('disconnect', function () {
	    	console.log('Server ::green::'+ socket.id + '::white:: has been disconnected',prefix);
	    	removeServer(socket.id);
	  	}, socket);

	  	IO.bind("gameConfig", function(o) {
	  		console.log("Server ::green::"+socket.id+"::white:: logged with key ::green::"+o["game.key"],prefix);
	  		IO.emit(socket,"Validation", {key: o["game.key"]});
	  		addServer(socket.id, o);
	  	},socket);
	}
}
module.exports = ServerManager;