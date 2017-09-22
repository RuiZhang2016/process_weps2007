function gotoPI(selectDest, strBaseUrl, f) { 
    var index = f[ selectDest ].selectedIndex;
    if (f[ selectDest ].options[index].value != "0") {
	location = strBaseUrl + f[ selectDest ].options[index].value;
    }
}

function pL (pageType) {
    if ((pageType == 'front') ||
	(pageType == 'front') ||
	(pageType == 'front'))
	{
	    moveAd (0,0);
	}
    else {
	moveAd (1,0);
    }
}

function moveAd(isCentered, rightBorder) {
    var oAd  = document.getElementById('adlocation');
    var oAd2 = document.getElementById('adlocation2');
    if (oAd && oAd2) {
	var     arrC = findPos(oAd);
	oAd2.style.top  = arrC[1] + 'px';
	if (isCentered) {
	    oAd2.style.left = arrC[0] + 'px';
	}
	else {
	    oAd2.style.right =  rightBorder + 'px';
	}
    }
}


// http://www.quirksmode.org/js/findpos.html
function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop  = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop  += obj.offsetTop
		}
	}
	return [curleft,curtop];
}

/*
    function getElementsByClassName(oElm, strTagName, strClassName){
    Written by Jonathan Snook, http://www.snook.ca/jonathan
    Add-ons by Robert Nyman, http://www.robertnyman.com

    SLF: I do not know if they are asserting any copyright on this.
    If this is viewed as an infringing use I will immediately re-write
    and compile my own package.
*/
function hl (element) {    element.style.backgroundColor = "#FFF655"; }
function uhl (element) {   element.style.backgroundColor = ""; }
function getElementsByClassNameTwo(oElm, strTagName, strClassName){
    if (!oElm) return;
    var arrElements = oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];      
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }   
    }
    return (arrReturnElements)
}
function toggleDisplay(oElm, strTagName, strClassName, strDisplayAppearStyle ) {
    if (!oElm) return;
    var oSpan = document.getElementById(oElm.getAttribute("id") + 'Toggle');
 
    // Get a handle on all of the tags with this class in our
    // container.
    var arrElements = getElementsByClassNameTwo(oElm, strTagName, strClassName);
    var strClassStatus;
    // Run thru toggling the appearance of each element.
    for (var intCount =0; intCount < arrElements.length; intCount++) {
        arrElements[intCount].style.display = 
               (arrElements[intCount].style.display == "none") ? strDisplayAppearStyle : "none";

        strClassStatus = arrElements[intCount].style.display;
    }

     // We have changed the class's display style, now change what our link shows.    
     // class not displayed we want the option to show.  class displayed option to hide.
     if (strClassStatus == "none") {
          oSpan.innerHTML = "Show Partial Seasons";
          oSpan.style.backgroundColor = '#FFF655';
     }
     else {
          oSpan.innerHTML = "Hide Partial Seasons";
          oSpan.style.backgroundColor = '';
     }
     
}

/* 
    This subroutine toggles the display of two divs.  It checks to see if the first is showing.
    If so, change display to none and show second.  If not, change display to inline and don't show second.

    strSpanText contains the id name of the text that displays a link to toggle these divs.

    This expects that attributes is set within the toggle span container.  
    The attributes have the same names as the divs and 
    contain the text to display in the span when the div is displayed.
 */
function toggleDivs(strDiv1, strDiv2, strSpanText) {
    oDiv1     = document.getElementById(strDiv1);
    oDiv2     = document.getElementById(strDiv2);
    oSpanText = document.getElementById(strSpanText);
    if (!oDiv1) return;
    if (!oDiv2) return;
    if (!oSpanText) return;

    // Toggle these displays based on whether the first is showing or not.
    if (oDiv1.style.display == "none") {
          oDiv1.style.display = "inline";
          oDiv2.style.display = "none";
    }
    else {
          oDiv1.style.display = "none";
          oDiv2.style.display = "inline";
    }
 
     // Check to see if an attribute is given for each div.  If not, return.
     // If so, we then toggle the span's text based on which div is showing presently.
     if (oSpanText.getAttribute(strDiv1) == null) return;
     if (oSpanText.getAttribute(strDiv2) == null) return;
     oSpanText.innerHTML = (oDiv1.style.display == "none") ? oSpanText.getAttribute(strDiv2): oSpanText.getAttribute(strDiv1);

}
function changeimage(imageid, imagefile) {
    //make new image
    document.getElementById(imageid).src = imagefile;
}


