
//---------------------------------------------------------------
// Video Controls object
VideoControls.prototype = new CBSObject();
VideoControls.prototype.constructor = VideoControls;
function VideoControls(videoPlayer, imageRoot) {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "VideoControls";
	_objects[this.objectId] = this;
	
	if (imageRoot) this.imageRoot = imageRoot;
	else this.imageRoot = videoPlayer.imageRoot;
	
	this.videoPlayer = videoPlayer;
	this.videoPlayer.attachEvent("onSegmentSet", this.onSegmentSet, this);
	this.videoPlayer.attachEvent("onPlayStateChanged", this.onPlayStateChanged, this);
	this.videoPlayer.attachEvent("onPositionChanged", this.onPositionChanged, this);
	this.videoPlayer.attachEvent("onFormatChanged", this.onFormatChanged, this);
	this.videoPlayer.attachEvent("onDefaultFormatChanged", this.onFormatChanged, this);
	this.videoPlayer.attachEvent("onCapabilitiesChanged", this.onCapabilitiesChanged, this);
	this.videoPlayer.attachEvent("onBuffering", this.onBuffering, this);
	
	this.hasRewind = true;
	this.hasForward = true;
	
	this.thumbStart = null;
	this.thumbImage = null;
	this.thumbDiv = null;
	this.thumbImagePos = null;
	
	this.thumbOffsetX = 0;
	this.thumbOffsetY = 6;

	this.state = "play";
	this.muted = false;
	this.lastVolume = videoPlayer.getVolume();
	
	this.skipEnabled = true;
}

//---------------------------------------------------------------
// Called when video changes state
VideoControls.prototype.onPlayStateChanged = function(event, state) {
	this.log("state",  "onPlayStateChanged " + state);
	if ((state == "none") || (state == "stopped") || (state == "paused") || (state == "ended") || (state == "seeking")) {
		this.showPlay();
	} else if (this.videoPlayer.capabilities.scripting[this.videoPlayer.format]) {
		this.showPause();
	} else {
		this.showStop();
	}
	if ((state == "stopped") || (state == "ended")) {
		this.hideThumb();
	}
	var video = this.videoPlayer.getCurrentVideo();
	if (state) {
		if ((state == "playing") && (video)) {
			var segment = video.getCurrentSegment();
			if (segment) {
				this.setStatusText("Playing (" + this.getTimeString(segment.position) + " / " + this.getTimeString(segment.duration) + ")");
			} else {
				this.setStatusText("Playing");
			}
		} else {
			this.setStatusText(state.substring(0, 1).toUpperCase() + state.substring(1));
		}
	}
}

