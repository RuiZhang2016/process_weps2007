function addbookmark()
	{var bro = whichBrs();
if (bro == "Internet Explorer")
{ 
  		bookmarkurl="http://www.EasyBookSearch.com"
		bookmarktitle="EasyBookSearch.com - Find the Lowest Book Price For You"
  window.external.AddFavorite(bookmarkurl,bookmarktitle)
}
else if (bro == "Opera")
{
document.getElementById("status5").innerHTML='Like our free service? Please bookmark this site to support us.<br>To bookmark this site, click <b><font color="#FF3300">Bookmarks | Add pages here<br></font></b>Or simply press <b><font color="#FF3300">Ctrl+T</font></b><font color="#FF3300">.</font><br><br><br> '	
}
if (navigator.appName=="Netscape")
{
document.getElementById("status5").innerHTML='Like our free service? Please bookmark this site to support us.<br>To bookmark this site, click <b><font color="#FF3300">Bookmarks | BookMark this page <br></font></b>Or simply press <b><font color="#FF3300">Ctrl+D</font></b><font color="#FF3300">.</font><br><br><br> '	
}
}

function submit_info()
{
var msg = escape(document.forms.suggestion_form.suggestion_msg.value)
MM_openBrWindow('/suggestion_box.aspx?msg=' + msg,'','scrollbars=yes,width=200,height=150')
document.forms.suggestion_form.suggestion_msg.value = ''
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

	
	function MM_goToURL() { //v3.0
  var browserName=navigator.appName; 
if (browserName=="Microsoft Internet Explorer" || browserName=="Netscape")
{ 
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
  }
}

function setfocus() { document.form1.s_string.focus(); }
function setfocus_advanced() { document.form1.title.focus(); }

function whichBrs(){
var agt=navigator.userAgent.toLowerCase();
if (agt.indexOf("opera") != -1) return 'Opera';
if (agt.indexOf("staroffice") != -1) return 'Star Office';
if (agt.indexOf("beonex") != -1) return 'Beonex';
if (agt.indexOf("chimera") != -1) return 'Chimera';
if (agt.indexOf("netpositive") != -1) return 'NetPositive';
if (agt.indexOf("phoenix") != -1) return 'Phoenix';
if (agt.indexOf("safari") != -1) return 'Safari';
if (agt.indexOf("skipstone") != -1) return 'SkipStone';
if (agt.indexOf("msie") != -1) return 'Internet Explorer';
if (agt.indexOf("netscape") != -1) return 'Netscape';
if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
if (agt.indexOf('\/') != -1) {
if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') {
return navigator.userAgent.substr(0,agt.indexOf('\/'));}
else return 'Netscape';} else return navigator.userAgent.substr(0,agt.indexOf(' '));
}


function selectAll(theField) {
var tempval=eval("document."+theField)
tempval.focus()
tempval.select()
}