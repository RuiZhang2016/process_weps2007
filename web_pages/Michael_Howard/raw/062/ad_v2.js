// BEGIN import rev. science segments
if (document.domain != '') {
document.write('<s\cript type="text/javascript" src="http://js.revsci.net/gateway/gw.js?csid=J05531"></s\cript>');
}
// END import rev. science segments

	//hack for JF ads
	
	if (location.href.indexOf('politicalads') != -1) {thisNode = 'politics'; commercialNode='politics'}
	

	
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

var debugAdCode = false;
var show_doubleclick_ad = true ;
if (document.domain == 'www.shoplocal.com') thisNode = 'shoplocal';
if (location.href.indexOf("debugAdCode")+1) debugAdCode = true ;
if (document.location.search.indexOf("no_ads")+1) show_doubleclick_ad = false;
if (typeof commercialNode == 'undefined') commercialNode = '';
if (typeof thisNode == 'undefined') thisNode = adNode;


var _rs  = ''; // revenue science data
var _poe = ''; // point of entry
var _tc = 'tile'; // tiling category
var _cn = ''; // commercial node
var _an = false; // ad node
var _t = '';
var urlLoc = new String(document.location.href);

	if (typeof rsinetsegs != 'undefined') {
	for(i=0;i<rsinetsegs.length;i++) {
		_rs += "rs="+rsinetsegs[i].replace("J05531_","j")+";"
		}
}


(typeof thisNode != 'undefined')?_tn = thisNode:null;


blu = (typeof blu_name != 'undefined')?true:false;


if (typeof commercialNode != 'undefined' && commercialNode != '') {

_cn = 'cn=yes;pnode='+thisNode.split("/")[0]+';';
_an = true;


}
var static_wpatc = getWPATCookie();

 
// changed on first call to placeAd
var firstTimeCalled = true ;
var firstTimeCalledNew = true ;
var adUniqueNumber = '' ;
var newsAncestorAsString = new String("") ;

// changed on first call to placeAd or when assertive is true
var adAncestor = new String() ;
var adNode = new String() ;
var adSite = new String() ;
var adZone = new String() ;
var adSiteZone = new String() ;
var adDir = new String() ;
var adArgs = 0 ;


