/*** 
*************************************
JavaScript functions musicstore.connect.com web site
Created by Stephanie Chang
Last modified: 2006-05-01
*************************************
**/

//*************************************************************************************//
// COOKIES
//*************************************************************************************//
// function setNewCookie(cookieName, prodId)                                         -> Sets a new cookie if it founds none or the already existing if it does. 
// function deleteCookie(name, path, domain)                                              -> Deletes a cookie
// function deleteAllItemCookies()                                                                -> Deletes all the shopping cart cookies

//*************************************************************************************//
// SUBSCRIPTIONS (newsletters)
//*************************************************************************************//
// function onEmailSuppression(cb)                                                               ->  Call the unsubscribeAll function if the promotion filed in the globalPreferences page is checked
// function addUniqueElement(lst, toBeRemoved, elm)                                  ->  add to the unsubscription list if this is a subscribed newsletter
// function onClickNewsletter(cb, id)                                                             -> Call the unsubscribeAll function if the promotion filed in the globalPreferences page is checked

//*************************************************************************************//
// MISCELANEOUS
//*************************************************************************************//
// function getTermID()                                                                                  -> Gets the Terminal ID value of the computer and displays it on a field 
// function closePopupForm(action)                                                               -> Closes the current window, but it assigns a returnValue first
// function goTxnHistory(txnHistoryLink)                                                    -> Appends query string params to url to load previous three months' transaction billing info
// function getClientType()                                                                             -> Checks whether the client is of type Marlin, Open MG, or IE * 


/******************************************Functions related to cookies BEGIN******************************/
/**
 * (cookie) Sets a new cookie if it founds none or the already existing if it does. 
 * PARAM  cookieName  The name of the cookie to set
 * PARAM  prodId  The value of the cookie 
 */
function setNewCookie(cookieName, prodId) {
    //alert('found the cookie');
    var cookieValue = readCookie(cookieName);
    //alert('found the cookie with value '+cookieValue);
    var begin = cookieValue.indexOf(prodId + spacer);
    if (begin == -1)
        exit();
    var end = cookieValue.indexOf(spacer, begin);
    var startText = cookieValue.substring(0, begin);
    var endText = cookieValue.substring((end + 1), cookieValue.length);

    setCookie(
        cookieName,
        startText + endText,
        null,
        '/',
        g_cookieDomain,
        false);
    //alert('setting the new value to '+startText + endText);
}

/**
 * (cookie) Deletes a cookie
 * PARAM  name  the name of the cookie to delete
 * PARAM  path  for which the cookie is valid
 * PARAM domain the domain to which the cookie belongs
 */
function deleteCookie(name, path, domain) {
  if (readCookie(name)) {
    document.cookie = name
                      + "="
                      + ((path) ? "; path=" + path : "")
                      + ((domain) ? "; domain=" + domain : "")
                      + "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
  }
}

/**
 * (cookie) Deletes all the shopping cart cookies
 */
function deleteAllItemCookies() {
  if (!isExpressCheckoutEnabled()) {
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
        if (end == -1)
            end = dc.length;

        cookieName = unescape(dc.substring(begin, end));
        deleteCookie(cookieName, '/', g_cookieDomain);
        dc = dc.substring(end,dc.length);
        counter ++;
    }
  }
}
/******************************************Functions related to cookies END********************************/

/******************************************Functions related to subscription BEGIN**************************/

/**
 * ( subscriptions) Call the unsubscribeAll function if the promotion filed in the globalPreferences page is checked
 *  NOTE: rporras 021706 used to be called onEmailSupression, that name does not make sense anymore
 */
function setEmailPromotionSetting(cb){
  if (cb.checked) {
    unsubscribeAll(cb.form);
  }
}

/**
 * ( subscriptions) add to the unsubscription list if this is a subscribed newsletter
 */
function addUniqueElement(lst, toBeRemoved, elm)
{
  var onList = false;
  for (var i=0; i<lst.length; i++) {
    if (lst[i] == elm) {
      onList = true;
      break;
    }
  }
  if (!onList) {
    lst.push(elm);
  }

  for (var i=0; i<toBeRemoved.length; i++) {
    if (toBeRemoved[i] == elm) {
      toBeRemoved.splice(i, 1);
      break;
    }
  }
}

/**
 * ( subscriptions) Executes the logic for the subscriptions and unsubscriptions
 */
function onClickNewsletter(cb, id) {
  var onList = false;
  for (var i=0; i<defSubs.length; i++) {
    if (defSubs[i] == id) {
      onList = true;
      break;
    }
  }
  if (cb.checked) {
    // add to the subscription list if not already so
    if (!onList) {
      // add only if subs does not contains it
      addUniqueElement(subs, unsubs, id);
    }
    // turn off the email suppression
    //This logic is not necessary anymore. Third Party vendors does not include connect's newsletters
    //cb.form.promotion.checked = false;
  }
  else {
    // add to the unsubscription list if this is a subscribed newsletter
    if (onList) {
      addUniqueElement(unsubs, subs, id);
    }
  }
}
/******************************************Functions related to subscription END****************************/

/******************************************Functions Miscelaneous BEGIN*********************************/
/**
 * Gets the Terminal ID value of the computer and displays it on a field 
 * NOTE  Should be on the addDevice_en XSL. Can't be used anywhere else
 */
function getTermID() {
  try {
    var termID = window.external.GetOpenMGTermID();
    if (termID == '') {
      //alert("could not retrieve terminal ID");
    } else {
      //alert(termID);
      document.deviceForm.keyDisplayed.value = termID;
      document.deviceForm.key.value = termID;
    }
  } catch (e) {
    //Handle error
  }
}

/**
 * Closes the current window, but it assigns a returnValue first
 * PARAM  action  String with the value that should be returned when the window closes (works for modal windows)
 */
function closePopupForm(action) {
    window.returnValue = action;
    window.close();
}

/**
 * Appends query string params to url to load previous three months' transaction billing info
 * PARAM  txnHistoryLink  the link to the transaction history flow
 * NOTE  schang  090105  Called by:  accountMain_en.xsl, coupon_en.xsl, giftcertificateRedemption_en.xsl, giftvoucherRedemption_en.xsl, redemptionComplete_en.xsl
 */
function goTxnHistory(txnHistoryLink) {
  var endDate = new Date();
  endMonth = endDate.getMonth()+1;
  endYear = endDate.getYear();

  var startDate = new Date(endDate.getYear(),endDate.getMonth() - 2,endDate.getDate());
  startMonth = startDate.getMonth()+1;
  startYear = startDate.getYear();

  qString = "&startMonth=" + startMonth + "&startYear=" + startYear + "&endMonth=" + endMonth + "&endYear=" + endYear;

  window.location = txnHistoryLink + qString;
}

/**
 * Checks whether the client is of type Marlin, Open MG, or IE * 
 * NOTE  rporras  090805  Called by:  Called by: register_en.xsl, login_en.xsl
 */
function getClientType() {
  var clientType="IE";
  //alert("getting client type");	 

  try {  
    var appVersion = window.external.GetSystemInfo("APP_VERSION");
    //alert(appVersion);
    var appInfo= appVersion.split(",");
    var appName = appInfo[0];
                  
    if(appName == "CONNECT Player"){
      clientType="MARLIN";
    }else{
      clientType="OPEN_MG";
    }
  }
  catch (e) {}
  //alert(clientType);
  return clientType;
}
/******************************************Functions Miscelaneous END***********************************/

/****************************************** LISTED FOR DEPRECATION BEGINS ************************************************/
/****************************************** LISTED FOR DEPRECATION ENDS ************************************************/