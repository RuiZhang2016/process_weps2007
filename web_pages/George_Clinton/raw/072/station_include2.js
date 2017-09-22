window.station = "";
cookieSave = document.cookie;
window.cookieValue = cookieSave;
stationFind = window.cookieValue.indexOf("station");
if(stationFind > -1)
{
	semiFind = window.cookieValue.indexOf(";", stationFind);
	if (semiFind == -1)
		{
			semiFind = window.cookieValue.length;
		}
	window.station = window.cookieValue.substring(stationFind + 8, semiFind);
}

if(window.station=="")
	{
		createForm();
	}
else
	{
		document.write ('<script src="http://www.npr.org/stations/js/' + (window.station).toLowerCase() + '.js" type="text/javascript"></script>');
	}