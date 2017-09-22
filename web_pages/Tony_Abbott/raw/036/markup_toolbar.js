/* BUG SOMEWHERE SO WE NEED TO LEAVE THIS LINE FREE OF CODE */

/* markup toolbar functions */
function insert(ctrl, val)
{ var scrollTop = ctrl.scrollTop;
  if (document.selection) // Internet Explorer
  { ctrl.focus();
    sel = document.selection.createRange();
    sel.text = val;
  } else if (ctrl.selectionStart || // Mozilla/Netscape
             ctrl.selectionStart == 0)
  { var start = ctrl.selectionStart;
    var end = ctrl.selectionEnd;
    ctrl.value = ctrl.value.substring(0, start)
                 + val
                 + ctrl.value.substring(end, ctrl.value.length);
    ctrl.focus();
    ctrl.selectionStart = start + val.length;
    ctrl.selectionEnd = start + val.length;
  } else
  { ctrl.value += val;
    ctrl.focus();
  }
  ctrl.scrollTop = scrollTop;
}


function insert_tag(ctrl, start_tag, txt, end_tag)
{ var full_tag = '[' + start_tag + ']';
  if (end_tag) full_tag += txt + '[/' + end_tag + ']';
  return insert(ctrl, full_tag);
}


function create_tag(ctrl, start_tag, end_tag)
{ var txt = 'Your text goes here';
  if (document.selection) // Internet Explorer
  { //ctrl.focus();
    if (document.selection.createRange().text != '')
    { txt = document.selection.createRange().text;
    }
  } else if (ctrl.selectionStart != ctrl.selectionEnd) // Mozilla/Netscape
  { var start = ctrl.selectionStart;
    var end = ctrl.selectionEnd;
    txt = ctrl.value.substring(start, end);
  }

  return insert_tag(ctrl, start_tag, txt, end_tag);
}


function add_tag(ctrl, taga, tagb) // no attr required
{ if (!tagb) tagb = taga;
  return create_tag(ctrl, taga, tagb);
}
  
  

function add_empty_tag(ctrl, tag)
{ return create_tag(ctrl, tag);
}


function add_advanced_tag(ctrl, tag, attr) // attr required
{ var start_tag = get_start_tag(tag, attr, 1);
  if (start_tag) return create_tag(ctrl, start_tag, tag);
}


function add_empty_advanced_tag(ctrl, tag, attr)
{ var start_tag = get_start_tag(tag, attr, 1);
  if (start_tag) return create_tag(ctrl, start_tag);
}


function get_start_tag(tag, attr, check_attr)
{ if (check_attr && attr == null)
  { attr = prompt('Please enter the ' + tag.toLowerCase(), tag);
    if (attr == '' || attr == null) return;
  }
  if (attr == null) // no attributes provided - it is a simple tag
  { return tag;
  } else if (typeof attr != 'object') // single attribute provided
  { return tag + '=' + attr;
  }

  var start_tag = tag;
  if (attr[tag.toLowerCase()] != null) start_tag = tag + '="' + attr[tag.toLowerCase()] + '"';
  for (a in attr)
  { if (a.toLowerCase() == tag.toLowerCase()) continue;
    start_tag += ' ' + a.toLowerCase() + '="' + attr[a] + '"';
  }

  return start_tag;
}


var image_ctrl;
function add_image_tag(attr)
{ if (image_ctrl && document.getElementById && document.createElement)
  { if (attr)
    { add_empty_advanced_tag(image_ctrl, 'IMAGE', attr);
    } else
    { alert('An error occurred while uploading your image');
    }
  }
}

function add_image(ctrl, url)
{ image_ctrl = ctrl;
  if (document.getElementById && document.createElement)
  { var win = window.open(url, 'win', 'top=50, left=50, width=800, height=700');
  }
}

