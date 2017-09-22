var parentWindowVar		= "purl=";
var detectSuccessUrl 	= "/vspot/player.jhtml";
var detectFailUrl 		= "/vspot/index.jhtml";
var detectFailUrlWin 	= "/vspot/player_detect.jhtml";
var winWidth 			= "750";
var winHeight 			= "555";

function launchVspot() {
	
	var arg = "";
	
	if (arguments.length > 0) {
	
		detectFailUrl += "?";
	
		for (var i = 0; i < arguments.length; i++) {

				if (i == 0) detectFailUrl += arguments[i];
				if (i != 0) {
					arg += ", ";
					detectFailUrl += ("&" + arguments[i]);
				}
				arg += ("'" + arguments[i] + "'");
			}
		}	

	eval("launchOverdrive(" + arg + ")");
}