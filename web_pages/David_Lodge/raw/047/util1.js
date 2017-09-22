<!-- //
function popupPage(page,ht,wd,scroll) {
    if (window.screen) {
        ah = window.screen.availHeight;
        aw = window.screen.availWidth;
    } else {
        ah = 480;
        aw = 640;
    }
    var h = ht;
    var w = wd;
    winprops = "scrollbars="+scroll+",width=" +w +",height=" +h +",location=no,left=";
    winprops += parseInt(aw-w-35) +",sceenX=" +parseInt(aw-w-35) +",top=0,sceenY=0,menubars=no,toolbars=no,resizable=yes";
    window.open(page,"newPage"+(Math.round((Math.random()*9)+1)),winprops);
}
function pop_n_go (user_key, prev_user_key, searchURL, homeURL) {
    var query=escape(user_key);
    var prev_query=escape(prev_user_key);
    query=query.replace(/\+/g,'%2B');
    prev_query=prev_query.replace(/\+/g,'%2B');
    if(query!=''){
        query='&qt='+query;
        prev_query='&qt='+prev_query;
    }
    if (query!=prev_query || (top.location.href.search(/http:\/\/[^\/]+\/\?/) > -1) && (top.location.href.search(/qt=[^&]+/) > -1)) {
        top.location=searchURL+query;
    } else {
        top.location=homeURL+query;
    }
}
function feedbackCheck(value,max) {
    var over=parseInt(max)+1;
    if ((navigator.appName.indexOf("Netscape") != -1) && 
        (parseInt(navigator.appVersion) < 5)) {
        if (value.length >= over) {
            alert("Please limit your comments to "+max+"  characters");
            document.feedback.HowCanWeImprove.value=value.substring(0,max-1);   
            return true;
        }
    } else if (value.length >= max) {
        document.feedback.HowCanWeImprove.value=value.substring(0,max);
        return true;
    }
}
function openWindowPercent(page, percent, xtraArgs) {	//JS function to open, size and place pop-up windows
	var w = 435, h = 440;		// default sizes
	if (window.screen) {
		w = window.screen.availWidth * (percent * .01);
		h = window.screen.availHeight * (percent * .01);
	}

	window.open(page,'InfoWindow','width='+w+',height='+h+','+xtraArgs);
}
function furl_it(source, title, url) {
    d=document;
    targetURL = '';
    targetTitle = '';
    if (!url) {
        targetURL = d.location.href;
    } else {
        targetURL = url;
    }
    if (!title) {
        targetTitle = d.title;
    } else {
        targetTitle = title;
    }
    t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');
    void(furlit=window.open('http://www.furl.net/storeIt.jsp?t='+escape(targetTitle)+'&u='+escape(targetURL)+'&c='+escape(t)+'&source='+source,'furlit','scrollbars=no,width=475,height=575,left=75,top=20,status=no,resizable=yes'));
    furlit.focus();
}

function sstatus(w) {window.status = w;return true;}
function cstatus() {window.status='';}

// toggles a set of divs from view/hide or expand/collpase mode
// expects the divs to match a naming convention (see below)
function explapse(target) {
    if (state[target] == 0) {
        state[target] = 1;
        document.images[target + "Explapse"].src = "/i/us/btn-bar-cthide.gif";
        document.images[target + "Explapse"].alt = "click to hide";
        document.getElementById(target).style.display = 'block';
    } else {
        state[target] = 0;
        document.images[target + "Explapse"].src = "/i/us/btn-bar-ctview.gif";
        document.images[target + "Explapse"].alt = "click to view";
        document.getElementById(target).style.display = 'none';
    }
}

function explapseEdu(target) {
    if (state[target] == 0) {
        state[target] = 1;
        document.images[target + "ExplapseEdu"].src = "/i/us/btn-cat-edu-on.gif";
        document.images[target + "ExplapseEdu"].alt = "click to hide";
        document.getElementById(target).style.display = 'block';
		document.getElementById("money").style.display = 'none';
		document.images["moneyExplapseMon"].src = "/i/us/btn-cat-mon-off.gif";
        document.images["moneyExplapseMon"].alt = "click to view";
		state["money"] = 0;
    } else {
        state[target] = 0;
        document.images[target + "ExplapseEdu"].src = "/i/us/btn-cat-edu-off.gif";
        document.images[target + "ExplapseEdu"].alt = "click to view";
        document.getElementById(target).style.display = 'none';
    }
}

function explapseMon(target) {
    if (state[target] == 0) {
        state[target] = 1;
        document.images[target + "ExplapseMon"].src = "/i/us/btn-cat-mon-on.gif";
        document.images[target + "ExplapseMon"].alt = "click to hide";
        document.getElementById(target).style.display = 'block';
		document.getElementById("education").style.display = 'none';
		document.images["educationExplapseEdu"].src = "/i/us/btn-cat-edu-off.gif";
        document.images["educationExplapseEdu"].alt = "click to view";
		state["education"] = 0;
    } else {
        state[target] = 0;
        document.images[target + "ExplapseMon"].src = "/i/us/btn-cat-mon-off.gif";
        document.images[target + "ExplapseMon"].alt = "click to view";
        document.getElementById(target).style.display = 'none';
    }
}

function rerouteQuery(user_query, tab) {
    //alert("received:" + user_query + " tab: " + tab);
    if (user_query == undefined || user_query == '') {return false;}
    if(tab && tab == 'art') {
        // escape users query term
        var query=escape(user_query);
        //alert("using:" + query);
        query=query.replace(/\+/g,'%2B');
        location.href = "http://www.findarticles.com/p/search?tb=art&qt=" + query;
        return false;
    } else {
        return true;
    }
}

function isImageQuery(target, user_query) {

    if (target == 'images') {
        var query=escape(user_query);
        query=query.replace(/\+/g,'%2B');
        location.href = "/p/search?qt=" + query + "&sb=image&qta=1";
        return false;
    } else {
        return true;
    }
}

// -->
