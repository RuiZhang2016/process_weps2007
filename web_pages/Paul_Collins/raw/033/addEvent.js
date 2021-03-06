function addEvent(obj, evType, fn, useCapture){
    if (obj.addEventListener){
        obj.addEventListener(evType, fn, useCapture);
        return true;
    }
    else if (obj.attachEvent) {
        var r = obj.attachEvent("on"+evType, fn);
        return r;
    }
    else {
        alert("Handler could not be attached");
    }
}