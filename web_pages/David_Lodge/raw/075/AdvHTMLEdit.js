// Advanced HTML Editor
// Version: 2.04.2 Final
//
// (c) 2004-2005 DMXzone.com
// by George Petrov, Patrick Woldberg, Camillah Ringes
//
// Once based on htmlArea from www.interactivetools.com
//
//**********************************************
var agt=navigator.userAgent.toLowerCase();
var is_opera=(agt.indexOf("opera")!=-1);
var is_ie=((agt.indexOf("msie")!=-1)&&!is_opera);
var is_mac=(agt.indexOf("mac")!=-1);
var is_mac_ie=(is_ie&&is_mac);
var is_win_ie=(is_ie&&!is_mac);
var is_gecko=(navigator.product=="Gecko");
var is_firefox=(navigator.vendor=="Firefox");
var is_safari=(agt.indexOf("safari")!=-1);
if(checkBrowser()){
if(is_ie)window.attachEvent("onload",dmx_f15);
else if(is_gecko)window.addEventListener("load",dmx_f15,false);
}
function checkBrowser(){
if(is_gecko){
if(navigator.productSub<20021201){
alert("You need at least Mozilla-1.3 Alpha.\n"+
"Sorry, your Gecko is not supported.");
return false;
}
if(navigator.productSub<20030210&&!is_safari){
alert("Mozilla < 1.3 Beta is not supported!\n"+
"I'll try, though, but it might not work.");
}
}
if(is_mac){
var bstr="on Macintosh";
}else{
var bstr="";
}
if(is_ie){
var version=parseFloat(navigator.appVersion.split('MSIE')[1]);
if(version<5.5){
alert("You need at least Internet Explorer v5.5 or higher\n"+
"Sorry, your version is not supported.");
return false;
}
if(is_mac){
alert("Sorry, Internet Explorer doesn't support visual editing "+bstr+".\n"+
"You could try Mozilla though...");
return false;
}
}
if(!is_ie&&!is_gecko){
alert("Sorry, your browser doesn't support visual editing "+bstr+".\n"+
"You could try Mozilla though...");
return false;
}
if(is_safari){
alert("Sorry, Safari doesn't fully support visual editing yet.\n"+
"You could try Mozilla Firefox though...");
return false;
}
return true;
}
var dmxTT,dmxTT_t1,dmxTT_t2,Xpos,Ypos;
var contentList=new Array();
var ImagePreload=false;
formatblockArr=[];styleArr=[];revFormatblockArr=[];revStyleArr=[];
function dmx_f15(){
if(checkBrowser){
var el_arr=document.getElementsByTagName("textarea");
for(var i=0;i<el_arr.length;i++){
var config=new Object();
var el=el_arr[i];
if(el.type=='textarea'&&el.getAttribute('dmxedit')=='true'){
el.setAttribute('id',el.getAttribute('name'),0);
if(el.getAttribute('config')!=null||el.getAttribute('toolbar')!=null||el.getAttribute('css')||el.getAttribute('textcolor')||el.getAttribute('bgcolor')){
var cfg=config[el.id]=new Object();
if(el.getAttribute('config')!=null){
cfg_arr=el.getAttribute('config').split(';');
for(var c=0;c<cfg_arr.length;c++){
dmx_v7=cfg_arr[c].split(':');
cfg[dmx_v7[0]]=dmx_v7[1];
}
}
if(el.getAttribute('css')!=null){
cfg['stylesheet']=new Array(BaseURL+"ScriptLibrary/AdvHTMLEdit.css");
cfg_arr=el.getAttribute('css').split(';');
for(var c=0;c<cfg_arr.length;c++){
cfg['stylesheet'].push(cfg_arr[c]);
}
}
if(el.getAttribute('toolbar')!=null){
cfg['toolbar']=new Array();
cfg_arr=el.getAttribute('toolbar').split(';');
for(var c=0;c<cfg_arr.length;c++){
dmx_v7=cfg_arr[c].split(':');
switch(dmx_v7[0]){
case'F':// Fonts
if(dmx_v7[1]==null){
dmx_v7[1]='NS';
}
if(dmx_v7[1].indexOf('N')>-1){
cfg['toolbar'].push(['fontname']);
}
if(dmx_v7[1].indexOf('S')>-1){
cfg['toolbar'].push(['fontsize']);
}
break;
case'S':// Styles
if(dmx_v7[1]==null){
dmx_v7[1]='S';
}
if(dmx_v7[1].indexOf('S')>-1){
cfg['toolbar'].push(['fontstyle']);
}
break;
case'H':// Headings
if(dmx_v7[1].indexOf('H')>-1){
cfg['toolbar'].push(['formatblock']);
}
break;
case'T':// FontType
if(dmx_v7[1]==null){
dmx_v7[1]='BIU';
}
if(dmx_v7[1].indexOf('B')>-1){
cfg['toolbar'].push(['bold']);
}
if(dmx_v7[1].indexOf('I')>-1){
cfg['toolbar'].push(['italic']);
}
if(dmx_v7[1].indexOf('U')>-1){
cfg['toolbar'].push(['underline']);
}
cfg['toolbar'].push(['separator']);
break;
case'E':// Extra FontType
if(dmx_v7[1]==null){
dmx_v7[1]='SBU';
}
if(dmx_v7[1].indexOf('S')>-1){
cfg['toolbar'].push(['strikethrough']);
}
if(dmx_v7[1].indexOf('B')>-1){
cfg['toolbar'].push(['subscript']);
}
if(dmx_v7[1].indexOf('U')>-1){
cfg['toolbar'].push(['superscript']);
}
cfg['toolbar'].push(['separator']);
break;
case'J':// Justification
if(dmx_v7[1]==null){
dmx_v7[1]='LCRF';
}
if(dmx_v7[1].indexOf('L')>-1){
cfg['toolbar'].push(['justifyleft']);
}
if(dmx_v7[1].indexOf('C')>-1){
cfg['toolbar'].push(['justifycenter']);
}
if(dmx_v7[1].indexOf('R')>-1){
cfg['toolbar'].push(['justifyright']);
}
if(dmx_v7[1].indexOf('F')>-1){
cfg['toolbar'].push(['justifyfull']);
}
cfg['toolbar'].push(['separator']);
break;
case'O':// Ordering
if(dmx_v7[1]==null){
dmx_v7[1]='LUOI';
}
if(dmx_v7[1].indexOf('L')>-1){
cfg['toolbar'].push(['OrderedList']);
}
if(dmx_v7[1].indexOf('U')>-1){
cfg['toolbar'].push(['UnOrderedList']);
}
if(dmx_v7[1].indexOf('O')>-1){
cfg['toolbar'].push(['Outdent']);
}
if(dmx_v7[1].indexOf('I')>-1){
cfg['toolbar'].push(['Indent']);
}
cfg['toolbar'].push(['separator']);
break;
case'C':// Colors
if(dmx_v7[1]==null){
dmx_v7[1]='FB';
}
if(dmx_v7[1].indexOf('F')>-1){
cfg['toolbar'].push(['forecolor']);
}
if(dmx_v7[1].indexOf('B')>-1){
cfg['toolbar'].push(['backcolor']);
}
cfg['toolbar'].push(['separator']);
break;
case'X':// Other Objects
if(dmx_v7[1]==null){
dmx_v7[1]='SXHLITCFWM';
}
if(dmx_v7[1].indexOf('S')>-1){
cfg['toolbar'].push(['Find']);
}
if(dmx_v7[1].indexOf('X')>-1){
cfg['toolbar'].push(['InsertChar']);
}
if(dmx_v7[1].indexOf('H')>-1){
cfg['toolbar'].push(['HorizontalRule']);
}
if(dmx_v7[1].indexOf('L')>-1){
cfg['toolbar'].push(['Createlink']);
}
if(dmx_v7[1].indexOf('I')>-1){
cfg['toolbar'].push(['InsertImage']);
}
if(dmx_v7[1].indexOf('T')>-1){
cfg['toolbar'].push(['InsertTable']);
}
if(dmx_v7[1].indexOf('C')>-1){
cfg['toolbar'].push(['ClearFormat']);
}
if(dmx_v7[1].indexOf('F')>-1){
cfg['toolbar'].push(['ClearFonts']);
}
if(dmx_v7[1].indexOf('W')>-1){
cfg['toolbar'].push(['ClearWord']);
}
if(dmx_v7[1].indexOf('M')>-1){
cfg['toolbar'].push(['htmlmode']);
}
}
}
}
if(el.getAttribute('bgcolor')!=null){
cfg['bgColor']=el.getAttribute('bgcolor');
}
if(el.getAttribute('textcolor')!=null){
cfg['textColor']=el.getAttribute('textcolor');
}
}
if(!cfg)cfg=[];
cfg['mode']='init';
dmx_f10(el.id,cfg);
}
}
}
}
function dmx_f10(objname,userConfig){
var config=new dmx_f9(objname);
var obj=document.getElementById(objname);
if(userConfig){
for(var thisName in userConfig){
if(userConfig[thisName])config[thisName]=userConfig[thisName];
}
}
obj.config=config;
obj.style.display='none';
if(obj.style.width)config.width=obj.style.width;
else if(config.width)config.width='100%';
if(obj.style.height)config.height=obj.style.height;
else config.height='250';
if(config.plaintextInput){
var contents=obj.value;
contents=contents.replace(/\r\n/g,'<br />');
contents=contents.replace(/\n/g,'<br />');
contents=contents.replace(/\r/g,'<br />');
obj.value=contents;
}
if(config.textColor)config.divColor=config.textColor;
var editor='<div class="none" id="dmxTT_Div_'+objname+'"  name="dmxTT_Div_'+objname+'" style="position:absolute; overflow-y:auto; visibility:hidden; left:0; top:0; z-index:1000; color:'+config.divColor+'; background-color:'+config.bgColor+'; border: 2px outset #E6EAEB; max-height: 140px;" ></div>\n';
editor+='<span class="none" id="_'+objname+'_toolbar" style="visibility: hidden;"><table class="dmx_menuBar" border="0" cellspacing="0" cellpadding="0" style="padding: 1px 0 0 2px" width="'+config.width+'" unselectable="on"><tr><td>'+dmx_f18(objname)+'</td></tr></table></span>\n';
editor+='<iframe src="javascript:void(0);" id="_'+objname+'_editor" style="visibility: hidden; width:'+config.width+'; height:'+config.height+';" allowtransparency="true"></iframe>';
if(is_gecko){
var r=obj.ownerDocument.createRange();
r.setStartBefore(obj);
editor=r.createContextualFragment(editor);
if(obj.nextSibling){
obj.parentNode.insertBefore(editor,obj.nextSibling);
}else{
obj.parentNode.appendChild(editor);
}
}else{
var obj=document.getElementById(objname);
if(obj.parentNode&&obj.parentNode.tagName=="P"){
obj.parentNode.insertAdjacentHTML('afterEnd',editor);
}else{
obj.insertAdjacentHTML('afterEnd',editor);
}
}
if(config.language=='auto'){
locale.setLocale(navigator.userLanguage);
}else{
locale.setLocale(config.language);
}
for(var idx=0;idx<document.forms.length;idx++){
if(is_ie)var r=document.forms[idx].attachEvent('onsubmit',function(){dmx_f13(objname)});
if(is_gecko)var r=document.forms[idx].addEventListener('submit',function(){dmx_f13(objname)},false);
}
if(is_ie&&!r)var rt=alert('Error attaching event to form!');
if(rt)return false;
dmx_f17(objname,'init');
return true;
}
function dmx_f18(objname){
var config=document.getElementById(objname).config;
var tblOpen='<span  class="none" style="float: left; border: none; padding: 1px 0 0 0" unselectable="on"><nobr>';
var tblClose='</nobr></span>\n';
var toolbar='';
var btnGroup,btnItem;
var lang;
if(config.language=='auto'){
lang=navigator.userLanguage;
}else{
lang=config.language;
}
for(var btnGroup in config.toolbar){
toolbar+=tblOpen;
for(var btnItem in config.toolbar[btnGroup]){
var btnName=config.toolbar[btnGroup][btnItem].toLowerCase();
switch(btnName){
case'fontname':
var contentL="";
var dmx_v8='_'+objname+'_FontName';
toolbar+='<div style="border:1px inset; margin: 1px 3px 0 0; padding:0;"><input id="'+dmx_v8+'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\');dmx_f25(event,this.id, \''+objname+'\');return false;" value="Fonts" unselectable="on" readonly="readonly" style="width:90px; margin:0; padding: 0px 0px 0px 2px; height:16px; font-size: 12px; vertical-align: middle; cursor:default; border:none;">';
toolbar+='<button id="'+dmx_v8+'_b" onFocus="blur()" style="text-align: center; vertical-align: middle; width:14px; height: 16px; margin: 0; padding: 0;" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\'); dmx_f25(event,\''+dmx_v8+'\', \''+objname+'\');return false;" unselectable="on" style="" ><img src="'+config.imgURL+'DP.gif" border="0" unselectable="on" onFocus="blur();" style="margin: 0; padding: 0; text-align: center; vertical-align: middle;" /></button></div>';
for(var fontname in config.fontnames){
var divId='div_'+fontname;
contentL+='<a href="javascript:void(0);" style="display:block;text-decoration:none;color:'+config.divColor+';cursor:pointer;border:1px solid #FFFFFF;" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'"  '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\');document.getElementById(\''+dmx_v8+'\').value=\''+fontname+'\' ;dmx_f8(\''+dmx_v8+'\'); " ><div id="'+divId+'" class="bla" style="font-size: 12pt; margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px;  height: auto; font-family:'+config.fontnames[fontname]+'"><nobr>'+fontname+'</nobr></div></a>';
}
contentList[dmx_v8]=new Array('',contentL);
break;
case'fontsize':
var contentL="";
var dmx_v8='_'+objname+'_FontSize';
toolbar+='<div style="border:1px inset;  margin: 1px 3px 0 0; padding:0;"><input id="'+dmx_v8+'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\'); dmx_f25(event,this.id,\''+objname+'\');return false;" value="Size" unselectable="on" readonly="readonly" style="width:43px; margin:0; padding: 0px 0px 0px 2px; height:16px; font-size: 12px; vertical-align: middle; cursor:default; border:none;">';
toolbar+='<button id="'+dmx_v8+'_b" onFocus="blur()" style="text-align: center; vertical-align: middle; width:14px; height:16px; margin: 0; padding: 0;" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\'); dmx_f25(event,\''+dmx_v8+'\', \''+objname+'\');return false;" unselectable="on"><img src="'+config.imgURL+'DP.gif" border=0 unselectable="on" onFocus="blur();" style="text-align: center; vertical-align: middle;" /></button></div>';
var i=0;
for(var fontsize in config.fontsizes){
var divId='div_size'+config.fontsizes[fontsize];
contentL+='<a href="javascript:void(0);" style="display:block;text-decoration:none;color:'+config.divColor+';cursor:pointer;border:1px solid #FFFFFF;" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'"  '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="document.getElementById(\''+dmx_v8+'\').value=\''+fontsize+'\';dmx_f8(\''+dmx_v8+'\');dmx_f26(\''+objname+'\');" ><div id="'+divId+'" class="bla" style="margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px; height: auto;"><nobr><span class="bla" style="font-size:'+fontsize.substring(3,fontsize.length-4)+'pt;">'+config.fontsizes[fontsize]+'</span>'+fontsize.substring(1+config.fontsizes[fontsize].length)+'</nobr></div></a>';
}
contentList[dmx_v8]=new Array('',contentL);
break;
case'fontstyle':
var contentL="";
var dmx_v8='_'+objname+'_FontStyle';
toolbar+='<div style="border:1px inset;  margin: 1px 3px 0 0; padding:0;"><input id="'+dmx_v8+'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\');dmx_f25(event,this.id, \''+objname+'\');return false;" value="Styles" unselectable="on" readonly="readonly" style="width:90px; margin:0; padding: 0px 0px 0px 2px; height:16px; font-size: 12px; vertical-align: middle; cursor:default; border:none;">';
toolbar+='<button id="'+dmx_v8+'_b" onFocus="blur()" style="text-align: center; vertical-align: middle;width:14px; height:16px; margin: 0; padding: 0;" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\'); dmx_f25(event,\''+dmx_v8+'\', \''+objname+'\');return false;" unselectable="on"><img src="'+config.imgURL+'DP.gif" border=0 unselectable="on" onFocus="blur();" style="text-align: center; vertical-align: middle;" /></button></div>';
contentL+='<a href="javascript:void(0);"  style="display:block;text-decoration:none;color:'+config.divColor+';cursor:pointer;border:1px solid #FFFFFF;" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="document.getElementById(\''+dmx_v8+'\').value=\''+locale.getString('@{None}',lang)+'\';dmx_f8(\''+dmx_v8+'\');dmx_f26(\''+objname+'\');" ><div id="'+divId+'" class="'+null+'" style="margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px; min-width: 90px; font-size: 12pt; height: auto; max-width: 160px;"> '+locale.getString('@{None}',lang)+'</div></a>\n';
styleArr[locale.getString('@{None}',lang)]='null';
revStyleArr['null']=locale.getString('@{None}',lang);
for(var i in config.fontstyles){
var fontstyle=config.fontstyles[i];
var divId='div'+fontstyle;
styleArr[fontstyle.className]=fontstyle.name;
revStyleArr[fontstyle.name]=fontstyle.className;
contentL+='<a href="javascript:void(0);" style="display:block;text-decoration:none;'+config.divColor+';cursor:pointer;border:1px solid #FFFFFF;" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="document.getElementById(\''+dmx_v8+'\').value=\''+fontstyle.name+'\' ;dmx_f8(\''+dmx_v8+'\');dmx_f26(\''+objname+'\');" ><div id="'+divId+'" class="'+fontstyle.className+'" style="margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px; min-width: 90px; max-width: 160px;" >'+fontstyle.name+'</div></a>\n';
}
contentList[dmx_v8]=new Array('',contentL);
break;
case'formatblock':
var contentL="";
var dmx_v8='_'+objname+'_FormatBlock';
toolbar+='<div style="border:1px inset;  margin: 1px 3px 0 0; padding:0;"><input id="'+dmx_v8+'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\');dmx_f25(event,this.id, \''+objname+'\');return false;" value="Headings" unselectable="on" readonly="readonly" style="width:90px; margin:0; padding: 0px 0px 0px 2px; height:16px; font-size: 12px; vertical-align: middle; cursor:default; border:none;">';
toolbar+='<button id="'+dmx_v8+'_b" onFocus="blur()" style="text-align: center; vertical-align: middle;width:14px; height:16px; margin: 0; padding: 0;" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="dmx_f26(\''+objname+'\');dmx_f25(event,\''+dmx_v8+'\', \''+objname+'\');return false;" unselectable="on"><img src="'+config.imgURL+'DP.gif" border=0 unselectable="on" onFocus="blur();" style="text-align: center; vertical-align: middle;" /></button></div>';
formatblockArr[locale.getString('@{None}',lang)]='null';
revFormatblockArr['null']=locale.getString('@{None}',lang);
for(var formatblock in config.formatblocks){
var divId='div'+locale.getString(formatblock,lang);
formatblockArr[locale.getString(formatblock,lang)]=config.formatblocks[formatblock];
revFormatblockArr[config.formatblocks[formatblock]]=locale.getString(formatblock,lang);
contentL+='<a href="javascript:void(0);" style="display:block;text-decoration:none;color:'+config.divColor+';cursor:pointer;border:1px solid #FFFFFF; padding:0;" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="document.getElementById(\''+dmx_v8+'\').value=\''+locale.getString(formatblock,lang)+'\' ;dmx_f8(\''+dmx_v8+'\');dmx_f26(\''+objname+'\');" ><div id="'+divId+'" ><nobr>'+config.formatblocks[formatblock].substring(0,config.formatblocks[formatblock].length-1)+' id="class_'+config.formatblocks[formatblock].substring(1,config.formatblocks[formatblock].length-1)+'" style="  margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px;">'+locale.getString(formatblock,lang)+'</'+config.formatblocks[formatblock].substring(1,config.formatblocks[formatblock].length)+'</nobr></div></a>\n';
}
contentList[dmx_v8]=new Array('',contentL);
break;
case'separator':
toolbar+='<span style="border: 1px inset; width: 1px; text-align: center; vertical-align: middle; font-size: 15px; height: 15px; margin: 0 3px 0 3px; float:none;"></span>';
break;
default:
var btnObj=config.btnList[btnName];
if(!btnObj){alert('DMXedit error: button '+btnName+' not found in button list when creating the visual editor for '+objname+'.\nPlease make sure you entered the button name correctly.');return;}
var btnCmdID=btnObj[0];
var btnTitle=btnObj[1];
var btnOnClick=btnObj[2];
var btnImage=btnObj[3];
toolbar+='<button title="'+btnTitle+'" id="_'+objname+'_'+btnCmdID+'" class="dmx_btn" onFocus="blur()" style="text-align: center; vertical-align: middle;" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="'+btnOnClick+';return false;" onmouseover="if(this.className==\'dmx_btn\'){this.className=\'dmx_btnOver\'}" onmouseout="if(this.className==\'dmx_btnOver\'){this.className=\'dmx_btn\'}" unselectable="on"><img src="'+config.imgURL+btnImage+'" border=0 unselectable="on" onFocus="blur();" style="text-align: center; vertical-align: middle;" /></button>';
}
}
toolbar+=tblClose;
}
return toolbar;
}
function dmx_f9(objname){
this.version="2.04";
this.bgColor="#FFFFFF";
this.textColor="";
this.divColor="#333333";
this.width="auto";
this.height="auto";
this.bodyStyle='background-color: ##bgcolor##; color: ##textcolor##; font-family: verdana, arial ,helvetica ,sans-serif; font-size: 10pt';
this.imgURL=BaseURL+'AdvHTML_Images/';
this.replaceNextlines=0;
this.plaintextInput=0;
this.language="auto";
this.xhtml="true";
this.upload="";
this.upfolder="";
this.resize="";
this.mw=0;
this.mh=0;
this.lib="";
this.rlink=false;
this.lw=0;
this.lh=0;
this.libfolder="";
this.lvw="";
this.ld="";
this.ldate="";
this.lcss="";
this.dmxTT=false;
this.clearFormat="false"
this.clearFonts="false"
this.clearWord="false"
this.toolbar=[
['fontname'],
['fontsize'],
['fontstyle'],
['formatblock'],
['bold','italic','underline','separator'],
['strikethrough','subscript','superscript','separator'],
['justifyleft','justifycenter','justifyright','justifyfull','separator'],
['OrderedList','UnOrderedList','Outdent','Indent','separator'],
['forecolor','backcolor','separator'],
['Find','InsertChar','HorizontalRule','Createlink','InsertImage','InsertTable','clearformat','clearfonts','clearword','htmlmode','separator']
];
if(is_ie){
this.fontnames={
"Arial":"arial, helvetica, sans-serif",
"Courier New":"courier new , courier, mono",
"Georgia":"georgia, times new roman, times, serif",
"Tahoma":"tahoma, arial ,helvetica ,sans-serif",
"Times New Roman":"times new roman , times ,serif",
"Verdana":"verdana, arial ,helvetica ,sans-serif",
"impact":"impact",
"WingDings":"wingdings"
};
}else{// other browsers
this.fontnames={
"Arial":"arial, helvetica, sans-serif",
"Courier New":"courier new , courier, mono",
"Georgia":"georgia, times new roman, times, serif",
"Tahoma":"tahoma, arial ,helvetica ,sans-serif",
"Times New Roman":"times new roman , times ,serif",
"Verdana":"verdana, arial ,helvetica ,sans-serif",
"impact":"impact"
};
}
this.fontsizes={
"1 (8 pt)":"1",
"2 (10 pt)":"2",
"3 (12 pt)":"3",
"4 (14 pt)":"4",
"5 (18 pt)":"5",
"6 (24 pt)":"6",
"7 (36 pt)":"7"
};
this.stylesheet=new Array(BaseURL+"ScriptLibrary/AdvHTMLEdit.css");
this.fontstyles=[];
this.globalstyles=[];
var rules;
var styleSheetdoc=document.styleSheets;
for(var i=0;i<styleSheetdoc.length;i++){
if(is_ie){
for(var j=0;j<styleSheetdoc[i].rules.length;j++){
rules=styleSheetdoc[i].rules[j];
if(rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)=="."){
this.fontstyles.push({name:rules.selectorText.substring(1),className:rules.selectorText.substring(1),classStyle:rules.style['cssText']});
}
if(rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)!="."){
this.globalstyles.push({name:rules.selectorText,className:rules.selectorText,classStyle:rules.style['cssText']});
}
}
}else{
for(var j=0;j<styleSheetdoc[i].cssRules.length;j++){
try{
rules=styleSheetdoc[i].cssRules[j];
if(rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)=="."){
this.fontstyles.push({name:rules.selectorText.substring(1),className:rules.selectorText.substring(1),classStyle:rules.style['cssText']});
}
if(rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)!="."){
this.globalstyles.push({name:rules.selectorText,className:rules.selectorText,classStyle:rules.style['cssText']});
}
}catch(DOMException){
continue;
}
}
}
}
this.formatblocks={
"@{Normal}":"<p>",
"@{Heading1}":"<h1>",
"@{Heading2}":"<h2>",
"@{Heading3}":"<h3>",
"@{Heading4}":"<h4>",
"@{Heading5}":"<h5>",
"@{Heading6}":"<h6>",
"@{Address}":"<address>",
"@{Formatted}":"<pre>"
};
this.btnList={
// buttonName:    commandID,               title,                   onclick,                    image,             
"bold":['Bold','@{Bold}','dmx_f8(this.id)','TB.gif'],
"italic":['Italic','@{Italic}','dmx_f8(this.id)','TI.gif'],
"underline":['Underline','@{Underline}','dmx_f8(this.id)','TU.gif'],
"strikethrough":['StrikeThrough','@{StrikeThrough}','dmx_f8(this.id)','ES.gif'],
"subscript":['SubScript','@{SubScript}','dmx_f8(this.id)','EB.gif'],
"superscript":['SuperScript','@{SuperScript}','dmx_f8(this.id)','EU.gif'],
"justifyleft":['JustifyLeft','@{JustifyLeft}','dmx_f8(this.id)','JL.gif'],
"justifycenter":['JustifyCenter','@{JustifyCenter}','dmx_f8(this.id)','JC.gif'],
"justifyright":['JustifyRight','@{JustifyRight}','dmx_f8(this.id)','JR.gif'],
"justifyfull":['JustifyFull','@{JustifyFull}','dmx_f8(this.id)','JF.gif'],
"orderedlist":['InsertOrderedList','@{OrderedList}','dmx_f8(this.id)','OL.gif'],
"unorderedlist":['InsertUnorderedList','@{UnorderedList}','dmx_f8(this.id)','OU.gif'],
"outdent":['Outdent','@{Outdent}','dmx_f8(this.id)','OO.gif'],
"indent":['Indent','@{Indent}','dmx_f8(this.id)','OI.gif'],
"forecolor":['ForeColor','@{ForeColor}','dmx_f8(this.id)','CF.gif'],
"backcolor":['BackColor','@{BackColor}','dmx_f8(this.id)','CB.gif'],
"find":['Find','@{Find}','dmx_f8(this.id)','XS.gif'],
"insertchar":['InsertChar','@{InsertChar}','dmx_f8(this.id)','XX.gif'],
"horizontalrule":['InsertHorizontalRule','@{HorizontalRule}','dmx_f8(this.id)','XH.gif'],
"createlink":['CreateLink','@{Link}','dmx_f8(this.id)','XL.gif'],
"insertimage":['InsertImage','@{Image}','dmx_f8(this.id)','XI.gif'],
"inserttable":['InsertTable','@{Table}','dmx_f8(this.id)','XT.gif'],
"clearformat":['ClearFormat','@{Clear}','dmx_f8(this.id)','XC.gif'],
"clearfonts":['ClearFonts','@{ClearFont}','dmx_f8(this.id)','XF.gif'],
"clearword":['ClearWord','@{Word}','dmx_f8(this.id)','XW.gif'],
"htmlmode":['HtmlMode','@{HtmlMode}','dmx_f17(\''+objname+'\')','XM.gif']
};
}
var updateStyles=0;
function dmx_f21(objname){
updateStyles=updateStyles+1;
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var dmx_v8='_'+objname+'_FontStyle';
var dropSt_obj=document.getElementById(dmx_v8);
var dropFm_obj=document.getElementById('_'+objname+'_FormatBlock');
var rules,k=1,s=dmx_v5.styleSheets.length;
var config=document.getElementById(objname).config;
if(dropSt_obj)var contentL=contentList[dmx_v8][1];
if(dropFm_obj)var formStr=contentList['_'+objname+'_FormatBlock'][1];
if(dropSt_obj||dropFm_obj){
if(is_gecko){
for(var i=0;i<dmx_v5.styleSheets.length;i++){
try{
for(var j=0;j<dmx_v5.styleSheets[i].cssRules.length;j++){
rules=dmx_v5.styleSheets[i].cssRules[j];
if(dropFm_obj){
var str=' h1 h2 h3 h4 h5 h6 em p address';
rsText=rules.selectorText.split(',');
for(var r=0;r<rsText.length;r++){
if(str.indexOf(rsText[r].toLowerCase())+1){
rsText[r]=rsText[r].replace(/\s*(\w)/i,"$1");
var tclass='class_'+rsText[r].toLowerCase();
sformStr=formStr.substring(0,formStr.indexOf(tclass)+tclass.length+9);
eformStr=formStr.substring(formStr.indexOf(tclass)+tclass.length+9,formStr.length);
formStr=sformStr+rules.style.cssText+eformStr;
}
}
}
if(rules.selectorText.substring(1,5)!="ccp_"&&rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)==".")k++;
}
}catch(DOMException){
setTimeout(function(){dmx_f21(objname)},2000);
continue;
}
}
}else{
for(var i=0;i<dmx_v5.styleSheets.length;i++){
for(var j=0;j<dmx_v5.styleSheets[i].rules.length;j++){
rules=dmx_v5.styleSheets[i].rules[j];
if(dropFm_obj){
var str=' h1 h2 h3 h4 h5 h6 em p address';
rsText=rules.selectorText.split(',');
for(var r=0;r<rsText.length;r++){
rsText[r]=rsText[r].replace(/\s*(\w)/i,"$1");
if(str.indexOf(rsText[r].toLowerCase())+1){
var tclass='class_'+rsText[r].toLowerCase();
sformStr=formStr.substring(0,formStr.indexOf(tclass)+tclass.length+9);
eformStr=formStr.substring(formStr.indexOf(tclass)+tclass.length+9,formStr.length);
formStr=sformStr+rules.style.cssText.toLowerCase()+";"+eformStr;
}
}
}
if(rules.selectorText.substring(1,5)!="ccp_"&&rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)=="."){
k++;
}
}
}
}
if(dropSt_obj&&styleArr.length!=k){
var lang;
if(config.language=='auto'){
lang=navigator.userLanguage;
}else{
lang=config.language;
}
var contentL='<a href="javascript:void(0);"  style="display:block;text-decoration:none;color:'+config.divColor+';cursor:pointer;border:1px solid #FFFFFF;" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="document.getElementById(\''+dmx_v8+'\').value=\''+locale.getString('@{None}',lang)+'\';dmx_f8(\''+dmx_v8+'\');dmx_f26(\''+objname+'\');" ><div id="'+divId+'" class="'+null+'" style="margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px; min-width: 90px; font-size: 12pt; height: auto; max-width: 160px;"> '+locale.getString('@{None}',lang)+'</div></a>\n';
k=1;
if(is_ie){
for(var i=0;i<dmx_v5.styleSheets.length;i++){
for(var j=0;j<dmx_v5.styleSheets[i].rules.length;j++){
rules=dmx_v5.styleSheets[i].rules[j];
if(contentL.indexOf(rules.selectorText.substring(1))<0){
if(rules.selectorText.substring(1,5)!="ccp_"&&rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)=="."){
var divStyle=rules.style.cssText;
var divId='div'+rules.selectorText.substring(1);
styleArr[rules.selectorText.substring(1)]=rules.selectorText.substring(1);
revStyleArr[rules.selectorText.substring(1)]=rules.selectorText.substring(1);
contentL+='<a href="javascript:void(0);" style="display:block;text-decoration:none;color:#333333;cursor:pointer;border:1px solid #FFFFFF" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="document.getElementById(\''+dmx_v8+'\').value=\''+rules.selectorText.substring(1)+'\' ;dmx_f8(\''+dmx_v8+'\');dmx_f26(\''+objname+'\');" ><div style="'+divStyle+'; width:100%; margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px; max-width: 160px;">'+rules.selectorText.substring(1)+'</div></a>\n';
}
k++;
}
}
}
}else{
for(var i=0;i<dmx_v5.styleSheets.length;i++){
try{
for(var j=0;j<dmx_v5.styleSheets[i].cssRules.length;j++){
rules=dmx_v5.styleSheets[i].cssRules[j];
if(contentL.indexOf(rules.selectorText.substring(1))<0){
if(rules.selectorText.substring(1,5)!="ccp_"&&rules.selectorText.substring(1,5)!="dmx_"&&rules.selectorText.substring(0,1)=="."){
var divStyle=rules.style.cssText;
var divId='div_'+rules.selectorText.substring(1);
styleArr[rules.selectorText.substring(1)]=rules.selectorText.substring(1);
revStyleArr[rules.selectorText.substring(1)]=rules.selectorText.substring(1);
contentL+='<a href="javascript:void(0);" style="display:block;text-decoration:none;color:'+config.divColor+';cursor:pointer;border:1px solid #FFFFFF" onmouseover="this.style.border=\'1px solid #E6EAEB\'" onmouseout="this.style.border=\'1px solid #FFFFFF\'" '+(is_safari?'onclick="return false;" onmousedown':'onClick')+'="document.getElementById(\''+dmx_v8+'\').value=\''+rules.selectorText.substring(1)+'\' ;dmx_f8(\''+dmx_v8+'\');dmx_f26(\''+objname+'\');" ><div style="'+divStyle+'margin: 0px 1px 0px 1px; padding: 2px 2px 2px 5px; max-width: 160px;">'+rules.selectorText.substring(1)+'</div></a>\n';
}
k++;
}
}
}catch(DOMException){
setTimeout(function(){dmx_f21(objname)},2000);
}
}
}
}
if(dropFm_obj)contentList['_'+objname+'_FormatBlock'][1]=formStr;
if(dropSt_obj)contentList[dmx_v8]=Array('',contentL);
}
}
function dmx_f8(button_id){
var BtnParts=Array();
BtnParts=button_id.split('_');
var objname=button_id.replace(/^_(.*)_[^_]*$/,'$1');
dmx_f26(objname);
var cmdID=BtnParts[BtnParts.length-1].toLowerCase();
var button_obj=document.getElementById(button_id);
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var config=document.getElementById(objname).config;
if(config.mode=='text')return;
var val=(button_obj.value!=null)?button_obj.value:'';
dmxedit_focus(dmx_v6);
switch(cmdID){
case'fontname':
if(val){
dmx_v5.execCommand(cmdID,false,config.fontnames[val]);
break;
}
case'fontsize':
if(val){
dmx_v5.execCommand(cmdID,false,config.fontsizes[val]);
break;
}
case'fontstyle':
val=styleArr[val];
if(is_ie){
var rng=dmx_v5.selection.createRange();
var el;
var allEl=dmx_v5.body.getElementsByTagName("*");
try{
rng.duplicate();
}catch(DOMException){
alert("Could not change the class. \nPlease select the text inside. ")
break;
}
var rng2=rng.duplicate();
for(var i=0;i<allEl.length;i++){
rng2.moveToElementText(allEl[i]);
if(rng.inRange(rng2)){
el=allEl[i];
if(el.tagName.toLowerCase()=='span'||el.tagName.toLowerCase()=='font'){
el.outerHTML=el.innerHTML;
}else{
el.removeAttribute('className');
}
}
}
if(rng.length){
el=rng[0];
}else{
el=rng.parentElement();
}
var rng2=rng.duplicate();
rng2.moveToElementText(el);
while(el.parentElement.tagName.toLowerCase()!='body'&&el.tagName.toLowerCase()!='body'&&el.tagName.toLowerCase()!='font'&&el.tagName.toLowerCase()!='p'&&el.tagName.toLowerCase()!='span')el=el.parentElement;
rng2.moveToElementText(el);
if(el.tagName.toLowerCase()=='span'||el.tagName.toLowerCase()=='font'){
el.outerHTML=el.innerHTML;
}else{
el.removeAttribute('className');
}
}else if(is_gecko){
var sel=dmx_f61(dmx_v6);
var editorRange=dmx_v5.createRange();
if(typeof sel=="undefined"||sel==null){
if(!editorRange.collapsed)editorRange.collapse();
editorRange.select();
sel=dmx_f61(dmx_v6);
rng=editorRange;
}else{
var rng=sel.getRangeAt(sel.rangeCount-1).cloneRange();
}
var rngTs=rng.toString();
var selAnchor=sel.anchorNode;
var be=-1;
if(selAnchor.nodeValue)be=selAnchor.nodeValue.indexOf(rngTs);
var en=rngTs.length;
if(be+1){
rng.setStart(selAnchor,be);
if(en)rng.setEnd(selAnchor,be+en);
}
var allEl=dmx_v5.body.getElementsByTagName("*")
var rng2=rng.cloneRange();
for(var i=0;i<allEl.length;i++){
c=rng.compareNode(allEl[i]);
d=rng.intersectsNode(allEl[i]);
if(d||c==3||c==2){
el=allEl[i];
if(el.tagName.toLowerCase()=='span'||el.tagName.toLowerCase()=='font'){
el.outerHTML=el.innerHTML;
sPreserve=el.innerHTML;
rng2.setStartBefore(el);
var df=rng2.createContextualFragment(sPreserve);
el.parentNode.replaceChild(df,el);
var rng2=rng.cloneRange();
}else if(el.nodeName.toLowerCase()!='body'){
el.removeAttribute('className');
}
}
}
el=selAnchor;
while(el.nodeType==3&&el.parentNode.nodeName.toLowerCase()!='body'){
el=el.parentNode;
}
rng2.selectNode(el);
rng2Ts=rng2.toString();
if(rng2Ts.length-rngTs.length==1)rng2Ts=rng2Ts.substring(0,rng2Ts.length-1);
if(val!='null'&&el.nodeName.toLowerCase()=='p'){
if(rng2Ts==rngTs)el.setAttribute("class",val,0);
break;
}
}
if(val!='null'){
var rngT=false;
if(is_ie&&rng.text==rng2.text||is_gecko&&rngTs==rng2Ts)rngT=true;
if(is_gecko){
if(!rngT){
var rng2=rng.cloneRange();
if(be+1){
rng2.setStart(selAnchor,be);
if(en)rng2.setEnd(selAnchor,be+en);
}
}
documentFragment=rng2.extractContents();
spanNode=dmx_v5.createElement('SPAN');
rng2.insertNode(spanNode);
rng2.selectNode(spanNode);
spanNode.setAttribute("class",val,0);
spanNode.appendChild(documentFragment);
}else{
if(rngT&&el.nodeName.toLowerCase()=='p'){
el.setAttribute("className",val,0);
}else{
spanNode=dmx_v5.createElement('SPAN');
if(!rngT)rng2=rng.duplicate();
spanNode.innerHTML=rng2.htmlText;
spanNode.setAttribute("className",val,0);
rng2.pasteHTML(spanNode.outerHTML)
}
}
}
break;
case"formatblock":
//todo not working in safari
val=formatblockArr[val];
dmx_v5.execCommand(cmdID,false,val);
break;
case'forecolor':
var oldcolor=dmx_f48(dmx_v5.queryCommandValue(cmdID));
if(is_ie){
var newcolor=showModalDialog(BaseURL+'AdvHTML_Popups/select_color.html',oldcolor,'width;234: height:183; resizable: no; help: no; status: no; scroll: no;');
if(newcolor!=null)dmx_v5.execCommand(cmdID,false,'#'+newcolor);
}else{
var newcolor=window.open(BaseURL+'AdvHTML_Popups/select_color.html?fc=1&oldcolor='+oldcolor+'&objname='+objname,'color','width=238, height=166, status=0, channelmode=0,directories=0,height=100,width=100,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0, left='+(screen.width/2-150)+',top='+(screen.height/2-50));
if(newcolor)newcolor.focus();
}
break;
case'backcolor':
if(is_ie){
var oldcolor=dmx_f48(dmx_v5.queryCommandValue(cmdID));
var newcolor=showModalDialog(BaseURL+'AdvHTML_Popups/select_color.html',oldcolor,'width;238: height:183; resizable: no; help: no; status: no; scroll: no;');
}else{
var oldcolor=dmx_f48(dmx_v5.queryCommandValue('hilitecolor'));
var newcolor=window.open(BaseURL+'AdvHTML_Popups/select_color.html?bc=1&oldcolor='+oldcolor+'&objname='+objname,'color','width=238, height=166, status=0, channelmode=0,directories=0,height=100,width=100,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0, left='+(screen.width/2-150)+',top='+(screen.height/2-50));
if(newcolor)newcolor.focus();
}
if(newcolor!=null)dmx_v5.execCommand(cmdID,false,'#'+newcolor);
break;
case'createlink':
if(is_ie){
showModalDialog(BaseURL+'AdvHTML_Popups/insert_link.html?'+objname,window,'dialogWidth:400px; dialogHeight: 145px; resizable: no; help: no; status: no; scroll: no;');
}else{
linkWin=window.open(BaseURL+'AdvHTML_Popups/insert_link.html?'+objname,'linkw','status=0, channelmode=0,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0, height=140, width=400 ,left='+(screen.width/2-200)+',top='+(screen.height/2-70));
if(linkWin)linkWin.focus();
}
break;
case'insertimage':
var ModalDialogStr="objname;"+objname+":BaseURL;"+BaseURL;
if(config.upload.length>0)ModalDialogStr=ModalDialogStr+":upload;"+config.upload+";"+config.upfolder;
if(config.resize.length>0&&(config.mw>0||config.mh>0))ModalDialogStr=ModalDialogStr+":resize;"+config.mw+";"+config.mh;
if(config.lib.length>0)ModalDialogStr=ModalDialogStr+":lib;"+config.lib+";"+config.lvw+";"+config.lw+";"+config.lh+";"+config.libfolder+";"+config.ld+";"+config.ldate+";"+config.lcss;
if(is_ie){
showModalDialog(BaseURL+'AdvHTML_Popups/insert_image.html?'+ModalDialogStr,window,'resizable: no; help: no; status: no; scroll: no;');
}else{
var imageWin=window.open(BaseURL+'AdvHTML_Popups/insert_image.html?'+ModalDialogStr,'image','status=0, channelmode=0,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0, height=290, width=440, status=no, scroll=no, left='+(screen.width/2-220)+',top='+(screen.height/2-150));
if(imageWin)imageWin.focus();
}
break;
case'inserttable':
if(is_gecko){
var tableWin=window.open(BaseURL+'AdvHTML_Popups/insert_table.html?'+objname,'table','height=145 , width=375 ,status=0, channelmode=0,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0, height=300, width=440, status=no, scroll=no, left='+(screen.width/2-200)+',top='+(screen.height/2-75));
if(tableWin)tableWin.focus();
}else{
showModalDialog(BaseURL+'AdvHTML_Popups/insert_table.html?'+objname,window,'resizable: no; help: no; status: no; scroll: no;');
}
break;
case'clearformat':
clearFormat(objname);
break;
case'clearfonts':
clearFonts(objname);
break;
case'clearword':
clearWord(objname);
break;
case'find':
if(is_ie){
if(dmx_v5.body.createTextRange().htmlText!=""){
var TxtRange=dmx_v5.body.createTextRange();
showModalDialog(BaseURL+'AdvHTML_Popups/find.html?'+objname,window,'dialogWidth:400px; dialogHeight: 192px; resizable: no; help: no; status: no; scroll: no;');
}else{
alert('\nEditor is empty.\n\nNothing to find or replace.!');
}
}else{
var editorRange=dmx_v5.createRange();
bdy=dmx_v5.getElementsByTagName('body').item(0);
editorRange.selectNode(bdy)
content=editorRange.toString();
if(content!=""&&content!="\n"&&content!="\r"){
var findWin=window.open(BaseURL+'AdvHTML_Popups/find.html?'+objname,'find','height= 160px,width= 400px,status=0, channelmode=0,directories=0,height=100,width=100,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0, height=300, width=440, status=no, scroll=no, left='+(screen.width/2-220)+',top='+(screen.height/2-150));
if(findWin)findWin.focus();
}else{
alert('\nEditor is empty.\n\nNothing to find or replace.!');
}
}
break;
case'insertchar':
if(is_ie){
var newchar=showModalDialog(BaseURL+'AdvHTML_Popups/insert_char.html','','dialogWidth:630px; dialogHeight: 192px; resizable: no; help: no; status: no; scroll: no;');
if(newchar==''){
return;
}else{
dmxedit_insertHTML(objname,newchar);
}
}else{
var newchar=window.open(BaseURL+'AdvHTML_Popups/insert_char.html?objname='+objname,'newchar','width=630px, height=155px, status=0, channelmode=0,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0,  status=no, scroll=no, left='+(screen.width/2-310)+',top='+(screen.height/2-90));
if(findWin)findWin.focus();
}
break;
default:
dmx_v5.execCommand(cmdID,false,"");
}
dmx_f11(objname,null);
}
function dmx_f11(objname,runDelay){
dmx_f26(objname);
var dmx_v6=document.getElementById('_'+objname+'_editor');
if(runDelay==null)runDelay=0;
var ev=dmx_v6.contentWindow?dmx_v6.contentWindow.event:event;
if(is_safari&&!ev)ev=event;
var dmx_v5=dmx_v6.contentWindow.document;
if(runDelay>0)return setTimeout(function(){dmx_f11(objname,null);},runDelay);
if(this.timerToolbar){
clearTimeout(this.timerToolbar);
}
//Warning check this for working...
//timerToolbar = setTimeout(function() {
//  dmxedit_updateToolbar(objname, '')
//  this.timerToolbar = null;
//  dmxedit_updateOutput(objname);
//}, 333);
dmx_f22(objname,'');
dmx_f20(objname);
}
function dmx_f28(ev,objname){
if(ev){
var config=document.getElementById(objname).config;
var keyEvent=ev.ctrlKey||ev.altKey||ev.shiftKey;
//var ord = is_ie ? ev.keyCode : ev.charCode;
var ord=ev.keyCode?ev.keyCode:ev.which?ev.which:void 0;
//if (ord != null && is_gecko && ord == 0) ord = ev.which;
/* allow P enter tags in IE
    if (ord){
      if (is_ie && ord == 13){
        var sel = editdoc.selection;
        var rng = sel.createRange();
        var el = rng.parentElement();
        // not when we are in bullets mode
        if (!(el && (el.tagName == 'LI' || el.tagName == 'UL' || el.tagName == 'DT' || el.tagName == 'DT' || el.tagName == 'DD'))) {
          dmxedit_insertHTML(objname,"<br />");
          dmxedit_eventStop(ev);
          return;
        }
      }
    }
    */
/* todo transform enter to P tag in Gecko
    if (ord != null && is_gecko && ord == 13 && !keyEvent) {
      editdoc.execCommand('formatblock', false, '<p>');
      dmxedit_insertHTML(objname,"\n<p></p>");
      // todo move to next line
      dmxedit_eventStop(ev);
      return;
    }
    */
if(keyEvent){
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
try{
var ctrlKey=ev.ctrlKey;
var altKey=ev.altKey&&ev.altLeft;
var shiftKey=ev.shiftKey;
if(ord==16)return;// ignore shift key by itself
if(ord==17)return;// ignore ctrl key by itself
if(ord==18)return;// ignore alt key by itself
if((ctrlKey&&(ord==121||ord==89))||(shiftKey&&(ord==122||ord==90))){
return;
}
if(ord>=33&&ord<=40){
return;// ignore arrow, home, end, pgup, pgdown keys
}
if(ctrlKey){
if(ord==122||ord==90){
return;
}
if(ord==77||ord==109){
//editdoc.execCommand('paste', false, null)
if(config.clearFormat=="true")clearFormat(objname);
if(config.clearFonts=="true")clearFonts(objname);
if(config.clearWord=="true")clearWord(objname);
dmx_f12(ev);
return;
}
cmd=null;value=null;
if(ord==98||ord==66)cmd="bold";
if(ord==73||ord==105)cmd="italic";
if(ord==85||ord==117)cmd="underline";
if(ord==83||ord==115)cmd="strikethrough";
if(ord==76||ord==108)cmd="justifyleft";
if(ord==69||ord==114)cmd="justifyright";
if(ord==74||ord==106)cmd="justifyfull";
if(ord==101)cmd="justifycenter";
}
if(altKey){
if(ord==49)value="h1";
if(ord==50)value="h2";
if(ord==51)value="h3";
if(ord==52)value="h4";
if(ord==53)value="h5";
if(ord==54)value="h6";
if(ord==55)value="h7";
}
if(value)cmd="formatblock";
if(cmd){
if(is_ie)value="<"+value+">";
dmxedit_focus(dmx_v6);
dmx_v5.execCommand(cmd,false,value);
dmx_f22(objname,'');
dmx_f12(is_ie?dmx_v6.contentWindow.event:ev);
dmxedit_focus(dmx_v6);
}
}catch(DOMException){
// Error handling
}
}
}
}
function dmx_f22(objname,action){
var config=document.getElementById(objname).config;
var dmx_v6=document.getElementById('_'+objname+'_editor');
//CHECK FontName
if(action=='enable'||action=='disable'){
var tbItems=new Array('FontName','FontSize','FontStyle','FormatBlock','FontName_b','FontSize_b','FontStyle_b','FormatBlock_b');
for(var btnName in config.btnList)tbItems.push(config.btnList[btnName][0]);
for(var idxN in tbItems){
var cmdID=tbItems[idxN].toLowerCase();
var tbObj=document.getElementById('_'+objname+'_'+tbItems[idxN]);
if(cmdID=='htmlmode'){
//if (is_gecko) Fix for button that has to move - only in NS - 
continue;
}
if(tbObj==null)continue;
var isBtn=(tbObj.tagName.toLowerCase()=='button')?true:false;
if(action=='enable'){tbObj.disabled=false;if(isBtn){if(tbItems[idxN].indexOf('_b')==-1){tbObj.className='dmx_btn';}else{tbObj.className='';}}}
if(action=='disable'){tbObj.disabled=true;if(isBtn)tbObj.className='dmx_btnNA';}
}
return;
}
if(config.mode=='text')return;
var dmx_v5=dmx_v6.contentWindow.document;
var fontname_obj=document.getElementById('_'+objname+'_FontName');
if(fontname_obj){
var fontnameQ=dmx_v5.queryCommandValue('FontName');
if(fontnameQ==null||typeof(fontnameQ)!="string"){
fontname_obj.value='Fonts';
}else{
var found=0;
fontnameQ=fontnameQ.split(',')[0];
var fnames='';for(var fontname in config.fontnames){fnames+=fontname.toLowerCase()+','}
for(var fontname in config.fontnames){
if(fontnameQ.toLowerCase()==fontname.toLowerCase()){
fontname_obj.value=fontname;
found=1;
break;
}
}
if(found!=1)fontname_obj.value='Fonts';
}
}
//CHECK_fontsize  
var fontsize_obj=document.getElementById('_'+objname+'_FontSize');
if(fontsize_obj){
var fontsizeQ=dmx_v5.queryCommandValue('FontSize');
var found=0;
if(fontsizeQ!=null){
for(var fontsize in config.fontsizes){
if(fontsizeQ==config.fontsizes[fontsize]){
fontsize_obj.value=fontsize;
found=1;
break;
}
}
}
if(found!=1)fontsize_obj.value='Size';
}
//CHECK_formatblock
var formatblock_obj=document.getElementById('_'+objname+'_FormatBlock');
if(formatblock_obj){
formatblock_obj.value=revFormatblockArr['null'];
var pElement;
if(is_ie){
var rng=dmx_v5.selection.createRange();
var pElement;
if(rng.length){
pElement=rng[0];
}else{
pElement=rng.parentElement();
}
}else{
var sel=dmx_f61(dmx_v6);
var editorRange=dmx_v5.createRange();
if(typeof sel=="undefined"||sel==null){
if(!editorRange.collapsed)editorRange.collapse(true);
editorRange.select();
var rng=editorRange;
sel=dmx_f61(dmx_v6);
}else{
if(sel!=null){
var rng=sel.getRangeAt(sel.rangeCount-1);
}
}
pElement=sel.anchorNode;
while(pElement&&pElement.nodeType==3){
pElement=pElement.parentNode;
}
}
var found=0;
while(pElement&&pElement.tagName){
if(revFormatblockArr['<'+pElement.tagName.toLowerCase()+'>']){
formatblock_obj.value=revFormatblockArr['<'+pElement.tagName.toLowerCase()+'>'];
found=1;
break;
}
if(found==1)break;
pElement=pElement.parentNode;
}
}
//CHECK_classname;
var classname_obj=document.getElementById('_'+objname+'_FontStyle');
if(classname_obj){
classname_obj.selectedIndex=0;
if(is_ie){
var rng=dmx_v5.selection.createRange();
var pElement;
if(rng.length){
pElement=rng[0];
}else{
pElement=rng.parentElement();
}
}else{
var sel=dmx_f61(dmx_v6);
var editorRange=dmx_v5.createRange();
if(typeof sel=="undefined"||sel==null){
if(!editorRange.collapsed)editorRange.collapse(true);
editorRange.select();
var rng=editorRange;
sel=dmx_f61(dmx_v6);
}else{
var rng=sel.getRangeAt(sel.rangeCount-1);
}
var pElement=sel.anchorNode;
while(pElement&&pElement.nodeType==3){
pElement=pElement.parentNode;
}
}
while(pElement&&!pElement.className)pElement=pElement.parentElement;
var thisClass=pElement?pElement.className:'';
classname_obj.value=revStyleArr['null'];
if(thisClass){
if(revStyleArr[thisClass]){
classname_obj.value=thisClass;
}
}
}
//CHECK_queryCommandState
var IDList=Array('Bold','Italic','Underline','StrikeThrough','SubScript','SuperScript','JustifyLeft','JustifyCenter','JustifyRight','JustifyFull','InsertOrderedList','InsertUnorderedList');
for(i=0;i<IDList.length;i++){
var btnObj=document.getElementById('_'+objname+'_'+IDList[i]);
if(btnObj==null)continue;
try{
var cmdActive=dmx_v5.queryCommandState(IDList[i]);
}catch(DOMException){
//Error handling
}
if(!cmdActive){
if(btnObj.className!='dmx_btn')btnObj.className='dmx_btn';
if(btnObj.disabled!=false)btnObj.disabled=false;
}else if(cmdActive){
if(btnObj.className!='dmx_btnDown')btnObj.className='dmx_btnDown';
if(btnObj.disabled!=false)btnObj.disabled=false;
}
}
}
function dmx_f14(contents,objname){
var config=document.getElementById(objname).config;
if(config.xhtml=="true"){
if(!is_safari){
contents=contents.replace(/<.*>?>/g,function(m,p,s){return m.replace(/\s(\w+=)([-A-Z0-9+\&\?@#\/%=~_|!:,.;]*)/gi,function(m,p,s){if(s==''){return' '+p.toLowerCase();}else{return' '+p.toLowerCase()+'"'+s+'"';}});});
contents=contents.replace(/<(\/?\w+)([^>]*>)/g,function(m,p,s){return'<'+p.toLowerCase()+s;});
}
contents=contents.replace(/<(meta|base|basefont|param|link|img|br|hr|area|input)([^>]*[^\/]?)>/gi,'<$1$2 />');
// Add empty ALT if not present in the IMG tag  
contents=contents.replace(/<(img)([^>]*)\/>/g,function(m,p,s){return m.indexOf('alt=')==-1?'<'+p+s+' alt="" />':m;});
}
return contents;
}
function dmx_f20(objname){
var config=document.getElementById(objname).config;
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var edit_Tables=dmx_v5.getElementsByTagName("TABLE");
for(i=0;i<edit_Tables.length;i++){
if(edit_Tables[i].border==''||edit_Tables[i].border=='0'){
if(is_ie){
edit_Tables[i].runtimeStyle.border="1px dotted #C0C0C0";
}else{
edit_Tables[i].style.border="1px dotted #C0C0C0";
}
}else{
if(is_ie){
edit_Tables[i].runtimeStyle.cssText="";
}else{
edit_Tables[i].style.cssText="";
}
}
edit_Rows=edit_Tables[i].rows;
for(j=0;j<edit_Rows.length;j++){
edit_Cells=edit_Rows[j].cells;
for(k=0;k<edit_Cells.length;k++){
if(edit_Tables[i].border==''||edit_Tables[i].border=='0'){
if(!edit_Cells[k].border||edit_Cells[k].border==''||edit_Cells[k].border=='0'){
if(is_ie){
edit_Cells[k].runtimeStyle.border="1px dotted #C0C0C0";
}else{
edit_Cells[k].style.border="1px dotted #C0C0C0";
}
}else{
if(is_ie){
edit_Cells[k].runtimeStyle.cssText="";
}else{
edit_Cells[k].style.cssText="";
}
}
}else{
if(edit_Cells[k].border=='0'){
if(is_ie){
edit_Cells[k].runtimeStyle.border="1px dotted #C0C0C0";
}else{
edit_Cells[k].style.border="1px dotted #C0C0C0";
}
}else{
if(is_ie){
edit_Cells[k].runtimeStyle.cssText="";
}else{
edit_Cells[k].style.cssText="";
}
}
}
}
}
}
var fullPath=location.href;
var lastSlash=fullPath.lastIndexOf('/');
var lastDot=fullPath.lastIndexOf('.');
if(lastDot>lastSlash)fullPath=fullPath.substring(0,lastSlash);
if(fullPath.substr(fullPath.length,1)!='/')fullPath+='/';
var siteBegin=fullPath.indexOf('://');
var siteName='';
if(siteBegin!=-1)siteBegin=fullPath.indexOf('/',siteBegin+3);
if(siteBegin!=-1)siteName=fullPath.substring(0,siteBegin+1).toLowerCase();
if(config.rlink){
//Relative links
for(i=0;i<dmx_v5.links.length;i++){
lnkExactSrc=dmx_v5.links[i].getAttribute("href",2);
if(lnkExactSrc.toLowerCase().indexOf(siteName)!=-1){
oldLink=lnkExactSrc;
lnkExactSrc=dmx_f62(lnkExactSrc,fullPath);
dmx_v5.links[i].setAttribute("href",lnkExactSrc,0);
}
}
for(i=0;i<dmx_v5.images.length;i++){
lnkExactSrc=dmx_v5.images[i].getAttribute("src",2);
if(lnkExactSrc.toLowerCase().indexOf(siteName)!=-1){
lnkExactSrc=dmx_f62(lnkExactSrc,fullPath);
dmx_v5.images[i].setAttribute("src",lnkExactSrc,0);
}
}
}else{
// Absolute links
for(i=0;i<dmx_v5.links.length;i++){
lnkExactSrc=dmx_v5.links[i].getAttribute("href",2);
if(lnkExactSrc.indexOf('://')==-1&&lnkExactSrc.substr(0,1)!='#'&&lnkExactSrc.toLowerCase().indexOf('mailto:')==-1&&lnkExactSrc.toLowerCase().indexOf('javascript:')==-1)
dmx_v5.links[i].setAttribute("href",fullPath+lnkExactSrc,0);
}
for(i=0;i<dmx_v5.images.length;i++){
lnkExactSrc=dmx_v5.images[i].getAttribute("src",2);
if(lnkExactSrc.indexOf('://')==-1)
dmx_v5.images[i].setAttribute("src",fullPath+lnkExactSrc,0);
}
}
//Fix LI tags
if(is_ie){
var allLIs=dmx_v5.getElementsByTagName("LI");
var LIhtml;
for(i=0;i<allLIs.length;i++){
LIhtml=allLIs[i].outerHTML;
if(LIhtml.substr(LIhtml.length-5,5).toLowerCase()!='</li>')
allLIs[i].outerHTML+='</li>';
}
}
contents=dmx_v5.body.innerHTML;
if(config.lastUpdateOutput&&config.lastUpdateOutput==contents){
return;
}else{
config.lastUpdateOutput=cleanUpHtml(contents,objname);
}
document.getElementById(objname).value=cleanUpHtml(contents,objname);
}
function dmx_f60(objname){
if(!is_ie){
var config=document.getElementById(objname).config;
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var edit_Tables=dmx_v5.getElementsByTagName("TABLE");
for(i=0;i<edit_Tables.length;i++){
if(edit_Tables[i].border==''||edit_Tables[i].border=='0'){
edit_Tables[i].style.border="";
if(edit_Tables[i].style.cssText=='')edit_Tables[i].removeAttribute("style");
}else{
edit_Tables[i].style.cssText="";
}
edit_Rows=edit_Tables[i].rows;
for(j=0;j<edit_Rows.length;j++){
edit_Cells=edit_Rows[j].cells;
for(k=0;k<edit_Cells.length;k++){
if(edit_Tables[i].border==''||edit_Tables[i].border=='0'){
if(!edit_Cells[k].border||edit_Cells[k].border==''||edit_Cells[k].border=='0'){
edit_Cells[k].style.border="";
if(edit_Cells[k].style.cssText=='')edit_Cells[k].removeAttribute("style");
}else{
edit_Cells[k].style.cssText="";
}
}else{
if(edit_Cells[k].border=='0'){
edit_Cells[k].style.border="";
if(edit_Cells[k].style.cssText=='')edit_Cells[k].removeAttribute("style");
}else{
edit_Cells[k].style.cssText="";
}
}
}
}
}
//Update text field
document.getElementById(objname).value=dmx_v5.body.innerHTML;
}
}
function dmx_f62(absURL,docURL)
{
var newRef,fullURL,index,filePath,docPath;
if(absURL){
newRef='';
fullURL=absURL;
if(docURL&&fullURL.indexOf(docURL)==0)
newRef=fullURL.substring(docURL.length);// doc relative, below doc
else if(docURL){// doc relative, above doc
for(index=0;index<fullURL.length&&index<docURL.length;index++)
if(fullURL.charAt(index)!=docURL.charAt(index))break;
index=fullURL.substring(0,index).lastIndexOf('/')+1;// backup to last directory
filePath=fullURL.substring(index);
docPath=docURL.substring(index);
if(docPath&&docPath.indexOf('|')==-1){// image on a separate drive
for(var j=0;j<docPath.length;j++)
if(docPath.charAt(j)=='/')newRef+="../";
newRef+=filePath;
}
}
if(!newRef)newRef=fullURL;// local file ref
}
return newRef;
}
function dmx_f13(objname){
var config=document.getElementById(objname).config;
if(config.mode=='text')dmx_f17(objname,'html');
dmx_f20(objname);
dmx_f60(objname);
var contents=document.getElementById(objname).value;
if(contents.toLowerCase()=='<br />'||
contents.toLowerCase()=='<p>&nbsp;</p>'||
contents.toLowerCase()=='<br>')contents='';
document.getElementById(objname).value=dmx_f19(contents);
}
function dmx_f17(objname,mode){
var config=document.getElementById(objname).config;
var dmx_v6=document.getElementById('_'+objname+'_editor');
var toolbar_obj=document.getElementById('_'+objname+'_toolbar');
var dmx_v5=dmx_v6.contentWindow.document;
if(is_ie){
if(document.readyState!='complete'){
setTimeout(function(){dmx_f17(objname,mode)},25);
return;
}
}
//HTML
if(config.mode=='html'){
config.mode='text';
if(is_ie){
dmx_v5.body.innerText=cleanUpHtml(dmx_v5.body.innerHTML,objname);
}else{
dmx_f60(objname);
var html=cleanUpHtml(dmx_v5.body.innerHTML,objname);
html=dmx_v5.createTextNode(html);
dmx_v5.body.innerHTML="";
dmx_v5.body.appendChild(html);
}
dmx_v5.body.innerHTML=dmx_f1(dmx_v5.body.innerHTML);
dmx_v5.body.style.fontFamily='Courier New';
dmx_v5.body.style.fontSize='10pt';
}else{
//TEXT or INIT  
config.mode='html';
// ONLY INIT    
if(mode=='init'){
dmx_v6.style.visibility="visible";
toolbar_obj.style.visibility="visible";
if(is_gecko)dmx_v5.designMode='on';
//var content = document.getElementById(objname).value;
//Use innerHTML instead of .value to preserve spaces
var content=(is_ie?document.getElementById(objname).value:document.getElementById(objname).innerHTML);
var html='<html><head>';
if(is_ie){
for(var i=0;i<config.stylesheet.length;i++){
html+='<link href="'+config.stylesheet[i]+'" onload="window.parent.dmx_f21(\''+objname+'\');" rel="stylesheet" type="text/css" />';
}
}
html+='<style>\nbody {'+config.bodyStyle.replace('##bgcolor##',config.bgColor).replace('##textcolor##',config.textColor)+'} \n';
if(config.stylesheet.length==1){
for(var i in config.fontstyles){
var fontstyle=config.fontstyles[i];
if(fontstyle.classStyle){
html+='.'+fontstyle.className+' {'+fontstyle.classStyle+'}\n';
}
}
for(var i in config.globalstyles){
var globalstyle=config.globalstyles[i];
if(globalstyle.classStyle){
html+=globalstyle.className+' {'+globalstyle.classStyle+'}\n';
}
}
}
html+='</style>\n</head>\n';
if(is_ie){
html+='<body contenteditable="true" topmargin="1" leftmargin="1">'+content+'</body>\n</html>';
}else{
html+='<body>'+content+'</body>\n</html>';
}
dmx_v5.open();
dmx_v5.write(html);
dmx_v5.close();
if(is_gecko){
var editdocHead=dmx_v5.getElementsByTagName('head')[0];
var slink='';
var r=editdocHead.ownerDocument.createRange();
r.setStartBefore(editdocHead);
for(var i=0;i<config.stylesheet.length;i++){
slink+='<link href="'+config.stylesheet[i]+'" rel="stylesheet" type="text/css" />\n';
}
slink=r.createContextualFragment(slink);
editdocHead.insertBefore(slink,editdocHead.firstChild);
dmx_v5.body.setAttribute("topmargin","1",0);
dmx_v5.body.setAttribute("leftmargin","1",0);
dmx_v5.body.setAttribute("marginwidth","1",0);
dmx_v5.body.setAttribute("marginheigth","1",0);
}
dmx_v5.body.style.backgroundColor=config.bgColor;
dmx_v5.body.style.color=config.textColor;
// set event handlers -- "keyup","keydown","drag" removed was a bit to much
evs=["mouseup","blur"];
for(var i=0;i<evs.length;i++){
if(is_ie){
//ev="on" + evs[i];
//editor_obj.ev  = function() { dmxedit_event(objname, null); }
dmx_v5.attachEvent("on"+evs[i],function(){dmx_f11(objname,null);});
}else{
dmx_v5.addEventListener(evs[i],function(){dmx_f11(objname,null);},false);
}
}
if(is_ie){
dmx_v5.attachEvent("onkeydown",function(){dmx_f28(dmx_v6.contentWindow.event,objname);});
}else{
if(is_safari)
dmx_v5.addEventListener("keydown",function(evt){dmx_f28(evt,objname);},false);
else
dmx_v5.addEventListener("keypress",function(evt){dmx_f28(evt,objname);},false);
}
}else{
//ONLY TEXT
if(is_ie){
dmx_v5.body.innerHTML=cleanUpHtml(dmx_v5.body.innerText,objname);
//Setting innerHTML cause links to get absolute
// so change back
dmx_f66(objname);
}else{
var r=dmx_v5.createRange();
r.selectNode(dmx_v5.getElementsByTagName("body").item(0));
var html=r.toString();
dmx_v5.body.innerHTML=html;
}
}
//TEXT or INIT    
dmx_v5.body.style.fontFamily='';
dmx_v5.body.style.fontSize='';
dmx_v5.objname=objname;
dmx_f22(objname,'enable');
}
// HTML or TEXT
if(mode!='init'){
dmxedit_focus(dmx_v6);
dmx_f11(objname,null);
}
// ALL
setTimeout(function(){dmx_f27(objname);dmx_f21(objname)},333);
if(config.mode=='text')dmx_f22(objname,'disable');
dmx_f20(objname);
}
function dmx_f12(ev){
if(ev){
if(is_ie){
ev.returnValue=false;
ev.cancelBubble=true;
}else{
ev.preventDefault();
ev.stopPropagation();
}
}
}
function dmxedit_focus(dmx_v6){
dmx_v6.contentWindow.focus()
var dmx_v5=dmx_v6.contentWindow.document;
if(is_ie){
var editorRange=dmx_v5.body.createTextRange();
var curRange=dmx_v5.selection.createRange();
if(curRange.length==null&&!editorRange.inRange(curRange)){
if(!editorRange.collapsed)editorRange.collapse();
editorRange.select();
curRange=editorRange;
}
}else{
var selection=dmx_f61(dmx_v6);
var editorRange=dmx_v5.createRange();
if(typeof selection=="undefined"||selection==null){
if(!editorRange.collapsed)editorRange.collapse(true);
editorRange.select();
var curRange=editorRange;
}else{
var curRange=selection.getRangeAt(selection.rangeCount-1).cloneRange();
}
}
}
function dmx_f61(dmx_v6){
var sel=dmx_v6.contentWindow.getSelection();
if(!sel.getRangeAt){
var dmx_v5=dmx_v6.contentWindow.document;
//Safari fix!!!
var newSel=new Object();
//var doc=this.getDoc();
function getRangeAt(idx){
var rng=new Object();
rng.startContainer=this.focusNode;
rng.endContainer=this.anchorNode;
rng.commonAncestorContainer=this.focusNode;
rng.createContextualFragment=function(html){
if(html.charAt(0)=='<'){
var elm=dmx_v5.createElement("div");
elm.innerHTML=html;
return elm.firstChild;
}
return dmx_v5.createTextNode("UNSUPPORTED, DUE TO LIMITATIONS IN SAFARI!");
};
rng.deleteContents=function(){
dmx_v5.execCommand("Delete",false,"");
};
rng.cloneRange=function(){return this};
return rng;
}
newSel.focusNode=sel.baseNode;
newSel.focusOffset=sel.baseOffset;
newSel.anchorNode=sel.extentNode;
newSel.anchorOffset=sel.extentOffset;
newSel.getRangeAt=getRangeAt;
newSel.text=""+sel;
newSel.realSelection=sel;
newSel.toString=function(){
return this.text;
};
sel=newSel;
}
return sel;
}
function dmx_f48(value){
var hex_string="";
for(var hexpair=0;hexpair<3;hexpair++){
var myByte=value&0xFF;// get low byte
value>>=8;// drop low byte
var nybble2=myByte&0x0F;// get low nybble (4 bits)
var nybble1=(myByte>>4)&0x0F;// get high nybble
hex_string+=nybble1.toString(16);// convert nybble to hex
hex_string+=nybble2.toString(16);// convert nybble to hex
}
return hex_string.toUpperCase();
}
function dmxedit_insertHTML(objname,Str){
var config=document.getElementById(objname).config;
var dmx_v6=document.getElementById('_'+objname+'_editor');
if(Str==null)Str='';
dmxedit_focus(dmx_v6);
var tagname=dmx_v6.tagName.toLowerCase();
var sRange;
var dmx_v5=dmx_v6.contentWindow.document;
if(is_ie){
sRange=dmx_v5.selection.createRange();
var sHtml=sRange.htmlText;
}else{
var sel=dmx_f61(dmx_v6);
var editorRange=dmx_v5.createRange();
if(typeof sel=="undefined"||sel==null){
if(!editorRange.collapsed)editorRange.collapse(true);
editorRange.select();
var sRange=editorRange;
}else{
var sRange=sel.getRangeAt(sel.rangeCount-1).cloneRange();
}
}
if(sRange.length)return alert("Unable to insert char.  Try highlighting content instead of selecting it.");
var oldHandler=window.onerror;
window.onerror=function(){alert("Unable to insert HTML for current selection.");return true;};
if(is_ie){
sRange.pasteHTML(Str);
}else{
sRange.deleteContents();
input=Str;
input=sRange.createContextualFragment(input);
sRange.insertNode(input);
}
window.onerror=oldHandler;
if(!sRange.collapsed)sRange.collapse(false);
if(is_ie)sRange.select();
}
function dmx_f19(str){
var fNW=str.search(/\S/);
if(fNW!=-1){
for(var i=str.length-1;i>=0;i--){
if(str.charAt(i).search(/\S/)!=-1){
str=str.substring(fNW,i+1);
break;
}
}
}
return str;
}
function dmxObj(id,x,y,w,h){
id='dmxTT_Div_'+id;
this.el=document.getElementById(id);
if(!this.el)return null;
this.css=(this.el.style)?this.el.style:this.el;
this.x=x||0;if(x)this.css.left=this.x+"px";
this.y=y||0;if(y)this.css.top=this.y+"px";
this.width=w?w:(this.el.offsetWidth)?this.el.offsetWidth:(this.css.clip.width)?this.css.clip.width:0;
this.height=h?h:(this.el.offsetHeight)?this.el.offsetHeight:(this.css.clip.height)?this.css.clip.height:0;
if(w){this.css.width=w+"px";}
if(h){this.css.height=h+"px";}
this.obj=id+"dmxObj";eval(this.obj+"=this");
}
function dmx_f31(){this.css.visibility="visible";}
function dmx_f29(){this.css.visibility="hidden";}
function dmx_f30(x,y){
if(x!=null)this.x=x;if(y!=null)this.y=y;
if(this.css.moveTo){
this.css.moveTo(Math.round(this.x),Math.round(this.y));
}else{
this.css.left=Math.round(this.x)+"px";
this.css.top=Math.round(this.y)+"px";
}
}
function dmx_f32(content){
this.el.innerHTML=content;
}
dmxObj.prototype.show=dmx_f31;
dmxObj.prototype.hide=dmx_f29;
dmxObj.prototype.shiftTo=dmx_f30;
dmxObj.prototype.writeLyr=dmx_f32;
function dmx_f36(obj){
var wd=0;
var el=obj;
if(el.offsetWidth)wd=el.offsetWidth;
if(is_ie){
if(wd>160){
wd=160;el.style.overflowX="hidden";
}else if(wd<90){
wd=90;
el.style.overflowX="";
}else{
el.style.overflowX="";
}
wd=wd+3;
}
el.style.width=wd+3;
return wd;
}
function dmx_f35(obj,s){
var ht=0;
var el=obj;
if(el.offsetHeight)ht=el.offsetHeight;
if(ht>139){
if(!s&&is_gecko)el.style.overflow="-moz-scrollbars-vertical";
if(is_ie){el.style.height='140px';ht=140;}
}else{
if(is_gecko)el.style.overflow="";
}
return ht;
}
function dmx_f27(objname){
var config=document.getElementById(objname).config;
dmxTT=new dmxObj(objname);
config.dmxTT=dmxTT;
if(!config.dmxTT)return;
}
function dmx_f24(dmx_event,content,objname){
var config=document.getElementById(objname).config;
var dmxTT=config.dmxTT;last_dmxTT=objname;
if(dmxTT_t1)clearTimeout(dmxTT_t1);
if(dmxTT_t2)clearTimeout(dmxTT_t2);
dmxTT.writeLyr(content);
dmx_event=(window.event)?window.event:dmx_event;
dmxTT.el.style.width="auto";
dmxTT.el.style.height="auto";
dmxTT.width=dmx_f36(dmxTT.el);
dmxTT.height=dmx_f35(dmxTT.el,1);
setTimeout(dmxTT.obj+".shiftTo(Xpos,Ypos)",90);
setTimeout("config = document.getElementById('"+objname+"').config;"+dmxTT.obj+".width=dmx_f36(config.dmxTT.el)",100);
setTimeout("config = document.getElementById('"+objname+"').config;"+dmxTT.obj+".height=dmx_f35(config.dmxTT.el)",100);
dmxTT_t1=setTimeout(dmxTT.obj+".show()",103);
}
var last_dmxTT='';
function dmx_f26(objname){
if(!objname)objname=last_dmxTT;
if(objname){
var config=document.getElementById(objname).config;
var id='dmxTT_Div_'+objname;
if(!config.dmxTT)return;
dmxTT_t2=setTimeout('document.getElementById(\''+id+'\').style.overflow = "";'+config.dmxTT.obj+'.hide();',100);
}
}
if(document.images&&ImagePreload){
var imageList=new Array();
for(var i=0;i<contentList.length;i++){
imageList[i]=new Image();
imageList[i].src=contentList[i][0];
}
}
function dmx_f25(dmx_event,id,objname){
var config=document.getElementById(objname).config;
if(!config.dmxTT)return;
dmx_f26();
var objEl=document.getElementById(id);
pEl=objEl;
Ypos=0;Xpos=0;
while(pEl.tagName.toLowerCase()!="body"){
Ypos+=pEl.offsetParent.offsetTop;
Xpos+=pEl.offsetParent.offsetLeft;
pEl=pEl.offsetParent;
}
Ypos+=objEl.offsetTop+objEl.offsetHeight+1;
Xpos+=objEl.offsetLeft;
if(is_ie)Ypos=Ypos+1;
var content=dmx_f23(id);
setTimeout(function(){dmx_f24(dmx_event,content,objname)},100);
}
function dmx_f23(num){
var content="";
content+='<div id="dmx_TT_divcontent">';
if(contentList[num][0])content+='<img class="dmx_TT_img" src="'+contentList[num][0]+'<br />';
content+=contentList[num][1]+'</div>';
return content;
}
function cleanUpHtml(html,objname){
var config=document.getElementById(objname).config;
if(is_safari){
//Do safari hacks
//Replace <div>text</div> with text<br>
html=html.replace(/<div>(.*?)<\/div>/gi,"<br>$1");
html=html.replace(/\s*class="Apple-style-span"/gi,"");
//todo nested spam's clean up bug
}
// Remove  crap && fix those stupid IE bugs
html=html.replace(/<\?xml:.*?\/>/gi,"");
html=html.replace(/<o:p>&nbsp;<\/o:p>/gi,"");
html=html.replace(/<st1:.*?>/gi,"");
html=html.replace(/<w:.*?>/gi,"");
html=html.replace(/<v:[^>]*>/gi,"");
html=html.replace(/<\/v:[^>]*>/gi,"");
html=html.replace(/<o:[^>]*>/gi,"");
html=html.replace(/<\/o:[^>]*>/gi,"");
html=html.replace(/<span\s*>((.|\n|\r)*?)<\/span>/gi,"$1");
html=html.replace(/<div\s*>(.*?)<\/div>/gi,"$1");
html=html.replace(/<span>((.|\n|\r)*?)<\/span>/gi,"$1");
html=html.replace(/<div>(.*?)<\/div>/gi,"$1");
html=html.replace(/<lock[^>]*>(.*?)<\/lock>/gi,"$1");
html=html.replace(/<(?!a\s*[id|name])(\w)+([^>]*)>\s*?<\/\1>/gi,"");
html=html.replace(/<font[^>]*>\s*(\s*?|&nbsp;)\s*<\/font>/gi,"");
html=html.replace(/<font([^>]*)><font([^>]*)>(.*?)<\/font><\/font>/gi,"<font$1$2>$3</font>");
html=html.replace(/<span([^>]*)><span([^>]*)>(.*?)<\/span><\/span>/gi,"<span$1$2>$3</span>");
var reH=/<h([^>]*)>\s*<h([^>]*)>(.*?)<\/h\2>\s*<\/h\1>/gi;
while(reH.test(html)){
html=html.replace(reH,"<H$2>$3</H$2>");
while(reH.test(html))html=html.replace(reH,"<H$2>$3</H$2>");
}
var re=/<p[^>]*>\s*<\/p>/gi;
while(re.test(html)){
html=html.replace(re,"");
while(re.test(html))html=html.replace(re,"");
}
var re=/<(h\d)[^>]*>\s*<\/\1>/gi;
while(re.test(html)){
html=html.replace(re,"");
while(re.test(html))html=html.replace(re,"");
}
//if (is_ie){
//  var re = /<li([^>]*)>(((?!<\/li).|\n|\r)*?)(<li[^>]*>)/gi;
//  while(re.test(html)){
//    html = html.replace(re, function(m,p,s,t,u){return'<li'+p+'>'+s+'</li>\n'+u;});
//    while(re.test(html))html = html.replace(re, function(m,p,s,t,u){return'<li'+p+'>'+s+'</li>\n'+u;});
//  }
//}
html=dmx_f42(html);
html=dmx_f14(html,objname);
return html;
}
function clearFormat(objname){
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var config=document.getElementById(objname).config;
var theContent=dmx_v5.body;
var fullHTML=dmx_v5.body.innerHTML;
if(is_ie){
var edit=dmx_v5.selection.createRange();
var selHTML=edit.htmlText.replace(/(\r|\n)/g,"");
}else{
var sel=dmx_f61(dmx_v6);
var editorRange=dmx_v5.createRange();
if(typeof sel=="undefined"||sel==null){
if(!editorRange.collapsed)editorRange.collapse(true);
editorRange.select();
var rng=editorRange;
sel=dmx_f61(dmx_v6);
}else{
var rng=sel.getRangeAt(sel.rangeCount-1).cloneRange();
}
el=sel.anchorNode;var selHTML='';
while(el.nodeType==3&&el.parentNode.nodeName.toLowerCase()!='body'){
el=el.parentNode;
if(el.nodeName.toLowerCase()=='span'||el.nodeName.toLowerCase()=='div'||el.nodeName.toLowerCase()=='font'){
rng.selectNode(el)
}
el=el.parentNode;
}
documentFragment=rng.extractContents();
spanNode=dmx_v5.createElement('SPAN');
rng.insertNode(spanNode);
rng.selectNode(spanNode);
spanNode.appendChild(documentFragment);
var selHTML=spanNode.innerHTML.replace(/(\r|\n)/g,"");
}
var newHTML=selHTML;
fullHTML=fullHTML.replace(/(\r|\n)/g,"");
var begHTML=fullHTML.indexOf(selHTML);
var endHTML=begHTML+selHTML.length;
if(begHTML!=-1){
newHTML=newHTML.replace(/<([^>]*)\sclass=("[^"]*"|'[^']*')([^>]*)\/?>/gi,"<$1$3>");
newHTML=newHTML.replace(/<([^>]*)\sstyle=("[^"]*"|'[^']*')([^>]*)\/?>/gi,"<$1$3>");
newHTML=newHTML.replace(/<(font|span|div|h\d)[^>]*>/gi,"");
newHTML=newHTML.replace(/<\/(font|span|div|h\d)>/gi,"");
var html=fullHTML.substring(0,begHTML)+newHTML+fullHTML.substring(endHTML,fullHTML.length);
dmx_v5.body.innerHTML=html;
}
}
function clearFonts(objname){
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var theContent=dmx_v5.body;
var sHTML=theContent.innerHTML;
sHTML=sHTML.replace(/<font[^>]*>/gi,"");
sHTML=sHTML.replace(/<\/font>/gi,"");
dmx_v5.body.innerHTML=sHTML;
}
function dmx_f66(objname){
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var fullPath=location.href;
for(i=0;i<dmx_v5.links.length;i++){
lnkExactSrc=dmx_v5.links[i].getAttribute("href",2);
if(lnkExactSrc.toLowerCase().indexOf(fullPath)!=-1){
oldLink=lnkExactSrc;
lnkExactSrc=lnkExactSrc.replace(fullPath,'');
dmx_v5.links[i].setAttribute("href",lnkExactSrc,0);
}
}
}
function clearWord(objname){
var dmx_v6=document.getElementById('_'+objname+'_editor');
var dmx_v5=dmx_v6.contentWindow.document;
var theContent=dmx_v5.body;
var config=document.getElementById(objname).config;
if(is_ie){
for(var i=0;i<theContent.all.length;i++){
theContent.all[i].removeAttribute("className","",0);
theContent.all[i].removeAttribute("style","",0);
theContent.all[i].removeAttribute("lang","",0);
}
}else{
elall=dmx_v5.body.getElementsByTagName("*");
for(var i=0;i<elall.length;i++){
if(elall[i].nodeType==1){
elall[i].removeAttribute("className","",0);
elall[i].removeAttribute("style","",0);
elall[i].removeAttribute("lang","",0);
}
}
}
var sHTML=theContent.innerHTML;
sHTML=cleanUpHtml(sHTML,objname);
theContent.innerHTML=sHTML;
}
function dmx_f42(html){
// Special characters and their HTML equivelent
var set=[
["\\x80|\\u20AC","\\x91|\\u2018","\\x92|\\u2019","\\x93|\\u201C","\\x94|\\u201D","\\x96|\\u2013","\\x96|\\u2014","\\xA1|\\u00A1","\\xA2|\\u00A2","\\xA3|\\u00A3","\\xA4|\\u00A4","\\xA5|\\u00A5","\\xA6|\\u00A6","\\xA7|\\u00A7","\\xA8|\\u00A8","\\xA9|\\u00A9","\\xAA|\\u00AA","\\xAB|\\u00AB","\\xAC|\\u00AC","\\xAD|\\u00AD","\\xAE|\\u00AE","\\xAF|\\u00AF","\\xB0|\\u00B0","\\xB1|\\u00B1","\\xB2|\\u00B2","\\xB3|\\u00B3","\\xB4|\\u00B4","\\xB5|\\u00B5","\\xB6|\\u00B6","\\xB7|\\u00B7","\\xB8|\\u00B8","\\xB9|\\u00B9","\\xBA|\\u00BA","\\xBB|\\u00BB","\\xBC|\\u00BC","\\xBD|\\u00BD","\\xBE|\\u00BE","\\xBF|\\u00BF","\\xC0|\\u00C0","\\xC1|\\u00C1","\\xC2|\\u00C2","\\xC3|\\u00C3","\\xC4|\\u00C4","\\xC5|\\u00C5","\\xC6|\\u00C6","\\xC7|\\u00C7","\\xC8|\\u00C8","\\xC9|\\u00C9","\\xCA|\\u00CA","\\xCB|\\u00CB","\\xCC|\\u00CC","\\xCD|\\u00CD","\\xCE|\\u00CE","\\xCF|\\u00CF","\\xD0|\\u00D0","\\xD1|\\u00D1","\\xD2|\\u00D2","\\xD3|\\u00D3","\\xD4|\\u00D4","\\xD5|\\u00D5","\\xD6|\\u00D6","\\xD7|\\u00D7","\\xD8|\\u00D8","\\xD9|\\u00D9","\\xDA|\\u00DA","\\xDB|\\u00DB","\\xDC|\\u00DC","\\xDD|\\u00DD","\\xDE|\\u00DE","\\xDF|\\u00DF","\\xE0|\\u00E0","\\xE1|\\u00E1","\\xE2|\\u00E2","\\xE3|\\u00E3","\\xE4|\\u00E4","\\xE5|\\u00E5","\\xE6|\\u00E6","\\xE7|\\u00E7","\\xE8|\\u00E8","\\xE9|\\u00E9","\\xEA|\\u00EA","\\xEB|\\u00EB","\\xEC|\\u00EC","\\xED|\\u00ED","\\xEE|\\u00EE","\\xEF|\\u00EF","\\xF0|\\u00F0","\\xF1|\\u00F1","\\xF2|\\u00F2","\\xF3|\\u00F3","\\xF4|\\u00F4","\\xF5|\\u00F5","\\xF6|\\u00F6","\\xF7|\\u00F7","\\xF8|\\u00F8","\\xF9|\\u00F9","\\xFA|\\u00FA","\\xFB|\\u00FB","\\xFC|\\u00FC","\\xFD|\\u00FD","\\xFE|\\u00FE","\\xFF|\\u00FF"],
["&euro;","&lsquo;","&rsquo;","&ldquo;","&rdquo;","&ndash;","&mdash;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","-","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&times;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;"]
];
if(html){
for(var j=0;j<set[0].length;j++){
html=html.replace(new RegExp(set[0][j],"g"),set[1][j]);
}
}
return html||"";
}
function dmx_f1(html){
html=html.replace(/@/gi,"_AT_");
html=html.replace(/#/gi,"_HASH_");
html=html.replace(/%/gi,"_PERC_");
var htmltag=/(&lt;[\w\/]+[ ]*[\w\=\"\'\.\/\;\: \)\(-]*&gt;)/gi;
html=html.replace(htmltag,"<span class=ccp_tag>$1</span>");
var imgtag=/<span class=ccp_tag>(&lt;IMG[ ]*[\w\=\"\'\.\/\;\: \)\(-]*&gt;)<\/span>/gi;
html=html.replace(imgtag,"<span class=ccp_img>$1</span>");
var formtag=/<span class=ccp_tag>(&lt;[\/]*(form|input){1}[ ]*[\w\=\"\'\.\/\;\: \)\(-]*&gt;)<\/span>/gi;
html=html.replace(formtag,"<br><span class=ccp_form>$1</span>");
var tabletag=/<span class=ccp_tag>(&lt;[\/]*(table|tbody|th|tr|td){1}([ ]*[\w\=\"\'\.\/\;\:\)\(-]*){0,}&gt;)<\/span>/gi;
html=html.replace(tabletag,"<span class=ccp_table>$1</span>");
//var Atag = /<span class=ccp_tag>(&lt;(\/a&gt;|[\W _\w\=\"\'\.\/\;\:\)\(-]&gt;){1})<\/span>/gi;
var Atag=/<span class=ccp_tag>(&lt;\/a&gt;){1}<\/span>/gi;
html=html.replace(Atag,"<span class=ccp_A>$1</span>");
var Atag=/<span class=ccp_tag>(&lt;a [\W _\w\=\"\'\.\/\;\:\)\(-]+&gt;){1,}<\/span>/gi;
html=html.replace(Atag,"<span class=ccp_A>$1</span>");
var parameter=/=("[ \w\'\.\/\;\:\)\(-]+"|'[ \w\"\.\/\;\:\)\(-]+')/gi;
html=html.replace(parameter,"=<span class=ccp_paramvalue>$1</span>");
var entity=/&amp;([\w]+);/gi;
html=html.replace(entity,"<span class=ccp_entity>&amp;$1;</span>");
var comment=/(&lt;\!--[\W _\w\=\"\'\.\/\;\:\)\(-]*--&gt;)/gi;
html=html.replace(comment,"<br><span class=ccp_htmlcomment>$1</span>");
html=html.replace(/_AT_/gi,"@");
html=html.replace(/_HASH_/gi,"#");
html=html.replace(/_PERC_/gi,"%");
return html;
}
