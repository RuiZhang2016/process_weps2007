/* ******  Common website JavaScript code included from header ********* */


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

/* ***  ISBN CHECKER  ***** */
function isLegalISBN(myvar) {
	var ISBN = myvar;
	var next;
	var mult;
	var check = 0;
	var digits = "0123456789";

	if (ISBN.length != 10 && ISBN.length != 13) {
		return false;
	}
	for (var i = 1; i < ISBN.length; i++) {
		next = ISBN.charAt(i-1);
		if (next < '0' || next > '9') {
			return false;
		} else {
			if (ISBN.length == 10) {
				mult = i;
			} else {
				if (i % 2 == 1) {
					mult = 1;
				} else {
					mult = 3;
				}
			}
    		check += mult * (next-'0');
		}
	}
	next = ISBN.charAt(ISBN.length-1);
	next = next.toUpperCase();
	if (ISBN.length == 10) {
   		check %= 11;
		if (check == 10) {
			check = 'X';
		} else {
			check = digits.charAt(check);
		}
	} else {
		check %= 10;
		if (check == 0) {
			check = '0';
		} else {
			check = digits.charAt(10-check);
		}
	}
	if (next == check) {
		return true;
	} else {
		return false;
	}
}
