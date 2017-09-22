<!--
/*
 * cmdatatagutils.js
 *
 * Coremetrics Tag v3.1, 2/28/2002
 * COPYRIGHT 1999-2002 COREMETRICS, INC. 
 * ALL RIGHTS RESERVED. U.S.PATENT PENDING
 *
 * The following functions aid in the creation of Coremetrics data tags.
 *
 */

// TAG GENERATING FUNCTIONS ---------------------------------------------------

/*
 * Tag Library 4.0 Configuration parameters
 */

 /* the following line was commented out by df to diagnose Safari problem.  Un-comment to re-enable link tracking and LiveView */
var cm_TrackLink = "A";

/*
 * Calling this function points tags to the production database
 */
function cmSetProduction(){
	cm_HOST="aldc.alibris.com/cm?"; 
}

/*
 * Creates a Tech Props tag.
 * pageID		: required. Page ID to set on this Pageview tag
 */
function cmCreateTechPropsTag(pageID, categoryID, sectionFlag) {
	var cm=new _cm("tid", "6", "vn2", "e3.1");
	cm.pc="Y";
	cm.pi = pageID;
	cm.cg = categoryID;
	cm.pv2 = sectionFlag;
	cm.addTP();
	cm.writeImg();
}

/*
 * Creates a Pageview tag with the given Page ID
 *
 * pageID		: required. Page ID to set on this Pageview tag
 * searchString	: optional. Internal search string enterred by user to reach
 *				  this page.
 * categoryID	: optional. Category ID to set on this Pageview tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreatePageviewTag(pageID, categoryID, searchString, pageNumber, 
			   quickbuyFlag, sectionFlag, techpropsFlag,
			   WAuth, WTit, WTopic,
               Binding, BookBIN, DJ, Fiction, First, MType,
               QAuth, QCond, QDays, QFormat, QISBN, QPrice,
               QPriceHi, QPub, QTit, QTopic, QTopicR, Query,
               QueryR, QUserID, QYear, QYearHi, QYearOnly,
               Signed, WLCCL, WTopic, WTopicR) {

	var cm;
	if (techpropsFlag == "1") {
		cm = new _cm("tid", "6", "vn2", "e3.1");
		cm.addTP();
	}
	else {
		cm = new _cm("tid", "1", "vn2", "e3.1");
	}
	if (pageNumber) {
		if ((pageNumber != "") && (pageNumber != "1")) {
			pageID += " PG " + pageNumber;
		}
	}
	cm.pi = pageID;
	if (searchString) {
		cm.se = searchString;
	}
	cm.cg = categoryID;
	cm.pv1 = quickbuyFlag;
	cm.pv2 = sectionFlag;
	
	if (WAuth || WTit) { cm.li = 100; cm.ps1 = WAuth + "|" + WTit; }
	if (WTopic || Binding) { cm.li = 100; cm.ps2 = WTopic + "|" + Binding; }
	if (BookBIN || DJ) { cm.li = 100; cm.ps3 = BookBIN + "|" + DJ; }
	if (Fiction || First) { cm.li = 100; cm.ps4 = Fiction + "|" + First; }
	if (MType || QAuth) { cm.li = 100; cm.ps5 = MType + "|" + QAuth; }
	if (QCond || QDays) { cm.li = 100; cm.ps6 = QCond + "|" + QDays; }
	if (QFormat || QISBN) { cm.li = 100; cm.ps7 = QFormat + "|" + QISBN; }
	if (QPrice || QPriceHi) { cm.li = 100; cm.ps8 = QPrice + "|" + QPriceHi; }
	if (QPub || QTit) { cm.li = 100; cm.ps9 = QPub + "|" + QTit; }
	if (QTopic || QTopicR) { cm.li = 100; cm.ps10 = QTopic + "|" + QTopicR; }
	if (Query || QueryR) { cm.li = 100; cm.ps11 = Query + "|" + QueryR; }
	if (QUserID || QYear) { cm.li = 100; cm.ps12 = QUserID + "|" + QYear; }
	if (QYearHi || QYearOnly) { cm.li = 100; cm.ps13 = QYearHi + "|" + QYearOnly; }
	if (Signed || WLCCL) { cm.li = 100; cm.ps14 = Signed + "|" + WLCCL; }
	if (WTopic || WTopicR) { cm.li = 100; cm.ps15 = WTopic + "|" + WTopicR; }

	cm.writeImg();

}

/*
 * Creates a Pageview tag with the default value for Page ID. 
 * Format of Page ID is "x/y/z/MyPage.asp"
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateDefaultPageviewTag() {
	cmCreatePageviewTag(getDefaultPageID(), null, null);
}

/*
 * Creates a Productview Tag
 * Also creates a Pageview Tag by setting pc="Y"
 * Format of Page ID is "PRODUCT: <Product Name> (<Product ID>)"
 *
 * productID	: required. Product ID to set on this Productview tag
 * productName	: required. Product Name to set on this Productview tag
 * categoryID	: optional. Category ID to set on this Productview tag 
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateProductviewTag(productID, productName, categoryID, quickbuyFlag, 
								sectionFlag, techpropsFlag, pageID) {

	var cm = new _cm("tid", "5", "vn2", "e3.1");

	cm.pr = productID;
	cm.pm = productName;
	cm.cg = categoryID;
	cm.pv1 = quickbuyFlag;
	cm.pv2 = sectionFlag;

	cm.pc = "Y";
	if (pageID && (pageID != "")) {
		cm.pi = pageID;
	}
	else {
		cm.pi = "PRODUCT: " + productName + " (" + productID + ")";
	}
	

	cm.writeImg();

}

/*
 * Variables and Arrays to support Lineitem Aggregation
 */

