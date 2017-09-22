document.write('<form name="translingo" method="POST" action="http://www.jesus.org.uk/cgi-bin/translingo.pl" target=_top><TR><TD ALIGN=CENTER><font size=-2 face="arial,helvetica" color="#424242" style="font-size:11.7px"><input type="hidden" name="a" value="f"><input type="hidden" name="u" value=""><input type="hidden" name="p" value=""><input type="hidden" name="e" value=""><select name="l" size="1" style="width:98px;font-family:arial,helvetica,sans-serif;font-size:11.7px;"><option value="bk|1">English</option><option value="bb|en%5fzh">Chinese</option><option value="bb|en%5fzt">Chinese Trad</option><option value="bb|en%5fnl">Dutch</option><option value="bb|en%5ffr">French</option><option value="bb|en%5fde">German</option><option value="bb|en%5fel">Greek</option><option value="bb|en%5fit">Italian</option><option value="bb|en%5fja">Japanese</option><option value="bb|en%5fko">Korean</option><option value="bb|en%5fpt">Portuguese</option><option value="bb|en%5fru">Russian</option><option value="bb|en%5fes">Spanish</option><option value="gl|en%7car">Arabic</option></select><br><a href="#" onclick="translate();return false"><img src="http://www.jesus.org.uk/images/translate.gif" alt="Translate from English" BORDER=0 width=98 height=20></a><br></font></TD></TR></form>');

function translate()
{
	var nEndURL;
	var nBeginURL;
	var szPageURL;
	var szOriginalURL;
	var LangForm = document.translingo;
	
	szPageURL = unescape(document.location.toString());

//	alert(szPageURL); // for debugging

	nBeginURL = szPageURL.indexOf("http://www.jesus.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.jesuspeople.biz");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.newcreation.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.jesuscentre.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.multiply.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://ja.jesus.org.uk.master.com");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://ja.jesus.org.uk.master.com");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://jesusarmy.search.everyone.net");
	if(nBeginURL == -1) {alert("You cannot translate this page into another language. Please press Back to return to the English version of a Jesus Army page first."); return;}

szOriginalURL = szPageURL.substring(nBeginURL);
// alert(szOriginalURL); // for debugging

// Does URL come twice? (Eg WorldLingo)
	szPageURL = szOriginalURL.substring(4); // take http off and look again
	nBeginURL = szPageURL.indexOf("http://www.jesus.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.jesuspeople.biz");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.newcreation.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.jesuscentre.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://www.multiply.org.uk");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://ja.jesus.org.uk.master.com");
	if(nBeginURL == -1) nBeginURL = szPageURL.indexOf("http://jesusarmy.search.everyone.net");
	if(nBeginURL == -1) {szOriginalURL = szOriginalURL;} else {szOriginalURL = szPageURL.substring(nBeginURL);
}
// alert(szOriginalURL); // for debugging

//	Bit to chop after trailing "?"
//	nEndURL = szPageURL.indexOf('&', nBeginURL);
//	if(nEndURL == -1)
//	{szOriginalURL = szPageURL.substring(nBeginURL);}
//	else {szOriginalURL = szPageURL.substring(nBeginURL, nEndURL);}

	n=LangForm.l.selectedIndex;
	v=LangForm.l[n].value;
	i=v.indexOf('|');
	LangForm.e.value=v.substring(0,i);
	LangForm.p.value=v.substring(i+1);
	LangForm.u.value=szOriginalURL;
	LangForm.submit();
}



