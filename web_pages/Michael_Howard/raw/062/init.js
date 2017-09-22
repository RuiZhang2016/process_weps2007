var axel = Math.random() + "";
var ord = axel * 1000000000000000000;

var doLocal = false;
var startAt = 0;
if ( ( startAt = document.cookie.indexOf( "WPATC" ) ) != -1 )
{
  endAt = document.cookie.indexOf( ";", startAt ) == -1
        ? document.cookie.length
        : document.cookie.indexOf( ";", startAt );
  var tempWPATC = document.cookie.substring( startAt + 6, endAt );
  doLocal = ( tempWPATC.indexOf("C=1") != -1 ); 
} 
// Following line for debug only
if ( location.href.indexOf("doLocal=1") != -1 ) doLocal = true;
