// Eolas is lame.  Therefore, this code is here.  That is all.

if (navigator.userAgent.indexOf("MSIE") != -1)
{
	objectElements = document.getElementsByTagName("object");

	for (i = 0; i < objectElements.length; i++)
	{
		objectElements[i].outerHTML = objectElements[i].outerHTML;
	}
}