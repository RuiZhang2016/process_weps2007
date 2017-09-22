function google_ad_request_done(google_ads)
{
  if (google_ads.length < 1 )
    return;

  document.write("<table border='0' cellspacing='0' cellpadding='0'>");
  document.write("<tr><td valign='top' align='right' width='522'>");
  if (google_info.feedback_url)
  {
    document.write("<p class='browsecontent'><a href=\"" + google_info.feedback_url + "\" class=\"browswegooglelink\">Ads by Google</a></p>");
  }
  else
  {
    document.write("<p class='browsecontent'>Ads By Google</p>");
  }
  document.write("</td></tr>");

  if (google_ads[0].type == 'text')
  {
    document.write("<tr><td valign='top'>");
    for(i = 0; i < google_ads.length; ++i)
    {
      document.write("<p class='browsecontent'>" + "<a href='" +  google_ads[i].url + "' class='browsecontent' style='" + "color:#0000FF'" + ">" + google_ads[i].line1 + "</a>&nbsp;" + google_ads[i].line2 + "&nbsp;" + google_ads[i].line3 + "</p>");
    	if(i<google_ads.length-1)
    	{
	    	document.write("<img src='" + "/images/separator.gif'" + "width='1'" + "height='10'>");
			}
    }
    document.write("</tr>");
  }
  document.write ("</table>");
}