// Exit Application

var RunExitApp;
var PopUpsEnabled;

RunExitApp = true;
PopUpsEnabled = true;

function addEvent(obj, evType, fn, useCapture) 
{
	if (obj.addEventListener) 
	{
		obj.addEventListener(evType, fn, useCapture);
		return true;
    } 
    else if (obj.attachEvent) 
    {
		var r = obj.attachEvent("on"+evType, fn);
		return r;
	}
}

function addNoEaEvents() 
{
	// this is for A tags
	var anchors = document.getElementsByTagName('a');
	for (var i=0;i<anchors.length;i++) 
	{
		var theAnchor = anchors[i];
		if (theAnchor.className != 'eaDisabled') 
		{
			addEvent(theAnchor, 'click', noEA, false);
		}
	}
	// this is for Forms
	var forms = document.getElementsByTagName('form');
	for (var i=0;i<forms.length;i++) 
	{
		var theForm = forms[i];
		if (theAnchor.className != 'eaDisabled') 
		{
			addEvent(theForm, 'click', noEA, false);
		}
	}
}

function noEA()
{
	RunExitApp = false;
}

function unLoadActivity()
{

    //alert("unLoadActivity function is running");
	var ea_path;
	ea_path = '/ExitApp/Window.aspx';
	//ea_path +='?ExitAdSource='+ ExitAdSource;
	var ea_left = screen.width-5;
	var ea_top  = screen.height-5;
	
	//Check exit ad cookie
	//Note: exit ad cookie is a session cookie created below when the exit ad is created.
	//We only want one exit ad per IIS session, so if the cookie exists, bypass putting the javascript into the page.
	if (RunExitApp==true)
	{
		var cookie_data;
		cookie_data = readCookieEA('ExitAdEncy');
		if (cookie_data)
		{
			RunExitApp = false;
		}
	}

	//Create window
	if (RunExitApp==true)
	{
		var winfeatures = 'width=720,height=300,scrollbars=0,resizable=0,toolbar=0,location=0,menubar=0,status=0,directories=0';
		var exitAppWindow = window.open(ea_path,"ExitApp",winfeatures);
		if (ExitAdType =='POPUNDER')
		{
			exitAppWindow.blur();
			window.focus(); 
		}
		//Create exit ad cookie - we don't need the cookie anymore 
		//Note: exit ad cookie is a session cookie created below when the exit ad is created.
		//We only want one exit ad per IIS session, so if the cookie exists, bypass putting the javascript into the page.
		createCookieEA('ExitAdEncy','x',0);
	}
	
	return true;
}

function createCookieEA(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
  } else expires = "";

   document.cookie = name + "=" + value+expires + "; path=/";
}

function readCookieEA(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function onLoadActivity()
{
    addNoEaEvents();
}

//Ads a function to the onload process.  Note that if an onload function already exists that this 
//function will supplement the function with this one thus creating a new onload process that 
//includes both functions.  This prevents one onload from overriding another.
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

//Ads a function to the onunload process.  Note that if an onunload function already exists that this 
//function will supplement the function with this one thus creating a new onload process that 
//includes both functions.  This prevents one onunload from overriding another.
function addUnLoadEvent(func) {
  var oldonunload = window.onunload;
  if (typeof window.onunload != 'function') {
    window.onunload = func;
  } else {
    window.onunload = function() {
      oldonunload();
      func();
    }
  }
}

// Attach our required events
addUnLoadEvent(unLoadActivity);
addLoadEvent(onLoadActivity);