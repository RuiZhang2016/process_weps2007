// Created by schang
// Modified by $Author: dwu $
// Last Modified: $DateTime: 2006/11/07 15:00:01 $
// version $Revision: #16 $

/**
*************************************
JavaScript functions musicstore.connect.com web site
Created by Stephanie Chang
Last modified: 2006-05-01
*************************************
**/

//function runTests()     ->    MAIN function. Any validation that is required to be in every page should be made in this function

//*************************************************************************************//
// DREAMWEAVER FUNCTIONS
//*************************************************************************************//
// function MM_swapImgRestore()
// function MM_preloadImages()
// function MM_findObj(n, d)
// function MM_swapImage()
// function MM_openBrWindow(theURL,winName,features)

//*************************************************************************************//
// ATOMZ FUNCTIONS
//*************************************************************************************//
// function artistSearch()                                              -> Forward to artist search with current query.
// function albumSearch()                                               -> Forward to album search with current query.
// function trackSearch()                                               -> Forward to track search with current query.
// function labelSearch()                                               -> Forward to label search with current query.
// function labelHome()                                                 -> Forward to label home with given label name.
// function trimQuery()                                                 -> Trims the value of the SP-Q atomz search param from trailing spaces.
// function setFormParams()                                             -> Sets the search parameters to be passed to atomz for search results (relevance, sort order, etc.)
// function submitAtomzSearch()                                         -> Sets buynow parameter to '1' if user specified express checkout preference, then submits search query.
// function alphaSearch(param, value, field, param_field, url_list)     -> Invokes a search by letter.
// function alphaMenu(param, list, field, param_field, url_list)        -> Prints the alpha menu in the genre pages. This menu allows the user to browse artists by the first letter of their names.
// function handleCookieFields()                                        -> sets the search parameters to be passed to atomz for button display
// function searchParams()                                          -> Generates all the necessary fields for the atomZ search

//*************************************************************************************//
// COOKIE FUNCTIONS
//*************************************************************************************//
// function readCookie (CookieName)                                                         -> Reads the document cookies
// function isInSubscription(subIDs, stateVals)                                           -> Checks the cookie to determine if the user has a subscription or not.
// function getAuthedValue()                                                                     -> Gets the value of the "Authed" cookie
// function getIdentifiedValue()                                                                -> Gets the value of the "Identified" cookie
// function getUserStateValues()                                                               -> Splits and returns the "UserStateCookie" cookie's values in an array
// function isItInCookie(prodId)                                                                -> Checks if a product is already in the shopping cart cookie
// function cookieHasValue(cookieName,prodID)                                    -> Checks a cookie to see if it contains a certain value
// function setCookie(name, value, expires, path, domain, secure)         -> Sets the attributes in the specified cookie
// function getLastCookie()                                                                          -> Gets the last cookie created with the prefix itemsInCart (There might be serveral of these cookies)
// function itemsInCartCookie()                                                                       -> Returns the number of items inside the cart cookie that's passed as a parameter

//*************************************************************************************//
// NAVBAR FUNCTIONS
//*************************************************************************************//
// function initGenreList()                                                                          -> Initializes the array that contains the genre pages names and URLs.
// function getLogName()                                                                            -> Gets the text for the login postion  according to the user state
// function getRegOrAccountName()                                                         -> Gets the text for the register postion  according to the user state
// function getLogUrl()                                                                                -> Gets the URL for the login link  according to the user state
// function getRegOrAccountUrl()                                                             -> Gets the URL for the register link  according to the user state
// function getViewCartName()                                                                  -> Gets the text for the View cart link according to user state
// function getViewCartUrl()                                                                       -> Redirects the page to the View Cart flow
// function IESignup()                                                                                -> Redirects the page to the IESignup flow.
// function IESignupName()                                                                      -> Writes the text for the download of the connect player
// function getRadioName()                                                                       -> Writes the text for the Radio link
// function getRadioUrl()                                                                           -> Redirects the page to the Radio page
// function getExclusivesName()                                                              -> Writes the text for the Exclusives link
// function getExclusivesUrl()                                                                  -> Redirects the page to the Exclusives page
// function getGearName()                                                                       -> Writes the text for the Gear link
// function getGearUrl()                                                                           -> Redirects the page to the Gear page
// function getTipsTricksName()                                                              -> Writes the text for the Tips and Tricks link
// function getTipsTricksUrl()                                                                  -> Redirects the page to the Tips and Tricks page
// function getMusicDealsName()                                                            -> Writes the text for the Radio link
// function getMusicDealsUrl()                                                                -> Redirects the page to the Deals page
// function getGiftCardName()                                                                -> Writes the text for the Gift Card link
// function getGiftCertName()                                                                -> Writes the text for the Gift Certificates link
// function buyGiftCert()                                                                         -> Redirects the page to the gift certificate flow according to the client used.
// function getTourUrl()                                                                            -> Redirects the page to the Tour page
// function getHelp()                                                                                  -> Redirects the page to the Help page
// function getHelpName()                                                                        -> Writes the text for the Gift Certificates link
// function startRadio(url)                                                                        -> Starts the radio URL
// function jump_site()                                                                              -> Redirects the page to the value selected in the searchForm.dropdown box.
// function loadBrowseGenreList()                                                          -> Writes the dropdown box with the links to all the genre pages.

//*************************************************************************************//
// UTIL FUNCTIONS
//*************************************************************************************//
// function function addEvent(obj, evType, fn, opt_flag)                 -> Registers an event to its corresponding event listener.
// function albumLink(albumID)                                                            -> Formats proper album id to generate album page url
// function artistLink(artistID)                                                             -> Formats proper artist id to generate artist page url
// function genreLink(genreName)                                                       -> Formats proper genre name to generate genre page url
// function checkEnter(form)                                                                -> Checks if the enter key has been pressed
// function onConnectClose()                                                                 -> Executes whenever the client or browser window is closed (the window.unonload event is mapped to this function).
// function mouseDown(e)                                                                      -> Blocks the Shift-click mouse event.
// function mouseDownVersion()                                                           -> Sets the mouse down event handler depeding on the version of the browser
// function  parameterizeLink(link, queryString)                                -> Adds new parameters to an existing link; replaces getSelectedProductID(url, TrackID)
// function playPreview(previewUrl, axUrlPrefix)                             -> Starts the streaming of a preview clip.
// function PopupMessages()                                                                 -> Object that stores popup messages
// function PopupMessage(name)                                                          -> Finds and displays a popup message
// function strTrim(str)                                                                          -> Trims any white spaces immediately preceding and following the string argument
// function getParameterValue(key)                                               -> Gets a value of the specified parameter from the URL
// function splitUriQuery(uri)                              -> Split the uri from the question mark into an array - uriPrefix and uriQuery
// function setQueryParamValue(qry, key, value)             -> Sets a value of the specified parameter to the given query. The query is the http query after the question mark.
// function getXmlHttpRequest()                                                           -> Returns an  xmlHttpRequest object depending on the type of broswer detected
// function writeYearDropDown(name, selectedYear, backOrForward, span)   ->  Prints a dropdown box with a list of years
// function writeMonthDropDown(name, selectedMonth, mode)        -> Prints a dropdown with a list of months
// function writeDayDropDown(name, selectedDay)                           -> Prints a dropdown with a list of days
// function checkAll                                                                                -> Marks as checked all the instances of the field it receives as a parameter
// function uncheckAll                                                                            -> Unchecks all the instances of the field it receives as a parameter
// function countCheckedItems(checkboxElement)                               -> Counts the number of checked boxes for the given checkbox element
// function showElement(param)                                                                            -> Sets the element passed as a parameter to visible

var endSessUrl = null;
var isMember = false;
var oneYearExpDate = new Date ();
oneYearExpDate.setTime(oneYearExpDate.getTime() + (365 * 24 * 3600 * 1000));

// convert all characters to lowercase to simplify testing
var agt=navigator.userAgent.toLowerCase();

// *** BROWSER VERSION ***
// Note: On IE5, these return 4, so use is_ie5up to detect IE5.
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);

// Note: Opera and WebTV spoof Navigator.  We do strict client detection.
// If you want to allow spoofing, take out the tests for opera and webtv.
var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
            && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
            && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
var is_nav2 = (is_nav && (is_major == 2));
var is_nav3 = (is_nav && (is_major == 3));
var is_nav4 = (is_nav && (is_major == 4));
var is_nav4up = (is_nav && (is_major >= 4));
var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
                      (agt.indexOf("; nav") != -1)) );
var is_nav6 = (is_nav && (is_major == 5));
var is_nav6up = (is_nav && (is_major >= 5));
var is_gecko = (agt.indexOf('gecko') != -1);
var is_ff    = (agt.indexOf('firefox') != -1);

var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie3    = (is_ie && (is_major < 4));
var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
var is_ie4up  = (is_ie && (is_major >= 4));
var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
var is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
var is_ie6    = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
var is_ie6up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);
var is_ie7    = (is_ie && (is_major == 4) && (agt.indexOf("msie 7.")!=-1) );

// KNOWN BUG: On AOL4, returns false if IE3 is embedded browser
// or if this is the first browser window opened.  Thus the
// variables is_aol, is_aol3, and is_aol4 aren't 100% reliable.
var is_aol   = (agt.indexOf("aol") != -1);
var is_aol3  = (is_aol && is_ie3);
var is_aol4  = (is_aol && is_ie4);
var is_aol5  = (agt.indexOf("aol 5") != -1);
var is_aol6  = (agt.indexOf("aol 6") != -1);

// *** PLATFORM ***
var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
// NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
//        Win32, so you can't distinguish between Win95 and WinNT.
var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

// is this a 16 bit compiled version?
// For UserAgent strings see http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/overview/aboutuseragent.asp
var is_win16 = ((agt.indexOf("win16")!=-1) ||
           (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) ||
           (agt.indexOf("windows 16-bit")!=-1) );

var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
                (agt.indexOf("windows 16-bit")!=-1));

