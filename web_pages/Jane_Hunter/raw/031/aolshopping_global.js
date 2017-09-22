currentUrl = window.location.search;
var isHasFlash = false;
var isFlashCount = 0;
var is_aol = navigator.userAgent.toLowerCase().indexOf("aol") != -1;
var isWL = 0;
var reqWait = 1;
var showSLNoRes = false;
var searchFieldText='Search Shopping';
var valueModified = false;

function isinit() {
   if (!hasAnchor()) {
       if(isgE('searchField') && isgE('searchField').value && isgE('searchField').value.length < 1){
    issetSearchFieldFocus();
   }
   }
    document.body.style.height = document.documentElement.scrollHeight+'px';
    //reloadHTML();
}

function hasAnchor() {
    var anc1 = location.hash;
    if (anc1 != null && anc1.length > 0) {
        return true;
    }
}

function issetZipFieldFocus() {
    if (hasAnchor()) {
        if(isgE('newzip')) {
            isgE('newzip').focus();
            window.scrollTo(0,100);
            isgE('newzip').select();
        }
    }
}

function issetSearchFieldFocus() {
    if (isgE('rapportSearch')) {
        if(isgE('rapportSearch').style.display!='none' && isgE('searchField')) isgE('searchField').focus();
    }
}

function ppChkMcht() {
  var e=document.getElementsByName("mimg");
  for(var i=0;i<e.length;i++){
    var img=e[i];
    if(img.width<3){
      img.style.display='none';
      img.nextSibling.style.display='block';
    }
  }
}

function isgetAbsY(elm) {
//  if (elm.y) return elm.y;
    pos = 0;

    while (elm != null) {
        pos += elm["offsetTop"];
        elm = elm.offsetParent;
    }

    return pos;
}

/*function isgetAbsX(elm) {
//  if (elm.x) return elm.x;
    pos = 0;

    while (elm != null) {
        pos += elm["offsetLeft"];
        elm = elm.offsetParent;
    }

    return pos;
}*/

function isgetAbsX(elm) {
// if (elm.x) return elm.x;
    pos = 0;

    while (elm != null) {
    // fix for new Instore wrqpper DIV- ignore dimensions from this wrapper
        if (elm.className != "pagewrapper") pos += elm["offsetLeft"];
        elm = elm.offsetParent;
    }

    return pos;
}



function ischangeFilterHeight(num) {
   if (num > 0) {
      isgE('searchFilters').height = num;
        if (isgE('rapportSponsors')) ismoveSponsors();
   }
}

/* These colours are the three levels of colour in rapport. Needs to match what is in the css */
var bgColours = new Array('#ffffff', '#bddd3d', '#D9ECF8');
var pidArray = new Array();

function istoggleSearch() {
   if (isHasFlash && isgE('rapportFlash')) {
     openFlash();
     return;
   }
   var bgCount = 0;
    if (isgE('searchButton').src.indexOf("open") != -1) {
      if (isgE('rapportSearch')) {
         if (isgE('rapportFilters') || isgE('rapportCategories')) {
            isgE('rapportSearch').style.backgroundColor = bgColours[bgCount];
            bgCount++;
         } else {
            isgE('rapportSearch').style.backgroundColor = bgColours[1];
         }
      }
        if (isgE('rapportFilters')) {
         if(isgE('searchSubmit'))isgE('searchSubmit').src="/img/buttons/btn_search_on.gif";
         isgE('rapportFilters').style.display = "block";
         isgE('searchFilters').src = isgE('searchFilters').src;
         bgCount++;
      }
        if (isgE('rapportCategories')) {
         if (isgE('rapportCategories').style)isgE('rapportCategories').style.display = "block";
         toggleDropdowns(isgE('rapportCategories'),'off');
         if (isgE('rapportGoogleOff') && isgE('rapportGoogleOff').style) isbE(isgE('rapportGoogleOff'));
         if (isgE('rapportCategories').style)isgE('rapportCategories').style.backgroundColor = bgColours[bgCount];
      }
         ismoveSponsors();
         if(isgE('rapportBtmClose').style.display == 'none')
         {  
            if(isgE('rapportSponsors') && isgE('rapportSponsors').style) {
            isgE('rapportSponsors').style.display = "none"; 
            }
         }
         else
         {  
            if(isgE('rapportSponsors') && isgE('rapportSponsors').style)
            {isgE('rapportSponsors').style.display = "block"; isgE('rapportSponsors').style.visibility = "visible"; }
            if(isgE('rapportGoogleOff') && isgE('rapportGoogleOff').style)
            {isgE('rapportGoogleOff').style.display = "block"; isgE('rapportGoogleOff').style.visibility = "visible"; }
            if(isgE('rapportGoogle') && isgE('rapportGoogle').style)
            {isgE('rapportGoogle').style.display = "block"; isgE('rapportGoogle').style.visibility = "visible"; }
            if(isgE('rapportAdServer') && isgE('rapportAdServer').style)
            {isgE('rapportAdServer').style.display = "block";isgE('rapportAdServer').style.visibility = "visible";}
         }
        if (isgE('rapportSponsors')) {
         toggleDropdowns(isgE('rapportSponsors'),'off');
         if (isgE('pprpsldiv')) {iswH(isgE('pprpsldiv'), pprpslArray2.join()); pprpslArray = new Array(); pprpslArray2 = new Array();}
      }
      if(isgE('otherContent'))toggleDropdowns(isgE('otherContent'),'off');
      //if(isgE('rapportContainer1'))toggleDropdowns(isgE('rapportContainer1'),'off');
      if(isgE('rapportContainerPP'))toggleDropdowns(isgE('rapportContainerPP'),'off');
      if(isgE('rapportContainerPPr'))toggleDropdowns(isgE('rapportContainerPPr'),'off');
      if(isgE('rapportContainerPPc'))toggleDropdowns(isgE('rapportContainerPPc'),'off');
        isgE('searchButton').src="/img/rapport/tab_close.gif";
      isgE('searchButton').setAttribute('alt', 'Close');
      isgE('searchButton').setAttribute('title', 'Close');
    // Fix for displaying the close button of the search rapport
    if (isgE('rapportSponsors') || isgE('rapportFilters') || isgE('rapportCategories')) {
        if(document.all) if(isgE('productTabsContainer'))isgE('productTabsContainer').style.zIndex = '-1'; 
        if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '-1'; 
    }else {
        if(document.all) if(isgE('productTabsContainer'))isgE('productTabsContainer').style.zIndex = '0'; 
        if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '0'; 
    }
        
    } else {
      if(isgE('otherContent'))toggleDropdowns(isgE('otherContent'),'on');
      // if(isgE('rapportContainer1'))toggleDropdowns(isgE('rapportContainer1'),'on');
      if(isgE('rapportContainerPP'))toggleDropdowns(isgE('rapportContainerPP'),'on');
      if(isgE('rapportContainerPPr'))toggleDropdowns(isgE('rapportContainerPPr'),'on');
      if(isgE('rapportContainerPPc'))toggleDropdowns(isgE('rapportContainerPPc'),'on');
      if (isgE('rapportSearch')) isgE('rapportSearch').style.backgroundColor = bgColours[1];
        if (isgE('rapportFilters')) {
         isgE('rapportFilters').style.display = "none";
         if(isgE('searchSubmit'))isgE('searchSubmit').src="/img/buttons/btn_search_off.gif";
      }
        if (isgE('rapportCategories') && isgE('rapportCategories').style) isgE('rapportCategories').style.display = "none";
        if (isgE('rapportSponsors') && isgE('rapportSponsors').style) isnE(isgE('rapportSponsors'));
        if (isgE('rapportGoogleOff') && isgE('rapportGoogleOff').style) isnE(isgE('rapportGoogleOff'));
        if (isgE('rapportGoogle') && isgE('rapportGoogle').style) isnE(isgE('rapportGoogle'));
        if (isgE('rapportAdServer') && isgE('rapportAdServer').style) isnE(isgE('rapportAdServer'));

        isgE('searchButton').src="/img/rapport/tab_open.gif";
      isgE('searchButton').setAttribute('alt', 'Open');
      isgE('searchButton').setAttribute('title', 'Open');
    // Fix for displaying the close button of the search rapport
         if(document.all) if(isgE('productTabsContainer')) isgE('productTabsContainer').style.zIndex = '0'; 
         if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '0'; 
     // issetSearchFieldFocus();
    if (!isgE('rapportSearchMatches')) {  //Hiding when the page is accessed through 'Remember It' 
        if (isgE('otherContent') && isgE('otherContent').style) isgE('otherContent').style.display = "none";
    }
    }
      if (isgE('rapportSearch')) isgE('rapportSearch').style.backgroundColor = bgColours[1];
      if (isgE('rapportCategories')) isgE('rapportCategories').style.backgroundColor = bgColours[0];
    if(isgE('rapportAutoEmpty') && isgE('rapportAutoEmpty').style)
    {
        if(isgE('rapportAutoEmpty').style.display == "block")
        {
            if(isgE('otherContent'))toggleDropdowns(isgE('otherContent'),'on');
        }
        else
        {
            //if(isgE('otherContent'))toggleDropdowns(isgE('otherContent'),'off');
        }
    }
}

