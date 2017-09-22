/*  Javascript News.com.au
	
	index ->	
			dropdown nav
			tertiary nav
			aegis quote box
			tab-o-matic		
			SWFObject
			Accipiter rewrite
*/

/* 
 * void renderAd ( divName = String 
 *                 aambTag = String )
 *
 * divName: The ID attribute associated with the destination element
 * aambTag: The AAMBx variable name
 *                      
 * Returns: nothing
 * 
 * Writes an AAMBx string to the document and then copies
 * the result to the appropriate element in the document
 * 
 */
                                                 
function renderAd(divName, aambTag) {
    var invObj = 'INV' + divName;
	var isMotif = 0;
      
    try { 
	    var aamCode = eval(aambTag); 
		if(aamCode.indexOf('doubleclick') >= 0) {
		   isMotif = 1;
		}
	}
    catch(aamErr) { }
      
    if (typeof(aamCode) != 'undefined') {   
        var msieIdx = navigator.userAgent.indexOf('MSIE');
        if(msieIdx > -1) {
            
            // IE
            var ifrString = '<iframe name="' + invObj + '" width="0" height="0" frameborder="0" AAM_EVENT="javascript:try { document.getElementById(\'' + divName + '\').insertAdjacentElement(\'beforeEnd\', window.frames[\'' + invObj + '\'].document.getElementById(\'adDiv\')) } catch(aamErr) { }"></iframe>';
               
            if(parseInt(navigator.userAgent.substring(msieIdx + 5).split(' ')[0]) < 7) {

                // IE6
				if(isMotif == 1) {
					    document.getElementById(divName).innerHTML += ifrString.replace(/AAM_EVENT/, 'onload');
				} else {
                    document.getElementById(divName).innerHTML += ifrString.replace(/AAM_EVENT/, 'onreadystatechange');
				}
                window.frames[invObj].document.writeln('<div id="adDiv">' + aamCode);

            } else {        
                // IE7 
                document.getElementById(divName).innerHTML += '<div id="TMP' + divName + '" style="display:none">' + escape('<body><div id="adDiv">' + aamCode + '</div>') + '</div>' + ifrString.replace(/AAM_EVENT/, 'onload');
                window.frames[invObj].document.location = 'javascript:unescape(parent.document.getElementById(\'TMP' + divName + '\').innerHTML)';
            }
               
            // Not IE         
        } else document.writeln('<div id="' + invObj + '" style="display:none">' + aamCode + '<script type="text/javascript" defer="true">document.getElementById(\'' + divName + '\').innerHTML = document.getElementById(\'' + invObj + '\').innerHTML;document.getElementById(\'' + invObj + '\').innerHTML = \'\';</scr' + 'ipt></div>');
    }
}


adsPainted = false;

function isDefined(myObject) {
    return (typeof(myObject) != "undefined");
}


function selectedValue(nodeList) {
	for (var i=0; i<nodeList.length; i++) {
		if (nodeList[i].checked) {
		    return nodeList[i].value;
		}
	}
	
	return null;
}

function checkSiteVar() {
    niSearchForm = document.getElementById("ni-search");
	niSearchTerm = document.getElementById("ninnsearch");
	if(document.getElementById("local-search").checked) {
	    niSearchForm.setAttribute("action", "http://www.truelocal.com.au/oneSearch.do");
		niSearchTerm.setAttribute("name", "term");
		niSearchForm.setAttribute("method", "get");
    } else {
	    niSearchForm.setAttribute("action", "http://searchresults.news.com.au/servlet/Search");
		niSearchTerm.setAttribute("name", "queryterm");
		niSearchForm.setAttribute("method", "get");
	}
	niSearchForm.submit();
}


function pollSubmit(pollForm) {
	var option = selectedValue(pollForm.option);
	var addr   = pollForm.action + "?option="+option;

	window.open(addr, 'nipoll', 'width=550, height=450'); 
		
	return false;
}

/* ---- =aegis stock box ---- */
/* -------------------------- */

// pull stock quote form data and append to url
function goStockUrl() {
	var quoteID = document.getElementById('quote').value;
	window.location.href = "http://markets.news.com.au/newscorp/entry.aspx?secid=" + quoteID;
}

