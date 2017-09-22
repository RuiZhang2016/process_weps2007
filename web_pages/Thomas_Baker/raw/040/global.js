function photoSwap(strNewImage,strCaption){
    document.images['main_photo'].src = strNewImage;

    var caption = document.getElementById("photo_caption");
    caption.firstChild.nodeValue=strCaption;    

    var div2 = document.getElementById("photo_caption_bottom");

    if(strCaption == ""){
        caption.style.display = "none";
        div2.style.display = "none";
    } else {
        caption.style.display = "block";
        div2.style.display = "block";
    }
}

function toggleTable(el){
    var myelement = document.getElementById(el);

    if(myelement.style.display == "none"){
        myelement.style.display = "block";
    } else {
        myelement.style.display = "none";
    }
}

function unToggleTable(el){
    var myelement = document.getElementById(el);

    if(!myelement.style.display || myelement.style.display == "none"){
          myelement.style.display = "block";
    } else {
        myelement.style.display = "none";
    }
}

function toggleTableInline(el) {
  var myelement = document.getElementById(el);

  if( myelement.style.display == "none" ) {
    myelement.style.display = "inline";
  } else {
    myelement.style.display = "none";
  }
}

function unToggleTableInline(el) {
  var myelement = document.getElementById(el);

  if(!myelement.style.display || myelement.style.display == "none" ) {    
      myelement.style.display = "inline";
  } else {
      myelement.style.display = "none";
  }
} 

function checkLink(prefix,func_name,final_page){
    currentPage = document.getElementById(prefix + '_current_page').innerHTML;
    currentPage = parseInt(currentPage);
    
    final_page = parseInt(final_page);
    
    linkNext = document.getElementById(prefix + '_next');
    linkPrev = document.getElementById(prefix + '_prev');
    
    linkNextHTML = '<h6 class="next"><a href="" onclick="' + func_name + '(\'next\'); return false;"><b>NEXT</b></a></h6>';
    linkPrevHTML = '<h6 class="prev"><a href="" onclick="' + func_name + '(\'prev\'); return false;"><b>PREV</b></a></h6>';

    if (final_page == '1') {
        linkNext.innerHTML = '';
        linkPrev.innerHTML = '';
    }
    else if (currentPage == '1') {
        linkNext.innerHTML = linkNextHTML;
        linkPrev.innerHTML = '';
    }
    else if (currentPage == final_page) {
        linkNext.innerHTML = '';
        linkPrev.innerHTML = linkPrevHTML;
    }
    else {
        linkNext.innerHTML = linkNextHTML;
        linkPrev.innerHTML = linkPrevHTML;
    }
}

function updateRange(prefix,rangeNum){
    RangeStart = document.getElementById(prefix + '_range_start');
    RangeFinish = document.getElementById(prefix + '_range_finish');
    currentPage = document.getElementById(prefix + '_current_page').innerHTML;
    currentPage = parseInt(currentPage);
    finalPage = document.getElementById(prefix + '_last_page').innerHTML;
    finalPage = parseInt(finalPage);
    TotalRecords = document.getElementById(prefix + '_range_total').innerHTML;
    Totalrecords = parseInt(TotalRecords);
    RangeStartNumUpdated = ((currentPage - 1) * rangeNum) + 1;
    RangefinishNumUpdated = RangeStartNumUpdated + rangeNum - 1;
    if (currentPage == finalPage) {
        RangefinishNumUpdated = TotalRecords;
    }
    RangeStart.innerHTML = RangeStartNumUpdated;
    RangeFinish.innerHTML = RangefinishNumUpdated;
}

// Toggle Tabs //
function toggleTabsRyanStyle(numMenuItems,controlBaseId,contentBaseId,numOrder){
    setToBaseRyanStyle(numMenuItems, controlBaseId, contentBaseId, numOrder);
    setSingleRyanStyle(numMenuItems, controlBaseId, contentBaseId, numOrder, true);
}
function setToBaseRyanStyle(numMenuItems, controlBaseId, contentBaseId, numOrder){
    for (var i=1; i <= numMenuItems; i++) {
        setSingleRyanStyle(numMenuItems, controlBaseId, contentBaseId, i, false);
    }
}

function setSingleRyanStyle(numMenuItems, controlBaseId, contentBaseId, numOrder, showFlag){
    i0 = controlBaseId + numOrder;
    i1 = contentBaseId + numOrder;
    
    a0        = document.getElementById(i0);
    i0_off    = i0 + '_off';
    a0_off    = document.getElementById(i0_off);
    i0_on     = i0 + '_on';
    a0_on     = document.getElementById(i0_on);
    a1        = document.getElementById(i1);
    
    if (showFlag){
        a0.style.background = document.getElementById(i0_on).style.background;
        a1.style.display = "block";
        document.getElementById('idname').innerHTML = '';
    } else {
        a0.style.background = document.getElementById(i0_off).style.background;
        a1.style.display = "none";
        document.getElementById('idname').innerHTML = 'THIS IS THE TAB NAME';
    }
}
// END toggle Tabs //


