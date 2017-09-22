var xmlHttp = ajaxOpen();
if( !xmlHttp ) {
	alert("Failed to create HTTP request object");
}

var rightArrow = '\u25BA';
var downArrow = '\u25BC';

var citeState = 'citedby'; // Current state according to javascript
var updateLocation = false; // Don't clobber the location in forward/back

function loadIframe(id, url)
{
	var iframe = document.getElementById( id );
	iframe.src = url;
	var state = document.getElementById( 'curCiteshitsContent' );
	if( state )
		state.value = url;
}

function iframeLoaded(id, trail)
{
	var iframe = document.getElementById( id );
	iframe.style.display = 'block';
	setIframeHeight( id );
	for(var i = 0; i < trail.length; i+=2)
		menuClick( trail[i], trail[i+1] );
}

function onLoad()
{
	var state = document.getElementById( 'curCiteshitsContent' );
/*	if( state )
		loadIframe( 'citeshitsContent', state.value ); */
}

function onCiteClick(relation)
{
	updateLocation = true;
	showCites(relation);
}

function watchAnchor()
{
	if( updateLocation )
		return; // We're in the process of changing location
	var state = window.location.hash.substring(1);
	if( state == '' )
		state = 'citedby';
	if( state != citeState )
	{
		alert("Forward/back detected, changing from " + citeState + " to " + state + " [" + window.location.hash + "]");
		showCites(state);
	} else
		anchorTimerID = setTimeout("watchAnchor()", 200);
}

function resetArrows()
{
	var buttons = document.getElementsByName( 'menuOff' );
	for(i = 0; i < buttons.length; i++) {
		buttons[i].className = 'citeNav';
		buttons[i].innerHTML = buttons[i].innerHTML.replace( /\u25BC/g, rightArrow );
	}
}

function setArrow(ele, arrow)
{
	ele.className = 'menuOn';
	ele.innerHTML = ele.innerHTML.replace( /\u25BA/, downArrow );
}

function selectButton(relation)
{
	if( relation == '' )
		relation = 'citedby';
	resetArrows();
	setArrow(document.getElementById(relation + "_button"), downArrow);
}

function showCites(relation)
{
	// document.getElementById( 'citeContent' ).innerHTML = 'Loading ...';
	var url = document.getElementById( relation + '_url' );
	if( !url ) {
		return;
	}
	url = url.value;

	citeState = relation;
	
	xmlHttp.open("GET", url, true);

	xmlHttp.onreadystatechange = stateChange;
	// xmlHttp.setRequestHeader( 'key', 'value' );

	xmlHttp.send(null);	
}

function stateChange()
{
	// debug("onreadystatechange");
	if( xmlHttp.readyState == 4 )
	{
		updatePage( xmlHttp.responseText );
	}
	// debug(xmlHttp + ".onreadystatechange: " + xmlHttp.readyState + ": " + xmlHttp.responseText);
}

function updatePage( response )
{
	document.getElementById( 'citeContent' ).innerHTML = response;
	var curHash = window.location.hash.substring(1);
	if( updateLocation && citeState != curHash )
		window.location.hash = '#' + citeState;
	selectButton(citeState);
	updateLocation = false;
}

function processUrls()
{
	var form = document.getElementById( "base_url_form" );
	if( !form ) {
		alert("Unable to locate base_url_form element");
		return;
	}
	var script = form.action + "?ajax=1";
	var base_urls = document.getElementsByName( "base_url" );
	
	// var val = document.getElementById( "id" ).value;
	for(var i = 0; i < base_urls.length; i++)
	{
		var url = script + "&base_url=" + escape(base_urls[i].value);
		// debug(url);

		var xmlHttp = ajaxOpen();
		if( !xmlHttp ) {
			alert("Failed to create HTTP request object");
			return;
		}
		xmlHttpPool.push(xmlHttp);

		xmlHttp.open("GET", url, true);

		xmlHttp.onreadystatechange = stateChange;
		// xmlHttp.setRequestHeader( 'key', 'value' );

		xmlHttp.send(null);
	}
}
