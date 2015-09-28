'use strict'

var ClientData = require("./ClientData");
var EventCaller = require("./EventCaller");
var EventReciever = require("./EventReciever");
var Connection = require("./Connection");

var IO = function(io) {

	var load = function(soc) {
		this.socket = soc;
		this.clientData = new ClientData(this.socket);
		this.clientData.push("id", this.socket.id);

		this.connection = new Connection(this);

	  	this.eCaller = new EventCaller(this);
	  	this.eReciever = new EventReciever(this);

	 }
	 io.on('connection', load);
}

module.exports = IO;
