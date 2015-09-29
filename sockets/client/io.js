'use strict'

var ClientData = require("./ClientData");
var EventEmitter = require("./EventEmitter");
var EventReciever = require("./EventReciever");
var Connection = require("./Connection");

var IO = function(io) {

	var load = function(soc) {
		this.socket = soc;
		this.clientData = new ClientData(this.socket);
		this.clientData.push("id", this.socket.id);

		this.connection = new Connection(this);

	  	this.eventEmitter = new EventEmitter(this);
	  	this.eventReciever = new EventReciever(this);

	 }
	 io.on('connection', load);
}

module.exports = IO;
