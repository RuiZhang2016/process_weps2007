//
// This file contains all the javascript functions used
// for the ET Core site. It is included in the
// main.jhtml file and contains functions for JavaScript 1.1
//
function newSearchPopupWindow(url) {
 	newWin = window.open(encodeurl(url),'nOpWin','height=472,width=298,scrollbars,resizable,directories')
 	newWin.moveTo(50,50)
 	newWin.focus()
}
function newOpinionPopupWindow(url) {
 	newWin = window.open(encodeurl(url),'nOpWin','height=472,width=305,scrollbars,resizable')
 	newWin.moveTo(50,50)
 	newWin.focus()
}
function newPopupWindow(url) {
	newWin = window.open(encodeurl(url),'nWin','height=450,width=305,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newFullPopupWindow(url) {
	newWin = window.open(encodeurl(url),'nPWin','width=740,height=600,scrollbars,resizable,menubar,status,toolbar,location,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newBigPopupWindow(url) {
	newWin = window.open(encodeurl(url),'nPWin','width=800,height=600,scrollbars,resizable,menubar,status,toolbar,location,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newExPopupWindow(url) {
	newWin = window.open(encodeurl(url),'nExWin','height=550,width=328,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newUpdatesPopupWindow(url) {
	newWin = window.open(encodeurl(url),'UpdatesPopup','height=573,width=408,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newSlidesPopupWindow(url) {
	newWin = window.open(encodeurl(url),'SlidesPopup','height=512,width=468,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function MattWindow(url) {
	newWin = window.open(encodeurl(url),'matt','scrollbars,resizable,width=392,height=470')
	newWin.moveTo(50,50)
	newWin.focus()
}
function AlexWindow(url) {
	newWin = window.open(encodeurl(url),'alex','scrollbars,resizable,width=820,height=520')
	newWin.moveTo(50,50)
	newWin.focus()
}
function criticChoicePopupWindow(url) {
	newWin = window.open(encodeurl(url),'Critics Choice','height=573,width=408,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}


// popup print window functn moved from ToolbarFrag.html - NJ,090701
function newPopupPrintWindow(url) {
	newWin = window.open(encodeurl(url),'nWin','height=600,width=600,scrollbars,resizable,toolbar,menubar,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}

// swap fnctn moved from core.js - NJ,090701
function swap(imageObj, imageName) {
	if (document.images) eval("document." + imageObj + ".src = '/core/images/" + imageName + ".gif'");
}

// links for the Glass website (motoring)
// required for links from site index.
function openUsedCars(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.location.href=URL;
}
function openNewCars(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass_new_cars.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.location.href=URL;
}

function openValuations(targetURL)

 {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';

		//replace this code...
		//window.open(URL, 'uvvWindow', 'scrollbars,status,width=484,height=580,screenX=200,screenY=20');
		//...with this code (the window will be resized by us).

	document.FormValueUsedCar.action=URL;
	document.FormValueUsedCar.submit();
	window.location.href='http://motoring.telegraph.co.uk/motoring/index.jhtml';
}






// popup window for TopTen Cars Chart - CR855 27/6/02

function newTop10PopupWindow(url) {
	newWin = window.open(encodeurl(url),'UpdatesPopup','height=540,width=420,scrollbars,resizable')
	newWin.moveTo(50,50)
	newWin.focus()
}

// CR2821 24/05/2005 S Flint replaced $sessionid$ with sessionid (will also pick up jsessionid)
function encodeurl(url) {

	var encodedurl = url;

	var i = url.indexOf('.jhtml');
	if (i != -1 &&
		(url.indexOf('sessionid') == -1) &&
		(url.indexOf('mailto:') == -1) &&
		sessionidstring != '') {
		encodedurl = url.substring(0,i+6);
		encodedurl += sessionidstring;
		encodedurl += url.substring(i+6);
	}
	return encodedurl;
}

function newWindow(url, name, features) {
	var newWin = window.open(encodeurl(url),name,features);
	newWin.moveTo(50,50);
	newWin.focus();
}

function quizPopupWindow(url) {
        newWin = window.open(encodeurl(url),'nWin','height=400,width=350,scrollbars,resizable,directories')
        newWin.moveTo(50,50)
        newWin.focus()
}

// CR17221 18/05/2005 G Whitfield - Message bugs. This function removes apostrophes from the specified field as user enters text.

function checkForApos(formField) {
  var fieldToValidate = formField.value;
  var regexpValidated = fieldToValidate.replace(/'/g, " ");
  if (fieldToValidate.match(/'/g)){
  	alert('Apostrophe found in text!\nIt will be replaced with a space.');
  	formField.value = regexpValidated;
  }
  return false;
}

// CR17296 Add trimField function to validate and trim text fields
function trimField(formField, fieldLimit){
  if(formField.value.length >= fieldLimit){
  	alert('You have exceeded the specified maximum length of ' + fieldLimit + ' characters for this field.\nYou will not be able to enter any more text!');
  	formField.value = formField.value.substring(0, fieldLimit);
  	return false;
  }
}

// CR23504 Ensure all JS scripts across the site are initialised (Steve's AJAX'd version!)
window.onloadListeners = new Array();

window.addOnloadListener = function(listener) {
    window.onloadListeners[window.onloadListeners.length] = listener;
}

window.onload = function() {
    for(var i = 0; i < window.onloadListeners.length; i++)  {
        var func = window.onloadListeners[i];
        func.call();
    }
}


