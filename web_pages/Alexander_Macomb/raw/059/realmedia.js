<!------ OAS SETUP begin ------>
<!--
//configuration
OAS_url = 'http://oascentral.americanheritage.com/RealMedia/ads/';
OAS_sitepage = 'www.americanheritage.com';
//OAS_sitepage = window.location.hostname + window.location.pathname;
OAS_listpos = 'Top,Left,BottomLeft,Right,Bottom,Bottom1';
OAS_query = '';
OAS_target = '_top';
OAS_version = 11;
if ((navigator.userAgent.indexOf('Mozilla/3') != -1) || (navigator.userAgent.indexOf('Mozilla/4.0 WebTV') != -1))
	OAS_version = 10;
//end of configuration

//OAS_version = 10;
//OAS_rn = '001234567890'; OAS_rns = '1234567890';
OAS_rn = new String (Math.random()); OAS_rns = OAS_rn.substring (2, 11);

function OAS_NORMAL(pos) {
	//alert('OAS_NORMAL_AD:' + pos);
	//alert('OAS_listpos:' + OAS_listpos);
	document.write('<A HREF="' + OAS_url + 'click_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" TARGET=' + OAS_target + '>');
	document.write('<IMG SRC="' + OAS_url + 'adstream_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" BORDER=0></A>');
}

//function OAS_RICH_AD(pos) {
	//alert("OAS_RICH_AD: " + '<SCR' + 'IPT LANGUAGE=JavaScript1.1 SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + pos + '?' + OAS_query + '"><\/SCRIPT>');
	//document.write('<SCR' + 'IPT LANGUAGE=JavaScript1.1 SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + pos + '?' + OAS_query + '"><\/SCRIPT>');
	//alert("OAS_RICH_AD: " + '<SCRIPT LANGUAGE="JavaScript1.1" SRC="' + OAS_url + 'adstream_jx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + pos + '">');
	//document.write ('<SCRIPT LANGUAGE="JavaScript1.1" SRC="' + OAS_url + 'adstream_jx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + pos + '">');
	//document.write ('\<\!-- --\>');
	//document.write ('\<\/SCRIPT\>');
	//document.write ('\<\!-- --\>');
//}

document.write('');
function OAS_AD(pos) {
	//alert('OAS_AD:' + pos);
	//alert('OAS_AD:' + OAS_sitepage);
	//alert('OAS_AD:' + OAS_listpos);
	if (OAS_version >= 11) {
		//alert("OAS_RICH_AD:" + pos);
		//alert('OAS_sitepage:' + OAS_sitepage);
		//alert('OAS_listpos:' + OAS_listpos);
		OAS_RICH(pos);
	} else {
		//alert("OAS_NORMAL_AD:" + pos);
		//alert('OAS_sitepage:' + OAS_sitepage);
		//alert('OAS_listpos:' + OAS_listpos);
		OAS_NORMAL(pos);
	}
}
//-->

function setupPage(sitepage, listpos) {
	//alert('setupPage:' + sitepage + "," + listpos);
	OAS_sitepage = sitepage;
	OAS_listpos = listpos;
	if (OAS_version >= 11) {
		document.write('<SCR' + 'IPT LANGUAGE=JavaScript1.1 SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '?' + OAS_query + '"><\/SCRIPT>');
	}
	//alert('OAS_sitepage:' + OAS_sitepage);
	//alert('OAS_listpos:' + OAS_listpos);
}

function setSitePage(listpos) {
	//alert('setSitePage:' + listpos);
	// Set the default site page based on the URL
	var pageURL = this.location.pathname;
	var paths = pageURL.split("/");
	var sitepage = "www.americanheritage.com";
	
	// Determine how to set the site page.
	// If this is an index page outside of the /articles directory,
	// use the full path to the index page.
	if (((pageURL.charAt(pageURL.length-1) == "/") || (pageURL.indexOf("index.shtml") != -1)) && pageURL.indexOf("/articles") != 0) {
		sitepage = "www.americanheritage.com" + pageURL;
		
		if (pageURL.indexOf("index.shtml") == -1) {
			sitepage = sitepage + "index.shtml";
		}
	} else if (pageURL.indexOf("/articles/") != -1) {
		// Just use the top section name for articles
		for (var i=0; i < paths.length && i < 2; i++) {
			if (i == 1 && paths[i].indexOf(".") == -1) {
				sitepage = sitepage + "/" + paths[i];
			}
		}
		
	} else {
		// For other pages that are non-index pages within a section, use the full path minus the page name
		for (var i=0; i < paths.length; i++) {
			if (paths[i].indexOf(".") == -1 && paths[i] != "") {
				sitepage = sitepage + "/" + paths[i];
			}
		}
	}
	
	// See if a sitepage was specified that would override this
	var query=this.location.search.substring(1);
  if (query.length > 0){
  	var params=query.split("&");
  	for (var i=0 ; i<params.length ; i++){
  	    var pos = params[i].indexOf("=");
  	    var name = params[i].substring(0, pos);
  	    var value = params[i].substring(pos + 1);
  	    
  	    if (name == 'section') {
  	    	sitepage = "www.americanheritage.com/" + value;
  	    }
  	}
  }
  
  // Don't add the trailing slash if unnecessary
  if (sitepage == "www.americanheritage.com/") { sitepage = "www.americanheritage.com"; }
  
  // Setup ad serving for the page
  setupPage(sitepage, listpos); 
	
}