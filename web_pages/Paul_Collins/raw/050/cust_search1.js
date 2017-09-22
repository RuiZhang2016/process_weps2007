<!-- //
function togCust(magId, targetDiv, prefix) {
	// close panel?
	if (showt == targetDiv) {
		document.getElementById(showt).innerHTML='';
		document.getElementById(showt).style.display = 'inline';
		document.getElementById(prefix).innerHTML = charOn;
		showt = "";
		showt2 = "";
	} else {
		// close previous opened panel
		if (showt != '') {
			document.getElementById(showt).innerHTML='';
			document.getElementById(showt).style.display = 'inline';
			document.getElementById(showt2).innerHTML = charOn;
		}
		var cUrl = top.location.href;
		var eUrl = cUrl + "&xp%5B%5D=" + magId;
        eUrl = eUrl.replace(/sn=\d+/, "sn=0");
		var nUrl = cUrl;
		if (nUrl.search(/qf=/) != -1) {
			nUrl = nUrl.replace(/qf=([\w\d%\+]+)/, "qf=" + magId);
			nUrl = nUrl.replace(/sn=\d+/, "sn=0");
		} else {
			nUrl = nUrl + "&qf=" + magId;
		}
		// generate src
		var src = "";
		src += "<ul style='margin-top:3px;margin-bottom:3px;list-style:none;>\n";
		src += "<li style='margin-bottom:2px;'><span style='font-weight:bold;'>&raquo;</span>&nbsp;<a href='" + nUrl + "'>Search within this publication</a></li>\n";
		src += "<li><span style='color:#f00;font-weight:bold;'>x</span>&nbsp;<a href='" + eUrl + "'>Exclude this publication from your search</a></li>\n";
		src += "</ul>\n"

		document.getElementById(targetDiv).innerHTML = src;
		showt = targetDiv;
		document.getElementById(prefix).innerHTML = charOff;
		showt2 = prefix;
	}
}
function refreshMesg(src) {
	if (src == 'toggle') {
		if (document.sortby.free.checked) {
			document.sortby.free.checked = false;
		} else {
			document.sortby.free.checked = true;
		}
	}
    var restrictValue = 1;
    if (!document.sortby.free.checked) {
        restrictValue = 0;
    }
    if (document.sortby.qf.value.match(/^\d+:/)) {
        document.sortby.qf.value = restrictValue + ":" + document.sortby.qf.value.replace(/^\d+:/,"");
    } else {
        document.sortby.qf.value = restrictValue + ":" + document.sortby.qf.value;
    }
	document.getElementById('status').style.display='block';
	document.sortby.submit();
	return true;
}

function refreshMesgVerts(src) {
    var restrictValue = 1;
    if (document.sortby.qf.value.match(/^\d+:/)) {
        document.sortby.qf.value = restrictValue + ":" + document.sortby.qf.value.replace(/^\d+:/,"");
    } else {
        document.sortby.qf.value = restrictValue + ":" + document.sortby.qf.value;
    }
	document.getElementById('status').style.display='block';
	document.sortby.submit();
	return true;
}

function SneakAPeek(url, fid) 
{
  var frmID = 'frame'+fid;var frm = document.all[frmID]; 
  if(url.innerText == "[Sneak-a-Peek]") 
  {
    frm.setAttribute("src", url);
    frm.setAttribute("height", "200");
    frm.setAttribute("width", "100%");
    url.insertAdjacentHTML('AfterEnd', '<A href=\"'+url.href+'\" class=sneak onClick=\"parent.SneakAPeek(this,'+fid+');return false\"><img src=\"http://192.168.1.11/images/close.gif\" border=1 align=right></A>');
    url.innerText = ""; 
  } 
  else 
  {
    frm.setAttribute("height", "0");
    frm.setAttribute("width", "0");
    frm.setAttribute("src", "");
    url.innerText="[Sneak-a-Peek]"; 
  }
}

function SneakAPeekIE6(url, fid) 
{
  var frmID = 'frame'+fid;var frm = document.all[frmID]; 
  
  if(url.innerText == "[Sneak-a-Peek]") 
  {
    frm.setAttribute("src", url);
    frm.setAttribute("height", "200");
    frm.setAttribute("width", "100%");
    url.insertAdjacentHTML('AfterEnd', '<A href=\"'+url.href+'\" class=sneak onClick=\"parent.SneakAPeekIE6(this,'+fid+');return false\"><font color=red>[Close]</font></A>');
    url.innerText = ""; 
  } 
  else 
  {
    frm.setAttribute("height", "0");
    frm.setAttribute("width", "0");
    frm.setAttribute("src", "");
    url.innerText="[Sneak-a-Peek]"; 
  }
}
// -->
