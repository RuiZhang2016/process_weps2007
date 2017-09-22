/*** 
*************************************
JavaScript functions musicstore.connect.com web site
Created by Stephanie Chang
Created on: 2006-05-01
Modified by $Author: dwu $
Last modified: $DateTime: 2006/11/07 15:00:01 $
version $Revision: #10 $
*************************************
**/

//*************************************************************************************//
// ATOMZ
//*************************************************************************************//
// function getLabelUrl(ownerId, ownerName, ownerPageUrl, productId)  -> Redirects the window to the corresponding label page
// function createGetProductButton(product_id, section_id, sellable, isTrack, subIDs) -> Writes the button of a product

//*************************************************************************************//
// COOKIES
//*************************************************************************************//
// function isAuthenticated()                                                                            ->  Gets authentication property
// function isIdentified()                                                                                  ->  Gets identified property
// function isExpressCheckoutEnabled()                                                          -> Gets "buy now" property
// function getPreferredGenre()                                                                       -> Get user's preferred genre
// function getAffiliate()                                                                                   ->  Get user's affiliate value  (best buy or some other company)
// function isConfirmPurchaseOn()                                                                  -> Checks the user preference for the confimation popup before a purchase is complete

//*************************************************************************************//
// PRODUCT
//*************************************************************************************//
// function getProduct(productId, subIds, imageId)                                       -> Fetches the correct url for a product based on user state (download, add to cart, buy now)
// function onAddToCartResponse()                                                  -> This is the callback function of XMLHttpRequest to handle the response from 
// function processAddToCartResponse(msgId, prodId, imgId)                         -> To change button image or to popup an error msg dlg
// function setProductButton(productId, subIds, buttonId)                          ->  General function for setting the proper button image for a product
// function swapProductButton(productId, subIds, buttonId)                         ->  General function for swapping the image when the mouse is over
// function getBuyBtnAltText(imageId,productId)                                          -> Sets the ALT attribute of  an image depending on the state of the product (Track)
// function getBuyBtnAlbumAltText(imageId,productId)                                -> Sets the ALT attribute of  an image depending on the state of the product (Album)

//*************************************************************************************//
// MISCELANEOUS
//*************************************************************************************//
// function newImage(arg)                                                                                   -> Creates a new image object 
// function changeImages()                                                                                  -> Swaps the source value of an image or group of images. Takes a dinamic number of parameters which should always be a multiple of 2
// function purchasePlaylist()                                                                               -> Submits the shopping cart
// function displayGenreCrumb()                                                                          -> Set the breadcrumb to the current genre if on a genre page. (checks the URL)
// function highlightList()                                                                                      -> Sets the onmouseover/onmouseout events for table rows in the track list to enable mouse-driven highlighting 
// function highlight(objectId)                                                                             -> Highlights the track that was previously selected within the current track list
// function createRadioPlayLink(station_id, radioUrl, playUrl, imageUrl)       -> Writes a link for a radio station

/******************************************Functions related to AtomZ BEGIN*******************************/
/**
 * (AtomZ) Redirects the window to the corresponding label page
 * PARAM ownerId
 * PARAM ownerName
 * PARAM  ownerPageUrl  NOT USED, should be DEPRECATED
 * PARAM  productId         NOT USED, should be DEPRECATED
 */
function getLabelUrl(ownerId, ownerName, ownerPageUrl, productId) {
    labelHome(ownerName);
}

/**
 * (AtomZ) Writes the button of a product
 * PARAM  produc_id  String the id of the product
 * PARAM  section_id  In case the same product is in more than one place in the page the section id differentiates it
 * PARAM  sellable  'Y' or 'N' indicating if the product is purchasable or not
 * PARAM  isTrack  boolean true if the product is a track, otherwise, it is assumed to be an album or set
 * PARAM  subIDs   an array of subscription IDs or null if it is not applicable to subscriptions
 */
function createGetProductButton(productId, sectionId, sellable, isTrack, subIDs)
{
  var html = "";
  var imgId = "btnId" + sectionId + "_" + productId;
  if (sellable == 'Y') {
    var subArr = "null";
    var argstr = "'" + productId + "', " + subArr + ", '" + imgId + "'";
    
    var argstr2 = "'" + imgId + "', '" + productId + "'";
    var altText = "";
    if(isTrack){
      altText = "getBuyBtnAltText(" + argstr2 + ");"; 
    }else{
      altText = "getBuyBtnAlbumAltText(" + argstr2 + ");"; 
    }
    
    html = '<a href="javascript:getProduct(' + argstr + ');" ' +
           'onMouseOut="javascript:setProductButton(' + argstr + ');" ' +
           'onMouseOver="javascript:swapProductButton(' + argstr + ');' + altText + '">' + 
           '<img src="" onerror="setProductButton(' + argstr + ');" ' +
           'alt="add to cart" name="' + imgId + '" border="0" id="' + imgId + '"/></a>';
  }
  else {
    if (isTrack) {
      html = '<img src="/XSL/mb_us/images/c2/images/buttons/full_buttons/album_only_off.png" id="' + imgId + '"/>';
    }
    else {
      var viewSrc = "/XSL/mb_us/images/c2/images/buttons/full_buttons/view_on.png";
      html = '<a href="' + g_appServerUrl + 
             'ContentRedirect.action?flow=Static&node=ContentRedirect&type=album&selectedContent=' +
             productId + '" onMouseOut="JavaScript:document.images[\'' + imgId + "'].src='" + viewSrc +
             '\';" onMouseOver="JavaScript:document.images[\'' + imgId + "'].src='" +
             '/XSL/mb_us/images/c2/images/buttons/full_buttons/view_on.png\';"><img src="' + viewSrc + '" id="' + imgId + 
             '"/></a>';
    }
  }
  return html;
} 
/******************************************Functions related to AtomZ END*********************************/

/******************************************Functions related to cookies BEGIN******************************/
/**
 * (cookie) Gets Authentication property
 * RETURN boolean true if the user is authenticated, false otherwise
 */
function isAuthenticated() {
  return ((readCookie("Authed") != "") && (getUserStateValues()[0]== "AUTH"));
}

/**
 * (cookie) Gets Identified property
 * RETURN boolean true if the user is identified, false otherwise.
 */
function isIdentified() {
  return (readCookie("Identified") != "") ;
}

/**
 * (cookie) Gets buy now property
 * RETURN Returns boolean true if buy now is enabled, false otherwise
 */
function isExpressCheckoutEnabled() {
  var userState = getUserStateValues();
  if (userState.length > 1)
    return (userState[1] == 'yes');
  return false;
}

