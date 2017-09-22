








/*--*/
// BrowserUtils.js : Implements nextagEncodeURI() for encoding URLs using
//                   the JavaScript built-in function encodeURIComponent() 
//                   where available. For older browsers, IE (pre  version 5.5)
//                   and Netscape (pre version 6) where encodeURIComponent()
//                   is not supported, it mimics the JavaScript version.

function utf8(wide) {
	var c, s;
	var enc = "";
	var i = 0;
	while(i<wide.length) {
		c= wide.charCodeAt(i++);
		// handle UTF-16 surrogates
		if (c>=0xDC00 && c<0xE000) continue;
		if (c>=0xD800 && c<0xDC00) {
			if (i>=wide.length) continue;
			s= wide.charCodeAt(i++);
			if (s<0xDC00 || c>=0xDE00) continue;
			c= ((c-0xD800)<<10)+(s-0xDC00)+0x10000;
		}
		// output value
		if (c<0x80) enc += String.fromCharCode(c);
		else if (c<0x800) enc += String.fromCharCode(0xC0+(c>>6),0x80+(c&0x3F));
		else if (c<0x10000) enc += String.fromCharCode(0xE0+(c>>12),0x80+(c>>6&0x3F),0x80+(c&0x3F));
		else enc += String.fromCharCode(0xF0+(c>>18),0x80+(c>>12&0x3F),0x80+(c>>6&0x3F),0x80+(c&0x3F));
	}
	return enc;
}

var hexchars = "0123456789ABCDEF";

function toHex(n) { return hexchars.charAt(n>>4)+hexchars.charAt(n & 0xF); }

var okURIchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-.";

function nextagEncodeURI(s) {
	var s = utf8(s);
	var c;
	var enc = "";
	if (typeof encodeURIComponent == "function") {
		// Use JavaScript built-in function IE 5.5+ and Netscape 6+ and Mozilla
		// Replace all %26amp%3B in s and after encoding
		return (encodeURIComponent(s.replace(/%26amp%3B/g, '%26')).replace(/%26amp%3B/g, '%26'));
	} 
	// Need to mimic the JavaScript version Netscape 4 and IE 4 and IE 5.0
	for (var i= 0; i<s.length; i++) {
		if (okURIchars.indexOf(s.charAt(i))==-1)
			enc += "%"+toHex(s.charCodeAt(i));
		else
			enc += s.charAt(i);
	}
	return enc.replace(/%26amp%3B/g, '%26');
}

function NextagBrowser(){
	d = document;
	var nav=navigator;
	this.agt=nav.userAgent.toLowerCase();
	this.major = parseInt(nav.appVersion);
	this.ns=(d.layers);
	this.dom=(d.getElementById)?1:0;
	this.ns4up=(this.ns && this.major >=4);
	this.ns6=(this.agt.indexOf("Netscape6")!=-1);
	this.op=(window.opera? 1:0);
	this.ie=(d.all);
	this.ie5=(d.all&&this.dom);
	this.fb=(this.agt.indexOf("firebird")!=-1);
	this.sf=(this.agt.indexOf("safari")!=-1);
	this.win=((this.agt.indexOf("win")!=-1) || (this.agt.indexOf("16bit")!=-1));
	this.mac=(this.agt.indexOf("mac")!=-1);
};


/*--*/
var NextagUtils = new Object();
NextagUtils.sVisibleDiv = null;
NextagUtils.sVisibleDivToggleFlag = 0;

/** public static variables **/
// detect a special case of "web browser"
NextagUtils.is_ie = ( /msie/i.test(navigator.userAgent) &&
		   !/opera/i.test(navigator.userAgent) );
NextagUtils.is_ie5 = ( NextagUtils.is_ie && /msie 5\.0/i.test(navigator.userAgent) );
// detect Opera browser
NextagUtils.is_opera = /opera/i.test(navigator.userAgent);
// detect KHTML-based browsers
NextagUtils.is_khtml = /Konqueror|Safari|KHTML/i.test(navigator.userAgent);

// Event methods
NextagUtils.addEvent = function(el, evname, func) {
	if (el.attachEvent) { // IE
		el.attachEvent("on" + evname, func);
	} else if (el.addEventListener) { // Gecko / W3C
		el.addEventListener(evname, func, false);
	} else {
		el["on" + evname] = func;
	}
};

NextagUtils.stopEvent = function(ev) {
	ev || (ev = window.event);
	if (NextagUtils.is_ie) {
		ev.cancelBubble = true;
		ev.returnValue = false;
	} else {
		ev.preventDefault();
		ev.stopPropagation();
	}
	return false;
};

NextagUtils.defaultDocumentOnClickHandler = function (ev){
	if (NextagUtils.sVisibleDiv != null){
		if (NextagUtils.sVisibleDivToggleFlag==0){
			NextagUtils.sVisibleDiv.style.display = 'none';
			NextagUtils.sVisibleDiv = null;
		} else
			NextagUtils.sVisibleDivToggleFlag = 0;
	}
	return true;
};

// DOM/Object methods
NextagUtils.createElement = function(type, parent) {
	var el = null;
	if (document.createElementNS) {
		// use the XHTML namespace; IE won't normally get here unless
		// _they_ "fix" the DOM2 implementation.
		el = document.createElementNS("http://www.w3.org/1999/xhtml", type);
	} else {
		el = document.createElement(type);
	}
	if (typeof parent != "undefined") {
		parent.appendChild(el);
	}
	return el;
};

