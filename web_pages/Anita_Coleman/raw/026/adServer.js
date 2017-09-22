//last update: 9/6/02 -PH
//****************************************************************************/
//   CONFIDENTIAL AND PROPRIETARY PROPERTY OF GENEALOGY.COM (510) 794-6850   */
//                        PO Box 7865, FREMONT, CA 94537                     */
// THIS PROGRAM IS AN UNPUBLISHED WORK FULLY PROTECTED BY THE UNITED STATES  */
// COPYRIGHT LAWS AND IS CONSIDERED A TRADE SECRET BELONGING TO THE COPY-    */
// RIGHT HOLDER.                                                             */
//****************************************************************************/
//Make sure cookie functions are loaded
if ((typeof GetLogicalCookie) != "function") {
  document.write('<script src=/javascript/cookies.js></sc','ript>')
}
if ((typeof Owns) != "function") {
  document.write('<script src=/javascript/ActiveListCookie.js></sc','ript>')
}



//--------------START OF REAL MEDIA CODE ----------

var pageURL = document.location.href;
var pageURLArray = pageURL.substring(7).split("/")
var currentDomain = pageURLArray[0].toLowerCase();
var currentTab = pageURLArray[1].split("?")[0];
var currentLinks = ((pageURLArray.length > 2) ? pageURLArray[2].split("?")[0] : "");

// These need to be global for multiple ads on the same page to work correctly
var RN = new String(Math.random());
var RNS= RN.substring(2,11);


var ad = ((typeof dynad) != 'undefined' ) ? dynad : '';
if (document.location.href.indexOf("debugads=1") != -1)
{
	alert('domain = ' + currentDomain)
	alert('tab = ' + currentTab)
	alert('link = ' + currentLinks)
	alert('ad value = ' + ad);
}

function ShowAdOnPage()
{
	if (ad == "noad")
	{
		return false;
	}
	return true;
}

function GetDefaultCampaign()
{
	var adArea = "";
		
	if (ad != "") {adArea = ad}
	//handle the familyorigins domain
	else if (currentDomain.indexOf("familyorigins.com") != -1) {adArea = "FamilyOrigins"}
	
	//handle the familytreemaker.genealogy.com domain...checks to see if we are on that subdomain
	else if (currentDomain.indexOf("familytreemaker") != -1 )
		{
		if (currentTab == "offron.html") {adArea = "OFFR"}
		else{adArea = "FTO"}
		}
	//everything else here should be applied to the www.genealogy.com domain
	else if (currentTab == "index_n.html")		{adArea = "Index_N"}
	else if (currentTab == "index_r.html")		{adArea = "Index_R"}
	else if (currentTab == "index_a.html")		{adArea = "Index_A"}
	else if (currentTab == "storemain.html")	{adArea = "Storemain"}
	else if (currentTab == "softmain.html")		{adArea = "Softmain"}
	else if (currentTab == "datalibraries.html") {adArea = "Datalibraries"}
	else if (currentTab == "cgi-bin") {
		if (currentLinks == "my_main.cgi") {adArea = "MyGenealogy"}
		else if (currentLinks == "tree_reg.cgi") {adArea = "FTMWE"}}
	else if (currentTab == "help") {
		if (currentLinks == "index.html") {adArea = "TS_HelpCenter"}}

	else {adArea = "default"};
	
	// Add trailing slash
	if (adArea != ""){
		adArea = adArea + '/';
	}
	else //if all else has failed set to the default campaign
	{
		adArea = "default/";
	}
	
	if (document.location.href.indexOf("debugads=1") != -1)
	{
		alert('adArea = ' + adArea)
	}		
	
	return adArea;
}
	
function getRights()
{

  var iUserInfo = 1 * GetLogicalCookie("GComStoreData","adserverinfo");
  with (ProdAliases){

	if (document.location.href.indexOf("debugads=1") != -1)
	{
		alert('Rights in adserverinfo cookie = ' + iUserInfo)
	}		
	var rights = "";
		
	if(iUserInfo & MEM1a) {rights = rights + '&m=1'}
	if(iUserInfo & MEM2a) {rights = rights + '&m=2'}
	if(iUserInfo & MEM3a) {rights = rights + '&m=3'}
	if(iUserInfo & MEM1t) {rights = rights + '&m=1'}
	if(iUserInfo & MEM2t) {rights = rights + '&m=2'}
	if(iUserInfo & MEM3t) {rights = rights + '&m=3'}
	if(iUserInfo & GLC) {rights = rights + '&l=1'}
	if(iUserInfo & IPR) {rights = rights + '&i=1'}
	if(iUserInfo & WFT) {rights = rights + '&w=1'}
	if(iUserInfo & HQO) {rights = rights + '&f=1'}
	if(iUserInfo & 1900) {rights = rights + '&n=1'}
	if(iUserInfo & USC) {rights = rights + '&c=1'}
  }
	return rights;
}

