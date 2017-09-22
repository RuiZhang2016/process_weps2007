	var scriptLoc = 'http://www.myaffiliateprogram.com/u/arrivene/rep.asp';
	
	var kbId = 0;
	var queryString = window.location.search.substring(1);
	var imgdata = '';
	var subdata = '';
	var overwrite = 0;

	if (queryString.length > 0)
	{
		var pairs = queryString.split('&');
								
		for(var i = 0; i < pairs.length; i++)
		{
			var pairs2 = pairs[i].split('=');
			
			switch(pairs2[0].toLowerCase())
			{
				case 'kbid':
					kbId = pairs2[1];
					break;
				case 'clearcookie':
					if (pairs2[1] == 1)
					{
						DeleteCookie("kbid");
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

	if (GetCookie("kbid") == null || overwrite == 1)
	{
		if (kbId != 0)
		{
			var img = new Image();
			var url = scriptLoc + '?id=' + kbId;
			if (imgdata != '')
			{
				url += '&img=' + imgdata
			}

			if (subdata != '')
			{
				url += '&sub=' + subdata
			}

			img.src = url;
			
			SetCookie("kbid", kbId, 1);
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
		var path = (argc > 3) ? argv[3] : null;
		var domain = (argc > 4) ? argv[4] : null;
		var secure = (argc > 5) ? argv[5] : false;
		
		var cookie = name + "=" + escape(value) +
			((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
			((path == null) ? "" : ("; path=" + path)) +
			((domain == null) ? "" : ("; domain=" + domain)) +
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
