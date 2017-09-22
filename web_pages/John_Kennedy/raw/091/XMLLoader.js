
//------------------------------------------------------
// The XML Loader Object
XMLLoader.prototype = new CBSObject();
XMLLoader.prototype.constructor = XMLLoader;
function XMLLoader() {
  this.superClass = CBSObject.prototype;
  this.superClass.constructor.call(this);
	this.objectType = "XMLLoader";
	_objects[this.objectId] = this;

	if (window.XMLHttpRequest) {
		this.load = this.mozLoad;
	} else {
		this.load = this.ieLoad;
	}
	
	this.requests = new Array();
	this.functions = new Array();
	this.objects = new Array();
	this.currentRequestId = 0;
}

//------------------------------------------------------
// Load for mozilla based browsers
XMLLoader.prototype.mozLoad = function(url, func, object) {
	var request = new XMLHttpRequest();
	this.requests[this.currentRequestId] = request;
	this.functions[this.currentRequestId] = func;
	this.objects[this.currentRequestId] = object;
	eval("request.onreadystatechange = function() { _objects['" + this.objectId + "'].onReadyStateChange(" + this.currentRequestId + "); } ");
	this.currentRequestId++;
	request.open("GET", url, true);
	request.send(null);
	return true;
}

//------------------------------------------------------
// Load for IE
XMLLoader.prototype.ieLoad = function(url, func, object) {
	var request = new ActiveXObject("Microsoft.XMLHTTP")
	if (!request)
		return false;
		
	this.requests[this.currentRequestId] = request;
	this.functions[this.currentRequestId] = func;
	this.objects[this.currentRequestId] = object;
	eval("request.onreadystatechange = function() { _objects['" + this.objectId + "'].onReadyStateChange(" + this.currentRequestId + "); } ");
	this.currentRequestId++;
	request.open("GET", url, true);
	request.send();
}

//------------------------------------------------------
// On ready state change
XMLLoader.prototype.onReadyStateChange = function(requestId) {
	var request = this.requests[requestId];
	if (!request) {
		this.log("error", "No request fround for requestId " + requestId);
		return;
	}
	if (request.readyState == 4) {
		if (this.objects[requestId]) {
			this.functions[requestId].call(this.objects[requestId], request);
		} else {
			this.functions[requestId].call(null, request);
		}
	}
}

//------------------------------------------------------
// Utils functons
XMLLoader.prototype.getElementText = function(element) {
	if (element.text) 
		return element.text;
	var text = "";
	for (var i=0; i<element.childNodes.length; i++) {
		text += element.childNodes[i].data;
		if (element.childNodes[i].length > 0) {
			text += this.getElementText(element.childNodes[i]);
		}
	}
	return text;
}
XMLLoader.prototype.getElementByTagName = function(element, tagname) {
	var elements = element.getElementsByTagName(tagname);
	if (elements) {
		return elements[0];
	}
	return null;
}
XMLLoader.prototype.getElementTextByTagName = function(element, tagname) {
	var element = this.getElementByTagName(element, tagname);
	if (element != null) {
		return this.getElementText(element);
	}
	return null;
}
XMLLoader.prototype.getAttributeValue = function(element, attribute) {
	var node = element.getAttributeNode("rank");
	if (node) {
		return node.value;
	}
	return null;
}