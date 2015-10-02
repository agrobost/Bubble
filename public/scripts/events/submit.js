$('form_pseudo').submit(function () {
    //IO.socket.emit("requestLogging", {pseudo: $("#pseudo").val()});
    $("#pseudo").val('');
    return false;
});