/**
 * (cookie) Gets user's preferred genre
 * Created by:  dhuang
 * Modified by: schang
 * Modified on: 031006
 * RETURN String value of the user's preferred genre
 */
function getPreferredGenre() {
  var userState = getUserStateValues();
  var authedValue = getAuthedValue();
  var identifiedValue = getIdentifiedValue();
  // check "Identified" and "Authed" cookies as well to determine user state, since "UserStateCookie" is unreliable during session timeouts or browser closes
  if ((authedValue != '' || identifiedValue != '') && userState[0] != 'ANON' && userState.length > 2)
    return userState[2];
  return '';
}

/**
 * (cookie) Gets user's affiliate field  (best buy or some other company)
 * Created by:  rporras
 * RETURN String value of the user's affiliate
 */
function getAffiliate() {
  var userState = getUserStateValues();
  var affiliation = userState[5];
  
  //Strip encoded space from the name
  if(affiliation)
    affiliation = affiliation.replace(/\+/gi, ' ');
    
  if (userState.length > 2)
    return affiliation;
}

/**
 * (cookie) Checks the user preference for the confimation popup before a purchase is complete
 * RETURN boolean true if the popup should be displayed, false if not. 
 */
function isConfirmPurchaseOn(){
  var userState = getUserStateValues();
  if (userState.length > 7) 
    return ([7] != 'false');
  return true;
}


/******************************************Functions related to cookies END********************************/

/******************************************Functions related to product button BEGIN************************/
/**
 * Sets the ALT attribute of  an image depending on the state of the product (Track)
 * PARAM  imageId  The element id of the image which alt text is being changed
 * PARAM   productId  The id of the product so it can be identified and get a state based on that
 * NOTE:  rporras 011706  Functions related to the buy button have currently changed to Product.
 * The name of these function should be changed accordingly
**/
function getBuyBtnAltText(imageId,productId) {
  var image = document.all[imageId];

  if (image != null) {
    if(isExpressCheckoutEnabled() ){
      image.alt = "Buy now";
    }
    else{
      if(isItInCookie(productId)) {
        //alert('cookie exists');
        image.alt = "Track in cart";
      }
      else {
        //alert('cookie does not exist');
       image.alt = "Add track to cart";
      }
    }
  }
}

/**
 * Sets the ALT attribute of  an image depending on the state of the product (Album)
 * PARAM  imageId  The element id of the image which alt text is being changed
 * PARAM   productId  The id of the product so it can be identified and get a state based on that
 * NOTE:  rporras 011706  Functions related to the buy button have currently changed to Product.
 * The name of these function should be changed accordingly
**/
function getBuyBtnAlbumAltText(imageId,productId) {
  var image = document.all[imageId];
  if (image != null) {
    if(isExpressCheckoutEnabled() ){
      image.alt = "Buy now";
    }
    else{
      if(isItInCookie(productId)) {
        //alert('cookie exists');
        image.alt = "Album in cart";
      }
      else {
        //alert('cookie does not exist');
        image.alt = "Add album to cart";
      }
    }
  }
}

// page level variable to store the add to cart items
var cartItemArray = new Array();

/**
 * (Product) Fetches the correct url for a product based on user state (download, add to cart, buy now)
 * PARAM  productId  String ID of product
 * PARAM  subIds  String  array of subscriptions IDs
 * PARAM  buttonId  String ID of button image
 */
