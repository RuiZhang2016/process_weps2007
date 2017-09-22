// Advance Page Data Collection Script
var _pdata='Log=1&tstamp=' + (new Date()).getTime();
var turl;
function addpdata(name,value) {
  _pdata += '&' + name + '=' + escape(value);
}
function sendpdata() {
addpdata('page',document.location);
addpdata('vsbw',document.body.clientWidth?document.body.clientWidth:"NA");
addpdata('vsbh',document.body.clientHeight?document.body.clientHeight:"NA");
addpdata('vssw',screen.availWidth?screen.availWidth:"NA");
addpdata('vssh',screen.availHeight?screen.availHeight:"NA");
addpdata('ptitle',document.title?document.title:"NA");
if (document.links[0]){
 var links = document.links; 
 addpdata('vslc',links.length);
}
if (document.images[0]){
 var imgs = document.images, ads='', adsc=0, k=0;
 addpdata('imgc',imgs.length);
 while(img=imgs[k++]) {
  if (img.className == 'OAS_counter') {
   var adarr = img.id.split("/");
   var ad = adarr[0] + '/' + adarr[2];
   if (adsc>0) { ads +=',' } ads += ad; adsc++;
  }
 }
 addpdata('adsc',adsc);
 addpdata('ads',ads);
}
if (_pdata) {
turl="<script language='javascript' src='/dhtml/stats/track/vscap.js?"+_pdata+"'></script>";
document.write(turl);
}
}
