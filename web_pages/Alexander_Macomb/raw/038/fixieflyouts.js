function hideBoxes() {
	var selectBoxes = document.getElementsByTagName("select");
	for (var j = 0; j < selectBoxes.length; j++) {
		selectBoxes[j].style.visibility = "hidden";
	}
}

function showBoxes() {
	var selectBoxes = document.getElementsByTagName("select");
	for (var j = 0; j < selectBoxes.length; j++) {
		selectBoxes[j].style.visibility = "visible";
	}
}

function prepFlyoutLinks() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (window.ActiveXObject) {
		if (document.getElementById("navleft") || document.getElementById("navleftlist")) {
			if (document.getElementById("navleft")) {
				var navigationArea = document.getElementById("navleft");
			}
			else if (document.getElementById("navleftlist")) {
				var navigationArea = document.getElementById("navleftlist");
			}
			var navigationLinks = navigationArea.getElementsByTagName("a");
			for (var i = 0; i < navigationLinks.length; i++) {
				setNavMouseOver(navigationLinks[i], hideBoxes);
				setNavMouseOut(navigationLinks[i], showBoxes);
			}
		}
		if (document.getElementById("navtop2") || document.getElementById("navtop2list")) {
			if (document.getElementById("navtop2")) {
				var navigationArea = document.getElementById("navtop2");
			}
			if (document.getElementById("navtop2list")) {
				var navigationArea = document.getElementById("navtop2list");
			}
			var navigationLinks = navigationArea.getElementsByTagName("a");
			for (var i = 0; i < navigationLinks.length; i++) {
				setNavMouseOver(navigationLinks[i], hideBoxes);
				setNavMouseOut(navigationLinks[i], showBoxes);
			}
		}
	}
}

addOnLoadEvent(prepFlyoutLinks);