function writeFlash(DivID,richMediaUrl,richMediaWidth,richMediaHeight,richMediaID) {
  var d = document.getElementById(DivID);
  d.innerHTML =
  '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+richMediaWidth+'" height="'+richMediaHeight+'" id="'+richMediaID+'">'+
  '<param name="movie" value="'+richMediaUrl+'">'+
  '<param name="quality" value="high">'+
  '<param name="menu" value="false">'+
  '<param name="wmode" value="transparent">'+
  '<param name="allowScriptAccess" value="sameDomain">'+
  '<embed src="'+richMediaUrl+'" quality="high" width="'+richMediaWidth+'" height="'+richMediaHeight+'" name="'+richMediaID+'" type="application/x-shockwave-flash" menu="false" wmode="transparent" allowScriptAccess="sameDomain">'+
  '<\/embed>'+
  '<\/object>';
}

function writeWMP(DivID,mediaUrl) {
  var d = document.getElementById(DivID);
  d.innerHTML =
  '<object classid="clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab# Version=5,1,52,701" standby="Loading Microsoft Windows&reg; Media Player components..." type="application/x-oleobject" width="515" height="45">'+
  ((mediaUrl == null) ? '' : ('<param name="fileName" value="'+mediaUrl+'">'))+
  '<param name="animationatStart" value="1">'+
  '<param name="transparentatStart" value="1">'+
  '<param name="autoStart" value="1">'+
  '<param name="showControls" value="1">'+
  '<param name="Volume" value="-300">'+
  '<embed type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" '+
  ((mediaUrl == null) ? '' : (' src="'+mediaUrl+'" '))+
  'width="515" height="45" autostart="1" showcontrols="1" volume="-300">'+
  '<\/embed>'+
  '<\/object>';
}

function openOverlay(itemClassID,overlayWidth,overlayHeight) {

   //if an item is not Media [ Book, Music, Video Game and Movie ] or Apparel .. It falls back to Apparel DIV whose Class ID is 46 ]
    if ( itemClassID != 2 && itemClassID != 3 && itemClassID != 4 && itemClassID != 22 && itemClassID != 50 && itemClassID != 51 )  itemClassID=46;

    // Item Class ID 22, 50 and 51 all are Video Game classes.
    if ( itemClassID == 22 ||  itemClassID == 50 || itemClassID == 51 )  itemClassID = 22;

  if (typeof(window['oldItemClassID']) != "undefined" ) {
    closeOverlay(oldItemClassID);
    oldItemClassID = itemClassID;
  }
  else {
    oldItemClassID = itemClassID;
  }

  var version=0
  if (navigator.appVersion.indexOf("MSIE")!=-1){
    temp=navigator.appVersion.split("MSIE")
    version=parseFloat(temp[1])
  }
  var ie5 = document.all;
  var x,y,newHeight,frameWidth,frameHeight,xOffset,yOffset;

  /*
    Book: 3
    Music: 4
    VIDEO GAME: 22, 51, 50
    Movie: 2
    APPAREL: 46
 */

  var d = document.getElementById('ProductQuickviewOverlay_'+itemClassID);
  var Body = document.getElementById('ProductQuickviewOverlayBody_'+itemClassID);
  var BtmLeft = document.getElementById('ProductQuickviewOverlayBtmLeft_'+itemClassID);
  var BtmRight = document.getElementById('ProductQuickviewOverlayBtmRight_'+itemClassID);
  var SelectHide = document.getElementsByTagName('select');
  var SelectShow = d.getElementsByTagName('select');
  // Get the frame width and height
  if (self.innerHeight) { // all except Explorer

    frameWidth = self.innerWidth;
    frameHeight = self.innerHeight;

   } // Explorer 6 Strict
  else if (document.documentElement && document.documentElement.clientHeight) {
   
    frameWidth = document.documentElement.clientWidth;
    frameHeight = document.documentElement.clientHeight;
  } // all other IE versions
  else if (document.body) {
    frameWidth = document.body.clientWidth;
    frameHeight = document.body.clientHeight;
  }

  // Get the page offsetX and page offsetY for scroll
  if (self.pageYOffset) // all except Explorer
  {
        xOffset = self.pageXOffset;
        yOffset = self.pageYOffset;
  }
  else if (document.documentElement && document.documentElement.scrollTop)
  {
        // Explorer 6 Strict
        xOffset = document.documentElement.scrollLeft;
        yOffset = document.documentElement.scrollTop;
  }
  else if (document.body) // all other Explorers
  {
        xOffset = document.body.scrollLeft;
        yOffset = document.body.scrollTop;
  }
  if (ie5 && (version<7)) frameWidth -= document.body.offsetLeft;
  // Get Center X and Y positions for the overlay based on input Width and Height
  x = eval(frameWidth/2 + xOffset-(overlayWidth+5)/2);
  y = eval(frameHeight/2 + yOffset-(overlayHeight+5)/2);

  // If the value is less than 5 pixels set to 5
  if (x < 5) x = 5;
  if (y < 5) y = 5;

  if (ie5) {
    for (var counter=0; counter<SelectHide.length; counter++) {
      SelectHide[counter].style.visibility = 'hidden';
    }
    for (var counter=0; counter<SelectShow.length; counter++) {
      SelectShow[counter].style.visibility = 'visible';
    }
  }

  d.style.display = '';

  d.style.top = y+'px';
  d.style.left = x+'px';

}

