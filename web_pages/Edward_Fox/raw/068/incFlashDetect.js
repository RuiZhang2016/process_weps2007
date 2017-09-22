/*
Plugin Detector()

Source: Webmonkey Code Library
(http://www.hotwired.com/webmonkey/javascript/code_library/)

Author: Nadav Savio
Author Email: webmonkey@giantant.com

*/

var blnHasFlash
window.onerror = handleError

// this is where we write out the VBScript for MSIE Windows
var WM_startTagFix = '</';
var msie_windows = 0;
if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1)){
  msie_windows = 1;
  document.writeln('<scri' + 'pt language="VBscript">');
  document.writeln('\'This will scan for plugins for all versions of Internet Explorer that have a VBscript engine version 2 or greater.');
  document.writeln('\'This includes all versions of IE4 and beyond and some versions of IE 3.');
  document.writeln('Dim WM_detect_through_vb');
  document.writeln('WM_detect_through_vb = 0');
  document.writeln('If ScriptEngineMajorVersion >= 2 then');
  document.writeln('  WM_detect_through_vb = 1');
  document.writeln('End If');
  document.writeln('Function WM_activeXDetect(activeXname)');
  document.writeln('  on error resume next');
  document.writeln('  If ScriptEngineMajorVersion >= 2 then');
  document.writeln('     WM_activeXDetect = False');
  document.writeln('     WM_activeXDetect = IsObject(CreateObject(activeXname))');
  document.writeln('     If (err) then');
  document.writeln('        WM_activeXDetect = False');
  document.writeln('     End If');
  document.writeln('   Else');
  document.writeln('     WM_activeXDetect = False');
  document.writeln('   End If');
  document.writeln('End Function');
  document.writeln(WM_startTagFix + 'scri' + 'pt>');
}

function WM_pluginDetect(plugindescription, pluginxtension, pluginmime, activeXname){

  //This script block will test all user agents that have a real plug-in array

  //(i.e. Netscape) and set the variables, otherwise it directs the routine

  // to WM_activeXDetect to detect the activeX control.

  

  // First define some variables
  var i,plugin_undetectable=0,detected=0, daPlugin=new Object();


  // Then we check to see if it's an MSIE browser that you can actually

  // check for the plugin in question. 

  if (msie_windows && WM_detect_through_vb){
      plugin_undetectable = 0;
  } else {
      plugin_undetectable = 1;
  }



  // If it has a real plugins or mimetypes array, we look there for the plugin first

  if(navigator.plugins) {
      numPlugins = navigator.plugins.length;
      if (numPlugins > 1) {
	  if (navigator.mimeTypes && navigator.mimeTypes[pluginmime] && navigator.mimeTypes[pluginmime].enabledPlugin && (navigator.mimeTypes[pluginmime].suffixes.indexOf(pluginxtension) != -1)) { // seems like we have it, let's just make sure and check the version (if specified)
	      if ((navigator.appName == 'Netscape') && (navigator.appVersion.indexOf('4.0') != -1)) { // stupid, stupid Netscape can't handle the references to navigator.plugins by number, sooo...
		  for(i in navigator.plugins) {
		      if ((navigator.plugins[i].description.indexOf(plugindescription) != -1) || (i.indexOf(plugindescription) != -1)) { // some versions of quicktime have no description. feh!
			  detected=1;
			  break;
		      }
		  }
	      } else {
		  for (i = 0; i < numPlugins; i++) {
		      daPlugin = navigator.plugins[i];
		      if ((daPlugin.description.indexOf(plugindescription) != -1) || (daPlugin.name.indexOf(plugindescription) != -1)) {
			  detected=1;
			  break;
		      }
		  }
	      }

	      // Mac weirdness
      if (navigator.mimeTypes[pluginmime] == null) {
		  detected = 0;
	      }
	  }
	  else if (parseInt(navigator.appVersion) > 4) { // handle netscape 6 and above
	  		for (var i = 0; i < numPlugins; i++) {
				if ((navigator.plugins[i].description.indexOf(plugindescription) != -1)) { // some versions of quicktime have no description. feh!
			  		detected=1;
			  		break;
				}
			}
	  }
	  return detected;
      } else if((msie_windows == 1) && !plugin_undetectable){
	  return WM_activeXDetect(activeXname);
      } else { 		
	  return 0;
      }
  } else {
      return 0;
  }
}


// this next function just makes it easy to detect the common plugins

function WM_easyDetect(whichPlugin) {

    // this function just makes it easy to do basic plug-in detection without

    // knowing all the mimetypes and activeX names and such
    var isItThere = 0;
    if( (whichPlugin == 'flash') || (whichPlugin == 'Flash') ) {
	isItThere = WM_pluginDetect('Flash', 'swf', 'application/x-shockwave-flash', 'ShockwaveFlash.ShockwaveFlash');
    } else if( (whichPlugin == 'director') || (whichPlugin == 'Director') ) {
	isItThere = WM_pluginDetect('Shockwave', 'dcr', 'application/x-director', 'SWCtl.SWCtl.1');
    } else if( (whichPlugin == 'quicktime') || (whichPlugin == 'Quicktime') || (whichPlugin == 'QuickTime') ) {
	isItThere = WM_pluginDetect('QuickTime', 'mov', 'video/quicktime', '');
    } else if( (whichPlugin == 'realaudio') || (whichPlugin == 'Realaudio') || (whichPlugin == 'RealAudio') ) {
	isItThere = (WM_pluginDetect('RealPlayer', 'rpm', 'audio/x-pn-realaudio-plugin', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)')) || (WM_pluginDetect('RealPlayer', 'rpm', 'audio/x-pn-realaudio-plugin','rmocx.RealPlayer G2 Control')) || (WM_pluginDetect('RealPlayer', 'rpm', 'audio/x-pn-realaudio-plugin','RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)')) || (WM_pluginDetect('RealPlayer', 'rpm', 'audio/x-pn-realaudio-plugin','RealVideo.RealVideo(tm) ActiveX Control (32-bit)'))
    } else {

	alert('You need to tell me which plug-in to look for, like so:\n\n' + '          WM_easyDetect(\'flash\')\n\n' + '          WM_easyDetect(\'director\')\n\n' + '          WM_easyDetect(\'quicktime\')\n\n' + '          WM_easyDetect(\'realaudio\')');
    }
    return isItThere;
}






// ===============================================================================
// Call the detect
// ===============================================================================


if(WM_pluginDetect('Flash 4', 'swf','application/x-shockwave-flash','ShockwaveFlash.ShockwaveFlash.4')) {
	blnHasFlash = true
} else if(WM_pluginDetect('Flash 3', 'swf','application/x-shockwave-flash', 'ShockwaveFlash.ShockwaveFlash.3')) {
    blnHasFlash = false
} else {
    blnHasFlash = false
}

function handleError(strMsg, strURL, intLineNo) {
	blnHasFlash = false
	return true
}

