this.whoamI="Chad Chamberlain\nSr.Web Programmer @ \nCBSNews.com\nE-mail:webmail@cbsnews.com\n";
this.update = "This script was last updated on: 05-06-2003 at 6:50pm";
this.comment = "";
var creator = whoamI+update+comment;
	
var moz1_5,ns4,ns6,ns7,ie4,ie5,ie5_5,ie,iex,ns,win,ie6,aol,opera,icab,omniWeb,linux,Mac,safari,firefox,da_text;
var pluginlist ="";
var nUser=navigator.userAgent.toLowerCase();
var bname = navigator.appName.toLowerCase();
var ver = navigator.appVersion;
var int_ver = parseInt(ver);
var site = "cbsnews";
if (nUser.indexOf('linux')!=-1){linux = true;}
if (nUser.indexOf('konqueror')!=-1){linux = true;}
if (nUser.indexOf('omniWeb')!=-1){omniWeb = true;}
if (nUser.indexOf('opera')!=-1){opera = true;}
if (nUser.indexOf('icab')!=-1){icab = true;}
if (nUser.indexOf('aol')!=-1){aol = true;}
if (nUser.indexOf('mac')!=-1){Mac = true;}
if (nUser.indexOf('Safari/') >0) safari =1;
if (bname.indexOf("netscape") >= 0 && int_ver == 4) ns4 = true;/*netscape 4 +*/
if (nUser.indexOf("gecko/") != -1 && nUser.indexOf("firefox/")!=-1){firefox = true;}/*firefox*/
if (nUser.indexOf("gecko/") != -1 && (nUser.indexOf("netscape/6")!=-1 || nUser.indexOf("netscape6/")!=-1)){ns6 = true;}/*netscape 6*/
if (nUser.indexOf("gecko/") != -1 && nUser.indexOf("netscape/7")!=-1){ns7 = true;}/*netscape 7*/
if (nUser.indexOf("gecko/200") != -1 && int_ver == 5 && (nUser.indexOf("netscape/6")==-1 && nUser.indexOf("netscape/7")==-1)){moz1_5 = true;}/*mozilla 1.5 7*/
if (nUser.indexOf('compatible; msie 5.22; mac_powerpc')>0){iex=true}
if (nUser.indexOf('msie 4') >0){ie4 = 1;}/*internet explorer 4*/
if (nUser.indexOf('msie 5') >0 && nUser.indexOf('msie 5.5')==-1){ie5 = true;}/*internet explorer 5*/
if (nUser.indexOf('msie 5.5') >0){ie5_5 = true;}/*internet explorer 5*/
if (nUser.indexOf('msie 6') >0){ie6 = true;}/*internet explorer 6*/
var win = ((nUser.indexOf("win")!=-1) || (nUser.indexOf("32bit")!=-1));
var ie  = (nUser.indexOf("msie") != -1);


/*templates for video player*/
var	templ0="http://www.cbsnews.com/htdocs/videoplayer/newVid/framesource_old.html";
var	templ1="http://www.cbsnews.com/htdocs/videoplayer/newVid/small_player/cbsnews_videoplayer.shtml";//obj+"&title="+title;
var	templ2="http://www.cbsnews.com/htdocs/videoplayer/newVid/small_player/cbsnews_videoplayer_help.html";
var templ4="http://www.cbsnews.com/htdocs/videoplayer/newVid/small_player/cbsnews_videoplayer_settings.html";
var templ5="http://www.cbsnews.com/htdocs/videoplayer/newVid/small_player/cbsnews_videoplayer_help.html";
var templ6="http://www.cbsnews.com/htdocs/videoplayer/newVid/small_player/cbsnews_videoplayer_help_windows.html";
var templ7="http://www.cbsnews.com/htdocs/videoplayer/newVid/small_player/cbsnews_videoplayer_help_real.html";
/*end template for video player*/


var RealMode=0;
var RealPlayer8=0;
var RealPlayerG2=0;

var WMPV70 = 0;/*Windows Media Player Version 7.0*/

	        if (navigator.userAgent.indexOf("MSIE")<0 )
        	{
        		numPlugins = navigator.plugins.length;
	        	for (i = 0; i < numPlugins; i++)
        		{
                		plugin = navigator.plugins[i];
                		if (plugin.name.substring(0,10)=="RealPlayer")
	                	{
        	                	RealMode=1;
                		}
	        	}
        	}
	        document.write('<SCRIPT LANGUAGE=VBScript\> \n');
        	document.write('on error resume next \n');
	        document.write('RealPlayerG2 = (NOT IsNull(CreateObject("rmocx.RealPlayer G2 Control")))\n');
        	//document.write('RealPlayer7 = (NOT IsNull(CreateObject("RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)")))\n');
	        document.write('RealPlayer8 = (NOT IsNull(CreateObject("RealVideo.RealVideo(tm) ActiveX Control (32-bit)")))\n');
        	document.write("</SCRIPT\> \n");
			/*test to see if user has real or not*/
	        if ( RealPlayerG2 || RealPlayer8 ) /*|| RealPlayer7*/
        	{
	        	/*alert();*/
				isReal="yes";
			}
			else if ( Mac || linux || opera || RealMode )
			{
				isReal="yes";
			}
			/*else if (Mac || linux || opera)
	   		{
	   			isReal="yes";
			}*/
			else 
	   		{
	   			isReal="no";
			}