/* font size change 
------------------- */

var curFontSize = 1; 	
var fontModifier = 0.1; 	

function getCookieVal(offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) {
	    endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
}

function FixCookieDate(date) {
	var base = new Date(0);
	var skew = base.getTime();
	if (skew > 0)  {
		date.setTime (date.getTime() - skew);
	}
}

function GetCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i=0;
	while (i < clen) {	
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
		    return getCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i === 0) {
		    break;
		}
	}
	return null;
}

function SetCookie(name,value,expires,path,domain,secure) {
	document.cookie = name + "=" + escape (value) +
	((expires) ? "; expires=" + expires.toGMTString() : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
}

/* insert hi-res logo and call window print */
function printStoryPage() {
	 if (document.getElementById("print-logo")){
         document.getElementById("print-logo").setAttribute("src", "/couriermail/images/print/print-logo.jpg");
	     window.print();
	 }
}

function fontSize(act) {
    if (document.getElementById) {
        storyBody = document.getElementById("text-big");
		storyComments = document.getElementById("story-comments");
        if (act === 1) {
            curFontSize += fontModifier;
            curFontSize = Math.min(curFontSize, 1.4);
        } else if (act === 0) {
            curFontSize -= fontModifier;
            curFontSize = Math.max(curFontSize, 1);
        }
        storyBody.style.fontSize = curFontSize + "em";
		
		if(storyComments !== null) {
		    for (v = 0; v < storyComments.getElementsByTagName("blockquote").length; v++) {
		       storyComments.getElementsByTagName("blockquote")[v].style.fontSize = curFontSize + "em";
		    }
		}
    }
	
	// set cookie with font size
	var expdate = new Date();
	FixCookieDate (expdate);
	expdate.setTime (expdate.getTime() + (672*60*60*1000)); // 4 weeks
	SetCookie("userfontc",curFontSize,expdate);		
	
	return(false);
}


function sizeImageCaption() {
	var galleryImgSize = document.getElementById("gallery-image").offsetWidth;
	document.getElementById("image-border").style.width = galleryImgSize + "px";
	document.getElementById("image-border").style.visibility = "visible";
	document.getElementById("image-border").style.border = "1px solid #cfcfcf";
	galleryImgSize += 4;
	document.getElementById("gallery").style.width = galleryImgSize + "px";
	document.getElementById("gallery").style.visibility = "visible";
	document.getElementById("gallery-image-caption").style.display = "block";
}

function sizedPopUp(url, width, height, bars, isResizable) {
    var setResizable = "yes";
    if(isResizable != null) {
	    if(isResizable === "no");
	    setResizable = "no";
	}
	window.open(url, '',
	'width=' + width + ',height=' + height + ' ,scrollbars=' + bars + 
	    ',status=yes,toolbar=no,menubar=no,location=no,resizable='+setResizable);
}


function popUp(type,winURL) {
	var wndReference = null;
    suffixedType = type+"couriermail";
	switch (type) {
	case "poll":
		wndReference = window.open(winURL,suffixedType,"height=352, width=442");
		break;
	case "gallery":
		wndReference = window.open(winURL,suffixedType,"height=700, width=750");
		break;
	case "gallery2":
		wndReference = window.open(winURL,suffixedType,"height=750, width=750");
		break;
	case "gallery3":
		wndReference = window.open(winURL,suffixedType,"height=630, width=625");
		break;
	case "cartoongallery":
		wndReference = window.open(winURL,suffixedType,"height=600, width=750");
		break;
	case "weather":
		wndReference = window.open(winURL, suffixedType, 'width=236,height=350');
		break;
	case "stateweather":
		wndReference = window.open(winURL, suffixedType, 'width=945,height=640,scrollbars=yes');
		break;
	case "currentweather":
		wndReference = window.open(winURL, suffixedType, 'width=1024,height=650,scrollbars=yes');
		break;
	case "subscribe":
		wndReference = window.open(winURL, suffixedType, 'width=765,height=610,scrollbars=yes');
		break;
	case "stopstart":
		wndReference = window.open(winURL, suffixedType, 'width=785,scrollbars=yes');
		break;
	case "showbuzz":
		wndReference = window.open(winURL, suffixedType, 'width=710,height=610,scrollbars=yes');
		break;
	case "addresschange":
		wndReference = window.open(winURL, suffixedType, 'width=500,scrollbars=yes');
		break;
	case "video":
		wndReference = window.open(winURL, suffixedType, 'toolbar=no,location=no,scrolling=auto,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=760,height=660');
		break;
	case "email":
		wndReference = window.open(winURL, suffixedType, 'width=585,height=700,resizable=yes,scrollbars=yes');
		break;
	case "sendLetter":
		wndReference = window.open(winURL, suffixedType, 'width=450,height=820,resizable=yes,scrollbars=yes');
		break;
	case "event":
		wndReference = window.open(winURL, suffixedType, 'width=510,height=700,resizable=yes,scrollbars=no');
		break;
	case "pguide":
		wndReference = window.open(winURL, suffixedType, 'width=442,height=500,resizable=no,scrollbars=yes');
		break;
	case "nipoll":
	    wndReference = window.open(winURL, type, 'width=550, height=500,resizable=yes,scrollbars=yes');
		break;
	case "footy":
		wndReference = window.open(winURL, suffixedType, 'width=800,height=600,resizable=yes,scrollbars=yes');
		break;
	case "interactive":
		wndReference = window.open(winURL, suffixedType, 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=700,height=420');
		break;
	default:
		wndReference = window.open(winURL);
	}
	
	if ((wndReference !== null) && (wndReference !== "")) {
		wndReference.focus();
	}
}


function linkDropSelect(select) {
	var selectedURL = select.options[select.selectedIndex].value;
	window.location.href = selectedURL;
}

function linkDropSelectButton(form) {
var selectedURL = form.getElementsByTagName("SELECT")[0].value;	
	window.location = selectedURL;
	return(false);
}

/* for yahoo content matching */
function showListings(parentElementId, ulClassName) {
    var i=6;	
	var newUL = document.createElement("ul");
	newUL.setAttribute("class", ulClassName);
	if(typeof(zSr) == "undefined") {
	    return false;
	}
    while (i < zSr.length) {
        var descr = zSr[i++]; // listing description
		if(descr.length > 100) {
		    descr = descr.substring(0, 100) + "\u2026";
		}
        var unused1 = zSr[i++]; // (ignore)
        var clickURL = zSr[i++]; // listing link
        var title = zSr[i++]; // listing title
        var sitehost = zSr[i++]; // advertiser's domain name
        var unused2 = zSr[i++]; // (ignore)
	    var newLI = document.createElement("li");
		var newA = document.createElement("a");
		newLI.appendChild(newA);
		newA.setAttribute("target", "_new");
		newA.setAttribute("href", clickURL);
		var newSpan = document.createElement("span");
		newA.appendChild(newSpan);
		var newStrong = document.createElement("strong");
		newSpan.appendChild(newStrong);
		var newTextTitle = document.createTextNode(title);
		newStrong.appendChild(newTextTitle);
		var newBr = document.createElement("br");
		newSpan.appendChild(newBr);
		var newTextDescr = document.createTextNode(descr);
		newSpan.appendChild(newTextDescr);
		
		newUL.appendChild(newLI);
	}
	document.getElementById(parentElementId).appendChild(newUL);
	
}

/* =dropdowns/hover for ie - 
needs to be called with the root 
----------------- */

// IE only function
startList = function(elementId) {
	if (document.all && document.getElementById) {
	    navRoot = document.getElementById(elementId);
	    if (!navRoot) {
	        return(false);
	    }
		for (i=0; i<navRoot.childNodes.length; i++) {
		    node = navRoot.childNodes[i];
			if ( (node.nodeName=="LI") || (node.nodeName=="DL") || (node.nodeName=="DD") || (node.nodeName=="DT") ) {
				node.onmouseover = function() {
				    this.className+=" over";
				}
				node.onmouseout = function() {
				    this.className=this.className.replace(" over", "");
				}
			}
		}
	}
} 





/* =tab-o-matic
--------------- */
function hasParent(e, id) {
	if (!e.parentNode) {
	    return false;
	}
	if (e.parentNode.id == id) {
	    return e.parentNode;
	}
	
	return hasParent(e.parentNode, id);
}

// right hand nav tab function
function showCBox(e) {  // show divs and active tab for each id (tab and div)
  var eNews = hasParent(e, 'classifieds');
  
  if (eNews) {
    eNews.className = e.id;
  }
}


// homepage state news tab function
function showSBox(e) {  
  var eNews = hasParent(e, 'states');
  
  if (eNews) {
    eNews.className = e.id;
  }
}


// local tv/movie guide tab function
function showLocDiv(e) {  
  var eNews = hasParent(e, 'guide');
  if (eNews) {
    eNews.className = e.id;
  }
}

// music charts
function showChartDiv(e) {  
  var eNews = hasParent(e, 'music-charts');
  if (eNews) {
    eNews.className = e.id;
  }
}


// ent charts
function showEntChartDiv(e) {  
  var eNews = hasParent(e, 'ent-charts');
  if (eNews) {
    eNews.className = e.id;
  }
}

// market data last updated
function showLuMd(e) {  
  var eNews = hasParent(e, 'market-data-tables');
  if (eNews) {
    eNews.className = e.id;
  }
}

// fox sports drop zones
function showBNDiv(e) { 
  var eNews = hasParent(e, 'thumb-toggle');
  if (eNews) {
    eNews.className = e.id;
	}
}

// currencies last updated
function showLuCurr(e) {  
  var eNews = hasParent(e, 'currencies-tables');
  if (eNews) {
    eNews.className = e.id;
  }
}


/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2006 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept == "undefined") var deconcept = new Object();
if(typeof deconcept.util == "undefined") deconcept.util = new Object();
if(typeof deconcept.SWFObjectUtil == "undefined") deconcept.SWFObjectUtil = new Object();
deconcept.SWFObject = function(swf, id, w, h, ver, c, quality, xiRedirectUrl, redirectUrl, detectKey) {
	if (!document.getElementById) { return; }
	this.DETECT_KEY = detectKey ? detectKey : 'detectflash';
	this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
	this.params = new Object();
	this.variables = new Object();
	this.attributes = new Array();
	if(swf) { this.setAttribute('swf', swf); }
	if(id) { this.setAttribute('id', id); }
	if(w) { this.setAttribute('width', w); }
	if(h) { this.setAttribute('height', h); }
	if(ver) { this.setAttribute('version', new deconcept.PlayerVersion(ver.toString().split("."))); }
	this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
	if (!window.opera && document.all && this.installedVer.major > 7) {
		// only add the onunload cleanup if the Flash Player version supports External Interface and we are in IE
		deconcept.SWFObject.doPrepUnload = true;
	}
	if(c) { this.addParam('bgcolor', c); }
	var q = quality ? quality : 'high';
	this.addParam('quality', q);
	this.setAttribute('useExpressInstall', false);
	this.setAttribute('doExpressInstall', false);
	var xir = (xiRedirectUrl) ? xiRedirectUrl : window.location;
	this.setAttribute('xiRedirectUrl', xir);
	this.setAttribute('redirectUrl', '');
	if(redirectUrl) { this.setAttribute('redirectUrl', redirectUrl); }
}
deconcept.SWFObject.prototype = {
	useExpressInstall: function(path) {
		this.xiSWFPath = !path ? "expressinstall.swf" : path;
		this.setAttribute('useExpressInstall', true);
	},
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},
	getAttribute: function(name){
		return this.attributes[name];
	},
	addParam: function(name, value){
		this.params[name] = value;
	},
	getParams: function(){
		return this.params;
	},
	addVariable: function(name, value){
		this.variables[name] = value;
	},
	getVariable: function(name){
		return this.variables[name];
	},
	getVariables: function(){
		return this.variables;
	},
	getVariablePairs: function(){
		var variablePairs = new Array();
		var key;
		var variables = this.getVariables();
		for(key in variables){
			variablePairs.push(key +"="+ variables[key]);
		}
		return variablePairs;
	},
	getSWFHTML: function() {
		var swfNode = "";
		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { // netscape plugin architecture
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "PlugIn");
				this.setAttribute('swf', this.xiSWFPath);
			}
			swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'"';
			swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
			var params = this.getParams();
			 for(var key in params){ swfNode += [key] +'="'+ params[key] +'" '; }
			var pairs = this.getVariablePairs().join("&");
			 if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
			swfNode += '/>';
		} else { // PC IE
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "ActiveX");
				this.setAttribute('swf', this.xiSWFPath);
			}
			swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'">';
			swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
			var params = this.getParams();
			for(var key in params) {
			 swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
			}
			var pairs = this.getVariablePairs().join("&");
			if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
			swfNode += "</object>";
		}
		return swfNode;
	},
	write: function(elementId){
		if(this.getAttribute('useExpressInstall')) {
			// check to see if we need to do an express install
			var expressInstallReqVer = new deconcept.PlayerVersion([6,0,65]);
			if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
				this.setAttribute('doExpressInstall', true);
				this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
				document.title = document.title.slice(0, 47) + " - Flash Player Installation";
				this.addVariable("MMdoctitle", document.title);
			}
		}
		if(this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version'))){
			var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
			n.innerHTML = this.getSWFHTML();
			return true;
		}else{
			if(this.getAttribute('redirectUrl') != "") {
				document.location.replace(this.getAttribute('redirectUrl'));
			}
		}
		return false;
	}
}