function ismoveSponsors() {
    //var endRapport = isgetAbsY(isgE('endrapport'));
    //issY(isgE('rapportSponsors'), endRapport - 16);
    if(isgE('rapportSponsors') && isgE('rapportSponsors').style)
    {
        issE(isgE('rapportSponsors'));
        isbE(isgE('rapportSponsors'));
    }
}

function ismoveTabFooter() {
  if(isgE('endtab')&&isgE('searchFooter')) {
    var endTab = isgetAbsY(isgE('endtab'));
    issY(isgE('searchFooter'), endTab - 16);
    issE(isgE('searchFooter'));
  }
}

var compKey='p2c';
var compArr = null;

function isdoComparison() {
  url = window.location.search;
  if ( isKeyPresent(compKey, url) ) {
    url = strReplace(compKey, url, compKey + '=' + compArr.join(','));
  } else if ( compArr.length > 0) {
    url += '&' + compKey + '=' + compArr.join(',');
  }
  url = url.replace('?','&');
  url = url.replace('&rpshow=1','');

   var  theform = document.getElementById("rapportMiniFilterForm");

  if(url.indexOf("&cid=") == -1 && !(url.indexOf("k=")>=0)) {
      var attrs = "";
     
      if ( !theform.k )
      {
        url = url+"&instore=is_browse&ref=aol102&";
        url += "&cid="+theform.cid.value +"&id="+theform.id.value;
        if(theform.cid != undefined && theform.cid != null ) if (theform.cid != 'undefined' ) url += "&cid="+theform.cid.value;
        if(theform.id != undefined && theform.id != null ) if(theform.cid!= 'undefined') url += "&id="+theform.id.value;
        for (var i = 0; i < theform.elements.length; i++) {
        if (theform.elements[i].type == "select-one") {
             attrs += ppAddSelect('attr',theform.elements[i]);
          }
       }
      url += attrs;
      } else {
        var queryStr = "&tot="+theform.tot.value+"&rpshow="+theform.rpshow.value;
        url += "&k="+ theform.k.value+queryStr;
      }
   } else {   
    // check for total number of products and rpshow incase of browse by
       if(theform.tot ) {
               url += "&tot="+theform.tot.value ;
       }
    if(theform.rpshow){
        url += "&rpshow="+theform.rpshow.value ;
    }
    if ( theform.k){
        url += "&k="+ theform.k.value;
    }
  } 
  window.location="/ppecompare?" + url;
}

function isAppendComparisonPidsSearch(url) {
  var temp = url.slice(0).split('?');
  if (temp.length > 0) {
    url1 = temp[0];
    url2 = '?'+temp[1];
  }
  if(compArr==null) {
    compArr = new Array();
    if(isKeyPresent(compKey, currentUrl)) {
      var arr=getValuePP(compKey, currentUrl).split(',');
      for(var i=0;i<arr.length;i++) {
        if(arr[i] && arr[i] != "")
          compArrAdd(arr[i]);
      }
    }
  }
  if (isKeyPresent(compKey, url2)) {
    url2 = strReplace(compKey, url2, compKey + '=' + compArr.join(','));
  } else if (compArr.length>0) {
    url2 += '&' + compKey + '=' + compArr.join(',');
  }
  if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
        window.open(url1+url2, '_top');
    } else {
        window.open(url1+url2, "ppesearch");
    }
}

function isAppendComparisonPids(url) {
  var temp = url.slice(0).split('?');
  if (temp.length > 0) {
    url1 = temp[0];
    url2 = '?'+temp[1];
  }
  if(compArr==null) {
    compArr = new Array();
    if(isKeyPresent(compKey, currentUrl)) {
      var arr=getValuePP(compKey, currentUrl).split(',');
      for(var i=0;i<arr.length;i++) {
        if(arr[i] && arr[i] != "")
          compArrAdd(arr[i]);
      }
    }
  }
  if (isKeyPresent(compKey, url2)) {
    url2 = strReplace(compKey, url2, compKey + '=' + compArr.join(','));
  } else if (compArr.length>0) {
    url2 += '&' + compKey + '=' + compArr.join(',');
  }
  window.open(url1+url2, "ppesearch");
}

function compArrAdd(pid) {
  for(var i=compArr.length-1;i>=0;i--) {
    if(compArr[i] == pid) return;
  }
  compArr.push(pid);
}

function compArrDel(pid) {
  for(var i=compArr.length-1;i>=0;i--) {
    if(compArr[i] == pid) {
      compArr.splice(i,1);
      return;
    }
  }
}

function istoggleCompare(theform, lastItem) {
  if(compArr==null) {
    compArr = new Array();
    if(isKeyPresent(compKey, currentUrl)) {
      var arr=getValuePP(compKey, currentUrl).split(',');
      for(var i=0;i<arr.length;i++) {
        if(arr[i] && arr[i] != "")
          compArrAdd(arr[i]);
      }
    }
  }
  for (var i = 0; i < theform.elements.length; i++) {
    if (theform.elements[i].type == "checkbox") {
      if (theform.elements[i].checked)
        compArrAdd(theform.elements[i].value)
      else
        compArrDel(theform.elements[i].value);
    }
  }
  var checkedCount = compArr.length;

  for (var i = 0; i < theform.elements.length; i++) {
    if (theform.elements[i].type == "checkbox") {
      if (theform.elements[i].checked) {
        if ( checkedCount > 9 && lastItem == i) {
          isgE('compare'+i).style.display = "none";
          isgE('onlyone'+i).style.display = "block";
          iswH(isgE('compareCheck'+i), "You have already selected  9 items for comparison. In order to compare this item please deselect another.");
          isgE('compareErrorLink'+i).focus();
          theform.elements[i].checked=false;
          compArrDel(theform.elements[i].value);
        } else if (checkedCount > 1) {
          isgE('onlyone'+i).style.display = "none";
          isgE('compare'+i).style.display = "block";
        } else {
          isgE('compare'+i).style.display = "none";
          isgE('onlyone'+i).style.display = "block";
        }
      } else {
        isgE('onlyone'+i).style.display = "none";
        isgE('compare'+i).style.display = "none";
      }
    }
  }
}

function checkRemCookieOnclick(){
    var remember = getCookie('wishliststate');  
    if(remember == 'true')
        istoggleRemember('false');
    else
        istoggleRemember('true');
}

function checkRemCookieOnload(){
    var remember = getCookie('wishliststate');  
    if(remember == 'true')
        istoggleRemember('true');
    else
        istoggleRemember('false');
}

function istoggleRemember(isOpen) {
    if (isOpen == "true") {
        if (isgE('rememberItems')) isgE('rememberItems').style.display = "block";
/* comment out line below for new drawer */
//      if (isgE('rememberItLinks')) isgE('rememberItLinks').style.display = "block";

        isgE('rememberTab').src="/img/rapport/tab_close.gif";
        isgE('rememberTab').setAttribute('alt', 'Close');
        isgE('rememberTab').setAttribute('title', 'Close');
        isgE('rememberBtmImg').src="/img/rapport/brdr_btm.gif";
        isgE('rememberBtmImg').setAttribute('alt','Close');
        isgE('rememberBtmImg').setAttribute('title','Close');

        if(isgE('rememberContainer'))toggleDropdowns(isgE('rememberContainer'),'off');
        if(isgE('rememberContainerPP'))toggleDropdowns(isgE('rememberContainerPP'),'off');
        if(isgE('rememberContainerPPr'))toggleDropdowns(isgE('rememberContainerPPr'),'off');
        if(isgE('rememberContainerPPc'))toggleDropdowns(isgE('rememberContainerPPc'),'off');

        if(isHasFlash){
            if(isgE('rememberContainer'))hideFlash(isgE('rememberContainer'));
            if(isgE('rememberContainerPP'))hideFlash(isgE('rememberContainerPP'));
            if(isgE('rememberContainerPPc'))hideFlash(isgE('rememberContainerPPc'));
            if(isgE('rememberContainerPPr'))hideFlash(isgE('rememberContainerPPr'));
        }

        //copies dropdown into drawer each time drawer opens, only if the wishlist (form) is on the page. This is a work around for a display issue in IE      
        if (document.getElementById('wlRow1'))
            if (isgE('ddopts') && isgE('dd_1')) isgE('ddopts').innerHTML = isgE('dd_1').innerHTML;

        if (isgE('flashLogoDiv')) isgE('flashLogoDiv').style.display = 'none';
        updateRememberItCookie("true");
    } else {
        if(isgE('rememberContainer'))toggleDropdowns(isgE('rememberContainer'),'on');
        if(isgE('rememberContainerPP'))toggleDropdowns(isgE('rememberContainerPP'),'on');
        if(isgE('rememberContainerPPr'))toggleDropdowns(isgE('rememberContainerPPr'),'on');
        if(isgE('rememberContainerPPc'))toggleDropdowns(isgE('rememberContainerPPc'),'on');

        if (isgE('rememberItems')) isgE('rememberItems').style.display = "block";
/* comment out line below for new drawer */
//      if (isgE('rememberItLinks')) isgE('rememberItLinks').style.display = "none";

        isgE('rememberTab').src="/img/rapport/tab_close.gif";
        isgE('rememberTab').setAttribute('alt', 'Close');
        isgE('rememberTab').setAttribute('title', 'Close');
        isgE('rememberBtmImg').src="/img/rapport/brdr_btm.gif";
        isgE('rememberBtmImg').setAttribute('alt','Close');
        isgE('rememberBtmImg').setAttribute('title','Close');

        // Dont know why the next line is here but its causing an error
        //if(isHasFlash )showFlash();
        updateRememberItCookie("false");
    }
}

