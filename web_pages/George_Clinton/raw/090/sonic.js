aMonths = Array("", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
aMaxDays = Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
var aMaxDays = new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

function MM_preloadImages() { //v3.0
	var d=document; 
	if(d.images){ 
		if(!d.MM_p) 
			d.MM_p = new Array();
	    var i, j=d.MM_p.length, a=MM_preloadImages.arguments;
		for(i=0; i<a.length; i++)
			if (a[i].indexOf("#")!=0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src=a[i];
			}
	}
}

function MM_swapImgRestore() { //v3.0
	var i, x, a=document.MM_sr;
	for(i=0; a && i<a.length && (x=a[i]) && x.oSrc; i++)
		x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.0
	var p, i, x;
	if(!d)
		d = document;
	if((p=n.indexOf("?"))>0 && parent.frames.length) {
		d = parent.frames[n.substring(p+1)].document;
		n = n.substring(0,p);
	}
	if(!(x=d[n]) && d.all)
		x = d.all[n];
	for (i=0; !x &&i<d.forms.length; i++)
		x = d.forms[i][n];
	for(i=0; !x && d.layers && i<d.layers.length; i++)
		x = MM_findObj(n, d.layers[i].document);
	if(!x && document.getElementById)
		x = document.getElementById(n);
	return x;
}

function MM_swapImage() { //v3.0
	var i, j=0, x, a=MM_swapImage.arguments;
	document.MM_sr=new Array;
	for(i=0; i<(a.length-2); i+=3)
		if ((x=MM_findObj(a[i]))!=null){
			document.MM_sr[j++]=x;
	if(!x.oSrc) 
		x.oSrc=x.src; 
	x.src=a[i+2];}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
	if (init==true) 
		with (navigator) {
			if ((appName=="Netscape") && (parseInt(appVersion)==4)) {
				document.MM_pgW=innerWidth;
				document.MM_pgH=innerHeight; 
				onresize=MM_reloadPage; 
			}
		}
	else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH)
		location.reload();
}

//MM_reloadPage(true);

function MM_showHideLayers() { //v3.0
	var i, p, v, obj, args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3)
		if ((obj=MM_findObj(args[i]))!=null) { 
			v=args[i+2];
			if (obj.style) { 
				obj=obj.style; 
				v=(v=='show')?'visible':(v='hide')?'hidden':v; 
			}
			obj.visibility=v; 
		}
}

function tmt_DivAlign(theDiv, h, v, hPx, vPx){
	var obj, fun, dw, dh, lw, lh, x, y;
	fun = (document.getElementById) ? "document.getElementById" : "MM_findObj";
	obj = (document.getElementById) ? document.getElementById(theDiv) : MM_findObj(theDiv);
	if(obj) {
		if(document.all){
			dw = document.body.clientWidth;
			dh = document.body.clientHeight;
		} else {
			dw = innerWidth;
			dh = innerHeight;
		}
		if(document.layers) {
			lw = obj.clip.width;
			lh = obj.clip.height;
		} else {
			lw = obj.style.width.replace("px","");
			lh = obj.style.height.replace("px","");
		}
		x = (document.layers) ? ".left" : ".style.left";
		y = (document.layers) ? ".top" : ".style.top";
		if(h == "l")
			eval(fun + "('" + theDiv + "')" + x + "=" + hPx);
		if(h == "c")
			eval(fun + "('" + theDiv + "')" + x + "=" + dw + "/2-" + lw + "/2");
		if(h == "r")
			eval(fun + "('" + theDiv + "')" + x + "=" + dw + "-" + lw + "-" + hPx);
		if(v == "t")
			eval(fun + "('" + theDiv + "')" + y + "=" + vPx);
		if(v == "m")
			eval(fun + "('" + theDiv + "')" + y + "=" + dh + "/2-" + lh + "/2");
		if(v == "b")
			eval(fun + "('" + theDiv + "')" + y + "=" + dh + "-" + lh + "-" + vPx);
	}
}


