//v------------------------------------------------------------------------------
//v-- GOOGLE begin
//v------------------------------------------------------------------------------
/*google_ad_client = "pub-3893717779527588";
google_ad_channel = "";
google_color_border = "CCCCCC";
google_color_bg = "FFFFFF";
google_color_link = "000000";
google_color_url = "666666";
google_color_text = "333333";*/
google_ad_client = "pub-3893717779527588";
google_ad_width = 125;
google_ad_height = 125;
google_ad_format = "125x125_as";
google_ad_channel ="";
google_color_border = "CCCCCC";
google_color_bg = "FFFFFF";
google_color_link = "000000";
google_color_url = "666666";
google_color_text = "333333";


google_ad_url = '';
google_random = (new Date()).getTime();
google_org_error_handler = window.onerror;

function quoted(str) {
  return (str != null) ? '"' + str + '"' : '""';
}

function google_encodeURIComponent(str) {
  if (typeof(encodeURIComponent) == 'function') {
    return encodeURIComponent(str);
  } else {
    return escape(str);
  }
}

function google_write_tracker(tracker_event) {
  var img_url = window.google_ad_url.replace(/pagead\/ads/, 'pagead/imp.gif');
  var img_src = img_url + '&event=' + tracker_event;
  var img_tag = '<i' + 'mg HEIGHT="1" WIDTH="1" BORDER="0" ' +
                'src=' + quoted(img_src) +
                ' />';
  document.write(img_tag);
}

function google_append_url(param, value) {
  if (value) {
    window.google_ad_url += '&' + param + '=' + value;
  }
}

function google_append_url_esc(param, value) {
  if (value) {
    google_append_url(param, google_encodeURIComponent(value));
  }
}

function google_append_color(param, value) {
  if (value && typeof(value) == 'object') {
    value = value[window.google_random % value.length];
  }
  google_append_url('color_' + param, value);
}

