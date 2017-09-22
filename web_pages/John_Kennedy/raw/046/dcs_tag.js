
/*START OF SmartSource Data Collector TAG
Copyright 2002 NetIQ Corporation
Clicktracking Beta
<script language="Javascript">
<!--
gVersion="1.0";
//-->
</script> 
<script language="Javascript1.1">
<!--
gVersion="1.1";
//-->
</script> 
<script language="Javascript1.2">
<!--*/
gVersion="1.2";
/*//-->
</script> 
<script language='JavaScript'>
<!--*/
function dcs_main(theURL){
var gImages=new Array;
var gIndex=0;
var DCS=new Object();
var WT=new Object();
var DCSext=new Object();
var gDomain="wbtdcs.nara.gov";
var gDcsId="";
if (gDcsId==""){
var gTagPath=gDomain;
}
else{
var gTagPath=gDomain+"/"+gDcsId;
}
function dcsVar(){
var dCurrent=new Date();
WT.tz=dCurrent.getTimezoneOffset()/60*-1;
WT.bh=dCurrent.getHours();
WT.ul=navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;
if (typeof(screen)=="object"){
WT.cd=screen.colorDepth;
WT.sr=screen.width+"x"+screen.height;
}
if (typeof(navigator.javaEnabled())=="boolean"){
WT.jo=navigator.javaEnabled()?"Yes":"No";
}
WT.ti=document.title;
WT.js="Yes";
if (typeof(gVersion)!="undefined"){
WT.jv=gVersion;
}
//WT.sp="";
if ((window.document.referrer!="")&&(window.document.referrer!="-")){
if (!(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)<4)){
DCS.dcsref=window.document.referrer;
}
}
if (theURL){
DCS.dcsuri=theURL;
DCS.dcsqry="";
DCS.dcssip=window.location.hostname;
} else {
DCS.dcsuri=window.location.pathname;
DCS.dcsqry=window.location.search;
DCS.dcssip=window.location.hostname;
}
DCS.dcsdat=dCurrent.getTime();
}
function A(N,V){
return "&"+N+"="+escape(V);
}
function dcsCreateImage(dcsSrc){
if (document.images){
gImages[gIndex]=new Image;
if (theURL) {
gImages[gIndex].onLoad = NewPage(theURL);
}
gImages[gIndex].src=dcsSrc;
gIndex++;
}
}
function dcsMeta(){
var myDocumentElements;
if (document.all){
myDocumentElements=document.all.tags("meta");
}
else if (document.documentElement){
myDocumentElements=document.getElementsByTagName("meta");}
if (typeof(myDocumentElements)!="undefined"){
for (var i=1;i<=myDocumentElements.length;i++){
myMeta=myDocumentElements.item(i-1);
if (myMeta.name){
if (myMeta.name.indexOf('WT.')==0){
WT[myMeta.name.substring(3)]=myMeta.content;
}
else if (myMeta.name.indexOf('DCSext.')==0){
DCSext[myMeta.name.substring(7)]=myMeta.content;
}
else if (myMeta.name.indexOf('DCS.')==0){
DCS[myMeta.name.substring(4)]=myMeta.content;
}
}
}
}
}
function dcsTag(TagImage){
var P="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+TagImage+"/dcs.gif?";
for (N in DCS){
if (DCS[N]) {
P+=A(N,DCS[N]);
}
}
for (N in WT){
if (WT[N]) {
P+=A("WT."+N,WT[N]);
}
}
for (N in DCSext){
if (DCSext[N]) {
P+=A(N,DCSext[N]);
}
}
if (P.length>2048&&navigator.userAgent.indexOf('MSIE')>=0){
P=P.substring(0,2040)+"&WT.tu=1";
}
dcsCreateImage(P);
}
dcsVar();
dcsMeta();
dcsTag(gTagPath);
}
function NewPage(theURL){
location.replace(theURL);
}
// on load tracking of the page.
//dcs_main();
// -->
/*</script> 
<noscript> 
<img border="0" name="DCSIMG" width="1" height="1" src="http://wbtdcs.nara.gov/njs.gif?dcsuri=/nojavascript&WT.js=No"> 
</noscript> 
<!-- END OF SmartSource Data Collector TAG -->*/
