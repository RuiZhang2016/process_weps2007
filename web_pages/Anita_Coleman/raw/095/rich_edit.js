var ua    = navigator.userAgent;
var d     = document;
var w     = window;
var edit  = false;
var start = -1;
var end   = -1;
var len   = -1;

if (d.selection || (ua.indexOf('Gecko') >= 0 && ua.indexOf('Safari') < 0)) {
    edit = true;
}

function getText(field) {
    if (d.selection) {
        return d.selection.createRange().text;
    }
    else {
        len   = field.textLength;
        start = field.selectionStart;
        end   = field.selectionEnd;
        if (end == 1 || end == 2) {
            end = len;
        }
        return field.value.substring(start, end);
    }
}

function setText(field, value) {
    field.focus();
    if (d.selection) {
        d.selection.createRange().text = value;
    }
    else if (len && (start >= 0) && end) {
        field.value = field.value.substring(0, start) + value + 
                        field.value.substr(end, len);
    }
    else {
        field.value = field.value + value;
    }
}

function wrapSelection(field, left, right) {
    if (!edit) {
        return false;
    }
    var value = getText(field);
    if (value) {
        setText(field, left + value + right);
    } else {
        field.value = field.value + left + right;
    }

    return false;
}

function wrapSelectionWithLink(field) {
    if (!edit) {
        return false;
    }
    var url = prompt(translator.gettext("Enter URL:"), "http://");
    if (url != null) {
        var left  = "<a href=\"" + url + "\">";
        var right = "</a>";
        wrapSelection(field, left, right);
    }

    return false;
}

/*
function openWindow(url, name, height, width) {
    if (height == null) height = 450;
      if (width == null)  width = 500;
        window.open(url, name, 'scrollbars=yes,menubar=no,resizable=yes,toolbar=no,width=' + width + ',height=' + height);
}
*/

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