/*Windows Media Detection for Netscape and IE*/
 
 //Detect ActiveX Architecture on Both IE and on Gecko
//Defer to plugin architecture for other browsers

function detectWMP()
{
	var wmpInfo = {
		installed: false,
		scriptable: false,
		type: null,
		versionInfo: null
	};
	var wmp64 = "MediaPlayer.MediaPlayer.1";
	var wmp7 = "WMPlayer.OCX.7";
	if((window.ActiveXObject && navigator.userAgent.indexOf('Windows') != -1) || window.GeckoActiveXObject)
	{
		wmpInfo.type = "ActiveX";
		var player = createActiveXObject(wmp7);
		if(player)
		{
			wmpInfo.installed = true;
			wmpInfo.scriptable = true;
			wmpInfo.versionInfo = player.versionInfo;
			return wmpInfo;
		}
		else
		{
			player = createActiveXObject(wmp64);
			if(player)
			{
				wmpInfo.installed = true;
				wmpInfo.scriptable = true;
				wmpInfo.versionInfo = "6.4";
				return wmpInfo;
			}
			else
			{
				wmpInfo.versionInfo = "none";
				return wmpInfo;
			}
		}
	}
	else if(navigator.mimeTypes)
	{
		wmpInfo.type = "NetscapePlugin";
		numPlugins = navigator.plugins.length;
		for (i = 0; i < numPlugins; i++)
		{
		plugin = navigator.plugins[i];
			if (plugin.name.substring(0,10)=="Windows Media Player")
			{
				wmpInfo.installed = true;
				//wmpInfo.scriptable = false;
				wmpInfo.versionInfo = "PluginVersion";
				return wmpInfo;
			}
		}

		/*if(player)
		{	
			
			alert("if netscape and windows media");
			wmpInfo.installed = true;
			wmpInfo.scriptable = false;
			wmpInfo.versionInfo = "PluginVersion";
			return wmpInfo;
		}*/
		return wmpInfo;
	}
	
	
}
function createActiveXObject(id)
{
  var error;
  var control = null;

  try
  {
    if (window.ActiveXObject)
    {
      control = new ActiveXObject(id);
    }
    else if (window.GeckoActiveXObject)
    {
      control = new GeckoActiveXObject(id);
    }
  }
  catch (error)
  {
    ;
  }
  return control;
}
/*******End Windows Media Detection for Netscape and IE*******/

/*Detect windows media player*/
function playerResults(){
var detectionResults = detectWMP();
if(!Mac){
	if(detectionResults.installed)
		{
			/*alert("this is not mozilla");*/
			if(detectionResults.versionInfo.indexOf("9")!=-1 || detectionResults.versionInfo.indexOf("10")!=-1 || detectionResults.versionInfo.indexOf('PluginVersion')!=-1){return  true}
		}
		else if(detectionResults == "[object Object]")
		{
		return true;/*alert("detection Results :  "+detectionResults);*/
		}
	}
	else
	{ 
		return true;
	}
	
}
/*End detect windows media*/


	/*alert(nUser+' '+int_ver);*/
	var is_over = 0;
	var divelement = new Array();
		divelement[0] = 'popupDiv1';
	
	function clearall(obj){		
		if(ns4){
			for(i=0;i<divelement.length;i++){
				if(divelement[i] != obj){document.layers[divelement[i]].visibility = "hide"}
				}
		}else if(ie5||ie6||ns6||ns7||moz1_5||Mac){
			for(i=0;i<divelement.length;i++){
				if(divelement[i] != obj){document.getElementById(divelement[i]).style.visibility = "hidden";}
				}
		}/*else if(ie4){
			for(i=0;i<divelement.length;i++){
				if(divelement[i] != obj){alert();}else{'document.all.'+divelement[i]+'.style.visibility'+'="hidden"';}
			}
		}*/
	}
	function popUp(divobj) {
	if (ns4) {
	        document.layers[divobj].visibility="view";
			clearall(divobj);	
	} else if (ie5||ie6||ns6||ns7||moz1_5||Mac) {
			document.getElementById(divobj).style.visibility = "visible";
			clearall(divobj);			
	}else if(ie4){
			'document.all.'+divobj+'.style.visibility'+'="visible"';
	}
	
	}
	function popDown(divobj) {
	if (ns4) {
		document.layers[divobj].visibility="hide";
		//alert(document.layers[divobj].visibility);
	} else if (ie5||ie6||ns6||ns7||moz1_5||Mac) {
	    document.getElementById(divobj).style.visibility = "hidden";
	}else if(ie4){
		'document.all.'+divobj+'.style.visibility'+'="hidden"';
	}
	
	}
	
	function launch(pageTitle,w,h,address)
	{
		newWin = window.open("",pageTitle,'width='+w+',height='+h+',status=no,toolbar=no,scrollbars=no')
		newWin.location = address
	}
				
	/*function PopUp(url,w,h,winname) {
	if ((w == 540) && (h == 400)) {
		w = 740;
		h = 461;
	}
	var dim = eval('"width=' + w + ',height=' + h + '"');
	if(winname == null || winname==" ")
	{
		winname = "cbsnews";
	}
	Npop = window.open(url,winname,dim,'status=no,toolbar=no,scrollbars=no');
	}*/
	
	function PopUp(url,w,h,winname,tools) {
	if ((w == 540) && (h == 400)) {
		w = 740;
		h = 461;
	}
	var dim = eval('"width=' + w + ',height=' + h + '"');
	if(winname == null || winname==" ")
	{
		winname = "cbsnews";
	}
	
	if(tools == 1)
	{	
	Npop = window.open(url,winname,'status=yes,' + dim + ',menubar=yes,toolbar=yes,scrollbars=yes,location=yes,resizable=yes');
	}
	
	else{
	Npop = window.open(url,winname,dim);
	}
	
	}    //end of function
	
	look_here=document.location.href;
	h=400;
	w=540;
	var loc='http://www.cbsnews.com/htdocs/feedback/fb_news_form.shtml';
	
	function OpenFeedBack()
	{
		if(look_here.indexOf('earlyshow') != -1)
			{
			var er=3465;
			popwin =window.open("http://www.cbsnews.com/htdocs/feedback/fb_news_form.shtml",er,"height="+h+",width="+w+",status=0 ,scrollbars=0 ,location=0 ,menubar=0 ,resizable=0");
			}
		else
			
			{
			popwin =window.open("http://www.cbsnews.com/htdocs/feedback/fb_news_form.shtml",secid ,"height="+h+",width="+w+",scrollbars=0 ,location=0 ,menubar=0 ,resizable=0");
			}
	}


