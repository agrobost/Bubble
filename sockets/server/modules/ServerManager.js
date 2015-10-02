var ServerManager = function(IO, callback) {
	var prefix = "::cyan::[Server/Manager]::white::";
	var servers = {};
	callback();
	var addServer = function(id, cfg) {
		servers[id] = cfg;
	}
	var removeServer = function(id) {
		delete servers[id];
	}
	var getSize = function() {
		return Object.keys(servers).length;
	}
	var updatePlaceServer = function(id, current) {
		servers[id]["game.current"] = current;
		console.log("Server ::green::"+id+"::white:: players : ::green::"+current+"/"+servers[id]["game.maxPlayer"], prefix);
	}
	var getServerFromKey = function(key) {
		for(i in servers) {
			if(servers[i]["game.key"] == key)
				return i;
		}
		return -1;
	}

	this.event = function(socket) {
  		IO.bind('disconnect', function () {
	    	removeServer(socket.id);
	  	}, socket);

	  	IO.bind("gameConfig", function(o) {
	  		console.log("Server ::green::"+socket.id+"::white:: logged with key ::green::"+o["game.key"],prefix);
	  		IO.emit(socket,"Validation", {key: o["game.key"]});
	  		o.id = socket.id;
	  		addServer(o.id, o);
	  	},socket);

	  	IO.bind("place", function(o) {
	  		updatePlaceServer(socket.id, o.current);
	  	}, socket);
	}

	this.findServer = function() {
		if(getSize() > 0) {
			// take first server
			var cfg = servers[Object.keys(servers)[0]];

			// test if there is a place
			if(parseInt(servers[cfg.id]["game.current"]) < parseInt(servers[cfg.id]["game.maxPlayer"])) {
				var addr = "http://"+cfg["game.address"]+":"+cfg["game.port"];
				console.log("Server founded: ::green::"+addr+"::white:: > ::green::"+cfg["game.key"], prefix);
				return addr+"#"+cfg["game.key"];
			}
		}
		console.log("No server available",prefix);
	}
	this.preventServerForUser = function(key, pseudo) {
		var socket = IO.getModules()["Connection"].getSockets()[getServerFromKey(key)];
		if(socket) {
			IO.emit(socket, "newUserInc", {pseudo: pseudo, key: key});
		}
	}
}
module.exports = ServerManager;