// UI methods
NextagUtils.getElementPosition = function(obj){
	var curleft = 0;
	var curtop = 0;
	if (obj.offsetParent){
		while (obj.offsetParent){
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	} else if (obj.x){
		curleft += obj.x;
		curtop += obj.y;
	}
	return { x: curleft, y: curtop };
};

NextagUtils.getRelativePosition = function(obj, offsetX, offsetY){
	var pos = this.getElementPosition(obj);
	var left = pos.x + offsetX;
	var top = pos.y + offsetY;
  return { x: left, y: top };
};

// UI - Popup DIV methods
NextagUtils.toggleShowDiv = function(id, pos){
	// alert("-- in toggle");
	var elem = document.getElementById(id);
	if (!elem)
		return false;
	if (elem == NextagUtils.sVisibleDiv){
		NextagUtils.sVisibleDiv.style.display = 'none';
		NextagUtils.sVisibleDiv = null;
		return true;
	}
	if (pos){
		elem.style.top = pos.y + 'px';
		elem.style.left = pos.x + 'px';
	}
	if (NextagUtils.sVisibleDiv != null)
		NextagUtils.sVisibleDiv.style.display = 'none';
	NextagUtils.sVisibleDiv = elem;
	elem.style.display = 'block';
	NextagUtils.sVisibleDivToggleFlag = 1;

	return true;
};

NextagUtils.expandSearchRefineScrollDiv = function (prefix){
	var tagT = document.getElementById(prefix + '_T');
	var tagC = document.getElementById(prefix + '_C');
	var tagH = document.getElementById(prefix + '_H');
	var tagM = document.getElementById(prefix + '_M');

	if (tagC && (tagC.style.height == '' ||
			tagC.style.height == undefined))
		tagC.style.height = (tagC.offsetHeight-4) + 'px';

	if (tagT) tagT.className = 'advSRScrollTitle_HL';
	if (tagC) tagC.className = 'advSRScrollContainer_HL';
	if (tagH) tagH.className = 'advSRScrollHidden_HL';
	if (tagM) tagM.className = 'advSRScrollMore_HL';
};

NextagUtils.collapseSearchRefineScrollDiv = function (prefix){
	var tagT = document.getElementById(prefix + '_T');
	var tagC = document.getElementById(prefix + '_C');
	var tagH = document.getElementById(prefix + '_H');
	var tagM = document.getElementById(prefix + '_M');

	if (tagT) tagT.className = 'advSRScrollTitle';
	if (tagC) tagC.className = 'advSRScrollContainer';
	if (tagH) tagH.className = 'advSRScrollHidden';
	if (tagM) tagM.className = 'advSRScrollMore';
};


/**
 * element utilities like positioning and event functions
 */

NextagUtils.getElementWidth = function(e,b) {return ((b.op)? e.style.pixelWidth:e.offsetWidth);};
NextagUtils.getElementHeight = function(e,b) { return ((b.op)? e.style.pixelHeight:e.offsetHeight); };

NextagUtils.getPageX = function(o,b) {
	if (b.op) {
		var x=0;
		while(eval(o)) {
			x+=o.style.pixelLeft;
			o=o.offsetParent;
		}
		return x;
	} else {
		var m=(b.mac&&b.ie)? document.body.leftMargin:0;
		var x=0;
		var incase=0;
		var hasBody=false;
		var hasHtml=false;
		while(eval(o)) {
			x+=o.offsetLeft;
			if (b.ie && o && o.tagName == 'TABLE'){
				incase = x;
				// break;
			} else if (b.ie && o.tagName == 'HTML') {
				hasHtml = true;
			} else if (b.ie && o.tagName == 'BODY') {
				hasBody = true;
			}
			o=o.offsetParent;
		}
		if (hasHtml && !hasBody)
		  x = incase;
		return parseInt(x)+parseInt(m)
	}
};

NextagUtils.getPageY = function(o,b) {
	if(b.ns) {
		var y=(o.pageY)? o.pageY:o.y;
		return y;
	} else if (b.op) {
		var y=0;
		while(eval(o)) {
			y+=o.style.pixelTop;
			o=o.offsetParent;
		}
		return y;
	} else {
		var m = (b.mac&&b.ie)? document.body.topMargin:0;
		var y=0;
		var incase=0;
		var hasBody=false;
		var hasHtml=false;
		while(eval(o)) {
			y+=o.offsetTop;
			if (b.ie && o.tagName == 'TABLE'){
				incase = y;
				// break;
			} else if (b.ie && o.tagName == 'HTML') {
				hasHtml = true;
			} else if (b.ie && o.tagName == 'BODY') {
				hasBody = true;
			}
			o=o.offsetParent;
		}
		if (hasHtml && !hasBody)
		  y = incase;
		return parseInt(y)+parseInt(m);
	}
};

NextagUtils.showElement = function(e,disp) {
	(!disp)? 0:e.style.display=disp;
	e.style.visibility='visible';
};

NextagUtils.hideElement = function(e,disp) {
	(!disp)? 0:e.style.display=disp;
	e.style.visibility='hidden';
};

NextagUtils.is_khtml = /Konqueror|Safari|KHTML/i.test(navigator.userAgent);

NextagUtils.hideShowCovered = function (elem, tags) {
	NextagUtils.continuation_for_khtml_browser = function() {
		function getVisib(obj){
			var value = obj.style.visibility;
			if (!value) {
				if (document.defaultView && typeof (document.defaultView.getComputedStyle) == "function") { // Gecko, W3C
					if (!NextagUtils.is_khtml)
						value = document.defaultView.
							getComputedStyle(obj, "").getPropertyValue("visibility");
					else
						value = '';
				} else if (obj.currentStyle) { // IE
					value = obj.currentStyle.visibility;
				} else
					value = '';
			}
			return value;
		};

		var el = elem

		var p = NextagUtils.getElementPosition(el);
		var EX1 = p.x;
		var EX2 = el.offsetWidth + EX1;
		var EY1 = p.y;
		var EY2 = el.offsetHeight + EY1;

		for (var k = tags.length; k > 0; ) {
			var tag = tags[--k];
			var filter = null;
			if (tag.indexOf('input.') == 0){
				filter = tag.replace('input.','');
				tag = 'input';
			}
			var ar = document.getElementsByTagName(tag);
			var cc = null;

			for (var i = ar.length; i > 0;) {
				cc = ar[--i];

				if (filter != null && filter != cc.type){
					continue;
				}

				p = NextagUtils.getElementPosition(cc);
				var CX1 = p.x;
				var CX2 = cc.offsetWidth + CX1;
				var CY1 = p.y;
				var CY2 = cc.offsetHeight + CY1;

				if (el.style.visibility == 'visible' || (CX1 > EX2) || (CX2 < EX1) || (CY1 > EY2) || (CY2 < EY1)) {
					if (!cc.__msh_save_visibility) {
						cc.__msh_save_visibility = getVisib(cc);
					}
					cc.style.visibility = cc.__msh_save_visibility;
				} else {
					if (!cc.__msh_save_visibility) {
						cc.__msh_save_visibility = getVisib(cc);
					}
					cc.style.visibility = "hidden";
				}
			}
		}
	};
	if (NextagUtils.is_khtml)
		setTimeout("NextagUtils.continuation_for_khtml_browser()", 10);
	else
		NextagUtils.continuation_for_khtml_browser();
};


/*--*/
function NxtgHttpReq (url, async, cb){
	var mURL = url;
	var mXMLHTTP = null;
	var mAsync = async;
	var mCB = cb;
	var mMethod = "GET";

	this.getURL = function(){return mURL;};
	this.setPost = function(){ mMethod = "POST";}
	this.getData = function(){
		if (mXMLHTTP)
			return mXMLHTTP.responseText;
		return null;
	};
	this.getStatus = function (){
		if (mXMLHTTP)
			return mXMLHTTP.status;
		return 0;
	};
	this.send = function(c){
		if(mXMLHTTP && mXMLHTTP.readyState!=0){
			mXMLHTTP.abort();
		}
		try{
			mXMLHTTP = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try{
				mXMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(sc) {
				mXMLHTTP = null;
			}
		}
		if(!mXMLHTTP && typeof XMLHttpRequest!="undefined"){
			mXMLHTTP = new XMLHttpRequest()
		}
		if (mCB){
			mXMLHTTP.onreadystatechange = function() {
				if (mXMLHTTP.readyState == 4) {
					if (mXMLHTTP.status == 200){
						var res = mXMLHTTP.responseText;
						mCB(res);
					}
				}
			};
		}
		if(mXMLHTTP){
			mXMLHTTP.open(mMethod,this.getURL(),mAsync);
			var content = null;
			if (mMethod == "POST")
				content = c;
			mXMLHTTP.send(content);
		}
	};
};



/*--*/
// requires NextagUtils.js and utils.js

var sTimeouts = new Array();
var sPopupGroups = new Array();
var sGroupPreShowCB = new Array();
var sGroupPostShowCB = new Array();
var sGroupPreHideCB = new Array();
var sGroupPostHideCB = new Array();
var sWindowWidth;
var sWindowHeight;

var sHideElements = new Array("select","input.checkbox");
var sBrowser = new NextagBrowser();

/**
 * PopupManager constructor parameters
 * triggerPrefix	- default 'trigLink'
 * popupPrefix		- default 'popup'
 * leftOffset			- default 0
 * topOffset			- default 0
 * showEvent      - default mouseover
 * hideEvent      - default mouseout
 * delay          - default 250
 * hideOverlay    - default true
 * allowClicks    - default false
 * flipX          - default false
 * flipY          - default false
 * preShow        - default null
 * postShow       - default null
 * preHide        - default null
 * postHide       - default null
 */
function PopupManager(params){
	function setParamDefaults(pname, def) { if (typeof params[pname] == "undefined") { params[pname] = def; } };

	setParamDefaults("triggerPrefix","trigLink");
	setParamDefaults("popupPrefix","popup");
	setParamDefaults("leftOffset",0);
	setParamDefaults("topOffset",0);
	setParamDefaults("showEvent","mouseover");
	setParamDefaults("hideEvent","mouseout");
	setParamDefaults("delay", 250);
	setParamDefaults("hideOverlay", true);
	setParamDefaults("allowClicks", false);
	setParamDefaults("flipX", false);
	setParamDefaults("flipY", false);
	setParamDefaults('preShow', null);
	setParamDefaults('postShow', null);
	setParamDefaults('preHide', null);
	setParamDefaults('postHide', null);

	var mGrpId = sPopupGroups.length;
	var mParams = params;
	
	this.getProperty = function(prop){ return mParams[prop]; }

	this.positionPopup = function(popup,tr,adjust){
		if (!popup || !tr)
			return;

		var top = 0;
		var left = 0;

		if (!mParams['flipY']){
			top = (NextagUtils.getPageY(tr,sBrowser) + mParams['topOffset']);
		} else {
			top = (NextagUtils.getPageY(tr,sBrowser) + NextagUtils.getElementHeight(tr,sBrowser) + mParams['topOffset']);
		}
		if (!mParams['flipX']){
			left = (NextagUtils.getPageX(tr,sBrowser) + mParams['leftOffset']);
		} else {
			left = (NextagUtils.getPageX(tr,sBrowser) + NextagUtils.getElementWidth(tr,sBrowser) + mParams['leftOffset']) ;
		}

		popup.style.top = top + 'px';
		popup.style.left = left + 'px';
	};


	if (sBrowser.op)
	  return;

	sPopupGroups[sPopupGroups.length] = this;

	/** private instance methods **/
  var init = function(){
		if (!document.getElementById) {
			return false;
		}

		if( sBrowser.mac == 1 && sBrowser.ie5 == 1 ) {
			return;
		}

		if (mParams['preShow'] != null)
			sGroupPreShowCB[mGrpId] = mParams['preShow'];
		if (mParams['postShow'] != null)
			sGroupPostShowCB[mGrpId] = mParams['postShow'];
		if (mParams['preHide'] != null)
			sGroupPreHideCB[mGrpId] = mParams['preHide'];
		if (mParams['postHide'] != null)
			sGroupPostHideCB[mGrpId] = mParams['postHide'];

		var trigs = 0;
		var tr = null;
		while (tr = document.getElementById(mParams['triggerPrefix'] + '_' + trigs)) {
			var popup = document.getElementById(mParams['popupPrefix'] + '_' + trigs);

			sPopupGroups[mGrpId].positionPopup(popup, tr, false);
			if (mParams['showEvent'] == 'click' && mParams['hideEvent'] == 'click'){
				NextagUtils.addEvent(tr, 'click', funcShow(popup.id,trigs), true);
				if (mParams['allowClicks'])
					NextagUtils.addEvent(popup, 'click', funcShow(popup.id,trigs), true);
				NextagUtils.addEvent(document, 'click', funcClickHide(popup.id), true)
			} else if (mParams['showEvent'] == 'click' && mParams['hideEvent'] != 'click'){
				NextagUtils.addEvent(tr, 'click', funcClickShow(popup.id,trigs));
				NextagUtils.addEvent(popup, 'mouseover', funcClickShow(popup.id,trigs));
				if (mParams['hideEvent'].indexOf('element#.')==0){
					var heId = mParams['hideEvent'].replace('element#.','');
					var hes = heId.split(',');
					for (var h=0; h<hes.length; h++){
						var he = document.getElementById(hes[h]+"_"+trigs);
						if (he){NextagUtils.addEvent(he, 'click', funcClickHide(popup.id));}
					}
				} else if (mParams['hideEvent'].indexOf('element.')==0) {
					var heId = mParams['hideEvent'].replace('element.','');
					var hes = heId.split(',');
					for (var h=0; h<hes.length; h++){
						var he = document.getElementById(hes[h]);
						if (he){NextagUtils.addEvent(he, 'click', funcClickHide(popup.id));}
					}
				} else {
					NextagUtils.addEvent(tr, mParams['hideEvent'], funcHide(popup.id));
					NextagUtils.addEvent(popup, mParams['hideEvent'], funcHide(popup.id));
				}
			} else {
				NextagUtils.addEvent(tr, mParams['showEvent'], funcShow(popup.id,trigs), true);
				NextagUtils.addEvent(popup, mParams['showEvent'], funcShow(popup.id,trigs), true);
				if (mParams['hideEvent'].indexOf('element.')==0){
					var he = mParams['hideEvent'].replace('element.','');
				} else {
					NextagUtils.addEvent(tr, mParams['hideEvent'], funcHide(popup.id));
					NextagUtils.addEvent(popup, mParams['hideEvent'], funcHide(popup.id));
				}
			}
			trigs++;
		}
		sWindowWidth = document.body.clientWidth;
		sWindowHeight = document.body.clientHeight;

		return true;
  };

	var funcShow = function (id,num) {
		return new Function("event", "clearTimeout(sTimeouts['"+id+"']);sTimeouts['"+id+"'] = setTimeout(\"PopupManager.show('"+id+"',"+mGrpId+","+num+");\", " + mParams['delay'] + ");");
	};
	var funcHide = function (id) {
		return new Function("event", "clearTimeout(sTimeouts['"+id+"']);sTimeouts['"+id+"'] = setTimeout(\"PopupManager.hide('"+id+"',"+mGrpId+");\", " + mParams['delay'] + ");");
	};

	var funcClickShow = function (id,num) {
		return new Function("event", "clearTimeout(sTimeouts['"+id+"']);sTimeouts['"+id+"'] = setTimeout(\"PopupManager.show('"+id+"',"+mGrpId+","+num+");\", " + 0 + "); NextagUtils.stopEvent(event);");
	};

	var funcClickHide = function (id) {
		return new Function("PopupManager.hide('"+id+"',"+mGrpId+");");
	};

	/** privileged static methods **/
	PopupManager.show = function (id,grpId,pnum) {
		if (grpId >= sPopupGroups.length || pnum < 0)
			return;
		if (id == sTimeouts['lastshown'])
			return;
		var pm = sPopupGroups[grpId];
		PopupManager.hide(sTimeouts['lastshown'], sTimeouts['lastshown_grpid']);
		var fn = sGroupPreShowCB[grpId];
		if (fn != null){fn('preShow',id,grpId,pnum);}
		var tr = document.getElementById(pm.getProperty('triggerPrefix') + '_' + pnum)
		var popup = document.getElementById(pm.getProperty('popupPrefix') + '_' + pnum);
		pm.positionPopup(popup,tr,true);
		sTimeouts['lastshown'] = id;
		sTimeouts['lastshown_grpid'] = grpId;
		var el = document.getElementById(id);
		if (el) {
			if (NextagUtils.is_ie && pm.getProperty('hideOverlay'))
				NextagUtils.hideShowCovered(el,sHideElements);
			el.style.visibility = "visible";
		}
		try {
			if (tr && tr.blur)
				tr.blur();
		} catch (err){}
		fn = sGroupPostShowCB[grpId];
		if (fn != null){fn('postShow',id,grpId,pnum);}
	};

	PopupManager.hide = function (id,grpId) {
		if (grpId >= sPopupGroups.length)
			return;
		var fn = sGroupPreHideCB[grpId];
		if (fn != null){fn('preHide',id,grpId);}
		var pm = sPopupGroups[grpId];
		var el = document.getElementById(id);
		if (el) {
			if (NextagUtils.is_ie && pm.getProperty('hideOverlay') && el.style.visibility == 'visible')
				NextagUtils.hideShowCovered(el,sHideElements);
			el.style.visibility = "hidden";
			sTimeouts['lastshown'] = null;
			sTimeouts['lastshown_grpid'] = null;
		}
		fn = sGroupPostHideCB[grpId];
		if (fn != null){fn('postHide',id,grpId);}
	};


	/** constructor body */
	init();
};

PopupManager.newPopupGroup = function (params){
	new PopupManager(params);
};



/*--*/
/************************** BrowserSniffer.js ***************************/
// load an additional css if this is for calibex
var theURL = location.href;



/************************** Header.js *************************************/
function canSupportBookmark() {
	if ((navigator.platform!="MacPPC") && (navigator.appName=="Microsoft Internet Explorer")) {
		var idx;
		var endIdx;
		var IEVersion = null;
		var major;
		var appVersion = navigator.appVersion;

		if (appVersion.indexOf("AOL") != -1)
			return false;

	    idx = appVersion.indexOf('MSIE');
	    endIdx = appVersion.indexOf(';', idx);
	    IEVersion = appVersion.substring(idx + 5, endIdx);
	    idx = IEVersion.indexOf(".");
	    if (idx == -1) {
	    	major = IEVersion;
	    } else {
		    major = IEVersion.substring(0, idx);
		}

    	if (major >= "4")
    		return true;
    }

	return false;
}

function setAction(selectObj, form) {
	form.action = selectObj.options[selectObj.options.selectedIndex].value;
}
// *********************** from javascript.js ******************************
// whitespace characters
var whitespace = " \t\n\r";

function showHelp2(page) {
	popupWindow("/buyer/help.jsp?page="+page,"Help","resizable=1,menubars=1,width=475,height=400");
}

function selectValue(slt) {
	return slt==null ? null : slt.options[slt.selectedIndex].value;
}

// Removes all characters which appear in string bag from string s.
function stripCharsInBag (s, bag) {   
	var i;
    var returnString = "";

    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) {
        	returnString += c;
        }
    }

    return returnString;
}