function placeAd(layer,node,kw,pos,dir,w,h,tile)
{
		if (thisNode == 'opinion/columns/politics/feddiary') {node = 'opinion/politics/feddiary'}
	
if (typeof rsinetsegs != 'undefined' && _rs.indexOf('j') == -1) {
	for(i=0;i<rsinetsegs.length;i++) {
		_rs += "rs="+rsinetsegs[i].replace("J05531_","j")+";"
		
		}
}

heavy="heavy=n;"
if (typeof document.referrer != "undefined")
	{
		if (document.referrer == '') 
		{	
			heavy="heavy=y;"
			setCookie('heavy','y',''+wpniPOE.toString()+'','/','.washingtonpost.com','')
		}
	else
		{
		heavy="heavy=y;"
			setCookie('heavy','y',''+wpniPOE.toString()+'','/','.washingtonpost.com','')
		}
	}

// This is a temporary hack for Fantasy Jobs ( Chris Stith: added 7/20/2006 ) 
agent = navigator.userAgent.toLowerCase();
if ((agent.indexOf('firefox') != -1 || agent.indexOf('safari') != -1) && node == 'sports/fantasyjob' && kw == 4){ document.write('<div style="position:absolute;top:353;padding-left:45;">')}



if (show_doubleclick_ad)
{
  if ( firstTimeCalled )
  {
    var axel = Math.random()+"";
    var ord = axel * 1000000000000000000;
    adUniqueNumber = ord+'?' ;
  }
  
  if (node.indexOf("/") == -1) node += "/" ;

    
	var na = [arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]] ;
    adArgs = 5 ;
    platform = na[0] ;
    //if (_an) {node = cleanNode(commercialNode)}
	//else node = cleanNode(na[1]) ;
	node = cleanNode(na[1]) ;
	
	if (location.href.indexOf('http://www.uclick.com/client/wpc/wpdoc/') != -1)
{node = 'artsandliving/crosswords/sudoku'};


	if (node.indexOf("media") >= 0 || node.indexOf("gallery") >= 0) node = 'photo';

	//temp fix for email-friend problem
	if (node == '') node = 'technology';
	//temp fix for contentconversion
	if (node == 'contentconversion') node = 'nation';
	//temp fix for uncategorized
	if (node == 'uncategorized') node = 'technology';
	if (node == 'high schools') node = 'technology';
	if (node == 'wizards') node = 'technology';
	if (node == 'search/newssearch') {
		if (document.location.search.indexOf("adv")+1) {
		node = 'search/newsadvanced';
		}
	}

	tile = na[2] ;
	kw = na[3];
	flexdisplay = na[4] ;
	
	pos = setPosition(tile); w = setWidth(tile); h = setHeight(tile); f = setFlexvalue(tile);

// Fantasy Football one-off for Nissan
	oo_url = document.location.href;
	if (oo_url.indexOf("LI2005042101450") != -1) kw= 'kw=cruise;'; 
	if (oo_url.indexOf("DI2005083101900") != -1) kw= 'kw=redskins;'; 
	if (oo_url.indexOf("test_ads") != -1) kw = 'kw=wpni_test;';
	if (oo_url.indexOf("smallbusiness101") != -1) kw = 'kw=smallbus101;';
	if (oo_url.indexOf("DI2005100501552") != -1) kw= 'kw=smallbus101;';
	if (oo_url.indexOf("DI2005100500899") != -1) kw= 'kw=smallbus101;';
	if (oo_url.indexOf("DI2005110101296") != -1) kw= 'kw=smallbus101;';
	if (oo_url.indexOf("DI2005102001378") != -1) kw= 'kw=smallbus101;';
	if (oo_url.indexOf("DI2005103101365") != -1) kw= 'kw=smallbus101;';
	if (oo_url.indexOf("DI2005102602804") != -1) kw= 'kw=smallbus101;';
	if (oo_url.indexOf("DI2005101100729") != -1) kw= 'kw=smallbus101;';
	if (oo_url.indexOf("welcome_to_post.html") != -1) kw = 'kw=remix;';
	if (oo_url.indexOf("GA2006021301885_metaRefresher.htm") != -1) kw = 'kw=olympics;'
	if (oo_url.indexOf("/wp-srv/sports/interactives/olympics06/") != -1) kw = 'kw=olympics;'
	if (oo_url.indexOf("AR2005040701359") != -1) kw = 'kw=montgomery;';
	if (oo_url.indexOf("cherryblossom/06/") != -1) kw = 'kw=cherryblossom;';
	if (oo_url.indexOf("onbalance") != -1) kw = 'kw=onbalance;';
	if (tile == 10){kw = 'kw=shermans;';};
	
	if (kw.indexOf(';') == -1){
		kw = kw + ';'
	}	
	
    if ( firstTimeCalledNew )
	{
	  adAncestor = getAdAncestor(node) ;
	  adSite = getAdSite(adAncestor) ;
	  adNode = getAdNode(node,adAncestor) ;
	  adZone = getAdZone(adNode) ;
	  adDir = getAdDir(node) ;
	  firstTimeCalledNew = true;


    if (adZone)
	  adSiteZone = adSite + "/" + adZone ;
	else
	  adSiteZone = adSite ;

	}




  //insert interstitial value in the top banner
  if ( firstTimeCalled  && !(location.href.match('sid=')) )
  {
    inter_value="dcopt=ist;ad=pop;";  
	
	if (thisNode == 'sports/fantasyjob') inter_value = '';
    
    // TO DETERMINE IF USER CAME FROM GOOGLE:
    var docUrl = document.location.href;
    var key = docUrl.indexOf('?');
    
    if (key != -1) // make sure there are parameters
    {
      // get the parameter
      var temp = docUrl.substring(key + 1, docUrl.length);
      
      // if just "g" was passed in, set the interstitial to false
	  if (docUrl.indexOf("g=1") != -1 || docUrl.match("sid=") || docUrl.indexOf("G=1") != -1) 
      {
		killedPops = true;
		inter_value = "";
		nopops = true;
      } 
    }
    // END GOOGLE LOGIC
    
	if ( document.cookie.indexOf ("dcSessionLimit=") != -1 && !(location.href.match('sid=')) )
    {
	 inter_value = "dcopt=ist;";
	}
    else if ( document.cookie.indexOf ("dcCount=") != -1 )
    {
      var startAt = document.cookie.indexOf( "dcCount=" ) + 8;
      var endAt = document.cookie.indexOf( ";", startAt );
      if ( endAt == -1 ) endAt = document.cookie.length;
      dcCount = parseInt ( document.cookie.substring ( startAt, endAt ) );
      if ( dcCount >= 5 && !(location.href.match('sid='))) inter_value = "dcopt=ist;";
    }
    if ( location.href.indexOf ( ".washingtonpost.com" ) == -1 )
    {
      inter_value = "";
    }
	if (document.location.search.indexOf("test_ads") != -1 && !(location.href.match('sid='))) inter_value="dcopt=ist;ad=pop;"
  }
  else
    inter_value="";
	
	(flexdisplay)?adSize = "":adSize = 'sz='+w+'x'+h+';';
	
	passArticle = (platform.toLowerCase().indexOf("article") != -1)?'article':'';
	page_a = (passArticle.indexOf("article") != -1)?'page=article;':'page=section;';
	
	if (passArticle != 'article' ) page_a = 'page=section;front=y;'
	//&& commercialNode.split("/").length == 1
	
	if (typeof v2 != 'undefined') {
	if ( typeof adTemplate != 'undefined' && (( adTemplate & BANNER_FLEX_TOP ) == BANNER_FLEX_TOP && ( adTemplate & BIG_FLEX_RIGHT ) == BIG_FLEX_RIGHT) ) _t = (tile == 1)?'t=y;':'';
	}
	
	//var keyvalues = adSiteZone+";"+static_wpatc+inter_value+adDir+kw+"pos="+pos+";"+adSize+f+";"+_cn+_tc+"="+tile+";ord="+adUniqueNumber ;
	
	dtile = (typeof dfpcomp == 'undefined')?'':"dfpcomp="+dfpcomp+";";


	var exempt = "";
	if (thisNode == 'nation' || thisNode.indexOf("nation/special") != -1) {
		exempt = "!category=supremecourt;";
	}
	
	var fedpage = new Array('opinion/columns/politics/feddiary','opinion/columns/politics/kamena','opinion/columns/politics/sarasohnj','opinion/columns/politics/lanec','opinion/columns/politics/offcamera','politics/congress')

	for (i=0; i<fedpage.length; i++) {
		if (thisNode == fedpage[i]) {
		exempt = 'dir=fedpage;'
		}
	}
	/* block on interstitials running after refresh lifted 9/22/06 10:20am TMM
	if(document.location.href.indexOf('reload=true') != -1){
      inter_value = "";
	}
	*/


// wpid TEST!
if(typeof(wpidTestCheck) == 'undefined'){
	var url = document.location.href;
	url = url.toLowerCase()
	var urlarray = url.split('/');
	var tail = urlarray[urlarray.length -1];
	if (tail.indexOf('nav=') != -1){
		tail = tail.substring(0,tail.indexOf('nav='));
	}
	var illegals = ['?test_ads','?debugadcode','wpidtest','?template_test','?','=','/','\\',':',';',',','*','(',')','&','$','%','@','!','^','+',' ','[',']','{','}','.html','.htm','.',];
	for (i=0;i<illegals.length;i++){
		sRE = new RegExp('(\\' + illegals[i] + ')', 'g');
		tail = tail.replace(sRE,"");
	}
	if (tail == 'index' || tail == ''){
		tail = urlarray[urlarray.length -2];
	}
	var nodedump = thisNode.split('/');
	var wpidnode = '';
	for (i=0;i < nodedump.length;i++){
		wpidnode += nodedump[i];
	}
	wpid = 'wpid='+wpidnode+'_'+tail;
	if (wpid.length > 55){
		wpid = wpid.substring(0,55);
	}
	if (url.indexOf('?wpidtest') != -1){
		prompt('wpid',wpid);
	
	}
	wpidTestCheck = 1;
	//small biz hack
	sba = new Array('jobs_inside-job','liveonlinespecialsjobs_di2006102000737','liveonlinejobsslayterm_talk_di2006100900744','liveonlinespecialsjobs_di2006102000740','liveonlinespecialsjobs_di2006102000739','liveonlinespecialsjobs_di2006102000738','opinioncolumnsbusinessslayterm_ar2006101400332','jobs_ar2006102001235','jobs_success-stories','liveonline_smallbusiness101','liveonline_di2005110101296','liveonlinespecialsjobs_di2006022700702','liveonline_di2005101100729','liveonline_di2005100500899','liveonline_di2005103101365','liveonline_di2005100501552','liveonline_di2005110101296','liveonlinejobsslayterm_talk_di2005111601352','liveonline_di2005102001378','technologywashtech_ar2005112000918','opinioncolumnsbusinessslayterm_ar2005102900440','jobscareernews_ar2005111101484','jobscareernews_ar2005101401501','jobscareernews_ar2005101401472','jobs_ar2005100501786','jobscareernews_ar2005101000794');
	var sbatest=wpidnode+'_'+tail;
	for(i in sba){
		if(sbatest == sba[i]){wpid+=';kw=smallbiz';}
	}
	//end small biz hack
}
//end wpid TEST!
grp = '';
if (location.href.indexOf('financial') != -1) {grp = "grp=financial;"}

if(location.href.match('no_interstitial'))
{
	inter_value=''
}

	if(commercialNode=='washingtonpost.com' && tile==20)
{	
	tile = 15;
	pos = 'ad15';
}

if(tile==99)
{
	config['adServerURL'] =  "http://ad.doubleclick.net/pfadx/wpni." + node + ";";
	config['additionalAdTargetingParams'] =  ";" + static_wpatc + inter_value +  heavy + grp + kw +  _rs + poe + ";";

	
	if(location.href.match('debugAdCode'))
	{
		var output = "config['adServerURL']:" + config['adServerURL'] + "\n\r";
		output += "config['additionalAdTargetingParams']:" + config['additionalAdTargetingParams'] + "\n\r";
		alert(output);
	}
  
}

	kw += 'ad=video;'	
}

	var keyvalues = adSiteZone + ";" + static_wpatc + inter_value + adDir + heavy + grp + kw + "pos=" +pos+ ";"+ dtile + adSize + f + ";" + _t + _rs + poe + page_a + _cn + _tc + "=" + tile + ";"+wpid+ ";"+exempt+"ord=" + adUniqueNumber ;



