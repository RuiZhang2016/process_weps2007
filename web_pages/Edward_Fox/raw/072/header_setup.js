//Tania - 10/27/2006
//David Dunlop - 10/27/2006
//Danny Huang - 11/29/2006
var cssPre = "style_";
//icon
document.write('<link rel="SHORTCUT ICON" href="http://www.forbesimg.com/icon/favicon.ico">');
//css
if (navigator.appName.indexOf("Netscape") != -1) {
	document.write ('<LINK REL="STYLESHEET" TYPE="text/css" HREF="http://images.forbes.com/css/'+ cssPre + 'ns.css">');
} else {
	document.write ('<LINK REL="STYLESHEET" TYPE="text/css" HREF="http://images.forbes.com/css/'+ cssPre + 'ie.css">');
}

var channelArr = new Array('home','business','technology','markets','entrepreneurs','work','personalFinance','lifestyle','lists','opinions');
var longChannelArr = new Array('HOME','BUSINESS','TECH','MARKETS','ENTREPRENEURS','LEADERSHIP','PERSONAL FINANCE','FORBESLIFE','LISTS','OPINIONS');
var channelURLArr = new Array('/','/business/','/technology/','/markets/','/entrepreneurs/','/leadership/','/finance/','/lifestyle/','/lists/','/opinions/');
var searchTab = 0;
var noSearch = 0;

//pagetype
thisURL = this.location.href;
if (thisURL.indexOf("search.forbes.com")!=-1) pageType="search";
else if (thisURL.indexOf('beta.forbes.com')>-1) {
	if (thisURL.indexOf('http://')>-1) thisPreURL = 'http://beta.forbes.com';
	else  thisPreURL = 'beta.forbes.com';
	thisURL = thisURL.substr(thisPreURL.length);
}
else if (thisURL.indexOf('www.forbes.com')>-1) {
	if (thisURL.indexOf('http://')>-1) thisPreURL = 'http://www.forbes.com';
	else  thisPreURL = 'www.forbes.com';
	thisURL = thisURL.substr(thisPreURL.length);
}
else if (thisURL.indexOf('qa.forbes.com/cms/template')>-1) {
	if (thisURL.indexOf('http://')>-1) thisPreURL = 'http://qa.forbes.com/cms/template';
	else  thisPreURL = 'qa.forbes.com/cms/template';
	thisURL = thisURL.substr(thisPreURL.length);
}
else if (thisURL.indexOf('qa.forbes.com')>-1) {
	if (thisURL.indexOf('http://')>-1) thisPreURL = 'http://qa.forbes.com';
	else  thisPreURL = 'qa.forbes.com';
	thisURL = thisURL.substr(thisPreURL.length);
}
if (thisURL.indexOf('index.html')>-1) thisURL = thisURL.substr(0,thisURL.indexOf('index.html'));
if (thisURL.indexOf('index.shtml')>-1) thisURL = thisURL.substr(0,thisURL.indexOf('index.shtml'));
if (thisURL.indexOf('index.jhtml')>-1) thisURL = thisURL.substr(0,thisURL.indexOf('index.jhtml'));
if (thisURL.indexOf('index.jsp')>-1) thisURL = thisURL.substr(0,thisURL.indexOf('index.jsp'));
if (thisURL.indexOf('?')>-1) thisURL = thisURL.substr(0,thisURL.indexOf('?'));
var storyExpr = /\d{4}\/\d{2}\/\d{2}\//;
var magExpr = /(forbes|forbesglobal|global|asap|best|fyi)\/\d{4}\/\d{4}\//;
var listExpr = /lists\/\d{4}\/\d+\//;
var sectionExpr = /\/[a-z]+\/[a-z]+/;
var channelExpr = /\/[a-z]+/;

if((thisURL.indexOf(".com") == -1) && (thisURL.indexOf(".net") == -1) && (thisURL.indexOf(".org") == -1)) {
	if ((thisURL.indexOf("/home") > -1) && (thisURL.indexOf("html")==-1)) pageType = "home";

	if((typeof pageType == "undefined") || (!pageType)) {
		if (thisURL.match(storyExpr)) pageType = "story";
		else if (thisURL.match(magExpr)) pageType = "magstory";
		else if (thisURL.indexOf("_land.html")!=-1) pageType = "lander";
		else if (thisURL.indexOf("/richlist")!=-1) pageType = "lander";
		else if (thisURL.indexOf("/rich400")!=-1) pageType = "lander";
		else if (thisURL.indexOf("/400richest")!=-1) pageType = "lander";
		else if (thisURL.match(listExpr)) pageType = "list";
		else if (thisURL.match(sectionExpr) && thisURL.indexOf("html")==-1) pageType = "section";
		else if (thisURL.match(channelExpr) && thisURL.indexOf("html")==-1) {
			if (thisURL.lastIndexOf("/")==thisURL.length-1) thisURL = thisURL.substr(0,thisURL.length-2);
			thisURL = thisURL.substr(0,thisURL.lastIndexOf("/"));
			if (thisURL.length == 0) pageType = "channel";
			else pageType = "generic";
		}
		else  if (thisURL.length<2) pageType = "home";
		else if (typeof wincol_generic_layout != "undefined") {
			if (wincol_generic_layout == "window") pageType = "generic window";
			else if (wincol_generic_layout == "column") pageType = "generic column";
			else pageType = "generic";
		}
		else pageType = "generic";
	}
} else if (typeof wincol_generic_layout != "undefined") {
	if (wincol_generic_layout == "window") pageType = "generic window";
	else if (wincol_generic_layout == "column") pageType = "generic column";
	else pageType = "generic";
} else pageType = "generic";

var centBan = "CenterBanner";

if (pageType == "home") {
	cssPre = "";
	centBan = "CenterBannerHome";
	OAS_listpos = "AdController,BigBanner,CenterBannerHome,x5,LeftBottom,LeftBottom2,x1,MagSpon2,MagSpon3,Block,RightUndQuotes,x39,AutosModule,TravelerModule,TravNarrowModule,x33,x79,ScottradeLogo,TradingCenter1,TradingCenter2,TradingCenter3,TradingCenter4";
} else if (pageType == "channel") {
//this actually covers channel AND section setup (some sections follow channel url structure), also includes rightmiddle for nonresolving friendlies
	OAS_listpos = "AdController,AlertsLogo,AutosModule,TravelerModule,TravNarrowModule,BigBanner,Block,CenterBanner,EditLeftHome,LeftBottom,LeftBottom2,Loge,MagSpon2,MasterLogo,RightUndQuotes,RootModule,StoryLogo,TradingCenter1,TradingCenter2,TradingCenter3,TradingCenter4,VertrueModule,x1,x2,x3,x33,x39,x5,x62,MagSpon3,MicrosoftDynamic,RightMiddle,VerisignModule,EditMiddleHome,EditRightHome,MagSpon1,QuietAgent,MerckModule,LexusLogo,DellModule,LufthansaModule,ISSThreatModule,ISSModule,KeyBankModule,x80,x81,x82,x83";
} else if (pageType == "section") {
	OAS_listpos = "AdController,AlertsLogo,AutosModule,TravelerModule,TravNarrowModule,BigBanner,Block,CenterBanner,EditLeftHome,LeftBottom,LeftBottom2,Loge,MagSpon2,MasterLogo,RightUndQuotes,RootModule,StoryLogo,TradingCenter1,TradingCenter2,TradingCenter3,TradingCenter4,VertrueModule,x1,x2,x3,x33,x39,x5,x62,MagSpon3,MicrosoftDynamic,VerisignModule,QuietAgent,MerckModule,LexusLogo,DellModule,LufthansaModule,ISSThreatModule,ISSModule,KeyBankModule,x80,x81,x82,x83";
} else if (pageType == "list") {

        if ((typeof sponsor=="undefined") || (sponsor.length==0)) {
            sponsor = "";
        } else {
            sponsor = "/" + sponsor;
        }
if (typeof listId == "undefined") listId = thisURL.substr(12,3);
if(listId.indexOf('/')>-1) listId = listId.substr(0,2);

        OAS_sitepage = "forbes.com/lists/ListID" + listId + "/results" + sponsor;

    OAS_listpos = "AdController,BigBanner,CenterBanner,RightMiddle,Block,StoryLogo,AutosModule,TravelerModule,TravNarrowModule,TradingCenter1,TradingCenter2,TradingCenter3,TradingCenter4";

} else if (pageType == "lander") {
	//lander_setup.js

		OAS_listpos = "AdController,BigBanner,RightMiddle,CenterBanner,x5,AutosModule,TravelerModule,TravNarrowModule,StoryLogo,TradingCenter1,TradingCenter2,TradingCenter3,TradingCenter4";

	//end lander_setup.js
} else if ((pageType == "magstory") || (pageType == "story")) {
	// wincol.js
	var fdcQuotesURL = "/cms/components/wincol/quotes_js.jhtml";
	var fdcWincolThreshhold;
	var fdcWincolResult;
	var fdcWincolStyle;
		//  Set this to the % of frequency templates
		//  will be rendered as columns.
		//  eg. 30 = 30% column (and 70% windows).
	var fdcWincolDefault = 80;
	var OAS_listpos = "";
	var fdcDisableCallbacks = 1;

	fdcWincolDecideTargetting();

} else if(pageType == "generic window") {
	OAS_listpos = "AdController,Block,BigBanner,CenterBanner";
} else if(pageType == "generic column") {
	OAS_listpos = "AdController,RightMiddle,BigBanner,CenterBanner";
}