// Removes all characters which do NOT appear in string bag 
// from string s.
function stripCharsNotInBag (s, bag){   
	var i;
    var returnString = "";

    // Search through string's characters one by one.
    // If character is in bag, append to returnString.
    for (i = 0; i < s.length; i++) {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}

// Removes all whitespace characters from s.
// Global variable whitespace
// defines which characters are considered whitespace.
function stripWhitespace(s){   
	return stripCharsInBag(s, whitespace);
}

function popupWindow(url,name,features) {
	// kludged for IE
	var x = name;
	if( document[name]!=null && !document[name].closed ) {
//		document[name].focus();
		document[name].close();
		name += "x";
	}
	document[x] = window.open(url,name,features);
}
function load(url) {
location=url;
}
function click(url) {
open(url, "_blank");
}
function rating(url) {
location=url + '&#rating';
}
// for BBBOnline Window
function Certify(URL) {
  popupWin = window.open(URL, 'Participant', 'location,scrollbars,width=450,height=300')
  window.top.name = 'opener';
}

// Script for Pop-up Help Windows
	var helpWin = null;
	function showHelp(filename) {
 		var helpWin = window.open(filename,'Help','width=400,height=300,resizable=yes,scrollbars=yes,top=50,left=100');
	}

// Script for Signio pop-up window
	var signioWindow = null;
	function signioWin(name,url) {
	signioWindow = window.open(url,name,'width=500,height=350,resizable=yes,scrollbars=yes,top=50,left=50');
	}

var gsBlankIcon="/images/1x1blank.gif";
function showtip(current,e,text) //shows tooltips on images
{
    if (document.all) //Used to detect IE so that the tooltip renders correctly
    {
       thetitle=text.split('<br />')
       if (thetitle.length > 1)
       {
          thetitles=""
          for (i=0; i<thetitle.length; i++)
              thetitles += thetitle[i] + "\r\n"
          current.title = thetitles
       }
       else current.title = text
    }
}
// ************************** from EnterEmailJS.jsp **************************
function emailCheck (emailStr, ack) {
/*
The following pattern is used to check if the entered e-mail address
   fits the user@domain format.  It also is used to separate the username
   from the domain.
*/
var emailPat=/^(.+)@(.+)$/
/*
 The following string represents the pattern for matching all special
   characters.  We don't want to allow special characters in the address.
   These characters include ( ) < > @ , ; : \ " . [ ]
*/
var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
/*
 The following string represents the range of characters allowed in a
   username or domainname.  It really states which chars aren't allowed.
*/
var validChars="\[^\\s" + specialChars + "\]"
/*
 The following pattern applies if the "user" is a quoted string (in
   which case, there are no rules about which characters are allowed
   and which aren't; anything goes).  E.g. "jiminy cricket"@disney.com
   is a legal e-mail address.
*/
var quotedUser="(\"[^\"]*\")"
/*
 The following pattern applies for domains that are IP addresses,
   rather than symbolic names.  E.g. joe@[123.124.233.4] is a legal
   e-mail address. NOTE: The square brackets are required.
*/
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
/*
 The following string represents an atom (basically a series of
   non-special characters.)
*/
var atom=validChars + '+'
/* The following string represents one word in the typical username.
   For example, in john.doe@somewhere.com, john and doe are words.
   Basically, a word is either an atom or quoted string.
*/
var word="(" + atom + "|" + quotedUser + ")"
/*
 The following pattern describes the structure of the user
*/
var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
/*
 The following pattern describes the structure of a normal symbolic
   domain, as opposed to ipDomainPat, shown above.
*/
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
/*
   Finally, let's start trying to figure out if the supplied address is
   valid.

   Begin with the coarse pattern to simply break up user@domain into
   different pieces that are easy to analyze.
*/
var matchArray=emailStr.match(emailPat)
if (matchArray==null) {
/*
    Too many/few @'s or something; basically, this address doesn't
    even fit the general mould of a valid e-mail address.
*/
	alert("Please type a valid e-mail address")
	return false
}
var user=matchArray[1]
var domain=matchArray[2]
/*
See if "user" is valid
*/
if (user.match(userPat)==null) {
/*
   user is not valid
*/
    alert("The username is invalid")
    return false
}
/*
   if the e-mail address is at an IP address (as opposed to a symbolic
   host name) make sure the IP address is valid.
*/
var IPArray=domain.match(ipDomainPat)
if (IPArray!=null) {
/*
   this is an IP address
*/
	  for (var i=1;i<=4;i++) {
	    if (IPArray[i]>255) {
	        alert("Destination IP address is invalid")
		return false
	    }
    }
    return true
}
/*
   Domain is symbolic name
*/
var domainArray=domain.match(domainPat)
if (domainArray==null) {
	alert("The domain name is invalid")
    return false
}
/*
   domain name seems valid, but now make sure that it ends in a
   three-letter word (like com, edu, gov) or a two-letter word,
   representing country (uk, nl), and that there's a hostname preceding
   the domain or country.

   Now we need to break up the domain to get a count of how many atoms
   it consists of.
*/
var atomPat=new RegExp(atom,"g")
var domArr=domain.match(atomPat)
var len=domArr.length
if ((domArr[domArr.length-1].length<2 ||
    domArr[domArr.length-1].length>3) && domArr[domArr.length-1] != "name") {
/*
   the address must end in a two letter or three letter word.
*/
   alert("The e-mail address must end in a three-letter domain, or two letter country")
   return false
}
/*
   Make sure there's a host name preceding the domain.
*/
if (len<2) {
   var errStr="This address is missing a hostname"
   alert(errStr)
   return false
}
/*
   If we've gotten this far, everything's valid! 
*/
if (ack)
	alert("Thank you for submitting your e-mail");
return true;
}
// ************************ from ProductCoreHTML.js **********************
function isChecked(a) {
	if( navigator.userAgent.indexOf("AOL") != -1 )
		return true;
	if( a.checked != null )
		return a.checked;
	for( i=0; i<a.length; i++ ) {
		if( a[i].checked )
			return true;
	}
	return false;
}

function doBid() {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;

	if(  !isChecked(theForm.tags) ) {
		alert("Please select seller(s) to whom you wish to send this offer.");
		return;
	}
	theForm.cmd.value = "doBid";
	theForm.submit();
}

function counterOffer() {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;
	
	if(  !isChecked(theForm.tags) ) {
		alert("Please select seller(s) to whom you wish to send this offer.");
		return;
	}
	var price = window.prompt("Please enter the Total Price you are willing to Pay","");
	if( price==null ) {
		return;
	}
	theForm.bidPrice.value = price;
	theForm.cmd.value = "doBid";
	theForm.submit();
}

function setShipping() {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;
	
	theForm.cmd.value = "setShipping";
	theForm.submit();
}

function setZipCode() {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;
	
	theForm.cmd.value = "changeZipcode";
	theForm.submit();
}

function changeZipCode(curZip) {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;
	
	var valid = false;
	var zip;
    while (!valid) {
		zip = prompt('Enter New Zip Code:', curZip);
		if ( zip == null )
			return;
		valid = validateZipCode(zip,"true");
    }
	theForm.zipcode.value = zip;
	setZipCode();
}

function getZipCodeErrors(zip,allowEmptyZip)
{
	var errors = "";

	len = zip.length;
	digits = "0123456789";
	
	if(len == 0)
	{
		if (allowEmptyZip){
			return errors;
		}
		return "Please enter a zip code";
	}

	if(len != 5 && len != 10)
	{
		errors = "Zip code is not the correct length";
	}

	for(i = 0; i < 5; i++)
	{
		if (digits.indexOf(zip.charAt(i))<0)
		{
			errors = "First five digits must be numeric";
		}
	}

	return errors;
}

function validateZipCodeForm(theForm)
{
	return validateZipCode(theForm.zipcode.value,"false");
}

function validateZipCodeForm(theForm,allowEmptyZip)
{
	return validateZipCode(theForm.zipcode.value,allowEmptyZip);
}

function validateZipCode(zip,allowEmptyZip)
{
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;
	
	var valid = true;

	errors = getZipCodeErrors(zip,allowEmptyZip);
	
	if(errors.length > 0)
	{
		alert(errors);
		theForm.zipcode.focus();
		valid = false;	
	}
	
	return valid;
}


function showPriceWin(url) {
	popupWindow(url, "PriceHistory", "status=no,width=500,height=550,scrollbars=yes,resizable=1");
}

function rtUpdate() {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;
	
	theForm.cmd.value = "rtUpdate";
	theForm.submit();
}

function deleteOffers() {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;
	
	theForm.cmd.value = "deleteOffers";
	theForm.submit();
}

function showMessageWin(url) {
	popupWindow(url, "Message", "resizable=1,menubars=1,scrollbars=1,width=400,height=300");
}

function addToList() {
	var theForm = document.getElementById('theForm');
	if( theForm == null ) theForm = document.theForm;

	theForm.cmd.value = "addToList";
	theForm.submit();
}

/**************************** from x10.js *******************************/
/*
For use with X10.com Advertising PopUps
 */

/*THESE ARE THE DIFFERENT SETTINGS FOR THE POPUP*/

var pWidth  = 720; //Window Width

var pHeight = 320; //Window Height

var pTop = 20; // Align Top

var pLeft = 20;  //Align left

var pTitlebar = 1;   // 1 is on, 0 is off

var pToolbar  = 1;   // 1 is on, 0 is off

var pLocation = 1;   // 1 is on, 0 is off

var pMenubar  = 1;   // 1 is on, 0 is off

var pScrollbars = 1; // 1 is on, 0 is off

var pResizable = 1;  // 1 is on, 0 is off

var pStatus    = 1;  // 1 is on, 0 is off

var pUpDown = 0;     // 1 pop's up, 0 pop's down

//var pUrl = "http://ads.x10.com/?Z25leHRhZ1BVMS5kYXQ=[DECACHE]>nxtPU001"; // POPUP WINDOW URL
//var pUrl = "http://ads.x10.com/?Z25leHRhZ1BVMS5kYXQ=[DECACHE]>parrot";
//var pUrl = "http://www.webcreditreport.com/popunders/1.asp?sc=17257001";
var pUrl = "/serv/intel/buyer/OutPDir.jsp#ad";

//var pName = "X10" // POPUP WINDOW NAME THERE SHOULD NOT BE ANY SPACES
var pName = "INTEL";
//var pName = 'Click here for your Free Credit Report';

/*SETTING VALUES FOR THE COOKIE MONSTER*/

var domain = ".nextag.com" // <<<-------- EDIT THIS ONE ADVERTISE DOMAIN
/************DON'T EDIT THIS PART************/

/*SETTING VALUES FOR THE COOKIE MONSTER*/
var CookieName = "x10cookiemonster"

function popUnder()
{

//alert("cookie = " + document.cookie);
        if(document.cookie.indexOf(CookieName) == -1)
        {
                /*IF COOKIE IS NOT FOUND WRITE COOKIE AND DISPLAY POPUP*/
                var today = new Date();
                var expires = new Date();
                expires.setTime(today.getTime() + 1000*60*60*12);
                var domain = "nextag.com";
                if (document.domain.indexOf(domain) == -1)
                	domain = '';
                if (domain.length > 0 )
                	domain = "domain=." + domain + ';';
                document.cookie = CookieName+"=1;expires="+expires.toGMTString()+"; path=/ ;"+domain;
        
var pSettings = "titlebar="+pTitlebar+",toolbar="+pToolbar;

//			    var pSettings = "width="+pWidth+",height="+pHeight+",titlebar="+pTitlebar+",toolbar="+pToolbar+",location="+pLocation;
        
//                pSettings += ",menubar="+pMenubar+",scrollbars="+pScrollbars+",resizable="+pResizable+",status="+pStatus;
//+",top="+pTop+",left="+pLeft;
        
//                window.open(pUrl,pName,pSettings);
				window.open(pUrl,pName);
        
                if(pUpDown == 0 )
                {
                        self.focus();
                }
        }
}

function popUp() {}

var now = new Date();
now = now.getTime();
function TimeStampURL(url) {
	return url + "&c=" + now;
}


function showRatingsPopup(url) {
	window.open(url,"","width=260,height=180,");
}

function showNamedPopup(url, name) {
	window.open(url,name,"width=260,height=180,");
}

function mailTo(name, domain, options) {
	var mailToString = null;
	if ((name != null) && (domain != null) && (options != null)) {
		mailToString = "mailto:"+name+"@"+domain+"?"+options;
	}
	else if ((name != null) && (domain != null)) {
		mailToString = "mailto:"+name+"@"+domain;
	}

	if (mailToString != null) {
		window.location = mailToString;
	}
}


function compareProd(nav_url_str)	{
	if (!document.getElementById('resultForm').cptitle) {
		alert('First select products to compare');
		return;
	}
	j = 0;
	for (i = 0; i<document.getElementById('resultForm').cptitle.length; i++) {
		if (document.getElementById('resultForm').cptitle[i].checked == true)
			j++;
	}
	if (j >= 2 && j <= 20) {
		document.getElementById('resultForm').action = nav_url_str;
		document.getElementById('resultForm').submit();
	} else {
		if (j > 20) {
			alert('Please select a maximum of 20 products to compare');
		} else {
			alert('First select up to 20 products to compare');
		}
	}
}

function listCompareProd(nav_url_str)	{
	if (!document.getElementsByName)
		return;

	var cbs = document.getElementsByName('cptitle');
	if (!cbs || cbs.length == 0)
		return;

	var params = '';
	var totalChecked = 0;
	for (var i=0; i<cbs.length; i++){
		if (cbs[i].checked){
			params += 'cptitle=' + cbs[i].value + "&";
			totalChecked++;
		}
	}

	if (totalChecked == 0) {
		alert('First select up to 20 products to compare');
	} else if (totalChecked < 2){
		alert('Please select 2 or more products (up to 20) to compare');
	} else if (totalChecked > 20){
		alert('Please select a maximum of 20 products to compare');
	} else {
		if (nav_url_str.indexOf('?')==-1)
			document.location.href = nav_url_str + '?' + params;
		else if (nav_url_str.indexOf('?nxtg')==-1)
			document.location.href = nav_url_str + params;
		else
			document.location.href = nav_url_str + '&' + params;
	}

	return;
}


function changeOutpdirZipCode(curZip) {
	zip = prompt('Enter new ZIP code:', curZip);
	if ( zip == null )
		return;

	valid = validateOutpdirZipCode(zip);

	if (valid) {
		document.getElementById('resultForm').zipcode.value = zip;
		document.getElementById('resultForm').submit();
	}
}
function validateOutpdirZipCode(zip) {
	var valid = true;
	errors = getZipCodeErrors(zip);
	if(errors.length > 0) {
		alert(errors);
		valid = false;
	}
	return valid;
}

function largePhotos(ptid)
{
window.open("/buyer/More/Hotels/AllHotelPhotos.jsp?ptidPassToAllHotelPhotos="+ptid,"large_photos","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=800, height=580")
}

function popup(mylink, windowname, height, width)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=' + width + ',height=' + height + ',scrollbars=no');
return false;
}


	function reload(form, select) {
		form.cmd.value = '';
		form.submit();
	}

	function addTimeStamp(url) {
		var currTime = new Date();
		currTime = currTime.getTime();
		return url + "&c=" + currTime;
	}

	/*
	This will take text and truncate it to a certain length.
	if it truncates in the middle of a word (indicated by
	a space), then it will back off and cut off to the closest
	space while making sure the returned text is still under
	the limit.  In other words, it rounds down if it encounters
	truncated text.
	*/
	function truncateText(text, limit) {
		if( text.length < limit ) return text;

		var temp = text.substring(0, limit);
		var lastSpaceIndex = temp.lastIndexOf(' ');

		return temp.substring(0, lastSpaceIndex);
	}

	function showPartDescription(originalContent, elementIdToTruncate, cutOffLimit, graceCutOffLimit, moreText) {
		var link = "";
		var max = parseInt(cutOffLimit) + parseInt(graceCutOffLimit);
		if ( originalContent.length > max ) {
			link = createLink("javascript:showAllDescription('" + elementIdToTruncate + "', " + cutOffLimit + ")", moreText);
			document.getElementById(elementIdToTruncate).innerHTML = truncateText(originalContent, cutOffLimit) + " " + link;
		}
	}

	function showAllDescription(elementIdToShow, cutOffLimit) {
		if ( originalContent.length > cutOffLimit ) {
			link = createLink("javascript:showPartDescription('" + elementIdToShow + "')", "hide...");

		}
		document.getElementById(elementIdToShow).innerHTML = originalContent; //original content is in the jsp
	}

	function showOutpdirAllDescription(elementIdToShow, elementIdToHide) {
		document.getElementById(elementIdToShow).style.display = "inline";
		document.getElementById(elementIdToHide).style.display = "none";
	}
	
	function createLink(href, value) {
		return "<a href=\"" + href + "\">" + value + "</a>";
	}

	/* hideAll, writeBrowseMore and showMore are used for the Browse page */
	function hideAll(tagname, classname, viewValue) {
	    var elements = document.getElementsByTagName(tagname);
	    for (var i=0; i < elements.length; i++) {
	        if (elements[i].className == classname) {
	            elements[i].style.display=viewValue;
	        }
	    }
	}

	/* hideAll, writeBrowseMore and showMore are used for the Browse page */
	function showMore(node) {
		var spanId = 'span_' + node;
		var moreId = 'more_' + node;
		document.getElementById(spanId).style.display='inline';
		document.getElementById(moreId).style.display='none';
	}
	/* hideAll, writeBrowseMore and showMore are used for the Browse page */
	function writeBrowseMore(node, moreText) {
		document.write('<span id="more_' + node + '" name="more_link">,&nbsp; <a href="javascript:showMore(\'' + node + '\')">' + moreText + '</a></span>');
	}

	/* Review Ratings.js */
	function popup(url) {
    window.open(url, "", "menubar=no,height=500,width=600,scrollbars,resizable");
	}
	
	function showMoreNodes(node, isBestRefinementView) {
		var divId = 'div_' + node;
		var moreId = 'more_' + node;
		document.getElementById(divId).style.display='inline';
		if ( !isBestRefinementView ) {
			document.getElementById(moreId).style.display='none';
		} else {
			document.getElementById(moreId).href = "javascript:showLessNodes('"+node+"', " + isBestRefinementView+ ")";
			document.getElementById(moreId).innerHTML = "&laquo; fewer categories";
		}
	}

	function showLessNodes(node, isBestRefinementView){
		var divId = 'div_' + node;
		var moreId = 'more_' + node;
		document.getElementById(divId).style.display='none';
		document.getElementById(moreId).href = "javascript:showMoreNodes('"+node+"', " + isBestRefinementView + ")";
		document.getElementById(moreId).innerHTML = "more categories &raquo;";
	}


