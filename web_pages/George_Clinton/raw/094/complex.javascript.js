// JavaScript Document

function divreplace (divname, URL) {
	return HTML_AJAX.replace(divname, URL);
}

function galjax (gid, mid, maxdim) {
	return divreplace ('content_gallery', 'getcontent.galleryjax.php?gid='+gid+'&mid='+mid+'&maxdim='+maxdim);
}

function featjax (sid, cf, maxdim) {
	return divreplace ('content_sectionjax', 'getcontent.sectionjax.php?sid='+sid+'&cf='+cf+'&maxdim='+maxdim);
}

function openwindow(URL, Title){
  w=open(URL, 'pop','width=230,height=400,scrollbars=yes,status=yes,resizable=yes');
  return false;
}


function change_color (id, thecolor) {
	document.getElementById(id).style.backgroundColor = thecolor;
} 

function openprintwindow(URL, Title){
  w=open(URL, 'pop','width=797,height=500,scrollbars=yes,status=yes,menubar=yes');
  return false;
}

function showaction (divid) {
	if (divid == 'rate_stuff' || divid == 'rss' || divid == 'email_a_friend') {
		if (divid != 'rate_stuff') {
			//document.getElementById('rate_stuff').style.display = 'none';	
			//document.getElementById('rate_stuff').style.visibility = 'hidden';			
		}
		if (divid != 'rss') {	
			document.getElementById('rss').style.display = 'none';	
			document.getElementById('rss').style.visibility = 'hidden';			
		}
		if (divid != 'email_a_friend') {
			document.getElementById('email_a_friend').style.display = 'none';	
			document.getElementById('email_a_friend').style.visibility = 'hidden';			
		}
	}
	
	if (document.getElementById(divid).style.display == 'inline') {
		document.getElementById(divid).style.display = 'none';	
		document.getElementById(divid).style.visibility = 'hidden';
		if (divid == 'commentsblock') {
			document.getElementById('hideshowcom').innerHTML = '<a href="javascript:showaction(\'commentsblock\')">[+] Show Comments</a>';
		}
	} else {
		document.getElementById(divid).style.display = 'inline';	
		document.getElementById(divid).style.visibility = 'visible';	
		if (divid == 'commentsblock') {
			document.getElementById('hideshowcom').innerHTML = '<a href="javascript:showaction(\'commentsblock\')">[&ndash;] Hide Comments</a>';
		}
	}
}

function hideaction (divid) {
	document.getElementById(divid).style.display = 'none';	
	document.getElementById(divid).style.visibility = 'hidden';				
}