// adSiteZone = wpni.site (if article is first param them site has aritlce appended to it.
// static_wpatc = registration data
// inter_value = interstitial value;
// adDir = key values for the node
// pos = ad position #.
// adSize = size of ad;
// f = flex display value;
// _rs = revenue science values
// _cn = commercial node;
// _tc = tile category (tile v. ptile)
// adUniqueNumber = random number

	

  
  var adCode = "" ;
  adCode += ('<script language="JavaScript1.1" src="http://ad.doubleclick.net/adj/'+keyvalues+'">');
  adCode += ('</script>');

  if ( (typeof ceTag != 'undefined') && (ceTag) ) adCode = '';
  
  if (debugAdCode) {  adCode += debugTextArea(adCode); }
  
if(tile!=99)
{
  if (tile == 7 && thisNode == "artsandliving/cityguide")
  { 
  	document.write('<img src="http://media.washingtonpost.com/wp-srv/hp/img/ad_label_vertical_small.jpg" border="0" width="14" height="33">');
  }
	else if(tile == 7)
	//else if(tile == 7 || tile == 24) // Turn on ad label for tile 24 ('save and share box')
  {	
	document.write('<div style="padding-top:10px"><img src="http://media.washingtonpost.com/wp-srv/hp/img/ad_label_leftjust.gif" border="0" width="100" height="13" valign="top"></div>');
  }
	if (document.domain == 'washingtonpost.homescape.com' || document.domain == 'washingtonpost.homehunter.com')
	{
		if (typeof sponsor != 'undefined' && sponsor)
		{
			if (tile != 5) document.write(adCode);
		}
		else document.write(adCode);
	}
	else document.write(adCode.toString());
}

  firstTimeCalled = false ;
  
} // end if (show_doubleclick_ad)





