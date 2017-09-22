
if(self.location.hostname.indexOf('artistdirect.com')==-1) {document.writeln('<base href="http://www.artistdirect.com" />');}
var _ad_day;
var _ad_MonthNames;
var _ad_month;
var _ad_currentyear;
var _ad_inittime;
var _ad_loadtime;
function getDates(){
	date = new Date();
	days = date.getDay();
	_ad_day = date.getDate();
	_ad_inittime= date.getTime();
	if (_ad_day<10)
		_ad_day="0"+_ad_day;
	_ad_month = date.getMonth();
	_ad_currentyear=date.getFullYear();
	_ad_MonthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
}
getDates();

function getParam( name )
{
	var q = self.location.search;
	var i = q.indexOf( name+"=")
	if(  i != -1 )
	{  i += name.length+1; var j = q.indexOf( "&", i );
	   var m='';
	   if( j == -1 ) { m=q.substring( i )}else{m=q.substring( i, j )}
	   return unescape(m.replace(/\+/g, ' '));
	}
	return '';
}

function openListen(id){
  var url = 'http://www.artistdirect.com/nad/window/media/player/listen/0,,' + id + ',00.html';
  window.open(url,'listen','resizeable=no,scrollbars=no,width=665,height=580');
}

function openListen2(id){
  var version = new Array( 2,3,2,3,2,3,2,3,2,3 );  
  //alert(navigator.userAgent);
  //alert( self.location.hostname );
  var preroll = GetCookie( 'NAD_preroll_msn' );
  var url = 'http://www.artistdirect.com/nad/window/media/player/listen/0,,' + id + ',00.html';
  if( (navigator.userAgent.indexOf('Windows')!=-1 && navigator.userAgent.indexOf('MSIE')!=-1) && (!preroll || preroll != 1) ) {
	var pre_duration = 1000 * 60 * 60 * 24;
	var pre_date = new Date( (new Date()).getTime() + pre_duration );
	var ver = version[ ((new Date()).getTime())%10 ];
	//alert( 'ad vesion:' + ver );
	//alert( 'current time:' + (new Date()).toGMTString()  + "     cookie exp time:" + pre_date.toGMTString() );
	document.cookie="NAD_preroll_msn=1; path=/; domain=artistdirect.com; expires=" + pre_date.toGMTString();
	url = 'http://www.artistdirect.com/nad/window/media/preroll/0,,msn-' + ver + ',00.html?targetURL=' + escape( 'http://www.artistdirect.com/nad/window/media/player/listen/0,,' + id + ',00.html' );
  }
  window.open(url,'listen','resizeable=no,scrollbars=no,width=665,height=580');
}

function openVideo(id){
  var url = 'http://www.artistdirect.com/nad/window/media/player/video/0,,' + id + ',00.html';
  window.open(url,'video','resizeable=no,scrollbars=no,width=665,height=580');
}

function openVideo2(id){
  var url = '';
  var preroll = GetCookie( 'NAD_preroll_nestle' );
  var url = 'http://www.artistdirect.com/nad/window/media/player/video/0,,' + id + ',00.html';
  if( (navigator.userAgent.indexOf('Windows')!=-1 && navigator.userAgent.indexOf('MSIE')!=-1) && (!preroll || preroll != 1) ) {
	var pre_duration = 1000 * 60 * 60 * 24;
	var pre_date = new Date( (new Date()).getTime() + pre_duration );
	document.cookie="NAD_preroll_nestle=1; path=/; domain=artistdirect.com; expires=" + pre_date.toGMTString();
	url = 'http://www.artistdirect.com/nad/window/media/preroll/0,,nestle,00.html?targetURL=' + escape( 'http://www.artistdirect.com/nad/window/media/player/video/0,,' + id + ',00.html' );
  }
  window.open(url,'video','resizeable=no,scrollbars=no,width=665,height=580');    
}

function openStream(type,album,track) {
  if (track==undefined) { track = ''; }
  if( type == 'wmv' || type == '' ) { type = 'WMLO'; }
  else { type = 'RMLO'; }
  var url = 'http://www.artistdirect.com/nad/window/media/player/0,,' + album + '-' + track + '-' + type + ',00.html';
  window.open(url,'stream','resizeable=no,scrollbars=no,width=665,height=580');
}

