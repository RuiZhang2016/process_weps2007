var ns6=document.getElementById&&!document.all
var ie=document.all

function changeto(e,highlightcolor){
source=ie? event.srcElement : e.target
if (source.tagName=="TR"||source.tagName=="TABLE")
return
while(source.tagName!="TD"&&source.tagName!="HTML")
source=ns6? source.parentNode : source.parentElement
if (source.style.backgroundColor!=highlightcolor&&source.id!="ignore")
source.style.backgroundColor=highlightcolor
}

function contains_ns6(master, slave) { //check if slave is contained by master
while (slave.parentNode)
if ((slave = slave.parentNode) == master)
return true;
return false;
}

function changeback(e,originalcolor){
if
(ie&&(event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="ignore")||source.tagName=="TR"||source.tagName=="TABLE")
return
else if (ns6&&(contains_ns6(source, e.relatedTarget)||source.id=="ignore"))
return
if (ie&&event.toElement!=source||ns6&&e.relatedTarget!=source)
source.style.backgroundColor=originalcolor
}

// Canadian Content AdSense Code

  function google_ad_request_done(google_ads) {

    // Proceed only if we have ads to display!
    if (google_ads.length < 1 )
      return;

    // Display ads in a table
    document.write("<table width=\"100%\"  border=\"0\" cellspacing=\"3\" cellpadding=\"2\" bgcolor=\"#FFFFFF\">");
 
    // Print "Ads By Google" -- include link to Google feedback page if available
    document.write("<tr><td align=\"left\" height=\"25\"><span class=\"copyright\">");
    if (google_info.feedback_url) {
      document.write("<a href=\"" + google_info.feedback_url + 
        "\" class=\"copyright\">Ads by Google</a></span>");
    } else {
      document.write("Ads By Google");
    }
    document.write("</font></td></tr>");  
  
    // For text ads, display each ad in turn.
    if (google_ads[0].type == 'text') {
      for(i = 0; i < google_ads.length; ++i) {
        document.write("<tr onMouseover=\"changeto(event, '#EBF2FF')\" onMouseout=\"changeback(event, '#FFFFFF')\"><td nowrap width=\"33%\" onmouseover=\"window.status=\'go to " + google_ads[i].visible_url + "\';return true;\" onmouseout=\"window.status=\'\';return true;\"><b><span style=\"font-family: Trebuchet MS, Tahoma, Arial; font-size: 14px; color: #2C82C6; font-style: italic; font-weight: bold}\">" +
          "<a href=\"" +  google_ads[i].url + "\" title=\"go to " + google_ads[i].visible_url + "\" style=\"font-family: Trebuchet MS, Tahoma, Arial; font-size: 14px; color: #2C82C6;\">" + 
          google_ads[i].line1 + "</a></b></span>" +
          "<a href=\"" + google_ads[i].url + "\">" + 
          "<span style=\"font-size: 11px; font-family: arial; color: #000000; text-decoration: none;\">" + " - " + 
										google_ads[i].line2 + "" + " " +
          google_ads[i].line3 + "<br></span></a>" + 
          "<a href=\"" + google_ads[i].url + "\">" + 
          "<font color=\"#000000\" size=\"1\">" +
          google_ads[i].visible_url +
          "</a></font><br></td></tr>"); 
      }
    }

    // For an image ad, display the image; there will be only one .
    if (google_ads[0].type == 'image') {
      document.write("<tr><td align=\"center\">" +
        "<a href=\"" + google_ads[0].url + "\">" +
        "<img src=\"" + google_ads[0].image_url + 
        "\" height=\"" + google_ads[0].height + 
        "\" width=\"" + google_ads[0].width +
        "\" border=\"0\"></a></td></tr>");
    }

    // Finish up anything that needs finishing up (closing tables, etc.)
    document.write ("</tr></table>");
  }