/*--*/
var newstar = 0;
var emptystar = 1;
var fullstar = 2;
var halfstar = 3;

var imgArray = new Array(4);
imgArray[newstar] = "/images/newstar.gif";
imgArray[emptystar] = "/images/emptystar.gif";
imgArray[fullstar] = "/images/fullstar.gif";
imgArray[halfstar] = "/images/halfstar.gif";

function updateStars(n) {
  var i = 1;
  for (; i <= n; i++) {
    document["star"+i].src = imgArray[newstar];
  }
  for (; i <= 5; i++) {
    document["star"+i].src = imgArray[emptystar];
  }
}

function showRating(n) {
  var i = 1;
  var numstars = Math.round(n);
  for (; i <= numstars; i++) {
    document["star"+i].src = imgArray[fullstar];
  }
  for (; i <= 5; i++) {
    document["star"+i].src = imgArray[emptystar];
  }		
}

function submitRatingNew(popupurl) {
  window.open(popupurl,"","width=260,height=290");
}
function submitRating(n, reviewurl, cc) {
  // Build the reviewurl
  //the following was created for xhtml compatibility.
  //in xhtml 1.1, forms are not allowed to have names, so we change that in
  //the xhtml versions of our page.
  //

  var theRatingForm = document.getElementById('ratingform');
  if( theRatingForm == null ) theRatingForm = document.ratingform;

  theRatingForm.command.value = "add";
  theRatingForm.newrating.value = n;
  theRatingForm.submit();

  if (reviewurl != null && reviewurl != "") {
  	var domain = "";
	if (reviewurl.indexOf("http%3A%2F%2F") == 0 && reviewurl.indexOf("com%2F") != -1) {
		domain = "http://"+reviewurl.substring(13,reviewurl.indexOf("com%2F")+3);  
	} 
	var popupurl = domain+"/serv/" + cc +  "/buyer/ReviewRatingsThankyouPopup.jsp?reviewurl="+reviewurl+"&overallrating="+n;
	var popup_win = window.open(popupurl,"","width=260,height=290,");
  }
}


