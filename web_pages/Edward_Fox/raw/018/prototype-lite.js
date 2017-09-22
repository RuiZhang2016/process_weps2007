/*  Prototype JavaScript framework
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
/*--------------------------------------------------------------------------*/

var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}

Object.extend = function(destination, source) {
  for (property in source) destination[property] = source[property];
  return destination;
}

Function.prototype.bind = function(object) {
  var __method = this;
  return function() {
    return __method.apply(object, arguments);
  }
}

Function.prototype.bindAsEventListener = function(object) {
var __method = this;
  return function(event) {
    __method.call(object, event || window.event);
  }
}

function $() {
  if (arguments.length == 1) return get$(arguments[0]);
  var elements = [];
  arguments.each(function(el){
    elements.push(get$(el));
  });
  return elements;

  function get$(el){
    if (typeof el == 'string') el = document.getElementById(el);
    return el;
  }
}

if (!window.Element) var Element = new Object();

Object.extend(Element, {
  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
  },

  hasClassName: function(element, className) {
    element = $(element);
    if (!element) return;
    var hasClass = false;
    if (element.className) {
			var classNames = element.className.split(' ');
			for(var i in classNames) {
				if (classNames[i] == className) hasClass = true;
			}
    }
    return hasClass;
  },

  setStyle: function(element, style) {
    element = $(element);
    for (name in style)
      element.style[camelize(name)] = style[name];
  },

  addClassName: function(element, className) {
    element = $(element);
    Element.removeClassName(element, className);
    element.className += ' ' + className;
  },

  removeClassName: function(element, className) {
    element = $(element);
    if (!element) return;
    var newClassName = '';
    element.className.split(' ').each(function(cn, i){
      if (cn != className){
        if (i > 0) newClassName += ' ';
        newClassName += cn;
      }
    });
    element.className = newClassName;
  },

  cleanWhitespace: function(element) {
    element = $(element);
    $e(element.childNodes).each(function(node){
      if (node.nodeType == 3 && !/\S/.test(node.nodeValue)) Element.remove(node);
    });
  }
});





var Form = {
  serialize: function(form) {
    var elements = Form.getElements($(form));
    var queryComponents = new Array();
    for (var i = 0; i < elements.length; i++) {
      var queryComponent = Form.Element.serialize(elements[i]);
      if (queryComponent) queryComponents.push(queryComponent);
    }

    return queryComponents.join('&');
  },

  getElements: function(form) {
    form = $(form);
    var elements = new Array();

    for (tagName in Form.Element.Serializers) {
      var tagElements = form.getElementsByTagName(tagName);
      for (var j = 0; j < tagElements.length; j++) elements.push(tagElements[j]);
    }
    return elements;
  }
}

Form.Element = {
  serialize: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter) {
      var key = encodeURIComponent(parameter[0]);
      if (key.length == 0) return;

      if (parameter[1].constructor != Array)
        parameter[1] = [parameter[1]];

      return key + '=' + encodeURIComponent(parameter[1]);
    }
  },

  getValue: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter)
      return parameter[1];
  }
}

Form.Element.Serializers = {
  input: function(element) {
    switch (element.type.toLowerCase()) {
      case 'submit':
      case 'hidden':
      case 'password':
      case 'text':
        return Form.Element.Serializers.textarea(element);
      case 'checkbox':
      case 'radio':
        return Form.Element.Serializers.inputSelector(element);
    }
    return false;
  },

  inputSelector: function(element) {
    if (element.checked)
      return [element.name, element.value];
  },

  textarea: function(element) {
    return [element.name, element.value];
  },

  select: function(element) {
    var value = '', opt, index = element.selectedIndex;
    if (index >= 0) {
      opt = element.options[index];
      value = opt.value;
      if (!value && !('value' in opt))
        value = opt.text;
    }
    return [element.name, value];
  }
}

ajax = Class.create();
ajax.prototype = {
  initialize: function(url, options){
    this.transport = this.getTransport();
    this.postBody = options.postBody || '';
    this.method = options.method || 'post';
    this.onComplete = options.onComplete || null;
    this.update = $(options.update) || null;
    this.request(url);
  },

  request: function(url){
    this.transport.open(this.method, url, true);
    this.transport.onreadystatechange = this.onStateChange.bind(this);
    if (this.method == 'post') {
      this.transport.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      this.transport.setRequestHeader('Accept', 'text/ajax, text/javascript, text/html, application/xml, text/xml, */*');
      if (this.transport.overrideMimeType) this.transport.setRequestHeader('Connection', 'close');
    }
    this.transport.send(this.postBody);
    return true;
  },

  onStateChange: function(){
    if (this.transport.readyState == 4 && this.transport.status == 200) {
      if (this.onComplete)
        setTimeout(function(){this.onComplete(this.transport);}.bind(this), 10);
      if (this.update)
        setTimeout(function(){this.update.innerHTML = this.transport.responseText;}.bind(this), 10);
      this.transport.onreadystatechange = function(){};
    }
  },

  getTransport: function() {
    if (window.ActiveXObject) return new ActiveXObject('Microsoft.XMLHTTP');
    else if (window.XMLHttpRequest) return new XMLHttpRequest();
    else return false;
  }
};


function getElementsByClassName(document, className) {
	var children = document.getElementsByTagName('*') || document.all;
	var elements = [];
	for(var i in children) {
		if (Element.hasClassName(children[i], className)) elements.push(children[i]); 
	}
	return elements;
}

var Position = {
  cumulativeOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return [valueL, valueT];
  }
};