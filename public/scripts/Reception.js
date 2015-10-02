var Reception = function(socket, io){
    this.io = io;
    socket.socket.on("connectTo", function(o) {
        if(o.valid) {
            
            connect(o.address);
            socketGame.emit("getServerInfos", {key: o.key, pseudo: o.pseudo});

            $(".wrapper").hide();
        }
        else {
            alert("pseudo invalide");
        }
    });
    var connect = function(addr) {
        socketGame = this.io.connect(addr);
    }
}
