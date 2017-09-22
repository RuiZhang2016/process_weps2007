var current = null;

function show(word) {
  entry = document.getElementById(word);
  if (current != null) {
    current.style.display = (current.style.display == "none" ) ? "" : "none";
  }
  entry.style.display = (entry.style.display == "none" ) ? "" : "none";
  current = entry;
}

function toggle(id) {
  element = document.getElementById(id + "-contents");
  elementLink = document.getElementById(id + "-link");
  element.style.display = (element.style.display == "none" ) ? "" : "none";
 
  if (elementLink.innerHTML == "show") {
    elementLink.innerHTML = "hide";
  }
  else {
    elementLink.innerHTML = "show";
  }
}    

// Like toggle(), but hides/shows the entire widget, not just its contents.
function toggleWidget(id) {
  element = document.getElementById(id);
  element.style.display = (element.style.display == "none" ) ? "" : "none";
}

function toggleExpand(targetID) {
    targetElement = document.getElementById(targetID);
    if (targetElement.style.display == "none") {
        document.images["img_" + targetID].src = "/img/south.gif";
        targetElement.style.display = "block";
    }
    else {
        document.images["img_" + targetID].src = "/img/east.gif";
        targetElement.style.display = "none";
    }

}

var navbarText = "Your current position in the text is marked in blue."

function showTitle(sender) {
    titleDiv = document.getElementById("navbar_title");
    titleDiv.innerHTML = navbarText + " Click to jump to <strong>"
	+ sender.title + "</strong>.";
}

function clearTitle() {
    titleDiv = document.getElementById("navbar_title");
    titleDiv.innerHTML = navbarText + " Click anywhere in the line to jump "
	+ "to another position."
}

function vocab_window() {
  var theWindow =
    window.open('','vocab','height=450,width=450,scrollbars=1,status=1,resizable=1');
  theWindow.focus();
  return theWindow;
}

var _POPUP_FEATURES = 'location=0, statusbar=0, menubar=0, width=400, height=300';

function raw_popup(url, target, features) {
  if (isUndefined(features)) {
    features = _POPUP_FEATURES;
  }
  if (isUndefined(target)) {
    target = '_blank';
  }
  var theWindow =
    window.open(url, target, features);
  theWindow.focus();
  return theWindow;
}

function link_popup(src, features) {
  var theWindow = 
    window.open(src.getAttribute('href'), src.getAttribute('target') || '_blank', features);
  theWindow.focus();
  return theWindow;
}

// For pages with multiple documents, keep a list of them so we know which one
// user has clicked on at any given time
var documents = new Array();

function addDocument(doc) {
    documents.push(doc);
}

function m(src, which, docIndex) {

    var linkText = src.getAttribute('href');
    var originalText = linkText;
    if (documents[docIndex]) {
	linkText = linkText + '&d=' + documents[docIndex];
	if (which != -1) {
	    linkText = linkText + '&i=' + which;
	}
    }

    var theWindow = openPopupWindow(linkText, 'morph');
    theWindow.focus();

    return theWindow;
}

function openPopupWindow(linkText, name) {
    var parameters = 'height=600,width=450,scrollbars=1,resizable=1';
    return window.open(linkText, name, parameters);
}

function abbrev_help() {
	var theWindow = window.open('abbrevhelp.jsp', 'abbrevHelp',
	    'height=600,width=450,scrollbars=1,status=1,resizable=1,toolbar=1');
	theWindow.focus();
}

function showNavbar() {
    var wrapper = document.getElementById("navbar_wrapper");
    wrapper.style.display = "block";

    var placeholder = document.getElementById("navbar_placeholder");
    placeholder.style.display = "none";
}

function hideNavbar() {
    var wrapper = document.getElementById("navbar_wrapper");
    wrapper.style.display = "none";

    var placeholder = document.getElementById("navbar_placeholder");
    placeholder.style.marginBottom = "10px";
    placeholder.style.display = "block";
}
