// ugly error checking for public profile search form
// based on labels.js
var fancyLabels = function() {
  
  var initLabel = function(span) {
    span.style.display = 'none';
    var lbl = span.getElementsByTagName('label')[0];
    var input = document.getElementById(lbl.htmlFor);
    input._label = lbl.firstChild.nodeValue;
    addEvent(input, 'focus', focusedLabel);
    addEvent(input, 'blur', blurredLabel);
    if(input.value == '') showLabel(input);
  }
  
  var checkErrors = function(e) {
    var hasError = false;
    var errorString = '';
    
    // remove any old errors 
    if(document.getElementById('search_error')) {
      document.getElementById('search_error').parentNode.removeChild(document.getElementById('search_error'));
    }
    
    var inputs = getElementsByTagNames('input',document.getElementById('search'));
    for(var i = 0; i < inputs.length; i++) {
      if(inputs[i].value == inputs[i]._label) {
        errorString = errorString + 'Please enter a ' + inputs[i]._label.toLowerCase() + '.<br>';
        hasError = true;
      }
    }
    
    if(hasError) {
      // show error message string
      var errorInsertPoint = document.getElementById('search').getElementsByTagName('form')[0];
      var errorEl = document.createElement('p');
      errorEl.id = 'search_error';
      errorEl.className = 'error';
      errorEl.innerHTML = errorString;
      errorInsertPoint.insertBefore(errorEl,errorInsertPoint.firstChild);
    
      // don't submit the form
      if(e && e.stopPropagation && e.preventDefault) {
        e.preventDefault();
      }
      if(window.event) {
        window.event.returnValue = false;
      }
    }
  }
  
  var focusedLabel = function(e) {
    var input = window.event ? window.event.srcElement : e ? e.target : null;
    if(input.value == input._label) hideLabel(input);
  }
  
  var blurredLabel = function(e) {
    var input = window.event ? window.event.srcElement : e ? e.target : null;
    if(input.value == '') showLabel(input);
  }
  
  var hideLabel = function(input) {
    input.value = '';
    removeClass(input, 'labeloff');
    addClass(input, 'labelon');
  }
  
  var showLabel = function(input) {
    input.value = input._label;
    removeClass(input, 'labelon');
    addClass(input, 'labeloff');
  }
  
  return {
    init: function(id, form) {
      if(!document.getElementById || !document.getElementById(id)) return;

      var div = document.getElementById(id);
      var lbls = getElementsByClass(div, 'span', 'lbl');
      for(var i = 0; i < lbls.length; i++) {
        initLabel(lbls[i]);
      }

      // form is an optional parameter (used when form is not inside target div)
      if(!form) var form = div.getElementsByTagName('form')[0];
      addEvent(form, 'submit', checkErrors);
    }
  }
  
}();

// USAGE: addEvent(window, 'load', function() { init('searchjobs'); });