function getProduct(productId, subIds, imageId) {
    var stateVals = getUserStateValues();
    var ssver = readCookie('ssVersion').substring(0,6).replace(/\./gi,'');

    //alert(productId + "\n" + subIds + "\n" + imageId);

    if (isInSubscription(subIds, stateVals)) {
        // send out DMF
        var param = "action=LICENSE&selectedExternalKey=" + productId;
        var subUrl = "http://" + document.location.hostname + g_appServerUrl + "SubscriptionDMF.flow";
        
        //alert(subUrl);
        
        window.external.SetDeliveryMetafile(subUrl, "POST", param, "INVISIBLE");
    } else {
        //var getProductUrl = "http://musicstore.connect.com" + g_appServerUrl + "ContentRequest.flow?";
        var getProductUrl = g_appServerUrl + "ContentRequest.flow?";
    
        /* FYW 2.3.06 to remove C2 client requirement check*/
        //rporrras 070706 Bring back the client requirement check
        if(isConnectPlayer == true) {
            if (ssver < 2200) {
                if (!readCookie('11FNotification')) {
                    setCookie('11FNotification','true',null, '/', g_cookieDomain,false);
                    MM_openBrWindow(g_notificationsDir + '11FNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
                }
            }
      
            if(isExpressCheckoutEnabled()){
                document.location = getProductUrl + 'actionType=checkout&selectedExternalKey=' +
                productId + '&REF='+ escape(window.location);
            } else {
                if (!isItInCookie(productId)) {
                    //Set the cookie that omniture will use to check if this is the first item added to the cart,
                    //and send an scOpen(Shopping Cart open) event. 
                    var lastCookie = getLastCookie();
                    if(lastCookie == 'ItemsInCart0' && itemsInCartCookie('ItemsInCart0') < 1) {
                      setCookie('1stCartAdd','true',null, '/', '.connect.com',false);
                    }
                    
                    // append the cart item and return
                    var cartItm = new Object();
                    cartItm.productId = productId;
                    cartItm.imageId = imageId;
                    var cartItemCount = cartItemArray.length;
                    cartItemArray[cartItemCount] = cartItm;
                    // are we waiting for the response?
                    if (cartItemCount == 0) {
                        addProductToCart(productId, imageId);
                    }
                }
            }
            /* FYW 2.3.06 to remove C2 client requirement check */
            //rporras 070706 This validation must be done again, purchase is not allowed in IE for C3
        } else {
            //alert("not connect player: " + readCookie('c2Version') + " - " + c2ver);
            if(ssver >= 2200){
                if (isExpressCheckoutEnabled() ){
                    var refURL = window.location.toString();
                    var trimSpot = refURL.indexOf('?');
                    var tempURL = getProductUrl 
                        + 'actionType=checkout&selectedExternalKey=' 
                        + productId + '&REF='+ escape(smartUrlRefCalc(ssver));
                    document.location = g_appServerUrl + 'SmartURL.xdmd?url=' + escape(tempURL) + '&cookieName=ssVersion';
                } else {
                    if (!isItInCookie(productId)) {
                        //Set the cookie that omniture will use to check if this is the first item added to the cart,
                        //and send an scOpen(Shopping Cart open) event. 
                        var lastCookie = getLastCookie();
                        if(lastCookie == 'ItemsInCart0' && itemsInCartCookie('ItemsInCart0') < 1) {
                          setCookie('1stCartAdd','true',null, '/', '.connect.com',false);
                        }
                        
                        // SC, on behalf of DH 011306: the shoppingcart cookie is now handled in the backend
                        // addToCookie(imageId,productId);
                        var tempURL = getProductUrl 
                            + 'actionType=addToCart&selectedExternalKey=' 
                            + productId + '&REF=' + escape(smartUrlRefCalc(ssver));
                        document.location = g_appServerUrl + 'SmartURL.xdmd?url=' + escape(tempURL) + '&cookieName=ssVersion';
                    }
                }
            } else {
                MM_openBrWindow(g_notificationsDir + '11GNotification.html','upgrade'
                    ,'width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
            }
        }
    }
}

function smartUrlRefCalc(ssver) {
    var refURL = window.location.toString();
    var trimSpot = refURL.indexOf('?');
    if (trimSpot > 0){
        var xx = refURL.substring(0,trimSpot);
        if (xx != g_searchUrl && xx != g_catSearchUrl) {
            refURL = xx;
        } else if(ssver < 2200) {
            refURL = g_webServerUrl;
        }
    }
    return refURL;
}

/**
 * Send a request to the server to add a product to the shopping cart 
 */
function addProductToCart(productId, imageId)
{
  s_events="scAdd";
  // SC, on behalf of DH 011306: the shoppingcart cookie is now handled in the backend
  // addToCookie(imageId, productId);
  var url = g_appServerUrl + "AddContentToCart.action?flow=Static&origin=StaticPage";
  if (document.AddToCartFrame) {
    var frm = document.AddToCartForm;
    frm.selectedExternalKey.value = productId;
    frm.imageId.value = imageId;
    frm.submit();
  }
  else {
    url += "&selectedExternalKey=" + productId + '&imageId=' + imageId;
    xmlHttpRequest = getXmlHttpRequest();
    if (xmlHttpRequest != null) {
      xmlHttpRequest.onreadystatechange = onAddToCartResponse;
      xmlHttpRequest.open("GET", url, true);
      xmlHttpRequest.send(null);
    }
  }
}


/**
 * (Product) This is the callback function of XMLHttpRequest to handle the response from 
 * Add to cart action.
 */
function onAddToCartResponse()
{
  // only if "loaded" and the status is OK
  if ((xmlHttpRequest != null) && (xmlHttpRequest.readyState == 4) && (xmlHttpRequest.status == 200)) { 
    var xml = xmlHttpRequest.responseXML;
    var msgId = null;
    var prodId = "";
    var imgId = "";
    var isAdded = false;
 
    var msgs = xml.getElementsByTagName('message');
    if (msgs.length > 0) {
      for (var i=0; i<msgs.length; i++) {
        msgId = msgs.item(i).attributes.getNamedItem("id").nodeValue;
        if (msgId == 'SESSION_TIMEOUT') {
          // ignore this
          msgId = null;
        }
      }
    }
	
	if (msgId == null) {
	  // assume success
	  var params = xml.getElementsByTagName('parameter');
	  for (var i=0; i<params.length; i++) { 
	    var param = params.item(i);
	    var a = param.attributes.getNamedItem("name");
	    if (a) {
          if (a.nodeValue == "selectedExternalKey") {
            prodId = param.text;
          }
          else if (a.nodeValue == "imageId") {
            imgId = param.text;
	      }
	    }
	  }
	}
	processAddToCartResponse(msgId, prodId, imgId);
  } 
}

/**
 * This function will set the button state once the item is added to the cart or to pop up
 * a dialog if there is an error.
 */
function processAddToCartResponse(msgId, prodId, imgId)
{
  if (msgId == 'VALUE_REQUIRED') {
    window.location = g_webServerUrl + "/html/valueRequiredError.html";
  }
  else if (msgId == 'DUPLICATE_PURCHASE') {
    PopupMessage('duplicatePurchase');
  }
  else if (msgId == 'ALREADY_IN_CART') {
    PopupMessage('alreadyCart');
  }
  else {
    // assume success
    setProductButton(prodId, null, imgId);
  }
  
  // remove the cart item from the array
  cartItemArray.shift();
  // Are there any item waiting in the queue?
  if (cartItemArray.length > 0) {
    var cartItm = cartItemArray[0];
    addProductToCart(cartItm.productId, cartItm.imageId);
  }
}


/**
 * (Product) General function for setting the proper button image for a product
 * PARAM  productId  String ID of product
 * PARAM  subIds  String  array of subscriptions IDs
 * PARAM  buttonId  String ID of button image
 */
function setProductButton(productId, subIds, buttonId) {
  if (!document.images[buttonId]) return;
  var stateVals = getUserStateValues();
  // set button for subscription download
  if (isInSubscription(subIds, stateVals))
    document.images[buttonId].src = g_imageDir + '/images/buttons/full_buttons/download_off.png';
  // set button for buy now
  else if (isExpressCheckoutEnabled()) {
    document.images[buttonId].src = g_imageDir + '/images/buttons/full_buttons/buy_now_off.png';
  }
  // set button for add to cart
  else {
    if(isItInCookie(productId))
      //alert('cookie exists');
      document.images[buttonId].src = g_imageDir + '/images/buttons/full_buttons/added_off.png';
    else
      //alert('cookie does not exist');
      document.images[buttonId].src = g_imageDir + '/images/buttons/full_buttons/add_off.png';
  }
}

/**
 * (Product) General function for swapping the image when the mouse is over
 * PARAM  productId  String ID of product
 * PARAM  subIds  String  array of subscriptions IDs
 * PARAM  buttonId  String ID of button image
 */
function swapProductButton(productId, subIds, buttonId) {
  var stateVals = getUserStateValues();
  // set button for subscription download
  if (isInSubscription(subIds, stateVals))
    document.images[buttonId].src = g_imageDir + '/images/buttons/full_buttons/download_on.png';
  // set button for buy now
  else if (isExpressCheckoutEnabled()) {
    document.images[buttonId].src = g_imageDir + '/images/buttons/full_buttons/buy_now_on.png';
  }
  // set button for add to cart
  else {
    if(isItInCookie(productId))
      //alert('cookie exists');
      document.images[buttonId].style.cursor = 'default';
    else
      //alert('cookie does not exist');
      document.images[buttonId].src = g_imageDir + '/images/buttons/full_buttons/add_on.png';
  }
}
/******************************************Functions related to product button END**************************/

/******************************************Functions Miscelaneous****************************************/
/**
 * Creates a new image object 
 * PARAM  arg  The src attribute (a path to an image) for the image object
 * RETURN        Image Object.
 * NOTE Possible DEPRECATION (need to clean XSLs under POD)
**/
function newImage(arg) {
  if (document.images) {
    rslt = new Image();
    rslt.src = arg;
    return rslt;
  }
}

/**
 * Swaps the source value of an image or group of images. Takes a dinamic number of parameters which should always be a multiple of 2
 * The odd parameters are the image to be changed and the even parameters are the image they will be replaced with. 
  * NOTE Possible DEPRECATION (need to clean XSLs under POD)
**/
function changeImages() {
  if (document.images && (preloadFlag == true)) {
    for (var i=0; i<changeImages.arguments.length; i+=2) {
      document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
    }
  }
}

/**
 * Submits the shopping cart
 */
function purchasePlaylist() {
    //document.CartItemsForm.action = g_appServerUrl + 'AddBundleForExpressCheckout.action?flow=ViewCart'
    document.CartItemsForm.submit();
}

/**
 * Set the breadcrumb to the current genre if on a genre page. (checks the URL)
 */
function displayGenreCrumb() {
  initGenreList();
  for (i = 0; i < GenreArray.length; i++) {
    genreOption  = new Option();
    genreOption.text=GenreArray[i][0];
    genreOption.value=GenreArray[i][1];
    if(genreOption.value == window.location.pathname)
      document.write(genreOption.text);
  }
}

/**
 * Sets the onmouseover/onmouseout events for  table rows in the track list to enable mouse-driven highlighting 
 * Called in:  C2_03_Album.xsl, C2_06_ListTracks.xsl, C2_09_Mixtape.xsl
 * Edited by: schang
 * Edited on: 062006
 */
function highlightList() {
  if (document.all && document.getElementById) {
    // go to TBODY tag, childNode[1]
    navRoot = document.getElementById("trackListingNew").childNodes[1];
    for (i=0; i < navRoot.childNodes.length; i++) {
      node = navRoot.childNodes[i];
      // Lets get (every other) child, since every even node is a comment
      if(node.nodeName == "TR"){
        node.onmouseover=function() {
          this.className+="over";
        }
        node.onmouseout=function() {
          this.className=this.className.replace("over", "");
        }
      }
    }
  }
}

/**
 *  Highlights the track that was previously selected within the current track list
 * PARAM  objectId  the id of the track
 * Called in:  C2_03_Album.xsl
 * Edited by: schang
 * Edited on: 120105, called in:  album.xsl; 061206
 */
function highlight(objectId) {
  var object = document.getElementById(objectId);
  if (object != null) object.style.backgroundColor="E7E7E7";
}

/**
 * Writes a link for a radio station
 * PARAM  radioId
 * PARAM  radioUrl
 * PARAM  playUrl
 * PARAM  imageUrl
 */
 function createRadioPlayLink(radioId, radioUrl, playUrl, imageUrl)
{
     var html = '<a href="javascript:startRadioLandingPage_demo(\'' + playUrl + "', '" +
                radioId + "', '" + radioUrl + 
                '\');" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(' +
                "'play_1','','" + imageUrl + '\', 1)"><img src="' + imageUrl + 
                '" name="play_1" width="56" height="14" border="0" id="play_1"></a>';
     
     document.writeln(html);
}
/******************************************Functions Miscelaneous****************************************/

/****************************************** LISTED FOR DEPRECATION BEGINS ************************************************/
/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
 * 
function jump_site(){
    sitevar= document.searchForm.dropdown.selectedIndex;
    if(sitevar != 0){
		location.href = document.searchForm.dropdown.options[sitevar].value;
	}
}
*/


/** SC 120905 moved to c2_global.js
function loadGenreList() {
    GenreArray = new Array(28);
    for (i = 0; i < 28; i++) {
        GenreArray[i] = new Array(2);
    }
    GenreArray[0][0] = "Home";
    GenreArray[0][1] = g_webServerUrl + "index.html?HomePageLink=true";
    GenreArray[1][0] = "Alt Country";
    GenreArray[1][1] = g_webServerUrl + "genre/altcountry.html";
    GenreArray[2][0] = "Alternative";
    GenreArray[2][1] = g_webServerUrl + "genre/alternative.html";
    GenreArray[3][0] = "Blues";
    GenreArray[3][1] = g_webServerUrl + "genre/blues.html";
    GenreArray[4][0] = "Children's";
    GenreArray[4][1] = g_webServerUrl + "genre/childrens.html";
    GenreArray[5][0] = "Classical";
    GenreArray[5][1] = g_webServerUrl + "genre/classical.html";
    GenreArray[6][0] = "Comedy/Spoken Word";
    GenreArray[6][1] = g_webServerUrl + "genre/comedyspokenword.html";
    GenreArray[7][0] = "Country";
    GenreArray[7][1] = g_webServerUrl + "genre/country.html";
    GenreArray[8][0] = "Dance";
    GenreArray[8][1] = g_webServerUrl + "genre/dance.html";
    GenreArray[9][0] = "Electronic";
    GenreArray[9][1] = g_webServerUrl + "genre/electronic.html";
    GenreArray[10][0] = "Hard Rock/Heavy Metal";
    GenreArray[10][1] = g_webServerUrl + "genre/hardrockheavymetal.html";
    GenreArray[11][0] = "Holiday";
    GenreArray[11][1] = g_webServerUrl + "genre/holiday.html";
    GenreArray[12][0] = "Indie Rock";
    GenreArray[12][1] = g_webServerUrl + "genre/indierock.html";
    GenreArray[13][0] = "Inspirational";
    GenreArray[13][1] = g_webServerUrl + "genre/inspirational.html";
    GenreArray[14][0] = "Jazz";
    GenreArray[14][1] = g_webServerUrl + "genre/jazz.html";
    GenreArray[15][0] = "Latin";
    GenreArray[15][1] = g_webServerUrl + "genre/latinmusic.html";
    GenreArray[16][0] = "New Age";
    GenreArray[16][1] = g_webServerUrl + "genre/newage.html";
    GenreArray[17][0] = "Pop";
    GenreArray[17][1] = g_webServerUrl + "genre/pop.html";
    GenreArray[18][0] = "Punk/Hardcore";
    GenreArray[18][1] = g_webServerUrl + "genre/punkhardcore.html";
    GenreArray[19][0] = "R&B";
    GenreArray[19][1] = g_webServerUrl + "genre/rbsoul.html";
    GenreArray[20][0] = "Rap/Hip-Hop";
    GenreArray[20][1] = g_webServerUrl + "genre/rap.html";
    GenreArray[21][0] = "Reggae";
    GenreArray[21][1] = g_webServerUrl + "genre/reggae.html";
    GenreArray[22][0] = "Rock";
    GenreArray[22][1] = g_webServerUrl + "genre/rock.html";
    GenreArray[23][0] = "Singer/Songwriter";
    GenreArray[23][1] = g_webServerUrl + "genre/folk.html";
    GenreArray[24][0] = "Soundtracks";
    GenreArray[24][1] = g_webServerUrl + "genre/soundtracks.html";
    GenreArray[25][0] = "Underground Hip-Hop";
    GenreArray[25][1] = g_webServerUrl + "genre/undergroundhiphop.html";
    GenreArray[26][0] = "Vocal";
    GenreArray[26][1] = g_webServerUrl + "genre/vocal.html";
    GenreArray[27][0] = "World";
    GenreArray[27][1] = g_webServerUrl + "genre/world.html";

  for (i = 0; i < GenreArray.length; i++) {
        genreOption  = new Option();
        genreOption.text=GenreArray[i][0];
        genreOption.value=GenreArray[i][1];
//alert("setting  document.searchForm.dropdown.options["+document.searchForm.dropdown.options.length+"] to be "+genreOption.text+"/"+ genreOption.value+ " genrearrayindex = "+i);
        document.searchForm.dropdown.options[document.searchForm.dropdown.options.length] = genreOption;

        // set dropdown value to current genre if on genre page
                if(genreOption.value == window.location){
                        document.searchForm.dropdown.options[i+1].selected = true;
                }
    }
}
**/

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
 * 
function playPreview(previewUrl){

	if(isConnectPlayer) {

		window.external.SetCurrentStream(previewUrl);

	} else {

		mergedClipURL = g_webServerUrl + 'assets/activexplayer/index.html?clip=' + previewUrl;
		window.open(mergedClipURL, 'ActiveXPlayer', 'width=320,height=156,toolbar=no,location=no,directories=no,scrollbars=no,resizable=no,menubar=no');

	}
}
 */
 /**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
 * 
function IESignup() {
	self.location = g_appServerUrl + 'IESignup.flow';
}
*/
//  SC 082505 deprecated
//function IESignupName() {
//	document.write("Download the Connect Player");
//}

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
 * 
function IEDownloadSS() {
}
	self.location = "http://www.connect.com/download.html";
*/
/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
 * 
function IEDownloadSSName() {
	document.write("Download SonicStage");
}
 */

 /**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
function goTAF(TAFUrl){

	if(isConnectPlayer) {

		self.location = TAFUrl;

	} else if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') >= 2200){

		self.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(TAFUrl) + '&cookieName=c2Version';

	} else {

	MM_openBrWindow(g_webServerUrl + 'assets/11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');


	}
	//smart URL servlet call
}
 */

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
function getViewCart() {
  s_events="scView";
  self.location = g_appServerUrl + 'ViewCart.flow?REF=' + escape(document.location);
}
*/ 
//  SC 082505 deprecated
//function getGiftCertName(){
//	document.write("GIFT CERTIFICATES");
//}

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
function buyGiftCert(){

  // commerce page in c2 client
	if(isConnectPlayer) {
		self.location = g_appServerUrl + 'GiftCertificate.flow';

	} else if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') >= 2200){

		self.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + g_appServerUrl + 'GiftCertificate.flow&cookieName=c2Version';

	}
  // commerce page in IE store
  else {
		self.location = g_appServerUrl + 'IEStoreBuyGC.flow';
	}
	//smart URL servlet call
}
*/
//  SC 082505 deprecated
//function getTourName() {
//	document.write("TAKE THE TOUR");
//}

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
function getTourUrl() {
	self.location = "http://c2.connect.com/promos/dc/take_tour.html";
}
 */
/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
function getHelp() {
	self.location = g_appServerUrl + 'CustomerSupport.flow';
}

//  SC 082505 deprecated
//function getHelpName() {
//	document.write("HELP");
//}
*/

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global
function startRadio(url){


if(isConnectPlayer){

	if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') < 2100){

		MM_openBrWindow(g_webServerUrl + 'assets/11DNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');

	} else {


		if(isAuthenticated() || isIdentified()) {

			s_prop10 = url;
			window.external.SetRadioStream(url);

		} else {

			self.location = g_appServerUrl + 'Login.flow?REF=' + escape(document.location);

		}

	}

} else if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') < 2200){

	MM_openBrWindow(g_webServerUrl + 'assets/11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');


} else {

	self.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(document.location) + '&cookieName=c2Version';
}
}
 */
 
 // SC, on behalf of DH 011306: the shoppingcart cookie is now handled in the backend
