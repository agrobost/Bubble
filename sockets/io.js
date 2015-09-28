'use strict'

var ClientData = require("./../sockets/ClientData");
var EventCaller = require("./../sockets/EventCaller");
var EventReciever = require("./../sockets/EventReciever");
var Connection = require("./../sockets/Connection");

var socketio = function(io) {

	var load = function(soc) {
		console.log(soc);
		this.socket = soc;
		this.clientData = new ClientData(this.socket);
		this.clientData.push("id", this.socket.id);

		this.connection = new Connection(this);

	  	this.eCaller = new EventCaller(this);
	  	this.eReciever = new EventReciever(this);

	 }

	io.on('connection', load);

}

module.exports = socketio;