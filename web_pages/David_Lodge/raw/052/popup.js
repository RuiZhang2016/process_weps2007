

//
//	create a set of campaigns and ads
//  
//  in the constructor...
//   advert[a] = new advert(a,b,c,d,e,f,g);
//  the values should be entered as follows...
//
//   a = a unique number identifying this ad (must be the same # in both instances of a)
//   b = the name of the ad (no spaces)
//   c = the name of the campaign the ad belongs to (no spaces)
//   d = the url of the ad to be opened
//   e = the width of the window to display the ad in
//   f = the height of the window to display the ad in
//   g = the "weight" of the ad
//       the default weight should be 1, if you would like the
//       ad in question to be twice as likely to appear, choose 2
//       a percentage likelihood for each can be determined
//       by dividing the weight in question by the total combined
//       weights of all ads
//
function init()
{
}



//
//  some global variables you may want to change
//
//  specialWord = defines the "special campaign"
//  doPopUp = an emergency boolean that can disable all popup functionality
//  interval = time in seconds before another ad can be displayed
//  campLen = time in seconds that a campaign will last
//  includeSpecialWord = defines whether the "special campaign" ad will be displayed
//     to users not in the "special directory"
//  weighCampaigns = a boolean that determines whether or not to allow
//     the weight of individual ads effect the outcome of campaign selection
//


//
//  creating new ad objects
//
function advert(adRefNum, adName, adCampaign, adURL, adWidth, adHeight, adWeight)
{
}


//
//  disable/enable popups for internal clicks
//
function dontPop(e)
{
}

function doPop()
{
}


function rnd()
{
}

function rand(number)
{
}

function parseCookies()
{
}


//
// determine which campaign to use
//
function getCampaign()
{
}


//
//  determine which ad in the campaign to use
//
function getAd()
{
}



//
//  popup an ad, if necessary
//
function popUp()
{
}