/*this is to get the date and time*/			
var month = new Array('Jan.','Feb.','March','April','May','June','July','August','Sept.','Oct.','Nov.','Dec.');
var the_date = new Date();
var the_day = the_date.getDate();
var the_month = the_date.getMonth();
var the_year = the_date.getFullYear();
var the_minutes = fixTime(the_date.getMinutes());
var the_hour = fixhour(the_date.getHours());
/*alert(the_date.getMinutes()+" this is the hour"+the_date.getHours());*/
var the_current_dateAndTime = month[the_month]+" " +the_day +", " + the_year+" " + the_hour + ":" + the_minutes;
var the_currentTime = the_hour + ":" + the_minutes;
function fixhour(the_hour) {

	if (the_hour >12) 
	{
		the_hour = eval(the_hour - 12);
	}
	else if(the_hour == 0)
	{
		the_hour = eval(the_hour+12)
	}
	//alert(the_hour);
	return the_hour;
}

function fixTime(the_time) {
	
	if ((the_time <10) && (the_date.getHours()<=11)) 
	{
		the_time = "0" + the_time + "am";
	}
	else if ((the_time >=10) && (the_date.getHours()<=11)) 
	{
		the_time = the_time + "am";
	}
	else if ((the_time >=10) && (the_date.getHours() >= 12)) 
	{
		the_time = the_time + "pm";
	}
	else if ((the_time <10) && (the_date.getHours() >= 12)) 
	{
		the_time = "0" + the_time + "pm";
	}
	//alert(the_time);
	return the_time;
}
function Time(){
document.write(the_currentTime);
}
function DateandTime(){
document.write(the_current_dateAndTime);
}

/*Update cac 2:15pm on 4-15-2002*/
/*call this function to scroll a window's x coordinate*/
var x = 0;
window.onerror=null
function ScrollRight(dist) {
		if (x < 2000) {
                scrollEnd = x + dist;
                x = x + 8;
                ScrollRight2();
        }
}

function ScrollRight2() {
		if (x < scrollEnd) {
                window.scrollTo(x,0);
                x = x + 8;
                setTimeout('ScrollRight2()', 5);
        } else {
                x = scrollEnd;
				
        }
}



function ScrollLeft(dist2) {
        x = scrollEnd;
    if (x > 0) {
        scrollEnd = x - dist2;
        x = x - 8;
        ScrollLeft2();
        }
} 


function ScrollLeft2() {
        if (x > scrollEnd) {
        window.scrollTo(x,0);
                x = x - 8;
                setTimeout('ScrollLeft2()', 1);
        } else {
                x = scrollEnd;
        }
}


