function rememberItCountCallback(numItems) {
		document.getElementById("rememberItemsDiv").style.height = getElementByAttribute('className', 'rememberItems')[0].offsetHeight + "px";
		document.getElementById('rememberItemCount').innerHTML = "<span style='color: #1289D0; font-weight: bold'>" + numItems.replace("items", "") + "</span> items";
			if(parseInt(numItems) == 0)
		{
			document.getElementById("ddopts").style.display	= 'none';
			document.getElementById("allbox").style.display	= 'none';
			document.getElementById("allbox").style.visibility	= 'hidden';
			document.getElementById("rememberItemCount").style.visibility = 'visible';
				if(is_aol) {
					document.getElementById("rememberItNoData").style.marginTop ='-49px';
				}
			window.onscroll = chkScroll;
		return;	
		}
		else
		{
				document.getElementById("ddopts").style.display	= 'block';
			}
			document.getElementById("ddopts").style.display	= 'block';
			document.getElementById("allbox").style.display	= 'block';
			document.getElementById("allbox").style.visibility	= 'visible';
		reqWait = 1;
}

function adjustRemContainer()
			{			
			if(getElementByAttribute("className","rememberItems")[0])if(getElementByAttribute("className","rememberItems")[0].offsetHeight >= '325')
				{
				document.getElementById("rememberItemsDiv").style.height = '325px';
				document.getElementById("rememberItemsDiv").style.overflow = "auto";
					if(document.all)
					{
					if (document.getElementById('wheredItGoTable'))
					{	
						document.getElementById('wheredItGoTable').style.width = "503px";
					}
					}
		else
		{
					if (document.getElementById('wheredItGoTable'))
					{
						document.getElementById('wheredItGoTable').style.width = "501px";
					}
				}
			}
			else
			{
				document.getElementById("rememberItemsDiv").style.height = '';
				document.getElementById("rememberItemsDiv").style.overflow = "";
				if (document.getElementById('wheredItGoTable'))
				{
					document.getElementById('wheredItGoTable').style.width = "100%";
				}
			}
}
 
function getElementInside(containerElement, searchElementTagName)
{
	for(i=0; i<containerElement.childNodes.length; i++)
	{
		if(containerElement.childNodes[i].tagName)
		{
			if(containerElement.childNodes[i].tagName.toUpperCase() == searchElementTagName.toUpperCase())
			{
				return containerElement.childNodes[i];
			}
		}
	}
}
 
function rememberItShowErrorBox(errorCode) {
	tabClick('rememberItems', 7, 2, 'green');
      //The error code values here correspond to the values in WLClient.java
      if ( errorCode == 7 || errorCode == 8 || errorCode == 9 ) {
          return;
      } else  if ( errorCode == 0 ) {
           //Trying to click on go without selecting an action.
           isgE('rememberError').style.display = "block";
           iswH(isgE('rememberErrorText'), "Select an action to perform.");
           isgE('rememberErrorLink').focus();
      } else  if ( errorCode == 4 ) {
           //Trying to add too many items to wishlist.
           isgE('rememberError').style.display = "block";
           iswH(isgE('rememberErrorText'), "Your list is full. You must delete an item before adding any others.");
           isgE('rememberErrorLink').focus();
      } else  if ( errorCode == 41 ) {
          //Trying to add too many items to wishlist.
           isgE('rememberError').style.display = "block";
           iswH(isgE('rememberErrorText'), "Your list including the expired items is full. You must delete an item before adding any others.");
           isgE('rememberErrorLink').focus();
      } else if ( errorCode == 100 ) {
          //Trying to add a duplicate item to the list.
          isgE('rememberError').style.display = "block";
          iswH(isgE('rememberErrorText'), "This item has already been added to your list.");
          isgE('rememberErrorLink').focus();
      } else if ( errorCode == 101 ) {
          //Not signed in.
          isgE('rememberError').style.display = "block";
          iswH(isgE('rememberErrorText'), "Sorry, you need to sign in to use this feature.");
          isgE('rememberErrorLink').focus()
      } else if ( errorCode == 999 ) {
          //Block all SNS.
          isgE('rememberError').style.display = "block";
          iswH(isgE('rememberErrorText'), "The Remember It feature is coming soon.");
          isgE('rememberErrorLink').focus();
      } else if ( errorCode == 300 ) {
          //Not signed in.
          isgE('rememberError').style.display = "block";
          iswH(isgE('rememberErrorText'), "You may only compare up to 9 items at a time. Please deselect some items and try again.");
          isgE('rememberErrorLink').focus();
      } else if ( errorCode == 311 ) {
          //Not signed in.
          isgE('rememberError').style.display = "block";
          iswH(isgE('rememberErrorText'), "Please wait until your wishlist has fully loaded to add items.");
          isgE('rememberErrorLink').focus();
	  } else if ( errorCode > 0 ) {
          // a general backend failure occured.
          iswH(isgE('rememberItemCount'), "Try later");
          isgE('rememberError').style.display = "block";
          iswH(isgE('rememberErrorText'), "An unknown error has occurred. Please try again later.");
          isgE('rememberErrorLink').focus();
	  }
	  window.scrollTo(0,0);
}

