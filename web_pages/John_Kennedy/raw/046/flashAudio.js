flashAudioVolume = 100;

flashAudioSoundOn = com.jitjat.Cookies.defaultCookieHandler.get("flashAudioSoundOn");
if( flashAudioSoundOn == null ) flashAudioSoundOn = true;

function flashAudioWriteTags( flashAudioMP3 ) {
	var flashQs = "mp3="+flashAudioMP3+"&soundOn="+flashAudioSoundOn+"&volume="+flashAudioVolume;
	var flashTags =	'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="81" height="12" id="Audio" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="movie" value="/jfkl/Audio.swf" /><param name="quality" value="high" /><param name="scale" value="noscale" /><param name="wmode" value="transparent" /><param name="bgcolor" value="#50665a" /><param name="FlashVars" value="'
			+ flashQs + '" /><embed src="/jfkl/Audio.swf" flashvars="'
			+ flashQs + '" quality="high" scale="noscale" wmode="transparent" bgcolor="#50665a" width="81" height="12" name="Audio" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
	document.write( flashTags );
}

function flashAudioSetCookie( state ) {
	com.jitjat.Cookies.defaultCookieHandler.set( "flashAudioSoundOn", state );
}

if( window.flashAudioMP3 && hasFlash7 ) {
	flashAudioWriteTags( window.flashAudioMP3 );
} else {
	document.write("&nbsp;");
}
