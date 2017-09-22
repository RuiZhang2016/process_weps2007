var title = "";
var album = "";
var genre = "";
var time = "";
var artist = "";
var omgVersion = "";
var radioID = "";

/**
* 7/26/06 Revised for C3 compatibility:
* 7/20/06 To implement the ActiveX fix (per http://www.macromedia.com/devnet/activecontent/) following scripts (previously deployed on 4/13/06) have been incorporated into global template for C3
var baseHref = '/promos/pms/js/';
document.write('<script language="javascript" src="' + baseHref + 'AC_ActiveX.js"></script>');
document.write('<script language="javascript" src="' + baseHref + 'AC_RunActiveContent.js"></script>');
* 7/20/06 Changed paths from /promos/musicstore/sonicstage/radio/... to /promos/sonicstage/radio/...
*/

//1.0.3 1/10/06 added buyNowToSWF function and calls. 
function radioInit(){
	if( isConnectPlayer){
		//var omgVersion = window.external.GetSystemInfo("OPENMG_VERSION");
		ssVersion = readCookie('ssVersion').substring(0,6).replace(/\./gi,'');
		if(ssVersion < 2100){
    		//client is older than SS3.0
			window.document.channel.SetVariable("clientStatus", "upgrade");
		}else if ( ssVersion >= 2200 && ssVersion < 3000){
			// Let the user play the station but display the upgrade message based on ss version.
			window.document.channel.SetVariable("clientStatus", "upgradeBasic");
		}else if ( ssVersion >= 3000 ){
			if( window.external.GetCurrentPlaybackData("TITLE") == "NOTAVAILABLE"){
				// PIM Disabled
				window.document.channel.SetVariable("clientStatus", "pimDisabled");
			}else if(readCookie( 'radioCurrentStationID')){
				// lets see if this cookie id matches the current id
				if(readCookie( 'radioCurrentStationID') == radioID){
					if (isAuthenticated() || isIdentified()) {
						// Client ready
						// If the user has added a track to the cart we need to reflect that in the UI.
						if( readCookie ( 'radioAddToCartID')){
							window.document.channel.SetVariable("clientAddToCart", readCookie ('radioAddToCartID'));	
							//alert("cookie" + readCookie ( 'radioAddToCartID'));
						}else{
							//alert("No cookie" + readCookie ( 'radioAddToCartID'));
						}
						// Start Interval
						window.setInterval('checkForNewData()', 1000);
						window.document.channel.SetVariable("clientStatus", "ready");
						window.document.channel.SetVariable("radioStationID", radioID);//Added for Radio Reporting 051117
						buyNowToSWF();
					}else{
						// User is logged out
						window.document.channel.SetVariable("clientStatus", "loggedOut");
					}
				}else{
					if ( isAuthenticated() || isIdentified()) {
						window.document.channel.SetVariable("clientStatus", "ready");
						window.document.channel.SetVariable("radioStationID", radioID);
						buyNowToSWF();
			 		}else{
						// User is logged out
						window.document.channel.SetVariable("clientStatus", "loggedOut");
					}
				}
			}else{
				// Start Interval
				window.setInterval('checkForNewData()', 1000);
				window.document.channel.SetVariable("clientStatus", "ready");
				window.document.channel.SetVariable("radioStationID", radioID);//Added for Radio Reporting 051117
				buyNowToSWF();
			}
		}
   		// if not in Sonic Stage - jr.
	} else {
		window.document.channel.SetVariable("clientStatus", "download");
	}
}

function buyNowToSWF(){
	var expressCheckout = isExpressCheckoutEnabled()+"";
	//isExpressCheckoutEnabled() is defined in pod.js included in global template.
	//alert("ExpressCheckoutCookie = "+expressCheckout);
	window.document.channel.SetVariable("buyNowTrk", expressCheckout);
}

function checkForNewData(){
	//if( isSongNew()){
		setCurrentSong();
		setFlashChannelData();
	//displayCurrentSong();
	//}
}
function displayCurrentSong(){
 try{
	setCurrentSong();
	alert(artist+","+title+","+album+","+time+","+genre);
	var piStatus = window.external.GetPiStatus();
	alert(piStatus);
 }catch(e){

 }
}