function fdcWincolComputeListpos() {
	if ((pageType == "magstory") || (pageType == "story")) {
		url = '' + window.location;
		if(fdcWincolStyle=="window") {
			// DO NOT CHANGE WITHOUT APPROVAL
			OAS_listpos = "AdController,Block,BigBanner,CenterBanner,x5,LeftBottom,LeftBottom2,x1,x33,Loge,StoryLogo,x39,LeftBottom3,LeftBottom4,AlertsLogo,AutosModule,TravelerModule,TravNarrowModule,TradingCenter1,TradingCenter2,TradingCenter3,TradingCenter4,StoryBotLogo,RootModule,VertrueModule,QuietAgent,LexusLogo,x82";
		}
		else {
			// DO NOT CHANGE WITHOUT APPROVAL
			OAS_listpos = "AdController,RightMiddle,BigBanner,CenterBanner,x5,LeftBottom,LeftBottom2,x1,x33,Loge,StoryLogo,x39,LeftBottom3,LeftBottom4,AlertsLogo,AutosModule,TravelerModule,TravNarrowModule,TradingCenter1,TradingCenter2,TradingCenter3,TradingCenter4,StoryBotLogo,RootModule,VertrueModule,QuietAgent,LexusLogo,x82";
		}
	}
}
function fdcWincolAlert(){
	testStr = "";
	if(typeof pageType != "undefined") testStr = testStr + "pagetype: " + pageType  + "\n";
	if(typeof OAS_sitepage != "undefined") testStr = testStr + "OAS_sitepage: " + OAS_sitepage  + "\n";
	if(typeof OAS_listpos != "undefined") testStr = testStr + "OAS_listpos: " + OAS_listpos  + "\n";
	if(typeof fdcWincolThreshhold != "undefined") testStr = testStr + "minimum for window: " + fdcWincolThreshhold  + "\n";
	if(typeof fdcWincolResult!= "undefined") testStr = testStr + "result: " + fdcWincolResult  + "\n";
	if(typeof fdcWincolStyle != "undefined") testStr = testStr + "style: " + fdcWincolStyle  + "\n";
	alert(testStr);
}

	function fdcWincolDecideTargetting() {
        var url = window.location + "";
        // use URL for OAS_sitepage value if URL matches following
        if ( url.indexOf("/infrastructure/") != -1 ) { fdcWincolComputeSitepage(); }
        else if ( url.indexOf("/security/") != -1 ) { fdcWincolComputeSitepage(); }
        else if ( url.indexOf("/execpicks/") != -1 ) { fdcWincolComputeSitepage(); }
        else if ( url.indexOf("/entrefinance/") != -1 ) { fdcWincolComputeSitepage(); }
        else if ( url.indexOf("/beltway/") != -1 ) { fdcWincolComputeSitepage(); }
        else if ( url.indexOf("/guruinsights/") != -1 ) { fdcWincolComputeSitepage(); }
        else if ( url.indexOf("/innovation/") != -1 ) { fdcWincolComputeSitepage(); }
        else if ( url.indexOf("/ceonet") != -1 ) { fdcWincolComputeSitepage(); }
        else { var OAS_sitepage = ""; }
	}
	function fdcWincolComputeSitepage(){
		url = '' + window.location;
		start = url.indexOf('//') + 2;
		start = url.indexOf('/',start) + 1;
		end = url.indexOf('?'); if(end==-1){end=url.length}
		OAS_sitepage = 'forbes.com/' + url.substring(start, end);
	}
	function fdcWincolComputeStyle() {
		var url = window.location + "";
		 // 100 = all columns
		// 0 = all windows
		if (url.indexOf("/column/") != -1 )             { fdcWincolThreshhold = 100; }
		else if (url.indexOf("/window/") != -1 )        { fdcWincolThreshhold = 0; }
		else if (url.indexOf("/wireless/") != -1 )      { fdcWincolThreshhold = 50; }
		else if (url.indexOf("/markets/") != -1 )       { fdcWincolThreshhold = 60; }
		else if (url.indexOf("/finance/") != -1 )       { fdcWincolThreshhold = 60; }
		else if (url.indexOf("/personalfinance/") != -1 )       { fdcWincolThreshhold = 60; }
		else                                            { fdcWincolThreshhold = fdcWincolDefault; }
		fdcWincolResult = Math.round( Math.random() * 99 );
		fdcWincolStyle = (fdcWincolResult < fdcWincolThreshhold ) ? "column" : "window";
	}

	function fdcWincolStart(){
		if (fdcWincolStyle=="window") {
  	   		_startWindow();
		}
		else {
		    	_startColumn();
		}
	}
	function fdcWincolAd(){
		if (fdcWincolStyle=="window"){_adWindow();}
		else{_adColumn();}
	}
	function fdcWincolEnd(){
		if (fdcWincolStyle=="window")	{_endWindow();}
		else				{_endColumn();}
	}
	function fdcWincolSwap(orig, repl){
		var span = document.getElementById(orig);
		if(span==null){return;}
		var newspan = document.getElementById(repl);
		if(newspan==null){return;}
		while(span.childNodes[0]) { span.removeChild(span.childNodes[0]); }
		span.parentNode.replaceChild(newspan,span);
	}
	function _getBuster(){
		var date = new Date();
		var buster =  "" + date.getYear() + date.getMonth() + date.getDate() + 
				date.getHours() + date.getMinutes() + date.getSeconds();
		return buster;
	}
	function _startWindow(){
		document.write("<CENTER><span class=\"smallgreytxt\">ADVERTISEMENT</span>");
	}
	function _adWindow(){
		document.write('<div class="dynamicadlocation" id="dynamicAdWinDiv"><script language="JavaScript">OAS_AD(\'Block\');<\/script></div>');
	}
	function _endWindow(){
		document.write("</CENTER>");
		document.write("<FONT COLOR=white>end ad</FONT><BR>");
		document.write("<table cellspacing=\"0\" cellpadding=\"2\" border=\"0\" width=\"336\"><tr><td bgcolor =\"dece00\" colspan=\"3\"><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"2\"></td></tr>");
		var ver = navigator.appName;
		var num = parseInt(navigator.appVersion);
		var myagent = navigator.userAgent.toLowerCase();
		if ((ver == "Microsoft Internet Explorer")&&(num >= 4)&&(myagent.indexOf('mac') < 0)) {
			_doBookmarkWindow();
		}
		document.write("<tr><td valign=\"middle\"><a href=\"https://w1.buysub.com/servlet/OrdersGateway?cds_mag_code=FRB&cds_response_key=IL11FE5\">Free Trial Issue of <i>Forbes</i></a></td><td><br>&nbsp;<br></td><td align=\"right\" valign=\"middle\"><a href=\"https://w1.buysub.com/servlet/GiftsGateway?cds_mag_code=FRB&cds_response_key=ILG11B2\">Gift Subscriptions</a></td></tr><tr><td valign=\"middle\"><a href=\"http://forbes.anchorfree.com\" title=\"Find free wireless internet all over the world\"><img src=\"http://images.forbes.com/media/ads/free_wifi_hotspot.gif\" alt=\"free wireless cafes, hotels, airports, and other hotspots\" border=0>Find Free Wi-Fi Hotspots</a></td></tr><tr><td bgcolor=\"dece00\" colspan=\"3\"><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"2\"></td></tr></table><BR>");
		_doAlertsWindow();
		document.write("<BR>");
	}
	function escapeSingleQuote(myline) {
      	  if ((myline != null) && (myline.length>0)) {
                var index = myline.indexOf("'");
                while (index != -1) {
                        var firstpart = myline.substring(0,index);
                        var secondpart = myline.substring(index,myline.length);
                        myline=firstpart + "\\" + secondpart;
                        if ( (index+2)<myline.length) {
                                index = myline.indexOf("'",index+2);
                        }
                        else {
                                return myline;
                        }
                }
        	}
        	return myline;
	}
	function _doBookmarkWindow() {
		document.write("<tr><td valign=\"middle\"><a href=\"http://www.forbes.com\" onClick=\"this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.forbes.com');\">Make Forbes.com My Home Page</a></td><td><br>&nbsp;<br></td><td align=\"right\" valign=\"middle\"><a href=\"javascript:window.external.AddFavorite('" + this.location + "','" + escapeSingleQuote(document.title) + "');\">Bookmark This Page</a></td></tr>");
	}
	function _startColumn(){
		document.write("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"328\"><TR><TD WIDTH=168 VALIGN=TOP>");
		_doAlertsColumn();
		document.write("<BR><table cellspacing=\"0\" cellpadding=\"2\" border=\"0\" width=\"168\"><tr><td bgcolor=\"dece00\" colspan=\"3\"><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"2\"></td></tr>");
		var ver = navigator.appName;
		var num = parseInt(navigator.appVersion);
		var myagent = navigator.userAgent.toLowerCase();
		if ((ver == "Microsoft Internet Explorer")&&(num >= 4)&&(myagent.indexOf('mac') < 0)) {
			_doBookmarkColumn();
		}
		document.write("<tr><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td><td valign=\"middle\" align=\"center\"><a href=\"https://w1.buysub.com/servlet/OrdersGateway?cds_mag_code=FRB&cds_response_key=IMFFT009\"><nobr>Free Trial Issue</nobr></a></td><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td></tr><tr><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td><td valign=\"middle\" align=\"center\"><a href=\"https://w1.buysub.com/servlet/GiftsGateway?cds_mag_code=FRB&cds_response_key=ILG11B2\">Gift Subscriptions</a></td><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td></tr><tr><td colspan=\"3\"><a href=\"http://forbes.anchorfree.com\" title=\"Find free wireless internet all over the world\"><img src=\"http://images.forbes.com/media/ads/free_wifi_hotspot.gif\" alt=\"free wireless cafes, hotels, airports, and other hotspots\" border=0>Find Free Wi-Fi Hotspots</a></td></tr><tr><td bgcolor=\"dece00\" colspan=\"3\"><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"2\"></td></tr></table><br clear=\"all\">");
		document.write("</td>");
		document.write("<td width=\"10\">&nbsp;&nbsp;</td>");
		document.write("<td width=\"150\" valign=top>");
	}
	function _doBookmarkColumn() {
		document.write("<tr><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td><td valign=\"middle\" align=\"center\"><a href=\"http://www.forbes.com\" onClick=\"this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.forbes.com');\">Make Forbes.com My Home Page</a></td><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td></tr><tr><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td><td valign=\"middle\" align=\"center\"><a href=\"javascript:window.external.AddFavorite('" + this.location + "','" + escapeSingleQuote(document.title) + "');\">Bookmark This Page</a></td><td><img src=\"http://images.forbes.com/media/assets/spacer.gif\" width=\"1\" height=\"25\"></td></tr>");
	}
	function _adColumn(){
		document.write('<div class="dynamicadlocation" id="dynamicAdColDiv">');
		OAS_AD('RightMiddle');
 		document.write('</div>');
	}
	function _endColumn(){
		document.write("</CENTER></TD></TR></TABLE>");
	}
        function _checkAlertForm(){
                // set the cookie after validating the form.
                if (checkAlertForm()){
                        setCLevelAlertsCookie();
                        return true;
                } else {
                        return false;
                }
        }
        function getTitleDropDown(){
                var titleArray = new Array("Select Your Title", "President", "Chairman", "Owner/Partner", "CEO", "CFO", "CIO/CTO", "CMO", "COO", "Vice President", "General Manager", "Middle Management", "Technical Staff", "Clerical/Support Staff", "Professional", "Homemaker", "Student", "Retired", "Not Employed", "Other");
                var titleDropDown = '';

                var alertsTitle = "Select Your Title";
                // get the ceotitle title from the cookie, if present.

                for (var i=0; i < titleArray.length; i++) {
                        titleDropDown += '<option value="' + titleArray[i] + '"';
                        if (alertsTitle == titleArray[i]) {
                                titleDropDown += ' selected="selected"';
                        }
                        titleDropDown += '>' + titleArray[i] + '</option>';
                }

                return titleDropDown;
        }
        function setCLevelAlertsCookie(){
                // Change theDomain to: '192.168.0.164' for testing 
                var theDomain = '.forbes.com';

                var cLevelTitleMap = new Object();
                cLevelTitleMap["President"] = "President";
                cLevelTitleMap["Chairman"] = "Chairman";
                cLevelTitleMap["Owner/Partner"] = "Owner%2FPartner";
                cLevelTitleMap["CEO"] = "CEO";
                cLevelTitleMap["CFO"] = "CFO";
                cLevelTitleMap["CIO/CTO"] = "CIO%2FCTO";
                cLevelTitleMap["CMO"] = "CMO";
                cLevelTitleMap["COO"] = "COO";

                var aTitle=document.getElementById("alerts_title");
                // Title is not a mandatory field.
                if (aTitle != null){
                        var clevel_title = cLevelTitleMap[aTitle.value];
                        if (clevel_title != null) {
                                var theDate = new Date();
                                var fiveYearsLater = new Date( theDate.getTime() + 153792000000 );
                                var expiryDate = fiveYearsLater.toGMTString();

                                document.cookie='ceotitle=' + clevel_title + ';expires=' + expiryDate + ';path=/;domain=' + theDomain;
                        } else if (aTitle.value != "Select Your Title") {
                                // The user is not clevel.  Remove the cookie if present.
                                var results = document.cookie.match ( 'ceotitle=' );

                                // remove the cookie
                                if ( results ){
                                        var cookie_date = new Date ( );  // current date & time
                                        cookie_date.setTime ( cookie_date.getTime() - 1 );
                                        document.cookie = "ceotitle=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/;domain=" + theDomain;
                                }
                        } // else no title select; therefore do nothing with cookies.
                }
        }
        function tableForEach(keyArray, valueHash, numColumns, header) {

                // Used to prepend a prefix to the alert parameters for differentiation purposes.
                var headerAlertMap = new Object();
                headerAlertMap["Companies"] = "tickers";
                headerAlertMap["People"] = "persons";
                headerAlertMap["Topics"] = "keywords";

                if (keyArray.length==0) return;

                document.write('<tr height="22"><td style="padding-top: 5px; border-top: thin dotted" colspan="' +
                                numColumns*2 + '" height="22" ><b>' + header + '</b>  </td></tr>');


                for (var i=0; i<keyArray.length/numColumns; i++) {
                        document.write('<tr valign="top">');
                        for (var j=0; j<numColumns; j++) {
                                if ((i*numColumns+j) < keyArray.length) {
                                        var element = keyArray[i*numColumns+j];
                                        document.write('<td valign="middle" width="20"><input type="checkbox" name="' +
                                                headerAlertMap[header] + '.' + element + '" value="' + valueHash[element] +
                                                '"></td>' + '<td valign="middle" width="134">' + valueHash[element] + '</td>');
                                }
                        }
                        document.write('</tr>');
                }
        }
        function _doAlertsWindow(){
                if((typeof tickerKeyList == "undefined") && (typeof personKeyList == "undefined") && (typeof keywordKeyList == "undefined")){return;}

                document.write('<style type="text/css" media="screen"><!--#alertsbox td {font-size: 11px;}--></style><form action="/alertSignup" method="post" name="alertForm" onSubmit="return _checkAlertForm();"><div id="alertsbox"><table bgcolor="#cccccc" border="0" cellpadding="1" cellspacing="0" width="336"><tbody><tr><td><table bgcolor="#ffffff" border="0" cellpadding="2" cellspacing="0" width="100%"><tbody><tr><td rowspan="100"></td><td colspan="4" width="320"></td><td rowspan="100"></td></tr><tr><td colspan="4"  style=" font-size: 12px; font-weight: bold;" width="320"><span style=" color: 990000;">News by E-mail </span>Get stories by E-Mail on this topic <span style=" color: 990000;">FREE</span></td></tr><tr height="0"><td colspan="4" width="320" height="0"><scr' + 'ipt language="JavaScript">OAS_AD("AlertsLogo");</scr' + 'ipt></td></tr>');


                if((typeof tickerKeyList != "undefined") && (typeof tickerHash != "undefined")){
                        tableForEach(tickerKeyList, tickerHash, 2, "Companies");
                }
                if((typeof personKeyList != "undefined") && (typeof personHash != "undefined")){
                        tableForEach(personKeyList, personHash, 2, "People");
                }
                if((typeof keywordKeyList != "undefined") && (typeof keywordHash != "undefined")){
                        tableForEach(keywordKeyList, keywordHash, 2, "Topics");
                }


                document.write('<tr valign="top" height="22"><td style="padding-top: 5px; border-top: thin dotted"  colspan="4" valign="middle" width="320" height="22"><span style="float: left;"<b>Enter E-Mail Address:</b></span><span style="float: right;"><a href="/2002/05/22/alertsfaq.html">FAQ</a> | <a href="/fdc/privacy.html">Privacy Policy</a></span></td> </tr> <tr> <td  colspan="4" width="320"><input style="font-size: 11px;" class="alertemail" size="30" name="email"><br> </td> </tr>');

                // New alerts title box
                document.write('<tr height="32"> <td style="padding-bottom: 5px;border-top:" colspan="4" valign="middle" width="320" height="32"><select style="font-size: 11px;" name="selectName" size="1" id="alerts_title"> <title></title>' + getTitleDropDown() + '</select><input style="font-size: 11px;" class="alertsignup" value="Sign Me Up!" name="submit" type="submit"><br> </td> </tr></form>');

                // link to newsletters on membership page and close table tags.
                document.write('<tr height="22"> <td style="padding-top: 5px; border-top: thin dotted"   colspan="4" align="left" width="320" height="22"><b>Also available: </b><a href="/membership/editprofile.jhtml">E-Mail Newsletters</a></td> </tr> <tr> <td class="linkset" colspan="4" align="left" width="320"></td> </tr> </tbody> </table></td></tr></tbody></table></div>');

        }
        function _doAlertsColumn(){
                if((typeof tickerKeyList == "undefined") && (typeof personKeyList == "undefined") && (typeof keywordKeyList == "undefined")){return;}

                document.write('<style type="text/css" media="screen"><!--#alertsbox td {font-size: 11px;}--></style><form action="/alertSignup" method="post" name="alertForm" onSubmit="return _checkAlertForm();"><div id="alertsbox"><table bgcolor="#cccccc" border="0" cellpadding="1" cellspacing="0" width="166" style="font-size: 11px;"><tbody><tr><td><table bgcolor="#ffffff" border="0" cellpadding="2" cellspacing="0" width="100%"><tbody><tr><td rowspan="100"></td><td></td><td width="141"></td><td rowspan="19"></td></tr><tr><td colspan="2"  style=" font-size: 12px; font-weight: bold;"><span style=" color: 990000;">News by E-mail</span><br>Get stories by E-Mail on this topic <span style=" color: 990000;">FREE</span></td></tr><tr><td colspan="2"><scr' + 'ipt language="JavaScript">OAS_AD("AlertsLogo");</scr' + 'ipt><br></td>');

                if((typeof tickerKeyList != "undefined") && (typeof tickerHash != "undefined")){
                        tableForEach(tickerKeyList, tickerHash, 1, "Companies");
                }
                if((typeof personKeyList != "undefined") && (typeof personHash != "undefined")){
                        tableForEach(personKeyList, personHash, 1, "People");
                }
                if((typeof keywordKeyList != "undefined") && (typeof keywordHash != "undefined")){
                        tableForEach(keywordKeyList, keywordHash, 1, "Topics");
                }

                document.write('<tr valign="top" height="24"> <td style="padding-top: 5px; border-top: thin dotted"  colspan="2" valign="middle" height="24"><b>Enter E-Mail Address:</b><br> </td> </tr> <tr> <td  colspan="2"><input style="font-size: 11px;" class="alertemail" size="19" name="email"><br> </td> </tr> <tr> <td  colspan="2"><select style="font-size: 11px;" name="selectName" size="1" id="alerts_title"> <title></title>' + getTitleDropDown() + '</select></td> </tr> <tr> <td  colspan="2"><input style="font-size: 11px;" class="alertsignup" value="Sign Me Up!" name="submit" type="submit"><br> </td> </tr></form>');

                // FAQ, Privacy policy, newsletters signup link and closing tags
                document.write('<tr height="22"> <td style="padding-bottom: 5px; "  colspan="2" height="22"><a   href="/2002/05/22/alertsfaq.html">FAQ</a> | <a href="/fdc/privacy.html">Privacy Policy</a></td> </tr> <tr height="22"> <td style="padding-top: 5px; border-top: thin dotted" colspan="2" align="left" height="22"><b>Also available:</b><br> </td> </tr> <tr> <td  colspan="2" align="left"><a href="/membership/editprofile.jhtml">E-Mail Newsletters</a></td> </tr> <tr> <td class="linkset" align="left"></td> <td class="linkset" align="left" width="141"></td> </tr> </tbody> </table></td></tr></tbody></table></div>');
        }

