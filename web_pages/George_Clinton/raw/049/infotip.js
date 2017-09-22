// infotip.js v. 1.0
// author: Timothy King, timothy.king@bmgch.com
// Library for displaying informational DHTML popups.
// Requires ajaxlib.js
//

var zindex = 1000;
var myhandle;
var ua = navigator.userAgent.toLowerCase();
var isIe = ua.indexOf("msie") > -1; //some lite browser detection
var isIe5 = ua.indexOf("msie 5.0") > -1; //ie 5+
var isIeMac = (ua.match(/.*mac.*/) != null && isIe); //for our special cases
var isSafari = (ua.match(/.*safari.*/) != null);
var clicktip;
var doShow;
var doHide;
var revealer;

// These are the main functions for creating a clicktip
// loadXMLDoc is an AJAX function that retrieves the XML document specified in the url arg
// XML doc's onLoad fires the parser then calls the user-defined callback ('doit'),
// which eventually calls turnon_inftip

function showInfo(handle, url) {
  document.body.onclick = function() { };
  //check to see if the clicktip content node exists on the page
  ccontent = document.getElementById("infotip_content");
  //if not, link to the href of the handle
  if (!ccontent && handle) {
    window.location = handle.href;
    return;
  }
  if (handle) {
    handle.className = 'blockmini_loading';
  }
  myhandle = handle;
  doShow = showMini;
  doHide = hideMini;
  loadXMLDoc(url, doit, true);
}

function showInfoOrPopup(handle, url, anchor, width, height) {
  document.body.onclick = function() { };
  //check to see if the clicktip content node exists on the page
  ccontent = document.getElementById("infotip_content");
  //if not, open a popup
  if (!ccontent || isIe5) {
    newwin = openWin(anchor.href, width, height, '');
    return;
  }
  myhandle = handle;
  doShow = showInfotip;
  doHide = hideInfotip;
  try {
    loadXMLDoc(url, doit, true);
  } catch (error) {
    openWin(anchor.href, width, height, '');
  }
}

// These are callback functions

function turnoff_infotip (handle) {
  if (handle) {
    myhandle = handle;
    if (clicktip) {
      if (obj = document.getElementById('ct_pt_tracks')) {
        //scrollbar has issues when clipped; hide it before reveal
        obj.style.display = 'none';
      }
      //avoid reload issue on IE (caused by using back/forward buttons)
      if (clicktip.ctheight > 0) {
        doHide();
      } else {
        afterhide();
      }
    }
  }
  myhandle = null;
}

function turnon_infotip (handle) {
  if (handle) {
    myhandle = handle;
    clicktip = new infoTip(myhandle);
    var topmargin = (isIe || isSafari) ? 10 : 15;
    var rightmargin = (isIe || isSafari) ? 10 : 30;
    var bottommargin = (isIe || isSafari) ? 10 : 15;
    var leftmargin = (isIe || isSafari) ? 10 : 25;
    if (clicktip) {
      drawShadow();
      clicktip.position(-22, -62, topmargin, rightmargin, bottommargin, leftmargin);
      doShow();
    }
  }
}

// Main XML onLoad callback
// This is lazy AJAX.  The XML doc returned contains complete HTML content within a single node named
// "content", which is parsed below.  The contents of the XML node named "content" are then stuffed into
// the innerHTML property of the reserved element in the page footer -- a DIV named "infotip_content", which
// is inside a DIV named "clicktip".  The clicktip is then drawn, positioned and displayed by turnon_infotip.

function doit() {
  var ccontent;
  var result;
  if (ccontent = document.getElementById("infotip_content")) {
    if (result = resultXML.getElementsByTagName("content")) {
      if (result.length > 0 ) {
        ccontent.innerHTML = resultXML.getElementsByTagName("content")[0].childNodes[0].nodeValue;
        turnon_infotip(myhandle);
        if (myhandle) {
          myhandle.className = 'blockmini';
        }
      } else {
        document.location = myhandle.href;
      }
    } else {
      document.location = myhandle.href;
    }
  }
}


// Constructor for a new infoTip

function infoTip(myhandle) {
  var ct = document.getElementById('clicktip');
  this.ct = ct;
  if (ct) {
    /* show it to get dimensions */
    ct.style.left = '-10000px';
    ct.style.top = '0';
    ct.style.display = 'block';
    ct.style.zIndex = zindex++;

    /* init some stuff for positioning */
    this.ctheight = ct.offsetHeight;
    this.ctwidth = ct.offsetWidth;
    this.handlewidth = myhandle.offsetWidth;
    this.handleheight = (myhandle.offsetHeight) ? myhandle.offsetHeight : 1;
    this.handletop = getElementPosition(myhandle).y;
    this.handleleft = getElementPosition(myhandle).x;
    this.bodyheight = getWindowDimensions(ct).height;
    this.bodywidth = getWindowDimensions(ct).width;
    this.position = positionInfoTip;

    /* set onclick for document; hide infotip onclick */
    /* timout helps avoid click stack issues on IE */
    ct.onclick = function() {
      document.body.onclick = function() {};
      var clearer = setTimeout(setbodyclear, 100);
    };
    var clearer = setTimeout(setbodyclear, 10);

    /* now if you're in IE, you get an iframe */
    /* this covers SELECTs, which peek through otherwise */
    if (isIe && !isIeMac) {
      var newNode = document.getElementById('bg_iframe');
      //check to see if it exists; sometimes it's not removed by turn_off
      if (!newNode) {
        newNode = document.createElement('IFRAME'); //dynamically build an iframe
      }
      newNode.id = 'bg_iframe'; //name it
      newNode.src = '/px.gif';
      newNode.style.height = this.ctheight + 'px';
      newNode.style.width = this.ctwidth + 'px';
      newNode.className = 'ct_iframe';
      newNode.style.zIndex-=1; //puts it beneath the mini
      ct.appendChild(newNode); //attach it to the ct (the DL)
    }
  }
}

