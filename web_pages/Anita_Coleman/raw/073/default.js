  function makeRemote(url,wsize,hsize,resize) {
    var loc = url;
    if (wsize == null) wsize = 750;
    if (hsize == null) hsize = 550;
    if (resize == null) resize = "yes";
    remote = window.open("","","alwaysRaised=yes,width="+wsize+",height="+hsize+",screenX=50,screenY=50,top=50,left=50,resizable="+resize+",scrollbars=yes,toolbar=yes,menubar=no,status=no");
    remote.location.href=url;
    if (remote.opener == null) remote.opener = window;
    else remote.focus();
  }
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

  document.write("<table border='0' cellspacing='0' cellpadding='0'>");
  document.write("<tr><td valign='top' align='right' width='522'>");
  if (google_info.feedback_url)
  {
    document.write("<p class='browswecontent'><a href=\"" + google_info.feedback_url + "\" class=\"browswegooglelink\">Ads by Google</a></p>");
  }
  else
  {
    document.write("<p class='browswecontent'>Ads By Google</p>");
  }
  document.write("</td></tr>");

  if (google_ads[0].type == 'text')
  {
    document.write("<tr><td valign='top'>");
    for(i = 0; i < google_ads.length; ++i)
    {
      document.write("<p class='browswecontent'>" +
        "<a href='" +  google_ads[i].url + "' class='normal'>" + google_ads[i].line1 + "</a>&nbsp;" + google_ads[i].line2 + "&nbsp;" + 
        google_ads[i].line3 + "</p><img src='/aml2006/images/spacer.gif' border='0' width='20' height='5'>");
    }
    document.write("</tr>");
  }
  document.write ("</table>");
}


