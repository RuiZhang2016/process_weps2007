

function activex_fix () {
    //Determine browser, we only need this for Internet Explorer
    if (navigator.appName == "Microsoft Internet Explorer") {
        //Array of elements to be replaced
        var arrElements = new Array("object","embed","applet");
        //Loop over element types
        for (n = 0; n < arrElements.length; n++) {
            //set object for brevity
            replaceObj = document.getElementsByTagName(arrElements[n]);
            //loop over element objects returned
            for (i = 0; i < replaceObj.length; i++ ) {

                // skip quicktimes, this messes them up
                if (replaceObj[i].getAttribute('codebase') != "http://www.apple.com/qtactivex/qtplugin.cab") {
                    
                    //set parent object for brevity
                    parentObj = replaceObj[i].parentNode;
                    //grab the html inside of the element before removing it from the DOM
                    newHTML = parentObj.innerHTML;
                    //remove element from the DOM
                    parentObj.removeChild(replaceObj[i]);
                    //stick the element right back in, but as a new object
                    parentObj.innerHTML = newHTML;
                }
            }
        }
    }
}

function addEvent(obj, evType, fn){ 
 if (obj.addEventListener){ 
   obj.addEventListener(evType, fn, false); 
   return true; 
 } else if (obj.attachEvent){ 
   var r = obj.attachEvent("on"+evType, fn); 
   return r; 
 } else { 
   return false; 
 } 
}

if (navigator.appName == "Microsoft Internet Explorer") {
    addEvent(window, 'load', activex_fix);
}
