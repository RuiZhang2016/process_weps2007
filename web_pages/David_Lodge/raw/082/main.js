// Sniffer based on http://www.mozilla.org/docs/web-developer/sniffer/browser_type.html
var uagent    = navigator.userAgent.toLowerCase();
var is_safari = ( (uagent.indexOf('safari') != -1) || (navigator.vendor == "Apple Computer, Inc.") );
var is_opera  = (uagent.indexOf('opera') != -1);
var is_kon    = (uagent.indexOf('konqueror') != -1);
var is_webtv  = (uagent.indexOf('webtv') != -1);
var is_ie     = ( (uagent.indexOf('msie') != -1) && (!is_opera) && (!is_safari) && (!is_webtv) );
var is_ie4    = ( (is_ie) && (uagent.indexOf("msie 4.") != -1) );
var is_moz    = (navigator.product == 'Gecko');
var is_ns     = ( (uagent.indexOf('compatible') == -1) && (uagent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_safari) );
var is_ns4    = ( (is_ns) && (parseInt(navigator.appVersion) == 4) );

var is_win    =  ( (uagent.indexOf("win") != -1) || (uagent.indexOf("16bit") !=- 1) );
var is_mac    = ( (uagent.indexOf("mac") != -1) || (navigator.vendor == "Apple Computer, Inc.") );
var ua_vers   = parseInt(navigator.appVersion);

var reportStatus = new Array();
function report ( msg ) {
    reportStatus.push ( msg );
}
function showReport ( err ) {
    alert ( reportStatus.join ( "\n" ) );
}
window.onerror = function ( err, url, line ) {
    report ( err + " [" + url + " - line " + line + "]" );
    showReport();
}

function getByID(elem) {
	if(document.getElementById) {
		return document.getElementById(elem);
	} else if (document.all) {
		return document.all[elem];
	} else if (document.layers) {
		return document.layers[elem];
	} else {
		return null;
	}
}

function toggleDisplay(elem) {
	elem = getByID(elem);
	if(elem.style.display == 'none')
		elem.style.display = 'inline'
	else
		elem.style.display = 'none';
}

function getElementLeft(Elem) {
	if (is_ns4) {
		var elem = getObjNN4(document, Elem);
		return elem.pageX;
	} else {
		var elem = getByID(Elem);
		xPos = elem.offsetLeft;
		tempEl = elem.offsetParent;
  		while (tempEl != null) {
  			xPos += tempEl.offsetLeft;
	  		tempEl = tempEl.offsetParent;
  		}
		return xPos;
	}
}

function getElementTop(Elem) {
	
	if (is_ns4) {
		var elem = getObjNN4(document, Elem);
		return elem.pageY;
	} else {
		var elem = getByID(Elem);
		yPos = elem.offsetTop;
		tempEl = elem.offsetParent;
		while (tempEl != null) {
  			yPos += tempEl.offsetTop;
	  		tempEl = tempEl.offsetParent;
  		}
		return yPos;
	}
}

var timeout = null;
var lastmenu = null;

function dd_out(menu) {
	timeout = setTimeout("dd_hide()", 600);
}

function dd_over(menu) {
	dd_hide();
	
	clearTimeout(timeout);
	
	panel=getByID(menu + "_div");
	
	lastmenu = menu;
	
	// Set its location	
	if (is_ie) xtra = 0;
	else xtra = -1;
	
	panel.style.position = 'absolute';
	panel.style.left = getElementLeft(menu) + xtra + 'px';
	if (is_ie) ytra = 1;
	else ytra = 0;	
	
	panel.style.top  = getElementTop(menu)  + ytra + 'px';
	
	panel.style.display="";
	
	return;
}

function dd_divover(menu) {
	menu=getByID(menu + "_div");
	if (menu.style.display != "none")
		clearTimeout(timeout);
}

// Hide the currently popped up div.
function dd_hide() {
	if(lastmenu == null)
		return;
	menu=getByID(lastmenu + "_div");
	menu.style.display = "none";
	lastmenu = null;
}

// This is called when the user clicks anywhere on the page
function body_click() {
	if(!is_opera)
		dd_hide();
}

function findUser() { finduser(); }

function finduser()  {window.open("index.php?page=finduser",'FindUserPopup','width=410,height=250,resizable=yes,scrollbars=no');}
function findevent(id) {window.open("index.php?page=findevent&fid="+id,'FindEventPopup','width=410,height=445,resizable=yes,scrollbars=no');}

function getCookie(name)
{
	if (document.cookie.length > 0) {
		begin = document.cookie.indexOf(name+"=");
		if (begin != -1) {
			begin += name.length+1;
			end = document.cookie.indexOf(";", begin);
			if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(begin, end));
		}
	}
	return null;
}

function setCookie(name, value, expiredays)
{
	var ExpireDate = new Date ();
	ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
	document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}

function delCookie (NameOfCookie)
{
	if (getCookie(NameOfCookie)) {
		document.cookie = NameOfCookie + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}