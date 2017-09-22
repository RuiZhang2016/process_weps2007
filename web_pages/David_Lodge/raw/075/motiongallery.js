/***********************************************
* CMotion Image Gallery- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* Visit http://www.dynamicDrive.com for source code
* Last updated Mar 15th, 04'. Added "End of Gallery" message.
* This copyright notice must stay intact for legal use
***********************************************/

var restarea=6 //1) width of the "neutral" area in the center of the gallery in px
var maxspeed=7 //2) top scroll speed in pixels. Script auto creates a range from 0 to top speed.
var endofgallerymsg="<span style='font-size: 11px'>End of Gallery</span>" //3) message to show at end of gallery. Enter "" to disable message.

function enlargeimage(path, optWidth, optHeight){ //function to enlarge image. Change as desired.
var actualWidth=typeof optWidth!="undefined" ? optWidth : "600px" //set 600px to default width
var actualHeight=typeof optHeight!="undefined" ? optHeight : "500px" //set 500px to  default height
var winattributes="width="+actualWidth+",height="+actualHeight+",resizable=yes"
window.open(path,"", winattributes)
}

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

function creatediv(){
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
}

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
showhidediv("hidden")
}
else
showhidediv("visible")
}
lefttime=setTimeout("moveleft()",10)
}

function moveright(){
if (loadedyes){
movestate="right"
if (iedom&&parseInt(cross_scroll.style.left)<0){
cross_scroll.style.left=parseInt(cross_scroll.style.left)+scrollspeed+"px"
showhidediv("hidden")
}
else
showhidediv("visible")
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
crossmain=document.getElementById? document.getElementById("motioncontainer") : document.all.motioncontainer
menuwidth=parseInt(crossmain.style.width)
mainobjoffset=getposOffset(crossmain, "left")
cross_scroll=document.getElementById? document.getElementById("motiongallery") : document.all.motiongallery
actualwidth=document.all? cross_scroll.offsetWidth : document.getElementById("trueContainer").offsetWidth

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