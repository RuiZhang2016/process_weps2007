// Created by pli
// Modified by $Author: schang $
// Last Modified: $DateTime: 2006/08/09 18:46:12 $
// version $Revision: #3 $

// This file contains javascript code for discovery component
// to perform actions based on user activity.

//*************************************************************************************//
// General actions for both artist and album Discover flash components
//*************************************************************************************//
// function goSend(itemId)                                         ->  Forwards to Tell a Friend form page
// function goGenre(genreId)                                     ->  Forwards to genre page
// function goAlbum(albumId)                                      ->  Forwards to album page
// function goArtist(artistId)                                      ->  Forwards to artist page
// function previewAudio(trackURL)                          ->  Launches preview window and plays clip
// function getProductButtonState(albumId)             ->  Determines button state on main album part of discovery browser
// function setProductButtonState(albumId)             ->  Sets button state variable to pass to flash on main album part of discovery browser
// function goAddToCart(albumId)                             ->  Forwards to AddContentToCart flow; silently adds to cart 
// function goBuy(albumId)                                         ->  Forwards to purchase flow
// function goPage(pageId)                                         ->  Forwards to a particular page
// function doAction(action, item)                              ->  Discovery component java hook (wrapper function) for other actions


// Tell a Friend field on flash discovery browser that links to Tell a Friend form page to send this album to a friend
// (May need two different versions of this if the ID is indeterminate)
// Edited by:  schang
// Modified:  021506
function goSend(itemId) {
  if (itemId != null) {
    var id = new String(itemId);
    window.location = g_appServerUrl + "TellFriendAlbum.flow?selectedExternalKey=" + id;
  }
}

// Genre field on flash discovery browser that links to genre page
// Edited by:  schang
// Modified:  022306
function goGenre(genreId) {
  window.location = genreLink(genreId);
}

// Label field on flash discovery browser that links to atomz label page
// Edited by:  schang
// Modified:  072606
function goLabel(labelId) {
  return labelHome(labelId);
}

// Right arrow icon on flash discovery browser that links to album page
// Edited by:  schang
// Modified:  022706
// Deprecated:  072506; no longer called by discovery functions, page urls in xml are returned directly to the flash
/*function goAlbum(albumId) {
  //alert("inside goAlbum");
  window.location = albumLink(albumId);
}*/

// Right arrow icon on flash discovery browser that links to artist page
// Edited by:  schang
// Modified:  022306
// Deprecated:  072506; no longer called by discovery functions, page urls in xml are returned directly to the flash
/*function goArtist(artistId) {
  window.location = artistLink(artistId);
}*/

// Speaker icon on discovery browser; invokes browser control to play preview
// Edited by:  schang
// Modified:  022106
function previewAudio(trackURL) {
  if (trackURL != null) {
    var url = new String(trackURL);
    playPreview(url);
  }
}

// **
// Album discovery actions
// **

// Determines button state on main album part of discovery browser
// Edited by:  schang
// Modified:  022806
function getProductButtonState(albumId) {
  var state = "buy";
  if (isExpressCheckoutEnabled()) return state;
  else {
    if (!isItInCookie(albumId)) state = "add";
    else state = "added";
    return state;
  }
}

// Sets button state variable to pass to flash on main album part of discovery browser
// Edited by:  schang
// Modified:  022806
function setProductButtonState(albumId) {
 	//alert("setProductButtonState("+albumId+")");
  if (albumId != null) document.discoverAlbum.SetVariable("buttonState", getProductButtonState(albumId));
}

