// Generic show and hide functions
function showHide(id) {
	identity=document.getElementById(id);
	identity.className = (identity.className == "hide" ) ? "" : "hide";
}
function hide(id) {
	identity=document.getElementById(id);
	identity.className = "hide";
}
function show(id) {
	identity=document.getElementById(id);
	identity.className = "show";
}


// Remote scripting via iframe
var IFrameObj;
function sendToRemoteScript(URL) {
	if (!document.createElement) {return true};
	var IFrameDoc;
	if (!IFrameObj && document.createElement) {
		try {
			var tempIFrame=document.createElement('iframe');
			tempIFrame.setAttribute('id','RemoteScriptIFrame');
			tempIFrame.style.border='0px';
			tempIFrame.style.width='0px';
			tempIFrame.style.height='0px';
			IFrameObj = document.body.appendChild(tempIFrame);
			if (document.frames) { IFrameObj = document.frames['RemoteScriptIFrame'];	}
		} catch(exception) {
			iframeHTML='\<iframe id="RemoteScriptIFrame" style="border:0px; width:0px; height:0px;"><\/iframe>';
			document.body.innerHTML+=iframeHTML;
			IFrameObj = new Object();
			IFrameObj.document = new Object();
			IFrameObj.document.location = new Object();
			IFrameObj.document.location.iframe = document.getElementById('RemoteScriptIFrame');
			IFrameObj.document.location.replace = function(location) {
				this.iframe.src = location;
			}
		}
	}
	if (navigator.userAgent.indexOf('Gecko') !=-1 && !IFrameObj.contentDocument) {
		setTimeout('sendToRemoteScript(URL)',10);
		return false;
	}
	if (IFrameObj.contentDocument) {
		IFrameDoc = IFrameObj.contentDocument; 
	} else if (IFrameObj.contentWindow) {
		IFrameDoc = IFrameObj.contentWindow.document;
	} else if (IFrameObj.document) {
		IFrameDoc = IFrameObj.document;
	} else {
		return true;
	}
	
	IFrameDoc.location.replace(URL);
	return false;
}

// Generic cookie functions
// Expires is days
function setCookie(name, value, expires, path, domain, secure) {
	var today = new Date();
	today.setTime(today.getTime());
	if (expires) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date(today.getTime() + (expires));
	var curCookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires_date.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
	document.cookie = curCookie;
}

function getCookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else {
		begin += 2;
	}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1) end = dc.length;
	return unescape(dc.substring(begin + prefix.length, end));
}

