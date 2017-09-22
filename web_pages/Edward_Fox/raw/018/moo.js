/* moo.toolkit: MIT LICENSE */
function $S() {
  if (arguments.length == 1){
    if(typeof arguments[0] == 'string') {
      if (arguments[0].charAt(0) == '#' && arguments[0].indexOf(' ') == -1)
        return $(arguments[0].slice(1)) || null;
      return dom.getSelector(arguments[0]);
    }
    else return arguments[0];
  }
  var elements = [];
  arguments.each(function(sel){
    if (typeof sel == 'string') {
      dom.getSelector(sel).each(function(el){
        elements.push(el);
      });
    }
    else elements.push(sel);
  });
  return elements;
}

function $e(array){
  var nArray = [];
  for (i=0;el=array[i];i++) nArray.push(el);
  return nArray;
}

Array.prototype.each = function(func){
  for(var i=0;ob=this[i];i++) func(ob, i);
}

Array.prototype.first = function() {
	return this[0];
}

Array.prototype.action = function(actions){
  this.each(function(el){
    if (actions.initialize) actions.initialize(el);
    for(action in actions){
      if (action.slice(0,2) == 'on') el[action] = actions[action];
    }
  });
}

Array.prototype.find = function(mode){
  var elements = [];
  this.each(function(el){
    el = el[mode];
    while (el.nodeType != 1) el = el[mode];
    elements.push(el);
  });
  if (elements.length == 1) return elements[0];
  return elements;
}

dom = {
  getSelector: function(selector){
    var params = [];
    selector.split(' ').each(function(arg, j){
      params[j] = param = [];
      if (arg.indexOf('#') > -1) {
        var bits = arg.split('#');
        param['tag'] = bits[0] || '*';
        param['id'] = bits[1];
      }
      else if (arg.indexOf('.') > -1) {
        var bits = arg.split('.');
        param['tag'] = bits[0] || '*';
        param['class'] = bits[1];
      }
      else param['tag'] = arg;
    });
    this.filter = [document];
    params.each(function(param, k){
      if (k == 0 && param['id']) {
        var id = $(param['id']);
        if (param['tag'] == '*' || id.tagName.toLowerCase() == param['tag'])
          this.filter = [id];
        else return [];
      }
      else {
        this.filter = this._getElementsWithTagName(param['tag']);
        if (param['class']) this.filter = this._getElementsWithClassName(param['class']);
        else if (param['id']) this.filter = this._getElementsWithId(param['id']);
      }
    }.bind(this));
    return this.filter;
  },

  sheets: [],

  append: function(sheet){
    this.sheets.push(sheet);
  },

  start: function(){
    this.sheets.each(function(sheet){
      this.update(sheet);
    }.bind(this));
  },

  //based on Behaviour by Ben Nolan (http://bennolan.com/behaviour/)
  update: function(sheet){
    for (selector in sheet){
      selector.split(',').each(function(comb){
        var elements = this.getSelector(comb.replace(/^\s*|\s*$/g,"")) || null;
        elements.each(function(element){
          sheet[selector](element);
        });
      }.bind(this));
    }
  },

  _getElementsWithId: function(id){
    var found = [];
    this.filter.each(function(el){
      if (el.id == id) found.push(el);
    });
    return found;
  },

  _getElementsWithClassName: function(className){
    var found = [];
    this.filter.each(function(el){
      if (Element.hasClassName(el, className)) found.push(el);
    });
    return found;
  },

  _getElementsWithTagName: function(tagName){
    var found = [];
    this.filter.each(function(el){
      $e(el.getElementsByTagName(tagName)).each(function(tn){
        found.push(tn);
      });
    });
    return found;
  }
};

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
    element.className.split(' ').each(function(cn){
      if (cn == className) hasClass = true;
    });
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

