var camera = function(x, y){ //center camera
    var minInHeight = 1000;
    var zoom = 1;
    var x = x;//coord bubble
    var y = y;//coord bubble

    //convert sizeScreen to sizeMap, map correspond to playground and screen correspond to canvas
    this.getX_onScreen = function(xMap){
        return ((xMap - camera.x)/zoom;
    };
    this.getY_onScreen = function(yMap){
        return ((yMap - camera.y)/zoom;
    };
    this.getX_onMap = function(xScreen){
        return camera.x+xScreen*zoom;
    }
    this.getY_onMap = function(yScreen){
        return camera.y+yScreen*zoom;
    }
    this.getSize_onMap = function(sizeScreen){
        return sizeScreen * zoom;
    }
    this.getSize_onScreen = function(sizeMap){
        return sizeMap / zoom;
    }

    this.refresh = function(){
        this.zoom = minInHeight / document.getElementById("canvas").height;
    }
}
