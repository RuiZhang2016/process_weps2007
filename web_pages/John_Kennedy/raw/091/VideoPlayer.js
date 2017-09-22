//------------------------------------------------------
// The VideoPlayer class
VideoPlayer.prototype = new CBSObject();
VideoPlayer.prototype.constructor = VideoPlayer;
VideoPlayer.prototype.numbers = "1234567890";
function VideoPlayer(playerRoot, display, width, height) {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "VideoPlayer";
	_objects[this.objectId] = this;

	this.format = null;
	this.defaultFormat = null;

	if (width) this.width = width;
	else this.width = 320;
	if (height) this.height = height;
	else this.height = 240;
	if (display) this.display = display;
	else this.display = "";
		
	if (playerRoot) this.playerRoot = playerRoot;
	else this.playerRoot = "/common/vplayer2";
	this.videoRoot = "http://video.cgi.cbsnews.com/vplayer2/play2.pl";
	this.videoImageRoot = "http://video.cgi.cbsnews.com/vplayer2/image.pl";
	this.imageRoot = "http://wwwimage.cbsnews.com/common/vplayer2";
	this.videoUrl = null;
	this.videoImageUrl = null;
	
	this.defaultImage = "http://wwwimage.cbsnews.com/common/vplayer2/slate.jpg";
	
	this.product = null;
	this.arena = null;
	this.feature = "vplayer";
	this.dartSite = null;
	this.adType = "pre";
	this.adv = null;
	
	this.currentVideo = null;
	this.cache = new VideoCache(this);
	this.playlist = new VideoPlaylist(this);
	this.defaultPlaylist = new VideoPlaylist(this);
	this.skipToVideo = false;
	
	this.volume = 100;
	this.state = "stop";
	this.playState = "none";
	
	this.capabilities = null;
	
	this.siteName = 'CBSNews.com';
	this.bgcolor = "#003366";
	
	this.iFrame = null;
}


//--------------------------------------------------------
// Calls a command in the frame by getting button in frame and calling onclick
VideoPlayer.prototype._executeFrameCommand = function(command) {
	this.log("command", "_executeFrameCommand " + command);
	var iFrame = this.getIFrameDocument();
	this.log("command", iFrame);
	this.log("command", iFrame.forms);
	this.log("command", iFrame.forms.controlForm);
	var m = "_executeFrameCommand(" + command;
	if (!iFrame.forms.controlForm) return;
	for (var i=1; i<arguments.length; i++) {
		var param = iFrame.forms.controlForm["param" + i];
		if (param) param.value = arguments[i];
		m += ", " + arguments[i];
	}
	this.log("command", m + ")");
	var playCommand = iFrame.forms.controlForm[command + 'Command'];
	if (playCommand) {
		this.log("command", "onclick");
		playCommand.onclick();
		return true;
	} else {
		return false;
	}
}



//--------------------------------------------------------
// Returns the play state
VideoPlayer.prototype.getPlayState = function() {
	return this.playState;
}
// Is a video playing?
VideoPlayer.prototype.isPlaying = function() {
	//if (this.state == "play") return true;
	return (this.playState == "playing");
}
// Is a video playing?
VideoPlayer.prototype.isStopped = function() {
	this.log("status", "isStopped " + this.playState);
	if (this.state == "stop") return true;
	return ((this.playState == "none") || (this.playState == "stopped") || (this.playState == "ended"));
}
// Is a video paused?
VideoPlayer.prototype.isPaused = function() {
	this.log("status", "isPaused " + this.playState);
	if (this.state == "pause") return true;
	return (this.playState == "paused");
}
// Is a video buffering?
VideoPlayer.prototype.isBuffering = function() {
	this.log("status", "isBuffering " + this.playState);
	return (this.playState == "buffering");
}