function delete_cookie(name,path,domain) {
        if (get_cookie(name)) {
                document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
}

// Stylesheet switcher
function getSSTitle(ss) { 
	if (ss.title) { return ss.title; } 
	else if (ss.owningElement) { return ss.owningElement.title; } 
	return ''; 
}
function getAllSheets() {
	if (document.styleSheets && (window.ScriptEngine || navigator.taintEnabled)) { return document.styleSheets; }
	if (!document.getElementsByTagName) { return []; }
	for (var x = 0, Lt = document.getElementsByTagName('link'), os = []; Lt[x]; x++ ) {
		var rel = Lt[x].rel ? Lt[x].rel : Lt[x].getAttribute ? Lt[x].getAttribute('rel') : '';
		if( typeof( rel ) == 'string' && rel.toLowerCase().indexOf('style') + 1 ) { os[os.length] = Lt[x]; }
	} 
	for( var x = 0, St = document.getElementsByTagName('style'); St[x]; x++ ) { os[os.length] = St[x]; } 
	return os;
}
function changeStyle() {
	window.userHasChosen = true;
	for( var x = 0, ss = getAllSheets(); x < ss.length; x++ ) {
		if( getSSTitle( ss[x] ) ) { ss[x].disabled = true; }
		for( var y = 0; y < arguments.length; y++ ) {
			if( getSSTitle( ss[x] ) == arguments[y] ) { ss[x].disabled = false; }
		}
	}
}


// Interactivity for the main nav
function siteNav() {
	if (document.getElementById) {
		if (mainNav = document.getElementById('siteNav')) {
			if (mainNav.childNodes && mainNav.childNodes.length > 0) {
				for (var itemi=0;itemi<mainNav.childNodes.length;itemi++) {
		        	if (mainNav.childNodes[itemi].nodeName == "LI") {
						li = mainNav.childNodes[itemi];
						if (li.className != "active" && li.className != "lspace" && li.className != "rspace") {
							li.onmouseover = function() {this.className = "live";};
							li.onmouseout = function() {this.className = ""};
						}
					}
				}
			}
		}
	}
}

/*
* Interactivity for listings boxes
*
* Usage:
* To make interactive box, create a hierarchy similar to this:
* <div id="examplewrapper" class="menu">
*	<div id="example" class="active">
*		<h2>Example</h2>
*		<div id="example_block" class="menublock">
* The main wrapper needs a height, width, and the class of menu.
* The inside div needs a single one to have the class of active.
* The <h2> is what will show up in the menu header, and needs to be styled with the correct position:
* #example h2	{position: absolute; left: 112px; width: 112px;}
* The menublock div is all of the content that will show and hide, it must have the class of menublock.
*/
function listingsMenu() {
	if (document.getElementsByTagName) {
	    divs = document.getElementsByTagName("div");
		for (divi=0; divi<divs.length; divi++) {
			if (divs[divi].className == "menu") {
				divs[divi].style.display = "none";
				headers = divs[divi].getElementsByTagName("h2");
				for (headeri=0; headeri<headers.length; headeri++) {
					var header;
					if (headers[headeri].className != "lspace" && headers[headeri].className != "rspace") {
						header = headers[headeri];
						header.className = "passive clickable";
						header.onmouseout = function() {this.className = "passive clickable";};
						header.onmouseover = function() {this.className = "expectant clickable";};
						header.onclick = function() {
							innerdivs = this.parentNode.parentNode.childNodes;
							for (innerdivsi=0; innerdivsi<innerdivs.length; innerdivsi++) {
								if (innerdivs[innerdivsi].className = "active") {
									innerdivs[innerdivsi].className = "";
								}
							}
							this.parentNode.className = "active"; 
						};
					}
				}
				divs[divi].style.display = "block";
			}
		}
	}
}


/*
* Zebra stripes for search results
*
* Usage:
* To make stripes, create a hierarchy similar to this:
* <div class="zebraresults">
*	<div class="result">
* Every other row is then tagged with the class of rowa or rowb, which is style in the global css
*/
function zebrastripes() {
	if (divs = document.getElementsByTagName("div")) {
		for (divi=0; divi<divs.length; divi++) {
			if (divs[divi].className == "zebraresults") {
				var rowa = true;
				results = divs[divi].getElementsByTagName("div");
				for (resultsi=0; resultsi<results.length; resultsi++) {
					if (results[resultsi].className == "result") {
						if (rowa) {
							results[resultsi].className = "result rowa";
						} else {
							results[resultsi].className = "result rowb";
						}
						rowa = !rowa;
					}
				}
			}
		}
	}
}

/*
* Jump to a location within an overflow: auto div
*
* Usage:
* Set up a div with overflow: auto, and named anchors inside
* <div id="examplewrapper" style="overflow: auto;">
* 	<a name="anchorid" id="anchorid"></a>
* </div>
*
* The just link to it using:
* <a href="#anchorid" onclick="overFlowAnchor('examplewrapper', 'anchorid'); return false;">Anchor</a>
*/
function overFlowAnchor(overflowid, anchorid) {
	if (document.getElementById(anchorid) && document.getElementById(overflowid)) {
		var overflowblock = document.getElementById(overflowid);
		overflowblock.scrollTop = document.getElementById(anchorid).offsetTop - overflowblock.offsetTop;
	}
}

// Popunder launcher
function popunderLauncher() {
	var pop_it = getCookie("popunder");
	if (pop_it < 1){
		var orighost = window.location.host.match(/(\w+\.\w+)$/)[1];
		var pop_url="http://vvmedia.com/pop_new.php?orighost="+orighost;
		var winfeatures="width=720,height=300,scrollbars=0,resizable=0,toolbar=0,location=0,menubar=0,status=0,directories=0";
		var win2 = window.open(pop_url,"",winfeatures);
		if ( win2 ) {
			win2.blur();
		}
		setCookie("popunder", 1, 7, "/");
	}
}

// Pile on any functions that need to be run on startup
function actions() {
	if (arguments.callee.done) return;
	arguments.callee.done = true;
	
	siteNav();
	listingsMenu();
	zebrastripes();
}