function fncPopUp(URL){
	var sName, sWidth, sHeight, sXpos, sYpos, sScroll, sResize;
	
	sName = 'popup';
	sWidth = '630';
	sHeight = '520';
	sXpos = '20';
	sYpos = '40';
	sScroll = 'no';
	sResize = 'no';
	sWinbars = 'no';
			
	if (fncPopUp.arguments[0] == ''){
		fncPopUp.arguments[0] = '/error_popup.htm';
	}

	//handled agruments if they are left blank
	if (fncPopUp.arguments.length > 1)
		sName = fncPopUp.arguments[1];
	if (fncPopUp.arguments.length > 2)
		sWidth = fncPopUp.arguments[2];
	if (fncPopUp.arguments.length > 3)
		sHeight = fncPopUp.arguments[3];
	if (fncPopUp.arguments.length > 4)
		sXpos = fncPopUp.arguments[4];
	if (fncPopUp.arguments.length > 5)
		sYpos = fncPopUp.arguments[5];
	if (fncPopUp.arguments.length > 6)
		sScroll = fncPopUp.arguments[6];
	if (fncPopUp.arguments.length > 7)
		sResize = fncPopUp.arguments[7];
	if (fncPopUp.arguments.length > 8)
		sWinbars = fncPopUp.arguments[8];

	var winBars;
	if (sWinbars=='no')
		winBars = 'directories=no,location=no,menubar=no,status=no,titlebar=no,toolbar=no';
	else
		winBars = 'directories=yes,location=yes,menubar=yes,status=yes,titlebar=yes,toolbar=yes';
				
	var winOptions = 'scrollbars='+ sScroll + ',resizable='+ sResize;
	var winSize = 'height=' + sHeight + ',width=' + sWidth;
	var winPosition = 'left=' + sXpos + ',top=' + sYpos;
	var winFeatures = winBars + ',' + winOptions + ',' + winSize + ',' + winPosition;			
	
	if (window.open(URL,sName,winFeatures)==null) {
		alert('You seem to have popup blocking software enabled.\nIn order to use certain features of Sonicbids, including EPKs (Electronic Press Kits), please configure your popup blocker to allow popups from sonicbids.com.');
		document.location.replace('/support/popup_blockers.asp');
	}

}


function fncPopUpNoBlockerCatcher(URL){
	var sName, sWidth, sHeight, sXpos, sYpos, sScroll, sResize;
	
	sName = 'popup';
	sWidth = '630';
	sHeight = '520';
	sXpos = '20';
	sYpos = '40';
	sScroll = 'no';
	sResize = 'no';
	sWinbars = 'no';
			
	if (fncPopUpNoBlockerCatcher.arguments[0] == ''){
		fncPopUpNoBlockerCatcher.arguments[0] = '/error_popup.htm';
	}

	//handled agruments if they are left blank
	if (fncPopUpNoBlockerCatcher.arguments.length > 1)
		sName = fncPopUpNoBlockerCatcher.arguments[1];
	if (fncPopUpNoBlockerCatcher.arguments.length > 2)
		sWidth = fncPopUpNoBlockerCatcher.arguments[2];
	if (fncPopUpNoBlockerCatcher.arguments.length > 3)
		sHeight = fncPopUpNoBlockerCatcher.arguments[3];
	if (fncPopUpNoBlockerCatcher.arguments.length > 4)
		sXpos = fncPopUpNoBlockerCatcher.arguments[4];
	if (fncPopUpNoBlockerCatcher.arguments.length > 5)
		sYpos = fncPopUpNoBlockerCatcher.arguments[5];
	if (fncPopUpNoBlockerCatcher.arguments.length > 6)
		sScroll = fncPopUpNoBlockerCatcher.arguments[6];
	if (fncPopUpNoBlockerCatcher.arguments.length > 7)
		sResize = fncPopUpNoBlockerCatcher.arguments[7];
	if (fncPopUpNoBlockerCatcher.arguments.length > 8)
		sWinbars = fncPopUpNoBlockerCatcher.arguments[8];

	var winBars;
	if (sWinbars=='no')
		winBars = 'directories=no,location=no,menubar=no,status=no,titlebar=no,toolbar=no';
	else
		winBars = 'directories=yes,location=yes,menubar=yes,status=yes,titlebar=yes,toolbar=yes';
				
	var winOptions = 'scrollbars='+ sScroll + ',resizable='+ sResize;
	var winSize = 'height=' + sHeight + ',width=' + sWidth;
	var winPosition = 'left=' + sXpos + ',top=' + sYpos;
	var winFeatures = winBars + ',' + winOptions + ',' + winSize + ',' + winPosition;			
	
	return window.open(URL,sName,winFeatures);
	
}


