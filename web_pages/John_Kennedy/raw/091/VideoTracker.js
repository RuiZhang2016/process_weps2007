//------------------------------------------------------
// The Video Tracker Object
VideoTracker.prototype = new CBSObject();
VideoTracker.prototype.constructor = VideoTracker;
VideoTracker.prototype.months = new Array();
VideoTracker.prototype.months["Jan"] = 1;
VideoTracker.prototype.months["Feb"] = 2;
VideoTracker.prototype.months["Mar"] = 3;
VideoTracker.prototype.months["Apr"] = 4;
VideoTracker.prototype.months["May"] = 5;
VideoTracker.prototype.months["Jun"] = 6;
VideoTracker.prototype.months["Jul"] = 7;
VideoTracker.prototype.months["Aug"] = 8;
VideoTracker.prototype.months["Sep"] = 9;
VideoTracker.prototype.months["Oct"] = 10;
VideoTracker.prototype.months["Nov"] = 11;
VideoTracker.prototype.months["Dec"] = 12;
function VideoTracker(videoPlayer) {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "VideoTracker";
	_objects[this.objectId] = this;
	
	this.segmentTracking = false;	
	
	this.watchTracking = false;

	this.videoPlayer = videoPlayer;
	this.videoPlayer.attachEvent("onSegmentOpened", this.onSegmentOpened, this);
	this.videoPlayer.attachEvent("onSegmentSet", this.onSegmentSet, this);
	this.videoPlayer.attachEvent("onSegmentClosed", this.onSegmentClosed, this);
	this.videoPlayer.attachEvent("onVideoOpened", this.onVideoOpened, this);
	this.videoPlayer.attachEvent("onVideoSet", this.onVideoSet, this);
	this.videoPlayer.attachEvent("onVideoClosed", this.onVideoClosed, this);
}

//---------------------------------------------------------------
// Turns on minute by minute tracking
VideoTracker.prototype.enableWatchTracking = function(serverDateString) {
	this.log("track", "enableWatchTracking " + serverDateString);
  var serverDate = new Date(serverDateString);
  var clientDate = new Date();
  this.dateOffset = clientDate.getTime() - serverDate.getTime();
	this.log("track", clientDate + " " + serverDate + " " + this.dateOffset);
	this.log("track", clientDate.getTime() + " " + serverDate.getTime() + " " + this.dateOffset);
	this.watchTracking = true;
}

//---------------------------------------------------------------
// Called when video has opened a connect to the server
VideoTracker.prototype.onVideoOpened = function(event, video) {
	video.startTracked = false;
	video.endTracked = false;

	this.log("track", "onVideoOpened " + this.videoPlayer.adType + " " + video.playFormat + " " + this.videoPlayer.capabilities.scripting[video.playFormat] + " " + this.segmentTracking);
	if ((this.videoPlayer.adType == "pre") && (!this.videoPlayer.capabilities.scripting[video.playFormat]) && (!this.segmentTracking)) {
		this.log("track", "adSegment");
		video.adSegment = video.newSegment();
		video.adSegment.adSegment = true;
		video.adSegment.id = "ad";
		video.adSegment.title = "Unknown";
		this.onSegmentOpened("onSegmentOpened", video.adSegment);
		this.onSegmentSet("onSegmentSet", video.adSegment);
	}
}