//---------------------------------------------------------------
// Called when video buffers
VideoControls.prototype.onBuffering = function(event, percent) {
	this.log("buffering",  "onBuffering " + percent);
	this.setStatusText("Buffering (" + percent + "%)");
}
//---------------------------------------------------------------
// Called when video position changes
VideoControls.prototype.onPositionChanged = function(event, pos, len) {
	if (len == 0) return;
	if (this.thumbStart != null) return;
	
	var thumbPos = (pos * (175-55) / len) + 28;
	this.log("position", "pos " + pos + "/" + len + " " + thumbPos);
	this.setThumbPosition(thumbPos);
	if (this.videoPlayer.isPlaying()) {
			this.setStatusText("Playing (" + this.getTimeString(pos) + " / " + this.getTimeString(len) + ")");
	}
}
//---------------------------------------------------------------
// Called when video format changes
VideoControls.prototype.onFormatChanged = function(event, format) {
	this.log("format", "onFormatChanged " + format);
	var controlsTD = document.getElementById("controlsTD" + this.objectId);
	if (controlsTD) {
		controlsTD.innerHTML = this._getControlsHtml(format);
	}
	var commandsTD = document.getElementById("commandsTD" + this.objectId);
	if (commandsTD) {
		commandsTD.innerHTML = this._getCommandsHtml(format);
	}
	var mainTable = document.getElementById(this.objectId + "_table");
	if (mainTable) {
		this.log("format", this.videoPlayer.capabilities.scripting[format]);
		this.log("format", this.imageRoot + "/background.gif");
		if (this.videoPlayer.capabilities.scripting[format]) {
			mainTable.background = this.imageRoot + "/background.gif";
			mainTable.style.backgroundImage = "url(" + this.imageRoot + "/background.gif)";
		} else {
			mainTable.background = this.imageRoot + "/background_blank.gif";
			mainTable.style.backgroundImage = "url(" + this.imageRoot + "/background_blank.gif)";
		}
	}
}
//---------------------------------------------------------------
// Called when video format changes
VideoControls.prototype.onCapabilitiesChanged = function(event, capabilities) {
	this.log("format", "onCapabilitiesChanged");
	var controlsTD = document.getElementById("controlsTD" + this.objectId);
	if (controlsTD) {
		controlsTD.innerHTML = this._getControlsHtml();
	}
	var commandsTD = document.getElementById("commandsTD" + this.objectId);
	if (commandsTD) {
		commandsTD.innerHTML = this._getCommandsHtml();
	}
	var mainTable = document.getElementById(this.objectId + "_table");
	if (mainTable) {
		if (this.videoPlayer.capabilities.scripting[this.videoPlayer.format]) {
			mainTable.background = this.imageRoot + "/background.gif";
			mainTable.style.backgroundImage = "url(" + this.imageRoot + "/background.gif)";
		} else {
			mainTable.background = this.imageRoot + "/background_blank.gif";
			mainTable.style.backgroundImage = "url(" + this.imageRoot + "/background_blank.gif)";
		}
	}
}
//---------------------------------------------------------------
// Called when segment params have been set
VideoControls.prototype.onSegmentSet = function(event, segment) {
	if (segment.ad) this.skipEnabled = false;
	else this.skipEnabled = true;
	//this.skipEnabled = true;
	this.log("ads", "skip " + this.skipEnabled);
}

//---------------------------------------------------------------
// Returns a time string in MM:SS format
VideoControls.prototype.getTimeString = function(seconds) {
	var secs = seconds % 60;
	var mins = Math.floor(seconds / 60);
	if (secs < 10) {
		return mins + ":0" + secs;
	} else { 
		return mins + ":" + secs;
	}
}

//---------------------------------------------------------------
// Sets the status text
VideoControls.prototype.setStatusText = function(text) {
	this.log("controls", "setStatusText " + text);
	this.statusTextSpan = document.getElementById("statusTextSpan");
	if (this.statusTextSpan)
		this.statusTextSpan.innerHTML = text;
}
//---------------------------------------------------------------
// Show pause button
VideoControls.prototype.showPause = function() {
	this.log("controls", "showPause");
	//if (this.state == "pause") return;
	this.log("controls", "showPause2");
	this.state = "pause";
	//if (this.playPauseStopTD == null)
		this.playPauseStopTD = document.getElementById("playPauseStopTD" + this.objectId);
	this.playPauseStopTD.innerHTML = "<a name=\"none\" onclick=\"_objects['" + this.objectId + "'].pause();\"><img id=\"pauseImage\" src=\"" + this.imageRoot + "/pause.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a>";
}

//---------------------------------------------------------------
// Show play button
VideoControls.prototype.showPlay = function() {
	this.log("controls", "showPlay");
	//if (this.state == "play") return;
	this.log("controls", "showPlay2");
	this.state = "play";
	//if (this.playPauseStopTD == null)
		this.playPauseStopTD = document.getElementById("playPauseStopTD" + this.objectId);
	this.playPauseStopTD.innerHTML = "<a name=\"none\" onclick=\"_objects['" + this.objectId + "'].play();\"><img id=\"playImage\" src=\"" + this.imageRoot + "/play.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a>";
}

