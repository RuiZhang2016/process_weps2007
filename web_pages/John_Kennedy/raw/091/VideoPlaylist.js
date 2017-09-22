//------------------------------------------------------
// The Video Playlist Object
VideoPlaylist.prototype = new CBSObject();
VideoPlaylist.prototype.constructor = VideoPlaylist;
VideoPlaylist.prototype.numbers = "1234567890";
function VideoPlaylist(videoPlayer) {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "VideoPlaylist";
	_objects[this.objectId] = this;

	this.videoPlayer = videoPlayer;
	
	this.videos = new Array();
	this.pos = -1;
	
	this.allowDuplicates = false;
}


//------------------------------------------------------
// Get the location of a video in the list
VideoPlaylist.prototype.findVideo = function(param1, param2, param3) {
	this.log("playlist", "findVideo " + param1);
	var videoId = null;
	var videoUrl = null;
	if (param1 == null) {
		return -1;
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
		for (var i=0; i<this.videos.length; i++) {
			if (videoId == this.videos[i].videoId) {
				return i;
			}
		}
	} else {
		for (var i=0; i<this.videos.length; i++) {
			if (videoUrl == this.videos[i].videoUrl) {
				return i;
			}
		}
	}
	return -1;
}


//------------------------------------------------------
// Check load status of videos
VideoPlaylist.prototype.areAllVideosLoaded = function() {
	for (var i=0; i<this.videos.length; i++) {
		if (!this.videos[i].loaded) {
			return false;
		}
	}
	return true;
}

/********************************************************************\
 * Inserting and removing
\********************************************************************/
//------------------------------------------------------
// Add a video to the end of the list
VideoPlaylist.prototype.addVideo = function(param1, param2, param3) {
	this.log("playlist", "addVideo " + param1);
	var video;
	if (!this.allowDuplicates) {
		var oldPos = this.findVideo(param1, param2, param3);
		if (oldPos != -1) {
			if (oldPos >= this.pos) {
				return false;
			}
			var videoArray = this.videos.splice(oldPos, 1);
			video = videoArray[0];
			this.pos = this.pos - 1;
		} else {
			video = this.videoPlayer.getVideo(param1, param2, param3);
		}
	} else {
		video = this.videoPlayer.getVideo(param1, param2, param3);
	}
	this.videos[this.videos.length] = video;
	this.videoPlayer._fireEvent("onPlaylistChanged");
	return true;
}
//------------------------------------------------------
// Insert a video into the list at the given position
VideoPlaylist.prototype.insertVideo = function(pos, param1, param2, param3) {
	this.log("playlist", "insertVideo " + pos + " " + param1);
	if (pos < 0) this.pos = 0;
	if (pos > this.videos.length) pos = this.videos.length;
	if ((this.videos[pos]) && (this.videos[pos].equals(param1, param2, param3)))
		return false;
	var video = null;
	if (!this.allowDuplicates) {
		video = this.removeVideo(param1, param2, param3);
		if (video == null) {
			video = this.videoPlayer.getVideo(param1, param2, param3);
		}
	} else {
		video = this.videoPlayer.getVideo(param1, param2, param3);
	}
	this.videos.splice(pos, 0, video);
	this.videoPlayer._fireEvent("onPlaylistChanged");
	return true;
}
//------------------------------------------------------
// Skips to the given video in the list
VideoPlaylist.prototype.skipToVideo = function(param1, param2, param3) {
	var pos = this.findVideo(param1, param2, param3);
	if (pos >= 0) {
		this.pos = pos;
	}
}

