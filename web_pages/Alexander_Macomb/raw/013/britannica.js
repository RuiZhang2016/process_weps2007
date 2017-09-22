//---------------------------------------------------------------------
// function used by oec - url art is relative to bcom/client, ebi, bschool, bol, etc.

function openAssembly(id, type, width, height) {
  // making assembly a full page display
 location.href = "/eb/art-"+id;

}

function openRelativeAssembly(id, type, width, height) {
 var h = "";
 if(location.pathname == '/search' || location.pathname =='workspace2'){ h = "/all/"; }
 location.href = h + "art-"+id;
}

function openFlagHistory(tocId, width, height) {
 var i_width = new Number(screen.availWidth) - 200;
 var i_height = new Number(screen.availHeight) - 200;

 /*
  if ((new Number(width) + 32) < 375) {
	 i_width="375";
  } else if (new Number(width) + 32 > new Number(screen.availWidth)) {
	 i_width= new Number(screen.availWidth) - 64;
  } else {
	 i_width= new Number(width) + 32;
  }

   var i_height;
if (new Number(height) + 160 < 400) {
   i_height="400";
} else if (new Number(height) + 160 > new Number(screen.availHeight)) {
   i_height= new Number(screen.availHeight) - 64;
} else {
  i_height = new Number(height) + 160;
}

	*/
window.open("/eb/article-"+tocId, "EB_Article", "resizable=yes,scrollbars=yes,status=yes,width="+i_width+",height="+i_height+",top=0,left=0");

}

function openTable(tocid) {
	var i_width = new Number(screen.availWidth) - 200;
	var i_height = new Number(screen.availHeight) - 200;

	window.open("/eb/table?tocId="+tocid, "EB_Article", "resizable=yes,scrollbars=yes,status=yes,width="+i_width+",height="+i_height+",top=0,left=0");

}

function openStandaloneOecTable(tocid) {
        var i_width = new Number(screen.availWidth) - 200;
        var i_height = new Number(screen.availHeight) - 200;
                                                                                
        window.open("table?tocId="+tocid, "EB_Article", "resizable=yes,scrollbars=yes,status=yes,width="+i_width+",height="+i_height+",top=0,left=0");
                                                                                
}


//---------------------------------------------------------------------
// date display

function showDate() {
  var today = new Date();
  var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var year = (today.getYear() < 1000) ? today.getYear() + 1900 : today.getYear();

  document.write(months[today.getMonth()] + " " + today.getDate() + ", " + year);
}


//---------------------------------------------------------------------
// search drop-down

function checkSearch() {
	var form = document.forms["searchform"];
	var ct = form.elements["ct"];
	var query = escape(form.elements["query"].value);
      var fuzzyCheck = form.elements["spelling"];
      var fuzzy = "N";
	var DICTIONARY_INDEX = 6;
	var THESAURUS_INDEX = 7;
	if ( fuzzyCheck && fuzzyCheck.checked  )
	{
		fuzzy = "Y";
	}

	var url = "/search?query="+query;
	if(ct != null){
	  if (ct.options[ct.selectedIndex].value == "dict") {
	    url = "/dictionary?book=Dictionary&va="+query+"&query="+query;
	  } else if(ct.options[ct.selectedIndex].value == "thes") {
	    url = "/thesaurus?book=Thesaurus&va="+query+"&query="+query;
	  } else {
	    url = "/search?query="+query+"&ct="+ct.options[ct.selectedIndex].value+"&fuzzy="+fuzzy;
	  }
	}
	window.parent.location = url;
}


//--------------------------------------------------------------------
//browser check functions

function is_MacIE() {
     return ( navigator.userAgent.toLowerCase().indexOf("mac") != -1 );
}

function is_IE() {
     return (  navigator.userAgent.indexOf("MSIE") != -1 );
}

function get_IEversion() {
     IEPos = navigator.appVersion.indexOf('MSIE');
     return parseInt( navigator.appVersion.substring(IEPos + 5, navigator.appVersion.indexOf(';', IEPos)) );
}