function openPhoneMerch(id){
  var url = 'http://www.artistdirect.com/nad/window/phone/0,,' + id + ',00.html';
  window.open(url,'phone','resizeable=no,scrollbars=no,width=665,height=580');
}

function openTicketsByState(path,list) {
	if( list && list.options ) {
		si = list.selectedIndex;
		if( list.options[si].value!="" ) {
			self.location.href="/nad/tickets/state/0,,"+list.options[si].value+",00.html"
		}
	}
}

function selectState(name,state) {
	obj = document.getElementsByName(name);
	obj = obj[0];
	for( i=0;i<obj.options.length;i++ ) {
		if( obj.options[i].value==state ) {
			obj.options[i].selected=true;
			break;
		}
	}
}

function openLink(link) {
	top.location.replace(link);
	return false;
}

function openSubscribe() {
	window.open('http://www.artistdirect.com/nad/email/AD/signup/','register','width=400,height=600,scrollbars=no,menubar=no,toolbar=no,status=no,location=no');
}

function openUnsubscribe() {
	window.open('http://pms.artistdirect.com/nad/email/AD/signup/','register','width=400,height=600,scrollbars=no,menubar=no,toolbar=no,status=no,location=no');
}

function pageLoaded() {
	chkEffort();
	
	_ad_loadtime=((new Date()).getTime() - _ad_inittime);
}



function showBrandedNav() {
	
}

function subnavURL(ahref,id) {
  //calls by artist subnavs
  cardURL = '/nad/music/artist/card';
  curURL = ahref.pathname;
  curURL = curURL.replace( /[0|1].*htm.*$/, "" );
  if ( cardURL != curURL ) { ahref.href='/nad/music/artist/card/0,,'+id+',00.html'+ahref.hash; }
  return true;
}

function checkvoted( pollid ) {
	// already voted is checked when window opens!
	//if ( document.cookie.indexOf( "AM_POLL_" + pollid ) != -1 ) { alert( "You've already voted" ); return false; }
	var radiovalue;
	for( var i=0; i<document.pollform.votesubmit.length; i++ )
	{
		if( document.pollform.votesubmit[i].checked )
		{
			radiovalue = document.pollform.votesubmit[i].value;
		}
	}
	var url = document.pollform.action + "?";
	url = url + "votesubmit=" + radiovalue;
	window.open(url,'poll','resizeable=no,scrollbars=no,width=660,height=325');
	return false;
}

function checkEmail(str)
{
	str=str.replace(/^\s+/g, '').replace(/\s+$/g, '');
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (str!="" && filter.test(str))
		testresults=true;
	else{
		testresults=false;
	}
	return (testresults);
}

var urlPath=self.location.pathname;
var abs_servername = 'http://www.artistdirect.com';
function GetCookie(sName)
{
  // cookies are separated by semicolons
  var aCookie = document.cookie.split("; ");
  for (var i=0; i < aCookie.length; i++)
  {
    // a name/value pair (a crumb) is separated by an equal sign
    var aCrumb = aCookie[i].split("=");
    if (sName == aCrumb[0])
      return unescape(aCrumb[1]);
  }

  // a cookie with the requested name does not exist
  return null;
}

//for swiching dhtml navs (used in mobile pages)
function switchNav( layerFrom, layerTo )
{
  if ( document.getElementById )
  { var layerF = document.getElementById( layerFrom ); var layerT = document.getElementById( layerTo );
	if( layerF && layerT ) { layerF.style.display = 'none'; layerT.style.display = 'block'; }
  }
}

function writeNavImageMap()
{

}


function tabon(obj) 
{
	obj.style.backgroundImage='url(/Images/nad/gui/button_on_back.gif)';
	//obj.style.border='1px solid #333333';	
	//selobj = document.getElementById('nad_tab_selected');
	//if( selobj ) { selobj.style.border='1px solid #a5a5a5'; }
	return true;
}
function taboff(obj)
{
	obj.style.backgroundImage='url(/Images/nad/gui/button_off_back.gif)';
	//obj.style.border='1px solid #a5a5a5';
	//selobj = document.getElementById('nad_tab_selected');
	//if( selobj ) { selobj.style.border='1px solid #000000'; }
	return true;
}



