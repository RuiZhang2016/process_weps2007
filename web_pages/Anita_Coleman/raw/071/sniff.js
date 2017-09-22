<!--

var BROWSER_NAME = navigator.appName;
var plat = navigator.appVersion;


<!-- HANDLE OTHERS-->
if (BROWSER_NAME == "Netscape" && plat.indexOf("Win") != -1 && navigator.appVersion.indexOf("4.")==0)

{
	//alert('net4x_windows.css\n'+BROWSER_NAME+'\n'+plat);
	document.write('<LINK rel="stylesheet" href="http://web.cfa.arizona.edu/itcdi/style/net4x_windows.css" type="text/css">');
}

else if (BROWSER_NAME == "Netscape" && plat.indexOf("Mac") != -1 && plat.indexOf("4.")==0)
{
	//alert('net4x_mac.css\n'+BROWSER_NAME+'\n'+plat);
	document.write('<LINK rel="stylesheet" href="http://web.cfa.arizona.edu/itcdi/style/net4x_mac.css" type="text/css">');
}

else if (BROWSER_NAME == "Microsoft Internet Explorer" && plat.indexOf("Win") != -1)
{
	//alert('ie_windows.css\n'+BROWSER_NAME+'\n'+plat);
	document.write('<LINK rel="stylesheet" href="http://web.cfa.arizona.edu/itcdi/style/ie_windows.css" type="text/css">');
}

else // default style sheet loaded if no browsers match
{
	//alert('style.css\n'+BROWSER_NAME+'\n'+plat);
	document.write('<LINK rel="stylesheet" href="http://web.cfa.arizona.edu/itcdi/style/style.css" type="text/css">');
}

//-->

