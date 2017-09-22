function getBrowserName()
{
   var lsBrowser = navigator.appName;
   if (lsBrowser.indexOf("Microsoft") >= 0)
   {
      lsBrowser = "MSIE";
 
   }
   else if (lsBrowser.indexOf("Netscape") >= 0)
   {
      lsBrowser = "NETSCAPE";
   }
   else
   {
      lsBrowser = "UNKNOWN";
   }
   return lsBrowser;
}

function getOS()
{
   var userPlat = "unknown";
   var navInfo = navigator.userAgent;
   if ((navInfo.indexOf("windows NT") != -1)
       || (navInfo.indexOf("windows 95") != -1 )
       || (navInfo.indexOf("windows 98") != -1 )
       || (navInfo.indexOf("WinNT") != -1 )
       || (navInfo.indexOf("Win95") != -1 )
       || (navInfo.indexOf("Win98") != -1 )
	   || (navInfo.indexOf("Windows") != -1 ))
   {
      userPlat = "Win32";
   }
   else if (navInfo.indexOf("Win16") != -1)
   {
      userPlat = "Win16";
   }
   else if ((navInfo.indexOf("Macintosh") != -1)
   		|| (navInfo.indexOf("Mac_PowerPC") != -1))
   {
      userPlat = "PPC";
   }
   else if(navInfo.indexOf("68K") != -1)
   {
      userPlat = "68K";
   }
   return userPlat;
}

function getBrowserVersion()
{
   var findIndex;
   var browserVersion = 0;
   var browser = getBrowserName();
   if (browser == "MSIE")
   {
   browserVersion = navigator.userAgent;
   findIndex = browserVersion.indexOf(browser) + 5;
   browserVersion = parseInt(browserVersion.substring(findIndex,findIndex + 1));
   }
 
   else 
   {
      browserVersion = parseInt(navigator.appVersion.substring(0,1));
   }
   return browserVersion;
}

var theBrowser = getBrowserName();
var theVersion = getBrowserVersion();
var theOS = getOS();

// write additional style sheets for Mac and Windows Internet Explorer users


	if ((theVersion <= 4 || theOS == "Win16"))
	{
	alert("Please Note: We notice that you are using " + theBrowser + " version " + theVersion + " running on " + theOS + "\n This site is best viewed on Internet Explorer 5 and higher \n or Netscape 6 and higher. \n Mozilla, Safari, and Opera are also supported.");
	}
	
// winpop

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