// We run the neutralization through neutralize.
function neutralize (strType, strID, strQueryString) {
    // Passing quotes is a pain, so we fix it here.
    strID = strID.replace(/_/,'\'');

    if (strQueryString) {
	strQueryString = strQueryString.replace(/_/,'\'');
    }
    if (strType == 'pitchStats') {
	clearAll('pitch');
	defaultPitch(strID, strQueryString);
	Element.show('formNeutralpitch');
    }
    else if (strType == 'batStats') {
	clearAll('bat');
	defaultBat(strID, strQueryString);
	Element.show('formNeutralbat');
    }

    if (!strQueryString) {
	if (strType == 'pitchStats') {
	    getYears(strID,'pitch');
	}
	else if (strType == 'batStats') {
	    getYears(strID,'bat');
	}
    }
}


// We run the neutralization through neutralize.
function actualize (strType, strID) {
    if (strType == 'pitchStats') {
	actualPitch(strID);
	Element.hide('formNeutralpitch');
    }
    else if (strType == 'batStats') {
	actualBat(strID);
	Element.hide('formNeutralbat');
    }

}


// Run an ajax call to get the pvb values.
function getGames(params)
{
    var url      = '/pi/gl_find_snip.cgi';
    var newAjax  = new Ajax.Request(
				    url,
	{
	    method: 'get',
	    parameters: params,
	    onComplete: showCallResponse
	});
}


// Handle the output from our ajax request.
function showCallResponse(originalRequest) 
{
    if(Ajax.activeRequestCount == 0){
    }
    

    // Output the data.
    Element.hide('systemWorking');
    Element.show('dataOut');
    $('dataOut').innerHTML = originalRequest.responseText;
    document.title = $(queryTitleDivId).innerHTML;



    // Log that we made a change here.
    dhtmlHistory.add(paramsUsed, 'StatsShow');
    // Cache this result.
    bb_save_state(paramsUsed, 'dataOut');

    // Print the incrementing at the top and the bottom.
    if ($('increment2') && $('increment')) {
	$('increment2').innerHTML = $('increment').innerHTML;    
    }
}

// JK's eq stats toolbox.
function getYears(strID,strForm) {
    var url = "/pi/getYears.cgi?id=" + strID + "&type=" + strForm;
    strYrChange = "years" + strForm;
    request2.open("GET", url, true);
    request2.onreadystatechange = updateYears;
    request2.send(null);
}

function getLeagues(strForm) {
    var strYrForm = "year"+strForm;
    var year = document.getElementById(strYrForm).value;
    var url = "/pi/getLeagues.cgi?type=" + strForm + "&year=" + year;
    strLgChange = "leagues" + strForm;
    request.open("GET", url, true);
    request.onreadystatechange = updateLeagues;
    request.send(null);
}

function getTeams(strForm) {
    var strYrForm = "year"+strForm;
    var strTyForm = "type"+strForm;
    var strLgForm = "league"+strForm;

    var type = document.getElementById(strTyForm).value;
    var year = document.getElementById(strYrForm).value;
    var league = document.getElementById(strLgForm).value;
    strTmChange = "teams" + strForm;
    var url = "/pi/getTeams.cgi?type=" + type + "&year=" + 
	year + "&league=" + league;
    request.open("GET", url, true);
    request.onreadystatechange = updateTeams;
    request.send(null);
}

function getBat() {
    var id = document.getElementById("id").value;
    var year = document.getElementById("yearbat").value;
    var league = document.getElementById("leaguebat").value;
    var team = document.getElementById("teambat").value;
    var url = "/pi/getBat.cgi?id=" + id + "&year=" + year + "&league=" + league + "&team=" + team;
    
    strDivChange = 'batStats';
    document.getElementById(strDivChange).style.color = "#999";
    document.getElementById(strDivChange).style.backgroundColor = "#ddd";

    request.open("GET", url, true);
    request.onreadystatechange = updateStats;
    request.send(null);
}

function getPitch() {
  var id = document.getElementById("id").value;
  var year = document.getElementById("yearpitch").value;
  var league = document.getElementById("leaguepitch").value;
  var team = document.getElementById("teampitch").value;

  strDivChange = 'pitchStats';
  document.getElementById(strDivChange).style.color = "#999";
    document.getElementById(strDivChange).style.backgroundColor = "#ddd";

  var url = "/pi/getPitch.cgi?id=" + id + "&year=" + year + "&league=" + league + "&team=" + team;
  request.open("GET", url, true);
  request.onreadystatechange = updateStats;
  request.send(null);
}

