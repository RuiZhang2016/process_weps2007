
// this handles the homepage picture of the day

function popNav(url,name,features) {
   if ((browser == "ns3","ns4") || (browser == "ie4")) {
   popBox = window.open(url,name,features);
   popBox.focus();
     } else {
          if (browser == "ie3") {
          popBox = window.open(url,name,features);
          }  
   }
}


// this function is used to redirect the search on the main page
// to looksmart if its an internet search  -- SG
function validate( tform ) {
	var site;
	
	if ( tform.sites.options ) {		//	"sites" should be a select
		site = tform.sites.options[tform.sites.selectedIndex].value;
	} else {
	if (tform.sites) {site =tform.sites.value;}
	else {return true;}						//	error, but don't show the user
	}
	
	switch ( site.toLowerCase() ) {
		case "internet":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcb';
			return true;
		
		case "cnnsi":
			tform.action = "http://search.cnnsi.com/query.html";
			tform.qp.value = "url:http://www.cnnsi.com/";
			tform.col.value = 'cnnsi';
			return true;
		case "cnnfn":
			tform.action = "http://search.cnnfn.com/query.html";
			tform.col.value = 'cnnfn';
			return true;
		
		case "cnn":
			tform.action = "http://search.cnn.com:80/query.html";
			tform.col.value = 'cnni';
			return true;
		
		
		case "cnnfyi":
			tform.action = "http://search.cnn.com:80/query.html";
			tform.col.value = 'cnni';
			tform.qp.value = 'url:/fyi/';
			//tform.rq.value = '2';
			return true;
		
		case "cnnlaw":
			tform.action = "http://search.cnn.com:80/query.html";
			tform.col.value = 'cnni';
			tform.qp.value = 'url:/LAW/';
			//tform.rq.value = '2';
			return true;
		
		case "time":
			tform.keyword.value = tform.qt.value;
			tform.action = "http://www.pathfinder.com/time/daily/searchresults/1,2645,,00.html";
			tform.col.value = 'time';
			//tform.rq.value = '2';
			return true;
		
		default:
			return true;						//	unsupported site
	}
}




// this will open a new window, submit the poll form, and send the results to the popup window
function pollSubPop (earl, name, widgets, specialsURL) {
        host = location.hostname;
        if (host.indexOf('customnews') != -1) {
                var url = 'http://customnews.cnn.com' + earl;
        } else {
                var url = earl;
        }
        popupWin = window.open(url, name, widgets);
        popupWin.opener.top.name = "opener";
        popupWin.focus();
}

// this is for opening pop-up windows
function openWindow (earl,name,widgets) {
	host = location.hostname;
	if (host.indexOf('customnews') != -1) {
		var url = 'http://customnews.cnn.com' + earl;
		} else {
			var url = earl;
			}
	popupWin = window.open (url,name,widgets);
	popupWin.opener.top.name="opener";
	popupWin.focus();
	}

// sk
// This allows you to redirect the main browser window to a new URL when launching a popup
function jumpLink( earl, name, widgets, specialsURL ) {
	host = location.hostname;
	if ( host.indexOf( 'customnews' ) != -1 ) {
		var url = 'http://customnews.cnn.com' + earl;
	} else {
		var url = earl;
	}
	popupWin = window.open( url, name, widgets );
	popupWin.opener.location = specialsURL;
	popupWin.opener.top.name = "opener";
	popupWin.focus();
}

function closeWindow () {
	parent.close ();
	}

function goTW(){
    var URL = document.pathfinder.site.options[document.pathfinder.site.selectedIndex].value;
    window.location.href = URL;
}




