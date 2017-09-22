var locallink=false;

function setupLinks()
{
    var j=0;

    for (var i=0;i<document.links.length;i++)
    {
        if ((document.links[i].href.substring(0, 26) == 'http://goliath.ecnext.com/') ||
            (document.links[i].href.substring(0, 27) == 'https://goliath.ecnext.com/') ||
            (document.links[i].href.substring(0,4) != 'http'))
        {
            document.links[i].onclick = function(){ locallink = true };
        }
    }
}

function checkExit()
{
    var cookieval = getCookieSurvey('survey');
    if (cookieval == null)
    {
        if (!locallink)
        {
            var expdate = new Date ();
            expdate.setTime (expdate.getTime() + (10 * 365 *   24 * 60 * 60 * 1000)); // 10 years from now
            setCookieSurvey('survey','1',expdate,' ','goliath.ecnext.com','');
            window.open("http://www.surveymonkey.com/s.asp?u=31405752738","","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=500,height=500");
        }
    }
}


function setCookieSurvey(name, value, expires, path, domain, secure)
{
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
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