function google_show_ad(ad_style) {
  var w = window;

  switch(ad_style)
  {
        //-------------------------------------------------------------------------
        //-- GOOGLE: small square ad -- 125x125
        //-------------------------------------------------------------------------
        case "square_125_125" :
                google_ad_width = 125;
                google_ad_height = 125;
                google_ad_format = "125x125_as";
                break;

        //-------------------------------------------------------------------------
        //-- GOOGLE: vertical ad -- 120x600 or 160x600
        //-------------------------------------------------------------------------
        case "vert_120_600" :
        case "vert_160_600" :
                google_ad_width = 120;
                google_ad_height = 600;
                google_ad_format = "120x600_as";
                break;

        //-------------------------------------------------------------------------
        //-- GOOGLE: small horizontal ad -- 468x60
        //-------------------------------------------------------------------------
        case "horiz_468_60" :
                google_ad_width = 468;
                google_ad_height = 60;
                google_ad_format = "468x60_as";
                break;

        //-------------------------------------------------------------------------
        //-- GOOGLE: smaller horizontal ad -- 234x60
        //-------------------------------------------------------------------------
        case "horiz_234_60" :
                google_ad_width = 234;
                google_ad_height = 60;
                google_ad_format = "234x60_as";
                break;

        //-------------------------------------------------------------------------
        //-- GOOGLE: default to the large horizontal ad -- 728x90 -- "horiz_728_90"
        //-------------------------------------------------------------------------
        default :
                google_ad_width = 728;
                google_ad_height = 90;
                google_ad_format = "728x90_as";
                break;
  }

  w.onerror = w.google_org_error_handler;
  w.google_ad_url = 'http://pagead2.googlesyndication.com/pagead/ads?' +
                    'client=ca-' + escape(w.google_ad_client.toLowerCase()) +
                    '&random=' + w.google_random;

  google_append_url('hl', w.google_language);
  google_append_url('gl', w.google_gl);
  google_append_url_esc('hints', w.google_hints);
  google_append_url('adsafe', w.google_safe);
  google_append_url('oe', w.google_encoding);
  google_append_url_esc('alternate_ad_url', w.google_alternate_ad_url);

  if (w.google_ad_format) {
    google_append_url_esc('format', w.google_ad_format.toLowerCase());
  }

  google_append_url('num_ads', w.google_max_num_ads);
  google_append_url('output', w.google_ad_output);
  google_append_url('adtest', w.google_adtest);
  if (w.google_ad_channel) {
    google_append_url_esc('channel', w.google_ad_channel.toLowerCase());
  }
  google_append_url_esc('url', w.google_page_url);
  google_append_color('bg', w.google_color_bg);
  google_append_color('text', w.google_color_text);
  google_append_color('link', w.google_color_link);
  google_append_color('url', w.google_color_url);
  google_append_color('border', w.google_color_border);
  google_append_url('kw_type', w.google_kw_type);
  google_append_url_esc('kw', w.google_kw);
  google_append_url_esc('contents', w.google_contents);

  w.google_ad_url = w.google_ad_url.substring(0, 1000);
  w.google_ad_url = w.google_ad_url.replace(/%\w?$/, '');

  if (google_ad_output == 'js' && w.google_ad_request_done) {
    document.write('<scr' + 'ipt LANGUAGE="JavaScript1.1"' +
                   ' src=' + quoted(google_ad_url) +
                   '></scr' + 'ipt>');
  } else if (google_ad_output == 'html') {
    if (w.name == 'google_ads_frame') {
      google_write_tracker('reboundredirect');
    } else {
      document.write('<ifr' + 'ame' +
                     ' name="google_ads_frame"' +
                     ' WIDTH=' + quoted(w.google_ad_width) +
                     ' HEIGHT=' + quoted(w.google_ad_height) +
                     ' frameborder=' + quoted(w.google_ad_frameborder) +
                     ' src=' + quoted(w.google_ad_url) +
                     ' marginwidth="0"' +
                     ' marginheight="0"' +
                     ' vspace="0"' +
                     ' hspace="0"' +
                     ' allowtransparency="true"' +
                     ' scrolling="no">');
      google_write_tracker('noiframe');
      document.write('</ifr' + 'ame>');
    }
  }

  w.google_ad_frameborder = null;
  w.google_ad_format = null;
  w.google_page_url = null;
  w.google_language = null;
  w.google_gl = null;
  w.google_hints = null;
  w.google_safe = null;
  w.google_encoding = null;
  w.google_ad_output = null;
  w.google_max_num_ads = null;
  w.google_ad_channel = null;
  w.google_contents = null;
  w.google_alternate_ad_url = null;
  w.google_color_bg = null;
  w.google_color_text = null;
  w.google_color_link = null;
  w.google_color_url = null;
  w.google_color_border = null;
  w.google_adtest = null;
  w.google_kw_type = null;
  w.google_kw = null;
}

function google_error_handler(message, url, line) {
// SzS 2004.03.04.  google_show_ad();
  return true;
}

window.onerror = google_error_handler;

if (window.google_ad_frameborder == null) {
  google_ad_frameborder = 0;
}

if (window.google_ad_output == null) {
  google_ad_output = 'html';
}

if (window.google_ad_format == null && window.google_ad_output == 'html') {
  google_ad_format = google_ad_width + 'x' + google_ad_height;
}

if (window.google_page_url == null) {
  google_page_url = document.referrer;
  if (window.top.location == document.location) {
    google_page_url = document.location;
  }
}

//^------------------------------------------------------------------------------
//^-- GOOGLE end
//^------------------------------------------------------------------------------

//v------------------------------------------------------------------------------
//v-- BURST! begin
//v------------------------------------------------------------------------------
//<!-- /* Copyright 1997-2003 BURST! Media, LLC. All Rights Reserved. (Version 1.1J) */

//-------------------------------------------------------------------------
//-- original function declaration
//-------------------------------------------------------------------------
// function ShowBurstAd(adcode, width, height, sizes, intrusive, bgcolor, background)