//---------------------------------------------------------------
// Show stop button
VideoControls.prototype.showStop = function() {
	this.log("controls", "showStop");
	//if (this.state == "stop") return;
	this.log("controls", "showStop2");
	this.state = "stop";
	//if (this.playPauseStopTD == null)
		this.playPauseStopTD = document.getElementById("playPauseStopTD" + this.objectId);
	this.playPauseStopTD.innerHTML = "<a name=\"none\" onclick=\"_objects['" + this.objectId + "'].stop();\"><img id=\"stopImage\" src=\"" + this.imageRoot + "/stop.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a>";
}
//---------------------------------------------------------------
// Sets a image to the given state
VideoControls.prototype.setImageState = function(name, state) {
	var img = document.getElementById(name + "Image");
	if (img) {
		this.setImgState(img, state);
	}
}
VideoControls.prototype.setImgState = function(img, state) {
	var p = img.src.lastIndexOf("_");
	if (p == -1) {
		p = img.src.lastIndexOf(".");
	}
	if (state) {
		img.src = img.src.substring(0, p) + "_" + state + ".gif";
	} else {
		img.src = img.src.substring(0, p) + ".gif";
	}
}

//---------------------------------------------------------------
// When a user presses a button
VideoControls.prototype.controlDown = function(img) {
	this.setImgState(img, "down");
}
//---------------------------------------------------------------
// When a user releases a button
VideoControls.prototype.controlUp = function(img) {
	this.setImgState(img);
}
//---------------------------------------------------------------
// When a user mouses over a command
VideoControls.prototype.commandEnter = function(a) {
	a.style.textDecoration = 'underline';
}
//---------------------------------------------------------------
// When a user mouses out of command
VideoControls.prototype.commandOut = function(a) {
	a.style.textDecoration = '';
}

VideoControls.prototype.test = function() {
	alert('k');
}
//---------------------------------------------------------------
// When a user presses the thumb
VideoControls.prototype.thumbDown = function(event) {
	if (!event) event = window.event;
	this.log("thumb", "down");
	if (this.thumbImage == null)
		this.thumbImage = document.getElementById("thumbImage" + this.objectId);
	if (this.thumbDiv == null)
		this.thumbDiv = document.getElementById("thumbDiv" + this.objectId);

	if ((this.thumbDiv) && (this.thumbImage)) {
		if (this.thumbImagePos == null)
			this.thumbImagePos = getElementPosition(this.thumbImage);
		this.thumbStart = this.thumbImagePos.x;
		this.setThumbPosition(event.clientX - this.thumbStart);
		eval("document.onmousemove = function(e) { _objects['" + this.objectId + "'].thumbMove(e); }");
		eval("document.onmouseup = function(e) { _objects['" + this.objectId + "'].thumbUp(e); }");
		eval("document.onmousedown = function(e) { return false; }");
	}
}
//---------------------------------------------------------------
// When a user moves the thumb
VideoControls.prototype.thumbMove = function(event) {
	if (!event) event = window.event;
	this.log("thumb", "move" + event.button);
	if (this.thumbStart != null) {
		this.setThumbPosition(event.clientX - this.thumbStart);
	}
}
//---------------------------------------------------------------
// When a user releases the thumb
VideoControls.prototype.thumbUp = function(event) {
	if (!event) event = window.event;
	this.log("thumb", "up");

	var loc = this.setThumbPosition(event.clientX - this.thumbStart);
	this.setPosition(Math.round(100 * loc / (175-55)) + "%");

	if (this.thumbDiv == null)
		this.thumbDiv = document.getElementById("thumbDiv" + this.objectId);
	if (this.thumbDiv) {
		document.onmousemove = null;
		document.onmouseup = null;
		document.onmousedown = null;
	}
	this.thumbStart = null;
}
//---------------------------------------------------------------
// Moves the thumb
VideoControls.prototype.thumbPosition = function(event) {
	if (!event) event = window.event;

	if (this.thumbImage == null)
		this.thumbImage = document.getElementById("thumbImage" + this.objectId);
	if (this.thumbImagePos == null)
		this.thumbImagePos = getElementPosition(this.thumbImage);

	this.log("thumb", "pos " + (event.clientX - this.thumbImagePos.x));
	var loc = this.setThumbPosition(event.clientX - this.thumbImagePos.x);
	this.setPosition(Math.round(100 * loc / (175-55)) + "%");
}