function setPosition(tile)
{
  var p = "ad"+tile ;
  // document.write(p) ;
  if (tile == 4 || tile == 5 || tile == 6) var p = "ad6";
  return p ;
}

function setWidth(tile)
{
  var wi ;
  if ( tile >= 1 && tile <= 1) { wi = "728"; } // top leaderboard
  else if ( tile >= 2 && tile <= 2 ) { wi = "728"; } // bottom leaderboard
  else if ( tile >= 3 && tile <= 3 ) { wi = "160"; } // skyscraper left only
  else if ( tile >= 4 && tile <= 4 ) { wi = "160"; } // skyscraper only
  else if ( tile >= 5 && tile <= 5 ) { wi = "300"; } // big box and skyscraper
  else if ( tile >= 6 && tile <= 6 ) { wi = "336"; } // skyscraper, big box and half page
  else if ( tile >= 7 && tile <= 7 ) { wi = "446"; } // feature bar
  else if ( tile >= 8 && tile <= 8 ) { wi = "336"; } // travel tile
  else if ( tile >= 9 && tile <= 9 ) { wi = "479"; } // rss tile
  else if ( tile >= 10 && tile <= 10 ) { wi = "336"; } // travel tile right
  else if ( tile >= 11 && tile <= 11 ) { wi = "120"; } // 120x60 tile
  else if ( tile >= 12 && tile <= 12 ) { wi = "260"; } // 260X30 tile
  else if ( tile >= 13 && tile <= 13 ) { wi = "300"; } // 300x190 tile
  else if ( tile >= 14 && tile <= 14 ) { wi = "300"; } // 300x45 tile
  else if ( tile >= 15 && tile <= 15 ) { wi = "120"; } // 120x240 tile
  else if ( tile >= 16 && tile <= 16 ) { wi = "336"; } // 120x240 tile
  else if ( tile >= 17 && tile <= 17 ) { wi = "88"; } // 88x31
  else if ( tile >= 18 && tile <= 18 ) { wi = "180"; } // 180x20
  else if ( tile >= 19 && tile <= 19 ) { wi = "336"; } // 336x35
   else if ( tile == 20 ) { wi = "300"; } // big box 

  else if ( tile >= 22 && tile <= 22 ) { wi = "110"; } // 110x90 tile
  else if ( tile >= 23 && tile <= 23 ) { wi = "446"; } // 446x45 blog feature bar
    else if ( tile >= 24 && tile <= 24 ) { wi = "208"; } // 208x40
    //99 is for brightcove

/*TM 06/20/06 this hack recreates old tile 12 left sky for real estate area maps. if the url
contains areaId, which is the variable the RE maps use, then tile 12 is a sky*/
if (tile == 12 && location.href.indexOf('areaId') != -1) {wi="160"}

  // document.write(wi) ;
  return wi ;
}