//cookie
var exp = new Date();
exp.setTime(exp.getTime() + (2*24*60*60*1000));
WriteNew('forbes_international', 'home_usa',
exp, '/', 'false','.forbes.com');
function WriteNew (name, value, exp, path, secure, domain) {
	var argv = WriteNew.arguments;
	var argc = WriteNew.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var secure = (argc > 4) ? argv[4] : false;
	var domain = (argc > 5) ? argv[5] : null;
	document.cookie = name + "=" + escape (value) +
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
	((path == null) ? "" : ("; path=" + path)) +
	((domain == null) ? "" : ("; domain=" + domain)) +
	((secure == true) ? "; secure" : "");
}

//jumpNav
function jumpNav (form) {
	if (form.jumpSelect.options[form.jumpSelect.selectedIndex].value != "") {
		this.location = form.jumpSelect.options[form.jumpSelect.selectedIndex].value;
	}
}
//popit
function popit(url, popWidth, popHeight) {
	if (popWidth < 760) {
		popWidth = 760;
	}
	slideWin = window.open(url, 'popup', "width=" + popWidth + ",height=" + popHeight + ",toolbar=0,resizable=1,scrollbars=1");
	slideWin.focus();
}
//go
function go(url) {
	if (opener && !opener.closed) {
		opener.location = url;
		opener.focus();
	} else {
		fakeWin = window.open(url, 'fake');
		fakeWin.focus();
	}
}
//closeWindow
function closeWindow() {
window.close()
}