//---------------------------------------------------------------
// Moves the thumb
VideoControls.prototype.setThumbPosition = function(offset) {
	this.log("thumb", "setThumbPosition " + offset);
	if (this.thumbImage == null)
		this.thumbImage = document.getElementById("thumbImage" + this.objectId);
	if (this.thumbDiv == null)
		this.thumbDiv = document.getElementById("thumbDiv" + this.objectId);

	if ((this.thumbDiv) && (this.thumbImage)) {
		if (this.thumbImagePos == null)
			this.thumbImagePos = getElementPosition(this.thumbImage);
		var loc = offset - 28;
		if (loc < 0) {
			loc = 0;
		} else if (loc > 175-55) {
			loc = 175-55;
		}
		this.thumbDiv.style.left = this.thumbImagePos.x + this.thumbOffsetX + loc;
		this.thumbDiv.style.top = this.thumbImagePos.y + this.thumbOffsetY;
		this.thumbDiv.style.visibility = "visible";
		return loc;
	}
	return 0;
}
//---------------------------------------------------------------
// Hide the thumb
VideoControls.prototype.hideThumb = function() {
	if (this.thumbDiv == null)
		this.thumbDiv = document.getElementById("thumbDiv" + this.objectId);
	this.thumbDiv.style.visibility = "hidden";
}

