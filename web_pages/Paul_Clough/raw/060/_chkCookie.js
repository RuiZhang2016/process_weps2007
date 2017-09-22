
var cookiesEnabled = false;
// Retrieves particular cookie
function getCookie(cookieName)
{
   var cookieFoundAt;
   var cookieValue;
   // find start position in cookie string
   cookieFoundAt = document.cookie.indexOf(cookieName + "=");
      if (cookieFoundAt < 0)
      {
         cookieValue = "";
      }
   else
      {
         // move to actual start of cookie's data
         cookieFoundAt = document.cookie.indexOf("=",cookieFoundAt);
         cookieFoundAt++;
         // find end position of cookie's data
         cookieEnd = document.cookie.indexOf(";", cookieFoundAt);
         if (cookieEnd == -1)
            {
             cookieEnd = document.cookie.length - 1;
            }
         cookieValue =document.cookie.substring(cookieFoundAt,cookieEnd);
      }
   return cookieValue;
}
// Check whether cookies enabled
   document.cookie = "Enabled=true";
   var cookieValid = document.cookie;
   // if retrieving the VALUE we just set actually works 
   // then we know cookies enabled
   if (cookieValid.indexOf("Enabled=true") != -1)
   {
      cookiesEnabled = true;
   }
   else
   {
      cookiesEnabled = false;
   }
if (cookiesEnabled) document.write('');
if (currSelect == "yes") document.write('<br />TO ORDER, please select your region: <a href="javascript://" onclick="SetCookie(\'page\', \'uk\', exp);setTimeout(\'location.reload()\', 500);">UK/Europe</a> | <a href="javascript://" onclick="SetCookie(\'page\', \'us\', exp);setTimeout(\'location.reload()\', 500);">US &amp; Rest of World</a>');
if (cookiesEnabled == false) document.write("<br />Cookies are: <b><font color=\"red\">disabled!</b> Please enable them before placing an order</font>")