/* function refreshCookie() {
  var dc = document.cookie;
  var end = 0;
  var begin = 0;
  while(dc.indexOf(prefix) >=0) {
    begin = dc.indexOf(prefix) ;
    if (begin == -1) {
      exit();
    }
    end = dc.indexOf("=", begin);
    if (end == -1)
      end = dc.length;
    var cookieName = unescape(dc.substring(begin, end));
    var cookieValue = getCookie(cookieName);
    setCookie(cookieName,cookieValue,null, '/', g_cookieDomain,false);
    dc = dc.substring(end,dc.length);
  }
}*/

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global 
 * 
function mouseDown(e) {
    var shiftPressed=0;
    if (parseInt(navigator.appVersion)>3) {
        if (navigator.appName=="Netscape")
            shiftPressed=(e.modifiers-0>3);
        else shiftPressed=event.shiftKey;
            if (shiftPressed) {
            alert("Shift-click is disabled");
            return false;
        }
    }
    return true;
}
 */
 
 /**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global 
 * 
function mouseDownVersion() {
    if (parseInt(navigator.appVersion)>3) {
        document.onmousedown = mouseDown;
    if (navigator.appName=="Netscape")
        document.captureEvents(Event.MOUSEDOWN);
    }
}
*/


/* SC 091305 deprecated; replaced w/ parameterizeLink in c2_global.js
function getSelectedProductIDUrl(url,TrackID) {
    var ReturnValue = url+ '&SelectedID='+TrackID;
    //alert(ReturnValue);
    window.location = ReturnValue;
}
*/

