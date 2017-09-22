var dummyDiv = document.getElementById('dummy').innerHTML;
var dummyDivinMemory ="";
var hiddenFrame = document.createElement("iframe");
hiddenFrame.setAttribute("name", "hidFrame");
hiddenFrame.setAttribute("id", "hidFrame");
hiddenFrame.setAttribute("src", "about:blank");
document.body.appendChild(hiddenFrame);
	
function set() {
	dummyDiv = dummyDiv.replace(/ppxfilter\?/, "")
	dummyDivinMemory = dummyDiv;
	document.getElementById('dummy').innerHTML = "";
}
	function loadVirtual()
	{
			$('rapportResults').style.width = '512px';
			document.getElementById('hidFrame').style.display = "none";
			window.frames['hidFrame'].document.body.innerHTML = dummyDivinMemory;
			document.getElementById('otherContent').style.display = 'block';
			document.getElementById('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportSearchMatches');
			if(document.getElementById('rapportSearchMatches')) document.getElementById('rapportSearchMatches').style.display = "block";
			if(window.frames['hidFrame'].document.getElementById('rapportFilters') != null)
			{
				document.getElementById('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportFilters');
				document.getElementById('rapportFilters').style.display = "block";
			}
	
			document.getElementById('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportCategories');
			document.getElementById('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportSponsors');
	
			var rapportResultsInnerHTMLLength='0';
			var rapportSponsorsInnerHTMLLength='0';
			
			if(document.getElementById('rapportResults')){
				rapportResultsInnerHTMLLength=document.getElementById('rapportResults').innerHTML.length;
			}
			if(document.getElementById('rapportSponsors')){
				rapportSponsorsInnerHTMLLength=document.getElementById('rapportSponsors').innerHTML.length;
			}

			if(rapportResultsInnerHTMLLength > 2 || rapportSponsorsInnerHTMLLength > 2)
			{
			document.getElementById('rapportResults').style.display = "block";
				if(document.getElementById('rapportSponsors'))document.getElementById('rapportSponsors').style.display = "block";
				if(document.getElementById('rapportBtmContainer'))document.getElementById('rapportBtmContainer').style.display = 'block';
				isgE('rapportSearch').style.backgroundColor = bgColours[1];
				if(document.getElementById('rapportBtmClose'))document.getElementById('rapportBtmClose').style.display = 'block';
			}
			else{
				document.getElementById('rapportResults').style.display = "none";
			}

			if(document.getElementById('rapportCategories'))
			{
				document.getElementById('rapportCategories').style.display = "block";
			}
			else
			{
			if(document.getElementById('rapportFilters'))
			{
				if(document.getElementById('rapportFilters').style.display == 'block')
				{
					document.getElementById('rapportBtmClose').style.display = 'block';
				}
			}
				else
				{
					document.getElementById('rapportBtmClose').style.display = 'block';
					document.getElementById('rapportAutoEmpty').style.display = 'none';
				}

			}
		if($('rapportSearchMatches') == null && ($('rapportSponsors')== null || $('rapportSponsors').innerHTML.length == 0))
		{
			$('otherContent').style.display = 'none';
		}
		if($('rapportSponsors') != null && $('rapportSponsors').innerHTML.length == 0)
		{
			$('rapportSponsors').style.display = 'none';
		}
	}

	function extractHTML(frameName, divID)
	{
		var divToReturn = "";
		if(window.frames[frameName].document.getElementById(divID) != null)
		{
		var divContent = window.frames[frameName].document.getElementById(divID);
			divToReturn = "<div id="+ divID +">" + divContent.innerHTML + "</div>";
		}
		return divToReturn
	}

function loadSearchStr()
{
    set();
	var theform = document.getElementById("rapportMiniFilterForm");
	if(theform != null && theform.k){
	   var searchStr =theform.k.value;    
	   document.forms['rapport'].searchField.value = unescape(searchStr.replace("+", " "));      	
	} else {		
	var searchStr = location.search.split('&');
	for(i=0; i<searchStr.length; i++)
	{
		if(searchStr[i].indexOf("k=") != -1)
		{
			document.forms['rapport'].searchField.value = unescape(searchStr[i].replace("+", " ").substr(searchStr[i].indexOf("k=")+2));
		}
	}
  }
    saveTextField(document.forms['rapport'].searchField);

}

function adjustPPCompare()
{
	var ppCompContent = document.getElementById("mainContentContainerIDPP");
	numItemsToCompare = 0;
	for(i=0; i<ppCompContent.childNodes.length; i++)
	{
		if(ppCompContent.childNodes[i].tagName == "TABLE" )
		{
			adjustPageWrapper(ppCompContent.childNodes[i]);
			break;
		}
	}
}

function adjustPageWrapper(obj)
{
	document.getElementById("ppPageWrapper").style.pixelWidth = (178 + Number(obj.width) < 756) ? 756 : 178 + Number(obj.width);
}