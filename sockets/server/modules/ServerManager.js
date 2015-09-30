var ServerManager = function(IO, callback) {
	var prefix = "::cyan::[ServerManager]::white::";
	var servers = {};
	callback();
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
	    	removeServer(socket.key);
	  	}, socket);

	  	IO.bind("gameConfig", function(o) {
	  		console.log("Server ::green::"+socket.id+"::white:: logged with key ::green::"+o["game.key"],prefix);
	  		IO.emit(socket,"Validation", {key: o["game.key"]});
	  		o.id = socket.id;
	  		addServer(o["game.key"], o);
	  		socket.key = o["game.key"];
	  	},socket);
	}

	this.findServer = function() {
		if(getSize() > 0) {
			var cfg = servers[Object.keys(servers)[0]];
			var addr = "http://"+cfg["game.address"]+":"+cfg["game.port"];
			console.log("Server founded: ::green::"+addr+"::white:: > ::green::"+cfg["game.key"], prefix);
			return addr+"#"+cfg["game.key"];
		}
		console.log("No server available",prefix);
	}
	this.preventServerForUser = function(key, pseudo) {
		var socket = IO.getModules()["Connection"].getSockets()[servers[key].id];
		if(socket) {
			IO.emit(socket, "newUserInc", {pseudo: pseudo, key: key});
		}
	}
}
module.exports = ServerManager;