function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
      return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break; 
  }
  return null;
}
function SetCookie (name,value,expires,path,domain,secure) {
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}
function DeleteCookie (name,path,domain) {
  if (GetCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

// This script does all the checks, to choose the style sheet
var prefix = "printpreview=true"
var qs = location.search.substr(location.search.indexOf("?")+1);
var begin = qs.indexOf(prefix);
if (begin == -1) {
	var widthStyle = GetCookie('widthstyle');
	if(widthStyle != null) {
		document.write('<style type="text/css" media="screen" title="default">@import url("/css/'+widthStyle+'.css");</style>');
	} //If cookie width set, use its value
	else {
		var width = 0;
		var large = 829;
		if (window.innerWidth) { // browser supports innerWidth
 			width = window.innerWidth;
		}
		else if (document.all) { // supports document.all (IE 4+)
 			width = document.body.clientWidth;
		}

		if (width >= large) {
    			document.write('<style type="text/css" media="screen" title="default">@import url("/css/smh_wide.css");</style>');
		}

	}  //If not set use autodetect screen width
} else {
document.write('<style type="text/css" media="screen" title="default">@import url("/css/smh_print.css");</style>');
}
