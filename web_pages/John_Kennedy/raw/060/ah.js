// Image array
var magImageArray = new Array();
var storeImageArray = new Array();
var partnerImageArray = new Array();
var fcpartnerImageArray = new Array();

// Function to change the style for a single item
function changeLink(id, newClass) {
	document.getElementById(id).className = newClass;
}

function ltrim(str) { return str.replace(/(^\s*)/g, ""); }
function rtrim(str) { return str.replace(/(\s*$)/g, ""); }
function trim(str)  { return ltrim(rtrim(str));          }

 // Date validation functions
 
 function y2k(number)
	{
		return(number<1000) ? number+1900 : number;
	}
	
function isDate(day,month,year)
	{
		var today=new Date();
		year=((!year) ? y2k(today.getYear()):year);
		month=((!month) ? today.getMonth():month-1);
		if(!day)return false
		var test=new Date(year,month,day);
		
		if((y2k(test.getYear()) == year)&&(month == test.getMonth())&&(day==test.getDate()))
			return true;
    	else
			return false
	}

// Function to create a new image
function newImage(arg) {
  if (document.images) {
    rslt = new Image();
    rslt.src = arg;
    return rslt;
  }
}

// Function to change the style on mouse over for the left nav menu items
function changeMenuItem(tdID, tdClass, linkID, linkClass) {
	document.getElementById(tdID).className = tdClass;
	document.getElementById(linkID).className = linkClass;
}

// Function to create links for table cells
function gotoLink(linkURL) {
	document.location.href = linkURL;
}

// Function to close a layer
function closeLayer(id) {

	if (document.getElementById) {
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.display = "none";
	} else if (document.all) {
		document.all[id].style.visibility="hidden";
		document.getElementById(id).style.display = "none";
	} else if (document.layers) {
		document.layers[id].visibility="hide";
		document.getElementById(id).style.display = "none";
	}
}

// Function to open a layer
function openLayer(id) {

	if (document.getElementById) {
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.display = "block";
	} else if (document.all) {
		document.all[id].style.visibility="visible";
		document.getElementById(id).style.display = "block";
	} else if (document.layers) {
		document.layers[id].visibility="show";
		document.getElementById(id).style.display = "block";
	}
}

// Preload images
function initMagBox() {
  if (document.images) {
		
    magImageArray[0] = newImage("/assets/images/current_issue_tab.gif");
    magImageArray[1] = newImage("/assets/images/current_issue_tab_selected.gif");
    magImageArray[2] = newImage("/assets/images/subscribe_tab.gif");
    magImageArray[3] = newImage("/assets/images/subscribe_tab_selected.gif");
    magImageArray[4] = newImage("/assets/images/archives_tab.gif");
    magImageArray[5] = newImage("/assets/images/archives_tab_selected.gif");
    
    swapAHMagTab('currentIssue');
    
   }
}

// Function to swap tabs for the AH Mag tab box
function swapAHMagTab(tabID) {
	
	if (tabID == "currentIssue") {
		openLayer('currentIssueContent');
		closeLayer('subscribeContent');
		closeLayer('archivesContent');
		
		document.getElementById('currentIssueTabImg').src = magImageArray[1].src;
		document.getElementById('subscribeTabImg').src = magImageArray[2].src;
		document.getElementById('archivesTabImg').src = magImageArray[4].src;
		
		changeLink('currentIssueTab', 'tabSelected');
		changeLink('subscribeTab', 'tab');
		changeLink('archivesTab', 'tab');
		
	} else if (tabID == "subscribe") {
		closeLayer('currentIssueContent');
		openLayer('subscribeContent');
		closeLayer('archivesContent');
		
		document.getElementById('currentIssueTabImg').src = magImageArray[0].src;
		document.getElementById('subscribeTabImg').src = magImageArray[3].src;
		document.getElementById('archivesTabImg').src = magImageArray[4].src;
		
		changeLink('currentIssueTab', 'tab');
		changeLink('subscribeTab', 'tabSelected');
		changeLink('archivesTab', 'tab');
		
	} else if (tabID == "archives") {
		closeLayer('currentIssueContent');
		closeLayer('subscribeContent');
		openLayer('archivesContent');
		
		document.getElementById('currentIssueTabImg').src = magImageArray[0].src;
		document.getElementById('subscribeTabImg').src = magImageArray[2].src;
		document.getElementById('archivesTabImg').src = magImageArray[5].src;
		
		changeLink('currentIssueTab', 'tab');
		changeLink('subscribeTab', 'tab');
		changeLink('archivesTab', 'tabSelected');
		
	}
	
}

// Preload images
function initStoreBox() {
  if (document.images) {
		
    //storeImageArray[0] = newImage("/assets/images/books_tab.gif");
    //storeImageArray[1] = newImage("/assets/images/books_tab_selected.gif");
    //storeImageArray[2] = newImage("/assets/images/video_tab.gif");
    //storeImageArray[3] = newImage("/assets/images/video_tab_selected.gif");
    //storeImageArray[4] = newImage("/assets/images/travel_tab.gif");
    //storeImageArray[5] = newImage("/assets/images/travel_tab_selected.gif");
    
    //swapAHStoreTab('books');
    
   }
}

// Function to swap tabs for the AH Mag tab box
function swapAHStoreTab(tabID) {
	
	if (tabID == "books") {
		openLayer('booksContent');
		closeLayer('videoContent');
		closeLayer('travelContent');
		
		document.getElementById('booksTabImg').src = storeImageArray[1].src;
		document.getElementById('videoTabImg').src = storeImageArray[2].src;
		document.getElementById('travelTabImg').src = storeImageArray[4].src;
		
		changeLink('booksTab', 'tabSelected');
		changeLink('videoTab', 'storeTab');
		changeLink('travelTab', 'storeTab');
		
	} else if (tabID == "video") {
		closeLayer('booksContent');
		openLayer('videoContent');
		closeLayer('travelContent');
		
		document.getElementById('booksTabImg').src = storeImageArray[0].src;
		document.getElementById('videoTabImg').src = storeImageArray[3].src;
		document.getElementById('travelTabImg').src = storeImageArray[4].src;
		
		changeLink('booksTab', 'storeTab');
		changeLink('videoTab', 'tabSelected');
		changeLink('travelTab', 'storeTab');
		
	} else if (tabID == "travel") {
		closeLayer('booksContent');
		closeLayer('videoContent');
		openLayer('travelContent');
		
		document.getElementById('booksTabImg').src = storeImageArray[0].src;
		document.getElementById('videoTabImg').src = storeImageArray[2].src;
		document.getElementById('travelTabImg').src = storeImageArray[5].src;
		
		changeLink('booksTab', 'storeTab');
		changeLink('videoTab', 'storeTab');
		changeLink('travelTab', 'tabSelected');
		
	}
	
}

// Preload images
function initPartnerBox() {
  if (document.images) {
		
    partnerImageArray[0] = newImage("/assets/images/it_tab.gif");
    partnerImageArray[1] = newImage("/assets/images/it_tab_selected.gif");
    partnerImageArray[2] = newImage("/assets/images/legacy_tab.gif");
    partnerImageArray[3] = newImage("/assets/images/legacy_tab_selected.gif");
    partnerImageArray[4] = newImage("/assets/images/forbes_tab.gif");
    partnerImageArray[5] = newImage("/assets/images/forbes_tab_selected.gif");
    
    swapAHPartnerTab('it');
    
   }
}

// Function to swap tabs for the AH Mag tab box
function swapAHPartnerTab(tabID) {
	
	if (tabID == "it") {
		openLayer('itContent');
		closeLayer('legacyContent');
		closeLayer('forbesContent');
		
		document.getElementById('itTabImg').src = partnerImageArray[1].src;
		document.getElementById('legacyTabImg').src = partnerImageArray[2].src;
		document.getElementById('forbesTabImg').src = partnerImageArray[4].src;
		
		changeLink('itTab', 'tabSelected');
		changeLink('legacyTab', 'storeTab');
		changeLink('forbesTab', 'storeTab');
		
	} else if (tabID == "legacy") {
		closeLayer('itContent');
		openLayer('legacyContent');
		closeLayer('forbesContent');
		
		document.getElementById('itTabImg').src = partnerImageArray[0].src;
		document.getElementById('legacyTabImg').src = partnerImageArray[3].src;
		document.getElementById('forbesTabImg').src = partnerImageArray[4].src;
		
		changeLink('itTab', 'storeTab');
		changeLink('legacyTab', 'tabSelected');
		changeLink('forbesTab', 'storeTab');
		
	} else if (tabID == "forbes") {
		closeLayer('itContent');
		closeLayer('legacyContent');
		openLayer('forbesContent');
		
		document.getElementById('itTabImg').src = partnerImageArray[0].src;
		document.getElementById('legacyTabImg').src = partnerImageArray[2].src;
		document.getElementById('forbesTabImg').src = partnerImageArray[5].src;
		
		changeLink('itTab', 'storeTab');
		changeLink('legacyTab', 'storeTab');
		changeLink('forbesTab', 'tabSelected');
		
	}
	
}

function initfcPartnerBox() {
  if (document.images) {
		
    fcpartnerImageArray[0] = newImage("/assets/images/fc_tab.gif");
    fcpartnerImageArray[1] = newImage("/assets/images/fc_tab_selected.gif");
    fcpartnerImageArray[2] = newImage("/assets/images/ah_tab.gif");
    fcpartnerImageArray[3] = newImage("/assets/images/ah_tab_selected.gif");
    fcpartnerImageArray[4] = newImage("/assets/images/al_tab.gif");
    fcpartnerImageArray[5] = newImage("/assets/images/al_tab_selected.gif");
    fcpartnerImageArray[6] = newImage("/assets/images/it_tab.gif");
    fcpartnerImageArray[7] = newImage("/assets/images/it_tab_selected.gif");
    swapFCPartnerTab('collector');
    
   }
}

// Function to swap tabs for the FC Mag tab box
function swapFCPartnerTab(tabID) {
	
	if (tabID == "collector") {
		openLayer('collectorContent');
		closeLayer('heritageContent');
		closeLayer('legacyContent');
		closeLayer('itContent');
		
		document.getElementById('collectorTabImg').src = fcpartnerImageArray[1].src;
		document.getElementById('heritageTabImg').src = fcpartnerImageArray[2].src;
		document.getElementById('legacyTabImg').src = fcpartnerImageArray[4].src;
		document.getElementById('itTabImg').src = fcpartnerImageArray[6].src;
		
		changeLink('collectorTab', 'tabSelected');
		changeLink('heritageTab', 'storeTab');
		changeLink('legacyTab', 'storeTab');
		changeLink('itTab', 'storeTab');
	} else if (tabID == "heritage") {
		closeLayer('collectorContent');
		openLayer('heritageContent');
		closeLayer('legacyContent');
		closeLayer('itContent');
		
		document.getElementById('collectorTabImg').src = fcpartnerImageArray[0].src;
		document.getElementById('heritageTabImg').src = fcpartnerImageArray[3].src;
		document.getElementById('legacyTabImg').src = fcpartnerImageArray[4].src;
		document.getElementById('itTabImg').src = fcpartnerImageArray[6].src;
		changeLink('collectorTab', 'storeTab');
		changeLink('heritageTab', 'tabSelected');
		changeLink('legacyTab', 'storeTab');
		changeLink('itTab', 'storeTab');
		
	} else if (tabID == "legacy") {
		closeLayer('collectorContent');
		closeLayer('heritageContent');
		openLayer('legacyContent');
		closeLayer('itContent');
		
		document.getElementById('collectorTabImg').src = fcpartnerImageArray[0].src;
		document.getElementById('heritageTabImg').src = fcpartnerImageArray[2].src;
		document.getElementById('legacyTabImg').src = fcpartnerImageArray[5].src;
		document.getElementById('itTabImg').src = fcpartnerImageArray[6].src;
		changeLink('collectorTab', 'storeTab');
		changeLink('heritageTab', 'storeTab');
		changeLink('legacyTab', 'tabSelected');
		changeLink('itTab', 'storeTab');
		
	}else if (tabID == "it") {
		closeLayer('collectorContent');
		closeLayer('heritageContent');
		closeLayer('legacyContent');
		openLayer('itContent');
		
		document.getElementById('collectorTabImg').src = fcpartnerImageArray[0].src;
		document.getElementById('heritageTabImg').src = fcpartnerImageArray[2].src;
		document.getElementById('legacyTabImg').src = fcpartnerImageArray[4].src;
		document.getElementById('itTabImg').src = fcpartnerImageArray[7].src;
		changeLink('collectorTab', 'storeTab');
		changeLink('heritageTab', 'storeTab');
		changeLink('legacyTab', 'storeTab');
		changeLink('itTab', 'tabSelected');
		
	} 
	
}

// Function to swap tabs for the search box
function swapSearchTabs(tabID) {
	
	if (tabID == "all") {
		
		changeLink('allTab', 'searchTabSelected');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLinkSelected');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our History Archives";
		
		
	} else if (tabID == "people") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTabSelected');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLinkSelected');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our People Article Archives";
		
		
	} else if (tabID == "places") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTabSelected');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLinkSelected');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our Places Article Archives";
		
		
	} else if (tabID == "events") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTabSelected');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLinkSelected');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our Events Article Archives";
		
		
	} else if (tabID == "entertainment") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTabSelected');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLinkSelected');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our Entertainment Article Archives";
		
		
	} else if (tabID == "store") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTabSelected');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLinkSelected');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our Store";
		
		
	} else if (tabID == "travel") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTabSelected');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLinkSelected');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our Travel Portal";
		
		
	} else if (tabID == "blogs") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTabSelected');
		changeLink('discussionsTab', 'searchTab');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLinkSelected');
		changeLink('discussionsSearchLink', 'tabLink');
		
		document.quickSearchForm.quickSearch.value="Search Our Blogs";
		
		
	} else if (tabID == "discussions") {
		
		changeLink('allTab', 'searchTab');
		changeLink('peopleTab', 'searchTab');
		changeLink('placesTab', 'searchTab');
		changeLink('eventsTab', 'searchTab');
		changeLink('entertainmentTab', 'searchTab');
		changeLink('storeTab', 'searchTab');
		changeLink('travelTab', 'searchTab');
		changeLink('blogsTab', 'searchTab');
		changeLink('discussionsTab', 'searchTabSelected');
		
		changeLink('allSearchLink', 'tabLink');
		changeLink('peopleSearchLink', 'tabLink');
		changeLink('placesSearchLink', 'tabLink');
		changeLink('eventsSearchLink', 'tabLink');
		changeLink('entertainmentSearchLink', 'tabLink');
		changeLink('storeSearchLink', 'tabLink');
		changeLink('travelSearchLink', 'tabLink');
		changeLink('blogsSearchLink', 'tabLink');
		changeLink('discussionsSearchLink', 'tabLinkSelected');
		
		document.quickSearchForm.quickSearch.value="Search Our Discussion Forums";

		
	}
	
}

// Function to clear the search box on click
function clearSearchBox() {
	document.quickSearchForm.quickSearch.value="";
}

