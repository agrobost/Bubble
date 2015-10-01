
var ConnectToGameServer = function(IO,callback) {
	callback();
	this.event = function(socket) {

	}
	this.request= function(pseudo, socket) {
		varobj = {};

		obj.valid = true;
		obj.address = "";
		obj.pseudo = pseudo;

		var adressNkey = IO.getModules()["ServerIOConnection"].findServer();
		obj.address = adressNkey.split("#")[0];
		obj.key = adressNkey.split("#")[1];
		IO.getModules()["ServerIOConnection"].preventServerForUser(obj.key, pseudo);

		IO.emit(socket, "connectTo", obj);
	}
}

module.exports = ConnectToGameServer;