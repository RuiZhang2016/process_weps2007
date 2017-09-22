//advertising.com functions

function setCookie24(NameOfCookie, value, expirehours) {
var ExpireDate = new Date ();
ExpireDate.setTime(ExpireDate.getTime() + (expirehours * 3600 * 1000));
document.cookie = NameOfCookie + "=" + escape(value) + ((expirehours == null) ? "" : "; expires=" + ExpireDate.toGMTString()) + "; path=/;" ;
}
 
function getCookie24(name) {
 var beg = document.cookie.indexOf(name+"=");
 var len = beg+name.length+1;
 var end = document.cookie.indexOf(";",len);
 if (end == -1){
  end = document.cookie.length;
 }
 return unescape(document.cookie.substring(len,end));
}
 
function openWin468(site){
 var bnum=new Number(Math.floor(99999999 * Math.random())+1);
 
 document.write('<SCR'+'IPT LANGUAGE="JavaScript" ');
 document.write('SRC="http://servedby.advertising.com/site='+site+'/size=468060/bnum='+bnum+'/optn=1">');
 document.write('</SCR'+'IPT>');
}
function openWin160(site){
 var bnum=new Number(Math.floor(99999999 * Math.random())+1);
 
 document.write('<SCR'+'IPT LANGUAGE="JavaScript" ');
 document.write('SRC="http://servedby.advertising.com/site='+site+'/size=160600/bnum='+bnum+'/optn=1">');
 document.write('</SCR'+'IPT>');
}
function openWin728(site){
 var bnum=new Number(Math.floor(99999999 * Math.random())+1);
 
 document.write('<SCR'+'IPT LANGUAGE="JavaScript" ');
 document.write('SRC="http://servedby.advertising.com/site='+site+'/size=728090/bnum='+bnum+'/optn=1">');
 document.write('</SCR'+'IPT>');
}
 
//end advertising.com functions