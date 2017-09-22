var lycos_ad = Array();
var lycos_search_query = "";
var if_Site_ID = "lycos";
var if_sid=108;
var mep1="&Property=Tripod&tripodUsertype=visitor";

function lycos_load_script(url) {
    document.write('<script type="text/javascript" src="' + url + '"></script>');
}

function lycos_load_style(url) {
    if (document.createStyleSheet) {
        document.createStyleSheet(url);
    } else {
	if (document.createElement && document.getElementsByTagName) {
	    var link = document.createElement("link");
	    link.rel = "stylesheet";
	    link.type = "text/css";
	    link.href = url;
	    link.media = "screen";
	    document.getElementsByTagName('head').item(0).appendChild(link);
	}
    }
}

function lycos_get_cookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
}

function lycos_get_query_variable(varname) {
    var qs = window.location.search.substring(1);
    var pairs = qs.split("&");
    
    for (var i = 0; i < pairs.length; i++) {
	var pos = pairs[i].indexOf('=');
	if (pos == -1) {continue;}
	var argname = pairs[i].substring(0,pos);
	var argvalue = pairs[i].substring(pos+1);
	if (argname == varname) {
            return decodeURIComponent(argvalue.replace("+", " "));
	}
    }
    return null;
}


function lycos_show_bottom_ad() {
    if (document.getElementById && document.getElementsByTagName) {
	var footer_ad = document.getElementById("FooterAd");
	var body_element = document.getElementsByTagName("body").item(0);
	if (footer_ad && body_element) {
	    body_element.appendChild(footer_ad);
	    footer_ad.style.display = "block";
	}
    }
}

function lycos_check_size() {
    var window_width = 0, window_height = 0;
    if (typeof(window.innerWidth) == 'number' ) {
        window_width = window.innerWidth;
        window_height = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        window_width = document.documentElement.clientWidth;
        window_height = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        window_width = document.body.clientWidth;
        window_height = document.body.clientHeight;
    }

    var lycos_track_img = document.createElement('img');
    if ((window_width < 300) || (window_height < 300)) {
        lycos_track_img.src=this.lycos_ad_track_small+"&w="+window_width+"&h="+window_height;
        return 0;
    } else {
        lycos_track_img.src=this.lycos_ad_track_served+"&w="+window_width+"&h="+window_height;
        return 1;
    }
}

function lycos_top100(dir) {
    top.location.href='http://lt.tripod.com/tp_toolbar/'+dir+'/_h_/'+this.lycos_ad_www_server+'/bin/top100/top100.pl?a='+dir+"&url="+location.href;
}

