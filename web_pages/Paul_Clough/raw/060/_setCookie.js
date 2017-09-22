<!-- Begin
var expDays = 365;
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));

function getCookieVal (offset) {  
var endstr = document.cookie.indexOf (";", offset);  
if (endstr == -1)    
endstr = document.cookie.length;  
return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {  
var arg = name + "=";  
var alen = arg.length;  
var clen = document.cookie.length;  
var i = 0;  
while (i < clen) {    
var j = i + alen;    
if (document.cookie.substring(i, j) == arg)      
return getCookieVal (j);    
i = document.cookie.indexOf(" ", i) + 1;    
if (i == 0) break;   
}  
return null;
}
function SetCookie (name, value) {  
var argv = SetCookie.arguments;  
var argc = SetCookie.arguments.length;  
var expires = (argc > 2) ? argv[2] : null;  
var path = (argc > 3) ? argv[3] : null;  
var domain = (argc > 4) ? argv[4] : null;  
var secure = (argc > 5) ? argv[5] : false;  
document.cookie = name + "=" + escape (value) + 
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
((path == null) ? "" : ("; path=" + path)) +  
((domain == null) ? "" : ("; domain=" + domain)) +    
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {  
var exp = new Date();  
exp.setTime (exp.getTime() - 1);  
var cval = GetCookie (name);  
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}

var favorite = GetCookie('page');
var whichForm = eval(document.forms.length-1);
var id;
var curr;
var ship;
var currSelect = "";
function popForm(region) {
if (document.forms[whichForm].amount.value != "0.00" && document.forms[whichForm].amountUK.value != "0.00") {
	if (region == "us") {
		id = "bbks";
		curr = "USD"; currSym = "$";
		ship = "4.00"
	}
	else if (region == "uk") {
		id = "bbksUK";
		curr = "GBP"; currSym = "£";
		ship = "2.75"
		document.forms[whichForm].amount.value = document.forms[whichForm].amountUK.value;
	}
		document.forms[whichForm].business.value = id+"@berghahnbooksonline.com";
		document.forms[whichForm].currency_code.value = curr;
		document.forms[whichForm].shipping.value = ship;
		form = 1;
		document.write('<input type="submit" name="submit" value="Buy Now" class="sub">');
																
document.write('&nbsp;'+currSym+padZeros(roundDecimal(document.forms[whichForm].amount.value,2))+'&nbsp;(<a href="javascript://" onclick="SetCookie(\'page\', \'\', exp);setTimeout(\'location.reload()\', 500);" style="font-weight:normal">'+curr+' - select correct currency</a>)');
		/*if (document.forms[whichForm].status.value == "NYP") { 
			document.write('&nbsp; This book is listed as <a href="javascript://" onclick="popStat()">Not Yet Published</a>.'); 
		}*/
		/*if (document.forms[whichForm].status.value == "TOS") { 
			document.write('&nbsp; This book is listed as <a href="javascript://" onclick="popStat()">Temporarily Out of Stock</a>.'); 
		}*/
}
}
function chkRef() {

	if (favorite) {
		switch (favorite) {
		case 'us' : popForm('us');
     	break;
		case 'uk' : popForm('uk');
		break;
		}
		//currSelect = "yes";
	}
	else {
	currSelect = "yes";
	}
}
function popStat() {
StatWin = window.open('','NYPWin','width=300,height=120');
//StatWin.moveTo(300,300)
var stat = document.forms[whichForm].status.value;
var action = "";
/*if (stat == "NYP") {
	stat = "Not Yet Published"; action = "publication";
	}
if (stat == "TOS") {
	stat = "Temporarily Out of Stock"; action = "reprinting";
	}*/
	stat = "Not Yet Published"
	action = "publication"
StatWin.document.write('<HTML><HEAD><TITLE>'+document.forms[whichForm].status.value+'</TITLE></HEAD><BODY bgcolor="#EEEEEE"><p style="font-family:sans-serif;font-size:12px;">This title is listed as '+stat+'. Clicking "Buy Now" will process your order for delivery on '+action+'. You can request a refund at any time.</p><p style="font-family:sans-serif;" align="center"><a href="javascript://" onclick="window.close()">close popup</a></p></BODY></HTML>');
StatWin.document.close();
}
//  End -->