// SHOW/HIDE LAYERS & TABS
// --------------------------------------------------------------------------

function TabSwitch(theChosen, tabArray, tabBaseId, contentBaseId) {
    numTabItems = tabArray.length;
    TabSwitchsetToBase(tabArray,numTabItems, contentBaseId, tabBaseId);
    TabSwitchsetSingle(tabArray,contentBaseId,tabBaseId,theChosen, true);
}

function TabSwitchsetToBase(tabArray,numTabItems,contentBaseId,tabBaseId) {
    numTabItems1 = numTabItems - 1;
    for (var i=0; i<=numTabItems1; i++) {
        TabSwitchsetSingle(tabArray,contentBaseId,tabBaseId,i, false);
    }
}

function TabSwitchsetSingle(tabArray,contentBaseId,tabBaseId,whichTab, showTab) {
    var ii = whichTab;
    i0 = 'tab_' + tabArray[whichTab];
    i1 = contentBaseId + (whichTab + 1);

    a0 = document.getElementById(tabBaseId).getElementsByTagName("a")[ii];
    a1 = document.getElementById(i1);

    if (!showTab){
        a0.className = i0;
        a1.style.display = "none";
    }
    else{
        a0.className = i0+"_on";
        a1.style.display = "block";
        
        if(i1 == 'pro_Marquis2' && a1.photosloaded != 1){
            getPhotosHTML();
        }
        else if(i1 == 'pro_Skinny2' && a1.friendsloaded != 1){
            getFriends('next','99133379');
        }
        else if(i1 == 'pro_Skinny3' && a1.commentsloaded != 1){
            getComments('next','99133379');
        }
    }
}

function generateTabs(ulName, tabName, tabArray, liSetName, initiallySelected){
    var numOfTabs = tabArray.length;
    var tabInnerHTML = '';
    var myClass = '';
    var tabSwitch = '';

    for (i=0; i<numOfTabs; i++){
        myClass = 'tab_' + tabArray[i];

        if (i == initiallySelected){
            myClass += '_on';
            tabSwitch = 'TabSwitch(' + i + ', ' + tabName + ', \'' + ulName + '\', \'' + liSetName + '\');';
        }

        tabInnerHTML = tabInnerHTML + '<li><a href="" class="' + myClass + '" onclick="TabSwitch(' + i + ',' + tabName + ',\'' + ulName + '\',\'' + liSetName + '\'); return false;" onfocus="this.blur();"><strong>' + tabArray[i] + '</strong></a></li>';
    }
    document.getElementById(ulName).innerHTML = tabInnerHTML;
    if(tabName == 'tabsCampfire') {
        eval(tabSwitch);
    }
}

// Replace Divs with Flash SWFs
function swapHomeFeatures(){
    // MAIN FEATURE
    artistName = document.getElementsByTagName('h3')[0].innerHTML;

    mainFeature  = '<object class="mlIFRobject" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="278" height="39">';
    mainFeature += '<param name="movie" value="/swf/main_feature_text.swf?artistname='+artistName+'" />';
    mainFeature += '<embed class="mlIFRobjet" src="/swf/main_feature_text.swf?artistname='+artistName+'" width="278" height="39" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
    mainFeature += '</object>';

    document.getElementById('main_feature_name').innerHTML = mainFeature;

    // UPFRONT FLASH SPOT
    sl_artistName = document.getElementById('spotlight_feature_artist').innerHTML;
    sl_albumName = document.getElementById('spotlight_feature_album').innerHTML;
    sl_albumArt = document.getElementById('spotlight_feature_albumart').src;
    sl_albumURL = document.getElementById('spotlight_feature_albumurl').href;
    sl_albumTitle = document.getElementById('spotlight_feature_albumurl').title;
    sl_movie1 = document.getElementById('spotlight_movie1').title;
    sl_movie2 = document.getElementById('spotlight_movie2').title;

    spotlightFeature  = '<object class="mlIFRobject" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="327" height="190">';
    spotlightFeature += '<param name="movie" value="/swf/upfront.swf?movie1='+ sl_movie1 +'&movie2='+ sl_movie2 +'&artistname='+sl_artistName+'&albumname='+sl_albumName+'&albumart='+sl_albumArt+'&albumurl='+sl_albumURL+'&albumtitle='+sl_albumTitle+'" />';
    spotlightFeature += '<embed class="mlIFRobjet" src="/swf/upfront.swf?movie1='+ sl_movie1 +'&movie2='+ sl_movie2 +'&artistname='+sl_artistName+'&albumname='+sl_albumName+'&albumart='+sl_albumArt+'&albumurl='+sl_albumURL+'&albumtitle='+sl_albumTitle+'" width="327" height="190" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
    spotlightFeature += '</object>';

        //alert(sl_movie1);
    
    document.getElementById('spotlight_feature').innerHTML = spotlightFeature;

    // SMALL FEATURES
    for (i=0; i<2; i++){
        if(i < 1) {
            whichDiv = document.getElementById('small_feature_name_l');
        } else {
            whichDiv = document.getElementById('small_feature_name_r');
        }

        if(whichDiv != undefined) {
            artistName = whichDiv.innerHTML;
            var newArtistName = artistName.replace(/(<([^>]+)>)/ig,"");
            newArtistName = newArtistName.replace(/^\s*/,"");
            newArtistName = newArtistName.replace(/\s*$/,"");
            
            smallFeature  = '<object class="mlIFRobject" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="185" height="39">';
            smallFeature += '<param name="movie" value="/swf/small_feature_text.swf?artistname='+newArtistName+'" />';
            smallFeature += '<embed class="mlIFRobjet" src="/swf/small_feature_text.swf?artistname='+newArtistName+'" width="185" height="39" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
            smallFeature += '</object>';
            
            whichDiv.innerHTML = smallFeature;
        }
    }
}

