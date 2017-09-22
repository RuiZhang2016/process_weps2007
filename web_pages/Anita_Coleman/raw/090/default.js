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



	function getCookieVal (offset)
	{
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset,   endstr));
	}


	function getCookieSurvey (name)
	{
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen)
    {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
          return getCookieVal (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
	}
