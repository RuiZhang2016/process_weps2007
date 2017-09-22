

/* ***** FROM /jfkl/js/com/jitjat/plugins/PluginDetector.js ***** */
// Create the namespace
if( !window.com ) {
	/**
	 * @ignore
	 **/
	window.com = new Object();
}
if( !com.jitjat ) {
	/**
	 * @ignore
	 **/
	 com.jitjat = new Object();
}
if( !com.jitjat.plugins ) {
	/**
	 * @ignore
	 **/
	com.jitjat.plugins = new Object();
}


/**
 * Extensible Plugin Detection Class
 * @constructor
 * @version 1.0 April 14, 2004
 * @author Gregory Ramsperger <gregory-at-jitjat.com>
 **/
com.jitjat.plugins.PluginDetector = function() {
	// due to an IE/Win bug, this need to be reset here
	// if you don't do this, each implementation adds to the list
	if( this.useWindowsControls ) this.activeXControls = [];
}

/**
 * <em>Abstract</em>This method should be implemented by subclasses and should extract
 * version information from the plugin.description or plugin.name
 * properties.
 *
 * @param plugin <dfn>plugin</dfn> the plugin instance (as in navigator.plugins[0])
 * @return the version number found or <code>null</code> if no version was retrieved.
 * @type Number
 * @abstract
 */
com.jitjat.plugins.PluginDetector.prototype.findVersion = function( plugin ) {}

/**
 * <em>Abstract</em> This method should be implemented by subclasses and should extract
 * version information from the ActiveX control created.
 * <p><strong>Set this in the implementation class</strong></p>
 *
 * @private
 * @param activeXObj <dfn>ActiveXObject</dfn> the ActiveX instance
 * @type Number
 * @return the version number found or <code>null</code> if no version was retrieved.
 */
com.jitjat.plugins.PluginDetector.prototype.findVersionActiveX = function( activeXObj ) {}

/**
 * An array of mime types to use when searching for the proper plugin. (Ignored for IE/Win)
 * <p><strong>Set this in the implementation class</strong></p>
 * @type Array
 */
com.jitjat.plugins.PluginDetector.prototype.mimeTypes = [];

/**
 * An array of plugin names/descriptions to use when searching for the proper plugin. (Ignored for IE/Win)
 * <p><strong>Set this in the implementation class</strong></p>
 * @type Array
 */
com.jitjat.plugins.PluginDetector.prototype.pluginNames = [];

/**
 * An array of file name suffixes to use when searching for the proper plugin. (Ignored for IE/Win)
 * <p><strong>Set this in the implementation class</strong></p>
 * @type Array
 */
com.jitjat.plugins.PluginDetector.prototype.suffixes = [];

/**
 * Adds an ActiveX control id to the list of controls to check
 * 
 * @param name <dfn>String</dfn> the name of the control to instantiate
 * @param pluginVersion <dfn>Number</dfn> the version of the plugin implied by the existance of this control
 * @type Void
 */
com.jitjat.plugins.PluginDetector.prototype.addActiveXControl = function( name, pluginVersion ) {
	if( this.useWindowsControls ) {
		this.activeXControls[this.activeXControls.length] = {name:name, version:pluginVersion, iterative:false};
	}
}

/**
 * Adds an ActiveX control id pattern to the list of controls to check
 *
 * <p>Example: Flash</p>
 * <blockquote><code>pluginDetector.addActiveXControlPattern( "ShockwaveFlash.ShockwaveFlash.", "" );</code></blockquote>
 * <blockquote>When detect() is called, if maxVersionCheck is set to 10, this will try to instantiate
 *   the "ShockwaveFlash.ShockwaveFlash.10" control. When this fails, it will try 
 *   "ShockwaveFlash.ShockwaveFlash.9" and so on. When it gets to 
 *   "ShockwaveFlash.ShockwaveFlash.7" (the current version), it will succeed and return 7.</blockquote>
 *
 * @param namePrefix <dfn>String</dfn> the prefix of the file type supported by the plugin.
 * @param nameSuffix <dfn>String</dfn> the suffix of the file type supported by the plugin.
 * @type Void
 */
com.jitjat.plugins.PluginDetector.prototype.addActiveXControlPattern = function( namePrefix, nameSuffix ) {
	if( this.useWindowsControls ) {
		this.activeXControls[this.activeXControls.length] = { prefix:namePrefix, suffix:nameSuffix, iterative:true };
	}
}

/**
 * Use addActiveXControl() and addActiveXControl() to add controls to check.
 * <p>Stores the controls for later checking</p>
 *
 * @private
 * @type Array
 */
com.jitjat.plugins.PluginDetector.prototype.activeXControls = [];

/**
 * The plugin vendor.
 * <p>Media types may be supported by more than one plugin. Use this property to differentiate.</p>
 *
 * @type String
 */
com.jitjat.plugins.PluginDetector.prototype.vendor = null;



/**
 * The detection method.
 *
 * @return <code>true</code> if any version is found
 * @type Boolean
 */
com.jitjat.plugins.PluginDetector.prototype.detect = function() {

	if( this.useWindowsControls ) {
		for( var i=0; i<this.activeXControls.length; i++ ) {
			if( this.activeXControls[i].iterative ) {
				this.versionFound = Math.max( this.versionFound, this.iterativeActiveXDetect( this.activeXControls[i].prefix, this.activeXControls[i].suffix ) );
			} else {
				try {
					var ctl = new ActiveXObject( this.activeXControls[i].name );
					var v = this.findVersionActiveX( ctl );
					if( v != null ) this.versionFound = Math.max( this.versionFound, v );
					else this.versionFound = Math.max( this.versionFound, this.activeXControls[i].version );
				} catch( e ) {
				}
			}
		}

	} else if(navigator.plugins) {
		// continue to the next only if nothing was found
		if( !this.versionFromMimeTypes( this.mimeTypes ) )
			if( !this.versionFromSuffix( this.suffixes ) )
				this.versionFromNames( this.pluginNames );
	}

	return ( this.versionFound > 0 );
}

/**
 * If on MSIE/Windows, plugins must be detected by instantiating a control
 * @private
 * @type Boolean
 */
