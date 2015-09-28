var IO = function(socket){
    this.socket = socket;
    this.emission = new Emission(this);
    this.reception = new Reception(this);
}
