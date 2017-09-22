function clearField()
	{
		if (document.go_local.txtSearchValue.value.toUpperCase().indexOf("LETTERS") > -1)
			{
				document.go_local.txtSearchValue.value = "";
			}
	}
	
function fillField()
	{
		if (document.go_local.txtSearchValue.value == "")
			{
				document.go_local.txtSearchValue.value = "Call Letters";
			}
	}
	
function zipUcase()
	{
		if (document.go_local.txtSearchValue.value!="Call Letters")
			{
				document.go_local.txtSearchValue.value = document.go_local.txtSearchValue.value.toUpperCase();
			}
	}
	
function href()
	{
		url = escape(window.location.href);
		//url = window.location.href;
		andFind = url.indexOf("&");
		startPos = 0;
		while (andFind > -1)
			{
				url = url.substring(startPos, andFind) + "%26" + url.substring(andFind + 1);
				andFind = url.indexOf("&");
			}
			
		var re = new RegExp (' ', 'gi') ;
		
		window.location.href = "http://www.npr.org/stations/index.php?refUrl=" + url;
	}
	
function removeHref(cookieValue)
	{
		url = escape(window.location.href);
		andFind = url.indexOf("&");
		startPos = 0;
		while (andFind > -1)
			{
				url = url.substring(startPos, andFind) + "%26" + url.substring(andFind + 1);
				andFind = url.indexOf("&");
			}
			
		var re = new RegExp (' ', 'gi') ;
		
		window.location.href = "http://www.npr.org/stations/cookies/stations_kill_cookie.php?cookieValue=" + cookieValue + "&url=" + url;
	}