function camelize(name) {
  var oStringList = name.split('-');
  if (oStringList.length == 1) return oStringList[0];

  var camelizedString = name.indexOf('-') == 0
    ? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1)
    : oStringList[0];

  for (var i = 1, len = oStringList.length; i < len; i++) {
    var s = oStringList[i];
    camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
  }

  return camelizedString;
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

var fx = new Object();
fx.Base = function(){};
fx.Base.prototype = {
  setOptions: function(options) {
  this.options = {
    duration: 500,
    onComplete: '',
    transition: fx.sinoidal
  }
  Object.extend(this.options, options || {});
  },

  go: function() {
    this.startTime = (new Date).getTime();
    this.timer = setInterval (this.step.bind(this), 10);
  },

  step: function() {
    var time  = (new Date).getTime();
    if (time >= this.options.duration+this.startTime) {
      this.now = this.to;
      clearInterval (this.timer);
      this.timer = null;
      if (this.options.onComplete) setTimeout(this.options.onComplete.bind(this), 10);
    }
    else {
      var Tpos = (time - this.startTime) / (this.options.duration);
      this.now = this.options.transition(Tpos) * (this.to-this.from) + this.from;
    }
    this.increase();
  },

  custom: function(from, to) {
    if (this.timer != null) return;
    this.from = from;
    this.to = to;
    this.go();
  },

  hide: function() {
    this.now = 0;
    this.increase();
  },

  clearTimer: function() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

fx.Layout = Class.create();
fx.Layout.prototype = Object.extend(new fx.Base(), {
  initialize: function(el, options) {
    this.el = $(el);
    this.el.style.overflow = "hidden";
    this.el.iniWidth = this.el.offsetWidth;
    this.el.iniHeight = this.el.offsetHeight;
    this.setOptions(options);
  }
});

fx.Height = Class.create();
Object.extend(Object.extend(fx.Height.prototype, fx.Layout.prototype), {
  increase: function() {
    this.el.style.height = this.now + "px";
  },

  toggle: function() {
    if (this.el.offsetHeight > 0) this.custom(this.el.offsetHeight, 0);
    else this.custom(0, this.el.scrollHeight);
  }
});

fx.Width = Class.create();
Object.extend(Object.extend(fx.Width.prototype, fx.Layout.prototype), {
  increase: function() {
    this.el.style.width = this.now + "px";
  },

  toggle: function(){
    if (this.el.offsetWidth > 0) this.custom(this.el.offsetWidth, 0);
    else this.custom(0, this.el.iniWidth);
  }
});

fx.Opacity = Class.create();
fx.Opacity.prototype = Object.extend(new fx.Base(), {
  initialize: function(el, options) {
    this.el = $(el);
    this.now = 1;
    this.increase();
    this.setOptions(options);
  },

  increase: function() {
    if (this.now == 1) this.now = 0.9999;
    if (this.now > 0 && this.el.style.visibility == "hidden") this.el.style.visibility = "visible";
    if (this.now == 0) this.el.style.visibility = "hidden";
    if (window.ActiveXObject) this.el.style.filter = "alpha(opacity=" + this.now*100 + ")";
    this.el.style.opacity = this.now;
  },

  toggle: function() {
    if (this.now > 0) this.custom(1, 0);
    else this.custom(0, 1);
  }
});

fx.sinoidal = function(pos){
  return ((-Math.cos(pos*Math.PI)/2) + 0.5);
  //this transition is from script.aculo.us
}
fx.linear = function(pos){
  return pos;
}
fx.cubic = function(pos){
  return Math.pow(pos, 3);
}
fx.circ = function(pos){
  return Math.sqrt(pos);
}

fx.Text = Class.create();
fx.Text.prototype = Object.extend(new fx.Base(), {
  initialize: function(el, options) {
    this.el = $(el);
    this.setOptions(options);
    if (!this.options.unit) this.options.unit = "em";
  },

  increase: function() {
    this.el.style.fontSize = this.now + this.options.unit;
  }
});