function setHeight(tile)
{
  var he ;
  if ( tile >= 1 && tile <= 1) { he = "90"; } // top leaderboard
  else if ( tile >= 2 && tile <= 2 ) { he = "90"; } // bottom leaderboard
  else if ( tile >= 3 && tile <= 3 ) { he = "600"; } // skyscraper left only
  else if ( tile >= 4 && tile <= 4 ) { he = "600"; } // skyscraper only
  else if ( tile >= 5 && tile <= 5 ) { he = "250"; } // big box and skyscraper
  else if ( tile >= 6 && tile <= 6 ) { he = "850"; } // skyscraper, big box and half page
  else if ( tile >= 7 && tile <= 7 ) { he = "33"; } // feature bar
  else if ( tile >= 8 && tile <= 8 ) { he = "45"; } // travel tile
  else if ( tile >= 9 && tile <= 9 ) { he = "40"; } // rss tile
  else if ( tile >= 10 && tile <= 10 ) { he = "45"; } // travel tile right
  else if ( tile >= 11 && tile <= 11 ) { he = "60"; } // 120x60
  else if ( tile >= 12 && tile <= 12 ) { he = "30"; } // 260X30
  else if ( tile >= 13 && tile <= 13 ) { he = "190"; } // 300x190
  else if ( tile >= 14 && tile <= 14 ) { he = "45"; } // 300x45
  else if ( tile >= 15 && tile <= 15 ) { he = "240"; } // 120x240
  else if ( tile >= 16 && tile <= 16 ) { he = "850"; } // 120x240
  else if ( tile >= 17 && tile <= 17 ) { he = "31"; } // 88x31
  else if ( tile >= 18 && tile <= 18 ) { he = "20"; } // 180x20
  else if ( tile >= 19 && tile <= 19 ) { he = "35"; } // 336x35
   else if ( tile == 20 ) { he = "250"; } // big box 
  else if ( tile >= 22 && tile <= 22 ) { he = "90"; } // 110x90 tile
  else if ( tile >= 23 && tile <= 23 ) { he = "45"; } // 446x45 blog feature bar
      else if ( tile >= 24 && tile <= 24 ) { he = "40"; } // 208x40
	//99 is for brightcove
	
/*TM 06/20/06 see above*/
if (tile == 12 && location.href.indexOf('areaId') != -1) {he="600"}
  // document.write(he) ;
  
  return he ;
}

