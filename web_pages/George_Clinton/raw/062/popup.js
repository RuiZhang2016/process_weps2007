// Popup Window

var newwin;

function launchwin(winurl,winname,winfeatures)
{
	//This launches a new window and then focuses it if window.focus() is supported.
	newwin = window.open(winurl,winname,winfeatures);
	if(javascript_version > 1.0)
	{
		//delay a bit here because IE4 encounters errors when trying to focus a recently opened window
 		setTimeout('newwin.focus();',125);
	}
}

function openPopup(sUrl,sName,sW,sH) {
  newWin = window.open(sUrl,sName,'toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=' +sW+ ',height=' +sH );
  setTimeout('newWin.focus();',125);
}

function openPreviewRealtone(cat, id) {
  newwin = window.open('/ringtone/realtone.do?action=preview&nowishlist=1&cat='+cat+'&id='+id, 'openpreview','location=0,resizable=0,toolbar=0,scrollbars=0,status=0,menubar=0,width=370,height=250');
  newwin.focus();
}

function openPreview(cat,view,id){
	var newwin;
	//6-Realtone
	if (view == 6){
		newwin = window.open('/ringtone/realtone.do?action=preview&cat='+cat+'&id='+id, 'openpreview','location=0,resizable=0,toolbar=0,scrollbars=0,status=0,menubar=0,width=370,height=250');
	}
	//1-Polytones
	if (view == 1){
		newwin = window.open('/ringtone/home.do?action=preview&cat='+cat+'&id='+id, 'openpreview','location=0,resizable=0,toolbar=0,scrollbars=0,menubar=0,width=370,height=250');
	}
	//2-Wallpapers
	if (view == 2){
		newwin = window.open('/graphic/home.do?action=preview&cat='+cat+'&id='+id, 'openpreview','location=0,resizable=0,toolbar=0,scrollbars=0,menubar=0,width=370,height=250');
	}
	//4-Animations
	if (view == 4){
		newwin = window.open('/graphic/animation.do?action=preview&cat='+cat+'&id='+id, 'openpreview','location=0,resizable=0,toolbar=0,scrollbars=0,menubar=0,width=370,height=250');
	}
	newwin.focus();
}

function openShare(cat,view,id){
	var newwin;
	newwin = window.open('/share/share.do?cat='+cat+'&viewId='+view+'&id='+id,'openshare', 'location=0,resizable=yes,toolbar=0,scrollbars=auto,menubar=0,width=375,height=390');
	newwin.focus();
}
function openSupportedHandsets(cat,view,id){
	var newwin;
	newwin = window.open('/games/supportedhandsets.do?cat='+cat+'&viewId='+view+'&id='+id,'supportedhs', 'location=0,resizable=yes,toolbar=0,scrollbars=auto,menubar=0,width=375,height=500');
	newwin.focus();
}
function openShareFlash(url){
	var newwin;
	newwin = window.open(url,'openshare',	'location=0,resizable=yes,toolbar=0,scrollbars=auto,menubar=0,width=375,height=390');
	newwin.focus();
}

function openRating(url){
	var newwin;
	newwin = window.open(url,'openrating','status=0,location=0,resizable=0,toolbar=0,scrollbars=auto,menubar=0,width=485,height=295');
	newwin.focus();
}

