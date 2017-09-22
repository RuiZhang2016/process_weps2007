// you can remove this line when you are complete
if ( (typeof adTemplate == 'undefined') || ((adTemplate & AD_LINKS_BOTTOM) == AD_LINKS_BOTTOM) || ((adTemplate & AD_LINKS_RIGHT) == AD_LINKS_RIGHT) ) {

hasGoogleAds=(typeof thisNode == 'undefined')?null:true;

if (hasGoogleAds != null) {
var oRan = Math.floor(Math.random() * 1000000);
var oUrl = document.location.href;

// local variables for yahoo links (_yL)
_yL_section = thisNode.split("/")[0];
if (thisNode.split("/")[1] == 'travel') _yL_section = 'travel';
if (thisNode.split("/")[1] == 'style')  _yL_section = 'style';
if (thisNode.split("/")[1] == 'foodanddining') _yL_section = 'food';
if (thisNode.split("/")[1] == 'comics') _yL_section = 'comics';

switch(_yL_section) {
 


// primary categories
case "archives":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'archives_article';
break;

case "business":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'business_article';
break;

case "education":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'education_article';
break;

case "health":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'health_article';
break;

case "technology":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'technology_article';
break;

case "travel":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'travel_article';
break;

case "rentals":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'classified_apartments_article';
break;

case "cars":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'classified_cars_article';
break;

case "jobs":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'classified_jobs_article';
break;

case "merchandise":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'classified_merchandise_article';
break;

case "other":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'classified_other_article';
break;

case "realestate":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'classified_realestate_article';
break;

// tier two categories
case "food":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'othernews_article';
break;

case "metro":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'metro_article';
break;

case "print":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'print_article';
break;


case "style":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'style_article';
break;

case "weather":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'othernews_article';
break;

case "politics":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'politics_article';
break;

case "nation":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'nation_article';
break;

case "world":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'world_article';
break;

case "artsandliving":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'othernews_article';
break;

case "cityguide":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'cityguide_article';
break;

case "style":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'style_article';
break;

case "kidspost":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'kidspost_article';
break;

case "blogs":
	google_ad_client = 'ca-washingtonpost-primary_js';
	google_ad_channel = 'othernews_article';
break;

// basic categories
case "homepage":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'homepage';
break;

case "dating":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'al_dating_article';
break;

case "sports":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'sports_article';
break;

case "liveonline":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'discussions_article';
break;

case "photo":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'photosandvideos_article';
break;

case "opinion":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'opinions_article';
break;

case "opinions":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'opinions_article';
break;

case "comics":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'al_comics_article';
break;

case "crosswords":
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'al_crosswords_article';
break;

default:
	google_ad_client = 'ca-washingtonpost-basic_js';
	google_ad_channel = 'othernews_article';
break;
}

// from April 10, 2006 to May 25, 2006 only
google_ad_client = 'ca-washingtonpost-article-site_js';

debugBoolean = (document.location.search.indexOf("debugAdCode")+1 != 0) ? true : false ;
if ( debugBoolean ) {
	var debugText = '<div align="left">' ;
	debugText += 'ad client: ' ;
	debugText += google_ad_client ;
	debugText += '<br/>' ;
	debugText += 'ad channel: ' ;
	debugText += google_ad_channel ;
	debugText += '</div>' ;
	document.write(debugText) ;
}

// reverse commenting before launch
// document.write('<s\cript src="article_display.js"></s\cript>');
document.write('<s\cript src="http://www.washingtonpost.com/wp-adv/adproducts/advertisingLinks/article_display.js"></s\cript>');

}
// you can remove this line when you are complete
}
