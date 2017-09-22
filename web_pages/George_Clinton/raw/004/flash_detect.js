var isLayer;
// will look for versions 25 and under -this should last us a few years
var maxVersion = 25;
var minVersion = 0;
var flashVersion = 0;
var f2,f3,f4,f5,f6,f7,f8 = false;
var isMac = (navigator.appVersion.indexOf("Mac") >=0) ? true : false;
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var isNetscape = (navigator.userAgent.indexOf("Netscape") != -1) ? true : false;
var isFirefox = (navigator.userAgent.indexOf("Firefox") > -1) ? true : false;
var isN6 = (document.getElementById && !document.all) ? true : false;
var isN	= (document.layers) ? true : false;
var useLayer = (isN || isN6 || isMac) ? true : false ;
var plat = (window.navigator.userAgent.indexOf("AOL")>=0 || window.navigator.userAgent.indexOf("A.O.L.")>=0)? "AOL" : "norm";

/*************************************************************************/
if(isIE && isWin){
	document.write("<" + "SCR" + "IPT LANGUAGE=VBScript> \n");
    document.write("  Function VBGetSwfVer(i) \n");
    document.write("    on error resume next \n");
    document.write("    Dim swControl, swVersion \n");
    document.write("    swVersion = 0 \n");
    document.write("    set swControl = CreateObject(\"ShockwaveFlash.ShockwaveFlash.\" + CStr(i)) \n");
    document.write("    if (IsObject(swControl)) then \n");
    document.write("      swVersion = i //swControl.GetVariable(\"$version\") \n");// disable full activeX object and just return the version primary
	document.write("      break  \n");
    document.write("    end if \n");
    document.write("    VBGetSwfVer = swVersion \n");
    document.write("End Function \n");
	document.write("// -->  \n");
	document.write("<" + "/SCR" + "IPT> \n");
}
/************************************************************************/
// Detect Client Browser type
function JSGetSwfVer(i) {
      // NS/Opera version >= 3 check for Flash plugin in plugin array
      if (navigator.plugins != null && navigator.plugins.length > 0) {
            if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                  var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
                        var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
                        descArray = flashDescription.split(" ");
                        tempArrayMajor = descArray[2].split(".");
                        versionMajor = tempArrayMajor[0];
                  if ( descArray[3] != "" ) {
                        tempArrayMinor = descArray[3].split("r");
                  } else {
                        tempArrayMinor = descArray[4].split("r");
                  }
                        versionMinor = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
                        flashVer = parseFloat(versionMajor + "." + versionMinor);
            } else {
                  flashVer = -1;
            }
      }
      // MSN/WebTV 2.6 supports Flash 4
      else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
      // WebTV 2.5 supports Flash 3
      else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
      // older WebTV supports Flash 2
      else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
      // Can't detect in all other cases
      else { flashVer = -1; }
      return flashVer;
}

if (isIE && isWin && !isOpera) {
	for (i = maxVersion; i > 0; i--) {
      	flashVersion = VBGetSwfVer(i);
	  	if (flashVersion) { break };
	} 
} else {
      flashVersion = JSGetSwfVer(maxVersion);
	  flashVersion = Math.floor(flashVersion);// just return the version primary
}




