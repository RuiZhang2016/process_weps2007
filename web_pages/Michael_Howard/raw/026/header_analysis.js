//$Id: header_analysis.js,v 1.9 2006/11/24 16:24:06 pdwivedi Exp $
//$Source: /bbsrc/web/docs/en/jscommon/header_analysis.js,v $
//$Revision: 1.9 $

function weblogin() {
	var id = "log";
	var LText = '<a href="http://www.bloomberg.com/subscriber"><img src="http://images.bloomberg.com/r06/homepage/login_reg_blk.gif" border="0"></A>';
	var uname="USID";

	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		var l = 0;
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(uname) == 0) {
				var user = c.split(':');
				var username = user[0].split('=');
				LText = '<a href="http://www.bloomberg.com/subscriber/logout.html"><img src="http://images.bloomberg.com/r06/homepage/log_out_blk.gif" border="0"></A>';
		}
	}
	var el = (document.getElementById) ? document.getElementById(id) : (document.all) ? document.all[id] : (document.layers) ? document.layers[id] : null;

	if (typeof el.innerHTML!="undefined") {
		el.innerHTML = LText;
	} else if (document.layers) {
		el.document.write(LText);
		el.document.close();
	}
}

function redirect() {
	window.location = "http://www.bloomberg.com" ;
}

function logout() {
	var uname="USID";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(uname) == 0) {
				var ex = c + "; expires=Sun, 4 Jan 1970 12:00:00 UTC; path=/; domain=.bloomberg.com ";
				document.cookie = ex;
		}
	}
	setTimeout('redirect()',3000); 
}

function setResearch() {
	var cur_sec = getCookie('CUR_SEC');
	var argv = setResearch.arguments;
	var argc = argv.length;
	var offset = 0;
	var maxlen = 20;

	if (typeof argv[0] != "undefined") {
		cur_sec = argv[0].toUpperCase();
		offset=cur_sec.indexOf(':');
		if (offset > 0) {
			exch = cur_sec.substr(offset+1,maxlen);
			for (ii=0; ii < document.quotesresearch.myexch.options.length; ii++) {
				if (exch == document.quotesresearch.myexch.options[ii].value )
					cur_sec = cur_sec.substr(0,offset + 1) + ii;
			}
		}
		document.cookie='CUR_SEC=' + cur_sec + '; domain=bloomberg.com; path=/';
	}
	if (typeof cur_sec != "undefined" && document.quotesresearch) {
		offset=cur_sec.indexOf(':');
		if (offset > 0) {
			document.quotesresearch.myticker.value=cur_sec.substr(0,offset); 
			document.quotesresearch.myexch.selectedIndex=cur_sec.substr(offset+1,maxlen);
		}else
			document.quotesresearch.myticker.value=cur_sec;
	}
}

function getResearch() {
	var ticker = document.quotesresearch.myticker.value;
	var exch = document.quotesresearch.myexch.value;
	var url;

	// Get the radio button thats checked, place value in 'selection'
	for (var ii=0; ii < document.quotesresearch.research.length; ii++) {
		if (document.quotesresearch.research[ii].checked)
			var selection = document.quotesresearch.research[ii].value;
	}
	doNextPg(ticker, exch, selection);
}

function doNextPg(tkr, exch, select) {
	var select=(select==null) ? 'quote': select;

	// This calls the standard ticker validation for the site.
	if( !isvalidticker( tkr ) ) {
		alert( "Please enter a ticker symbol.");
		document.quotesresearch.myticker.focus();
		return false;
	}
	var sel_opt = document.quotesresearch.myexch.selectedIndex;
	document.cookie='CUR_SEC=' + tkr.toUpperCase() + ':' + sel_opt + '; domain=bloomberg.com; path=/';

	switch (select) {  
	case 'quote' :  
		{ url = 'http://www.bloomberg.com/apps/quote?ticker=' + tkr + ":" + exch; }
		break;
	case 'charts' :  
		{ url = 'http://www.bloomberg.com/apps/cbuilder?ticker1=' + tkr + ':' + exch; }
		break;
	case 'news' :  
		{ url = 'http://www.bloomberg.com/apps/news?pid=conews&tkr='+ tkr + ':' + exch; }
		break;
 	default :  
		{ url = 0; }  
 	} 
	window.location.href = url;
	return true;
}


// Search News function to check for input other than spaces
function CheckSearchBox() {
	var sb = document.search.q.value;
	
	if( isblank(sb) == true ) {
		alert( "Please enter a search phrase.");
		document.search.q.focus();
		return false;
	}
}


function qxt() {
	var qxttkr = document.qr.myt.value;
	var qxtexch = document.qr.mye.value;
	var select = 'quote';
	doNextPg(qxttkr, qxtexch, select);
}