var cmShopProducts = new Array();
var cmShopIds = new Array();
var cmShopCats = new Array();
var cmShopQtys = new Array();
var cmShopPrices = new Array();
var cmShopSKUs = new Array();
var cmShopCounter = 0;
var cmShopOrderIds = new Array();
var cmShopCustomerIds = new Array();
var cmShopOrderPrices = new Array();

/* Internal, to support aggregation */
function cmGetProductIndex(id){
	var i =0;
	for (i=0; i<cmShopCounter; i++)
	{
		if (id==cmShopIds[i])
		{
			return i;
		}
	}
	return -1;
}

/*
 * Creates a Shop tag with Action 5 (Shopping Cart)
 *
 * productID	: required. Product ID to set on this Shop tag
 * quantity	: required. Quantity to set on this Shop tag
 * productPrice	: required. Price of one unit of this product
 * categoryID	: optional. Category to set on this Shop tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateShopAction5Tag(productID, productName, productQuantity, productPrice, categoryID) {
	var index = cmGetProductIndex(productID);
	if(index!=-1){
		var oldPrice = cmShopPrices[index];
		var oldQty = cmShopQtys[index];
		var newQty = oldQty + parseInt(productQuantity);
		var newPrice = (oldPrice*oldQty + parseInt(productQuantity)*parseFloat(productPrice))/(newQty);

		cmShopPrices[index] = newPrice;
		cmShopQtys[index] = newQty;

	} else {
		if (!categoryID) {
			categoryID = "";
		}

		cmShopProducts[cmShopCounter] = productName;
		cmShopIds[cmShopCounter] = productID;
		cmShopCats[cmShopCounter] = categoryID;
		cmShopQtys[cmShopCounter] = parseInt(productQuantity);
		cmShopPrices[cmShopCounter] = parseFloat(productPrice);
		cmShopCounter++;
	}
}

/* render the aggregated cart lineitems with Shop 5 tags*/
function cmDisplayShop5s(){
	var i;
	for(i=0; i<cmShopCounter;i++){
		var cm = new _cm("tid", "4", "vn2", "e3.1");
		cm.at = "5";
		cm.pr = cmShopIds[i]; 
		cm.pm = cmShopProducts[i];
		cm.cg = cmShopCats[i];
		cm.qt = cmShopQtys[i] ;
		cm.bp = cmShopPrices[i];
		cm.pc = "N";
		cm.writeImg();
	}
	cmShopCounter=0;
}

