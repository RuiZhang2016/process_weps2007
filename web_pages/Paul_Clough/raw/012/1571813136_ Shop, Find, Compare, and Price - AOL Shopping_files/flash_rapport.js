var originalHeight = 74;
var lastHeight = 74;
var g1hrefLoc = null;
var g2hrefLoc = null;
var localConnectionID = Math.round(Math.random() * 999999);

function switchToHTMLVersion(){// code to switch to accessible HTML version goes here.
}

function toggleToDHTML(){
	switchFlashRapport('off', false);
}

function resizeFlash(diff){
	lastHeight = diff;
	openFlash();
}

function closeFlash(){
	if(isgE('rapportFlash')) isgE('rapportFlash').style.height = originalHeight + "px";
	if(isgE('flash'+isRapportFlash)) isgE('flash'+isRapportFlash).height = originalHeight;
	if(isgE('rapportBtmEmpty')) isgE('rapportBtmEmpty').style.display = 'none';
	if(isgE('rapportAutoEmpty')) isgE('rapportAutoEmpty').style.display = 'none';
	if(isgE('rapportSponsors')) isgE('rapportSponsors').style.display = 'none';     
	shade(false);
	return false;
}

function openFlash(showSponsors){
	if(isgE('rapportFlash')) isgE('rapportFlash').style.height = lastHeight + "px";
	if(isgE('flash'+isRapportFlash)) isgE('flash'+isRapportFlash).height = lastHeight;
	if(isgE('rapportSearch')) isgE('rapportSearch').style.display = 'none';
	if(isgE('rapportAutoClose')){
		if(!showSponsors) shade(true);
		if(isgE('rapportAutoClose').style.display != 'block'){
			isgE('rapportAutoClose').style.display = 'block';
			isgE('rapportAutoClose').style.height = '17px';
			isgE('rapportAutoClose').style.paddingLeft = '253px';
			isgE('rapportAutoClose').style.background = 'url(/img/rapport/bg_flash_tab.gif) no-repeat top left';
			isgE('rapportAutoClose').innerHTML = isReturnFlash("/flash/rapport_button.swf", "flash_rapport_button", 121, 15, "#3CA1DD","LCID="+localConnectionID);
		}
	}
	if(isgE('rapportBtmEmpty')) isgE('rapportBtmEmpty').style.display = 'none';
	if(isgE('rapportAutoEmpty')) isgE('rapportAutoEmpty').style.display = 'none';
	if(isgE('rapportBtmClose')) isgE('rapportBtmClose').style.display = 'none';

	if(showSponsors == null || showSLNoRes){
		ismoveFlashSponsors();
	}
	else{
		if(isgE('rapportSponsors')) isgE('rapportSponsors').style.display = 'none';
	}
	return false;
}

function ismoveFlashSponsors(){
    if(isgE('rapportFlash') && isgE('rapportSponsors')){
		endRapport = lastHeight + 10;
	    issY(isgE('rapportSponsors'), endRapport);
	    issE(isgE('rapportSponsors'));
        isgE('rapportSponsors').style.display = 'block';
    }
}

function parseForFilterInfo(){
	var f = window.location.href;
	var filterURL = f.substring(f.lastIndexOf('/')+1,f.length);
	if(filterURL.indexOf("k=") != -1 || filterURL.indexOf("cid=") != -1){
		return "&FILTER_VARS=" + escape(filterURL).split('&').join('|*|');
	}
	else{
		return "";
	}
}
function enableFlash(){
	if(isHasFlash && isgE('rapportFlash')){
		if(isgE('rapportContainer')) toggleDropdowns(isgE('rapportContainer'),'on');
		if(isgE('rapportContainerPP')) toggleDropdowns(isgE('rapportContainerPP'),'on');
		if(isgE('rapportContainerPPc')) toggleDropdowns(isgE('rapportContainerPPc'),'on');
		if(isgE('rapportSearch')) isgE('rapportSearch').style.backgroundColor = bgColours[1];
		if(isgE('rapportFilters')){
			isgE('rapportFilters').style.display = "none";
			isgE('searchSubmit').src="/img/buttons/btn_search_off.gif";
		}
		if(isgE('rapportCategories')) isgE('rapportCategories').style.display = "none";
		if(isgE('rapportSponsors')) ishE(isgE('rapportSponsors'));
		if(isgE('searchButton')) isgE('searchButton').src="/img/rapport/tab_open.gif";
		if(isgE('searchButton')) isgE('searchButton').setAttribute('alt', 'Open');
		if(isgE('searchButton')) isgE('searchButton').setAttribute('title', 'Open');
		if(isgE('rapportSearch')) isgE('rapportSearch').style.display = 'none';
		if(isgE('rapportFlash')) isgE('rapportFlash').style.display = 'block';  
		var filterQS = parseForFilterInfo();
		if(enableFlashDHTMLToggle){
			isWriteFlash('/flash/rapport.swf', 'rapportFlashObj', '100%', '100%', '#EDF8FD','APP_URL=/' + flashPath + '/'+ filterQS + '&APP_XMLPATH=/' + flashXMLPath + '/&LCID=' + localConnectionID + '&show_off=1');
		}
		else{
			isWriteFlash('/flash/rapport.swf', 'rapportFlashObj', '100%', '100%', '#EDF8FD','APP_URL=/' + flashPath + '/'+ filterQS + '&APP_XMLPATH=/' + flashXMLPath + '/&LCID=' + localConnectionID);
		}
	}
	else{
		if (isgE('rapportFlash')) isgE('rapportFlash').style.display = 'none';
	}
}

