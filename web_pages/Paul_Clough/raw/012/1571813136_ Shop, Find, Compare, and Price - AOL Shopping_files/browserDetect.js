function Is () {
	var ua = navigator.userAgent.toLowerCase();

   this.isGecko       = (ua.indexOf('gecko') != -1 && ua.indexOf('safari') == -1);
   this.isAppleWebKit = (ua.indexOf('applewebkit') != -1);
   this.isKonqueror   = (ua.indexOf('konqueror') != -1);
   this.isSafari      = (ua.indexOf('safari') != - 1);
   this.isOmniweb     = (ua.indexOf('omniweb') != - 1);
   this.isOpera       = (ua.indexOf('opera') != -1);
   this.isIcab        = (ua.indexOf('icab') != -1);
   this.isAol         = (ua.indexOf('aol') != -1);
   this.isIE          = (ua.indexOf('msie') != -1 && !this.isOpera && (ua.indexOf('webtv') == -1) );
   this.isMozilla     = (this.isGecko && ua.indexOf('gecko/') + 14 == ua.length);
   this.isFirebird    = (ua.indexOf('firebird/') != -1);
   this.isNS          = ( (this.isGecko) ? (ua.indexOf('netscape') != -1) : ( (ua.indexOf('mozilla') != -1) && !this.isOpera && !this.isSafari && (ua.indexOf('spoofer') == -1) && (ua.indexOf('compatible') == -1) && (ua.indexOf('webtv') == -1) && (ua.indexOf('hotjava') == -1) ) );
   this.isns6 = (navigator.userAgent.indexOf("Netscape6") != -1)
   this.isns7 = (navigator.userAgent.indexOf("Netscape/7.0") != -1)
   this.isns702 = (navigator.userAgent.indexOf("Netscape/7.02") != -1)
   this.compu70 = (ua.indexOf("7.0/7.0") != -1)
   this.compu60 = (ua.indexOf("cs 2000 6.0") != -1);
   this.isIECompatible = ( (ua.indexOf('msie') != -1) && !this.isIE);
   this.isNSCompatible = ( (ua.indexOf('mozilla') != -1) && !this.isNS && !this.isMozilla);
   this.geckoVersion = ( (this.isGecko) ? ua.substring( (ua.lastIndexOf('gecko/') + 6), (ua.lastIndexOf('gecko/') + 14) ) : -1 );
   this.equivalentMozilla = ( (this.isGecko) ? parseFloat( ua.substring( ua.indexOf('rv:') + 3 ) ) : -1 );
   this.appleWebKitVersion = ( (this.isAppleWebKit) ? parseFloat( ua.substring( ua.indexOf('applewebkit/') + 12) ) : -1 );
   this.versionMinor = parseFloat(navigator.appVersion);

   if (this.isGecko && !this.isMozilla) {
      this.versionMinor = parseFloat( ua.substring( ua.indexOf('/', ua.indexOf('gecko/') + 6) + 1 ) );
   } else if (this.isMozilla) {
      this.versionMinor = parseFloat( ua.substring( ua.indexOf('rv:') + 3 ) );
   } else if (this.isIE && this.versionMinor >= 4) {
      this.versionMinor = parseFloat( ua.substring( ua.indexOf('msie ') + 5 ) );
   } else if (this.isKonqueror) {
      this.versionMinor = parseFloat( ua.substring( ua.indexOf('konqueror/') + 10 ) );
   } else if (this.isSafari) {
      this.versionMinor = parseFloat( ua.substring( ua.lastIndexOf('safari/') + 7 ) );
   } else if (this.isOmniweb) {
      this.versionMinor = parseFloat( ua.substring( ua.lastIndexOf('omniweb/') + 8 ) );
   } else if (this.isOpera) {
      this.versionMinor = parseFloat( ua.substring( ua.indexOf('opera') + 6 ) );
   } else if (this.isIcab) {
      this.versionMinor = parseFloat( ua.substring( ua.indexOf('icab') + 5 ) );
   }
   this.versionMajor = parseInt(this.versionMinor);
   this.isDOM1 = (document.getElementById);
   this.isDOM2Event = (document.addEventListener && document.removeEventListener);
   this.mode = document.compatMode ? document.compatMode : 'BackCompat';
   this.isWin    = (ua.indexOf('win') != -1);
   this.isWin32  = (this.isWin && ( ua.indexOf('95') != -1 || ua.indexOf('98') != -1 || ua.indexOf('nt') != -1 || ua.indexOf('win32') != -1 || ua.indexOf('32bit') != -1 || ua.indexOf('xp') != -1) );
   this.isMac    = (ua.indexOf('mac') != -1);
   this.isUnix   = (ua.indexOf('unix') != -1 || ua.indexOf('sunos') != -1 || ua.indexOf('bsd') != -1 || ua.indexOf('x11') != -1)
   this.isLinux  = (ua.indexOf('linux') != -1);
   this.isIE3 = (this.isIE && this.versionMajor < 4);
   this.isIE4x = (this.isIE && this.versionMajor == 4);
   this.isIE5x = (this.isIE && this.versionMajor == 5);
   this.isIE55 = (this.isIE && this.versionMinor == 5.5);
   this.isIE6x = (this.isIE && this.versionMajor == 6);
   this.is_nav5down = (this.isNS && this.versionMajor < 5);
}

var is = new Is();
if (is.compu70){
	window.location.href='http://www.pinpointshopping.com';
}

if (is.is_nav5down || is.isIE3 || is.isIE4x || (is.isIE5x && !is.isIE55) || is.isns6 || (is.isMac && is.isIE)) {
	window.location.href='/browserError.html';
}