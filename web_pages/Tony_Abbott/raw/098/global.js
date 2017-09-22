<!--
function jumpMenu(targ,selObj,restore) { eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'"); if (restore) selObj.selectedIndex=0; }

// StyleSwitcher functions written by Paul Sowden
// http://www.alistapart.com/stories/alternate/
function setActiveSS(title) { var i, a, main; for (i=0; (a = document.getElementsByTagName("link")[i]); i++) { if (a.getAttribute("rel") && a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) { a.disabled = true; if(a.getAttribute("title") == title) a.disabled = false; } } }
function getActiveSS() { var i, a; for (i=0; (a = document.getElementsByTagName("link")[i]); i++) { if (a.getAttribute("rel") && a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled ) return a.getAttribute("title"); } return null; }
function getPreferredSS() { var i, a; for (i=0; (a = document.getElementsByTagName("link")[i]); i++) { if (a.getAttribute("rel") && a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title") ) return a.getAttribute("title"); } return null; }
function createCookie(name,value,days) { if (days) { var date = new Date(); date.setTime(date.getTime()+(days*24*60*60*1000)); var expires = "; expires="+date.toGMTString(); } else expires = ""; document.cookie = name+"="+value+expires+"; path=/"; }
function readCookie(name) { var nameEQ = name + "="; var ca = document.cookie.split(';'); for(var i=0;i < ca.length;i++) { var c = ca[i]; while (c.charAt(0)==' ') c = c.substring(1,c.length); if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length); } return null; }
window.onload = function(e) { var cookie = readCookie("style"); var title = cookie ? cookie : getPreferredSS(); setActiveSS(title); }
window.onunload = function(e) { var title = getActiveSS(); createCookie("style", title, 365); }
var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredSS();
setActiveSS(title);

function leftAlign() { var elements = document.getElementsByTagName("p"); for(var i = 0; i < elements.length; i++) { elements.item(i).style.textAlign = "left"; } }
function justifyAlign() { var elements = document.getElementsByTagName("p"); for(var i = 0; i < elements.length; i++) { elements.item(i).style.textAlign = "justify"; } }
//-->