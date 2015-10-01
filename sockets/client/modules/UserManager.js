var UserManager = function(IO, callback) {
	callback = callback || function(){};
	callback();
	var prefix = "::red::[client/logging]::white::";

	var users = {};
	var pushUserInfo = function(id, infoName, info) {
		users[id][infoName] = infos;
	}
	var removeInfo = function(id, infoName) {
		delete users[id][infoName];
	}
	var removeUser = function(id) {
		delete users[id];
	}

	this.event = function(socket) {
		IO.bind("requestLogging", function(o){
			requestConnection(o.pseudo, socket);
		}, socket);
		IO.bind("disconnect", function() {
			disconnectUser(socket);
		}, socket);
	}
	var disconnectUser = function(socket) {
		removeUser(socket.id);
		console.log("::green::"+socket.id+" ::white::disconnected",prefix);
	}
	var isValidePseudo = function(pseudo) {
		if(!pseudo) {
			return false
		}
		return true;
	}
	var requestConnection = function(pseudo, socket) {
		var obj = {};
		if(isValidePseudo(pseudo)) {
			console.log("::green::"+socket.id+"::white:: is now log as ::green::"+pseudo, prefix);
			IO.getModules()["ConnectToGameServer"].request(pseudo, socket);
			
		} else {
			obj.valid = false;
		}
	}
}
module.exports = UserManager;