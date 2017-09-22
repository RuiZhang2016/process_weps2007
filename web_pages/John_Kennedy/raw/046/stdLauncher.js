// Customer :NARA Libraries- U.S. National Archives and Records Administration 
// Version : Advance Trigger 1.1

var popUpURL = "http://www.foreseeresults.com/survey/display"; // base URL to the survey 

var ckAlreadyShown = triggerParms["ascookie"]; // name of the persistent/session cookie

var ckLoyaltyCount = triggerParms["lfcookie"]; // name of the loyalty count cookie

var persistentExpires = new Date(); // persistent cookie expiration 
persistentExpires.setTime(persistentExpires.getTime() + (triggerParms["rw"]*60*1000));

function ForeCStdGetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return ForeCStdGetCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) {
			break;
		}
	}
	return null;
}

function ForeCStdSetCookie (name, value) {
	var argv = ForeCStdSetCookie.arguments;
	var argc = ForeCStdSetCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	document.cookie = name + "=" + escape (value) +
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
	((path == null) ? "" : ("; path=" + path)) +
	((domain == null) ? "" : ("; domain=" + domain)) +
	((secure == true) ? "; secure" : "");
}

function ForeCStdGetCookieVal(offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
}

function specialEscape(str) {
	var translated = "";
	var i; 
	var found = 0;
	for(i = 0; (found = str.indexOf('+', found)) != -1; ) {
		translated += str.substring(i, found) + "%2B";
		i = found + 1;
		found++;
	}
	translated += str.substring(i, str.length);
	return translated;
}

// this function checks to see if we are in path included in the excluded list. 
function currentLocationExcluded() {	
	var parentURLPath = window.location.pathname;//location path
	for(key in excludeList) {
		if(parentURLPath.indexOf(excludeList[key]) != -1) {
			return true;
		}
	}
	return false;
}

function Poll() { 
	if(triggerParms["dt"] == 1) {
		return;
	}
	//checks if we are in path included in the excluded list.
	if(currentLocationExcluded()) {
		return;
	}
	var stickyCounter = ForeCStdGetCookie(ckLoyaltyCount); // check counter cookie
	var alreadyShown = ForeCStdGetCookie(ckAlreadyShown); // check if we already have shown survey
	var pageCount;
	var randNum = Math.random();
	randNum *= 100;
	if (stickyCounter == null) {
		// create the loyalty factor cookie if we don't already have one
		pageCount = 1; 
		ForeCStdSetCookie(ckLoyaltyCount, pageCount);
		stickyCounter = ForeCStdGetCookie(ckLoyaltyCount);
	}
	if (stickyCounter != null) {
		pageCount = stickyCounter;
		if(pageCount >= triggerParms["lf"]) {
			// apply the samplingPercentage algorithm
			if(alreadyShown == null) {
				if(randNum <= triggerParms["sp"]) {
					var winOptions = "width= 1,height= 1,top= 4000,left= 4000,resizable=yes,scrollbars=yes";
					var fullURL = popUpURL + "?" + "width=" + triggerParms["width"] +
					"&height=" + triggerParms["height"] +
					"&cid=" + specialEscape(escape(triggerParms["cid"])) + "&mid=" + specialEscape(escape(triggerParms["mid"]));
					if ((triggerParms["omb"] ) != null) {
						fullURL += "&omb=" + escape(triggerParms["omb"]);
					}
					// added for pop control after window is loaded
					if (triggerParms["olpu"] == 1) {
						fullURL += "&olpu=1";
					}
					// capturing Page Viewed in CPP
					if (triggerParms["capturePageView"] == 1) {
						triggerParms["cpp_3"] = "PageView:"+ pageCount; // customer parameter 3 - Page View
					}
					// extract customer passed parameters if any
					var customerParams = "";
					for(paramKey in triggerParms) {
						if(paramKey.substring(0,3) == "cpp"){
							fullURL += "&" + paramKey + "=" + escape(triggerParms[paramKey]);
						}
					}
					var myPopUp = window.open(fullURL, 'survey',winOptions);
					if (triggerParms["pu"] == 1){
						self.focus();
					} else {
						myPopUp.focus(); //focusing on survey window								
					}
					// insure that we only pop up once during the lifetime of the cookie
					if(triggerParms["npc"] == 1) {
						ForeCStdSetCookie(ckAlreadyShown, 'true',null,'/',triggerParms["domain"]);
					} else {
						ForeCStdSetCookie(ckAlreadyShown, 'true', persistentExpires,'/',triggerParms["domain"]);
					}
				}
			}
		}	
		// increment it and set the new cookie value
		pageCount++;
		ForeCStdSetCookie(ckLoyaltyCount, pageCount);
	}
}