//---------------------------------------------------------------
// prints on the controls
VideoControls.prototype._getControlsHtml = function(format) {
	this.log("controls", "_getControlsHtml");
	if (!format) format = this.videoPlayer.format;
	var scripting = this.videoPlayer.capabilities.scripting[format];
	var html = '<table cellspacing=0 cellpadding=0 border=0>';
	html += '	<tr valign="top">';
	html += '		<td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="5" height="17"></td>';
	if (this.hasRewind) {
		html += "		<td><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].rewind();\"><img id=\"rewindImage\" src=\"" + this.imageRoot + "/rewind.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
	} else {
		html += "		<td><img src=\"" + this.imageRoot + "/spacer.gif\" border=\"0\" width=\"18\" height=\"17\"></td>";
	}
	html += '		<td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="3" height="17"></td>';
	if (this.videoPlayer.isStopped() || this.videoPlayer.isPaused()) {
		this.state = "play";
		html += "		<td id=\"playPauseStopTD" + this.objectId + "\"><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].play();\"><img id=\"playImage\" src=\"" + this.imageRoot + "/play.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
	} else {
		if (scripting) {
			this.state = "pause";
			html += "		<td id=\"playPauseStopTD" + this.objectId + "\"><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].pause();\"><img id=\"pauseImage\" src=\"" + this.imageRoot + "/pause.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
		} else {
			this.state = "stop";
			html += "		<td id=\"playPauseStopTD" + this.objectId + "\"><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].stop();\"><img id=\"stopImage\" src=\"" + this.imageRoot + "/stop.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
		}
	}
	html += '		<td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="3" height="17"></td>';
	if ((scripting) && (this.hasForward)) {
		html += "		<td><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].forward();\"><img id=\"fowardImage\" src=\"" + this.imageRoot + "/forward.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
	} else {
		html += "		<td><img src=\"" + this.imageRoot + "/spacer.gif\" border=\"0\" width=\"18\" height=\"17\"></td>";
	}
	html += '		<td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="10" height="17"></td>';
	if (scripting) {
		html += "		<td valign=\"bottom\"><table cellspacing=0 cellpadding=0 border=0><tr height=\"17\"><td width=175 nowrap valign=\"bottom\" onclick=\"_objects['" + this.objectId + "'].thumbPosition(event)\" style=\"color:#FFFFFF; font-family:Arial; font-size:7pt;cursor:pointer;\"><img id=\"thumbImage" + this.objectId + "\" src=\"" + this.imageRoot + "/spacer.gif\" border=\"0\" width=\"1\" height=\"21\"><span id=\"statusTextSpan\">Ready</span></td></tr></table></td>";
	} else {
		html += "		<td><img id=\"thumbImage" + this.objectId + "\" src=\"" + this.imageRoot + "/spacer.gif\" border=\"0\" width=\"175\" height=\"17\"></td>";
	}
	html += '		<td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="9" height="17"></td>';
	if (scripting) {
		html += "		<td><a name=\"none\" id=\"muteHref\" onclick=\"_objects['" + this.objectId + "'].toggleMute();\"><img id=\"muteImage\" src=\"" + this.imageRoot + "/mute.gif\" onmousedown=\"_objects['" + this.objectId + "'].controlDown(this);\" onmouseout=\"_objects['" + this.objectId + "'].controlUp(this);\" onmouseup=\"_objects['" + this.objectId + "'].controlUp(this);\" border=\"0\" width=\"18\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
		html += '		<td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="4" height="17"></td>';
		html += "		<td><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].setVolume(20);\"><img id=\"volume1Image\" src=\"" + this.imageRoot + "/volume1_on.gif\" border=\"0\" width=\"6\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
		html += "		<td><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].setVolume(40);\"><img id=\"volume2Image\" src=\"" + this.imageRoot + "/volume2_on.gif\" border=\"0\" width=\"6\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
		html += "		<td><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].setVolume(60);\"><img id=\"volume3Image\" src=\"" + this.imageRoot + "/volume3_on.gif\" border=\"0\" width=\"6\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
		html += "		<td><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].setVolume(80);\"><img id=\"volume4Image\" src=\"" + this.imageRoot + "/volume4_on.gif\" border=\"0\" width=\"6\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
		html += "		<td><a name=\"none\" onclick=\"_objects['" + this.objectId + "'].setVolume(100);\"><img id=\"volume5Image\" src=\"" + this.imageRoot + "/volume5_on.gif\" border=\"0\" width=\"6\" height=\"17\" style=\"cursor:pointer;\"></a></td>";
	}
	html += '	</tr>';
	html += '</table>';
	return html;
}
VideoControls.prototype._getCommandsHtml = function(format) {
	this.log("print", "_getCommandsHtml");
	if (!format) format = this.videoPlayer.format;
	var scripting = this.videoPlayer.capabilities.scripting[format];
	var html = '<table cellspacing=0 cellpadding=0 border=0>';
	html += '	<tr valign="top">';
	html += '		<td width="100%"></td>';
	html += '		<td align="right" nowrap style="color:#FFFFFF; font-family:Arial; font-size:8pt; visited:#FFFFFF; cursor:pointer;">';
	if (scripting) 
		html += "			<a name=\"none\" onmouseenter=\"_objects['" + this.objectId + "'].commandEnter(this);\" onmouseout=\"_objects['" + this.objectId + "'].commandOut(this);\" onclick=\"_objects['" + this.objectId + "'].setFullscreen();\">Fullscreen</a> | ";
	if ((this.videoPlayer.capabilities.scripting["rm"]) && (this.videoPlayer.capabilities.scripting["wmv"])) {
		html += "			<a name=\"none\" onmouseenter=\"_objects['" + this.objectId + "'].commandEnter(this);\" onmouseout=\"_objects['" + this.objectId + "'].commandOut(this);\" onclick=\"_objects['" + this.objectId + "'].showSettings();\">Settings</a> | ";
	}
	html += "			<a name=\"none\" onmouseenter=\"_objects['" + this.objectId + "'].commandEnter(this);\" onmouseout=\"_objects['" + this.objectId + "'].commandOut(this);\" onclick=\"_objects['" + this.objectId + "'].showHelp();\">Help</a>";
	html += '		</td>';
	html += '		<td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="5" height="1"></td>';
	html += '	</tr>';
	html += '</table>';
	return html;
}
VideoControls.prototype.printControls = function() {
	document.write('<table id="' + this.objectId + '_table" cellspacing=0 cellpadding=0 border=0 bgcolor="#385DAD" width="320" height="45" style="background-image:url(' + this.imageRoot + '/background.gif);">');
	document.write('	<tr height="5"><td><img src="' + this.imageRoot + '/spacer.gif" border="0" width="1" height="5"></td></tr>');
	document.write('	<tr height="17">');
	document.write('		<td id="controlsTD' + this.objectId + '">');
	document.write(this._getControlsHtml());
	document.write('		</td>');
	document.write('	</tr>');
	document.write('	<tr>');
	document.write('		<td id="commandsTD' + this.objectId + '" valign="top">');
	document.write(this._getCommandsHtml());
	document.write('		</td>');
	document.write('	</tr>');
	document.write('</table>');
	document.write("<div id=\"thumbDiv" + this.objectId + "\" ondragstart=\"event.returnValue=false; return false;\" onmousedown=\"_objects['" + this.objectId + "'].thumbDown(event);\" onmousemove=\"_objects['" + this.objectId + "'].thumbMove(event);\" onmouseUp=\"_objects['" + this.objectId + "'].thumbUp(event)\" style=\"visibility:hidden; position:absolute; cursor:pointer;\" border=\"0\"><img src=\"" + this.imageRoot + "/thumb.gif\" border=\"0\" width=\"55\" height=\"5\"></div>");
	
	this.setVolume(this.videoPlayer.getVolume());
}



