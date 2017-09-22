//function for submitting the select dd at the top.
function submitTopCategoryForm(ddid)
{
	//get the selected dropdown box id.
	ddobj = eval('document.frmTopCategories.entitydd_' + ddid);
	ddval = ddobj.options[ddobj.selectedIndex].value;
	
	//get the link and the value from the option.
	arryOption = ddval.split("*");
	
	intEn_key = arryOption[0];
	strLink = arryOption[1];
	
	//submit the form with the selected entity id.
	document.frmTopCategories.entity.value = intEn_key;
	
	//append the entity to the end of the form action.
	if (strLink == 'none')
	{
		document.frmTopCategories.action = document.frmTopCategories.action + '?entity=' + intEn_key;
	}
	else
	{
		document.frmTopCategories.action = strLink + '/stoteam.asp?entity=' + intEn_key;
	}
	
	document.frmTopCategories.submit();
	
	//alert(ddval);
}

//function for submitting the drill-down browse section.
function submitDrillDownBrowse(ddobj,ddtype,entity)
{
	//get the selected dropdown value.
	if (ddtype == 'category')
	{
		inCategory = ddobj.options[ddobj.selectedIndex].value;
		
		//loop the forms array and get the drilldown browse form.
		for (ii=0; ii <= document.forms.length-1; ii++)
		{		
			if (document.forms[ii].name == 'frmBrowseDrill')
			{
				//get the selected sortby value.
				inSortBy = document.forms[ii].sortbybrowse.options[document.forms[ii].sortbybrowse.selectedIndex].value;
				break;
			}
		}
	}
	//else the user had selected a sortby option.
	else
	{
		inSortBy = ddobj.options[ddobj.selectedIndex].value;
		
		//loop the forms array and get the drilldown browse form.
		for (ii=0; ii <= document.forms.length-1; ii++)
		{		
			if (document.forms[ii].name == 'frmBrowseDrill')
			{
				//get the selected category value.
				inCategory = document.forms[ii].categorybrowse.options[document.forms[ii].categorybrowse.selectedIndex].value;
				break;
			}
		}
	}
	//redirect user to this drilldown.
	//now if the category selected is all categories and the sort is hot items, we take the user to the team page instead.
	if (inCategory == '' && inSortBy == 1)
	{
		strRedirectURL = "/stoteam.asp?page=1&entity=" + entity + "&category=" + inCategory + "&sortby=" + inSortBy;	
	}
	else
	{
		strRedirectURL = "/stobrowse.asp?page=1&entity=" + entity + "&category=" + inCategory + "&sortby=" + inSortBy;
	}
	
	//make sure we are not in ssl. if so, we need to redirect to non-secure.
	strURL = location.hostname;
	
	if (strURL.indexOf("ccc.") >= 0)
	{
		window.location.href = "http://ccc.rivals.com" + strRedirectURL;
	}
	else if (strURL.indexOf("secure.") >= 0)
	{
		window.location.href = "http://www.rivals.com" + strRedirectURL;
	}
	else
	{
		window.location.href = "http://" + strURL + strRedirectURL;
	}
	//alert(strRedirectURL);	
	//alert(ddobj.options[ddobj.selectedIndex].value);
	//alert(document.forms[2].name);
}

//Not a complete browser sniffer, it only highlights those browsers that can cause problems for the API.
function sniffBrowsers() {
	ns4 = document.layers;
	op5 = (navigator.userAgent.indexOf("Opera 5")!=-1) 
		||(navigator.userAgent.indexOf("Opera/5")!=-1);
	op6 = (navigator.userAgent.indexOf("Opera 6")!=-1) 
		||(navigator.userAgent.indexOf("Opera/6")!=-1);
	
	agt = navigator.userAgent.toLowerCase();
	mac = (agt.indexOf("mac")!=-1);
	ie = (agt.indexOf("msie") != -1); 
	mac_ie = mac && ie;
	ffox = (agt.indexOf("firefox") != -1);
}

//the functions return the x or y co-ordinate of an image.  All the browsers 
//except Netscape 4.x just call getElementLeft(myImage) or getElementTop(myImage) to get the x or y co-ordinates.
function getImageTop(myImage) {
	var y, obj;	
	if (document.layers) {
		var img = getImage(myImage);
		if (img.container != null)
			return img.container.pageY + img.y;
		else
			return img.y;
	} else {
		return getElementTop(myImage);
	}
	return -1;
}

//Get the page co-ordinates of any image.
function getImageLeft(myImage) {
	var x, obj;
	if (document.layers) {
		var img = getImage(myImage);
    	if (img.container != null)
			return img.container.pageX + img.x;
		else
			return img.x;
  	} else {
		return getElementLeft(myImage);
	}
	return -1;
}	

//Get the page co-ordinates of any element (not images in NS4).
function getElementLeft(Elem) {
	if (ns4) {
		var elem = getObjNN4(document, Elem);
		return elem.pageX;
	} else {		
		var elem;
		if((document.getElementById) || (ffox)) {	
			var elem = document.getElementById(Elem);
		} else if (document.all){
			var elem = document.all[Elem];
		}
		xPos = elem.offsetLeft;		
		tempEl = elem.offsetParent;
  		while (tempEl != null) {
  			xPos += tempEl.offsetLeft;
	  		tempEl = tempEl.offsetParent;
  		}
		return xPos;
	}
}