function setCurrentSong(){
 try{
	title = window.external.GetCurrentPlaybackData("TITLE");
	album = window.external.GetCurrentPlaybackData("ALBUM");
	genre = window.external.GetCurrentPlaybackData("GENRE");
	time =  window.external.GetCurrentPlaybackData("TIME");
	artist = window.external.GetCurrentPlaybackData("ARTIST");
 	var piStatus = window.external.GetPiStatus();
 }catch(e){

 }
}

function pauseRadio(){
try {
	window.external.SetPlaybackMode("PAUSE");
}catch(e){
}
}

function startRadio( indexVar){
 try {
	window.external.SetRadioStream( indexVar);
 }catch(e){
 }
}
function stopRadio(){
try {
	window.external.SetPlaybackMode("STOP");
 }catch(e){
 }
}

function SSOnPlaybackMode( PlayMode){ 
 try{
	window.document.channel.SetVariable("clientPlayerStatus", PlayMode);
	if(PlayMode == "STOP"){
		// Lets clear the title variable
		title = "";
		// Clear the flash variable as well
		window.document.channel.SetVariable("title", "");
	}
 }catch(e){
 }
}

function isSongNew(){
 try{
	var tmp_title = window.external.GetCurrentPlaybackData("TITLE");
	var tmp_album = window.external.GetCurrentPlaybackData("ALBUM");
	var tmp_genre = window.external.GetCurrentPlaybackData("GENRE");
	var tmp_time =  window.external.GetCurrentPlaybackData("TIME");
	var tmp_artist = window.external.GetCurrentPlaybackData("ARTIST");
	if(tmp_title != title){
		return true;
	}else{
		return false;
	}
 }catch(e){

 }
 
}

function setFlashChannelData(){
	 try{
		window.document.channel.SetVariable("title", title);
		window.document.channel.SetVariable("album", album);
		window.document.channel.SetVariable("genre", genre);
		window.document.channel.SetVariable("time", time);
		window.document.channel.SetVariable("artist", artist);
	 }catch(e){

	 }
}//7.11.06 added try and catch to thwart js error message.
function clearFlashChannelData(){
	window.document.channel.SetVariable("title", "");
	window.document.channel.SetVariable("album", "");
	window.document.channel.SetVariable("genre", "");
	window.document.channel.SetVariable("time", "");
	window.document.channel.SetVariable("artist", "");
}

function startRadio_demo( url){
	startRadioLandingPage_demo(url, radioID, '');
	// Lets reset the js to check for new information.
	//radioInit();
	//self.location
	//refresh();
}

function startRadio_demoIE(url){
	startRadioLandingPage_demo(url, radioID, '');
}