//channel
if ((typeof fdcchannel == "undefined") || (fdcchannel == "")) {
	if ((typeof displayedChannel != "undefined") && (displayedChannel != "")) {
		if ((displayedChannel == 'home_asia') || (displayedChannel == 'home_europe')) displayedChannel = 'home';
		fdcchannel = displayedChannel;
	}
	else {
		var channelIndex = this.location.href.indexOf('fdcchannel=');
		if (channelIndex == -1) fdcchannel = 'home';
		else {
			fdcchannel =  this.location.href.substr(channelIndex+8);
			var channelEnd = fdcchannel.indexOf('&');
			if (channelEnd>-1) fdcchannel = fdcchannel.substr(0,channelEnd);
		}
	}
}
if (fdcchannel == 'leadership') fdcchannel = 'work';
if (fdcchannel == 'forbeslife') fdcchannel = 'lifestyle';
count=0;
for (i=0;i<channelArr.length;i++) {
	if(channelArr[i] == fdcchannel) {
		break;
	}
	count++;
}

if (count==channelArr.length) fdcchannel = "home";

var displayedChannel = fdcchannel;

if (typeof fdcsponsor == "undefined") {
	var sponsorIndex = this.location.href.indexOf('fdcsponsor=');
	if (sponsorIndex == -1) fdcsponsor = '';
	else {
		fdcsponsor =  this.location.href.substr(sponsorIndex+8);
		var sponsorEnd = fdcsponsor.indexOf('&');
		if (sponsorEnd>-1) fdcsponsor = fdcsponsor.substr(0,sponsorEnd);
	}
}

var cookiebreak = document.cookie.split(";");
for(var i=0 ; i < cookiebreak.length ; i++)
        if(cookiebreak[i].indexOf('__welcome') > -1) {
                var tomorrow = new Date();
                tomorrow.setTime(tomorrow.getTime() + (24*60*60*1000));
                document.cookie = cookiebreak[i] +'; path=/; domain=.forbes.com; expires=' + tomorrow.toGMTString();
        }

document.write('<\/head>');
document.write('<body bgcolor="#FFFFFF" text="#000000" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0" link="#003399" alink="#0080ff" vlink="#6699cc">');

//video ad frame
if(displayedSection == 'Video') {
	document.write('<iframe name="dummy" width="0" height="0" style="height:0px;" scrolling="no" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0"></iframe>');
	noSearch = 1;
}

//partners
var partner = '';
var query = this.location.search.substring(1);
if( query.length > 0 ) {
var params=query.split("&");
for (var i = 0 ; i < params.length ; i++) {
var pos = params[i].indexOf("=");
var name = params[i].substring(0, pos);
var value = params[i].substring(pos + 1);
if( name == "partner" ) {
partner = value;
}
}
}
var url = window.document.URL.toString();
if(url.indexOf("archive") != -1 ) {
var partner = "keepmedia";
}
var currentHostname=this.location.hostname;
if (currentHostname.length > 0) {
if (currentHostname == "aol.forbes.com" || currentHostname == "forbes.aol.com") {
partner = 'aol';
}
}
var partner_cookie = "partner_session=" + partner;
if (document.cookie.indexOf(partner_cookie) < 0) {
document.cookie=partner_cookie + ';path=/';
}
var _rsCG='0';
//adfixxxxx
function docdowrite(s) {
   document.write(s);
}
//end adfix

/* rollover 18APRIL2006 Version 1.0
 * Tania Puell, April 2006
 * Copyright (c) 2006 Forbes.com
 */

