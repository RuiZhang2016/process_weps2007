/*****************************************************************
* Flash Fix script
* Fixes embedded object activation issues in Internet Explorer
*****************************************************************/

flashfix = function() 
{
try
{
	theObjects = document.getElementsByTagName("object");
	for (var i = 0; i < theObjects.length; i++) 
	{
		theObjects[i].outerHTML = theObjects[i].outerHTML;
	}
}
catch(e)
{
}
} 

try
{
if (window.attachEvent)
window.attachEvent("onload", flashfix)
else
window.onload=flashfix;
}
catch(e)
{
}