// Add to cart button on main album part of discovery browser; forwards to AddContentToCart flow; silently adds to cart 
// Edited by:  schang, rporras
// Modified:  022306, 080806
function goAddToCart(albumId) {
	//alert("goAddToCart("+albumId+")");
  if (albumId != null) {
    s_events="scAdd";
    var ssver = readCookie('ssVersion').substring(0,6).replace(/\./gi,'');
    
    var contentRequestUrl = g_appServerUrl + "ContentRequest.flow?";
    var url = g_appServerUrl + "AddContentToCart.action?flow=Static&origin=StaticPage";
    
    if(isConnectPlayer == true) {
      if (ssver < 2200) {
          if (!readCookie('11FNotification')) {
              setCookie('11FNotification','true',null, '/', g_cookieDomain,false);
              MM_openBrWindow(g_notificationsDir + '11FNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
          }
      }
       
      if (!isItInCookie(albumId)) {
        if (document.AddToCartFrame) {
          var frm = document.AddToCartForm;
          frm.selectedExternalKey.value = albumId;
          frm.imageId.value = albumId;
          //document.discoverAlbum.SetVariable("buttonState", "added");
          frm.submit();
        }
        else {
          url += "&selectedExternalKey=" + albumId;
          xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          if (xmlHttpRequest != null) {
            xmlHttpRequest.onreadystatechange = onAddToCartResponse;
            xmlHttpRequest.open("GET", url, true);
            //document.discoverAlbum.SetVariable("buttonState", "added");
            xmlHttpRequest.send();
          }
        }
      }
    }
    else{
      if(ssver >= 2200){
        if (!isItInCookie(albumId)) {
          var tempURL = contentRequestUrl + 'actionType=addToCart&selectedExternalKey='  + albumId + '&REF=' + escape(smartUrlRefCalc(ssver));
          document.location = g_appServerUrl + 'SmartURL.xdmd?url=' + escape(tempURL) + '&cookieName=ssVersion';
        }
      }else{
        MM_openBrWindow(g_notificationsDir + '11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
      }
    }
  }
}

// Buy button on main album part of discovery browser; forwards to purchase flow
// Edited by:  schang, rporras
// Modified:  022806, 080806
function goBuy(albumId) {
 	//alert("goBuy("+albumId+")");
  var url = g_appServerUrl + "ContentRequest.flow?";
  var ssver = readCookie('ssVersion').substring(0,6).replace(/\./gi,'');
  
  if (albumId != null) {
    if(isConnectPlayer == true) {
      if (ssver < 2200) {
        if (!readCookie('11FNotification')) {
            setCookie('11FNotification','true',null, '/', g_cookieDomain,false);
            MM_openBrWindow(g_notificationsDir + '11FNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
        }
      }
        
      document.location = url + 'actionType=checkout&selectedExternalKey=' + albumId + '&REF='+ escape(window.location);
    }
    else{
      if(ssver >= 2200){
        var tempURL = url + 'actionType=checkout&selectedExternalKey=' + albumId + '&REF='+ escape(smartUrlRefCalc(ssver));
        document.location = g_appServerUrl + 'SmartURL.xdmd?url=' + escape(tempURL) + '&cookieName=ssVersion';
      }else{
        MM_openBrWindow(g_notificationsDir + '11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
      }
    }
  }
}

// Generic page link in a flash component that forwards to a particular page
// Ex:  Top 100 Tracks link on Top Ten flash browser that links to Top 100 Tracks page
// Edited by:  schang
// Created:  062706
// Modified:  080906, commented (debug) alerts
function goPage(url) {
  //alert("goPage(" + url + ")");
  if (url != null) window.location = url;
}

// **
// Discovery component java hook (wrapper function) for other actions
// **
function doAction(action, item) {
  try {
    return eval(action + '(' + '"' + item + '"' + ')');
  }	catch (e) {
    //alert("doAction("+action+", "+item+")");
    var itemString = new String(item);
    //alert(action+"("+itemString+")");
  }
}

// Helper function to determine which product button type gets displayed in the flash; based on cookie values
// Edited by:  schang
// Modified:  022106
function getFlashProductButton(albumId) {
  if (isExpressCheckoutEnabled) {
    document.write("buy");
  } else {
    if (!isItInCookie(albumId)) document.write("add");
    else document.write("added");
  }
}
