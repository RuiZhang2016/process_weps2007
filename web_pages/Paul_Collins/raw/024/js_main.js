function increaseTextSize(element, min, max) {
	var $currentSize = $jq(element).css("fontSize");
	$currentSize = $currentSize[0] + $currentSize[1];
	$currentSize++;
	if ($currentSize < min) $currentSize = min;
	if ($currentSize > max) $currentSize = min;
	$newSize = $currentSize + "px";
	$jq(element).css({fontSize: $newSize});
}

function getElem( idString ) {
	var obj = null;
	if ( document.getElementById ) {
		obj = document.getElementById( idString );
	} else if ( document.layers
	&& document.layers[idString] ) {
		obj = document.layers[idString]
	} else if ( document.all
	&& document.all[idString] ) {
		obj = document.all[idString]
	}
	return obj;
}

function showById(elementId) {
	getElem(elementId).style.display="block";
}

function hideById(elementId) {
	getElem(elementId).style.display="none";
}

function setStyle(element, styleAttribute, val) {
    if (element.style.setAttribute) {
        element.style.setAttribute(styleAttribute, val);
    } else {
        element.style[styleAttribute] = val;
    }
}

function toggleLayer(whichLayer)
{
	if (document.getElementById)
	{
		// this is the way the standards work
		var style2 = document.getElementById(whichLayer).style;
		style2.display = style2.display? "":"block";
	}
	else if (document.all)
	{
		// this is the way old msie versions work
		var style2 = document.all[whichLayer].style;
		style2.display = style2.display? "":"block";
	}
	else if (document.layers)
	{
		// this is the way nn4 works
		var style2 = document.layers[whichLayer].style;
		style2.display = style2.display? "":"block";
	}
}


function selectByValue(id,v)
{
	if( v == null ) return;
	e = document.getElementById(id).parentNode;
	for( var i=0; i < e.options.length; i++ )
	{
		if( e.options[i].value == v )
		{
			e.options[i].selected = true; break;
		}
	}
}

function parseQs()
{
	var qs    = new Array();
	if ( window.location.search && window.location.search.length )
	{
		var pairs = new Array();
		pairs = window.location.search.substring(1).split('&');
		for ( var i=0; i < pairs.length; i++ )
		{
			qs[ pairs[i].split('=')[0] ] = pairs[i].split('=')[1];
		}
	}
	return qs;
}

function isEmail(addy) {
	return /^\s*[A-Za-z\d][\w\.-]*@[\w-]+((\.[\w-]+)+)\s*$/.test(addy);
}

function article(newUrl)
{
	opener.window.location.href = newUrl;
}

function joe(newWin) {
	var joeWin=window.open(newWin,"","width=350, height=350, scrollbars=yes, menubar=no, resizable=yes");
	joeWin.focus();
	return;
}

function isUndefined(v) {
	var undef;
	return v===undefined;
}

/*
* Example:
* <a href="http://www.villagevoice.com/classifieds/oaefaq.php" onClick="popper(this,700,480,'scrollbars=1');return false;" target="winFAQ">
*
*/
function popper(src, w, h, features) {
	var _POPUP_FEATURES = 'location=0,statusbar=1,menubar=0';
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	if (isUndefined(features)) {
		features = _POPUP_FEATURES;
	}
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+','+features;
	win = window.open( src.getAttribute('href'), src.getAttribute('target') || '_blank', winprops);
	if (win && win.focus) { win.focus(); }
	return win;
}

function mp3popper(src) {
	popper(src,250,20,'scrollbars=0,status=0');
	return false;
}

function fixDate(date) {
	var base = new Date(0);
	var skew = base.getTime();
	if (skew > 0)
	date.setTime(date.getTime() - skew);
}

function setCookie(name, value, expires, path, domain, secure) {
	var curCookie = name + "=" + escape(value) +
	((expires) ? "; expires=" + expires.toGMTString() : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
	document.cookie = curCookie;
}

function getCookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else {
		begin += 2;
	}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1) end = dc.length;
	return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain) {
	if (getCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

function validateEmail(email, msg, optional)
{
	if (!email.value && optional)
	{
		return true;
	}
	var re_mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z])+$/;
	if (!re_mail.test(email.value))
	{
		alert(msg);
		email.focus();
		email.select();
		return false;
	}
	return true;
}

function val_generic_form(theForm,fieldArray)
{
	var x = 0;

	for(x=0;x<=fieldArray.length;x++)
	{
		if(!theForm.elements[fieldArray[x][0]].value)
		{
			alert("You need to fill in " + fieldArray[x][1]);
			return false;
		}

		if (fieldArray[x][2] && theForm.elements[fieldArray[x][0]].value.length > fieldArray[x][2])
		{
			alert("You are over the limit of " + fieldArray[x][2] + " characters. You typed " + theForm.elements[fieldArray[x][0]].value.length + " characters.");
			return false;
		}
	}
	return true;
}

