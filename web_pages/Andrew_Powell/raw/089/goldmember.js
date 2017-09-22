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

function setRCookie(NameOfCookie, value, expiremin)
{  var ExpireDate = new Date ();
  ExpireDate.setTime(ExpireDate.getTime() + (expiremin * 60 * 1000));
  document.cookie = NameOfCookie + "=" + escape(value) + ((expiremin == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}

function GetWelcomeText(asWelcome, asNormal, asStillHere, asGetLife) 
{
	var RightNow = new Date();
	if (getRCookie("UserID") != null) 
	{
		if (getRCookie("ImHere") != null) 
		{
			var FromCookie = new Date(getRCookie("ImHere"));
			var diff = 0;
			diff = RightNow - FromCookie;
			if (asNormal != "" && diff < 7200000)
			{
				document.write (asNormal);
			}
			else 
			{
				if (asStillHere != "" && diff < 14400000)
				{
					document.write (asStillHere);
				}
				else
				{
					if (asGetLife != "")
					{
						document.write (asGetLife);
					}
				}	
			}
			setRCookie ("ImHere",FromCookie,60);
		}
		else
		{
			if (asWelcome != "") 
			{
				document.write (asWelcome);
			}
			else
			{
				document.write("Welcome ");
			}
			setRCookie ("ImHere",RightNow,60);
		}
	}
}

function GetGoldText() 
{
if (getRCookie("UserID") != null)
{
if (getRCookie("GoldStatus") > 11)
{
document.write ("<font color=bb8800>Gold Member </font>");
}
else
{
if (getRCookie("GoldStatus") > 5)
{
document.write ("<font color=ababab>Silver Member </font>");
}
else
{
if (getRCookie("GoldStatus") > 0)
{
document.write ("<font color=707070>Member </font>");
}
}
}
}
}

function GetGoldTextWithoutStyle() 
{
var rv = '';
if (getRCookie("UserID") != null)
{
if (getRCookie("GoldStatus") > 11)
{
rv = "Gold Member";
}
else
{
if (getRCookie("GoldStatus") > 5)
{
rv = "Silver Member";
}
else
{
if (getRCookie("GoldStatus") > 0)
{
rv = "Member";
}
}
}
}
return rv;
}

function GetNickName()
{
if (getRCookie("UserID") != null)
{
var sName = getRCookie("NickName");
sName = sName.replace("+"," ");
document.write (unescape(sName.replace("+"," ")));
}
}