function setFlexvalue(tile) {
  var fv ;
  if ( tile >= 1 && tile <= 2) { fv = "ad=lb"; } // top leaderboard
  else if ( tile >= 2 && tile <= 2 ) { fv = "ad=lb"; } // bottom leaderboard
  else if ( tile >= 3 && tile <= 3 ) { fv = "ad=ss"; } // skyscraper left only
  else if ( tile >= 4 && tile <= 4 ) { fv = "ad=ss"; } // skyscraper only
  else if ( tile >= 5 && tile <= 5 ) { fv = "ad=ss;ad=bb"; } // big box and skyscraper
  else if ( tile >= 6 && tile <= 6 ) { fv = "ad=ss;ad=bb;ad=hp"; } // half page
  else if ( tile >= 7 && tile <= 7 ) { fv = "ad=fb"; } // feature bar
  else if ( tile >= 8 && tile <= 8 ) { fv = "ad=tt"; } // travel tile
  else if ( tile >= 9 && tile <= 9 ) { fv = "ad=rss"; } // rss tile
  else if ( tile >= 10 && tile <= 10) { fv = "ad=tt"; } // travel tile right
  else if ( tile >= 11 && tile <= 11) { fv = "ad=tl"; } // 120x60
  else if ( tile >= 12 && tile <= 12) { fv = "ad=260x30"; } // 260X30
  else if ( tile >= 13 && tile <= 13) { fv = "ad=re300"; } // 300x190
  else if ( tile >= 14 && tile <= 14) { fv = "ad=tif"; } // 300x45
  else if ( tile >= 15 && tile <= 15) { fv = "ad=vb"; } // 120x240
  else if ( tile >= 16 && tile <= 16) { fv = "ad=bb;ad=hp"; } // 120x240
  else if ( tile >= 17 && tile <= 17 ) { fv = "ad=88x31";} // 88x31
  else if ( tile >= 18 && tile <= 18 ) { fv = "ad=180x20"; } // 180x20
  else if ( tile >= 19 && tile <= 19 ) { fv = "ad=336x35";} // 336x35
  else if ( tile >= 20 && tile <= 20 ) { fv = "ad=bb";} // 336x35
  else if ( tile >= 22 && tile <= 22 ) { fv = "ad=110x90"; } // 110x90 tile
  else if ( tile >= 23 && tile <= 23) { fv = "ad=blog"; } // 446x45 blog feature bar
  else if ( tile >= 24 && tile <= 24) { fv = "ad=208x40"; } // 446x45 blog feature bar
  //99 is for brightcove

/*TM see above*/
if (tile >= 12 && tile <= 12 && location.href.indexOf('areaId') != -1) {fv="ad=ss120"}

return fv ;

}


function mkKeyword(myKeyword,myNode)
{
  if (myKeyword == "" )
  {
    if (myNode.indexOf("/") != -1 )
    {
      nodeAry = myNode.split("/") ;
      myKeyword = nodeAry[1] ;
	}
  }
  return myKeyword ;
}






function debugTextArea(ac)
{
  var re = new RegExp("\"","g") ;
  ac = ac.replace(re,"\\\"") ;
  return '<form><textarea wrap=physical cols=\"+55+\" rows=\"+10+\">'+ac+'</textarea></form>';
}

function getWPATCookie()
{
  if (document.cookie.indexOf("WPATC") != -1)
  {
    var start = (document.cookie.indexOf("WPATC") + 6);
    var end = (document.cookie.indexOf(";",start)) == -1 ? document.cookie.length : document.cookie.indexOf(";",start);
    var cookie = document.cookie.substring(start,end) + ";";
    while (cookie.indexOf(":") != -1)
      cookie = cookie.substring(0,cookie.indexOf(":"))+";"+cookie.substring(cookie.indexOf(":")+1,cookie.length);
    if (cookie.lastIndexOf(";") != cookie.length - 1) cookie += ';';
    if (cookie.indexOf("=") == 0) cookie = cookie.substring(cookie.indexOf(";")+1,cookie.length);
  }
  else var cookie = "" ;
  return cookie ;
}



//Revenue Science Values
/*
function (name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}*/

