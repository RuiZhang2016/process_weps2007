//
// bullshit workaround 
//
function write_code (code) {
    document.write(code);
}

//
// append a function into onload
//
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}


function change_display_by_id (id,style) {
    var element = document.getElementById(id);
    if (element) {
        element.style.display = style;
    }
}