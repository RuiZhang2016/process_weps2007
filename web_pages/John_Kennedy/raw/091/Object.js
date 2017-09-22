_objects = new Array();

_currentObjectId = Math.floor(Math.random() * 1000) + 1000;
CBSObject.prototype.defaultLogLevel = "";
CBSObject.prototype.logBuffer = "";
CBSObject.prototype.logWin = null;

//---------------------------------------------------------------
// Create an object
function CBSObject()
{
	this.objectType = "Object";
  this.objectId = _currentObjectId;
  _currentObjectId = _currentObjectId + 1;
  _objects[this.objectId] = this;
	this.logLevel = this.defaultLogLevel;

  this._events = new Array();
}

//---------------------------------------------------------------
// Attached code to an event of an object
CBSObject.prototype.log = function(level, message) {
	if ((this.logLevel == "all") || (this.logLevel.indexOf(level) != -1)) {
		var logDiv = document.getElementById("logDiv");
		if (logDiv) {
			if (this.logBuffer) {
				logDiv.innerHTML += this.logBuffer;
				this.logBuffer = null;
			}
			logDiv.innerHTML += this.objectType + this.objectId + ": " + level + ": " + message + "<br>";
		} else if (this.logWin) {
			this.logWin.log(this.objectType + this.objectId + ": " + level + ": " + message);
		} else {
			this.logBuffer += this.objectType + this.objectId + ": " + level + ": " + message + "<br>";
		}
	}
}


//---------------------------------------------------------------
// Attached code to an event of an object
CBSObject.prototype.attachEvent = function(e, c, o) {
  if (this._events[e] == null)
    this._events[e] = new Array();
	var callback = new Object();
	callback.event = e;
	callback.callback = c;
	callback.object = o;
  this._events[e][this._events[e].length] = callback;
}

//---------------------------------------------------------------
// Fire all code attached to the given event
CBSObject.prototype._fireEvent = function(e) {
  this.log("event", e);
  if (this._events[e] != null) {
    for (var i=0; i<this._events[e].length; i++) {
			var callback = this._events[e][i];
      switch (typeof(callback.callback)) {
        case 'function':
					if (callback.object) {
	          callback.callback.apply(callback.object, arguments);
					} else {
	          callback.callback.apply(this, arguments);
					}
          break;
					
        case 'string':
          eval(this._events[e][i]);
          break;
					
        default:
          break;
      }
    }
  }
}


/*****************************************************\
 * Global functions
\*****************************************************/

//-----------------------------------------------------
// Return the real position of an element
function openLogWin() {
	CBSObject.prototype.logWin = window.open("/common/vplayer2/log.html", "logWin");
}
function setGlobalLogLevel(level) {
	for (object in _objects) {
		object.logLevel = level;
	}
}

//-----------------------------------------------------
// Return the real position of an element
function getElementPosition(element, pos)
{
  if (pos == null) {
    pos = new Object();
    pos.x = pos.y = 0;
  }
  pos.x += element.offsetLeft;
  pos.y += element.offsetTop;
  if (element.offsetParent == null) {
    return pos;
  }
  return getElementPosition(element.offsetParent, pos);
}

