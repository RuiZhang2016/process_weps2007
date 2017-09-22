// jewelry learning center glossary popup window
function NewGlossary(mypage, myname, w, h) {
    // need to know which page opened this popup, so we can
    // take user back to opening page
    if(mypage.indexOf("?") == -1) {
        mypage += "?";
        mypage += ("refURL=" + location.href);
    }
    else mypage += ("&refURL=" + location.href);

    var winl = (screen.width - w) / 5;
    var wint = (screen.height - h) / 5;
    winprops = 'height=' + h + ',width=' + w + ',top=' + wint + ',left=' +
        winl+', toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no';
    win = window.open(mypage, myname, winprops);
    if (parseInt(navigator.appVersion) >= 4) {
        win.window.focus();
    }
}

// photo_opener now opens <file> instead of just an image.  If <file> is empty, then it will open /catalog/detail.gsp by default.
function photo_opener(url, file, iIndex,isVariant,corpCard,type) {
   var width = 570;
   var height = 670;

    if (file == "" || file == "/catalog/detail_swatch.gsp" || file == "/catalog/detail.gsp") {
          file = "/catalog/detail.gsp";

         if(type == 2) {
          width = 740;
          height = 540;
        }
        else {
           width = 620;
           height = 735;
         }
    }

    if(isVariant == null || isVariant == "") {
      isVariant = "false" ;
    }

    if(iIndex == null) {
      iIndex = "1" ;
    }

    if(corpCard == null || corpCard == "") {
      corpCard = "false" ;
    }

  url = location.protocol + "//" + location.hostname
              + file + "?image=" + url + "&iIndex=" + iIndex + "&isVariant=" + isVariant + "&corpCard=" + corpCard + "&type=" + type  ;

  if((navigator.appName.indexOf('Netscape') > -1) && (parseInt(navigator.appVersion) < 4 )) {
      // for Mac Netscape 3.0
      var photowin = window.open(url,"photo","width=" + width + ",height=" + height + ",toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");

      if (photowin.focus)photowin.focus();
      } else {
          var photowin = window.open(url,"photo","width=" + width + ",height=" + height + ",toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
          if (photowin.focus)photowin.focus();
      }
  }

  function openShipCalcConfig(){
    var scalc=open("/catalog/ship_calc_popup.gsp",
               "scalc",
               "width=300,height=250,toolbar=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,directories=0");
  }

    function openSatelliteTV(){
    var scalc=open("/include/satelliteTV_popup.gsp",
               "scalc",
               "width=550,height=500,toolbar=0,location=0,menubar=0,resizable=yes,scrollbars=0,status=0,directories=0");
  }

  function subMitCalc(){
//    if( document.forms[].length > 2 ){
 //     var actionString = "/catalog/ship_calc_popup.gsp";
//      actionString += "?ship_zip=";
//      actionString += document.forms[0].elements[0].value;
//      actionString += "&method=";
//      actionString += document.forms[0].elements[1].options[document.forms[0].elements[1].selectedIndex].value;
//      actionString += "&Submit=continue";
//      document.forms[0].action = actionString;
//      document.forms[0].submit();
      // Moved this next line to ship_calc_popup.gsp to insure
      // that the session data gets stored for the reload
      //opener.location.reload();
//    }
  }

function ab_delete_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1)  && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
  // for Mac Netscape 3.0
    var abdeletewin = window.open(url,"abdelete","width=483,height=350,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (abdeletewin.focus)abdeletewin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
  // for PC 3.0 browsers
    var abdeletewin = window.open(url,"abdelete","width=438,height=425,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (abdeletewin.focus)abdeletewin.focus();
  } else {
    var abdeletewin = window.open(url,"abdelete","width=438,height=340,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (abdeletewin.focus)abdeletewin.focus();
  }
}

function gr_printpage_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1)  && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
  // for Mac Netscape 3.0
    var grOpenerwin = window.open(url,"GiftRegistry","width=595,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if (grOpenerwin.focus)grOpenerwin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
  // for PC 3.0 browsers
    var grOpenerwin = window.open(url,"GiftRegistry","width=595,,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if (grOpenerwin.focus)grOpenerwin.focus();
  } else {
    var grOpenerwin = window.open(url,"GiftRegistry","width=595,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if (grOpenerwin.focus)grOpenerwin.focus();
  }
}

function gr_cancel_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1)  && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
  // for Mac Netscape 3.0
    var grCancelwin = window.open(url,"grCancel","width=350,height=300,toolbar=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=yes");
    if (abdeletewin.focus)abdeletewin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
  // for PC 3.0 browsers
    var grCancelwin = window.open(url,"grCancel","width=350,height=300,toolbar=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=yes");
    if (abdeletewin.focus)abdeletewin.focus();
  } else {
    var grCancelwin = window.open(url,"grCancel","width=350,height=300,toolbar=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=yes");
    if (abdeletewin.focus)abdeletewin.focus();
  }
}