function burst_show_ad(ad_style)
{
        var bN = navigator.appName;
        var bV = parseInt(navigator.appVersion);
        var base='http://www.burstnet.com/';
        var Tv=''; var Itr='';
        var sz=''; var bkgd='';
        var bgc='';
        var vr='v=1.1J';
        var agt=navigator.userAgent.toLowerCase();

        //-------------------------------------------------------------------------
        //-- original parameters
        //-------------------------------------------------------------------------
        var adcode='ad9625a';
        var width='728';
        var height='90';
        var sizes='728x90A';
        var intrusive='2';
        var bgcolor='ffffff';
        var background='';

        //-------------------------------------------------------------------------
        //-- original ad code calling examples
        //-------------------------------------------------------------------------
        //ShowBurstAd('ad9625a','728','90','728x90A','2', 'ffffff', '');
        //ShowBurstAd('ad9625a','468','60','468x60A','2', '', '');
        //ShowBurstAd('sk9625a','160','600','120x600A|160x600A','0', '', '');

  switch(ad_style)
  {
        //-------------------------------------------------------------------------
        //-- BURST: vertical ad -- 120x600 or 160x600
        //-------------------------------------------------------------------------
        case "vert_120_600" :
                adcode='sk9625a';
                width='120';
                height='600';
                sizes='120x600A';
                intrusive='0';
                bgcolor='';
                background='';
                break;

        //-------------------------------------------------------------------------
        //-- BURST: small horizontal ad -- 468x60
        //-------------------------------------------------------------------------
        case "horiz_468_60" :
                adcode='ad9625a';
                width='468';
                height='60';
                sizes='468x60A';
                intrusive='2';
                bgcolor='';
                background='';
                break;

        //-------------------------------------------------------------------------
        //-- BURST: sqaurish horizontal ad -- 300x250
        //-------------------------------------------------------------------------
        case "horiz_300_250" :
                adcode='ad9625a';
                width='300';
                height='250';
                sizes='300x250A';
                intrusive='2';
                bgcolor='';
                background='';
                break;

        //-------------------------------------------------------------------------
        //-- BURST: default to the large horizontal ad -- 728x90 -- "horiz_728_90"
        //-------------------------------------------------------------------------
        default :
                adcode='ad9625a';
                width='728';
                height='90';
                sizes='728x90A';
                intrusive='2';
                bgcolor='ffffff';
                background='';
                break;
  }

        if (sizes.length!=0) {sz='/sz='+sizes;} else {sz='';}
        if (bgcolor.length!=0) {bgc='/zg' + bgcolor;} else {bgc='';}
        if (background.length!=0) {bkgd='/bgi='+(escape(escape(background))).replace(/\//gi,'%252F');} else {bkgd='';}

        if (bV>=4)
        {
                ts=window.location.pathname+window.location.search;
                i=0; Tv=0; while (i< ts.length)
                    {
                        Tv=Tv+ts.charCodeAt(i); i=i+1;
                }
                Tv="/"+Tv;
        }
        else
        {
                Tv=escape(window.location.pathname);
                if( Tv.charAt(0)!='/' ) Tv="/"+Tv;
                else if (Tv.charAt(1)=="/")
                Tv="";
                if( Tv.charAt(Tv.length-1) == "/")
                Tv = Tv + "_";
        }

        var fCode='<ifr'+'ame id="BURST" src="'+base+
        'cgi-bin/ads/'+adcode+'.cgi/NI/if/'+vr+bgc+sz+bkgd+
        Tv+'/RETURN-CODE" WIDTH="'+width+'" HEIGHT="'+
        height+'"'+'marginwidth="0" marginheight="0"'+
        'hspace="0" vspace="0" frameborder="0" '+
        'scrolling="no">';
        var gCode = '<'+'a HREF="'+base+'ads/'+adcode+'-map.cgi/'+
        vr+sz+Tv+'" TARGET=_top><im'+'g src="'+base+
        'cgi-bin/ads/'+adcode+'.cgi/'+vr+sz+Tv+
        '" BORDER="0" ALT="Click Here"></A>';
        var fCodeEnd = '</ifr'+'ame>';

        if ((adcode.charAt(0)=="a")&&(intrusive=="1"))
        {
                Itr='<di'+'v><scr'+'ipt src="'+base+'cgi-bin/ads/'+adcode+
                '.cgi/sz=0X0MN/'+vr+Tv+'/RETURN-CODE/JS/"></scr'+'ipt></d'+'iv>';
        }

        if (agt.indexOf("mac")==-1)
        {
                document.write(fCode+gCode+fCodeEnd+Itr);
        }
        else
        {
                document.write(gCode);
        }
} // end function

//^------------------------------------------------------------------------------
//^-- BURST! end
//^------------------------------------------------------------------------------

//v------------------------------------------------------------------------------
//v-- AdSolution (AdPepper) begin
//v------------------------------------------------------------------------------

//-- requires these two lines in the <HEAD> section of the HTML page
//<SCRIPT TYPE="text/javascript" LANGUAGE="javascript" SRC="http://a.as-eu.falkag.net/dat/dlv/aslmain.js"></SCRIPT>
//<SCRIPT TYPE="text/javascript" LANGUAGE="javascript" SRC="http://a.as-eu.falkag.net/dat/dlv/aslsubs111.js"></SCRIPT>

Ads_kid=0;
Ads_bid=0;
Ads_xl=468;
Ads_yl=60;
Ads_xp='';
Ads_yp='';
Ads_opt=0;
Ads_wrd='';
Ads_prf='';
Ads_par='';
Ads_cnturl='';
Ads_sec=0;
Ads_channels='';

function ad_solution_show_ad(ad_style) {

        switch(ad_style)
        {
                //-------------------------------------------------------------------------
                //-- AD SOLUTION: vertical ad -- 120x600
                //-------------------------------------------------------------------------
                case "vert_120_600" :
                case "vert_160_600" :
                        document.writeln("<!-- BEGIN: AdSolution-Website-Tag 4.1 : US-chortler.com / US-chortler.com sky -->");
                        Ads_kid=0;Ads_bid=0;Ads_xl=120;Ads_yl=600;Ads_xp='';Ads_yp='';Ads_opt=0;Ads_wrd='';Ads_prf='';Ads_par='';Ads_cnturl='';Ads_sec=0;Ads_channels='';
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' ");
                        document.writeln("src='http://a.as-eu.falkag.net/dat/cjf/00/25/16/66.js'>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://sel.as-eu.falkag.net/sel?cmd=lnk&dat=251666&opt=0&rdm=[timestamp]' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://sel.as-eu.falkag.net/sel?cmd=ban&dat=251666&opt=0&rdm=[timestamp]' WIDTH='120' HEIGHT='600' ALT='Please click here.' BORDER='0'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("<!-- END:AdSolution-Tag 4.1 -->");
                        break;

                //-------------------------------------------------------------------------
                //-- AD SOLUTION: small horizontal ad -- 468x60
                //-------------------------------------------------------------------------
                case "horiz_468_60" :
                        document.writeln("<!-- BEGIN: AdSolution-Website-Tag 4.1 : US-chortler.com / US-chortler.com misc -->");
                        Ads_kid=0;Ads_bid=0;Ads_xl=468;Ads_yl=60;Ads_xp='';Ads_yp='';Ads_opt=0;Ads_wrd='';Ads_prf='';Ads_par='';Ads_cnturl='';Ads_sec=0;Ads_channels='';
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' src='http://a.as-eu.falkag.net/dat/cjf/00/25/16/63.js'>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://sel.as-eu.falkag.net/sel?cmd=lnk&dat=251663&opt=0&rdm=[timestamp]' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://sel.as-eu.falkag.net/sel?cmd=ban&dat=251663&opt=0&rdm=[timestamp]' WIDTH='468' HEIGHT='60' ALT='Please click here.' BORDER='0'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("<!-- END:AdSolution-Tag 4.1 -->");
                        break;

                //-------------------------------------------------------------------------
                //-- AD SOLUTION: sqaurish horizontal ad -- 300x250
                //-------------------------------------------------------------------------
                case "horiz_300_250" :
                        document.writeln("<!-- BEGIN: AdSolution-Website-Tag 4.1 : US-chortler.com / US-chortler.com 300x250 -->");
                        Ads_kid=0;Ads_bid=0;Ads_xl=300;Ads_yl=250;Ads_xp='';Ads_yp='';Ads_opt=0;Ads_wrd='';Ads_prf='';Ads_par='';Ads_cnturl='';Ads_sec=0;Ads_channels='';
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' src='http://a.as-eu.falkag.net/dat/cjf/00/25/16/65.js'>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://sel.as-eu.falkag.net/sel?cmd=lnk&dat=251665&opt=0&rdm=[timestamp]' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://sel.as-eu.falkag.net/sel?cmd=ban&dat=251665&opt=0&rdm=[timestamp]' WIDTH='300' HEIGHT='250' ALT='Please click here.' BORDER='0'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("<!-- END:AdSolution-Tag 4.1 -->");
                        break;

                //-------------------------------------------------------------------------
                //-- AD SOLUTION: default to the large horizontal ad -- 728x90 -- "horiz_728_90"
                //-------------------------------------------------------------------------
                default :
                        document.writeln("<!-- BEGIN: AdSolution-Website-Tag 4.1 : US-chortler.com / US-chortler.com 728x90 -->");
                        Ads_kid=0;Ads_bid=0;Ads_xl=728;Ads_yl=90;Ads_xp='';Ads_yp='';Ads_opt=0;Ads_wrd='';Ads_prf='';Ads_par='';Ads_cnturl='';Ads_sec=0;Ads_channels='';
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' ");
                        document.writeln("src='http://a.as-eu.falkag.net/dat/cjf/00/25/16/64.js'>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://sel.as-eu.falkag.net/sel?cmd=lnk&dat=251664&opt=0&rdm=[timestamp]' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://sel.as-eu.falkag.net/sel?cmd=ban&dat=251664&opt=0&rdm=[timestamp]' WIDTH='728' HEIGHT='90' ALT='Please click here.' BORDER='0'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("<!-- END:AdSolution-Tag 4.1 -->");
                        break;
        }
}

//^------------------------------------------------------------------------------
//^-- AdSolution (AdPepper) end
//^------------------------------------------------------------------------------

//v------------------------------------------------------------------------------
//v-- Tribal Fusion begin
//v------------------------------------------------------------------------------

function tribal_fusion_show_ad(ad_style) {

        switch(ad_style)
        {
                //-------------------------------------------------------------------------
                //-- TRIBAL FUSION: vertical ad -- 120x600
                //-------------------------------------------------------------------------
                case "vert_120_600" :
                case "vert_160_600" :
                        document.writeln("<!-- TF 120x600 JScript code -->");
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' ");
                        document.writeln("src='http://a.tribalfusion.com/j.ad?site=Chortlercom&adSpace=ROS&size=120x600&requestID='+((new Date()).getTime() % 2147483648) + Math.random()+''>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://a.tribalfusion.com/i.click?site=Chortlercom&adSpace=ROS&size=120x600&requestID=810084743' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://a.tribalfusion.com/i.ad?site=Chortlercom&adSpace=ROS&size=120x600&requestID=810084743' WIDTH=120 HEIGHT=600 BORDER=0 ALT='Click Here'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("<!-- TF 120x600 JScript code -->");
                        break;

                //-------------------------------------------------------------------------
                //-- TRIBAL FUSION: small horizontal ad -- 468x60
                //-------------------------------------------------------------------------
                case "horiz_468_60" :
                        document.writeln("<!-- TF 468x60 JScript code -->");
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' ");
                        document.writeln("src='http://a.tribalfusion.com/j.ad?site=Chortlercom&adSpace=ROS&size=468x60&requestID='+((new Date()).getTime() % 2147483648) + Math.random()+''>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://a.tribalfusion.com/i.click?site=Chortlercom&adSpace=ROS&size=468x60&requestID=1375736686' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://a.tribalfusion.com/i.ad?site=Chortlercom&adSpace=ROS&size=468x60&requestID=1375736686' WIDTH=468 HEIGHT=60 BORDER=0 ALT='Click Here'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("<!-- TF 468x60 JScript code -->");
                        break;

                //-------------------------------------------------------------------------
                //-- TRIBAL FUSION: sqaurish horizontal ad -- 300x250
                //-------------------------------------------------------------------------
                case "horiz_300_250" :
                        document.writeln("<!-- TF 300x250 JScript VAR NoAD code -->");
                        document.writeln("<center>");
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' ");
                        document.writeln("src='http://a.tribalfusion.com/j.ad?site=Chortlercom&adSpace=ROS&size=300x250&type=var&noAd=1&requestID='+((new Date()).getTime() % 2147483648) + Math.random()+''>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://a.tribalfusion.com/i.click?site=Chortlercom&adSpace=ROS&size=300x250&requestID=1446002' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://a.tribalfusion.com/i.ad?site=Chortlercom&adSpace=ROS&size=300x250&requestID=1446002' WIDTH=300 HEIGHT=250 BORDER=0 ALT='Click Here'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("</center>");
                        document.writeln("<!-- TF 300x250 JScript VAR NoAD code -->");
                        break;

                //-------------------------------------------------------------------------
                //-- TRIBAL FUSION: default to the large horizontal ad -- 728x90 -- "horiz_728_90"
                //-------------------------------------------------------------------------
                default :
                        document.writeln("<!-- TF 728x90 JScript VAR code -->");
                        document.writeln("<scr" + "ipt TYPE='text/javascript' LANGUAGE='javascript' ");
                        document.writeln("src='http://a.tribalfusion.com/j.ad?site=Chortlercom&adSpace=ROS&size=728x90&requestID='+((new Date()).getTime() % 2147483648) + Math.random()+''>");
                        document.writeln("</scr" + "ipt>");
                        document.writeln("<noscr" + "ipt>");
                        document.writeln("<A HREF='http://a.tribalfusion.com/i.click?site=Chortlercom&adSpace=ROS&size=728x90&requestID=893805313' TARGET='_blank'>");
                        document.writeln("<IMG SRC='http://a.tribalfusion.com/i.ad?site=Chortlercom&adSpace=ROS&size=728x90&requestID=893805313' WIDTH=728 HEIGHT=90 BORDER=0 ALT='Click Here'>");
                        document.writeln("</A>");
                        document.writeln("</noscr" + "ipt>");
                        document.writeln("<!-- TF 728x90 JScript VAR code -->");
                        break;
        }
}

//^------------------------------------------------------------------------------
//^-- Tribal Fusion end
//^------------------------------------------------------------------------------



//-------------------------------------------------------------------------
//-- show_ad() is the function to be called from
//-- within a JavaScript <SCRIPT>
//-- block in the HTML/SHTML pages
//-- (see the inc_toptop_main.txt file for an example)
//-------------------------------------------------------------------------
function show_ad(ad_provider, ad_style) {

        switch(ad_provider)
        {
                case "Google" :
                        google_show_ad(ad_style);
                        break;

                case "Burst" :
                        burst_show_ad(ad_style);
                        break;

                case "AdSolution" :
                        ad_solution_show_ad(ad_style);
                        break;

                case "TribalFusion" :
                        tribal_fusion_show_ad(ad_style);
                        break;
        }
}