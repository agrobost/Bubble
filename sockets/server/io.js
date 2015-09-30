"use strict"

var EventEmitter = require("./EventEmitter");
var EventReciever = require("./EventReciever");
var ServerManager = require("./ServerManager");

var IO = function(port) {
	var prefix = "::cyan::[GameServer]::white::"
	this.io = require("socket.io")(port);
	console.log("Listening port "+port+" for game server", prefix);

	this.eventEmitter = new EventEmitter(this);
	this.eventReciever = new EventReciever(this);

	this.serverManager = new ServerManager(this);
}

module.exports = IO;