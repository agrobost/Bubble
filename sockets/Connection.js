'use strict'

var Connection = function(socketio) {
	var socketio = socketio;

	var isValidePseudo = function(pseudo) {
		if(!pseudo) {
			return false
		}
		return true;
	}
	this.requestConnection = function(pseudo) {
		var obj = {};
		if(isValidePseudo(pseudo)) {
			socketio.dataManager.push("pseudo", pseudo);
			console.log(" >> " + socketio.dataManager.get("id")+" is now log as "+socketio.dataManager.get("pseudo"));

			obj.valid = true;
			obj.address = "http://localhost:3000";
			
		} else {
			obj.valid = false;
		}
		socketio.eCaller.connect(obj);
	}
}

module.exports = Connection;