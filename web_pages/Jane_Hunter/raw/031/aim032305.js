var browser;
var doAIM = 0;
function goAIM(uri){
    if(browser == "Netscape") {
		try {
			var aimTest = new Image();
			aimTest.src = uri;
		} catch(e){
			if ( verify() ) {
				var aimTest = new Image();
				aimTest.src = uri;
	   		} else {
				location.href = "#";
				setError();
			}
		}
    }

    if(browser == "Safari") {
		try {
			if ( doAIM == 1 ) {location.href=uri;}
			else {
          		if ( verify() ) { location.href = uri; }
	    		else { location.href = "#";}
    		}
		} catch(e) {aimTest.onError = setError();}
    }

    if((browser != "Netscape") && (browser != "Safari")){
		if ( doAIM == 1 ) {location.href=uri;}
		else {
			if ( verify() ) { location.href = uri; }
		    else { location.href = "#";}
    	}
    }
}

function setError() {alert("inStore can\'t find AIM on your computer.\n Please install AIM");}
function setErrorSafari() {alert("sorry, this feature is not supported by Mozilla \n please start AIM manually");}

function verify(){
    msg = "inStore can\'t find AIM on your computer.\n\n Do you want to try anyway?";
    return confirm(msg);
}

if(document.childNodes && !document.all && !navigator.taintEnabled && !accentColorName ){browser = "Safari";}

if ((navigator.product == 'Gecko') && ( browser != "Safari" )){browser = "Netscape";}

if (( browser != "Safari" ) && ( browser != "Netscape" )) {browser = "IE";}

if ( browser == "Safari" ) {
 	doAIM = 0;
    if (document.getElementById('no-aim') == null) {doAIM = 1;}
    else {doAIM = 0;}
} else {
	doAIM = 0;
    if (document.getElementById('no-aim') == null) {doAIM = 1;}
    else {doAIM = 0;}
}