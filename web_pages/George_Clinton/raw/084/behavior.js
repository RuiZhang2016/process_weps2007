
/**
 * Simple method to build the core variables that the flash sidebar needs.
 */
 var baseHref = '/promos/pms/js/';
document.write('<script language="javascript" src="' + baseHref + 'flash_controller.js"></script>');

function sideBar_init(){
	var nodeStatus = "";
	var ssVersion ="";
	var browserURL = "http://" + window.location.host + window.location.pathname;
	var xmlFeed = "/promos/pms/swf/widgets/sideBar/sideBar.xml";
	var pmsCookie = readCookie("UIStateCookie"); 
	if(pmsCookie != ""){
  		var items = pmsCookie.split("|");
  		nodeStatus = items[0];
	}
	
	if( readCookie('ssVersion') != ""){
		ssVersion = readCookie('ssVersion').substring(0,6).replace(/\./gi,'');
	}
	//alert( browserURL);
	var returnResult = 'base_url='+escape(document.location.href);
	returnResult += "&sideBarCollapse="+nodeStatus;
	returnResult += "&ssVersion="+ssVersion;
	returnResult += "&browserURL="+escape(browserURL);
	returnResult += "&xmlFeed="+escape( xmlFeed);
	return returnResult;
}

function sideBar_DoFSCommand(command, args) {
	if(command == 'setPrefs'){
		var pmsCookie = readCookie("UIStateCookie");
		if(pmsCookie != ""){
			var cookieValue = "";
			var items = pmsCookie.split("|");
  			for (var i=0; i<items.length; i++) {
				if (i == 0)
      				cookieValue += args;
    			else
      				cookieValue  += items[i];
     			cookieValue += '|';
			}
			setCookie('UIStateCookie',cookieValue,oneYearExpDate,'/', '',false);
		}else{
			// Default cookie value
			var cookieValue = args +'|||||'; 
			setCookie('UIStateCookie',cookieValue,oneYearExpDate,'/', '',false);	
		}
	}
}

/**
 * Lets create the bridge for the sideBar
 */
document.write('<SCRIPT LANGUAGE=VBScript\> \n' + 
	'on error resume next \n' + 
	'Sub sideBar_FSCommand(ByVal command, ByVal args)\n' + 
	'  call sideBar_DoFSCommand(command, args)\n' + 
	'end sub \n' + 
	'</SCRIPT\> \n');
	

//Debug

var s_movieName = "discoverHomepage";
var s_FlashDebug = "";
function getMovieObj(s_movieName) {
  // IE and Netscape refer to the movie object differently.
  // This function returns the appropriate syntax depending on the browser.
  if (navigator.appName.indexOf ("Microsoft") !=-1) {
    return window[s_movieName]
  } else {
    return document[s_movieName]
  }
}
function s_debug(){
	var s_FlashDebug = getMovieObj(s_movieName).GetVariable("_root.s_debugString");
	alert(s_FlashDebug);
	var s_decodedString = decodeURI(s_FlashDebug);
	var s_tempArray = s_decodedString.split("&");
	var s_displayString = "";
	for(i=0;i<s_tempArray.length;i++){
		s_displayString += s_tempArray[i]+"\n ";
	}
	alert("ORIGINAL STRING\n"+s_FlashDebug+"\n\n DECODED STRING\n"+s_displayString);
}