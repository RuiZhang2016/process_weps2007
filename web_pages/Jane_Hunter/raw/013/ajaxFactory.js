	include_once(jsLibPath + "whichItem.js");

if ( typeof(voidObject) == "undefined" )
{
	function voidObject()
	{
		tmpObject = new Object();
		tmpObject.innerText = "";
		tmpObject.innerHTML = "";
		tmpObject.responseXML = null;
		return tmpObject;
	}
}
	var requestActive = false;

if ( typeof(ajaxFactory) == "undefined" )
{
	function ajaxFactory(requestFrom, requestTo, requestURL, requestMethod, isAsynch)
	{
		tmpObject = false;
		do 
		{
			setTimeout( function() { x = 1; }, 1000 );
		}
		while ( requestActive )
		//	Create the XMLHttpRequest object we're gonna use:
		try
		{
			tmpObject = new XMLHttpRequest();
		}
		catch (tryMSIE)
		{
			try
			{
				tmpObject = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (altMSIE)
			{
				try
				{
					tmpObject = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (allFailed)
				{
					tmpObject = false;
				}
			}
		}

		if ( typeof(tmpObject) == "object" )
		{
			//	Defaulting some arguments
			if ( requestMethod == null )
				{ requestMethod = "GET"; }
			if ( isAsynch == null )
				{ isAsynch = true; }
// alert("isAsynch = " + isAsynch);
			//	Detect whether the requestTo and requestFrom are strings, and if so,
			//	change them to the objects referred to by those strings:
			if ( requestFrom == null )
				{ requestFrom = new Object(); }
			if ( requestFrom.indexOf )
			{
				//	The requestFrom object is a string, assume its the object-ID, and get the object:
				requestFrom = whichItem(requestFrom);
			}
			if ( requestTo.indexOf )
			{
				//	The requestTo object is a string, assume its the object-ID, and get the object:
				requestTo = whichItem(requestTo);
			}
			//	Attempt to use the onload handler if it's possible
			if ( typeof(tmpObject.onload) != "undefined" )
			{
				tmpObject.onload = function ()
				{
					requestActive = true;
					//	Return tmpObject.responseText to the requestTo object's innerHTML.
					//	Anything that isn't a complete swap-out of the content will need to
					//	call its own function(s) to handle the returned information 
					//	appropriately. It's recommended that anything that falls into 
					//	this category generate its own JavaScript object with the 
					//	voidObject function below, and use that as the requestTo item...
					requestTo.innerHTML = tmpObject.responseText;
					requestTo.responseXML = tmpObject.responseXML;
					if ( requestTo.innerText == "" )
					{
						requestTo.innerText = tmpObject.responseText;
					}
// alert("onload: tmpObject.responseText:\n\n" + tmpObject.responseText);
// alert("onload: tmpObject.responseXML:\n\n" + tmpObject.responseXML);
// alert("requestTo.id = " + requestTo.id + "\n\n" + "tmpObject.responseText = " + tmpObject.responseText);
					loadingItem = "";
					requestActive = false;
				}
			}
			else
			{
				tmpObject.onreadystatechange = function ()
				{
					requestActive = true;
					if (tmpObject.readyState == 4)
					{
						if ( tmpObject.status == 200 )
						{
							//	Return tmpObject.responseText to the requestTo object's innerHTML.
							//	Anything that isn't a complete swap-out of the content will need to
							//	call its own function(s) to handle the returned information 
							//	appropriately. It's recommended that anything that falls into 
							//	this category generate its own JavaScript object with the 
							//	voidObject function below, and use that as the requestTo item...
							requestTo.innerHTML = tmpObject.responseText;
							requestTo.responseXML = tmpObject.responseXML;
							if ( requestTo.innerText == "" )
							{
								requestTo.innerText = tmpObject.responseText;
							}
// alert("onreadystatechange: tmpObject.responseText:\n\n" + tmpObject.responseText);
// alert("onreadystatechange: tmpObject.responseXML:\n\n" + tmpObject.responseXML);
// alert("requestTo.id = " + requestTo.id + "\n\n" + "tmpObject.responseText = " + tmpObject.responseText);
							loadingItem = "";
							requestActive = false;
						}
						else
						{
							requestTo.innerText = "<div class=\"XMLHttpError\"><h1>Error: " + tmpObject.status + "</h1>Request to " + requestURL + tmpDataString + " failed!\n\n" + tmpObject.statusText + "<br><br><b>Request Headers:</b><br><pre>" + tmpObject.getAllResponseHeaders() + "</pre></div>";
						}
					}
				}
			}

			//	Check to see if the requestFrom object is a form, and if it is, override 
			//	the previously defined method to use whatever the form is using!
			tmpDataString = "";
			if ( requestFrom.method )
			{
				//	Overriding the request-method first:
				requestMethod = requestFrom.method;
				//	Next, grab all the data-values from the form:
				if ( requestFrom.method.toUpperCase() == "GET" )
				{
					requestURL = requestFrom.action;
					tmpDataString = "&";
					if ( requestFrom.action.indexOf("?") == -1 )
					{
						tmpDataString = "?";
					}
				}
				for ( i=0; i<requestFrom.elements.length; i++ )
				{
					if ( i != 0 )
					{
						tmpDataString += "&";
					}
					tmpDataString += requestFrom.elements[i].name + "=";
					if ( requestFrom.elements[i].options )
					{
						//	The item in question is a select, so we should loop through
						//	all of the available options and see which ones,if any, are 
						//	selected before adding them all to tmpDataString:
						tmpOptionsString = "";
						for ( j=0; j<requestFrom.elements[i].options.length; j++ )
						{
							if ( requestFrom.elements[i].options[j].selected )
							{
								if ( tmpOptionsString.length != 0 )
									{ tmpOptionsString += ","; }
								tmpOptionsString += requestFrom.elements[i].options[j].value;
							}
						}
						tmpDataString += tmpOptionsString;
					}
					else
					{
						tmpDataString += requestFrom.elements[i].value
					}
				}
			}

			//	Make the applicable request...
// alert("requestMethod = " + requestMethod);
			if ( requestMethod.toUpperCase() == "GET" )
			{
				try
				{
					tmpObject.open(requestMethod.toUpperCase(), requestURL + tmpDataString, isAsynch);
					tmpObject.send("");
					return false;
				}
				catch(noGet)
				{
// alert(noGet);
					return true;
				}
			}
	/*
			Post method apparently doesn't work right (at least not in Firefox 1.0.7)...
			Leaving the code in place for now, in case it's needed later.
	*/
			if ( requestMethod.toUpperCase() == "POST" )
			{
				try
				{
					tmpObject.open("POST", requestURL, false);
					tmpObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					tmpObject.setRequestHeader("Content-Length", tmpDataString.length);
					tmpObject.send(tmpDataString);
					return false;
				}
				catch(noPost)
				{
// alert(noPost);
					return true;
				}
			}
			return true;


		}
		else
		{
			requestTo.innerText = "<div class=\"XMLHttpError\"><h1>Error:</h1>Could not create a necessary JavaScript component</div>";
			return true;
		}
	}
}