function get_NNversion() {
     return parseFloat(navigator.appVersion);
}

//--------------------------------------------------------------------
// for generic pop up window

function openBrowserWindow(theURL, winName, features) {
	window.open(theURL, winName, features);
}


//-------------------------------------------------------------------
// sized for customer service pop-up window

function openCS(theURL) {
       window.open(theURL, '', 'scrollbars=yes,resizable=yes,width=650,height=420');
}

//---------------------------------------------------------------------
// STTK LaunchTool

function LaunchTool(sttk_id) {
        window.open(sttk_id,'_blank','width=561,height=336,top=20,left=10,resizable=yes');
}


//-----------------------------------------------------------------------
function openVideo(videoID) {
    	window.open("/video/player?vid="+videoID,"videoWin","width=450,height=415");
}

//-----------------------------------------------------------------------
function openTimelinesWindow(prod){
	var wnd;
        if (navigator.appName.indexOf("Netscape") == -1) {
                wnd = window.open("/timelines-" + prod + "/eb_ie.html","Timelines","width=600,height=400,toolbar=no,location=no,top=0,left=0,resizable=no,menubar=no,screenX=50,screenY=50,left=50,top=50");
        } else {
	        wnd = window.open("/timelines-" + prod + "/eb_nn.html","Timelines","width=614,height=414,toolbar=no,location=no,top=0,left=0,resizable=no,menubar=no,screenX=50,screenY=50,left=50,top=50");
	}
	wnd.focus();
}

//-----------------------------------------------------------------------
function openTimelines(prod, isInternational){
	var wnd;
      var openFile;
        if (navigator.appName.indexOf("Netscape") == -1) {
            if (isInternational && isInternational.indexOf("true") >= 0){
              openFile = "eb_int_ie.html";
            } else {
              openFile = "eb_us_ie.html";
            }

                wnd = window.open("/timelines-" + prod + "/" + openFile,"Timelines","width=600,height=400,toolbar=no,location=no,top=0,left=              0,resizable=no,menubar=no,screenX=50,screenY=50,left=50,top=50");
        } else {
            if (isInternational && isInternational.indexOf("true") >= 0){
              openFile = "eb_int_nn.html";
            } else {
              openFile = "eb_us_nn.html";
            }       
	        wnd = window.open("/timelines-" + prod + "/" + openFile,"Timelines","width=614,height=414,toolbar=no,location=no,top=0,left=0,resizable=no,menubar=no,screenX=50,screenY=50,left=50,top=50");
	}
	wnd.focus();
}

//-----------------------------------------------------------------------
function redirectTimeline() {
      var form = document.forms["timeline"];
      var type = form.elements["type"].value;
      openTimelinesWindow(type); 
}
//-----------------------------------------------------------------------
function openAtlas(prod){
   window.open('/' +prod+ '/atlas','atlas','height=500, width=740, menubar=yes, resizable=yes, toolbar=no, scrollbars=yes')
}

//-----------------------------------------------------------------------
function openMwPron(lib,dir,fname){
   if (lib == "c10") {
	window.open("http://cougar.eb.com/sound/" + dir + "/" + dir + fname,"Pronunciation","width=100,height=50,toolbar=no,location=no,top=0,left=0,resizable=no,menubar=no,screenX=50,screenY=50,left=50,top=50");
   } else {
	window.open("http://cougar.eb.com/soundc11/" + dir + "/" + dir + fname,"Pronunciation","width=100,height=50,toolbar=no,location=no,top=0,left=0,resizable=no,menubar=no,screenX=50,screenY=50,left=50,top=50");
   }
}


