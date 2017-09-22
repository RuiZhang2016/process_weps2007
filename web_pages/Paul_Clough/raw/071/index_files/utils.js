function debug(msg)
{
	var e = document.getElementById( "debug" );
	if( !e ) return;
	e.innerHTML = e.innerHTML + msg + "\n";
}

function addEvent(elm, evType, fn, useCapture)
// addEvent and removeEvent
// cross-browser event handling for IE5+,  NS6 and Mozilla
// By Scott Andrew
{
  if (elm.addEventListener){
    elm.addEventListener(evType, fn, useCapture);
    return true;
  } else if (elm.attachEvent){
    var r = elm.attachEvent("on"+evType, fn);
    return r;
  } else {
    alert("Handler could not be removed");
  }
}

function showTip(i)
{
	var ele = document.getElementById(i);
	if( ele )
		ele.style.display = 'block';
}

function hideTip(i)
{
	var ele = document.getElementById(i);
	if( ele )
		ele.style.display = 'none';
}

function ajaxOpen()
{
	var xmlHttp = false;
	if( window.XMLHttpRequest ) {
		try {
			xmlHttp = new XMLHttpRequest();
		} catch( e ) {
			xmlHttp = false;
		}
	} else if( window.ActiveXObject ) {
		try {
			xmlHttp = new ActiveXObject( "Msxml2.XMLHTTP" );
		} catch( e ) {
			try {
				xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );
			} catch( e ) {
				xmlHttp = false;
			}
		}
	}

	return xmlHttp;
}

/*************************************************************************
  This code is from Dynamic Web Coding at http://www.dyn-web.com/
  See Terms of Use at http://www.dyn-web.com/bus/terms.html
  regarding conditions under which you may use this code.
  This notice must be retained in the code as is!
*************************************************************************/

function getDocHeight(doc) {
  var docHt = 0, sh, oh;
  if (doc.height) docHt = doc.height;
  else if (doc.body) {
    if (doc.body.scrollHeight) docHt = sh = doc.body.scrollHeight;
    if (doc.body.offsetHeight) docHt = oh = doc.body.offsetHeight;
    if (sh && oh) docHt = Math.max(sh, oh);
  }
  return docHt;
}

function setIframeHeight(iframeName) {
  var iframeWin = window.frames[iframeName];
  var iframeEl = document.getElementById? document.getElementById(iframeName): document.all? document.all[iframeName]: null;
  if ( iframeEl && iframeWin ) {
    iframeEl.style.height = "auto"; // helps resize (for some) if new doc shorter than previous  
    var docHt = getDocHeight(iframeWin.document);
    // need to add to height to be sure it will all show
    if (docHt) iframeEl.style.height = docHt + 30 + "px";
  }
}

/* End of pasted code */

var rightArrow = '\u25BA';
var downArrow = '\u25BC';

function menuClick(menu_name, button_name)
{
	var menu = getMenu( menu_name );
	if( !menu )
		alert("Internal Error: " + menu_name + " is not a valid menu identity");
	var button = menu.getButton( button_name );
	if( !button )
		alert("Internal Error: " + button_name + " is not a valid button in " + menu_name);
	var buttons = menu.buttons();
	for(i = 0; i < buttons.length; i++)
	{
		var b = buttons[i];
		if( b.id == button.id )
			menuButtonOn( b );
		else
			menuButtonOff( b );
	}
	var submenus = menu.submenus();
	var subbutton;
	var submenu;
	for(var i = 0; i < submenus.length; i++)
	{
		var sm = submenus[i];
		if( sm.id == buttonName(button) + 'Menu' )
		{
			submenu = sm;
			subbutton = subMenuOn( sm );
		}
		else
			subMenuOff( sm );
	}
	/* If there's a submenu, don't do anything more */
	if( submenus.length > 0 )
	{
		/* Maybe load the page the active button referred to?
		 * (NB need to change subMenuOff below to do this) */
		if( subbutton )
			return menuClick( menuName(submenu), buttonName(subbutton) );
		else
			return;
	}
}

function _submenus()
{
	var buttons = this.buttons();
	var submenus = new Array();
	for(var i = 0; i < buttons.length; i++)
	{
		var sm = getMenu( buttonName(buttons[i]) );
		if( sm )
			submenus.push( sm );
	}
	return submenus;
}

function _listitems()
{
	return this.getElementsByTagName( 'li' );
}

function _buttons()
{
	return this.getElementsByTagName( 'a' );
}

function _getButton(name)
{
	return document.getElementById( name + 'MenuButton' );
}

function getMenu(name)
{
	var menu = document.getElementById( name + 'Menu' );
	if( !menu )
		return;
	menu.submenus = _submenus;
	menu.listitems = _listitems;
	menu.buttons = _buttons;
	menu.getButton = _getButton;
	return menu;
}

function menuName(ele)
{
	return ele.id.replace( /Menu$/, '' );
}

function buttonName(ele)
{
	return ele.id.replace( /MenuButton$/, '' );
}

function subMenuOn(ele)
{
	ele.style.display = 'block';
	var name = menuName( ele );
	var buttons = document.getElementsByName( name + 'MenuButton' );
	for(var i = 0; i < buttons.length; i++)
	{
		var b = buttons[i];
		if( b.className == 'menuOn' )
			return b;
	}
}

function subMenuOff(ele)
{
	ele.style.display = 'none';
	var buttons = ele.buttons();
	for(var i = 0; i < buttons.length; i++)
		menuButtonOff( buttons[i] );
}

function menuButtonOn(ele)
{
	ele.innerHTML = ele.innerHTML.replace( /\u25BA/, downArrow );
	ele.className = 'menuOn';
	ele.parentNode.className = 'menuOn';
}

function menuButtonOff(ele)
{
	ele.innerHTML = ele.innerHTML.replace( /\u25BC/, rightArrow );
	ele.className = '';
	ele.parentNode.className = '';
}