function updateRememberItCookie(state) {
  document.cookie = 'wishliststate=' + state + ';  path=/;';
}

var nDays = 365;

function updateFlashRapportCookie(state) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=60;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = 'hasFlashstate=' + state + ';  path=/;'+ 'expires=' + expire.toGMTString();
}

function updateWantsFlashCookie(state) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=60;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = 'wantsFlashstate=' + state + ';  path=/;'+ 'expires=' + expire.toGMTString();
}

function switchFlashRapport(toState, access) {
  var log = '';
  if (access) log = 'Access';
  if (toState == 'on') {
    if (isHasFlash) {
        updateWantsFlashCookie("1");    // on
    } else {
        updateWantsFlashCookie("3");    // possible on - if user accepts plugin
    }
  } else {
    updateWantsFlashCookie("2");        // off - user doesnt want to use flash
  }
  url = window.location.href;
  var fromState = 'off';
  if (toState == 'off') fromState = 'on';
  url = url.replace('&ufr=' + fromState, '');
  url = url.replace('ufr=' + fromState, '');
  url = url.replace('&ufr=' + fromState + 'Access', '');
  url = url.replace('ufr=' + fromState + 'Access', '');

  if (url.indexOf('?') != -1) {
   url = url + '&ufr=' + toState + log;
  } else {
   url = url + '?ufr=' + toState + log;
  }
   window.location = url;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

function toggleDropdowns(dhtmldiv, state, disable){
//  alert(dhtmldiv.id + "  " + state);
   if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
      var startx = isgetAbsX(dhtmldiv);
      var starty = isgetAbsY(dhtmldiv);
      var endx = startx + dhtmldiv.offsetWidth;
      var endy = starty + dhtmldiv.offsetHeight;
      var dropdowns = document.getElementsByTagName('select');
       if(document.forms['sortby'])
       {
            if(isgE('sortby'))
            {
                if(state == 'off' && findPosY(isgE('sortby')) < 320)document.forms['sortby'].style.visibility = "hidden";
                else document.forms['sortby'].style.visibility = "visible";
            }
            if(isgE('rapportAutoEmpty') && isgE('rapportAutoEmpty').style)
            {
               if(isgE('rapportAutoEmpty').style.visibility == 'visible')
               {
                document.forms['sortby'].style.visibility = "visible";
               }
            }
       }
      for (i = 0; i < dropdowns.length; i++) {
        
         var dropdownx =  isgetAbsX(dropdowns[i]);
         var dropdowny =  isgetAbsY(dropdowns[i]);
         var dropdownw =  dropdowns[i].offsetWidth;
         var dropdownh =  dropdowns[i].offsetHeight;

         if (dropdowns[i].className != 'filterDropdown') {
            if (((dropdownx > startx && dropdownx < endx)||(dropdownx + dropdownw > startx && dropdownx + dropdownw < endx)||(dropdownx < startx && dropdownx + dropdownw > endx))&&((dropdowny > starty && dropdowny < endy)||(dropdowny + dropdownh > starty && dropdowny + dropdownh < endy)||(dropdowny < starty && dropdowny + dropdownh > endy))) {
               if ( state == 'on' ) {
                   if (disable) 
                   {
                       dropdowns[i].disabled = false;
                   }
                   else 
                   {
                       dropdowns[i].style.visibility = 'visible';
                   }
               } else {
                   if (disable)
                   {
                       dropdowns[i].disabled = true;
                   }
                   else
                   {
                       dropdowns[i].style.visibility = 'hidden';
                   }
               }
            }
         }
      }
   }
}

function hideFlash(dhtmldiv){
   var startx = isgetAbsX(dhtmldiv);
   var starty = isgetAbsY(dhtmldiv);
   var endx = startx + dhtmldiv.offsetWidth;
   var endy = starty + dhtmldiv.offsetHeight;

   for (i = 0; i < isFlashCount; i++) {
      flashobjsDiv = isgE('flashDiv'+(i+1));
      var flashobjx =  isgetAbsX(flashobjsDiv);
      var flashobjy =  isgetAbsY(flashobjsDiv);
      var flashobjw =  flashobjsDiv.offsetWidth;
      var flashobjh =  flashobjsDiv.offsetHeight;

      if (flashobjx != startx && flashobjy != starty && (flashobjx + flashobjw) != endx && (flashobjy + flashobjh) != endy) {
         if (((flashobjx > startx && flashobjx < endx)||(flashobjx + flashobjw > startx && flashobjx + flashobjw < endx)||(flashobjx < startx && flashobjx + flashobjw > endx))&&((flashobjy > starty && flashobjy < endy)||(flashobjy + flashobjh > starty && flashobjy + flashobjh < endy)||(flashobjy < starty && flashobjy + flashobjh > endy))) {
            flashobjsDiv.style.display = 'none';
            isgE('flashImgDiv'+(i+1)).style.display = 'block';
         }
      }
   }
}

function showFlash(){
   for (i = 0; i < isFlashCount; i++) {
      isgE('flashImgDiv'+(i+1)).style.display = 'none';
      isgE('flashDiv'+(i+1)).style.display = 'block';
   }
}

function ispopupImage(imgsrc, prodname, csspath) {
   var popWin = isopenCenteredWindow('', 'popupImage', 420, 430);
   //prodname = unescape(prodname);
   var popHtml = '<html><head><title>';
   popHtml += prodname;
   popHtml += '</title><link rel="stylesheet" type="text/css" href="' + csspath + '/global.css" media="all" />';
   popHtml += '</head><body><div style="height:400px">'
   popHtml += '<image src="'+imgsrc+'" alt="'+prodname+'" /></div>';
   popHtml += '<div class="prodPop" style="text-align:right; width:400px"><a href="#" onclick="self.close(); return false;">Close Window</a><a href="#" onclick="self.close(); return false;"><img src="/img/buttons/btn_closewindow_off.gif" width="23" height="17" alt="Close Window" align="absmiddle" /></a></div>';
   popHtml += '</body></html>';

   popWin.document.open();
   popWin.document.write(popHtml);
   popWin.document.close();
}

var isendx = 120;
var isendy = 30;
var isstarmovement;
var isspeed = 40;
var currObj = null;

function isShootingStar(buttonClicked) {
    tabClick('rememberItems', 7, 2, 'green');
    strStartPos = buttonClicked.onclick.toString().indexOf('document');
    strEndPos = strStartPos + buttonClicked.onclick.toString().substring(buttonClicked.onclick.toString().indexOf('document')).indexOf(')');
    currObj = eval(buttonClicked.onclick.toString().substring(strStartPos, strEndPos));

   var startx = findPosX(buttonClicked)-320;
   var starty = findPosY(buttonClicked)-25;

   //small work around for bug#216472 in IE  
   var browserName=navigator.appName; 
   if (browserName=="Microsoft Internet Explorer" ){
        startx = startx-document.body.offsetLeft;
        starty = starty-10;
   }
   issX(isgE('rememberStar'),startx);
   issY(isgE('rememberStar'),starty);
   issE(isgE('rememberStar'));
   if ((isstarmovement != '')&&(isstarmovement != null)) clearInterval(isstarmovement);
   isstarmovement = setInterval('isMoveStar()',60);
}

function isMoveStar() {
   var currx = isgX(isgE('rememberStar'));
   var curry = isgY(isgE('rememberStar'));

   x_direction = 1;
   y_direction = 1;
   var x_interval, y_interval;
   var line = false;

   if ((Math.abs(isendx - currx) < isspeed) && (Math.abs(isendy - curry) < isspeed)) {
      clearInterval(isstarmovement);
      ishE(isgE('rememberStar'));
      remItAddItem(currObj)
      return;
   }

   if (isendx - currx == 0) {
   x_interval = 0;
   y_interval = isspeed;
   line = true;
   }
   if (isendy - curry == 0) {
      x_interval = isspeed;
      y_interval = 0;
      line = true;
   }

   if (!line) {
      var angle = Math.atan(Math.abs(isendx - currx)/Math.abs(isendy - curry));

      x_interval = Math.sin(angle)*isspeed;
      y_interval = Math.cos(angle)*isspeed;
   }

   if (isendx < currx) x_direction = -1;
   if (isendy < curry) y_direction = -1;

   x_interval = x_direction*x_interval;
   y_interval = y_direction*y_interval;

   issX(isgE('rememberStar'),currx+x_interval);
   issY(isgE('rememberStar'),curry+y_interval);
}