//------------------------------------------------------------------------
//TOC scripts
  

  function changeTocNode(tocId, imgId){
     var leDiv = document.getElementById(tocId);

     if (leDiv.style.display == "none") {
         leDiv.style.display = "block";
         document.getElementById(imgId).src = "/bcom/images/toc_minus.gif";
     } else {
         leDiv.style.display = "none";
         document.getElementById(imgId).src = "/bcom/images/toc_plus.gif";
     }
     return true;
  }

  function openAllTocNodes(){
     document.getElementById("expand").style.display="none";
     document.getElementById("collapse").style.display="block";     
     var allDiv = document.getElementsByTagName("table");
     var i;
     for (i=0;i<allDiv.length;i++) {
        var thisDiv = allDiv[i]; 
        if(thisDiv.id && thisDiv.id.indexOf('toc') != -1) {
           thisDiv.style.display = "block";
           var imgIdName = 'img' + thisDiv.id.substr(thisDiv.id.indexOf('c')+1);
           document.getElementById(imgIdName).src = "/bcom/images/toc_minus.gif";
        }
     }
     return false;
  }

  function collapseAllTocNodes(){
     document.getElementById("collapse").style.display="none";
     document.getElementById("expand").style.display="block";
     var allDiv = document.getElementsByTagName("table");
     var i;
     for (i=0;i<allDiv.length;i++) {
        var thisDiv = allDiv[i]; 
        if(thisDiv.id && thisDiv.id.indexOf('toc') != -1) {
           thisDiv.style.display = "none";
           var imgIdName = 'img' + thisDiv.id.substr(thisDiv.id.indexOf('c')+1);
           document.getElementById(imgIdName).src = "/bcom/images/toc_plus.gif";
        }
     }
     return false;
  }


 function openURL(url) {
         window.location.href=url;
       }
       
             function getMediaType() {
	var type = 'mp4';
	var mediaCookieHit = document.cookie.indexOf('preferredMediaType');
	if(mediaCookieHit != -1){
		var mediaCookieStart = mediaCookieHit + 19;
		var mediaCookieEnd = document.cookie.indexOf(';',mediaCookieStart);
		if(mediaCookieEnd == -1){ mediaCookieEnd = document.cookie.length; }
		type = document.cookie.substring(mediaCookieStart, mediaCookieEnd);
	} else if(navigator.userAgent.indexOf("MSIE") != -1){
		type = 'wmv';
	}
	return type;
      }

      function setMediaType(type) {
	document.cookie = "preferredMediaType=" + type;
	var otherType = "";
	if(type == "mp4"){ otherType = "wmv"; } else { otherType = "mp4"; }
	document.getElementById(otherType + "RadioButton").checked = false;
	location.reload();
      }


function getObjectTagHtml(objId, classid, codebase, type, data, width, height, paramHtml) {
    var htmlStr = "<object id=\"" + objId + "\"";
    if (classid != "") htmlStr = htmlStr + " classid=\"" + classid + "\"";
    if (codebase != "") htmlStr = htmlStr + " codebase=\"" + codebase + "\"";
    if (type != "") htmlStr = htmlStr + " type=\"" + type + "\"";
    if (data != "") htmlStr = htmlStr + " data=\"" + data + "\"";
    if (width != 0) htmlStr = htmlStr + " width=\"" + width + "\"";
    if (height != 0) htmlStr = htmlStr + " height=\"" + height + "\"";
    htmlStr = htmlStr + ">" + paramHtml + "</object>";
    return htmlStr;
}

function getFlashObjParams(href) {
    var htmlStr = "<param name=\"movie\" value=\"" + href + "\" />";
    htmlStr = htmlStr + "<param name=\"allowScriptAcess\" value=\"sameDomain\" />";
    htmlStr = htmlStr + "<param name=\"quality\" value=\"best\" />";
    htmlStr = htmlStr + "<param name=\"bgcolor\" value=\"#FFFFFF\" />";
    htmlStr = htmlStr + "<param name=\"scale\" value=\"noScale\" />";
    htmlStr = htmlStr + "<param name=\"salign\" value=\"TL\" />";
    htmlStr = htmlStr + "<param name=\"FlashVars\" value=\"playerMode=embedded\" />";
    return htmlStr;
}

