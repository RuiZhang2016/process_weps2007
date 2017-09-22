
var restarea=6
var maxspeed=7
var endofgallerymsg="" //3) message to show at end of gallery. Enter "" to disable message.


////NO NEED TO EDIT BELOW THIS LINE////////////

var iedom=document.all||document.getElementById
var scrollspeed=0
var movestate=""

var actualwidth=''
var cross_scroll, ns_scroll
var loadedyes=0

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

/*function creatediv(){
statusdiv=document.createElement("div")
statusdiv.setAttribute("id","statusdiv")
document.body.appendChild(statusdiv)
statusdiv=document.getElementById("statusdiv")
statusdiv.innerHTML=endofgallerymsg
}

function positiondiv(){
menuheight=parseInt(crossmain.offsetHeight)
mainobjoffsetH=getposOffset(crossmain, "top")
statusdiv.style.left=mainobjoffset+(menuwidth/2)-(statusdiv.offsetWidth/2)+"px"
statusdiv.style.top=menuheight+mainobjoffsetH+"px"
}*/

function showhidediv(what){
if (endofgallerymsg!="")
statusdiv.style.visibility=what
}

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft: what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function moveleft(){
if (loadedyes){
movestate="left"
if (iedom&&parseInt(cross_scroll.style.left)>(menuwidth-actualwidth)){
cross_scroll.style.left=parseInt(cross_scroll.style.left)-scrollspeed+"px"
/*showhidediv("hidden")*/
}
/*
else
showhidediv("visible")*/
}
lefttime=setTimeout("moveleft()",10)
}

function moveright(){
if (loadedyes){
movestate="right"
if (iedom&&parseInt(cross_scroll.style.left)<0){
cross_scroll.style.left=parseInt(cross_scroll.style.left)+scrollspeed+"px"
/*showhidediv("hidden")*/
}
/*else
showhidediv("visible")*/
}
righttime=setTimeout("moveright()",10)
}

function motionengine(e){
var dsocx=(window.pageXOffset)? pageXOffset: ietruebody().scrollLeft;
var dsocy=(window.pageYOffset)? pageYOffset : ietruebody().scrollTop;
var curposy=window.event? event.clientX : e.clientX? e.clientX: ""
curposy-=mainobjoffset-dsocx
var leftbound=(menuwidth-restarea)/2
var rightbound=(menuwidth+restarea)/2
if (curposy>rightbound){
scrollspeed=(curposy-rightbound)/((menuwidth-restarea)/2) * maxspeed
if (window.righttime) clearTimeout(righttime)
if (movestate!="left") moveleft()
}
else if (curposy<leftbound){
scrollspeed=(leftbound-curposy)/((menuwidth-restarea)/2) * maxspeed
if (window.lefttime) clearTimeout(lefttime)
if (movestate!="right") moveright()
}
else
scrollspeed=0
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function stopmotion(e){
if ((window.event&&!crossmain.contains(event.toElement)) || (e && e.currentTarget && e.currentTarget!= e.relatedTarget && !contains_ns6(e.currentTarget, e.relatedTarget))){
if (window.lefttime) clearTimeout(lefttime)
if (window.righttime) clearTimeout(righttime)
movestate=""
}
}

function fillup(){
if (iedom){
crossmain=document.getElementById? document.getElementById("ninersBox") : document.all.ninersBox
menuwidth=parseInt(crossmain.style.width)
mainobjoffset=getposOffset(crossmain, "left")
cross_scroll=document.getElementById? document.getElementById("ninersMove") : document.all.ninersMove
actualwidth=document.all? cross_scroll.offsetWidth : document.getElementById("ninersIn").offsetWidth

crossmain.onmousemove=function(e){
motionengine(e)
}

crossmain.onmouseout=function(e){
stopmotion(e)
showhidediv("hidden")
}
}
loadedyes=1
if (endofgallerymsg!=""){
creatediv()
positiondiv()
}
}
window.onload=fillup