function moveRememberItData() {
	if (isgE('rememberItData')) {
    	var rememberItData = isgE('rememberItData').innerHTML;
    	parent.copyIframeContentToDiv( rememberItData );
	}
}

function copyIframeContentToDiv( divContent ) {
    var rememberItemsDiv = isgE('rememberItemsDiv');
    iswH( rememberItemsDiv, divContent );
    if (navigator.userAgent.toLowerCase().indexOf("mac") != -1) {
         rememberItemsDiv.scrollTop = 0;
    }
//if the content loaded contains the wishlist (wrapped in the rememberForm, then activate the following controls)
	var tdArray = document.getElementsByTagName('td');
	var dropdownFlag = 0;
	for(var i = 0;i < tdArray.length; i++){
		if(tdArray[i].id.indexOf('wlRow') != -1){
			var dropdownFlag = 1;
			break;
		}
	}
    if(dropdownFlag == 1){
		isgE('rememberItemCount').style.visibility = "visible";
		if(isgE('allbox').style)isgE('allbox').style.display = "block";
		isgE('ddopts').innerHTML = isgE('dd_1').innerHTML;
		isgE('ddopts').style.visibility = "visible";
		
			document.getElementById('rememberContainer').style.top		= '70px';
			document.getElementById("rememberContainer").style.zIndex	= '10';

			document.getElementById("ddopts").style.position			= 'absolute';
			document.getElementById("ddopts").style.top					= '31px';
			document.getElementById("ddopts").style.left				= '7px';
			document.getElementById("ddopts").style.border				= 'solid #BDDD3D';
			document.getElementById("ddopts").style.borderWidth			= '4px 0';
			document.getElementById("ddopts").style.width				= '512px';
			document.getElementById("ddopts").style.height				= '29px';
			document.getElementById("ddopts").style.textAlign			= 'left';

			document.getElementById("rememberItemCount").style.textAlign		= 'left';
			document.getElementById("rememberItemCount").style.paddingTop		= '3px';
			document.getElementById("rememberItemCount").style.paddingLeft		= '10px';
			document.getElementById("rememberItemCount").style.width			= '60px';
			document.getElementById("rememberItemCount").style.backgroundColor	= '#BDDD3D';

			document.getElementById("allbox").style.margin = '0px';
			document.getElementById("allbox").style.padding = '0px 10px 0 0';

			document.getElementById("ri_ddopts").style.marginLeft = '0px';
			document.getElementById("ri_ddopts").style.paddingLeft = '0px';

//	Commented to address the IE7 Bugs: 279579, 269931 & 269946 - Pinpoint & Remember It tabs are hidden after login
//			document.getElementById("rememberItemsDiv_2").style.height = '10px';
//			document.getElementById("pinpointRememberIt_menu").style.height = '10px';
	
		
    }
	else{
		isgE('rememberItemCount').style.visibility = "hidden";
		if(isgE('allbox').style)isgE('allbox').style.visibility = "hidden";
		isgE('ddopts').innerHTML = isgE('dd_1').innerHTML;
		isgE('ddopts').style.visibility = "hidden";
	}
	isWL = 1;
}

/*function rememberItAddItem(theform) {
    theform.target = "rememberItemsFrame";
    theform.action="/aol/ppxwishlist";
    theform.submit();
}*/