//--------------------------------------------------------
// Ask user to choose format
VideoPlayer.prototype.chooseFormat = function(showImage, playVideo) {
	this.log("format", "chooseFormat " + showImage + " " + playVideo);
	this.stop();
	this.format = null;
	if (!showImage) showImage = "";
	if (!playVideo) playVideo = "";
	var iFrame = this.getIFrameDocument();

	var url;
	if (this.capabilities.needPlayer) {
		if ((this.capabilities.os == "mac") || (this.capabilities.browser == "firefox")) {
			url = "/noreal_iframe.html";
		} else {
			url = "/none_iframe.html";
		}
	} else {
		url = this.playerRoot + "/choose_iframe.html?id=" + this.objectId + "&showImage=" + showImage + "&playVideo=" + playVideo;
	}
	iFrame.src = url
	iFrame.location.href = url;

}

//--------------------------------------------------------
// Format for playing videos
VideoPlayer.prototype.setFormat = function(format, play) {
	this.log("format", "set Format " + format + " " + play);
	this.videoUrl = null;
	this.format = format;
	var iFrame = this.getIFrameDocument();
	if (iFrame) {
		var url = this.playerRoot + '/' + format + "_iframe.html?id=" + this.objectId + "&ord=" + Math.random() * 100000;;
		if (play) url += "&play=1";
		iFrame.src = url;
		iFrame.location.href = url;
		this.log("format", "setFormat " + url);
	}
	this._fireEvent("onFormatChanged", format);
}
VideoPlayer.prototype.getFormat = function() {
	return this.format;
}

//--------------------------------------------------------
// Default format
VideoPlayer.prototype.setDefaultFormat = function(format) {
	this.log("format", "set DefaultFormat " + format);
	setCookie("vp_format", format, "Fri, 01-Jan-2010 00:00:01 GMT", '/', 2);
	this.defaultFormat = format;
	this._fireEvent("onDefaultFormatChanged", format);
}
VideoPlayer.prototype.getDefaultFormat = function() {
	return this.defaultFormat;
}



//------------------------------------------------------
// Get the video object from all possible param choices
VideoPlayer.prototype.newVideo = function() {
	return new Video(this);
}

//------------------------------------------------------
// Get the video object from all possible param choices
VideoPlayer.prototype.getVideo = function(param1, param2, param3) {
	if (this.cache) {
		return this.cache.getVideo(param1, param2, param3);
	} else {
		if (typeof(param1) == "object") {
			return param1;
		} else if (this.numbers.indexOf(param1.substring(0, 1)) == -1) {
			return new Video(this.videoPlayer, null, param3, param1, param2);
		} else {
			return new Video(this.videoPlayer, param1, param2);
		}
	}
}

//--------------------------------------------------------
// Returns a video url 
VideoPlayer.prototype.getVideoUrl = function(param) {
	if (this.videoUrl == null) {
		this.videoUrl = this.videoRoot + ((this.videoRoot.indexOf('?') == -1) ? '?' : '&');
		this.videoUrl += "type=" + this.format;
		if (this.product) this.videoUrl += "&prod=" + this.product;
		if (this.arena) this.videoUrl += "&arena=" + this.arena;
		if (this.feature) this.videoUrl += "&feat=" + this.feature;
		if (this.dartSite) this.videoUrl += "&dc" + this.dartSite;
		if (this.adType) this.videoUrl += "&adtype=" + this.adType;
		if (this.adv) this.videoUrl += "&adv=" + this.adv;
	}
	if (this.numbers.indexOf(param.substring(0, 1)) == -1) {
		return this.videoUrl + "&url=" + escape(param) + "&ord=" + Math.random() * 100000;
	} else {
		return this.videoUrl + "&id=" + param + "&ord=" + Math.random() * 100000;;
	}
}
//--------------------------------------------------------
// Returns a video image url 
VideoPlayer.prototype.getImageUrl = function(param) {
	if (param == null) {
		return this.defaultImage;
	} else if (this.videoImageUrl == null) {
		this.videoImageUrl = this.videoImageRoot + ((this.videoImageRoot.indexOf('?') == -1) ? '?' : '&');
		this.videoImageUrl += "size=" + this.width + 'x' + this.height;
	}
	if (this.numbers.indexOf(param.substring(0, 1)) == -1) {
		return param;
	} else {
		return this.videoImageUrl + "&id=" + param;
	}
}


