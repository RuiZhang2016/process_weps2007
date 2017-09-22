var lycos_top_ad;
var lycos_bottom_ad;
var lycos_search_query = "";
var if_Site_ID = "lycos";
var if_sid="3";
var mep1="&site=angelfire&section=memberland";

function lycos_load_script(url) {
    document.write('<sc'+'ript type="text/javascript" src="' + url + '"></sc'+'ript>');
}

function lycos_load_style(url) {
    if (document.createStyleSheet) {
        document.createStyleSheet(url);
    } else {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        link.media = "screen";
        document.getElementsByTagName('head')[0].appendChild(link);
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

function lycos_show_bottom_ad() {
    var footer_ad = document.getElementById("FooterAd");
    var body_element = document.getElementsByTagName("body").item(0);
    if (footer_ad && body_element) {
        body_element.appendChild(footer_ad);
        footer_ad.style.display = "block";
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
        lycos_track_img.src=lycos_ad_track_small+"&w="+window_width+"&h="+window_height;
        return 0;
    } else {
        lycos_track_img.src=lycos_ad_track_served+"&w="+window_width+"&h="+window_height;
        return 1;
    }
}

function lycos_top100(dir) {
    top.location.href='http://lt.angelfire.com/af_toolbar/'+dir+'/_h_/'+lycos_ad_www_server+'/cgi-bin/top100/top100.pl?a='+dir+"&url="+location.href;
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
            query = unescape(result[searchReferrers[i][1]].replace(/\+/g, ' '));
            break;
        }
    }
    return query;
}

function lycos_draw_promo() {
    var promo_html = '<iframe scrolling="no" width="758" height="50" frameborder="0" marginheight="0" marginwidth="0" src="http://ly.lygo.com/ly/video/ad/banner.html?site=ANGELFIRE"></iframe>&nbsp;&nbsp;';
    promo_html += '<a href="http://clk.atdmt.com/MON/go/lycsnmon0650000343mon/direct/01/" target="_top"><img src="http://ly.lygo.com/ly/ads/monster_50x50.gif" width="50" height="50" alt="Monster" border="0" /></a><img src="http://view.atdmt.com/MON/view/lycsnmon0650000343mon/direct/01/" width="1" height="1" alt="" />';
    promo_html += "<br /><br />";
    document.write(promo_html);
}