/* ---- detection functions ---- */
deconcept.SWFObjectUtil.getPlayerVersion = function(){
	var PlayerVersion = new deconcept.PlayerVersion([0,0,0]);
	if(navigator.plugins && navigator.mimeTypes.length){
		var x = navigator.plugins["Shockwave Flash"];
		if(x && x.description) {
			PlayerVersion = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
		}
	}else{
		// do minor version lookup in IE, but avoid fp6 crashing issues
		// see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
		try{
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		}catch(e){
			try {
				var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				PlayerVersion = new deconcept.PlayerVersion([6,0,21]);
				axo.AllowScriptAccess = "always"; // error if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
			} catch(e) {
				if (PlayerVersion.major == 6) {
					return PlayerVersion;
				}
			}
			try {
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			} catch(e) {}
		}
		if (axo != null) {
			PlayerVersion = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
		}
	}
	return PlayerVersion;
}
deconcept.PlayerVersion = function(arrVersion){
	this.major = arrVersion[0] != null ? parseInt(arrVersion[0]) : 0;
	this.minor = arrVersion[1] != null ? parseInt(arrVersion[1]) : 0;
	this.rev = arrVersion[2] != null ? parseInt(arrVersion[2]) : 0;
}
deconcept.PlayerVersion.prototype.versionIsValid = function(fv){
	if(this.major < fv.major) return false;
	if(this.major > fv.major) return true;
	if(this.minor < fv.minor) return false;
	if(this.minor > fv.minor) return true;
	if(this.rev < fv.rev) return false;
	return true;
}
/* ---- get value of query string param ---- */
deconcept.util = {
	getRequestParameter: function(param) {
		var q = document.location.search || document.location.hash;
		if (param == null) { return q; }
		if(q) {
			var pairs = q.substring(1).split("&");
			for (var i=0; i < pairs.length; i++) {
				if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
					return pairs[i].substring((pairs[i].indexOf("=")+1));
				}
			}
		}
		return "";
	}
}
/* fix for video streaming bug */
deconcept.SWFObjectUtil.cleanupSWFs = function() {
	var objects = document.getElementsByTagName("OBJECT");
	for (var i = objects.length - 1; i >= 0; i--) {
		objects[i].style.display = 'none';
		for (var x in objects[i]) {
			if (typeof objects[i][x] == 'function') {
				objects[i][x] = function(){};
			}
		}
	}
}
// fixes bug in some fp9 versions see http://blog.deconcept.com/2006/07/28/swfobject-143-released/
if (deconcept.SWFObject.doPrepUnload) {
	deconcept.SWFObjectUtil.prepUnload = function() {
		__flash_unloadHandler = function(){};
		__flash_savedUnloadHandler = function(){};
		window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs);
	}
	window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload);
}
/* add Array.push if needed (ie5) */
if (Array.prototype.push == null) { Array.prototype.push = function(item) { this[this.length] = item; return this.length; }}