function startRadioLandingPage_demo(url, param_radioID, redirect_url){
if(isConnectPlayer){
	if(readCookie('ssVersion').substring(0,6).replace(/\./gi,'') < 2100){
		MM_openBrWindow(g_notificationsDir + '11DNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
	} else {
		if(isAuthenticated() || isIdentified()) {
			// alert("This is the radio ID : " + param_radioID);
			createCookie('radioCurrentStationID', param_radioID, 1);
			// Start check
			window.setInterval('checkForNewData()', 1000);
			s_prop10 = url;
			window.external.SetRadioStream(url);
			
			if(redirect_url != ''){
				self.location = redirect_url;
			}
			
		} else {
			self.location = 'http://musicstore.connect.com/mb_us/Login.flow?REF=' + escape(document.location);
		}
	}
} else if(readCookie('ssVersion').substring(0,6).replace(/\./gi,'') < 2200){
	MM_openBrWindow(g_notificationsDir + '11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
} else {
	// lets go to url
	// self.location = 
	// Trigger deep link 
	//alert("THis : + " + window.document.deepLinkTarget);
	window.location = 'http://musicstore.connect.com/mb_us/SmartURL.xdmd?statusURL=' + escape(document.location) + '&cookieName=ssVersion';
	/*radioIERedirectInterval = window.setInterval('redirectIEAfterDeepLink()', 1000);  takes browser back to landing pg; originally afraid that the artist rotation animation in browser and SonicStage will burden CPU usage.
	*/
}

}
function redirectIEAfterDeepLink(){
	clearInterval( radioIERedirectInterval);
	self.location = 'http://musicstore.connect.com/radio/index.html';
}

function addProdToCart( prodID){
	createCookie('radioAddToCartID', prodID, 1);
	// Submit product
//alert("http://musicstore.connect.com/mb_us/AddContentForExpressCheckout.action?flow=Static&origin=StaticPage&node=BuyNow&selectedExternalKey=" + prodID + "','http://musicstore.connect.com/mb_us/AddContentToCart.action?flow=Static&origin=StaticPage&selectedExternalKey="+prodID+"','btn_buynow1"+prodID+"','"+prodID);
	// window.location.href = "http://musicstore.connect.com/mb_us/AddContentForExpressCheckout.action?flow=Static&origin=StaticPage&node=BuyNow&selectedExternalKey=" + prodID + "','http://musicstore.connect.com/mb_us/AddContentToCart.action?flow=Static&origin=StaticPage&selectedExternalKey="+prodID+"','btn_buynow1"+prodID+"','"+prodID;
	//stationName = stationName.replace(/[\']/g, "");
	//trackTitle = trackTitle.replace(/[\']/g, "");
	//alert("StationName: " +stationName+ ", track: " +trackTitle);
	//s_eVar8 += stationName+': '+trackTitle+' | ';
	getProduct(prodID,"","");
	/*getURL( + prodID + '','http://musicstore.connect.com/mb_us/AddContentToCart.action?flow=Static&origin=StaticPage&=cid=radio_' + radioID + '&selectedExternalKey=' + prodID + '','btn_buynow1' + prodID + '','' + s_eVar8 += "{radioname}:{tracktitle},");
}//&=cid='radio_'+radioID is 11/9/05 addition for Omniture/Tracking Code Reporting on Station*/
}

// Cookie Data
function createCookie( name,value,days){
	if (days){
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

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
    return ReturnValue;
}

function refresh()
{
    window.location.reload( false );
}

function buildRadioUi( id){
	radioID = id;
	var result = '<script language="javascript"> \n' + 
	'AC_FL_RunContent(\'base\', \'/promos/sonicstage/radio/\',' + 
	'\'scale\', \'noscale\',' +
	'\'id\', \'channel\',' + 
	'\'name\', \'channel\',' + 
	'\'align\', \'middle\',' +  
	'\'allowScriptAccess\', \'always\',' +  
	'\'bgcolor\', \'#FFFFFF\',' + 
	'\'menu\', \'false\',' + 
	'\'codebase\',\'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\',' + 
	'\'width\',\'655\',' + 
	'\'height\',\'252\',' + 
	'\'src\',\'/promos/sonicstage/radio/radioChannel_loader.swf?radioID='+ id + '&s_nameSpace=' + g_omnitureAccount + '\',' + 
	'\'quality\',\'high\',' + 
	'\'pluginspage\',\'http://www.macromedia.com/go/getflashplayer\',' + 
	'\'movie\',\'/promos/sonicstage/radio/radioChannel_loader.swf?radioID='+ id + '&s_nameSpace=' + g_omnitureAccount + '\');\n' + 
	'</script> \n' + 
	'<SCRIPT LANGUAGE=VBScript\> \n' + 
	'on error resume next \n' + 
	'Sub channel_FSCommand(ByVal command, ByVal args)\n' + 
	'  call channel_DoFSCommand("channel", args)\n' + 
	'end sub \n' + 
	'</SCRIPT\> \n';

	return result;
}//7/20/06 Took out "musicstore/" from paths after /promos/

// Custom Radio play
function startRadioLandingPage(url, jump){
	self.location = jump;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}