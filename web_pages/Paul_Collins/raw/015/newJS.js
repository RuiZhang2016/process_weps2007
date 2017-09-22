function FormWin(t,w,h,s){
	var X = (screen.width) ? (screen.width-w)/2 : 0;
	var Y = (screen.height) ? (screen.height-h)/2 : 0;
	settings =	'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars='
	+s+',resizable=1,height='+h+',width='+w+',top='+Y+',left='+X;
	win = window.open("",t,settings); win.focus();
	return true;
}