/* this function is currently not used in the new version of the ri drawer
function rememberChecked(theform) {
   var checkedCount = 0;

   if ( theform != null ) {
       for (var i = 0; i < theform.elements.length; i++) {
           if (theform.elements[i].type == "checkbox") {
               if (theform.elements[i].checked) checkedCount++;
           }
       }
   }

   if (checkedCount > 0) {
      isgE('rememberDeleteOff').style.display = 'none';
      isgE('rememberDeleteOn').style.display = 'block';
      isgE('rememberDeleteTxtOff').style.display = 'none';
      isgE('rememberDeleteTxtOn').style.display = 'block';
      if (checkedCount > 1) {
         isgE('rememberCompareOff').style.display = 'none';
         isgE('rememberCompareOn').style.display = 'inline';
      } else {
         isgE('rememberCompareOff').style.display = 'inline';
         isgE('rememberCompareOn').style.display = 'none';
      }
   } else {
      isgE('rememberDeleteOff').style.display = 'block';
      isgE('rememberDeleteOn').style.display = 'none';
      isgE('rememberDeleteTxtOff').style.display = 'block';
      isgE('rememberDeleteTxtOn').style.display = 'none';
      isgE('rememberCompareOff').style.display = 'inline';
      isgE('rememberCompareOn').style.display = 'none';
   }
}
*/

function rememberItCheckEnter( event, buttonClicked, form ) 
{
    var code = 0;
    code = event.keyCode;
    if ( code== 13 ) {
        isShootingStar(buttonClicked);
        rememberItAddItem(form);
    }
}

function checkEnter(event)
{
   var code = 0;
   code = event.keyCode;
   if (code==13)
   document.frm.name.value = document.frm._dirname.value;
}

function shade(showit,big)
{
    if (location.href.indexOf('/aol/pinpoint') >= 0) return;
    var who = (isgE("block") == null ? "screen" : "block");
    var targObj = isgE(who);
    var headerHeight = 79;
    var objToSizeOn = isgE("mainContentContainerIDPP");
    if (targObj && objToSizeOn) {
        targObjStyle = targObj.style;
        //w = objToSizeOn.offsetLeft + 10 + objToSizeOn.offsetWidth ;
        w = document.documentElement.scrollWidth - leftNavWidth;
        h = objToSizeOn.offsetTop + 10 + objToSizeOn.offsetHeight - headerHeight;
        if (w >= 0) targObjStyle.width = w + 'px';
        if (h >= 0) targObjStyle.height = h + 'px';
        targObjStyle.top = headerHeight + 'px';
        targObjStyle.left = leftNavWidth + 'px';
        if (showit) {
            issE(targObj);
            targObjStyle.display='block';
            if (who == "screen") toggleDropdowns(targObj, 'off', true);
        } else {
            if (who == "screen") toggleDropdowns(targObj, 'on', true);
            ishE(targObj);
            targObjStyle.display='none';
        }
    }
}


function doSearch ( s ) {
    var regExp1 = /\homer\b/;
    var regExp2 = /[(,),<,>,\[,\],*]/;
    var str = s.value;
    if ( str == "" ) {
        s.focus();
    } else {
        if ( typeof regExp1.source != 'undefined' ) //supports regular expression testing
            if ( regExp1.test( str ) || regExp2.test( str ) ){
                var alrt = "Please note that you can not include:";
                alrt += "\n\nThe reserved characters [, ], (, ), *, < or >";
                alrt += "\n\nin your search query!\n";
                s.focus();
                return alert( alrt );
            }
        document.frm.name.value = document.frm.Query.value;
        document.frm.submit();
    }
}

// picked up from peelback.xsl
function peelback (idx) {
    if (S_prop25 != ''){
        s_linkType='o';
        s_linkName=S_linkName;
        s_prop23=S_prop23;
        s_prop24=S_prop24;
        s_prop25=S_prop25;
        s_products=S_prop25;
        s_events='event2';
        s_lnk=s_co(GraphicLink);
        s_gs(AsppReportSuiteID);
    }
    top.open(idx);
}

// picked up from shortFavouriteCategory.xsl
cumulativeHeight = 0;
function resizeParent(){
    if(window.parent != null){
        myDiv = parent.document.getElementById('favDiv');
        myDiv.style.height = cumulativeHeight;
        myIFrame = parent.document.getElementById('favStores');
        myIFrame.style.height = cumulativeHeight + "px";
    }
}

// function also called from remember.js
function updateButton(button, path, text) {
    button.src = path;
    button.setAttribute('alt', text);
    button.setAttribute('title', text);
}


// toggle function used on the remember it full view page
function toggleResultSet(formName){
    if(isgE('checkButton')) {
        var button = isgE('checkButton');
        var setting = 1;
        
        if (button.src.indexOf("uncheckemall.gif") == -1) {
            updateButton(button, "/img/buttons/uncheckemall.gif", "uncheck all");
            setting = 1;
        } else {
            updateButton(button, "/img/buttons/checkemall.gif", "check all");
            setting = 0;
        }

        if (document.forms[formName]) {
            var theform = document.forms[formName];
            for (var i = 0; i < theform.elements.length; i++) {
                if (theform.elements[i].type == "checkbox") {
                    theform.elements[i].checked = setting;
                }
            }
        }
    }
}

function checkChecks(theform) {
    var checkBoxCount = 0;
    var checkedCount = 0;
    for (var i = 0; i < theform.elements.length; i++) {
        if (theform.elements[i].type == "checkbox") {
            checkBoxCount++;
            if (theform.elements[i].checked) {
                checkedCount++;
            }
        }
    }
/*
    if(theform.name == 'results'){
        var button = isgE('checkButton');
        if (checkedCount == 0 && (button.src.indexOf("uncheckemall.gif") != -1))
            updateButton(button, "/img/buttons/checkemall.gif", "check all");
        if (checkedCount == checkBoxCount && (button.src.indexOf("uncheckemall.gif") == -1))
            updateButton(button, "/img/buttons/uncheckemall.gif", "uncheck all");
    } else if (theform.name == 'rememberForm') {
        var button = isgE('ri_check_btn');
        if (checkedCount == 0 && (button.src.indexOf("ri_uncheck_btn.gif") != -1))
            updateButton(button, "/img/buttons/ri_check_btn.gif", "check'em all");
        if (checkedCount == checkBoxCount && (button.src.indexOf("uncheckemall.gif") == -1))
            updateButton(button, "/img/buttons/ri_uncheck_btn.gif", "uncheck'em");
    }
*/
//alert("checkBoxCount = "+ checkBoxCount + "checked = " +checkedCount);

    if(checkedCount == checkBoxCount)
    {
        document.getElementById('ri_check_btn').checked = true;
        document.getElementById('lbl_ri_check_btn').innerHTML = "Uncheck'em all";
    }
    if(checkedCount < checkBoxCount)
    {
        document.getElementById('ri_check_btn').checked = false;
        document.getElementById('lbl_ri_check_btn').innerHTML = "Check'em all";
    }


}

// picked up from list.xsl
function OptionItem(linkName, merchName, CLI, pws_ID){
    this.linkName= linkName;
    this.merchName = merchName;
    this.CLI = CLI;
    this.pws_ID= pws_ID;
}

