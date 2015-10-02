var IO = {
    socketConnection: io.connect('http://localhost:3000'),
    socketGame : 'undefined',
    emission : {
        connection : {
            pseudo : function(pseudo){
                IO.socketConnection.emit("requestLogging", {pseudo:pseudo});
            }
        },
        game : {
            joinServer : function(data){
                IO.socketGame.emit("getServerInfos", data);
            }
        }
    }
}
IO.socketConnection.on("connectTo", function(o) {
    if(o.valid) {
        IO.socketGame = io.connect(o.addr);
        IO.emission.game.joinServer({key: o.key, pseudo: o.pseudo})
        $(".wrapper").hide();
    }
    else {
        alert("pseudo invalide");
    }
});