//--------------------------------------------------------
// Play Video Video
// Calls can be
// play()
// play(video)
// play(videoUrl, imageUrl, format)
// play(videoId, format)
VideoPlayer.prototype.play = function(param1, param2, param3) {
	this.log("command", "play " + this.format + " " + param1);
	this.state = "play";
	var video;
	if (param1 == null) {
		if (this.getCurrentVideo() == null) {
			this.log("command", "No current video");
			return;
		}
		if (this.isPaused()) {
			this.log("command", "paused");
			return this._executeFrameCommand("play");
		}
		video = this.getCurrentVideo();
	} else { 
		video = this.getVideo(param1, param2, param3);
	}
	this.log("command", "play " + video.videoId);
	this.log("format", "play " + video.format);
	
	// Set the current video
	video.removeAllSegments();
	this.setCurrentVideo(video);

	// Does video exist in multiple formats?
	var playFormat;
	if (video.format.indexOf('|') != -1) {
		if (video.format.indexOf(this.defaultFormat) != -1) {
			playFormat = this.defaultFormat;
		} else if (video.format.indexOf(this.format) != -1) {
			playFormat = this.format;
		} else {
			return this.chooseFormat(false, true);
		}
	} else {
		playFormat = video.format;
	}
	this.log("format", "play " + playFormat + " " + this.format);

	video.playFormat = playFormat;
	this.playState = "loading";
	//this.onVideoOpened(video);
	if (playFormat != this.format)
		this.setFormat(playFormat, true);
	else
		return this._executeFrameCommand("play", video.getVideoUrl(), video.getImageUrl());
}


//--------------------------------------------------------
// Stop 
VideoPlayer.prototype.stop = function() {
	this.log("command", "stop");
	this.state = "stop";
	// Clear the current video
	this.setCurrentVideo(null);
	return this._executeFrameCommand("stop");
}

//--------------------------------------------------------
// Pause
VideoPlayer.prototype.pause = function() {
	this.log("command", "pause");
	this.state = "pause";
	// Clear the current video
	return this._executeFrameCommand("pause");
}
//--------------------------------------------------------
// Rewind
VideoPlayer.prototype.rewind = function() {
	this.log("command", "rewind");
	var video = this.getCurrentVideo();
	if (!this.capabilities.scripting[this.format]) {
		this.stop();
		this.play(video);
	} else if ((this.isPlaying()) && (video) && (video.position > 2)) {
		return this._executeFrameCommand("restart");
	} else {
		if (this.playlist.getPreviousVideo()) {
			this.play(this.playlist.previousVideo());
		} else if (this.defaultPlaylist.getPreviousVideo()) {
			this.play(this.defaultPlaylist.previousVideo());
		} else {
			return this._executeFrameCommand("restart");
		}
	}
}
//--------------------------------------------------------
// Forward
VideoPlayer.prototype.forward = function() {
	this.log("command", "forward");
	var video = this.playlist.nextVideo();
	if (video) {
		return this.play(video);
	}
	video = this.defaultPlaylist.nextVideo();
	if (video) {
		return this.play(video);
	}
	return this.stop();
}

//--------------------------------------------------------
// Volume
VideoPlayer.prototype.setVolume = function(volume) {
	this.log("command", "setVolume");
	this.volume = volume;
	return this._executeFrameCommand("setVolume", volume);
	this._fireEvent("onVolumeChanged", volume);
}
VideoPlayer.prototype.getVolume = function() {
	return this.volume;
}


//--------------------------------------------------------
// Position
VideoPlayer.prototype.setPosition = function(position) {
	this.log("command", "setPosition " + position);
	if ((typeof(position) != "number") && (position.substring(position.length-1) == "%")) {
		var video = this.getCurrentVideo();
		if ((video == null) || (!video.duration)) return;
		var percent = position.substring(0, position.length-1);
		position = percent * video.duration / 100;
	}
	return this._executeFrameCommand("setPosition", position);
	this._fireEvent("setPosition", position);
}
VideoPlayer.prototype.getPosition = function() {
	var video = this.getCurrentVideo();
	if (!video) return 0;
	if (video.segments.length == 0) return 0;
	var pos = video.segments[video.segments.length-1].position;
	if (!pos) return 0;
	return pos;
}