/***************************************************************\
 * Commands
\***************************************************************/

//---------------------------------------------------------------
// Play
VideoControls.prototype.play = function() {
	this.log("command", "play");
	if (this.videoPlayer) this.videoPlayer.play();
	this._fireEvent("onPlay");
}
//---------------------------------------------------------------
// Pause
VideoControls.prototype.pause = function() {
	this.log("command", "pause");
	if (this.videoPlayer) this.videoPlayer.pause();
	this._fireEvent("onPause");
}
//---------------------------------------------------------------
// Stop
VideoControls.prototype.stop = function() {
	this.log("command", "stop");
	if (this.videoPlayer) this.videoPlayer.stop();
	this._fireEvent("onStop");
}
//---------------------------------------------------------------
// Rewind
VideoControls.prototype.rewind = function() {
	this.log("command", "rewind");
	if ((this.skipEnabled) && (this.videoPlayer)) this.videoPlayer.rewind();
	this._fireEvent("onRewind");
}
//---------------------------------------------------------------
// Forward
VideoControls.prototype.forward = function() {
	this.log("command", "forward");
	if ((this.skipEnabled) && (this.videoPlayer)) this.videoPlayer.forward();
	this._fireEvent("onForward");
}

//---------------------------------------------------------------
// Mute / unmute
VideoControls.prototype.toggleMute = function() {
	this.videoPlayer.log("command", "toggleMute");
	if (this.muted) {
		this.setVolume(this.lastVolume);
	} else {
		this.setVolume(0);
	}
}

//---------------------------------------------------------------
// Set volume
VideoControls.prototype.setVolume = function(volume) {
	this.videoPlayer.log("command", "setVolume " + volume);
	if (volume == 0) {
		var muteImg = document.getElementById("muteImage");
		if (muteImg) muteImg.src = this.imageRoot + "/muted.gif";
		this.muted = true;
	} else {
		var muteImg = document.getElementById("muteImage");
		if (muteImg) muteImg.src = this.imageRoot + "/mute.gif";
		this.muted = false;
		this.lastVolume = volume;
	}
  var i = 1;
	for ( ; i<=volume/20; i++) {
		this.setImageState("volume" + i, "on");
	}
	for ( ; i<=5; i++) {
		this.setImageState("volume" + i, "off");
	}
	if (this.videoPlayer) this.videoPlayer.setVolume(volume);
	this._fireEvent("onVolumeChanged", this.videoPlayer.getVolume());
}
//---------------------------------------------------------------
// Set position
VideoControls.prototype.setPosition = function(pos) {
	this.log("command", "setPosition");
	if ((this.skipEnabled) && (this.videoPlayer)) this.videoPlayer.setPosition(pos);
	this._fireEvent("onPositionChanged", pos);
}
//---------------------------------------------------------------
// Set fullscreen
VideoControls.prototype.setFullscreen = function() {
	this.log("command", "setFullScreen");
	if (this.videoPlayer) this.videoPlayer.setFullscreen();
	this._fireEvent("onFullscreen");
}
//---------------------------------------------------------------
// Show settings
VideoControls.prototype.showSettings = function() {
	this.log("command", "showSettings");
	if (this.videoPlayer) this.videoPlayer.chooseFormat();
	this._fireEvent("onSettings");
}
//---------------------------------------------------------------
// Show Help
VideoControls.prototype.showHelp = function() {
	this.log("command", "showHelp");
	this._fireEvent("onHelp");
}
