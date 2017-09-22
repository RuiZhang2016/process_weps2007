//$Id: flsh_nav.js,v 1.3 2006/10/31 20:56:30 ghoffman Exp $
//$Source: /bbsrc/web/docs/en/jscommon/flsh_nav.js,v $
//$Revision: 1.3 $
 
 											   
var FlashMode = 0;
var FlashVer = 0;
if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
	if (navigator.plugins && navigator.plugins["Shockwave Flash"] && (FlashVer = navigator.plugins["Shockwave Flash"].description.indexOf(".")) != - 1) {
		var versionString = navigator.plugins["Shockwave Flash"].description.substring(FlashVer-1,FlashVer);
		FlashVer = parseInt( versionString );
		if ( FlashVer >= 5 ) {
			FlashMode = 1;
		}
	}
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0 )) {
	document.write('<SCRIPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('For jj = 9 To 1 Step -1 \n');
	document.write('FlashMode = IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & jj)) \n');
	document.write('If FlashMode Then \n');
	document.write('FlashVer = CStr(jj) \n');
	document.write('Exit For \n');
	document.write('End If \n');
	document.write('Next \n');
	document.write('</SCRIPT\> \n');
}

function setCookie(MODE) {
	if ( MODE == 'on')
		document.cookie="FLASHMODE=off; expires=Wednesday, 09-Nov-99 23:12:40 GMT";
	else
		document.cookie="FLASHMODE=off";
}

function getCookie(Name) {
	var search = Name + "=";
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search) ;
		if (offset != -1) { 
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1) 
				end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		} 
	}
}



function putNWSTick() {
								   
	var id = 'ticker';
	var Text = '<object align="middle" id="newstkr" height="28" width="569" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab# version=6,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param value="sameDomain" name="allowScriptAccess"><param value="http://www.bloomberg.com/newstkr/newstkr.swf" name="movie"><param value="high" name="quality"><param value="#3399ff" name="bgcolor"><embed pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowScriptAccess="sameDomain" align="middle" name="newstkr" height="28" width="569" bgcolor="#3399ff" quality="high" src="http://www.bloomberg.com/newstkr/newstkr.swf"></embed></object>';



	var el = (document.getElementById)? document.getElementById(id): (document.all)? document.all[id]: (document.layers)? document.layers[id]: null;
	if (!el) return;
	if (typeof el.innerHTML!="undefined") {
		el.innerHTML = Text;
	} else if (document.layers) {
		el.document.write(Text);
		el.document.close();
	}
}

function PutNav_JP(choice){
	if (typeof getCookie('FLASHMODE') == "undefined" && FlashMode) {
		var navbar = '<OBJECT ALIGN="" id="Primary_nav_jp" HEIGHT="49" WIDTH="770" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">'
		+ '<PARAM VALUE="http://www.bloomberg.co.jp/Primary_nav_jp.swf?currentSection='
		+ choice + '" NAME="movie"><PARAM VALUE="high" NAME="quality"><PARAM VALUE="#333333" NAME="bgcolor">'
		+ '<EMBED PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" TYPE="application/x-shockwave-flash" ALIGN="" NAME="nav_102902" HEIGHT="49" WIDTH="770" FlashVars="currentSection=' + choice + '" bgcolor="#333333" quality="high" src="http://www.bloomberg.co.jp/Primary_nav_jp.swf?currentSection=' + choice + '">'
		+ '</EMBED></OBJECT>';
		document.write(navbar); 
	} else {    
		document.write('<img class="nav" usemap="#nonflash_jp" alt="" border="0" src="http://images.bloomberg.com/japan/nav/nonflash_' + choice + '_jp.gif">');
	}
}


function putTVAD() {
								   
	var pid = 'tvad';
	var txt = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="300" height="250" id="magtv" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="movie" value="/newstkr/magtv.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><embed src="/newstkr/magtv.swf" quality="high" bgcolor="#000000" width="300" height="250" name="magtv" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';



	var ll = (document.getElementById)? document.getElementById(pid): (document.all)? document.all[pid]: (document.layers)? document.layers[pid]: null;
	if (!ll) return;
	if (typeof ll.innerHTML!="undefined") {
		ll.innerHTML = txt;
	} else if (document.layers) {
		ll.document.write(txt);
		ll.document.close();
	}
}

function putAD() {
								   
	var tpid = 'ad';
	var ttxt = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="300" height="250" id="magtv" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="movie" value="http://www.bloomberg.com/tvradio/tv/magtv3.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><embed src="http://www.bloomberg.com/tvradio/tv/magtv3.swf" quality="high" bgcolor="#000000" width="300" height="250" name="magtv3" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';



	var ll = (document.getElementById)? document.getElementById(tpid): (document.all)? document.all[tpid]: (document.layers)? document.layers[tpid]: null;
	if (!ll) return;
	if (typeof ll.innerHTML!="undefined") {
		ll.innerHTML = ttxt;
	} else if (document.layers) {
		ll.document.write(ttxt);
		ll.document.close();
	}
}