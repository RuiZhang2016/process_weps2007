/* ******  Common website JavaScript code included from header ********* */
/* touched by df */


//generic popup window
function popup(winname, url, height, width, scroll) {
	var features = "dependent=yes,height=" + height + ",width=" + width + ",location=no,menubar=no,resizable=yes,screenX=200,left=200,screenY=200,top=200,status=no,toolbar=no,scrollbars=" + scroll;
	var remote = open(url, winname, features);
	if (remote.opener == null)
		remote.opener = window;
}


//for deactivating nav email submission where field is empty
function navcheckEmail(navForm) {
	var newstring = navForm.email.value.replace(/\s/g, "");
	if (newstring.length) return true;
	else return false;
}

var isNetscape = false;
var isIE = false;
var isWhoKnows = false;

//This determines which browser the user is using
if (parseInt(navigator.appVersion) >= 4) {
  if(navigator.appName == "Netscape") {
    isNetscape = true;
  }else if (navigator.appName == "Microsoft Internet Explorer"){
    isIE = true;
  }else {
    isWhoKnows = true;
  }
}

//This stuff captures the events of the user
if(isNetscape) {
	document.captureEvents(Event.KEYUP);
}

//for enabling ENTER button to submit quick search in Netscape
function entsub(event,ourform) {
	if(isNetscape) {
		if (event && event.which == 13)
			ourform.submit();
		else
			return true;
	}
}