function getCampaignString (strPosition, strCampaign)
{
	var adCampaign = (strCampaign == "") ? GetDefaultCampaign() : strCampaign;
	var rights = getRights();
	var sitepage = ((typeof g_sitepage) != 'undefined' ) ? g_sitepage : '/';

	var oaspage= sitepage + adCampaign + '1' + RNS + '@' + strPosition + '?' + rights;

	return (oaspage);	
}

function GetAdBannerSrc(strPosition, nWidth, nHeight, strCampaign)
{
	var oas='http://a\dserver.ancestry.com/RealMedia/a\ds/';
	var oaspage = getCampaignString(strPosition, strCampaign);

	if (navigator.userAgent.indexOf('Mozilla/3') != -1) 
	{
		return (oas + 'adstream_nx.a\ds/' + oaspage);
	}
	else 
	{
		return (oas + 'adstream_jx.a\ds/' + oaspage);
	}
}

function DisplayAdBanner(strPosition, nWidth, nHeight, strCampaign)
{
	g_sitepage = 'www.genealogy.com/';
	//get customer info from g.com cookie
	var iVisitorInfo = getVisitorInfo();

	var oas='http://a\dserver.ancestry.com/RealMedia/a\ds/';
	var oaspage = getCampaignString(strPosition, strCampaign);

	if (document.location.href.indexOf("debugads=1") != -1)
	{
		alert(GetAdBannerSrc(strPosition, nWidth, nHeight, strCampaign));

	}
	if (navigator.userAgent.indexOf('Mozilla/3') != -1) 
	{
		document.write ('<A HREF="' + oas + 'click_nx.a\ds/' + oaspage + '" TARGET="_top"><IMG SRC="' + oas + 'adstream_nx.a\ds/' + oaspage + '" BORDER="0" WIDTH="' + nWidth + '" HEIGHT="' + nHeight + '"></a>');
	}
	else 
	{
		document.write ('<SCR' + 'IPT LANGUAGE="JavaScript1.1" SRC="' + oas + 'adstream_jx.a\ds/' + oaspage + '"><\/SCRIPT>');
	}

	document.close();

}



//THIS FUNCTION IS SPECIFICALLY FOR THE SPOTS ON PREDEFINED PAGES (SpotA, SpotB, ...SpotH)
function DisplaySpot(strPosition, nWidth, nHeight, strCampaign)
{
	g_sitepage = 'www.genealogy.com/';
	//get customer info from g.com cookie
	var iVisitorInfo = getVisitorInfo();

	var oas='http://a\dserver.ancestry.com/RealMedia/a\ds/';
	var oaspage = getCampaignString(strPosition, strCampaign);

	if (document.location.href.indexOf("debugads=1") != -1)
	{
		alert(GetAdBannerSrc(strPosition, nWidth, nHeight, strCampaign));

	}
	if (navigator.userAgent.indexOf('Mozilla/3') != -1) 
	{
		document.write ('<A HREF="' + oas + 'click_nx.a\ds/' + oaspage + '" TARGET="_top"><IMG SRC="' + oas + 'adstream_nx.a\ds/' + oaspage + '" BORDER="0" WIDTH="' + nWidth + '" HEIGHT="' + nHeight + '"></a>');
	}
	else 
	{
		document.write ('<SCR' + 'IPT LANGUAGE="JavaScript1.1" SRC="' + oas + 'adstream_jx.a\ds/' + oaspage + '"><\/SCRIPT>');
	}

	document.close();

}


function getAdCookie(_key)
{
	var keyValue = '';
	
	switch (_key) {
	case 'fn':
	case 'ln':
		var name = getLoginName();
		if (name != '') {
			if (_key == 'fn') {
				keyValue = name.split (' ')[0];
			} else if (_key == 'ln' && (name.split(' ').length > 1)) {
				keyValue = name.split (' ')[name.split(' ').length - 1];
			}
		}
		break;
	default:
		break;
	}
	return keyValue;
}

