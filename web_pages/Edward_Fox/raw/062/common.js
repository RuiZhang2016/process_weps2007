self.name = "vh1";

// browser detection code for legacy pages
var NS = (navigator.appName == "Netscape");
var IE4 = document.all;
var NS4 = document.layers;
mac = navigator.appVersion.indexOf("Mac");
if (mac>=0) {mac=1} else {mac=0}
var compliant = document.getElementById;
var initialized = false;
 
function imgFlip(imageName,imageSrc) {
  if (document.images && document.images[imageName])
    document.images[imageName].src = eval(imageSrc + ".src");
}
// FORM HANDLER CODE ----------------------------------------------------------
var win = null;
function formHandle(formname, listname) {
  var l = document.forms[formname][listname];
  var i = l.selectedIndex;
  var url = l.options[i].value;
  var firstChar = url.charAt(0);
  var secondChar = url.charAt(1);
  
  var windowprops = new Array;
  windowprops[0] = "width=400,height=300,scrollbars=yes,resizable=yes";
  windowprops[1] = "width=320,height=180,screenX=30,screenY=30";
 // add new window properties here and call them by using '$' followed by the next array number and place in front of url 
 // windowprops[1] = " ";
 // windowprops[2] = " ";
  
  // do nothing if no url is selected
  if (url=='none') l.selectedIndex = 0;
  
  // open the link in a new browser window
  else if (firstChar=='+') open(url.substring(1), '_blank');
  
  // open as popup with attributes defined in the array windowprops[]
  else if (firstChar=='$') window.open(url.substring(2),"MenuPopup",windowprops[secondChar]);
  
  // just go to the URL
  else location.href = url;
}
// REGULAR EXPRESSION STRIPPER ------------------------------------------------
function valueStrip(regSearch,features)
{
	var results =  features.match(regSearch);
	if (results != null) return results[2];
	else return 0;
}
// POSITIONED POP UP WINDOW CODE ----------------------------------------------
function popper(theURL,winName,features,purl) {
	var posWin = null;
	var gotIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;	
	var gotNS = (navigator.appName == 'Netscape') ? true : false;
	var gotNN6 = (gotNS && (parseInt(navigator.appVersion) >= 5)) ? true : false;
// REGULAR EXPRESSIONS TO STRIP OUT THE WIDTH AND HEIGHT VARS -----------------
	var widthMatch = /(width=)(\d+)/i;
	var heightMatch = /(height=)(\d+)/i;
	var scrollMatch = /(scrollbars=)([a-zA-Z0-9])/i;
	var numMatch = /\d+/;
	
	var width = valueStrip(widthMatch,features);
	var height = valueStrip(heightMatch,features);
	var scrollbars = valueStrip(scrollMatch,features);
	
	if (posWin!=null && !posWin.closed) posWin.close();
	
   if (gotIE) {
      var left = (screen.Width/2) - width/2;
      var top = (screen.Height/2) - height/2;
      posWin = window.open(theURL,winName,"scrollbars=0,left="+left+",top="+top+",width="+width+",height="+height+",scrollbars="+scrollbars);
      if((typeof posWin != "undefined") && (posWin != null)){
         posWin.focus();
      }
   }
	else if (gotNS && !gotNN6) {
	var left = (screen.availWidth/2) - width/2;
	var top = (screen.availHeight/2) - height/2;
	posWin = window.open(theURL,winName,"screenX="+left+",screenY="+top+",innerWidth="+width+",innerHeight="+height+",scrollbars="+scrollbars);
	posWin.focus();
	}
	else if (gotNN6) {
	var left = (screen.availWidth/2) - width/2;
	var top = (screen.availHeight/2) - height/2;
	posWin = window.open(theURL,winName,"screenX="+left+",screenY="+top+",width="+width+",height="+height+",scrollbars="+scrollbars);
	posWin.focus();
	}
	else {
	posWin = window.open(theURL,winName,"scrollbars=0,width="+width+",height="+height+",scrollbars="+scrollbars);
	posWin.focus();
	}
	
	
	if (purl != null) window.location.href = purl;
	
	
	
}
// RELOADER CODE --------------------------------------------------------------
function load(){
  if (parseFloat(navigator.appVersion) == 4.08) return;
  location.reload();
}
// OPEN UP PREFERENCES WINDOW -------------------------------------------------
function pref(arg) {
  var url;

  if (!arg) url = "/my_account/util/direct.jhtml?dir=popup&linkTextID=toPrefs&messageID=loginRequired&welcome=false&postLoginURL=/my_account/prefs/framey.jhtml";
  else if (arg=="newsletters") url = "/my_account/util/direct.jhtml?dir=popup&linkTextID=toNewsletters&messageID=loginRequired&welcome=false&postLoginURL=/my_account/prefs/framey.jhtml%3Fsrc%3Dnewsletters";
  else if (arg=="fanclubs") url = "/my_account/util/direct.jhtml?dir=popup&linkTextID=toFanClubs&messageID=loginRequired&welcome=false&postLoginURL=/my_account/prefs/framey.jhtml%3Fsrc%3Dfanclubs";
  else url = arg;

  popper(url, "prefs", "width=640,height=500,scrollbars=1");
}

