var srchRprtFlg = 0;
       
function clearFirst(which){
	switch(which.value){
		case 'Search Shopping': 
		case 'Search The Web':
		case 'Search For Images':
		case 'Search For Video':
		case 'Search For Audio':
		case 'Search For News':
			which.value = '';
			if(srchRprtFlg == 0){
				srchRprtFlg = 1
				which.value = '';
			}
			break;
	}
}

function clearDefault(){
	var searchTxt = document.rapport.k.value;
	document.rapport.method = "post"; 
	searchTxt = escapeSplChars(searchTxt);
	//White Space replaced with "+"
	searchTxt = searchTxt.replace(/\s/g,"+");
	searchTxt = searchTxt.replace(/[\+]+/g,"+");
    searchTxt =replaceQuotes(searchTxt);
	document.rapport.action = "/"+escape(searchTxt)+"-search-results/";

	var defaultText = "Search Shopping";
	if(document.rapport.k.value == defaultText){
		if(srchRprtFlg == 0){
			document.rapport.k.value = '';
		}
		document.rapport.submit();  
		return false;
	}
}

var isautoCompleteOpened = false;
var isinputText = "";
var ismytimer  =0;
var pprpslArray = new Array();
var pprpslArray2 = new Array();

function isshowSuggestion(){
	if(ismytimer){
		ismytimer = clearTimeout(ismytimer);
	}
	var text = isgE('searchField').value;
	if(text.length>0 && text.length%3==0){
		isrefreshSmartbox();
	}
	else{
		ismytimer=setTimeout('isrefreshSmartbox();',700);
	}
}

function isrefreshSmartbox(){
	placeContainer('otherContent');
	var text = isgE('searchField').value; 
	if(text!=undefined) text=text.toLowerCase();
	if((text!=isinputText)&&(text.length!=0)){
		valueModified = true;
		if(isgE('rapportSponsors')) isgE('rapportSponsors').style.display = 'none';       // When new item is to be searched when an image is displayed in search rapport, the image was not hidden earlier
		if(isgE('rapportResults') && isgE('rapportResults').style) isnE(isgE('otherContent')); // When there is no item is displayed in the smart box, close botton was visible
		// start fix for 238762 
		if(isgE('rapportResults') && isgE('rapportResults').style && isgE('rapportResults').innerHTML.length>0) isgE('rapportResults').style.display = 'none';  
		// end fix for 238762
		isinputText = text;
		if(isgE('rapportSmartbox')) isgE('rapportSmartbox').src = 'ppxsmartbox?k=' + encodeURI(text);
		if(isgE('otherContent')) toggleDropdowns(isgE('otherContent'),'off');
	}
	else if(text.length == 0){
		isinputText=text;
		if(isgE('rapportStart') && isgE('rapportStart').style) isgE('rapportStart').style.display = 'block';
		if(isgE('otherContent')) toggleDropdowns(isgE('otherContent'),'on');

		if(isgE('rapportAutoComplete') && isgE('rapportAutoComplete').style) isgE('rapportAutoComplete').style.display = 'none';
		if(isgE('rapportBtmEmpty') && isgE('rapportBtmEmpty').style){
			isgE('rapportBtmEmpty').style.display = 'none';
		}
		else if(isgE('rapportAutoEmpty') && isgE('rapportAutoEmpty').style){
			isgE('rapportAutoEmpty').style.display = 'none';
		}
		if(isgE('rapportBtmClose') && isgE('rapportBtmClose').style) isgE('rapportBtmClose').style.display = 'none';
		if(isgE('rapportBtmContainer') && isgE('rapportBtmContainer').style) isgE('rapportBtmContainer').style.display = 'block';
		if(isgE('rapportAutoClose') && isgE('rapportAutoClose').style) isgE('rapportAutoClose').style.display = 'block';
		if(isgE('rapportFilters') && isgE('rapportFilters').style) isgE('rapportFilters').style.display = 'none';
		if(isgE('rapportCategories') && isgE('rapportCategories').style) isgE('rapportCategories').style.display = 'none';

		if(isgE('rapportSponsors') && isgE('rapportSponsors').style){
			isgE('rapportSponsors').style.display = "none";
			isgE('rapportSponsors').style.visibility = "hidden";
		}
		if(isgEAll('searchSponsors') && isgEAll('searchSponsors').style){
			isgEAll('searchSponsors').style.display = "none";
			isgEAll('searchSponsors').style.visibility = "hidden";
		}
		if(isgE('rapportGoogleOff') && isgE('rapportGoogleOff').style){
			isgE('rapportGoogleOff').style.display = "none";
			isgE('rapportGoogleOff').style.visibility = "hidden";
		}
		if(isgE('rapportGoogle') && isgE('rapportGoogle').style){
			isgE('rapportGoogle').style.display = "none";
			isgE('rapportGoogle').style.visibility = "hidden";
		}
		if(isgE('rapportAdServer') && isgE('rapportAdServer').style){
			isgE('rapportAdServer').style.display = "none";
			isgE('rapportAdServer').style.visibility = "hidden";
		}

		if(isgE('rapportSearchMatches') && isgE('rapportSearchMatches').style) isgE('rapportSearchMatches').style.display = 'none';
		if(isgE('rapportSearch').style) isgE('rapportSearch').style.backgroundColor = bgColours[1];
		isgE('searchSubmit').src="/img/buttons/btn_search_off.gif";
	}

	if(isgE('rapportBtmClose')){
		if(document.all) if(isgE('productTabsContainer')) isgE('productTabsContainer').style.zIndex = '-1'; 
		if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '-1'; 
	}
	else{
		if(document.all) if(isgE('productTabsContainer')) isgE('productTabsContainer').style.zIndex = '0'; 
		if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '0'; 
	}
}

