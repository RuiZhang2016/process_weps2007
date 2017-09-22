//------------------------------------------------------
// The Video Ad Controller Object
VideoAdController.prototype = new CBSObject();
VideoAdController.prototype.constructor = VideoAdController;
function VideoAdController(videoPlayer, width, height) {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "VideoAdController";
	_objects[this.objectId] = this;

	this.videoPlayer = videoPlayer;
	this.videoPlayer.attachEvent("onSegmentSet", this.onSegmentSet, this);
	this.videoPlayer.attachEvent("onSegmentClosed", this.onSegmentClosed, this);
	
	this.width = width;
	this.height = height;
	
	this.startHTML = "";
	this.endHTML = "";
}


//---------------------------------------------------------------
// Called when segment params have been set
VideoAdController.prototype.onSegmentSet = function(event, segment) {
	this.log("ad", "onSegmentSet " + segment.title + " " + segment.ad);
	if (segment.ad) {
		this.log("ad", "onSegmentSet adUrl" + this.width + "x" + this.height + " = " + segment["adUrl" + this.width + "x" + this.height]);
		this.log("ad", "onSegmentSet adImg" + this.width + "x" + this.height + " = " + segment["adImg" + this.width + "x" + this.height]);
		if (segment["adUrl" + this.width + "x" + this.height]) {
			var adUrl = segment["adUrl" + this.width + "x" + this.height];
			var adDiv = document.getElementById("adDiv" + this.objectId);
			if (adDiv) {
				var html = this.startHTML;
				html += '<IFRAME ID="adFrame" SRC="' + adUrl + '" FRAMEBORDER="0" SCROLLING="NO" width="' + this.width + '" height="' + this.height + '" BORDER="0"></IFRAME>';
				html += this.endHTML;
				adDiv.innerHTML = html;
				adDiv.style.visibility = 'visible';
			}
		} else if (segment["adImg" + this.width + "x" + this.height]) {
			var adImg = segment["adImg" + this.width + "x" + this.height];
			var adClk = segment["adClk" + this.width + "x" + this.height];
			var adDiv = document.getElementById("adDiv" + this.objectId);
			if (adDiv) {
				var html = this.startHTML;
				if (adClk) html += '<a href="' + adClk + '" target="_new">';
				html += '<img src="' + adImg + '" width="' + this.width + '" + height="' + this.height + '" border="0">';
				if (adClk) html += '</a>';
				html += this.endHTML;
				adDiv.innerHTML = html;
				adDiv.style.visibility = 'visible';
			}
		} else {
			var adDiv = document.getElementById("adDiv" + this.objectId);
			if (adDiv) {
				adDiv.innerHTML = "";
				adDiv.style.visibility = 'hidden'; 
			}
		}	
		if (segment.startImg) {
			var img = new Image;
			img.src = segment.startImg;
		}
		if (segment.startUrl) {
			var codeDiv = document.getElementById("codeDiv" + this.objectId);
			if (codeDiv) {
				var html = '<IFRAME ID="codeFrame" SRC="' + segment.startUrl + '" FRAMEBORDER="0" SCROLLING="NO" width="0" height="0" BORDER="0"></IFRAME>';
				codeDiv.innerHTML = html;
			}
		}
	}
}

//---------------------------------------------------------------
// Called when segment is closed
VideoAdController.prototype.onSegmentClosed = function(event, segment) {
	this.log("ad", "onSegmentClosed " + segment.title + " " + segment.ad);
	if (segment.ad) {
		if (segment.endImg) {
			var img = new Image;
			img.src = segment.endImg;
		}
		if (segment.endUrl) {
			var codeDiv = document.getElementById("codeDiv" + this.objectId);
			if (codeDiv) {
				var html = '<IFRAME ID="codeFrame" SRC="' + segment.endUrl + '" FRAMEBORDER="0" SCROLLING="NO" width="0" height="0" BORDER="0"></IFRAME>';
				codeDiv.innerHTML = html;
			}
		}
	}
}

//---------------------------------------------------------------
// Print out the div to the page
VideoAdController.prototype.print = function(width, height) {
	if (width) this.width = width;
	if (height) this.height = height;
	
	document.write("<span id='adDiv" + this.objectId + "' style='visibility:hidden;'></span>");
	document.write("<span id='codeDiv" + this.objectId + "'></span>");
}

