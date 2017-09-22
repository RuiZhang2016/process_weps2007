/* pop-up code used by desktop scoreboard and ultra items */


function popup(url) 
{
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(url, '" + id + "', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=370,height=220');");
}

/* launch code for avconsole */
function launch_main_player()
{  clickmain=window.open("/sport3/worldcup2002/avconsole/avc_main.htm","clickmain","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=100,left=100,width=432,height=440");
}

function getPlatform()
{
   var myUserAgent;

   myUserAgent = navigator.userAgent.toLowerCase();

    if ( (myUserAgent.indexOf("win") != -1)   || 
         (myUserAgent.indexOf("16bit") != -1) 
       )
    {
       return "win";
    }

    if (myUserAgent.indexOf("mac") != -1)
    {
       return "mac";
    }
      
    if (myUserAgent.indexOf("x11") != -1)
    {
       return "unx";
    }
      
    return "other";
}

function getBrowserType()
{
   var myUserAgent;
   var myMajor;

   myUserAgent   = navigator.userAgent.toLowerCase();
   myMajor       = parseInt(navigator.appVersion);

   if( (myUserAgent.indexOf('mozilla')    != -1) && 
       (myUserAgent.indexOf('spoofer')    == -1) && 
       (myUserAgent.indexOf('compatible') == -1) && 
       (myUserAgent.indexOf('opera')      == -1) && 
       (myUserAgent.indexOf('webtv')      == -1)
     )
   {
      if (myMajor > 3)
      {
         return "nav4";
      }
      return "nav";
   }

   if (myUserAgent.indexOf("msie") != -1)
   {
      if (myMajor > 3)
      {
         return "ie4";
      }
      return "ie";
   }
	// dom compliant browsers are allowed
	if(document.body.firstChild) return "domCompliant";
   return "other";
}

function request_launch()
{
   if (getPlatform() != "other" &&
       (getBrowserType() == "ie4" || getBrowserType() == "nav4" || getBrowserType() == "domCompliant")) {
      launch_main_player();
   } else {
     self.location.href="/hi/english/static/audio_video/avconsole/old_browser.stm";
   }
   return;
}
function popUp(pageurl,width,height,scroll)
{
day = new Date();
id = day.getTime();

  		if (window.screen) 
		{
  			lpos = (screen.width/2)-(width/2);
  			hpos = (screen.height/2)-(height/2);
		}
		else
		{
			lpos = 1;
			hpos = 1;
		}
		
 		eval("bbcnews"+id+" = window.open('"+pageurl+"','"+id+"','toolbar=0,scrollbars="+scroll+",location=0,status=0,menubar=0,resizable=0,width="+width+",height="+height+",left="+lpos+",top="+hpos+"')");
}