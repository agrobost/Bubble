document.getElementById("form_pseudo").onsubmit = function () {
    IO.socket.emit("requestLogging", {pseudo: $("#pseudo").val()});
    $("#pseudo").val('');
    return false;
};
