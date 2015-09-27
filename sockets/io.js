var ClientData = require("./../sockets/ClientData");
var EventCaller = require("./../sockets/EventCaller");
var EventReciever = require("./../sockets/EventReciever");
var Connection = require("./../sockets/Connection");

var socketio = function(io) {

	this.dataManager;
	this.socket;
	this.io = io;
	this.connection;
	this.eCaller;
	this.eReciever;

	io.on('connection', function(soc){
		this.socket = soc;
		this.dataManager = new ClientData(this.socket);
		this.dataManager.push("id", this.socket.id);

		this.connection = new Connection(this);

	  	this.eCaller = new EventCaller(this);
	  	this.eReciever = new EventReciever(this);
	});
}

module.exports = socketio;