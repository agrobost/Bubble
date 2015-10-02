
var ConnectToGameServer = function(IO,callback) {
	callback();
	this.event = function(socket) {

	}
	this.request= function(pseudo, socket) {
		var obj = {};

		obj.valid = true;
		obj.address = "";
		obj.pseudo = pseudo;

		var adressNkey = IO.getModules()["ServerIOConnection"].findServer();
		if(adressNkey) {
			obj.address = adressNkey.split("#")[0];
			obj.key = adressNkey.split("#")[1];
			IO.getModules()["ServerIOConnection"].preventServerForUser(obj.key, pseudo);
		} else {
			obj.valid = false;
		}
		
		

		IO.emit(socket, "connectTo", obj);
	}
}

module.exports = ConnectToGameServer;