//Get the page co-ordinates of any element (not images in NS4).
function getElementTop(Elem) {
	if (ns4) {
		var elem = getObjNN4(document, Elem);
		return elem.pageY;
	} else {						
		if((document.getElementById) || (ffox)) {	
			var elem = document.getElementById(Elem);
		} else if (document.all) {
			var elem = document.all[Elem];
		}
		yPos = elem.offsetTop;		
		tempEl = elem.offsetParent;		
		while (tempEl != null) {			
  			yPos += tempEl.offsetTop;
	  		tempEl = tempEl.offsetParent;
  		}
  		//alert(yPos * 2);
  		//yPos =  yPos * 2;
		return yPos;
	}
}

//Used to find other objects in NS4.
function getObjNN4(obj,name)
{
	var x = obj.layers;
	var foundLayer;
	for (var i=0;i<x.length;i++)
	{
		if (x[i].id == name)
		 	foundLayer = x[i];
		else if (x[i].layers.length)
			var tmp = getObjNN4(x[i],name);
		if (tmp) foundLayer = tmp;
	}
	return foundLayer;
}

//Used to find image objects in NS4.
function findImage(name, doc) {
	var i, img;
	for (i = 0; i < doc.images.length; i++) {
    	if (doc.images[i].name == name) {    		
			return doc.images[i];
		}
	}	
	for (i = 0; i < doc.layers.length; i++) {
    	if ((img = findImage(name, doc.layers[i].document)) != null) {
			img.container = doc.layers[i];
			return img;
    	}
	}
	return null;
}
//Used to find image objects in NS4.
function getImage(name) {
	if (document.layers) {
    	return findImage(name, document);
	}
	return null;
}

//Move the element "myObject" to screen co-ordinates x, y.
function moveXY(myObject, x, y) {

	obj = getStyleObject(myObject);
	if (ns4) {
		obj.top = y;
 		obj.left = x;
	} else {
		if (op5) {
			obj.pixelTop = y;
 			obj.pixelLeft = x;
		} else {
			//alert('test');
			//alert(obj.left);
			obj.top = y + 'px';
 			obj.left = x + 'px'; 			
		}	
	}
	obj['display'] = 'inline';
	//obj2 = document.getElementById(myObject);
	//obj2.style['display'] = 'inline';	
}

//The function returns the style object for the three types of browsers.
function getStyleObject(objectId) {
	if(document.getElementById && document.getElementById(objectId)) {		
		return document.getElementById(objectId).style;
	} else if (document.all && document.all(objectId)) {
		return document.all(objectId).style;
	} else if (document.layers && document.layers[objectId]) {
		return getObjNN4(document,objectId);
	} else {
		return false;
	}
} 

//The functions return the width or height of an image.
//NOTE: All the browsers except Netscape 4.x just call getElementWidth(myImage) or getElementHeight(myImage) 
//to get the width or height.
function getImageWidth(myImage) {
	var x, obj;
	if (document.layers) {
		var img = getImage(myImage);
		return img.width;
	} else {
		return getElementWidth(myImage);
	}
	return -1;
}

function getImageHeight(myImage) {
	var y, obj;
	if (document.layers) {
		var img = getImage(myImage);
		return img.height;
	} else {
		return getElementHeight(myImage);
	}
	return -1;
}

//timer function.
function InitializeTimer()
{
    // Set the length of the timer, in seconds
    secs = 0;
    StopTheClock();
    StartTheTimer();
}
function StopTheClock()
{
    if(timerRunning)
        clearTimeout(timerID)
    timerRunning = false
}
function StartTheTimer()
{
    if (secs==0)
    {
        StopTheClock()
        // Here's where you put something useful that's
        // supposed to happen after the allotted time.
       strPageName = location.pathname.toLowerCase();
       
       if (strPageName.indexOf("stoteam.asp") >= 0)
       {
			moveBubblesOnTeamHome();
		}
		else
		{
			moveBubbles();
		}
    }
    else
    {
        self.status = secs
        secs = secs - 1
        timerRunning = true
        timerID = self.setTimeout("StartTheTimer()", delay)
    }
}

//function to move the bubbles on the stobrowse.asp page.
function moveBubbles()
{
	strPageName = location.pathname.toLowerCase();
	
	if (arryItems.length > 0)
	{
		for (x=1; x <= arryItems.length; x++) 
		{
			if (ie == true)
			{
				//alert('test');
				inTempTop = getImageTop("discountitem_" + x);
				
				//check if user had refreshed the page. If so, we need to adjust the bubble images in case they move down.
				/* if(document.refreshForm.visited.value == "" )
				{
					// This is a fresh page load
					document.refreshForm.visited.value = "1";		
				*/
				if (bolNotInStore == false)
				{
					inTop = inTempTop - 22;			
					inLeft = getImageLeft("discountitem_" + x) + 96;	
				}
				else
				{	
					inTop = inTempTop + 80;		
					inLeft = getImageLeft("discountitem_" + x) + 85;	
				}			
			}
			else
			{
				//alert('test');
				if (bolNotInStore == false)
				{
					inTop = getImageTop("discountitem_" + x) - 22;
					inLeft = getImageLeft("discountitem_" + x) + 96;
				}
				//else page is not from store and is on right nav.
				else
				{
					inTop = getImageTop("discountitem_" + x) + 80;
					inLeft = getImageLeft("discountitem_" + x) + 85;
				}					
			}
			
			//move the price bubble to the location.
			moveXY("discountbubble_" + x,inLeft,inTop);
		}
	}
}

//function to move bubbles on team home page
function moveBubblesOnTeamHome()
{
	if (arryItems.length > 0)
	{
		for (x=1; x <= arryItems.length; x++) 
		{
			inTop = getImageTop("discountitem_" + x) - 22;
			inLeft = getImageLeft("discountitem_" + x) + 96;	
			
			//move the price bubble to the location.
			moveXY("discountbubble_" + x,inLeft,inTop);
		}
	}
}
