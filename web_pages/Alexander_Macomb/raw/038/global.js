function PollWindow(mypage, myname, w, h, scroll) 
{
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height=' + h + ',width=' + w + ',top=' + wint + ',left=' + winl + ',scrollbars=' + scroll + ',resizable';
	win = window.open(mypage, myname, winprops);
	if (parseInt(navigator.appVersion) >= 4) 
	{ 
		win.window.focus(); 
	}
}

function NewWindowImage(mypage, myname, w, h, scroll)
{
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = "height=" + h + ",width=" + w + ",top=" + wint + ",left=" + winl + ",scrollbars=yes,resizable";
	win = window.open(mypage, myname, winprops);
	if (parseInt(navigator.appVersion) >= 4)
	{
		win.window.focus();
	}
}


function dropdownjump(targ,selObj)
{
	var loc=selObj.options[selObj.selectedIndex].value;
	if (loc)	
		{
       	eval(targ+".location='"+loc+"'");
     	}
    else
    	{
           selObj.selectedIndex=0;
        }
}