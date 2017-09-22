/*
 * Build version Tulane-10.0.0-77
 */

rsinetsegs = [];

if(rsinetsegs.length>0){

if(rsi_ct==0||(rsi_ct%7)==1){
r_a_src=location.protocol+'//servedby.advertising.com/site=695501/mnum=1516/bins=1/rich=0/logs=0/betr=rsi=[+]'+rsinetsegs[0]+'[1440]';
for(var i=1;i<rsinetsegs.length;i++)r_a_src+=(','+rsinetsegs[i]+'[1440]');
r_a_img=new Image(2,3);r_a_img.src=r_a_src;
}}

var rsi_exp=new Date(rsi_now.getTime()+2419200000);
var rsi_dom=location.hostname;
rsi_dom=rsi_dom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsi_dom=rsi_dom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsi_dom=rsi_dom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
document.cookie=('rsi_segs='+rsinetsegs.join('|')+';expires='+rsi_exp.toGMTString()+';path=/;domain='+rsi_dom);
  