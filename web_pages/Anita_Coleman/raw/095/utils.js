// This script checks and unchecks boxes on a form
// Checks and unchecks unlimited number in the group...
// Pass the Checkbox group name...
// call buttons as so:
// <input type=button name="CheckAll"   value="Check All"
        //onClick="checkAll(document.myform.list)">
// <input type=button name="UnCheckAll" value="Uncheck All"
        //onClick="uncheckAll(document.myform.list)">

function u_Translate() {
  this.snippets = { };
}
u_Translate.prototype.gettext = function(po_phrase) {
  return this.snippets[ po_phrase ];
}
u_Translate.prototype.settext = function(po_phrase, po_translation) {
  this.snippets[ po_phrase ] = po_translation;
}
var translator = new u_Translate();

function u_Templates() {
  this.settings = { };
}
u_Templates.prototype.get = function(_option) {
  // if (!this.settings.hasOwnProperty( _option )) alert("missing "+_option+" from templates");
  return this.settings[ _option ];
}
u_Templates.prototype.set = function(_option,_setting) {
  this.settings[ _option ] = _setting;
}
var templates = new u_Templates();

// Begin
function checkAll(field)
{
for (i = 0; i < field.length; i++)
        field[i].checked = true ;
}

function uncheckAll(field)
{
for (i = 0; i < field.length; i++)
        field[i].checked = false ;
}

