var http = false;
if(navigator.appName == "Microsoft Internet Explorer") {
  http = new ActiveXObject("Microsoft.XMLHTTP");
} else {
  http = new XMLHttpRequest();
}

function replace(did,url) {
  didc=document.getElementById(did+"c");
  didc.innerHTML = "<center><img src='/images/indicator_medium.gif' width='32' height='32' vspace='"+(didc.offsetHeight-34)/2+"'/></center>";
  http.open("GET", url, true);
  http.onreadystatechange=function() {
    if(http.readyState == 4) {
      document.getElementById(did).innerHTML = http.responseText;
    }
  }
  http.send(null);
}
