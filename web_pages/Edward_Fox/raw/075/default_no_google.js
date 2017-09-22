  function PopUp(url,wsize,hsize,resize)
  {
    window.open(url, 'childwin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,width='+wsize+',height='+hsize+',resizable='+resize);
  }

  function WinOpen(url,wsize,hsize,resize)
  {
     window.open(url, 'childwin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,width='+wsize+',height='+hsize+',resizable='+resize)
  }

  function openWinView(url)
  {
    winview=window.open(url, 'winview', 'toolbar=yes,location=yes,directories=no,status=yes,menubar=yes,resizable=yes,width=600,height=500,scrollbars=yes');
    winview.focus();
  }

  function changeButton(myImage)
  {

    re=/On\.gif/;

    found=re.exec(myImage.src);

    if  (found == 'On.gif')
    {
      re = /On\.gif/;
      newSrc=myImage.src.replace(re,'Off.gif');
      myImage.src=newSrc;
    }else{
      re = /Off\.gif/;
      newSrc=myImage.src.replace(re,'On.gif');
      myImage.src=newSrc;
    }

  }
  function RUSure()
  {
    if(confirm("Are you sure you want to\nclear the entire form?"))
    {
      document.registration.reset();
    }
    else
    {
      return;
    }
  }

	function google_ad_request_done(google_ads)
	{
	  if (google_ads.length < 1 )
	    return;

	  document.write("<table cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\" border=\"0\">");


          document.write("<tr><td bgcolor=\"#FFFFFF\">");
          document.write("<font style=\"font-size: 9px; font: verdana; color: #999999; text-decoration: none;\">&nbsp; &nbsp;Industry Sponsored Links</font></td><td valign=\"top\" align=\"right\" bgcolor=\"#FFFFFF\">");
          if (google_info.feedback_url)
          {
            document.write("<a href=\"" + google_info.feedback_url + "\"><font style=\"font-size: 9px; font: verdana; color: #999999; text-decoration: none;\">Ads by Google</font></a><font style=\"font-size: 9px; font: verdana; color: #999999; text-decoration: none;\">&#134;</font> &nbsp;");
          }
          else
          {
            document.write("<span><font style=\"font-size: 9px; font: verdana; color: #999999; text-decoration: none;\">Ads By Google&#134;</font></span>");
          }




	  if (google_ads[0].type == 'text')
	  {
	  	document.write("<tr><td valign=\"top\" colspan=\"2\" bgcolor=\"#FFFFFF\">");
	    for(i = 0; i < google_ads.length; ++i)
	    {
	      document.write("<p class=\"profilestext\"><a class=\"profileshighlightlink\" href=\"" +  google_ads[i].url + "\">" + google_ads[i].line1 + "</a> " + google_ads[i].line2 + "&nbsp;" + google_ads[i].line3 + "</p>");
	  	}
	  	document.write("</td></tr>");
	  }
          document.write("</td></tr></table>");
	}
