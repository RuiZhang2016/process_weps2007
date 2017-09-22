var expireDate = new Date(2050, 10, 23);

function cookieVal(cookieName)
{
thisCookie = document.cookie.split("; ")
for (i=0; i<thisCookie.length; i++)
	{
	if (cookieName == thisCookie[i].split("=")[0])
		{
		return thisCookie[i].split("=")[1]
		}
	}
return 0;
}

function setCookie(cookieName,cookieContent,transientBoolean)
{
if (transientBoolean)
	{
	document.cookie = cookieName+"="+cookieContent;
	}
else
	{
	document.cookie = cookieName+"="+cookieContent+";expires="+expireDate.toGMTString();
	}
}

function setDisplayforID(id, display) // showhide is used in response.php
{
document.getElementById(id).style.display = display;
}

function gotoaURL(url)
{
window.location = url;
}

function checkSpans(page) {
	var x=document.getElementById('*');
	var postArray='';
	if(x){ x.parentNode.removeChild(x); }
	for(var x=0,y=document.getElementsByTagName('*'),oStr='';y[x];x++) {
		if(y[x].id&&y[x].tagName.match("span","i")) {
			var saneStr=y[x].id.replace(/&/,'&amp;').replace(/</,'&lt;').replace(/>/,'&gt;').replace(/\"/,'&quot;'); //nice string fixer
			if (saneStr.match("tr[0-9]{6}")&&saneStr) {
				void(postArray+=saneStr+',');
			}
		}
	}

	postArray=postArray.replace(/,$/g,'');
	var tForm=document.createElement('form');
	void(tForm.name='translateForm');
	void(tForm.action='/translate.php?page='+page);
	void(tForm.method='POST');
	void(tForm.innerHTML='<input type="hidden" name="stuff" value="'+postArray+'">');
	void(document.body.appendChild(tForm));
	tForm.submit();
}

function lightSpan()
{
document.getElementById("translatethis").style.backgroundColor = "yellow";
}

function scaleTextBox(id, size)
{
document.getElementById("ms_"+id).style.display = "none";
new Effect.Scale(id, size, {scaleX: false, scaleContent: false });
}