var is_winme = ((agt.indexOf("win 9x 4.90")!=-1));
var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1));
var is_winxp = ((agt.indexOf("windows nt 5.1")!=-1));
// XP64 bit does show up as windows nt 5.2 not 5.1
var is_winxp64 = ((agt.indexOf("windows nt 5.2")!=-1));
var is_vista = ((agt.indexOf("windows nt 6.0")!=-1));
// NOTE: Reliable detection of Win98 may not be possible. It appears that:
//       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
//       - On Mercury client, the 32-bit version will return "Win98", but
//         the 16-bit version running on Win98 will still return "Win95".
var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
var is_win32 = (is_win95 || is_winnt || is_win98 ||
                ((is_major >= 4) && (navigator.platform == "Win32")) ||
                (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

var is_mac    = (agt.indexOf("mac")!=-1);

var isConnectPlayer = false;
var NS4 = (document.layers) ? true : false;

//Commerce vars
var oneYearExpDate = new Date ();
oneYearExpDate.setTime(oneYearExpDate.getTime() + (365 * 24 * 3600 * 1000));


var prefix = 'ItemsInCart';
var cookieLife = 60000;
var spacer = '~';
var counter = 0;
var defSubs = new Array();
var subs = new Array();
var unsubs = new Array();
var form = 'cuneiform'; //Give the form name here
var preloadFlag = false;

//POD vars
var xmlHttpRequest;

// START initializing Omniture variables
var s_pageName="";
var s_server="";
var s_channel="";
var s_pageType="";
var s_prop1="";
var s_prop2="";
var s_prop3="";
var s_prop4="";
var s_prop5="";
var s_prop6="";
var s_prop7="";
var s_prop8="";
var s_prop9="";

// version tracking
var s_prop10="";
var s_campaign="";
var s_state="";
var s_zip="";
var s_events="";
var s_products="";
var s_purchaseID="";
var s_eVar1="";
var s_eVar2="";
var s_eVar3="";
var s_eVar4="";
var s_eVar5="";
var s_eVar6="";
var s_eVar7="";

// radio name and title track
var s_eVar8="";
var s_eVar9="";
var s_eVar10="";
// END initializing Omniture variables

/** POD 111005 **/
// SC 081705
// If var isSonicStage has not yet been initialized in mb_global.js by a pod xsl,
// initialize  for runTests() check on the following commerce pages:
// * /commerce/couponverified_en.xsl
// * /commerce/verifycoupon_en.xsl
if (isConnectPlayer == null) {
    var isConnectPlayer = false;
}

//Global variables for flash that will be set in checkFlashVersion()
var flashinstalled = 0;
var flashversion = 0;

/**
 * rporras 060606  All the functions here are invoked when this file is included. Only calls to
 * functions that must run for every single page should be placed here
**/
/**************************************Default load invokations BEGIN********************************/
//This functions run when the page is fully loaded (Don't forget to use addEvent to register them).
  //This function resizes all columns in the page to make their heights match(matching_columns.js)
  addEvent(window, 'load', matchColumns, false);
/**************************************Default load invokations END**********************************/


/**
 * Runs validations for OS, client, browser and sets the correct cookie depending on that
 * Handles omniture c/b tracking (s_prop10), checks for ie 7 (do not currently support), and
 * added parameter to intercept circular loop if user is not using a br. or os we support
 * NOTE  Cookies might not need to be set here anymore.
 * modified by: schang
 * edited:  072706, added 
 */
function runTests() {
  // 'checkBos' prevents checking os and br. version a second time
  if (getParameterValue('checkBos') != 'false') {
    if(is_winme || is_win2k || is_win98 || is_winxp || is_winxp64 || is_vista) {
      //alert("right os");
    } else {
      self.location.replace("/custom/promos/non_os.html?checkBos=false");
    }
    if(!is_ie6up) {
      self.location.replace("/custom/promos/non_ie.html?checkBos=false");
    }
    //Check the version of flash this will set the global flashinstalled and flashversion variables
    checkFlashVersion();
    //If flash is installed and version is less than 7 take the user to non_flash.html page
    if((flashinstalled == 2) && (flashversion < 7)) {
      self.location.replace("/custom/promos/non_flash.html?checkBos=false");
    }
  }

  //if we find a programId redirect set it in the commerce app
  if(getParameterValue('programId')){
    tmpCid = "cid=" + getParameterValue('cid');
    window.location = g_appServerUrl +'AffiliateTracking.flow?programId=' + getParameterValue('programId') + '&base=' + window.location.protocol + '//' + window.location.hostname + window.location.pathname + '&' + tmpCid;
  }

  // do the same thing for siteID
  if(getParameterValue('siteID')){
    tmpCid = "&cid=" + getParameterValue('cid');
    window.location = g_appServerUrl +'AffiliateTracking.flow?siteID=' + getParameterValue('siteID') + '&base=' + window.location.protocol + '//' + window.location.hostname + window.location.pathname + tmpCid;
  }

  SSOverride = getParameterValue('noCheck');
  isMember = readCookie('memberCheck');
  try {
    var appInfo = window.external.GetSystemInfo("APP_VERSION").split(",");
    if (appInfo[0] == "SonicStage") {
      // omniture cl. tracking
      s_prop10 = getBVers() + ': ' + appInfo;
      isConnectPlayer = true;
      setCookie('ssVersion',appInfo[1],oneYearExpDate, '/', g_cookieDomain,false);
      var versionNum = appInfo[1].split(".");
      if (Number(versionNum[0]) == 1 && Number(versionNum[1]) < 1 && Number(versionNum[2]) < 1) {
        //if (Number(versionNum[1]) < 1) {
        self.location.replace("/upgrade.html");
      } else
        if (Number(versionNum[0]) == 2 && Number(versionNum[1]) < 2) {
          if(!readCookie('11ENotification')) {
            setCookie('11ENotification','true',null, '/', g_cookieDomain,false);
            MM_openBrWindow(g_notificationsDir + '11ENotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
          }
        }
        return;
      }
  } catch(e) {
    if(!SSOverride && !gQaModeEnabled) {
      isConnectPlayer = false;
      // omniture br. tracking
      s_prop10 = getBVers();
    } else {
      isConnectPlayer = true;
    }
  }
}

/**
 * Omniture br. ver. checking
 * created: schang
 * modified:  072706
 **/
function getBVers() {
  if (is_ie) return "IE " + agt.substr((agt.indexOf("msie") + 5), 3);
  if (is_ff) return "Firefox " + agt.substr((agt.indexOf("firefox/") + 8), 5);
  if (is_navonly) return "Nav " + agt.substr((agt.indexOf("nav") + 4), 5);
  if (is_aol) return "AOL " + agt.substr((agt.indexOf("aol") + 4), 5);
}


function checkFlashVersion() {
  //Flash detection adapted from http://www.quirksmode.org/js/flash.html
  MSDetect = "false";
  if (navigator.plugins && navigator.plugins.length) {
    x = navigator.plugins["Shockwave Flash"];
    if (x) {
      flashinstalled = 2;
      if (x.description) {
        y = x.description;
        flashversion = y.charAt(y.indexOf('.')-1);
      }
    }
    else {
      flashinstalled = 1;
    }
    if (navigator.plugins["Shockwave Flash 2.0"])	{
      flashinstalled = 2;
      flashversion = 2;
    }
  } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    x = navigator.mimeTypes['application/x-shockwave-flash'];
    if (x && x.enabledPlugin) {
      flashinstalled = 2;
    } else {
      flashinstalled = 1;
    }
  } else {
    MSDetect = "true";
  }
  if (MSDetect == "true") {
    flashversion = 0;
    for(var i=6; i< 10; i++){
      try{
        //alert("Trying to create " + "ShockwaveFlash.ShockwaveFlash." + i);
        var flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
        flashinstalled = 2;
        flashversion = i;
      }
      catch(e){
        //alert("Could not create " + "ShockwaveFlash.ShockwaveFlash." + i);
      }
    }        
    if (flashinstalled == 0) {
      flashinstalled = 1;
    }
  }    
  //alert("Flash installed: " + flashinstalled + " Version " + flashversion);
}
/**
 * rporras 011706  These are legacy functions from Dreamweaver. They are all used to swap images
 * and popUpWindows. There are propietary functions that to the same. Those should be used instead
**/
/**************************************Functions related to dreamweaver BEGIN********************************/
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr;
  for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)
    x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
  if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
  d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments;
  document.MM_sr=new Array;

  for(i=0;i<(a.length-2);i+=3)
    if ((x=MM_findObj(a[i]))!=null){
      document.MM_sr[j++]=x;
      if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];
    }
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
/***********************************functions related to dreamweaver END***********************************/
/******************************************Functions related to atomZ BEGIN*******************************/
/**
 * (AtomZ) perform search for Artists
 */
function artistSearch() {
    var currUrl = document.URL.toString();
    var uriParts = splitUriQuery(currUrl);
    var uriPrefix = uriParts[0];
    var uriQuery  = uriParts[1];
    
    var sp_q = getParameterValue('sp-q', uriQuery);
    if(!sp_q) {
        sp_q = getParameterValue('sp_q', uriQuery);
    }
    if(sp_q) {
      var escaped_q = escape(sp_q);
      var compressed_q = sp_q.replace(/[^A-Za-z0-9]/g, '');
      //alert("Compressed q is " + compressed_q);
        var newTarget = g_searchUrl
            + '?sp-a=' + g_atomzArtists 
            + "&sp-q=" + escaped_q
            + "&sp-p=phrase" 
            + "&sp-c=50&sp-s=0&sp-f=UTF-8&sp-w=exact&sp-x=artist&sp-t=artists&sp-sfvl-field=initial"
            + "&sp-x-3=artist_c&sp-q-3=" + compressed_q
            + "&sp-p-4=all&sp-x-4=artist_a&sp-q-4=" + escaped_q
            + "&sp-p-5=any&sp-x-5=artist_r&sp-q-5=" + escaped_q
            + "&sp-q-required=0&sp-q-required-3=0&sp-q-required-4=0"
        ;
        //alert(newTarget);
        window.location = newTarget;
    } 
}

/**
 * (AtomZ) perform search for Albums
 */
function albumSearch() {
    var currUrl = document.URL.toString();
    var uriParts = splitUriQuery(currUrl);
    var uriPrefix = uriParts[0];
    var uriQuery  = uriParts[1];
    
    var sp_q = getParameterValue('sp-q', uriQuery);
    if(!sp_q) {
        sp_q = getParameterValue('sp_q', uriQuery);
    }
    if(sp_q) {
        var escaped_q = escape(sp_q);
        var compressed_q = sp_q.replace(/[^A-Za-z0-9]/g, '');    
        var now=new Date();
        var day=now.getDate();
        var month=now.getMonth() + 1;
        var year=now.getFullYear();
    
        var newTarget = g_searchUrl
            + '?sp-a=' + g_atomzAlbums 
            + "&sp-q=" + escaped_q
            + "&sp-p=phrase"
            + "&sp-c=50&sp-s=0&sp-f=UTF-8&sp-w=exact&sp-x=album|artist&sp-t=albums&sp-sfvl-field=initial"
            + "&sp-d-1=specific&sp-d-2=specific&sp-x-1=searchstartdate&sp-x-2=searchenddate"
            + "&sp-q-max-day-1=" + day
            + "&sp-q-max-month-1=" + month
            + "&sp-q-max-year-1=" + year
            + "&sp-q-min-day-2=" + day
            + "&sp-q-min-month-2=" + month
            + "&sp-q-min-year-2=" + year
            + "&sp-x-3=album_c&sp-q-3=" + compressed_q
            + "&sp-p-4=all&sp-x-4=album_a&sp-q-4=" + escaped_q
            + "&sp-p-5=any&sp-x-5=album_r&sp-q-5=" + escaped_q
            + "&sp-q-required=0&sp-q-required-3=0&sp-q-required-4=0"            
        ;
//        alert(newTarget);
        window.location = newTarget;
    } 
}

