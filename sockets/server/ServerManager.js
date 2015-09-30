
var ServerManager = function(IO) {
	var servers = {};
	this.addServer = function(id, server) {
		servers[id] = server;
	}
	this.getServer = function(id) {
		return servers[id];
	}
	this.removeServer = function(id) {
		delete servers[id];
	}
}

module.exports = ServerManager;