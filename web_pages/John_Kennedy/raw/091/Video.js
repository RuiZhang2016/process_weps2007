//------------------------------------------------------
// The Video Object
Video.prototype = new CBSObject();
Video.prototype.constructor = Video;
Video.prototype.numbers = "1234567890";
Video.prototype.xmlLoader = new XMLLoader();
function Video(videoPlayer, videoId, format, videoUrl, imageUrl, title, subtitle, caption, prop1, prop2) {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "Video";
	_objects[this.objectId] = this;

	this.videoPlayer = videoPlayer;
	
	this.videoId = videoId;
	if (format)	this.format = format;
	else this.format = 'wmv|rm';

	if (videoUrl) this.videoUrl = videoUrl;
	else if (videoPlayer) videoUrl = videoPlayer.videoRoot + videoId;
	if (imageUrl) this.imageUrl = imageUrl;
	else if (videoPlayer) imageUrl = videoPlayer.videoImageRoot + videoId;
	
	this.title = title;
	this.subtitle = subtitle;
	this.caption = caption;
	this.prop1 = prop1;
	this.prop2 = prop2;
	this.position = 0;
	this.maxPosition = 0;
	this.duration = 0;
	
	this.adSegment = null;
	this.segments = new Array();
	
	if ((this.videoId) && (!this.title) && (this.videoPlayer)) {
		this.loaded = false;
		this.log("video", "xmlLoad");
		this.xmlLoader.load("/common/vplayer2/xml.php?id=" + this.videoId, this.onLoaded, this);
	} else if (this.title) {
		this.loaded = true;
	}
}

//------------------------------------------------------
// Are these videos the same?
Video.prototype.equals = function(param1, param2, param3) {
	var videoId = null;
	var videoUrl = null;
	if (param1 == null) {
		return false;
	} else if (typeof(param1) == "object") {
		if (param1.videoId) {
			videoId = param1.videoId;
		} else {
			videoUrl = param1.videoUrl;
		}
	} else if (this.numbers.indexOf(param1.substring(0, 1)) == -1) {
		videoUrl = param1;
	} else {
		videoId = param1;
	}
	if (videoId != null) {
		return (this.videoId == videoId);
	} else {
		return (this.videoUrl == videoUrl);
	}
}

//------------------------------------------------------
// Called when the video is loaded from XML
Video.prototype.onLoaded = function(request) {
	if (request.status == 200) {
		this.log("video", "onLoaded");
		var video = this.xmlLoader.getElementByTagName(request.responseXML, "video");
		if (video) {
			this.log("video", "onLoaded " + this.xmlLoader.getElementTextByTagName(video, "id"));
			if (this.videoId == this.xmlLoader.getElementTextByTagName(video, "id")) {
				this.title = this.xmlLoader.getElementTextByTagName(video, "title");
				this.subtitle = this.xmlLoader.getElementTextByTagName(video, "subtitle");
				this.caption = this.xmlLoader.getElementTextByTagName(video, "caption");
				this.duration = this.xmlLoader.getElementTextByTagName(video, "duration");
				var properties = video.getElementsByTagName("property");
				if (properties) {
					for (var i=0; i<properties.length; i++) {
						var rank = this.xmlLoader.getAttributeValue(properties[i], "rank");
						if (rank) {
							this["prop" + rank] = this.xmlLoader.getElementText(properties[i]);
						}
					}
				}
				this.loaded = true;
				this._fireEvent("onLoaded", this);
				if (this.videoPlayer) {
					this.videoPlayer.onVideoLoaded(this);
				}
			}
		}
	} else {
		//alert(request.statusText);
	}
}

//------------------------------------------------------
// URL to the video
Video.prototype.getVideoUrl = function() {
	if (!this.videoPlayer) {
		return this.videoUrl;
	} if (this.videoId) {
		return this.videoPlayer.getVideoUrl(this.videoId);
	} else {
		return this.videoPlayer.getVideoUrl(this.videoUrl);
	}
}
//------------------------------------------------------
// URL to the image
Video.prototype.getImageUrl = function() {
	if (!this.videoPlayer) {
		return this.imageUrl;
	} if (this.videoId) {
		return this.videoPlayer.getImageUrl(this.videoId);
	} else {
		return this.videoPlayer.getImageUrl(this.imageUrl);
	}
}

//------------------------------------------------------
// Add a segment
Video.prototype.newSegment = function() {
	// Ad segment used for special non-script tracking
	if (this.adSegment) {
		var segment = this.adSegment;
		this.adSegment = null;
		this.log("status", "newSegment adSegment " + this.segments.length);
		return segment;
	} else {
		var segment = new Object();
		segment.adSegment = false;
		segment.video = this;
		segment.position = 0;
		segment.maxPosition = 0;
		segment.duration = 0;
		this.segments[this.segments.length] = segment;
		this.log("status", "newSegment " + this.segments.length);
		return segment;
	}
}
Video.prototype.addSegment = function(segment) {
	this.segments[this.segments.length] = segment;
	this.log("status", "addSegment " + this.segments.length);
}
Video.prototype.removeAllSegments = function() {
	this.adSegment = null;
	this.segments.length = 0;
}
Video.prototype.getCurrentSegment = function() {
	this.log("status", "getCurrentSegment " + this.segments.length);
	return this.segments[this.segments.length-1];
}
Video.prototype.getContentSegment = function() {
	for (var i=0; i<this.segments.length; i++) {
		if (!this.segments[i].ad) {
			return this.segments[i];
		}
	}
	return null;
}
Video.prototype.getNumSegments = function() {
	this.log("status", "getNumSegments " + this.segments.length);
	return this.segments.length;
}


