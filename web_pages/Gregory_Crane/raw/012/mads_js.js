
function showPreviewArea(){
        
        document.getElementById('previewOfComment').style.display = 'block';
        document.getElementById('commentPreviewGraphic').style.display = 'block';
        toggleHelpText('helpText',1);
        }

function toggleHelpText(szDivID, iState) // 1 visible, 0 hidden
{
    if(document.layers)	   //NN4+
    {
       document.layers[szDivID].visibility = iState ? "show" : "hide";
    }
    else if(document.getElementById)	  //gecko(NN6) + IE 5+
    {
        var obj = document.getElementById(szDivID);
        obj.style.visibility = iState ? "visible" : "hidden";
    }
    else if(document.all)	// IE 4
    {
        document.all[szDivID].style.visibility = iState ? "visible" : "hidden";
    }
}

function replaceCarriageReturn(string,text,by) {
// Replaces text with by in string
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;

    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;

    var newstr = string.substring(0,i) + by;

    if (i+txtLength < strLength)
        newstr += replaceCarriageReturn(string.substring(i+txtLength,strLength),text,by);

    return newstr;
}


var str = "" + document.location;
if(str.indexOf("/calendar/confirm_event.html") != -1){
	changecss('.calendarEntryWrapDeadline','display','block');
}

function areCookiesEnabled(msg){
  if (document.cookie == "") {
	  document.write("<span class='smallText' style='color:red'>" + msg + " Cookies are not enabled!</span>");

  } 
}

