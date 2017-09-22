document.onclick = lsck;

function lsck(e) {

if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(navigator.userAgent) != null)
      rv = parseFloat( RegExp.$1 );
    	if ( rv >= 6.0 ) { 

	if (window.event.srcElement) {
	var c = window.event.srcElement;
	var ck = c;
	var today = new Date();
    	if (!ck.isTextEdit && ck.getAttribute("href") != null) {
        	ck = c.parentTextEdit;
			}
			
		if ((ck != null && c.getAttribute("href") != null)) {
			if ((c.nodeName == "A") || (c.nodeName == "IMG") || (c.nodeName == "a")) {
				var oTextRange = ck.createTextRange();
				var r2 = c.getClientRects();
				var d = document.documentElement;
				var t1 = r2[0].top + d.scrollTop;
				var l1 = r2[0].left + d.scrollLeft;
				var b1 = r2[0].bottom + d.scrollTop;
				var r1 = r2[0].right + d.scrollLeft;
   	 			var t = c.getBoundingClientRect().top + d.scrollTop;
				var l = c.getBoundingClientRect().left + d.scrollLeft;
				var w = c.getBoundingClientRect().right-c.getBoundingClientRect().left;
				var h = c.getBoundingClientRect().bottom-c.getBoundingClientRect().top;
				//account for the customisation box
				if (document.all['customise'] && t > document.all['customise'].getBoundingClientRect().bottom) {
					t = t-document.all['customise'].offsetHeight-10;
					t1 = t1-document.all['customise'].offsetHeight-10;
					b1 = b1-document.all['customise'].offsetHeight-10;
				}
				document.cookie = "BBCLiveStatsClick=" + l1 + "," + b1 + "," + t1 + "," + r1 + "," + l +"," + w + "," + t + "," + h + ";domain=bbc.co.uk;path=/;expires=" + new Date( today.getTime() + 8000 ).toGMTString() + ";";
				}
		}
	}		
	
	}
	}
	//catch pagetool clicks
	var cl = "";
	var ty = "";
	var si = "";
	var ed = "";
	
	if (e) {
		cl = e.target+"";
	}
	else if (window.event.srcElement) {
		cl = window.event.srcElement.getAttribute("href")+"";
	}
	if ((cl != null) && (cl.match(/pagetools/))) {
	if (cl.match(/email/)) { ty = "Email"; }
	else if (cl.match(/print/)) { ty = "Print"; }
	cl = cl.replace("http://newsvote.bbc.co.uk","");
	ar = cl.split("?");
	si = ar[0].replace(".stm","").substr(ar[0].length-11, ar[0].length);
	if (si.length == 7) {
		var documentURL = document.location+"";
		if (documentURL.match(/http:\/\/news/)) {
			if (ar[0].match(/\/1\/hi\//)) { ed = "Domestic"; }
				else {ed = "International";}
				var i = new Image(1,1); i.src="http://stats.bbc.co.uk/o.gif?~RS~s~RS~News~RS~t~RS~" + ty + "~RS~i~RS~" + si + "~RS~p~RS~0~RS~u~RS~" + document.location +"~RS~r~RS~" + document.location + "~RS~a~RS~" + ed + "~RS~q~RS~-~RS~z~RS~0";
			}
		}
	}
	
	//return true;
}