//--------------------------------------------------------
// Full screen
VideoPlayer.prototype.setFullscreen = function() {
	return this._executeFrameCommand("fullscreen");
}





//---------------------------------------------------------------
// Callbacks
// Video opened
VideoPlayer.prototype.onVideoOpened = function(video) {
	this.log("videoCallback", "onVideoOpened ");
	video.state = "opened";
	this._fireEvent("onVideoOpened", video);

	// If loaded from XML, then already set
	if (video.loaded) {
		this.onVideoSet(video);
	}
}
// Video set
VideoPlayer.prototype.onVideoSet = function(video) {
	this.log("videoCallback", "onVideoSet ");
	video.state = "set";
	video.loaded = true;
	this._fireEvent("onVideoSet", video);
}
// Video started
VideoPlayer.prototype.onVideoStarted = function(video) {
	this.log("videoCallback", "onVideoStarted ");
	video.state = "started";
	this._fireEvent("onVideoStarted", video);
}
// Video closed
VideoPlayer.prototype.onVideoClosed = function(video) {
	this.log("videoCallback", "onVideoClosed ");
	video.state = "closed";
	this._fireEvent("onVideoClosed", video);
	video.state = null;
	if (video == this.getCurrentVideo()) {
		if (this.state != "stop") {
			var segment = video.getCurrentSegment();
			if ((segment) && (segment.maxPosition > segment.duration - 2)) {
				this.forward();
			}
		}
	}
}
// Video loaded from XML
VideoPlayer.prototype.onVideoLoaded = function(video) {
	this._fireEvent("onVideoPropertyChanged", video);  // Legacy
	this._fireEvent("onVideoLoaded", video);

	// If in open state, 
	if (video.state == "opened") {
		this.onVideoSet(video);
	}
}

// Segment opened
VideoPlayer.prototype.onSegmentOpened = function(segment) {
	this.log("segmentCallback", "onSegmentOpened ");
	segment.state = "opened";
	this._fireEvent("onSegmentOpened", segment);
}
// Segment set
VideoPlayer.prototype.onSegmentSet = function(segment) {
	this.log("segmentCallback", "onSegmentSet ");
	segment.state = "set";
	this._fireEvent("onSegmentSet", segment);
}
// Segment started
VideoPlayer.prototype.onSegmentStarted = function(segment) {
	this.log("segmentCallback", "onSegmentStarted ");
	segment.state = "started";
	this._fireEvent("onSegmentStarted", segment);
}
// Segment closed
VideoPlayer.prototype.onSegmentClosed = function(segment) {
	this.log("segmentCallback", "onSegmentClosed ");
	segment.state = "closed";
	this._fireEvent("onSegmentClosed", segment);
	segment.state = null;
}

// State changed
VideoPlayer.prototype.onPlayStateChanged = function(state) {
	this.log("stateCallback", "onPlayStateChanged " + state);
	this.playState = state;
	this._fireEvent("onPlayStateChanged", state);
}
// Position changed
VideoPlayer.prototype.onPositionChanged = function(pos, dur) {
	this.log("positionCallback", "onPositionChanged " + pos + "/" + dur);
	this._fireEvent("onPositionChanged", pos, dur);
}
// Buffering 
VideoPlayer.prototype.onBuffering = function(percent) {
	this.log("bufferingCallback", "onBuffering " + percent);
	this._fireEvent("onBuffering", percent);
}
// Command
VideoPlayer.prototype.onCommand = function(type, param) {
	this.log("bufferingCallback", "onCommand " + type + " " + param);
	this._fireEvent("onCommand", type, param);
}