//------------------------------------------------------
// Insert a video into the list at the current position
VideoPlaylist.prototype.placeVideo = function(param1, param2, param3) {
	this.log("placeVideo " + this.pos);
	if (this.pos < 0) this.pos = 0;
	if (this.pos > this.videos.length) this.pos = this.videos.length;
	//if ((this.videos[this.pos]) && (this.videos[this.pos].equals(param1, param2, param3)))
	//	return false;
	if (this.videoPlayer.isStopped()) {
		return this.insertVideo(this.pos, param1, param2, param3);
	} else {
		return this.setVideo(this.pos, param1, param2, param3);
	}
}
//------------------------------------------------------
// Set the given position in the list to the given video
VideoPlaylist.prototype.setVideo = function(pos, param1, param2, param3) {
	this.log("playlist", "setVideo " + pos + " " + param1);
	if ((this.videos[pos]) && (this.videos[pos].equals(param1, param2, param3)))
		return false;
	var video;
	if (!this.allowDuplicates) {
		var oldPos = this.findVideo(param1, param2, param3);
		if (oldPos != -1) {
			var videoArray = this.videos.splice(oldPos, 1);
			video = videoArray[0];
			if (oldPos < pos) {
				pos = pos - 1;
			}
			if (oldPos < this.pos) {
				this.pos = this.pos - 1;
			}
		} else {
			video = this.videoPlayer.getVideo(param1, param2, param3);
		}
	} else {
		video = this.videoPlayer.getVideo(param1, param2, param3);
	}
	this.videos[pos] = video;
	this.videoPlayer._fireEvent("onPlaylistChanged");
	return true;
}
//------------------------------------------------------
// Remove a video from the list
VideoPlaylist.prototype.removeVideo = function(param1, param2, param3) {
	this.log("playlist", "removeVideo " + param1);
	var oldPos = this.findVideo(param1, param2, param3);
	if (oldPos == -1) {
		return null;
	}
	if (oldPos < this.pos) {
		this.pos = this.pos - 1;
	}
	var videoArray = this.videos.splice(oldPos, 1);
	this.videoPlayer._fireEvent("onPlaylistChanged");
	return videoArray[0];
}
//------------------------------------------------------
// Remove a video from the list
VideoPlaylist.prototype.removeAllVideos = function() {
	this.videos.length = 0;
	this.pos = 0;
	this.videoPlayer._fireEvent("onPlaylistChanged");
}


/********************************************************************\
 * Access
\********************************************************************/
//---------------------------------------------------------
// Get current position
VideoPlaylist.prototype.getCurrentPosition = function() {
	if (this.pos < 0)
		return 0;
	return this.pos;
}
//---------------------------------------------------------
// Get length
VideoPlaylist.prototype.getLength = function() {
	return this.videos.length;
}
//---------------------------------------------------------
// Get a video at position
VideoPlaylist.prototype.getVideo = function(pos) {
	return this.videos[pos];
}


/********************************************************************\
 * Location in list
\********************************************************************/
//---------------------------------------------------------
// Get the current video	
VideoPlaylist.prototype.getCurrentVideo = function() {
	return this.videos[this.pos];
}
//---------------------------------------------------------
// Get the previous video	
VideoPlaylist.prototype.getPreviousVideo = function() {
	return this.videos[this.pos-1];
}
//---------------------------------------------------------
// Get the next  video	
VideoPlaylist.prototype.getNextVideo = function() {
	return this.videos[this.pos+1];
}
//---------------------------------------------------------
// Backup to previous video and return it
VideoPlaylist.prototype.previousVideo = function() {
	if (this.pos == 0)
		return null;
	this.pos = this.pos - 1;
	this.videoPlayer._fireEvent("onPlaylistPositionChanged");
	return this.videos[this.pos];
}
//---------------------------------------------------------
// Advance to next video and return it
VideoPlaylist.prototype.nextVideo = function() {
	if (this.pos == this.videos.length)
		return null;
	this.pos = this.pos + 1;
	this.videoPlayer._fireEvent("onPlaylistPositionChanged");
	return this.videos[this.pos];
}
//---------------------------------------------------------
// Set the position in the list and return video in that position
VideoPlaylist.prototype.setPosition = function(pos) {
	if (pos >= this.videos.length-1)
		this.pos = this.videos.length-1;
	else if (pos <= 0)
		this.pos = 0;
	else
		this.pos = pos;
	this.videoPlayer._fireEvent("onPlaylistPositionChanged");
	return this.videos[this.pos];
}
