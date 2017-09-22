function quickjump(s)
{
	var d = s.options[s.selectedIndex].value;
	window.top.location.href = d;
	s.selectedIndex=0;

}

function MM_openBrWindow(theURL,winName,features) { //v1.2

  window.open(theURL,winName,features);

}

