
var ServerIO = require("./../../server/io");

var ServerIOConnection = function(IO, callback) {
	var prefix = "::red::[client/ServerIO/Connection]::white::";
	callback();
	var serverIO = ServerIO.getIO();

	this.getServerIO = function() {
		return serverIO;
	}
	this.findServer = function() {
		return serverIO.getModules()["ServerManager"].findServer();
	}
	this.preventServerForUser = function(key, pseudo) {
		serverIO.getModules()["ServerManager"].preventServerForUser(key, pseudo)
	}

	this.event = function(socket) {

	}
}

module.exports = ServerIOConnection;