com.jitjat.plugins.PluginDetector.prototype.useWindowsControls = (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false; // true if we're on windows


/**
 * The maximum version to check for existence. (Only used in MSIE/Windows.)
 * Setting this to a higher number increases the efficiency of the check on MSIE/Windows
 *
 * @type Number
 */
com.jitjat.plugins.PluginDetector.prototype.minVersionCheck = 1;

/**
 * The maximum version to check for existence. (Only used in MSIE/Windows.)
 * This should be set above the current version of the format for support of future versions without updates.
 *
 * @type Number
 */
com.jitjat.plugins.PluginDetector.prototype.maxVersionCheck = 10;

/**
 * The version of the plugin detected. Use getVersion() to retrieve this value.
 *
 * @private
 * @type Number
 * @see #getVersion
 */
com.jitjat.plugins.PluginDetector.prototype.versionFound = -1;


/**
 * Check to see that the detected version is equal to or greater than the passed number.
 *
 * @param version <dfn>Number</dfn> the number to test against.
 * @return <code>true</code> if the version is greater than the tested value. <code>false</code> if it is less than or the plugin was not found.
 * @type Boolean
 */
com.jitjat.plugins.PluginDetector.prototype.atLeastVersion = function( version ) {
	if( !this.detected ) return false;
	if( typeof version != "number" ) version = parseFloat( version );
	if( isNaN( version ) ) return null;

	return ( this.versionFound >= version );
}

/**
 * Get the detected plugin version
 * @return <dfn>Number</dfn> the plugin version detected
 */
com.jitjat.plugins.PluginDetector.prototype.getVersion = function() {
	return this.versionFound;
}

/**
 * Determine that any version of the plugin (within the tested range) is present
 * @return <code>true</code> if the plugin was detected
 * @type Boolean
 */
com.jitjat.plugins.PluginDetector.prototype.detected = function() {
	return this.versionFound > 0;
}


/**
 * Find the plugin associated with the given mime type.
 *
 * @param type <dfn>Array</dfn> or <dfn>String</dfn> the mime type of the associated plugin. For multiple types, pass more than one argument
 */
com.jitjat.plugins.PluginDetector.prototype.versionFromMimeTypes = function( type ) {
	if( !navigator.mimeTypes ) return;
	if( typeof type == "string" ) type = [type];

	var foundSomething = false;

	for( var i=0; i<type.length; i++ ) {
		if( navigator.mimeTypes[ type[i] ] && navigator.mimeTypes[ type[i] ].enabledPlugin ) {
			var v = this.findVersion( navigator.mimeTypes[ type[i] ].enabledPlugin );
			if( v!=null && !isNaN( v ) ) {
				this.versionFound = Math.max( this.versionFound, v );
				foundSomething = true;
			}
		}
	}

	return foundSomething;
}

/**
 * Find all plugins with name or description properties containing the given string.
 *
 * @param name <dfn>Array</dfn> or <dfn>String</dfn> the string contained within the name or descriptoin of the desired plugin. For multiple names, pass more than one argument
 */
com.jitjat.plugins.PluginDetector.prototype.versionFromNames = function( names ) {
	if( typeof names == "string" ) names = [names];

	var foundSomething = false;

	for( var i=0; i<navigator.plugins.length; i++ ) {
		var plugin = navigator.plugins[i];

		for( var j=0; j<names.length; j++ ) {
			names[j] = names[j].toLowerCase();

			if( plugin.name.toLowerCase().indexOf( names[j] ) != -1 || plugin.description.toLowerCase().indexOf( names[j] ) != -1 ) {
				var v = this.findVersion( plugin );
				if( v!=null && !isNaN( v ) ) {
					this.versionFound = Math.max( this.versionFound, v );
					foundSomething = true;
				}
			}
		}
	}

	return foundSomething;
}

/**
 * Find all plugins supporting the given suffix.
 *
 * @private
 * @param name <dfn>Array</dfn> or <dfn>String</dfn> the suffix of the file type supported by the plugin. For multiple suffixes, pass more than one argument
 */
com.jitjat.plugins.PluginDetector.prototype.versionFromSuffix = function( suffix ) {
	if( typeof suffix == "string" ) suffix = [suffix];

	var foundSomething = false;

	for( var i=0; i<navigator.mimeTypes.length; i++ ) {
		for( var j=0; j<suffix.length; j++ ) {
			if( navigator.mimeTypes[i].suffixes.indexOf( suffix[j].toLowerCase() ) != -1 ) {
				if( navigator.mimeTypes[i].enabledPlugin ) {
					var v = this.findVersion( navigator.mimeTypes[i].enabledPlugin );
					if( v!=null && !isNaN( v ) ) {
						this.versionFound = Math.max( this.versionFound, v );
						foundSomething = true;
					}
				}
			}
		}
	}

	return foundSomething;
}



/**
 * Iteratively instantiate ActiveX controls and return the highest version found. This method depends on values set for maxVersionCheck and minVersionCheck.
 *
 * <p>Example: Flash</p>
 * <blockquote><code>pluginDetector.addActiveXControlPattern( "ShockwaveFlash.ShockwaveFlash.", "" );</code></blockquote>
 * <blockquote>When detect() is called, if maxVersionCheck is set to 10, this will try to instantiate
 *   the "ShockwaveFlash.ShockwaveFlash.10" control. When this fails, it will try 
 *   "ShockwaveFlash.ShockwaveFlash.9" and so on. When it gets to 
 *   "ShockwaveFlash.ShockwaveFlash.7" (the current version), it will succeed and return 7.</blockquote>
 *
 * @private
 * @param namePrefix <dfn>String</dfn> the prefix of the file type supported by the plugin.
 * @param nameSuffix <dfn>String</dfn> the suffix of the file type supported by the plugin.
 * @return the version number found
 * @type Number
 */
com.jitjat.plugins.PluginDetector.prototype.iterativeActiveXDetect = function( controlPrefix, controlSuffix ) {
	if( controlPrefix == null ) controlPrefix = "";
	if( controlSuffix == null ) controlSuffix = "";

	for( var i=this.maxVersionCheck; i>=this.minVersionCheck; i-- ) {
		try {
			var obj = new ActiveXObject( controlPrefix + i + controlSuffix );
			return i;
		} catch( e ) {
		}
	}
	return -1;
}


// test variable. Implementation files should check for this before subclassing com.jitjat.plugins.PluginDetector
var PluginDetectorLoaded = true;

/**
 * Set to true when PluginDetector is loaded.
 * <code>
 * </code>
 *
 * @type Boolean
 **/
com.jitjat.plugins.PluginDetector.PluginDetectorLoaded = true;

/* ***** FROM /jfkl/js/com/jitjat/plugins/FlashPluginDetector.js ***** */
try { PluginDetectorLoaded = com.jitjat.plugins.PluginDetector.PluginDetectorLoaded; } catch( e ) { throw new Error( "com.jitjat.plugins.FlashPluginDetector requires com.jitjat.plugins.PluginDetector" ); } if( PluginDetectorLoaded ) {

/**
 * Class for easy detection of the Flash plugin.
 * 
 * @version 1.0 April 14, 2004
 * @author Gregory Ramsperger <gregory@jitjat.com>
 *
 * @constructor
 * @param autodetect <dfn>Boolean</dfn> run detect() method upon creation. Default is <code>true</code>.
 **/
com.jitjat.plugins.FlashPluginDetector = function( autodetect ) {
	this.addActiveXControlPattern( "ShockwaveFlash.ShockwaveFlash.", "" );
	this.vendor = "Macromedia";
	if( autodetect != false ) this.detect();
}

// extend the base class
com.jitjat.plugins.FlashPluginDetector.prototype = new com.jitjat.plugins.PluginDetector;

/**
 * An array of mime types to use when searching for the proper plugin. (Ignored for IE/Win)
 * <p>Default value: <code>["application/x-shockwave-flash"]</code>
 * @type Array
 */
com.jitjat.plugins.FlashPluginDetector.prototype.mimeTypes = ["application/x-shockwave-flash"];

/**
 * An array of plugin names/descriptions to use when searching for the proper plugin. (Ignored for IE/Win)
 * <p>Default value: <code>["Shockwave Flash"]</code>
 * @type Array
 */
com.jitjat.plugins.FlashPluginDetector.prototype.pluginNames = ["Shockwave Flash"];

/**
 * An array of file name suffixes to use when searching for the proper plugin. (Ignored for IE/Win)
 * <p>Default value: <code>["swf"]</code>
 * @type Array
 */
com.jitjat.plugins.FlashPluginDetector.prototype.suffixes = ["swf"];


/**
 * Extracts version information from the plugin.description or plugin.name properties.
 *
 * @private
 * @param plugin <dfn>plugin</dfn> the plugin instance (as in navigator.plugins[0])
 * @return the version number found or <code>null</code> if no version was retrieved.
 * @type Number
 */
com.jitjat.plugins.FlashPluginDetector.prototype.findVersion = function( plugin ) {
	return parseFloat( plugin.description.substr( 16 ) );
}



/* end PluginDetectorLoaded test */}

/* ***** FROM /jfkl/js/com/jitjat/Cookies.js ***** */
// Create the namespace
if( !window.com ) {
	/**
	 * @ignore
	 **/
	window.com = new Object();
}
if( !com.jitjat ) {
	/**
	 * @ignore
	 **/
	 com.jitjat = new Object();
}


/**
 * @class Cookie Manipulation Class
 * <p>Creates, modifies, reads, and removes cookies.</p>
 *
 * <p>Changes:</p>
 * <ul>
 * 		<li>June 22, 2005: v2.1.1, Added static <code>defaultCookieHandler</code> property and changed the <code>definer</code> RegExp property to work in IE 5.2/Mac
 * 		<li>August 07, 2004: v2.1, Added JSDoc comments <http://jsdoc.sourceforge.net/>
 * 		<li>August 03, 2004: v2.0, Changed to "class" to encapsulate default values in one instance (multiple instances can have unique default paths, hosts, etc)</li>
 * </ul>
 *
 * @author Gregory Ramsperger <gregory@jitjat.com>
 * @version 2.1.1, June 22, 2005
 * @constructor
 * @param autoparse <dfn>Boolean</dfn> automatically parse the existing cookies on instantiation. Default true
 **/
com.jitjat.Cookies = function( autoparse ) {
	if( autoparse != false ) this.parse();
}

/**
 * Storage of parsed cookies
 * @private
 * @type Object
 **/
com.jitjat.Cookies.prototype.cookies = new Object();

/**
 * Delimiter between individual cookies in the document.cookie string
 * @private
 * @type RegExp
 */
com.jitjat.Cookies.prototype.delimiter = /;\s*/;

/**
 * Pattern for processing key=value pairs
 * @private
 * @type RegExp
 **/
com.jitjat.Cookies.prototype.definer = /^([^=]+)(=(.*))?$/;

/**
 * Pattern for matching ip addresses
 * @private
 * @type RegExp
 **/
com.jitjat.Cookies.prototype.ipMatch = /^(\d{1,3}\.){3}\d{1,3}$/;



/**
 * The domain in which to set the cookie (null uses default/current domain)
 * @type String
 **/
com.jitjat.Cookies.prototype.domain = null;

/**
 * Whether or not cookies are secure
 * @type Boolean
 **/
com.jitjat.Cookies.prototype.secureByDefault = false;

/**
 * Default cookie path.
 * <p>The default value is "/". A <code>null</code> value will use the current directory.</p>
 * @type String
 **/
com.jitjat.Cookies.prototype.pathDefault = "/";

/**
 * Regular Expression testing for integers
 * @private
 * @type RegExp
 */
com.jitjat.Cookies.prototype.intTestRE = /^\-?\d+$/;

/**
 * Regular Expression testing for floats
 * @private
 * @type RegExp
 */
com.jitjat.Cookies.prototype.floatTestRE = /^\-?[\d\.]+$/;

/**
 * Regular Expression testing for booleans with "true" values
 * @private
 * @type RegExp
 */
com.jitjat.Cookies.prototype.boolTrueTestRE = new RegExp("^true$","i");

/**
 * Regular Expression testing for booleans with "false" values
 * @private
 * @type RegExp
 */
com.jitjat.Cookies.prototype.boolFalseTestRE = new RegExp("^false$","i");


/**
 * Automatically set the domain based on the current location
 **/
com.jitjat.Cookies.prototype.autoSetDomain = function() {
	var host = location.hostname;

	if( this.ipMatch.test( host ) )
		// if this is an IP, use the address as the domain
		this.domain = host;
	else {
		// split the host at the dots
		var splitHost = host.split(".");

		if( splitHost.length > 2 ) // if there are at least three elements, use the last two as the domain
			this.domain = "." + splitHost[splitHost.length-2] + "." + splitHost[splitHost.length-1];
		else // if there are fewer than two elements, just use the host
			this.domain = host;
	}
}

/**
 * Populate the instance by parsing the document.cookie string.
 **/
com.jitjat.Cookies.prototype.parse = function() {
	// reset the cookies objects
	this.cookies = new Object();

	var cookie_string = document.cookie;

	var cPairStrings = cookie_string.split(this.delimiter);

	for(var pair = 0; pair < cPairStrings.length; pair++){
		cPairStrings[pair].match( this.definer );

		var key = unescape( RegExp["$1"] );
		var val = unescape( RegExp["$3"] );

		if( val == "" ) {
			val = null;
		} else if( val.match( this.floatTestRE ) ) {
			val = parseFloat( val );
		} else if( val.match( this.intTestRE ) ) {
			val = parseInt( val );
		} else if( val.match( this.boolTrueTestRE ) ) {
			val = true;
		} else if( val.match( this.boolFalseTestRE ) ) {
			val = false;
		}

		this.cookies[key] = val;
	}
}

/**
 * Get the value of a cookie
 * @param cookieKey <dfn>String</dfn> the name of the cookie to retrieve
 * @return the cookie value
 * @type String
 **/
com.jitjat.Cookies.prototype.get = function( cookieKey ) {
	if( typeof this.cookies[cookieKey] == "string" ) return unescape( this.cookies[cookieKey] );
	else return this.cookies[cookieKey];
}

/**
 * Set the value of a cookie
 * @param cookieKey <dfn>String</dfn> the name of the cookie to set
 * @param value <dfn>String</dfn> the new value of the cookie
 * @param expireInMin <dfn>String</dfn> minutes until expiration (<code>null</code> for session cookie)
 * @param secure <dfn>Boolean</dfn> set to <code>true</code> for a secure cookie, <code>null</code> to use the secureByDefault value.
 * @param path <dfn>String</dfn> optional override to pathDefault
 * @see #secureByDefault
 * @see #pathDefault
 **/
com.jitjat.Cookies.prototype.set = function( cookKey, value, expireInMin, secure, path ) {
	var cookie = new Object();
	cookie.cookKey = cookKey;
	cookie.value = escape(value);

	if( expireInMin < 0 || expireInMin == null || typeof expireInMin != "number" ) {
		cookie.expires = null;
	} else {
		cookie.expires = new Date();
		cookie.expires.setTime( cookie.expires.getTime() + (1000*60*expireInMin) );
	}

	cookie.path = ( path != null ? path : this.pathDefault );
	cookie.secure = ( secure == true ? true : ( secure == false ? false : this.secureByDefault ) );

	var cookie_string = "";

	if(cookie.cookKey ){
		cookie_string += cookie.cookKey + ( (cookie.value!=null) ? "=" + escape(cookie.value) : "" );
		if(cookie.expires) cookie_string += ";expires=" + cookie.expires.toGMTString();
		if(cookie.path) cookie_string += ";path=" + cookie.path;
		if(this.domain != null) cookie_string += ";domain=" + this.domain;

		if( cookie.secure==true || ( cookie.secure==null && this.secureByDefault ) ) cookie_string += ";secure";

		document.cookie = cookie_string;
	}

	this.parse(); // re-parse the cookies as it could have expired
}


/**
 * Remove a cookie
 * <p>Remove (immediately expire) a cookie
 * @param cookieKey <dfn>String</dfn> the name of the cookie to remove
 **/
com.jitjat.Cookies.prototype.remove = function( cookKey ) {
	this.set( cookKey, 0, 0 );
	delete this.cookies[cookKey];
}

/**
 * Default Cookies instance.
 * @type com.jitjat.Cookies
 **/
com.jitjat.Cookies.defaultCookieHandler = new com.jitjat.Cookies(true);


/* ***** Just here ***** */
var hasFlash7 = com.jitjat.Cookies.defaultCookieHandler.get("hasFlash7");
if( hasFlash7==null ) {
	var flashPD = new com.jitjat.plugins.FlashPluginDetector();
	hasFlash7 = flashPD.atLeastVersion(7);
	com.jitjat.Cookies.defaultCookieHandler.set( "hasFlash7", hasFlash7 );
}


/* ***** FROM /jfkl/js/RollOvers.js ***** */
function writeHpFlash(flashVars){
	document.write( '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" class="hpFlash"><param name="movie" value="/jfkl/images/homepage/HomepageIntro.swf" /><param name="FlashVars" value="'+flashVars+'" /><param name="bgcolor" value="#C3CCD6" /><param name="quality" value="high" /><embed src="/jfkl/images/homepage/HomepageIntro.swf" flashvars="'+flashVars+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" class="hpFlash" bgcolor="#C3CCD6"><\/embed><\/object>' );
}
function RollOvers() {}

RollOvers.prototype.preloaded = false; // whether or not this has been preloaded
RollOvers.prototype.createNormalState = true; // whether or not to automatically create a "normal" state
RollOvers.prototype.rollovers = new Object(); // storage for all rollover images

RollOvers.prototype.createImage = function( uri ) {
	var img = new Image();
	img.src = uri;
	return img;
}

RollOvers.prototype.swapImage = function( id, newState ) {
	if( document.images && this.preloaded && this.rollovers[id] ) {
		if( newState == null && this.defaultStates[id] ) newState = this.defaultStates[id];
		if( newState == null ) return true;

		if( this.rollovers[id][newState] ) {
			// use getElementByID instead of document.images[id] to allow for <input type="image" />
			var ele = document.getElementById(id);
			if( ele && ele.src )
				ele.src = this.rollovers[id][newState].src;
				//alert(ele.src);
		}
	}
	return true;
}

RollOvers.prototype.addRollover = function( ids, states, urlPrefix, urlSuffix, stateDelimiter, createNormalState ) {
	if( typeof ids == "string" ) ids = [ids];
	if( typeof states == "string" ) states = [states];

	if( createNormalState != true && createNormalState != false ) createNormalState = this.createNormalState;

	for( var i=0; i<ids.length; i++ ) {
		this.rollovers[ids[i]] = new Object();

		if( createNormalState ) this.rollovers[ids[i]].normal = this.createImage( urlPrefix + ids[i] + urlSuffix );

		for( var j=0; j<states.length; j++ ) {
			this.rollovers[ids[i]][states[j]] = this.createImage( urlPrefix + ids[i] + stateDelimiter + states[j] + urlSuffix );
		}
	}
}


RollOvers.prototype.addGenericRollover = function( genericId, states, urlPrefix, urlSuffix, stateDelimiter, createNormalState ) {
	if( typeof states == "string" ) states = [states];

	if( createNormalState != true && createNormalState != false ) createNormalState = this.createNormalState;

	this.rollovers[genericId] = new Object();

	if( this.createNormalState ) this.rollovers[genericId].normal = this.createImage( urlPrefix + urlSuffix );

	for( var j=0; j<states.length; j++ ) {
		this.rollovers[genericId][states[j]] = this.createImage( urlPrefix + stateDelimiter + states[j] + urlSuffix );
	}
}


RollOvers.prototype.swapGenericImage = function( id, genericId, newState ) {
	if( document.images && this.preloaded && this.rollovers[genericId] ) {
		if( newState == null && this.defaultStates[genericId] ) newState = this.defaultStates[genericId];
		if( newState == null ) return true;

		if( this.rollovers[genericId][newState] ) {
			var ele = document.getElementById(id);
			if( ele && ele.src )
				ele.src = this.rollovers[genericId][newState].src;
		}
	}
	return true;
}

RollOvers.prototype.defaultStates = new Object();
RollOvers.prototype.setDefaultState = function( id, state ) {
	if( id == null || id == "" ) return;
	
	if( typeof id == "string" ) id = [id];

	for( var i=0; i<id.length; i++ ) {
		if( state == null || state == "" ) delete this.defaultStates[id[i]];
		else this.defaultStates[id[i]] = state;
	}
}

/*** INSTANCE items ***/

var ro = new RollOvers();

ro.preload = function() {
	if( !document.images ) return false;

	this.addRollover( // main nav rollovers
		["Header_home","Header_historical_resources","Header_jfk_library_and_museum","Header_education_and_public_programs"],
		["on","off"],"/jfkl/images/nav/primary/",".gif","-",false);

	this.addRollover( // footer rollovers
		["Footer_visit_us","Footer_search","Footer_faq","Footer_site_map","Footer_white_house_diary","Footer_timeline","Footer_asset_tree","Footer_virtual_museum_tour"],
		["over"],"/jfkl/images/nav/bottom/",".gif","-");

	this.addGenericRollover( // photo enlarge link
		"photo_enlarge",
		["over"],"/jfkl/images/global/photo_enlarge",".gif","-",true);

	this.addRollover( // submit button
		"submit",
		["over"],"/jfkl/images/buttons/",".gif","-",true);

	return this.preloaded = true;
}

ro.preloadArchives = function() {
	if( !document.images ) return false;

	this.addRollover( // tab rollovers
		["all_holdings","index_of_detailed_finding_aids"],
		["over","on","off"],"/jfkl/images/archives/tabs/",".gif","-",false);

	this.addGenericRollover( // archives box rollovers
		"reference_desk",
		["over","on","off"],"/jfkl/images/archives/reference_desk",".gif","-",false);

	this.addGenericRollover( // archives box rollovers
		"research_policies",
		["over","on","off"],"/jfkl/images/archives/research_policies",".gif","-",false);

	this.addGenericRollover( // archives box rollovers
		"research_grants",
		["over","on","off"],"/jfkl/images/archives/research_grants",".gif","-",false);

	this.addRollover( // archives box rollovers
		["reference_desk","research_policies","research_grants"],
		["over","on","off"],"/jfkl/images/archives/",".gif","-",false);

	this.addRollover( // archives box rollovers
		["reference_desk_wide","research_policies_wide","research_grants_wide"],
		["over","on","off"],"/jfkl/images/archives/",".gif","-",false);

	this.addRollover( // archives box rollovers
		["begin_search_button"],
		["over"],"/jfkl/images/archives/",".gif","-",true);
	
	return this.preload();
}

ro.preloadExhibits = function() {
	if( !document.images ) return false;

	this.addRollover( // tabbed rollovers
		["TabbedNav1_museum_exhibits","TabbedNav1_past_exhibits","TabbedNav1_traveling_exhibits","TabbedNav1_upcoming_exhibits"],
		["over","on","off"],"/jfkl/images/nav/tabbed/",".gif","-",false);
	
	return this.preload();
}


ro.preloadNewsletters = function() {
	if( !document.images ) return false;

	this.addRollover( // rollovers for new frontiers
		["head_current_issue","head_archived_issues"],
		["active"],"/jfkl/images/newsletters/newfrontiers/",".gif","-",true);
	
	this.addRollover( // rollovers for foundaton
		["head_current_issue","head_archived_issues"],
		["active"],"/jfkl/images/newsletters/foundation/",".gif","-",true);
	
	return this.preload();
}

ro.preloadForums = function() {
	if( !document.images ) return false;

	this.addRollover( // tabbed rollovers
		["upcoming_forums","past_forums","about_forums"],
		["over","on","off"],"/jfkl/images/nav/tabbed/",".gif","-",false);

	this.addGenericRollover(
		"register",
		["over"],"/jfkl/images/buttons/register",".gif","-",true);

	
	return this.preload();
}


ro.preloadSearch = function() {
	if( !document.images ) return false;

	this.addRollover( // tabbed rollovers
		["advanced_search","extended_search"],
		["over","on","off"],"/jfkl/images/nav/tabbed/",".gif","-",false);
	
	this.addGenericRollover(
		"search",
		["over"],"/jfkl/images/buttons/search",".gif","-",true);

	return this.preload();
}



/* ***** FROM /jfkl/js/com/bigbad/Popup.js ***** */
// Create the namespace
if( !window.com ) {
	/**
	 * @ignore
	 **/
	window.com = new Object();
}
if( !com.bigbad ) {
	/**
	 * @ignore
	 **/
	 com.bigbad = new Object();
}

/**
 * @class Popup Features for simple creation of popup windows with given features.
 * <p><b>Usage:</b></p>
 * <dl>
 *   <dt>To create a popup that is not resizable and does not display the status bar, scroll bars, tool bar, or menu bar</dt>
 *   <dd><code>var myPopupFeatures = new com.bigbad.PopupFeatures( {scrollbars:false,status:false,resizable:false} );</code></dd>
 *   <dd><code>window.open( "myUrl", "myTarget", myPopupFeatures.toString() );</code></dd>
 *
 *   <dt style="margin-top: 12px;">To create a popup that uses all of the default features except for having a unique width and height</dt>
 *   <dd><code>window.open( "myUrl", "myTarget",</code><code style="display: block; padding-left: 20px;">com.bigbad.PopupFeatures.defaultPopupFeatures.toString( {width:500,height:400} ) );</code></dd>
 *
 * </dl>
 *
 * <p>Note: not all properties are available in all browsers</p>
 *
 * @author Gregory Ramsperger <Gregory.Ramsperger@BigBad.com>
 * @version 1.1, June 22, 2005
 *
 * @constructor
 * @param defaults <dfn>Object</dfn> Object whose properties will be used as default values for this instance. See <code>toString()</code>
 **/
com.bigbad.PopupFeatures = function( defaults ) {
	if( defaults == null ) return;

	// transfer all properties into this object.
	var prop;
	for( prop in defaults ) {
		this[prop] = defaults[prop];
	}
}

/**
 * Convert the PopupFeatures instance to a string
 * @param overrides <dfn>Object</dfn> Object whose properties will be used to override the instance properties
 * @return the string to be used as the features parameter in the <code>window.open( <i>url</i>, <i>target</i>, <i>features</i> )</code> call.
 * @type String
 **/
com.bigbad.PopupFeatures.prototype.toString = function( overrides ) {
	if( overrides == null ) overrides = new Object();

	var rtn = new Array();
	for( prop in this ) {
		var val;
		if( (val = this.getPropValue(prop, overrides))!=null ) {
			if( typeof val == "function" ) continue;
			switch( prop ) {
				case "left":
					rtn[rtn.length] = "screenX=" + val;
				case "top":
					rtn[rtn.length] = "screenY=" + val;
				default:
					rtn[rtn.length] = prop + "=" + val;
			}
		}
	}
	return rtn.join(",");
}

/**
 * Retrieve the set value a given property.
 * <p>Boolean values are converted to the strings "yes" or "no", representing <code>true</code> and <code>false</code> respectively
 * @private
 * @param prop <dfn>String</dfn> Name of the property to retrieve.
 * @param overrides <dfn>Object</dfn> Object whose properties will be used in place of instance values for popup properties. See <code>toString()</code>
 * @return the value or <code>null</code> if the value was not set.
 **/
com.bigbad.PopupFeatures.prototype.getPropValue = function( prop, overrides ) {
	var val = null;
	if( overrides == null ) val = this[prop];
	else val = ( overrides[prop] != null ) ? overrides[prop] : this[prop];
	return ( val == null ) ? null : (typeof val == "boolean" ? ( val ? "yes" : "no" ) : val );
}

/**
 * <p>Copy parent window's history to the new child window.</p>
 * <p>Default: no value</p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.copyhistory = null;

/**
 * <p>New window is dependent on parent window and is closed automatically if parent is closed.</p>
 * <p>Default: no value</p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.dependent = null;

/**
 * <p>New window has directory buttons</p>
 * <p>Default: <code>false</code></p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.directories = false;

/**
 * <p>height of new window in pixels</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.height = null;

/**
 * <p>Height of content (visible body area) in new window in pixels</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.innerHeight = null;

/**
 * <p>Width of content (visible body area) in new window in pixels</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.innerWidth = null;

/**
 * <p>Initial position on screen of the left edge of the popup window</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.left = null;

/**
 * <p>New window has the location bar</p>
 * <p>Default: <code>false</code></p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.location = false;

/**
 * <p>New window has the menu bar</p>
 * <p>Default: <code>false</code></p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.menubar = false;

/**
 * <p>Height of the new window (including chrome) in pixels</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.outerHeight = null;

/**
 * <p>Width of the new window (including chrome) in pixels</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.outerWidth = null;

/**
 * <p>New window is resizable by the user</p>
 * <p>Default: <code>true</code></p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.resizable = true;

/**
 * <p>New window has the scroll bars</p>
 * <p>Default: <code>true</code></p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.scrollbars = true;

/**
 * <p>New window has the status bar</p>
 * <p>Default: <code>true</code></p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.status = true;

/**
 * <p>New window has the tool bar</p>
 * <p>Default: <code>false</code></p>
 * @type Boolean
 **/
com.bigbad.PopupFeatures.prototype.toolbar = false;

/**
 * <p>Initial position on screen of the top edge of the popup window</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.top = null;

/**
 * <p>Width of new window in pixels</p>
 * <p>Default: no value</p>
 * @type Number
 **/
com.bigbad.PopupFeatures.prototype.width = null;

/**
 * PopupFeatures instance using all of the default values.
 * @type com.bigbad.PopupFeatures
 **/
com.bigbad.PopupFeatures.defaultPopupFeatures = new com.bigbad.PopupFeatures();


/**
 * @class Popup for simple creation of popup windows.
 * <p>Note: All methods are static</p>
 *
 * @author Gregory Ramsperger <Gregory.Ramsperger@BigBad.com>
 * @version 1.0, June 22, 2005
 *
 * @constructor
 **/
com.bigbad.Popup = function() {}

/**
 * Popup a window using the properties of an HTML anchor tag.
 * <p><strong>Accessibility note:</strong> This method should be used whenever popping up window from an anchor link. This allows browsers without JavaScript to reach the window. Additionally, search engines will also be able to crawl though this link.</p>
 * 
 * <p><b>Usage:</b></p>
 * <dl>
 *   <dt>Open popup using width and height set in PopupFeatures instance.</dt>
 *   <dd><code>&lt;a href="/some/url/" target="myWin" onclick="return com.bigbad.Popup.popupDom(this, myPopupFeatures);"&gt;popup&lt;/a&gt;</code></dd>
 *
 *   <dt style="margin-top: 1em;">Open popup using width and height overrides to the default PopupFeatures instance.</dt>
 *   <dd><code>&lt;a href="/some/url/" target="myWin" onclick="return com.bigbad.Popup.popupDom(this, null, {width:600,height:400} );"&gt;popup&lt;/a&gt;</code></dd>
 *
 *   <dt style="margin-top: 1em;">Open popup using width and height overrides to the default PopupFeatures instance.</dt>
 *   <dd><code>&lt;a href="/some/url/" target="myWin" onclick="return com.bigbad.Popup.popupDom(this, myPopupFeatures, {width:600,height:400} );"&gt;popup&lt;/a&gt;</code></dd>
 * </dl>
 *
 *
 * @param anchor <dfn>HTMLAElement</dfn> reference to an anchor tag.
 * @param features <dfn>com.bigbad.PopupFeatures</dfn>, <i>optional</i> features of the new window.
 * @param overrides <dfn>Object</dfn>, <i>optional</i> overrides to features parameter
 * @return <code>false</code> on success.
 * @see com.bigbad.PopupFeatures#toString
 **/
com.bigbad.Popup.popupDom = function( anchor, features, overrides ) {
	com.bigbad.Popup.popup( 
		anchor.href,
		anchor.target,
		features,
		overrides
	);
	return false;
}

/**
 * Popup a window
 *
 * <p><b>Usage:</b></p>
 * <dl>
 *   <dt>Open popup using width and height set in PopupFeatures instance.</dt>
 *   <dd><code>var myWin = com.bigbad.Popup.popup("/some/url/", "myWin", myPopupFeatures);</code></dd>
 *
 *   <dt style="margin-top: 1em;">Open popup using width and height overrides to the default PopupFeatures instance.</dt>
 *   <dd><code>var myWin = com.bigbad.Popup.popup("/some/url/", "myWin", null, {width:600,height:400} );</code></dd>
 *
 *   <dt style="margin-top: 1em;">Open popup using width and height overrides to the default PopupFeatures instance.</dt>
 *   <dd><code>var myWin = com.bigbad.Popup.popup("/some/url/", "myWin", myPopupFeatures, {width:600,height:400} );</code></dd>
 * </dl>
 *
 * @param url <dfn>String</dfn> initial URL of the popup window
 * @param target <dfn>String</dfn> the name of the newly created window
 * @param features <dfn>com.bigbad.PopupFeatures</dfn>, <i>optional</i> features of the new window.
 * @param overrides <dfn>Object</dfn>, <i>optional</i> overrides to features parameter
 * @return the newly created Window instance
 * @see com.bigbad.PopupFeatures#toString
 **/
com.bigbad.Popup.popup = function( url, target, features, overrides ) {
	if( target == null || target == "" || target == "_blank" || target == "_new" ) target = "popup";
	if( features == null ) features = com.bigbad.PopupFeatures.defaultPopupFeatures;

	var win = window.open(
		url,
		target,
		features.toString( overrides )
	);
	win.focus();
	return win;
}


/* ***** FROM /jfkl/js/com/bigbad/WindowSize.js ***** */
// Create the namespace
if( !window.com ) {
	/**
	 * @ignore
	 **/
	window.com = new Object();
}
if( !com.bigbad ) {
	/**
	 * @ignore
	 **/
	 com.bigbad = new Object();
}

/**
 * Inner Window Size Detector
 * @constructor
 * @version 2.1 (05/04/2005)
 * @author Gregory Ramsperger <gregory.ramsperger-at-bigbad.com>
 **/
com.bigbad.WindowSize = function() {
	if( window.innerHeight || document.body ) this._setFindBy();
}

/**
 * Class version
 * @type Number
 **/
com.bigbad.WindowSize.prototype.VERSION = 2.1;

/**
 * ID of method used to discover inner window size (used to set _findBy)
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype.WINDOW_INNER = 0;

/**
 * ID of method used to discover inner window size (used to set _findBy)
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype.BODY_CLIENT = 1;

/**
 * ID of method used to discover inner window size (used to set _findBy)
 * <p>IE version > 5</p>
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype.HTML_CLIENT = 2;

/**
 * ID of method used to discover inner window size (used to set _findBy)
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype.BODY_OFFSET = 3;

/**
 * ID of method used to discover inner window size (used to set _findBy).
 * <p>IE version < 5</p>
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype.HTML_CLIENT_ELEMENT = 4;

/**
 * Discovered window inner width
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype._width = 0;

/**
 * Discovered window inner height
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype._height = 0;

/**
 * Discovered method to use when finding the window size
 * @type int
 * @private
 **/
com.bigbad.WindowSize.prototype._findBy = -1;

/**
 * Determine which method to use when discovering the inner window size.
 * <p>Sets _findBy variable</p>
 * @private
 **/
com.bigbad.WindowSize.prototype._setFindBy = function() {
	/* here is tricky part: various browsers have different methods of
	 * finding the actual width and height of a window.
	 * 
	 * Netscape (all versions) and Safari: this is easily gotten from
	 *    window.innerHeight and window.innerWidth
	 *
	 * Internet Explorer 6: width must be gotten from the HTML node
	 *    using document.body.parentNode.clientWidth
	 *
	 * Internet Explorer 5-: The size of the body represents the
	 *    actual width and height using document.body.clientWidth but
	 *    some versions use the offsetWidth instead of clientWidth.
     */
	if( window.innerWidth ) {
		this._findBy = this.WINDOW_INNER;
	} else {
		if( document.body ) {
			if( document.body.parentNode ) {

				// since certain HTML syntax errors can make <body> the child of things other than <head>, loop to find the <html> node
				var htmlNode = document.body;
				while( htmlNode.nodeName != "HTML" && htmlNode.parentNode ) {
					htmlNode = htmlNode.parentNode;
				}

				if( htmlNode.clientWidth ) {
					this._findBy = this.HTML_CLIENT;
				}
			}
			if( document.body.parentElement && this._findBy == -1) {

				// since certain HTML syntax errors can make <body> the child of things other than <head>, loop to find the <html> node
				var htmlElement = document.body;
				while( htmlElement.nodeName != "HTML" && htmlElement.parentElement ) {
					htmlElement = htmlElement.parentElement;
				}

				if( htmlElement.clientWidth ) {
					this._findBy = this.HTML_CLIENT_ELEMENT;
				}
			}
			if( this._findBy == -1 && document.body.clientWidth ) {
				this._findBy = this.BODY_CLIENT;
			} else if( this._findBy == -1 && document.body.offsetWidth ) {
				this._findBy = this.BODY_OFFSET;
			}
		}
	}
}

/**
 * Retrieve the Window size.
 * @return An object containing the inner width and hieght of the window. {width:int, height: int}
 * @type Object
 **/
com.bigbad.WindowSize.prototype.getInnerSize = function() {
	// if the _findBy variable is not set, try to find it.
	if( this._findBy < 0 ) this._setFindBy(); 

	switch( this._findBy ) {
		case this.WINDOW_INNER:
			this._width = window.innerWidth;
			this._height = window.innerHeight;
			break;
		case this.HTML_CLIENT:
			var htmlNode = document.body;

			// since certain HTML syntax errors can make <body> the child of things other than <head>, loop to find the <html> node
			while( htmlNode.nodeName != "HTML" && htmlNode.parentNode ) {
				htmlNode = htmlNode.parentNode;
			}
			this._width = htmlNode.clientWidth;
			this._height = htmlNode.clientHeight;
			break;
		case this.HTML_CLIENT_ELEMENT:
			var htmlElement = document.body;

			// since certain HTML syntax errors can make <body> the child of things other than <head>, loop to find the <html> node
			while( htmlElement.nodeName != "HTML" && htmlElement.parentElement ) {
				htmlElement = htmlElement.parentElement;
			}
			this._width = htmlElement.clientWidth;
			this._height = htmlElement.clientHeight;
			break;
		case this.BODY_CLIENT:
			this._width = document.body.clientWidth;
			this._height = document.body.clientHeight;
			break;
		case this.BODY_OFFSET:
			this._width = document.body.offsetWidth;
			this._height = document.body.offsetHeight;
			break;
		default:
			return null;
	}
	return {width:this._width,height:this._height,toString:function(){return "width: "+this.width+", height: "+this.height}};
}



/** Popup instance stuff **/
var diaryFlashVersionUrl = "/jfkl/modules/diary/default.aspx";
var diaryPopupFeatures = new com.bigbad.PopupFeatures({scrollbars:false,status:false,resizable:false,width:670,height:420});

function diaryPopup( link ) {
	if( link==null || typeof link == "string" ) {
		// new version: link is the query string
		diaryPopupSimple( diaryFlashVersionUrl + "?" + link );
		return false;

	} else if( link.href ) {
		// old version
//		if( hasFlash7 ) {
			window.name = "mainWindow";
	
			var flashHref = link.getAttribute( "flashHref" )
			if( flashHref )
				link.href = flashHref;
	
			diaryPopupSimple( link.href );
	
//		} else {
//			location.href = link.href;
//		}
	
		diaryPopupSimple( link.href );
		return false
	}

	return true;
}

function diaryPopupSimple(url) {
	window.name = "mainWindow";
	com.bigbad.Popup.popup( url, "diary", diaryPopupFeatures );
}

var assetViewerPopupFeatures = new com.bigbad.PopupFeatures({scrollbars:true,status:false,width:670,height:500});
function assetViewerPopup( link ) {
	window.name = "mainWindow";
	com.bigbad.Popup.popupDom( link, assetViewerPopupFeatures );

	return false;

}

var timelineFlashVersionUrl = "/jfkl/modules/timeline/default.aspx";

var timelinePopupFeatures = new com.bigbad.PopupFeatures({scrollbars:false,status:false,width:670,height:420});

function timelinePopup( link ) {
	if( link==null || typeof link == "string" ) {
		// new version: link is the query string
		timelinePopupSimple( timelineFlashVersionUrl + "?" + link );
		return false;

	} else if( link.href ) {
		// old version
//		if( hasFlash7 ) {
			window.name = "mainWindow";
	
			var flashHref = link.getAttribute( "flashHref" )
			if( flashHref )
				link.href = flashHref;
	
			timelinePopupSimple( link.href );
//		} else {
//			location.href = link.href;
//		}
		return false;
	}

	return true;
}

function timelinePopupSimple(url) {
	window.name = "mainWindow";
	com.bigbad.Popup.popup( url, "timeline", timelinePopupFeatures );
}


var tourFlashVersionUrl = "/jfkl/modules/tour/default.aspx";

var tourPopupFeatures = new com.bigbad.PopupFeatures({scrollbars:false,status:false,resizable:false,width:670,height:420});

function tourPopup( link ) {
	if( link==null || typeof link == "string" ) {
		// new version: link is the query string
		tourPopupSimple( tourFlashVersionUrl + "?" + link );
		return false;

	} else if( link.href ) {
//		if( hasFlash7 ) {
			window.name = "mainWindow";
	
			var flashHref = link.getAttribute( "flashHref" )
			if( flashHref )
				link.href = flashHref;
	
			tourPopupSimple( link.href );
	
//		} else {
//			location.href = link.href;
//		}
	
		return false;
	}

	return true;
}

function tourPopupSimple(url) {
	window.name = "mainWindow";
	com.bigbad.Popup.popup( url, "tour", tourPopupFeatures );
}
function writeTimelineFlash(flashVars){
	document.write( '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="750" height="396" id="JFK_Timeline_SM" align="middle" VIEWASTEXT><param name="allowScriptAccess" value="sameDomain" /><param name="movie" value="JFK_Timeline_SMAudio.swf" /><param name="quality" value="best" /><param name="scale" value="exactfit" /><param name="wmode" value="opaque" /><param name="bgcolor" value="#aa9d99" /><param name="FlashVars" value="'+flashVars+'" /><embed src="JFK_Timeline_SMAudio.swf" flashvars="'+flashVars+'" quality="best" scale="exactfit" wmode="opaque" bgcolor="#aa9d99" width="750" height="396" name="JFK_Timeline_SM" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>' );
}
function writeTourFlash(){
	document.write( '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" class="tourFlash" id="tour" align="middle" VIEWASTEXT><param name="allowScriptAccess" value="sameDomain" /><param name="quality" value="high" /><param name="scale" value="noscale" /><param name="wmode" value="transparent" /><param name="bgcolor" value="#000000" /><param name="movie" value="MuseumVirtualTour.swf" /><embed src="MuseumVirtualTour.swf" scale="noscale" bgcolor="#000000" name="tour" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" wmode="transparent" class="tourFlash" /></object>' );
}
function writeDiaryFlash(flashVars){
	document.write( '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" class="diaryFlash" align="middle" VIEWASTEXT><param name="allowScriptAccess" value="sameDomain" /><param name="quality" value="high" /><param name="scale" value="noscale" /><param name="bgcolor" value="#F9F4E1" /><param name="movie" value="JFKLibraryDiary.swf" /><param name="FlashVars" value="'+flashVars+'" /><embed class="diaryFlash" flashvars="'+flashVars+'" scale="noscale" bgcolor="#F9F4E1" name="diary" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="JFKLibraryDiary.swf" /></object>' );
}