// REAL-TIME USERNAME PREVIEW
function PreviewURL(signupType) { 
	document.getElementById('artist_url').innerHTML = '<p>Your PureVolume profile domain will be:<br /><span>http://www.purevolume.com/'+signupType+'<strong>'+document.getElementById('su_username').value.replace(/(\n|\r|' '|[^a-zA-Z0-9_])/g,'').toLowerCase()+'</strong></span></p>';
}

// SHOW/HIDE LAYERS
function ShowNewLayer(theshown, thehidden, thehidden2)
{
    // alert(theshown);
    if(document.getElementById(theshown).style.display == 'block'){
        if (theshown == 'login_artist' || theshown == 'login_listener'){
            // alert('passed.');
        } else {
            document.getElementById(theshown).style.display = 'none';
        }
    } else {
        document.getElementById(theshown).style.display = 'block';
    }
    
    if(thehidden){
        document.getElementById(thehidden).style.display = 'none';
    }
    
    if(thehidden2){
        document.getElementById(thehidden2).style.display = 'none';
    }
}

// HIDE SPECIFIC LAYER
function HideLayer(thehidden){
    document.getElementById(thehidden).style.display = 'none';
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 
// Coded by Travis Beckham
// http://www.squidfingers.com | http://www.podlob.com
// If want to use this code, feel free to do so, but please leave this message intact.
//
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

tooltip = {
	name : "tooltipDiv",
	offsetX : -350,
	offsetY : -470,
	tip : null
};
tooltip.init = function () {
	if (!document.getElementById) return;
	
	this.tip = document.getElementById (this.name);
	if (this.tip) document.onmousemove = function (evt) {tooltip.move (evt)};
	
	var a;
	var anchors = document.getElementsByTagName ("a");
	for (var i = 0; i < anchors.length; i ++) {
		a = anchors[i];
		if (a.className == "tooltip_photos") {
			a.onmouseover = function () {tooltip.show (this.name)};
			a.onmouseout = function () {tooltip.hide ()};
		}
	}
};
tooltip.move = function (evt) {
	var x=0, y=0;
	if (document.all) {// Explorer
	
		x = (document.documentElement && document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
		y = (document.documentElement && document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
		x += window.event.clientX;
		y += window.event.clientY;
		
	} else {// Mozilla
		x = evt.pageX;
		y = evt.pageY;
	}
	this.tip.style.left = (x + this.offsetX) + "px";
	this.tip.style.top = (y + this.offsetY) + "px";
};
tooltip.show = function (text) {
	if (!this.tip) return;
	this.tip.innerHTML = text;
	// Without the next line, Explorer5/Mac has a redraw problem.
	this.tip.style.visibility = "visible";
	this.tip.style.display = "block";
};
tooltip.hide = function () {
	if (!this.tip) return;
	// Without the next line, Explorer5/Mac has a redraw problem.
	this.tip.style.visibility = "hidden";
	this.tip.style.display = "none";
	this.tip.innerHTML = "";
};


// NEW WINDOW POPUPs

// Open browser in middle of screen
var win = null;
function NewWindow(mypage,myname,w,h,scroll){
    LeftPosition = (screen.width) ? (screen.width-w)/4 : 0;
    TopPosition = (screen.height) ? (screen.height-h)/4 : 0;
    if(w != "" && h != ""){
        settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
    } else {
        settings = 'scrollbars='+scroll+',resizable';
    }
    win = window.open(mypage,myname,settings);
}

// Window for pop up player
function NewWindowPlayer(a){
    LeftPosition = (screen.width) ? (screen.width)/4 : 0;
    TopPosition = (screen.height) ? (screen.height)/4 : 0;
    settings = 'width=489,height=430,top='+TopPosition+',left='+LeftPosition+',scrollbars=,resizable';
    win = window.open('/player/popup?a='+a,'PurePlayer',settings);
}