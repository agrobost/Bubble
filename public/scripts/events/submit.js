document.getElementById("form_pseudo").onsubmit = function () {
    IO.emission.connection.pseudo($("#pseudo").val());
    $("#pseudo").val('');
    return false;
};