function lycos_get_search_referrer() {
    var searchReferrers=[[/^http:\/\/search.msn.com\/.*[\?\&]q=([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 1],
                         [/^http:\/\/.*[\?\&]q=cache[^\+]*[\+]([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 1],
                         [/^http:\/\/.*looksmart.com\/.*[\?\&]key=([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 1],
                         [/^http:\/\/.*[\?\&\/](query|search|MT|q|p|ask|key|qkw|k|qry|K)=([a-zA-Z0-9_\+%\-\.\: \'\"]+)/i, 2]];
    var query;
    for (var i=0; i<searchReferrers.length; i++) {
        var result = document.referrer.match(searchReferrers[i][0]);
        if (result) {
            query = unescape(result[searchReferrers[i][1]].replace("+", " "));
            break;
        }
    }
    return query;
}

function lycos_draw_promo() {
    var promo_html;
    if (this.lycos_ad["top_promo"]) {
	promo_html = this.lycos_ad["top_promo"]+'&nbsp;&nbsp;';
    }
    if (this.lycos_ad["smallbox"]) {
	promo_html += this.lycos_ad["smallbox"];
    }
    document.write(promo_html);
}

function lycos_draw_toolbar() {
    lycos_load_style("/adm/ad/toolbar.css");

    var lycos_canada = (this.GeoIP && GeoIP["COUNTRY_CODE"] && 
			(GeoIP["COUNTRY_CODE"] == "CA"));
    var toolbar_html = 
	'  <div id="tb">';
    var search_query_name = "query";
    var search_query_value = "";
    if (this.lycos_search_query) {
	search_query_value = this.lycos_search_query;
    } else if (this.lycos_ad_category && this.lycos_ad_category.find_what) {
        search_query_value = this.lycos_ad_category.find_what;
    }
    search_query_value = search_query_value.replace('"', "");

    if (lycos_canada) {
	search_query_name = "q";

	var lycos_ca_frame_src = "http://www.lycos.ca/header-tripod-member/?Site=LycosTripod";
	if (this.lycos_search_query) {
	    lycos_ca_frame_src += "&amp;search_query="+encodeURIComponent(this.lycos_search_query);
	}
	if (this.lycos_ad_category) {
	    if (this.lycos_ad_category.ontarget) {
		lycos_ca_frame_src += "&amp;ontarget="+this.lycos_ad_category.ontarget;
	    }
	    if (this.lycos_ad_category.dmoz) {
		lycos_ca_frame_src += "&amp;dmoz="+encodeURIComponent(this.lycos_ad_category.dmoz);
	    }
	    if (this.lycos_ad_category.find_what) {
		lycos_ca_frame_src += "&amp;find_what="+encodeURIComponent(this.lycos_ad_category.find_what);
	    }
	}
	toolbar_html += 
	    '    <form name="lycos_search" method="get" target="_top" action="http://lycos.ca/search.html">' +
            '      <input type="hidden" name="domains" value="http://www.lycos.ca" />'+
            '      <input type="hidden" name="client" value="pub-2715680911438820" />'+
            '      <input type="hidden" name="channel" value="7131881753" />'+
            '      <input type="hidden" name="sa" value="Search" />'+
            '      <input type="hidden" name="cof" value="GALT:204A6C;DIV:336699;VLC:663399;ALC:204A6C;LC:204A6C;BGC:ffffff;T:204A6C;GFNT:0000FF;GIMP:0000FF;S:http://www.lycos.ca;FORID:11;" />' +
	    '      <table cellpadding="0" cellspacing="0" border="0" width="100%">' +
	    '        <tr>' +
	    '          <td colspan="12"><iframe scrolling="no" width="100%" height="100" frameborder="0" marginheight="0" marginwidth="0" src="'+lycos_ca_frame_src+'"></iframe></td>' +
	    '        </tr>';
    } else {
	toolbar_html += 
	    '    <form name="lycos_search" method="get" target="_top" action="http://'+this.lycos_ad_www_server+'/bin/search/pursuit">' +
	    '      <table cellpadding="0" cellspacing="0" border="0" width="100%" height="52">';
    }
    
    toolbar_html += 
	'        <tr>' +
	'          <td height="24" colspan="2">' +
	'            <table cellpadding="0" cellspacing="0" border="0">' +
	'              <tr>' +
	'                <td><strong>&nbsp;Search:</strong></td>' +
	'                <td><input type="radio" name="cat" value="lycos" checked="checked"></td>' +
	'                <td nowrap="nowrap">The Web</td>' +
	'                <td><input type="radio" name="cat" value="tripod_member"></td>' +
	'                <td nowrap="nowrap">Tripod</td>' +
	'              </tr>' +
	'            </table>' +
	'          </td>'+
/*** for later inclusion ***/
//        '          <td>';
//    document.write(toolbar_html); toolbar_html = "";
//    drawRatingsWidget('999','Tripod_Pages','NonBlog','testing');
//    toolbar_html += 
//	'          </td>' +
	'          <td>';
    if (this.lycos_ad["toolbar_text"]) {
	toolbar_html += this.lycos_ad["toolbar_text"];
    }
    toolbar_html += 
	'          </td>' +
	'          <td><img src="http://af.lygo.com/d/toolbar/abuse.gif" alt="icon" title="report abuse" height="8" hspace="3" width="8"><a href="http://help.lycos.com/newticket.php" target="_top">Report Abuse</a>&nbsp;</td>' +
	'          <td><img src="http://af.lygo.com/d/toolbar/build.gif" alt="icon" title="build a page" height="10" hspace="3" width="9">';
    if (lycos_get_cookie("Authorization") == null) {
	toolbar_html += 
	    '<a href="http://lt.tripod.com/tp_toolbar/build/_h_/'+this.lycos_ad_www_server+'/campaigns/landing/toolbar.html" target="_top">Build a Site</a>&nbsp;</td>';
    } else {
	toolbar_html += 
	    '<a href="http://lt.tripod.com/tp_toolbar/edit/_h_/'+this.lycos_ad_www_server+'/build/index.html" target="_top">Edit your Site</a>&nbsp;</td>';
    }
    toolbar_html +=
	'          <td rowspan="2" width="150"><a href="http://'+this.lycos_ad_www_server+'" target="_top"><img src="http://af.lygo.com/d/toolbar/logo.tripod-toolbar.gif" alt="logo" title="hosted by tripod" border="0" height="50" width="150"></a></td>' +
	'         <td rowspan="2" width="50"><a href="http://clk.atdmt.com/MON/go/lycsnmon0810000061mon/direct/01/499581376" target="_new"><img src="http://ly.lygo.com/ly/ads/monster_50x50.gif" height="50" width="50" border="0" alt="button" title="Monster"/></a></td>' +
	'        </tr>' +
	'        <tr>' +
	'          <td>&nbsp;<input id="query" type="text" name="'+search_query_name+'" value="'+search_query_value+'"> <input name="submit" class="buttons" type="image" value="image" src="http://ly.lygo.com/ly/hp/ggiBut.gif" /></td>' +
	'          <td id="angle"><img src="http://af.lygo.com/d/toolbar/angle25x25.gif" width="25" height="25" alt="angle graphic" title=""/></td>' + 
	'          <td colspan="3" class="bot_links">' +
	'              <span class="raquo">&laquo;</span>' +
	'              <span id="lycos_top100">' +
	'                <a href="javascript:lycos_top100(\'prev\')" target="_top">Previous</a> |' +
	'                <a href="http://lt.tripod.com/tp_toolbar/top100/_h_/'+this.lycos_ad_www_server+'/members/top100_1.html" target="_top">Top 100</a> |' +
	'            <a href="javascript:lycos_top100(\'next\')" target="_top">Next</a>' +
	'          </span>' +
	'          <span class="raquo">&raquo;</span>' +
	'          </td>' +
	'        </tr>' +
	'      </table>' +
	'    </form>' +
	'</div>';
    document.write(toolbar_html);
}

function lycos_insert_ads() {
    this.lycos_search_query = lycos_get_search_referrer();

    var lycos_ad_mgr = new AdManager();

    if (this.lycos_search_query) {
        lycos_ad_mgr.setForcedParam("keyword", this.lycos_search_query);
    } else if (this.lycos_ad_category && this.lycos_ad_category.find_what) {
	lycos_ad_mgr.setForcedParam("keyword", this.lycos_ad_category.find_what);
    }

    if (this.lycos_ad_category && this.lycos_ad_category.dmoz) {
        lycos_ad_mgr.setForcedParam("page", this.lycos_ad_category.dmoz);
	var tax = this.lycos_ad_category.dmoz.split("/");
	if (tax[0]) {
	    this.mep1 += "&tripodSection="+encodeURIComponent(tax[0]);
	    if (tax[1]) {
		this.mep1 += "&tripodSubsection="+encodeURIComponent(tax[1]);
	    }
	}
    } else {
        lycos_ad_mgr.setForcedParam("page", "member");
    }
    if (this.tripod_member_name) {
	this.mep1 += "&tripodPage="+encodeURIComponent(this.tripod_member_name);
    }

    var tripod_source = lycos_get_query_variable("tripodSource");
    if (tripod_source) {
	this.mep1 += "&tripodSource="+encodeURIComponent(tripod_source);
    }

    lycos_load_script("http://lycos.247realmedia.com/scripts/lycos_if.js");

    var lycos_prod_set = lycos_ad_mgr.chooseProductSet();
    lycos_ad_mgr.renderHeader();

    var slots = ["leaderboard", "leaderboard2", "toolbar_image", 
		 "toolbar_text", "smallbox", "top_promo"];
    for (var slot in slots) {
	if (lycos_ad_mgr.isSlotAvailable(slots[slot])) {
	    this.lycos_ad[slots[slot]] = lycos_ad_mgr.getSlot(slots[slot]);
	}
    }

    lycos_ad_mgr.renderFooter();

    if (this.lycos_ad["leaderboard"]) {
        document.write('<div id="tb_container">');
	lycos_draw_toolbar();
	document.write(lycos_ad["leaderboard"]);
    }
}

if (lycos_check_size()) {
    lycos_insert_ads();
}
