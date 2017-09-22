/*
Copyright (c) 2006 GreatSchools.net
All Rights Reserved.

$Id: global.js,v 1.15 2006/09/20 21:08:00 apeterson Exp $
*/

/*
Generic Utilities
*/

//read cookie, return "" if cookie not found or cookie not set
function readCookie(cookieName) {
    var cookie = "" + document.cookie;
    var i = cookie.indexOf(cookieName);
    if (i == -1 || cookieName == "") return "";
    var j = cookie.indexOf(';', i);
    if (j == -1) j = cookie.length;
    return unescape(cookie.substring(i + cookieName.length + 1, j));
}


/* Finds the HTML element specified by the ID and switches it between
   block and 'none' display. Should not be used on other types of elements
   as its behavior is not defined. */
function toggleById(elementId) {
    var layer = document.getElementById(elementId);
    if (layer.style.display == 'block') {
        layer.style.display = 'none';
    } else {
        layer.style.display = 'block';
    }
}

function newToggleById(elementId) {
    var layer = document.getElementById(elementId);
    if (layer.oldDisplay && layout.style.display == 'none') {
        layer.style.display = layer.oldDisplay;
    } else {
        layer.oldDisplay = layer.style.display;
        layer.style.display = 'none';
    }
}

function setColSpan(elementId, colspan) {
    document.getElementById(elementId).colSpan = colspan;
}

function getRadioValue(radioButtons)
{
    for (var i = 0; i < radioButtons.length; i++)
    {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }
}


/*
  GS-site specific
*/
/* From the old perl code. Probably not needed */
function issues() {
    window.open("", "issues", 'width=400,height=300,scrollbars=yes')
}
function definitions() {
    window.open("", "issues", 'width=500,height=400,scrollbars=yes')
}

function jumpToCounty(newLoc, state) {
    newPage = newLoc.options[newLoc.selectedIndex].text;
    newPage = escape(newPage);
    newPage = "/cgi-bin/search_switch/" + state + "?selector=county&countySelect=" + newPage;
    if (newPage != "") {
        window.location.href = newPage
    }
}

//get state from cookie
function getState() {
    return readCookie('STATE');
}


/*
  Top-nav specific
*/
/*
 * Used by the global search widget to make sure that a user
 * selects a state.
 */
function topNavSubmitSearch(theForm) {
    var val = document.getElementById('stateSelector').value;
    var c = getRadioValue(theForm.c);
    if (c != 'topic') {
        if (val == "--" || val == "") {
            alert("Please select a state.");
            return false;
        } else {
            return true;
        }
    }
    return true;
}

function topNavSelectSchoolSearch(x) {
    setSearchPrompt('Enter school, district or city');
    var e = document.getElementById('stateDropDown');
    e.style.display = 'block';
    var e = document.getElementById('searchInLabel');
    e.style.display = 'block';
    setColSpan('searchBox', 1);
    var e = document.getElementById('stateSelector');
    e.name = 'state';
    return true;
}

function topNavSelectTopicSearch(x) {
    setSearchPrompt('Enter keyword');
    var e = document.getElementById('stateDropDown');
    e.style.display = 'none';
    var e = document.getElementById('searchInLabel');
    e.style.display = 'none';
    var e = document.getElementById('stateSelector');
    e.name = 'hiddenState';
    setColSpan('searchBox', 5);
    return true;
}


/**
 TO BE REMOVED
 */
/* Sets the search prompt in the global header
@todo remove in 5.9 or later
*/
function setSearchPrompt(s) {

    var d = document.getElementById('slabel');
    var olddiv = document.getElementById('searchPrompt');
    d.removeChild(olddiv);

    var newdiv = document.createElement('img');
    newdiv.setAttribute('id', 'searchPrompt');

    if (s == 'Enter keyword') {
        newdiv.setAttribute('src', '/res/img/search/enter_keyword.gif');
        newdiv.setAttribute('alt', 'Enter Keyword')
    } else {
        newdiv.setAttribute('src', '/res/img/search/enter_school.gif');
        newdiv.setAttribute('alt', 'Enter School, City or District')
    }

    d.appendChild(newdiv);

    var e = document.getElementById("q");
    e.focus();
    e.select();
}

//get element by id
// @todo remove this -- it's not doing much
function getElement(id) {
    return document.getElementById(id);
}


/*
 * Used by the global search widget to make sure that a user
 * selects a state.
 * @todo legacy, remove 5.9 or after
 */
function checkSearchStateSelected(theForm, selectorId) {
    var returnVal = true;
    var val = document.getElementById(selectorId).value;

    if (val == "--" || val == "") {
        alert("Please select a state.");
        returnVal = false;
    } else {
        returnVal = true;
    }
    return returnVal;
}