function prefs(arg) {
  var url;
  var id = null;
 if (!id) {
 
  //if (!arg) url = "/my_account/util/direct.jhtml?dir=popup&linkTextID=toPrefs&messageID=loginRequired&welcome=false&postLoginURL=/my_account/prefs/framey_new.jhtml";
  if (!arg) url = "/interact/my_account/my_account.jhtml";
  else if (arg=="newsletters") url = "/interact/my_account/newsletter_list.jhtml";
  //else if (arg=="fanclubs") url = "/my_account/util/direct.jhtml?dir=popup&linkTextID=toFanClubs&messageID=loginRequired&welcome=false&postLoginURL=/my_account/prefs/framey_new.jhtml%3Fsrc%3Dfanclubs";
  else url = arg;
  }
  
  else  url = "/my_account/util/direct.jhtml?dir=popup&linkTextID=toArtistPage&messageID=loginRequired&welcome=false&postLoginURL=/my_account/prefs/framey_new.jhtml%3Fpaid%3D" + id;
  
  spawnOrLink(url);
  //popper(url, "prefs", "width=640,height=500,scrollbars=1");
}


function checkIfRap(rid) {

switch (parseInt(rid)) {
			case -138 : 
			return true;
			case -194 : 
			return true;
			case 9 : 
			return true;
			case 130 : 
			return true;
			case -196 : 
			return true;
			case -180 : 
			return true;
			case 15 : 
			return true;
			default :
			return false;
		
		}

}
function checkIfHH(rid) {

switch (parseInt(rid)) {
			case -138 : 
			return true;
			default :
			return false;
		
		}

}



// coBrand v.2.1 - VH1 --------------
function launchRSN(varStationID)
{
	
		var domainN = window.location.hostname.toLowerCase();
		if ((domainN.indexOf("dev") != -1) || (domainN.indexOf("qa") != -1) || (domainN.indexOf(".mtvi.com") != -1)) domainN = 'http://smdev.sonicnet.com';
		else domainN = 'http://radio.sonicnet.com';
		
		
		
			var face = 'VH1DOTCOM';
			var tuner;
			//if (checkIfRap(varStationID)) tuner = window.open('/asm/ads/advertisers/fs/ad.jhtml?rid=' + varStationID,'TUNER','width=682,height=381,toolbar=no,resizable=no,scrollbars=no');
			//else tuner = window.open(domainN + '/player/launchplayer.asp?A='+varStationID+'&face='+face,'TUNER','width=682,height=381,toolbar=no,resizable=no,scrollbars=no');
			if (checkIfHH(varStationID)) tuner = window.open('/asm/ads/advertisers/cingular/ad.jhtml?rid=' + varStationID,'TUNER','width=682,height=381,toolbar=no,resizable=no,scrollbars=no');
			else if (varStationID == -268) tuner = window.open('/asm/ads/advertisers/sprint/ad.jhtml?rid=' + varStationID,'TUNER','width=682,height=381,toolbar=no,resizable=no,scrollbars=no');
			else if (varStationID == -209) tuner = window.open('/asm/ads/advertisers/konami/ad.jhtml?rid=' + varStationID,'TUNER','width=682,height=381,toolbar=no,resizable=no,scrollbars=no');
			else if (varStationID == -254) tuner = window.open('/asm/ads/advertisers/chilis/ad.jhtml?rid=' + varStationID,'TUNER','width=682,height=381,toolbar=no,resizable=no,scrollbars=no');
			else tuner = window.open(domainN + '/player/launchplayer.asp?A='+varStationID+'&face='+face,'TUNER','width=682,height=381,toolbar=no,resizable=no,scrollbars=no');
		
}

//Intro for Media Players
//function launchIntroVideo(videoID,time) {

//popper("/sitewide/apps/mediaplayer/intro.jhtml?vID=" + videoID + "&time=" + time, "liveVideos", "width=698,height=496,scrollbars=0");

//}  
// VARIABLE FOR THE MY MUSIC RANDOM PICTURE -----------------------------------
RandNum = null;

var reef = false;

function btmVideo(){
	launchVideo('vid=17861');
	window.location.href='/shows/dyn/behind_the_music/series.jhtml';
	return true;
}

function btmGame(){
	popper('/shows/series/behind_the_music/trivia_flash/index.jhtml','popUP','width=570,height=502,scrollbars=0');
	window.location.href='/shows/dyn/behind_the_music/series.jhtml';
	return true;
}

function fashionSweeps(){
	popper('/interact/sweepstakes/fashion_game/player.jhtml','popUP','width=715,height=505,scrollbars=0');
	window.location.href='/shows/dyn/fashion_awards_2002/series.jhtml';
	return true;
}

function hotOrNot(url) {
	popper(url,'popUp','width=728,height=595,scrollbars=0');
}

function spawnOrLink(theURL) {


window.location.href = theURL;


}

function targetBrow(theURL,winName) {
	window.open(theURL,winName);
}
