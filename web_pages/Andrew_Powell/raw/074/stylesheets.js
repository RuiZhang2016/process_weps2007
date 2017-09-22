<!--//
if ((navigator.appVersion.indexOf("Mac") != -1)) {
  if (navigator.appName=="Netscape") {
    document.write('<link rel="stylesheet" type="text/css" href="include/mac_ns.css">')
  } else {
    document.write('<link rel="stylesheet" type="text/css" href="include/mac_ie.css">')
  }
} else if ((navigator.appVersion.indexOf("Win") != -1)) {
  if (navigator.appName=="Netscape") {
    document.write('<link rel="stylesheet" type="text/css" href="include/win_ns.css">')
  } else {
    document.write('<link rel="stylesheet" type="text/css" href="include/win_ie.css">')
  }
} else { // anything else
  document.write('<link rel="stylesheet" type="text/css" href="include/mac_ns.css">')
}
	
var myPopup = 
function popWin(targetPage,name,h,w) {
  myPopup = window.open(targetPage,name,"height="+h+",width="+w+",directories=no,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no,left=200,top=200,screenX=200,screenY=200'");
	myPopup.focus();
  if (!myPopup.opener) {
    myPopup.opener = self;
  }
}
	
//-->
