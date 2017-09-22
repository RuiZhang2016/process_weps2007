//
// $Id: bringupPlayer.js,v 1.5 2006/12/11 18:38:21 daver Exp $
// $Source: /bbsrc/web/docs/en/jscommon/bringupPlayer.js,v $
//

function convertAllFields() {
	document.searchbox.query.value = document.searchbox.query.value.toLowerCase()
}

function bringupPlayer( args, Title ) {
	var width = "853";
	var height = "470";
	var url_audio = "/audioplayers/playr_go.html?";

	if (Title) {
		var url_media = "/avp/avp.htm?T=" + Title + "&clipSRC=";
	}else{
		var url_media = "/avp/avp.htm?clipSRC=";
		Title = "Bloomberg News";
	}

	var url;
	var windowid = "videoplayer";
	if( args.match( /A=/ ) != null || args.match( /clip=/ ) != null ) { 
		// RealAudio
		width = 357;
		height = 488;
		url = url_audio + args + "&clipName=" + Title;
		windowid = "audioplayer";
	}
	else if( args.match( /vid=/ ) == null ) {
		url = url_media + args;
	}else{
		var clipID = args.split("=");
		url = url_media + "mms://media2.bloomberg.com/cache/" + clipID[1] + ".asf";
	}
	var pwin = window.open( url, windowid, 
			"directories=no,location=no,menubar=no,resizable=no," +
			"scrollbars=no,status=no,toolbar=no,width=" + width + 
			",height=" + height ); 
	pwin.focus();
}

function audioPlayer(args) {
	var url="http://www.bloomberg.com/audioplayers/playr_go.html?" + args;
	window.open(url, "","fullscreen=no,toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,directories=no,location=no,width=357,height=488")
}


