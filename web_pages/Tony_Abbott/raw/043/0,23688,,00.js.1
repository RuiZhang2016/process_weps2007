/* JSON from crockford ninews2 */
var JSON = {
    copyright: '(c)2005 JSON.org',
    license: 'http://www.crockford.com/JSON/license.html',
/*
    Stringify a JavaScript value, producing a JSON text.
*/
    stringify: function (v) {
        var a = [];
/*
    Emit a string.
*/
        function e(s) {
            a[a.length] = s;
        }

/*
    Convert a value.
*/
        function g(x) {
            var b, c, i, l, v;

            switch (typeof x) {
            case 'string':
                e('"');
                if (/["\\\x00-\x1f]/.test(x)) {
                    l = x.length;
                    for (i = 0; i < l; i += 1) {
                        c = x.charAt(i);
                        if (c >= ' ') {
                            if (c == '\\' || c == '"') {
                                e('\\');
                            }
                            e(c);
                        } else {
                            switch (c) {
                            case '\b':
                                e('\\b');
                                break;
                            case '\f':
                                e('\\f');
                                break;
                            case '\n':
                                e('\\n');
                                break;
                            case '\r':
                                e('\\r');
                                break;
                            case '\t':
                                e('\\t');
                                break;
                            default:
                                c = c.charCodeAt();
                                e('\\u00' +
                                    Math.floor(c / 16).toString(16) +
                                    (c % 16).toString(16));
                            }
                        }
                    }
                } else {
                    e(x);
                }
                e('"');
                return;
            case 'number':
                e(isFinite(x) ? x : 'null');
                return;
            case 'object':
                if (x) {
                    if (x instanceof Array) {
                        e('[');
                        l = a.length;
                        for (i = 0; i < x.length; i += 1) {
                            v = x[i];
                            if (typeof v != 'undefined' &&
                                    typeof v != 'function') {
                                if (b) {
                                    e(',');
                                }
                                g(v);
                                b = true;
                            }
                        }
                        e(']');
                        return;
                    } else if (typeof x.valueOf == 'function') {
                        e('{');
                        l = a.length;
                        for (i in x) {
                            v = x[i];
                            if (typeof v != 'undefined' &&
                                    typeof v != 'function' &&
                                    (!v || typeof v != 'object' ||
                                    typeof v.valueOf == 'function')) {
                                if (b) {
                                    e(',');
                                }
                                g(i);
                                e(':');
                                g(v);
                                b = true;
                            }
                        }
                        return e('}');
                    }
                }
                e('null');
                return;
            case 'boolean':
                e(x);
                return;
            default:
                e('null');
                return;
            }
        }
        g(v);
        return a.join('');
    },
/*
    Parse a JSON text, producing a JavaScript value.
    It returns false if there is a syntax error.
*/
    parse: function (text) {
        try {
            return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
                    text.replace(/"(\\.|[^"\\])*"/g, ''))) &&
                eval('(' + text + ')');
        } catch (e) {
            return false;
        }
    }
};



/* -------------------------------------------------------------- */

var ninbar;
var headlinesJSON;
var tickerFadeTime;
var tickerPauseTime;

/* -------------------------------------------------------------- */

function setOpacity(obj, opacity) {
    opacity = (opacity == 100)?99.999:opacity;
    // IE/Win
    obj.style.filter = "alpha(opacity:"+opacity+")";
    // Safari<1.2, Konqueror
    obj.style.KHTMLOpacity = opacity/100;
    // Older Mozilla and Firefox
    obj.style.MozOpacity = opacity/100;
    // Safari 1.2, newer Firefox and Mozilla, CSS3
    obj.style.opacity = opacity/100;
}

function fadeTickerOut(objId,opacity) {
    if (document.getElementById) {
        obj = document.getElementById(objId);
        if (opacity >= 0) {
            setOpacity(obj, opacity);
            opacity -= 2;
            tickerFadeTime = window.setTimeout("fadeTickerOut('"+objId+"',"+opacity+")", 1);
        }
    }
}

function fadeTickerIn(objId,opacity) {
    if (document.getElementById) {
        obj = document.getElementById(objId);
        if (opacity <= 100) {
            setOpacity(obj, opacity);
            opacity += 2;
            tickerFadeTime = window.setTimeout("fadeTickerIn('"+objId+"',"+opacity+")", 1);
        }
    }
}

