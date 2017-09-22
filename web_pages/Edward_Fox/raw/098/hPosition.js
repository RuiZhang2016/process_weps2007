document.write('');
var NSimage=0;
var IEimage=0;
var UAimage=navigator.userAgent;
var navStyleObj;

if (document.all) {
	IEimage = 1;
	navStyleObj = document.all.NAVSPAN.style;
	classStyleObj = document.all.CLASSNAVSPAN.style;
} else if (document.layers) {
	NSimage = 1;
	navStyleObj = document.layers['NAVSPAN'];
	classStyleObj = document.layers['CLASSNAVSPAN'];
}

if (IEimage) {
	if (UAimage.indexOf('Mac') > -1) {
		if (UAimage.indexOf('5.') > -1) {
			moveNav(0,-3);
		} else {
			moveNav(-2,-1);
		}
	} else {
		// PC-IE gets default position
		//	moveNav(2,6);
	}
} else if (NSimage) {
	if (UAimage.indexOf('Mac') > -1) {
		moveNav(0,-8);
	}
	moveNav(-2,-5);
}

function moveNav(leftMove,topMove) {
	if (IEimage) {
		navStyleObj.left = ((parseInt(navStyleObj.left) + leftMove) + 'px');
		classStyleObj.left = ((parseInt(classStyleObj.left) + leftMove) + 'px');
		navStyleObj.top = ((parseInt(navStyleObj.top) + topMove) + 'px');
		classStyleObj.top = ((parseInt(classStyleObj.top) + topMove) + 'px');
	} else if (NSimage) {
		navStyleObj.left += leftMove;
		classStyleObj.left += leftMove;
		navStyleObj.top += topMove;
		classStyleObj.top += topMove;
	}
}
