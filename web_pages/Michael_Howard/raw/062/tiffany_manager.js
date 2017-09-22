if(typeof commercialNode == 'undefined')
{
	if(typeof thisNode != 'undefined')
	{
		commercialNode = thisNode;
	}
	else
	{
		commercialNode = 'washingtonpost.com'
	}
}



doTiffany=false;


if (commercialNode=='washingtonpost.com')
{
	doTiffany=true
}


tiff_ran = Math.floor(Math.random()*1000000000000)

tiff_test = ''

if(location.href.match('test_ads'))
{
	tiff_test = 'kw=wpni_test'
}

if(doTiffany)
{
adCode = '<div style="margin:0px;padding:0px"><s\cript src="http://ad.doubleclick.net/adj/wpni.'+commercialNode.split("/")[0]+';ad=tiff;'+tiff_test+';ord='+tiff_ran+'?"></s\cript></div>'
adCode = '<div style="padding-bottom:15px;padding-top:2px;float:left;"><img src="http://www.washingtonpost.com/wp-srv/hp/img/advertical.gif" ></div>'+adCode
document.write(adCode)
}
			
if (location.href.indexOf('debugAdCode') != -1)
	{
		currentAdCode = prompt("This is the current TiffanyTile code:", adCode);
	}

