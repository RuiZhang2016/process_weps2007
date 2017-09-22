function ValidateExtraData(thisObject) {
        var ThisElement, CompleteErrorString = "";

        var SelectElements = new
Enumerator(thisObject.getElementsByTagName("SELECT"));

        for (;!SelectElements.atEnd();SelectElements.moveNext())
        {

                ThisElement = SelectElements.item();
                if (ThisElement.getAttribute("ErrorString"))
                {
                        if
(ThisElement.options(ThisElement.selectedIndex).value == "")
                        {
                                CompleteErrorString = CompleteErrorString +
ThisElement.getAttribute("ErrorString") + "\r\n";
                        }

                }

   }

        if (CompleteErrorString)
        {

                alert(CompleteErrorString);
                window.event.returnValue = false;

        }

}


function WM_netscapeCssFix() {

  if (document.WM.WM_netscapeCssFix.initWindowWidth != window.innerWidth || document.WM.WM_netscapeCssFix.initWindowHeight != window.innerHeight) {
    document.location = document.location;
  }
}

function WM_netscapeCssFixCheckIn() {

  if ((navigator.appName == 'Netscape') && (parseInt(navigator.appVersion) == 4)) {
    if (typeof document.WM == 'undefined'){
      document.WM = new Object;
    }
    if (typeof document.WM.WM_scaleFont == 'undefined') {
      document.WM.WM_netscapeCssFix = new Object;
      document.WM.WM_netscapeCssFix.initWindowWidth = window.innerWidth;
      document.WM.WM_netscapeCssFix.initWindowHeight = window.innerHeight;
    }
    window.onresize = WM_netscapeCssFix;
  }
}

WM_netscapeCssFixCheckIn()

// retrieving a cookie.
function getCookie(name){
  var cname = name + "=";
  var dc = document.cookie;
  if (dc.length > 0) {
    begin = dc.indexOf(cname);
    if (begin != -1) {
      begin += cname.length;
      end = dc.indexOf(";", begin);
      if (end == -1) end = dc.length;
        return unescape(dc.substring(begin, end));
    }
  }
  return null;
}

// setting a cookie.
function setCookie(name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + escape(value) +
  ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
  ((path == null) ? "" : "; path=" + path) +
  ((domain == null) ? "" : "; domain=" + domain) +
  ((secure == null) ? "" : "; secure");
}

// deleting a cookie.
function delCookie (name,path,domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

//----------------------------
function MM_swapImgRestore() {
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() {
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() {
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function isNull (val) {
 if (val == "null") {
 	return true;
 }
 if (val == null) {
 	return true;
 }
 if (val == undefined) {
 	return true;
 }
 if (val == 'undefined') {
 	return true;
 }
 if (val == '') {
        return true;
 }
 return false;
}


function getObj(name) {
	if (document.getElementById) {
		this.obj = document.getElementById(name);
		this.style = document.getElementById(name).style;
	} else
	if (document.all) {
		this.obj = document.all[name];
		this.style = document.all[name].style;
	} else
	if (document.layers) {
		this.obj = document.layers[name];
		this.style = document.layers[name];
	}
}

function visib(objName, flag) {
	x = new getObj(objName);
	x.style.visibility = (flag) ? 'visible' : 'hidden';
}

function display(objName, flag) {
	x = new getObj(objName);
	x.style.display = (flag) ? '' : 'none';
}

function addItem2Cart(item, wishlist) {

	for (var i = 0; i < document.forms.length; i++) {
		var form = document.forms[i];

		for (var j = 0; j < form.elements.length; j++) {
			var element = form.elements[j];

			if (element.name == "item" && element.value == item && element.type == "hidden") {
				if (form.addwishlist) {
					if (wishlist) {
						form.addwishlist.value = 1;
					} else {
						form.addwishlist.value = '';
					}
				}

				form.submit();
				return false;
			}
		}
	}

	return true;
}

function valid_alphanum_dash_underscore(value) {
	if (value + "" != "" && value.match(/^[a-zA-Z0-9\-_]+$/)) {
		return true;
	}

	return false;
}

function valid_sku(value) {
	return valid_alphanum_dash_underscore(value);
}

function valid_category(value) {
	return valid_alphanum_dash_underscore(value);
}

function valid_zone(value) {
	return valid_alphanum_dash_underscore(value);
}

// GET parameters

function getParam(param) {
	if (location.search.length < 2) {
		return '';
	}

	var query = location.search.slice(1);
	var parts = query.split('&');
	var params = Array();

	for (var i = 0; i < parts.length; i++) {
		var pair = parts[i].split('=');

		if (pair[0] == param) {
			return pair[1];
		}
	}

	return '';
}

function setParam(query, param, value) {

	var src =new String;
	src =  query + '';

	if (src.indexOf('?') == -1) {
		src = '?';
	}

	//
	// Kaloyan Accumulated Ampersands Fix 2004-Apr-26
	//
	//src = src.replace(/\?/, '?&');
	src = src.replace(/\?(&+)?/, '?&');

	var length = src.length;
	var dst = '';
	var i = 0;

	while (i < length) {

		//
		// Kaloyan Win IE Fix 2004-Apr-26
		//
		//if (src[i] == '&') {
		if (src.charAt(i) == '&') {
			// Check if name is the same
			var name = '';
			for (var j = i + 1; j < length; j++) {
				//
				// Kaloyan Win IE Fix 2004-Apr-26
				//
				//if (src[j] == '=') {
				if (src.charAt(j) == '=') {
					break;
				}

				//
				// Kaloyan Win IE Fix 2004-Apr-26
				//
				//name += src[j];
				name += src.charAt(j);
			}

			if (name == param) {
				for (j++; j < length; j++) {
					//
					// Kaloyan Win IE Fix 2004-Apr-26
					//
					//if (src[j] == '&') {
					if (src.charAt(j) == '&') {
						break;
					}
				}

				i = j;
			}
		}

		//
		// Kaloyan Win IE Fix 2004-Apr-26
		//
		//dst += src[i];
		dst += src.charAt(i);
		i++;
	}

	dst += '&' + param + '=' + value;

	return dst;
}

function enableCond(select, value) {
	if (enableCond.arguments.length < 3) {
		return;
	}

	var disabled = true;
	if (!select.disabled && select.options[select.selectedIndex].value == value) {
		disabled = false;
	}

	for (var i = 2; i < enableCond.arguments.length; i++) {
		enableCond.arguments[i].disabled = disabled;
	}

}

function set_post_params(form, params) {
	for (var i = 0; i < params.length; i+= 2) {
		var name = params[i];
		var value = params[i+1];

		if (form.elements[name]) {
			form.elements[name].value = value;
		} else {
			var j = Math.ceil(i /2);
			form.elements["post" + j].value = value;
			form.elements["post" + j].name = name;
		}
	}
}

