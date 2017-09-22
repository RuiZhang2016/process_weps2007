function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}

function drawStubCols() {
	try {
		var bottomPos = findPosY(document.getElementById('footer'));
		var bottomBodyTop = false;
		if (document.getElementById('bottomBody')) {
			bottomBodyTop = findPosY(document.getElementById('bottomBody'));
		}
	}
	catch (e) {
	}
	try {
		if (document.getElementById('leftColumn')) {
			var leftColTop = findPosY(document.getElementById('leftColumn'));
			var newHeight = bottomPos - leftColTop;
			document.getElementById('leftColumn').style.height = newHeight+'px';
		}
	}
	catch (e) {
	} 
	try {
		if (document.getElementById('outerRightColumn')) {
			var outerRightColTop = findPosY(document.getElementById('outerRightColumn'));
			var newHeight = bottomPos - outerRightColTop;
			document.getElementById('outerRightColumn').style.height = newHeight+'px';
		}
	}
	catch (e) {
	}
	try {
		if (document.getElementById('innerRightColumn')) {
			var outerRightColTop = findPosY(document.getElementById('innerRightColumn'));
			var newHeight = bottomPos - outerRightColTop;
			document.getElementById('innerRightColumn').style.height = newHeight+'px';
		}
	}
	catch (e) {
	}
	try {
		if ((document.getElementById('bottomBody')) && (bottomBodyTop)) {
			var bShift = bottomBodyTop - findPosY(document.getElementById('bottomBody')) +20;
			document.getElementById('bottomBody').style.marginTop = bShift+'px'; 
		}
	}
	catch (e) {
	}
}