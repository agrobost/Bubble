addEvent(window,'load',function () {
    document.getElementById("canvas").width = document.getElementById("canvas").scrollWidth;
    document.getElementById("canvas").height = document.getElementById("canvas").scrollHeight;
});