/* add some aliases for ease of use/backwards compatibility */
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject; // for legacy support
var SWFObject = deconcept.SWFObject;




/* =onload functions
-------------------= */

// strikes again
var cmbDone = 0;

function init() {
    // quit if this function has already been called
	if (arguments.callee.done) {
	    return;
	}
		
	// flag this function so we don't do the same thing twice
	arguments.callee.done = true;
		
	// kill the timer
	if (_timer) {
	    clearInterval(_timer);
		_timer = null;
	}
		
	ts = document.getElementById("sections");
	if(typeof(Ninbar) != "undefined") {
	    ninbar = new Ninbar();
		if(ninbar.headlineTicker != null) {
		    setTimeout("ninbar.headlineTicker.nextHeadline(1, 0)", 300 );
		} else {
		    if(ts) {
			    ts.style.display = "none";
			}
		}
	} else {
	    if(ts) {
		   ts.style.display = "none";
		}
	}
	
	var skipAds = 0;

	/*@cc_on @*/
	/*@if (@_win32)
	    skipAds = 1;
	/*@end @*/
	
		
	
	if(typeof(initScrollers) != "undefined") {
	    initScrollers();
	}
	
	if(typeof(cycloMaticInit) != "undefined") {
	    if (typeof TOTAL_IMAGES != "undefined") {
	        if(TOTAL_IMAGES > 0) {
	            cycloMaticInit();
	        }
	    }
	}
	
	if(typeof(myCounterInit) != "undefined") {
	    myCounterInit();
	}
	
	if(typeof(extInit) != "undefined") {
	    extInit();
	}

	if(typeof(addBookmarkLink) != "undefined") {
        addBookmarkLink();
    }
	
	if((typeof(zSr) != "undefined") && (zSr != null)) {
	    if(typeof(contentMatchBootstrap) != "undefined") {
	        contentMatchBootstrap();
			cmbDone = 1;
	    }
	}
	
};
	
