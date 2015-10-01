var Reception = function(io){
    this.io = io;
    io.socket.on("connectTo", function(o) {
        if(o.valid) {
            socketGame = io.connect(o.address);
            socketGame.emit("getServerInfos", {key: o.key, pseudo: o.pseudo});

            $(".wrapper").hide();
        }
        else {
            alert("pseudo invalide");
        }
    });
}