function defaultPitch(strID, strQueryString) {
    if (strQueryString) {
	url = "/pi/getPitch.cgi?" + strQueryString;
    }
    else {
	url = "/pi/getPitch.cgi?id=" + strID + "&league=ML:4.415:0.90:162&team=neutral:100:100";
	strID = strID.replace(/\'/,'_');
	document.getElementById("neutralPitch").innerHTML = "<span class=tooltip onclick=\"actualize('pitchStats', '" + 
	    strID + "');\">Return&nbsp;to&nbsp;Actual&nbsp;Stats</span>";
    }


    strDivChange = 'pitchStats';
    document.getElementById(strDivChange).style.color = "#999";
    document.getElementById(strDivChange).style.backgroundColor = "#ddd";
    request.open("GET", url, true);
    request.onreadystatechange = updateStats;
    request.send(null);
}

function actualPitch(strID) {
    clearAll('pitch');
    strID = strID.replace(/\_/,'\'');
    var url = "/pi/actualStats.cgi?type=pitch&id=" + strID;
    strID = strID.replace(/\'/,'_');
    document.getElementById("neutralPitch").innerHTML = "<span class=tooltip onclick=\"neutralize('pitchStats', '" + strID + "');\">Neutralize&nbsp;Stats</span>";

    strDivChange = 'pitchStats';
    document.getElementById(strDivChange).style.color = "#999";
    document.getElementById(strDivChange).style.backgroundColor = "#ddd";

    request.open("GET", url, true);
    request.onreadystatechange = updateStats;
    request.send(null);
}


function defaultBat(strID, strQueryString) {
    var url;

    if (strQueryString) {
	url = "/pi/getBat.cgi?" + strQueryString;
    }
    else {
	url = "/pi/getBat.cgi?id=" + strID + "&league=ML:4.415:0.90:162&team=neutral:100:100";
	strID = strID.replace(/\'/,'_');
	document.getElementById("neutralBat").innerHTML = "<span class=tooltip onclick=\"actualize('batStats', '" + 
	    strID + "');\">Return&nbsp;to&nbsp;Actual&nbsp;Stats</span>";
    }
    strDivChange = 'batStats';
    document.getElementById(strDivChange).style.color = "#999";
    document.getElementById(strDivChange).style.backgroundColor = "#ddd";

    request.open("GET", url, true);
    request.onreadystatechange = updateStats;
    request.send(null);
}

function actualBat(strID) {
    clearAll('bat');
    strID = strID.replace(/\_/,'\'');
    var url = "/pi/actualStats.cgi?type=bat&id=" + strID;
    strID = strID.replace(/\'/,'_');
    document.getElementById("neutralBat").innerHTML = "<span class=tooltip onclick=\"neutralize('batStats', '" + strID + "');\">Neutralize&nbsp;Stats</span>";
    strDivChange = 'batStats';
    document.getElementById(strDivChange).style.color = "#999";
    document.getElementById(strDivChange).style.backgroundColor = "#ddd";

    request.open("GET", url, true);
    request.onreadystatechange = updateStats;
    request.send(null);
}



function updateLeagues() {
  if (request.readyState == 4) {
    var leagueList = request.responseText;
    document.getElementById(strLgChange).innerHTML = leagueList;
  }
}

function updateYears() {
  if (request2.readyState == 4) {
    var yearList = request2.responseText;
    document.getElementById(strYrChange).innerHTML = yearList;
  }
}

function updateTeams() {
    if (request.readyState == 4) {
      var teamList = request.responseText;
      document.getElementById(strTmChange).innerHTML = teamList;
    }
}

function updateStats() {
       if (request.readyState == 4) {
	var eqStats = request.responseText;
	//fade(strDivChange);
	document.getElementById(strDivChange).style.color = "#000";
	document.getElementById(strDivChange).innerHTML = eqStats;
	document.getElementById(strDivChange).style.backgroundColor = "#fff";
    }
}

function clearTeams(strForm) {
    var strTmID  = "teams" + strForm;
    document.getElementById(strTmID).innerHTML = "";
}

function clearAll(strForm) {
    var strLgID  = "leagues" + strForm;
    var strTmID  =   "teams" + strForm;
    document.getElementById(strLgID).innerHTML = "";
    document.getElementById(strTmID).innerHTML = "";
}
var request = null;
var strDivChange = '';
var strYrChange = '';
var strLgChange = '';
var strTmChange = '';
try {
    request = new XMLHttpRequest();
} catch (trymicrosoft) {
    try {
	request = new ActiveXObject("Msxm12.XMLHTTP");
    } catch (othermicrosoft) {
	try {
	    request = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (failed) {
	    request = null;
	}
    }
}

try {
    request2 = new XMLHttpRequest();
} catch (trymicrosoft) {
    try {
	request2 = new ActiveXObject("Msxm12.XMLHTTP");
    } catch (othermicrosoft) {
	try {
	    request2 = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (failed) {
	    request2 = null;
	}
    }
}

