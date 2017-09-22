/*
 * @description	Opens the sitewide flipbook player. 
 * @param	Flipbook ID or URL. 
 * @param Object, used to customize the flipbook skin and values.
 */

function popFlip(fbKey, obj){
	//var fbKey = arguments[0];
	//var fbArgs = "";
	//var args = (arguments[1] == undefined) ? "" : arguments[1];

	var fbArgs = "";
	for (var p in obj){
		fbArgs += "&" + p + "=" + obj[p];
	}
	
	
	fbArgs += '&adPath=' + mep1;
	
	if (fbKey.indexOf("fid=")>=0) {
		// new flip pop, old w=556, h=486 
		window.open('/sitewide/apps/flipbook/index.jhtml?'+fbKey+fbArgs,'flipbook','width=720,height=540,scrollbars=no');
	}
	else {
		var flipLoc  = fbKey.split("?");
		flipLocPath  = flipLoc[0].split("index.jhtml");
		var flipLocFull  =  flipLocPath[0];
		if (flipLoc[1] != "" && flipLoc[1] != null) flipLocFull += "&" + flipLoc[1];
		window.open('/sitewide/apps/flipbook/index.jhtml?pf='+flipLocFull+fbArgs+'','flipbook','width=720,height=540,scrollbars=no');
	}
}

function popFlipById(id) {
    popFlip('fid='+id);
}

function popFlipMedia(fid, mid){
	window.open('/sitewide/flipbooks/player/index.jhtml?flipbookType=&flipbookid=' + fid + '&mid=' + mid,'flipbook' + fid,'width=720,height=540,scrollbars=no');
}

function popMovieFlipMedia(fid, mid){

	window.open('/sitewide/apps/flipbook/index.jhtml?skin=skins/movies_flipbook.swf&fid=' + fid + '&mid=' + mid,'flipbook' + fid,'width=720,height=540,scrollbars=no');
}