function submitenter(e, admaction){
    var keycode;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;
	
	  if (keycode == 13)
	  {
	    	
	    if(admaction.indexOf("list_") == 0 && document.masterForm.startRow)
	    {
	    	document.masterForm.startRow.value = "0";		
	    }
	    if(admaction.indexOf("list_") == 0 && document.masterForm.articleStartRow)
	    {
	    	document.masterForm.articleStartRow.value = "0";		
	    }
	    
      doAdminAction(admaction);
      return false;
    } else
     return true;
}

function publicSubmitenter(e, admaction){
    var keycode;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;
	
	  if (keycode == 13)
	  {   	    
      doAction(admaction);
      return false;
    } else
     return true;
}

	function quickSearchOnChange(objStartRow){
		//alert("On Change of the box, startRow="+document.masterForm.startRow.value);
		//reset startRow to have search results displayed from the beginning
		objStartRow.value = "0";
		//alert("End of OnChange of the box, startRow="+document.masterForm.startRow.value);
		
	}

function applySection(){
	var errs = false;
	if(document.masterForm.SECTION_NAME.value == ""){
		alert ("Please enter a Section Name");
		document.masterForm.SECTION_NAME.focus;
		errs = true;	
	}
	
	if(errs == false){
		doAdminAction('apply_section');
	}
	
}
function filterScheduledData(){
		
		//stitch together all of the Date fields
		document.masterForm.scheduledDate.value = document.masterForm.scheduledDateOnly.value + " " + document.masterForm.scheduledDateHours.value + ":"+ document.masterForm.scheduledDateMinutes.value + " " + document.masterForm.scheduledDateAmPm.value;
		if(document.masterForm.scheduledDateHours.selectedIndex < 1 || document.masterForm.scheduledDateMinutes.selectedIndex < 1 || document.masterForm.scheduledDateAmPm.selectedIndex < 1)
		 {
		 		alert("Invalid Date: " + document.masterForm.scheduledDate.value +".\nPlease re-enter.");
		 }	
		else
				doAdminAction('list_scheduled_items');			
	
	}
function listScheduledSections(id) {
	document.masterForm.SECTION_ID.value = id;
	doAdminAction('list_scheduled_items');
}

function listSections(id) {
	document.masterForm.SECTION_ID.value = id;
	doAdminAction('list_sections');
}

function addModSection(id) {
	document.masterForm.SECTION_ID.value = id;
	doAdminAction('addmod_section');
}

function addSection(id) {

	document.masterForm.SECTION_PARENT_ID.value = id;
	document.masterForm.SECTION_ID.value = "";
	doAdminAction('addmod_section');
}

function deleteSection(id) {
	if(confirm("Are you sure you want to delete this section?")){
	
		document.masterForm.SECTION_ID.value = id;
		doAdminAction('delete_section');
	}
}

function applyCategory(){
	var errs = false;
	if(document.masterForm.ARTICLE_TYPE_NAME.value == ""){
		alert ("Please enter a Category Name");
		document.masterForm.ARTICLE_TYPE_NAME.focus;
		errs = true;	
	}
	
	if(errs == false){
		doAdminAction('apply_category');
	}
	
}


function listArticleCategories(startRow) {
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_article_categories');
}

function listCategories() {
	doAdminAction('list_categories');
}

function addModCategory(id) {
	document.masterForm.ARTICLE_TYPE_ID.value = id;
	doAdminAction('addmod_category');
}

function deleteCategory(id) {
	document.masterForm.ARTICLE_TYPE_ID.value = id;
	doAdminAction('delete_category');
}

/*******************Web Categories and their links**********************/


function applyWebCategory(act){
	
	var errs = false;
	if(trim(document.masterForm.WEB_CATEGORY_NAME.value) == ""){
		alert ("Please enter a Web Category Name");
		document.masterForm.WEB_CATEGORY_NAME.focus;
		errs = true;	
	}
	
	if(errs == false){
		doAdminAction(act);
	}
	
}

function applyWebLink(){
	
	var errs = false;
	if(trim(document.masterForm.WEB_LINK_URL.value) == ""){
		alert ("Please enter a Web Link URL");
		document.masterForm.WEB_LINK_URL.focus;
		errs = true;	
	}
	
	if(errs == false){
		doAdminAction('apply_web_link');
	}
	
}

function editWebLink(id) {
	document.masterForm.WEB_LINK_ID.value = id;
	doAdminAction('addmod_web_link');
}

function deleteWebLink(id, assid) {
	if(confirm("Are you sure you want to delete this Web Link?")){
	
		document.masterForm.WEB_LINK_ID.value = id;
		document.masterForm.WEB_LINK_ASSOCIATION_ID.value = assid;
		doAdminAction('delete_web_link');
	}
}

function listWebCategories(parentid) {
	document.masterForm.WEB_CATEGORY_PARENT_ID.value = parentid;
	doAdminAction('list_web_categories');
}

function addModWebCategory(id) {
	document.masterForm.WEB_CATEGORY_ID.value = id;
	doAdminAction('addmod_web_category');
}

function addWebCategory(id) {

	document.masterForm.WEB_CATEGORY_PARENT_ID.value = id;
	document.masterForm.WEB_CATEGORY_ID.value = "";
	doAdminAction('addmod_web_category');
}

function deleteWebCategory(id) {
	if(confirm("Are you sure you want to delete this Web Category?\nAll of the subcategories and links are going to be deleted!")){
	
		document.masterForm.WEB_CATEGORY_PARENT_ID.value = id;
		doAdminAction('delete_web_category');
	}
}
/************************End of Web Categories********************************/

/*********************************Best Books********************************/

function applyBestBookCategory(act){
	
	var errs = false;
	if(trim(document.masterForm.BEST_BOOK_CATEGORY_NAME.value) == ""){
		alert ("Please enter a Best Book Category Name");
		document.masterForm.BEST_BOOK_CATEGORY_NAME.focus;
		errs = true;	
	}
	
	if(errs == false){
		doAdminAction(act);
	}
	
}

function applyBestBook(){
	
	var errs = false;
	if(trim(document.masterForm.BEST_BOOK_TITLE.value) == ""){
		alert ("Please enter a Best Book Title");
		document.masterForm.BEST_BOOK_TITLE.focus;
		errs = true;	
	}

	if(trim(document.masterForm.BEST_BOOK_AUTHOR.value) == ""){
		alert ("Please enter a Best Book Author");
		document.masterForm.BEST_BOOK_AUTHOR.focus;
		errs = true;	
	}

	if(trim(document.masterForm.BEST_BOOK_PUBLICATION_YEAR.value) == ""){
		alert ("Please enter a Best Book Publication Year");
		document.masterForm.BEST_BOOK_PUBLICATION_YEAR.focus;
		errs = true;	
	}

	if(trim(document.masterForm.BEST_BOOK_URL.value) == ""){
		alert ("Please enter a Best Book URL");
		document.masterForm.BEST_BOOK_URL.focus;
		errs = true;	
	}

	
	if(errs == false){
		doDocumentAction('apply_best_book');
	}
	
}

function addModBestBookCategory(id) {
	document.masterForm.BEST_BOOK_CATEGORY_ID.value = id;
	doAdminAction('addmod_best_book_category');
}

function addBestBookCategory(id) {

	document.masterForm.BEST_BOOK_CATEGORY_PARENT_ID.value = id;
	document.masterForm.BEST_BOOK_CATEGORY_ID.value = "";
	doAdminAction('addmod_best_book_category');
}

function editBestBook(id) {
	document.masterForm.BEST_BOOK_ID.value = id;
	doAdminAction('addmod_best_book');
}

function deleteBestBook(id, assid) {
	if(confirm("Are you sure you want to delete this Best Book?")){
	
		document.masterForm.BEST_BOOK_ID.value = id;
		document.masterForm.BEST_BOOK_ASSOCIATION_ID.value = assid;
		doAdminAction('delete_best_book');
	}
}

function listBestBookCategories(parentid) {
	
	if(document.masterForm.PREV_BEST_BOOK_CATEGORY_PARENT_ID){
		document.masterForm.PREV_BEST_BOOK_CATEGORY_PARENT_ID.value = document.masterForm.BEST_BOOK_CATEGORY_PARENT_ID.value
	}
	
	document.masterForm.BEST_BOOK_CATEGORY_PARENT_ID.value = parentid;
	doAdminAction('list_best_book_categories');
}

function deleteBestBookCategory(id) {
	if(confirm("Are you sure you want to delete this Best Book Category?\nAll of the subcategories and books are going to be deleted!")){
	
		document.masterForm.BEST_BOOK_CATEGORY_PARENT_ID.value = id;
		doAdminAction('delete_best_book_category');
	}
}

function doBestBookCategoryAction(){                       
	document.bbForm.page.value = "listBestBookCategories";  
	document.bbForm.submit();                          
}     


/******************************End Best Books********************************/

function applyEntity(){
	var errs = false;
	if(document.masterForm.ENTITY_TYPE_NAME.value == ""){
		alert ("Please enter an Entity Name");
		document.masterForm.ENTITY_TYPE_NAME.focus;
		errs = true;	
	}
	
	if(errs == false){
		doAdminAction('apply_entity');
	}
	
}

function listEntities() {
	doAdminAction('list_entities');
}

function addModEntity(id) {
	document.masterForm.ENTITY_TYPE_ID.value = id;
	doAdminAction('addmod_entity');
}

function deleteEntity(id) {
	if(confirm("Are you sure you want to delete this entity?")){
		document.masterForm.ENTITY_TYPE_ID.value = id;
		doAdminAction('delete_entity');
	}
}

function listBlogContributors(startRow){
	document.masterForm.startRow.value = startRow;
	doAdminAction("list_blog_contributors");
}

function addModBlogContributor(contId, userId){
	if(document.masterForm.BLOG_CONTRIBUTOR_ID){
		document.masterForm.BLOG_CONTRIBUTOR_ID.value = contId;
	}
	
	if(document.masterForm.USER_ID){
		document.masterForm.USER_ID.value = userId;
	}
	
	doAdminAction("addmod_blog_contributors");
}

function applyBlogContributor(){
	doAdminAction('apply_blog_contributor');
}

function deleteBlogContributor(id){
	document.masterForm.BLOG_CONTRIBUTOR_ID.value = id;
	doAdminAction('delete_blog_contributor');
}


function listBlogEntries(startRow){
	document.masterForm.startRow.value = startRow;
	doAdminAction("list_blog_entries");
}

function addModBlogEntry(id) {
	document.masterForm.BLOG_ENTRY_ID.value = id;
	doAdminAction('addmod_blog_entry');
}

