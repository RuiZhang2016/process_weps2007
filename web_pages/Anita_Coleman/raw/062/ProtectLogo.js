// JScript File
//distributed by http://hypergurl.com and I modified it.
//added by SK 20 Nov 2006

var popup="Sorry, right-click is disabled.\n\nThis Site Copyright ©2006";
function noway(go) 
{ 
	if (document.all)
	{ 
        if (event.button == 2) //&& ( event.srcElement.getAttribute("name")== "newpageheader_v3.jpg") 
        {
            if (event.srcElement.getAttribute("name")== "newpageheader_v3.jpg")
            { 
                alert(popup);
		        return false; 
		      }
		} 
	} 
	if (document.layers) 
	{ 
		if (go.which == 3)//&& ( event.srcElement.getAttribute("name")== "newpageheader_v3.jpg") 
		{ 	
		    if (event.srcElement.getAttribute("name")== "newpageheader_v3.jpg")
            {
                alert(popup); 
			    return false; 
			 }
		} 
	} 
} 

if (document.layers) 
{ 
	document.captureEvents(Event.MOUSEDOWN); 
} 
document.onmousedown=noway; 

