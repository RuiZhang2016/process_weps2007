// Customer : NARA Libraries- U.S. National Archives and Records Administration
// Version : Advance Trigger 1.1

function cppUrlPatch(s) {
	var translated = "";
	var i; 
	var found = 0;
	for(i = 0; (found = s.indexOf(':', found)) != -1; ) {
		translated += s.substring(i, found) + "|";
		i = found + 1;
		found++;
	}
	translated += s.substring(i, s.length);
	return translated;
}

var triggerParms = new Array(); 
var excludeList = new Array();
triggerParms["dt"] = 0; // disable trigger if 1
triggerParms["mid"] = "xB9i+xR6ufg7KDGCBfkr3w=="; // model instance id
triggerParms["cid"] = "r4KB4ib+hSQWL98SvD/bXQ=="; // customer id
triggerParms["lf"] = 4; // loyalty factor
triggerParms["sp"] = 5.0; // sample percentage
triggerParms["npc"] = 1; // no persistent cookies if 1
triggerParms["rw"] = 129600; // resample wait (value in minutes)
triggerParms["pu"] = 0; // pop-under control
triggerParms["olpu"] = 1; // On Load pop-under control
triggerParms["lfcookie"] = "ForeseeLoyalty_MID_xB9i+xR6uf";
triggerParms["ascookie"] = "ForeseeSurveyShown_xB9i+xR6uf";
triggerParms["width"] = 420; // survey width
triggerParms["height"] = 500; // survey height
//triggerParms["domain"] = ".foreseeresults.com"; // domain name
triggerParms["omb"] = "1505-0186"; // OMB number
triggerParms["cpp_1"] = "userURL:"+ cppUrlPatch (window.location.protocol+"://" + window.location.host + window.location.pathname); // customer parameter 1 - user URL
//triggerParms["cpp_2"] = "Browser:"+ cppUrlPatch (navigator.userAgent); // customer parameter 2 - Browser
//triggerParms["capturePageView"] = 1;
//excludeList[0] = "/exclude/"; //trigger script will not work under this path
