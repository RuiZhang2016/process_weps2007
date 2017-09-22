// Flash Version Detector  v1.2.1
// documentation: http://www.dithered.com/javascript/flash_detect/index.html
// license: http://creativecommons.org/licenses/by/1.0/
// code by Chris Nott (chris[at]dithered[dot]com)
// with VBScript code from Alastair Hamilton (now somewhat modified)
function isDefined(property){
  return (typeof property != 'undefined');
}
var isFlashVersion = 0;
function isgetFlashVersion(){
	var latestFlashVersion = 8;
	var agent = navigator.userAgent.toLowerCase();
	// NS3 needs flashVersion to be a local variable
	if(agent.indexOf("mozilla/3") != -1 && agent.indexOf("msie") == -1){
		isFlashVersion = 0;
	}
	// NS3+, Opera3+, IE5+ Mac (support plugin array): check for Flash plugin in plugin array
	if(navigator.plugins != null && navigator.plugins.length > 0){
		var flashPlugin = navigator.plugins['Shockwave Flash'];
		if(typeof flashPlugin == 'object'){
			for(var i = latestFlashVersion; i >= 3; i--){
				if(flashPlugin.description.indexOf(i + '.') != -1){
					isFlashVersion = i;
					break;
				}
			}
		}
	}
	// IE4+ Win32:  attempt to create an ActiveX object using VBScript
	else if(agent.indexOf("msie") != -1 && parseInt(navigator.appVersion) >= 4 && agent.indexOf("win")!=-1 && agent.indexOf("16bit")==-1){
		var doc = '<scr' + 'ipt language="VBScript"\> \n';
		doc += 'On Error Resume Next \n';
		doc += 'Dim obFlash \n';
		doc += 'For i = ' + latestFlashVersion + ' To 3 Step -1 \n';
		doc += '   Set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash." & i) \n';
		doc += '   If IsObject(obFlash) Then \n';
		doc += '      isFlashVersion = i \n';
		doc += '      Exit For \n';
		doc += '   End If \n';
		doc += 'Next \n';
		doc += '</scr' + 'ipt\> \n';
		document.write(doc);
	}
	// WebTV 2.5 supports flash 3
	else if(agent.indexOf("webtv/2.5") != -1) isFlashVersion = 3;

	// older WebTV supports flash 2
	else if(agent.indexOf("webtv") != -1) isFlashVersion = 2;

	// Can't detect in all other cases
	else{
	isFlashVersion = flashVersion_DONTKNOW;
	}
	return isFlashVersion;
}

flashVersion_DONTKNOW = -1;

var isFlashVersion = isgetFlashVersion();
if(isFlashVersion >= 6) isHasFlash = true;
manageFlashCookie();

function inStoreExemptFlashRapportHack(){
	var agent = navigator.userAgent.toLowerCase();
	// FireFox blocked from Flash Rapport in InStore
	if(agent.indexOf("mac") != -1 || agent.indexOf("firefox") != -1 || (agent.indexOf("cs 2000") != -1 &&  agent.indexOf("7.0") != -1)){
		if(getCookie("wantsFlashstate") != "2"){
			//updateWantsFlashCookie("2");
			document.cookie = "wantsFlashstate=2; path=/;";
			if(getCookie("wantsFlashstate") != null){     // check to see if cookie are disabled
				window.location = window.location.href;
			}
		}
	}
}

