function loadXMLDoc(url, this_div)
{
	var xmlhttp;
// code for Mozilla, etc.
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET",url,false);
		xmlhttp.send(null);
	}
	// code for IE
	else if (window.ActiveXObject)
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		if (xmlhttp)
		{
			xmlhttp.open("GET",url,false);
			xmlhttp.send();
		}
	}
	if (xmlhttp.status==200)
	{
		var response= xmlhttp.responseText;
		if(response != '')
		{
			this_div.innerHTML= response;
		}
		else
		{
			this_div.innerHTML= "There was a problem retrieving this information."
		}
	}
	else
	{
		this_div.innerHTML="Problem retrieving XML data: " + xmlhttp.statusText;
	}
}

function CondenseExpandZoomInfo(this_id)
{
	if(document.getElementById)
	{
		var this_div= document.getElementById(this_id);
		var expander_id= this_id+'expander';
		var this_expander= document.getElementById(expander_id);
		if(this_div.style.display != "block")
		{
			this_expander.innerHTML= "-";
			if(this_div.innerHTML == "")
			{
				this_div.innerHTML= "There was a problem retrieving this information."
			}
			this_div.style.display = "block";
		}
		else
		{
			this_expander.innerHTML= "+";
			this_div.style.display = "none";
		}
	}
}