var homeArr = new Array();
var opinionsArr = new Array();
var businessArr = new Array();
var technologyArr = new Array();
var marketsArr = new Array();
var entrepreneursArr = new Array();
var workArr = new Array();
var listsArr = new Array();
var personalFinanceArr = new Array();
var lifestyleArr = new Array();
var hTimer;
var vTimer;
var thisSection;
var htimer = 0;
var lastSection;
var thisAdDiv;
var vSection;
homeArr[0] = new Array("Video","http://www.forbes.com/video/");
homeArr[1] = new Array("Blogs","http://www.forbes.com/blogs/");
homeArr[2] = new Array("E-mail Newsletters","http://www.forbes.com/membership/signup.jhtml");
homeArr[3] = new Array("People Tracker","http://www.forbes.com/peopletracker/");
homeArr[4] = new Array("Portfolio Tracker","http://www.forbes.com/portfolio/");
homeArr[5] = new Array("Special Reports","http://www.forbes.com/search/storyTypeResults.jhtml?storyType=Special+Report");
businessArr[0] = new Array("Commerce","http://www.forbes.com/commerce/");
businessArr[1] = new Array("Energy","http://www.forbes.com/energy/");
businessArr[2] = new Array("Health Care","http://www.forbes.com/healthcare/");
businessArr[3] = new Array("Logistics","http://www.forbes.com/logistics/");
businessArr[4] = new Array("Manufacturing","http://www.forbes.com/manufacturing/");
businessArr[5] = new Array("Services","http://www.forbes.com/services/");
businessArr[6] = new Array("Technology","http://www.forbes.com/businesstech/");
businessArr[7] = new Array("Washington","http://www.forbes.com/beltway/");
technologyArr[0] = new Array("CIO Network","http://www.forbes.com/cionetwork/");
technologyArr[1] = new Array("Digital Media","http://www.forbes.com/entertainment/");
technologyArr[2] = new Array("Enterprise","http://www.forbes.com/enterprisetech/");
technologyArr[3] = new Array("Imaging","http://www.forbes.com/infoimaging/");
technologyArr[4] = new Array("Intelligent Infrastructure","http://www.forbes.com/infrastructure/");
technologyArr[5] = new Array("Internet","http://www.forbes.com/ebusiness/");
technologyArr[6] = new Array("Personal Tech","http://www.forbes.com/personaltech/");
technologyArr[7] = new Array("Sciences","http://www.forbes.com/sciences/");
technologyArr[8] = new Array("Security","http://www.forbes.com/security/");
technologyArr[9] = new Array("Wireless","http://www.forbes.com/wireless/");
marketsArr[0] = new Array("Bonds","http://www.forbes.com/bonds/");
marketsArr[1] = new Array("Commodities","http://www.forbes.com/commodities/");
marketsArr[2] = new Array("Currencies","http://www.forbes.com/currencies/");
marketsArr[3] = new Array("Economy","http://www.forbes.com/economy/");
marketsArr[4] = new Array("Emerging Markets","http://www.forbes.com/emergingmarkets/");
marketsArr[5] = new Array("Equities","http://www.forbes.com/equities/");
entrepreneursArr[0] = new Array("Finance","http://www.forbes.com/entrepreneurs/finance/");
entrepreneursArr[1] = new Array("Human Resources","http://www.forbes.com/entrepreneurs/humanresources/");
entrepreneursArr[2] = new Array("Law & Taxation","http://www.forbes.com/entrepreneurs/lawtaxation/");
entrepreneursArr[3] = new Array("Sales & Marketing","http://www.forbes.com/entrepreneurs/salesmarketing/");
entrepreneursArr[4] = new Array("Management","http://www.forbes.com/entrepreneurs/management/");
entrepreneursArr[5] = new Array("Technology","http://www.forbes.com/entrepreneurs/technology/");
workArr[0] = new Array("Careers","http://www.forbes.com/leadership/careers/");
workArr[1] = new Array("Compensation","http://www.forbes.com/leadership/compensation/");
workArr[2] = new Array("Corporate Citizenship","http://www.forbes.com/leadership/citizenship/");
workArr[3] = new Array("Corporate Governance","http://www.forbes.com/leadership/governance/");
workArr[4] = new Array("Innovation","http://www.forbes.com/leadership/innovation/");
workArr[5] = new Array("Managing","http://www.forbes.com/leadership/managing/");
workArr[6] = new Array("CEO Network","http://www.forbes.com/ceonetwork/");
workArr[7] = new Array("Reference","http://www.forbes.com/fdc/leadership/reference/");
personalFinanceArr[0] = new Array("ETFs","http://www.forbes.com/finance/etfs/");
personalFinanceArr[1] = new Array("Guru Insights","http://www.forbes.com/finance/guruinsights/");
personalFinanceArr[2] = new Array("Investing Ideas","http://www.forbes.com/finance/investingideas/");
personalFinanceArr[3] = new Array("Investor Education","http://www.forbes.com/finance/investoreducation/");
personalFinanceArr[4] = new Array("Mutual Funds","http://www.forbes.com/finance/funds/");
personalFinanceArr[5] = new Array("Philanthropy","http://www.forbes.com/finance/philanthropy/");
personalFinanceArr[6] = new Array("Retirement & College","http://www.forbes.com/finance/retirementcollege/");
personalFinanceArr[7] = new Array("Taxes & Estates","http://www.forbes.com/finance/taxesestates/");
lifestyleArr[0] = new Array("Collecting","http://www.forbes.com/lifestyle/collecting/");
lifestyleArr[1] = new Array("Health","http://www.forbes.com/lifestyle/health/");
lifestyleArr[2] = new Array("Real Estate","http://www.forbes.com/lifestyle/realestate/");
lifestyleArr[3] = new Array("Sports","http://www.forbes.com/lifestyle/sports/");
lifestyleArr[4] = new Array("Travel","http://www.forbes.com/lifestyle/travel/");
lifestyleArr[5] = new Array("Vehicles","http://www.forbes.com/lifestyle/vehicles/");
lifestyleArr[6] = new Array("Wine & Food","http://www.forbes.com/lifestyle/wine/");
listsArr[0] = new Array("100 Top Celebrities","http://www.forbes.com/celebrity100/");
listsArr[1] = new Array("400 Richest Americans","http://www.forbes.com/richlist/");
listsArr[2] = new Array("Largest Private Cos","http://www.forbes.com/private/");
listsArr[3] = new Array("World's Richest People","http://www.forbes.com/billionaires/");
listsArr[4] = new Array("All Forbes Lists","http://www.forbes.com/lists/");
opinionsArr[0] = new Array("Business Opinions","http://www.forbes.com/opinions/#Business Opinions");
opinionsArr[1] = new Array("Investing","http://www.forbes.com/opinions/#Investing");
opinionsArr[2] = new Array("Technology Opinions","http://www.forbes.com/opinions/#Technology Opinions");
opinionsArr[3] = new Array("Washington & The World","http://www.forbes.com/opinions/#Washington & The World");
home0Arr = new Array();
home1Arr = new Array();
home2Arr = new Array();
home3Arr = new Array();
home4Arr = new Array();
home5Arr = new Array();
business0Arr = new Array();
business1Arr = new Array();
business2Arr = new Array();
business3Arr = new Array();
business3Arr[0] = new Array("Companies","http://www.forbes.com/logistics/companies/");
business3Arr[1] = new Array("People","http://www.forbes.com/logistics/people/");
business3Arr[2] = new Array("Reference","http://www.forbes.com/logistics/reference/");
business3Arr[3] = new Array("Technology","http://www.forbes.com/logistics/technology/");
business4Arr = new Array();
business5Arr = new Array();
business6Arr = new Array();
business7Arr = new Array();
technology0Arr = new Array();
technology1Arr = new Array();
technology1Arr[0] = new Array("Companies","http://www.forbes.com/2005/05/31/digital_companies.html");
technology1Arr[1] = new Array("People","http://www.forbes.com/2005/06/01/digital_people.html");
technology2Arr = new Array();
technology3Arr = new Array();
technology3Arr[0] = new Array("Companies","http://www.forbes.com/infoimaging/companies/");
technology3Arr[1] = new Array("People","http://www.forbes.com/infoimaging/people/");
technology3Arr[2] = new Array("Events","http://www.forbes.com/infoimaging/events/");
technology3Arr[3] = new Array("Reference","http://www.forbes.com/infoimaging/reference/");
technology4Arr = new Array();
technology4Arr[0] = new Array("Companies","http://www.forbes.com/infrastructure/2005/03/14/infrastructure_companies.html");
technology4Arr[1] = new Array("People","http://www.forbes.com/infrastructure/2005/03/14/infrastructure_people.html");
technology4Arr[2] = new Array("Events","http://www.forbes.com/infrastructure/2005/03/15/infrastructure_events.html");
technology4Arr[3] = new Array("Reference","http://www.forbes.com/infrastructure/2005/03/15/infrastructure_reference.html");
technology5Arr = new Array();
technology6Arr = new Array();
technology7Arr = new Array();
technology8Arr = new Array();
markets0Arr = new Array();
markets1Arr = new Array();
markets2Arr = new Array();
markets3Arr = new Array();
markets4Arr = new Array();
markets5Arr = new Array();
entrepreneurs0Arr = new Array();
entrepreneurs1Arr = new Array();
technology8Arr[0] = new Array("Companies","http://www.forbes.com/2006/10/09/tech-security-companies.html");
technology8Arr[1] = new Array("Events","http://www.forbes.com/2006/10/09/tech-security-events.html");
technology8Arr[2] = new Array("People","http://www.forbes.com/2006/10/09/tech-security-people.html");
technology8Arr[3] = new Array("Reference","http://www.forbes.com/2006/10/09/tech-security-reference.html");
technology9Arr = new Array();
entrepreneurs2Arr = new Array();
entrepreneurs3Arr = new Array();
entrepreneurs4Arr = new Array();
entrepreneurs5Arr = new Array();
work0Arr = new Array();
work1Arr = new Array();
work2Arr = new Array();
work3Arr = new Array();
work4Arr = new Array();
work5Arr = new Array();
work6Arr = new Array();
work7Arr = new Array();
personalFinance0Arr = new Array();
personalFinance1Arr = new Array();
personalFinance2Arr = new Array();
personalFinance3Arr = new Array();
personalFinance4Arr = new Array();
personalFinance5Arr = new Array();
personalFinance6Arr = new Array();
personalFinance7Arr = new Array();
lifestyle0Arr = new Array();
lifestyle1Arr = new Array();
lifestyle2Arr = new Array();
lifestyle3Arr = new Array();
lifestyle4Arr = new Array();
lifestyle5Arr = new Array();
lifestyle6Arr = new Array();
lists0Arr = new Array();
lists1Arr = new Array();
lists2Arr = new Array();
lists3Arr = new Array();
lists4Arr = new Array();
opinions0Arr = new Array();
opinions1Arr = new Array();
opinions2Arr = new Array();
opinions3Arr = new Array();