function lycos_draw_toolbar() {
    lycos_load_style("/sys/ad/toolbar.css");

    var lycos_canada = (this.GeoIP && GeoIP["COUNTRY_CODE"] && 
			(GeoIP["COUNTRY_CODE"] == "CA"));


    var toolbar_rotators = ['<td nowrap="nowrap">&nbsp;&nbsp;&nbsp;<img src="http://af.lygo.com/d/toolbar/golfball_14x16.gif" width="14" height="16" alt=""></td><td nowrap="nowrap">&nbsp;<a href="http://r.lycos.com/r/tlbr_gv_albatross/http://games.lycos.com/albatross18/" target="_top">Free Online Golf</a></td>',
			    '<td nowrap="nowrap">&nbsp;&nbsp;&nbsp;<img src="http://af.lygo.com/d/toolbar/lycos_spot_14x16_1k.gif" width="14" height="16" alt=""></td><td nowrap="nowrap">&nbsp;<a href="http://clk.atdmt.com/MON/go/lycsnmon0650000345mon/direct/01/" target="_top">Search Jobs</a><img src="http://view.atdmt.com/MON/view/lycsnmon0650000345mon/direct/01/" width="1" height="1" alt=""></td>',
			    '<td nowrap="nowrap">&nbsp;&nbsp;&nbsp;<img src="http://af.lygo.com/d/toolbar/planeticon.gif" width="14" height="16" alt=""></td><td nowrap="nowrap">&nbsp;<a href="http://r.lycos.com/r/tlbr_planet/http://planet.lycos.com" target="_top">Planet</a></td>',
			    '<td nowrap="nowrap">&nbsp;&nbsp;&nbsp;<img src="http://af.lygo.com/d/toolbar/mobile_sm.gif" width="16" height="16" alt=""></td><td nowrap="nowrap">&nbsp;<a href="http://www.lycos.playp.biz/mobgames/Default.aspx? StoreFrontID=0006-0006-3000-0001" target="_top">Games  &amp; Ringtones</a></td>',
			    '<td nowrap="nowrap">&nbsp;&nbsp;&nbsp;<img src="http://af.lygo.com/d/toolbar/lycosphone_16x16.gif" width="16" height="16" alt=""></td><td nowrap="nowrap">&nbsp;<a href="http://lycos.globe7.com" target="_top">Lycos Phone</a></td>'];


    var toolbar_html = 
	'<div style="width:100%" align="center">' +
	'  <div style="width: 800px; margin-bottom: 10px;" id="tb">';

    var search_query_name = "query";
    var search_query_value = "";
    if (this.lycos_search_query) {
	search_default = lycos_search_query;
    }

    if (lycos_canada) {
	search_query_name = "q";

	var lycos_ca_frame_src = "http://www.lycos.ca/header-angelfire-member/?Site=LycosAngelfire";
	if (this.lycos_search_query) {
	    lycos_ca_frame_src += "&amp;search_query="+encodeURIComponent(lycos_search_query);
	}
	if (this.lycos_ad_category) {
	    if (lycos_ad_category.ontarget) {
		lycos_ca_frame_src += "&amp;ontarget="+lycos_ad_category.ontarget;
	    }
	    if (lycos_ad_category.dmoz) {
		lycos_ca_frame_src += "&amp;dmoz="+encodeURIComponent(lycos_ad_category.dmoz);
	    }
	    if (lycos_ad_category.find_what) {
		lycos_ca_frame_src += "&amp;find_what="+encodeURIComponent(lycos_ad_category.find_what);
	    }
	}
	toolbar_html += 
	    '    <form name="lycos_search" method="get" target="_top" style="margin: 0px"' +
	    '          action="http://lycos.ca/search.html">' +
            '      <input type="hidden" name="domains" value="http://www.lycos.ca" />'+
            '      <input type="hidden" name="client" value="pub-2715680911438820" />'+
            '      <input type="hidden" name="channel" value="7131881753" />'+
            '      <input type="hidden" name="sa" value="Search" />'+
            '      <input type="hidden" name="cof" value="GALT:204A6C;DIV:336699;VLC:663399;ALC:204A6C;LC:204A6C;BGC:ffffff;T:204A6C;GFNT:0000FF;GIMP:0000FF;S:http://www.lycos.ca;FORID:11;" />' +
	    '      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 1px solid black;">' +
	    '        <tr style="background-color: #dcf7ff">' +
	    '          <td colspan="12"><iframe scrolling="no" width="100%" height="100" frameborder="0" marginheight="0" marginwidth="0" src="'+lycos_ca_frame_src+'"></iframe></td>' +
	    '        </tr>';
    } else {
	toolbar_html += 
	    '    <form name="lycos_search" method="get" target="_top" style="margin: 0px"' +
	    '          action="http://r.hotbot.com/r/memberpgs_lycos_searchbox/http://'+lycos_ad_www_server+'/cgi-bin/search/pursuit">' +
	    '      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 1px solid black;">';
    }
    
    toolbar_html += 
	'        <tr style="background-color: #dcf7ff">' +
	'          <td colspan="3">' +
	'            <table cellpadding="0" cellspacing="0" border="0">' +
	'              <tr>' +
	'                <td>&nbsp;Search:</td>' +
	'                <td><input type="radio" name="cat" value="lycos" checked></td>' +
	'                <td nowrap="nowrap">The Web</td>' +
	'                <td><input type="radio" name="cat" value="angelfire"></td>' +
	'                <td nowrap="nowrap">Angelfire</td>' +
	toolbar_rotators[Math.floor(Math.random()*toolbar_rotators.length)] +
	'              </tr>' +
	'            </table>' +
	'          </td>' +
	'          <td><img src="http://af.lygo.com/d/toolbar/share.gif" alt="share this page" border="0" height="8" hspace="3" width="30"></td>' +
	'          <td nowrap="nowrap"><a href="mailto:?body='+top.location.href+'&amp;subject=Wanted%20to%20share%20this%20Angelfire%20webpage." target="_top">Share This Page</a>&nbsp;</td>' +
	'          <td><img src="http://af.lygo.com/d/toolbar/abuse.gif" alt="report abuse" border="0" height="8" hspace="3" width="8"></td>' +
	'          <td nowrap="nowrap"><a href="http://help.lycos.com/newticket.php" style="font-weight: bold; color: #666666;" target="_top">Report Abuse</a>&nbsp;</td>' +
	'          <td><img src="http://af.lygo.com/d/toolbar/build.gif" alt="build a page" border="0" height="10" hspace="3" width="9"></td>';
    if (lycos_get_cookie("Authorization") == null) {
	toolbar_html += 
	    '          <td nowrap="nowrap"><a href="http://lt.angelfire.com/af_toolbar/build/_h_/'+lycos_ad_www_server+'/campaigns/landing/toolbar.tmpl" target="_top">' +
	    '            Build a Site</a>&nbsp;</td>';
    } else {
	toolbar_html += 
	    '          <td nowrap="nowrap"><a href="http://lt.angelfire.com/af_toolbar/edit/_h_/'+lycos_ad_www_server+'/build/index.tmpl" target="_top">' +
	    '            Edit your Site</a>&nbsp;</td>';
    }
    toolbar_html +=
	'          <td><img src="http://af.lygo.com/d/toolbar/dir.gif" alt="show site directory" border="0" height="10" hspace="3" width="8"></td>' +
	'          <td nowrap="nowrap"><a href="http://lt.angelfire.com/af_toolbar/browse/_h_/'+lycos_ad_www_server+'/directory/index.tmpl" target="_top">Browse Sites</a>&nbsp;</td>' +
	'          <td><a href="http://'+lycos_ad_www_server+'" target="_top"><img src="http://af.lygo.com/d/toolbar/aflogo_top.gif" alt="hosted by angelfire" border="0" height="26" width="143"></a></td>' +
	'        </tr>' +
	'        <tr style="background-color: #dcf7ff">' +
	'          <td nowrap="nowrap" valign="middle">&nbsp;<input size="30" style="font-size: 10px; background-color: #ffffff;" type="text" name="'+search_query_name+'" value="'+search_query_value+'"></td>' +
	'          <td nowrap="nowrap" valign="middle">&nbsp;<input name="submit" class="buttons" type="image" value="image" style="border-width: 0" src="http://ly.lygo.com/ly/srch/hp/go_get_it_web_78x19.gif" /></td>' +
	'          <td align="right"><img src="http://af.lygo.com/d/toolbar/angle.gif" width="22" height="22" border="0" alt=""></td>' +
	'          <td style="background: #ffffff url(http://af.lygo.com/d/toolbar/bg.gif) repeat-x; text-align: center;" colspan="3" align="center">' +
	'            <a href="http://clk.atdmt.com/MON/go/lycsnmon0650000256mon/direct/01/" target="_top"><img src="http://ly.lygo.com/ly/ads/monster_157x20.jpg" height="20" width="157" border="0" alt="Monster Job Search"></a><img src="http://view.atdmt.com/MON/view/lycsnmon0650000256mon/direct/01/" width="1" height="1" alt=""></td>' +
	'          <td style="background: #ffffff url(http://af.lygo.com/d/toolbar/bg.gif) repeat-x; text-align: center;" colspan="5">' +
	'            <span style="font-size: 11px;">' +
	'              <span style="color:#0000ff; font-weight:bold;">&#171;</span>' +
	'              <span id="lycos_top100">' +
	'                <a href="javascript:lycos_top100(\'prev\')" target="_top">Previous</a> |' +
	'                <a href="http://lt.angelfire.com/af_toolbar/top100/_h_/'+lycos_ad_www_server+'/cgi-bin/top100/pagelist?start=1" target="_top">Top 100</a> |' +
	'            <a href="javascript:lycos_top100(\'next\')" target="_top">Next</a>' +
	'          </span>' +
	'        <span style="color: #0000ff; font-weight: bold;">&#187;</span>' +
	'        </span>' +
	'          </td>' +
	'          <td valign="top" style="background: #ffffff url(http://af.lygo.com/d/toolbar/bg.gif) repeat-x;"><a href="http://'+lycos_ad_www_server+'" target="_top"><img src="http://af.lygo.com/d/toolbar/aflogo_bot.gif" alt="hosted by angelfire" border="0" height="22" width="143"></a></td>' +
	'        </tr>' +
	'      </table>' +
	'    </form>' +
	'  </div>' +
	'</div>';
    document.write(toolbar_html);
}