function getShockwaveObjParams(href) {
    var htmlStr = "<param name=\"src\" value=\"" + href + "\" />";
    htmlStr = htmlStr + htmlStr + "<param name=\"bgcolor\" value=\"#FFFFFF\"/>";
    return htmlStr;
}

function getWMVObjParams(href) {
    var htmlStr = "<param name=\"src\" value=\"" + href + "\" />";
    htmlStr = htmlStr + "<param name=\"autostart\" value=\"true\" />";
    htmlStr = htmlStr + "<param name=\"controller\" value=\"true\" />";
    return htmlStr;
}

function getQTObjParams(href, width, height) {
    var htmlStr = "<param name=\"src\" value=\"" + href + "\" />";
    htmlStr = htmlStr + "<param name=\"controller\" value=\"true\" />";
    htmlStr = htmlStr + "<param name=\"autoplay\" value=\"false\" />\n";
    htmlStr = htmlStr + "<!--[if !IE]>-->\n";
    htmlStr = htmlStr + "<object type=\"video/quicktime\" data=\"" + href + "\" width=\"" + width + "\" height=\"" + height + "\">";
    htmlStr = htmlStr + "<param name=\"autoplay\" value=\"false\" />";
    htmlStr = htmlStr + "<param name=\"controller\" value=\"true\" />";
    htmlStr = htmlStr + "</object>\n";
    htmlStr = htmlStr + "<!--<![endif]-->\n";
    return htmlStr;
}

function writeMediaHtml(mediaHref, mediaHeight, mediaWidth, mediaExtension) { 
    var browser = getBrowser();
    var mediaStr = "";
    var classid = "";
    var codebase = "";
    var type = "";
    var data = "";
    var paramHtml = "";
    if (mediaExtension == 'dcr') { //shockwave file 
        //classid = "clsid:166B1BCA-3F9C-11CF-8075-444553540000";
        //codebase = "http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,0,0";   
	    type = "application/x-director";
	    data = mediaHref;
	    paramHtml = getShockwaveObjParams(mediaHref);
	} else if (mediaExtension == 'swf') {// flash file
	    //classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
	    //codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
	    type = "application/x-shockwave-flash";
	    data = mediaHref;
	    paramHtml = getFlashObjParams(mediaHref);
	} else if (mediaExtension == 'mp4' || !windowsmedia.installed) { //quicktime
	    classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
	    codebase = "http://www.apple.com/qtactivex/qtplugin.cab";
	    mediaHeight = mediaHeight + 16;
	    paramHtml = getQTObjParams(mediaHref, mediaWidth, mediaHeight);
	} else if (mediaExtension == 'mp3' && browser =='Firefox') {
	    classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
	    codebase = "http://www.apple.com/qtactivex/qtplugin.cab";
	    mediaHeight = mediaHeight + 25;
	    if (mediaWidth == 0) 
	       mediaWidth = 200;
	    paramHtml = getQTObjParams(mediaHref, mediaWidth, mediaHeight);
	 } else {	//windows media
	     //classid = "clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95";
	     type = "video/x-ms-wmv";
	     data = mediaHref;
	     paramHtml = getWMVObjParams(mediaHref);
	}
	
	mediaStr = getObjectTagHtml("mediaObj", classid, codebase, type, data, mediaWidth, mediaHeight, paramHtml);
	//alert(mediaStr);
	document.write(mediaStr);
}