var hiColor = '#990000';
var loColor ='#996666';
var lastColor;
var userIni = 0;
var displayedSectionVar;

function showHMenu(channel) {
	if (fdcsponsor == 'noad') {
		if (document.getElementById('searchbox')) document.getElementById('searchbox').style.top = 40;
		document.getElementById('bigBannerDiv').style.height = 0;
	}
	if ((typeof partner != "undefined") && (partner != "") && ((partner.indexOf("aol")>-1) || (partner.indexOf("msn")>-1) || (partner.indexOf("b365")>-1))) {
		if ((fdcsponsor == 'noad') && (document.getElementById('searchbox'))) document.getElementById('searchbox').style.top = 75;
		else if (document.getElementById('searchbox')) document.getElementById('searchbox').style.top = 167;
		if(document.getElementById('column')) document.getElementById('column').style.top = 100;
	}
	if (document.getElementById('panel1')) {
		document.getElementById('panel1').style.display = "block";
	}
	if(document.getElementById('column')) document.getElementById('column').style.display = "block";
	keepMenu();
	hideVMenu();
	hover(channel);
	if ((typeof curChannel == 'undefined') || (channel != curChannel) || (channel == fdcchannel)) {
		curChannel = channel;
		hideVMenu();
		thisChannArr = eval(channel+'Arr');
		thisChannStr = "";
		thisWidth = 0;
		thisChannX = document.getElementById(channel+'S').offsetParent.offsetLeft;
		thisChannWidth = document.getElementById(channel+'S').offsetWidth;
		if (navigator.appName == 'Microsoft Internet Explorer') thisChannWidth += 8;
		for(i=0;i<thisChannArr.length;i++) {
			if ((typeof displayedSectionVar != "undefined") && (channel + i == displayedSectionVar)) thisHC = "hirizItem";
			else thisHC = "horizItem";
			thisChannStr += '<span id="'+channel+i+'"onMouseOver="showVMenu(\''+channel+i+'\')" onMouseOut="hideMenu()" class="' + thisHC + '" onMouseUp="javascript:nvg(\''+thisChannArr[i][1]+'\')">'+thisChannArr[i][0]+'<\/span>';
		}
	
		document.getElementById('hRO').innerHTML = thisChannStr;
	
		for(i=0;i<thisChannArr.length;i++) {
			thisWidth += document.getElementById(channel+i).offsetWidth;
		}
		thisPadding = (790 - thisWidth)/2;
		if (790-thisChannX>=thisWidth) thisPadding = thisChannX;
		else if (thisChannX+thisChannWidth>=thisWidth) thisPadding = thisChannX + thisChannWidth - thisWidth -6;
		if (thisPadding<0) thisPadding = 0;
	
	
		document.getElementById('hRO').style.width = 790;
		document.getElementById('hRO').style.paddingLeft = thisPadding;
		
		if (document.getElementById('hRO').offsetWidth > 790) {
			document.getElementById('hRO').style.width = 790 - thisPadding;
		}

		if(channel != fdcchannel) {
			for(i=0;i<channelArr.length;i++) {
				thisChannel = channelArr[i];
				if(thisChannel != fdcchannel) {
					document.getElementById(thisChannel+'S').style.backgroundColor = 'transparent';
					document.getElementById(thisChannel+'S').style.color = '#336699';
				}
			}
			document.getElementById(channel+'S').style.backgroundColor = '#ffffff';
			document.getElementById(channel+'S').style.color = '#000000';
			document.getElementById(fdcchannel+'S').style.backgroundColor = 'transparent';
			document.getElementById(fdcchannel+'S').style.color = loColor;
			lastColor = loColor;
			
		} else {
			for(i=0;i<channelArr.length;i++) {
				thisChannel = channelArr[i];
				if(thisChannel != fdcchannel) {
					document.getElementById(thisChannel+'S').style.backgroundColor = 'transparent';
				}
			}
			document.getElementById(fdcchannel+'S').style.backgroundColor = '#ffffff';
			if (!userIni) document.getElementById(fdcchannel+'S').style.color = hiColor;
			lastColor = hiColor;
			showSection();
		}
	}
	userIni=0;
}

function nvg(URL) {
	this.location.href=URL;
}
function hover(channel) {
	document.getElementById(channel+'S').style.color = "#000000";
}
function hideHMenu() {
	document.getElementById('hRO').innerHTML = "";
	document.getElementById('hRO').style.width = 790;
	showHMenu(fdcchannel);
	showAd();
}
function hideVMenu() {
	if ((typeof thisSection != "undefined") && (document.getElementById(thisSection))) {
		if((typeof displayedSectionVar != "undefined") && (displayedSectionVar == thisSection)) document.getElementById(thisSection).style.color = hiColor;
		else document.getElementById(thisSection).style.color = "#336699";
	}
	if ((typeof vSection != "undefined") && (document.getElementById(vSection))) document.getElementById(vSection).style.backgroundColor = 'transparent';
	if (lastSection) lastSection = "";
	document.getElementById('vRO').innerHTML = "";
	document.getElementById('vRO').style.display = 'none';
}
function hideMenu() {
	if ((typeof thisSection != "undefined") && (document.getElementById(thisSection))) {
		if((typeof displayedSectionVar != "undefined") && (displayedSectionVar == thisSection)) document.getElementById(thisSection).style.color = hiColor;
		else document.getElementById(thisSection).style.color = "#336699";
	}
	for(i=0;i<channelArr.length;i++) {
		thisChannel = channelArr[i];
		if (thisChannel != fdcchannel) document.getElementById(thisChannel+'S').style.color = '#336699';
		else document.getElementById(thisChannel+'S').style.color = lastColor;
	}
	hTimer = setTimeout('hideHMenu()',1000);
}
function showVMenu(section) {
	keepMenu();
	hideVMenu();
	document.getElementById(section).style.color ="#000000";
	if (displayedSection != 'Video') {
		if((!thisAdDiv) || (typeof thisAdDiv == "undefined") || (thisAdDiv == "")) {
			if (document.getElementById('adDiv')) thisAdDiv = 'adDiv';
			else if (document.getElementById('dynamicAdColDiv')) thisAdDiv = 'dynamicAdColDiv';
			else if (document.getElementById('dynamicAdWinDiv')) thisAdDiv = 'dynamicAdWinDiv';
		}
		if (document.getElementById(thisAdDiv)) {
			if((document.getElementById(section).offsetLeft+150 > document.getElementById(thisAdDiv).offsetLeft) && (eval(section + 'Arr').length>2)) {
				hideAd();
			}
		}
	}
	thisSection = section;
	showMenu(section);
}
function keepMenu() {
	if (hTimer) clearTimeout(hTimer);
	if (vTimer) clearTimeout(vTimer);
}

function showSection() {
	if ((typeof displayedSection != "undefined") && (displayedSection != "")) {
	   thisChannelArr  = eval(displayedChannel + 'Arr');
	   count = 0;
	   for(i=0;i<thisChannelArr.length;i++) {
		displayedSectionLnk = thisChannelArr[i][0].toLowerCase();
	   	displayedSectionLnk = displayedSectionLnk.replace(/ \& /g,"");
	   	displayedSectionLnk = displayedSectionLnk.replace(/ /g,"");
	   	if (displayedSectionLnk == displayedSection.toLowerCase()) {
			displayedSectionVar = displayedChannel + i;
			break;
		}
		count++;
	   }
	   if(count==thisChannelArr.length) {
	        displayedSectionLnk = displayedSection;
	        displayedSectionLnk = displayedSectionLnk.substr(displayedSection.indexOf(" ")+1,displayedSectionLnk.length);
	   	for(i=0;i<thisChannelArr.length;i++) {
			checkSection = thisChannelArr[i][0].toLowerCase();
	   		if (checkSection.indexOf(displayedSectionLnk)>-1) {
				displayedSectionVar = displayedChannel + i;
				break;
			}
		}
	   }
//stoopid failsafe
	   switch (displayedSection) {
           	case "businesstech":
		displayedSectionVar = "business6";
	        break;
           	case "beltway":
		displayedSectionVar = "business7";
	        break;
           	case "enterprisetech":
		displayedSectionVar = "technology2";
	        break;
           	case "infoimaging":
		displayedSectionVar = "technology3";
	        break;
           	case "ebusiness":
		displayedSectionVar = "technology5";
	        break;
           	case "entrefinance":
		displayedSectionVar = "entrepreneurs0";
	        break;
           	case "entrehr":
		displayedSectionVar = "entrepreneurs1";
	        break;
           	case "entrelaw":
		displayedSectionVar = "entrepreneurs2";
	        break;
           	case "entresales":
		displayedSectionVar = "entrepreneurs3";
	        break;
           	case "entremgmt":
		displayedSectionVar = "entrepreneurs4";
	        break;
           	case "entretech":
		displayedSectionVar = "entrepreneurs5";
	        break;
           	case "estate_planning":
		displayedSectionVar = "personalFinance0";
	        break;
           	case "entertainment":
		displayedSectionVar = "technology1";
	        break;
	   }
	   if (document.getElementById(displayedSectionVar)) document.getElementById(displayedSectionVar).style.color=hiColor;
	}
}
function showMenu(section) {
	thisSectionArr  = eval(section + 'Arr');
	if((thisSectionArr.length>0) && (displayedSection != "Video")) {
		keepMenu();
		document.getElementById('vRO').style.display = 'block';
		if(document.getElementById(section).offsetLeft>640) document.getElementById('vRO').style.left = 640;
		else document.getElementById('vRO').style.left = document.getElementById(section).offsetLeft;
		vSection = section;
		dropStr = '';
		for(i=0;i<thisSectionArr.length;i++) {
			dropStr += '<div class="vertItem" onMouseOver="hoverAct(\''+section+i+'\',1)" id="'+section+i+'H"><a href="' + thisSectionArr[i][1]+'" class="vertLink" id="'+section+i+'L">'+thisSectionArr[i][0]+'</a></div>';
		}
		document.getElementById('vRO').innerHTML = dropStr;
	}
}
function hoverAct(section,on) {
	if (lastSection) {
		document.getElementById(lastSection+'L').style.color = '#369';
	}
	document.getElementById(section+'L').style.color = '#000000';
	lastSection = section;
}
function showAd() {
	if (searchTab == 0) {
		if(document.getElementById(thisAdDiv) != null) document.getElementById(thisAdDiv).style.display = 'block';
  	}
}
function hideAd() {
 	if(document.getElementById(thisAdDiv)) {
		document.getElementById(thisAdDiv).style.display = 'none';
	} 
}

