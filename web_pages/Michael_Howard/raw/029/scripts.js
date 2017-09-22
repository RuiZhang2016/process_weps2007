function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}
function changeImagesArray(array) {
	if (preloadFlag == true) {
		var d = document; var img;
		for (i=0;i<array.length;i+=2) {
			img = null; var n = array[i];
			if (d.images) {
				if (d.layers) {img = findElement(n,0);}
				else {img = d.images[n];}
			}
			if (!img && d.getElementById) {img = d.getElementById(n);}
			if (!img && d.getElementsByName) {
				var elms = d.getElementsByName(n);
				if (elms) {
					for (j=0;j<elms.length;j++) {
						if (elms[j].src) {img = elms[j]; break;}
					}
				}
			}
			if (img) {img.src = array[i+1];}
		}
	}
}
function changeImages() {
	changeImagesArray(changeImages.arguments);
}
