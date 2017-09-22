var dummyDiv = document.getElementById('dummy').innerHTML;
var dummyDivinMemory ="";
var hiddenFrame = document.createElement("iframe");
hiddenFrame.setAttribute("name", "hidFrame");
hiddenFrame.setAttribute("id", "hidFrame");
hiddenFrame.setAttribute("src", "about:blank");
document.body.appendChild(hiddenFrame);
	
function set() {
	dummyDiv = dummyDiv.replace(/ppxfilter\?/, "");
	dummyDivinMemory = dummyDiv;
	document.getElementById('dummy').innerHTML = "";
}

function loadVirtual(){
		isgE('rapportResults').style.width = '512px';
		isgE('hidFrame').style.display = "none";
		window.frames['hidFrame'].document.body.innerHTML = dummyDivinMemory;
		isgE('otherContent').style.display = 'block';
		isgE('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportSearchMatches');
		if(isgE('rapportSearchMatches')) isgE('rapportSearchMatches').style.display = "block";
		if(window.frames['hidFrame'].document.getElementById('rapportFilters') != null)
		{
			isgE('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportFilters');
			isgE('rapportFilters').style.display = "block";
		}

		isgE('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportCategories');
		isgE('rapportResults').innerHTML += extractHTML('hidFrame', 'rapportSponsors');

		var rapportResultsInnerHTMLLength='0';
		var rapportSponsorsInnerHTMLLength='0';
		
		if(isgE('rapportResults')){
			rapportResultsInnerHTMLLength=isgE('rapportResults').innerHTML.length;
		}
		if(isgE('rapportSponsors')){
			rapportSponsorsInnerHTMLLength=isgE('rapportSponsors').innerHTML.length;
		}

		if(rapportResultsInnerHTMLLength > 2 || rapportSponsorsInnerHTMLLength > 2){
			isgE('rapportResults').style.display = "block";
			if(isgE('rapportSponsors'))isgE('rapportSponsors').style.display = "block";
			if(isgE('rapportBtmContainer'))isgE('rapportBtmContainer').style.display = 'block';
			isgE('rapportSearch').style.backgroundColor = bgColours[1];
			if(isgE('rapportBtmClose'))isgE('rapportBtmClose').style.display = 'block';
		}
		else{
			isgE('rapportResults').style.display = "none";
		}

		if(isgE('rapportCategories')){
			isgE('rapportCategories').style.display = "block";
		}
		else{
			if(isgE('rapportFilters')){
				if(isgE('rapportFilters').style.display == 'block')	{
					isgE('rapportBtmClose').style.display = 'block';
				}
			}
			else{
				isgE('rapportBtmClose').style.display = 'block';
				isgE('rapportAutoEmpty').style.display = 'none';
			}
		}
	if(isgE('rapportSearchMatches') == null && (isgE('rapportSponsors')== null || isgE('rapportSponsors').innerHTML.length == 0)) {
		isgE('otherContent').style.display = 'none';
	}
	if(isgE('rapportSponsors') != null && isgE('rapportSponsors').innerHTML.length == 0) {
		isgE('rapportSponsors').style.display = 'none';
	}
}

function extractHTML(frameName, divID){
	var divToReturn = "";
	if(window.frames[frameName].document.getElementById(divID) != null){
		var divContent = window.frames[frameName].document.getElementById(divID);
		divToReturn = "<div id="+ divID +">" + divContent.innerHTML + "</div>";
	}
	return divToReturn
}

function loadSearchStr(){
    set();
	var theform = document.getElementById("rapportMiniFilterForm");
	if(theform != null && theform.k){
	   var searchStr =theform.k.value;    
	   document.forms['rapport'].searchField.value = unescape(searchStr.replace("+", " "));      	
	} else {		
		var searchStr = location.search.split('&');
		for(i=0; i<searchStr.length; i++) {
			if(searchStr[i].indexOf("k=") != -1) {
				document.forms['rapport'].searchField.value = unescape(searchStr[i].replace("+", " ").substr(searchStr[i].indexOf("k=")+2));
			}
		}
	}
    saveTextField(document.forms['rapport'].searchField);
}

function adjustPPCompare(){
	var ppCompContent = document.getElementById("mainContentContainerIDPP");
	numItemsToCompare = 0;
	for(i=0; i<ppCompContent.childNodes.length; i++){
		if(ppCompContent.childNodes[i].tagName == "TABLE" )	{
			adjustPageWrapper(ppCompContent.childNodes[i]);
			break;
		}
	}
}

function adjustPageWrapper(obj){
	document.getElementById("ppPageWrapper").style.pixelWidth = (178 + Number(obj.width) < 756) ? 756 : 178 + Number(obj.width);
}