/*function displayFlashTest()
{
	if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) { 
		document.write('<div class="blueheader"><b>INSIDE CBSNEWS.COM</b></div>\n');
	    document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="175" height="200" id="cbsnews_rotate2">\n');
	    document.write('<param name="movie" value="/sections/testProduction/cbsnews_rotate2.swf" />\n');
		document.write('<param name="allowScriptAccess" value="sameDomain" />\n');
		document.write('<param name="movie" value="/sections/testProduction/cbsnews_rotate2.swf" />\n');
		document.write('<param name="quality" value="high" />\n');
		document.write('<embed src="/sections/testProduction/cbsnews_rotate2.swf" quality="high" width="175" height="200" name="cbsnews_rotate2" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\n');
	    document.write('</object>\n');
		document.write('<br/><br/>'); 
	}
	
	else{
		alpha = detectActiveXControl('ShockwaveFlash.ShockwaveFlash.1');
		if(!alpha){
			document.write('<img src="http://wwwimage.cbsnews.com/common/images/transp.gif"/>');
		}
		
		else{
		document.write('<div class="blueheader"><b>INSIDE CBSNEWS.COM</b></div>\n');
		document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="175" height="200" id="cbsnews_rotate2">\n');
	    document.write('<param name="movie" value="/sections/testProduction/cbsnews_rotate2.swf" />\n');
		document.write('<param name="allowScriptAccess" value="sameDomain" />\n');
		document.write('<param name="movie" value="/sections/testProduction/cbsnews_rotate2.swf" />\n');
		document.write('<param name="quality" value="high" />\n');
		document.write('<embed src="/sections/testProduction/cbsnews_rotate2.swf" quality="high" width="175" height="200" name="cbsnews_rotate2" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\n');
	    document.write('</object>\n');
		document.write('<br/><br/>');
		}
	}
}

function displayFlash()
{
	    document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="175" height="200" id="cbsnews_rotate2">\n');
	    document.write('<param name="movie" value="cbsnews_rotate2.swf" />\n');
		document.write('<param name="allowScriptAccess" value="sameDomain" />\n');
		document.write('<param name="movie" value="cbsnews_rotate2.swf" />\n');
		document.write('<param name="quality" value="high" />\n');
		document.write('<embed src="cbsnews_rotate2.swf" quality="high" width="175" height="200" name="cbsnews_rotate2" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\n');
	    document.write('</object>\n');
}   
*/

/*Update cac 2:15pm on 4-18-2002*/
/*call this function to make this url your home page*/
 var home;
 var loc = document.location.href;
 var instructions = "Drag this link " +loc + " onto your Home button to make this your Home Page."
 	
function check(){
if(ns4||ns6||ns7){
	alert('To make CBSNews.com your home page:\n\n- Under "Edit" menu select "Preferences"\n- Inside "Navigator" form click on "Use Current Page"');
	}
	else{
		alert('To make CBSNews.com your home page:\n\n- Under "Tools" menu select "Options"\n- Inside "General" form click on "Use Current Page"');
	}
}

function checkUrl()
	{
		if(previous_url != story_url){document.location.href=story_url}
	}
	
 function makeHome(){
	 if(ie4||ie5||ie6){
		home  = document.write('<a href="javascript:history.go(0);" onClick="this.style.behavior=\'url(#default#homepage)\';this.setHomePage(loc); return false;" class="linksmall">');
		home += document.write('<img src="http://www.cbsnews.com/common/images/v2/button_home_page.gif" border="0" height="19" alt="Make CBS News Your Home Page" vspace="1"></a>');
	}
	else if(ns4||ns6||ns7)
	{
		home = document.write('<a href="javascript:history.go(0);" onclick="check(\'ns4\'); return false;" class="linksmall"><img src="http://www.cbsnews.com/common/images/v2/button_home_page.gif" border="0" height="19" alt="Make CBS News Your Home Page" vspace="1"></a>');
		//PopUp(\'framesource_instructions.html\',280,400,\'CBSNewsHome\');
	}
	else
	{
		home = document.write('<a href="javascript:history.go(0);" onclick="check(\'other\');" class="linksmall"><img src="http://www.cbsnews.com/common/images/v2/button_home_page.gif" border="0" height="19" alt="Make CBS News Your Home Page" vspace="1"></a>');
	}
	
	return home;
	}

/*Update cac 12:47pm on 4-19-2002*/
/*call this function to change email_summary edition time*/
	function edition(){
	var edition;
	}