/* positions the infotip relative to the handle */
function positionInfoTip(left, top, topmargin, rightmargin, bottommargin, leftmargin ) {
  var leftpos = this.handleleft + left;
  var toppos = this.handletop + top;

  /* if the tip is outside the viewable page, correct it */
  /* outside right margin */
  var maxwidth = document.body.scrollLeft + this.bodywidth;
  diff = (this.ctwidth + leftpos) - (document.body.scrollLeft + this.bodywidth) + rightmargin;
  if ( diff > 0) {
    leftpos = document.body.scrollLeft + this.bodywidth - this.ctwidth - rightmargin;
  }

  /* above top of page */
  var diff = document.body.scrollTop - toppos;
  if ( diff > 0 ) {
    toppos = document.body.scrollTop + topmargin;
  }

  /* below bottom of page */
  var diff = (this.ctheight + toppos) - (document.body.scrollTop + this.bodyheight) + bottommargin;
  if ( diff > 0 ) {
    toppos = document.body.scrollTop + this.bodyheight - this.ctheight - bottommargin;
  }

  this.ct.style.left = leftpos + 'px';
  this.ct.style.top = toppos + 'px';
}

/* resize the right middle section of the shadow dynamically */
function drawShadow() {
  shadowr = document.getElementById('shadow_right');
  shadowb = document.getElementById('shadow_bottom');
  if (shadowr && shadowb) {
    var diff = shadowb.offsetTop + shadowr.offsetTop;
    //avoid reload issue on IE (caused by using back/forward buttons)
    if (diff > 0) {
      shadowr.style.height = (diff - 20) + 'px';
    } else {
      turnoff_infotip(myhandle);
    }
  }
}

//clears the infotip when the page is clicked
function setbodyclear() {
  document.body.onclick = function() {
    turnoff_infotip(myhandle);
    this.onclick = function() {};
  };
}

// Show and Hide animation 

// Hides the PT infotip (Album information & Cart messaging)
function hideMini() {
  reveal(
   'clicktip', 10, 10,
    0, clicktip.ctwidth +10, clicktip.ctheight + 10, 0,
    60, 80, 120, 20, afterhide
  );
}

// Shows the PT infotip 
function showMini() {
  reveal(
    'clicktip', 20, 10,
    60, 80, 120, 20,
    0, clicktip.ctwidth + 10, clicktip.ctheight + 10, 0, afterreveal
  );
}

// Hides the PT Details infotip (How PT Works...)
function hideInfotip() {
  reveal(
   'clicktip', 10, 10,
    0, clicktip.ctwidth , clicktip.ctheight + 10, 0,
    0, clicktip.ctwidth + 10, 0, clicktip.ctwidth + 10, afterhide
  );
}

// Shows the PT Details infotip
function showInfotip() {
  reveal(
    'clicktip', 20, 1,
    0, clicktip.ctwidth + 10, 0, clicktip.ctwidth + 10,
    0, clicktip.ctwidth + 10, clicktip.ctheight + 10, 0, afterreveal
  );
}

// Main hide/show clip routine; hides or reveals an element using CSS clip
// Callback function specified in callback argument is fired upon completion
function reveal(id, steps, interval, startTop, startRight, startBottom, startLeft, endTop, endRight, endBottom, endLeft, callback) {
  var obj = document.getElementById(id);
  var bcontinue = 0;
  var startVals = Array(startTop, startRight, startBottom, startLeft);
  var endVals = Array(endTop, endRight, endBottom, endLeft);
  var diffVals = Array(0,0,0,0);

  if (steps > 0 ) {
    for (var i = 0; i < startVals.length; i++) {
      diffVals[i] = startVals[i] - ( (startVals[i] - endVals[i]) / steps);
    }
  }

  if (obj && steps-- > 0 && !isSafari && !isIe5 ) { //safari won't render if clipped
    obj.style.clip="rect("+diffVals[0]+"px "+diffVals[1]+"px "+diffVals[2]+"px "+diffVals[3]+"px)";
    revealer = setTimeout("reveal('"+id+"',"+steps+","+interval+","+diffVals[0]+","+diffVals[1]+","+diffVals[2]+","+diffVals[3]+","+endTop+","+endRight+","+endBottom+","+endLeft+","+callback+")",interval);
  } else {
    clearTimeout(revealer);
    revealer = null;
    if (callback) {
      callback();
    }
  }
}

// Final callback functions
// Ensures complete display or hide after reveal
function afterreveal() {
  if (obj = document.getElementById('ct_pt_tracks')) {
    //scrollbar has issues when clipped; now show it
    obj.style.display = 'block';
  }
}

function afterhide() {
  if (obj = document.getElementById('clicktip')) {
    obj.style.display = 'none';
  }
  if (bg = document.getElementById('bg_iframe') ) {
    //remove the iframe if it exists
    bg.removeNode(true);
  }
}
