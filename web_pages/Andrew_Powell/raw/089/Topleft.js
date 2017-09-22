function GetHomesite()
{
	var arg = 'UICookie=';
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			var endstr = document.cookie.indexOf (";", j);
			if (endstr == -1) {
				endstr = document.cookie.length;
			}
			var sUICookie = unescape(document.cookie.substring(j, endstr));
			arg = 'HSite=';
			alen = arg.length
			clen = sUICookie.length
			var z = 0;
			while (z < clen) {
				var y = z + alen;
				if (sUICookie.substring(z, y) == arg) {
					var endstr = sUICookie.indexOf ("~", z);
					if (endstr == -1) {
						endstr = sUICookie.length;
					}
					return unescape(sUICookie.substring(z+arg.length, endstr));
				}
				z = sUICookie.indexOf("~", z) + 1;
				if (z == 0) {
					break;
				}
			}
			return null;
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) {
			break;
		}
	}
	return null;
}

function getRCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function getRCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return getRCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

function ReplaceJS(aText, aReplace) {

}

function AmILoggedIn() {
	if (getRCookie('UserID') + '' != '' && getRCookie('UserID') != null) {
		return true;
	} else {
		return false;
	}
}
//here to actually write the stuff.
//badge

function DrawTopLeft() {
	var sb=parseInt(getRCookie('Subscription'));
	if(!isNaN(sb))
	{
		if(sb==15)
		{
			document.write('<a href=http://www.rivals.com/content.asp?SID=1014&CID=149847><img src="http://vmedia.rivals.com/images/forum/badge/rr' + getRCookie("GoldStatus") + '.gif" class="shield"></a>');
			//document.write('<a href=http://www.rivals.com/content.asp?SID=1014&CID=149847><img src="http://vmedia.rivals.com/images/forum/badge/rr66.gif" class="shield"></a>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/WirelessPrefs.asp?RequestADD=ADD&wp_key=0><b>Wireless Alerts</b></a><img src=http://vmedia.rivals.com/images/marketing/new1.gif height=15 width=25><br>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=http://pickem.rivals.com>Pick\'em Winners</a><br>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/useropts.asp>My Profile</a><br>');
			//var sHomeSite = GetHomesite().replace(new RegExp(/\+/g), ' ') + '';
			//if (sHomeSite != '' && sHomeSite != '&nbsp;') {
			//	document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;' + sHomeSite.replace('+',' ') + '<br>');
			//}
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/content.asp?cid=45867>Member Services</a><br>');	
			
		}
		else if(sb==13)
		{
			document.write('<a href=http://www.rivals.com/content.asp?SID=1014&CID=149847><img src="http://vmedia.rivals.com/images/forum/badge/rr' + getRCookie("GoldStatus") + '.gif" class="shield"></a>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/nsupgrade.asp>Upgrade Now!</a><br>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=http://pickem.rivals.com>Pick\'em Winners</a><br>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/useropts.asp>My Profile</a><br>');
			//var sHomeSite = GetHomesite().replace(new RegExp(/\+/g), ' ') + '';
			//if (sHomeSite != '' && sHomeSite != '&nbsp;') {
			//	document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;' + sHomeSite.replace('+',' ') + '<br>');
			//}
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/content.asp?cid=45867>Member Services</a><br>');		
		}
		else
		{
			document.write('<a href=http://www.rivals.com/content.asp?SID=1014&CID=149847><img src="http://vmedia.rivals.com/images/forum/badge/rr' + getRCookie("GoldStatus") + '.gif" class="shield"></a>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=http://pickem.rivals.com>Pick\'em Winners</a><br>');
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/useropts.asp>My Profile</a><br>');
			//var sHomeSite = GetHomesite().replace(new RegExp(/\+/g), ' ') + '';
			//if (sHomeSite != '' && sHomeSite != '&nbsp;') {
			//	document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;' + sHomeSite.replace('+',' ') + '<br>');
			//}
			document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/content.asp?cid=45867>Member Services</a><br>');
		}
	}
	else
	{
		document.write('<a href=http://www.rivals.com/content.asp?SID=1014&CID=149847><img src="http://vmedia.rivals.com/images/forum/badge/rr' + getRCookie("GoldStatus") + '.gif" class="shield"></a>');
		document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=http://pickem.rivals.com>Pick\'em Winners</a><br>');
		document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/useropts.asp>My Profile</a><br>');
		//var sHomeSite = GetHomesite().replace(new RegExp(/\+/g), ' ') + '';
		//if (sHomeSite != '' && sHomeSite != '&nbsp;') {
		//	document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;' + sHomeSite.replace('+',' ') + '<br>');
		//}
		document.write('<img src=http://vmedia.rivals.com/images/templates/teamsite_arrowrt.gif>&nbsp;<a href=/content.asp?cid=45867>Member Services</a><br>');		
	}
}