function fncPopUprefer(URL){
	var sName, sWidth, sHeight, sXpos, sYpos, sScroll, sResize, sWinbars;
	
	sName = 'popup';
	sWidth = '330';
	sHeight = '290';
	sXpos = '20';
	sYpos = '40';
	sScroll = 'no';
	sResize = 'no';
	sWinbars = 'no';
			
	if (fncPopUprefer.arguments[0] == ''){
		fncPopUprefer.arguments[0] = '/error_popup.htm';
	}

	//handled agruments if they are left blank
	if (fncPopUprefer.arguments.length > 1)
		sName = fncPopUprefer.arguments[1];
	if (fncPopUprefer.arguments.length > 2)
		sWidth = fncPopUprefer.arguments[2];
	if (fncPopUprefer.arguments.length > 3)
		sHeight = fncPopUprefer.arguments[3];
	if (fncPopUprefer.arguments.length > 4)
		sXpos = fncPopUprefer.arguments[4];
	if (fncPopUprefer.arguments.length > 5)
		sYpos = fncPopUprefer.arguments[5];
	if (fncPopUprefer.arguments.length > 6)
		sScroll = fncPopUprefer.arguments[6];
	if (fncPopUprefer.arguments.length > 7)
		sResize = fncPopUprefer.arguments[7];
	if (fncPopUprefer.arguments.length > 8)
		sWinbars = fncPopUprefer.arguments[8];
	
	fncPopUp(URL, sName, sWidth, sHeight, sXpos, sYpos, sScroll, sResize);			
}

function fncShowTip(strTipID) {

	var strAccountID = '';
	var intEPKID = '';

	if (fncShowTip.arguments.length > 1) {
		strAccountID = fncShowTip.arguments[1];
	}
	
	if (fncShowTip.arguments.length > 2) {
		intEPKID = fncShowTip.arguments[2];
	}

	return fncPopUp('/support/tip_view.asp?ref_id=' + strTipID + '&account_id=' + strAccountID + '&epk_id=' + intEPKID, 'tip_view', 450, 400, 20, 20, 'yes', 'no', 'no');
}


function fncOpenEPK(strEPKID) {
	strEPKURL = '/epk/epk.asp?epk_id=' + strEPKID

	// Name
	if (fncOpenEPK.arguments.length > 1)
		strEPKURL += '&name=' + fncOpenEPK.arguments[1];
	
	// Skin ID
	if (fncOpenEPK.arguments.length > 2)
		strEPKURL += '&skin_id=' + fncOpenEPK.arguments[2];
		
	// Poll ID
	if (fncOpenEPK.arguments.length > 3)
		strEPKURL += '&poll_id=' + fncOpenEPK.arguments[3];
	
	// Update Chart (Log View)
	if (fncOpenEPK.arguments.length > 4)
		strEPKURL += '&lv=' + fncOpenEPK.arguments[4];
		
	// Cobrand
	if (fncOpenEPK.arguments.length > 5)
		strEPKURL += '&cobrand=' + fncOpenEPK.arguments[5];
		
	//alert(strEPKURL);
		
	fncPopUp(strEPKURL, 'epk', 630, 600, 20, 40, 'no', 'yes', 'no');
}


function fncOpenEPKNoBlockerCatcher(strEPKID) {
	strEPKURL = '/epk/epk.asp?epk_id=' + strEPKID

	if (fncOpenEPKNoBlockerCatcher.arguments.length > 1)
		strEPKURL += '&name=' + fncOpenEPK.arguments[1];
	
	if (fncOpenEPKNoBlockerCatcher.arguments.length > 2)
		strEPKURL += '&skin_id=' + fncOpenEPK.arguments[2];
		
	if (fncOpenEPKNoBlockerCatcher.arguments.length > 3)
		strEPKURL += '&poll_id=' + fncOpenEPK.arguments[3];
		
	return fncPopUpNoBlockerCatcher(strEPKURL, 'epk', 630, 600, 20, 40, 'no', 'yes', 'no');
}

function fncOpenEPKSubmission(strSubmissionID) {
	strEPKURL = '/epk/epk.asp?submission_id=' + strSubmissionID

	if (fncOpenEPKSubmission.arguments.length > 1)
		strEPKURL += '&name=' + fncOpenEPKSubmission.arguments[1];
	
	if (fncOpenEPKSubmission.arguments.length > 2)
		strEPKURL += '&skin_id=' + fncOpenEPKSubmission.arguments[2];
	
	if (fncOpenEPKSubmission.arguments.length > 3)
		strEPKURL += '&poll_id=' + fncOpenEPKSubmission.arguments[3];
		
	return fncPopUp(strEPKURL, 'epk', 630, 600, 20, 40, 'no', 'no', 'no');
}

function fncOpenEPKArtist(strArtistID) {
	strEPKURL = '/epk/epk.asp?artist_id=' + strArtistID

	if (fncOpenEPKArtist.arguments.length > 1)
		strEPKURL += '&name=' + fncOpenEPKArtist.arguments[1];
	
	if (fncOpenEPKArtist.arguments.length > 2)
		strEPKURL += '&skin_id=' + fncOpenEPKArtist.arguments[2];
	
	if (fncOpenEPKArtist.arguments.length > 3)
		strEPKURL += '&poll_id=' + fncOpenEPKArtist.arguments[3];
		
	fncPopUp(strEPKURL, 'epk', 630, 600, 20, 40, 'no', 'yes', 'no');
}