//--------------------------------------------------------------------
// Detect installed players
var detectResult = false; 
VideoPlayer.prototype.detectIEPlugin = function(classID) { 
	document.write('<SCRIPT LANGUAGE=VBScript>\n on error resume next \n detectResult = IsObject(CreateObject("' + classID + '"))</SCRIPT>\n'); 
	return detectResult; 
}
VideoPlayer.prototype.detectNSPlugin = function(classID) { 
	try {
		return ((navigator.mimeTypes != null) && (navigator.mimeTypes[classID]) && (navigator.mimeTypes[classID].enabledPlugin != null));
	} catch (e) {
		return false;
	}
}
VideoPlayer.prototype.detectCapabilities = function() {
	this.log("detect", "detectCapabilities");
	try {
		// Default to false
		this.capabilities = new Object();
		this.capabilities.formats = new Array();
		this.capabilities.formats["rm"] = false;
		this.capabilities.formats["wmv"] = false;
		this.capabilities.scripting = new Array();
		this.capabilities.scripting["rm"] = false;
		this.capabilities.scripting["wmv"] = false;

		// Detect browser
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf("msie") != -1) this.capabilities.browser = "ie";
		else if (ua.indexOf("safari") != -1) this.capabilities.browser = "safari";
		else if (ua.indexOf("firefox") != -1) this.capabilities.browser = "firefox";
		else if (navigator.appName.indexOf("Netscape") != -1) this.capabilities.browser = "netscape";

		if ((ua.indexOf("win") != -1) || (ua.indexOf("32bit") != -1)) this.os = "windows";
		else if (ua.indexOf("mac") != -1) this.os =  "mac";
		if (this.capabilities.browser == "ie") {
			var start = ua.indexOf("msie ") + 5;
			var end = ua.indexOf(";", start);
			this.capabilities.browserVersion = parseFloat(ua.substring(start, end));
		} else {
			this.capabilities.browserVersion = -1;
		}
	
		// Detect players
		if (this.capabilities.browser == "ie") {
			this.capabilities.formats["rm"] = this.capabilities.scripting["rm"] = this.detectIEPlugin("rmocx.RealPlayer G2 Control.1");
			this.capabilities.formats["wmv"] = this.capabilities.scripting["wmv"] = this.detectIEPlugin("MediaPlayer.MediaPlayer.1");
			if ((this.capabilities.os == "mac") || (this.capabilities.browserVersion < 5)) {
				this.capabilities.scripting["wmv"] = false;
			}
		} else {
			this.capabilities.formats["rm"] = this.capabilities.scripting["rm"] = this.detectNSPlugin("audio/x-pn-realaudio-plugin");
			this.capabilities.formats["wmv"] = this.detectNSPlugin("application/x-mplayer2");
			this.capabilities.scripting["wmv"] = false;
			if (this.capabilities.browser == "safari")
				this.capabilities.scripting["rm"] = false;
		}
		if (!this.capabilities.formats["rm"] && !this.capabilities.formats["wmv"]) {
			this.capabilities.needPlayer = true;
		} else if (((this.capabilities.os == "mac") || (this.capabilities.browser == "firefox")) && (!this.capabilities.formats["rm"])) {
			this.capabilities.needPlayer = true;
		}
	} catch (e) {
		this.log("error", "detectCapabilities");
	}
	this._fireEvent("onCapabilitiesChanged", this.capabilities);
}
//--------------------------------------------------------------------
// Disable the ability to script a format
VideoPlayer.prototype.disableScripting = function(format) {
	this.log("capabilites", 'disableScripting ' + format);
	this.capabilities.scripting[format] = false;
	this._fireEvent("onCapabilitiesChanged", this.capabilities);
}

//--------------------------------------------------------------------
// Detect startup format
VideoPlayer.prototype.detectFormat = function() {
	this.log("detect", "detectFormat");
	if (!this.capabilities)
		this.detectCapabilities();
	
	var format = getCookie("vp_format");
	//format = "wmv";
	if (!format) {
		if (this.capabilities.scripting["rm"] && this.capabilities.scripting["wmv"]) {
			return null;
		} else if (this.capabilities.scripting["wmv"]) {
			format = "wmv";
		} else if (this.capabilities.scripting["rm"]) {
			format = "rm";
		} else if ((this.capabilities.os == "mac") || (this.capabilities.browser == "firefox")) {
			format = "rm";
		} else if (this.capabilities.formats["rm"] && this.capabilities.formats["wmv"]) {
			return null;
		} else if (this.capabilities.formats["wmv"]) {
			format = "wmv";
		} else if (this.capabilities.formats["rm"]) {
			format = "rm";
		} else {
			return null;
		}
	}
	this.format = format;
	this.defaultFormat = format;
	return format;
}


