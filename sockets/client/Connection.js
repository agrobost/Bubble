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
			socketio.clientData.push("pseudo", pseudo);
			console.log(" >> " + socketio.clientData.get("id")+" is now log as "+socketio.clientData.get("pseudo"));

			obj.valid = true;
			obj.address = "http://localhost:3000";
			
		} else {
			obj.valid = false;
		}
		socketio.eCaller.connect(obj);
	}
}

module.exports = Connection;