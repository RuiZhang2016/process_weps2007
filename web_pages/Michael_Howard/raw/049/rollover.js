var origImg = null;

function mouseover(img){
	if (document.images){
		origImg = img.src;
		var rollover_path = origImg.substring(0, (origImg.length - 8));
		img.src = rollover_path + "_on.gif";
	}
}

function mouseout(img){
	if (document.images) img.src = origImg;
}