function rememberItAddItem(theform) {
} 

function remItAddItem(theform)
{
	if(isWL != 1){
		rememberItShowErrorBox(311);
		return 0;
	}
	if(reqWait != 1){
		return 0;
	}
	else{
		if (document.forms['rememberForm']) {
		var bizrateID = theform.elements['uid'].value;
		var addProductURL = "/instore/WishList?action=addProduct&wid=1";
		//addProductURL = addProductURL + "&sn=" + document.forms['rememberForm'].elements['sn'].value;
		var paramString = '';
		var count=0;
		for (var i = 0; i < document.forms['rememberForm'].elements.length; i++) {
				if (document.forms['rememberForm'].elements[i].value == bizrateID) {
				   rememberItShowErrorBox(100);
			   return 0;
				}
			if (document.forms['rememberForm'].elements[i].type == 'checkbox') {
			count++;
			if(count == 100) {
				rememberItShowErrorBox(4);
				return 0;
			}	
			}
		}
		if((count + removedItemsCount()) == 100){
			rememberItShowErrorBox(41);
			return false;	
		}
		for(var i=0;i < theform.elements.length; i++) {
			paramString += "&" + theform.elements[i].name + "=" + encodeURIComponent(theform.elements[i].value);
		}
		addProductURL += paramString;
		var rememberItFrame = isgE('rememberItemsFrame');
		rememberItFrame.src = addProductURL;
		reqWait = 0;
		} else {
			rememberItShowErrorBox(101);
			return 0;
		}
	}
    tabClick('rememberItems', 7, 2, 'green');
} 

function rememberItDoDelete(theform, theorigin) {
	//var sn = theform.sn.value;
    var deleteBaseURL="/instore/WishList?action=removeProduct&wid=1&pid="
    var wishlistIdArray = new Array();
    var checkedCount = 0;

    for (var i = 0; i < theform.elements.length; i++) {
        if (theform.elements[i].type == "checkbox") {
            if (theform.elements[i].checked) {
                wishlistIdArray[checkedCount] = theform.elements[i].name;
                checkedCount++;
            }
        }
    }
    var deleteConfirm;
    if (checkedCount > 1){
        deleteConfirm = confirm ("Are you sure you want to delete the selected items? Press OK to confirm.")
    } else if (checkedCount == 1) {
        deleteConfirm = confirm ("Are you sure you want to delete this item? Press OK to confirm.")
    } else {
    	// new addition to function - no items selected to delete
		if (theorigin=='fullview') {
			alert('Please select an item to delete.');
		} else {
			isgE('rememberError').style.display = "block";
        	iswH(isgE('rememberErrorText'), "Please select an item to delete.");
        	isgE('rememberErrorLink').focus();
		}
		return;
    }
    
    if (!deleteConfirm)
        return;

    for (var j = 0; j < checkedCount; j++) {
        if ( j > 0 ) {
            deleteBaseURL = deleteBaseURL + ",";
        }
        deleteBaseURL = deleteBaseURL + wishlistIdArray[j];
    }

	if (theorigin == 'fullview') {
		deleteBaseURL += '&view=display';
    	document.location.replace(deleteBaseURL);
	} else {
		var rememberItFrame = isgE('rememberItemsFrame');
    	rememberItFrame.src = deleteBaseURL;
	}
	//document.getElementById("rememberItemsDiv").style.height = '';
	//document.getElementById("rememberItemsDiv").style.overflow = "";
	//adjustRemContainer();
}