/* for Mozilla */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, null);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
	document.write("<script id=__ie_onload defer src=javascript:void(0)></script>");
	var script = document.getElementById("__ie_onload");
	script.onreadystatechange = function() {
		if (this.readyState == "complete") {
			init(); // call the onload handler
		}
	};
/*@end @*/
	
/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
	var _timer = setInterval(function() {
		if (/loaded|complete/.test(document.readyState)) {
			init(); // call the onload handler
		}
	}, 10);
}

/* for other browsers */
window.onload = function() {
init();
/*@cc_on @*/
/*@if (@_win32)
    try {
        document.execCommand("BackgroundImageCache", false, true);
	    if(typeof(initScrollers) != "undefined") {
	        initScrollers();
	    }
	} catch(e) {
	    // do nothing
	}
	
	if(typeof(myCounterInit) != "undefined") {
	    myCounterInit();
	}
	
	if(typeof(addBookmarkLink) != "undefined") {
        addBookmarkLink();
    }
	
	/*@end @*/
	
	if(cmbDone == 0) {
	    if(typeof(contentMatchBootstrap) != "undefined") {
	        contentMatchBootstrap();
	    }
	}
}
/*  Courier-Mail DI Tracking Code */
var refr=escape(document.referrer); /* get the http referer and encode it */
var dom=location.hostname; /* get the host domain */
var stURL="http://link.decideinteractive.com/n/18749/18751/couriermail.news.com.au/529ce0a7002503000000000600000000037c93ae0000000000000000000000000000000100/i/c?0&pq=%2f&1pixgif&referer="
+ refr;
if ( (refr && refr.search(dom) == -1) && (location.href.toUpperCase().indexOf("247SEO=N") == -1) ) /* if the referrer is external preload the image request and does not contain 247SEO argument = "N" */
{
imageTR = new Image();
imageTR.src = stURL;
}
