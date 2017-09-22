function getAndPopulate (url, divId, nonsync)
{
//	netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
	var x = getHTTPObject();
	var useDiv = document.getElementById (divId);

	x.open ("GET", url, (! nonsync));

	if (! nonsync)
	{
		x.onreadystatechange = function () 
		{
			if (x.readyState == 4) 
			{
				useDiv.innerHTML = x.responseText;
			}
		} // callback

		x.send(null);
	}
	else
	{
		x.send(null);
		useDiv.innerHTML = x.responseText;
	}
}

function sendForm(form, callback)
{
    var x = getHTTPObject();
    var fullurl = form.action + "?ajax=1";
    for (var i=0; i<form.elements.length; i++)
    {
        var elem = form.elements[i];
        if (elem.type == "checkbox" && !elem.checked)
        {
            continue;
        }
        fullurl += "&" + escape(elem.name) + "=" + escape(elem.value);
    }
    sendUrl(fullurl, callback);
}

function sendUrl(url, callback)
{
    var x = getHTTPObject();
    if (callback != null)
    {
        x.onreadystatechange = function()
            {
                if (x.readyState == 4)
                {
                    callback(x);
                }
            };
    }

    x.open("GET", url, true);
    x.send(null);
}
		
function getHTTPObject ()
{	
	var userAgent = navigator.userAgent;

	try
	{
        if (userAgent.indexOf("MSIE") > -1)
            return new ActiveXObject("Microsoft.XMLHTTP");

        if (userAgent.indexOf("Gecko") > -1)
        {
            return new XMLHttpRequest();
        }	
	}
	catch (e)
	{}

    return null;
}
