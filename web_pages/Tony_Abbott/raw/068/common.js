function bookmark(){
  var url = document.location.href;
  var title = document.title; 
  
  if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
  window.external.AddFavorite(url,title);
  } else if (navigator.appName == "Netscape") {
    window.sidebar.addPanel(title,url,"");
  } else {
    alert("Press CTRL-D (Netscape) or CTRL-T (Opera) to bookmark");
  }
}

function searchTips()
{
    var v = window.open("/search-tips.php", "stips", "width=400, height=400, scrollbars=yes, resizable=yes");
    v.focus;
}