//--------------------------------------------------------------------
// Inserts the iframe into the document
VideoPlayer.prototype.printIFrame = function(width, height, div) {
	this.log("display", "printIFrame");
	if (width) this.width = width;
	if (height) this.height = height;
	if (div) {
		div.innerHTML = '<iframe id="videoPlayerIFrame' + this.objectId + '" height="' + this.height + '" width="' + this.width + '" scrolling="no" frameborder="0"></iframe>';
	} else {
		document.write('<iframe id="videoPlayerIFrame' + this.objectId + '" height="' + this.height + '" width="' + this.width + '" scrolling="no" frameborder="0"></iframe>');
	}
	if (this.format)
		this.setFormat(this.format);
	else
		this.chooseFormat(true, true);
}
VideoPlayer.prototype.getIFrameDocument = function() {
	if (this.iFrame == null) {
		this.iFrame = document.getElementById("videoPlayerIFrame" + this.objectId);
	}
	return this.iFrame.contentWindow.document;
}



//--------------------------------------------------------
// Gets the current video
VideoPlayer.prototype.getCurrentVideo = function() {
	if (this.currentVideo == null) {
		this.setCurrentVideo(this.playlist.getCurrentVideo());
		if (this.currentVideo == null) {
			this.setCurrentVideo(this.defaultPlaylist.getCurrentVideo());
		}
	}
	return this.currentVideo;
}
//--------------------------------------------------------
// Sets the current video
VideoPlayer.prototype.setCurrentVideo = function(param1, param2, param3) {
	var old = this.currentVideo;
	if (param1 == null) {
		this.currentVideo = null;
	} else {
		this.currentVideo = this.getVideo(param1, param2, param3);
	}
	if (this.currentVideo != null) {
		if (!this.currentVideo.equals(old)) {
			this.log("video", "current video changed " + (old ? old.videoId : 0) + " " + (this.currentVideo ? this.currentVideo.videoId : 0));
			var video = this.playlist.getCurrentVideo();
			if ((!video) || (!video.equals(this.currentVideo))) {
				if (this.skipToVideo) {
					this.playlist.skipToVideo(this.currentVideo);
				} else {
					this.playlist.placeVideo(this.currentVideo);
				}
			}
			this.defaultPlaylist.removeVideo(this.currentVideo);
			this._fireEvent("onCurrentVideoChanged", this.currentVideo);
		}
	} else if (old != null) {
		this.defaultPlaylist.removeVideo(this.currentVideo);
		this._fireEvent("onCurrentVideoChanged", this.currentVideo);
	}
}
//--------------------------------------------------------
// Adds a video to the playlist
VideoPlayer.prototype.addVideo = function(param1, param2, param3) {
	if ((this.format) && (!this.capabilities.scripting[this.format])) {
		return false;
	}
	this.playlist.addVideo(param1, param2, param3);
	this.defaultPlaylist.removeVideo(param1, param2, param3);
	if ((!this.skipToVideo) && (this.playlist.pos == -1)) {
		this.playlist.pos = 0;
	}
	return true;
}
//--------------------------------------------------------
// Adds a video to the default playlist
VideoPlayer.prototype.addDefaultVideo = function(param1, param2, param3) {
	if (!this.findVideo(param1, param2, param3)) {
		this.defaultPlaylist.addVideo(param1, param2, param3);
	}
}
//--------------------------------------------------------
// Removes the video from the playlist
VideoPlayer.prototype.removeVideo = function(param1, param2, param3) {
	this.playlist.removeVideo(param1, param2, param3);
	this.defaultPlaylist.removeVideo(param1, param2, param3);
}
