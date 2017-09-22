function marketingAd() {
  if (document.cookie.indexOf("bcomAD") < 0) {
     document.cookie= "bcomAD=1;";
     if (showAd()) {
       setTimeout("displayAd()", 10000);
     }
  }
}

function displayAd() {
     var popUnder = window.open('/popunderAd', 'bcomAd', 'directories=no, scrollbars=no,width=350,height=402,left=225,top=150');
     if (popUnder) popUnder.blur();
}

function showAd() {
   var  query = location.search;
   query = query.toUpperCase();
   var  source = query.indexOf("SOURCE=");
   var  code = query.substr(source+7, 2);
   if (code == "G2") {
     return false;
   } else {
     return true;
   }
}


