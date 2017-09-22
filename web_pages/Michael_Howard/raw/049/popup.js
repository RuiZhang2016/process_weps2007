function popWin(URL){
	var width = (arguments[1] != null) ? "width=" + arguments[1] : "width=280";
	var height = (arguments[2] != null) ? ",height=" + arguments[2] : ",height=405";
	var atts = "status=no,menubar=no,resizable=yes,scrollbars=no," + width + height;
	var pop = window.open(URL, "", atts);
	if (window.focus) pop.focus();
}