/**
 * (AtomZ) perform search for Tracks
 */
function trackSearch() {
    var currUrl = document.URL.toString();
    var uriParts = splitUriQuery(currUrl);
    var uriPrefix = uriParts[0];
    var uriQuery  = uriParts[1];
    
    var sp_q = getParameterValue('sp-q', uriQuery);
    if(!sp_q) {
        sp_q = getParameterValue('sp_q', uriQuery);
    }
    if(sp_q) {
        var escaped_q = escape(sp_q);
        var compressed_q = sp_q.replace(/[^A-Za-z0-9]/g, '');
        var now=new Date();
        var day=now.getDate();
        var month=now.getMonth() + 1;
        var year=now.getFullYear();
    
        var newTarget = g_searchUrl
            + '?sp-a=' + g_atomzSearch 
            + "&sp-q=" + escaped_q
            + "&sp-p=phrase"
            + "&sp-c=50&sp-s=0&sp-f=UTF-8&sp-w=exact&sp-x=track|album|artist&sp-t=search&sp-sfvl-field=initial"
            + "&sp-d-1=specific&sp-d-2=specific&sp-x-1=searchstartdate&sp-x-2=searchenddate"
            + "&sp-q-max-day-1=" + day
            + "&sp-q-max-month-1=" + month
            + "&sp-q-max-year-1=" + year
            + "&sp-q-min-day-2=" + day
            + "&sp-q-min-month-2=" + month
            + "&sp-q-min-year-2=" + year
            + "&sp-x-3=track_c&sp-q-3=" + compressed_q
            + "&sp-p-4=all&sp-x-4=track_a&sp-q-4=" + escaped_q
            + "&sp-p-5=any&sp-x-5=track_r&sp-q-5=" + escaped_q
            + "&sp-q-required=0&sp-q-required-3=0&sp-q-required-4=0"
        ;
//        alert(newTarget);
        window.location = newTarget;
    } 
}

/**
 * (AtomZ) perform search for Labels
 */
function labelSearch() {
    var currUrl = document.URL.toString();
    var uriParts = splitUriQuery(currUrl);
    var uriPrefix = uriParts[0];
    var uriQuery  = uriParts[1];
    
    var sp_q = getParameterValue('sp-q', uriQuery);
    if(!sp_q) {
        sp_q = getParameterValue('sp_q', uriQuery);
    }
    if(sp_q) {
        var escaped_q = escape(sp_q);
        var compressed_q = sp_q.replace(/[^A-Za-z0-9]/g, '');
        var newTarget = g_searchUrl
            + '?sp-a=' + g_atomzLabels 
            + "&sp-q=" + escaped_q
            + "&sp-p=phrase"
            + "&sp-c=50&sp-s=0&sp-f=UTF-8&sp-w=exact&sp-x=label&sp-t=labels&sp-sfvl-field=initial"
            + "&sp-x-3=label_c&sp-q-3=" + compressed_q
            + "&sp-p-4=all&sp-x-4=label_a&sp-q-4=" + escaped_q
            + "&sp-p-5=any&sp-x-5=label_r&sp-q-5=" + escaped_q      
            + "&sp-q-required=0&sp-q-required-3=0&sp-q-required-4=0"
        ;
//        alert(newTarget);
        window.location = newTarget;
    } 
}

/**
 * (AtomZ) Forward to label home with given label name
 */
function labelHome(labelName) {
    var newTarget = g_catSearchUrl
        + '?sp-a=' + g_atomzLabels
        + '&sp-q-exact=' + escape(labelName)
        + '&sp-t=label_home&sp-sfvl-field=initial&sp-x=label&sp-p=phrase';
    
    window.location = newTarget;
}
/**
 * (AtomZ) Trims the value of the SP-Q atomz search param from trailing spaces.
 */
function trimQuery() {
    alert("Deprecated: The actual functionality is inside submitAtomzSearch(), trimQuery() should not be called");
}

/**
 * (AtomZ) Sets the search parameters to be passed to atomz for search results (relevance, sort order, etc.)
 * NOTE  schang 101205 Called by:  navbar_en.xsl, coppa_en.xsl, IECoppa_en.xsl
 */
function setFormParams() {
var d = document.searchForm;

var noncat = g_searchUrl;
var cat = g_catSearchUrl;

var t = d.elements['sp-t'].value;
//alert('sp-t is ' + t);


var sp_q = d.elements['sp-q'].value;
sp_q = strTrim(sp_q);
var escaped_q = sp_q //sp_q is already escaped so no need to escape(sp_q);
var compressed_q = sp_q.replace(/[^A-Za-z0-9]/g, '');

var now=new Date();
var day=now.getDate();
var month=now.getMonth() + 1;
var year=now.getFullYear();

if (t=="search") {
    d.action = noncat;
    d.elements['sp-a'].value = g_atomzSearch;
    d.elements['sp-x'].value = "track|album|artist";
    d.elements['sp-sfvl-field'].value = "initial";
    d.elements['sp-d-1'].value = "specific";
    d.elements['sp-d-2'].value = "specific";
    d.elements['sp-x-1'].value = "searchstartdate";
    d.elements['sp-x-2'].value = "searchenddate";
    d.elements['sp-q-max-day-1'].value=day;
    d.elements['sp-q-max-month-1'].value=month;
    d.elements['sp-q-max-year-1'].value=year;
    d.elements['sp-q-min-day-2'].value=day;
    d.elements['sp-q-min-month-2'].value=month;
    d.elements['sp-q-min-year-2'].value=year;
    d.elements['sp-x-3'].value="track_c";
    d.elements['sp-q-3'].value=compressed_q;
    d.elements['sp-x-4'].value="track_a";
    d.elements['sp-q-4'].value=escaped_q;
    d.elements['sp-x-5'].value="track_r";
    d.elements['sp-q-5'].value=escaped_q;
   }
else if (t=="search_all") {
    d.action = cat;
    d.elements['sp-a'].value = g_atomzSearchAll;
    d.elements['sp-x'].value = "";
    d.elements['sp-sfvl-field'].value = "";
    d.elements['sp-d-1'].value = "specific";
    d.elements['sp-d-2'].value = "specific";
    d.elements['sp-x-1'].value = "searchstartdate";
    d.elements['sp-x-2'].value = "searchenddate";
    d.elements['sp-q-max-day-1'].value=day;
    d.elements['sp-q-max-month-1'].value=month;
    d.elements['sp-q-max-year-1'].value=year;
    d.elements['sp-q-min-day-2'].value=day;
    d.elements['sp-q-min-month-2'].value=month;
    d.elements['sp-q-min-year-2'].value=year;
    d.elements['sp-x-3'].value="";
    d.elements['sp-q-3'].value=compressed_q;
    d.elements['sp-x-4'].value="";
    d.elements['sp-q-4'].value=escaped_q;
    d.elements['sp-x-5'].value="";
    d.elements['sp-q-5'].value=escaped_q;
   }
else if (t=="labels") {
    d.action = noncat;
    d.elements['sp-a'].value = g_atomzLabels;
    d.elements['sp-x'].value = "label";
    d.elements['sp-sfvl-field'].value = "initial";
    d.elements['sp-d-1'].value = "";
    d.elements['sp-d-2'].value = "";
    d.elements['sp-x-1'].value = "";
    d.elements['sp-x-2'].value = "";
    d.elements['sp-q-max-day-1'].value= "";
    d.elements['sp-q-max-month-1'].value= "";
    d.elements['sp-q-max-year-1'].value= "";
    d.elements['sp-q-min-day-2'].value= "";
    d.elements['sp-q-min-month-2'].value= "";
    d.elements['sp-q-min-year-2'].value= "";
    d.elements['sp-x-3'].value="label_c";
    d.elements['sp-q-3'].value=compressed_q;
    d.elements['sp-x-4'].value="label_a";
    d.elements['sp-q-4'].value=escaped_q;
    d.elements['sp-x-5'].value="label_r";
    d.elements['sp-q-5'].value=escaped_q;
   }
else if (t=="albums") {
    d.action = noncat;
    d.elements['sp-a'].value = g_atomzAlbums;
    d.elements['sp-x'].value = "album|artist";
    d.elements['sp-sfvl-field'].value = "initial";
    d.elements['sp-d-1'].value = "specific";
    d.elements['sp-d-2'].value = "specific";
    d.elements['sp-x-1'].value = "searchstartdate";
    d.elements['sp-x-2'].value = "searchenddate";
    d.elements['sp-q-max-day-1'].value=day;
    d.elements['sp-q-max-month-1'].value=month;
    d.elements['sp-q-max-year-1'].value=year;
    d.elements['sp-q-min-day-2'].value=day;
    d.elements['sp-q-min-month-2'].value=month;
    d.elements['sp-q-min-year-2'].value=year;
    d.elements['sp-x-3'].value="album_c";
    d.elements['sp-q-3'].value=compressed_q;
    d.elements['sp-x-4'].value="album_a";
    d.elements['sp-q-4'].value=escaped_q;
    d.elements['sp-x-5'].value="album_r";
    d.elements['sp-q-5'].value=escaped_q;
   }
else if (t=="artists") {
    d.action = noncat;
    d.elements['sp-a'].value = g_atomzArtists;
    d.elements['sp-x'].value = "artist";
    d.elements['sp-sfvl-field'].value = "initial";
    d.elements['sp-d-1'].value = "";
    d.elements['sp-d-2'].value = "";
    d.elements['sp-x-1'].value = "";
    d.elements['sp-x-2'].value = "";
    d.elements['sp-q-max-day-1'].value= "";
    d.elements['sp-q-max-month-1'].value= "";
    d.elements['sp-q-max-year-1'].value= "";
    d.elements['sp-q-min-day-2'].value= "";
    d.elements['sp-q-min-month-2'].value= "";
    d.elements['sp-q-min-year-2'].value= "";
    d.elements['sp-x-3'].value="artist_c";
    d.elements['sp-q-3'].value=compressed_q;
    d.elements['sp-x-4'].value="artist_a";
    d.elements['sp-q-4'].value=escaped_q;
    d.elements['sp-x-5'].value="artist_r";
    d.elements['sp-q-5'].value=escaped_q;
   }
else if (t=="label_home") {
    d.action = cat;
    d.elements['sp-a'].value = g_atomzLabelHome;
    d.elements['sp-x'].value = "";
    d.elements['sp-sfvl-field'].value = "";
    d.elements['sp-d-1'].value = "";
    d.elements['sp-d-2'].value = "";
    d.elements['sp-x-1'].value = "";
    d.elements['sp-x-2'].value = "";
    d.elements['sp-q-max-day-1'].value= "";
    d.elements['sp-q-max-month-1'].value= "";
    d.elements['sp-q-max-year-1'].value= "";
    d.elements['sp-q-min-day-2'].value= "";
    d.elements['sp-q-min-month-2'].value= "";
    d.elements['sp-q-min-year-2'].value= "";
   }
//alert('sp-a is ' + d.elements['sp-a'].value);
}

