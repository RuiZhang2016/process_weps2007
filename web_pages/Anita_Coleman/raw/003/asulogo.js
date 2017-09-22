// Thanasis Kinias
// created 11 February 2002

var browser = false;
BrowserName    = navigator.appName;
BrowserVersion = parseInt(navigator.appVersion);
if ( 
    ( BrowserName == "Netscape" && BrowserVersion >= 3 ) 
      || ( BrowserName == "Microsoft Internet Explorer" 
             && BrowserVersion >= 4 ) ) {
    browser = true;
}

if (browser) {
    asulogo_0  = new Image;
    asulogo_1  = new Image;
    asulogo_0.src  = "http://www.asu.edu/it/events/ecure/img/asulogo_0.gif";
    asulogo_1.src  = "http://www.asu.edu/it/events/ecure/img/asulogo_1.gif";
}

function highlight ( imgDocID2, imgObjName2 ) { 
    if (browser) { 
        document.images[imgDocID2].src = eval(imgObjName2+".src");
    }
}