function applyBlogEntry(){
	
	var errs = false;
	var expDate = "";
	var releaseDate = "";
	
	if(document.masterForm.BLOG_ENTRY_RELEASE_DATEONLY.value != "" && document.masterForm.BLOG_ENTRY_RELEASE_DATE_HOURS.selectedIndex != 0 && document.masterForm.BLOG_ENTRY_RELEASE_DATE_MINUTES.selectedIndex != 0)
		{
				releaseDate = document.masterForm.BLOG_ENTRY_RELEASE_DATEONLY.value + " " + document.masterForm.BLOG_ENTRY_RELEASE_DATE_HOURS.options[document.masterForm.BLOG_ENTRY_RELEASE_DATE_HOURS.selectedIndex].value + ":" + document.masterForm.BLOG_ENTRY_RELEASE_DATE_MINUTES.options[document.masterForm.BLOG_ENTRY_RELEASE_DATE_MINUTES.selectedIndex].value + " " + document.masterForm.BLOG_ENTRY_RELEASE_DATE_AMPM.options[document.masterForm.BLOG_ENTRY_RELEASE_DATE_AMPM.selectedIndex].value;
	  		document.masterForm.BLOG_ENTRY_RELEASE_DATE.value = releaseDate;
	  }
	else
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
		if(document.masterForm.BLOG_ENTRY_EXPIRATION_DATEONLY.value != "" && document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_HOURS.selectedIndex != 0 && document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_MINUTES.selectedIndex != 0 && document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_AMPM.selectedIndex != 0)
		{
				expDate = document.masterForm.BLOG_ENTRY_EXPIRATION_DATEONLY.value + " " + document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_HOURS.options[document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_HOURS.selectedIndex].value + ":" + document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_MINUTES.options[document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_MINUTES.selectedIndex].value + " " + document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_AMPM.options[document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_AMPM.selectedIndex].value;
	  		document.masterForm.BLOG_ENTRY_EXPIRATION_DATE.value = expDate;
	  }
	else if((document.masterForm.BLOG_ENTRY_EXPIRATION_DATEONLY.value == "" || document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_HOURS.selectedIndex == 0 || document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_MINUTES.selectedIndex == 0 || document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_AMPM.selectedIndex == 0) && (document.masterForm.BLOG_ENTRY_EXPIRATION_DATEONLY.value != "" || document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_HOURS.selectedIndex != 0 || document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_MINUTES.selectedIndex != 0 || document.masterForm.BLOG_ENTRY_EXPIRATION_DATE_AMPM.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
			
	if(!errs)
	 {
			if(expDate != "")
			{
				var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
	
				if(expDate_GT_relDate == 1){	
					doAdminAction('apply_blog_entry');
				}
				else
					alert("Expiration Date must fall after the Release Date!");
	 		}
	 		else
	 		{
	 			doAdminAction('apply_blog_entry');
	 		}	
	 }
		
}

function listRelatedBlogs(startRow){
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_related_blogs');
}

function addModRelatedBlog(id) {
	document.masterForm.BLOG_RELATED_ID.value = id;
	doAdminAction('addmod_related_blog');
}

function applyRelatedBlog(id){
	var stringURL = document.masterForm.BLOG_RELATED_URL.value;

	if(stringURL.substring(0, 7) != "http://" && stringURL.substring(0, 8) != "https://" ){
		alert("Please enter a valid URL.");
	}
	else{
		doAdminAction('apply_related_blog');
	}
}

function deleteRelatedBlog(id){
	document.masterForm.BLOG_RELATED_ID.value = id;
	doAdminAction('delete_related_blog');
}

function publishSection() {
	document.masterForm.page.value = "publish_section";
	document.masterForm.action = "ah_publish_controller.jsp";
	document.masterForm.submit();
}


/**************************DS Code starts here*************************************/
function fixNumericData(objField){
	
	/*Won't let user enter a non-numeric value into a given field*/	  	 
	
	  	 if(objField)
	  	 {
		  		if (isNaN(objField.value)) 
		      { 
		           while (isNaN(objField.value)) 
		           { 
		                objField.value = objField.value.substring(0,objField.value.length-1); 
		           }
		      }
		  } 
	 }
	 
function setOrderBy(ordby,act) {
	
	document.masterForm.orderBy.value = ordby;
	document.masterForm.startRow.value = "0";
	
	doAdminAction(act);
}
/**************Photos*************************/

/*************Public Photos********************/

function listPublicPhotos(startRow){
	
	document.photoForm.startRow.value = startRow;
	doPhotoAction('listPictures');
}

function photoDetails(id){
		
	document.photoForm.pictureID.value = id;
	doPhotoAction('viewPicture');
}

function doPhotoAction(act){

	document.photoForm.target = "_self";
	document.photoForm.action = "/picture/index.jsp";
	document.photoForm.page.value = act;
	document.photoForm.submit();
}

function doPollAction(act){

	document.pollForm.target = "_self";
	  document.pollForm.action = "/polls/index.jsp";
	document.pollForm.page.value = act;
	document.pollForm.submit();
}

function doQuoteAction(act){

	document.photoForm.target = "_self";
	document.photoForm.action = "/quote/index.jsp";
	document.photoForm.page.value = act;
	document.photoForm.submit();
}

/*************Admin Photos********************/

function listPhotos(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_photos');
}

function viewPhoto(filePath, photoID){
	
    	logoWindow = window.open("", "LogoPopup", "width=640,height=540,screenX=100,left=25,screenY=30,top=25,scrollbars=no,resizable=no");    	
    	document.masterForm.FILE_PATH.value = filePath;
    	document.masterForm.PHOTO_ID.value = photoID;
    	document.masterForm.page.value = "view_photo";
    	document.masterForm.action="index.jsp";	
    	document.masterForm.target="LogoPopup";		
			window.name="LogoWindow";
		  logoWindow.focus();
			document.masterForm.submit();
}

function viewTravelPhoto(filePath,title, act){
	
    	logoWindow = window.open("", "LogoPopup", "width=640,height=540,screenX=100,left=25,screenY=30,top=25,scrollbars=no,resizable=no");    	
    	document.masterForm.FILE_PATH.value = filePath;
    	document.masterForm.TITLE.value = title;
    	document.masterForm.page.value = act;
    	document.masterForm.action="index.jsp";	
    	document.masterForm.target="LogoPopup";		
			window.name="LogoWindow";
		  logoWindow.focus();
			document.masterForm.submit();
}

function viewArticleImage(fName,ititle){
	
    	logoWindow = window.open("", "LogoPopup", "width=640,height=540,screenX=100,left=25,screenY=30,top=25,scrollbars=yes,resizable=yes");    	
    	document.masterForm.ARTICLE_IMAGE_FILE_NAME.value = fName;
    	document.masterForm.IMAGE_TITLE.value = ititle;
    	document.masterForm.page.value = "view_article_image";
    	document.masterForm.action="index.jsp";	
    	document.masterForm.target="LogoPopup";		
			window.name="LogoWindow";
		  logoWindow.focus();
			document.masterForm.submit();
}

function addModPhoto(id) {
	document.masterForm.PHOTO_ID.value = id;
	doAdminAction('addmod_photo');
}

function applyPhoto(){
	
	var releaseDate = "";
	var expDate = "";
	var errs = false;
	
	if(document.masterForm.PHOTO_RELEASE_DATEONLY.value != "" && document.masterForm.PHOTO_RELEASE_HOURS.selectedIndex != 0 && document.masterForm.PHOTO_RELEASE_MINUTES.selectedIndex != 0)
	 {
	 			releaseDate = document.masterForm.PHOTO_RELEASE_DATEONLY.value + " " + document.masterForm.PHOTO_RELEASE_HOURS.options[document.masterForm.PHOTO_RELEASE_HOURS.selectedIndex].value + ":" + document.masterForm.PHOTO_RELEASE_MINUTES.options[document.masterForm.PHOTO_RELEASE_MINUTES.selectedIndex].value + " " + document.masterForm.PHOTO_RELEASE_AMPM.options[document.masterForm.PHOTO_RELEASE_AMPM.selectedIndex].value;
	 			document.masterForm.PHOTO_RELEASE_DATE.value = releaseDate;
	 }
	else
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
	if(document.masterForm.PHOTO_EXPIRATION_DATEONLY.value != "" && document.masterForm.PHOTO_EXPIRATION_HOURS.selectedIndex != 0 && document.masterForm.PHOTO_EXPIRATION_MINUTES.selectedIndex != 0 && document.masterForm.PHOTO_EXPIRATION_AMPM.selectedIndex != 0)
		{
				expDate = document.masterForm.PHOTO_EXPIRATION_DATEONLY.value + " " + document.masterForm.PHOTO_EXPIRATION_HOURS.options[document.masterForm.PHOTO_EXPIRATION_HOURS.selectedIndex].value + ":" + document.masterForm.PHOTO_EXPIRATION_MINUTES.options[document.masterForm.PHOTO_EXPIRATION_MINUTES.selectedIndex].value + " " + document.masterForm.PHOTO_EXPIRATION_AMPM.options[document.masterForm.PHOTO_EXPIRATION_AMPM.selectedIndex].value;
	  		document.masterForm.PHOTO_EXPIRATION_DATE.value = expDate;
	  }
	else if((document.masterForm.PHOTO_EXPIRATION_DATEONLY.value == "" || document.masterForm.PHOTO_EXPIRATION_HOURS.selectedIndex == 0 || document.masterForm.PHOTO_EXPIRATION_MINUTES.selectedIndex == 0 || document.masterForm.PHOTO_EXPIRATION_AMPM.selectedIndex == 0) && (document.masterForm.PHOTO_EXPIRATION_DATEONLY.value != "" || document.masterForm.PHOTO_EXPIRATION_HOURS.selectedIndex != 0 || document.masterForm.PHOTO_EXPIRATION_MINUTES.selectedIndex != 0 || document.masterForm.PHOTO_EXPIRATION_AMPM.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
 		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
	
	if(!errs)
	 {
			if(expDate != "")
			{
				var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
				if(expDate_GT_relDate == 1)	
					doDocumentAction('apply_photo');
				else
					alert("Expiration Date must fall after the Release Date!");
			}
			else
			{
				doDocumentAction('apply_photo');
			}
	 }
	
}

function deletePhoto(id, releaseDate, expDate) {
	
	var now = new Date();
	 
//	 var todaysDate = formatDate(now,"MM/dd/yyyy HH:mm");	
//	 var gtRelDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",releaseDate,"MM/dd/yyyy HH:mm");
//	 var ltRelDate = compareDates(releaseDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm");	 
//	 var ltExpDate = compareDates(expDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm");	 
//	 var gtExpDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",expDate,"MM/dd/yyyy HH:mm");
//	//alert("today"+todaysDate + "\nreldate:"+releaseDate+"\nexpdate:" + expDate);
//	//alert("Today is > releaseDate=" + gtRelDate + " AND today is BEFORE expDate=" + ltExpDate);
//	
//	if(((gtRelDate == 1 || gtRelDate == 0) && ltRelDate != 1) && ((ltExpDate == 1 || ltExpDate == 0) && gtExpDate != 1))	
//	 {
//	 	 alert("You cannot delete this Photo as it is currently in use\n");			
//	 }
//	else
//	 {
	 		if(confirm("Are you sure you want to delete this photo?"))
			 {
			 		document.masterForm.PHOTO_ID.value = id;
			 		doAdminAction('delete_photo');		
			 }	 	
//	 }	
}

function deleteAssociation(id, releaseDate, expDate, itemName) {
	
	var now = new Date();
	 var errs = false;
	 
//	 if(releaseDate != "" && expDate != "")
//	  {
//			 var todaysDate = formatDate(now,"MM/dd/yyyy HH:mm");	 
//			 var gtRelDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",releaseDate,"MM/dd/yyyy HH:mm");
//			 var ltRelDate = compareDates(releaseDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm");	 
//			 var ltExpDate = compareDates(expDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm");	 
//			 var gtExpDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",expDate,"MM/dd/yyyy HH:mm");
//			//alert("today"+todaysDate + "\nreldate:"+releaseDate+"\nexpdate:" + expDate);
//			//alert("Today is > releaseDate=" + gtRelDate + " AND today is BEFORE expDate=" + ltExpDate);
//			
//			if(((gtRelDate == 1 || gtRelDate == 0) && ltRelDate != 1) && ((ltExpDate == 1 || ltExpDate == 0) && gtExpDate != 1))	
//			 {
//			 	 alert("You cannot delete this Association as this " + itemName + " is currently in use.\n");	
//			 	 errs = true;		
//			 }
//		 }
//	
//	if(!errs)
//	 {
	 		if(confirm("Are you sure you want to delete this Association?"))
			 {			 		
			 		document.masterForm.ASSOCIATION_ID.value = id;
			 		doAdminAction('delete_association');		
			 }	 	
//	 }	
}

function editAssociation(id) {			 		
	
	document.masterForm.ASSOCIATION_ID.value = id;
	doAdminAction('edit_association');	//look at addmod_association	

}	 	


/*********************Polls*********************/

function listPolls(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_polls');
}

function listPollVotes(pollID,startRow){
		
	document.masterForm.POLL_ID.value = pollID;
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_poll_votes');
}

function listPublicPolls(pollID, startRow){
	
	if(pollID != "")	
		document.pollForm.pollID.value = pollID;
		
	document.pollForm.startRow.value = startRow;
	document.pollForm.page.value = 'listPollVotes';
	document.pollForm.submit();
}

function addModPoll(id) {
	document.masterForm.POLL_ID.value = id;
	doAdminAction('addmod_poll');
}

function sweepstakesVote_1() {
	
	var btnChecked = false;
	var errs = false;
	
	//loop over the Radio group and make sure something was checked
	for(var i=0; i < document.sweepstakesForm.sweepstakesChoiceID.length; i++)
	{
		if(document.sweepstakesForm.sweepstakesChoiceID[i].checked)
			  btnChecked = true;   
	}
 
 if(btnChecked)
	{
		if((trim(document.sweepstakesForm.sweepstakesOther.value) == "" || trim(document.sweepstakesForm.sweepstakesOtherDescription.value) == "") && document.sweepstakesForm.sweepstakesChoiceID[document.sweepstakesForm.sweepstakesChoiceID.length-1].checked)
		 {
		 		alert("Please enter your favorite city and a brief explanation or select a different city.\n");
		 		document.sweepstakesForm.sweepstakesOther.focus();
		 		errs = true;	
		 }
		else if(document.sweepstakesForm.sweepstakesChoiceID[document.sweepstakesForm.sweepstakesChoiceID.length-1].checked && trim(document.sweepstakesForm.sweepstakesOtherDescription.value) != "")
		 {
			 //count all of the words in the description to prevent it from exceeding 50 words
			 var descr = trim(document.sweepstakesForm.sweepstakesOtherDescription.value);
			 var wordArray = descr.split(" ");
			 //alert("Number of words = "+wordArray.length);
			 if(wordArray.length < 25)
			  {
			  		alert("Your explanation must be at least 25 words.");
			  		document.sweepstakesForm.sweepstakesOtherDescription.focus();
			  		document.sweepstakesForm.sweepstakesOtherDescription.select();
			  		errs = true;
			  }
			else if(wordArray.length > 50)
			  {
			  		alert("Please limit your explanation to 25-50 words.");
			  		document.sweepstakesForm.sweepstakesOtherDescription.focus();
			  		document.sweepstakesForm.sweepstakesOtherDescription.select();
			  		errs = true;
			  }
		  }		 
	}  
 else 
	{
		errs = true;
		alert("Please select your answer.");     	
	}

	//Erase Other City and  description if different box is checked
 if(!errs && !document.sweepstakesForm.sweepstakesChoiceID[document.sweepstakesForm.sweepstakesChoiceID.length-1].checked)
  {
		document.sweepstakesForm.sweepstakesOther.value = "";		
		document.sweepstakesForm.sweepstakesOtherDescription.value = "";
	}
	
	if(!errs)  			
	 {	document.sweepstakesForm.submit();	}
}

function sweepstakesVote_2() {
	
	var errs = false;
	
	 if(!document.sweepstakesForm.sweepstakesChoiceID.checked)
	 {
	 	 alert("You have to agree to Terms and Conditions to enter the sweepstakes.\n");
	 	 errs = true;	
	 }	 
	
	if(!errs)  			
	 {	document.sweepstakesForm.submit();	}
	
}

function pollVote() {
	
	var btnChecked = false;
	
	//loop over the Radio group and make sure something was checked
	for(var i=0; i < document.pollForm.pollChoiceID.length; i++)
	{
		if(document.pollForm.pollChoiceID[i].checked)
			  btnChecked = true;   
	}
	if(btnChecked)
		doPollAction('vote'); 
	else
		alert("Please select your answer.");     
}

function deletePoll(id, releaseDate, expDate) {
	
	var now = new Date();
	 
//	 var todaysDate = formatDate(now,"MM/dd/yyyy HH:mm");	
//	 var gtRelDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",releaseDate,"MM/dd/yyyy HH:mm");
//	 var ltRelDate = compareDates(releaseDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm");	 
//	 var ltExpDate = compareDates(expDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm"); 
//	 var gtExpDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",expDate,"MM/dd/yyyy HH:mm");
//	//alert("today"+todaysDate + "\nreldate:"+releaseDate+"\nexpdate:" + expDate);
//	//alert("Today is > releaseDate=" + gtRelDate + " AND today is BEFORE expDate=" + ltExpDate);
//	
//	if(((gtRelDate == 1 || gtRelDate == 0) && ltRelDate != 1) && ((ltExpDate == 1 || ltExpDate == 0) && gtExpDate != 1))
//	 {
//	 	 alert("You cannot delete this Poll as it is currently active\n");			
//	 }
//	else
//	 {
	 		if(confirm("Are you sure you want to delete this poll?\nThis action would also remove all of the existing Votes!"))
			 {
			 		document.masterForm.POLL_ID.value = id;
			 		doAdminAction('delete_poll');		
			 }	 	
//	 }	
}

function addModPollChoice(id) {
	document.masterForm.POLL_CHOICE_ID.value = id;
	doAdminAction('addmod_poll_choice');
}

function deletePollChoice(id) {
		
	if(confirm("Are you sure you want to delete this Choice?"))
			 {
			 		document.masterForm.POLL_CHOICE_ID.value = id;
			 		doAdminAction('delete_poll_choice');		
			 }	 		
}

function applyPoll(act){
	
	var releaseDate = "";
	var expDate = "";
	var errs = false;
		
	if(document.masterForm.POLL_RELEASE_DATEONLY.value != "" && document.masterForm.POLL_RELEASE_HOURS.selectedIndex != 0 && document.masterForm.POLL_RELEASE_MINUTES.selectedIndex != 0)
	 {
	 			releaseDate = document.masterForm.POLL_RELEASE_DATEONLY.value + " " + document.masterForm.POLL_RELEASE_HOURS.options[document.masterForm.POLL_RELEASE_HOURS.selectedIndex].value + ":" + document.masterForm.POLL_RELEASE_MINUTES.options[document.masterForm.POLL_RELEASE_MINUTES.selectedIndex].value + " " + document.masterForm.POLL_RELEASE_AMPM.options[document.masterForm.POLL_RELEASE_AMPM.selectedIndex].value;
	 			document.masterForm.POLL_RELEASE_DATE.value = releaseDate;
	 }
	else
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
	if(document.masterForm.POLL_EXPIRATION_DATEONLY.value != "" && document.masterForm.POLL_EXPIRATION_HOURS.selectedIndex != 0 && document.masterForm.POLL_EXPIRATION_MINUTES.selectedIndex != 0 && document.masterForm.POLL_EXPIRATION_AMPM.selectedIndex != 0)
		{
				expDate = document.masterForm.POLL_EXPIRATION_DATEONLY.value + " " + document.masterForm.POLL_EXPIRATION_HOURS.options[document.masterForm.POLL_EXPIRATION_HOURS.selectedIndex].value + ":" + document.masterForm.POLL_EXPIRATION_MINUTES.options[document.masterForm.POLL_EXPIRATION_MINUTES.selectedIndex].value + " " + document.masterForm.POLL_EXPIRATION_AMPM.options[document.masterForm.POLL_EXPIRATION_AMPM.selectedIndex].value;
	  		document.masterForm.POLL_EXPIRATION_DATE.value = expDate;
	  }
	else if((document.masterForm.POLL_EXPIRATION_DATEONLY.value == "" || document.masterForm.POLL_EXPIRATION_HOURS.selectedIndex == 0 || document.masterForm.POLL_EXPIRATION_MINUTES.selectedIndex == 0 || document.masterForm.POLL_EXPIRATION_AMPM.selectedIndex == 0) && (document.masterForm.POLL_EXPIRATION_DATEONLY.value != "" || document.masterForm.POLL_EXPIRATION_HOURS.selectedIndex != 0 || document.masterForm.POLL_EXPIRATION_MINUTES.selectedIndex != 0 || document.masterForm.POLL_EXPIRATION_AMPM.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
	
if(!errs)
	 {
			if(expDate != "")
			{
			
				var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
		
				if(expDate_GT_relDate == 1)	
					doAdminAction(act);
				else
					alert("Expiration Date must fall after the Release Date!");
			}
			else
			{
				doAdminAction(act);
			}		
	 }
	
}

/************************Quotes************************/

function filterQuoteArchives(year){

	document.masterForm.action = "/quote/index.jsp";	
	document.masterForm.submit();

}

function listQuoteArchives(startrow){
	
		document.masterForm.startrow.value = startrow;
		doAction('quotearchive');
}

function listPublicQuotes(startRow){
	
	document.photoForm.startRow.value = startRow;
	doQuoteAction('listQuotes');
}

function listQuotes(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_quotes');
}

function addModQuote(id) {
	document.masterForm.QUOTE_ID.value = id;
	doAdminAction('addmod_quote');
}

function deleteQuote(id, releaseDate, expDate) {
	
	var now = new Date();
	 
//	 var todaysDate = formatDate(now,"MM/dd/yyyy HH:mm");	
//	 var gtRelDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",releaseDate,"MM/dd/yyyy HH:mm");
//	 var ltRelDate = compareDates(releaseDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm");	 
//	 var ltExpDate = compareDates(expDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm"); 
//	 var gtExpDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",expDate,"MM/dd/yyyy HH:mm");
//	//alert("today"+todaysDate + "\nreldate:"+releaseDate+"\nexpdate:" + expDate);
//	//alert("Today is > releaseDate=" + gtRelDate + " AND today is BEFORE expDate=" + ltExpDate);
//	
//	if(((gtRelDate == 1 || gtRelDate == 0) && ltRelDate != 1) && ((ltExpDate == 1 || ltExpDate == 0) && gtExpDate != 1))
//	 {
//	 	 alert("You cannot delete this Quote as it is currently active\n");			
//	 }
//	else
//	 {
	 		if(confirm("Are you sure you want to delete this quote?"))
			 {
			 		document.masterForm.QUOTE_ID.value = id;
			 		doAdminAction('delete_quote');		
			 }	 	
//	 }	
}

function applyQuote(){
	
	var releaseDate = "";
	var expDate = "";
	var errs = false;
	
	if(document.masterForm.QUOTE_RELEASE_DATEONLY.value != "" && document.masterForm.QUOTE_RELEASE_HOURS.selectedIndex != 0 && document.masterForm.QUOTE_RELEASE_MINUTES.selectedIndex != 0)
	 {
	 			releaseDate = document.masterForm.QUOTE_RELEASE_DATEONLY.value + " " + document.masterForm.QUOTE_RELEASE_HOURS.options[document.masterForm.QUOTE_RELEASE_HOURS.selectedIndex].value + ":" + document.masterForm.QUOTE_RELEASE_MINUTES.options[document.masterForm.QUOTE_RELEASE_MINUTES.selectedIndex].value + " " + document.masterForm.QUOTE_RELEASE_AMPM.options[document.masterForm.QUOTE_RELEASE_AMPM.selectedIndex].value;
	 			document.masterForm.QUOTE_RELEASE_DATE.value = releaseDate;
	 }
	else
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
	if(document.masterForm.QUOTE_EXPIRATION_DATEONLY.value != "" && document.masterForm.QUOTE_EXPIRATION_HOURS.selectedIndex != 0 && document.masterForm.QUOTE_EXPIRATION_MINUTES.selectedIndex != 0 && document.masterForm.QUOTE_EXPIRATION_AMPM.selectedIndex != 0)
		{
				expDate = document.masterForm.QUOTE_EXPIRATION_DATEONLY.value + " " + document.masterForm.QUOTE_EXPIRATION_HOURS.options[document.masterForm.QUOTE_EXPIRATION_HOURS.selectedIndex].value + ":" + document.masterForm.QUOTE_EXPIRATION_MINUTES.options[document.masterForm.QUOTE_EXPIRATION_MINUTES.selectedIndex].value + " " + document.masterForm.QUOTE_EXPIRATION_AMPM.options[document.masterForm.QUOTE_EXPIRATION_AMPM.selectedIndex].value;
	  		document.masterForm.QUOTE_EXPIRATION_DATE.value = expDate;
	  }
	else if((document.masterForm.QUOTE_EXPIRATION_DATEONLY.value == "" || document.masterForm.QUOTE_EXPIRATION_HOURS.selectedIndex == 0 || document.masterForm.QUOTE_EXPIRATION_MINUTES.selectedIndex == 0 || document.masterForm.QUOTE_EXPIRATION_AMPM.selectedIndex == 0) && (document.masterForm.QUOTE_EXPIRATION_DATEONLY.value != "" || document.masterForm.QUOTE_EXPIRATION_HOURS.selectedIndex != 0 || document.masterForm.QUOTE_EXPIRATION_MINUTES.selectedIndex != 0 || document.masterForm.QUOTE_EXPIRATION_AMPM.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
			
	if(!errs)
	 {
			if(expDate != "")
			{
				var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
				if(expDate_GT_relDate == 1)	
					doAdminAction('apply_quote');
				else
					alert("Expiration Date must fall after the Release Date!");
	 		}
	 		else
	 		{
	 			doAdminAction('apply_quote');
	 		}
	 }
	
}

/************************Today's Links***************************/

function listTodaysLinks(startRow){
	
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_todays_links');
	
}

function addModTodaysLinks(id){

	document.masterForm.TODAY_LINK_ID.value = id;
	doAdminAction('addmod_todays_link');

}

function applyTodaysLinks(){
	
	var errs = false;
	var expDate = "";
	var releaseDate = "";
	
	if(document.masterForm.TODAY_LINK_RELEASE_DATEONLY.value != "" && document.masterForm.TODAY_LINK_RELEASE_DATE_HOURS.selectedIndex != 0 && document.masterForm.TODAY_LINK_RELEASE_DATE_MINUTES.selectedIndex != 0)
		{
				releaseDate = document.masterForm.TODAY_LINK_RELEASE_DATEONLY.value + " " + document.masterForm.TODAY_LINK_RELEASE_DATE_HOURS.options[document.masterForm.TODAY_LINK_RELEASE_DATE_HOURS.selectedIndex].value + ":" + document.masterForm.TODAY_LINK_RELEASE_DATE_MINUTES.options[document.masterForm.TODAY_LINK_RELEASE_DATE_MINUTES.selectedIndex].value + " " + document.masterForm.TODAY_LINK_RELEASE_DATE_AMPM.options[document.masterForm.TODAY_LINK_RELEASE_DATE_AMPM.selectedIndex].value;
	  		document.masterForm.TODAY_LINK_RELEASE_DATE.value = releaseDate;
	  }
	else
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
		if(document.masterForm.TODAY_LINK_EXPIRATION_DATEONLY.value != "" && document.masterForm.TODAY_LINK_EXPIRATION_DATE_HOURS.selectedIndex != 0 && document.masterForm.TODAY_LINK_EXPIRATION_DATE_MINUTES.selectedIndex != 0 && document.masterForm.TODAY_LINK_EXPIRATION_DATE_AMPM.selectedIndex != 0)
		{
				expDate = document.masterForm.TODAY_LINK_EXPIRATION_DATEONLY.value + " " + document.masterForm.TODAY_LINK_EXPIRATION_DATE_HOURS.options[document.masterForm.TODAY_LINK_EXPIRATION_DATE_HOURS.selectedIndex].value + ":" + document.masterForm.TODAY_LINK_EXPIRATION_DATE_MINUTES.options[document.masterForm.TODAY_LINK_EXPIRATION_DATE_MINUTES.selectedIndex].value + " " + document.masterForm.TODAY_LINK_EXPIRATION_DATE_AMPM.options[document.masterForm.TODAY_LINK_EXPIRATION_DATE_AMPM.selectedIndex].value;
	  		document.masterForm.TODAY_LINK_EXPIRATION_DATE.value = expDate;
	  }
	else if((document.masterForm.TODAY_LINK_EXPIRATION_DATEONLY.value == "" || document.masterForm.TODAY_LINK_EXPIRATION_DATE_HOURS.selectedIndex == 0 || document.masterForm.TODAY_LINK_EXPIRATION_DATE_MINUTES.selectedIndex == 0 || document.masterForm.TODAY_LINK_EXPIRATION_DATE_AMPM.selectedIndex == 0) && (document.masterForm.TODAY_LINK_EXPIRATION_DATEONLY.value != "" || document.masterForm.TODAY_LINK_EXPIRATION_DATE_HOURS.selectedIndex != 0 || document.masterForm.TODAY_LINK_EXPIRATION_DATE_MINUTES.selectedIndex != 0 || document.masterForm.TODAY_LINK_EXPIRATION_DATE_AMPM.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
			
	if(!errs)
	 {
			if(expDate != "")
			{
				var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
	
				if(expDate_GT_relDate == 1){	
					doAdminAction('apply_todays_link');
				}
				else
					alert("Expiration Date must fall after the Release Date!");
	 		}
	 		else
	 		{
	 			doAdminAction('apply_todays_link');
	 		}	
	 }
		
}

function addModLink(id){
	
	document.masterForm.TODAY_LINK_ID.value	= id;
	doAdminAction('addmod_link');
	
}

function deleteTodaysLinks(id){
	if(confirm("Are you sure you want to delete this link?"))
	{
		document.masterForm.TODAY_LINK_ID.value = id;
		doAdminAction('delete_todays_link');	
	}
}

function deleteLink(id){

	document.masterForm.TODAY_LINK_ID.value = id;
	doAdminAction('delete_link');	
}

/************************Today In History************************/

function listTodayInHistorys(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_todayInHistorys');
}

function addModTodayInHistory(id) {
	document.masterForm.TODAY_IN_HISTORY_ID.value = id;
	doAdminAction('addmod_todayInHistory');
}

function applyTodayInHistory() {
	
	var errs = false;
	var errMess = "";
	var tihMonth=trim(document.forms[0].TODAY_IN_HISTORY_MONTH.options[document.forms[0].TODAY_IN_HISTORY_MONTH.selectedIndex].value);
	var	tihDay=trim(document.forms[0].TODAY_IN_HISTORY_DAY.options[document.forms[0].TODAY_IN_HISTORY_DAY.selectedIndex].value);
	var	tihYear=trim(document.forms[0].TODAY_IN_HISTORY_YEAR.value);
	
	//validate tihDate
	if(tihMonth=="" || tihDay=="" || tihYear=="" || tihYear.length < 4 || isNaN(tihYear) || (tihMonth == 2 && (1*tihDay > 29)))
	 {
		 errMess += "Invalid Date!\nPlease reenter.";
		 errs = true;
	 }
	
	if(!errs)
		doAdminAction('apply_todayInHistory');
	else
		alert(errMess);		
		 	
}

function deleteTodayInHistory(id) {
	
	if(confirm("Are you sure you want to delete this entry?"))
	 {
	 		document.masterForm.TODAY_IN_HISTORY_ID.value = id;
	 		doAdminAction('delete_todayInHistory');		
	 }	 	
}

/*************************************************************************************/
function removeFile(checkBoxField, fileField, initialFileField)
{
	
	//Used onClick of RemoveFile-checkboxes
	
	if(checkBoxField.checked)
			fileField.value = "";
	else			
			fileField.value = initialFileField.value;
			
}	
 

function doDocumentAction(act){
	
	document.masterForm.method = "POST";
	
	
	if(act == "apply_photo") 
	{
		
		if(document.masterForm.PHOTO_RELEASE_DATE.value == "" || ((document.masterForm.PHOTO_THUMBNAIL_FILE.value == "" &&
			 document.masterForm.PHOTO_FULLSIZE_FILE.value == "" && document.masterForm.PHOTO_640X480_FILE.value == "" &&
			 document.masterForm.PHOTO_800X600_FILE.value == "" && document.masterForm.PHOTO_1024X768_FILE.value == "" && 
			 document.masterForm.PHOTO_1280X1024_FILE.value == "") && ((document.masterForm.PHOTO_THUMBNAIL_FILE_NAME.value == "" &&
			 document.masterForm.PHOTO_FULLSIZE_FILE_NAME.value == "" && document.masterForm.PHOTO_640X480_FILE_NAME.value == "" &&
			 document.masterForm.PHOTO_800X600_FILE_NAME.value == "" && document.masterForm.PHOTO_1024X768_FILE_NAME.value == "" && 
			 document.masterForm.PHOTO_1280X1024_FILE_NAME.value == ""))))
	 {
	 		alert("Please enter Release Date and select at least one image to upload");
	 }	
	else
	 {	
			if(document.masterForm.PHOTO_THUMBNAIL_FILE.value != "" || document.masterForm.PHOTO_FULLSIZE_FILE.value != "" || 
					document.masterForm.PHOTO_640X480_FILE.value != "" || document.masterForm.PHOTO_800X600_FILE.value != "" || 
					document.masterForm.PHOTO_1024X768_FILE.value != "" || document.masterForm.PHOTO_1280X1024_FILE.value != "") 
			{
				if(document.masterForm.PHOTO_THUMBNAIL_FILE.value != "")
					document.masterForm.PHOTO_THUMBNAIL_FILE_NAME.value = document.masterForm.PHOTO_THUMBNAIL_FILE.value;
				
				if(document.masterForm.PHOTO_FULLSIZE_FILE.value != "")
					document.masterForm.PHOTO_FULLSIZE_FILE_NAME.value = document.masterForm.PHOTO_FULLSIZE_FILE.value;
				
				if(document.masterForm.PHOTO_640X480_FILE.value != "")
					document.masterForm.PHOTO_640X480_FILE_NAME.value = document.masterForm.PHOTO_640X480_FILE.value;
				
				if(document.masterForm.PHOTO_800X600_FILE.value != "")
					document.masterForm.PHOTO_800X600_FILE_NAME.value = document.masterForm.PHOTO_800X600_FILE.value;
				
				if(document.masterForm.PHOTO_1024X768_FILE.value != "")
					document.masterForm.PHOTO_1024X768_FILE_NAME.value = document.masterForm.PHOTO_1024X768_FILE.value;
				
				if(document.masterForm.PHOTO_1280X1024_FILE.value != "")
					document.masterForm.PHOTO_1280X1024_FILE_NAME.value = document.masterForm.PHOTO_1280X1024_FILE.value;			
				
				document.masterForm.action = "ah_document_photo_controller.jsp";
			
				doUploadAction(act);
			}
			else {
				doAdminAction(act);
			}
		}
	}

	if(act == "parse_xml") 
	{
		
	 if(document.masterForm.AH_XML_FILE.value == "" || (document.masterForm.AH_XML_FILE.value.indexOf(".xml") < 1 && document.masterForm.AH_XML_FILE.value.indexOf(".XML") < 1))
	 {
	 		alert("Please select an XML file to upload.");
	 }	
	 else
	 {	
			 document.masterForm.ARTICLE_FILE_NAME.value = document.masterForm.AH_XML_FILE.value;			
				
				document.masterForm.action = "ah_document_xml_controller.jsp";			
				doUploadAction(act);					
		}
	}
	
	if(act == "apply_article_image")
	 {		
		 if(document.masterForm.ARTICLE_IMAGE_FILE.value == "")
		 {
		 		alert("Please select a file to upload.");
		 }	
		 else
		 {	
				 document.masterForm.ARTICLE_IMAGE_FILE_NAME.value = document.masterForm.ARTICLE_IMAGE_FILE.value;			
					
					document.masterForm.action = "ah_document_article_image_controller.jsp";			
					doUploadAction(act);					
			}
		}
		
		if(act == "apply_travelDestination")
	 {		
		 			if(trim(document.masterForm.TRAVEL_DESTINATION_FILE.value) != "")
		 			{
		 				
		 				document.masterForm.TRAVEL_DESTINATION_IMAGE_NAME.value = document.masterForm.TRAVEL_DESTINATION_FILE.value;			
						document.masterForm.action = "ah_document_travel_controller.jsp";			
						doUploadAction(act);
					
					}
					else 
					{
						doAdminAction(act);
					}					
		}
		
	if(act == "apply_travel_event")
	 {		
		 			if(trim(document.masterForm.TRAVEL_EVENT_FILE.value) != "")
		 			{
		 				
		 				document.masterForm.TRAVEL_EVENT_IMAGE_NAME.value = document.masterForm.TRAVEL_EVENT_FILE.value;			
						document.masterForm.action = "ah_document_travel_event_controller.jsp";			
						doUploadAction(act);
					
					}
					else 
					{
						doAdminAction(act);
					}					
		}
		
	if(act == "apply_best_book")
	 {		
		 			if(trim(document.masterForm.BEST_BOOK_FILE.value) != "")
		 			{
		 				
		 				document.masterForm.BEST_BOOK_IMAGE_NAME.value = document.masterForm.BEST_BOOK_FILE.value;			
						document.masterForm.action = "ah_document_best_book_controller.jsp";			
						doUploadAction(act);
					
					}
					else 
					{
						doAdminAction(act);
					}					
		}
		
}

function doUploadAction(act) {
	document.masterForm.encoding = "multipart/form-data";
	document.masterForm.target = "_self";
	document.masterForm.page.value = act;
	document.masterForm.submit();
}

/************************Publications************************/

function listPublications(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_publications');
}

function nextPrevIssues(startRow) {
	document.masterForm.startRow.value = startRow;
	doAdminAction('addmod_publication');
}

function addModPublication(id) {
	document.masterForm.PUBLICATION_ID.value = id;
	doAdminAction('addmod_publication');
}

function deletePublication(id) {
		
	if(confirm("Are you sure you want to delete this publication?"))
	{
			document.masterForm.PUBLICATION_ID.value = id;
			doAdminAction('delete_publication');		
	}		 	
	
}

function addModIssue(id) {
	document.masterForm.ISSUE_ID.value = id;
	doAdminAction('addmod_issue');
}

function deleteIssue(id) {
	
	if(confirm("Are you sure you want to delete this issue?"))
	{
		document.masterForm.ISSUE_ID.value = id;
		doAdminAction('delete_issue');		
	}	 		
}

function applyIssue(act){
	
	var releaseDate = "";
	var expDate = "";
	var errs = false;

	if(document.masterForm.ISSUE_RELEASE_DATEONLY.value != "" && document.masterForm.ISSUE_RELEASE_HOURS.selectedIndex != 0 && document.masterForm.ISSUE_RELEASE_MINUTES.selectedIndex != 0)
	 {
	 			releaseDate = document.masterForm.ISSUE_RELEASE_DATEONLY.value + " " + document.masterForm.ISSUE_RELEASE_HOURS.options[document.masterForm.ISSUE_RELEASE_HOURS.selectedIndex].value + ":" + document.masterForm.ISSUE_RELEASE_MINUTES.options[document.masterForm.ISSUE_RELEASE_MINUTES.selectedIndex].value + " " + document.masterForm.ISSUE_RELEASE_AMPM.options[document.masterForm.ISSUE_RELEASE_AMPM.selectedIndex].value;
	 			document.masterForm.ISSUE_RELEASE_DATE.value = releaseDate;
	 }
	else
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
	if(document.masterForm.ISSUE_EXPIRATION_DATEONLY.value != "" && document.masterForm.ISSUE_EXPIRATION_HOURS.selectedIndex != 0 && document.masterForm.ISSUE_EXPIRATION_MINUTES.selectedIndex != 0 && document.masterForm.ISSUE_EXPIRATION_AMPM.selectedIndex != 0)
		{
				expDate = document.masterForm.ISSUE_EXPIRATION_DATEONLY.value + " " + document.masterForm.ISSUE_EXPIRATION_HOURS.options[document.masterForm.ISSUE_EXPIRATION_HOURS.selectedIndex].value + ":" + document.masterForm.ISSUE_EXPIRATION_MINUTES.options[document.masterForm.ISSUE_EXPIRATION_MINUTES.selectedIndex].value + " " + document.masterForm.ISSUE_EXPIRATION_AMPM.options[document.masterForm.ISSUE_EXPIRATION_AMPM.selectedIndex].value;
	  		document.masterForm.ISSUE_EXPIRATION_DATE.value = expDate;
	  }
	else if((document.masterForm.ISSUE_EXPIRATION_DATEONLY.value == "" || document.masterForm.ISSUE_EXPIRATION_HOURS.selectedIndex == 0 || document.masterForm.ISSUE_EXPIRATION_MINUTES.selectedIndex == 0 || document.masterForm.ISSUE_EXPIRATION_AMPM.selectedIndex == 0) && (document.masterForm.ISSUE_EXPIRATION_DATEONLY.value != "" || document.masterForm.ISSUE_EXPIRATION_HOURS.selectedIndex != 0 || document.masterForm.ISSUE_EXPIRATION_MINUTES.selectedIndex != 0 || document.masterForm.ISSUE_EXPIRATION_AMPM.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
if(!errs)
	 {
			if(expDate != "")
			{
					
				var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
		
				if(expDate_GT_relDate == 1)	
					doAdminAction(act);
				else
					alert("Expiration Date must fall after the Release Date!");
			}
			else
			{
				doAdminAction(act);		
			}
				
	 }
	
}

/************************TravelDestinations************************/
function deleteTravelArticle(){

if(confirm("Are you sure you want to remove this Article from this Travel Destination?"))
			 {
			 		doAdminAction('delete_travel_article');		
			 }
}

function applyTravelArticle(id){
	document.masterForm.ARTICLE_ID.value = id;
	doAdminAction('apply_travel_article');
}

function selectTravelArticle(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('select_travel_article');
}

function listTravelDestinations(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_travelDestinations');
}

function addModTravelDestination(id) {
	document.masterForm.TRAVEL_DESTINATION_ID.value = id;
	doAdminAction('addmod_travelDestination');
}

function deleteTravelDestination(id, releaseDate, expDate) {
	
	var now = new Date();
	 
//	 var todaysDate = formatDate(now,"MM/dd/yyyy HH:mm");	
//	 var gtRelDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",releaseDate,"MM/dd/yyyy HH:mm");
//	 var ltRelDate = compareDates(releaseDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm");	 
//	 var ltExpDate = compareDates(expDate,"MM/dd/yyyy HH:mm",todaysDate,"MM/dd/yyyy HH:mm"); 
//	 var gtExpDate = compareDates(todaysDate,"MM/dd/yyyy HH:mm",expDate,"MM/dd/yyyy HH:mm");
//	//alert("today"+todaysDate + "\nreldate:"+releaseDate+"\nexpdate:" + expDate);
//	//alert("Today is > releaseDate=" + gtRelDate + " AND today is BEFORE expDate=" + ltExpDate);
//	
//	if(((gtRelDate == 1 || gtRelDate == 0) && ltRelDate != 1) && ((ltExpDate == 1 || ltExpDate == 0) && gtExpDate != 1))
//	 {
//	 	 alert("You cannot delete this Travel Destination as it is currently active\n");			
//	 }
//	else
//	 {
	 		if(confirm("Are you sure you want to delete this Travel Destination?"))
			 {
			 		document.masterForm.TRAVEL_DESTINATION_ID.value = id;
			 		doAdminAction('delete_travelDestination');		
			 }	 	
//	 }	
}

function applyTravelDestination(){
	
	var releaseDate = "";
	var expDate = "";
	var errs = false;
	
	if(document.masterForm.TRAVEL_DESTINATION_RELEASE_DATEONLY.value != "" && document.masterForm.TRAVEL_DESTINATION_RELEASE_HOURS.selectedIndex != 0 && document.masterForm.TRAVEL_DESTINATION_RELEASE_MINUTES.selectedIndex != 0)
	 {
	 			releaseDate = document.masterForm.TRAVEL_DESTINATION_RELEASE_DATEONLY.value + " " + document.masterForm.TRAVEL_DESTINATION_RELEASE_HOURS.options[document.masterForm.TRAVEL_DESTINATION_RELEASE_HOURS.selectedIndex].value + ":" + document.masterForm.TRAVEL_DESTINATION_RELEASE_MINUTES.options[document.masterForm.TRAVEL_DESTINATION_RELEASE_MINUTES.selectedIndex].value + " " + document.masterForm.TRAVEL_DESTINATION_RELEASE_AMPM.options[document.masterForm.TRAVEL_DESTINATION_RELEASE_AMPM.selectedIndex].value;
	 			document.masterForm.TRAVEL_DESTINATION_RELEASE_DATE.value = releaseDate;
	 }
	else if((document.masterForm.TRAVEL_DESTINATION_RELEASE_DATEONLY.value == "" || document.masterForm.TRAVEL_DESTINATION_RELEASE_HOURS.selectedIndex == 0 || document.masterForm.TRAVEL_DESTINATION_RELEASE_MINUTES.selectedIndex == 0) && (document.masterForm.TRAVEL_DESTINATION_RELEASE_DATEONLY.value != "" || document.masterForm.TRAVEL_DESTINATION_RELEASE_HOURS.selectedIndex != 0 || document.masterForm.TRAVEL_DESTINATION_RELEASE_MINUTES.selectedIndex != 0))
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
	if(document.masterForm.TRAVEL_DESTINATION_EXPIRATION_DATEONLY.value != "" && document.masterForm.TRAVEL_DESTINATION_EXPIRATION_HOURS.selectedIndex != 0 && document.masterForm.TRAVEL_DESTINATION_EXPIRATION_MINUTES.selectedIndex != 0 && document.masterForm.TRAVEL_DESTINATION_EXPIRATION_AMPM.selectedIndex != 0)
		{
				expDate = document.masterForm.TRAVEL_DESTINATION_EXPIRATION_DATEONLY.value + " " + document.masterForm.TRAVEL_DESTINATION_EXPIRATION_HOURS.options[document.masterForm.TRAVEL_DESTINATION_EXPIRATION_HOURS.selectedIndex].value + ":" + document.masterForm.TRAVEL_DESTINATION_EXPIRATION_MINUTES.options[document.masterForm.TRAVEL_DESTINATION_EXPIRATION_MINUTES.selectedIndex].value + " " + document.masterForm.TRAVEL_DESTINATION_EXPIRATION_AMPM.options[document.masterForm.TRAVEL_DESTINATION_EXPIRATION_AMPM.selectedIndex].value;
	  		document.masterForm.TRAVEL_DESTINATION_EXPIRATION_DATE.value = expDate;
	  }
	else if((document.masterForm.TRAVEL_DESTINATION_EXPIRATION_DATEONLY.value == "" || document.masterForm.TRAVEL_DESTINATION_EXPIRATION_HOURS.selectedIndex == 0 || document.masterForm.TRAVEL_DESTINATION_EXPIRATION_MINUTES.selectedIndex == 0 || document.masterForm.TRAVEL_DESTINATION_EXPIRATION_AMPM.selectedIndex == 0) && (document.masterForm.TRAVEL_DESTINATION_EXPIRATION_DATEONLY.value != "" || document.masterForm.TRAVEL_DESTINATION_EXPIRATION_HOURS.selectedIndex != 0 || document.masterForm.TRAVEL_DESTINATION_EXPIRATION_MINUTES.selectedIndex != 0 || document.masterForm.TRAVEL_DESTINATION_EXPIRATION_AMPM.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
	
if(!errs)
	 {
			if(expDate != "")
			{
					var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
			
				if(expDate_GT_relDate == 1)	
					doDocumentAction('apply_travelDestination');
				else
					alert("Expiration Date must fall after the Release Date!");
			}
			else		
			{
				doDocumentAction('apply_travelDestination');
			}
	 }
	
}

/*********************************Travel Events*****************************************************************/
	
	function searchTravelEvents(startRow){
		
		document.masterForm.page.value = "searchEvents";
    document.masterForm.startRow.value = startRow;
		document.masterForm.submit();
	}
	
	function listTravelEvents(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_travel_events');
}

function addModTravelEvent(id) {
	document.masterForm.TRAVEL_EVENT_ID.value = id;
	doAdminAction('addmod_travel_event');
}

function deleteTravelEvent(id) {
	
 		if(confirm("Are you sure you want to delete this Travel Event?"))
			 {
			 		document.masterForm.TRAVEL_EVENT_ID.value = id;
			 		doAdminAction('delete_travel_event');		
			 }	 	
	
}

function applyTravelEvent(){
	
	var startDate = document.masterForm.TRAVEL_EVENT_START_DATE.value;
	var endDate = document.masterForm.TRAVEL_EVENT_END_DATE.value;
	var errs = false;
	
	if(startDate == "")
	 {
	 			document.masterForm.TRAVEL_EVENT_DISPLAY_START_DAY[1].checked = true;
	 }
	
		
	if(endDate == "")
		{				
			alert("Please enter End Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
	
if(!errs)
	 {
			if(startDate != "")
			{
					var endDate_GT_relDate = compareDates(endDate,"MM/dd/yyyy", startDate,"MM/dd/yyyy");
			
					if(endDate_GT_relDate == 1 || endDate_GT_relDate == 0)	
						doDocumentAction('apply_travel_event');
					else
						alert("End Date must fall after the Start Date!");
			}
			else		
			{
				doDocumentAction('apply_travel_event');
			}
	 }
	
}


/************************EmailNewsletters and Types************************/

function listEmailNewsletters(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_emailNewsletters');
}

function addModEmailNewsletter(id) {
	document.masterForm.EMAIL_NEWSLETTER_ID.value = id;
	doAdminAction('addmod_emailNewsletter');
}

function addModEmailNewsletterType(id) {
	document.masterForm.EMAIL_NEWSLETTER_TYPE_ID.value = id;
	doAdminAction('addmod_emailNewsletter_type');
}

function deleteEmailNewsletter(id) {
		
	if(confirm("Are you sure you want to delete this Email Newsletter?"))
	{
			document.masterForm.EMAIL_NEWSLETTER_ID.value = id;
			doAdminAction('delete_emailNewsletter');		
	}		 	
	
}

/*************Associations*********************************/

function moveUp(assId, secId, order, entTypeId, entId){
	
	if(order == 1){
		alert("This sponsor can not be moved up the list.");
	}
	else{
		document.masterForm.PREV_ASSOCIATION_ORDER.value = order;
		var ord = order - 1;
		document.masterForm.ASSOCIATION_ORDER.value = ord;
		document.masterForm.ASSOCIATION_ID.value = assId;
		document.masterForm.SECTION_ID.value = secId;
		document.masterForm.ENTITY_TYPE_ID.value = entTypeId;
		document.masterForm.ENTITY_ID.value = entId;
		doAdminAction("order_assocations");
		
			
	}
	
}

function moveDown(assId, secId, order, entTypeId, entId){
	
		document.masterForm.PREV_ASSOCIATION_ORDER.value = order;
		var ord = 0;
		ord = order - 1;
		ord = ord + 2;
		document.masterForm.ASSOCIATION_ORDER.value = ord;
		document.masterForm.ASSOCIATION_ID.value = assId;
		document.masterForm.SECTION_ID.value = secId;
		document.masterForm.ENTITY_TYPE_ID.value = entTypeId;
		document.masterForm.ENTITY_ID.value = entId;
		doAdminAction("order_assocations");
			
}

function addModAssociation(id) {
		document.masterForm.ASSOCIATION_ID.value = id;	
		doAdminAction('addmod_association');	
}

function listAssociationSections(assID,secID){
		document.masterForm.RESET_SECTION_ID.value = secID;
		doAdminAction('addmod_association');	
}

function addModSectionAssociation(entID, eTypeID, secID){
		
		var entityID = entID;
		var entityTypeID = eTypeID;
		var sectionID = secID;
		
		document.masterForm.RETURN_TO_SECTION_VIEW.value = sectionID;
		document.masterForm.SECTION_ID.value = sectionID;
		
		if(entityTypeID == 1){
			addModArticle(entityID)	
		}
		if(entityTypeID == 2){
			addModBlogEntry(entityID)	
		}
		if(entityTypeID == 3){
			addModPhoto(entityID)	
		}
		if(entityTypeID == 4){
			addModSpecialSection(entityID)	
		}
		if(entityTypeID == 5){
			addModTravelDestination(entityID)	
		}
		if(entityTypeID == 6){
			addModDiscussion(entityID)	
		}
		if(entityTypeID == 7){
			addModQuote(entityID)	
		}
		if(entityTypeID == 8){
			addModPoll(entityID)	
		}
		if(entityTypeID == 9){
			addModTodayInHistory(entityID)	
		}
		if(entityTypeID == 10){
			addModAssociation(entityID)	
		}
}

function applyAssociation(id) {
	
	var errs = false;
	var expDate = "";
	var releaseDate = "";
	
	if(document.masterForm.ASSOCIATION_RELEASE_DATEONLY.value != "" && document.masterForm.ASSOCIATION_RELEASE_DATE_HOURS.selectedIndex != 0 && document.masterForm.ASSOCIATION_RELEASE_DATE_MINUTES.selectedIndex != 0)
		{
				releaseDate = document.masterForm.ASSOCIATION_RELEASE_DATEONLY.value + " " + document.masterForm.ASSOCIATION_RELEASE_DATE_HOURS.options[document.masterForm.ASSOCIATION_RELEASE_DATE_HOURS.selectedIndex].value + ":" + document.masterForm.ASSOCIATION_RELEASE_DATE_MINUTES.options[document.masterForm.ASSOCIATION_RELEASE_DATE_MINUTES.selectedIndex].value + " " + document.masterForm.ASSOCIATION_RELEASE_DATE_AMPM.options[document.masterForm.ASSOCIATION_RELEASE_DATE_AMPM.selectedIndex].value;
	  		document.masterForm.ASSOCIATION_RELEASE_DATE.value = releaseDate;
	  }
	else
		{	
			alert("Please enter complete Release Date."); 
			errs = true;
		}
		
		if(document.masterForm.ASSOCIATION_EXPIRATION_DATEONLY.value != "" && document.masterForm.ASSOCIATION_EXPIRATION_DATE_HOURS.selectedIndex != 0 && document.masterForm.ASSOCIATION_EXPIRATION_DATE_MINUTES.selectedIndex != 0)
		{
				expDate = document.masterForm.ASSOCIATION_EXPIRATION_DATEONLY.value + " " + document.masterForm.ASSOCIATION_EXPIRATION_DATE_HOURS.options[document.masterForm.ASSOCIATION_EXPIRATION_DATE_HOURS.selectedIndex].value + ":" + document.masterForm.ASSOCIATION_EXPIRATION_DATE_MINUTES.options[document.masterForm.ASSOCIATION_EXPIRATION_DATE_MINUTES.selectedIndex].value + " " + document.masterForm.ASSOCIATION_EXPIRATION_DATE_AMPM.options[document.masterForm.ASSOCIATION_EXPIRATION_DATE_AMPM.selectedIndex].value;
	  		document.masterForm.ASSOCIATION_EXPIRATION_DATE.value = expDate;
	  }
		else if((document.masterForm.ASSOCIATION_EXPIRATION_DATEONLY.value == "" || document.masterForm.ASSOCIATION_EXPIRATION_DATE_HOURS.selectedIndex == 0 || document.masterForm.ASSOCIATION_EXPIRATION_DATE_MINUTES.selectedIndex == 0) && (document.masterForm.ASSOCIATION_EXPIRATION_DATEONLY.value != "" || document.masterForm.ASSOCIATION_EXPIRATION_DATE_HOURS.selectedIndex != 0 || document.masterForm.ASSOCIATION_EXPIRATION_DATE_MINUTES.selectedIndex != 0))
		{	
			alert("Please enter complete Expiration Date."); 
			errs = true;
		}
		
	/*********Note: result is 1 if 1st date > 2nd date, 0 if they are equal OR second one is > first one, -1 if invalid format is specified***/
	
	
		
	if(!errs)
	 {  
	 	if(expDate != "")
	 	{
	 		var expDate_GT_relDate = compareDates(expDate,"MM/dd/yyyy hh:mm a", releaseDate,"MM/dd/yyyy hh:mm a");
			
			if(expDate_GT_relDate == 1){	
				document.masterForm.SECTION_ID.value = id;
				doAdminAction('apply_association');
			}
			else
				alert("Expiration Date must fall after the Release Date!");
	 	}
		else{
			document.masterForm.SECTION_ID.value = id;
			doAdminAction('apply_association');
		}
	 
	 
	 }	
}

/***************************ARTICLE *************************************************/
 function validateArticleForm()
  {
  	var formObj = document.masterForm;
 		var errs = false;
 	
 				if(document.masterForm.PUBLICATION_ID.selectedIndex == 0)
 				{
 					errs = true;
 					alert("Please select Publication");	
 				} 				
 			else if((document.masterForm.ARTICLE_SECTION_ID.selectedIndex == 0 || document.masterForm.ARTICLE_SECTION_ID.options[document.masterForm.ARTICLE_SECTION_ID.selectedIndex].text == "Magazine") &&
 								 document.masterForm.PUBLICATION_ID.options[document.masterForm.PUBLICATION_ID.selectedIndex].text == "AmericanHeritage.com")
 				{
 					errs = true;
 					alert("Please select valid Section");	
 				}
		 	
		 	//stitch together Release and Exp Date
		 	if(trim(formObj.releaseDateMonth.value) != "" && trim(formObj.releaseDateDay.value) != "" && trim(formObj.releaseDateYear.value) != "" && trim(formObj.releaseDateHours.value) != "" && trim(formObj.releaseDateMinutes.value) != "" && trim(formObj.releaseDateAMPM.value) != "")
				{			
		 			document.masterForm.ARTICLE_RELEASE_DATE.value = formObj.releaseDateMonth.value + "/" + formObj.releaseDateDay.value + "/" + formObj.releaseDateYear.value + " " + formObj.releaseDateHours.value + ":" + formObj.releaseDateMinutes.value + " " + formObj.releaseDateAMPM.value; 	
		 		}
		 	else
		 		{
		 			alert("Please enter complete Release Date."); 
					errs = true;
		 		}	
		 	 		
		 		if(trim(formObj.expirationDateMonth.value) != "" && trim(formObj.expirationDateDay.value) != "" && trim(formObj.expirationDateYear.value) != "" && trim(formObj.expirationDateHours.value) != "" && trim(formObj.expirationDateMinutes.value) != "" && trim(formObj.expirationDateAMPM.value) != "")
				{
					document.masterForm.ARTICLE_EXPIRATION_DATE.value = formObj.expirationDateMonth.value + "/" + formObj.expirationDateDay.value + "/" + formObj.expirationDateYear.value + " " + formObj.expirationDateHours.value + ":" + formObj.expirationDateMinutes.value + " " + formObj.expirationDateAMPM.value;
		 		}
		 		else if((trim(formObj.expirationDateMonth.value) == "" || trim(formObj.expirationDateDay.value) == "" || trim(formObj.expirationDateYear.value) == "" || trim(formObj.expirationDateHours.value) == "" || trim(formObj.expirationDateMinutes.value) == "" || trim(formObj.expirationDateAMPM.value) == "") && (trim(formObj.expirationDateMonth.value) != "" || trim(formObj.expirationDateDay.value) != "" || trim(formObj.expirationDateYear.value) != "" || trim(formObj.expirationDateHours.value) != "" || trim(formObj.expirationDateMinutes.value) != "" || trim(formObj.expirationDateAMPM.value) != ""))
		 		{
		 			alert("Please enter complete Expiration Date."); 
					errs = true;
				}
				
				
			return errs;
  }

 function applyArticleMetadata(act){
 	
 	//document.masterForm.ISSUE_NUMBER.value = document.masterForm.ISSUE_ID.options[document.masterForm.ISSUE_ID.selectedIndex].text;
 	//document.masterForm.PUBLICATION_NAME.value = document.masterForm.PUBLICATION_ID.options[document.masterForm.PUBLICATION_ID.selectedIndex].text; 	
 		if(!validateArticleForm())
 			{

 				if(document.masterForm.initialImport.value == "t"){
 					var today = new Date();
 					
 					var thisYear = today.getFullYear();
 					
 					if(document.masterForm.releaseDateYear.value < thisYear) {
 						
 						var dateConfirm = confirm("Warning: The publish date of this web article might be incorrect.\n You have entered: " + document.masterForm.releaseDateYear.value + ".\n Is this correct?");	
						
						if(dateConfirm == true) {
							doAdminAction(act);
						}
					
					}
					else {
						doAdminAction(act);	
					}
 				}
 				else{
 					doAdminAction(act);
 				}
 			
 			} 
}

function linkArticles(){
	
	var error = false;
  var selFlag = false;
	
	if (document.masterForm.selectArticle)
  	{
 				for (var i=0; i < document.masterForm.selectArticle.length; i++)
 				 {  			 	
   				 	if(document.masterForm.selectArticle[i].checked)
   				 	 {
   				 		 selFlag = true;   				 	  	 
 				 		 }
 				 }
 					 
			if((!selFlag &&(typeof(document.masterForm.selectArticle.length) != 'undefined')) || ((typeof(document.masterForm.selectArticle.length) == 'undefined') && 
						!document.masterForm.selectArticle.checked))
					 {	
					 	alert("Select an Article, that you want to to link");
					 	error = true;
					 }
		}
	else
		{
				error = true;
				alert("There are no articles that you could link.");	
		}	
		if(!error)
			doAdminAction('apply_linked_articles');
}
	
 var checkflag = "false";
function check() 
{		  
 if (document.masterForm.selectArticle)
  {
  		//if there is at least one checkbox, then check it off		  
		if (checkflag == "false") 
		{
		  for (i = 0; i < document.masterForm.selectArticle.length; i++)
		   {			   
			 document.masterForm.selectArticle[i].checked = true;
		   }
		   //if there is just one checkbox, use totally different approach(thanks JS!)
		   if(typeof(document.masterForm.selectArticle.length) == 'undefined')
		   	 document.masterForm.selectArticle.checked = true;
		  checkflag = "true";
		 }
		else
		 {
			for (i = 0; i < document.masterForm.selectArticle.length; i++)
			{
				document.masterForm.selectArticle[i].checked = false;
			}
		  //if there is just one checkbox, use totally different approach(thanks JS!)
		  if(typeof(document.masterForm.selectArticle.length) == 'undefined')
		   	 document.masterForm.selectArticle.checked = false;
		   checkflag = "false";
	  	 }
	}
   else
    {
   		if(document.masterForm.checkAll.checked)
   		 {
   		 	alert("There are no articles to select");
   		 	document.masterForm.checkAll.checked = false;
   		 }	
    }	 		  		  		 
}

 var checkCategoryflag = "false";
function checkCategory() 
{		  
 if (document.masterForm.selectCategory)
  {
  		//if there is at least one checkbox, then check it off		  
		if (checkCategoryflag == "false") 
		{
		  for (i = 0; i < document.masterForm.selectCategory.length; i++)
		   {			   
			 document.masterForm.selectCategory[i].checked = true;
		   }
		   //if there is just one checkbox, use totally different approach(thanks JS!)
		   if(typeof(document.masterForm.selectCategory.length) == 'undefined')
		   	 document.masterForm.selectCategory.checked = true;
		  checkCategoryflag = "true";
		 }
		else
		 {
			for (i = 0; i < document.masterForm.selectCategory.length; i++)
			{
				document.masterForm.selectCategory[i].checked = false;
			}
		  //if there is just one checkbox, use totally different approach(thanks JS!)
		  if(typeof(document.masterForm.selectCategory.length) == 'undefined')
		   	 document.masterForm.selectCategory.checked = false;
		   checkCategoryflag = "false";
	  	 }
	}
   else
    {
   		if(document.masterForm.checkAll.checked)
   		 {
   		 	alert("There are no categories to select");
   		 	document.masterForm.checkAll.checked = false;
   		 }	
    }	 		  		  		 
}

function linkCategories(){
	
	var error = false;
  var selFlag = false;
	
	if (document.masterForm.selectCategory)
  	{
 				for (var i=0; i < document.masterForm.selectCategory.length; i++)
 				 {  			 	
   				 	if(document.masterForm.selectCategory[i].checked)
   				 	 {
   				 		 selFlag = true;   				 	  	 
 				 		 }
 				 }
 					 
			if((!selFlag &&(typeof(document.masterForm.selectCategory.length) != 'undefined')) || ((typeof(document.masterForm.selectCategory.length) == 'undefined') && 
						!document.masterForm.selectCategory.checked))
					 {	
					 	alert("Select a Category, that you want to to add.");
					 	error = true;
					 }
		}
	else
		{
				error = true;
				alert("There are no Categories that you could add.");	
		}	
		if(!error)
			doAdminAction('apply_article_category');
}

function deleteLinkedArticle(id){
	
	if(confirm("Are you sure you want to remove this Article Link?")){
		document.masterForm.ARTICLE_REFERENCE_ID.value = id;
			doAdminAction('delete_article_link');		
		}
	
}	 
								
function listLinkArticles(startRow){
	if(document.masterForm.ISSUE_ID)
		document.masterForm.ISSUE_ID.value = "";
	document.masterForm.articleLinkStartRow.value = startRow;
	doAdminAction('link_articles');
}

function listArticles(startRow){
		
	if(document.masterForm.ISSUE_ID)
		document.masterForm.ISSUE_ID.value = "";
	document.masterForm.articleStartRow.value = startRow;
	doAdminAction('list_articles');
}

function listAuthors(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_authors');
}

function addModArticleAuthor(aid, aaid) {
	document.masterForm.AUTHOR_ID.value = aid;
	document.masterForm.ARTICLE_AUTHOR_ID.value = aaid;
	doAdminAction('addmod_article_author');
}
function applyArticleAuthor(id) {
			
		document.masterForm.AUTHOR_ID.value = id;
		var errs = false;
		if(document.masterForm.ARTICLE_AUTHOR_TYPE_ID.options[document.masterForm.ARTICLE_AUTHOR_TYPE_ID.selectedIndex].value == "")
		{
			errs = true;
			alert("Please select Author type to add an Author to an Article");	
		}
	if(!errs)
		doAdminAction('apply_article_author');
}

function reloadIssue(act){
  
  if(document.masterForm.PUBLICATION_ID.selectedIndex != 0)
  {
		  
		  if(confirm("Are you sure you want to change Publication?\nThis action would also reset Issue Information for this Article!"))
			 {
					if(!validateArticleForm())
					{
						//reset ISSUE_ID, so User is prompted to select one according to the new Publication selected 
						document.masterForm.ISSUE_ID.selectedIndex = "0";
						applyArticleMetadata(act);
					}	
					else
					{
						document.masterForm.PUBLICATION_ID.value = document.masterForm.initPublicationID.value;
					}
			 }
	}
	else
	{
		alert("Publication Name is a required value!\n");
		document.masterForm.PUBLICATION_ID.value = document.masterForm.initPublicationID.value;
	}
}

function applyAuthor() {
	
	var errs = false;
	if(document.masterForm.ARTICLE_AUTHOR_TYPE_ID.options[document.masterForm.ARTICLE_AUTHOR_TYPE_ID.selectedIndex].value == "")
	{
		errs = true;
		alert("Please select Author type");	
	}
	if(trim(document.masterForm.AUTHOR_NAME.value) == "")
	{
		errs = true;
		alert("Please fill in Author Name");	
	}
	if(!errs)
		doAdminAction('apply_article_author');
}

function addModArticleAuthorType(id) {
	document.masterForm.ARTICLE_AUTHOR_TYPE_ID.value = id;
	doAdminAction('addmod_article_author_type');
}

function deleteArticleAuthor(id) {
		
	if(confirm("Are you sure you want to remove this Author?"))
	{
			document.masterForm.ARTICLE_AUTHOR_ID.value = id;
			doAdminAction('delete_article_author');		
	} 
}

function deleteArticleImage(id, fileName) {
		
	if(confirm("Are you sure you want to delete this Image?"))
			 {
			 		document.masterForm.ARTICLE_IMAGE_ID.value = id;
			 		document.masterForm.ARTICLE_IMAGE_FILE_NAME.value = fileName;
			 		doAdminAction('delete_article_image');		
			 }	
}
function deleteArticleKeyword(id) {
		
	if(confirm("Are you sure you want to remove this Keyword?"))
	{
			document.masterForm.ARTICLE_KEYWORD_ID.value = id;
			doAdminAction('delete_article_keyword');		
	} 
}

function deleteArticleCategory(id) {
		
	if(confirm("Are you sure you want to remove this Category?"))
	{
			document.masterForm.ARTICLE_ASSIGNED_CATEGORY_ID.value = id;
			doAdminAction('delete_article_category');		
	} 
}

function applyArticleImage(){
	
	var errs = false;
	
	if(trim(document.masterForm.ARTICLE_IMAGE_NAME.value) == "" || trim(document.masterForm.ARTICLE_IMAGE_FILE.value) == "")
	{
		alert("Please enter Image Name and select a file to upload.");	
		errs = true;
	}
	if(!errs)
		doDocumentAction('apply_article_image');	
}


function addModArticle(id) {
	document.masterForm.ARTICLE_ID.value = id;
	doAdminAction('addmod_article');
}


/************************User and Rights************************/

function listUsers(startRow){
		
	document.masterForm.startRow.value = startRow;
	doAdminAction('list_users');
}

function addModUser(id) {
	document.masterForm.USER_ID.value = id;
	doAdminAction('addmod_user');
}

function deleteUser(id) {
	
	if(confirm("Are you sure you want to delete this user?"))
	 {
	 		document.masterForm.USER_ID.value = id;
	 		doAdminAction('delete_user');		
	 }	 	
}
function applyPublicUserAddress(act) {
	
	var errs = false;
	var errFocused = false;
	var errMess = "";
	
	if(trim(document.masterForm.USER_ADDRESS_1.value) == "")
		 {
		 		errMess += "Please enter a Address.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_ADDRESS_1.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }	 
	   
		if(trim(document.masterForm.USER_CITY.value) == "")
		 {
		 		errMess += "Please enter a City.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_CITY.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 } 
	   
		if(trim(document.masterForm.USER_ZIP_CODE.value) == "")
		 {
		 		errMess += "Please enter a Zip Code.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_ZIP_CODE.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }
		    
		if(trim(document.masterForm.USER_COUNTRY.options[document.masterForm.USER_COUNTRY.selectedIndex].value) == "")
		 {
		 		errMess += "Please select a Country.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_COUNTRY.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }
	if(!errs){
		doAction(act);
	}
	else
	{
		alert(errMess);
	}
	
}
function applyPublicUser(act) {
	
	var errs = false;
	var errFocused = false;
	var errMess = "";
	var pw = trim(document.masterForm.USER_PASSWORD.value);
	var pwLength = pw.length;
	var numOfNums = 0;
	
	if(trim(document.masterForm.USER_NAME.value) == "")
	 {
	 		errMess += "Please enter a User Name.\n";
	 		document.masterForm.USER_NAME.focus();
	 		errs = true;
	 		errFocused = true;
	 }
	
	if(pw == "")
	 {
	 		errMess += "Please enter a password.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_PASSWORD.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }

	if(pw != trim(document.masterForm.USER_CONF_PASSWORD.value))
	 {
			errMess += "Your passwords don't match! Please reenter!\n";
	 		if(!errFocused)
	 			document.masterForm.USER_CONF_PASSWORD.focus();
			errs = true;	 		
	 		errFocused = true;
	 }	 
	
	if(trim(document.masterForm.USER_FIRST_NAME.value) == "")
	 {
	 		errMess += "Please enter a First Name.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_FIRST_NAME.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }
	
	if(trim(document.masterForm.USER_LAST_NAME.value) == "")
	 {
	 		errMess += "Please enter a Last Name.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_LAST_NAME.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }
	
	var email = trim(document.masterForm.USER_EMAIL_ADDRESS.value);
	
	if(email == "" || email == "" || email.indexOf("@") == -1 || email.indexOf("@") == 0 || email.indexOf("@") == (email.length - 1) || email.indexOf(".") == -1 || email.indexOf(".") == (email.length - 1) || email.indexOf("@") + 1 == email.indexOf(".") || email.indexOf(".") + 1 == email.indexOf("@")){
    errMess += "Please enter a valid Email Address.\n";
	 	if(!errFocused)
	 			document.masterForm.USER_EMAIL_ADDRESS.focus();
    errs = true;	 		
	 	errFocused = true;
  }
	if(document.masterForm.USER_AGE.type != "hidden")
	 { 
		if(trim(document.masterForm.USER_AGE.value) == "")
		 {
		 		errMess += "Please enter your Age.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_AGE.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }
		else if(1*trim(document.masterForm.USER_AGE.value) < 13)
		 {
		 		errMess += "You must be 13 years or older to register for AmericanHeritage.com.\n";if(!errFocused)
		 			document.masterForm.USER_AGE.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }
	 }
	//when registering after voting in sweepstakes, validate Address fields, too
	if(document.masterForm.postLoginAction.value != '')
	{		
		if(trim(document.masterForm.USER_ADDRESS_1.value) == "")
		 {
		 		errMess += "Please enter a Address.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_ADDRESS_1.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }	 
	   
		if(trim(document.masterForm.USER_CITY.value) == "")
		 {
		 		errMess += "Please enter a City.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_CITY.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 } 
	   
		if(trim(document.masterForm.USER_ZIP_CODE.value) == "")
		 {
		 		errMess += "Please enter a Zip Code.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_ZIP_CODE.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }
		    
		if(trim(document.masterForm.USER_COUNTRY.options[document.masterForm.USER_COUNTRY.selectedIndex].value) == "")
		 {
		 		errMess += "Please select a Country.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_COUNTRY.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }		
	}
	
	//set value into checkboxes if they are being unchecked - My Account Form only!
	if(document.masterForm.USER_NEWSLETTER_OPT_IN_TEMP)
	{
		if(!document.masterForm.USER_NEWSLETTER_OPT_IN_TEMP.checked)
		{
			document.masterForm.USER_NEWSLETTER_OPT_IN.value = "F";
		}
	 else
	 	{ 		
			document.masterForm.USER_NEWSLETTER_OPT_IN.value = "T";
	 	}
			
		if(!document.masterForm.USER_PARTNERS_OPT_IN_TEMP.checked)
		{
			document.masterForm.USER_PARTNERS_OPT_IN.value = "F";
		}	
	 else
	 	{ 		
			document.masterForm.USER_PARTNERS_OPT_IN.value = "T";
	 	}	 
	} 
	
	if(!errs){
		doAction(act);
	}
	else
	{
		alert(errMess);
	}

}

function applyUser(act) {
	
	var errs = false;
	var errFocused = false;
	var errMess = "";
	var pw = trim(document.masterForm.USER_PASSWORD.value);
	var pwLength = pw.length;
	
	if(trim(document.masterForm.USER_NAME.value) == "")
	 {
	 		errMess += "Please enter a User Name\n";
	 		errs = true;
	 		errFocused = true;
	 		if(!errFocused)
	 			document.masterForm.USER_NAME.focus();
	 }
	
	if(pw == "")
	 {
	 		errMess += "Please enter a password\n";
	 		errs = true;
	 		errFocused = true;
	 		if(!errFocused)
	 			document.masterForm.USER_PASSWORD.focus();
	 }

	else
	 {
	 	  if(pwLength < 6 )
	  	{
	  		errs = true;
	 			errFocused = true;
	  	 	errMess += "Your password should be at least 6 characters long!\n";
		 		if(!errFocused)
		 			document.masterForm.USER_PASSWORD.focus();
	   	}	
	 }

	if(pw != trim(document.masterForm.USER_CONF_PASSWORD.value))
	 {
			errMess += "Your passwords don't match!\nPlease reenter!\n";
			errs = true;
	 		errFocused = true;
	 		if(!errFocused)
	 			document.masterForm.USER_CONF_PASSWORD.focus();
	 }
 
 if(trim(document.masterForm.USER_FIRST_NAME.value) == "")
	 {
	 		errMess += "Please enter a First Name.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_FIRST_NAME.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }
	
	if(trim(document.masterForm.USER_LAST_NAME.value) == "")
	 {
	 		errMess += "Please enter a Last Name.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_LAST_NAME.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }
	
	var email = trim(document.masterForm.USER_EMAIL_ADDRESS.value);
	
	if(email == "" || email == "" || email.indexOf("@") == -1 || email.indexOf("@") == 0 || email.indexOf("@") == (email.length - 1) || email.indexOf(".") == -1 || email.indexOf(".") == (email.length - 1) || email.indexOf("@") + 1 == email.indexOf(".") || email.indexOf(".") + 1 == email.indexOf("@")){
    errMess += "Please enter a valid Email Address.\n";
	 	if(!errFocused)
	 			document.masterForm.USER_EMAIL_ADDRESS.focus();
    errs = true;	 		
	 	errFocused = true;
  }
   
	if(trim(document.masterForm.USER_ADDRESS_1.value) == "")
	 {
	 		errMess += "Please enter a Address.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_ADDRESS_1.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }	 
   
	if(trim(document.masterForm.USER_CITY.value) == "")
	 {
	 		errMess += "Please enter a City.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_CITY.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 } 
   
	if(trim(document.masterForm.USER_ZIP_CODE.value) == "")
	 {
	 		errMess += "Please enter a Zip Code.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_ZIP_CODE.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }
	    
	if(trim(document.masterForm.USER_COUNTRY.options[document.masterForm.USER_COUNTRY.selectedIndex].value) == "")
	 {
	 		errMess += "Please select a Country.\n";
	 		if(!errFocused)
	 			document.masterForm.USER_COUNTRY.focus();
	 		errs = true;	 		
	 		errFocused = true;
	 }
	if(trim(document.masterForm.USER_AGE.value) == "")
		 {
		 		errMess += "Please enter User Age.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_AGE.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 }
		else if(1*trim(document.masterForm.USER_AGE.value) < 13)
		 {
		 		errMess += "User must be 13 years or older to register for AmericanHeritage.com.\n";
		 		if(!errFocused)
		 			document.masterForm.USER_AGE.focus();
		 		errs = true;	 		
		 		errFocused = true;
		 } 
	
	//Make sure that at least one Right was selected
	if(document.masterForm.USER_MEMBERSHIPS)
	{
		if(document.masterForm.USER_MEMBERSHIPS.length == 0)
		{
			errs = true;
			errMess += "Please create at least one User Right, otherwise this User would not gain ANY system access.\n";	
		}
	}
	
	if(!errs){
		doAdminAction(act);
	}
else{
		alert(errMess);
	}
}


function addUserMembership() {

	if(!trim(document.masterForm.PUBLICATION_ID.options[document.masterForm.PUBLICATION_ID.selectedIndex].value) == "")
	 {
	 	doAdminAction('add_user_membership');
	 }
	else
	 {
			alert("Please select a Publication that you want to grant the User Right for.");
	 }
}

function deleteUserMembership() {
	
	if(!trim(document.masterForm.PUBLICATION_ID.options[document.masterForm.PUBLICATION_ID.selectedIndex].value) == "")
	{
		if(confirm("Are you sure you want to delete selected User Right(s)?"))
		 {
		 		doAdminAction('delete_user_membership');		
		 }
	 }
	else
		{
			alert("Please select a Publication that you want to delete this User Right from.");
		}	 	
}

function addModRight(id) {
	document.masterForm.USER_RIGHT_ID.value = id;
	doAdminAction('addmod_right');
}

function deleteRight(id) {
	
	if(confirm("Are you sure you want to delete this right?"))
	 {
	 		document.masterForm.USER_RIGHT_ID.value = id;
	 		doAdminAction('delete_right');		
	 }	 	
}

function clearStartRow (el) {
	
	el.value = "";
	
}

/************************General************************/
function doAdminAction(act){
	
	document.masterForm.target = "_self";
	document.masterForm.page.value = act;
  document.masterForm.action = "index.jsp";
	document.masterForm.submit();

}

function doAction(act){
	
	document.masterForm.target = "_self";
	document.masterForm.page.value = act;
  document.masterForm.action = "/ah.jsp";
	document.masterForm.submit();

}

function setHomepage() {
	var ua = navigator.userAgent.toLowerCase(); 
	
	var isWin = ua.indexOf("win");
	
	if (document.all && isWin != -1){
  	event.srcElement.style.behavior='url(#default#homepage)';
  	event.srcElement.setHomePage('http://www.americanheritage.com');
	} else {
		alert ("We are unable to set your homepage automatically. Please follow the instructions in your web browser's help file.");
	}
}

function advancedSearch() {
	document.URL="/advanced_search.jsp";
}

function goNextPrev(startRow, maxRows) {
	document.searchForm.startRow.value = startRow;
	document.searchForm.maxRows.value = maxRows;
	document.searchForm.submit();
}

function generateHeaderInfo() {
	
	var userName = getCookie('AHUsername');
	var userID = getCookie('AHUserid');
	var fullName = getCookie('AHFullname');
	// Workaround for PHP cookie space bug introduced by phpBB login functionality
	if (fullName != null) {
		fullName = fullName.replace(/\+/, " ");
	}
	//alert("Existing cookies, name:"+userName+"\nuserid="+userID+"\nfullname="+fullName);
	if (userName != null) {
		document.write('<table border="0" cellspacing="0" cellpadding="0"><tr>');
		document.write('<td class="upperToolbarTopBox"><span class="smallHeadBlack">Welcome, ');
		document.write(fullName);
		document.write('</span></td></tr>');
		document.write('<tr><td class="upperToolbarBottomBox">');
		document.write('<a class="bodyLinkSmall" href="/ah.jsp?page=logout">Log Out</a>');
		document.write('&#160;&#160;|&#160;&#160;<a class="bodyLinkSmall" href="/account">My Account</a>');
		document.write('</td></tr></table>');
	} else {
		document.write('<table border="0" cellspacing="0" cellpadding="0"><tr><td class="upperToolbarTopBox"><a class="boxLinkSmallBold" href="/login">Login</a>&#160;&#160;|&#160;&#160;<a class="boxLinkSmallBold" href="/register">Register</a>&#160;&#160;|&#160;&#160;<a class="boxLinkSmallBold" href="https://w1.buysub.com/pubs/B4/AHE/AHELandingPageFinal.jsp?cds_page_id=29854&amp;cds_mag_code=AHE&amp;id=1158349467216&amp;lsid=62581444272037448&amp;vid=1&amp;cds_response_key=IRJHT001&amp;cds_mag_code=AHE">Subscribe</a></td></tr><tr><td class="upperToolbarBottomBox"><a class="bodyLinkSmall" href="#" onclick="setHomepage()">Make this your homepage</a></td></tr></table>');
	}
	
}

function addAlerts() {

	var alertChecked = false;
	
	for(count = 0; count < document.emailNewsletterForm.alerts.length; count++){
		if(document.emailNewsletterForm.alerts[count].checked){		
			alertChecked = true;
		}
	}
	
	if((typeof(document.emailNewsletterForm.alerts.length) == 'undefined') && document.emailNewsletterForm.alerts.checked){
		alertChecked = true;
	}
	
	if(!alertChecked || ((typeof(document.emailNewsletterForm.alerts.length) == 'undefined') && !document.emailNewsletterForm.alerts.checked)){
			alertChecked = false;
	}
	
	
	if(alertChecked == true){
		document.emailNewsletterForm.action = "/ah.jsp";
		document.emailNewsletterForm.submit();
	}else{
		alert("Please select at least one keyword");
	}
}

function deleteUserAlert(id) {
		
	if(confirm("Are you sure you want to delete this Keyword Alert?"))
	{
			document.masterForm.alertID.value = id;
			doAction('deleteUserAlert');		
	} 
}

function newWindow(url, nameOfWindow, attributesOfWindow) {
	nameOfWindow=window.open(url, nameOfWindow, attributesOfWindow);
	nameOfWindow.focus();
}

function orbitzSearchBox() {
	document.write('<script src="http://ad.linksynergy.com/fs-bin/show?id=o5EhiyytILA&bids=66478.1248&catid=24&gridnum=0&type=14&subid=0"></script><noscript><a href="http://click.linksynergy.com/fs-bin/click?id=o5EhiyytILA&offerid=66478&type=4&subid="><img src="http://ad.linksynergy.com/fs-bin/show?id=o5EhiyytILA&bids=66478&subid=&type=4&gridnum=0"></a></noscript>');
}

function getSubscribeKeycode() {
	
	var query=this.location.search.substring(1);
  if (query.length > 0){
  	var params=query.split("&");
  	for (var i=0 ; i<params.length ; i++){
  	    var pos = params[i].indexOf("=");
  	    var name = params[i].substring(0, pos);
  	    var value = params[i].substring(pos + 1);
  	    
  	    if (name == 'inCode') {
  	    	document.subscribeForm.promotional_code.value = value;
  	    }
  	}
  }
	
}


//Functions for the Best of the Web page

function expandList(catID){
	var i = 1;
	
	var catName = "cat_" + catID;
	var divName = "div_" + catID;
	var catDivName = "catDiv_" + catID;
	
	document.getElementById(catName).src = "/assets/images/collapse.jpg";
	document.getElementById(catName).onclick = function(){collapseList(catID)};

	document.getElementById(divName).className = "expanded";

}

function collapseList(catID){
	var i = 1;
	
	var catName = "cat_" + catID;
	var divName = "div_" + catID;
	var catDivName = "catDiv_" + catID;
	
	document.getElementById(catName).src = "/assets/images/expand.jpg";
	document.getElementById(catName).onclick = function(){expandList(catID)};
	
	document.getElementById(divName).className = "collapsed";
	
}

function doWebCategoryAction(){                       
	document.bowForm.page.value = "listWebCategories";  
	document.bowForm.submit();                          
}

function doBookCategoryAction(){                       
	document.bookForm.page.value = "listBestBookCategories";  
	document.bookForm.submit();                          
}

// Functions for scroll boxes
function addPresidentsScrollBox() {
	document.write("<td style=\"width: 128px; padding-top: 10px; padding-left: 10px; vertical-align: top\">");
	document.write("<div id=\"presScrollBox\" style=\"width: 128px\">");
	document.write("<div id=\"scrollBoxHeader\">");
	document.write("<img alt=\"Browse Presidents\" class=\"noBorder\" height=\"15\" width=\"112\" src=\"/assets/images/browse_presidents.gif\"/>");
	document.write("</div>");
	document.write("<a href=\"/people/presidents/index.shtml\">All Presidents</a>");
	document.write("<a href=\"/people/presidents/washington_george.shtml\">George Washington");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#1, (1789-1797)</span></a>");
	document.write("<a href=\"/people/presidents/adams_john.shtml\">John Adams");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#2, (1797-1801)</span></a>");
	document.write("<a href=\"/people/presidents/jefferson_thomas.shtml\">Thomas Jefferson");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#3, (1801-1809)</span></a>");

	document.write("<a href=\"/people/presidents/madison_james.shtml\">James Madison");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#4, (1809-1817)</span></a>");
	document.write("<a href=\"/people/presidents/monroe_james.shtml\">James Monroe");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#5, (1817-1825)</span></a>");
	document.write("<a href=\"/people/presidents/adams_johnquincy.shtml\">John Quincy Adams");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#6, (1825-1829)</span></a>");
	document.write("<a href=\"/people/presidents/jackson_andrew.shtml\">Andrew Jackson");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#7, (1829-1837)</span></a>");
	document.write("<a href=\"/people/presidents/vanburen_martin.shtml\">Martin Van Buren");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#8, (1837-1841)</span></a>");
	document.write("<a href=\"/people/presidents/harrison_william.shtml\">William Harrison");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#9, (1841-1841)</span></a>");
	document.write("<a href=\"/people/presidents/tyler_john.shtml\">John Tyler");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#10, (1841-1845)</span></a>");
	document.write("<a href=\"/people/presidents/polk_james.shtml\">James Polk");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#11, (1845-1849)</span></a>");
	document.write("<a href=\"/people/presidents/taylor_zachary.shtml\">Zachary Taylor");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#12, (1849-1850)</span></a>");
	document.write("<a href=\"/people/presidents/fillmore_millard.shtml\">Millard Fillmore");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#13, (1850-1853)</span></a>");
	document.write("<a href=\"/people/presidents/pierce_franklin.shtml\">Franklin Pierce");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#14, (1853-1857)</span></a>");
	document.write("<a href=\"/people/presidents/buchanan_james.shtml\">James Buchanan");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#15, (1857-1861)</span></a>");
	document.write("<a href=\"/people/presidents/lincoln_abraham.shtml\">Abraham Lincoln");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#16, (1861-1865)</span></a>");
	document.write("<a href=\"/people/presidents/johnson_andrew.shtml\">Andrew Johnson");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#17, (1865-1869)</span></a>");
	document.write("<a href=\"/people/presidents/grant_ulysses.shtml\">Ulysses Grant");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#18, (1869-1877)</span></a>");
	document.write("<a href=\"/people/presidents/hayes_rutherford.shtml\">Rutherford Hayes");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#19, (1877-1881)</span></a>");
	document.write("<a href=\"/people/presidents/garfield_james.shtml\">James Garfield");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#20, (1881-1881)</span></a>");
	document.write("<a href=\"/people/presidents/arthur_chester.shtml\">Chester Arthur");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#21, (1881-1885)</span></a>");
	document.write("<a href=\"/people/presidents/cleveland_grover.shtml\">Grover Cleveland");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#22, (1885-1889)</span></a>");
	document.write("<a href=\"/people/presidents/harrison_benjamin.shtml\">Benjamin Harrison");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#23, (1889-1893)</span></a>");
	document.write("<a href=\"/people/presidents/cleveland_grover.shtml\">Grover Cleveland");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#24, (1893-1897)</span></a>");
	document.write("<a href=\"/people/presidents/mckinley_william.shtml\">William McKinley");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#25, (1897-1901)</span></a>");
	document.write("<a href=\"/people/presidents/roosevelt_theodore.shtml\">Theodore Roosevelt");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#26, (1901-1909)</span></a>");
	document.write("<a href=\"/people/presidents/taft_william.shtml\">William Taft");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#27, (1909-1913)</span></a>");
	document.write("<a href=\"/people/presidents/wilson_woodrow.shtml\">Woodrow Wilson");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#28, (1913-1921)</span></a>");
	document.write("<a href=\"/people/presidents/harding_warren.shtml\">Warren Harding");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#29, (1921-1923)</span></a>");
	document.write("<a href=\"/people/presidents/coolidge_calvin.shtml\">Calvin Coolidge");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#30, (1923-1929)</span></a>");
	document.write("<a href=\"/people/presidents/hoover_herbert.shtml\">Herbert Hoover");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#31, (1929-1933)</span></a>");
	document.write("<a href=\"/people/presidents/roosevelt_franklin.shtml\">Franklin Roosevelt");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#32, (1933-1945)</span></a>");
	document.write("<a href=\"/people/presidents/truman_harry.shtml\">Harry Truman");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#33, (1945-1953)</span></a>");
	document.write("<a href=\"/people/presidents/eisenhower_dwight.shtml\">Dwight Eisenhower");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#34, (1953-1961)</span></a>");
	document.write("<a href=\"/people/presidents/kennedy_john.shtml\">John Kennedy");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#35, (1961-1963)</span></a>");
	document.write("<a href=\"/people/presidents/johnson_lyndon.shtml\">Lyndon Johnson");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#36, (1963-1969)</span></a>");
	document.write("<a href=\"/people/presidents/nixon_richard.shtml\">Richard Nixon");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#37, (1969-1974)</span></a>");
	document.write("<a href=\"/people/presidents/ford_gerald.shtml\">Gerald Ford");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#38, (1974-1977)</span></a>");
	document.write("<a href=\"/people/presidents/carter_jimmy.shtml\">Jimmy Carter");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#39, (1977-1981)</span></a>");
	document.write("<a href=\"/people/presidents/reagan_ronald.shtml\">Ronald Reagan");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#40, (1981-1989)</span></a>");
	document.write("<a href=\"/people/presidents/bush_george_sr.shtml\">George H. Bush");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#41, (1989-1993)</span></a>");
	document.write("<a href=\"/people/presidents/clinton_bill.shtml\">Bill Clinton");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#42, (1993-2001)</span></a>");
	document.write("<a href=\"/people/presidents/bush_george_jr.shtml\">George W. Bush");
	document.write("<br/>");
	document.write("<span class=\"tinyBodyBlack\">#43, (2001-present)</span></a>");
	document.write("</div>");
	document.write("</td>");
}

function validateQuiz(){
	
	var i = 0
	errOccured = false;
	//loop over all questions and make sure that each of them is answered
	i = 1*document.bbquizForm.numOfQuestions.value;
	
	//alert("there are " + i + " questions");
	if(i > 0)
	{
		for(var j=1; j<(i+1); j++)
		{
			//create RadioButton name
			rbName = "q" + j;
			
			var btnChecked = false;
	
			//loop over the array of the radio buttons with this name and find out whether at least one of them is checked
	
			for(var d = 0; d < eval("document.bbquizForm."+rbName+".length"); d++)
			{
				if(eval("document.bbquizForm."+rbName+"["+d+"].checked"))
				 {
				 		btnChecked = true;	
				 }
	    }	    
	    if(!btnChecked)
	    {
	    	errOccured = true;
	    	alert("Please select your answer to Question #" + j);
	    	eval("document.bbquizForm."+rbName+"[0].focus()");
	    	return;		
	    }
		}
						
		if(!errOccured)
			document.bbquizForm.submit();
	}
	
}

function changeVideo(filename, title, length) {

	// Build the HTML for the video player
	var videoHTML = "<a name=\"video\"></a><object type=\"application/x-shockwave-flash\" width=\"320\" height=\"240\" wmode=\"transparent\" data=\"/assets/swf/flvplayer.swf?file=" + filename + "&autoStart=false&movieTitle=" + escape(title) + "&movieLength=" + length + "\">";
	videoHTML += "<param name=\"movie\" value=\"/assets/swf/flvplayer.swf?file=" + filename + "&autoStart=false&movieTitle=" + escape(title) + "&movieLength=" + length + "\" />";
	videoHTML += "<param name=\"wmode\" value=\"transparent\">";
	videoHTML += "</object>";

	if (document.getElementById || document.all) {
    var videoPlayer = document.getElementById? document.getElementById('videoPlayer'): document.all['videoPlayer'];
    if (videoPlayer && typeof videoPlayer.innerHTML != "undefined") videoPlayer.innerHTML = videoHTML;
 }

}