var expDays = 100;
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));

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
		if (i == 0) 
			break;   
	}  
	return '';
}

function SetCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
  document.cookie = curCookie;
}

function TestCookies() {
	SetCookie("testingcookies", "testingcookies")
	var strResult = GetCookie("testingcookies")
	if (strResult == "testingcookies")
		return true;
	else
		return false;
}

	
var winSpellChecker;

function doCheckForSpellCheckerPopup(strInputID) {
	
	if (winSpellChecker.closed)
		document.getElementById(strInputID).disabled = false;
	else
		setTimeout('doCheckForSpellCheckerPopup(\'' + strInputID + '\')', 500);
	
}
	
function doCheckSpelling(strInput) {
	objInput = document.getElementById(strInput);
	objInput.disabled = true;
	winSpellChecker = fncPopUpNoBlockerCatcher('/spellchecker/spellchecker.asp?text=' + escape(objInput.value) + '&inputhandle=' + objInput.id, 'spellchecker', 550, 400, 10, 10, 'no', 'no', 'no');
	doCheckForSpellCheckerPopup(objInput.id);	
}

function fncOpenVenueDetails(strVenueID) {

	fncPopUp('/buyer/venue_view.asp?venue_id=' + strVenueID, 'winVenueDetails', 400, 300, 20, 20, 'no', 'no', 'no');

}

function isLeapYear(year)
{
	if ( year % 4 == 0 )
		if ( year % 400 == 0 )
			return true;
		else if ( year % 100 == 0 )
			return false;
		else
			return true;		
	else return false;	//if it's not divisible by 400 or 100, then it's still divisible by 4, so true
}

function DateAdd(strInterval, intNumber, datStart) {
	
    // get the milliseconds for this Date object. 
    var buffer = Date.parse(datStart);
	
    // check that the start parameter is a valid Date. 
    if (isNaN(buffer)) {
        return null;
    }
	
    // check that an interval parameter was not numeric. 
    if ( strInterval.charAt == 'undefined' ) {
        return null;
    }

    // check that the number parameter is numeric. 
    if (isNaN(intNumber)) {
        return null;
    }

    // so far, so good...
    //
    // what kind of add to do? 
    switch (strInterval.charAt(0))
    {
		case 'm': case 'M':
			var intDaysAdded = 0;
			var datTemp = new Date(buffer);
			var intCurrentYear = datTemp.getYear();
			var intCurrentMonth = datTemp.getMonth() + 1;
			if (intNumber > 0)
				for (var intMonthsAdded=0; intMonthsAdded < intNumber; intMonthsAdded++) {
					intCurrentMonth++;
					if (intCurrentMonth > 12) {
						intCurrentMonth = 1;
						intCurrentYear++;
					}
				}
			else
				for (var intMonthsAdded=0; intMonthsAdded > intNumber; intMonthsAdded--) {
					intCurrentMonth--;
					if (intCurrentMonth < 1) {
						intCurrentMonth = 12;
						intCurrentYear--;
					}
				}
			
			var intDay = new Date(buffer).getDate();
			var intMaxDays = aMaxDays[intCurrentMonth];
			if (intCurrentMonth==2 && isLeapYear(intCurrentYear))
				intMaxDays++;

			if (intMaxDays < intDay) {
				intDay = intMaxDays;
			}
			
			datTemp.setDate(intDay)
			datTemp.setMonth(intCurrentMonth - 1);
			datTemp.setYear(intCurrentYear);
			
			intNumber = datTemp.valueOf() - buffer;
			
			break;
        case 'd': case 'D': 
            intNumber *= 24; // days to hours
            // fall through! 
        case 'h': case 'H':
            intNumber *= 60; // hours to minutes
            // fall through! 
        case 'm': case 'M':
            intNumber *= 60; // minutes to seconds
            // fall through! 
        case 's': case 'S':
            intNumber *= 1000; // seconds to milliseconds
            break;
        default:
	        return null;
    }
    return new Date( buffer + intNumber ) ;
}

function CleanRedirect(strURL) {

	if (window.opener == null)
		document.location = strURL;
	else {
		window.opener.location = strURL;
		window.opener.focus();
		window.close();
	}
}

function TextBox_onkeypress(strControlID, postBackReference) {

	if (window.event.keyCode==13) {
		eval(postBackReference);
	}
	return false;
}