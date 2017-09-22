function createNewsletterLink(newsletterName,TabNum)
{
	var linkText = "View Current Newsletter";
	var startPopUrl = "http://www.washingtonpost.com/wp-srv/email/emailNewsletterPreview.html?"
	
	if(newsletterName == "news")
	newsletterName = "newsReg";

	var previewLink = "<a href=\"javascript:void(0);\" onClick=\"popupEmail('"+startPopUrl+newsletterName+"','previewNewsletter',645,800);\" tabindex=\""+TabNum+"\"><font face=\"arial,sans-serif\" style=\"font-size:11px\" color=\"#666666\">"+linkText+"</font></a>";

	return previewLink;
}
function popupEmail(page,name,w,h)      
{
  poupwin = window.open(page, ""+name+"", "width="+w+",height="+h+",scrollbars=false,toolbar=false,menubar=false,resizable=false");
	poupwin.focus();
}

function Newsletter(title,blurb,sampleUrl,schedule,tabIndex)
{
  // properties
  this.title = title ;
  this.blurb = blurb ;
  this.sample_url = sampleUrl ;
  this.schedule = schedule ;
  

  // accessor methods
  this.getTitle = _get_title ;
  this.getBlurb = _get_blurb ;
  this.getSampleUrl = _get_sample_url ;
  this.getSchedule = _get_schedule  ;
 
		
  // methods
  this.getENCCode = _get_enc_code ;
  this.getRegCode = _get_reg_code ;
  this.getViewSampleCode = _get_view_sample_code ;

  // constants
  this.SAMPLE_URL_PARAMETERS = "scrollbars,toolbar=false,menubar=false,resizable=false,width=650,height=400,left=50,top=50" ;

  function _get_title()
  {
    return this.title ;
  }

  function _get_blurb()
  {
    return this.blurb ;
  }

  function _get_sample_url()
  {
    return this.sample_url ;
  }

  function _get_schedule()
  {
    return this.schedule ;
  }
  

  
  

  function _get_view_sample_code()
  {
    var output = '' ;
	output += '<A HREF="javascript:void(window.open(\''+this.sample_url+'\',\'\',\''+this.SAMPLE_URL_PARAMETERS+'\'))">View&nbsp;Sample</A>' ;
	return output ;
  }

  function _get_enc_code()
  {
    var output = '' ;
	output += '<font size="-2" face="verdana,sans-serif">' ;
	output += '<font face="verdana,sans-serif" color="#333366"><b>' ;
	output += this.title ;
	if ( this.schedule )
	  output += ' ('+this.schedule+') ' ;
	else
	  output += ' ' ;
	output += '</b></font>' ;
	output += '<font size="-2">' ;
	output += this.getViewSampleCode() ;
	output += '<br>' ;
	output += '</font>' ;
	output += this.blurb ;
	output += '<br></font>' ;
	return output ;
  }

  function _get_reg_code(TabNum)
  {
    var output = '' ;
	output += '<font face="arial,sans-serif" style=\"font-size:11px\" color="#0D3159">' ;
	output += '<b>' ;
	output += this.title +'</b></font>';
	if ( this.schedule )
	  output += '<font face="arial,sans-serif" style=\"font-size:11px\" color="#0D3159"> ('+this.schedule+') </font>' ;
	else
	  output += ' ' ;

  output +='<br>'+createNewsletterLink(this.sample_url,TabNum);
	
	return output ;
  }

}

NewsHeadlines = new Newsletter("Today's Headlines & Columnists","Get the top news every morning, as selected by washingtonpost.com's editors.","news","Daily") ;

BreakingNewsAlert = new Newsletter("Breaking News Alert","Be the first to know when major news breaks. (When events warrant)","newsalert","") ;

DavidBroderColumn = new Newsletter("Davide Border","Get the scoop on the political scene from the Pulitzer Prize-winning columnist.","broderdavid","Mon - Fri") ;

FederalInsider = new Newsletter("Federal Insider","Get the scoop on the political scene from the Pulitzer Prize-winning columnist.","fedinsider","Mon - Fri") ;

CampaignReport = new Newsletter("Campaign Report","Track the ins, outs, ups and downs of the 2004 elections with this ultimate guide for political junkies. Live discussions, campaign war chests, upcoming events and more.  Featuring insight and opinion from Terry Neal, Howard Kurtz, E.J. Dionne and others.","campaign","Wed") ;

PoliticsReport = new Newsletter("Politics News &amp; Analysis","Keep track of hot issues as they unfold in Washington and see how they affect you and the country. Award-winning news, commentary and analysis from Howard Kurtz, David Ignatius and The Post's political staff.","politics","Mon - Fri") ;

TechNewsDailyReport = new Newsletter("TechNews Daily Report","Scan the top daily technology news with this must-read that includes trends, personalities, and strategies that shape the technology industry, featuring Cynthia Webb's Filter.","technews","Mon - Fri") ;

//TechPolicySecurityWeekly = new Newsletter("Tech Policy/Security Weekly","Today's technical innovations spark tomorrow's //technology policy debates.  Stay informed with our unique perspective and the latest news at the intersection of business, //technology and government.","techpolicy","Mon") ;

PersonalTech = new Newsletter("Personal Tech","Which trendy new gadgets are worth buying?  Technology expert Rob Pegoraro gives you the low down.","fastforward","Mon") ;

EntertainmentBestBets = new Newsletter("Entertainment Best Bets","Decide where to play in D.C. this weekend with recommendations for live music, movies, restaurants and exhibits from washingtonpost.com's Going Out Gurus.","entertainment","Thurs") ;

HomeAndShopping = new Newsletter("Home &amp; Shopping","Give your home and wardrobe the look you want by finding out what's hot and where to find it.  Now featuring the \"Savvy Shopper\" section, filled with special offers and deals.","home","Thurs") ;

LeanPlateClub = new Newsletter("Lean Plate Club","Health columnist Sally Squires shows you the way to build healthy living habits for the long haul, with recipes, exercise ideas and the latest dietary guidelines.","health","Tues") ;

ThisWeekInTravel = new Newsletter("Travel","Discover top destinations and secret hideaways around Washington, across the country and around the world, along with tips, advice and deals to help you get there, stay there and play there.","travel","Weds") ;
