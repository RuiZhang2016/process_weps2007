var currentid = 0;
var idtohide = 0;

//ADD AJAX STUFF

var xmlHttp;


function createXMLHttpRequest()
{
if (window.ActiveXObject)
	{
	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} 
else if (window.XMLHttpRequest) 
	{
	xmlHttp = new XMLHttpRequest();
	}
}

    
function startRequest()
{
createXMLHttpRequest();
xmlHttp.onreadystatechange = handleStateChange;
xmlHttp.open("GET", "innerHTML.xml", true);
xmlHttp.send(null);
}


function handleStateChange()
{
if(xmlHttp.readyState == 4)
	{
	if(xmlHttp.status == 200)
		{
		document.getElementById(currentid).innerHTML = xmlHttp.responseText;
		if (idtohide) { document.getElementById(idtohide).style.display = 'none'; }
		if (currentid) { document.getElementById(currentid).style.display = 'block'; }
		}
	}
}