/*
 * Creates a Shop tag with Action 9 (Order Receipt / Confirmed)
 *
 * productID	: required. Product ID to set on this Shop tag
 * productName	: required. Product Name to set on this Shop tag
 * quantity	: required. Quantity to set on this Shop tag
 * productPrice	: required. Price of one unit of this product
 * customerID	: required. ID of customer making the purchase
 * orderID	: required. ID of order this lineitem belongs to
 * orderTotal	: required. Total price of order this lineitem belongs to
 * categoryID	: optional. Category to set on this Shop tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateShopAction9Tag(productID, productName, productQuantity,
				productPrice, customerID, orderID,
				orderTotal, categoryID) {
	var index = cmGetProductIndex(productID);
	if(index!=-1){
		var oldPrice = cmShopPrices[index];
		var oldQty = cmShopQtys[index];
		var newQty = oldQty + parseInt(productQuantity);
		var newPrice = (oldPrice*oldQty + parseInt(productQuantity)*parseFloat(productPrice))/(newQty);

		cmShopPrices[index] = newPrice;
		cmShopQtys[index] = newQty;
		cmShopSKUs[index] = "|" + productID + "|" + newPrice + "|" + newQty + "|";
	} else {
		if (!categoryID) {
			categoryID = "";
		}
		cmShopProducts[cmShopCounter] = productName;
		cmShopIds[cmShopCounter] = productID;			
		cmShopOrderIds[cmShopCounter] = orderID;
		cmShopOrderPrices[cmShopCounter] = orderTotal;
		cmShopCustomerIds[cmShopCounter] = customerID;
		cmShopCats[cmShopCounter] = categoryID;
		cmShopQtys[cmShopCounter] = parseInt(productQuantity);
		cmShopPrices[cmShopCounter] = parseFloat(productPrice);
		cmShopSKUs[cmShopCounter] = "|" + productID + "|" + productPrice + "|" + productQuantity + "|";
		cmShopCounter++;
	}
}


/* render the aggregated order lineitems with Shop 9 tags*/
function cmDisplayShop9s(){
	var i;
	for(i=0; i<cmShopCounter;i++){
		var cm = new _cm("tid", "4", "vn2", "e3.1");
		cm.at = "9";
		cm.pr = cmShopIds[i]; 
		cm.pm = cmShopProducts[i];
		cm.cg = cmShopCats[i];
		cm.qt = cmShopQtys[i] ;
		cm.bp = cmShopPrices[i];
		cm.cd = cmShopCustomerIds[i];
		cm.on = cmShopOrderIds[i];
		cm.tr = cmShopOrderPrices[i];

		cm.pc = "N";
		cm.writeImg();
	}
	cmShopCounter=0;
}