// tg	
function livevideo (url,streamtitle,customfeatures) {
windowFeatures = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=215,height=500';

//Browser Detection
var browser = "";
var browsername = navigator.appName;
var browserversion = parseInt(navigator.appVersion);
if (browsername == "Netscape") {
    browser = "ns" + browserversion;
} else {
    if (browsername == "Microsoft Internet Explorer") {
        if (browserversion >= 4) {
            browser = "ie" + browserversion;
        } else {
            browser = "ie3";
        }
    }
}

//if (customfeatures != '') {
//	windowFeatures = customfeatures;
//}

if (url.indexOf("real") != -1) {
	if (browser != 'ie3') {
		hasplugin = 'false';
		numPlugins = navigator.plugins.length;
		for (i = 0; i < numPlugins; i++) {
			plugin = navigator.plugins[i];
			if (plugin.name.substring(0,10)=="RealPlayer") {
				hasplugin = 'true';
			}
		}
		if (browser.substring(0,2) == 'ie') {
			hasplugin = 'true';
		}
		if (hasplugin == 'true') {
			videoWin = window.open (url , 'video', windowFeatures);
			if (streamtitle != '') {
   		 		videoWin.streamtitle=streamtitle;
   		 	}
   		 	videoWin.document.close();		
		} else {
		stream = url.charAt((url.length-6))
		location.href='/video/live/live' + stream + '.rm28.ram';
		}
	} else {
		videoWin = window.open (url , 'video', windowFeatures);
		if (document.images) {
			if (streamtitle != '') {
   				videoWin.streamtitle=streamtitle;
   			 }
   		}
   		videoWin.document.close();			
	}		
} else {
	videoWin = window.open (url , 'video', windowFeatures);
	if (document.images) {
		if (streamtitle != '') {
	    	videoWin.streamtitle=streamtitle;
	    }
	}
    videoWin.document.close();
}
}

//tg

function vod (url,streamtitle,customfeatures) {
windowFeatures = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=210,height=480';

//Browser Detection
var browser = "";
var browsername = navigator.appName;
var browserversion = parseInt(navigator.appVersion);
var browserplatform = navigator.userAgent;
if (browsername == "Netscape") {
    browser = "ns" + browserversion;
} else {
    if (browsername == "Microsoft Internet Explorer") {
        if (browserversion >= 4) {
            browser = "ie" + browserversion;
        } else {
            browser = "ie3";
        }
    }
}

if ((customfeatures) && customfeatures != '') {
	windowFeatures = customfeatures;
}


if (url.indexOf(".rm",(url.length-10)) != -1) {
	if (browser != 'ie3') {
		hasplugin = 'false';
		if ( (browserplatform.indexOf('Mac') !=-1) && ( browsername != "Netscape") )  {
			numPlugins = 0;
			for (i = 0; i < numPlugins; i++) {
				plugin = navigator.embeds[i];
				if (plugin.name.substring(0,10)=="RealPlayer") {
					hasplugin = 'true';
				}
			}
		} else {
			numPlugins = navigator.plugins.length;
			for (i = 0; i < numPlugins; i++) {
				plugin = navigator.plugins[i];
				if (plugin.name.substring(0,10)=="RealPlayer") {
					hasplugin = 'true';
				}
			}
		}
		if (browser.substring(0,2) == 'ie') {
			hasplugin = 'true';
		}
		if (hasplugin == 'true') {
			videoWin = window.open (url , 'video', windowFeatures);
			if (streamtitle != '') {
   		 		videoWin.streamtitle=streamtitle;
   		 	}
  		 	videoWin.document.close();		
		} else {
		stream = url.substring(0,(url.length-5));
		location.href=stream + '.ram';
		}
	} else {
		videoWin = window.open (url , 'video', windowFeatures);
		if (document.images) {
			if (streamtitle != '') {
   				videoWin.streamtitle=streamtitle;
   			 }
   		}
   		videoWin.document.close();			
	}		
} else {
	videoWin = window.open (url , 'video', windowFeatures);
	if (document.images) {
		if (streamtitle != '') {
	    	videoWin.streamtitle=streamtitle;
	    }
	}
    videoWin.document.close();
}
}

