var rsi_k;
var rsi_now = new Date();
var rsi_td=rsi_now.getFullYear()+'_'+(rsi_now.getMonth()+1)+'_'+rsi_now.getDate();
var rsi_ct=0;
var rsi_beg=document.cookie.indexOf('rsi_ct=');
if(rsi_beg>=0){
rsi_beg=document.cookie.indexOf('=',rsi_beg)+1;
if(rsi_beg>0){
if(rsi_td==document.cookie.substring(rsi_beg,rsi_beg+rsi_td.length)){
rsi_beg+=(rsi_td.length+1);
var rsi_end=document.cookie.indexOf(';',rsi_beg);
if(rsi_end==-1)
rsi_end=document.cookie.length;
var rsi_par=parseInt(document.cookie.substring(rsi_beg,rsi_end));
if(!isNaN(rsi_par))
rsi_ct=rsi_par;
}}}
var rsi_tom=new Date(rsi_now.getTime()+86400000);
document.cookie=('rsi_ct='+rsi_td+':'+(rsi_ct+1)+';expires='+rsi_tom.toGMTString()+';path=/');
rsi_k = '&ko=' + rsi_td + '__' + Math.floor((rsi_ct+6)/7);
document.writeln('<script type="text/javascript" src="' + location.protocol + '//js.revsci.net/common/pcx.js?tmpl=accm&csid=J05532' + rsi_k + '" charset="ISO-8859-1"></s' + 'cript>');