function issmartboxCallback(matches, urls){
	placeContainer('rapportBtmContainer');
	placeContainer('otherContent');
	isgE('searchSubmit').src="/img/buttons/btn_search_off.gif";
	if(matches.length > 0){
		isautoCompleteOpened = true;
		if(isgE('rapportStart') && isgE('rapportStart').style) isgE('rapportStart').style.display = 'none';
		if(isgE('rapportAutoComplete') && isgE('rapportAutoComplete').style) isgE('rapportAutoComplete').style.display = 'block';   
		if(document.all) if(isgE('DL_Container')) isgE('DL_Container').style.zIndex = '-1';
		if(document.all) if(isgE('controlsContainer')) isgE('controlsContainer').style.zIndex = '-1';
		if(document.all) if(isgE('controlsContainer2')) isgE('controlsContainer2').style.zIndex = '-1';
		if(isgE('sortby')){
			if(findPosY(isgE('sortby')) > 320){
				if(isgE('otherContent'))toggleDropdowns(isgE('otherContent'),'on');
			}
			else{
				if(isgE('otherContent'))toggleDropdowns(isgE('otherContent'),'off');
			}
		}
		if(isgE('rapportAutoEmpty') && isgE('rapportAutoEmpty').style && isgE('rapportAutoEmpty').style.visibility == "visible"){
			if(isgE('sort') && isgE('sort').style && isgE('sort').style.visibility == "hidden") isgE('sort').style.visibility = "visible"
		}

		if(isgE('rapportBtmEmpty') && isgE('rapportBtmEmpty').style) isgE('rapportBtmEmpty').style.display = 'none';
		else if(isgE('rapportAutoEmpty') && isgE('rapportAutoEmpty').style) isgE('rapportAutoEmpty').style.display = 'none';
		if(isgE('rapportBtmClose') && isgE('rapportBtmClose').style) isgE('rapportBtmClose').style.display = 'none';
		if(isgE('rapportAutoClose') && isgE('rapportAutoClose').style) isgE('rapportAutoClose').style.display = 'block';
		if(isgE('rapportFilters') && isgE('rapportFilters').style) isgE('rapportFilters').style.display = 'none';
		if(isgE('rapportCategories') && isgE('rapportCategories').style) isgE('rapportCategories').style.display = 'none';
		if(isgE('rapportSponsors') && isgE('rapportSponsors').style) ishE(isgE('rapportSponsors'));
		if(isgE('rapportSearchMatches') && isgE('rapportSearchMatches').style) isgE('rapportSearchMatches').style.display = 'none';
		if(isgE('rapportSearch') && isgE('rapportSearch').style) isgE('rapportSearch').style.backgroundColor = bgColours[1];
		iswriteMatches(matches, urls);
	}
	else{
		ishideSuggestion();
		placeContainer('rapportBtmContainer');
	}
}

function iscloseSuggestion(){
	placeBackContainer('rapportBtmContainer');
	placeBackContainer('otherContent');
	if(document.all) if(isgE('DL_Container')) isgE('DL_Container').style.zIndex = '0';
	if(document.all) if(isgE('controlsContainer')) isgE('controlsContainer').style.zIndex = '0';
	if(document.all) if(isgE('controlsContainer2')) isgE('controlsContainer2').style.zIndex = '0';
	if(isHasFlash && isgE('rapportFlash')){closeFlash();}
	else{
		ishideSuggestion();
		placeContainer('rapportAutoClose');
		issetSearchFieldFocus();
		if(isgE('sort') && isgE('sort').style && isgE('sort').style.visibility == "hidden") isgE('sort').style.visibility = "visible";
		if(isgE('sortby') && isgE('sortby').style && isgE('sortby').style.visibility == "hidden") isgE('sortby').style.visibility = "visible";
	}
	//Fix to bring the search rapport close button when accessed through class pages
	if(document.all) if(isgE('productTabsContainer')) isgE('productTabsContainer').style.zIndex = '0'; 
	if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '0';   
}

