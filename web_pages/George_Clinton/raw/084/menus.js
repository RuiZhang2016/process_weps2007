function getDiv(id) {
	if (document.getElementById) {
		return document.getElementById(id);
	}
	
	if (document.all) {
		return document.all[id];
	}
	
	if (document.layers) {
		return document.all[id];
	}
  
	return null;
}

function adjustStationMenu() {
	var menu = getDiv("browse_stations_popup");
	if (menu != null) {
		var new_top = 219 - menu.offsetHeight
		menu.style.top = new_top + "px";
	}
}

/* rporras 060806 Moved this function to c2_global.js
function addEvent(obj, evType, fn, opt_flag) { 
	var flag = false;
	if (opt_flag != null) {
		flag = opt_flag;
	}
		
	if (obj.addEventListener){ 
		obj.addEventListener(evType, fn, flag); 
		return true; 
	} else if (obj.attachEvent){ 
		var r = obj.attachEvent("on"+evType, fn); 
		return r; 
	} else { 
		return false; 
	} 
}
*/

function setFirstLast(id) {
	setFirst(id, "first");
	setLast(id, "last");
}

function setFirst(id, class_name) {
	var menu = getDiv(id);
	
	if (menu == null || menu.childNodes == null) {
		// error conditions
		alert("menu: " + id + " was null or not a list");
		return null;
	}
	
	for (var i = 0; i < menu.childNodes.length; i++) {
		// filter out the comment nodes
		if (menu.childNodes[i].nodeName == "LI" || menu.childNodes[i].nodeName == "li") {
			// as long as we're here, 
			// hide all tghe nodes and we'll
			// display the current page later
			menu.childNodes[i].className = class_name;
			
			break;
		}
	}
}

function setLast(id, class_name) {
	var menu = getDiv(id);
	
	if (menu == null || menu.childNodes == null) {
		// error conditions
		alert("menu: " + id + " was null or not a list");
		return null;
	}
	
	var last_index = 0;
	for (var i = 0; i < menu.childNodes.length; i++) {
		// filter out the comment nodes
		if (menu.childNodes[i].nodeName == "LI" || menu.childNodes[i].nodeName == "li") {
			last_index = i;
		}
	}
	menu.childNodes[last_index].className = class_name;
}


// this was originally taken from "://www.brainjar.com"
// but more of the original code (which was pretty nice) 
// has been gutted to strip out the stuff we didn't need.
// (including most of the browser compatibility stuff - 
// it still works in firefox, but that wasn't really a design
// requirement, so no promises)
//*****************************************************************************
// Do not remove this notice.
//
// Copyright 2000-2004 by Mike Hall.
// See http://www.brainjar.com for terms of use.
//*****************************************************************************


function pageMousedown(event) {
  var el;
  // If there is no active button, exit.

  if (activeButton == null)
    return;

  // Find the element that was clicked on.

  // this used to check the "broswer" object for isIE ..
  if (window.event)
    el = window.event.srcElement;
  else
    el = (event.target.tagName ? event.target : event.target.parentNode);

  // If the active button was clicked on, exit.

  if (el == activeButton)
    return;

  // If the element is not part of a menu, reset and clear the active
  // button.

  if (getContainerWith(el, "DIV", "popup") == null) {
    resetButton(activeButton);
    activeButton = null;
  }
}
                            
function buttonClick(event, menuId) {
	var button;
	
	if (window.event)
		button = window.event.srcElement;
	else
		button = (event.target.tagName ? event.target : event.target.parentNode);
	
	if (button.menu == null) {
		button.menu = document.getElementById(menuId);
	}
	
	depressButton(button);
	activeButton = button;
	
	return false;
}

function depressButton(button) {
	button.menu.style.visibility = "visible";
}

function resetButton(button) {
	if (button.menu != null)
		button.menu.style.visibility = "hidden";
}







//----------------------------------------------------------------------------
// General utility functions.
//----------------------------------------------------------------------------

function getContainerWith(node, tagName, className) {

  // Starting with the given node, find the nearest containing element
  // with the specified tag name and style class.

  while (node != null) {
    if (node.tagName != null && node.tagName == tagName &&
        hasClassName(node, className))
      return node;
    node = node.parentNode;
  }

  return node;
}

function hasClassName(el, name) {

  var i, list;

  // Return true if the given element currently has the given class
  // name.

  list = el.className.split(" ");
  for (i = 0; i < list.length; i++)
    if (list[i] == name)
      return true;

  return false;
}

function removeClassName(el, name) {

  var i, curList, newList;

  if (el.className == null)
    return;

  // Remove the given class name from the element's className property.

  newList = new Array();
  curList = el.className.split(" ");
  for (i = 0; i < curList.length; i++)
    if (curList[i] != name)
      newList.push(curList[i]);
  el.className = newList.join(" ");
}

function getPageOffsetLeft(el) {

  var x;

  // Return the x coordinate of an element relative to the page.

  x = el.offsetLeft;
  if (el.offsetParent != null)
    x += getPageOffsetLeft(el.offsetParent);

  return x;
}

function getPageOffsetTop(el) {

  var y;

  // Return the x coordinate of an element relative to the page.

  y = el.offsetTop;
  if (el.offsetParent != null)
    y += getPageOffsetTop(el.offsetParent);

  return y;
}
