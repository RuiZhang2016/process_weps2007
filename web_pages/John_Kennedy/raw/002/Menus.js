/*==== START SNIFFER, see: http://www.webreference.com/tools/browser/javascript.html for revisions  ====*/
	/* NOTE: this browser sniffer has been chosen due to its wide-use and
	 * frequent updates. It has been well tested and is free. It can be stripped
	 * down further if size is an issue, but this will need to be done to any updates
	 * as well.
	 */

		// JavaScript Browser Sniffer
		// Eric Krok, Andy King, Michel Plungjan
		// see http://www.webreference.com/ for more information
		//
		// This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
		//
		// please send any improvements to aking@internet.com and we'll roll the best ones in
		//

		var agt=navigator.userAgent.toLowerCase();
		var appVer = navigator.appVersion.toLowerCase();
		var is_minor = parseFloat(appVer);
		var is_major = parseInt(is_minor);
		var is_opera = (agt.indexOf("opera") != -1);
		var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
		var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
		var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
		var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
		var is_opera6 = (agt.indexOf("opera 6") != -1 || agt.indexOf("opera/6") != -1);
		var is_opera7 = (agt.indexOf("opera 7") != -1 || agt.indexOf("opera/7") != -1);
		var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);
		var is_opera6up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4 && !is_opera5);
		var is_opera7up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4 && !is_opera5 && !is_opera6);
		var is_mac = (agt.indexOf("mac")!=-1);
		var iePos  = appVer.indexOf('msie');
		if (iePos !=-1) {
			if(is_mac) {
				var iePos = agt.indexOf('msie');
				is_minor = parseFloat(agt.substring(iePos+5,agt.indexOf(';',iePos)));
			}
			else is_minor = parseFloat(appVer.substring(iePos+5,appVer.indexOf(';',iePos)));
			is_major = parseInt(is_minor);
		}
		var is_konq = false;
		var kqPos   = agt.indexOf('konqueror');
		if (kqPos !=-1) {
			is_konq  = true;
			is_minor = parseFloat(agt.substring(kqPos+10,agt.indexOf(';',kqPos)));
			is_major = parseInt(is_minor);
		}
		var is_getElementById   = (document.getElementById) ? "true" : "false";
		var is_getElementsByTagName = (document.getElementsByTagName) ? "true" : "false";
		var is_documentElement = (document.documentElement) ? "true" : "false";
		var is_safari = ((agt.indexOf('safari')!=-1)&&(agt.indexOf('mac')!=-1))?true:false;
		var is_khtml  = (is_safari || is_konq);
		var is_gecko = ((!is_khtml)&&(navigator.product)&&(navigator.product.toLowerCase()=="gecko"))?true:false;
		var is_gver  = 0;
		if (is_gecko) is_gver=navigator.productSub;
		var is_moz   = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1) && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1) && (is_gecko) && ((navigator.vendor=="")||(navigator.vendor=="Mozilla")||(navigator.vendor=="Debian")));
		var is_fb = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1) && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1) && (is_gecko) && (navigator.vendor=="Firebird"));
		var is_fx = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1) && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1) && (is_gecko) && (navigator.vendor=="Firefox"));
		if ((is_moz)||(is_fb)||(is_fx)) {
		   var is_moz_ver = (navigator.vendorSub)?navigator.vendorSub:0;
		   if(!(is_moz_ver)) {
			   is_moz_ver = agt.indexOf('rv:');
			   is_moz_ver = agt.substring(is_moz_ver+3);
			   is_paren   = is_moz_ver.indexOf(')');
			   is_moz_ver = is_moz_ver.substring(0,is_paren);
		   }
		   is_minor = is_moz_ver;
		   is_major = parseInt(is_moz_ver);
		}
		var is_fb_ver = is_moz_ver;
		var is_fx_ver = is_moz_ver;
		var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1) && (!is_khtml) && (!(is_moz)) && (!is_fb) && (!is_fx));
		if ((navigator.vendor) && ((navigator.vendor=="Netscape6")||(navigator.vendor=="Netscape")) && (is_nav)) {
		   is_major = parseInt(navigator.vendorSub);
		   is_minor = parseFloat(navigator.vendorSub);
		}
		var is_nav2 = (is_nav && (is_major == 2));
		var is_nav3 = (is_nav && (is_major == 3));
		var is_nav4 = (is_nav && (is_major == 4));
		var is_nav4up = (is_nav && is_minor >= 4);
		var is_navonly = (is_nav && ((agt.indexOf(";nav") != -1) || (agt.indexOf("; nav") != -1)) );
		var is_nav6   = (is_nav && is_major==6);
		var is_nav6up = (is_nav && is_minor >= 6);
		var is_nav5   = (is_nav && is_major == 5 && !is_nav6);
		var is_nav5up = (is_nav && is_minor >= 5);
		var is_nav7   = (is_nav && is_major == 7);
		var is_nav7up = (is_nav && is_minor >= 7);
		var is_ie   = ((iePos!=-1) && (!is_opera) && (!is_khtml));
		var is_ie3  = (is_ie && (is_major < 4));
		var is_ie4   = (is_ie && is_major == 4);
		var is_ie4up = (is_ie && is_minor >= 4);
		var is_ie5   = (is_ie && is_major == 5);
		var is_ie5up = (is_ie && is_minor >= 5);
		var is_ie5_5  = (is_ie && (agt.indexOf("msie 5.5") !=-1));
		var is_ie5_5up =(is_ie && is_minor >= 5.5);
		var is_ie6   = (is_ie && is_major == 6);
		var is_ie6up = (is_ie && is_minor >= 6);
		var is_aol   = (agt.indexOf("aol") != -1);
		var is_aol3  = (is_aol && is_ie3);
		var is_aol4  = (is_aol && is_ie4);
		var is_aol5  = (agt.indexOf("aol 5") != -1);
		var is_aol6  = (agt.indexOf("aol 6") != -1);
		var is_aol7  = ((agt.indexOf("aol 7")!=-1) || (agt.indexOf("aol7")!=-1));
		var is_aol8  = ((agt.indexOf("aol 8")!=-1) || (agt.indexOf("aol8")!=-1));
		var is_webtv = (agt.indexOf("webtv") != -1);
		var is_TVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1));
		var is_AOLTV = is_TVNavigator;
		var is_hotjava = (agt.indexOf("hotjava") != -1);
		var is_hotjava3 = (is_hotjava && (is_major == 3));
		var is_hotjava3up = (is_hotjava && (is_major >= 3));
		if (is_nav6up) {
		   is_minor = navigator.vendorSub;
		}
		var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
		var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));
		var is_win16 = ((agt.indexOf("win16")!=-1) || (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("windows 16-bit")!=-1) );
		var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) || (agt.indexOf("windows 16-bit")!=-1));
		var is_winme = ((agt.indexOf("win 9x 4.90")!=-1));
		var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1) || (agt.indexOf("windows 2000")!=-1));
		var is_winxp = ((agt.indexOf("windows nt 5.1")!=-1) || (agt.indexOf("windows xp")!=-1));
		var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
		var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
		var is_win32 = (is_win95 || is_winnt || is_win98 || ((is_major >= 4) && (navigator.platform == "Win32")) || (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));
		var is_os2   = ((agt.indexOf("os/2")!=-1) || (navigator.appVersion.indexOf("OS/2")!=-1) || (agt.indexOf("ibm-webexplorer")!=-1));
		var is_mac    = (agt.indexOf("mac")!=-1);
		if (is_mac) { is_win = !is_mac; }
		var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) || (agt.indexOf("68000")!=-1)));
		var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) || (agt.indexOf("powerpc")!=-1)));


