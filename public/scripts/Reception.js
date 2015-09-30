var Reception = function(io){
    this.io = io;
    io.socket.on("coValid", function(o) {
        if(o.valid) {
            alert(o.address);
            $(".wrapper").hide();
        }
        else {
            alert("pseudo invalide");
        }
    });
}