function openWindow(url, name, height, width) {
  if (height == null) height = 450;
  if (width == null)  width = 500;

  var win;
  var winleft = (screen.width - width) / 2;
  var wintop  = (screen.height - height) / 2;

  win = window.open(url, name, 'scrollbars=yes,menubar=no,' +
	                           'toolbar=no,width=' + width + 
	                           ',height='+height +
                               ',top=' + wintop + 
	                           ',left=' + winleft + ',resizable=yes'
	               );
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

function formPopup(myForm, name, height, width) {
  if (height == null) height = 450;
  if (width == null) width = 500;
  if (! window.focus) return true;
  nw = window.open('', name, 'top=100,left=100,height=' + height + ',width=' + width + ',location=no,resizable=yes,menubar=no,scrollbars=yes,status=no');
  myForm.target=name;
  return nw;
}

function markSelected(list)
{
    for (i=0; i<list.length; i++) {
        list.options[i].selected = true;
    }
    return true;
}

// Move items from one select box to another
// By default leave values of 'undef' alone, unless undef_action
// is delete or move
// Two optional arguments
function moveSide(fbox, tbox, undef_action, fbox_min, tbox_max) {
    var arrFbox = new Array();
    var arrTbox = new Array();
    var arrLookup = new Array();
    var i;
    for (i = 0; i < tbox.options.length; i++) {
	arrLookup[tbox.options[i].text] = tbox.options[i].value;
	arrTbox[i] = tbox.options[i].text;
    }

    if (tbox_max != "" && tbox.options.length >= tbox_max) {
       alert(translator.gettext("You may not have more than") + ' \" ' + tbox_max + '\"' + translator.gettext("elements in this selection"));
       return false;
    }
    if (fbox_min != "" && fbox.options.length <= fbox_min) {
       alert(translator.gettext("You must have at least") + ' \" ' + fbox_min + '\"' + translator.gettext("elements in this selection"));
       return false;
    }

    var fLength = 0;
    var tLength = arrTbox.length;
    for(i = 0; i < fbox.options.length; i++) {
	arrLookup[fbox.options[i].text] = fbox.options[i].value;
	if (fbox.options[i].selected && fbox.options[i].value != "" &&
		fbox.options[i].value != "undef") {
	    arrTbox[tLength] = fbox.options[i].text;
	    tLength++;
	}
	else {
	    if (fbox.options[i].selected && fbox.options[i].value == "undef") {
		if (undef_action == "delete") {
			continue;
		}
		if (undef_action == "move") {
			arrTbox[tLength] = fbox.options[i].text;
			tLength++;
			continue;
		}
	    	arrTbox[tLength] = fbox.options[i].text;
	    	tLength++;
	    	arrFbox[fLength] = fbox.options[i].text;
	    	fLength++;
	    }
	    else {
	    	arrFbox[fLength] = fbox.options[i].text;
	    	fLength++;
	    }
	}
    }

    fbox.length = 0;
    tbox.length = 0;
    var c;
    for(c = 0; c < arrFbox.length; c++) {
	fbox[c] = new Option(arrFbox[c], arrLookup[arrFbox[c]]);
    }
    for(c = 0; c < arrTbox.length; c++) {
	tbox[c] = new Option(arrTbox[c], arrLookup[arrTbox[c]]);
    }
    tbox[tbox.length - 1].selected = true;
    fbox.focus();

    return false;
}

function moveUpDown(list, to) {
    var total = list.options.length-1;
    var index = list.selectedIndex;
    if (index == -1) return false;
    if (to == +1 && index == total) return false;
    if (to == -1 && index == 0) return false;

    // make a copy of the data so we can reference it later
    var new_index = index + to
    var tmptext = list.options[new_index].text
    var tmpvalue = list.options[new_index].value

    // swap the items in the list
    list.options[new_index] = new Option(list.options[index].text, list.options[index].value, 0, 1);
    list.options[index] = new Option(tmptext, tmpvalue);

    list.options[new_index].selected = true;
    list.focus();

    return false;
}

function chkAgreed(f,txt)
{
  if (!txt) {
    txt = translator.gettext("You must agree to the terms and conditions before submitting.")
  }
  if (!f.agree_to_terms.checked) {
    alert(txt);
    f.agree_to_terms.focus();
    return false;
  }
  return true;
}

  // usage:
  // onclick="document.getElementById('progbar').style.display='';
  // progStart();"
  //
  // then place a script containing: progDraw();
  // where the bar should be rendered

var numBars  = 25;   // number of <span> bars
var interval = 250;  // in milliseconds

var stageOneColor   = "#E8E8E8";
var stageTwoColor   = "#B3B3B3";
var stageThreeColor = "#929292";
var stageFourColor  = "#666666";
var stageFiveColor  = "#000000";
var backgroundColor = 'transparent';

var currentVal = numBars;
var timer;

function setNumBars(nbars) {
  var v = parseInt(nbars);
  if (v > 0) {
    numBars = v;
  }
}

// this overrides the javascript setInterval with something useless
//function setInterval(intv) {
//  var v = parseInt(intv);
//  if (v > 0) {
//    interval = v;
//  }
//}

function progClear() {
  var elem;
  for (var i=1; i <= numBars; i++) {
    elem = document.getElementById('progress' + i);
    elem.style.backgroundColor = backgroundColor;
  }
  currentVal = 0;
}

function progUpdate() {
  currentVal++;
  var elem = document.getElementById('progress'+currentVal)
    if (currentVal > numBars) {
      progClear(); // perpetual
    } else {
      var stage = Math.floor((currentVal - 1) / 5);
      switch (stage) {
      case 0:  elem.style.backgroundColor = stageOneColor;   break;
      case 1:  elem.style.backgroundColor = stageTwoColor;   break;
      case 2:  elem.style.backgroundColor = stageThreeColor; break;
      case 3:  elem.style.backgroundColor = stageFourColor;  break;
      case 4:  elem.style.backgroundColor = stageFiveColor;  break;
      default: elem.style.backgroundColor = stageOneColor;   break;
      }
    }
  timer = setTimeout('progUpdate()', interval);
}     

function progStop() {
  clearTimeout(timer);
  progClear();
}

function progStart(c1,c2,c3,c4,c5,bc) {
  if (c1 != null) stageOneColor   = c1;
  if (c2 != null) stageTwoColor   = c2;
  if (c3 != null) stageThreeColor = c3;
  if (c4 != null) stageFourColor  = c4;
  if (c5 != null) stageFiveColor  = c5;
  if (bc != null) backgroundColor = bc;
  progUpdate();
}

function progDraw() {
  document.writeln("<table align=\"center\"><tr><td>");
  document.writeln("<div style=\"font-size:8pt;padding:2px;" + 
		   "border:solid #000 1px\">");
  for (var i=1; i <= numBars; i++) {
    document.writeln("<span id=\"progress" + i + "\">&nbsp;" +   
		     "&nbsp;</span>");
  }
  document.writeln("</div></td></tr></table>");
}

function resetForm(f) {
  for (var i=0; i< f.elements.length; i++) {
    var e = f.elements[i];
    if (e.type == "select-one")
      e.selectedIndex = -1;
    else if (e.type == "select-multiple") {
      for (var j=0; j<e.options.length; j++)
	e.options[j].selected = false;
    }
    else if (e.type == "hidden") {
    }
    else if (e.type == "radio")
      e.checked = e.defaultChecked;
    else if (e.type == "text" || e.type == "textarea" || e.type == "password")
      e.value = "";
  }
}