function manageFlashCookie(){
	if(getCookie("hasFlashstate") == null){    // cookie isnt already set
		if(isHasFlash){
			updateFlashRapportCookie("1");
		}
		else if(isFlashVersion >= 0){
			isHasFlash = true;  // temp setting of this so that flash gets written to page to prompt download
			updateFlashRapportCookie("3");
		}
		else{
			updateFlashRapportCookie("2");
		}
	}
	else if(getCookie("hasFlashstate") != null){
		if(getCookie("hasFlashstate") == "2" && isHasFlash){
			updateFlashRapportCookie("1");
		}
		if(getCookie("hasFlashstate") == "3" && !isHasFlash){
			updateFlashRapportCookie("2");
		}
		else if(getCookie("hasFlashstate") == "3" && isHasFlash){
			updateFlashRapportCookie("1");
		}
	}
	if(getCookie("wantsFlashstate") != null){        // user has asked to use Flash
		if(getCookie("wantsFlashstate") == "3"){     // temp setting - user has requested Flash but doesnt have plugin
			if(isHasFlash){                           // and has accepted plugin
				updateWantsFlashCookie("1");
			}
			else{
				updateWantsFlashCookie("4");           // temp setting - does user accept plugin?
			}
		}
		else if(getCookie("wantsFlashstate") == "4"){ // temp scenario - 2nd Req after possible plugin install
			if(isHasFlash){                           // and has accepted plugin
				updateWantsFlashCookie("1");
			}
			else{
				updateWantsFlashCookie("0");           // temp setting - does user accept plugin?
			}
		}
	}
}

function reloadHTML(){
	if(getCookie("hasFlashstate") == "3") window.location.href = window.location.pathname;
}

var isRapportFlash;

function isWriteFlash(flashname, divname, w, h, bgcolor,flashVars){
	isFlashCount++;
	if(!bgcolor) bgcolor = '#FFFFFF';
	if(divname == 'rapportFlashObj'){
		isRapportFlash = isFlashCount;
	}
	var flashHtml = '<div class="'+divname+'" id="flashDiv'+isFlashCount+'">';
	flashHtml += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,65,0" width="'+w+'" height="'+h+'" id="flash'+isFlashCount+'" align="">';
	flashHtml += '<param name="movie" value="'+flashname+'"> <param name="quality" value="high"> <param name="bgcolor" value="'+bgcolor+'">';
	if(flashVars != null) flashHtml += '<param name="FlashVars" value="'+flashVars+'">';
	flashHtml += '<embed src="'+flashname+'" quality="high" bgcolor="'+bgcolor+'" width="'+w+'" height="'+h+'" name="flash'+isFlashCount+'" ' + ((flashVars != null) ? ('FlashVars="' + flashVars + '" ') : '') + 'align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
	flashHtml += '</object></div>';
	if(divname == 'rapportFlashObj'){
		isRapportFlash = isFlashCount;
		iswH(isgE('rapportFlash'),flashHtml);
	}
	else{
		document.write(flashHtml);
	}
}

function isReturnFlash(flashname, divname, w, h, bgcolor,flashVars){
	if(!bgcolor) bgcolor = '#FFFFFF';
	var flashHtml = '<div class="'+divname+'" id="flashDivButton">';
	flashHtml += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,65,0" width="'+w+'" height="'+h+'" id="flashButton" align="">';
	flashHtml += '<param name="movie" value="'+flashname+'"> <param name="quality" value="high"> <param name="bgcolor" value="'+bgcolor+'">';
	if(flashVars != null) flashHtml += '<param name="FlashVars" value="'+flashVars+'">';
	flashHtml += '<embed src="'+flashname+'" quality="high" bgcolor="'+bgcolor+'" width="'+w+'" height="'+h+'" name="flashButton" ' + ((flashVars != null) ? ('FlashVars="' + flashVars + '" ') : '') + 'align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
	flashHtml += '</object></div>';
	return flashHtml;
}

function isWriteImg(imgname, divname, linkname, w, h, alt, hasFlash){
	var imgHtml = '<div class="'+divname+'" ';
	if(hasFlash) imgHtml += 'id="flashImgDiv'+isFlashCount+'" style="display:none"';
	imgHtml += '>';
	if(linkname != '') imgHtml += '<a href="'+linkname+'">';
	imgHtml += '<img src="'+imgname+'" width="'+w+'" height="'+h+'" alt="'+alt+'" />';
	if (linkname != '') imgHtml += '</a>';
	imgHtml += '</div>';
	document.write(imgHtml);
}

