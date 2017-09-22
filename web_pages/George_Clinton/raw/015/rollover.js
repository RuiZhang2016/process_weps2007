function preprollovers() {
	var rollfound=0;

	if (document.getElementsByTagName) {

// grab all the images on a page

	for (z=0;z<document.getElementsByTagName("img").length;z++) {
		thisImg = document.getElementsByTagName("img")[z];

// check that its got the proper class
		if (thisImg.className !=null) { /* safari seems to break when these two tests are combined */
			if (thisImg.className.indexOf("roll") != -1) {
				rollfound++;

// define states, preload the image and attach the event handlers
				thisImg.out = new Image(); thisImg.out.src = thisImg.src;

//works with gifs and jpegs
				if(thisImg.src.toString().indexOf(".gif")!=-1) {
					thisImg.over = new Image(); thisImg.over.src = thisImg.src.toString().replace(/.gif/i,"_o.gif");
				 }
				if(thisImg.src.toString().indexOf(".jpg")!=-1) {
					thisImg.over = new Image(); thisImg.over.src = thisImg.src.toString().replace(/.jpg/i,"_o.jpg");
				 }					
				thisImg.parentNode.onmouseover = function () {
					this.getElementsByTagName("img")[0].src = this.getElementsByTagName("img")[0].over.src;
				};
				thisImg.parentNode.onmouseout = function () {
					this.getElementsByTagName("img")[0].src = this.getElementsByTagName("img")[0].out.src;
				};
			}
		}		
	}
}
}
