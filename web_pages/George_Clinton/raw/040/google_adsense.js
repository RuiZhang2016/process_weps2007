  function google_ad_request_done(google_ads) {
    /*
     * This function is required and is used to display
     * the ads that are returned from the JavaScript
     * request. You should modify the document.write
     * commands so that the HTML they write out fits
     * with your desired ad layout.
     */
    var s = '<div class="google_ads extra-content"><h3><a href="http://www.google.com/ads_by_google.html">Ads by Google</a></h3>';
    var i;

    /*
     * Verify that there are actually ads to display.
     */
    if (google_ads.length == 0) {
      return;
    }

    /*
     * If an image ad is returned, display that ad.
     * Otherwise, build a string containing all of the ads and
     * then use a document.write() command to print that string.
     */

  if (google_ads[0].type == "image") {
      s += '<a href="' + google_ads[0].url +
              '" target="_blank" title="go to ' + google_ads[0].visible_url +
              '"><img border="0" src="' + google_ads[0].image_url +
              '"width="' + google_ads[0].image_width +
              '"height="' + google_ads[0].image_height + '"></a>';

    } else {
      if (google_ads.length == 1) {
        /*
         * Partners should adjust text sizes
         * so ads occupy the majority of ad space.
         */
        s += '<a class="single" href="' + google_ads[0].url + '" target="_blank"' +
                            'onmouseout="window.status=\'\'" ' +
                            'onmouseover="window.status=\'go to ' +
                            google_ads[0].visible_url + '\'" ' +
                            '>' +
                            '<span class="link">' +
                            '' + google_ads[0].line1 + '</span>' +
                            '<span class="text">' +
                            google_ads[0].line2 + ' ' +
                            google_ads[0].line3 + '</span>' +
                            '<span class="url">' +
                            google_ads[0].visible_url + '</span></a>';
      } else if (google_ads.length > 1) {
        /*
         * For text ads, append each ad to the string.
         */
	    s += '<ul>';
        for(i=0; i < google_ads.length; ++i) {
          s += '<li class="ad_'+i+'"><a href="' + google_ads[i].url + '" target="_blank"' +
                            'onmouseout="window.status=\'\'" ' +
                            'onmouseover="window.status=\'go to ' +
                            google_ads[i].visible_url + '\'" ' +
                            '>' +
                            '<span class="link">' +
                            '' + google_ads[i].line1 + '</span>' +
                            '<span class="text">' +
                            google_ads[i].line2 + ' ' +
                            google_ads[i].line3 + '</span>' +
                            '<span class="url">' +
                            google_ads[i].visible_url + '</span></a></li>';
        }    
        s += "</ul>";
        
      }
    }
	s += "</div>";
    document.write(s);
    return;
  }
  
google_ad_client = 'ca-pub-3411085762582526';
google_ad_channel = '12345678';
google_ad_output = 'js';
google_max_num_ads = '4';
google_kw_type = "broad";

var google_channels = new Array();

function GoogleChannel(name, id, keywords){
	this.name = name;
	this.id = id;
	this.keywords = keywords;
	google_channels[google_channels.length] = this;
}

function google_flipCoin( ){
	if( afns_getMetaTag( "type" ).content == "onion_search_results" ){
	 	afns_showGoogle();
	}else if( Math.random() > .5 ){  
	 	document.writeln('<div id="sponsors" class="row sect">');
	 	OAS_AD("x40");
	 	document.writeln('</div>');
	 }else{
	 	afns_showGoogle();
	 }
}

function afns_showGoogle(){
/*
	new GoogleChannel("Film", "2037685355", "film reviews movies review movie");
	new GoogleChannel("News", "2135765046", "news");
*/
	new GoogleChannel("Politics", "0998514819", "politics political editorial clinton bush");
	
	var keywords = afns_getMetaTag("keywords").getAttribute("content");
	new GoogleChannel("Related-Content", "7165578434", keywords);
	new GoogleChannel("Empty", "4105263888", "");
/*
	new GoogleChannel("Blogs", "1192990993", "blogs bloggers 'political blogs'");
	new GoogleChannel("Music", "2055260344", "music cds grammy shopping reviews");
	new GoogleChannel("Technology", "6170910697", "Gadgets hdtv plasma tv reviews digital camera laptop printer");
	var isSports = keywords.indexOf("Sports") > -1;
	if( isSports ){
		new GoogleChannel("Sports", "0766368418", "Sports baseball football basketball");
	}
*/
	new GoogleChannel("TV", "7226561001", "TV Listings Movie Reviews celebrity gossip entertainment news TV shows satellite cable season episode DVD box set TiVo");
	new GoogleChannel("Sports 1", "0038402225", "sports jersey hockey jerseys football jersey NFL jersey NBA jersey NHL jersey baseball jersey baseball hats sports football tickets NFL tickets season tickets NBA tickets MLB tickets NHL tickets");
	new GoogleChannel("Sports 2", "4649915392", "playoffs NBA playoff tickets MLB playoff tickets NHL playoff tickets playoffs championship Super Bowl World Series football baseball basketball NFL NBA NHL MLB WNBA");

	var google_channelIndex = Math.round((google_channels.length-1)*Math.random());
	var google_channel;
	if( afns_getMetaTag( "type" ).content == "onion_search_results"){
		var field = document.getElementsByName("edit[keys]")[0];
		var terms = field.value;
		google_channel = new GoogleChannel("Related-Content", "7165578434", terms );
	}else{
		 google_channel = google_channels[ google_channelIndex ];
	}
//	alert( google_channel.keywords );
	google_ad_channel = google_channel.id;
	google_kw = google_channel.keywords;
	document.writeln('<script language="JavaScript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>' );
}