/*==== END SNIFFER ====*/

/** MenuRegistry()
 *  The constructor for the MenuRegistry.
 *  A default registry with name "menuRegistry" is created when this script is loaded.
 **/
function MenuRegistry() {
	this.registeredMenus = new Array();
	this.closeTimer = null;
}

	/** MenuRegistry.clearCloseTimer()
	 *  Stops any delayedClose() from occuring.
	 **/
	MenuRegistry.prototype.clearCloseTimer = function() {
		if( this.closeTimer ) {
			clearTimeout( this.closeTimer );
			this.closeTimer = null;
		}
	}

	/** MenuRegistry.position()
	 *  reposition all of the menus
	 **/
	MenuRegistry.prototype.position = function() {
		for( menuName in this.registeredMenus ) {
			this.registeredMenus[menuName].position();
		}
	}

	/** MenuRegistry.closeAll()
	 *  Closes all menus in the registry.
	 **/
	MenuRegistry.prototype.closeAll = function() {
		for( menuName in this.registeredMenus ) {
			this.registeredMenus[menuName].close();
		}
	}

	/** MenuRegistry.delayedClose()
	 *  Closes all menus after a delay of 500 milliseconds
	 **/
	MenuRegistry.prototype.delayedClose = function() {
		this.clearCloseTimer();
		this.closeTimer = setTimeout('top.menuRegistry.closeAll();', 500);
	}


	/** MenuRegistry.getMenu( string ):Menu
	 *  Gets a named menu from the registry.
	 **/
	MenuRegistry.prototype.getMenu = function( menuName ) {
		return this.registeredMenus[menuName];
	}

	/** MenuRegistry.open( string )
	 *  Opens the named menu.
	 **/
	MenuRegistry.prototype.open = function( menuName ) {
		this.clearCloseTimer();
		for( thisMenuName in this.registeredMenus ) {
			if( thisMenuName == menuName ) {
				this.registeredMenus[thisMenuName].position();
				this.registeredMenus[thisMenuName].open();
			} else {
				this.registeredMenus[thisMenuName].close();
			}
		}
	}

	/** MenuRegistry.register( Menu )
	 *  Registers a menu.
	 **/
	MenuRegistry.prototype.register = function( menu ) {
		this.registeredMenus[menu.name] = menu;
	}

