var Connection = function(socketio) {
	var socketio = socketio;

	var isValidePseudo = function(pseudo) {
		if(!pseudo) {
			return false
		}
		return true;
	}
	this.requestConnection = function(pseudo) {
		if(isValidePseudo(pseudo)) {
			socketio.dataManager.push("pseudo", pseudo);
			socketio.eCaller.connect("http://localhost:3000");
		}
	}
}

module.exports = Connection;