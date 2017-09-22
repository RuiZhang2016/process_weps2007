/*droppingText0416_1611 
revisions: jiggleText(); alexEffect(); droppingTextMaster();droppingTextSlave(); textEFX()*/
var j = new Array();
function textEFX() { 
droppingTextMaster.dropWordArray = new Array()
jiggleText.jiggleTextArray = new Array()
alexEffectMaster.alexEffectArray = new Array()
var spanElementsArray = document.getElementsByTagName('span');
var numSpanElements = spanElementsArray.length
for (var i = 0; i < numSpanElements; i++) {
if (spanElementsArray[i].id && document.getElementById) { // only for elements with id names -- catches Safari bug
var speed = null
if ((spanElementsArray[i].id).search("slothful") != -1)
speed = "slothful"
else if ((spanElementsArray[i].id).search("slow") != -1)
speed = "slow"
else if ((spanElementsArray[i].id).search("fast") != -1)
speed = "fast"
else if ((spanElementsArray[i].id).search("exuberant") != -1)
speed = "exuberant"
else
speed = "medium"
if ((spanElementsArray[i].id).search("none") != -1) {
spanElementsArray[i].style.visibility = "visible";
} 
if ((spanElementsArray[i].id).search("expand") != -1) {
spanElementsArray[i].style.visibility = "visible";
j[j.length] = spanElementsArray[i];
} 
if ((spanElementsArray[i].id).search("jiggle") != -1) {
var jiggleSpeed = null;
switch(speed) {
case 'slothful':
jiggleSpeed = 200;
break;
case 'slow':
jiggleSpeed = 100;
break;
case 'medium':
jiggleSpeed = 60;
break;
case 'fast':
jiggleSpeed = 30;
break;
case 'exuberant':
jiggleSpeed = 10;
break;
}
jiggleText.jiggleTextArray[jiggleText.jiggleTextArray.length] = new Array(spanElementsArray[i],jiggleSpeed,jiggleSpeed,0,2);
spanElementsArray[i].style.position = "relative"
spanElementsArray[i].style.visibility = "visible"	
} 			
if ((spanElementsArray[i].id).search("alexEffect") != -1) {
var alexSpeed = null;
switch(speed) {
case 'slothful':
alexSpeed = 2;
break;
case 'slow':
alexSpeed = 5;
break;
case 'medium':
alexSpeed = 10;
break;
case 'fast':
alexSpeed = 20;
break;
case 'exuberant':
alexSpeed = 30;
break;
}
alexEffectMaster.alexEffectArray[alexEffectMaster.alexEffectArray.length] = new Array(spanElementsArray[i],alexSpeed);
spanElementsArray[i].style.visibility = "visible";
} else if ((spanElementsArray[i].id).search("dropWord") != -1) {
var dropSpeed = null;
switch(speed) {
case 'slothful':
dropSpeed = 5;
break;
case 'slow':
dropSpeed = 20;
break;
case 'medium':
dropSpeed = 40;
break;
case 'fast':
dropSpeed = 60;
break;
case 'exuberant':
dropSpeed = 80;
break;
}
if ((spanElementsArray[i].id).search("bottom") != -1){ 	
var browserName=navigator.appName; 
if (browserName=="Netscape") //disable "fly from bottom" effect  for  netscape browsers (incompatible at this time)
{ 
spanElementsArray[i].style.visibility = "visible";
}
else {
droppingTextMaster.dropWordArray[droppingTextMaster.dropWordArray.length] = new Array(spanElementsArray[i],"bottom",20,3,dropSpeed);
}
}
else if ((spanElementsArray[i].id).search("left") != -1) 
droppingTextMaster.dropWordArray[droppingTextMaster.dropWordArray.length] = new Array(spanElementsArray[i],"left",20,3,dropSpeed);
else if ((spanElementsArray[i].id).search("right") != -1) 
droppingTextMaster.dropWordArray[droppingTextMaster.dropWordArray.length] = new Array(spanElementsArray[i],"right",20,3,dropSpeed);
else if ((spanElementsArray[i].id).search("random") != -1){ 
var browserName=navigator.appName; 
if (browserName=="Netscape") //disable "random" effect for  netscape browsers (incompatible at this time)
{ 
spanElementsArray[i].style.visibility = "visible";
}
else {
droppingTextMaster.dropWordArray[droppingTextMaster.dropWordArray.length] = new Array(spanElementsArray[i],"random",20,3,dropSpeed);
}
}
else
droppingTextMaster.dropWordArray[droppingTextMaster.dropWordArray.length] = new Array(spanElementsArray[i],"top",20,3,dropSpeed); // default
} 
} else
spanElementsArray[i].style.visibility = "visible";
} 			
expandText(-20);
Blink()
alexEffectMaster()
droppingTextMaster()	
jiggleText()
Marquee()
}
// parameters used to set jiggleText.jiggleTextArray
// 0: element
// 1: jiggle repeat (ms)
// 2: used as a counter -- set to same as jiggle speed
// 3: used to track offset -- set to zero
// 4: jiggle amount
// jiggleText() is a function that calls itself repeatedly to make text elements jiggle back and forth.
// An array of all the elements to jiggle is cycled through each time jiggleText is called.	   
function jiggleText() {
jiggleText.jiggleTextArray
var refreshSpeed = 10 // base refresh spped
var numSentences = jiggleText.jiggleTextArray.length
for (var i=0; i < numSentences; i++ ) { // Cycles through each sentence
var currElement = jiggleText.jiggleTextArray[i][0] // Sets current element
if (jiggleText.jiggleTextArray[i][2] <= 0) { // if time for jiggling
if (jiggleText.jiggleTextArray[i][3] != 0) { // if current offset is non-zero
jiggleText.jiggleTextArray[i][3] = 0 //set offset to zero
currElement.style.left = jiggleText.jiggleTextArray[i][3]
} else { // if current offset is zero
jiggleText.jiggleTextArray[i][3] = jiggleText.jiggleTextArray[i][4] // reset offset to base
currElement.style.left = jiggleText.jiggleTextArray[i][3]
}
jiggleText.jiggleTextArray[i][2] = jiggleText.jiggleTextArray[i][1]; // reset countdown
} else 
jiggleText.jiggleTextArray[i][2] = jiggleText.jiggleTextArray[i][2] - refreshSpeed // decrease countdown
}	
setTimeout("jiggleText();",refreshSpeed)
}
function alexEffectMaster() {
alexEffectMaster.alexEffectArray
alexEffectMaster.numSentences = alexEffectMaster.alexEffectArray.length
for (var i=0; i < alexEffectMaster.numSentences; i++ ) {
var letters = alexEffectMaster.alexEffectArray[i][0].innerHTML.split("")
var numLetters = letters.length	
alexEffectMaster.alexEffectArray[i][2] = numLetters
for (var j=0; j<numLetters; j++) 
letters[j] = "<span style=\"position:relative;top:0;left:0;\" id=\"alex"+normNum(i,3)+normNum(j,3)+"\">" +  letters[j] + "<\/span>"			
alexEffectMaster.alexEffectArray[i][0].innerHTML = letters.join("")	
for (var j=0; j<numLetters; j++) {
var moveThisCharVal = "alex" + normNum(i,3) + normNum(j,3)
var moveThisChar = document.getElementById(moveThisCharVal)
var moveToCharVal = ""
var check2 = true
while (check2 == true ) {
moveToCharVal = "alex" + normNum(i,3) + normNum(Math.round(Math.random() * (numLetters-1)),3)
if (moveToCharVal != moveThisCharVal)
check2 = false
}
var moveToChar = document.getElementById(moveToCharVal)
var holdX = getAbsX(moveThisChar)
var holdX2 = getAbsX(moveToChar)
var moveVal = holdX2 - holdX
moveThisChar.style.left = parseInt(moveThisChar.style.left) + moveVal				
moveToChar.style.left = parseInt(moveToChar.style.left) - moveVal	
}	
}
alexEffectSlave()
return 0;
}
function alexEffectSlave() {	
var check = 0;
for (var i=0; i < alexEffectMaster.numSentences; i++ ) {	
var letters = alexEffectMaster.alexEffectArray[i][2]
var stepSize = alexEffectMaster.alexEffectArray[i][1]
for (var j=0; j < letters; j++) {
var currElement = document.getElementById("alex" + normNum(i,3) + normNum(j,3))
var currOffsetHorizontal = parseInt(currElement.style.left)
// Horizontal Offset
if (currOffsetHorizontal != 0) { // if horizontal offset is non-zero, adjust offset toward zero
if (currOffsetHorizontal < -(2*stepSize))
currElement.style.left = currOffsetHorizontal + (2*stepSize)
else if (currOffsetHorizontal < -stepSize)
currElement.style.left = currOffsetHorizontal + stepSize
else if (currOffsetHorizontal > (2*stepSize))
currElement.style.left = currOffsetHorizontal - (2*stepSize)
else if (currOffsetHorizontal > stepSize)
currElement.style.left = currOffsetHorizontal - stepSize
else
currElement.style.left = 0 // ensures that text is not moved too far
//if (ieWorkaround == true)
//currElement.innerHTML = currElement.innerHTML
}
if (check == 0)				
if (parseInt(currElement.style.left) != 0)
check++	// if any one letter is still non, zero, modify check
}
}
if (check > 0)
setTimeout("alexEffectSlave();",5)
return 0;
}
// Simple browser detection for IE. IE has a flaw drawing re-positioned elements -- 
// the workaround substantially increases the work done by the script, so we detect it here
// and skip the workaround for all other browsers.
var browserVersion = navigator.appVersion
var ieWorkaround = false
if (browserVersion.search("MSIE") != -1)
ieWorkaround = true
// Adds leading zeros to the beginning of a number
function normNum(original,numDigits) {
var tempLength = original.toString().length
while ( tempLength < numDigits ) {	
original = "0" + original
tempLength++
}	
return(original)
}
// This function re-formats the SPAN elements from the dropWordArray, slicing the sentence
// apart and making each word addressable through a unique id. It sets the initial position
// of all the words, makes them visible, and calls droppingTextSlave(), initiating the
// motion.
// Options for textDirection: top, bottom, left, right, random
// textStaggeringFactor & textDecay factor take any number. 0-3 or so look good, anything beyond wasteful
function droppingTextMaster() {
// Browser width and height
var pageHeight = findPageHeight();
var pageWidth = findPageWidth();
droppingTextMaster.dropWordArray // An array containing all the sentences
droppingTextMaster.allElements = new Array(); // A list of names of all elements to be moved	
var numSentences = droppingTextMaster.dropWordArray.length // Number of sentences to be split
for (var i=0; i < numSentences; i++ ) { // Cycles through each sentence
var text = ""
var prelim = (droppingTextMaster.dropWordArray[i][0].innerHTML).replace(/ \/>/g, "\>") // for pesky fulfillment people who use html
var words = prelim.split(' ');
for (var j=0; j<words.length; j++) { // loop through each word of the sentence and format new sentence	
text = text + "<span style=\"position:relative;top:0;\" id=\"drop"+normNum(i,3)+normNum(j,3)+"\"> " + words[j] + " <\/span>"
var newPos = droppingTextMaster.allElements.length
droppingTextMaster.allElements[newPos] = new Array()
droppingTextMaster.allElements[newPos][0] = "drop" + normNum(i.toString(),3) + normNum(j.toString(),3) // puts the name of every word
droppingTextMaster.allElements[newPos][1] = droppingTextMaster.dropWordArray[i][4] // into allElements array
}
droppingTextMaster.dropWordArray[i][0].innerHTML = text // commit re-formatted sentence
var wordsInSentence = words.length		
var currStyle = droppingTextMaster.dropWordArray[i][1]
var currStagger = droppingTextMaster.dropWordArray[i][2]
var currDecay = droppingTextMaster.dropWordArray[i][3]
for ( var j=0; j < wordsInSentence; j++) { // cycles through each word of the sentence
var currElement = document.getElementById("drop" + normNum(i.toString(),3) + normNum(j.toString(),3))
if ( currStyle == "top" )
currElement.style.top = -(getAbsY(currElement) + 80) + (j*-currStagger) + (j*j*-currDecay) + (i*-50) // sets position
else if ( currStyle == "bottom" )
currElement.style.top = pageHeight - getAbsY(currElement) + 20 + (j*currStagger) + (j*j*currDecay) + (i*50)
else if ( currStyle == "right" )
currElement.style.left = pageWidth + 20 + (j*currStagger) + (j*j*currDecay) 
else if ( currStyle == "left" )
currElement.style.left = -(getAbsX(currElement) + (j*currStagger) + (j*j*currDecay))
else if ( currStyle == "random" ) {
currElement.style.top = (pageHeight * Math.random()) - getAbsY(currElement)
currElement.style.left = (pageWidth * Math.random() ) - getAbsX(currElement)
}	
if ( ieWorkaround == true )
currElement.innerHTML = currElement.innerHTML
currElement.style.visibility = "visible" // make element visible		
}
}		
droppingTextSlave()
return 0;
}
// This function moves offset elements back to their original position.
function droppingTextSlave() {
var check = 0 
var numElements = droppingTextMaster.allElements.length
for (var i=0; i < numElements ; i++) { // cycles through all the words
var stepSize = droppingTextMaster.allElements[i][1]
var currElement = document.getElementById(droppingTextMaster.allElements[i][0])
var currOffsetVertical = parseInt(currElement.style.top)
var currOffsetHorizontal = parseInt(currElement.style.left)
// Vertical Offset
if (currOffsetVertical != 0) { // if vertical offset is non-zero, adjust offset toward zero
if (currOffsetVertical < -stepSize)
currElement.style.top = currOffsetVertical + stepSize
else if (currOffsetVertical > stepSize)
currElement.style.top = currOffsetVertical - stepSize
else
currElement.style.top = 0 // ensures that text is not moved too far
if (ieWorkaround == true)
currElement.innerHTML = currElement.innerHTML
if (check == 0)				
if (parseInt(currElement.style.top) != 0)
check++	// if any one word is still non, zero, modify check
}
// Horizontal Offset
if (currOffsetHorizontal != 0) { // if horizontal offset is non-zero, adjust offset toward zero
if (currOffsetHorizontal < -stepSize)
currElement.style.left = currOffsetHorizontal + stepSize
else if (currOffsetHorizontal > stepSize)
currElement.style.left = currOffsetHorizontal - stepSize
else
currElement.style.left = 0 // ensures that text is not moved too far
if (ieWorkaround == true)
currElement.innerHTML = currElement.innerHTML
if (check == 0)				
if (parseInt(currElement.style.left) != 0)
check++	// if any one word is still non, zero, modify check
}
}
if (check > 0)
setTimeout("droppingTextSlave();",50) // calls itself if any words are not zeroed
return 0;
}
// get the true offset of anything on NS4, IE4/5 & NS6
function getAbsX(elt) { 
return (elt.x) ? elt.x : getAbsPos(elt,"Left"); 
}
function getAbsY(elt) { 
return (elt.y) ? elt.y : getAbsPos(elt,"Top"); 
}
function getAbsPos(elt,which) {
iPos = 0;
while (elt != null) {
iPos += elt["offset" + which];
elt = elt.offsetParent;
}
return iPos;
}
// returns the page width / height
function findPageHeight() {
if (window.innerHeight != null )
return window.innerHeight;
if (document.body.clientHeight != null )
return document.body.clientHeight;
return(null);
}
function findPageWidth() {
if (window.innerWidth != null )
return window.innerWidth;
if (document.body.clientWidth != null )
return document.body.clientWidth;
return(null);
}
function expandText(amount) {
amount++;
for (var i=0; i< j.length ; i++)		
j[i].style.letterSpacing = amount;
if (amount < 0) {
setTimeout("expandText(" + amount + ");",50);
}
return 0;
}
/*This function sorts <Blink> elements by tag name and searches by ID's to determine speed. Blink() then passes the appropriate elements to doBlink(). doBlink() threads are activated at specified intervals for each speed.*/ 
function Blink() {
var a = document.getElementsByTagName('blink');
if(document.getElementById){	
for (var i=0; i< a.length; i++) {
if (a[i].id) {		
if ((a[i].id).search("slothful") != -1){
eval('setInterval("doBlink(' + i + ')",2000)');
}	
else if ((a[i].id).search("slow") != -1){
eval('setInterval("doBlink(' + i + ')",1000)');
}
else if ((a[i].id).search("medium") != -1){
eval('setInterval("doBlink(' + i + ')",500)');
}  
else if ((a[i].id).search("fast") != -1){
eval('setInterval("doBlink(' + i + ')",250)');
}
else if ((a[i].id).search("exuberant") != -1){
eval('setInterval("doBlink(' + i + ')",100)');
}
}
}
}
}	
/*This function recieves elements from Blink() and alternates visibility */
function doBlink(index)
{
var a = document.getElementsByTagName('blink');
if (a[index].style.visibility == "hidden")
a[index].style.visibility = "visible";
else
a[index].style.visibility = "hidden";
}
/*This function sorts marquee elements by tag Name, and serches the ID array for keywords to determine speed. Loops for each speed setting adjust scrollAmmount and scrollDelay for browsers which support marquees.*/
function Marquee() {
if(document.getElementById)
{
var obj = document.getElementsByTagName("marquee");
for (var i=0; i< obj.length; i++)
{  
obj[i].style.visibility="visible";
if ((obj[i].id).indexOf("slothful") != -1)
obj[i].scrollAmount=1;
else if ((obj[i].id).indexOf("slow") != -1)
obj[i].scrollAmount=10;
else if ((obj[i].id).indexOf("fast") != -1)
obj[i].scrollAmount=30;
else if ((obj[i].id).indexOf("exuberant") != -1)
obj[i].scrollAmount=75;
}
}
}	