// SC 011306 moved over to c2_global.js
/*function getUserStateValues() {
  var userState = getCookie("UserStateCookie");
  // do we have user state cookie
  if ((userState != null) && (userState.length > 0)) {
    return userState.match(/(\w*)\|(\w*)\|(\w*)\|([\d-]*)\|/);
  }
  return new Array(5);
}*/


/* rporras 011706
    *** This functionality is now implemented in getProduct() ***

    function getUrl(purchaseUrl,addToCartUrl,imageId,productId) {

	if(isConnectPlayer == true) {
		if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') < 2200){
			if(!readCookie('11FNotification')) {
				setCookie('11FNotification','true',null, '/', g_cookieDomain,false);
				MM_openBrWindow(g_webServerUrl + 'assets/11FNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
			}
		}
	    if(isExpressCheckoutEnabled() ){
	        document.location = purchaseUrl+'&cart=buynow&REF='+ escape(window.location);
	    }
	    else{
	        if(!isItInCookie(productId)) {
				s_events="scAdd";
                // SC, on behalf of DH 011306: the shoppingcart cookie is now handled in the backend
	            // addToCookie(imageId,productId);
	            document.location = addToCartUrl+'&REF='+escape(window.location);
	        }
	    }
	} else {
			if(readCookie('c2Version').substring(0,6).replace(/\./gi,'') >= 2200){
			    if(isExpressCheckoutEnabled() ){
					refURL = window.location.toString();
					trimSpot = refURL.indexOf('?');
					if(trimSpot > 0){
						refURL = refURL.substring(0,trimSpot);
					}
					tempURL = purchaseUrl+'&cart=buynow&REF='+ escape(refURL)
			        document.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(tempURL) + '&cookieName=c2Version';
			    }
			    else{
			        if(!isItInCookie(productId)) {

						refURL = window.location.toString();
						trimSpot = refURL.indexOf('?');
						if(trimSpot > 0){
							refURL = refURL.substring(0,trimSpot);
						}
                        // SC, on behalf of DH 011306: the shoppingcart cookie is now handled in the backend
			            // addToCookie(imageId,productId);
						tempURL = addToCartUrl+'&REF='+escape(refURL);
			            document.location = g_appServerUrl + 'SmartURL.xdmd?statusURL=' + escape(tempURL) + '&cookieName=c2Version';
			        }
			    }
			} else {
	MM_openBrWindow(g_webServerUrl + 'assets/11GNotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
		  }
	 }
}
*/
 
