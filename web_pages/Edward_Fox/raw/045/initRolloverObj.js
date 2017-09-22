if ( typeof(initRolloverObj) == "undefined" )
{
	include_once(jsLibPath + "whichItem.js");
	
	function initRolloverObj(theImage, theHotURL, theClickURL, theDisabledURL)
	{
		if ( typeof(theImage) == "string" )
		{
			theImage = whichItem(theImage);
		}
		if ( typeof(theImage) != "object")
		{
			throw("Could not associate image for rollover");
			return false;
		}
		//	Make sure the item has a disabled property: We'll need it later!
		if ( theImage.disabled == null )
		{
			theImage.disabled = false;
		}
		if ( ! theImage.hotImage)
		{
			theImage.hotImage = new Image();
			theImage.coldImage = new Image();
			theImage.clickImg = new Image();
			theImage.coldImage.src = theImage.src;
			theImage.hotImage.src = theHotURL;
			theImage.clickImg.src = theHotURL;
			if ( theClickURL != null )
				{ theImage.clickImg.src = theClickURL; }

			//	Disabled-state image support:
			if ( theImage.disabledImage == null && theDisabledURL != null )
			{
				/*
					Since a disabledImage was provided, there are a couple of additional assumptions:
					*	The image will need enable/disable methods if it doesn't already have them;
					*	The image may need an intercept of it's onClick event to handle clicks while it's in a disabled state; and
					*	The image should load to a disabled state to begin with.
				*/
	
				//	First, do the usual image-preloading, etc.
				theImage.disabledImage = new Image();
				theImage.disabledImage.src = theDisabledURL;
	
				//	Now define the image's enable and disable methods:
				theImage.enable = function()
				{
					theImage.disabled = false;
					theImage.src = this.coldImage.src;
				}
	
				theImage.disable = function()
				{
					theImage.disabled = true;
					theImage.src = this.disabledImage.src;
				}
	
				//	Disable the image:
				theImage.disable();
			}

			if ( theImage && theImage.addEventListener )
			{
				theImage.addEventListener('mouseover', function () { if (! theImage.disabled && theImage.src != theImage.hotImage.src) theImage.src = theImage.hotImage.src; }, false);
				theImage.addEventListener('mouseout', function () { if (! theImage.disabled && theImage.src != theImage.coldImage.src) theImage.src = theImage.coldImage.src; }, false);
				theImage.addEventListener('mousedown', function () { if (! theImage.disabled && theImage.src != theImage.clickImg.src) theImage.src = theImage.clickImg.src; }, false);
				theImage.addEventListener('mouseup', function () { if (! theImage.disabled && theImage.src != theImage.hotImage.src) theImage.src = theImage.hotImage.src; }, false);
				return true;
			}
			if ( theImage && theImage.attachEvent )
			{
				theImage.attachEvent('onmouseover', function () { if (! theImage.disabled && theImage.src != theImage.hotImage.src) theImage.src = theImage.hotImage.src; }, false);
				theImage.attachEvent('onmouseout', function () { if (! theImage.disabled && theImage.src != theImage.coldImage.src) theImage.src = theImage.coldImage.src; }, false);
				theImage.attachEvent('onmousedown', function () { if (! theImage.disabled && theImage.src != theImage.clickImg.src) theImage.src = theImage.clickImg.src; }, false);
				theImage.attachEvent('onmouseup', function () { if (! theImage.disabled && theImage.src != theImage.hotImage.src) theImage.src = theImage.hotImage.src; }, false);
				return true;
			}
			return false;
		}
	}
//	alert("initRolloverObj = " + initRolloverObj);
}

if ( typeof(initRolloverByClass) == "undefined" )
{
	include_once(jsLibPath + "whichItem.js");

	//	Global array of all images and <input type="image">s in the document:
	var	allPossRollovers = false;
	
	function initRolloverByClass(theClassName, theHotURL, theClickURL, theDisabledURL)
	{
		if ( ! allPossRollovers )
		{
			//	Gather up all possible image-rollovers
			allPossRollovers = document.getElementsByTagName("img");
			allInputs = document.getElementsByTagName("input");
		}

		//	Loop through allPossRollovers, and if the element's class contains theClassName,
		//	apply the normal initRolloverObject to it:
		for ( ro=0; ro < allPossRollovers.length; ro++ )
		{
			if ( allPossRollovers[ro].className.indexOf(theClassName) != -1 )
			{
				initRolloverObj(allPossRollovers[ro], theHotURL, theClickURL, theDisabledURL);
			}
		}
		for ( ro=0; ro < allInputs.length; ro++ )
		{
			if ( allInputs[ro].type == "image" && allInputs[ro].className.indexOf(theClassName) != -1 )
			{
				initRolloverObj(allInputs[ro], theHotURL, theClickURL, theDisabledURL);
			}
		}
	}
}