//---------------------------------------------------------------
// Called when video has it's properties set
VideoTracker.prototype.onVideoSet = function(event, video) {
	if (video.startTracked) return;
	if (video.endTracked) return;
	video.startTracked = true;
	video.endTracked = false;
	
	var now = new Date();
	video.durationString = this.getTimeString(video.duration);
	video.startTime = now.getTime();
	
	s_v.events = "event1";
	s_v.eVar1 = video.videoId + " - " + video.title + " (" + video.durationString + ")";
	s_v.prop29 = video.videoId;
	s_v.prop24 = s_v.prop25 = s_v.prop26 = s_v.prop27 = '';
	this.log("track", "Start " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
	//alert("Start " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
	s_v.tl(this, 'o', 'Video Start');
	s_v.eVar1 = s_v.eVar2 = s_v.eVar3 = s_v.prop24 = s_v.prop25 = s_v.prop26 = s_v.prop27 = s_v.prop28 = s_v.prop29 = s_v.events = s_v.referrer = '';

	if (!this.videoPlayer.capabilities.scripting[this.videoPlayer.format]) {
		this.onVideoClosed("onVideoClosed", video);
	}
	
	if (this.watchTracking) {
		this.log("track", "_objects['" + this.objectId + "'].onVideoWatch('onVideoWatch', _objects['" + video.objectId + "'])");
		eval("_objects['" + this.objectId + "'].onVideoWatch('onVideoWatch', _objects['" + video.objectId + "'])");
		video.watchId = window.setInterval("_objects['" + this.objectId + "'].onVideoWatch('onVideoWatch', _objects['" + video.objectId + "'])", 60*1000);
	}
}

//---------------------------------------------------------------
// Called when video is closed
VideoTracker.prototype.onVideoClosed = function(event, video) {
	if (video.endTracked) return;
	video.endTracked = true;
	video.startTracked = false;

	var now = new Date();
	video.endTime = now.getTime();
	
	video.elapsedTime = Math.floor((video.endTime - video.startTime) / 1000);
	var timeWatched;
	var contentSegment = video.getContentSegment();
	if (!contentSegment)
		timeWatched = 0;
	else if (video.elapsedTime < contentSegment.maxPosition)
		timeWatched = video.elapsedTime;
	else 
		timeWatched = video.maxPosition;

	s_v.events = "event2";
	s_v.eVar1 = video.videoId + " - " + video.title + " (" + video.durationString + ")";
	if (!this.videoPlayer.capabilities.scripting[this.videoPlayer.format]) {
		s_v.eVar2 = "Unknown";
		s_v.eVar3 = "Unknown";
	} else {
		s_v.eVar2 = this.getTimeRangeString(timeWatched);
		if (video.duration == 0) {
			s_v.eVar3 = "0%";
		} else {
			s_v.eVar3 = Math.round(timeWatched*10 / video.duration) + "0%";
		}
	}

	if (video.prop1) s_v.prop24 = video.prop1; else s_v.prop24 = '';
	if (video.prop2) s_v.prop25 = video.prop2; else s_v.prop25 = '';
	s_v.prop26 = video.title;
	s_v.prop27 = s_v.eVar2;
        s_v.prop28 = document.location.pathname;
        if (s_v.prop28.charAt(s_v.prop28.length - 1) == '/') {
                s_v.prop28 += "index";
        } else {
                var p = s_v.prop28.lastIndexOf('.');
                if (p > 0) {
                        s_v.prop28 = s_v.prop28.substring(0, p);
                }
        }
	this.log("track", "Stop " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
	//alert("Stop " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
	s_v.tl(this, 'o', 'Video Stop');
	s_v.eVar1 = s_v.eVar2 = s_v.eVar3 = s_v.prop24 = s_v.prop25 = s_v.prop26 = s_v.prop27 = s_v.prop28 = s_v.prop29 = s_v.events = s_v.referrer = '';
	
	if (video.watchId) {
		window.clearInterval(video.watchId);
	}
}

//---------------------------------------------------------------
// Called every minute while a video is being watched
VideoTracker.prototype.onVideoWatch = function(event, video) {
	this.log("track", "onVideoWatch " + this.dateOffset);
  var now = new Date();																 
  var real = new Date(now.getTime() - this.dateOffset - 5*60*60*1000);
  var gmt = real.toGMTString();
	this.log("track", gmt);
	var values = gmt.split(' ');
	var year = values[3];
	var month = this.months[values[2]];
	var day = values[1];
	var time = values[4];
	values = time.split(':');
	var hour = values[0];
	var min = values[1];
	var sec = values[2];
  var dateString = month + '-' + day + '-' + year + ' ' + hour + ':' + min;

	video.durationString = this.getTimeString(video.duration);

	s_v.events = "event3";
	s_v.referrer = document.referrer;
	s_v.eVar1 = (video.videoId ? video.videoId : '0') + " - " + video.title + " (" + video.durationString + ")";
	s_v.eVar4 = dateString;
	this.log("track", "Watch " + s_v.eVar1 + " " + s_v.eVar4);
	s_v.tl(this, 'o', 'Video Watch');
	s_v.eVar1 = s_v.eVar4 = s_v.referrer = '';
}

//---------------------------------------------------------------
// Called when segment has opened a connect to the server
VideoTracker.prototype.onSegmentOpened = function(event, segment) {
	if (segment.id == "ad") {
		this.log("track", "onSegmentOpened " + segment + " " + segment.adSegment);

		if (!segment.adSegment) {
			segment.startTracked = false;
			segment.endTracked = false;
		} else {
			this.segmentTracking = true;
		}
	}
}

//---------------------------------------------------------------
// Called when segment params have been set
VideoTracker.prototype.onSegmentSet = function(event, segment) {
	if (segment.endTracked) return;
	if (segment.startTracked) return;
	segment.startTracked = true;
	segment.endTracked = false;

	this.log("track", "onSegmentSet " + segment.id);
	if (segment.id == "ad") {
		segment.prop1 = "Ads";
	
		var now = new Date();
		segment.durationString = this.getTimeString(segment.duration);
		segment.startTime = now.getTime();
		
		s_v.events = "event1";
		s_v.referrer = document.referrer;
		s_v.eVar1 = segment.id + " - " + segment.title + " (" + segment.durationString + ")";
		s_v.prop24 = s_v.prop25 = s_v.prop26 = s_v.prop27 = '';
		this.log("track", "Start " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
		//alert("Start " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
		s_v.tl(this, 'o', 'Video Start');
		s_v.eVar1 = s_v.eVar2 = s_v.eVar3 = s_v.prop24 = s_v.prop25 = s_v.prop26 = s_v.prop27 = s_v.prop28 = s_v.prop29 = s_v.events = s_v.referrer = '';
	}
	if (!this.videoPlayer.capabilities.scripting[this.videoPlayer.format]) {
		this.onSegmentClosed("onSegmentClosed", segment);
	}
}

//---------------------------------------------------------------
// Called when segment is closed
VideoTracker.prototype.onSegmentClosed = function(event, segment) {
	if (segment.endTracked) return;
	segment.endTracked = true;
	segment.startTracked = false;
	
	if (segment.id == "ad") {
		var now = new Date();
		segment.endTime = now.getTime();
		
		segment.elapsedTime = Math.floor((segment.endTime - segment.startTime) / 1000);
		var timeWatched;
		if (segment.elapsedTime < segment.maxPosition) 
			timeWatched = segment.elapsedTime;
		else 
			timeWatched = segment.maxPosition;
	
		s_v.events = "event2";
		s_v.referrer = document.referrer;
		s_v.eVar1 = segment.id + " - " + segment.title + " (" + segment.durationString + ")";
		s_v.eVar2 = this.getTimeRangeString(timeWatched);
		if (segment.duration == 0) {
			s_v.eVar3 = "0%";
		} else {
			s_v.eVar3 = Math.round(timeWatched*10 / segment.duration) + "0%";
		}
	
		if (segment.prop1) s_v.prop24 = segment.prop1; else s_v.prop24 = '';
		if (segment.prop2) s_v.prop25 = segment.prop2; else s_v.prop25 = '';
		s_v.prop26 = segment.title;
		s_v.prop27 = s_v.eVar2;
	        s_v.prop28 = document.location.pathname;
        	if (s_v.prop28.charAt(s_v.prop28.length - 1) == '/') {
                	s_v.prop28 += "index";
	        } else {
        	        var p = s_v.prop28.lastIndexOf('.');
                	if (p > 0) {
                        	s_v.prop28 = s_v.prop28.substring(0, p);
	                }
        	}
		this.log("track", "Stop " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
		//alert("Stop " + s_v.eVar1 + " " + s_v.eVar2 + " " + s_v.eVar3 + " " + s_v.prop24 + "/" + s_v.prop25 + "/" + s_v.prop26 + "/" + s_v.prop27);
		s_v.tl(this, 'o', 'Video Stop');
		s_v.eVar1 = s_v.eVar2 = s_v.eVar3 = s_v.prop24 = s_v.prop25 = s_v.prop26 = s_v.prop27 = s_v.prop28 = s_v.prop29 = s_v.events = s_v.referrer = '';
	}
}


//---------------------------------------------------------------
// Returns a time string in MM:SS format
VideoTracker.prototype.getTimeString = function(time) {
	var secs = time % 60;
	var mins = Math.floor(time / 60);
	if (secs < 10) {
		return mins + ":0" + secs;
	} else { 
		return mins + ":" + secs;
	}
}

//---------------------------------------------------------------
// Returns a time range string in MM:SS - MM:SS format
VideoTracker.prototype.getTimeRangeString = function(time) {
	if (time < 15) {
		var t = 5*Math.floor(time / 5);
		return this.getTimeString(t) + " - " + this.getTimeString(t+5);
	} else if (time < 300) {
		var t = 15*Math.floor(time / 15);
		return this.getTimeString(t) + " - " + this.getTimeString(t+15);
	} else {
		var t = 60*Math.floor(time / 60);
		return this.getTimeString(t) + " - " + this.getTimeString(t+60);
	}
}

