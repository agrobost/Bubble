'use strict'

var ClientData = function(soc) {
	var data = {};
	var socket = soc;

	this.push = function(dataName, dataValue) {
		data[dataName] = dataValue;
	}
	this.get = function(dataName) {
		if(!data[dataName]) {
			console.error("Data "+dataName+" not found for socket "+socket.id);
		}
		return data[dataName];
	}
	this.remove = function(dataName) {
		delete data[dataName];
	}
}

module.exports = ClientData;