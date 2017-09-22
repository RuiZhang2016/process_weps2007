function CreateBookmarkLink() 
{ 
    title = "Tony Abbott MHR";   
    url = "http://www.tonyabbott.com.au";
	if (window.sidebar) { window.sidebar.addPanel(title, url,"");	} 
	else if( window.external ) { window.external.AddFavorite( url, title); }	
	else if(window.opera && window.print) { return true; } 
}
function CloseTag()
{
    if (window.external) { document.write('</a>');   } 
    else  if (window.sidebar) { document.write('</a>'); } 
    else if (window.opera && window.print) { document.write('</a>'); }

} 
    if (window.external) { document.write('<a href="javascript:CreateBookmarkLink()");">');   } 
    else  if (window.sidebar) {  document.write('<a href="javascript:CreateBookmarkLink()");">');  } 
    else if (window.opera && window.print) { document.write('<a href="javascript:CreateBookmarkLink()");">'); }