function chgImgObj( imgObj, newImg )
{ imgObj.src=newImg.src; }

function countdown( dateString )
{
	var now = new Date();
	var thedate = new Date( dateString );
	if( isNaN(thedate) ) { return; }
	var diff = Math.floor((thedate.getTime()-now.getTime())/1000);
	var diffdays = Math.floor(diff/(60*60*24));
	diff = diff%(60*60*24);
	var diffhours = Math.floor(diff/(60*60));
	diff = diff%(60*60);
	var diffmins = Math.floor(diff/(60));
	diff = diff%(60);
	var diffsecs = Math.floor(diff);
	var retstring = diffdays + ' Days : ' + diffhours + ' Hours : ' + diffmins + ' Minutes : ' + diffsecs + ' Seconds.';
	return retstring;
}

function write50cent()
{
	var countdownstring = countdown('Nov 09 2005 00:00:01');
	var thediv = document.getElementById('nav_yellow_link');
	if( !thediv ) { return; }
	thediv.innerHTML = 'Get Rich Or Die Tryin&#39; hits theaters in ' + countdownstring;
	thediv.href='http://oascentral.artistdirect.com/RealMedia/ads/click_lx.ads/artistdirect.com/1112745096/x90/Artist/GetRich_Homepage_CountDown/Test_1x1.gif/1'
	window.setTimeout("write50cent();",1000);
}

function trimString (str) {
  str = this != window? this : str;
  return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
}

function writeArtistPromo(id,name) {

}


function getDotcom( url )
{
	url=url.toLowerCase();
	url=url.replace( /^.+\:\/\//, "" );
	url=url.replace( /\/.*/, "" );
	url=url.replace( /:[\d]*/, "" );
	var urls=url.split(".");
	if( urls.length>0 ) { url=urls[urls.length-1];
		if( urls.length>1 ) { url=urls[urls.length-2] + "." + url; }
	}
	return url;
}

function setEffort( aff )
{ 
    
  
  aff_duration = 1000 * 60 * 60 * 24 * 30;
  aff_date = new Date( (new Date()).getTime() + aff_duration );
  if( typeof(aff)!="undefined" && aff!='' ) {
  	document.cookie='AM_EFFORT=' + escape(aff) + '; path=/; domain=.artistdirect.com; expires=' + aff_date.toGMTString();
  }
  return true; 
}

function chkEffort()
{ 
  e=getParam('aff'); 
  if(e&&e!='' ){setEffort(e);} 
}

function styEscape( sty )
{ return sty.toLowerCase().replace(/ /g,'').replace(/&/g,'').replace(/\//g,'').replace(/alternative/gi,'alt').replace(/#/gi,''); }

function valEscape( val )
{
	if( val != null ) {
	val = val.replace( / /g, '+' );
	val = val.replace( /&/g, 'and' );
	val = val.replace( /=/g, '%3D' );
	}
	return val;
}

var NAD_xevals = new Array();
var NAD_listpos = new Array();
var NAD_popstatus = '';
var nad_keywords = '';


// OAS positions
var n_top = 'Top';  //top banner
var n_bottom = 'Bottom'; //bottom banner
var n_tower = 'Left'; //left hand side tower
var n_mrect = 'Right'; //300x250 rect
var n_pop = 'Frame1'; //1x1 pop up
var n_shop = 'Middle'; //shop banner
var n_windowbanner = 'TopRight';  //half banner in window players
var n_windowminibanner = 'x52';
//var n_whatshot = 'x20';  //whats hot module on homepage
var n_whatshot = 'x10';

//video preroll
var n_vidpreroll = 'Position2';

//190x30s
var n_news = 'x01';
var n_charts = 'x03';
var n_listen = 'x05'; //feature downloads
var n_ringtones = 'x07';
var n_poll = 'x11';
var n_newreleases = 'x09';
var n_verge = 'x15';
var n_essential = 'x13';
var n_wallpaper = 'x50';
var n_playerskin = 'x53';

// USDM only UMG videos test
var n_umg = 'x95';

//sponsorships
var n_newssponsor = 'Middle3';
var n_listensponsor = 'Middle1';
var n_watchsponsor = 'Middle2';

//site-wide special mid banner sponsorship
var n_sitewide_sponsor = 'Middle';