function getBrowser() {
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("opera") != -1) return 'Opera';
    if (agt.indexOf("staroffice") != -1) return 'Star Office';
    if (agt.indexOf("beonex") != -1) return 'Beonex';
    if (agt.indexOf("chimera") != -1) return 'Chimera';
    if (agt.indexOf("netpositive") != -1) return 'NetPositive';
    if (agt.indexOf("phoenix") != -1) return 'Phoenix';
    if (agt.indexOf("firefox") != -1) return 'Firefox';
    if (agt.indexOf("safari") != -1) return 'Safari';
    if (agt.indexOf("skipstone") != -1) return 'SkipStone';
    if (agt.indexOf("msie") != -1) return 'Internet Explorer';
    if (agt.indexOf("netscape") != -1) return 'Netscape';
    if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
    if (agt.indexOf('\/') != -1) {
        if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') {
            return navigator.userAgent.substr(0,agt.indexOf('\/'));
        } else return 'Netscape';
    } else if (agt.indexOf(' ') != -1)
        return navigator.userAgent.substr(0,agt.indexOf(' '));
    else return navigator.userAgent;
}


/*******************************************************
WINDOWS MEDIA DETECT
All code by Ryan Parman, unless otherwise noted.
(c) 1997-2003, Ryan Parman
http://www.skyzyx.com
Distributed according to SkyGPL 2.1, http://www.skyzyx.com/license/
*******************************************************/

var windowsmedia=new Object();

// Set some base values
windowsmedia.installed=false;
windowsmedia.version='0.0'; // Internet Explorer-only

// Check for GeckoActiveXObject and co-inciding Plug-In
var gkoaxwma=false;
if (navigator.plugins && navigator.plugins.length) { for (x=0; x<navigator.plugins.length; x++) { if (navigator.plugins[x].name.indexOf('ActiveX') != -1 && window.GeckoActiveXObject) { gkoaxwma=true; break; } } }

// Create an ActiveX/GeckoActiveX constructor
function AXO(id)
{
	var error; var control = null;
	try {
		if (window.ActiveXObject && navigator.userAgent.indexOf('Win') != -1) control = new ActiveXObject(id);
		else if (gkoaxwma) control = new GeckoActiveXObject(id);
	}
	catch (error) {}
	return control;
}

if (window.ActiveXObject || gkoaxwma)
{
	try
	{
		oWMP=new AXO('WMPlayer.OCX.7');
		if (oWMP)
		{
			windowsmedia.installed=true;

			// A wierd bug in the Gecko ActiveX plug-in will return
			// undefined at the first call, but the correct value on the second.
			// This "fix" doesn't seem to hurt IE at all.
			parseFloat(oWMP.versionInfo);

			windowsmedia.version=parseFloat(oWMP.versionInfo);
			if (windowsmedia.version.toString().length == 1) windowsmedia.version+='.0';
		}
	}
	catch(e) {}
}
else if (navigator.plugins && navigator.plugins.length)
{
	for (x=0; x<navigator.plugins.length; x++)
	{
		if (navigator.plugins[x].name.indexOf('Windows Media') != -1)
		{
			windowsmedia.installed=true;
			break;
		}
	}
}

// Internet Explorer or GeckoActiveXObject-compatible browsers only.
windowsmedia.ver7=(windowsmedia.installed && parseInt(windowsmedia.version) >= 7) ? true:false;
windowsmedia.ver8=(windowsmedia.installed && parseInt(windowsmedia.version) >= 8) ? true:false;
windowsmedia.ver9=(windowsmedia.installed && parseInt(windowsmedia.version) >= 9) ? true:false;
/*******************************************************/





function openSpanSwf(fname){
     window.open("/hispanica-swf/"+fname+".swf", "EB_Media", "resizable=yes,scrollbars=yes,status=yes");
  }

function openTalmosPage(cookieName, pathinfo, contentType){
   document.forms.talmosForm.ct.value = contentType;
   document.forms.talmosForm.link.value = pathinfo;
   var talmosUrl;
   var cookieResult = document.cookie.match(cookieName+ '=(.*?)(;|$)');
   if (cookieResult) {
       talmosUrl = cookieResult[1];
       document.forms.talmosForm.action = talmosUrl;
       document.forms.talmosForm.target="_self";
//	   document.forms.talmosForm.action = "http://dev.school.eb.co.uk";
	   var talmosForm = document.getElementById('talmosForm');
	   talmosForm.submit();      
   }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
