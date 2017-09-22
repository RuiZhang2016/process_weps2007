
// begin NAVDIV code

var n, ie, ns6, mac; // browserCheck variables
var hideLock = 0;
var Y; // mouse Y-position value
var menuPos = 0; // popup menu Y-location
var maxMenuLength = 170; // position on which the mouse position hideAll is based

imgArray = new Array();

function imgAdd(theSrc) {
	imgArray[imgArray.length] = new Image();
	imgArray[(imgArray.length - 1)].src = theSrc;
	}

// *********
function WM_netscapeCssFix() {
  /*
    Source: Webmonkey Code Library
    (http://www.hotwired.com/webmonkey/javascript/code_library/)

    Author: Taylor
    Author Email: taylor@wired.com
    Author URL: http://www.taylor.org/
    */

  // This part was inspired by Matthew_Baird@wayfarer.com
  // It gets around another unfortunate bug whereby Netscape 
  // fires a resize event when the scrollbars pop up. This 
  // checks to make sure that the window's available size 
  // has actually changed.
  if (document.WM.WM_netscapeCssFix.initWindowWidth != window.innerWidth || document.WM.WM_netscapeCssFix.initWindowHeight != window.innerHeight) {
    document.location = document.location;
  }
}

function WM_netscapeCssFixCheckIn() {
  // This function checks to make sure the version of Netscape 
  // in use contains the bug; if so, it records the window's 
  // width and height and sets all resize events to be handled 
  // by the WM_netscapeCssFix() function.
  if ((navigator.appName == 'Netscape') && (parseInt(navigator.appVersion) <= 4)) {
    if (typeof document.WM == 'undefined'){
      document.WM = new Object;
    }
    if (typeof document.WM.WM_scaleFont == 'undefined') {
      document.WM.WM_netscapeCssFix = new Object;
      document.WM.WM_netscapeCssFix.initWindowWidth = window.innerWidth;
      document.WM.WM_netscapeCssFix.initWindowHeight = window.innerHeight;
    }
    window.onresize = WM_netscapeCssFix;
  }
}

WM_netscapeCssFixCheckIn();

// *********

                function init() {
                        browserCheck();
                        hideAll();
                        }
                        
                if(document.layers) document.captureEvents(Event.MOUSEMOVE);
					document.onmousemove=newPos;

					function newPos(e){
						X=(navigator.appName.indexOf("Microsoft")!=-1)?(event.clientX + document.body.scrollLeft):e.pageX;
						Y=(navigator.appName.indexOf("Microsoft")!=-1)?(event.clientY + document.body.scrollTop):e.pageY;
						if (X < (30) || X > (800) || (Y < 86) || Y > (130 + maxMenuLength)) {
							hideAll();
							hideLock = 0;
							}
						}
						
				function linkOn() {
						hideLock=1;
						}
                
                function browserCheck() {
                	if (document.layers) {
                		ns6=0; n=1; ie=0;
                		}
                	else if (document.all) {
                		ns6=0; n=0; ie=1;
                		}
                	else {
                		if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 5) {
                			ns6=1; n=0; ie=0;
                			}
                		}
                	if (navigator.appVersion.indexOf("Macintosh") > -1){
                		mac = 1;
                		}
                	else {
                		mac = 0;
                		}
                	}
                                
                function setIdProperty( id, property, value ) { // used for ns6 actions
	                var styleObject = document.getElementById( id );
	                if (styleObject != null) {
	                    styleObject = styleObject.style;
	                    styleObject[ property ] = value;
	                    }
                    }
                
                function layerOn(divName) {
                        hideAll();
                        if (n) {
                        		menuPos = document.images[divName + 'Trigger'].x;
                        		document.eval(divName).top = 125;
                        		document.eval(divName).left = menuPos;
								document.eval(divName).visibility = "show";
                                }
                        if (ie) {
                        	if (mac) {
                               menuPos = eval(divName + "Trigger").offsetLeft + 140; // measures position from the parent object. IE5+ PC incorrectly references table cell instead of body element
                               }
                              else {
                              	menuPos = eval(divName + "Trigger").offsetLeft + 140; // measures position from the parent object. IE5+ PC incorrectly references table cell instead of body element
                              	}
                                eval(divName).style.top = 125;
                                eval(divName).style.left = menuPos;
                                eval(divName).style.visibility = "visible";
                                }
                        if (ns6) {
                        		menuPos = document.images[divName + 'Trigger'].x;
                                setIdProperty(divName, "top", 125);
                                setIdProperty(divName, "left", menuPos);
                                setIdProperty(divName, "visibility", "visible");
                                }
                        }
                
                function layerHide(divName) {
                        if (n) document.eval(divName).visibility = "hide";
                        if (ie) eval(divName).style.visibility = "hidden";
                        if (ns6) setIdProperty(divName, "visibility", "hidden");
                        }
                
                function hideAll() {
                	layerHide("aboutDiv");
                	layerHide("fellowsDiv");
                	layerHide("trainingDiv");
                	layerHide("resourcesDiv");
                	layerHide("applicationDiv");
                	layerHide("newsDiv");
					return;
					}
