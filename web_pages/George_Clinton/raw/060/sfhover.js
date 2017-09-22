// mimicks li:hover for IE, which doesn't support it
var hoverDebug = Array();
sfHover = function() {
	try
	{

		var sfEls = document.getElementById("sitenav").getElementsByTagName("LI");
		for (var i=0; i<sfEls.length; i++) {
			sfEls[i].onmouseover=function() {
				this.className+=" sfhover";
			}
			sfEls[i].onmouseout=function() {
				this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
			}
		}
	}
	catch(err)
	{
		hoverDebug[0] = err;
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

// mimicks li:hover for IE, which doesn't support it
sfHoverSub = function() {
	try {
	var sfElsSub = document.getElementById("subnav").getElementsByTagName("LI");
		for (var i=0; i<sfElsSub.length; i++) {
			sfElsSub[i].onmouseover=function() {
				this.className+=" sfhover";
			}
			sfElsSub[i].onmouseout=function() {
				this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
			}
		}
	}
	catch(err)
	{
		hoverDebug[1] = err;
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHoverSub);
