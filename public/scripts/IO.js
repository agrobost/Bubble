var IO = {
    socket : io.connect('http://localhost:3000'),
    socketGame : 'undefined',
    emission : {

    }
}
IO.socket.on("connectTo", function(o) {
    if(o.valid) {
        IO.socketGame = io.connect(addr);
        IO.socketGame.emit("getServerInfos", {key: o.key, pseudo: o.pseudo});
        $(".wrapper").hide();
    }
    else {
        alert("pseudo invalide");
    }
});
