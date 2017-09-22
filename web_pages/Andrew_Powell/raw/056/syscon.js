/*
 Copyright SYS-CON Media Inc.
 $Revision: 1.5 $ 	$Date: 2005/08/18 13:27:15 $
 */

function windowPopup( urlToUse ) {
  windowPopupSize( '', urlToUse, 0.5, 0.5 );
}

function windowPopup( windowTitle, urlToUse ) {
  windowPopupSize( windowTitle, urlToUse, 0.5, 0.5 );
}

function windowPopupSize( windowTitle, urlToUse, widthPercent, heightPercent ) {
	// Set the browser window feature.
	var iWidth	= screen.width * widthPercent;
	var iHeight	= screen.height * heightPercent;

	var iLeft = (screen.width  - iWidth) / 2 ;
	var iTop  = (screen.height - iHeight) / 2 ;

	var sOptions = "toolbar=no,scrollbars=yes,status=no,resizable=yes,dependent=yes";
	sOptions += ",width=" + iWidth;
	sOptions += ",height=" + iHeight;
	sOptions += ",left=" + iLeft;
	sOptions += ",top=" + iTop;

	// Open the browser window.
	var oWindow = window.open( urlToUse, "popup", sOptions );
}

/* ------ xmlHttpRequest helper functions --------- */

var xmlhttp;

function initXmlHttp(){
	/*@cc_on @*/
	/*@if (@_jscript_version >= 5)
	  try {
	  xmlhttp=new ActiveXObject("Msxml2.XMLHTTP")
	 } catch (e) {
	  try {
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
	  } catch (E) {
	   xmlhttp=false
	  }
	 }
	@else
	 xmlhttp=false
	@end @*/
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	 try {
	  xmlhttp = new XMLHttpRequest();
	 } catch (e) {
	  xmlhttp=false
	 }
	}
}



var delay = "2";  //############# How long before window appears (seconds)
var winw = "620"; //############# How wide should your window be (pixels)
var winh = "420"; //############# How tall should the window be (pixels)

//############# Auto centering DHTML popup window by Dave lauderdale
//############# Originally published at www.digi-dl.com
var ie=(document.all);
var ns=(document.layers);
var ns6=(document.getElementById && !ie);
var calculate=ns? "" : "px"
function loadElement(){
if(!ns && !ie && !ns6) return;
if(ie) popup=eval('document.all.elementDiv.style');
else if(ns) popup=eval('document.layers["elementDiv"]');
else if(ns6) popup=eval('document.getElementById("elementDiv").style');
if (ie||ns6) popup.visibility="visible";
else popup.visibility ="show";
displayElement()
}
function displayElement(){
var agent=navigator.userAgent.toLowerCase();
if (ie){
	documentWidth = (centerElement().offsetWidth)/2+centerElement().scrollLeft-150-(winw/2);
	documentHeight = (centerElement().offsetHeight)/2+centerElement().scrollTop-(winh/2);
}
else if (ns){
	documentWidth=window.innerWidth/2+window.pageXOffset-150-(winw/2);
	documentHeight=window.innerHeight/2+window.pageYOffset-(winh/2);
}
else if (ns6){
	documentWidth=self.innerWidth/2+window.pageXOffset-150-(winw/2);
	documentHeight=self.innerHeight/2+window.pageYOffset-(winh/2);
}
popup.left = "40"+calculate;
popup.top  = documentHeight+calculate;
setTimeout("displayElement()",100);
}

function centerElement(){ return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;}
function closeElement(){ if (ie||ns6) { popup.display="none"; } else { popup.visibility ="hide"; } }