var crumbs = (getCookie("DMSEG"))?"".concat(getCookie("DMSEG")).split("&"):"";
var segments = (crumbs[5])?crumbs[5]:"";
var seg = (segments)?segments.split(","):"";


// mimic revenue science value for rss users
// check to see if url has "rss" and set up a value
// that AMs can target to
// added 6/28/05 sja
function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function createTime() {
var cDate = new Date();
var cMil = cDate.getTime();
var e = cMil % (1000 * 60 * 60 * 24);
var r = (1000 * 60 * 60 * 24) - e;
var nr = 28 * 24 * 60 * 60 * 1000;
return(nr);
}

var wpniPOE = new Date();
var interval = 0;

var wpniWeek = wpniPOE.getTime() + createTime();
wpniPOE.setTime(wpniWeek);

if (urlLoc.indexOf('nav=rss') != -1)
{_rs+="fromrss=y;";
setCookie('rss_now','true',''+wpniPOE.toString()+'','/','.washingtonpost.com','');
setCookie('rss','true',''+wpniPOE.toString()+'','/','.washingtonpost.com','');
}
else
{_rs+="fromrss=n;";
setCookie('rss_now','false',''+wpniPOE.toString()+'','/','.washingtonpost.com','');
}

if (getCookie("rss") == 'true') {_rs += 'rss=y;'}
else _rs += 'rss=n;';

	

var poe = 'poe=no;';
if (getCookie("wp_poe") == null || getCookie("wp_poe") == "false") {
poe = 'poe=yes;';
setCookie("wp_poe","true","","/",".washingtonpost.com",'')
}

if (getCookie("wp_poe") == null && !(urlLoc.match("washingtonpost.com")))
{
	poe = 'poe=no;';
}

// end rss code
/**
 * crk added 17 July 2002
 * methods for 5 parameter placeAd call
 * placeAd(platform,node,tile,kw,assertive)
 **/

  // get ancestor from node
  function getAdAncestor(node)
  {
	var end = node.indexOf("/") ;
	if ( end == -1 )
	  return node ;
    else
	{
	  var adAncestor = node.substring(0,end) ;	
      return adAncestor ;
	}
  }

  // get adSite
  function getAdSite(ancestor)
  {
    if ( isNewsAncestor(ancestor) )
      return "wpni.news" ;
    else
      return "wpni."+ancestor ;
  }
  
  // get ad node
  function getAdNode(node,ancestor)
  {
    if ( isNewsAncestor(ancestor) )
	  return node ;
	else
	{
	  var start = node.indexOf("/")+1 ;
	  if (start)
        return node.substring(start) ;
	  else
	    return "" ;
	}
  }

  // get ad node
  function getAdZone(node)
  {
    var ary = new Array() ;
	if ( node.indexOf("/") != -1 )
	  ary = node.split("/") ;
	else
	  ary[0] = node ;

	if ( ary.length <= 2 )
	  return node ;
	else
	{
	  var zone = '' ;
	  for(var i=0; i<2; i++)
	  {
	    zone += ary[i] ;
		if (i==0) zone += "/" ;
	  }
	  return zone ;
	}
  }
  
  function getAdDir(node)
  {
    var page = "" ;
    var ary = new Array() ;
	if ( node.indexOf("/") != -1 )
	  ary = node.split("/") ;
	else
	  ary[0] = node ;

	var dir = '' ;
	for(var i=0; i<ary.length; i++)
	{
	  // parse out article string if present in ancestor
	  if ( i == 0 &&
	       ary[i].indexOf("article") != -1 &&
		   ary[i].indexOf("article") == ary[i].length - "article".length &&
		   ary[i] != "article" )
	  {
	    ary[i] = ary[i].substring(0,ary[i].indexOf("article")) ;
		page = "page=article;" ;
	  }
	  dir += "dir="+ary[i]+";" ;
	}
	return "dir="+ary[ary.length-1]+"node;"+dir+page ;
  }

  // check if adSite should be wpni.news
  function isNewsAncestor(ancestor)
  {
    if ( newsAncestorAsString != null &&
	     newsAncestorAsString != ""   &&
		 newsAncestorAsString.indexOf(","+ancestor+",") != -1
	   )
      return true  ;
    else
	  return false ;
  }
  
  function cleanNode(node)
  {
	if ( node.charAt(node.length-1) == "/" )
	  return node.substring(0,node.length-1) ;
	else
	  return node ;
  }