/**
 * rporras 011806
 * DEPRECATED Already exists in c2_global 
function purchasePlaylist() {
    //document.CartItemsForm.action = g_appServerUrl + 'AddBundleForExpressCheckout.action?flow=ViewCart'
    document.CartItemsForm.submit();
}
 */
 
// SC, on behalf of DH 011306: the shoppingcart cookie is now handled in the backend
/* function addToCookie(imageId,prodId) {
    var lastCookie = getLastCookie();
    var cartCookie = getCookie(lastCookie);
    //alert('cookie found? '+cartCookie);
    if(cartCookie != null) {
        if(cartCookie.length > 3500) {
            setCookie(prefix+counter,prodId+spacer,null, '/', g_cookieDomain,false);
            //alert('created new cookie and the value is '+prefix+counter+' value '+ getCookie(prefix+counter)+ ' counter '+counter);
        } else {
            setCookie(lastCookie,cartCookie+prodId+spacer,null, '/', g_cookieDomain,false);
            //alert('cookie there and less than 3500 added prod id new value ='+getCookie(lastCookie));
        }
    } else {
        //alert('creating new cookie');
        setCookie(lastCookie,prodId+spacer,null, '/', g_cookieDomain,false);
        //alert('created cookie '+getCookie(lastCookie));
    }
}*/

/**
 * rporras 011806
 * DEPRECATED Already exists in c2_global 
function getLastCookie() {
    var dc = document.cookie;
    var end = 0;
    var begin = 0;
    var cookieName;
    counter = 0;
    while(dc.indexOf(prefix) >=0) {
        begin = dc.indexOf(prefix) ;
        if (begin == -1) {
            exit();
        }
        end = dc.indexOf("=", begin);
        if (end == -1 || (end > (begin + prefix.length))) {
            if(dc.indexOf(";", begin) != -1) {
                end = dc.indexOf(";", begin);
            } else {
                end = dc.length;
            }
        }

        cookieName = unescape(dc.substring(begin, end));
        dc = dc.substring(end,dc.length);
        counter ++;
    }

    if(cookieName == null){
        cookieName = prefix+'0';
    }

    //alert('returning cookie name = '+cookieName +' counter '+counter);
    return cookieName;
}
 */
 
 /**
 * rporras 011806
 * DEPRECATED Already exists in c2_global 
function isItInCookie(prodId) {
    var dc = document.cookie;
    var end = 0;
    var begin = 0;
    var cookieName;

    while(dc.indexOf(prefix) >=0) {
        begin = dc.indexOf(prefix) ;
        if (begin == -1) {
            exit();
        }
        end = dc.indexOf("=", begin);
        if (end == -1)
            end = dc.length;

        cookieName = unescape(dc.substring(begin, end));
        if(cookieName){
            var cookieValue = cookieHasValue(cookieName,prodId);
            //alert('cookie has value '+cookieValue);
            if(cookieValue)
                return true;

        }
        dc = dc.substring(end,dc.length);
    }

    if(!cookieName){
        cookieName = prefix+'0';
    }
    //alert('not in cookie');
    return false;
}
 */

/**
 * rporras 011806
 * DEPRECATED Already exists in c2_global 
function cookieHasValue(cookieName, prodID){
  var cookieValue = getCookie(cookieName);
  if(cookieValue) {
    if(cookieValue.indexOf(prodID+spacer) >=0)
      return true;
    else
      return false;
  } else {
    return false;
  }
}
*/

