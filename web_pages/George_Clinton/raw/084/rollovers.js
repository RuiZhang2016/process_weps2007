function hilite(element) {
	if (element && element.className) {
		if (element.className.match(/current/) || element.className.match(/inactive/)) {
			return;
		}
		element.className  = element.className + "_on";
	}
}

function lolite(element) {
	if (element && element.className) {
		if (element.className.match(/current/) || element.className.match(/inactive/)) {
			return;
		}
		element.className = element.className.replace(/_on$/, "");
	}
}

function hiliteR(element, lvl) {
	if (element == null) return;
	if (lvl == 0) {
		element.className  = element.className + "_on";
	} else {
		hiliteR(element.parentNode, lvl - 1);
	}
}

function loliteR(element, lvl) {
	if (element == null) return;
	if (lvl == 0) {
		element.className = element.className.replace(/_on$/, "");
	} else {
		loliteR(element.parentNode, lvl - 1);
	}
}

function setStatusBar(str, element) {
	if (element) {
		element.old_status = window.status;
	}
	if (element && element.className && 
			(element.className.match(/current/) || element.className.match(/inactive/))) {
		window.status = "";
	} else {
		window.status = str;
	}
	return true;
}

function restoreStatusBar(element) {
	if (element && element.old_status) {
		window.status = element.old_status;
	} else {
		window.status = "";
	}
	return true;
}

function trackHighlight() {
  if (document.getElementById && document.createTextNode) {
    var tables=document.getElementsByTagName('table');
    for (var i=0;i<tables.length;i++)
    {
      if(tables[i].className=='highLight') {
        var trs=tables[i].getElementsByTagName('tr');
        for(var j=0;j<trs.length;j++)
        {
          if(trs[j].parentNode.nodeName=='TBODY') {
            trs[j].onmouseover=function(){this.className='highLight';return false}
            trs[j].onmouseout=function(){this.className='';return false}
          }
        }
      }
    }
  }
}
