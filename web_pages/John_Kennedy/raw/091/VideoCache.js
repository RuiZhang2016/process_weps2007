//------------------------------------------------------
// The Video Cache Object
VideoCache.prototype = new CBSObject();
VideoCache.prototype.constructor = VideoCache;
VideoCache.prototype.numbers = "1234567890";
function VideoCache(videoPlayer) {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "VideoCache";
	_objects[this.objectId] = this;

	this.videoPlayer = videoPlayer;
	
	this.videos = new Array();
}


//------------------------------------------------------
// Get the video object from all possible param choices
VideoCache.prototype.createVideo = function(param1, param2, param3) {
	if (typeof(param1) == "object") {
		// Clone the video so object is local
		var video = new Video(this.videoPlayer);
		for (var prop in param1) {
			video[prop] = param1[prop];
		}
		return video;
	} else if (this.numbers.indexOf(param1.substring(0, 1)) == -1) {
		return new Video(this.videoPlayer, null, param3, param1, param2);
	} else {
		return new Video(this.videoPlayer, param1, param2);
	}
}

//------------------------------------------------------
// Get a video from the cache (or create it if not in cache)
VideoCache.prototype.getVideo = function(param1, param2, param3) {
	this.log("cache", "getVideo " + param1);
	var key = null;
	if (param1 == null) {
		return -1;
	} else if (typeof(param1) == "object") {
		if (param1.videoId) {
			key = param1.videoId;
		} else {
			key = param1.videoUrl;
		}
	} else if (this.numbers.indexOf(param1.substring(0, 1)) == -1) {
		key = param1;
	} else {
		key = param1;
	}
	var video = this.videos[key];
	if (!video) {
		video = this.createVideo(param1, param2, param3);
		this.videos[key] = video;
	}
	return video;
}
//------------------------------------------------------
// Add a video to the cache
VideoCache.prototype.addVideo = function(param1, param2, param3) {
	this.log("cache", "addVideo " + param1);
	return this.getVideo(param1, param2, param3);
}
