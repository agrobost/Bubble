"use strict"

var EventEmitter = require("./EventEmitter");
var EventReciever = require("./EventReciever");
var ServerManager = require("./ServerManager");

var IO = function(port) {
	this.io = require("socket.io")(port);
	console.log("Listening port "+port+" for game server");

	this.eventEmitter = new EventEmitter(this);
	this.eventReciever = new EventReciever(this);

	this.serverManager = new ServerManager(this);
}

module.exports = IO;