function cc_delete_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
  // for Mac Netscape 3.0
    var ccdeletewin = window.open(url,"ccdelete","width=595,height=400,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (ccdeletewin.focus)ccdeletewin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
  // for PC 3.0 browsers
    var ccdeletewin = window.open(url,"ccdelete","width=580,height=400,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (ccdeletewin.focus)ccdeletewin.focus();
  } else {
    var ccdeletewin = window.open(url,"ccdelete","width=580,height=400,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (ccdeletewin.focus)ccdeletewin.focus();
  }
}

function sl_delete_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var sldeletewin = window.open(url,"sldelete","width=595,height=270,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (sldeletewin.focus)sldeletewin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var sldeletewin = window.open(url,"sldelete","width=580,height=325,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (sldeletewin.focus)sldeletewin.focus();
  } else {
    var sldeletewin = window.open(url,"sldelete","width=580,height=275,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (sldeletewin.focus)sldeletewin.focus();
  }
}
function co_cancel_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var cocancelwin = window.open(url,"cocancel","width=595,height=270,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (cocancelwin.focus)cocancelwin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var cocancelwin = window.open(url,"cocancel","width=580,height=325,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (cocancelwin.focus)cocancelwin.focus();
  } else {
    var cocancelwin = window.open(url,"cocancel","width=580,height=275,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (cocancelwin.focus)cocancelwin.focus();
  }
}

function ph_delete_item_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var deleteitemconf = window.open(url,"phdeleteitem","width=550,height=390,scrollbars=yes,resizable=yes");
    if (deleteitemconf.focus)deleteitemconf.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var deleteitemconf = window.open(url,"phdeleteitem","width=550,height=390,scrollbars=yes,resizable=yes");
    if (deleteitemconf.focus)deleteitemconf.focus();
  } else {
    var deleteitemconf = window.open(url,"phdeleteitem","width=550,height=390,scrollbars=yes,resizable=yes");
    if (deleteitemconf.focus)deleteitemconf.focus();
  }
}

function ph_delete_order_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var deleteorderconf = window.open(url,"phdeleteorder","width=550,height=390,scrollbars=yes,resizable=yes");
    if (deleteorderconf.focus)deleteorderconf.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var deleteorderconf = window.open(url,"phdeleteorder","width=550,height=390,scrollbars=yes,resizable=yes");
    if (deleteorderconf.focus)deleteorderconf.focus();
  } else {
    var deleteorderconf = window.open(url,"phdeleteorder","width=550,height=390,scrollbars=yes,resizable=yes");
    if (deleteorderconf.focus)deleteorderconf.focus();
  }
}

function ship_calc_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var shipcalc = window.open(url,"myshipcalc","width=500,height=325,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes");
    if (shipcalc.focus)shipcalc.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var shipcalc = window.open(url,"myshipcalc","width=500,height=325,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes");
    if (shipcalc.focus)shipcalc.focus();
  } else {
    var shipcalc = window.open(url,"myshipcalc","width=500,height=325,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=no,resizable=yes");
    if (shipcalc.focus)shipcalc.focus();
  }
}