// dynamic mailto referencing current page. Includes sample copy that should be changed before site goes live.
function writeShare(){
        var lf = "%0d";
        var subjectLine = escape("Check out this page on AOL Shopping");
        
        var bodyCopy = escape("Hi,")+lf+lf;
        bodyCopy += escape("I was on AOL Shopping and thought you might be interested in checking this page out:")+lf+lf+lf+lf;
    
        bodyCopy += escape(location.href)+lf+lf+lf+lf;
        bodyCopy += escape("**********************************")+lf;
        bodyCopy += escape("AOL makes online shopping easy.  If you want to receive notice of exclusive savings, free shipping offers, One-Day Sales and more, please click here.")+lf;
        bodyCopy += escape("http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare");
        
        var s = 'mailto:?subject='+ subjectLine +'&body='+ bodyCopy;
        
        link = document.getElementById('shareLink');
        link.href = s;
        
        //code for IM
        var ff = (navigator.userAgent.toLowerCase().indexOf('firefox') != -1);
        var NS = (navigator.userAgent.toLowerCase().indexOf('netscape') != -1);
        var aol = (navigator.userAgent.toLowerCase().indexOf('aol') != -1);
        var lFeed ;
        var agent = navigator.userAgent.toLowerCase();
        var isIE =  (agent.indexOf("msie") != -1);
        if (agent.indexOf("aol") != -1)
            lFeed=" <br />";
        else if(agent.indexOf("netscape") != -1)
            lFeed=" <br>";

        bodyCopy = "Hi,"+lFeed+lFeed;
        bodyCopy += "I was on AOL Shopping and thought you might be interested in checking this page out:"+lFeed;
        bodyCopy += location.href+lFeed+lFeed+lFeed;
        bodyCopy += "*****"+lFeed;
        bodyCopy += "AOL makes online shopping easy.  If you want to receive notice of exclusive savings, free shipping offers, One-Day Sales and more, please click here."+lFeed;
        bodyCopy += "http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare";
        
if (NS)
        {

        bodyCopy = "<span style=text-decoration: none>Hi,"+lFeed
        bodyCopy += "I was on AOL Shopping and thought you might be interested in checking this page out:</span>"+lFeed;
        bodyCopy += location.href+lFeed+lFeed
        bodyCopy += "<span style='text-decoration: none'>*****"+lFeed;
        bodyCopy += "AOL makes online shopping easy.  If you want to receive notice of exclusive savings, free shipping offers, One-Day Sales and more, please click here.</span>"+lFeed;
        bodyCopy += "<a href='http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare'>http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare</a>";
        bodyCopy = escape(bodyCopy);
        }
if (aol)
        {

        bodyCopy = "Hi,"+lFeed
        bodyCopy += "I was on AOL Shopping and thought you might be interested in checking this page out:"+lFeed;
        bodyCopy += location.href+lFeed+lFeed
        bodyCopy += "*****"+lFeed;
        bodyCopy += "AOL makes online shopping easy.  If you want to receive notice of exclusive savings, free shipping offers, One-Day Sales and more, please click here."+lFeed;
        bodyCopy += "<a href="+"http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare"+">http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare</a>";
        //bodyCopy = escape(bodyCopy);
        }
    
        if (agent.indexOf("aol") == -1) 
            bodyCopy = bodyCopy.replace(/ /g, "+");
        
        if (isIE) bodyCopy = escape(bodyCopy);

        link =document.getElementById("imLink");        
        if (agent.indexOf("aol") != -1) {
                link.href= 'aol://9293::' + bodyCopy;
            } else {                                
                //link.href="javascript:sendIM(\""+bodyCopy+"\", \"\")";    
                //link.href="aim:GoIm?message="+ bodyCopy;*/
                link.href="javascript:sendIM("+"\'\',\'"+location.href+"\')";
            }
}

function done(sponsorData) {
    if(sponsorData.length!=0) {
        s="";
        s+='<h3 class="header">sponsored links</h3>'
        +'<a class="info" href="" onclick="isopenCenteredWindow(\'ppphtml?fname=fe.htmlSl\', \'Disclosure\', 542, 370, true, true, true); return false;">What is a Sponsored Link?</a>'
        s+='<div class="links">';
        //For each sponsored link in the results array, add a list item to the unordered list
        for (i=0;i<sponsorData.length;i++) {
            if (i == 3)
                s+='<div class="clearSpons"></div>';
            s+='<div class="linkItem">';
            s+= sponsorData[i].title+'<br />';
            s+= sponsorData[i].d1 + ' ' + sponsorData[i].d2 + '<br />';
            if(sponsorData[i].url.substring(0,3) == 'http')
                s+= '<a href="'+ sponsorData[i].url + '" target="_blank">' + sponsorData[i].url + '</a>';
            else
                s+= '<a href="http://'+ sponsorData[i].url + '" target="_blank">' + sponsorData[i].url + '</a>';
            s+= '</div>';
        }
        s+= '<div class="clear2"></div>';
        s+= '</div>';
        //s+= '<div class="more_links"><a href="">More Offers &gt;</a></div>';
        
        if (document.getElementById('spon_link'))
            document.getElementById('spon_link').innerHTML = s;
    } else { //if the array is empty then no sponsored links will be displayed.
        if (document.getElementById('spon_link'))
            document.getElementById('spon_link').style.display = 'none';
    }
}

function deleteObsoleteItem(prod_id)
{
    document.getElementById('rememberItemsFrame').src = 'WishList?action=removeProduct&wid=1&pid=' + prod_id;
}

//Ajax stuff
//Get Element by ID
function ge(d){return document.getElementById(d)}
//Return array of elements of type T in object O
function gt(o,t){return o.getElementsByTagName(t)}
//Append DOM object N to DOM object O
function a(o,n){if(o)o.appendChild(n)}
function rc(o,newnode,rep){if(o) o.replaceChild(newnode, rep)};
//Replace content in object O with content stored in C
function r(o,c){if(o)o.innerHTML=c}

//Use ajax to retrieve some content or post some results
//url - url to post to or retrieve from
//attrMap - data blob to pass to callback. Current attributes are:
//attrMap.reqdata - Data to post to the server. Null if doing a GET.
//attrMap.url - 
//attrMap.dest - ID to stuff content into when Ajax completes
//attrMap.headers - hash of name/value pairs to put into request header
//callback - used to specify different callback. Otherwise default_cb() is called when ajax completes.
function gDoc(pr_id,attrMap,callback){
  var req,meth='GET';
  //When Ajax state goes to 4, either callback the custom callback or the default one.
  var f=function(){if(req.readyState>3)callback?window[callback](req,attrMap):default_cb(req,attrMap);}
  //Default to HTTP GET unless the attribute Map has specified some request Data
  attrMap.reqdata?meth='POST':attrMap.reqdata=null;
  //Create request objec in either the standards or Microsoft way
  window.XMLHttpRequest?req=new XMLHttpRequest():req=new ActiveXObject("Microsoft.XMLHTTP");
  //Setup callback for when Ajax completes
  req.onreadystatechange=f;
  //Make the Ajax request
  req.open(meth,'/instore/WishList?action=removeProduct&wid=1&pid='+pr_id,true);
  for(k in attrMap.headers) req.setRequestHeader(k,attrMap.headers[k]);
  req.send(attrMap.reqdata);
}
//Default callback used when no callback is specified in gDoc()
//Currently only used by gAds() and gNav(). All others have custom callbacks
//req - results which came back from ajax request
//attrMap - blob of values specific to this callback
function default_cb(req,attrMap){
  //req.status==200?r(ge(attrMap.dest),req.responseText):err("Ajax Error: "+req.status);
  window.location.reload();
}

/* functions related to the iframe shim for login/dropdown issue on search result pages */
function getObject(objname){
    return document.getElementById(objname);        
}

function setShim(){
    if ((navigator.userAgent.toLowerCase().indexOf("msie") != -1) || 
        (navigator.userAgent.toLowerCase().indexOf("safari") != -1)) {
        if (getObject('loginLayer') && getObject('shim')) {
            // copying certain attributes from loginLayer into the shim iframe
            var shim = getObject('shim').style;
            var logL = getObject('loginLayer').style;

            var atb = new Array('position', 'left', 'top', 'width', 'height', 'zIndex');
            for(i=0; i < atb.length; i++) {
                if (atb[i] == 'zIndex') // set z-index one less to sit behind the diplay
                    shim[atb[i]] = logL[atb[i]] - 1;
                else if (atb[i] == 'width' || atb[i] == 'height') // add 2 to width and height to account for border on display
                    shim[atb[i]] = (parseInt(logL[atb[i]]) + 2) + 'px'
                else
                    shim[atb[i]] = logL[atb[i]];
            }
        }

        var list = document.getElementsByTagName('a');

        for(i=0; i < list.length; i++) {
            if (list[i].href.indexOf('loginLayer') != -1) {
                var action = "";
                if (list[i].href.substring((list[i].href.length - 1), list[i].href.length) != ";") {
                    action = ";";
                } else {
                    action = "javascript:";
                }
                if (list[i].href.indexOf('toggleLayer') != -1) {
                    action += "toggleShim('anchorImg','shim',-150,12);";
                } else if (list[i].href.indexOf('hideLayer') != -1) {
                    action += "hideShim('shim');";
                }
                list[i].href += action;
            }       
        }
    }

}
    

/* these functions are also in jswrite.js
function findPosX(obj){
    var curleft=0;
    while (obj.offsetParent){
        curleft+=obj.offsetLeft;
        obj=obj.offsetParent;
    }
    curleft+=obj.offsetLeft;
    return curleft;
}

function findPosY(obj){
    var curtop = 0;
    while(obj.offsetParent){
        curtop += obj.offsetTop;
        obj=obj.offsetParent;
    }
    curtop+=obj.offsetTop;
    return curtop;
}
*/

function toggleShim(objname,layer_n,left_o,top_o){
    var obj=getObject(objname);
    var newX=0;
    if(obj!=null)newX=findPosX(obj);
    var newY=0;
    if(obj!=null)newY=findPosY(obj);
    var new_left=newX+left_o;
    var new_top=newY+top_o;
    if(layer_n!=""){
        if(getObject(layer_n).style.visibility=="visible")hideShim(layer_n); 
        else showShim(layer_n,new_left,new_top); 
    }
}

function showShim(layer_n,left_o,top_o){
//  insertIFrame(layer_n);
    if(top_o==null)top_o=0;
    if(left_o==null)left_o=0;
    if(layer_n!=""){
        var p=getObject(layer_n);
        p.style.left=left_o+"px";
        p.style.top=top_o+"px";
        p.style.visibility="visible";
        p.style.display="";
    }
}

