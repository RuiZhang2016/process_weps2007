	var scriptLoc = 'http://www.myaffiliateprogram.com/u/stubhub/rep.asp';
	
	var ticket_finder = 0;
	var queryString = window.location.search.substring(1);
	var imgdata = '';
	var subdata = '';
	var overwrite = 1;
	var refdata = document.referrer;
	var daysToLive = 365;
	var multiDomain = false;

	if (queryString.length > 0)
	{
		var pairs = queryString.split('&');
								
		for(var i = 0; i < pairs.length; i++)
		{
			var pairs2 = pairs[i].split('=');
			
			switch(pairs2[0].toLowerCase())
			{
				case 'ticket_finder':
					ticket_finder = pairs2[1];
					break;
				case 'clearcookie':
					if (pairs2[1] == 1)
					{
						DeleteCookie("ticket_finder");
					}
					break;
				case 'img':
					imgdata = pairs2[1];
					break;
				case 'sub':
					subdata = pairs2[1];
					break;
			}
		} //end for
	}//end if

	if (GetCookie("ticket_finder") == null || overwrite == 1)
	{
		if (ticket_finder != 0)
		{
			var img = new Image();
			var url = scriptLoc + '?id=' + ticket_finder;
			if (imgdata != '')
			{
				url += '&img=' + imgdata
			}

			if (subdata != '')
			{
				url += '&sub=' + subdata
			}
			if (refdata != '')
			{
				url += '&ref=' + refdata;
			}

			img.src = url;
			
			SetCookie("ticket_finder", ticket_finder, daysToLive);
		}
	}//end if
	
	function getCookieVal (offset) 
	{
		var endstr = document.cookie.indexOf (";", offset);
		if (endstr == -1)
			endstr = document.cookie.length;

		return unescape(document.cookie.substring(offset, endstr));
	}

	function GetCookie (name) 
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

	function WriteCookie (name, value, expires) 
	{
		var argv = SetCookie.arguments;
		var argc = SetCookie.arguments.length;
		var path = "/";

			//inserted by Andrew Herron to fix cross-sub-domain cookie compatibility, 05/02/2006
			if (multiDomain) {
				rootDomain = document.domain;
			} else {
				domain = document.domain;
				dparts = domain.split(".");
				if (dparts.length == 3) {
					rootDomain = dparts[1]+"."+dparts[2];
				} else {
					rootDomain = domain;
				}
			}

		var secure = (argc > 5) ? argv[5] : false;
		
		var cookie = name + "=" + escape(value) +
			((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
			((path == null) ? "" : ("; path=" + path)) +
			((rootDomain == null) ? "" : ("; domain=" + rootDomain)) +
			((secure == true) ? "; secure" : "");
		
		document.cookie = cookie;
	}

	function DeleteCookie (name) 
	{
		var exp = new Date();
		exp.setTime (exp.getTime() - 1000000000);  // This cookie is history (changed -1 to make it previous time)
		var cval = GetCookie (name);
		document.cookie =name + "=" + cval + "; expires=" + exp.toGMTString();
	}

	function SetCookie(name, value, expiredays)
	{
		var expdate = new Date(); 
		expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * expiredays)); 
		WriteCookie(name, value, expdate);  
	}
