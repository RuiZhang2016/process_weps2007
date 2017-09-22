// cookies.js
// Derived from the Bill Dortch code at http://www.hidaho.com/cookies/cookie.txt
// 07/19/2002 DJC: GetLogicalCookie() added
// 09/11/2002 PeterH: SetLogicalCookie() added

var today = new Date();
var expiry = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);

function getCookieVal (offset) {
        var endstr = document.cookie.indexOf (";", offset);
        if (endstr == -1) { endstr = document.cookie.length; }
        return unescape(document.cookie.substring(offset, endstr));
        }

function GetCookie (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg) {
                        return getCookieVal (j);
                        }
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0) break;
                }
        return null;
        }

function DeleteCookie (name,path,domain) {
        if (GetCookie(name)) {
                document.cookie = name + "=" +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT";
                }
        }

function SetCookie (name,value,expires,path,domain,secure) {
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

//==========================================================
// GetLogicalCookie
//
// Input:   sMainCookieName - Name of top-level cookie that
//                            contains the logical cookie.
//          sLogicalCookieName - Name of GC::LogicalCookie
//                            containing the data
// Output:  String containing contents of logical cookie
//==========================================================
function GetLogicalCookie(sMainCookieName, sLogicalCookieName)
{
   var sMainCookie = GetCookie(sMainCookieName);

   if (null == sMainCookie)  return null;

   var iStartPOS = sMainCookie.indexOf(sLogicalCookieName);

   if (-1 == iStartPOS) { return null; }

   //-------------------------------------------------------
   // We don't want the logical cookie tag or the '=' that
   // separates the name from the value, so move the start
   // position past these.
   //-------------------------------------------------------

   iStartPOS += sLogicalCookieName.length;
   iStartPOS += 1;

   var iEndPOS = sMainCookie.indexOf("\n", iStartPOS);
   if (-1 == iEndPOS)   { iEndPOS = sMainCookie.length; }

   return unescape(sMainCookie.substring(iStartPOS, iEndPOS));
}

//==========================================================
// SetLogicalCookie
//
// Input:   sMainCookieName - Name of top-level cookie that
//                            contains the logical cookie.
//          sLogicalCookieName - Name of LogicalCookie
//                            to hold the data
//          sLogicalCookieValue - Value to be written to
//                            LogicalCookie
// Output:  returns new value of top-level cookie
//==========================================================
function SetLogicalCookie(sMainCookieName, sLogicalCookieName, sLogicalCookieValue)
{
  var sDELIMITER = "\n";
  var sNewLogicalCookie = sLogicalCookieName+ "=" +sLogicalCookieValue;
  var sMainCookie = GetCookie(sMainCookieName);
  if (sMainCookie){
    var aLogicalCookieArray = sMainCookie.split(sDELIMITER);
    var iWhereToPutNewLCookie = aLogicalCookieArray.length; //put at end by default
    for (var i in aLogicalCookieArray){
      if (aLogicalCookieArray[i].indexOf(sLogicalCookieName) != -1) {
        iWhereToPutNewLCookie = i;
        break;
      }
    }
    aLogicalCookieArray[iWhereToPutNewLCookie] = sNewLogicalCookie;
    sNewLogicalCookie = aLogicalCookieArray.join(sDELIMITER);
  }
  SetCookie(sMainCookieName,sNewLogicalCookie,"","/",".genealogy.com","")
  return sNewLogicalCookie;
}