function hideShim(hs_layer){
//  if(_sns_showByDef_!=1&&hs_layer!=""){
        if(hs_layer!=""){
            var p=getObject(hs_layer);
            p.style.visibility="hidden";
            p.style.display="none";
        }
//  }
}   

function readCookie(name) { 
    var cookieName = name + "=";
    var values = '';
    var ca = document.cookie.split(';'); 
    for(var i=0;i < ca.length;i++) { 
        var c = ca[i]; 
        while (c.charAt(0)==' ') 
            c = c.substring(1,c.length); 
        if (c.indexOf(cookieName) == 0) 
            values = c.substring(cookieName.length,c.length); 
        if (values.indexOf('type=') != -1)
            return values.charAt(values.indexOf('type=') + 5);
    } 
    return null; 
}

var i=1;

function divOn(id){
    if(document.getElementById(id) != null) {
        document.getElementById(id).style.display = 'inline';
    }
}

function divOff(id){
    if(document.getElementById(id) != null) {
        document.getElementById(id).style.display = 'none';
    }
}

function divHide(id){
    if(document.getElementById(id) != null) {
        document.getElementById(id).style.visibility = 'hidden';
    }
}

function divUnhide(id){
    if(document.getElementById(id) != null) {
        document.getElementById(id).style.visibility = 'visible';
    }
}

function saveTextField(searchBox){
    searchFieldText=searchBox.value;
    searchFieldText=searchFieldText.replace(/\+/g, " ");
    var oldVal = searchFieldText;
    
			if ($('rapportMiniFilterForm')!= null && $("rapportMiniFilterForm").k){
				oldVal=$("rapportMiniFilterForm").k.value;
			}
			else {		
				var searchStr = location.search.split('&');
				for(i=0; i<searchStr.length; i++)
				{
					if(searchStr[i].indexOf("k=") != -1)
					{
						if((document.forms['rapport']) && document.forms['rapport'].searchField) {
						oldVal = unescape(searchStr[i].replace(/\+/g, " ").substr(searchStr[i].indexOf("k=")+2));
						}	
					}	
				}					
			}

    
	var newVal = searchFieldText;
	if(oldVal != newVal)
	{
		valueModified = true;
	}
}

function isDefaultText(tabNumToShow){
    default1='Search Shopping';
    default3= 'Search The Web';
    default4='Search For Images';
    default5='Search For Video';
    default6='Search For Audio';
    default7='Search For News';
    switch(tabNumToShow) {
        case 1 : if(searchFieldText==default3 || searchFieldText==default4 || searchFieldText==default5 || searchFieldText==default6 || searchFieldText==default7 ) return true
        case 3 : if(searchFieldText==default1 || searchFieldText==default4 || searchFieldText==default5 || searchFieldText==default6 || searchFieldText==default7 ) return true
        case 4 : if(searchFieldText==default1 || searchFieldText==default3 || searchFieldText==default5 || searchFieldText==default6 || searchFieldText==default7 ) return true
        case 5 : if(searchFieldText==default1 || searchFieldText==default3 || searchFieldText==default4 || searchFieldText==default6 || searchFieldText==default7 ) return true
        case 6 : if(searchFieldText==default1 || searchFieldText==default3 || searchFieldText==default4 || searchFieldText==default5 || searchFieldText==default7 ) return true
        case 7 : if(searchFieldText==default1 || searchFieldText==default3 || searchFieldText==default4 || searchFieldText==default5 || searchFieldText==default6 ) return true
        return false;
    }
}

function tabClick(tabPrefix, numOfTabs, tabNumToShow, tabColor){
if($('searchSponsors') && valueModified) 
{
	$('searchSponsors').style.display = 'none'
}
	var searchField=$('topform').k;
	var rapportAutoClose_none=false;
    for(i=1; i<=numOfTabs; i++)
    {    
        divOff(tabPrefix+"Div_"+i);
    }
    deSelectTabs(tabPrefix+"Tab", numOfTabs, tabColor);
	selectTab(tabPrefix+"Tab_"+tabNumToShow, tabColor);
	if(tabNumToShow<=2){
		if(isDefaultText(tabNumToShow)) {			 
				if ($('rapportMiniFilterForm')!= null && $("rapportMiniFilterForm").k){
				$('topform').k.value=$("rapportMiniFilterForm").k.value.replace(/\+/g, " ");
				}
				else {		
					var searchStr = location.search.split('&');
					for(i=0; i<searchStr.length; i++)
					{
						if(searchStr[i].indexOf("k=") != -1)
						{
							if((document.forms['rapport']) && document.forms['rapport'].searchField) {
						document.forms['rapport'].searchField.value = unescape(searchStr[i].replace(/\+/g, " ").substr(searchStr[i].indexOf("k=")+2));
						}
					}
				}				
				}				
			saveTextField(searchField);
		}
		else {
			document.getElementById('topform').k.value=searchFieldText;
		}
    	
		divOn(tabPrefix+"Div_"+tabNumToShow);
		/*	Fix for Bug # 288296 STI : Smart box is appearing which says Are you searching for even when rpshow=0 Starts here
			Getting the value of rpshow from the URL
		*/
		var rpShowStr = location.search.split('&');
		var rpShow='1';
		for(i=0; i<rpShowStr.length; i++)
		{
			if(rpShowStr[i].indexOf("rpshow=") != -1)
			{
				rpShow = rpShowStr[i].substr(rpShowStr[i].indexOf("rpshow=")+7);
			}
		}

    	if((trim(searchFieldText)!='Search Shopping') && (rpShow != '0')){
			if($("rapportAdServer") && $("rapportAdServer").style)  $("rapportAdServer").style.display = 'none';
			if($("rapportGoogle") && $("rapportGoogle").style) $("rapportGoogle").style.display = 'none';
			isrefreshSmartbox();
		}
		else{
			if($("rapportAdServer") && $("rapportAdServer").style)  $("rapportAdServer").style.display = 'block';
			if($("rapportGoogle") && $("rapportGoogle").style) $("rapportGoogle").style.display = 'block';
		}
		if(($("rapportFilters") && $("rapportFilters").style && $("rapportFilters").style.display == 'block'  ) || ($("rapportCategories") && $("rapportCategories").style && $("rapportCategories").style.display == 'block'    )) {
			if($("rapportAdServer") && $("rapportAdServer").style)  $("rapportAdServer").style.display = 'block';
			if($("rapportGoogle") && $("rapportGoogle").style) $("rapportGoogle").style.display = 'block';
			if($("rapportGoogleOff") && $("rapportGoogleOff").style) $("rapportGoogleOff").style.display = 'block';
			if($("rapportStart") && $("rapportStart").style) $("rapportStart").style.display = 'none';
			rapportAutoClose_none=true;
		}
		if(($("rapportResults") && $("rapportResults").style && $("rapportResults").style.display == 'block') || ($("rapportGoogle") && $("rapportGoogle").style && $("rapportGoogle").style.display == 'rapportCategories') || $("rapportResults") ) {
			setNone("rapportStart") ;
			rapportAutoClose_none=true;
		}
	
		if($("rapportBtmClose") && $("rapportBtmClose").style &&  $("rapportBtmClose").style.display== 'block') {
			if($("rapportStart") && $("rapportStart").style)  $("rapportStart").style.display = 'none';
			rapportAutoClose_none=true;
		}
	
		if(isBlock("rapportAutoComplete")) rapportAutoClose_none=false;
		if(rapportAutoClose_none)	{ 
			setNone("rapportAutoClose");		
		} else {
			setBlock("rapportAutoClose");
		}
	}
	else{
		divOn(tabPrefix+"Div_3");
		switch(tabNumToShow) {			
			case 3 : {
				if(isDefaultText(tabNumToShow)) {
					document.getElementById('topform1').query.value="Search The Web";	
				}
				else {
					document.getElementById('topform1').query.value=searchFieldText;
				}
					
				document.getElementById('topform1').invocationType.value="shopchan-web";
				document.getElementById('topform1').action="http://search.aol.com/aolcom/search";
				break;
			}
			case 4 : { 
				if(isDefaultText(tabNumToShow)) {
					document.getElementById('topform1').query.value="Search For Images";	
				}
				else {
					document.getElementById('topform1').query.value=searchFieldText;
				}
				document.getElementById('topform1').invocationType.value="shopchan-image";
				document.getElementById('topform1').action="http://search.aol.com/aolcom/image";
				break;
			}
			case 5 : { 
				if(isDefaultText(tabNumToShow)) {
					document.getElementById('topform1').query.value="Search For Video";	
				}
				else {
					document.getElementById('topform1').query.value=searchFieldText;
				}
				document.getElementById('topform1').invocationType.value="shopchan-video";
				document.getElementById('topform1').action="http://search.aol.com/aolcom/video";
				break;
			}
			case 6 : { 
				if(isDefaultText(tabNumToShow)) {
					document.getElementById('topform1').query.value="Search For Audio";	
				}
				else {
					document.getElementById('topform1').query.value=searchFieldText;
				}				
				document.getElementById('topform1').invocationType.value="shopchan-audio";
				document.getElementById('topform1').action="http://search.aol.com/aolcom/audio";
				break;
			}
			case 7 : { 
				if(isDefaultText(tabNumToShow)) {
					document.getElementById('topform1').query.value="Search For News";	
				}
				else {
					document.getElementById('topform1').query.value=searchFieldText;
				}
				document.getElementById('topform1').invocationType.value="shopchan-news";
				document.getElementById('topform1').action="http://search.aol.com/aolcom/news";
				break;
			}
		}
	
	}
    tabClickFunctions(tabPrefix+"Div_"+tabNumToShow);
}