function lycos_insert_ads() {
    lycos_search_query = lycos_get_search_referrer();

    var lycos_ad_mgr = new AdManager();

    if (this.lycos_search_query) {
        lycos_ad_mgr.setForcedParam("keyword", lycos_search_query);
    } else if (this.lycos_ad_category && lycos_ad_category.find_what) {
        lycos_ad_mgr.setForcedParam("keyword", lycos_ad_category.find_what);
    }

    if (this.lycos_ad_category && lycos_ad_category.dmoz) {
        lycos_ad_mgr.setForcedParam("page", lycos_ad_category.dmoz);
    } else {
        lycos_ad_mgr.setForcedParam("page", "member");
    }

    if (this.lycos_ad_category && lycos_ad_category.ontarget) {
        this.mep1 += lycos_ad_category.ontarget;
    }
    lycos_load_script("http://lycos.realmedia.com/scripts/lycos_if.js");

    var lycos_prod_set = lycos_ad_mgr.chooseProductSet();
    lycos_ad_mgr.renderHeader();

    if (lycos_ad_mgr.isSlotAvailable("leaderboard")) {
        this.lycos_top_ad = lycos_ad_mgr.getSlot("leaderboard");
    }

    if (lycos_ad_mgr.isSlotAvailable("leaderboard2")) {
        this.lycos_bottom_ad = lycos_ad_mgr.getSlot("leaderboard2");
    }
    lycos_ad_mgr.renderFooter();

    if (this.lycos_top_ad) {
        document.write('<div style="width:100%" align="center">');
	lycos_draw_promo();
	document.write(lycos_top_ad);
    }
}

if (lycos_check_size()) {
    lycos_insert_ads();
}