/**
 * (AtomZ) Sets buynow parameter to '1' if user specified express checkout preference, then submits search query.
 * This determines the type of purchase buttons that get displayed on the subsequent search results pages
 * PARAM  str  string to be trimmed
 * NOTE  schang 101205 Called by navbar_en.xsl, coppa_en.xsl, IECoppa_en.xsl
 */
function submitAtomzSearch() {
    var d = document.searchForm;
    q = d.elements['sp-q'].value;
    q = strTrim(q);
    d.elements['sp-q'].value = q;
  
    var spc = q.replace(/[^a-zA-Z0-9]/g, '');
    if(!q || !spc) {
        alert("Please enter search words");
        return false;
    }

    if (isExpressCheckoutEnabled()) {
        document.searchForm.buynow.value='1';
    }
    
    document.searchForm.submit();
}

/**
 *(AtomZ) sets the search parameters to be passed to atomz for button display
 * NOTE  schang 090905 replace cookies
 */
function handleCookieFields() {
  if(isAuthenticated()){
    document.searchForm.loggedon.value="1";
  }
  else {
    document.searchForm.loggedon.value="0";
  }

  if(isExpressCheckoutEnabled()){
    document.searchForm.buynow.value = "1";
  }
  else {
    document.searchForm.buynow.value = "0";
  }
}

/**
 * (AtomZ) Generates all the necessary fields for the atomZ search
 * RETURN  String with all the hidden fields used by AtomZ search
 */
function searchParams() {
  d = new Date();
  str =
    '<input name="sp-a" value="" type="hidden"/>'
    + '<input name="sp-c" value="50" type="hidden"/>'
    + '<input name="sp-s" value="0" type="hidden"/>'
    + '<input name="sp-f" value="UTF-8" type="hidden"/>'
    + '<input name="sp-e" value="" type="hidden"/>'
    + '<input name="sp-w" value="exact" type="hidden"/>'
    + '<input name="loggedon" value="0" type="hidden"/>'
    + '<input name="buynow" value="0" type="hidden"/>'
    + '<input name="sp-x" value="" type="hidden"/>'
    + '<input name="sp-sfvl-field" value="initial" type="hidden"/>'
    + '<input name="sp-x-1" value="searchstartdate" type="hidden"/>'
    + '<input name="sp-d-1" value="specific" type="hidden"/>'
    + '<input name="sp-q-max-day-1" value="' + d.getDate() + '" type="hidden"/>'
    + '<input name="sp-q-max-month-1" value="' + (d.getMonth() + 1) + '" type="hidden"/>'
    + '<input name="sp-q-max-year-1" value="' + d.getFullYear() + '" type="hidden"/>'
    + '<input name="sp-x-2" value="searchenddate" type="hidden"/>'
    + '<input name="sp-d-2" value="specific" type="hidden"/>'
    + '<input name="sp-q-min-day-2" value="' + d.getDate() + '" type="hidden"/>'
    + '<input name="sp-q-min-month-2" value="' + (d.getMonth() + 1) + '" type="hidden"/>'
    + '<input name="sp-q-min-year-2" value="' + d.getFullYear() + '" type="hidden"/>'
    + '<input name="sp-x-3" value="" type="hidden"/>'
    + '<input name="sp-q-3" value="" type="hidden"/>'
    + '<input name="sp-p-4" value="all" type="hidden"/>'
    + '<input name="sp-x-4" value="" type="hidden"/>'
    + '<input name="sp-q-4" value="" type="hidden"/>'
    + '<input name="sp-p-5" value="any" type="hidden"/>'
    + '<input name="sp-x-5" value="" type="hidden"/>'
    + '<input name="sp-q-5" value="" type="hidden"/>'
    + '<input name="sp-q-required" value="0" type="hidden"/>'
    + '<input name="sp-q-required-3" value="0" type="hidden"/>'
    + '<input name="sp-q-required-4" value="0" type="hidden"/>'
    + '<input name="sp-p" value="phrase" type="hidden"/>'
  ;
  return str;
}
/******************************************Functions related to atomZ ENDS*******************************/

/******************************************Functions related to cookies BEGIN***********************************************************/
/**
 * (cookie) Reads the document cookies
 * RETURN  A String containing the value for the cookie if it exists, empty string otherwise.
 */
function readCookie (CookieName) {
  var CookieString = document.cookie;
  var CookieSet = CookieString.split (';');
  var SetSize = CookieSet.length;
  var CookiePieces;
  var ReturnValue = "";
  var x = 0;

  for (x = 0; ((x < SetSize) && (ReturnValue == "")); x++) {
    CookiePieces = CookieSet[x].split ('=');
    if (CookiePieces[0].substring (0,1) == ' ') {
      CookiePieces[0] = CookiePieces[0].substring (1, CookiePieces[0].length);
    }
    if (CookiePieces[0] == CookieName) {
      ReturnValue = CookiePieces[1];
    }
  }
  return unescape(ReturnValue);
}

/**
 * (cookie) Checks the cookie to determine if the user has a subscription or not.
 * PARAM  subIds  String   string array of subscription IDs
 * PARAM  stateVals  Array  cookie values inside an array
 * RETURN  Boolean true if the user owns a subscription false, otherwise.
 * This function is not valid anymore, so stubbing it out to return false
 */
function isInSubscription(subIDs, stateVals){
  // no more c2
  return false;
}

/**
 * Gets the value of the "Authed" cookie
 * Called by:  getPreferredGenre() in pod.js
 * Created by:  schang
 * Date:  031006
 * RETURN  "Authed" cookie value
 */
function getAuthedValue() {
  return readCookie("Authed");
}

/**
 * Gets the value of the "Identified" cookie
 * Called by:  getPreferredGenre() in pod.js
 * Created by:  schang
 * Date:  031006
 * RETURN  "Identified" cookie value
 */
function getIdentifiedValue() {
  return readCookie("Identified");
}

/**
 * (cookie) Splits and returns the "UserStateCookie" cookie's values in an array; stores user state data as:
 * <pre>
 *    userState'|'expressCheckout'|'genre'|'subscriptionList'|'locale'|'affiliate'|'accountId'|'confirm_purchase'|'flowName'|'nodeName'|'fromFlowName'|'userData'
 * where
 *    userState        := 'ANON' | 'IDEN' | 'AUTH'
 *    expressCheckout  := 'yes' | 'no'
 *    genre            := url encoded genre name
 *    subscriptionList := [number-]*
 *    locale           := two letter language code_two letter country code
 *    affiliate              := affiliate program associated with users
 *    accountId        := bu profile id
 *    comfirm_purchase := whether purchase confirm dialog should show up or not
 *    flowName         := the flow to goto after finishing an embedded flow
 *    nodeName         := the node to goto after finishing an embedded flow
 *    fromFlowName     := the flow to jump from when it ends
 *    userData         := url-encoded additional data such as params in the forwarded url
 *
 * For userState, ANON anonymous, IDEN identified, and AUTH authenticated
 * </pre>
 * Created by:  dhuang
 * Date:  031006
 * RETURN  An array containing each of the values of the cookie in predefined positions, an empty array otherwise.
 */
function getUserStateValues() {
  var userState = readCookie("UserStateCookie");

  // do we have user state cookie
  if ((userState != null) && (userState.length > 0)) return userState.split('|');
  return new Array(9);
}

/**
 * (cookie) Checks if a product is already in the shopping cart cookie
 * PARAM  prodId  String with the unique value that identifies a product
 * RETURN  boolean value. True if it can find the product in any of the shopping cart cookies. False otherwise.
 */
function isItInCookie(prodId) {
  var dc = document.cookie;
  var end = 0;
  var begin = 0;
  var cookieName;

  while(dc.indexOf(prefix) >=0) {
      begin = dc.indexOf(prefix) ;
      if (begin == -1) {
          exit();
      }
      end = dc.indexOf("=", begin);
      if (end == -1)
          end = dc.length;

      cookieName = unescape(dc.substring(begin, end));
      if(cookieName){
          var cookieValue = cookieHasValue(cookieName,prodId);
          //alert('cookie has value '+cookieValue);
          if(cookieValue)
              return true;

      }
      dc = dc.substring(end,dc.length);
  }

  if(!cookieName){
      cookieName = prefix+'0';
  }
  //alert('not in cookie');
  return false;
}

/**
 * (cookie) Checks a cookie to see if it contains a certain value
 * PARAM  cookieName  The name of the cookie where the value will be searched.
 * PARAM  prodID  The value that will be searched inside the cookie
 * RETURN  boolean value. True if the cookie contains the value, false otherwise.
 */
function cookieHasValue(cookieName,prodID){
  var cookieValue = readCookie(cookieName);
  if(cookieValue) {
    if(cookieValue.indexOf(prodID+spacer) >=0)
      return true;
    else
      return false;
  }else {
    return false;
  }
}

/**
 * (cookie) Sets the attributes in the specified cookie
 * PARAM  name  the cookie name
 * PARAM  value  the values this cookie will store
 * PARAM  expires  cookie expiration date
 * PARAM  path  path for which the cookie is valid
 * PARAM  domain  the domain for which the cookie is valid
 * PARAM  secure  Boolean value indicating if the cookie transmission requires a secure transmission
 * PARAM  prodID  The value that will be searched inside the cookie
 */
function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +((secure) ? "; secure" : "");
    document.cookie = curCookie;
}

/**
  * (cookie) Gets the last cookie created with the prefix itemsInCart (There might be serveral of these cookies)
  * RETURN  String with the name of the cookie, if it can't find any return "itemsInCart0"
  */
function getLastCookie() {
    var dc = document.cookie;
    var end = 0;
    var begin = 0;
    var cookieName;
    counter = 0;
    while(dc.indexOf(prefix) >=0) {
        begin = dc.indexOf(prefix) ;
        if (begin == -1) {
            exit();
        }
        end = dc.indexOf("=", begin);
        if (end == -1 || (end > (begin + prefix.length))) {
            if(dc.indexOf(";", begin) != -1) {
                end = dc.indexOf(";", begin);
            } else {
                end = dc.length;
            }
        }

        cookieName = unescape(dc.substring(begin, end));
        dc = dc.substring(end,dc.length);
        counter ++;
    }

    if(cookieName == null){
        cookieName = prefix+'0';
    }

    //alert('returning cookie name = '+cookieName +' counter '+counter);
    return cookieName;
}

/**
 * (cookie) Returns the number of items inside the cart cookie that's passed as a parameter
 * RETURN int with the number of items in the cookie, 0 if the cookie does not existe or has no items
 */