/*
   name - name of the cookie
   value - value of the cookie
   [expires] - expiration date of the cookie
     (defaults to end of current session)
   [path] - path for which the cookie is valid
     (defaults to path of calling document)
   [domain] - domain for which the cookie is valid
     (defaults to domain of calling document)
   [secure] - Boolean value indicating if the cookie transmission requires
     a secure transmission
   * an argument defaults when it is assigned null as a placeholder
   * a null placeholder is not required for trailing omitted arguments
*/
/**
 * rporras 011806
 * DEPRECATED Already exists in c2_global 
function setCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
  document.cookie = curCookie;
}
 */
 
 /* SC 091305 deprecating; replacing w/ getProduct() above
TODO: merge getUrl code into getProduct()
function getContent(productId, subIDs, subUrl, addToCartUrl, expressCheckoutUrl)
{
	var stateVals = getUserStateValues();
	if (isInSubscription(subIDs, stateVals)) {
		// send out DMF
		var param = "action=LICENSE&selectedExternalKey=" + productId;
		window.external.SetDeliveryMetafile(subUrl, "POST", param, "INVISIBLE");
	}
	else {
		getUrl(expressCheckoutUrl+productId, addToCartUrl+productId, 'btn_buynow' + productId, productId);
	}
}*/

 /**
 * rporras 011806
 * DEPRECATED. This function is no longer valid. ---setProductButton--- should be used instead. 
function getContentBtnImg(imageId, productId, subIDs)
{
	var stateVals = getUserStateValues();
	if (isInSubscription(subIDs, stateVals))
		document.images[imageId].src ='http://c2.connect.com/assets/download_btn_dload.gif';
	else
		getImgNew(imageId, productId);
}
 */

 /**
 * rporras 011806
 * DEPRECATED Already exists in c2_global 
function isMarlinDevice()
{
	try {
   		var appVersion = window.external.GetSystemInfo("APP_VERSION");
       	var appInfo = appVersion.split(",");
        return (appInfo[0] == "CONNECT Player");
    }
    catch (e) {
    	return false;
    }
}
 */
 
 /**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global 
 * 
function getBuyBtnAltText(imageId,productId) {
    var image = document.all[imageId];
    if (image != null) {  
            if(isExpressCheckoutEnabled() ){
                image.alt = "Buy Now";
            }
            else{
                if(isItInCookie(productId)) {
                    //alert('cookie exists');
                    image.alt = "track in cart";
                }
                else {
                    //alert('cookie does not exist');
                   image.alt = "add track to cart";
                }
            }
        } 
    }
 */
 
 /**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global 
 * 
function getBuyBtnAlbumAltText(imageId,productId) {
    var image = document.all[imageId];
    if (image != null) {  
            if(isExpressCheckoutEnabled() ){
                image.alt = "Buy Now";
            }
            else{
                if(isItInCookie(productId)) {
                    //alert('cookie exists');
                    image.alt = "album in cart";
                }
                else {
                    //alert('cookie does not exist');
                   image.alt = "add album to cart";
                }
            }
         }                      
     }	  
*/


/** SC 120105
// deprecated; moved to c2_global.js

function alphaSearch(param, value, field, param_field, url_list) {

     var d = 'http://search.atomz.com/search/?sp-x-1=genre&sp-q-1=jazz&sp-x=track%7Calbum%7Cartist&sp-a=sp1002ecd6&sp-c=50&sp-sfvl-field=initial&sp-q=*&sp-t=artists&search.x=35&search.y=11&list=a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
     setParam('list', url_list);

     var test = param + "=";

     if (d.match(test)) {
          var pat = /(.*?)(.*)/;
          test = d.match(pat);
          if (test) {
               cgi = test[2].split("&");
               for (var i=0; i < cgi.length; i++) {
                    pat = cgi[i].split("=");
                    if (pat[0] == param) {
                         d = d.replace(cgi[i], param+"="+value);
                    } else if (pat[0] == param_field) {
                         d = d.replace(cgi[i], param_field+"="+field);
                    }
               }
          }
     } else {
          d = d + "&" + param + "=" + value + "&" + param_field + "=" + field;
     }
     window.location = d;
}

function alphaMenu(param, list, field, param_field, url_list) {
   if (url_list != "") {
      list = url_list;
      }

   //document.write("<a class=alphaMenu href=\"\" onclick=\"alphaSearch(" + param + "', '', '" + field + "', '" + param_field + "' , '" + list + "'); return false;\">#</a>");

   //document.write("<a href=\"\" onclick=\"alphaSearch('" + param + "', '', '" + field + "', '" + param_field + "' , '" + list + "'); return false;\">#</a>");

   list = list.replace(/ /g, "");
   list = list.toLowerCase();

   var menu = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");


         document.write("<font class=alphaMenuOff>" + menu[i] + "</font>");
         }
      }
}

**/

/*
TOCHECK
rporras 121405 This function already exists in c2_global.js, is it necessary that it is here too?

function runTests() {

	if(is_winme || is_win2k || is_win98 || is_winxp) {
//		alert("right os");	
	} else {
		self.location.replace("http://www.connect.com/non_os.html");
	}

	if(!is_ie5_5up) {
		self.location.replace("http://www.connect.com/non_ie.html");	
	}

	//if we find a programId redirect set it in the commerce app
	if(getParameterValue('programId')){
	
		tmpCid = "cid=" + getParameterValue('cid');
		window.location = g_appServerUrl +"AffiliateTracking.flow?programId=' + getParameterValue('programId') + '&base=' + window.location.protocol + "//" + window.location.hostname + ":" +window.location.port + window.location.pathname + '&' + tmpCid;
	}
	
	
	SSOverride = getParameterValue('noCheck');
	isMember = readCookie('memberCheck');
    try {
        var appInfo = window.external.GetSystemInfo("APP_VERSION").split(",");
        if (appInfo[0] == "CONNECT Player") {
           isConnectPlayer = true;
			setCookie('c2Version',appInfo[1],oneYearExpDate, '/', g_cookieDomain,false);
           var versionNum = appInfo[1].split(".");
           if (Number(versionNum[0]) == 2 && Number(versionNum[1]) < 1 && Number(versionNum[2]) <= 3) {
           //if (Number(versionNum[1]) < 1) {
               self.location.replace("http://www.connect.com/upgrade.html");
           } else if (Number(versionNum[0]) == 2 && Number(versionNum[1]) < 2) {

				if(!readCookie('11ENotification')) {
					setCookie('11ENotification','true',null, '/', g_cookieDomain,false);
		MM_openBrWindow(g_webServerUrl + 'assets/11ENotification.html','upgrade','width=500,height=300,toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,menubar=no');
				}
		   }
           return;
        }
    }
    catch(e) {
		if(!SSOverride) {
			isConnectPlayer = false;
		} else {
			isConnectPlayer = true;
		}
    }

}
*/

/**
 * rporras 011806
 * DEPRECATED. It exists already in  c2_global
 * 
function readCookie (CookieName) {
    var CookieString = document.cookie;
    var CookieSet = CookieString.split (';');
    var SetSize = CookieSet.length;
    var CookiePieces;
    var ReturnValue = "";
    var x = 0;

    for (x = 0; ((x < SetSize) && (ReturnValue == "")); x++) {
        CookiePieces = CookieSet[x].split ('=');
        if (CookiePieces[0].substring (0,1) == ' ') {
            CookiePieces[0] = CookiePieces[0].substring (1, CookiePieces[0].length);
        }
        if (CookiePieces[0] == CookieName) {
            ReturnValue = CookiePieces[1];
        }
    }
    return ReturnValue;
}
 */
 
 /**
 * Redirects the current page to the preferred genre page unless the URL parameter "HomePageLink" is set to true
 * Created by:  kgranger 030306
 * Edited by:  schang
 * Edited:  031006
 */
