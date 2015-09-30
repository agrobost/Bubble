"use strict"

var EventEmitter = require("./EventEmitter");
var EventReciever = require("./EventReciever");

var IO = function(port) {
	var modules = {};
	var prefix = "::red::[ClientIO]::white::"
	var io = require("socket.io")(port);
	this.serverIO;
	console.log("Listening port "+port+" for clients", prefix);

	var eventEmitter = new EventEmitter();
	var eventReciever = new EventReciever();

	//this.serverManager = new ServerManager(this);
	this.emit = function(socket, variable, object) {
		eventEmitter.emit(socket, variable, object);
	}
	this.emitAll = function(variable, object) {
		eventEmitter.emit(io, variable, object);
	}
	this.bind = function(variable, fct, socket) {
		fct = fct || function(){};
		if(!socket) {
			eventReciever.listen(io, variable, fct);
		} else {
			eventReciever.listen(socket, variable, fct);
		}
	}

	this.addModule = function(module, fct) {
		fct = fct || function(){};
		if(module) {
			var moduleLib = require("./modules/"+module);
			modules[module] = new moduleLib(this, fct);
		} else {
			console.log("Can't find module "+module,prefix);
		}
	}
	this.getModules = function() {
		return modules;
	}
	this.setServerIO = function(serverIO) {
		this.serverIO = serverIO;
	}
	this.getServerIO = function() {
		return this.serverIO;
	}
}

module.exports = IO;