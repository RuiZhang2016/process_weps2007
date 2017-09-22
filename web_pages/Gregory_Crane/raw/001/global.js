
// for XMLHttpRequest
var xmlhttp=false;
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
 try {
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 } catch (e) {
  try {
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
   xmlhttp = false;
  }
 }
@end @*/
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  xmlhttp = new XMLHttpRequest();
}

function loadElement(fragment_url, element_id) {
    var element = document.getElementById(element_id);
    element.innerHTML = '<br /><br /><strong>Loading ...</strong><br /><br />';
    xmlhttp.open("GET", fragment_url);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            element.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
}

