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
