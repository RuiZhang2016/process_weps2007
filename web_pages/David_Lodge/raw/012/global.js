// cross browser addevent function for use anywhere
// use: addEvent(window, 'load', functionName, false);
function addEvent(obj, evType, fn, useCapture) {
  if (obj.addEventListener) {
    obj.addEventListener(evType, fn, useCapture);
    return true;
  } else if (obj.attachEvent) {
    var r = obj.attachEvent('on' + evType, fn);
    return r;
  } else {
    obj['on' + evType] = fn;
  }
}

// do these when the page loads
function pageInit() {
  hideEmptyAds();
}

// use: <img onerror="hide_broken_img(this)" src="http://broken.com/image.gif" />
function hide_broken_avatar(img) {
  img.src='http://image.com.com/tv/images/avatar.jpg';
}

// hide image if not there
function hide_broken_image(img) {
  img.style.display='none';
}

// opens link in opener window if it's still there
// use <a href="javascript:void(0);" onclick="openerWin('http://www.gamespot.com');">woo!</a>
function openerWin(url) {
  if (top.window.opener) {
    top.window.opener.focus();
    top.window.opener.location.href = url;
  } else {
    newWin = window.open(url);
  }
}

// check to see if you're using safari
function isSafari() {
  var agt=navigator.userAgent.toLowerCase();
  if ((agt.indexOf('safari')!=-1)&&(agt.indexOf('mac')!=-1)) {
    return true;
  } else {
    return false;
  }
}


// msoft activex controls no longer start up 'activated' after april 11/06 (require focus to activate)
// workaround requires object/embed tags to be included in external js
// hence this func (document.write call must be made from externally included .js file)... sb
// note: if 'allow script debugging' is *not* checked in ie settings, you will still get the activiation prompt!
function embed(tag){

    document.write(tag);
}


/** FOR SWITCHING BETWEEN TABS IN MODDULES
 *
 * @param str pod - id of element (module) you're in
 * @param int tab - number of the tab to turn on
 * @param srt tagName - element type of sections (ie. div or table), defaults to div
 */
function toggleTab(pod, tab, tagName) {
	tagName = tagName ? tagName : 'div';
	var module = document.getElementById(pod);
	var divs = module.getElementsByTagName('div');
	for (i=0;i<divs.length;i++) {
		if (divs[i].className == 'head') {
			var tabs = divs[i].getElementsByTagName('li');
		}
	}

	// find all the sections, can pass in tagname if different than div
	var sectionCount = 0;
	var sections = new Array();
	var elements = module.getElementsByTagName(tagName);
	for (i=0;i<elements.length;i++) {
		if (elements[i].className == 'section') {
			sections[sectionCount] = elements[i];
			sectionCount++;
		}
	}

	// turn on your tab
	for (i=0;i<tabs.length;i++) {
		tabs[i].className = tabs[i].className.replace(/on/i,'');
		tabs[i].className = i == tab-1 ? tabs[i].className+' on': tabs[i].className ;
	}

	// turn on your section
	for (i=0;i<sections.length;i++) {
		sections[i].style.display = i == tab-1 ? 'block' : 'none';
	}
}

function uberpop(event,mae_bypass) {
    mae_bypass = mae_bypass ? '&mb=' + mae_bypass : '';
    url = 'index.php?type=48&action=uberpop&event_id=' + event + mae_bypass
    popupWin = window.open(url, 'uberpop_'+event, 'width=710,height=730,resizable=0,scrollbars=0,menubar=0,toolbar=0,location=0,status=0');
    popupWin.focus();
}

// Video Popup
function videoPopup(popupurl,parenturl) {
	popupWin = window.open(popupurl, 'videoWin','width=726,height=678,resizable=no,scrollbars=no,location=0,menubar=0,statusbar=0,toolbar=0');
}
