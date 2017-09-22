// rollovers
function imgOn(imgName) {
  if (document.images) document.images[imgName].src = eval(imgName + "On").src;
}

function imgOff(imgName) {
  if (document.images) document.images[imgName].src = eval(imgName + "Off").src;
}

function imgDown(imgName) {
  if (document.images) document.images[imgName].src = eval(imgName + "Down").src;
}

function btnOn(imgName) {
  if(document.images) document.getElementById(imgName).src = eval(imgName + "On").src;
}

function btnOff(imgName) {
  if(document.images) document.getElementById(imgName).src = eval(imgName + "Off").src;
}

function btnDown(imgName) {
  if(document.images) document.getElementById(imgName).src = eval(imgName + "Down").src;
}

// form focus
function focusForm() {
  // form may not always show up on page
  if(document.login) {
    if(document.login.elements['session_key'].value == '') {
      document.login.elements['session_key'].focus();
    } else {
      document.login.elements['session_password'].focus();
    }
  }
}

// form label blur/focus
function focusField(e,str) {
  if(e.value == str) e.value = '';
}

function blurField(e,str) {
  if(e.value == '') e.value = str;
}

// popups
function plainPop(url,w,h,scr,res) {
  var win = window.open(url,'LinkedIn','toolbar=no,width='+w+',height='+h+',directories=no,status=no,scrollbars='+scr+',resizable='+res+',menubar=no,location=no,left=10,top=25');
  if (window.focus) { win.focus() }
}

// ie sp2
function isSP2() {
  var fIsSP2 = false;
  fIsSP2 = (window.navigator.userAgent.indexOf("SV1") != -1);
  return fIsSP2;
}

// IE SP2 or later
function isSP2OrLater() {
  var fIsSP2OrLater = false;
  fIsSP2OrLater = isSP2() || (window.navigator.userAgent.indexOf("7.") != -1);
  return fIsSP2OrLater;
}

// for forms
function fillApplyAddress() {
  if(document.forms[1]) {
    var d = document.forms[1];
    if(d.address1.value == '') d.address1.value = 'Street';
    if(d.address2.value == '') d.address2.value = 'Street 2';
    if(d.city.value == '') d.city.value = 'City';
    if(d.state.value == '') d.state.value = 'State';
    if(d.postalCode.value == '') d.postalCode.value = 'ZIP';
  }
}

// dummy for invite pages
function fixDefaultBody() { }

// for jobs popups
function jobsPop(url,w,h) {
  var win = window.open(url,'fromjobs','width='+w+'height='+h+',toolbar=no,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no,location=no');
  if (window.focus) { win.focus() }
}

function headerCloseLink() {
  if(window.name=='fromjobs') {
    document.write('<img src="/img/logos/logo.gif" width="129" height="36" alt="LinkedIn" id="logo-jobpop"><a href="javascript:self.close();" class="closelink">Close this window</a>');
  }
}

function footerCloseLink() {
  if(window.name=='fromjobs') {
    document.write('<a href="javascript:self.close();" class="closelink">Close this window</a><br><br>');
  }
}

function saveCookie(name,value,days) {
  var d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var ex = "; expires=" + d.toGMTString();
  document.cookie = name + "=" + value + ex + "; path=/";
}

function readCookie(name) {
  var eq = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1,c.length);
    if (c.indexOf(eq) == 0) return c.substring(eq.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  saveCookie(name, "", -1);
}

if(window.name=='fromjobs') {
  document.write('<link rel="stylesheet" type="text/css" href="/css/jobs_pop.css">');
}

function addEvent(obj, type, fn) {
	if (obj.addEventListener)
		obj.addEventListener(type, fn, false);
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn](window.event); }
		obj.attachEvent("on"+type, obj[type+fn]);
	}
}

function getElementsByClass(node, tag, searchClass) {
  var classElements = new Array();
  if ( node == null )
    node = document;
  if ( tag == null )
    tag = '*';
  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
  for (i = 0, j = 0; i < elsLen; i++) {
    if ( pattern.test(els[i].className) ) {
      classElements[j] = els[i];
      j++;
    }
  }
  return classElements;
}

function getElementsByTagNames(list,obj) {
  if (!obj) var obj = document;
  var tagNames = list.split(',');
  var resultArray = new Array();
  for (var i=0;i<tagNames.length;i++) {
    var tags = obj.getElementsByTagName(tagNames[i]);
    for (var j=0;j<tags.length;j++) {
      resultArray.push(tags[j]);
    }
  }
  var testNode = resultArray[0];
  if (testNode.sourceIndex) {
    resultArray.sort(function (a,b) {
      return a.sourceIndex - b.sourceIndex;
    });
  } else if (testNode.compareDocumentPosition) {
    resultArray.sort(function (a,b) {
      return 3 - (a.compareDocumentPosition(b) & 6);
    });
  }
  return resultArray;
}

function addClass(target, classValue) {
  var pattern = new RegExp("(^| )" + classValue + "( |$)");
  if (!pattern.test(target.className)) {
    if (target.className == "") target.className = classValue;
    else target.className += " " + classValue;
  }
  return true;
}

function removeClass(target, classValue) {
  var removedClass = target.className;
  var pattern = new RegExp("(^| )" + classValue + "( |$)");
  removedClass = removedClass.replace(pattern, "$1");
  removedClass = removedClass.replace(/ $/, "");
  target.className = removedClass;
  return true;
}

var unescapeHTML = function(str) {
  var div = document.createElement('div');
  div.innerHTML = str.replace(/<\/?[^>]+>/gi, '');
  return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
}

var dbl_ord = Math.random() * 10000000000000000;