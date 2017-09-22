
//This is the BROWSER DETECTION script


var is_ns  = (navigator.appName == "Netscape");
var is_major = parseInt(navigator.appVersion);

if ((is_ns) && (is_major) < 5) document.write("<link rel='stylesheet' type='text/css' href='/style?CID=55'/>");

else document.write("<link rel='stylesheet' type='text/css' href='/style?CID=19'/>");

