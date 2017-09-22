
var winHandle = null;

function loadClip(mp3_base_url, id, type, destinationTab, querystring) {

    xml = "<clip><id>" + id + "</id></clip>";

    var windowName = 'mp3_media_player_popup';

    if (winHandle) {
        // if the winHandle variable is set
        if ( winHandle.closed ) {            
            // if they closed the media player and are now re-opening it without navigating to a different page (thus leaving the winHandle intact)
            // then open new player
            winHandle = open( mp3_base_url + '/media_player/' + id + '/' + type + '/viewer.php?ref_id=' + id + '&action=launch_new_media_player' + querystring, windowName, 'toolbar=no,width=780,height=600' );
            winHandle.focus();
        } else {
            // if they are adding tracks with the winHandle intact
            winHandle.document.getElementById("mymovie").addItemsById(xml, destinationTab);
            winHandle.focus();
        }
    } else {
        // our winHandle is not set, but that doesn't necessarily mean that the player is not open yet        
        /*if ( self['mp3_media_player_popup'] == 'undefined') {*/
        winHandle = window.open('', windowName, 'toolbar=no,width=780,height=600');
		
		// god bless safari
		wL = new String(winHandle.location);
		pL = new String(parent.location);
        
		if ((winHandle.location == 'about:blank') || (wL.toLowerCase() == pL.toLowerCase())) { // this solution is bound to break at some point, maybe other browsers have a different default Location (URL)
        // if the window is not open
            winHandle.location = mp3_base_url + '/media_player/' + id + '/' + type + '/viewer.php?ref_id=' + id + '&action=launch_new_media_player' + querystring;
            winHandle.focus();
        } else {
            // if the window is open then add the xml
            winHandle.document.getElementById("mymovie").addItemsById(xml, destinationTab);
            winHandle.focus();
        }
    }

}
