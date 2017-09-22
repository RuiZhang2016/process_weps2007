var DOUBLE_CLICK_INTERVAL = 350; // milliseconds
var SELECTION_HACK_DELAY = 150; // milliseconds
var checkingDoubleClick = false;

function clickHandler(ev) {
  if (checkingDoubleClick) {
    checkingDoubleClick = false;
    triggerPopupDict();
  }
  else {
    checkingDoubleClick = true;
    setTimeout("clickHandlerTimeout()", DOUBLE_CLICK_INTERVAL);
  }
  return true;
}

function clickHandlerTimeout() {
  checkingDoubleClick = false;
}

function doubleClickHandler(ev) {
  if (checkingDoubleClick) {
    // browser supports double click events
    checkingDoubleClick = false;
    triggerPopupDict();
  }
  return true;
}

function triggerPopupDict() {
  if(GetSel() != "") {
    // on most browsers, just open the dictionary right away:
    PopupDict();
  }
  else {
    // on certain browsers, wait until the selection is handled: 
    setTimeout("PopupDict()", SELECTION_HACK_DELAY);
  }
}

if ((window.captureEvents) && (parseInt(navigator.appVersion) < 5)) {
  // running an old version of Netscape:
  window.captureEvents(Event.MOUSEUP);
  window.onmouseup = clickHandler;
}
else {
  document.onclick = clickHandler;
  document.ondblclick = doubleClickHandler;
}

function PopupDict()
{
  var word = GetSel(); 
try{
  // Do some cheap plural stemming.
  // girdles -> girdle
  word = Fix (word, /(le)s$/);
  // estimates -> estimate
  word = Fix (word, /([aeiou][^aeiou]e)s$/);
  // faces -> face, gauges -> gauge
  word = Fix (word, /([cg]e)s$/);
  // flies -> fly
  re = /ies$/;
  word = word.replace (re, "y");
  // most words are like this, e.g., dogs -> dog, fishes -> fish 
  word = Fix (word, /([^aeioucs])e?s$/);
  } catch(e){}

if (word != "") {
  dictURL = "/mwu/popup?va=" + word;
  dictWin = window.open(dictURL, "dictWin",
    "resizable=yes,scrollbars=yes,status=yes,width=350,height=350,screenX=430,screenY=50");
  dictWin.focus();
  }
}

function GetSel () 
{
  var str = "";
  if (top.window.getSelection) {
    str = top.window.getSelection(); 
  }
  else if (top.document.selection && top.document.selection.createRange) {
      var range = top.document.selection.createRange(); 
      if (range) str = range.text; 
  } 
  if (!str) {
    return "";
  }

  /* Truncate string at 30 characters. */ 
  max = 30; 
  if (str.length > max)
  {
    str = str.substr (0, max);
    var iEnd = str.length - 1;
    while (iEnd > 0)
    {
      ch = str.charAt (iEnd);
      /* Stop when the character you just removed was a blank */ 
      if (ch == ' ') {break;}
      iEnd--;
    }
    str = str.substring (0, iEnd); 
  }
  /* Remove tabs, newlines. */ 
  /* (Don't use /[nt]/, to avoid Netscape bomb) */
  /* Remove ^M's which Netscape adds between lines */
try {
  re=/\cM/g;
  str = str.replace (re,' ');
  re=/\n/g;
  str = str.replace (re,'');
  re=/\t/g;
  str = str.replace (re,''); 

  /* Remove double spaces */ 
  re=/\s\s/g;
  len=str.length;
  oldlen=len+1;
  while (len < oldlen)
  {
    str = str.replace (re,' ');
    oldlen = len;
    len = str.length;
  }
} catch(e) {}

  return str;
}

function Fix(word, re) {
  re.exec(word);
  word = word.replace(re, RegExp.$1);
  return word;
}