function rememberItDoCompare(theform, maxitems, theorigin) {
    var compareBaseURL="/instore/ppecompare?nbts=1&p2c="
    var bizrateIdArray = new Array();
    var checkedCount = 0;
    for (var i = 0; i < theform.elements.length; i++) {
       if (theform.elements[i].type == "checkbox") {
          if (theform.elements[i].checked) {
             bizrateIdArray[checkedCount] = theform.elements[i].value;
             checkedCount++;
          }
       }
    }

  // the figure here
   if ( checkedCount > maxitems ) {
	   	if (theorigin=='fullview') {
			alert("You may only compare up to 9 items at a time. Please deselect some items and try again."); 
		}
		else{
       		rememberItShowErrorBox(300);
		}
        return;
   }

	// new addition to existing function
	if (checkedCount < 2) {
		if (theorigin=='fullview') {
			alert('Please select at least two items to compare.');
		} else {
			isgE('rememberError').style.display = "block";
        	iswH(isgE('rememberErrorText'), "Please select at least two items to compare.");
        	isgE('rememberErrorLink').focus();
		}
		return;
	}

    for (var j = 0; j < checkedCount; j++) {
        if ( j > 0 ) {
            compareBaseURL = compareBaseURL + ",";
        }
        compareBaseURL = compareBaseURL + bizrateIdArray[j];
    }

    window.location = compareBaseURL+'&rpshow=1';

}

function validateTriggerPrice(theform){

    var someStr = theform.price.value;
    var valid = someStr.match(/^\d+\.\d{0,2}$|^\d+$|^\.\d{1,2}$/);
    if (!valid) {
        alert("Please enter a numeric value!");
        return false;
    }

    if ((parseFloat(someStr)*100) >= parseFloat(theform.currprice.value)) {
        alert("Alert Price is too high!");
        return false;
    }

    if ((parseFloat(someStr)*100) <= 0) {
        alert("Alert Price is too low!");
        return false;
    }

return true;
}

function alertSubmit(url,form) {
    if (validateTriggerPrice(form)) {
        window.opener.refreshRememberIt(url);
        form.submit();
        } else return;
}

function deleteItemFromWishlist(url) {
     window.opener.refreshRememberIt(url);
     window.close();
}

function alertCloseAndRefresh(url) {
     window.opener.refreshRememberIt(url);
     setTimeout('window.close()', 400);
}

function alertEdit(form) {
    if ( validateTriggerPrice(form)) form.submit();
    return;
}

function alertDelete(form) {
    form.act.value = "delBut";
    form.submit();
}

function alertUI() {
    isopenFullChromeWindow('http://alerts.aol.com/ar/alerts/index.ev','','');
    setTimeout('window.close()', 400);
    }

function refreshRememberIt(url) {
    if (null != isgE('rememberItemsFrame')) {
        var rememberItFrame = isgE('rememberItemsFrame');
        rememberItFrame.src=url+'&rnd='+Math.random();
    } else this.src=url+'&rnd='+Math.random();
}

function toggleAllDrawerItems(formName) {

	if(isgE('ri_check_btn')) {
		button = document.getElementById('ri_check_btn');
		if (document.forms[formName]) {
			var theform = document.forms[formName];
		    for (var i = 0; i < theform.elements.length; i++) {
		       if (theform.elements[i].type == "checkbox") {
					if(button.checked)
					{
						theform.elements[i].checked = true;				
					}
					else
					{
						theform.elements[i].checked = false;
					}
		       }
		    }
			if(button.checked)
			{
				document.getElementById('lbl_ri_check_btn').innerHTML = "Uncheck'em all";
			}
			else
			{
				document.getElementById('lbl_ri_check_btn').innerHTML = "Check'em all";
			}
		}
	}
}

function buildPrintPage(theform, origin) {
	var printBaseURL = '/instore/WishList?view=print&filter=';

	var checkedCount = 0;
    var wishlistIdArray = new Array();
	for (var i = 0; i < theform.elements.length; i++) {
		if (theform.elements[i].type == "checkbox") {
			if (theform.elements[i].checked) {
                wishlistIdArray[checkedCount] = theform.elements[i].name;
				checkedCount++;
			}
		}
	}

	if (checkedCount < 1) {
		var errorText = "Please select an item to print.";
		if (origin == 'drawer') {
			isgE('rememberError').style.display = "block";
			iswH(isgE('rememberErrorText'), errorText);
			isgE('rememberErrorLink').focus();
		} else window.alert(errorText);

		return;
	}

    for (var j = 0; j < checkedCount; j++) {
        if ( j > 0 ) {printBaseURL = printBaseURL + ",";}
        printBaseURL = printBaseURL + wishlistIdArray[j];
    }
	isopenCenteredWindow(printBaseURL, 'popup', 640, 390, '', true );
}

