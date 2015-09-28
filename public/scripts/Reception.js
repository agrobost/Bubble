var Reception = function(io){
    this.io = io;
    io.socket.on("coValid", function(o) {
        if(o.valid) {
            alert("yep")
            $(".wrapper").hide();
        }
        else {
            alert("pseudo invalide");
        }
    });
}