//--------------END OF REAL MEDIA CODE ------------


//-----------------------------------------------------------------------
//  ProdAliasList()
//
//  These are all the product mnemonics (aliases) you can
//  use in filters. They are also used by getVisitorInfo().
//-----------------------------------------------------------------------
function ProdAliasList(){
  //annual subs
  this.GLCa  = 0x00000001;
  this.IPRa  = 0x00000002;
  this.WFTa  = 0x00000004;
  this.MCMa  = 0x00000008;
  this.HQOa  = 0x00000100;
  this.USCa  = 0x00000400;

  //monthly subs
  this.GLCm  = 0x00000010;
  this.IPRm  = 0x00000020;
  this.WFTm  = 0x00000040;
  this.MCMm  = 0x00000080;
  this.HQOm  = 0x00000200;
  this.USCm  = 0x00000800;

  //either
  this.GLC   = this.GLCm | this.GLCa;
  this.IPR   = this.IPRm | this.IPRa;
  this.WFT   = this.WFTm | this.WFTa;
  this.MCM   = this.MCMm | this.MCMa;
  this.HQO   = this.HQOm | this.HQOa;
  this.USC   = this.USCm | this.USCa;

  //annual mems
  this.MEM1a = 0x00001000;
  this.MEM2a = 0x00002000;
  this.MEM3a = 0x00004000;
  this.MEM   = this.MEM1a | this.MEM2a | this.MEM3a;

  //trial mems
  this.MEM1t = 0x00010000;
  this.MEM2t = 0x00020000;
  this.MEM3t = 0x00040000;
  this.MEMt  = this.MEM1t | this.MEM2t | this.MEM3t;
}

//-----------------------------------------------------------------------
//  ProdAliases: Global ProdAliasList object
//-----------------------------------------------------------------------
var ProdAliases = new ProdAliasList()

//-----------------------------------------------------------------------
//  getVisitorInfo()
//
//  Returns 32-bit number indicating what the customer owns
//-----------------------------------------------------------------------
function getVisitorInfo(){
  var iUserInfo = 1 * GetLogicalCookie("GComStoreData","adserverinfo");
  if (!iUserInfo){
    with (ProdAliases){
      if (Owns("GLC",  iANNUAL))    {iUserInfo += GLCa}
      if (Owns("IPR",  iANNUAL))    {iUserInfo += IPRa}
      if (Owns("WFT",  iANNUAL))    {iUserInfo += WFTa}
      if (Owns("1900", iANNUAL))    {iUserInfo += MCMa}

      if (Owns("GLC",  iMONTHLY))   {iUserInfo += GLCm}
      if (Owns("IPR",  iMONTHLY))   {iUserInfo += IPRm}
      if (Owns("WFT",  iMONTHLY))   {iUserInfo += WFTm}
      if (Owns("1900", iMONTHLY))   {iUserInfo += MCMm}

      if (Owns("USC",  iANNUAL))    {iUserInfo += USCa}
      if (Owns("USC",  iMONTHLY))   {iUserInfo += USCm}

      if (Owns("HQO",  iANNUAL))    {iUserInfo += HQOa}
      if (Owns("HQO",  iMONTHLY))   {iUserInfo += HQOm}

      if (Owns("MEM1", iANNUAL))    {iUserInfo += MEM1a}
      if (Owns("MEM2", iANNUAL))    {iUserInfo += MEM2a}
      if (Owns("MEM3", iANNUAL))    {iUserInfo += MEM3a}

      if (Owns("MEM1", iTRIAL))     {iUserInfo += MEM1t}
      if (Owns("MEM2", iTRIAL))     {iUserInfo += MEM2t}
      if (Owns("MEM3", iTRIAL))     {iUserInfo += MEM3t}
    }
    SetLogicalCookie("GComStoreData","adserverinfo", iUserInfo);
  }
  return iUserInfo;
}



function showAd(adStyle){
	//this function is to handle old code gcom code, so we dont have to go back thru and replace the showAd call
    switch (adStyle) //currently just banner ads
	{ 
      default:  //Server an Ad Banner

		g_sitepage = 'www.genealogy.com/';
		DisplayAdBanner("Top!Top", 468, 60, "");
		break;
	}

}