function executeOption(aform, origin) {
	var formOption = "";
	
	if (origin == 'drawer') {
		//var riList = document.getElementById('list');
		//formOption = riList.options[riList.selectedIndex].value;
		
		//fix for Bug#212299
		var listDiv=document.getElementById('ddopts');		
		var items=listDiv.childNodes;		
		for(j=0;j<items.length;j++){
			var form=items.item(j);
			if(form.name=='ri_ddopts'){
				var riList=form.list;
				formOption = riList.options[riList.selectedIndex].value;
				break;
			}		
		} 

	} else if (origin == 'fullview') {
		var formSelect = document.fullviewopts.item_option
		formOption = formSelect.options[formSelect.selectedIndex].value;
	}

	switch(formOption) {
		case "0":
			rememberItShowErrorBox(0);
			break;
		case "email":
			shareThem('email', aform, origin);
			break;
		case "im":
			shareThem('im', aform, origin);
			break;
		case "print":
			// this needs to be modified to pass in the list of items
			buildPrintPage(aform, origin);
			break;
		case "compare":
			rememberItDoCompare(aform,9,origin);
			break;
		case "delete":
			rememberItDoDelete(aform, origin);
			break;
		case "viewfull":
			window.location = "/instore/WishList?view=display";
			break;
		case "help":
			isopenCenteredWindow('ppphtml?fname=fe.htmlRIH', 'popup1', 542, 370, '', true );
			break;
		default:
			break;
	}
}

function removedItemsCount(){
	var count = 0;
	var removedItem;
	for(var i =1;i<=100;i++){
		removedItem = document.getElementById("remMoved"+i);				
		if(removedItem != null){
			count++;		
		 }
	}	
	return count;
}

function adjustObsoleteItems()
{
	if(getElementInside(getElementInside(getElementByAttribute('className', 'rememberItems')[0], "form"), "table"))
	{
	var theTable = getElementInside(getElementInside(getElementByAttribute('className', 'rememberItems')[0], "form"), "table");
	var oldTableItemsArr = theTable.getElementsByTagName("input");
	var	oldTableItems = new Array();
	var tableInnerContent = "";
	var colSpan = "";
	for(i=0; i<oldTableItemsArr.length; i++)
	{
		if(document.all)
		{
			oldTableItems[oldTableItems.length] = oldTableItemsArr[i].parentElement.parentElement.parentElement;
		}
		else
		{
			oldTableItems[oldTableItems.length] = oldTableItemsArr[i].parentNode.parentNode.parentNode;
		}
	}
	for(i=1; i<=oldTableItems.length; i++)
	{
		if(i%2 == 1)
		{
			if(i == oldTableItems.length)
			{
				colSpan = "colspan=2"
			}
			tableInnerContent += "<tr><td " + colSpan + "><table>"+oldTableItems[i-1].innerHTML+"</table></td>";
		}
		else
		{
			tableInnerContent += "<td><table>"+oldTableItems[i-1].innerHTML+"</table></td></tr>";
		}
	
	}
	if(document.all)
	{
		theTable.outerHTML = "<table><tbody>"+tableInnerContent+"</tbody><table>";
	}
	else
	{
		theTable.innerHTML = tableInnerContent;
	}
	}
	 adjustRemContainer();
}
  function getElementByAttribute(aAttribute,aValue,aInElement)
  {
	  var ElementVerifier;
		var Elements=new Array();
	  function SearchElement(aElement)
		{ 
		  if(aElement==null||aElement==undefined)return
		  if(ElementVerifier(aElement))
			{ 
			  Elements[Elements.length]=aElement;
			}
			SearchElement(aElement.firstChild);
			SearchElement(aElement.nextSibling);
		}
		
		if(aInElement==undefined)aInElement=document.body;
		str="if(Element."+aAttribute+"=='"+aValue+"'){return true;}else{return false}";
		ElementVerifier=function(aElement)
		{
		  Element=aElement;
			if(aElement.nodeName=='#text')return false;
			var E=new Function(str);
			if(E()){return true;}else{return false};
		}
		SearchElement(aInElement);
		return Elements;
}
function chkScroll(){
	if(document.documentElement.scrollTop < 100)
	{
		document.getElementsByClassName('rememberCopy', 'rememberItNoData')[0].className = "rememberCopy";
	}
}
