function setbkgrnd(idx) {
	ele = 'nav' + idx;
	bkgrnd = 'url(/common/image/v4/home/nav-swoosh.gif) no-repeat';
 	if (document.all) { // IE >=5
		document.getElementById(ele).style.background = bkgrnd;
	}
	else if (document.getElementById) { // Mozilla, Netscape >=6
		document.getElementById(ele).style.background = bkgrnd;
	}
 }

 function resetbkgrnd(idx) {
 	ele = 'nav' + idx;
	bkgrnd = '';
 	if (document.all) { // IE >=5
		document.getElementById(ele).style.background = bkgrnd;
	}
	else if (document.getElementById) { // Mozilla, Netscape >=6
		document.getElementById(ele).style.background = bkgrnd;
	}
 }