function itemsInCartCookie(cookieName){
  var items = 0;
  
  cookie = readCookie(cookieName);
  
  if(cookie){
    //We substract one to account for the ~ at the end of the string
    items = cookie.split('~').length - 1;
  }
  
  return items;
}

/******************************************Functions related to cookies END************************************************************/

/******************************************Functions related to the navbar BEGIN***********************************************/
/**
 * Initializes the array that contains the genre pages names and URLs.
 */
function initGenreList() {
    GenreArray = new Array(28);
    for (i = 0; i < 28; i++) {
      GenreArray[i] = new Array(2);
    }
    GenreArray[0][0] = "Home";
    GenreArray[0][1] = g_webServerUrl + "index.html?HomePageLink=true";
    GenreArray[1][0] = "Alt Country";
    GenreArray[1][1] = g_webServerUrl + "genre/altcountry.html";
    GenreArray[2][0] = "Alternative";
    GenreArray[2][1] = g_webServerUrl + "genre/alternative.html";
    GenreArray[3][0] = "Blues";
    GenreArray[3][1] = g_webServerUrl + "genre/blues.html";
    GenreArray[4][0] = "Children's";
    GenreArray[4][1] = g_webServerUrl + "genre/childrens.html";
    GenreArray[5][0] = "Classical";
    GenreArray[5][1] = g_webServerUrl + "genre/classical.html";
    GenreArray[6][0] = "Comedy/Spoken Word";
    GenreArray[6][1] = g_webServerUrl + "genre/comedyspokenword.html";
    GenreArray[7][0] = "Country";
    GenreArray[7][1] = g_webServerUrl + "genre/country.html";
    GenreArray[8][0] = "Dance";
    GenreArray[8][1] = g_webServerUrl + "genre/dance.html";
    GenreArray[9][0] = "Electronic";
    GenreArray[9][1] = g_webServerUrl + "genre/electronic.html";
    GenreArray[10][0] = "Hard Rock/Heavy Metal";
    GenreArray[10][1] = g_webServerUrl + "genre/hardrockheavymetal.html";
    GenreArray[11][0] = "Holiday";
    GenreArray[11][1] = g_webServerUrl + "genre/holiday.html";
    GenreArray[12][0] = "Indie Rock";
    GenreArray[12][1] = g_webServerUrl + "genre/indierock.html";
    GenreArray[13][0] = "Inspirational";
    GenreArray[13][1] = g_webServerUrl + "genre/inspirational.html";
    GenreArray[14][0] = "Jazz";
    GenreArray[14][1] = g_webServerUrl + "genre/jazz.html";
    GenreArray[15][0] = "Latin";
    GenreArray[15][1] = g_webServerUrl + "genre/latinmusic.html";
    GenreArray[16][0] = "New Age";
    GenreArray[16][1] = g_webServerUrl + "genre/newage.html";
    GenreArray[17][0] = "Pop";
    GenreArray[17][1] = g_webServerUrl + "genre/pop.html";
    GenreArray[18][0] = "Punk/Hardcore";
    GenreArray[18][1] = g_webServerUrl + "genre/punkhardcore.html";
    GenreArray[19][0] = "R&B";
    GenreArray[19][1] = g_webServerUrl + "genre/rbsoul.html";
    GenreArray[20][0] = "Rap/Hip-Hop";
    GenreArray[20][1] = g_webServerUrl + "genre/rap.html";
    GenreArray[21][0] = "Reggae";
    GenreArray[21][1] = g_webServerUrl + "genre/reggae.html";
    GenreArray[22][0] = "Rock";
    GenreArray[22][1] = g_webServerUrl + "genre/rock.html";
    GenreArray[23][0] = "Singer/Songwriter";
    GenreArray[23][1] = g_webServerUrl + "genre/folk.html";
    GenreArray[24][0] = "Soundtracks";
    GenreArray[24][1] = g_webServerUrl + "genre/soundtracks.html";
    GenreArray[25][0] = "Underground Hip-Hop";
    GenreArray[25][1] = g_webServerUrl + "genre/undergroundhiphop.html";
    GenreArray[26][0] = "Vocal";
    GenreArray[26][1] = g_webServerUrl + "genre/vocal.html";
    GenreArray[27][0] = "World";
    GenreArray[27][1] = g_webServerUrl + "genre/world.html";
}
/**
 * (Navbar) Gets the text for the login postion  according to the user state
 * RETURN  String with the corresponding text.
 */
function getLogName() {
    if(isAuthenticated()) {
        document.write ('log out');
    }
    else if (isIdentified()) {
        document.write ('log in');
    }
    else {
        document.write ('log in');
    }
}

/**
 * (Navbar) Gets the text for the register postion  according to the user state
 * RETURN  String with the corresponding text.
 */
function getRegOrAccountName() {
  if(isAuthenticated() || isIdentified()) {
    document.write('account');
  } else {
    document.write ('register');
  }
}

// initializing variables for built page in C2 (span name='pod_navbar'); for getLogUrl() and getRegOrAccountUrl()
var loginURL = g_appServerUrl +'Login.flow?REF=' + escape(document.location);
var logoutURL = g_appServerUrl + 'Logout.flow';
var accountURL = g_appServerUrl + 'MyAccount.flow';
var registerURL = g_appServerUrl + 'Registration.flow';

/**
 * (Navbar) Gets the URL for the login link  according to the user state
 * RETURN  String with the corresponding URL
 */
function getLogUrl(ref){
  if(isAuthenticated()){
    document.location = logoutURL;
  }
  else {
    if(ref == "noRef"){
      document.location = loginURL.substring(0, loginURL.indexOf('?'));
    }else{
      document.location = loginURL;
    }
  }
}

/**
 * (Navbar) Gets the URL for the register link  according to the user state
 * RETURN  String with the corresponding URL
 */
function getRegOrAccountUrl() {
  if(isAuthenticated() || isIdentified()){
    document.location = accountURL;
  }
  else {
    document.location = registerURL;
  }
}

/**
 * (Navbar) Writes the text for View Cart link
 */
function getViewCartName() {
    document.write("view cart | ");
}

/**
 * (Navbar) Redirects the page to the View Cart flow
 */
function getViewCartUrl() {
    s_events="scView";
    document.location = g_appServerUrl + 'ViewCart.flow?REF=' + escape(document.location);
}

/**
 * (Navbar) Redirects the page to the IESignup flow.
 * NOTE. This flow is now the same as the one for C2. This function should be DEPRECATED
 */
function IESignup() {
    self.location = g_appServerUrl + 'IESignup.flow';
}

/**
 * (Navbar) Writes the text for the download of the connect player
 */
function IESignupName() {
    document.write("download connect player");
}


// POD PATCH 11/17, NEW NAV BAR LINKS START
//rporras 110805
//Added new functions to get text and url for the new elements in the navigation bar  Changed to uppercase all the text in the bar too.
//(validations can also be made in these functions if the elements change according to the user state i.e logged in, IE store, etc).

/**
 * (Navbar) Writes the text for the Radio link
 */
function getRadioName(){
  document.write("radio");
}

/**
 * (Navbar) Redirects the page to the Radio page
 */
function getRadioUrl(){
  self.location = "/promos/radioconnect/";
}

/**
 * (Navbar) Writes the text for the Exclusives link
 */
function getExclusivesName(){
  document.write("exclusives");
}

/**
 * (Navbar) Redirects the page to the Exclusives page
 */
function getExclusivesUrl(){
  self.location = "/promos/exclusives/";
}

/**
 * (Navbar) Writes the text for the Gear link
 */
function getGearName(){
  document.write("gear");
}

/**
 * (Navbar) Redirects the page to the Gear page
 */
function getGearUrl(){
  self.location = "/promos/gear/";
}

/**
 * (Navbar) Writes the text for the Tips and Tricks link
 */
function getTipsTricksName(){
  document.write("tips & tricks");
}

/**
 * (Navbar) Redirects the page to the Tips and Tricks page
 */
function getTipsTricksUrl(){
  self.location = "/promos/tptk/";
}

/**
 * (Navbar) Writes the text for the Radio link
 */
function getMusicDealsName(){
  document.write("music deals");
}

/**
 * (Navbar) Redirects the page to the Deals page
 */
function getMusicDealsUrl(){
  self.location = "/promos/dc/music_deals.html";
}

/**
 * (Navbar) Writes the text for the Gift Card link
 */
function getGiftCardName(){
  document.write("gift cards");
}
// POD PATCH 11/17, NEW NAV BAR LINKS END

/**
 * (Navbar) Writes the text for the Gift Certificates link
 */
function getGiftCertName(){

    document.write("gift certificates");

}

/**
 * (Navbar) Redirects the page to the gift certificate flow according to the client used.
 */
function buyGiftCert(){
    self.location = g_appServerUrl + 'GiftCertificate.flow';
}

/**
 * (Navbar) Writes the text for the Gift Certificates link
 */
function getTourName() {
    document.write("take the tour");
}

/**
 * (Navbar) Redirects the page to the Tour page
 */
function getTourUrl() {
    self.location = "/promos/dc/take_tour.html";
}

/**
 * (Navbar) Redirects the page to the Help page
 */
function getHelp() {
    self.location = g_appServerUrl + 'CustomerSupport.flow';
}

/**
 * (Navbar) Writes the text for the Gift Certificates link
 */
function getHelpName() {
    document.write("help");
}

/**
 * (navbar) Redirects the page to the value selected in the searchForm.dropdown box.
 */
function jump_site(){
  sitevar= document.searchForm.dropdown.selectedIndex;
  if(sitevar != 0){
    location.href = document.searchForm.dropdown.options[sitevar].value;
  }
}


/**
 * (navbar) Writes the dropdown box with the links to all the genre pages.
 */
function loadBrowseGenreList() {
  initGenreList();
  for (i = 0; i < GenreArray.length; i++) {
    genreOption  = new Option();
    genreOption.text=GenreArray[i][0];
    genreOption.value=GenreArray[i][1];
    // set dropdown value to current genre if on genre page
    if(genreOption.value == window.location.pathname){
      document.write("<li class='current'><a href=" + genreOption.value + ">" + genreOption.text + "</a></li>");
    }
    else
      document.write("<li><a href=" + genreOption.value + ">" + genreOption.text + "</a></li>");
  }
}
/******************************************Functions related to the navbar END*************************************************/

/******************************************Functions miscelaneous BEGIN*************************************************/
/**
 * Registers an event to its corresponding event listener. This can be used to execute js functions
 * when some sort of even is triggered (page load, button click, etc).
 * PARAM  obj Object on which the event happens
 * PARAM  evType  String representing the name of the event. NO "ON" prefix is necessary
 *                              (i.e. for the onload attribute of the body the event is called only load)
 * PARAM  fn  Function to be executed when the event is triggered
 * PARAM  opt_flag  Boolean that indicates whether the function should be excuted during capturing or bubling phase.  (Element hierarchy)
 */