/*--*/
/* These java functions are shared across NexTag's site */
/* From the header */
window.onerror=handleError;
function handleError(msg, url, line) {
  if (msg == "Not implemented" || msg.indexOf("Access is denied") != -1) {
    return true;
  }
}

/*  convert search term into static link on header and footer search form submission */
function submitStaticSearchLink(sid,nid,url){
	var nodeDropdown = document.getElementById(nid);
	if(nodeDropdown && nodeDropdown[nodeDropdown.selectedIndex].value != '0') return true;
	if (document.getElementById(sid) != null){
		var sKeyword = document.getElementById(sid).value;
		if (/[^\w\-\s]/.test(sKeyword) || sKeyword.search(/\S/)==-1 || !url) return true;
		sKeyword = sKeyword.replace(/-/g, '_-_');
		sKeyword = sKeyword.replace(/\s+/g, ' ');
		sKeyword = sKeyword.replace(/\s/g, '-');
		var func = typeof(encodeURIComponent) != "undefined" ? encodeURIComponent : escape;
		url = url.replace(/KEYWORD/g, func(sKeyword));
		location.href = url;
		return false;
	}
	return true;
}

/*--*/




/*--*/
var gEL=new Array();
var ATLG = new Array();
function addGlEL(id){gEL[gEL.length]=id;}
function openOptions(lid){var e1 = document.getElementById("lolSpan_" + lid);var e2 = document.getElementById("lopSpan_" + lid);if (e1 && e2){e1.style.display = 'none';e2.style.visibility = 'visible';}}
function editLists(){for (var i=0; i<gEL.length; i++){ openOptions(gEL[i]);} mlEditOptions();}
function renameList(nn,id,url) {var n = prompt("Please enter a new name for your list.", nn);if (n) {window.location.href = url + n;}return false;}
function mlClose(id){var e=document.getElementById(id);if(e){e.style.display='none';}}
function mlLearnMore() {var e = document.getElementById('ml-learn');if (e){mlClose('ml-options');var st = e.style.display;if (st == 'block'){e.style.display='none';}else{e.style.display='block';}}}
function mlSeeDesc() {var e = document.getElementById('ml-desc');if (e){var st = e.style.display;if (st == 'block'){e.style.display='none';}else{e.style.display='block';}}}
function mlEditOptions() {var e = document.getElementById('ml-options');if (e){mlClose('ml-learn');var st = e.style.display;if (st == 'block'){e.style.display='none';}else{e.style.display='block';}}}
function vspa(id){var e = document.getElementById(id);if (e){if (!e.value || e.value.length == 0){alert('Must Specify a Price.');return false;}if(/[^0-9\.]/.test(e.value)){alert("Incorrect Price '" + e.value + "'");return false;}}return true;}
function registerATLG(){for (var i=0; i<ATLG.length; i++){if (ATLG[i]){ATLG[i].e = document.getElementById(ATLG[i].id);ATLG[i].e.onclick = new Function("event","return _hatlgclick(event,"+i+");")}}}
function _hatlgclick(ev,ind){
	if (ind >= ATLG.length){
		return true;
	}
	var o = ATLG[ind];
	var xpos = window.screenX + (window.outerWidth/2) - 200;
	var ypos = window.screenY + (window.outerHeight/2) - 125;
	var nw = window.open(o.u, "atlWindow","status=0,resizable=0,width=450,height=250,screenX="+xpos+",screenY="+ypos);
	nw.focus();
	var e = ATLG[ind].e;
	if (e){
		if (o.ta && o.ta.length>0)
			e.innerHTML = o.ta;
		if (o.ca && o.ca.length>0)
			e.style.color = o.ca;
		if (o.ua && o.ua.length>0)
			e.href = o.ua;
		e.onclick = null;
		NextagUtils.stopEvent(ev);
		return false;
	}
	return true;
}


