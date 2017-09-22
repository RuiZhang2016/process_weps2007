var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var enableanchorlink=1 //Enable or disable the anchor link when clicked on? (1=e, 0=d)
var hidemenu_onclick=1 //hide menu when user clicks within menu? (1=yes, 0=no)
var SelectTags = document.getElementsByTagName('select');
var tablocation='/i/if/cat/tabs/'

/////No further editting needed

var version=0
if (navigator.appVersion.indexOf("MSIE")!=-1){
temp=navigator.appVersion.split("MSIE")
version=parseFloat(temp[1])
}
var ie5=document.all
var ns6=document.getElementById&&!document.all
var netscape=navigator.vendor=="Netscape";
var safari=(navigator.userAgent.indexOf('Safari')!=-1)?true:false;

function getposOffset(what, offsettype, offsetTopFix){
  var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
  var parentEl=what.offsetParent;
  if (netscape && offsetTopFix>0) {
    offsetTopFix+=13;
  }
  if(safari && offsetTopFix>0) {
    offsetTopFix+=2;
  }
  while (parentEl!=null){
    if (ie5) {
      totaloffset=(offsettype=="left" )? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
    }
    else {
      totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop+offsetTopFix;
    }
    (offsettype=="left") ? leftOffset=parentEl.offsetLeft : topOffset=parentEl.offsetTop;
    parentEl=parentEl.offsetParent;
  }
  if (ie5 && (version<7)){
   if (offsettype=="left") totaloffset -= leftOffset;
  }
  if (ie5){
   if (offsettype=="left") totaloffset += 1;
  }
  return totaloffset;
}

function showhide(obj, e, visible, hidden){
  if (ie5||ns6)
    dropmenuobj.style.left=dropmenuobj.style.top=-500
    if (ie5) {
      for (var counter=0; counter<SelectTags.length; counter++) {
        SelectTags[counter].style.visibility = 'hidden';
      }
    }
  if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
    obj.visibility=visible
  else if (e.type=="click")
    obj.visibility=hidden
}

function iecompattest(){
  return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
  var edgeoffset=0
  if (whichedge=="rightedge"){
    var windowedge=ie5 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
    dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
    if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
      edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
  }
  return edgeoffset
}

function dropdownmenu(obj, e, dropmenuID, offsetTopFix, currentID){
  var menuSwap = 0;
  if(typeof(offsetTopFix)=="undefined"){
    var offsetTopFix = 8;
  }
  if (window.event) event.cancelBubble=true
  else if (e.stopPropagation) e.stopPropagation()
  if (typeof dropmenuobj!="undefined") //hide previous menu
    dropmenuobj.style.visibility="hidden"
  if (typeof dropmenuname!="undefined") { //deselect previous tab
    if (dropmenucat!=currentID)
      var menuSwap=1;
    if (menuSwap) {
      swapTab(dropmenuname, dropmenucat, 0)
    }
  }
  clearhidemenu()
  if (ie5||ns6){
    obj.onmouseout=delayhidemenu
    dropmenucat=dropmenuID;
    dropmenuobj=document.getElementById(dropmenuID+'Drop')
    dropmenuname=document.getElementById(dropmenuID+'Nav')
    if (hidemenu_onclick) dropmenuobj.onclick=function(){dropmenuobj.style.visibility='hidden'}
    dropmenuobj.onmouseover=clearhidemenu
    dropmenuobj.onmouseout=ie5? function(){ dynamichide(event,menuSwap)} : function(event){ dynamichide(event,menuSwap)}
    showhide(dropmenuobj.style, e, "visible", "hidden")
    dropmenuobj.x=getposOffset(obj, "left", offsetTopFix)
    dropmenuobj.y=getposOffset(obj, "top", offsetTopFix)
    dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
    dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
    swapTab(dropmenuname, dropmenuID, 1)
  }
  return clickreturnvalue()
}

function clickreturnvalue(){
  if ((ie5||ns6) && !enableanchorlink) return false
  else return true
}

function contains_ns6(a, b) {
  while (b.parentNode)
  if ((b = b.parentNode) == a)
    return true;
  return false;
}

function dynamichide(e,doSwap){
  if (ie5&&!dropmenuobj.contains(e.toElement))
    delayhidemenu(doSwap)
  else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
    delayhidemenu(doSwap)
}

function delayhidemenu(doSwap){
  delayhide=setTimeout("dropmenuobj.style.visibility='hidden'",disappeardelay)
  if (doSwap)
    delayshow=setTimeout("swapTab(dropmenuname,dropmenucat,0)",disappeardelay)
  if (ie5) delayform=setTimeout("for (var counter=0; counter<SelectTags.length; counter++) { SelectTags[counter].style.visibility = 'visible' }",disappeardelay)
}

function clearhidemenu(){
  if (typeof delayhide!="undefined")
    clearTimeout(delayhide)
  if (typeof delayshow!="undefined")
    clearTimeout(delayshow)
  if (typeof delayform!="undefined")
    clearTimeout(delayform)
}

function swapTab(obj,imgID,state) {
  if (state) {
    imgExt = '_u'
  }
  else {
    imgExt = '_d'
  }
  obj.src = tablocation+imgID+imgExt+'.gif';
}

function trackHeaderLink(target, deptId){
    if(target.indexOf("?") == -1) {
        document.location = target+"?fromPageCatId="+deptId;
    }else {
        document.location = target+"&fromPageCatId="+deptId;
    }
}