function checkDefaultGenre() {
  var test = getParameterValue("HomePageLink");
  if (test != null) {
    // not checking for genre
    if (test == "true") return;
  }
  var genre = getPreferredGenre();
  if (genre != null && genre != "")
    document.location = escape("/genre/" +
      genre.replace(/ /g, "").replace(/\+/g, "").replace(/\//g, "")
      .replace(/&/g, "").replace(/'/g, "").replace(/-/g, "").replace(/,/g, "")
      .replace(/:/g, "").replace(/%2F/g, "").replace(/%26/g, "").replace(/%27/g, "").toLowerCase() + ".html");
}


/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global and is called onConnectClose now (executes from IE too now).
 *
function onSSClose() {
  var evt = window.event;
  var altF4 = (evt.altKey && document.readyState == "complete");
  if (altF4 || ((evt.clientY < 0) && (evt.clientX < 0 || evt.clientX > document.body.clientWidth))) {
    if (endSessUrl == null) {
      endSessUrl = g_appServerUrl + "saveSession.jsp";
    }
    window.showModalDialog(endSessUrl, "SS_Save_Session", "status:false;dialogWidth:300px;dialogHeight:250px");
  }
}
window.onunload = onSSClose;
 */
 
/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global and it is not being used anywhere
 * 
function setSSCloseURL(url)
{
	endSessUrl = url;
}
*/

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global 
 * 
function newImage(arg) {
    if (document.images) {
        rslt = new Image();
        rslt.src = arg;
        return rslt;
    }
}
*/

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global 
 * 
function changeImages() {
    if (document.images && (preloadFlag == true)) {
        for (var i=0; i<changeImages.arguments.length; i+=2) {
            document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
        }
    }
}
*/

/* SC 122705 deprecating; duplicate of functions in c2_global.js
function MM_swapImgRestore() { //v3.0
    var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
    var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
    if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
    for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
    if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
    if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
*/

/*
function getSwapImg(productId) {
            if(readCookie('ExpressCheckoutCookie') ){
              return '<xsl:value-of select="$homeDir"/>/assets/buttons/btn_buynow_2.gif';
            }
            else{
            if(isItInCookie(productId)) {
                    //alert('swa cookie exists');
                return '<xsl:value-of select="$homeDir"/>/assets/buttons/btn_addtocart_3.gif';
                }
                else {
                    //alert('swa cookie does not exists');
                    return '<xsl:value-of select="$homeDir"/>/assets/buttons/btn_addtocart_2.gif';
                }

            }
        }

function getImgNew(imageId,productId) {
            //alert(imageId);
            // alert('cookie'+getCookie('ExpressCheckoutCookie'));

            if(readCookie('ExpressCheckoutCookie') ){
                document.images[imageId].src ='<xsl:value-of select="$homeDir"/>/assets/buttons/btn_buynow_1.gif';
            }
            else{
                if(isItInCookie(productId)) {
                    //alert('cookie exists');
                    document.images[imageId].src ='<xsl:value-of select="$homeDir"/>/assets/buttons/btn_addtocart_3.gif';
                }
                else {
                    //alert('cookie does not exists');
                    document.images[imageId].src ='<xsl:value-of select="$homeDir"/>/assets/buttons/btn_addtocart_1.gif';
                }
            }
            
        }
*/

/**
 * rporras 011706
 * DEPRECATED. It exists already in  c2_global 
 * 
function getParameterValue(key) {
    var result = null;

    var search = unescape(window.location.search);

    if (search.length > 1) {
        search = search.substring(1, search.length);
    }

    var paramArray = search.split('&');

    for(var i=0; i < paramArray.length; i++) {
        var nextPair = paramArray[i].split('=');
        if (nextPair.length == 2) {
            var name = nextPair[0];
            var value = nextPair[1];

            if (name == key) {
                result = value;
                break;
            }
        }

    }

    return result;
}
 */
 
/**
 * rporras 011706
 * DEPRECATED. This logic is handled now by swapProductButton
 * 
function getMouseInImg(productId, subIDs) {
  if (isInSubscription(subIDs, getUserStateValues()))
    return 'http://c2.connect.com/assets/download_btn_dload.gif';

  return getSwapImg(productId);
}

/**
 * rporras 011706
 * DEPRECATED. already in c2_global
 * 
function isInSubscription(subIDs, stateVals) {
  // do we have c2?
  if (isMarlinDevice()) {
    try {
      if ((stateVals[1] == "AUTH") && (getCookie("Authed") != null)) { // authenticated
        var idList = stateVals[4];
        if (subIDs != null) {
          for (var i=0; i < subIDs.length; i++) {
            if (idList.indexOf(subIDs[i]) != -1) {
              return true;
            }
          }
        }
      }
    }
    catch (e) {}
  }
  return false;
}
  */
/**
 * rporras 011706
 * DEPRECATED. already in c2_global
 * 
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
 */
 
/**
 * rporras 011706
 * DEPRECATED. already in c2_global
 * 
function handleCookieFields() {
    if(readCookie('UserLogedInCookie')){
        document.searchForm.loggedon.value="1";
    }
    else {
        document.searchForm.loggedon.value="0";
    }

    if(isExpressCheckoutEnabled()){
        document.searchForm.buynow.value = "1";
    }
    else {
        document.searchForm.buynow.value = "0";
    }
}
*/

/**
 * rporras 011706
 * DEPRECATED. is not used anymore
 * Sets the value for all the checkboxes in the page with the same name 
 * PARAM  val  1 to check the checkboxes 0 to uncheck them
 * PARAM  chkName  The name of the checkbox to change
 * NOTE  There's a new function in widgets.js that does this for the new type of checkboxes. This should be DEPRECATED
 * rporras 081406. This function was deprecated for C2 because it would not work for the special checkboxes that Fallon provided
 with their design. This is not an issue anymore for Perseus, but the function has been replaced for checkAll and uncheckAll located in 
 c2_global.js
function SetChecked(val, chkName) {
    dml = document.forms[form];
    len = dml.elements.length;
    var i = 0;
    for (i = 0; i < len; i++) {
        if (dml.elements[i].name == chkName) {
            dml.elements[i].checked = val;
        }
    }
}
 */
 
/**
 * rporras 011706
 * DEPRECATED. is not used anymore
 * Redirects the current page to the preferred genre page unless hte URL parameter "HomePageLink" is set to true
function checkDefaultGenre() {

  var test = getParameterValue("HomePageLink");
  if (test != null) {
   if (test == "true") {
    //alert("not checking for genre");
    return;
   }
  }
  var genre = getPreferredGenre();
  if (genre !=null) {
      if (genre != "")
          document.location = escape("/genre/" + genre.replace(/ /g, "").replace(/\//g, "").replace(/&/g, "").replace(/'/g, "").replace(/-/g, "").replace(/,/g, "").replace(/:/g, "").toLowerCase() + ".html");
  }
}
 */
/****************************************** LISTED FOR DEPRECATION ENDS ************************************************/
