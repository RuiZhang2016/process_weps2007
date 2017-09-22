var Browser=Class.create();
Browser.prototype={initialize:function(){
this.ua=navigator.userAgent.toLowerCase();
this.version=parseInt(navigator.appVersion);
},isSafari:function(){
return this.ua.indexOf("safari");
},isIE:function(){
return ((this.ua.indexOf("msie")!=-1)&&(this.ua.indexOf("opera")==-1)&&clientPC.indexOf("win")!=-1);
}};
var browser=new Browser();
function isSafari(){
return (navigator.userAgent.toLowerCase().indexOf("safari")!==-1);
}
var radioPopup=null;
var radioPrefPopup=null;
function createRadioPopup(_1,_2,_3){
if(radioPopup==undefined||radioPopup.closed||(_2!=undefined&&_3!=undefined)){
radioPopup=window.open("/webclient/popup/?radioURL="+_1+"&resourceID="+_2+"&resourceType="+_3,"flashRadioPopup","toolbar=no, location=no, directories=no, status=no,menubar=no, scrollbars=no, resizable=no, width=360, height= 165");
radioPopup.moveTo(200,200);
radioPopup.focus();
}else{
if(navigator.appName.indexOf("Microsoft")!=-1){
radioPopup.close();
radioPopup=undefined;
createRadioPopup(_1);
}else{
if(!radioPopup.closed){
radioPopup.tune(unescape(_1));
radioPopup.focus();
}
}
}
}
function createHomepageRadioPopup(_4){
createRadioPopup(_4);
if(radioPopup){
stopRadio();
}
}
function getPlayerEl(_5){
if(window.document[_5]){
return window.document[_5];
}
if(navigator.appName.indexOf("Microsoft")!=-1){
return document.getElementById(_5);
}else{
return document[_5];
}
}
function stopRadio(){
var _6=getPlayerEl("lfmPlayer");
_6.TCallLabel("/","HandleJSStopPlayback");
}
function createRadioPrefPopup(_7){
if((radioPopup==undefined||radioPopup.closed)){
radioPrefPopup=window.open("/webclient/pref/?radioURL="+_7,"radioPrefPopup","toolbar=no, location=no, directories=no, status=no,menubar=no, scrollbars=no, resizable=no, width=375, height= 165");
radioPrefPopup.moveTo(200,200);
radioPrefPopup.focus();
}else{
createRadioPopup(_7);
}
}
var currentTrack;
var currentTrackNum;
var newTrack;
function playPreview(_8){
currentTrackNum=parseInt(_8);
var _9=getPlayerEl("lfmPlayer");
_9.SetVariable("previewTrackNumber",parseInt(_8));
_9.TCallLabel("/","HandleJSPreviewSkip");
if(currentTrack){
currentTrack.onend();
}
currentTrack=getCurrentTrack();
currentTrack.onstart();
}
function getCurrentTrack(){
return Lastfm.resources[currentTrackNum-1];
}
function onFlashPlayerNextTrack(){
if(currentTrack){
currentTrack.onend();
}
if(currentTrackNum==undefined){
currentTrackNum=1;
}else{
if(currentTrack){
currentTrackNum++;
}
}
if(currentTrackNum>Lastfm.resources.length){
currentTrackNum=1;
}
currentTrack=getCurrentTrack();
currentTrack.onstart();
}
function onFlashPlayerStopTrack(){
if(currentTrack){
currentTrack.onend();
}
}
function inlineFlashPreview(el,res,flp){
new Insertion.Before(el,"<span class=\"inlineFlash\"><object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0\" width=\"13\" height=\"13\" allowNetworking=\"internal\"> <param name=\"wmode\" value=\"transparent\"> <param name=\"allowScriptAccess\" value=\"sameDomain\" /><param name=\"FlashVars\" value=\"autostart=true&resourceID="+res+"&flp="+(flp?"true":"false")+"\" />  <param name=\"movie\" value=\"http://static.last.fm/webclient/inline/1/inlinePlayer.swf\" /><param name=\"quality\" value=\"high\" /><param name=\"bgcolor\" value=\"#ffffff\" /><embed wmode=\"transparent\" src=\"http://static.last.fm/webclient/inline/1/inlinePlayer.swf\" quality=\"high\" FlashVars=\"autostart=true&resourceID="+res+"&flp="+(flp?"true":"false")+"\" bgcolor=\"#ffffff\" width=\"13\" height=\"13\" name=\"inlinePlayer\" allowNetworking=\"internal\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" /> </object></span>");
el.parentNode.removeChild(el);
}
function approveFriend(id,url){
var _15=$("friendform"+id).todo;
var _16=document.getElementsByClassName("uContextualInfo","user"+id+"Displayed");
if(_16.length>0){
_16[0].oldInnerHTML=_16[0].innerHTML;
_16[0].innerHTML="";
var _17=document.createElement("img");
_17.setAttribute("src","http://static.last.fm/tageditor/progress_active.gif");
_16[0].appendChild(_17);
}
var _18=new Ajax.Updater("user"+id+"Info",url,{method:"post",parameters:_15+"=1&friendid="+id+"&ajax=1",onComplete:approveFriendSuccess});
}
function approveFriendSuccess(req){
var _20=req.responseText;
var _21=_20.indexOf("success");
var _20=_20.substr(_21+7);
var _22=_20.indexOf("type");
var _23=_20.indexOf("\"");
var id=_20.substr(0,_22);
var _24=_20.substr(_22+4,_23-(_22+4));
var _25=$(_24+"Title").innerHTML;
var _26=_25.indexOf("(");
var _27=_25.indexOf(")");
var _28=_27-_26;
if(_26>0&&_27>0&&_28>0){
var num=parseInt(_25.substr(_26+1,_28));
if(--num>=0){
$(_24+"Title").innerHTML=_25.substr(0,_26)+"("+num+_25.substr(_27);
}
}
}
function approveFriendTimeout(id,num,_30){
$("user"+id+"Displayed").style.display="none";
if(num==0){
$(_30+"Title").style.display="none";
if(_30=="pending"){
$("togglelist1").style.display="none";
}else{
$("togglelist2").style.display="none";
}
}
}
Event.observe(window,"load",function(){
var a=document.getElementsByClassName("hide4js");
a.each(function(e){
Element.toggle(e);
});
});
HighlightEachOther=Class.create();
HighlightEachOther.prototype={initialize:function(_33,_34,_35,_36){
this.classyContainer=_33;
this.classyTagName=_34;
this.idContainer=_35;
this.idTagName=_36;
this.classyElements=$A($(_33).getElementsByTagName(_34));
this.idElements=$A($(_35).getElementsByTagName(_36));
this.classyElements.each(function(_37){
Event.observe(_37,"mouseover",this.highlightId.bindAsEventListener(this));
Event.observe(_37,"mouseout",this.downlightIds.bindAsEventListener(this));
}.bind(this));
this.idElements.each(function(_38){
Event.observe(_38,"mouseover",this.highlightClassNames.bindAsEventListener(this));
Event.observe(_38,"mouseout",this.downlightClassNames.bindAsEventListener(this));
}.bind(this));
},highlightId:function(_39){
var _40=Event.findElement(_39,this.classyTagName);
if(!_40.relatives){
this.getRelativeIds(_40);
}
_40.relatives.each(function(_41){
Element.addClassName(_41,"highlight");
});
},getRelativeIds:function(_42){
_42.relatives=new Array();
var _43=Element.classNames(_42);
_42.relatives=_43.grep(".0");
},highlightClassNames:function(_44){
var _45=Event.findElement(_44,this.idTagName);
if(!_45.relatives){
this.getRelativeClassNames(_45);
}
_45.relatives.each(function(_46){
Element.addClassName(_46,"highlight");
});
},getRelativeClassNames:function(_47){
_47.relatives=new Array();
var _48=_47.id;
this.classyElements.each(function(_49){
if(Element.hasClassName(_49,_48)){
_47.relatives.push(_49);
}
});
},downlightIds:function(_50){
var _51=Event.findElement(_50,this.classyTagName);
_51.relatives.each(function(_52){
Element.removeClassName(_52,"highlight");
});
},downlightClassNames:function(_53){
var _54=Event.findElement(_53,this.idTagName);
_54.relatives.each(function(_55){
Element.removeClassName(_55,"highlight");
});
}};
var wrappers=new Array();
var quilt=new Array();
var quiltsLoaded=false;
var fade=new Array("#BEBFC1","#BBB","#AAA","#999","#888","#777","#666","#555","#444","#333","#222","#111","#000");
var fadeDuration=40;
function loadQuilts(){
if(quiltsLoaded){
return false;
}
wrappers.each(function(id){
var _56=0;
Element.hide($("msg_"+id));
setTimeout("quiltFade('"+id+"',0)",1000);
elems=$A($("quilt_"+id).getElementsByTagName("a"));
elems.each(function(a){
if(quilt[id][_56]){
var i=document.createElement("img");
i.src=quilt[id][_56][0];
i.style.height="60px";
if(quilt[id][_56][3]>2){
i.style.height="90px";
}
i.style.width="auto";
a.appendChild(i);
a.href=quilt[id][_56][1];
a.title=quilt[id][_56][2];
a.onclick=function(){
return true;
};
}
_56++;
});
});
quiltsLoaded=true;
}
function quiltFade(id,_58){
if((_58)<fade.length){
$("quiltbg_"+id).style.background=fade[_58];
_58++;
setTimeout("quiltFade('"+id+"',"+_58+")",fadeDuration);
}
}
function dupeImages(_59,_60){
if(qimg==_59[0]){
_59[3]++;
return true;
}
return false;
}
function lameBlink(id){
if(Element.visible($("msg_"+id))){
Element.toggle($("blink_"+id));
setTimeout("lameBlink('"+id+"')",500);
}
}
function listenLiveSwitch(_61,to,all,_64,_65){
$(_61).value=to;
for(var i=0;i<all.length;i++){
var id=all[i]+"LiveSwitch";
if(all[i]==to){
Element.addClassName(id,"current");
}else{
Element.removeClassName(id,"current");
}
}
$("userInput").value=_65;
}
var cookieExpires=new Date();
cookieExpires.setYear(2036);
var panelimgs=new Array();
function setCookie(_66,_67,_68,_69,_70,_71){
var _72=_66+"="+escape(_67)+((_68)?"; expires="+_68.toGMTString():"")+((_69)?"; path="+_69:"")+((_70)?"; domain="+_70:"")+((_71)?"; secure":"");
document.cookie=_72;
}
function getCookie(_73){
var dc=document.cookie;
var _75=_73+"=";
var _76=dc.indexOf("; "+_75);
if(_76==-1){
_76=dc.indexOf(_75);
if(_76!=0){
return null;
}
}else{
_76+=2;
}
var end=document.cookie.indexOf(";",_76);
if(end==-1){
end=dc.length;
}
return unescape(dc.substring(_76+_75.length,end));
}
function setPanelCookie(_78,_79){
var _80=getCookie("LastPanelsDC");
if(Element.hasClassName(_78,"nosave")){
return;
}
if(_80){
var _81=_80.indexOf(_78+":");
if(_81!=-1){
var _82=_80.substring(0,_81+_78.length+1);
var _83=_80.substring(_81+_78.length+2,_80.length);
setCookie("LastPanelsDC",_82+_79+_83,cookieExpires,"/");
}else{
setCookie("LastPanelsDC",_80+_78+":"+_79+",",cookieExpires,"/");
}
}else{
setCookie("LastPanelsDC",_78+":"+_79+",",cookieExpires,"/");
}
}
function collapseBox(id,_84){
var box=$(id);
if(!box){
return;
}
var _86=$("list_"+id);
var c=document.getElementsByClassName("c",box);
if(c.length>0&&!c[0].blinding){
c[0].blinding=true;
if(c[0].style.display=="none"){
setPanelCookie(id,_86&&Element.hasClassName(c[0],"collapsed")?1:3);
if(_86&&!Element.hasClassName(c[0],"collapsed")){
panelShowImages(id);
}
Effect.BlindDown(c[0],{afterFinish:function(){
c[0].blinding=false;
},duration:0.25});
if(_84){
_84.className="tog collapseTog";
}
}else{
setPanelCookie(id,_86&&Element.hasClassName(c[0],"collapsed")?2:4);
Effect.BlindUp(c[0],{afterFinish:function(){
c[0].blinding=false;
},duration:0.25});
if(_84){
_84.className="tog expandTog";
}
}
}
return false;
}
function toggleBoxImages(id,_88){
var box=$(id);
if(!box){
return;
}
var c=document.getElementsByClassName("c",box);
if(c.length<1){
return;
}
if(Element.hasClassName(c[0],"collapsed")){
setPanelCookie(id,c[0].style.display=="none"?4:3);
if(c[0].style.display!="none"){
panelShowImages(id);
}
Element.removeClassName(c[0],"collapsed");
if(_88){
_88.className="tog textTog";
}
}else{
if(c.length>0){
setPanelCookie(id,c[0].style.display=="none"?2:1);
}
Element.addClassName(c[0],"collapsed");
if(_88){
_88.className="tog imgTog";
}
}
return false;
}
function panelShowImages(id){
var box=$(id);
if(!box){
return;
}
var _89=$("list_"+id);
if(!_89){
return;
}
if(panelimgs[id]&&panelimgs[id][0]){
var img=_89.getElementsByTagName("img");
for(var i=0;i<img.length;i++){
img[i].src=panelimgs[id][i];
}
}
}
function toggleImageView(_91){
var _92=$(_91);
if(!Element.hasClassName(_92,"collapsed")){
Element.addClassName(_92,"collapsed");
$("rsToggleImages_"+_91).checked=true;
$("rsToggleDetails_"+_91).checked=false;
setPanelCookie(_91,1);
}
}
function toggleDetailView(_93){
var _94=$(_93);
if(Element.hasClassName(_94,"collapsed")){
Element.removeClassName(_94,"collapsed");
$("rsToggleImages_"+_93).checked=false;
$("rsToggleDetails_"+_93).checked=true;
setPanelCookie(_93,3);
}
}
var radioOn=false;
function radioToggle(){
if(radioOn){
$("radiobits").style.display="none";
$("radioInputView").src="http://static.last.fm/depth/sidebars/vw_view.gif";
radioOn=false;
}else{
$("radiobits").style.display="block";
$("radioInputView").src="http://static.last.fm/depth/sidebars/vw_view_on.gif";
radioOn=true;
}
}
function colourSwitch(_95){
if($("LastBody").className.indexOf("red")!=-1){
$("LastBody").className=$("LastBody").className.replace("red","black");
$("LogoImg").src=$("LogoImg").src.replace("logo.gif","logo_black.gif");
$("headerSearchbutton").src=$("headerSearchbutton").src.replace("nav.gif","nav_blk.gif");
setCookie("LastFm_Colour","black",cookieExpires,"/");
}else{
$("LastBody").className=$("LastBody").className.replace("black","red");
$("LogoImg").src=$("LogoImg").src.replace("logo_black.gif","logo.gif");
$("headerSearchbutton").src=$("headerSearchbutton").src.replace("nav_blk.gif","nav.gif");
setCookie("LastFm_Colour","red",cookieExpires,"/");
}
_95.blur();
return false;
}
function toggleStations(_96,_97){
if($("stationBlurb")){
Element.toggle("stationBlurb");
}
if($("mainStationShare")){
Element.toggle("mainStationShare");
}
if(!Element.visible("otherStations")){
if($("profileStation")){
Element.removeClassName("profileStation","withBlurb");
}
$("stationToggle").innerHTML=_97;
}else{
if($("profileStation")){
Element.addClassName("profileStation","withBlurb");
}
$("stationToggle").innerHTML=_96;
}
Element.toggle("otherStations");
return false;
}
function togglePlaylist(){
if(Element.visible($("plFlash"))){
$("plHolder").style.height="auto";
Element.removeClassName("plHolder","plScroll");
Element.hide("plFlash");
new Effect.BlindUp("plFlashHolder",{duration:0.3});
var _98=$A(document.getElementsByClassName("extraRowVisible"));
_98.each(function(_99){
Element.removeClassName(_99,"extraRowVisible");
Element.addClassName(_99,"extraRow");
});
$("plTogText").innerHTML=plShowText;
}else{
$("plHolder").style.height=plHeight;
Element.addClassName("plHolder","plScroll");
new Effect.BlindDown("plFlashHolder",{duration:0.3,afterFinish:function(){
Element.show("plFlash");
}});
var _100=$A(document.getElementsByClassName("extraRow"));
_100.each(function(elem){
Element.removeClassName(elem,"extraRow");
Element.addClassName(elem,"extraRowVisible");
});
$("plTogText").innerHTML=plHideText;
}
return false;
}
function faqpopup(id){
var url="/popups/faq/?id="+id;
var faq=window.open(url,"faq","toolbar=no, location=no, directories=no, status=no,menubar=no, scrollbars=yes, resizable=yes, width=350, height=400");
}
function sbpopup(_103){
var url="/user/"+_103+"/shoutbox/";
var faq=window.open(url,"shoutbox","toolbar=no, location=no, directories=no, status=no,menubar=no, scrollbars=yes, resizable=yes, width=225, height=450");
}
function CheckAll(name){
var _105=document.getElementById(name);
elLength=_105.elements.length;
for(i=0;i<elLength;i++){
_105.elements[i].checked=!_105.elements[i].checked;
}
}
function getSelectedCheckboxValue(_106){
var _107=new Array();
var _108=getSelectedCheckbox(_106);
if(_108.length!=0){
_107.length=_108.length;
for(var i=0;i<_108.length;i++){
if(_106[_108[i]]){
_107[i]=_106[_108[i]].value;
}else{
_107[i]=_106.value;
}
}
}
return _107;
}
function swapDisplay(that){
var _110;
if(_110=document.getElementById(that)){
if(_110.style.display=="none"){
if(arguments.length>1){
hideClass(arguments[1]);
}
_110.style.display="";
}else{
_110.style.display="none";
}
}
}
var hideClassList={};
function hideClass(_111){
if(hideClassList[_111]){
for(var key in hideClassList[_111]){
hideClassList[_111][key].style.display="none";
}
}else{
var _113=document.getElementById(_111);
if(_113){
hideClassList[_111]=new Array();
for(var key in _113.childNodes){
if(_113.childNodes[key].className&&_113.childNodes[key].className.match(new RegExp(_111))){
hideClassList[_111].push(_113.childNodes[key]);
}
}
hideClass(_111);
}
}
}
var actionConf={jcommentdelete:{msg:"Are you sure you would like to delete this comment?",urlpass:null},journaldelete:{msg:"Are you sure you would like to delete this journal entry?",urlpass:null}};
function confirmAction(_114){
if(confirm(actionConf[_114].msg)){
if(actionConf[_114].urlpass==null){
if(arguments.length==1){
alert("ERROR:: There is no redirect URL");
}else{
window.location.href=arguments[1];
}
}else{
window.location.href=actionConf[_114].urlpass;
}
}else{
if(!actionConf[_114].urlfail){
}else{
window.location.href=actionConf[_114].urlfail;
}
}
}
function print_r(_115,_116){
if(typeof (_116)=="number"){
if(_116>2){
return "Too Far\n";
}
var _117="    ";
for(var j=0;j<_116;j++){
_117+=_117;
}
paren_indent-="  ";
_116++;
}else{
var _116=1;
var _117="    ";
var _119="";
}
switch(typeof (_115)){
case "boolean":
var _120=(_115?"true":"false")+"\n";
break;
case "object":
if(_115===null){
var _120="null\n";
break;
}
var _120=((_115.reverse)?"Array":"Object")+" (\n";
for(var i in _115){
try{
_120+=_117+"["+i+"] => "+print_r(_115[i],_116);
}
catch(ex){
}
}
_120+=_119+")\n";
break;
case "number":
case "string":
default:
var _120=""+_115+"\n";
}
return _120;
}
function setFocus(id){
element=document.getElementById(id);
setTimeout("element.focus();",500);
}
function confirmAndGo(msg,url){
if(confirm(msg)){
self.location=url;
}else{
return false;
}
}
function whelp(_122){
wh_clear(0);
var _123=$("whelp");
if(_123){
_123.appendChild(document.createTextNode(_122.title));
}
}
function wh_clear(_124){
var _125=$("whelp");
if(_125){
while(_125.firstChild){
_125.removeChild(_125.firstChild);
}
if(wh_default&&_124>0){
_125.appendChild(document.createTextNode(wh_default));
}
}
}
String.prototype.trim=function(){
a=this.replace(/^\s+/,"");
return a.replace(/\s+$/,"");
};
Event.observe(window,"load",function(){
document.getElementsByClassName("jsonly").each(function(e){
e.style.display="";
});
},false);
var panelDefaultItems=new Array();
var panelRemovedItems=new Array();
var panelOtherItems=new Array();
Panel.prototype.addItem=Panel_addItem;
Panel.prototype.getItem=Panel_getItem;
Panel.prototype.removeItem=Panel_removeItem;
Panel.prototype.checkForItem=Panel_checkForItem;
Panel.prototype.removeAllItems=Panel_removeAllItems;
Panel.prototype.listItems=Panel_listItems;
function Panel(_126){
this.panel=_126;
var _127=this.panel.childNodes;
panelDefaultItems[this.panel.id]=new Array();
panelRemovedItems[this.panel.id]=new Array();
panelOtherItems[this.panel.id]=new Array();
for(var i=0;i<_127.length;i++){
if(_127[i].nodeType==1&&_127[i].tagName.toLowerCase()=="div"){
switch(_127[i].className){
case "h":
this.header=_127[i];
break;
case "c":
this.content=_127[i];
var _128=this.content.childNodes;
for(var j=0;j<_128.length;j++){
if(_128[j].nodeType==1&&_128[j].tagName.toLowerCase()=="ul"){
this.list=_128[j];
var _129=this.list.childNodes;
for(var k=0;k<_129.length;k++){
if(_129[k].nodeType==1&&_129[k].tagName.toLowerCase()=="li"){
for(var l=0;l<_129[k].length;l++){
if(_129[k][l].nodeType==1&&_129[k][l].tagName.toLowerCase()=="a"&&_129[k][l].className=="it"){
var name=_129[k][l].childNodes[0].data;
var it=panelDefaultItems[this.panel.id].length;
panelDefaultItems[this.panel.id][it]={name:name,"element":_129[k]};
}
}
}
}
break;
}
}
break;
case "f":
this.footer=_127[i];
break;
}
}
}
this.itemcount=0;
}
function Panel_addItem(_133,_134){
var _135=document.getElementById("emptyConnectionsDiv");
if(_135){
_135.style.display="none";
}
var li=document.createElement("li");
var liid=this.panel.id+"_li"+this.itemcount;
li.id=liid;
var thea=document.createElement("a");
thea.setAttribute("title","");
thea.setAttribute("href",getElementText(_133,"url"));
thea.target="_new";
var src=getElementText(_133,"smallimg");
if(src==" "){
}else{
var img=document.createElement("img");
img.setAttribute("width","50");
img.setAttribute("src",src);
}
var _140=document.createElement("strong");
var _141=document.createElement("span");
_140.appendChild(_141.appendChild(document.createTextNode(getElementText(_133,"name"))));
if(src==" "){
}else{
thea.appendChild(img);
}
thea.appendChild(_140);
li.appendChild(thea);
if(_134){
var _142=document.createElement("input");
_142.setAttribute("type","hidden");
_142.setAttribute("name",this.panel.id+this.itemcount.toString());
_142.setAttribute("value",getElementText(_133,"restype")+":"+getElementText(_133,"id"));
li.appendChild(_142);
}
var i=panelOtherItems[this.panel.id].length;
panelOtherItems[this.panel.id][i]={"name":getElementText(_133,"name"),"resname":getElementText(_133,"resname"),"element":li};
var _143;
if((_143=getElementText(_133,"artistname"))!=null){
panelOtherItems[this.panel.id][i].artist=getElementText(_133,"artistname");
}
this.list.appendChild(li);
this.itemcount++;
return liid;
}
function Panel_getItem(loc,id){
switch(loc){
case 1:
return panelRemovedItems[this.panel.id][id];
break;
default:
return null;
}
}
function Panel_removeItem(id){
var _145=document.getElementById(id);
var _146=false;
var _147=panelOtherItems[this.panel.id];
var tmp;
for(var i=0;i<_147.length;i++){
if(_147[i].element==_145){
tmp=_147[i];
_147.splice(i,1);
break;
}
}
panelRemovedItems[this.panel.id][panelRemovedItems[this.panel.id].length]=tmp;
try{
_145.parentNode.removeChild(_145);
this.listItems("removed");
this.listItems("other");
}
catch(e){
alert("Error[Panel.removeItem("+id+")]");
}
}
function Panel_checkForItem(tag,_150,_151){
var _152=[panelDefaultItems[this.panel.id],panelRemovedItems[this.panel.id],panelOtherItems[this.panel.id]];
var _153=/artist=([^\]]*)\]"/g;
try{
var _154=_151.match(_153)[1];
}
catch(e){
}
for(var i=0;i<_152.length;i++){
for(var j=0;j<_152[i].length;j++){
if(i==0){
}else{
if(_152[i][j].resname.toLowerCase()==tag.toLowerCase()&&_152[i][j].name.toLowerCase()==_150.toLowerCase()){
if(!_154||(_152[i][j].artistname.toLowerCase()&&_154==_152[i][j].artistname.toLowerCase())){
this.lastItemCheck=j;
return i;
}
}
}
}
}
return 3;
}
function Panel_removeAllItems(){
var _155=this.list;
for(var i=0;i<this.list.childNodes.length;i++){
this.removeItem(this.list.childNodes[i].getAttribute("ID"));
}
}
function Panel_listItems(list,_157){
var msg="";
switch(list){
case "removed":
msg="Removed Items\n";
list=panelRemovedItems;
break;
case "other":
msg="Other Items\n";
list=panelOtherItems;
break;
}
if(_157){
for(var i=0;i<list[this.panel.id].length;i++){
msg+="{name:"+list[this.panel.id][i].name+",resname:"+list[this.panel.id][i].resname+"}\n";
}
}else{
return list[this.panel.id];
}
}
var globalResourceCheck={};
var resourceCheckBusy=false;
var webhost=null;
function getElementText(_158,name){
if(_158.getElementsByTagName(name)){
try{
return _158.getElementsByTagName(name)[0].childNodes[0].data;
}
catch(e){
return null;
}
}else{
return false;
}
}
ResourceCheck.prototype.getAjax=ResourceCheck_getAjax;
ResourceCheck.prototype.setParam=ResourceCheck_setParam;
ResourceCheck.prototype.getParam=ResourceCheck_getParam;
ResourceCheck.prototype.send=ResourceCheck_send;
ResourceCheck.prototype.response=ResourceCheck_response;
ResourceCheck.prototype.setCallback=ResourceCheck_setCallback;
ResourceCheck.prototype.writeToGlobal=ResourceCheck_writeToGlobal;
function ResourceCheck(){
this.getAjax();
this.parameters={"gettype":"check"};
}
function ResourceCheck_getAjax(){
if(window.XMLHttpRequest){
this.req=new XMLHttpRequest();
}else{
if(window.ActiveXObject){
this.req=new ActiveXObject("Microsoft.XMLHTTP");
}else{
this.req=null;
}
}
}
function ResourceCheck_setParam(key,val){
this.parameters[key]=encodeURIComponent(val);
}
function ResourceCheck_getParam(key){
try{
var val=this.parameters[key];
return val;
}
catch(e){
return null;
}
}
function ResourceCheck_send(){
if(this.resourceCheckBusy){
throw ("ResourceCheck busy");
}
this.resourceCheckBusy=true;
if(!webhost){
alert("No Webhost");
return false;
}
var url="http://"+webhost+"/ajax/resourcecheck/?";
var _160=false;
var msg="";
for(var key in this.parameters){
url+=(_160?"&":"")+key+"="+this.parameters[key];
msg+=(_160?"&\n":"")+key+"="+this.parameters[key];
_160=true;
}
this.req.open("GET",url,true);
var _161=this;
this.req.onreadystatechange=function(){
_161.response();
};
this.req.send(null);
}
function ResourceCheck_response(){
if(this.req.readyState==4){
if(this.req.responseText.match(/true/i)){
this.callback(true,this.callbackparams);
}else{
if(globalResourceCheck.req.responseText=="true"){
this.callback(true,this.callbackparams);
}else{
this.callback(false,this.callbackparams);
}
}
this.resourceCheckBusy=false;
}
}
function ResourceCheck_setCallback(_162,_163){
this.callback=_162;
this.callbackparams=_163;
}
function ResourceCheck_writeToGlobal(){
for(var key in this){
globalResourceCheck[key]=this[key];
}
}
ResourceGet.prototype=new ResourceCheck;
ResourceGet.prototype.contructor=ResourceGet;
ResourceGet.prototype.response=ResourceGet_response;
function ResourceGet(){
this.getAjax();
this.parameters={"gettype":"object"};
}
function ResourceGet_response(){
if(this.req.readyState==4){
if(this.req.responseText.match(/false/i)){
this.callback(false,this.callbackparams);
}else{
if(this.req.responseXML){
this.callback(this.req.responseXML,this.callbackparams);
}
}
this.resourceCheckBusy=false;
}
}
ResourceList.prototype=new ResourceCheck;
ResourceList.prototype.constructor=ResourceList;
ResourceList.prototype.response=ResourceList_response;
function ResourceList(){
this.getAjax();
this.parameters={"gettype":"list"};
}
function ResourceList_response(){
if(this.req.readyState==4){
if(this.req.responseText.match(/false/i)){
alert("Not found ["+this.req.responseText+"]");
this.callback(false,this.callbackparams);
}else{
if(this.req.responseXML){
this.callback(this.req.responseXML.childNodes,this.callbackparams);
}
}
}
this.resourceCheckBusy=false;
}
if(!Control){
var Control={};
}
Control.Slider=Class.create();
Control.Slider.prototype={initialize:function(_164,_165,_166){
var _167=this;
if(_164 instanceof Array){
this.handles=_164.collect(function(e){
return $(e);
});
}else{
this.handles=[$(_164)];
}
this.track=$(_165);
this.options=_166||{};
this.axis=this.options.axis||"horizontal";
this.increment=this.options.increment||1;
this.step=parseInt(this.options.step||"1");
this.range=this.options.range||$R(0,1);
this.value=0;
this.values=this.handles.map(function(){
return 0;
});
this.spans=this.options.spans?this.options.spans.map(function(s){
return $(s);
}):false;
this.options.startSpan=$(this.options.startSpan||null);
this.options.endSpan=$(this.options.endSpan||null);
this.restricted=this.options.restricted||false;
this.maximum=this.options.maximum||this.range.end;
this.minimum=this.options.minimum||this.range.start;
this.alignX=parseInt(this.options.alignX||"0");
this.alignY=parseInt(this.options.alignY||"0");
this.trackLength=this.maximumOffset()-this.minimumOffset();
this.handleLength=this.isVertical()?this.handles[0].offsetHeight:this.handles[0].offsetWidth;
this.active=false;
this.dragging=false;
this.disabled=false;
if(this.options.disabled){
this.setDisabled();
}
this.allowedValues=this.options.values?this.options.values.sortBy(Prototype.K):false;
if(this.allowedValues){
this.minimum=this.allowedValues.min();
this.maximum=this.allowedValues.max();
}
this.eventMouseDown=this.startDrag.bindAsEventListener(this);
this.eventMouseUp=this.endDrag.bindAsEventListener(this);
this.eventMouseMove=this.update.bindAsEventListener(this);
this.handles.each(function(h,i){
i=_167.handles.length-1-i;
_167.setValue(parseFloat((_167.options.sliderValue instanceof Array?_167.options.sliderValue[i]:_167.options.sliderValue)||_167.range.start),i);
Element.makePositioned(h);
Event.observe(h,"mousedown",_167.eventMouseDown);
});
Event.observe(this.track,"mousedown",this.eventMouseDown);
Event.observe(document,"mouseup",this.eventMouseUp);
Event.observe(document,"mousemove",this.eventMouseMove);
this.initialized=true;
},dispose:function(){
var _170=this;
Event.stopObserving(this.track,"mousedown",this.eventMouseDown);
Event.stopObserving(document,"mouseup",this.eventMouseUp);
Event.stopObserving(document,"mousemove",this.eventMouseMove);
this.handles.each(function(h){
Event.stopObserving(h,"mousedown",_170.eventMouseDown);
});
},setDisabled:function(){
this.disabled=true;
},setEnabled:function(){
this.disabled=false;
},getNearestValue:function(_171){
if(this.allowedValues){
if(_171>=this.allowedValues.max()){
return (this.allowedValues.max());
}
if(_171<=this.allowedValues.min()){
return (this.allowedValues.min());
}
var _172=Math.abs(this.allowedValues[0]-_171);
var _173=this.allowedValues[0];
this.allowedValues.each(function(v){
var _175=Math.abs(v-_171);
if(_175<=_172){
_173=v;
_172=_175;
}
});
return _173;
}
if(_171>this.range.end){
return this.range.end;
}
if(_171<this.range.start){
return this.range.start;
}
return _171;
},setValue:function(_176,_177){
if(!this.active){
this.activeHandle=this.handles[_177];
this.activeHandleIdx=_177;
this.updateStyles();
}
_177=_177||this.activeHandleIdx||0;
if(this.initialized&&this.restricted){
if((_177>0)&&(_176<this.values[_177-1])){
_176=this.values[_177-1];
}
if((_177<(this.handles.length-1))&&(_176>this.values[_177+1])){
_176=this.values[_177+1];
}
}
_176=this.getNearestValue(_176);
this.values[_177]=_176;
this.value=this.values[0];
this.handles[_177].style[this.isVertical()?"top":"left"]=this.translateToPx(_176);
this.drawSpans();
if(!this.dragging||!this.event){
this.updateFinished();
}
},setValueBy:function(_178,_179){
this.setValue(this.values[_179||this.activeHandleIdx||0]+_178,_179||this.activeHandleIdx||0);
},translateToPx:function(_180){
return Math.round(((this.trackLength-this.handleLength)/(this.range.end-this.range.start))*(_180-this.range.start))+"px";
},translateToValue:function(_181){
return ((_181/(this.trackLength-this.handleLength)*(this.range.end-this.range.start))+this.range.start);
},getRange:function(_182){
var v=this.values.sortBy(Prototype.K);
_182=_182||0;
return $R(v[_182],v[_182+1]);
},minimumOffset:function(){
return (this.isVertical()?this.alignY:this.alignX);
},maximumOffset:function(){
return (this.isVertical()?this.track.offsetHeight-this.alignY:this.track.offsetWidth-this.alignX);
},isVertical:function(){
return (this.axis=="vertical");
},drawSpans:function(){
var _183=this;
if(this.spans){
$R(0,this.spans.length-1).each(function(r){
_183.setSpan(_183.spans[r],_183.getRange(r));
});
}
if(this.options.startSpan){
this.setSpan(this.options.startSpan,$R(0,this.values.length>1?this.getRange(0).min():this.value));
}
if(this.options.endSpan){
this.setSpan(this.options.endSpan,$R(this.values.length>1?this.getRange(this.spans.length-1).max():this.value,this.maximum));
}
},setSpan:function(span,_186){
if(this.isVertical()){
span.style.top=this.translateToPx(_186.start);
span.style.height=this.translateToPx(_186.end-_186.start);
}else{
span.style.left=this.translateToPx(_186.start);
span.style.width=this.translateToPx(_186.end-_186.start);
}
},updateStyles:function(){
this.handles.each(function(h){
Element.removeClassName(h,"selected");
});
Element.addClassName(this.activeHandle,"selected");
},startDrag:function(_187){
if(Event.isLeftClick(_187)){
if(!this.disabled){
this.active=true;
var _188=Event.element(_187);
var _189=[Event.pointerX(_187),Event.pointerY(_187)];
if(_188==this.track){
var _190=Position.cumulativeOffset(this.track);
this.event=_187;
this.setValue(this.translateToValue((this.isVertical()?_189[1]-_190[1]:_189[0]-_190[0])-(this.handleLength/2)));
var _190=Position.cumulativeOffset(this.activeHandle);
this.offsetX=(_189[0]-_190[0]);
this.offsetY=(_189[1]-_190[1]);
}else{
while((this.handles.indexOf(_188)==-1)&&_188.parentNode){
_188=_188.parentNode;
}
this.activeHandle=_188;
this.activeHandleIdx=this.handles.indexOf(this.activeHandle);
this.updateStyles();
var _190=Position.cumulativeOffset(this.activeHandle);
this.offsetX=(_189[0]-_190[0]);
this.offsetY=(_189[1]-_190[1]);
}
}
Event.stop(_187);
}
},update:function(_191){
if(this.active){
if(!this.dragging){
this.dragging=true;
}
this.draw(_191);
if(navigator.appVersion.indexOf("AppleWebKit")>0){
window.scrollBy(0,0);
}
Event.stop(_191);
}
},draw:function(_192){
var _193=[Event.pointerX(_192),Event.pointerY(_192)];
var _194=Position.cumulativeOffset(this.track);
_193[0]-=this.offsetX+_194[0];
_193[1]-=this.offsetY+_194[1];
this.event=_192;
this.setValue(this.translateToValue(this.isVertical()?_193[1]:_193[0]));
if(this.initialized&&this.options.onSlide){
this.options.onSlide(this.values.length>1?this.values:this.value,this);
}
},endDrag:function(_195){
if(this.active&&this.dragging){
this.finishDrag(_195,true);
Event.stop(_195);
}
this.active=false;
this.dragging=false;
},finishDrag:function(_196,_197){
this.active=false;
this.dragging=false;
this.updateFinished();
},updateFinished:function(){
if(this.initialized&&this.options.onChange){
this.options.onChange(this.values.length>1?this.values:this.value,this);
}
this.event=null;
}};
var opera=(navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Opera")!=-1);
var scrobdigit=null;
var scrobdigits=[];
var lastnumber=null;
function gogoScrobbled(_198,_199){
scrobdigit=document.createElement("span");
Element.addClassName(scrobdigit,"digit");
lastnumber=_198;
setTimeout("setScrob()",opera?1000:200);
}
function resetDigit(i){
Element.removeClassName(scrobdigits[i],"flicker");
}
var p=0;
var doing=false;
var donechildren=[];
var lastlen=0;
function setScrob(){
doing=true;
var hang=500;
var tnum=lastnumber+"";
var len=tnum.length;
if(lastlen<len){
while(scrobdigits.length<len){
var node=scrobdigit.cloneNode(true);
node.added=false;
scrobdigits[scrobdigits.length]=node;
}
lastlen=len;
$("scrobbled").innerHTML="";
for(var j=0;j<len;j++){
$("scrobbled").appendChild(scrobdigits[(len-j)-1]);
}
}
for(var i=0,j=len-1;i<len;i++,j--){
if(i==0){
Element.addClassName(scrobdigits[(len-i)-1],"first");
}else{
Element.removeClassName(scrobdigits[(len-i)-1],"first");
}
if((len-i)%3==0){
Element.addClassName(scrobdigits[(len-i)-1],"hundreds");
}else{
Element.removeClassName(scrobdigits[(len-i)-1],"hundreds");
}
var a=tnum.charAt(i);
if(scrobdigits[j].a!=a){
scrobdigits[j].a=a;
scrobdigits[j].innerHTML=a;
}
}
lastnumber=(parseInt(lastnumber)+(Math.floor(persecond/5)-5)+Math.abs(Math.round(Math.random()*10)));
doing=false;
setTimeout("setScrob()",opera?1000:200);
}
function isChildNode(node,_204){
if(node==_204){
return true;
}else{
if(node&&node.getAttribute("id")=="homepageLeft"){
alert("here");
return false;
}else{
if(node&&node.parentNode){
return isChildNode(node.parentNode,_204);
}else{
alert("FALSE: "+node);
return false;
}
}
}
}
function searchboxClick(){
if(!$("searchInput").beenclicked){
$("searchInput").beenclicked=true;
$("searchInput").value="";
$("searchInput").style.color="#252525";
}
}
var UFO={req:["movie","width","height","majorversion","build"],opt:["play","loop","menu","quality","scale","salign","wmode","bgcolor","base","flashvars","devicefont","allowscriptaccess","seamlesstabbing","allowfullscreen"],optAtt:["id","name","align"],optExc:["swliveconnect"],ximovie:"ufo.swf",xiwidth:"215",xiheight:"138",ua:navigator.userAgent.toLowerCase(),pluginType:"",fv:[0,0],foList:[],create:function(FO,id){
if(!UFO.uaHas("w3cdom")||UFO.uaHas("ieMac")){
return;
}
UFO.getFlashVersion();
UFO.foList[id]=UFO.updateFO(FO);
UFO.createCSS("#"+id,"visibility:hidden;");
UFO.domLoad(id);
},updateFO:function(FO){
if(typeof FO.xi!="undefined"&&FO.xi=="true"){
if(typeof FO.ximovie=="undefined"){
FO.ximovie=UFO.ximovie;
}
if(typeof FO.xiwidth=="undefined"){
FO.xiwidth=UFO.xiwidth;
}
if(typeof FO.xiheight=="undefined"){
FO.xiheight=UFO.xiheight;
}
}
FO.mainCalled=false;
return FO;
},domLoad:function(id){
var _t=setInterval(function(){
if((document.getElementsByTagName("body")[0]!=null||document.body!=null)&&document.getElementById(id)!=null){
UFO.main(id);
clearInterval(_t);
}
},250);
if(typeof document.addEventListener!="undefined"){
document.addEventListener("DOMContentLoaded",function(){
UFO.main(id);
clearInterval(_t);
},null);
}
},main:function(id){
var _fo=UFO.foList[id];
if(_fo.mainCalled){
return;
}
UFO.foList[id].mainCalled=true;
document.getElementById(id).style.visibility="hidden";
if(UFO.hasRequired(id)){
if(UFO.hasFlashVersion(parseInt(_fo.majorversion,10),parseInt(_fo.build,10))){
if(typeof _fo.setcontainercss!="undefined"&&_fo.setcontainercss=="true"){
UFO.setContainerCSS(id);
}
UFO.writeSWF(id);
}else{
if(_fo.xi=="true"&&UFO.hasFlashVersion(6,65)){
UFO.createDialog(id);
}
}
}
document.getElementById(id).style.visibility="visible";
},createCSS:function(_208,_209){
var _h=document.getElementsByTagName("head")[0];
var _s=UFO.createElement("style");
if(!UFO.uaHas("ieWin")){
_s.appendChild(document.createTextNode(_208+" {"+_209+"}"));
}
_s.setAttribute("type","text/css");
_s.setAttribute("media","screen");
_h.appendChild(_s);
if(UFO.uaHas("ieWin")&&document.styleSheets&&document.styleSheets.length>0){
var _ls=document.styleSheets[document.styleSheets.length-1];
if(typeof _ls.addRule=="object"){
_ls.addRule(_208,_209);
}
}
},setContainerCSS:function(id){
var _fo=UFO.foList[id];
var _w=/%/.test(_fo.width)?"":"px";
var _h=/%/.test(_fo.height)?"":"px";
UFO.createCSS("#"+id,"width:"+_fo.width+_w+"; height:"+_fo.height+_h+";");
if(_fo.width=="100%"){
UFO.createCSS("body","margin-left:0; margin-right:0; padding-left:0; padding-right:0;");
}
if(_fo.height=="100%"){
UFO.createCSS("html","height:100%; overflow:hidden;");
UFO.createCSS("body","margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0; height:100%;");
}
},createElement:function(el){
return (UFO.uaHas("xml")&&typeof document.createElementNS!="undefined")?document.createElementNS("http://www.w3.org/1999/xhtml",el):document.createElement(el);
},createObjParam:function(el,_214,_215){
var _p=UFO.createElement("param");
_p.setAttribute("name",_214);
_p.setAttribute("value",_215);
el.appendChild(_p);
},uaHas:function(ft){
var _u=UFO.ua;
switch(ft){
case "w3cdom":
return (typeof document.getElementById!="undefined"&&typeof document.getElementsByTagName!="undefined"&&(typeof document.createElement!="undefined"||typeof document.createElementNS!="undefined"));
case "xml":
var _m=document.getElementsByTagName("meta");
var _l=_m.length;
for(var i=0;i<_l;i++){
if(/content-type/i.test(_m[i].getAttribute("http-equiv"))&&/xml/i.test(_m[i].getAttribute("content"))){
return true;
}
}
return false;
case "ieMac":
return /msie/.test(_u)&&!/opera/.test(_u)&&/mac/.test(_u);
case "ieWin":
return /msie/.test(_u)&&!/opera/.test(_u)&&/win/.test(_u);
case "gecko":
return /gecko/.test(_u)&&!/applewebkit/.test(_u);
case "opera":
return /opera/.test(_u);
case "safari":
return /applewebkit/.test(_u);
default:
return false;
}
},getFlashVersion:function(){
if(UFO.fv[0]!=0){
return;
}
if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){
UFO.pluginType="npapi";
var _d=navigator.plugins["Shockwave Flash"].description;
if(typeof _d!="undefined"){
_d=_d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
var _m=parseInt(_d.replace(/^(.*)\..*$/,"$1"),10);
var _r=/r/.test(_d)?parseInt(_d.replace(/^.*r(.*)$/,"$1"),10):0;
UFO.fv=[_m,_r];
}
}else{
if(window.ActiveXObject){
UFO.pluginType="ax";
try{
var _a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
}
catch(e){
try{
var _a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
UFO.fv=[6,0];
_a.AllowScriptAccess="always";
}
catch(e){
if(UFO.fv[0]==6){
return;
}
}
try{
var _a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
}
catch(e){
}
}
if(typeof _a=="object"){
var _d=_a.GetVariable("$version");
if(typeof _d!="undefined"){
_d=_d.replace(/^\S+\s+(.*)$/,"$1").split(",");
UFO.fv=[parseInt(_d[0],10),parseInt(_d[2],10)];
}
}
}
}
},hasRequired:function(id){
var _l=UFO.req.length;
for(var i=0;i<_l;i++){
if(typeof UFO.foList[id][UFO.req[i]]=="undefined"){
return false;
}
}
return true;
},hasFlashVersion:function(_224,_225){
return (UFO.fv[0]>_224||(UFO.fv[0]==_224&&UFO.fv[1]>=_225))?true:false;
},writeSWF:function(id){
var _fo=UFO.foList[id];
var _e=document.getElementById(id);
if(UFO.pluginType=="npapi"){
if(UFO.uaHas("gecko")||UFO.uaHas("xml")){
while(_e.hasChildNodes()){
_e.removeChild(_e.firstChild);
}
var _obj=UFO.createElement("object");
_obj.setAttribute("type","application/x-shockwave-flash");
_obj.setAttribute("data",_fo.movie);
_obj.setAttribute("width",_fo.width);
_obj.setAttribute("height",_fo.height);
var _l=UFO.optAtt.length;
for(var i=0;i<_l;i++){
if(typeof _fo[UFO.optAtt[i]]!="undefined"){
_obj.setAttribute(UFO.optAtt[i],_fo[UFO.optAtt[i]]);
}
}
var _o=UFO.opt.concat(UFO.optExc);
var _l=_o.length;
for(var i=0;i<_l;i++){
if(typeof _fo[_o[i]]!="undefined"){
UFO.createObjParam(_obj,_o[i],_fo[_o[i]]);
}
}
_e.appendChild(_obj);
}else{
var _emb="";
var _o=UFO.opt.concat(UFO.optAtt).concat(UFO.optExc);
var _l=_o.length;
for(var i=0;i<_l;i++){
if(typeof _fo[_o[i]]!="undefined"){
_emb+=" "+_o[i]+"=\""+_fo[_o[i]]+"\"";
}
}
_e.innerHTML="<embed type=\"application/x-shockwave-flash\" src=\""+_fo.movie+"\" width=\""+_fo.width+"\" height=\""+_fo.height+"\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\""+_emb+"></embed>";
}
}else{
if(UFO.pluginType=="ax"){
var _230="";
var _l=UFO.optAtt.length;
for(var i=0;i<_l;i++){
if(typeof _fo[UFO.optAtt[i]]!="undefined"){
_230+=" "+UFO.optAtt[i]+"=\""+_fo[UFO.optAtt[i]]+"\"";
}
}
var _231="";
var _l=UFO.opt.length;
for(var i=0;i<_l;i++){
if(typeof _fo[UFO.opt[i]]!="undefined"){
_231+="<param name=\""+UFO.opt[i]+"\" value=\""+_fo[UFO.opt[i]]+"\" />";
}
}
var _p=window.location.protocol=="https:"?"https:":"http:";
_e.innerHTML="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\""+_230+" width=\""+_fo.width+"\" height=\""+_fo.height+"\" codebase=\""+_p+"//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+_fo.majorversion+",0,"+_fo.build+",0\"><param name=\"movie\" value=\""+_fo.movie+"\" />"+_231+"</object>";
}
}
},createDialog:function(id){
var _fo=UFO.foList[id];
UFO.createCSS("html","height:100%; overflow:hidden;");
UFO.createCSS("body","height:100%; overflow:hidden;");
UFO.createCSS("#xi-con","position:absolute; left:0; top:0; z-index:1000; width:100%; height:100%; background-color:#fff; filter:alpha(opacity:75); opacity:0.75;");
UFO.createCSS("#xi-dia","position:absolute; left:50%; top:50%; margin-left: -"+Math.round(parseInt(_fo.xiwidth,10)/2)+"px; margin-top: -"+Math.round(parseInt(_fo.xiheight,10)/2)+"px; width:"+_fo.xiwidth+"px; height:"+_fo.xiheight+"px;");
var _b=document.getElementsByTagName("body")[0];
var _c=UFO.createElement("div");
_c.setAttribute("id","xi-con");
var _d=UFO.createElement("div");
_d.setAttribute("id","xi-dia");
_c.appendChild(_d);
_b.appendChild(_c);
var _mmu=window.location;
if(UFO.uaHas("xml")&&UFO.uaHas("safari")){
var _mmd=document.getElementsByTagName("title")[0].firstChild.nodeValue=document.getElementsByTagName("title")[0].firstChild.nodeValue.slice(0,47)+" - Flash Player Installation";
}else{
var _mmd=document.title=document.title.slice(0,47)+" - Flash Player Installation";
}
var _mmp=UFO.pluginType=="ax"?"ActiveX":"PlugIn";
var _uc=typeof _fo.xiurlcancel!="undefined"?"&xiUrlCancel="+_fo.xiurlcancel:"";
var _uf=typeof _fo.xiurlfailed!="undefined"?"&xiUrlFailed="+_fo.xiurlfailed:"";
UFO.foList["xi-dia"]={movie:_fo.ximovie,width:_fo.xiwidth,height:_fo.xiheight,majorversion:"6",build:"65",flashvars:"MMredirectURL="+_mmu+"&MMplayerType="+_mmp+"&MMdoctitle="+_mmd+_uc+_uf};
UFO.writeSWF("xi-dia");
},expressInstallCallback:function(){
var _b=document.getElementsByTagName("body")[0];
var _c=document.getElementById("xi-con");
_b.removeChild(_c);
UFO.createCSS("body","height:auto; overflow:auto;");
UFO.createCSS("html","height:auto; overflow:auto;");
},cleanupIELeaks:function(){
var _o=document.getElementsByTagName("object");
var _l=_o.length;
for(var i=0;i<_l;i++){
_o[i].style.display="none";
for(var x in _o[i]){
if(typeof _o[i][x]=="function"){
_o[i][x]=null;
}
}
}
}};
if(typeof window.attachEvent!="undefined"&&UFO.uaHas("ieWin")){
window.attachEvent("onunload",UFO.cleanupIELeaks);
}
function videoSearch(pane,url,page,_242){
if($("videoSearchProgress")){
Element.show($("videoSearchProgress"));
}
if($("searchVideoButton")){
Element.hide($("searchVideoButton"));
}
if($(pane).id=="incomingVideos"){
new Effect.BlindDown(pane,{duration:0.3});
}
params="";
if(page){
params+="&page="+page;
}
if(_242){
params+="&perpage="+_242;
}
new Ajax.Updater(pane,url,{method:"get",parameters:params,onComplete:hideProgress});
}
function hideProgress(){
if($("videoSearchProgress")){
Element.hide($("videoSearchProgress"));
}
if($("incomingVideos")){
$("incomingVideos").style.height="auto";
}
}
var artistVideoSearchCount=4;
function videoArtistSearch(pane,url){
if($("searchVideoButton")){
Element.hide($("searchVideoButton"));
}
if($("videoSearchProgress")){
Element.show($("videoSearchProgress"));
}
new Effect.BlindDown(pane,{duration:0.3});
doOneArtistVideoSearch(pane,url);
}
var videoSearchPane;
var videoSearchURL;
var videosAdded=0;
function doOneArtistVideoSearch(pane,url){
if(pane){
videoSearchPane=pane;
videoSearchURL=url;
}
new Ajax.Request(videoSearchURL,{method:"get",parameters:"offset="+(4-artistVideoSearchCount),onSuccess:doneOneArtistVideoSearch,onFailure:videoSearchError});
}
function videoSearchError(){
hideProgress();
Element.show("videoSearchError");
}
function doneOneArtistVideoSearch(req){
if(req.responseText.match(/<!--/)){
}else{
videosAdded++;
new Insertion.Bottom(videoSearchPane,req.responseText);
}
if(--artistVideoSearchCount<=0){
hideProgress();
if(videosAdded==0){
videoSearchError();
}
if($("incomingVideos")){
$("incomingVideos").style.height="auto";
}
return;
}else{
setTimeout("doOneArtistVideoSearch()",1500);
}
}
var holderVisible=false;
var frameLoaded=false;
var current;
var curSrc;
var widgSize;
function $(){
var _243=new Array();
for(var i=0;i<arguments.length;i++){
var _244=arguments[i];
if(typeof _244=="string"){
_244=document.getElementById(_244);
}
if(arguments.length==1){
return _244;
}
_243.push(_244);
}
return _243;
}
function widget(name,size){
var box=$("widgetHolder");
var _246=$("widget");
var _247=$("widgetLoading");
widgSize=size;
if(!holderVisible){
Element.addClassName(name+"_w","on");
_247.style.display="block";
_246.style.display="block";
if(size=="widgetMini"){
box.style.height="240px";
}else{
if(size=="widgetNormal"){
box.style.height="370px";
}
}
new Effect.BlindDown(box,{duration:0.5});
holderVisible=true;
$("widgetFrame").style.display="block";
curSrc="/widgets/"+name+"/?&res_type="+res_type+"&res_id="+res_id;
if(arguments.length>2){
for(var i=2;i<arguments.length;i++){
curSrc+="&"+arguments[i];
}
}
$("safariIsWank").value=curSrc;
$("widgetFrame").src=curSrc;
current=name;
}else{
Element.removeClassName(name+"_w","on");
_246.style.display="none";
new Effect.BlindUp(box,{duration:0.5});
_246.className="";
holderVisible=false;
$("widgetFrame").style.display="none";
$("widgetFrame").src="";
if(name!=current){
$(current+"_w").className="widget";
setTimeout("widget('"+name+"', '"+size+"');",1);
}
}
}
function addTag(tag){
var _248=document.getElementById("tagInput");
if(_248.value.length>1){
_248.value=_248.value+", ";
}
_248.value=_248.value+tag;
}
function delTag(tag){
confirm("Really remove your tag \""+tag+"\" from this item?");
}
function setFocus(id){
element=document.getElementById(id);
setTimeout("element.focus();",500);
}
function faqpopup(id){
var url="/popups/faq/?id="+id;
faq=window.open(url,"faq","toolbar=no, location=no, directories=no, status=no,menubar=no, scrollbars=yes, resizable=yes, width=350, height=400");
}
var WinLoad={loadfuncs:new Array(),addFunc:function(ref){
if(arguments.length>1){
WinLoad.loadfuncs.unshift(ref);
}else{
WinLoad.loadfuncs.push(ref);
}
},exFuncs:function(){
for(var i=0;i<WinLoad.loadfuncs.length;i++){
WinLoad.loadfuncs[i]();
}
}};
try{
window.addEventListener("load",function(){
WinLoad.exFuncs();
},true);
}
catch(e){
window.onload=function(){
WinLoad.exFuncs();
};
}