//attache

function attache() {
	backTo = this.location.href;

	if ((backTo.indexOf('forbes.com')>-1) && ((typeof noattache == "undefined") || !noattache)) {
		if(typeof displayedSection == "undefined") displayedSection = '';
		if (!displayedSection) displayedSection = '';

		var agt = navigator.userAgent.toLowerCase();
		var browserVersion = parseInt(navigator.appVersion);

		var is_ie      = (agt.indexOf("msie") != -1);
		var is_ff      = (agt.indexOf("firefox") != -1);
		var is_si      = (agt.indexOf("safari") != -1);
		var is_ie3     = (is_ie && (browserVersion < 4));
		var is_ie4     = (is_ie && (browserVersion == 4) && (agt.indexOf("msie 4")!=-1) );
		var is_ie5     = (is_ie && (browserVersion == 4) && (agt.indexOf("msie 5.0")!=-1) );
		var is_ie5up   = (is_ie && !is_ie3 && !is_ie4);
		var is_mz    = (is_si || is_ff);
		var is_ok    = (is_ie5up || is_mz);

		if ((backTo.indexOf('/portfolio/')==-1) && (backTo.indexOf('/preview/')==-1) && ((backTo.indexOf('/membership/')==-1) || (backTo.indexOf('editprofile')!=-1)) && (backTo.indexOf('my.forbes.com')==-1) && (is_ok)) {
			document.write('<style>');
			document.write('.fifthN {');
			document.write('position: absolute;');
			document.write('display: none;');
			document.write('left: 790;');
			document.write('width: 215px;');
			document.write('top: 60;');
			document.write('border-left: solid #ffffff 1px;');
			document.write('border-top: solid #ffffff 1px;');
			document.write('}');
			document.write('</style>');
		  	document.write('<div id="column" class="fifthN">');
	   		forbes0 = document.cookie.indexOf('forbesmemb=');
	   		if (forbes0 != -1) {
	   			pznId = document.cookie.substr(forbes0+11);
       		
		  	     	if (pznId.indexOf(";") != -1) pznId = pznId.substr(0, pznId.indexOf(';'));
  	      	
		  	      	fifth0 = document.cookie.indexOf('fifthinit=1');
        
		  	      	if (fifth0 != -1) fifthInit = 1;
		  	     	else fifthInit = 0;

		 	       	document.write('<iframe src="http://my.forbes.com/fifth/fifth.do?pzn_id=' + pznId + '&fifthInit=' + fifthInit + '&backto=' + backTo + '&primSec=' + displayedSection + '" width="215" height="3000" scrolling="no" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0"><\/iframe>');
			        document.cookie = 'fifthinit=0;path=/;'
		    	} else {
		        	 document.write('<iframe src="http://www.forbes.com/fifth/fifthNew.html?backto=' + backTo + '&primSec=' + displayedSection + '" width="215" height="800" scrolling="no" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0"><\/iframe>');
		    	}
		    	document.write('<\/div>');
		}
	}
}
//end attache
var welcomeCookie = "undefined";

function firstHTML() {
	doOmniture();
	attache();
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	document.write('<tr>');
	document.write('<td colspan="2" bgcolor="#336699" height="15">');
	document.write('&nbsp;');
	document.write('<\/td>');
	document.write('<\/tr>');
	document.write('<tr>');
	document.write('<td bgcolor="#336699"><div id ="bigBannerDiv" style="height: 90px";>');
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="780">');
	document.write('<tr>');
	document.write('<td align="center">');
}

function secondHTML() {
	document.write('<\/td>');
	document.write('<\/tr>');
	document.write('<\/table><\/div>');
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="780" style="padding-bottom:2px;">');
	document.write('<tr>');
	document.write('<td bgcolor="#336699" colspan="5" height="15">');
	document.write('&nbsp;');
	document.write('<\/td>');
	document.write('<\/tr>');
	document.write('<tr valign="bottom">');
	document.write('<td rowspan="2" width="10">');
	document.write('&nbsp;');
	document.write('<\/td>');
	document.write('<td width="160">');
	document.write('<a href="http://www.forbes.com"><img src="http://images.forbes.com/media/assets/forbes_home_logo.gif" vspace="0" hspace="0" width="150" height="49" border="0"><\/a>');
	document.write('<\/td><td rowspan="2" width="10"><\/td>');
	document.write('<td colspan="2" width="420">&nbsp;</td>');
	document.write('<td rowspan="2" width="180" valign="top" align="right" height="70">');
}

