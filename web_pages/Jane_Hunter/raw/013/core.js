/*
	core.js

	Provides the basic mechanisms for including other JavaScript files in this library.

	This file should be included (use <script src="/path/to/file/core.js"></script> 
	syntax in the document <head>) in every document/page on the site to allow for 
	maximum accessibility and consistancy in library availability.

	NOTE: These functions will *always* add the script to the document's <head>, and 
	are *not* intended for instances of scripts that migh appear outside that 
	document-location, though they might work anyway - I haven't tested that yet.
*/

//	Global variables for the library:
var	jsLibPath = "/consumer/scripts/";
var	includedScripts = new Array();

function domAddScript(scriptSrc)
{
	/*
		Adds a <script></script> tag to the document's <head> with the specified 
		scriptSrc as the tag's src attribute.
	*/
	var	docHead = document.getElementsByTagName("head").item(0);
	var	newScript = document.createElement("script");
	newScript.setAttribute("type", "text/javascript");
	newScript.setAttribute("src", scriptSrc);
	docHead.appendChild(newScript);
	includedScripts[includedScripts.length] = scriptSrc;
}

function include(scriptSrc)
{
	//	include a specified JavaScript, no checking done to see if 
	//	it's already been included.
	domAddScript(scriptSrc);
}

function include_once(scriptSrc)
{
	//	include a specified JavaScript, *IF* it hasn't already been 
	//	included or required by the document
	var	isUsed = false;

	for ( i=0; i<includedScripts.length; i++ )
	{
		if ( includedScripts[i] == scriptSrc )
		{
			isUsed = true;
			break;
		}
	}

	if ( ! isUsed )
	{
//		alert("Including " + scriptSrc);
		domAddScript(scriptSrc);
	}
}

function isArray(theItem)
{
//	alert("typeof(theItem) = " + typeof(theItem));
	if ( typeof(theItem) != "object" )
	{
		return false;
	}
	if ( theItem.pop )
	{
		return true;
	}
	return false;
}

function isDefined(theVariable)
{
	return ( typeof(theVariable) != "undefined" );
}

function addEventHandler(theElement, theEvent, theCallback, theBubbleState)
{
	//	Make sure we're working with the object:
	if ( theElement.indexOf )
	{
		theElement = document.getElementById(theElement);
	}
	//	Some defaults:
	if ( theBubbleState == null )
	{
		theBubbleState = false;
	}
	if ( theCallback == null )
	{
		theCallback = function() { throw("There is no callback function defined for the " + theEvent + " handler on " + theElement.id + "."); }
	}
	eventHandlerSet = false;
	if ( theElement.addEventListener && ! eventHandlerSet )
	{
//		alert("Setting event-handler for " + theEvent + " on " + theElement.id + " with addEventListerner");
		theElement.addEventListener(theEvent, theCallback, theBubbleState);
		eventHandlerSet = true;
	}
	if ( theElement.attachEvent && ! eventHandlerSet )
	{
//		alert("Setting event-handler for " + theEvent + " on " + theElement.id + " with attachEvent");
		theElement.attachEvent('on'+theEvent, theCallback, theBubbleState);
		eventHandlerSet = true;
	}
	if ( ! eventHandlerSet )
	{
//		alert("addEventHandler failed for " + theEvent + " on element ID " + theElement.id + ".");
		throw("addEventHandler failed for " + theEvent + " on element ID " + theElement.id + ".");
	}
}

function getFieldValue(theField)
{
	if ( theField.indexOf )
	{
		theField = document.getElementById(theField);
	}
	if ( theField.selectedIndex && theField.selectedIndex != -1 )
	{
		return theField.options[theField.selectedIndex].value;
	}
	if ( theField.checked != null && theField.checked && theField.value != "" )
	{
		return theField.value;
	}
	if ( theField.value != null && theField.value != "" )
	{
		return theField.value;
	}
}