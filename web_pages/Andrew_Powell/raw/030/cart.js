function genTargetFunction(x) { return function(){if (x.readyState == 4) { document.getElementById('shopcart').innerHTML=x.responseText } } }
function load_cart_data() {
  var xmlhttp = false;

  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      xmlhttp = false;
    }
  }

  try {
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }


    if (xmlhttp) {
      m = document.cookie.match(/chocolate=([a-z0-9_]+)/);
      if(m) {
        xmlhttp.open('GET','/cart/value/'+m[1]);
        xmlhttp.onreadystatechange=genTargetFunction(xmlhttp);
        xmlhttp.send(null);      
      }
    }
  } catch(e) {}   
}


try {
  if (window.attachEvent) window.attachEvent('onload',load_cart_data);
  else if (window.addEventListener) window.addEventListener('load',load_cart_data,false);
} catch(e) { }
