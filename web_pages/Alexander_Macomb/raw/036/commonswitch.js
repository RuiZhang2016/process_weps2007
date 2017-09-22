// JS File Used By General Lexapro Site Pages. Includes stylesheet switching cookie inclusion in Onload functionality.

/*print page function*/
function print_page(){ 
if ( navigator.platform.toLowerCase().indexOf("mac") != -1 && 
!window.netscape){ 
alert("The browser version you are currently running is not supported. Please press Command + P to open the print dialog box."); 

}else{ 
window.print(); 
} 
}

/* Open window*/

function openWindow(theURL,winName,features) { //v2.0
  var newWindow = window.open(theURL,winName,features);
  newWindow.focus();
}

/*
	Standards Compliant Rollover Script
	Author : Daniel Nolan
	http://www.bleedingego.co.uk/webdev.php
*/

function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'imgover') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_over'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	
			
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_over'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

//window.onload = initRollovers;

function ClearField(TextBox) {
	TextBox.value = '';
}

function handleEnter (event, buttonReference) {
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	if (keyCode == 13) {
		buttonReference.click();
		return false;
	} 
	else
		return true;
}  

//Code for cookies for WEBTRENDS REPORTS - PLEASE DO NOT DELETE
 var date = new Date();
 date.setTime(date.getTime()+(365*24*60*60*1000));
 var expires = "; expires="+date.toGMTString();

 window.onload = function(e) {
   document.cookie = "lexapro=website"+expires+"; path=/";
   initRollovers();
   //stylesheet cookies
   var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
 }

 window.onunload = function(e) {
  document.cookie = "lexapro=website"+expires+"; path=/";
  //stylesheet cookies
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