function addEvent(obj, evType, fn, opt_flag) {
    var flag = false;
    if (opt_flag != null) {
        flag = opt_flag;
    }

    if (obj.addEventListener){
        obj.addEventListener(evType, fn, flag);
        return true;
    } else if (obj.attachEvent){
        var r = obj.attachEvent("on"+evType, fn);
        return r;
    } else {
        return false;
    }
}

/**
 * Checks if the enter key has been pressed
 * PARAM  form  The form that it will submit if enter was pressed
 */
function checkEnter(form){
  var code = 0;

  if (NS4) {
    code = event.which;
    //alert("Which: " + code);
  }else{
    code = window.event.keyCode;
    //alert("keyCode: " + code);
  }

  if (code==13) form.submit();
}

// Formats proper album id to generate album page url
// Called by:  goAblum(albumID) in discovery.js
// Edited by:  schang
// Modified:  022706
// Deprecated:  072506; no longer called by discovery functions, page urls in xml are returned directly to the flash
/*function albumLink(albumID) {
  if (albumID != null) {
    if (albumID != "") {
      var id = new String(albumID);
      return "/album/" + id.substr(0, 3) + "/" + id.substr(3, 3) + "/" +
        id.substr(6, 3) + "/" + id.substr(9, 3) + "/" + id.substr(12, 3) + "/" +
        id.substr(15, 3) + "/" + id.substr(18, 3) + "/" + id + ".html";
    }
  }
}*/

// Formats proper artist id to generate artist page url
// Called by:  goArtist(artistID) in discovery.js
// Edited by:  schang
// Modified:  022306
// Deprecated:  072506; no longer called by discovery functions, page urls in xml are returned directly to the flash
/*function artistLink(artistID) {
  if (artistID != null) {
    if (artistID != "") {
      var id = new String(artistID);
      return "/artist/" + id.substr(0, 3) + "/" + id.substr(3, 3) + "/" +
        id.substr(6, 3) + "/" + id + ".html";
    }
  }
}*/

