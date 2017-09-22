function toggleInfo(el) 
{
	var info = document.getElementById(el);
	var showlink=document.getElementById('showlink_' + el);
	var hidelink=document.getElementById('hidelink_' + el);
	
	if (info.style.display == 'none') 
	{
		info.style.display = '';
		hidelink.style.display = '';
		showlink.style.display = 'none';
	} 
	else 
	{
		info.style.display = 'none';
		hidelink.style.display='none';
		showlink.style.display='';
	}
}

function showInfoToggle(el) 
{

    show = '<img src="http://cushing.tamu.edu/collections/images/Images/gfx/tri_up.gif" height="13" width="21" title="Show Details" />';
    hide = '<img src="http://cushing.tamu.edu/collections/images/Images/gfx/tri_down.gif" height="13" width="21" title="Hide Details" />';

	if (document.getElementById(el)) 
	{
		document.writeln('<a href="javascript:toggleInfo(' + el + ')" class="img">' +
			'<span id="showlink_' + el + '">' + show + '</span>' +
			'<span id="hidelink_' + el + '" style="display:none;">' + hide + '</span>'
			+ '</a>');
	}
}