// Window opener functions  v1.0.6
// http://www.dithered.com/javascript/window/index.html
// code by Chris Nott (chris@NOSPAMdithered.com - remove NOSPAM)

/*******************************************************************************
	Popup Window openers
*******************************************************************************/

var winReference = null;

// Open a window at a given position on the screen
function isopenPositionedWindow(url, name, width, height, x, y, status, scrollbars, moreProperties, resizable, openerName) {
	
	// ie 4.5 and 5.0 mac - windows are 2 pixels too short; if a statusbar is used, the window will be an additional 15 pixels short
	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("mac") != -1 && agent.indexOf("msie") != -1 && (agent.indexOf("msie 4") != -1 || agent.indexOf("msie 5.0") != -1) ) {
		height += (status) ? 17 : 2;
	}

	// Adjust width if scrollbars are used (pc places scrollbars inside the content area; mac outside)
	if (agent.indexOf("mac") != -1) {
	width += (scrollbars != '' && scrollbars != null && agent.indexOf("mac") == -1) ? 17 : 0;
	}
	else {
	width += (scrollbars != '' && scrollbars != null && agent.indexOf("mac") == -1) ? 17 : 14;
	}

	var properties = 'width=' + width + ',height=' + height + ',screenX=' + x + ',screenY=' + y + ',left=' + x + ',top=' + y + ((status) ? ',status' : '') + ',scrollbars' + ((scrollbars) ? '' : '=no') + ((moreProperties) ? ',' + moreProperties : '') + ',resizable=' + resizable;
	var reference = isopenWindow(url, name, properties, openerName);
	
	return reference;
}


// Open a window at the center of the screen
function isopenCenteredWindow(url, name, width, height, status, scrollbars, moreProperties, resizable, openerName) {
	var x, y = 0;
	if (screen) {
      x = (screen.availWidth - width) / 2;
	   y = (screen.availHeight - height) / 2;
   }

	if (!status) status = '';
	if (!openerName) openerName = '';
	var reference = isopenPositionedWindow(url, name, width, height, x, y, status, scrollbars, moreProperties, resizable, openerName);
	return reference;
}	

// Open a full-chrome (all GUI elements) window
// This is like using a target="_blank" in a normal link but allows focussing the window
function isopenFullChromeWindow(url, name, openerName) {
	var agent = navigator.userAgent.toLowerCase();
	var ref = isopenWindow(url, name, 'directories,location,menubar,resizable,scrollbars,status,toolbar');
    return ref;
}


// Core utility function that actually creates the window and gives focus to it
function isopenWindow(url, name, properties, openerName) {
   var agent = navigator.userAgent.toLowerCase();

   if (agent.indexOf("win") != -1 && agent.indexOf("aol") !=-1) {
       if (name != null && name.length > 0) {
           var openWinCheck = window.open("about:blank", name, properties);
           if (openWinCheck != null) {
               openWinCheck.close();
           }
        }
    } 

	winReference = window.open(url, name, properties);
	winReference.focus();
//   location.href=url;

	if (openerName) self.name = openerName;
	return winReference;
}

function asppTrack(url){
	location.href=url;
}