/*
 * Creates an Order tag
 *
 * orderID			: required. Order ID of this order
 * orderTotal		: required. Total of this order (minus tax and shipping)
 * orderShipping	: required. Shipping charge for this order
 * customerID		: required. Customer ID that placed this order
 * customerCity		: optional. City of Customer that placed this order
 * customerState	: optional. State of Customer that placed this order
 * customerZIP		: optional. Zipcode of Customer that placed this order
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateOrderTag(orderID, orderTotal, orderShipping, customerID, 
			  customerCity, customerState, customerZIP) {
	var cm = new _cm("tid", "3", "vn2", "e3.1");
	cm.on = orderID;
	cm.tr = orderTotal;
	cm.osk = getOSK();
	cm.sg = orderShipping;
	cm.cd = customerID;
	cm.sa = customerState;
	cm.ct = customerCity;
	cm.zp = customerZIP;

	cm.writeImg();
}

function getOSK() {
	var i =0;
	var result = "";
	for (i=0; i<cmShopCounter; i++)
	{
		result += cmShopSKUs[i];
	}
	return result;
}

/*
 * Creates a Registration tag and/or a Newsletter tag
 *
 * customerID		: required for Registration. ID of Customer to register.
 * customerEmail	: required for Newsletters. Optional for Registration.
 * customerCity		: optional. City of Customer that placed this order
 * customerState	: optional. State of Customer that placed this order
 * customerZIP		: optional. Zipcode of Customer that placed this order
 * newsletterName	: required for Newsletters. The name of the Newsletter.
 * subscribe		: required for Newsletters. Either "Y" or "N"
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateRegistrationTag(customerID, customerEmail, customerCity,
				customerState, customerZIP, newsletterName, 
				subscribe) {
	var cm = new _cm("tid", "2", "vn2", "e3.1");
	cm.cd = customerID;
	cm.em = customerEmail;
	cm.sa = customerState;
	cm.ct = customerCity;
	cm.zp = customerZIP;

	if (newsletterName && subscribe) {
		cm.nl = newsletterName;
		cm.sd = subscribe;
	}
	
	cm.writeImg();
}

/* Creates an Error Tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateErrorTag(errorType, sectionFlag) {
	var cm=new _cm("tid", "404", "vn2", "e3.1");  //DO NOT CHANGE THESE PARAMETERS
	
	if (errorType) {
		cm.ul = errorType;
	}
	cm.pv1 = sectionFlag;
	cm.writeImg();
}

// HELPER FUNCTIONS -----------------------------------------------------------
/* These functions are used by the tag-generating functions and/or may be used
 * in in general as convenience functions
 */

/*
 * Creates an acceptable default Page ID value to use for Pageview tags.
 * The default Page ID is based on the URL, and consists of the path and
 * filename (without the protocol, domain and query string).
 * 
 * example:
 * returns "x/y/MyPage.asp" for the URL http://www.mysite.com/x/y/MyPage.asp
 */
function getDefaultPageID() { 
	var pageName = window.location.pathname; 

	// eliminates everything after "?" (for Opera browswers)
	var tempIndex1 = pageName.indexOf("?");
	if (tempIndex1 != -1) {
		pageName = pageName.substr(0, tempIndex1);
	}
	// eliminates everything after "#" (for Opera browswers)
	var tempIndex2 = pageName.indexOf("#");
	if (tempIndex2 != -1) {
		pageName = pageName.substr(0, tempIndex2);
	}
	// eliminates everything after ";"
	var tempIndex3 = pageName.indexOf(";");
	if (tempIndex3 != -1) {
		pageName = pageName.substr(0, tempIndex3);
	}

	var slashPos = pageName.lastIndexOf("/");
	if (slashPos == pageName.length - 1) {
		pageName = pageName + "default.asp"; /****************** SET TO DEFAULT DOC NAME */
	}

	while (pageName.indexOf("/") == 0) {
		pageName = pageName.substr(1,pageName.length);
	}

	return(pageName); 
} 

if (defaultNormalize == null) { var defaultNormalize = null; }

function myNormalizeURL(url, isHref) {
    var newURL = url;

    // ... transform newURL here ...

    if (defaultNormalize != null) {
        newURL = defaultNormalize(newURL, isHref);
    }
    return newURL;
}

// install normalization
if (document.cmTagCtl != null) {
    var func = "" + document.cmTagCtl.normalizeURL;
    if (func.indexOf('myNormalizeURL') == -1) {
        defaultNormalize = document.cmTagCtl.normalizeURL;
        document.cmTagCtl.normalizeURL = myNormalizeURL;
    }
}
//-->