var myTafLogId = 0;
var pczId = 1000;
var punchcard_status = Array(
  'Earn this punch today!',
  'This punch has already been earned.',
  'This punch is pending shipment of an order.'
);

function getAbsElementPosition(element) {
  var x=0,y=0;
  while (element!=null) {
    x+=element.offsetLeft;
    y+=element.offsetTop;
    element=element.offsetParent;
  }
  return {x:x,y:y};
}

function hideMe(id) {
  var obj;
  if (obj = document.getElementById(id)) {
    if (obj.style) {
      obj.style.display='none';
    }
  }
}

function showMe(id, linkobj, taf_log_id) {
  var obj;
  var ytop;
  if (obj = document.getElementById(id)) {
    if (obj.style) {
      myTafLogId = taf_log_id;
      if (linkobj) {
        if (ytop = getAbsElementPosition(linkobj).y) {
          obj.style.top = (ytop - 200) + 'px';
        }
      }
      obj.style.display='block';
    }
  }
}

function submitMe(form_name, field_to_set, val_to_set) {
  var theform;
  if (theform = document.forms[form_name]) {
    if (field_to_set && theform.elements[field_to_set]) {
      theform.elements[field_to_set].value = val_to_set;
    }
    theform.submit();
  }
}

function do_selects(form_name, show) {
  var myform = document.forms[form_name];
  var ua=navigator.userAgent.toLowerCase();
  var isIe = ua.indexOf("msie") > -1; //some lite browser detection
  var isIeMac = ( ua.match(/.*mac.*/) != null && isIe ); //for our special cases
  if ( myform && isIe && !isIeMac ) {
    for (elem in myform.elements) {
      if (myform.elements[elem]) {
        if (myform.elements[elem].options) {
          myform.elements[elem].style.display = (show) ? 'inline' : 'none';
        }
      }
    }
  }
}

function showTooltip(id, linkobj) {
  var obj;
  var xpos;
  var ypos;
  if (obj = document.getElementById(id)) {
    if (obj.style) {
      if (linkobj) {
        if (xpos = getAbsElementPosition(linkobj).x) {
          obj.style.left = '-1000px';
          obj.style.display='block';
          if (obj.className.match(/.*left.*/) != null) {
            xpos = xpos - 35 + (linkobj.offsetWidth/2);
          } else {
            xpos = xpos - obj.offsetWidth + 43;
          }
        }
        if (ypos = getAbsElementPosition(linkobj).y) {
          if (obj.className.match(/.*bottom.*/) != null) {
            ypos = ypos - obj.offsetHeight;
          } else {
            ypos = ypos + linkobj.offsetHeight + 5;
          }
        }
        if (xpos) {
          obj.style.left = xpos + 'px';
        }
        if (ypos) {
          obj.style.top = ypos + 'px';
        }
        obj.style.zIndex = pczId++;
      }
    }
  }
}

function swapContent(content_element_id, content) {
  var obj;
  if (obj = document.getElementById(content_element_id)) {
    obj.innerHTML = content;
  }
}