/*--*/
var SMONTO = 30000;
var TMONTO = 600000;
function cube(params){
	function set_defs(n,d) { if (typeof params[n] == "undefined") { params[n] = d; } };

	set_defs("dg",false);

	var _p = params;
	var dg_ = _p['dg'];
	var _dgw = null;
	var _buf = new Array();

	var __event = function(e){return e?e:window.event;}

	var __target = function(e){
		return (e.target)?e.target:e.srcElement;
	}

	var __scrollc = function(){
		if( typeof( window.pageYOffset ) == 'number' ) {
			return {x:window.pageXOffset,y:window.pageYOffset};
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			return {x:document.body.scrollLeft,y:document.body.scrollTop};
		} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			return {x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop};
		}
		return {x:-1,y:-1};
	}
	var __size = function(){
		if( typeof( window.innerWidth ) == 'number' ) {
			return {w:window.innerWidth,h:window.innerHeight};
		} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			return {w:document.documentElement.clientWidth,h:document.documentElement.clientHeight};
		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			return {w:document.body.clientWidth,h:document.body.clientHeight};
		}
	}

	var __position = function(e){
		if (e.pageX || e.pageY)
			return {x:e.pageX,y:e.pageY};
		else if (e.clientX || e.clientY)
			return {x:e.clientX+document.body.scrollLeft,y:e.clientY+document.body.scrollTop};
		return {x:0,y:0};
	}

	var _debug = function(m){if (_dgw&&_dgw.document)_dgw.document.writeln('> ' + m + '<br/>');}
	var _cap = function(e,v,dd){
		var s="ev"+e+"="+new Date().getTime()+";"+v;
		var p = _buf.length;
		if (dd&&_buf.length>0&&_buf[_buf.length-1].indexOf("ev"+e)==0)
			p=_buf.length-1;
		_buf[p]=s;
		_debug(s);
	}
	var __last = new Date();
	var __lasti = -1;
	this.tmon = function(){
		var now = new Date();
		_debug("__tmon: " + __last + " | " + __lasti + " | " + now + " | " + _buf.length);
		var diff = now.getTime() - __last.getTime();
		if (diff<TMONTO){
			setTimeout("cube_inst.tmon()",TMONTO-diff);
			return;
		}
		__send();
		setTimeout("cube_inst.tmon()",TMONTO);
	}
	this.smon = function(){
		var now = new Date();
		_debug("__smon: " + __last + " | " + __lasti + " | " + now + " | " + _buf.length);
		var bsz = _buf.length;
		if (__lasti >= 0){
			bsz -= __lasti;
		}
		if (bsz >= 20)
			__send();
		setTimeout("cube_inst.smon()",SMONTO);
	}
	var __send = function(){
		_debug("sending: " + __last + " | " + __lasti);
		var top = _buf.length;
		if (__lasti == top-1){
			__last = new Date();
			return;
		}
		var u = _p['id'] + "$";
		var st = __lasti==-1?0:__lasti;
		for (var i=st; i<top; i++){
			u += _buf[i] + "$";
		}
		_debug("send url: " + u);
		if (http)
			http.send(u);
		__lasti = top-1;
		__last = new Date();
	}
	var http = null;
	var _init = function(ev){
		if (dg_){_dgw = window.open("about:blank","cubedgw","width=300,height=800,scrollbar=1");}

		var dim = __size();
		var ilog = document.body.scrollWidth + "x" + document.body.scrollHeight + "-" + dim.w + "x" + dim.h;

		var _events = _p['cap'];
		if (_events){
			ilog += ";[load,unload";
			for (var i=0; i<_events.length; i++){
				var prt = _events[i].split('.');
				var elem = null;;
				var capev = null;
				if (prt.length==1){
					elem = window;
					capev = prt[0];
				} else if (prt.length == 2){
					capev = prt[1];
					if (prt[0]=='window') elem = window;
					else if (prt[0]=='document') elem = document;
					else elem = document.getElementById(prt[0]);
				}
				if (elem && capev){
					ilog += ","+_events[i]
					if (capev=='click') NextagUtils.addEvent(elem,'click',_hc);
					else if (capev=='scroll') elem.onscroll = _hs;
					else if (capev=='resize') elem.onresize = _hr;
					else if (capev=='blur') NextagUtils.addEvent(elem,'blur',_hb);
					else if (capev=='focus') NextagUtils.addEvent(elem,'focus',_hf);
					else if (capev=='dblclick') NextagUtils.addEvent(elem,'dblclick',_hdc);
					else if (capev=='mousemove') NextagUtils.addEvent(elem,'mousemove',_hmm);
					else if (capev=='mouseover') NextagUtils.addEvent(elem,'mouseover',_hmov);
					else if (capev=='mouseout') NextagUtils.addEvent(elem,'mouseout',_hmot);
					else if (capev=='change') NextagUtils.addEvent(elem,'change',_hfc);
					else if (capev=='submit') NextagUtils.addEvent(elem,'submit',_hfs);
					else if (capev=='reset') NextagUtils.addEvent(elem,'reset',_hfr);
					else if (capev=='select') NextagUtils.addEvent(elem,'select',_hfsl);
				}
			}
			ilog += "]";
		}
		setTimeout("cube_inst.tmon()",600000);
		setTimeout("cube_inst.smon()",30000);
		_cap("init",ilog);
		http = new NxtgHttpReq("/tools/cube.jsp",true);
		http.setPost();
		return true;
	}

	var __cge = function(ev,v,dd){
		if(!dd||dd == undefined) dd=false;
		var _e = __event(ev);
		var _t = __target(_e);
		var _v = v?v:"-";
		if (_t&&_t.id)
			_v += "."+_t.id;
		_cap(_e.type,_v,dd);
		return true;
	}
	var _unload = function(ev){
		__cge(ev);
		__send();
	}
	var _hc = function(ev){var p = __position(__event(ev));return __cge(ev,p.x+"."+p.y);}
	var _hs = function(ev){
		var _e = __event(ev);
		var sc = __scrollc();
		return __cge(ev,sc.x+"x"+sc.y,true);
		return true;
	}
	var _hr = function(ev){
		var dim = __size();
		return __cge(ev,document.body.scrollWidth + "x" + document.body.scrollHeight + "-" + dim.w + "x" + dim.h);
	}
	var _hb = function(ev){return __cge(ev,null,true);}
	var _hf = function(ev){return __cge(ev,null,true);}
	var _hdc = function(ev){var p = __position(__event(ev));return __cge(ev,p.x+"."+p.y);}
	var _hmm = function(ev){return __cge(ev);}
	var _hmov = function(ev){return __cge(ev);}
	var _hmot = function(ev){return __cge(ev);}
	var _hfc = function(ev){return __cge(ev);}
	var _hfsl = function(ev){return __cge(ev);}
	var _hfs = function(ev){return __cge(ev);}

	NextagUtils.addEvent(window,'load',_init);
	NextagUtils.addEvent(window,'unload',_unload);
};

var cube_inst = null;
function initCube(p){
	if (cube_inst == null){ cube_inst = new cube(p); }
	return cube_inst;
}
