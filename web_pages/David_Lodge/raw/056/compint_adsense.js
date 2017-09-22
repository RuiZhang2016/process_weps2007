function google_ad_request_done(google_ads)
{
	if (google_ads.length < 1 )
	{
		return;
	}
//padding-left: 12px;

	var left_padding;
	if (typeof(ad_left_padding) == "undefined")
	{
		left_padding= 12;
	}
	else
	{
		left_padding= ad_left_padding;
	}

	var max_str_length;
	if (typeof(spons_link_max_length) == "undefined")
	{
		max_str_length= 50;
	}
	else
	{
		max_str_length= spons_link_max_length;
	}
	if (typeof(industry) == "undefined")
	{
		industry= '';
	}
	if (typeof(company_name) == "undefined")
	{
		company_name= '';
	}

	document.write("<table cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\" border=\"0\" width=\"100%\">");


	document.write("<tr><td style=\"padding-left:" + left_padding +"px\" class=\"google_adsense_header\" valign=\"bottom\" ");
	if (industry.length > 0)
	{
		document.write(" align=\"left\" ");
	}
	else
	{
		document.write(" align=\"right\" ");
	}
	document.write(" > ");  //end of <td>
	if (google_info.feedback_url)
	{
		document.write("<a href=\"" + google_info.feedback_url + "\">Ads by Google</a>");
	}
	else
	{
		document.write("Ads by Google");
	}
	
	if (industry.length > 0)
	{
		industry_text=industry.substring(0,max_str_length+1);
		if (industry_text.charAt(industry_text.length-1) != ' ')
		{
			var last_space_index= industry_text.lastIndexOf(" ");
			if(last_space_index > 1)
			{
				industry_text= industry_text.substring(0,last_space_index);
			}
		}
		else
		{
			industry_text= industry_text.substring(0,industry_text.length-1);
		}
		document.write(" on ",industry_text);
	}
	
	if (company_name.length > 0)
	{
		document.write("*");
	}
	
	document.write("</td></tr>");

	if (google_ads[0].type == 'text')
	{
		for(i = 0; i < google_ads.length; ++i)
		{
			document.write("<tr><td style=\"padding-left:" + left_padding +"px\" class=\"google_adsense\" valign=\"top\" bgcolor=\"#FFFFFF\">");
			document.write("<a href=\"" +  google_ads[i].url + "\">" + google_ads[i].line1 + "</a> " + google_ads[i].line2 + "&nbsp;" + google_ads[i].line3);
			document.write("</td></tr>");
		}
	}
	if (company_name.length > 0)
	{
		document.write("<tr><td style=\"padding-left:" + left_padding +"px\" class=\"google_adsense_disclaimer\">* The ads are not affiliated with " + company_name + "</td></tr>");
	}
		
	document.write("</table>");
}

function PopUp(url,wsize,hsize,resize)
  {
    window.open(url, 'childwin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,width='+wsize+',height='+hsize+',resizable='+resize);
  }
