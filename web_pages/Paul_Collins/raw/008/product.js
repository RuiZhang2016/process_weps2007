// We always set this cookie
document.cookie = "lastlocation="+document.location+"; path=/; domain=.powells.com;";

function open_window(url) {
   mywin = window.open(url,"win",'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=500,height=275');
}

function show_big_images(url, width) {
   mywin = window.open(url,"win",'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,width='+width+',height=560');
}

function open_smaller_window(url) {
   mywin = window.open(url,"win",'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=400,height=500');
}

function open_freeship_window(url) {
  mywin = window.open(url,"win",'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=500,height=500');
}

function launchBookwrap(strISBN, version){
  var strURL = "http://www.powells.com/cgi-bin/bookwrap_redirect?display=" + strISBN + '&version=' + version;

  if (version == 1){
    var bStream = window.open(strURL,'bookwrap', 'height=460,width=280,scrollbars=no,status=no,toolbar=no, menubar=no, location=no,resizable=no');
  } else {
    var bStream = window.open(strURL,'bookwrap', 'height=295,width=760,scrollbars=no,status=no,toolbar=no, menubar=no, location=no,resizable=no');
  }//if

  if (bStream)
    bStream.focus();
}