/*Update cac 11:13am on 10-14-2002*/
/*call this function to change email preferrences*/
function unsubCheck(fobj)
	{
		var email = fobj.mod_email;	//alert(email.name);
		var main_email = document.forms[0].email;
		//alert(main_email.value);
		if(email.value == '')
		{
			alert("please fill in your email address");//email.value = main_email.value;
			email.focus();
			return false;
		}
		document.location = "http://cgi.cbs.com/news/unsubscribe.pl?email="+email.value;
		//alert(document.location);
	}
	/*Update cac 6:15pm on 10-23-2002*/
	/*this will be our primary cookie function to be used to story all types of interesting stuff*/
	var cookieString = document.cookie;
	var today = new Date(); 
	var cookieExpires = new Date(today.getTime() + 712 * 24 * 60 * 60 * 1000); // plus 30 day
	var deletecookieExp = new Date(today.getTime() - 72 * 60 * 60 * 1000);  //
	var cookiePath = ";Path=/"; 
  
  function getCookieValue(name) { 
	var index = cookieString.indexOf(name + "="); 
	if (index == -1) return null; 
		index = cookieString.indexOf("=", index) + 1; 
	var endstr = cookieString.indexOf(";", index); 
	if (endstr == -1) endstr = cookieString.length; 
	return unescape(cookieString.substring(index, endstr)); 
	}
	 
	function deleteCookie(name)
	{
		value = escape(name); 
		document.cookie=name + "=null; expires=" + deletecookieExp.toGMTString();
		cookieString = document.cookie;
	}
	
	function setCookie(cookieName, cookieValue)
	{ 
	 if (cookieValue != null && cookieValue != "")
		cookieValue = escape(cookieValue); 
		document.cookie=cookieName + "=" + cookieValue + "; expires=" + cookieExpires.toGMTString() + cookiePath;
		cookieString = document.cookie;
	}
	
	/*This function does a simple image swap. takes 3 parameters an img and a element ID and type of image swapped*/
	function imageExchange(locId,img,type)
	{
		if (ns4) {
        	eval('document.locId.'+type+'= img');
		} else if (ie5||ie6||ns6||ns7) {
			eval('document.getElementById(locId).'+type+' = img');
		}else if(ie4){
			'document.all.'+locId+'.'+type+'= img';
		}
	}
	var is_over = 0;
	var inlink = 0;
	function linkpopUp(bgc,da_header,da_content,third) {
	inlink = 1;
	da_text = '<table cellspacing=0 cellpadding=1 border=0 width=200><tr><td bgcolor="'+bgc+'">';
	da_text += '<table width=100% cellspacing=0 cellpadding=2 border=0 bgcolor=#DDDDDD><tr><td align=left><font class="bodysmall">';
	da_text += da_content+third;
	da_text += '</font></td></tr></table></td></tr></table>';
	
	/*alert("this is the head:\n"+da_header+ "this is the content: \n"+da_content+ " this is the third :\n" +third+ "this is the fourth:\n"+fourth);*/
	
	/*if (ns4) {
	        document.layers['linkDiv'].visibility = "visible";
	        document.layers['linkDiv'].document.open();
	        document.layers['linkDiv'].document.writeln(da_text);
	        document.layers['linkDiv'].document.close();
	} else */
	if (ie6||ie5||ns6||ns7||firefox) {
	        linkDiv.style.visibility = "visible";
	        linkDiv.innerHTML = da_text;
	}
	
	}
	
	function linkpopDown() {
	inlink = 0;
	/*if (document.layers) {
	        document.layers['linkDiv'].visibility = "hidden";
	        document.layers['linkDiv'].document.open();
	        document.layers['linkDiv'].document.writeln("");
	        document.layers['linkDiv'].document.close();
	} else*/ 
	if (ie6||ie5||ns6||ns7||firefox) {
	        linkDiv.style.visibility = "hidden";
	        //popupDiv.innerHTML = "";
	}
	
	}
	
	function daMouseCapture(e) { 
		var x = 0; var y = 0;
		if(inlink != 0) {
			if (window.Event) {
				x = e.pageX;
				y = e.pageY;
			} else {
    			x = event.clientX + document.body.scrollLeft;
				y = event.clientY + document.body.scrollTop;
			}

			if(x < 0){ x = 0; }
			if(y < 0){ y = 0; }

			linkDiv.style.left = x + 15; 
			linkDiv.style.top = y - 48;
		}
		/*if (document.layers) { alert();*/
		/*alert();*/
		//ORIGINAL: if((ie6||ie5||ns6||ns7||firefox||safari) && (inlink != 0)){linkDiv.style.left = window.event.clientX + document.body.scrollLeft + 5; linkDiv.style.top = window.event.clientY + document.body.scrollTop-48;}
		/*if(ns4){document.layers['linkDiv'].left = e.pageX -60; document.layers['linkDiv'].top = e.pageY - 53;}*/
	}
	
	
	function sendCBSNews_HBX(pdfpage){
			
	 thisACCT = "DM52100714BB;DM530910EMZA"	  
  	 thisPN = "complete+report+"+pdfpage+"+-+201";
	
	 _hbSet("hb", thisACCT);
	_hbSet("vcon", 'national');
	_hbSet("n", thisPN);
	
	_hbSend();
	} 
	
	function gotoURL(obj){
		var url = obj.split("?");
		var isTaken = getCookieValue("usability_survey");
		var loc = obj.split("?url=");
		var newloc = "http://www.cbsnews.com"+loc[1];
		if(isTaken=='taken'){document.location.href=newloc;}
		else if(isTaken!="taken")
		{	if(cbsnews_ip.substring(0, 7)!="170.20."){document.location.href = "/htdocs/user_survey/story_usability_survey.html?"+url[1];}
			else{document.location.href=newloc;}
		}
	}
	/*************************************************************
	This function generates a pop up box that takes the 
	user's info, attaches it to an email and sends the 
	video url as well.  It requires one parameter, video url
	**************************************************************/
	function Emailvideo(t,v,hb,ent)
	{
		var videoTitle = t.replace(/'/g, "&lsquo;");
		var videoUrl = v;
		if (ent == '1'){
		launch('SendVideo',336,535,'http:\/\/www.cbsnews.com/htdocs/send_article/entertainment.html?story_headline='+videoTitle+'&story_url=http:\/\/www.cbsnews.com/sections/showbuzz_video/main500540.shtml?clip='+videoUrl+'&title='+t.replace(/ /g, "$@$")+hb);}
		else {
		launch('SendVideo',540,400,'http:\/\/www.cbsnews.com/htdocs/send_article/framesource.html?story_headline='+videoTitle+'&story_url=http:\/\/www.cbsnews.com/sections/i_video/main500251.shtml?id='+videoUrl);}
	}
	/*End videoEmail Function*/
	
	function linkTo(tag) {
		/*****************check link tag and determine output of file*****************/
		
		//if tag structure has javascript launch the javascript
		if (tag.href.indexOf("javascript:") !=-1) {//filter out url from javascript if index of showbuzz. this way it will open new window instead of popup window
			if(tag.href.indexOf('PopUp') > 0){
			var i = tag.href.split("'");
			var iUrl = i[1].split("'");
			var newWin = launch('CBSNewsInteractive', 740, 570, '/common/includes/cbsnews_interstitial.shtml?page='+iUrl[0]);
			return false;
			newWin.focus();		
			}else{	
			return true;
			}
			
		} 
		
		if((tag.href.indexOf("/video") > 0) && (tag.href.indexOf('/videoarchive') < 0) && (tag.href.indexOf('/video/main') < 0) && (tag.href.indexOf('/i_video/main') < 0)){
			var vID = tag.href.split(".com"); 
			
			if(document.location.href.indexOf("/elements") != -1){
			tag.href = 'http://www.cbsnews.com/sections/i_video/main500251.shtml?clip='+vID[1];
			var newWin = launch('CBSNewsVideo', 995, 685, tag.href);
				newWin.focus();
				return false;
			}else{
			var newWin = vlaunch('clip='+vID[1]+'');
			return false;
			newWin.focus();/**/
			}
					
		}
		else if (tag.href.indexOf(".mp3") > 0) {
			// Audios can be either site
			tag.href = tag.href.replace("www.cbsnews.com/media", "audio.cbsnews.com");
			tag.href = tag.href.replace("www.showbuzz.cbsnews.com/media", "audio.cbsnews.com");
			tag.href = tag.href.replace("showbuzz.cbsnews.com/media", "audio.cbsnews.com");
			tag.target = "_new"; 
			return true;
		}
		/*else if (tag.href.indexOf("/videoarchive") > 0) {
			var pos = tag.href.indexOf(".shtml");
			var pos2 = tag.href.indexOf("_1_");
			var archiveStr = tag.href.substring(pos+15, pos2);
			tag.href = tag.href.substring(0, pos) + "_1_videosection_page.shtml";//http://www.cbsnews.com/sections/i_video/main500251_1_videosections_page.shtml
			tag.href = tag.href.replace("cbsnews.com", "cbsnews.com/sections/i_video/main500251.shtml?channel=");
			
			return true;
			//http://www.cbsnews.com/sections/i_video/main500251.shtml?channel=/elements/2006/05/22/world/videoarchive1639012_1_videosection_page.shtml
			http://www.cbsnews.com/elements/2006/05/22/world/videoarchive1639012_1_videosection_page.shtml
		}*/
		else if (tag.href.indexOf("/elements") > 0){
			if (tag.href.indexOf("showbuzz.cbsnews") < 0 && document.location.href.indexOf("/elements") > 0){
				if(tag.href.indexOf('videoarchive') > 0){
					tag.href = tag.href.replace(".shtml", "_1_videosection_page.shtml");
					tag.href = tag.href.replace("www.cbsnews.com", "www.cbsnews.com/sections/i_video/main500251.shtml?channel=");
					
					var newWin = launch('CBSNewsVideo', 995, 685, tag.href);
					return false;
					newWin.focus();					
				}else{
				var newWin = launch('CBSNewsInteractive', 740, 570, '/common/includes/cbsnews_interstitial.shtml?page='+tag.href);
				return false;
				newWin.focus();				
				}
			}
			else if(tag.href.indexOf("showbuzz.cbsnews") > 0){
				tag.target = "_new";
				return true
			}
			else if( tag.href.indexOf("videoarchive") > 0 && tag.href.indexOf("i_video") > 0 ){
				var newWin = launch("CBSNewsVideo", 995, 685, tag.href);
				return false;
				newWin.focus();				
			}
			else if( tag.href.indexOf("videoarchive") > 0 && tag.href.indexOf("i_video") < 0 ){
				tag.href = tag.href.replace(".shtml", "_1_videosection_page.shtml");
				tag.href = tag.href.replace("www.cbsnews.com", "www.cbsnews.com/sections/i_video/main500251.shtml?channel=");
				
				var newWin = launch('CBSNewsVideo',995, 685, tag.href);
				return false;
				newWin.focus();				
			}
			else 
			{
				var newWin = launch('CBSNewsInteractive', 740, 570, '/common/includes/cbsnews_interstitial.shtml?page='+tag.href);
				return false;
				newWin.focus();
			}
			
		}
		else if (tag.href.indexOf("showbuzz.cbsnews") > 0){
			tag.target = "_new";
			return true;
		}
		else if (tag.href.indexOf("www.cbsnews") > 0 && document.location.href.indexOf("/elements") < 0){
			if( tag.href.indexOf("/i_video") > 0)
			{
				var newWin = launch('CBSNewsVideo',995, 685, tag.href);
				return false;
				newWin.focus();
			}
			else
			{
			tag.target = "_top";
			return true;
			}
		}
		else if(tag.href.indexOf("/video") > 0 )
		{
			var newWin = launch('CBSNewsVideo',995, 685, tag.href);
			return false;
			newWin.focus();
		}
		else
		{
			tag.target = "_new";
			return true
		}
		/*****************END check link tag and determine output of file*****************/
	}
		
	/*************************************************************
	This function reloads the home page unless a video is playing
	**************************************************************/
	function CBSautoReload(){setTimeout("isReloadable()", 180000);}
	/*End iautoReload Function*/

        /*************************************************************
        Return the offset to eastern time
        **************************************************************/
        function getEasternOffset() {
                return 300;
        }
		
		
	/*************************************************************
	toggle for most popular:  added by cchamberlain@cbs.com:
	October 18th, 2006	
	*************************************************************/
	function togglePopular(selection){
		var menu = Array('popular-photos', 'popular-stories', 'popular-videos');
	
		if(selection == ''){
			selection = menu[0];
		}
		for(i=0; i<menu.length; i++){
			if(menu[i] == selection){
				gebid(menu[i] + '-menu').className = "menu-selected header"
				gebid(menu[i] + '-menu').getElementsByTagName('a')[0].className = "link-selected";
				gebid(menu[i] + '-list').style.display = '';
			} else {
				gebid(menu[i] + '-menu').className = "menu-unselected"
				gebid(menu[i] + '-menu').getElementsByTagName('a')[0].className = "link-unselected header";
				gebid(menu[i] + '-list').style.display = 'none';
			}
		}
	}
	
	function gebid(e){
		return document.getElementById(e);
	}

/* Generic popup implementation - raccettura */
function cbsPopup(id){
	this.id = id; return false;
};

cbsPopup.prototype = {

	open: function(url){
		this.url = url;
		if(!document.getElementById(this.id)){
			this.xmlHttpRequester('/common/popups/'+this.id+'.xml', this.buildPopup);
		}
		return false;
	},

	close: function(obj){
		obj.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode.parentNode.parentNode);
		return false;
	},

	buildPopup: function(response){
		var doc = response.responseXML;
		var iframe = false;
		var footer = false;
		var type = 'L';
		var contentHeight = null;

		if(this.getNode('url', doc) && this.getNode('url', doc).firstChild){
			iframe = true;
		}

		if(this.getNode('footer', doc) && this.getNode('footer', doc).firstChild){
			footer = true;
		}

		if(this.getNode('type', doc) && this.getNode('type', doc).firstChild){
			type = this.getNode('type', doc).firstChild.data;
			if(type == 'L'){ type = ''; }
		}
		
		if(this.getNode('contentHeight', doc) && this.getNode('contentHeight', doc).firstChild){
			contentHeight = this.getNode('contentHeight', doc).firstChild.data;
		}
		

		frame = this.genPopup(footer, iframe, type, contentHeight);

		// iFrame URL
		if(this.url){
			this.gebid(this.id+'_frame').src = this.url;
			this.gebid(this.id+'_frame').contentWindow.document.body.style.border = 0;
		}
		else if(this.getNode('url', doc) && this.getNode('url', doc).firstChild){
			this.gebid(this.id+'_frame').src = this.getNode('url', doc).firstChild.data;
		} else {

			if(this.getNode('content', doc) && this.getNode('content', doc).firstChild){
				this.gebid(this.id+'_content').innerHTML = this.getNode('content', doc).firstChild.data;
			}
		}

		if(this.getNode('footer', doc) && this.getNode('footer', doc).firstChild){
			this.gebid(this.id+'_footer').innerHTML = this.getNode('footer', doc).firstChild.data;
		}

		if(this.getNode('header', doc) && this.getNode('header', doc).firstChild){
			this.gebid(this.id+'_header').innerHTML = this.getNode('header', doc).firstChild.data;
		} else {
			this.gebid(this.id+'_header').innerHTML = '&nbsp;'; // should be 1 char space if nothing
		}

		var scrollX = 0, scrollY = 0;
		if(document.body.scrollTop){
			scrollX = document.body.scrollLeft;
			scrollY = document.body.scrollTop;
		} else if (document.documentElement){
			scrollX = document.documentElement.scrollLeft;
			scrollY = document.documentElement.scrollTop;
		} else {
			scrollX = window.pageXOffset;
			scrollY = window.pageYOffset;
		}

		var wX =0,  wY = 0;
		if(document.all){
			wX = document.body.offsetWidth;
			wY = document.body.offsetHeight;
		} else {
			wX = window.innerWidth
			wY = window.innerHeight;
		}
		var y = scrollY + (wY/2) - (frame.clientHeight/2);
		var x = scrollX + (wX/2) - (frame.clientWidth/2);
		
		frame.style['position'] = 'absolute';

		// Move off center
		y =  scrollY + 150;
		x = scrollX + 125;

		frame.style['top'] = y + 'px';
		frame.style['left'] = x + 'px';
		frame.style['z-index'] = '1000';
	},

	gebid: function(el){
		return document.getElementById(el);
	},

	getNode: function(n, doc){
		return doc.getElementsByTagName(n)[0];
	},

	genPopup: function(footer, iframe, type, contentHeight){
		if(navigator.userAgent.indexOf("MSIE")!=-1){
			cname = 'className';
		} else {
			cname = 'class';
		}

		// Build out the dom, and assign classes
		var popupFrame = document.body.appendChild(document.createElement('div'));
		popupFrame.setAttribute(cname, 'popupFrame'+type);
		popupFrame.setAttribute('id', this.id);

		var popupHeader = popupFrame.appendChild(document.createElement('div'));
		popupHeader.setAttribute(cname, 'popupHeader'+type);

		var popupHeaderInner = popupHeader.appendChild(document.createElement('div'));
		popupHeaderInner.setAttribute(cname, 'popupHeaderInner'+type);
		popupHeaderInner.setAttribute('id', this.id+'_header');

		var popupContentFrame = popupHeader.appendChild(document.createElement('div'));
		if(iframe){
			var popupContent = popupContentFrame.appendChild(document.createElement('iframe'));
			popupContent.setAttribute('id', this.id+'_frame');
			popupContent.setAttribute('frameborder', '0');
		} else {
			var popupContent = popupContentFrame.appendChild(document.createElement('div'));
			popupContent.setAttribute('id', this.id+'_content');
		}
		popupContent.setAttribute(cname, 'popupContent'+type);

		if(contentHeight != null){
			popupContent.style['height'] = contentHeight;
		}
		
		if(footer){
			// Set the class on content frame now
			popupContent.setAttribute(cname, 'popupContentFrame'+type);

			var popupFooter = popupHeader.appendChild(document.createElement('div'));
			popupFooter.setAttribute(cname, 'popupFooter');
			popupFooter.setAttribute('id', this.id+'_footer');
		} else {
			popupContentFrame.setAttribute(cname, 'popupContentFrameNoFooter'+type);
	}

		// also some css specific to IE to work around IE bugs
		if(document.all && navigator.userAgent.indexOf("Opera") ==-1){
			if (window.XMLHttpRequest) {
				if(type == 'S'){
					document.styleSheets[0].addRule("#"+this.id, "background-image: url(http://wwwimage.cbsnews.com/common/images/v2/popq_shadow.png); background-repeat: no-repeat;");
				} else {
					document.styleSheets[0].addRule("#"+this.id, "background-image: url(http://wwwimage.cbsnews.com/common/images/v2/popup_shadow.png); background-repeat: no-repeat;");
				}
			}
			document.styleSheets[0].addRule("#"+this.id+'_header', "margin: 0px 8px 19px 8px; padding-top: 8px");

			if(footer){
				document.styleSheets[0].addRule("#"+this.id+'_footer', "margin-right: 4px");
			}
		}
		return popupFrame;
	},

	xmlHttpRequester: function(url, loadingFunct) {
		var request = false;
		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
			if(request.overrideMimeType){ // IE7 doesn't support this
				request.overrideMimeType('text/xml');
			}
		}
		else if (window.ActiveXObject) {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
		request.open('GET', url, true);
		var _this = this;
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.status == 200) {
					_this.buildPopup(request);
				} else {
					alert('Sorry, we couldn\'t perform the action you requested.');
				};
			}
		}
		request.send('');
	}

};


        /*************************************************************
        Function for check omniture variables
        **************************************************************/
        function checkOmniture() {
                var string = "acct = " + s_account + "\n";
                string += "name = " + s.pageName + "\n";
                string += "p1 = " + s.prop1 + "\n";
                string += "p2 = " + s.prop2 + "\n";
                string += "p3 = " + s.prop3 + "\n";
                string += "p4 = " + s.prop4 + "\n";
                string += "p5 = " + s.prop5 + "\n";
                string += "p6 = " + s.prop6 + "\n";
                string += "p7 = " + s.prop7 + "\n";
                string += "p8 = " + s.prop8 + "\n";
                string += "p9 = " + s.prop9 + "\n";
                string += "p10 = " + s.prop10 + "\n";
                string += "p11 = " + s.prop11 + "\n";
                string += "p12 = " + s.prop12 + "\n";
                string += "p13 = " + s.prop13 + "\n";
                string += "p14 = " + s.prop14 + "\n";
                string += "p15 = " + s.prop15 + "\n";
                string += "p16 = " + s.prop16 + "\n";
                string += "p17 = " + s.prop17 + "\n";
                string += "p18 = " + s.prop18 + "\n";
                string += "p19 = " + s.prop19 + "\n";
                string += "p20 = " + s.prop20 + "\n";
                string += "p21 = " + s.prop21 + "\n";
                string += "p22 = " + s.prop22 + "\n";
                string += "p23 = " + s.prop23 + "\n";
                alert(string);
        }
		function checkDART() {
			if (typeof(vtag) != "undefined") {
				alert(vtag);
			} else if (typeof(dcTag) != "undefined") {
				alert(dcTag);
			} else {
				alert("unknown");
			}
		}
function bug() {
	window.open("http://bugzilla.sportsline.com/enter_bug.cgi?product=News%20Website&short_desc=&bug_file_loc=" + escape(document.location.href), "bug");
}
        //document.onclick = function() {
        //        if ((window) && (window.event) && (window.event.ctrlKey)) {
        //                checkOmniture();
        //                window.event.cancelBubble = true;
        //        }
        //}
