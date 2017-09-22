
var _cookies = null;

//-------------------------------------------------------------
// Load all cookies into _cookies array
function getCookies() {
	if (_cookies == null) {
		var _cookies = new Array();
		var args = document.cookie.split('; ');
		for (var i=0; i<args.length; i++) {
			var arg = args[i].split('=');
			_cookies[arg[0]] = unescape(arg[1]);
		}
	}
	return _cookies;
}
//-------------------------------------------------------------
// Get a value of a cookie
function getCookie(name) {
	var cookies = this.getCookies();
	return cookies[name];
}
//-------------------------------------------------------------
// Save a cookie
function setCookie(name, value, expires, path, domain, secure) {
	if (domain == 1) {
		domain = document.location.hostname;
	} else if (domain == 2) {
		var matches = document.location.hostname.match(/(\.\w+\.\w+)$/);
		if (matches)
			domain = matches[1];
	}
	document.cookie = name + "=" + escape (value) +
		((expires) ? "; expires=" + expires : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}
//-------------------------------------------------------------
// Delete a cookie
function deleteCookie(name, path, domain) {
	if (domain == 1) {
		domain = document.location.hostname;
	} else if (domain == 2) {
		var matches = document.location.hostname.match(/(\.\w+\.\w+)$/);
		if (matches)
			domain = matches[1];
	}
	if (getCookie(name)) {
		document.cookie = name + "=" +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}