function closeOverlay(itemClassID) {
  var ie5 = document.all;
  var d = document.getElementById('ProductQuickviewOverlay_'+itemClassID);
  var SelectList = document.getElementsByTagName('select');
  if (ie5) {
    for (var counter=0; counter<SelectList.length; counter++) {
      SelectList[counter].style.visibility = 'visible'
    }
  }
  d.style.display = 'none';
}

function mainImageChange(baseItemId,newHeroImage) {
  document.getElementById('mainImage_'+baseItemId).src = newHeroImage;
}

function enableColorsOverlay(baseItemId) {

  var itemCount = eval('itemIdArray_'+baseItemId+'.length');
  for (var i = 0; i < itemCount; i++) {
    var colorPosition = eval('colorPosition_'+baseItemId+'[colorsArray_'+baseItemId+'[i]]');
    var colorValue = eval('colorsArray_'+baseItemId+'[i]');
    var sizeValue = eval('sizesArray_'+baseItemId+'[i]');
    var inStockValue = eval('inStockArray_'+baseItemId+'[i]');
    var borderActiveId = 'borderActive_'+baseItemId+'_'+colorPosition;
    var colorImageId = 'colorImage_'+baseItemId+'_'+colorPosition;
    if (sizeValue == document.getElementById('sizeOptions_'+baseItemId).value) {
      if (inStockValue == 'Y') {
        document.getElementById(borderActiveId).style.borderStyle = 'solid';
        document.getElementById(colorImageId).style.cursor = 'pointer';
      }
      else {
        if (document.getElementById(borderActiveId).style.borderStyle.match('solid')) {
          if (document.getElementById('colorName_'+baseItemId).innerHTML == colorValue) {
            document.getElementById('colorName_'+baseItemId).innerHTML = '(none selected)';
          }
        }
        document.getElementById(borderActiveId).style.borderStyle = 'dotted';
        document.getElementById(colorImageId).style.cursor = 'not-allowed';
        document.getElementById('borderSelect_'+baseItemId+'_'+colorPosition).style.borderColor='#fff';
      }
    }
  }

}

function borderChangeOverlay(baseItemId,nameDisplay,colorSequence,maximumColors) {

  var itemCount = eval('itemIdArray_'+baseItemId+'.length');
  if (document.getElementById('borderActive_'+baseItemId+'_'+colorSequence).style.borderStyle.match('solid')) {
    document.getElementById('borderSelect_'+baseItemId+'_'+colorSequence).style.borderColor = '#000';
    //document.getElementById('colorName_'+baseItemId).innerHTML = nameDisplay;
    for (var i = 0; i < itemCount; i++) {
      var itemIdValue = eval('itemIdArray_'+baseItemId+'[i]');
      var colorValue = eval('colorsArray_'+baseItemId+'[i]');
      var sizeValue = eval('sizesArray_'+baseItemId+'[i]');
      if (document.getElementById('sizeOptions_'+baseItemId)) {
        if ((sizeValue == document.getElementById('sizeOptions_'+baseItemId).value) && (colorValue == nameDisplay)) {
          eval('selectedItemId_'+baseItemId+'=itemIdValue');
          eval('newHeroImage = heroImageArray_'+baseItemId+'[itemIdValue]');
          if (document.images && (newHeroImage != '')) {
            document.getElementById('mainImage_'+baseItemId).src = newHeroImage;
          }
        }
      }
      else {
        if (colorValue == nameDisplay) {
          eval('selectedItemId_'+baseItemId+'=itemIdValue');
        }
      }
    }
    for (i = 0; i <= maximumColors; i++) {
      if (i != colorSequence) {
        document.getElementById('borderSelect_'+baseItemId+'_'+i).style.borderColor='#fff';
      }
    }
  }

}

function popWindow(url, name, width, height) {
  var x = (screen.width - width)/2;
  var y = (screen.height - height)/2;
    var opts = 'height=' + height + ',width=' + width + ",screenX=" + x + ",left=" + x + ",screenY=" + y + ",top=" + y + ',location=no,scrollbars=yes,menubar=no,resizable=no,status=no,toolbar=no';

    var newWindow = window.open(url, name, opts);
    newWindow.focus();
}

function popupHelp(url, name, w, h){
  var winl = (screen.width - w) / 5;
  var wint = (screen.height - h) / 5;
  winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=yes,resizable=yes';
  win = window.open(url, name, winprops)
  if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}