menuRegistry = new MenuRegistry();



/** Menu( string, boolean )
 *  The constructor for Menu instances.
 *  The first parameter is the menu name.
 *  The second parameter determines whether this menu's button remains in
 *    the active state or gets a rollover state. (optional)
 **/
function Menu( menuName, isActive, alignRight ) {
	this.name = menuName;
	this.isActive = (isActive) ? true : false;
	this.alignRight = (alignRight) ? true : false;

	this.menuHeight = getElement("menuWrapper",frames[( this.name + "Frame" )].document).offsetHeight;

	this.defaultImgSrc = document.getElementById("Header_"+this.name).src;
	this.imgSrcPrefix = this.defaultImgSrc.substring( 0, this.defaultImgSrc.lastIndexOf("-")+1 );
	this.imgSrcSuffix = this.defaultImgSrc.substr( this.defaultImgSrc.lastIndexOf(".") );
	this.defaultButtonState = this.defaultImgSrc.substring( this.defaultImgSrc.lastIndexOf("-")+1, this.defaultImgSrc.lastIndexOf(".") );

	this.position();
}

	Menu.prototype.position = function() {
		// determine whether the menu actually exists
		var m = document.getElementById(this.name+"Menu");

		// get the menu positioning information
		var o = document.getElementById("Header_"+this.name);

		this.t = o.offsetTop;
		var l = 0;
		var h = o.offsetHeight;
		var w = o.offsetWidth;

		// recursively get the offset of parent elements
		do {
			o = o.offsetParent;
			this.t += o.offsetTop;
			l += o.offsetLeft;
		} while( o.tagName != "BODY" );

		// position the menu
		m.style.top = (this.t+h)+"px";
		m.style.left = ( this.alignRight ) ? (l + w - m.offsetWidth + 1)+"px" : m.style.left = (l)+"px";
	}

	/** Menu.close()
	 *  Closes this menu
	 **/
	Menu.prototype.close = function() {
		this.getLayer().style.visibility = "hidden";
		document.getElementById("Header_"+this.name).src = this.imgSrcPrefix + this.defaultButtonState + this.imgSrcSuffix;

		// Some versions of Netscape on the Mac fail to redraw the area previously
		// under the iframe unless the iframe is changed. By changing the height here,
		// all is well (it is changed back by a call to the crop method when opened)
		if( is_mac && ( is_moz || is_nav ) ) {
			var iframe = getElement(this.name + "Frame" );
			iframe.height = this.menuHeight + 1;
			iframe.height = this.menuHeight;
		}
	}

	/** Menu.crop()
	 *  Crops this menu to the actual size of the contenets.
	 **/
	Menu.prototype.crop = function() {
		this.menuHeight = getElement("menuWrapper",frames[( this.name + "Frame" )].document).offsetHeight;
		getElement(this.name + "Frame" ).height = this.menuHeight;

		// Opera (as of 6.05) does not dynamically resize iframes
	}


	/** Menu.getButton():menu button
	 *  Gets the DOM element representing the menu button
	 **/
	Menu.prototype.getButton = function() {
		return getElement( "Header_link_" + this.name );
	}

	/** Menu.getLayer():menu layer DIV
	 *  Gets the DOM element representing the menu layer
	 **/
	Menu.prototype.getLayer = function() {
		return getElement( this.name + "Menu" );
	}

	/** Menu.open()
	 *  Opens this menu
	 **/
	Menu.prototype.open = function() {
		document.getElementById("Header_"+this.name).src = this.imgSrcPrefix + "on" + this.imgSrcSuffix;

		this.getLayer().style.visibility = "visible";

		this.crop();
	}