function selectTab(tabId,tabColor){
	if (tabColor=="green") {
		document.getElementById(tabId).className = 'selectedItemGreen';
	}
	else {
		document.getElementById(tabId).className = 'selectedItemBlue';
	}
}

function deSelectTabs(tabId, numOfTabs, tabColor){
	for (i=1; i<=2; i++) {
		document.getElementById(tabId+"_"+i).className = 'deselectedItemGreen';
	}
	for(i=3; i<=numOfTabs; i++) {
		document.getElementById(tabId+"_"+i).className = 'deselectedItemBlue';
	}
    }
function trim(str){ 
	return str.replace(/^\s*|\s*$/g,"");
}

function tabClickFunctions(tabName)
{
	if(tabName == 'rememberItemsDiv_1'||tabName == 'rememberItemsDiv_3'||tabName == 'rememberItemsDiv_4'||tabName == 'rememberItemsDiv_5'||tabName == 'rememberItemsDiv_6'||tabName == 'rememberItemsDiv_7')
    {
		var rememberItemCountHTML = trim(document.getElementById("rememberItemCount").innerHTML);
		if(rememberItemCountHTML.length > 11)
        {
        document.getElementById("rememberItemCount").style.textAlign        = 'left';
        document.getElementById("rememberItemCount").style.paddingTop       = '3px';
        document.getElementById("rememberItemCount").style.paddingLeft      = '10px';
        document.getElementById("rememberItemCount").style.display          = 'block';
        document.getElementById("rememberItemCount").style.visibility       = 'visible';
        document.getElementById("rememberItemCount").style.width            = '60px';
        document.getElementById("rememberItemCount").style.backgroundColor  = '#FFFFFF';
	  document.getElementById("rememberItemCount").style.cursor = 'text';
        }
        if(document.all)
        {
            if(getElementByAttribute('className', 'productTabsContainer')[0]) getElementByAttribute('className', 'productTabsContainer')[0].style.zIndex = '';
            if(getElementByAttribute('className', 'productContainer')[0]) getElementByAttribute('className', 'productContainer')[0].style.zIndex = '';
            if($("rapportSponsors"))document.getElementById("rapportSponsors").style.display = 'block';
        }
        if(document.all)if (isgE('DL_Container')) isgE('DL_Container').style.zIndex = '0';
        if(document.all && getElementByAttribute('className', 'noresultsRightContainer')[0])getElementByAttribute('className', 'noresultsRightContainer')[0].style.zIndex = '0'
        if(getElementByAttribute("className", "module3filters")[0])toggleDropdowns(getElementByAttribute("className", "module3filters")[0],'on');
        if (( tabName != 'rememberItemsDiv_1' || (isgE('searchButton') && isgE('searchButton').src && isgE('searchButton').src.indexOf("open") != -1) && !(isgE('rapportAutoComplete')) ) ) {
	            if(isgE('sortby') && isgE('sortby').style && isgE('sortby').style.visibility == "hidden") isgE('sortby').style.visibility = "visible";
	            if(isgE('sort') && isgE('sort').style && isgE('sort').style.visibility == "hidden") isgE('sort').style.visibility = "visible";
           }else {
           		if(isgE('sortby')) {
				if(findPosY(isgE('sortby')) < 320) {
	     			       if(isgE('sortby') && isgE('sortby').style) isgE('sortby').style.visibility = "hidden";
	     			       if(isgE('sort') && isgE('sort').style) isgE('sort').style.visibility = "hidden";
	     			}
           		}
           }

        if(getElementByAttribute("className", "module3filters")[0])
            {
            if(isgE('sort') && isgE('sort').style && isgE('sort').style.visibility == "hidden") isgE('sort').style.visibility = "visible"
            }
        if(isgE('rapportAutoComplete') && isgE('rapportAutoComplete').style && isgE('rapportAutoComplete').style.display == 'block'){
            if(document.all)if (isgE('DL_Container')) isgE('DL_Container').style.zIndex = '-1'; 
            if (isgE('rapportSponsors')) isgE('rapportSponsors').style.display = 'none';  // if ad image is there already in search rapport, it is displayed along with smart box. This statement will hide the image.
        }

   	//In product detail page, Search rapport goes back when a tab except Shopping clicked first and Shopping tab clicked next
	 	if((tabName == 'rememberItemsDiv_1')) {
			if (isgE('rapportSponsors') || isgE('rapportFilters') || isgE('rapportCategories') || isgE('otherContent')) {
			if(document.all) if(isgE('productTabsContainer'))isgE('productTabsContainer').style.zIndex = '-1'; 
			if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '-1'; 
		}
			if (isgE('searchButton') && isgE('searchButton').src && isgE('searchButton').src.indexOf("open") != -1){
				if(document.all) if(isgE('productTabsContainer'))isgE('productTabsContainer').style.zIndex = '1'; 
				if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '1'; 
			}
		}
		
		if(tabName == 'rememberItemsDiv_3'||tabName == 'rememberItemsDiv_4'||tabName == 'rememberItemsDiv_5'||tabName == 'rememberItemsDiv_6'||tabName == 'rememberItemsDiv_7' ) {
			if(document.all) if(isgE('productTabsContainer'))isgE('productTabsContainer').style.zIndex = '1'; 
			if(document.all) if(isgE('productContainer')) isgE('productContainer').style.zIndex = '1'; 
		}
    }
    else if(tabName == 'rememberItemsDiv_2')
    {
        if(document.getElementById('rememberItemCount').innerHTML.indexOf("item") == -1)
        {
            document.getElementById('rememberItemCount').style.display = 'none';
            document.getElementById('rememberContainer').style.top = '31px';
        }
        else
        {

            document.getElementById('rememberContainer').style.top      = '70px';
            document.getElementById("rememberContainer").style.zIndex   = '10';

            if(document.all)if($("rapportSponsors"))document.getElementById("rapportSponsors").style.display = 'none';

            document.getElementById("ddopts").style.position            = 'absolute';
            document.getElementById("ddopts").style.top                 = '31px';
            document.getElementById("ddopts").style.left                = '7px';
            document.getElementById("ddopts").style.border              = 'solid #BDDD3D';
            document.getElementById("ddopts").style.borderWidth         = '4px 0';
			document.getElementById("ddopts").style.width				= '512px';
            document.getElementById("ddopts").style.height              = '29px';
            document.getElementById("ddopts").style.textAlign           = 'left';
            document.getElementById("ddopts").style.backgroundColor     = '#FFF';

            document.getElementById("rememberItemCount").style.textAlign        = 'left';
            document.getElementById("rememberItemCount").style.paddingTop       = '3px';
            document.getElementById("rememberItemCount").style.paddingLeft      = '10px';
            document.getElementById("rememberItemCount").style.display          = 'block';
            document.getElementById("rememberItemCount").style.width            = '60px';
		document.getElementById("rememberItemCount").style.height			= '15px';
            document.getElementById("rememberItemCount").style.backgroundColor  = '#BDDD3D';
		document.getElementById("rememberItemCount").style.cursor = 'text';

            document.getElementById("allbox").style.display = 'block';
            document.getElementById("allbox").style.visibility = 'visible';
            document.getElementById("allbox").style.margin = '0px';
            document.getElementById("allbox").style.padding = '0px 10px 0 0';

            document.getElementById("ri_ddopts").style.marginLeft = '0px';
            document.getElementById("ri_ddopts").style.paddingLeft = '0px';

            //Commented to address the IE7 Bugs: 279579, 269931 & 269946 - Search tabs  are hidden after login
            //document.getElementById("rememberItemsDiv_2").style.height = '10px';
            //document.getElementById("pinpointRememberIt_menu").style.height = '10px';
                if(isgE('sortby'))
                {
                    if(findPosY(isgE('sortby')) > 320)
                    {
                        if(isgE('rememberItemsDiv'))toggleDropdowns(isgE('rememberItemsDiv'),'on');
                    }
                    else
                    {
            if(isgE('rememberItemsDiv'))toggleDropdowns(isgE('rememberItemsDiv'),'off');
            
                    }
                }

            findAndBackGroundDivs();
            if(document.all)if (isgE('DL_Container')) isgE('DL_Container').style.zIndex = '-1';
            

           if(document.all && getElementByAttribute('className', 'noresultsRightContainer')[0])getElementByAttribute('className', 'noresultsRightContainer')[0].style.zIndex = '-1';
        }
        if(is_aol) {
            document.getElementById("rememberContainer").style.left ='1px';
            document.getElementById("rememberItNoData").style.marginTop ='-47px';
            document.getElementById("rememberContainer").style.marginTop ='29px';
        }
        adjustRemContainer();
    }
}
function onAllDropDrown()
{
    if(document.all)
    {
        for(i=0; i<document.all.length; i++)
        {
            if(document.all[i].tagName.toLowerCase() == "select")
            {
                if(document.all[i].style.visibility == "hidden")
                {
                    document.all[i].style.visibility = "visible";
                }
            }
        }
    }
}
function findAndBackGroundDivs()
{
    if(document.all)
    {
        if(isgE('mainContentContainerIDPP'))
        {
            if(getElementByAttribute('className', 'productTabsContainer')[0])getElementByAttribute('className', 'productTabsContainer')[0].style.zIndex = '-1';
            if(getElementByAttribute('className', 'productContainer')[0])getElementByAttribute('className', 'productContainer')[0].style.zIndex = '-1';
        }
    }
}