/***********************************************
* Switch Content script- © Dynamic Drive (www.dynamicdrive.com)
* This notice must stay intact for legal use. Last updated Mar 23rd, 2004.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var enablepersist="on" //Enable saving state of content structure using session cookies? (on/off)
var collapseprevious="no" //Collapse previously open content when opening present? (yes/no)

var contractsymbol='<a class="viewMore">- View Less</a>' //HTML for contract symbol. For image, use: <img src="whatever.gif">
var expandsymbol='<a class="viewMore">+ View More</a>' //HTML for expand symbol.

var str = "" + document.location
if(str.indexOf("/calendar/add_event.html") == -1){
	enablepersist="off"
}


if (document.getElementById){
	document.write('<style type="text/css">')
	document.write('.switchcontent{display:none;}')
	document.write('</style>')
}

function getElementbyClass(rootobj, classname){
	var temparray=new Array()
	var inc=0
	for (i=0; i<rootobj.length; i++){
	if (rootobj[i].className==classname)
	temparray[inc++]=rootobj[i]
	}
	return temparray
}


function contractcontent(omit){
	var inc=0
	while (ccollect[inc]){
	if (ccollect[inc].id!=omit)
	ccollect[inc].style.display="none"
	inc++
	}
}

function expandcontent(curobj, cid){
	var spantags=curobj.getElementsByTagName("SPAN")
	var showstateobj=getElementbyClass(spantags, "showstate")
	if (ccollect.length>0){
	if (collapseprevious=="yes")
	contractcontent(cid)
	document.getElementById(cid).style.display=(document.getElementById(cid).style.display!="block")? "block" : "none"
	if (showstateobj.length>0){ //if "showstate" span exists in header
	if (collapseprevious=="no")
	showstateobj[0].innerHTML=(document.getElementById(cid).style.display=="block")? contractsymbol : expandsymbol
	else
	revivestatus()
	}
	}
}

function revivecontent(){
	contractcontent("omitnothing")
	selectedItem=getselectedItem()
	selectedComponents=selectedItem.split("|")
	for (i=0; i<selectedComponents.length-1; i++)
	document.getElementById(selectedComponents[i]).style.display="block"
}

function revivestatus(){
	var inc=0
	while (statecollect[inc]){
	if (ccollect[inc].style.display=="block")
	statecollect[inc].innerHTML=contractsymbol
	else
	statecollect[inc].innerHTML=expandsymbol
	inc++
	}
}

function get_cookie(Name) { 
	var search = Name + "="
	var returnvalue = "";
	if (document.cookie.length > 0) {
	offset = document.cookie.indexOf(search)
	if (offset != -1) { 
	offset += search.length
	end = document.cookie.indexOf(";", offset);
	if (end == -1) end = document.cookie.length;
	returnvalue=unescape(document.cookie.substring(offset, end))
	}
	}
	return returnvalue;
}

function getselectedItem(){
	if (get_cookie(window.location.pathname) != ""){
		selectedItem=get_cookie(window.location.pathname)
		return selectedItem
	}
	else
	return ""
}

function saveswitchstate(){
	var inc=0, selectedItem=""
	while (ccollect[inc]){
		if (ccollect[inc].style.display=="block")
		selectedItem+=ccollect[inc].id+"|"
		inc++
	}

	document.cookie=window.location.pathname+"="+selectedItem
}

function do_onload(){
	uniqueidn=window.location.pathname+"firsttimeload"
	var alltags=document.all? document.all : document.getElementsByTagName("*")
	ccollect=getElementbyClass(alltags, "switchcontent")
	statecollect=getElementbyClass(alltags, "showstate")
	
	if (enablepersist=="on" && ccollect.length>0){
		document.cookie=(get_cookie(uniqueidn)=="")? uniqueidn+"=1" : uniqueidn+"=0" 
		firsttimeload=(get_cookie(uniqueidn)==1)? 1 : 0 //check if this is 1st page load
		if (!firsttimeload)	revivecontent()
	}
	if (ccollect.length>0 && statecollect.length>0)
		revivestatus()
}

if (window.addEventListener) window.addEventListener("load", do_onload, false)
else if (window.attachEvent) window.attachEvent("onload", do_onload)
else if (document.getElementById) window.onload=do_onload

if (enablepersist=="on" && document.getElementById) window.onunload=saveswitchstate


function rolloverButton(id, state) {
  if (document.getElementById) {
    var element_id = document.getElementById(id);
	if (state == 'over') {
	  element_id.className = 'hoverNavigTab'
	}else{
	  element_id.className = 'navigTab'
	}
  }
}
function changecss(theClass,element,value) {
	//documentation for this script at http://www.shawnolson.net/a/503/
	 var cssRules;
	 if (document.all) {
	  cssRules = 'rules';
	 }
	 else if (document.getElementById) {
	  cssRules = 'cssRules';
	 }
	 for (var S = 0; S < document.styleSheets.length; S++){
	  for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
	   if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
	    document.styleSheets[S][cssRules][R].style[element] = value;
	   }
	  }
	 }	
	}
	
function pop(url,width,height){
   popup = window.open(url, 'popup', 'width=' + width + 
                       ',height=' + height + ',scrollbars=1,resizable=1,location=yes');
   popup.focus();
   return;
}



function redir(){
  document.redirform.submit();
}
function setCookie(name, val)
{
    //document.write(name)
	var exp = new Date();
	// 300 is number of days
	var cookieTimeToLive = exp.getTime() + (300 * 24 * 60 * 60 * 1000);
	exp.setTime(cookieTimeToLive);
	document.cookie = name + "=" + escape(val) + ";path=/;expires=" + exp.toGMTString();
	//location#references.reload()
	var str = location.toString();
	var index = str.indexOf("referencesOnPage");
        if(index != -1){
	        document.location=location;
	        document.location.reload();
        }else{
			var test=document.location + "?refresh=true" + "#referencesOnPage";
            document.location=test;
		}
}

function popUp(URL,w,h) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=0,resizable=1,width="+w+",height="+h+",left = 362,top = 234');");
}

function first() {
setTimeout('second()',(1000*10));
}
function second() {
tenSecsPassed=1;
}
var tenSecsPassed=0;
var errorStandard = 'You have already pressed the button once and the data you entered is on its way to our server.';
var errorNewsgroup = '\n\nBy pressing the button more than once you risk posting your message multiple times and thereby risk getting unpopular in the newsgroup.';
var errorPostcard = '\n\nBy pressing the button multiple times you risk sending multiple copies of the postcard to the recipient.';
var errorContact = '\n\nBy pressing the button multiple times you will send multiple copies of the data to me.';
var errorComment = '\n\nBy pressing the button multiple times your comment will appear multiple times.';
var errorStandardEnd = '\n\nIf, however, you are not receiving an answer from the server (it may be temporarily down), you should try again later or email your data directly to me at mads@interactiondesign.org\n\nIn 20 seconds you will be to press the button again.\n\nSorry for any inconvenience';
var errorMessage = '';
var submitcount=0;
function checkSubmit(errorType, myform) {
if (errorType == 'newsgroup'){
errorMessage = errorStandard  + errorNewsgroup + errorStandardEnd;
} else if(errorType == 'postcard'){
errorMessage = errorStandard  + errorPostcard + errorStandardEnd;
} else if(errorType == 'contact'){
errorMessage = errorStandard  + errorNewsgroup + errorStandardEnd;
}else if(errorType == 'comment'){
errorMessage = errorStandard  + errorComment + errorStandardEnd;
}

if (submitcount == 0){
submitcount++; 
tenSecsPassed=0
first();
return true; 
}
else { 
	if(tenSecsPassed == 1){
	tenSecsPassed=0
	alert('Your data will be re-submitted to the server.\n\nYour data may appear twice on the server now' ); return false; 
	myform.submit();
	}
	else {
	first();
	alert(errorMessage); 
	return false; 
	}
}
}

function r(red) {
    document.r.re.value = red;
    document.r.submit();
    return true;
} 
 

var testresult1;

function checkemailaddress(address){
	var filter=/^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (filter.test(address))
	testresult1=true
else{
	alert("You entered an invalid email asddress\n\nPlease enter a valid email address!")
	testresult1=false
}
return (testresult1)
}

