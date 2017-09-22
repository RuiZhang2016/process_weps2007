	function google_ad_request_done(google_ads)
	{
	  if (google_ads.length < 1 )
	    return;

		document.write("<td align=\"right\">");
	  if (google_info.feedback_url)
	  {
	    document.write("<a href=\"" + google_info.feedback_url + "\" class=\"adsbygoogle\">Ads by Google</a>&#134;");
	  }
	  else
	  {
	    document.write("<font class=\"adsbygoogle\">Ads By Google&#134;</font>");
	  }
	  document.write("</td></tr>");
		document.write("<tr><td colspan=\"2\"><img src=\"/manta/images/separator.gif\" width=\"1\" height=\"5\"></td></tr>");
	  document.write("<tr><td colspan=\"2\">");
	  if (google_ads[0].type == 'text')
	  {
	    for(i = 0; i < google_ads.length; ++i)
	    {
	      document.write("<a class=\"adsensetitlelink\" href=\"" +  google_ads[i].url + "\">" + google_ads[i].line1 + "</a>&nbsp;" + google_ads[i].line2 + "&nbsp;" + google_ads[i].line3 + "<br><br>");
	    }
	  }
	  document.write("</td>");
	}