function getElementByClassName(classname)
{
    for(i=0; i<document.all.length; i++)
    {
        if(document.all[i].className == classname)
        {
            return document.all[i];
        }
    }
}

function setOmnitureName(){
    var url=  s_265.prop12.split('&')[0];
    var pos = url.indexOf('?');
    var pageId=url.substr(pos+4);

    if(pageId!==null){
        if(pageId == "11"){
                s_265.pageName= s_265.pfxID + ": Main > Apparel & Accessories";         
        } else if (pageId == "12"){
                s_265.pageName= s_265.pfxID + ": Main > Auto Parts & Care";         
        } else if (pageId == "15"){
                s_265.pageName= s_265.pfxID + ": Main > Computing & Office";            
        }else if (pageId == "16"){
                s_265.pageName= s_265.pfxID + ": Main > Electronics & Photo";           
        }else if (pageId == "18"){
                s_265.pageName= s_265.pfxID + ": Main > House & Home";          
        }else if (pageId == "20"){
                s_265.pageName= s_265.pfxID + ": Main > Kids, Baby & Maternity";            
        }else if (pageId == "22"){
                s_265.pageName= s_265.pfxID + ": Main > Toys & Games";          
        }       
        
    }
}

function copyTools(){
        var frameDoc = window.frames["tools"].document.getElementById("promoNavWidget");
        var navWidget = document.getElementById("promoNavWidget");                          
        if(frameDoc)
        navWidget.innerHTML = frameDoc.innerHTML;

        frameDoc = window.frames["tools"].document.getElementById("searchRapportPromo");
        navWidget = document.getElementById("searchRapportPromo");                          
		navWidget1 = document.getElementById("searchRapportPromo1");
        if(frameDoc)
        navWidget.innerHTML = frameDoc.innerHTML;
		navWidget1.innerHTML = frameDoc.innerHTML;

        
        frameDoc = window.frames["tools"].document.getElementById("shoppingToolsContainer");
        navWidget = document.getElementById("shoppingToolsContainer");                          
        if(frameDoc)
        navWidget.innerHTML = frameDoc.innerHTML;
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

  //function for mediamodule template(change the top margin of tower ad accoringly to dynamic height of media module half widget to make towerad float below 300 x 250 ad
function getheight(){
        var ff = (navigator.userAgent.toLowerCase().indexOf('firefox') != -1);
        var NS = (navigator.userAgent.toLowerCase().indexOf('netscape') != -1);
        var IE =  (navigator.userAgent.toLowerCase().indexOf('msie') != -1);
    if(isgE('MET_MediaModule_Half')) 
    {
        var height_SpLogo=0;
        var height_adser=0;
        var margincount=0;
        var height_MMhalf=document.getElementById('MET_MediaModule_Half').offsetHeight;
            if(isgE('MET_Adser300x250')){
            var height_adser=document.getElementById('MET_Adser300x250').offsetHeight;
                if (IE){
                    margincount=margincount-19
                }
            }
            if(isgE('MET_sponserLogo') && !(isgE('MET_Adser300x250'))){
                height_SpLogo=document.getElementById('MET_sponserLogo').offsetHeight;
                if (ff || NS){
                    margincount=margincount+8
                }
                else {
                    margincount=margincount+0
                }
            }
            if(isgE('MET_sponserLogo') && isgE('MET_Adser300x250')){
                height_SpLogo=document.getElementById('MET_sponserLogo').offsetHeight;
                if (ff || NS){
                    margincount=margincount+16
                }
                else {
                    margincount=margincount+8
                }
            }
            if(!(isgE('MET_sponserLogo')) && !(isgE('MET_Adser300x250'))){
            margincount=margincount-16
            }
        var variableHeight = height_SpLogo+height_adser+margincount;
            if (height_MMhalf>=variableHeight)
            {
                
                var Margin_TowerAd= -(height_MMhalf-variableHeight);
                    if(document.getElementById('MET_RightTowerAd_float2')){
                        document.getElementById('MET_RightTowerAd_float2').style.marginTop = Margin_TowerAd+"px";
                    }
                    else if(document.getElementById('MET_RightTowerAd_float1')){
                        document.getElementById('MET_RightTowerAd_float1').style.marginTop = Margin_TowerAd+"px";
                    }
            }
            
            if(document.getElementById('MET_RightTowerAd_float2')){
                document.getElementById('MET_RightTowerAd_float2').style.visibility = "visible";
            }
            else if(document.getElementById('MET_RightTowerAd_float1')){
                document.getElementById('MET_RightTowerAd_float1').style.visibility = "visible";
            }

    }   
    if(isgE('MET_MediaModule_Full')){   
        var height_SpLogo=document.getElementById('MET_sponserLogo_MMFull').offsetHeight;
        var height_MMfull=document.getElementById('MET_MediaModule_Full').offsetHeight;
        var margintop_SLogo;
        if(isgE('sponsorbyText')) {
            margintop_SLogo = 34 
        }
        else {
            margintop_SLogo = 24
        }
        var Top_SponsorLogo = (height_MMfull-margintop_SLogo);
        if (is.isIE){
            document.getElementById('MET_sponserLogo_MMFull').style.marginTop = -(Top_SponsorLogo+7)+"px";
            document.getElementById('MET_sponserLogo_MMFull').style.marginBottom = (Top_SponsorLogo-7)+"px";
        }
        else{
            document.getElementById('MET_sponserLogo_MMFull').style.position = "relative";
            document.getElementById('MET_sponserLogo_MMFull').style.marginTop = -(Top_SponsorLogo)+"px";
            document.getElementById('MET_sponserLogo_MMFull').style.marginBottom = (Top_SponsorLogo)+"px";
        }   
        document.getElementById('MET_sponserLogo_MMFull').style.visibility = "visible";

    
    }   
}

function addLoadEvent(func) { // move it to global common
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
            window.onload = function() {
            oldonload();
            func();
        }
    }
}
/*these js functions are to load leadpromo,towerAd,feature store on click of PG frd/back button as well as normal*/

var LeadPromoMN = '';
function refreshLeadPromo(){
     if(LeadPromoMN != '') {
       var f = document.getElementById('leadpromo_pipe');
       var fDoc;
           if(f.contentDocument){ //NS6
            fDoc = f.contentDocument;
            fDoc.location.replace( '/leadpromo.html?num='+LeadPromoMN);
           } else if(f.contentWindow){ //IE 5.5+
            fDoc = f.contentWindow.document;
            fDoc.location.replace('/leadpromo.html?num='+LeadPromoMN);
           } else{ //NN7
            var urlStr =  '/leadpromo.html?num='+LeadPromoMN;
        f.src = urlStr;
           }
   }
}
var TowerMN= '';
function refreshTower(){
     if(TowerMN != '') {
       var f = document.getElementById('tower_pipe');
       var fDoc;
           if(f.contentDocument){ //NS6
            fDoc = f.contentDocument;
            fDoc.location.replace('/tower.html?num='+TowerMN);
           } else if(f.contentWindow){ //IE 5.5+
            fDoc = f.contentWindow.document;
            fDoc.location.replace('/tower.html?num='+TowerMN);
           } else{ //NN7
            var urlStr =  '/tower.html?num='+TowerMN;
        f.src = urlStr;
           }
   }
}

function refreshFavStores(){
       var f = document.getElementById('favoriteStore');
	if(f){       var fDoc;
           if(f.contentDocument){ //NS6
            fDoc = f.contentDocument;
            fDoc.location.reload();
           } else if(f.contentWindow){ //IE 5.5+
            fDoc = f.contentWindow.document;
            fDoc.location.reload();;
           } else{ //NN7
		f.src = f.src ;           }
	}}

function isBlock(elementName) {
	if($(elementName) && $(elementName).style &&  $(elementName).style.display== 'block') return true;
	return false;
}

function setBlock(elementName) {
	if($(elementName) && $(elementName).style) $(elementName).style.display = 'block';
}

function isNone(elementName) {
	if($(elementName) && $(elementName).style &&  $(elementName).style.display== 'none') return true;
	return false;
}

function setNone(elementName) {
	if($(elementName) && $(elementName).style) $(elementName).style.display = 'none';
}