function addLoadEvent(funcToAdd) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = funcToAdd;
	} else {
		window.onload = function() {
			oldonload();
			funcToAdd();
		}
	}
}

function getHost()
{
	var h = window.location.host.toString();
	if ( /^[\d\.]+$/.test(h) )
	{
		return h;
	}
	else
	{
		return window.location.host.match(/(\w+\.\w+)$/)[1];
	}
}

// 
//** Tab Content script- © Dynamic Drive DHTML code library (http://www.dynamicdrive.com)
//** Last updated: Nov 8th, 06

var enabletabpersistence=0 //enable tab persistence via session only cookies, so selected tab is remembered?

////NO NEED TO EDIT BELOW////////////////////////
var tabcontentIDs=new Object()

function expandcontent(linkobj){
var ulid=linkobj.parentNode.parentNode.id //id of UL element
var ullist=document.getElementById(ulid).getElementsByTagName("li") //get list of LIs corresponding to the tab contents
for (var i=0; i<ullist.length; i++){
ullist[i].className=""  //deselect all tabs
if (typeof tabcontentIDs[ulid][i]!="undefined") //if tab content within this array index exists (exception: More tabs than there are tab contents)
document.getElementById(tabcontentIDs[ulid][i]).style.display="none" //hide all tab contents
}
linkobj.parentNode.className="selected"  //highlight currently clicked on tab
document.getElementById(linkobj.getAttribute("rel")).style.display="block" //expand corresponding tab content
saveselectedtabcontentid(ulid, linkobj.getAttribute("rel"))
}

function expandtab(tabcontentid, tabnumber){ //interface for selecting a tab (plus expand corresponding content)
var thetab=document.getElementById(tabcontentid).getElementsByTagName("a")[tabnumber]
if (thetab.getAttribute("rel"))
expandcontent(thetab)
}

function savetabcontentids(ulid, relattribute){// save ids of tab content divs
if (typeof tabcontentIDs[ulid]=="undefined") //if this array doesn't exist yet
tabcontentIDs[ulid]=new Array()
tabcontentIDs[ulid][tabcontentIDs[ulid].length]=relattribute
}

function saveselectedtabcontentid(ulid, selectedtabid){ //set id of clicked on tab as selected tab id & enter into cookie
if (enabletabpersistence==1) //if persistence feature turned on
setCookie(ulid, selectedtabid)
}

function getullistlinkbyId(ulid, tabcontentid){ //returns a tab link based on the ID of the associated tab content
var ullist=document.getElementById(ulid).getElementsByTagName("li")
for (var i=0; i<ullist.length; i++){
if (ullist[i].getElementsByTagName("a")[0].getAttribute("rel")==tabcontentid){
return ullist[i].getElementsByTagName("a")[0]
break
}
}
}

function initializetabcontent(){
for (var i=0; i<arguments.length; i++){ //loop through passed UL ids
if (enabletabpersistence==0 && getCookie(arguments[i])!="") //clean up cookie if persist=off
setCookie(arguments[i], "")
var clickedontab=getCookie(arguments[i]) //retrieve ID of last clicked on tab from cookie, if any
var ulobj=document.getElementById(arguments[i])
var ulist=ulobj.getElementsByTagName("li") //array containing the LI elements within UL
for (var x=0; x<ulist.length; x++){ //loop through each LI element
var ulistlink=ulist[x].getElementsByTagName("a")[0]
if (ulistlink.getAttribute("rel")){
savetabcontentids(arguments[i], ulistlink.getAttribute("rel")) //save id of each tab content as loop runs
ulistlink.onclick=function(){
expandcontent(this)
return false
}
if (ulist[x].className=="selected" && clickedontab=="") //if a tab is set to be selected by default
expandcontent(ulistlink) //auto load currenly selected tab content
}
} //end inner for loop
if (clickedontab!=""){ //if a tab has been previously clicked on per the cookie value
var culistlink=getullistlinkbyId(arguments[i], clickedontab)
if (typeof culistlink!="undefined") //if match found between tabcontent id and rel attribute value
expandcontent(culistlink) //auto load currenly selected tab content
else //else if no match found between tabcontent id and rel attribute value (cookie mis-association)
expandcontent(ulist[0].getElementsByTagName("a")[0]) //just auto load first tab instead
}
} //end outer for loop
}

// 
//** Tab Content script- © Dynamic Drive DHTML code library (http://www.dynamicdrive.com)
//** Last updated: Nov 8th, 06