function ishideSuggestion(){
	if(isgE('rapportResults') && isgE('rapportResults').style) isnE(isgE('rapportResults'));
	if(isgE('rapportBtmContainer') && isgE('rapportBtmContainer').style) isnE(isgE('rapportBtmContainer'));
	if(isautoCompleteOpened){
		if(isgE('rapportStart')) isgE('rapportStart').style.display = 'none';
		if(isgE('rapportAutoComplete')) isgE('rapportAutoComplete').style.display = 'none';
		if(isgE('rapportAutoClose')) isgE('rapportAutoClose').style.display = 'none';
		if(isgE('rapportBtmEmpty')) isgE('rapportBtmEmpty').style.display = 'none';
		else if(isgE('rapportAutoEmpty')) isgE('rapportAutoEmpty').style.display = 'none';
		isautoCompleteOpened = false;
	}
	else{
		if(isgE('rapportStart')){
			isgE('rapportStart').style.display = 'none';
			if(isgE('rapportAutoClose')) isgE('rapportAutoClose').style.display = 'none';
			if(isgE('rapportBtmEmpty')) isgE('rapportBtmEmpty').style.display = 'none';
			else if(isgE('rapportAutoEmpty')) isgE('rapportAutoEmpty').style.display = 'none';
		}
	}
	if(isgE('rapportSearchMatches')) isgE('rapportSearchMatches').style.display = 'none';
	if(isgE('rapportFilters')) isgE('rapportFilters').style.display = 'none';
	if(isgE('rapportCategories')) isgE('rapportCategories').style.display = 'none';
	if(isgE('rapportBtmClose')) isgE('rapportBtmClose').style.display = 'none';
	if(isgE('rapportSponsors') && isgE('rapportSponsors').style) ishE(isgE('rapportSponsors'));
	if(isgE('rapportSearch')) isgE('rapportSearch').style.backgroundColor = bgColours[1];
	if(isgE('sort') && isgE('sort').style && isgE('sort').style.visibility == "hidden") isgE('sort').style.visibility = "visible";
	if(isgE('otherContent')) toggleDropdowns(isgE('otherContent'),'on');
}

function iswriteMatches(matches, urls){
	isgE('rapportBtmContainer').style.display='block';
	var tmp = "";
	for(i = 0; i < matches.length; i++){
		tmp += "<div class='rpBullet' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"' onclick='top.document.location=\"" + urls[i] + "\"'>" + matches[i] + "</div>";
	}
	iswH(isgE('rapportMatches'), tmp);
}

function ppCollapseAd(){
	if(isgE('rapportAdServer')) isgE('rapportAdServer').style.display = 'none';
	if(isgE('rapportGoogleOff')) isgE('rapportGoogleOff').style.display = 'block';
	pprpslArray2 = pprpslArray;
}

function isshowToggle(){
	placeContainer('otherContent');
	if(isgE('rapportFilters')==null && isgE('rapportCategories')==null){
		if(isgE('rapportStart').style) isgE('rapportStart').style.display = 'none';
		if(isgE('rapportAutoComplete').style) isgE('rapportAutoComplete').style.display = 'none';
		if(isgE('rapportAutoClose').style) isgE('rapportAutoClose').style.display = 'none';
		if(isgE('rapportBtmEmpty')){
			isgE('rapportBtmEmpty').style.display = 'none';
		}
		else if(isgE('rapportAutoEmpty').style){
			isgE('rapportAutoEmpty').style.display = 'none';
		}
		if(isgE('rapportSponsors') && isgE('rapportSponsors').style && !showSLNoRes) isgE('rapportSponsors').style.display = 'block';
		if(isgE('rapportBtmClose').style) isgE('rapportBtmClose').style.display = 'none';
		if(isgE('rapportSearch').style) isgE('rapportSearch').style.backgroundColor = bgColours[1];
	}
}

function placeContainer(divName){
	isgE(divName).style.display = 'block';
	isgE(divName).style.visibility = 'visible';
}

function placeBackContainer(divName){
	isgE(divName).style.display = 'none';
}

function modifyTryAnotherSearch(){
	tASbuttonDiv = "";
	tmpArr = getElementByAttribute('className', 'paddingT10');
	for(i = 0; i < tmpArr.length; i++){
		if(tmpArr[i].childNodes[0].tagName == "A" && tmpArr[i].childNodes[0].childNodes[0].tagName == "IMG" && tmpArr[i].childNodes[0].childNodes[0].src.indexOf('btn_anothersearch') != -1 ){
			tASbuttonDiv = tmpArr[i];
		}
	}
	theATag = getElementInside(tASbuttonDiv, "A");
	theATag.onclick = function(){
		tabClick('rememberItems', 7, 1, 'green');
		window.scrollTo(0,0);
		if(isgE('searchField')){
			isgE('searchField').focus();
			isgE('searchField').select();
		}
	}
}

function escapeSplChars(str){  
	str = str.replace(/[&]/g,'');
	str = str.replace(/[%]/g,'');
	return str;
}

function replaceQuotes(str){  
    str = str.replace(/["]/g,"''");
    return str;
}