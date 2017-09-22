var iframeids=["artist"]

//Should script hide iframe from browsers that don't support this script (non IE5+/NS6+ browsers. Recommended):
var iframehide="yes"

var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1]
var FFextraHeight=parseFloat(getFFVersion)>=0.1? 16 : 0 //extra height in px to add to iframe in FireFox 1.0+ browsers

function dyniframesize() {
var dyniframe=new Array()
for (i=0; i<iframeids.length; i++){
	if (document.getElementById){ //begin resizing iframe procedure
		dyniframe[dyniframe.length] = document.getElementById(iframeids[i]);
			if (dyniframe[i] && !window.opera){
				dyniframe[i].style.display="block"
				if (dyniframe[i].contentDocument && dyniframe[i].contentDocument.body.offsetHeight) //ns6 syntax
					dyniframe[i].height = dyniframe[i].contentDocument.body.offsetHeight+FFextraHeight; 
				else if (dyniframe[i].Document && dyniframe[i].Document.body.scrollHeight) //ie5+ syntax
					dyniframe[i].height = dyniframe[i].Document.body.scrollHeight;
				}
			}
			//reveal iframe for lower end browsers? (see var above):
			if ((document.all || document.getElementById) && iframehide=="no"){
				var tempobj=document.all? document.all[iframeids[i]] : document.getElementById(iframeids[i])
				tempobj.style.display="block"
			}
	}
}

if (window.addEventListener)
	window.addEventListener("load", dyniframesize, false)
else if (window.attachEvent)
	window.attachEvent("onload", dyniframesize)
else
	window.onload=dyniframesize
