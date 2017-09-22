if ( typeof(whichItem) == "undefined" )
{
	function whichItem(theItemID)
	{
		if (document.getElementById)
		{
			return document.getElementById(theItemID);
		}
		if (document[theItemID])
		{
			return document[theItemID];
		}
		if (document.all)
		{
			return document.all[theItemID];
		}
		if (eval("document." + theItemID))
		{
			return eval("document." + theItemID);
		}
		return null;
	}
}