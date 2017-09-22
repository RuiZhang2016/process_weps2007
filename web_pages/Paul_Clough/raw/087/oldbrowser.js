if (!document.getElementById) {
	document.write('<table width="100%" cellpadding="5" cellspacing="0" border="1" summary="error message"><tr><td bgcolor="#990000" align="center"><font color="#ffffff"><b>You are using a web browser which is not supported for the styling used on this site.</b></font></td></tr></table>');
}

if ((screen.width<800) && (screen.height<600)) {
	document.write('<style type="text/css"><!-- @import url("http://www.shef.ac.uk/sheffield/road/Classic/article/0/shared/css/lowres.css"); --></style>');
}