// Formats proper genre name to generate genre page url
// Called by:  goGenre(genreID) in discovery.js
// Edited by:  schang
// Modified:  022306
function genreLink(genreName) {
  if (genreName !=null) {
    if (genreName != "") {
      if (genreName == "R&B") genreName = "rbsoul";
      return escape("/genre/" + genreName.replace(/ /g, "").replace(/\//g, "").replace(/&/g, "").replace(/'/g, "").replace(/-/g, "").replace(/,/g, "").replace(/:/g, "").toLowerCase() + ".html");
    }
  }
}

/**
 * Executes whenever the client or browser window is closed (the window.unonload event is mapped to this function).
 * Saves the session information to the database, which is basically the shopping cart
 */
function onConnectClose(event) {

  if(window.event){
    evt = window.event
  }else{
    evt = event;
  }

  if(evt){
    var altF4 = (evt.altKey && document.readyState == "complete");
    if (altF4 || ((evt.clientY < 0) && (evt.clientX < 0 || evt.clientX > document.body.clientWidth))) {
      if (endSessUrl == null) {
        endSessUrl = g_appServerUrl + "saveSession.jsp";
      }
      window.showModalDialog(endSessUrl, "SS_Save_Session", "status:false;dialogWidth:300px;dialogHeight:250px");
    }
  }
}

window.onunload = onConnectClose;

/**
 * Blocks the Shift-click mouse event.
 */
function mouseDown(e) {
  var shiftPressed=0;

  if (parseInt(navigator.appVersion)>3) {
    if (navigator.appName=="Netscape")
      shiftPressed=(e.modifiers-0>3);
    else
      shiftPressed=event.shiftKey;

    if (shiftPressed) {
      alert("Shift-click is disabled");
      return false;
    }
  }
  return true;
}

/**
 * Sets the mouse down event handler depeding on the version of the browser
 */
function mouseDownVersion() {
    if (parseInt(navigator.appVersion)>3) {
        document.onmousedown = mouseDown;
    if (navigator.appName=="Netscape")
        document.captureEvents(Event.MOUSEDOWN);
    }
}

/**
 * Adds new parameters to an existing link; replaces getSelectedProductID(url, TrackID)
 * NOTE  schang 090905 Called by:  home.xsl
 */
function  parameterizeLink(link, queryString) {

  //If the last character is not '?' append it to the string
  if(link.indexOf('?') == -1){
    link += '?';
  }

  var newLink = link + queryString;
  window.location = newLink;
}

/**
 * Starts the streaming of a preview clip.  On the search pages this function is called
 * with the optional axUrlPrefix parameter so that it can specify the abs path to XSL folder
 * Param previewUrl - the URL to the preview clip
 * Param axUrlPrefix - the URL prefix to the active X player (optional)
 */
function playPreview(previewUrl, axUrlPrefix){
  if(isConnectPlayer) {
    window.external.SetCurrentStream(previewUrl);
  } else {
    //TODO: Find out why g_xslDir loses the trailing slash after mb_us
    if (typeof(axUrlPrefix) != 'undefined') {
        mergedClipURL = axUrlPrefix + g_xslDir + '/html/activexplayer/index.html?clip=' + previewUrl;
    } else {
        mergedClipURL = g_xslDir + '/html/activexplayer/index.html?clip=' + previewUrl;
    }
    window.open(mergedClipURL, 'ActiveXPlayer', 'width=320,height=156,toolbar=no,location=no,directories=no,scrollbars=no,resizable=no,menubar=no');
  }
}

/**
 * This object stores popup messages
*/
function PopupMessages(){
  //Global vars.
  var customerServiceURL = g_appServerUrl + "/CustomerSupport.flow";
  var customerServiceLink = "<a href=\"#\" onclick=\"closePopupForm('CANCEL');MM_openBrWindow('" + customerServiceURL + "','','scrollbars=yes,resizable=yes,width=800,height=600')\" id='Customer Service' name='link.Customer Service'>Customer Service</a>";
  
  var entitlementsURL = g_appServerUrl + "/EnhancedEntitlements.flow";
  var viewPurchasedMusicButton = "<button class=\"action_btn viewPurchasedMusic\" onmouseover=\"hilite(this)\" onmouseout=\"lolite(this)\" onclick=\"closePopup('" + entitlementsURL + "')\"><div>VIEW PURCHASED MUSIC</div></button>&nbsp;&nbsp;";

  //SSL Link popup. Corresponds to the former helpSslLink.xsl
  var sslPopupTitle = "SSL Secured";
  var sslPopupBody = "<p>SSL (Secure Sockets Layer) is the protocol used by CONNECT&#8482; Music to protect the private information you send us, such as credit card information. When you see the SSL Secured icon in the upper right-hand corner, you can feel confident that the information you transmit to us will be properly encrypted, allowing you to securely purchase music online. Please be assured that if the page itself does not have an \"https\" URL, the data submitted from this page is secure. Please contact " + customerServiceLink + " with any additional questions.</p>";

  //Authorized computers popup. Corresponds to the former helpAuthorizedLink.xsl
  var authorizedPopupTitle = "Authorized Computer Activation/De-Activation";
  var authorizedPopupBody = "<p>Connect allows you to \"authorize\" up to five (5) different computers to purchase and play music from our store. Additionally, only one unique CONNECT Music user account can be created on a computer. If two individuals share a computer, only one may have a Connect account registered to them on that computer. Remember, you can always change which computers you want to authorize by accessing your account page.</p><p> Please contact " + customerServiceLink + " with any additional questions. </p>";

  //Authorize my computer popup. Corresponds to the former helpPurchaseAuthorizedLink.xsl
  var authorizePopupTitle = "Authorize my computer";
  var authorizePopupBody = "<p>You can easily tell what you currently have authorized by checking the <b>Purchased Music</b> area of your <b>Account</b> section. For information on downloading to additional computers, " + setCustomerServiceLink("click here") + ". To find out how to authorize other devices to play your purchased content, " + setCustomerServiceLink("click here") +  "</p>";

  //CVV link popup. Corresponds to former helpCvvLink.xsl
  var cvvPopupTitle = "Card Security Code";
  var cvvPopupBody = "<p>CVV, also known as CVC, is the card verification number used by credit card companies to prevent fraud and protect your security.</p><img align='left' src='" + g_imageDir + "/images/CC_Visa.gif'/><h2>Visa / MasterCard / Discover</h2><p>For Visa, MasterCard and Discover users, this is a 3-digit number found on the back of your credit card.</p><br/><br/><br/><br/><br/><br/><br/><img align='left' src='" + g_imageDir + "/images/CC_Amex.gif'/><h2>American Express</h2><p> For American Express users, this is a 4-digit number on the front of your credit card.</p><br/><br/><br/><br/><br/><br/><br/><p>Please contact " + setCustomerServiceLink('Customer Service') + " with any additional questions.</p>";

  //Cookie link popup. Corresponds to former helpCookieLink.xsl
  var cookiePopupTitle = "Enabling \"Keep me logged in...\"";
  var cookiePopupBody = "<p>Enabling the &quot;Keep me logged in...&quot; feature allows you to purchase music without having to type in your password each time. </p><p> Please contact " + customerServiceLink + " with any additional questions. </p>";

  //Change password no email. Corresponds to former helpChangePwdNoEmailRcvdLink.xsl
  var changePwdPopupTitle = "Change Password - No Email Received";
  var changePwdPopupBody = "<p>Your password change request is authenticated by sending a message to the email address you entered when you registered for a CONNECT&#8482; Music account. Insisting on an email confirmation helps prevent unauthorized individuals from changing your password. The password confirmation email is sent to you automatically. Normally, this delivery happens in a few minutes. If there is a significant delay in receiving the email and you are positive that the correct email address was entered, please contact " + setCustomerServiceLink('Customer Service') + ". Also, if you no longer have access to the email account you initially entered when you registered and you still wish to change your password, or if you have any additional questions, please contact " + customerServiceLink + ".</p>";

  //Buy now popup. Corresponds to former helpBuyNowLink.xsl
  var buyNowPopupTitle = "What is Buy Now?";
  var buyNowPopupBody = "<p>The <b>Buy Now</b> feature allows you to immediately begin downloading a purchased track or album when you click the <b>Buy Now</b> button, instead of adding it to cart and waiting for you to finish and confirm your purchase(s). All you need is a credit card on file and the Buy Now option enabled. To enable, or disable, the <b>Buy Now</b> option, click on <b>Edit</b> in the <b>Global Preferences</b> area of your <b>Account</b> section and check or uncheck the box depending on your preference.</p><p>Please contact " + customerServiceLink + " with any additional questions.</p>";

  //Duplicate purchase popup. Corresponds to former musicAlreadyPurchased.xsl
  var duplicatePurchasePopupTitle = "Music Already Purchased";
  var duplicatePurchasePopupBody = "<strong>You already own the music you are attempting to buy or add to the cart.</strong><br/><br/><p>You can download it again for free if you'd like.</p><div class='close_btn' style='float:left; margin-top:20px;margin-left:5px;'>" + viewPurchasedMusicButton + "</div>";

  //Already in cart popup. Corresponds to former alreadyInCart.xsl
  var alreadyCartPopupTitle = "Item Already in Cart";
  var alreadyCartPopupBody = "<p>You already have this item in your cart. It is not necessary to add it twice.</p>";

  //Not Purchasable popup. Corresponds to former notPurchasable.xsl
  var notPurchasablePopupTitle = "Not Purchasable";
  var notPurchasablePopupBody = "<p>We're so sorry, this product is not currently available. Please try again later.</p>";

  //Clean Certificates popup. Corresponds to former cleanCertificatesPopup.xsl
  var cleanCertificatesPopupTitle = "Clean Content Gift Certificates";
  var cleanCertificatesPopupBody = "<p>Here at Connect, we realize our customers are of all ages.  Sometimes not all content is suitable for everyone.  You can choose this option if you wish to restrict the reciever to non explicit content.</p> <p>Please contact " + customerServiceLink + " with any additional questions.</p>";

  //device deauthorize popup. Corresponds to former http://www.connect.com/deauthorize_device.html
  var deauthorizeSonyAudioDevicePopupTitle = "De-authorize your Sony&reg; audio device";
  var deauthorizeSonyAudioDevicePopupBody = "<p>To de-authorize your Sony audio device, please make sure it is connected to your PC and follow these easy steps: </p><ol> <li>Choose the &ldquo;Transfer&rdquo; tab at the top of SonicStage Player. </li> <li>Select your audio device from the drop down list above the tab. </li><li>Click &ldquo;Properties&rdquo; button at the bottom right corner of the device window. </li> <li>Choose &ldquo;De-authorize&rdquo; and follow the window prompts. </li></ol>Please   contact " 
  + customerServiceLink + " with any additional questions.</p>";
  
  //zip code popup. Corresponds to helpZipcodeLink_en.xsl
  var zipCodePopupTitle = "Why do we need your zip code?";
  var zipCodePopupBody = "<p>We provide this information to Nielsen SoundScan to help them compile information as to which music is most popular by region. We may also use this information to better your CONNECT&#8482; Music experience</p>";
  
  this.getTitle = function(popup){
    return eval(popup + "PopupTitle");
  }

  this.getBody = function (popup){
    return eval(popup + "PopupBody");
  }


  function setCustomerServiceLink(text){
    customerServiceLink = "<a href=\"#\" onclick=\"javascript:closePopupForm('CANCEL');MM_openBrWindow('" + customerServiceURL + "','','scrollbars=yes,resizable=yes,width=800,height=600')\" id='Customer Service' name='link.Customer Service' class='navlink'>" + text + "</a>";

    return customerServiceLink;
  }
}

/**
 * Finds and displays a popup message
 * PARAM name String indicating which message will be displayed. Must match a PopupMessages var name.
 * PARAM type String that tells the function what kind of popup to display (modal window, normal window or just a tooltip)
 * PARAM action String that indicates the action to execute (currently only display and hide available).
 * RETURN  None
 * NOTE: init() and whatever function is specified in the action parameter run by default, the calls are made in the last lines of this object.
 */
function PopupMessage(name, type, action){

  this.DEFAULT_TYPE = "normal";
  this.DEFAULT_ACTION = "display";

  //An instance of the PopupMessages store object
  this.messages;
  //The file with the basic popup structure
  this.popupFile;
  //This is the handler used to reference the opened popup
  this.windowHandler;
  //The type of popup this object represents (modal, normal, tooltip). Defaults to normal
  this.type;
  //The action that should be executed for this object. Defaults to display
  this.action;
  //The message to be displayed
  this.name;
  //The title of the message
  this.title;
  //The body of the message
  this.body;

  //This attributes don't really belong in this object, but since popup.html is static, we need some way to tell it where the CSS and JS files are
  this.cssDir;
  this.scriptDir;

  this.init = function(){
    this.messages   = new PopupMessages();
    this.popupFile = g_xslDir + "popup.html";
    this.name      = name;
    this.title     = messages.getTitle(name);
    this.body      = messages.getBody(name);
    this.cssDir    = g_cssDir;
    this.scriptDir = g_scriptDir;

    //Call whatever action is specified as a parameter
    if(!eval("this." + action))
      this.action = this.DEFAULT_ACTION;

    if(!type)
      this.type = this.DEFAULT_TYPE;
  }

  this.display = function (){

    //Make this object available as a global var so that the child windows have access to it.
    popup=this;

    if(this.type == "modal"){
      windowHandler = window.showModalDialog(popupFile, this, "dialogHeight: 445px; dialogWidth: 485px; dialogTop: px; dialogLeft: px; edge: Raised; center: Yes; help: No; resizable: No; status: No; unadorned: Yes; scroll: No");
    }else if(this.type == "normal"){
      windowHandler = window.open(popupFile, 'popup', "height=400, width=450, resizable=no, scrollbars=no, status=no, titlebar=no, toolbar=no, menubar=no,location=no");
    }else if(this.type == "tooltip"){
      //TODO: Add code to handle the display of tooltips
    }else{
      windowHandler = window.open(popupFile, 'popup', "height=400, width=450, resizable=no, scrollbars=no, status=no, titlebar=no, toolbar=no, menubar=no,location=no");
    }

    //If what the window returns is a string, then we redirect to that url
    //(This is the way modal window)
    if(windowHandler != null && windowHandler instanceof String)
      location.href = windowHandler;
  }

  //Closes the current active popup
  this.hide = function(){
    if(false == windowHandler.closed)
      window.close();
    //TODO: Add code to handle hiding tooltips.
  }

  //An equivalent to a constructor, initializes all the properties of this object
  init();
  //Call to the action invoked for this instance
  eval(this.action+"();");
}

/**
 * Gets a value of the specified parameter from the URL
 * PARAM  key  The name of the parameter which value is required
 * RETURN  String with the value of the parameter or null if it could not find it
 */
function getParameterValue(key, query) {
    if(!query) query = window.location.search;
    var result = null;
    var search = unescape(query);
    if (search.length > 1) {
      search = search.substring(1, search.length);
    }
    var paramArray = search.split('&');
    for(var i=0; i < paramArray.length; i++) {
      var nextPair = paramArray[i].split('=');
      if (nextPair.length == 2) {
        var name = nextPair[0];
        var value = nextPair[1];
        if (name == key) {
          result = value;
          break;
        }
      }
    }
    return result;
}  
  
/**
 * Split the given uri from the question mark into uriPrefix and uriQuery
 */
function splitUriQuery(uri) {
    var pattern = /(.*\?)(.*)/;
    var test = uri.match(pattern);
    var result = new Array();
    if(!test) {
        result[0] = uri;
    } else {
        result[0] = test[1];
        result[1] = test[2];
    }
    return result;
}

/**
 * Sets a value of the specified parameter to the given query.
 * The query is the http query after the question mark.
 */ 
function setQueryParamValue(query, param, value) {
    var replacement = '';
    if(value) replacement = param+"="+escape(value);
    var result = '';
    if(query.match(param)) {
        var cgi = query.split("&");
        for (var i=0; i < cgi.length; i++) {
            if(cgi[i]) {
                cgipair = cgi[i].split('=');
                if (cgipair[0] == param) {
                    if(replacement) {
                        if(result) result += '&';
                        result += replacement;
                    }
                } else {
                    if(result) result += '&';
                    result += cgi[i];
                }
            }
        }
    } else {
        if(replacement)
            result = query + '&' + replacement;
        else
            result = query;
    }
    return result;
}

/**
 * Trims any white spaces immediately preceding and following the string argument
 * PARAM  str  string to be trimmed
 * NOTE  schang 111405 Called by trimQuery()
 */
function strTrim(str) {
  str = str.replace(/^\s+/, "");
  str = str.replace(/\s+$/, "");
  return str;
}

/**
 * Returns an  xmlHttpRequest object depending on the type of broswer detected
 * RETURN  xmlHttpRequest object, null if it could not be created
 */
function getXmlHttpRequest(){
  //The ActiveXObject is the one used by IE. Mozilla, Zafari and Netscape use the other.
  if(window.ActiveXObject){
    return new ActiveXObject("Microsoft.XMLHTTP");
  }else if(window.XMLHttpRequest){
    return new XMLHttpRequest();
  }

  return null;
}

/**
 * Prints a dropdown box with a list of years
 * PARAM  name  The name of this dropdown box (name attribute of select)
 * PARAM  selectedYear  If it exists, this will be the default value for the dropdown
 * PARAM  backOrForward Indicates whether the range of years will be printed towards the future or to the past. Defaults to forward
 * PARAM  span  The span of years that the dropdown will enclose. Defaults to 17
 * RETURN  None
 */
function writeYearDropDown(name, selectedYear, backOrForward, span) {
  var nextYear;
  var currentYear = new Date().getYear();
  
  //If a span of time is not provided it is defaulted to 17 (That's the way it used to be in the old function)
  if(!span)
    span = 17;
    
  if(backOrForward == "back")
    backOrForward = -1;
  else
    backOrForward = 1;
  
  document.write("<select name='" + name  + "'>");
  document.write("<option value=''>Year</option>");
  
  for (var i=0; i < span; i++) {
    
    //Print the next year in the future or the past depending on the parameter
    nextYear = (currentYear + (i*backOrForward));
    
    document.write("<option value=");
    document.write("'" + nextYear + "'");

    if (nextYear == selectedYear) {
        document.write(" selected='selected'");
    }

    document.write(">");
    document.write(nextYear);
    document.write("</option>");
  }

  
  

  document.write("</select>");
}

/**
 * Prints a dropdown box with a list of months
 * PARAM  name  The name of this dropdown box (name attribute of select)
 * PARAM  selectedMonth  If present, this will be the default value for the dropdown
 * PARAM  mode  Defines whether the dropdown will print numbers or names. Defaults to numbers
 * RETURN None
 */
function writeMonthDropDown(name, selectedMonth, mode) {
  var monthNumbers = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  //Just in case is not a double digit number
  selectedMonth = parseInt(selectedMonth, 10);
  selectedMonth < 10 ? selectedMonth = '0'.concat(selectedMonth) : selectedMonth;

  document.write("<select name='" + name  + "'>");
  document.write("<option value=''>Month</option>");

  for (var i=0; i < monthNumbers.length; i++) {

    document.write("<option value=");
    document.write("'" + monthNumbers[i] + "'");

    if (monthNumbers[i] == selectedMonth) {
      document.write(" selected='selected'");
    }

    document.write(">");

    //If names are required print them, otherwise just print numbers
    if(mode == "names")
      document.write(monthNames[i]);
    else
      document.write(monthNumbers[i]);

    document.write("</option>");
  }

  document.write("</select>");
}

/**
 * Prints a dropdown box with a list of days of the month
 * PARAM  name  The name of this dropdown box (name attribute of select)
 * PARAM  selectedDay  If present, this will be the default value for the dropdown
 * RETURN None
 */
function writeDayDropDown(name, selectedDay) {
  var DAYS_OF_THE_MONTH = 31;
  var nextDay;
  
  //Just in case is not a double digit number
  selectedDay = parseInt(selectedDay, 10);
  selectedDay < 10 ? selectedDay = '0'.concat(selectedDay) : selectedDay;

  document.write("<select name='" + name  + "'>");
  document.write("<option value=''>Day</option>");

  for (var i=1; i <= DAYS_OF_THE_MONTH; i++) {
    i < 10 ? nextDay = '0'.concat(i) : nextDay = i;

    document.write("<option value=");
    document.write("'" + nextDay + "'");

    if (nextDay == selectedDay) {
      document.write(" selected='selected'");
    }

    document.write(">");

    document.write(nextDay);

    document.write("</option>");
  }

  document.write("</select>");
}

/**
  * Marks as checked all the instances of the field it receives as a parameter
 * PARAM  field  The name of the field that must be checked
 * RETURN None
 */
function checkAll(field){
  if(field){
    if(field.length){  
      for (i = 0; i < field.length; i++)
        field[i].checked = true;
    }else{
      field.checked = true;
    }
  }
}
   
/**
 * Unchecks all the instances of the field it receives as a parameter
 * PARAM  field  The name of the field that must be unchecked
 * RETURN None
 */   
function uncheckAll(field){
  if(field){
    if(field.length){
      for (i = 0; i < field.length; i++)
        field[i].checked = false;
    }else{
      field.checked = false;
    }
  }
}

/**
 * Counts the number of checked boxes for the given checkbox element
 * PARAM  checkboxElement  The checkbox to count checked items from
 * RETURN The number of checked items in the checkbox array. Returns -1 if not present or not a checkbox element.
 */ 
function countCheckedItems(checkboxElement) {
  var checkedItems = 0;
  if (checkboxElement && checkboxElement.length > 0) {
    for (var i = 0; i < checkboxElement.length; i++) {
      if (checkboxElement[i].checked) {
        checkedItems++;
      }
    }
  } else {
    checkedItems = -1;
  }
  return checkedItems;
}

/**
 * Sets the element passed as a parameter to visible.
 * Expects the original element to be hidden
 * PARAM  param  The name of the element to be set to visible
 * RETURN None
 */
function showElement(param) {
  if(param){
    if(param.length){
      for (i = 0; i < param.length; i++)
        param[i].style.display = "block";
    }else{
      param.style.display = "block";
    }
  }
}

function objToString(object) {
    if(!object) return "NULL Object";
    var result = 'object.value=' + object.value + "\n";
    for(var i in object) {
       result += ('[' + i + '] = (' + object[i] + ']\n');
    }
    return result;
}
/******************************************Functions miscelaneous END***************************************************/

/****************************************** LISTED FOR DEPRECATION BEGINS ************************************************/

//   SC 091205 deprecate Dan's function for handling subscriptions; logic now handled in swapProductButton() in pod.js
/*function getMouseInImg(productId, subIDs) {
    if (isInSubscription(subIDs, getUserStateValues()))
              return 'http://c2.connect.com/assets/download_btn_dload.gif';
    return getSwapImg(productId);
}*/

//rporras 011706 This function was used before for the add to cart button. getProduct should be used instead now.
/*
function getContent(productId, subIDs, subUrl, addToCartUrl, expressCheckoutUrl) {
    var stateVals = getUserStateValues();
    if (isInSubscription(subIDs, stateVals)) {
        // send out DMF
        var param = "action=LICENSE&selectedExternalKey=" + productId;
        window.external.SetDeliveryMetafile(subUrl, "POST", param, "INVISIBLE");
    }
    else {
        getUrl(expressCheckoutUrl+productId, addToCartUrl+productId, 'btn_buynow' + productId, productId);
    }
}
*/

 /**
 * rporras 011806
 * DEPRECATED. This function is no longer valid. ---setProductButton--- should be used instead.
function getContentBtnImg(imageId, productId, subIDs)
{
    var stateVals = getUserStateValues();
    if (isInSubscription(subIDs, stateVals))
        document.images[imageId].src ='http://c2.connect.com/assets/download_btn_dload.gif';
    else
        getImgNew(imageId, productId);
}
*/

//function launchBuyNowConfirmation() {
//
//    var buyNow = getParameterValue('buyNowConf');
//    if (buyNow != 'true') {
//        return;
//    }

//    var myArgs = window.showModalDialog(buyNowURL,"Dialog Box Arguments # 1","dialogHeight: 400px; dialogWidth: 500px; dialogTop: px; dialogLeft: px; edge: Raised; center: Yes; help: No; resizable: No; status: No; unadorned: Yes");
//    //alert("launched windo myArgs = "+myArgs);

//    if(myArgs == 'CANCEL')
//    {
//        //history.back();
//    }else if (myArgs == undefined){
//        //alert("child popup was Closed");
//        //history.go(-1);
//    }
//    else
//    {
//        document.location.replace(myArgs);
//    }
//}

/**
 *  Moved to pod.js as part of the cookie functions
function isConfirmPurchaseOn()
{
  return (getUserStateValues()[8] != 'false');
}
 */
//rporras 011706 This functions was moved to pod.js and is now called getProduct
/*
function getUrl(purchaseUrl,addToCartUrl,imageId,productId) {
  // If inside the SS client
     if(isConnectPlayer == true) {
    //Version of SS too old; display upgrade notification
          if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') < 2200){
              if(!readCookie('11FNotification')) {
                   setCookie('11FNotification','true',null, '/', g_cookieDomain,false);
                MM_openBrWindow(g_xslDir + 'html/11FNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
            }
        }
     //Buy now enabled
        if(isExpressCheckoutEnabled() ){
          document.location = purchaseUrl+'&cart=buynow&REF='+ escape(window.location);
        }
    //Add to cart enabled
        else{
          if(!isItInCookie(productId)) {
            // 102005 jvasquez
            // this code checks to see if there is anything in the cart
            // if not when an item gets added for the first time we can pick
            // that up in s_code_remote.js to pass to omniture to send the scOpen event
            // to start cart tracking
            lastCookie = getLastCookie();
            if(lastCookie == 'ItemsInCart0') {
                setCookie('1stCartAdd','true',null, '/', '.connect.com',false);
            }

        // 091905 dhuang
        // Track listed as FREE in Cart if user clicks View Cart before Album page reloads
        for (var i=0; i<document.links.length; i++) {
          document.links[i].disabled = true;
          document.links[i].onclick = null;
        }
                document.location = addToCartUrl+'&REF='+escape(window.location);
            }
        }
     }
  //If in IE store browser
  else {
    //Version of SS is current
            if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') >= 2200){
      //Buy now enabled
                if(isExpressCheckoutEnabled() ){
                    refURL = window.location.toString();
                    trimSpot = refURL.indexOf('?');
                    if(trimSpot > 0){
                        refURL = refURL.substring(0,trimSpot);
                    }
                    tempURL = purchaseUrl+'&cart=buynow&REF='+ escape(refURL)
                    document.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(tempURL) + '&cookieName=c2Version';
                }
      //Add to cart enabled
                else{
                    if(!isItInCookie(productId)) {
                        refURL = window.location.toString();
                        trimSpot = refURL.indexOf('?');
          if(trimSpot > 0) {
                refURL = refURL.substring(0,trimSpot);
                        }
            // 102005 jvasquez
              // this code checks to see if there is anything in the cart
            // if not when an item gets added for the first time we can pick
            // that up in s_code_remote.js to pass to omniture to send the scOpen event
            // to start cart tracking
            lastCookie = getLastCookie();
            if(lastCookie == 'ItemsInCart0') {
                setCookie('1stCartAdd','true',null, '/', '.connect.com',false);
            }

                        tempURL = addToCartUrl+'&REF='+escape(refURL);
                        document.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(tempURL) + '&cookieName=c2Version';
                    }
                }
            // Version of SS too old; display upgrade notification
            } else {
       MM_openBrWindow(g_xslDir + 'html/11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
            }
    }
}
*/
/**
 * Sets the enSessCloseURL global var. This is the URL that gets called when the client or browser is closed.
 * PARAM  url  A valid URI to be assigned to the global variable
 * DEPRECATED  rporras 011705  As of now this function is not being called from any XSL or JS file. should be DEPRECATED
function setSSCloseURL(url) {
  endSessUrl = url;
}
*/
/** SC 1200105
// deprecated; moved to pod.js
//function highlight(objectID) {
//  var object = MM_findObj(objectID);
//  if (object != null) {
//    object.style.backgroundColor="FFE57F";
//  }
//}
**/

 /**
 * rporras 011806
 * DEPRECATED. use readCookie instead
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);

  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0)
      return null;
  } else
    begin += 2;

  var end = dc.indexOf(";", begin);

  if (end == -1)
    end = dc.length;

  return unescape(dc.substring(begin + prefix.length, end));
}
*/

 /**
 * rporras 011806
 * DEPRECATED. These functions were used only for SS

 function IEDownloadSS() {
  self.location = "http://www.connect.com/download.html";
}

function IEDownloadSSName() {
    document.write("DOWNLOAD SONICSTAGE");
}
 */

 /**
 * rporras 020706 This validation is not necessary anymore since this should be accesible from IE now
 * (Navbar) Redirects to the Tell A Friend page or pops up an upgrade message if needed.
 *
function goTAF(TAFUrl){
  if(isConnectPlayer) {
    self.location = TAFUrl;
  } else
    if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') >= 2200){
      self.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(TAFUrl) + '&cookieName=c2Version';
    } else {
      MM_openBrWindow(g_xslDir + 'html/11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
    }
}
*/

/**
 * rporras 072606. DEPRECATE. This function already exists in the js file 
 * that encloses all the functions for radio. 
 * (Navbar) Starts the radio URL
 *
function startRadio(url){
  if(isConnectPlayer){
    if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') < 2100){
      MM_openBrWindow(g_xslDir + 'html/11DNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
    } else {
      if(isAuthenticated() || isIdentified()) {
        s_prop10 = url;
        window.external.SetRadioStream(url);
      } else {
        self.location = g_appServerUrl + 'Login.flow?REF=' + escape(document.location);
      }
    }
  } else
    if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') < 2200) {
      MM_openBrWindow(g_xslDir + 'html/11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
    } else {
      self.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(document.location) + '&cookieName=c2Version';
    }
}
*/
/****************************************** LISTED FOR DEPRECATION ENDS ************************************************/