function ppUpdateSponsoredLinkVars(magic,g1title,g1desc,g1url,g2title,g2desc,g2url){
	ppUpdateSponsoredLinks(magic,g1hrefLoc,g1title,g1desc,g1url,g2hrefLoc,g2title,g2desc,g2url);
	g1hrefLoc = null;
	g2hrefLoc = null;
}

function ppUpdateSponsoredLinks(magic,g1href,g1title,g1desc,g1url,g2href,g2title,g2desc,g2url){
	html="";
	var skipGoogleHTML = null;   //var used to store google html from page and used if mgic returnd ppColapse     
	if(g1href == "null"){
		g1href = null; g1title = null;
		g1desc = null; g1url = null;
	}
	if(g2href == "null"){
		g2href = null; g2title = null;
		g2desc = null; g2url = null;
	}
	if(magic == "null" || !magic) magic = null;

	if(g1href == null && g2href == null && (magic == null || !magic)){
		if(isgE('rapportSponsors')) ishE(isgE('rapportSponsors'));
		if(isgE('rapportAdServer')) isgE('rapportAdServer').style.display = 'none';
		if(isgE('rapportGoogleOff')) isgE('rapportGoogleOff').style.display = 'none';
		if(isgE('rapportGoogle')) isgE('rapportGoogle').style.display = 'none';
		return;
	}
	if(isgE('rapportSponsors')) issE(isgE('rapportSponsors'));
	if(isgE('rapportAdServer')) isgE('rapportAdServer').style.display = 'block';
	if(isgE('rapportGoogleOff')) isgE('rapportGoogleOff').style.display = 'none';
	if(isgE('rapportGoogle')) isgE('rapportGoogle').style.display = 'block';
	if(g1href!=null){
		if(magic!=null){
			html+='<div id="rapportGoogleOff">';
		}
		else{
			html+='<div id="rapportGoogle">';
		}
		html+='<div class="sponsorTopFlash"><div class="sponsorCopy"><img src="/img/rapport/txt_otheroptions.gif" width="96" height="18" alt="Other Options?" title="Other Options?" align="middle" /> Try sponsored links:</div></div><div class="sponsorsBg"><table class="pprpsltbl" border="0" cellspacing="0" cellpadding="0"><tr>';
		html+='<td class="pprpsltd"><div class="pprpsl"><b><a id="ppsl101" class="ppslTitle" href="'+ g1href +'" onclick="isopenFullChromeWindow(this.href, \'\'); return false;">'+ g1title +'</a></b><br /><span class="smallText"><a class="ppslDesc" href="#" onclick="isopenFullChromeWindow(isgE(\'ppsl101\').href, \'\'); return false;">'+ g1desc +'</a><br />';
		html+='<a class="ppsla" href="#" onclick="isopenFullChromeWindow(isgE(\'ppsl101\').href, \'\'); return false;">'+ g1url +'</a></span></div></td>';

		if(g2href!=null){
			html+='<td class="pprpsltdoff"><div>&nbsp;</div></td>';
			html+='<td class="pprpsltd"><div class="pprpsl"><b><a id="ppsl102" class="ppslTitle" href="'+ g2href +'" onclick="isopenFullChromeWindow(this.href, \'\'); return false;">'+ g2title +'</a></b><br /><span class="smallText"><a class="ppslDesc" href="#" onclick="isopenFullChromeWindow(isgE(\'ppsl102\').href, \'\'); return false;">'+ g2desc +'</a><br />';
			html+='<a class="ppsla" href="#" onclick="isopenFullChromeWindow(isgE(\'ppsl102\').href, \'\'); return false;">'+ g2url +'</a></span></div></td>';
		}
		html+='</tr></table><div class="clear"></div></div><div class="sponsorBtm"><img src="/img/rapport/brdr_sponsors_btm.gif" width="364" height="8" alt="" /></div></div>';
	}
	else if(g1href==null && isgE('rapportGoogleOff')){
		skipGoogleHTML = isgE('rapportGoogleOff').innerHTML;
		skipGoogleHTML='<div id="rapportGoogleOff">' + skipGoogleHTML + '</div>';
	}
	// this is done in cases where a skip has happened and there is no GSL in XML
	if(skipGoogleHTML != null && skipGoogleHTML.length > 0) html += skipGoogleHTML;

	if(magic!=null){
		html+='<div id="rapportAdServer">&nbsp;</div>';
		if(isgE('rapportFlashAdserver')) isgE('rapportFlashAdserver').src = '/html/adserver.html?magic=' + encodeURI(magic);
	}
	iswH(isgE('rapportSponsors'),html);
	ismoveFlashSponsors();
}

function ppAdserverCallback(content){
	if(isgE('rapportAdServer')){
		var html='<div class="sponsorTopFlash"><img src="/img/p.gif" width="1" height="23" /></div><div class="sponsorsBg">';
		html+=content;
		html+='<div><img src="/img/p.gif" width="1" height="2" /></div></div><div class="sponsorBtm"><img src="/img/rapport/brdr_sponsors_btm.gif" width="364" height="8" alt="" /></div>';
		if (isgE('rapportSponsors')){
			issE(isgE('rapportSponsors'));
			isgE('rapportSponsors').style.display="block";
		}
		iswH(isgE('rapportAdServer'),html);
	}
}

function userClickOutsideRapportHandler(){
    if (isgE('rFlashCloserIFrame')) isgE('rFlashCloserIFrame').src = '/html/rapportclose.html?LCID=' + localConnectionID;
    iscloseSuggestion();
    shade(false);
}
