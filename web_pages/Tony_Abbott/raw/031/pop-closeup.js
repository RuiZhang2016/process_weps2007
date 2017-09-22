
<!-- Begin POP-UP SIZES AND OPTIONS CODE


function popUp(URL) {
var view_width = 650
var view_height = 500
var look='toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+view_width+',height='+view_height+','
popwin=window.open("","",look)
popwin.document.open()
popwin.document.write('<title>Close Up</title><head>')
popwin.document.write('<link rel=StyleSheet href="coolstyle.css" type="text/css" media="screen"></head>')
popwin.document.write('<body bgcolor="#000000" background="picts/background-popup.jpg" leftmargin=0 rightmargin=0 topmargin=0 bottommargin=0 marginheight=0 marginwidth=0>')
popwin.document.write('<TABLE cellpadding=0 cellspacing=0 border=0 width="100%" height="100%" ><tr><td align="center">')
popwin.document.write('<center><br>')
popwin.document.write('<TABLE cellpadding=0 cellspacing=0 border=1 bordercolor="#FFFFFF"><tr><td>')
popwin.document.write('<img src="'+URL+'">')
popwin.document.write('</td></tr></table>')
popwin.document.write('</td></tr><tr><td valign="bottom" align="center">')
popwin.document.write('<br><form><input type=submit value="Close" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'" class="button-popups" onClick=\'self.close()\'></form><br>')
popwin.document.write('</center>')
popwin.document.write('</td></tr></table>')
popwin.document.write('</body>')
popwin.document.close()
}


// End -->



document.write('<div Class="divstyle" id="info" style=\'display:none;\'>')
document.write('<div id="imagetitle" class="pstyletitle" align="center"></div>')
document.write('</div>')



<!-- Begin SMALL MESSAGES


var IE = document.all?true:false

if (!IE) document.captureEvents(Event.MOUSEMOVE)

document.onmousemove = getMouseXY;

var tempX = 0
var tempY = 0

  
function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft
    tempY = event.clientY + document.body.scrollTop
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX
    tempY = e.pageY
  }  
  // catch possible negative values in NS4
  if (tempX < 0){tempX = 0}
  if (tempY < 0){tempY = 0}  
  // show the position values in the form named Show
  // in the text fields named MouseX and MouseY
obj_info = document.getElementById("info")
obj_info.style.top = tempY + 10;
obj_info.style.left = tempX + 10;
  return true
}

function alert_msg(titletext){
obj_info = document.getElementById("info")
obj_info.style.display = '';
obj_imagetitle = document.getElementById("imagetitle");
obj_imagetitle.innerHTML = titletext;

}

function away()
{
obj_info = document.getElementById("info")
obj_info.style.display = 'none';
}


function goToURL() { history.go(-1); }


//  End -->