if ( typeof(initPopWindow) != "function" )
{
	include_once("/consumer/scripts/whichItem.js");

	function initPopWindow( theLink, windowParms, windowName, noPopwindow )
	{
		//	Make sure we're looking at the link object:
		if ( theLink.indexOf )
		{
			theLink = whichItem(theLink);
		}

		if ( theLink != null )
		{
			//	Set theLink properties based on the input provided:
			if ( theLink.href )
			{
				theLink.popURL = theLink.href;
			}
			if ( windowName == null || windowName == "" )
			{
				theLink.popWindowName = "_blank";
			}
			theLink.popWindowParms = windowParms;
	
			//	Set the noPopwindow handler/callback...
			if ( typeof(noPopwindow) == "function" )
			{
				theLink.noPopwindow = noPopwindow;
			}
		}
	}
}

if ( typeof(showPopWindow) != "function" )
{
	function showPopWindow(theLink)
	{
		if ( theLink.indexOf )
		{
			theLink = whichItem(theLink);
		}
//		alert("theLink = " + theLink);

		if ( theLink )
		{
			NewWindow = window.open(theLink.popURL, theLink.popWindowName, theLink.popWindowParms);
			//	Comment out the above line, and uncomment the following line to test the noPopwindow callback...
//			NewWindow = null;
			if ( NewWindow != null )
			{
				return false;
			}
			else
			{
				if ( typeof(theLink.noPopwindow) == "function" )
				{
					theLink.noPopwindow();
					return false;
				}
				else
				{
					return true;
				}
			}
		}
		else
		{
			return true;
		}
	}
}