function thirdHTML() {
	document.write('<\/td>');
	document.write('<\/tr>');
	document.write('<tr valign="bottom" bgcolor="#336699">');
	document.write('<td class="intlhomepagelink" nowrap><nobr><a href="http://www.forbes.com/home_usa/" class="intlhomepagelink">U.S.<\/a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.forbes.com/home_europe/" class="intlhomepagelink">EUROPE<\/a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.forbes.com/home_asia/" class="intlhomepagelink">ASIA<\/a><\/nobr><\/td>');
	document.write('<td class="newtagline">HOME PAGE FOR THE WORLD\'S BUSINESS LEADERS</td>');
	document.write('<td class="freetrialtxt" align="right"><a href="https://w1.buysub.com/servlet/OrdersGateway?cds_mag_code=FRB&cds_response_key=IMHFT012" class="whitelink">Free Trial Issue</a>&nbsp;</td>');
	document.write('<\/tr>');
	document.write('<\/table>');
	//end search code
	document.write('<\/td>');
	document.write('<td width="100%" bgcolor="#336699" valign="top"><div class="newlogin">');
	forbes0 = document.cookie.indexOf('forbesmemb=');
	if (forbes0 != -1) {
		document.write('<b>Welcome<\/b><br>');
		document.write('<a href="http://www.forbes.com/membership/editprofile.jhtml" class="whitelink">Edit&nbsp;Profile<\/a> | ');
		document.write('<a href="http://www.forbes.com/portfolio/" class="whitelink">My&nbsp;Portfolio<\/a> | ');
		document.write('<a href="http://www.forbes.com/membership/external_logout.jhtml" class="whitelink">Log&nbsp;Out<\/a>');
	} else {
	thisURL = this.location.href;
		document.write('<a href="http://www.forbes.com/membership/signup.jhtml?gotoURL=' + thisURL + '" class="whitelink"><b>Become&nbsp;a&nbsp;member<\/b><\/a><br>');
		document.write('<a href="http://www.forbes.com/portfolio/" class="whitelink">Portfolio<\/a>&nbsp;|&nbsp;<a href="http://www.forbes.com/membership/signup.jhtml?gotoURL=' + thisURL + '" class="whitelink">Register<\/a>');
	}
	document.write('<\/div><\/td>');
	document.write('<\/tr>');
	document.write('<\/table>');
	document.write('<div class="navbg">');
	document.write('<table cellspacing="1" cellpadding="0" border="0" width="790"><tr align="center">');
	for (i=0;i<channelArr.length;i++) {
		thisChannel = channelArr[i];
		thisLongChannel = longChannelArr[i];
		thisChannelURL = channelURLArr[i];
		document.write('<td bgcolor="#e2ebf4"><div class="navitem" id="'+thisChannel+'S" onMouseOut="hideMenu();" onMouseOver="showHMenu(\''+thisChannel+'\');" onMouseUp="javascript:nvg(\'http://www.forbes.com'+thisChannelURL+'\')">&nbsp;'+thisLongChannel+'&nbsp;<\/div><\/td>');
	
	}
	document.write('</tr></table><\/div>');
	document.write('<div class="horizRO" id="hRO"></div>');
	document.write('<div class="vertRO" id="vRO" onMouseOut="hideMenu();" onMouseOver="keepMenu();"></div>');
	if (!noSearch) document.write('<div onMouseDown="hideSearchPanel()">');
	document.write('<br>');
}
var partners = 0;
function doPartners() {
	partners = 1;	
	if (document.cookie.indexOf('partner_session=aolre') != -1) {
		partner = 'aolre';
   		document.write('<\/div><script src=\"http://aolsvc.aol.com/tools/hat/realestate/hat.js\" type=\"text/javascript\"></script>');
	}
	else if (document.cookie.indexOf('partner_session=aolautos') != -1) {
		partner = 'aolautos';
   		document.write('<\/div><div style="height:14px;background-color: #99aabb;width:100%">&nbsp;<\/div><script src=\"http://cdn.channel.aol.com/ch_autos/autoshat.js\" type=\"text/javascript\"></script>');
	}
	else if (document.cookie.indexOf('partner_session=aol') != -1) {
		partner = 'aol';
   		document.write('<\/div><div style="background-color:#226633;width:100%;height:10px;">&nbsp;<\/div><script src=\"http://cdn.channel.aol.com/_media/ch_pf/partner_pf_hat.js\" script type=\"text/javascript\"></script>');
	}
	else if (document.cookie.indexOf('partner_session=msnbc') != -1) {
		partner = 'msnbc';
   		document.write('<\/div><script src=\"http://images.forbes.com/media/partners/msnbc/partner_msnbc_hat.js\" script type=\"text/javascript\"></script>');
	}
	else if (document.cookie.indexOf('partner_session=msnuk') != -1) {
		partner = 'msnuk';
   		document.write('<\/div><script src=\"http://images.forbes.com/media/partners/msn/partner_msnuk_hat.js\" script type=\"text/javascript\"></script>');
	}
	else if (document.cookie.indexOf('partner_session=msnre') != -1) {
		partner = 'msnre';
   		document.write('<\/div><script src=\"http://images.forbes.com/media/partners/msn/partner_msnre_hat.js\" script type=\"text/javascript\"></script>');
	}
	else if (document.cookie.indexOf('partner_session=msn') != -1) {
		partner = 'msn';
   		document.write('<\/div><script src=\"http://images.forbes.com/media/partners/msn/partner_msn_hat.js\" script type=\"text/javascript\"></script>');
	}
	else if (document.cookie.indexOf('partner_session=b365') != -1) {
		partner = 'b365';
   		document.write('<\/div><script src=\"http://images.forbes.com/media/partners/b365/partner_b365_hat.js\" script type=\"text/javascript\"></script>');
	}
	else partners=0;
}
function doOmniture() {
	document.write('<div style="display:none;">');
	OAS_AD('x5');
	if(welcomeCookie != "undefined") {
		if ((document.cookie.indexOf(welcomeCookie)==-1) && (navigator.userAgent.indexOf("IE")>-1) && (this.location.host.indexOf("forbes.com")!=-1) && (this.location.search.indexOf("partner=yahoo")==-1) && (this.location.search.indexOf("partner=msn")==-1)&& (this.location.search.indexOf("partner=aol")==-1) && (this.location.search.indexOf('nowelcome')==-1)) {
			var tomorrow = new Date();
			var nowPlus =  tomorrow.getTime() + (24*60*60*1000);
			tomorrow.setTime(nowPlus);
			document.cookie = welcomeCookie +'__welcome; path=/; domain=.forbes.com; expires=' + tomorrow.toGMTString();
  
			if (document.cookie.indexOf(welcomeCookie) != -1){
				this.location='http://www.forbes.com/fdc/welcome.shtml';
 			}
		}
	}
	OAS_AD('AdController');
	if(displayedSection != 'Video') {
		//omniture
		document.write('<span id="omniture" style="height:1px"><script language="JavaScript" src="http://images.forbes.com/scripts/omniture/s_code_forbescom.js"><' + '\/script><\/span><div style="position:absolute;top:0;">');
	}
	document.write('<\/div><\/div>');
}
function doSlide1() {
	document.getElementById('searchbox').style.display = 'none';
	doOmniture();
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="1002">');
	document.write('<tr>');
	document.write('<td colspan="3" bgcolor="#336699" height="5" style="font-size:5px;">');
	document.write('&nbsp;');
	document.write('<\/td>');
	document.write('<\/tr>');
	document.write('<tr>');
	document.write('<td width=" 160" bgcolor="#336699" valign="bottom">');
	document.write('<a href="http://www.forbes.com"><img src="http://images.forbes.com/media/assets/forbes_home_logo.gif" vspace="3" width="150" height="49" border="0" hspace="30"><\/a>');
	document.write('<\/td><td width="40" bgcolor="#336699" rowspan="2">&nbsp;<\/td>');
	document.write('<td bgcolor="#336699" rowspan="2"><div id ="bigBannerSlide" style="height:90px">');
}
function doSlide2() {
	document.write('<\/div></td></tr>');
	document.write('<tr valign="top" bgcolor="#336699">');
	document.write('<td class="intlhomepagelink" nowrap align="center"><a href="http://www.forbes.com/home_usa/" class="intlhomepagelink">U.S.<\/a>&nbsp;|&nbsp;<a href="http://www.forbes.com/home_europe/" class="intlhomepagelink">EUROPE<\/a>&nbsp;|&nbsp;<a href="http://www.forbes.com/home_asia/" class="intlhomepagelink">ASIA<\/a><\/td></tr>');
	document.write('<tr>');
	document.write('<td colspan="3" bgcolor="#336699" height="5" style="font-size:5px;">');
	document.write('&nbsp;');
	document.write('<\/td>');
	document.write('<\/tr><\/table>');
	if(!nonav) {
		document.write('<div class="navbg">');
		document.write('<table cellspacing="1" cellpadding="0" border="0" width="1003"><tr align="center">');
		for (i=0;i<channelArr.length;i++) {
			thisChannel = channelArr[i];
			thisLongChannel = longChannelArr[i];
			thisChannelURL = channelURLArr[i];
			document.write('<td bgcolor="#e2ebf4" nowrap="nowrap"><div class="navitem" id="'+thisChannel+'S" onMouseOut="hideMenu();" onMouseOver="showHMenu(\''+thisChannel+'\');" onMouseUp="javascript:nvg(\'http://www.forbes.com'+thisChannelURL+'\')">&nbsp;'+thisLongChannel+'&nbsp;<\/div><\/td>');
		}
		document.write('<td rowspan="3" bgcolor="#336699" width="217" align="left" valign="middle"><div class="rightblue"><div class="newlogin">');
		forbes0 = document.cookie.indexOf('forbesmemb=');
		if (forbes0 != -1) {
			document.write('<b>Welcome<\/b><br>');
			document.write('<a href="http://www.forbes.com/membership/editprofile.jhtml" class="whitelink">Edit&nbsp;Profile<\/a> | ');
			document.write('<a href="http://www.forbes.com/portfolio/" class="whitelink">My&nbsp;Portfolio<\/a> | ');
			document.write('<a href="http://www.forbes.com/membership/external_logout.jhtml" class="whitelink">Log&nbsp;Out<\/a>');
		} else {
		thisURL = this.location.href;
			document.write('<a href="http://www.forbes.com/membership/signup.jhtml?gotoURL=' + thisURL + '" class="whitelink"><b>Become&nbsp;a&nbsp;member<\/b><\/a><br>');
			document.write('<a href="http://www.forbes.com/portfolio/" class="whitelink">Portfolio<\/a>&nbsp;|&nbsp;<a href="http://www.forbes.com/membership/signup.jhtml?gotoURL=' + thisURL + '" class="whitelink">Register<\/a>');
		}
		document.write('</div></div></td></tr><tr><td colspan="10"><div class="horizRO" id="hRO"></div></td></tr>');
		document.write('<tr><td colspan="10"><div class="vertRO" id="vRO" onMouseOut="hideMenu();" onMouseOver="keepMenu();"></div>');
		document.write('</td></tr></table><\/div>');
		var agt = navigator.userAgent.toLowerCase();
		var is_ie      = (agt.indexOf("msie") != -1);
		if (!is_ie) document.write ('<br><br>');
	}
	document.write('<div class="sponsorSlide"><script language="JavaScript">OAS_AD("StoryLogo");</script><\/div>');
}

function adjustSlide() {
	if (nonav) {
		if (!partners) {
			document.getElementById('createAlerts').style.top = '147px';
			document.getElementById('dynamicAdWinDiv').style.top = '109px';
		} else {
			document.getElementById('createAlerts').style.top = '187px';
			document.getElementById('dynamicAdWinDiv').style.top = '149px';
		}
	} else {
		if (!partners) {
			document.getElementById('createAlerts').style.top = '201px';
			document.getElementById('dynamicAdWinDiv').style.top = '162px';
		} else {
			document.getElementById('createAlerts').style.top = '241px';
			document.getElementById('dynamicAdWinDiv').style.top = '202px';
		}
	}
}
doPartners();
