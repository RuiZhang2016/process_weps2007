/*************************************************************************/
//  Requires the following script libraries.
// 
//	/global/apps/mediaplayer/scripts/os_detect.js
//	/shared/scripts/flash_detect.js
//	/sitewide/droplets/scripts/detect_overdrive.js
//
/*************************************************************************/
var od_win;
var detectState="";
var fn="";
var ok="";

function launchOverdriveDetect(){

	var resultStatus = getOverdriveState().detectState;
	
	if (resultStatus == "ok"){
		return true;
	} else{
		window.location.href = detectFailUrlWin + "?error=" + resultStatus;
	}
}

function launchOverdrive(){

	if (getOverdriveState().detectState == "ok") {
		var broadband_parent = parentWindowVar;
		var url = detectSuccessUrl;	
		var width;
		var height;
		var odscrollbars;
		var odresizable;
		var purlArray = null;
		
		if (getOverdriveState().dim == "lowres"){
			width = 800;
			height = 600;
			odscrollbars = "yes";
			odresizable = "yes";
		} else {
			width = winWidth;
			height = winHeight;
			odscrollbars = "no";
			odresizable = "no";
		}
		
		// CONSTRUCT DEEP LINK ARGS
		
		var qs = "";
		if(arguments.length > 0){
			qs = "?"+arguments[0];
			for(i=1; i<arguments.length; i++){
							
				if (arguments[i].indexOf(broadband_parent) == -1){
					qs = qs + "&" + arguments[i];
				} else {
					qs = qs + "&" + arguments[i];
					purlArray = arguments[i].split(/=/);
					}
				}
			}	
			
		var docloc = window.location.pathname;

	      if(qs.length > 0){
	         qs += "&launchedFrom=" + docloc;
	      } else{
	         qs += "?launchedFrom=" + docloc;
	      }
		  
		var path = 	url+qs;
		
		od_win = window.open(path, "player", "width=" + width + ", height=" + height + ", left=" + (Math.round(window.screen.width/2) - Math.round(width/2)) + ", top=" + (Math.round(window.screen.height/2) - Math.round(height/2)) + ",scrollbars=" + odscrollbars + ", resizable=" + odresizable + ", menubar=no, location=no, toolbar=no, status=no, directories=no" );

		if (purlArray != null) window.location.href = purlArray[1];		
		
		broadbandWindowPopped(od_win, path);
				
	} else{
		
		window.location.href = detectFailUrl;
	}
}

function broadbandWindowPopped(win, path) {}



function launchOverdriveHome(){
	var u = window.location + "";
	var q = u.indexOf('?') + 1;	
	var p = u.substring(q,u.length);	
	var param = p.split("&");
	var args = "";
	
	if (q > 0)
	{
		args = param[0];
		
		if (param.length > 1)
		{	
			for (i=1; i<param.length;i++)
			{
				args = args + "&" + param[i];
			}
		} 
		launchOverdrive(args);
	} 
	else 
	{
		launchOverdrive();
	}
}



function getOverdriveState(){
	var dim;

		if( ( !os.isMac()) && (!os.isWindows())){
			detectState =  "os_other";
			fn	= "display_error_os_other";
		}
		else if(os.isMac()){
		   detectState = "macintosh";
		   fn = "display_error_os_mac";
		}
		else if ((!os.isWindowsXP()) && (!os.isWindows2K()) && (!os.isWindowsVista())){
		   detectState = "oldwindows";
		   fn = "display_error_os_old";
		}
		else if (isNetscape) {	     
			detectState = "netscape";
	  		fn = "display_error_browser";
		}
		else if (isFirefox) {  
			detectState = firefoxX().detectState;
	  		fn = firefoxX().fn;
		}
		else if(!hasIE55plus()) {
		   detectState = "oldie";
		   fn = "display_error_browser_oldie";
		}
		else if (flashVersion < 7 ) {
		   detectState = "oldflash";
		   fn = "display_error_flash";
		}
		else if ((hasWMP9() == false ) ) {
		   detectState = "oldwmp";
		   fn = "display_error_wmp";
		}
		else if ((window.screen.width < 1024) || (window.screen.height < 768) ) {
			//detectState = "lowres";
			//fn = "display_error_resolution";
			detectState = "ok";
			dim = "lowres";
			fn = "display_enter";
		} else {
			detectState = "ok";
			fn = "display_enter";
		}

		// DETECT DISPLAY
		var pn = fn + ".js";
		// PAGE REPORTING
		var rpn = fn + ".jhtml";
		// launchOverdrive uses "detectState"
		
	return {detectState : detectState, pn : pn, rpn : rpn, dim : dim};
}




function firefoxX(){
	
	if(firefoxXInstall().version == "1.5" && isActiveXInstalled()) {
		detectState = "ok";
    	fn = "display_enter";
	} else if (navigator.appName == "Netscape") {
		detectState 	= firefoxXInstall().detectState;
	  	fn 				= firefoxXInstall().fn;
	}
	
	return {detectState:detectState, fn:fn};
}

function isActiveXInstalled() {
	// Checks if ActiveX is installed
	var geckoax=new Object();
	geckoax.installed=false;
	var isInstalled=false;
	
	if (navigator.plugins && navigator.plugins.length)
	{
		for (x=0; x<navigator.plugins.length; x++)
		{
			if (navigator.plugins[x].name.indexOf('ActiveX') != -1 && window.GeckoActiveXObject) {
				geckoax.installed=true;
			}
		}
	}
		
	if (window.ActiveXObject || geckoax.installed){
		isInstalled=true;
	} else {
		isInstalled=false;
	}

	return isInstalled;
}

function firefoxXInstall() {

	var versionindex 	= 	navigator.userAgent.indexOf("Firefox")+8;
	var version 		= 	navigator.userAgent.substring(versionindex,(versionindex+3));
	var fullversion 	=   navigator.userAgent.substring(versionindex,(versionindex+7))
	
	fn="display_error_browser";
	detectState="firefox"; 
	
	if (version == "1.5") {
 		fn = "display_error_firefox_1.5";
	} else {
		fn = "display_error_firefox";
	}
	return {detectState: detectState, fn : fn, version:version, fullversion:fullversion};	
}

function hasWMP9(){

	var wm_player;

	try {
		if (window.ActiveXObject) {
			wm_player = new ActiveXObject("WMPlayer.OCX.7");
		} else if (window.GeckoActiveXObject) {
			wm_player = new GeckoActiveXObject("WMPlayer.OCX.7");
		}
      if (wm_player && parseInt(wm_player.versionInfo) >= 9) {
         return true;
      } else {
         return false;
      }
	} catch(e) { return false; }

}

function hasIE55plus(){

   var version=0;
   if (navigator.appVersion.indexOf("MSIE")!=-1){
      temp=navigator.appVersion.split("MSIE");
      version=parseFloat(temp[1]);
   }
   if (version >= 5.5) {
      return true;
   } else {
      return false;
   }
}