/*====================================================*/

// used to determine if the document and script objects have been loaded.
menuRegistry.isLoaded = false;

// used to determine whether the current browser is menu-capable
var canDoMenus = (is_ie5up || is_opera6up || is_khtml || is_gecko);

/** getElement( string, DOMElement )
 *  Get an element from the DOM
 *  The first argument is the element id.
 *  The second, optional argument is the parent element to search within.
 *     If this argument is not included, document is used in its place.
 **/
function getElement( id, inElement ) {
	inElement = (inElement)?inElement:document;
	return inElement.getElementById?inElement.getElementById(id):(inElement.all?inElement.all[id]:null);
}

/** btnOver( DOMElement )
 *  Handle mouseover events from menu buttons
 **/
function btnOver( menuBtn ) {

	if( !(menuRegistry.isLoaded && canDoMenus ) ) return;

	var menuName = menuBtn.id.substr( ("Header_link_").length );
	menuRegistry.open(menuName);

}

/** btnOut( DOMElement )
 *  Handle mouseout events from menu buttons
 **/
function btnOut( menuBtn ) {
	if( !(menuRegistry.isLoaded && canDoMenus ) ) return;
	menuRegistry.delayedClose();
}


/** menuOver( )
 * Handle moueover events from the menu contents
 **/
function menuOver(item) {
	if( item.className ) {
		item.className += "Hover";
	}
	menuRegistry.clearCloseTimer();
}

/** menuOut( )
 * Handle moueout events from the menu contents
 **/
function menuOut(item) {
	if( item.className && item.className.indexOf("Hover") >= 0 ) {
		item.className = item.className.substr( 0, item.className.length - "Hover".length );
	}
	menuRegistry.delayedClose();
}


/** itemClick( DOMElement )
 *  Handle click events from menu items
 **/
function itemClick( item ) {
	if( item.getAttribute( "menuAction" ) ) {
		eval( item.getAttribute( "menuAction" ) );
		menuRegistry.closeAll();
	}
}

function closeAllMenus() {
	if(canDoMenus)menuRegistry.closeAll();
}


/** writeMenus( string, int, int )
 *  Write the menu HTML to the document
 *  The first argument is the menu name.
 *  The second argument is the default height, in pixels, of the menu layer
 *     and iframe. This is dynamically reset within the browser.
 **/
var menuZIndexBase = 25;
function writeMenu( menuName, menuUrl, width, height ) {
	document.write('<div id="'+menuName+'Menu" style="position: absolute; top: 0px; left: 0px; visibility: hidden; z-index: '+menuZIndexBase+'"><iframe src="'+menuUrl+'" name="'+menuName+'Frame" id="'+menuName+'Frame" width="'+width+'" height="'+height+'" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><\/iframe><\/div>');
	menuZIndexBase++;
}



/*** INSTANCE INITIALIZATION ***/
function initMenus() {
	if( canDoMenus ) {
		// register and create the menu objects
		menuRegistry.register( new Menu("historical_resources") );
		menuRegistry.register( new Menu("jfk_library_and_museum") );
		menuRegistry.register( new Menu("education_and_public_programs") );

		// notify the system that the page is loaded
		menuRegistry.isLoaded = true;
	}
}

var editMode = false;

function writeMenus() {
	// write the menus to the page
	if( canDoMenus ) {
		//var editModeExtra = editMode ? "&"+escape( (new Date()).toString() ) : "";
		var testingHostExtra = ( location.host == "localhost" ) ? "jfkl.bigbad.com/" : (location.host == "72.3.234.178") ? "staging.jfklibrary.org/" : (location.host == "72.3.189.169") ? "staging.jfklibrary.org/" : "";
		writeMenu('historical_resources',"/jfkl/dhtml/MenuCreator.aspx?menu="+testingHostExtra+"historical+resources&em="+isEditMode,174,150);
		writeMenu('jfk_library_and_museum',"/jfkl/dhtml/MenuCreator.aspx?menu="+testingHostExtra+"jfk+library+and+museum&em="+isEditMode,177,195);
		writeMenu('education_and_public_programs',"/jfkl/dhtml/MenuCreator.aspx?menu="+testingHostExtra+"education+and+public+programs&em="+isEditMode,227,150);
	}

	document.write("<div id='menuOut' style='display: none;'>menus written</div>");
}