HeadlineTicker = function() {
    this.index = -1;
	this.pointer = document.getElementById("top-story");
	this.currentSection = 0;
	
	// var r = Math.floor(Math.random()*1011);
	// cache break with r

	this.refJSON = "http://www.news.com.au/js/jsonheadlines/0,21324,,00.js";
	
	this.HEADLINE_MAX = 4; /* pretend const */
	this.scrollMutex = 0;
	
	/* DOM -- insert js */
    var ninbarJSON = document.createElement("script");
	ninbarJSON.setAttribute("type", "text/javascript");
	ninbarJSON.setAttribute("src", this.refJSON);
	var headElement = document.getElementsByTagName("head")[0];
	headElement.appendChild(ninbarJSON);
}

HeadlineTicker.prototype.previousHeadline = function() {
    this.nextHeadline(1, 1);
}

HeadlineTicker.prototype.nextHeadline = function(immediate, reverse) {
	if(headlinesJSON != null) { 	
	    if (!reverse) {
	        if(this.index == headlinesJSON.response.topnews.headline.length - 1) {
	            this.index = 0;
	        } else {
		        ++(this.index);
		    }
	    } else { // backwards is pre routine decrement
	        if(this.index == 0) {
	            this.index = headlinesJSON.response.topnews.headline.length - 1;
	        } else { 
		        --(this.index);
		    }
	    } 
	} else {
	    // init 
		this.index = 0;
	}
	
	if(!headlinesJSON) {
	    return false;
	} else {
	    /* topnews is default */
		if((headlinesJSON.response.topnews.headline[this.index]) == null) {
		    return(false);
		}
	    var headlineText = headlinesJSON.response.topnews.headline[this.index].value + " \u00BB";
	    var headlineHref = headlinesJSON.response.topnews.headline[this.index].href;
		
		var newItem = document.createElement("li");
	 	var newHeadline = document.createElement("a");
	 	newHeadline.setAttribute("href", headlineHref);
	 	var newTextNode = document.createTextNode(headlineText);		
	 	newHeadline.appendChild(newTextNode);
	 	newItem.appendChild(newHeadline);
		document.getElementById("ticker").className = "activated";
		
		var pointer = this.pointer;
		var self = this;
		
		if(!immediate) {
		    fadeTickerOut("headlines", 100);
		    setTimeout(function(){self.replaceHeadline(newItem, pointer);}, 1650); 
			clearTimeout(tickerPauseTime);
		    tickerPauseTime = setTimeout(function(){fadeTickerIn("headlines", 0);}, 1700);
		} else {
		    self.replaceHeadline(newItem, pointer); 
		}
	
	    this.pointer = newItem;
	}
}

HeadlineTicker.prototype.lock = function() {
    this.scrollMutex = 1;
}

HeadlineTicker.prototype.isLocked = function() {
    return(this.scrollMutex);
}

HeadlineTicker.prototype.pause = function() {
    clearInterval(ninbar.tickInterval);
}

HeadlineTicker.prototype.replaceHeadline = function(newItem, itemPointer) {
	 document.getElementById("headlines").replaceChild(newItem, itemPointer);
}

Ninbar = function() {
    this.headlineTicker = new HeadlineTicker();
	this.tickInterval = 0;
	
	
	// interface listener 
	document.getElementById("headlines").onmouseover = function() {
        ninbar.headlineTicker.pause();
	} 
	 
	document.getElementById("next-story").onclick = function() {
	    clearInterval(ninbar.tickInterval);
	    ninbar.headlineTicker.nextHeadline(1, 0);
		if(!ninbar.headlineTicker.isLocked()) {
		    ninbar.tickInterval = setInterval("ninbar.headlineTicker.nextHeadline()", 7000);
		}
	}
		
	document.getElementById("headlines").onmouseout = function() {
	    if(!ninbar.headlineTicker.isLocked()) {
		    ninbar.tickInterval = setInterval("ninbar.headlineTicker.nextHeadline()", 7000);
		}
	}
	
	document.getElementById("prev-story").onclick = function() {
	    clearInterval(ninbar.tickInterval);
	    ninbar.headlineTicker.previousHeadline(1);
		if(!ninbar.headlineTicker.isLocked()) {
		    ninbar.tickInterval = setInterval("ninbar.headlineTicker.nextHeadline()", 7000);
		}
	}
	
	document.getElementById("pause-story").onclick = function() {
		if(!this.activated) {
		    this.activated = true;
			this.src="/couriermail/images/ticker-pause-active.gif";
			ninbar.headlineTicker.pause();
			ninbar.headlineTicker.lock();
		} else {
		    this.activated = false;
			this.src="/couriermail/images/ticker-pause.gif";
			ninbar.tickInterval = setInterval("ninbar.headlineTicker.nextHeadline()", 7000);
		}
		
	}
	
	this.tickInterval = setInterval("ninbar.headlineTicker.nextHeadline()", 7000); 
	
}