// gift_opener opens checkout/giftwrap_popup.gsp
function giftreg_opener(itemId, showGiftWrapImage) {
    url = "http://"+document.location.host+"/co/giftreg_popup.gsp?item_id="+itemId;
    var wHeight = (!showGiftWrapImage) ? (502-250) : 502;

    if((navigator.appName.indexOf('Netscape') > -1) && (parseInt(navigator.appVersion) < 4 )) {
  // for Mac Netscape 3.0
    var photowin = window.open(url,"photo","width=570,height="+wHeight+",toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (photowin.focus)photowin.focus();
  } else {
    var photowin = window.open(url,"photo","width=550,height="+wHeight+",toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
    if (photowin.focus)photowin.focus();
  }
}

// gift_opener opens checkout/giftwrap_popup.gsp
function giftwrap_opener(title, url) {
   url = "/co/giftwrap_popup.gsp?title=" + title + "&image=" + url;
  if((navigator.appName.indexOf('Netscape') > -1) && (parseInt(navigator.appVersion) < 4 )) {
  // for Mac Netscape 3.0
    var photowin = window.open(url,"photo","width=300,height=340,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (photowin.focus)photowin.focus();
  } else {
    var photowin = window.open(url,"photo","width=280,height=320,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
    if (photowin.focus)photowin.focus();
  }
}

// delivery_opener opens checkout/co_delevery_popup.gsp
function NewWindow(mypage, myname, w, h, resizable) {
var winl = (screen.width - w) / 5;
var wint = (screen.height - h) / 5;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+(resizable?',scrollbars=yes,resizable=yes':',Noresizable');
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

function popupHelp(url, name, w, h){
  var winl = (screen.width - w) / 5;
  var wint = (screen.height - h) / 5;
  winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=yes,resizable=yes';
  win = window.open(url, name, winprops)
  if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

function cs_cancel_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var cancelConf = window.open(url,"CSCancel","width=445,height=495,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes");
    if (cancelConf.focus) cancelConf.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var cancelConf = window.open(url,"CSCancel","width=445,height=495,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes");
    if (cancelConf.focus) cancelConf.focus();
  } else {
    var cancelConf = window.open(url,"CSCancel","width=445,height=495,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=no,resizable=yes");
    if (cancelConf.focus) cancelConf.focus();
  }
}

function realplayer_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var replayWin = window.open(url,"replayWindow","width=550,height=450,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes");
    if (replayWin.focus) replayWin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var replayWin = window.open(url,"replayWindow","width=550,height=450,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes");
    if (replayWin.focus) replayWin.focus();
  } else {
    var replayWin = window.open(url,"replayWindow","width=550,height=450,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=no,resizable=yes");
    if (replayWin.focus) replayWin.focus();
  }
}

function email_link_opener(url) {
    // need to know which page opened this popup, so we can
    // take user back to opening page
    if(url.indexOf("?") == -1) {
        url += "?";
        url += ("refURL=" + location.href);
    }
    else url += ("&refURL=" + location.href);

  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var emailLinkWin = window.open(url,"emailLinkWindow","width=585,height=450,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no");
    if (emailLinkWin.focus) emailLinkWin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var emailLinkWin = window.open(url,"emailLinkWindow","width=585,height=450,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no");
    if (replayWin.focus) replayWin.focus();
  } else {
    var emailLinkWin = window.open(url,"emailLinkWindow","width=585,height=450,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
    if (emailLinkWin.focus) emailLinkWin.focus();
  }
}

// doSubmit function prevents double-submits of forms.
// Usgae: <form ... onSubmit="return doSubmit()">
var submitted = false;
function doSubmit()
{
  if (!submitted)
  {
    submitted = true;
    return true;
  }
  else
  {
    return false;
  }
}
// Javascript browser back function
function go_back()
{
  history.back();
  setTimeout("location.href;",1000);
}

//function for onClick() of radio button in co_ship
//which will set the correct button
//user chose and re-submit the form
function setShippingMethod(fieldname,pos){

  for( i=0; i<document.forms[ 0 ][fieldname].length; i++ ){
    if( document.forms[ 0 ][fieldname][ i ].checked == true ){
        document.forms[ 0 ][fieldname][ i ].checked = false;
    }
  }
  document.forms[0][fieldname].value=pos;
  //set the correct checked value
  for( i=0; i<document.forms[ 0 ][fieldname].length; i++ ){
    if( document.forms[ 0 ][fieldname][ i ].value == pos ){
      document.forms[0][fieldname][ i ].checked = true;
    }
  }
  document.forms[0].submit();
}

function vbv_auth_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var vbvauthwin = window.open(url,"vbvauth","width=500,height=500,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (vbvauthwin.focus)vbvauthwin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var vbvauthwin = window.open(url,"vbvauth","width=500,height=500,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (vbvauthwin.focus)vbvauthwin.focus();
  } else {
    var vbvauthwin = window.open(url,"vbvauth","width=500,height=500,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
    if (vbvauthwin.focus)vbvauthwin.focus();
  }
}

function item_full_desc_opener(url) {
  if((navigator.appName.indexOf('Netscape') > -1) && (navigator.userAgent.indexOf('Mac') > -1) && (parseInt(navigator.appVersion) < 4 )) {
    // for Mac Netscape 3.0
    var ifdwin = window.open(url,"ifd","width=550,height=500,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if (idfwin.focus)ifdwin.focus();
  } else if ((parseInt(navigator.appVersion) < 4 ) && (navigator.userAgent.indexOf('Win') > -1)) {
    // for PC 3.0 browsers
    var ifdwin = window.open(url,"ifd","width=550,height=500,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if (ifdwin.focus)ifdwin.focus();
  } else {
    var ifdwin = window.open(url,"ifd","width=550,height=500,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if (ifdwin.focus)ifdwin.focus();
  }
}

function tiresHelpSize_opener() {
    window.open("/catalog/tires_help_size.gsp","tires_help_size","width=530,height=545");
}

function shoppingCardSample(url) {
window.open("/shopping_card/sample_card.html","sample_card","width=535,height=600,alwaysRaised=yes,toolbar=no,directories=no,status=yes,scrollbars=yes,location=no,menubar=no,resizable=yes,top=yes")
}

//
// Function for sticky checkout popup windows
//
function reloadable_checkout_popup_opener( url )
{
  var windowName = "reloadableCheckoutPopup";
  var windowObj  = window.open( "", windowName, "width=370,height=320,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes" );
  windowObj.location.href = url;
  if ( windowObj.focus )
    windowObj.focus();
}

//
// Funtion to be used by Photo help pages
// Submits to the current page with the arguments appended
//

function switchURL(args) {
  var curURL = window.location.protocol+"//"+ window.location.hostname + window.location.pathname;
  var newURL = curURL + "?" + args;
  window.location = newURL;
}

function extSwitchURL(url) {
  window.location = url;
}

function openPrivacyPolicy(url) {
    var privacyWindow = window.open(url,"privacyPolicy","width=800,height=600,toolbar=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes");
    if (privacyWindow.focus) privacyWindow.focus();
}

function openGardenPopup(productID) {
    var url = "/garden/garden_popup.gsp?dept=5428&product_id=" + productID;
    var gardenWindow = window.open(url, "gardenPopup", "width=550,height=600,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if(gardenWindow.focus) gardenWindow.focus();
}

function findElement(name) {
    var element;
    if (document.getElementById) {
        element=document.getElementById(name);
    } else if (document.all) {
        element=document.all[name];
    }
    return element;
}

function openVeriSign(url) {
    var VeriSignWindow = window.open(url,"VeriSign","width=535,height=415,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
    if (VeriSignWindow.focus) VeriSignWindow.focus();
}

//portable dhtml text setter
function dominnerText(node, text){
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
    node.appendChild(document.createTextNode(text));
}

// custom cd functions and variables
var selectedBox = "";
var bigImage = "";

function setSelectedBox(box, bigImgUrl) {
  selectedBox = box;
  bigImage = bigImgUrl;
}

function msOver(box)
{
  if(selectedBox != box)
  {
    box.style.borderColor='#ffcc69';
  }
}

function msOut(box)
{
  if(selectedBox != box)
  {
    box.style.borderColor='#fffae0';
  }

}

function msDown(optionList,box,image,designId,bigImgUrl)
{
  resetBoxes(optionList);
  box.style.borderColor='#fca31d';
  selectedBox = box;
  bigImage = bigImgUrl;
  cdForm.designId.value=designId;
  cdForm.cdprevimg.src=image;
}

function resetBoxes(optionList)
{
  for(option in optionList) {
    optionList[option].style.borderColor='#fffae0';
  }
}

function selectCover(anchorName) {
  anchorName.style.borderColor='#fca31d';
}

function showLargerCoverImage() {
  popWindow(bigImage,'Packaging',500,500)
}

function submitOnEnter(e){
  var charCode;

  if(e && e.which){
    e = e;
    charCode = e.which;
  } else {
    e = event;
    charCode = e.keyCode;
  }

  if(charCode == 13){
    cdForm.continue_btn.click();
    return true;
  } else {
    return false;
  }

}