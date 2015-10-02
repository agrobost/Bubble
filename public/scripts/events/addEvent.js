//utiliser click mousemove,... et non onclick, onmousemove...
function addEvent(element, evnt, funct){
    if (element.attachEvent){//IE < 9
        return element.attachEvent('on'+evnt, funct);
    }
    else{
        return element.addEventListener(evnt, funct, false);
    }
}
