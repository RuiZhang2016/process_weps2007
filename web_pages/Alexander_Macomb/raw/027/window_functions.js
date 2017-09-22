function OpenWin(url, features) {
	window.open( url, 'members', features + ",scrollbars=yes");
}

function NSOpenWin(url, title, features) {
	// try to open a pop up
	// if unsuccessful redirect user to 
	// pop-up tips page
	var win = window.open( url, title, features );
	if( win == null ) {
		window.location = "http://www.shipwreckcentral.com/popup_help.html";
	}
}

// get the layer object called "name"
function dhtml_getLayer(name) {
 if (name != null) {
  if (name.clip || name.style) return name;
  if (document.getElementById) return document.getElementById(name);
  if (document.all) return document.all[name];
  if (document.layers) return document.layers[name];
 }
 return null;
}

// get the layer object called "name"
function dhtml_getLayerStyle(name) {
  var layer = dhtml_getLayer(name);
  
  if (layer != null) {
    if (layer.clip) {
      return layer;
    } else if (layer.style) {
      return layer.style;
    }
  }

  return null;
}

function dhtml_isLayerVisible(name) {
  var layer = dhtml_getLayerStyle(name);
  var vis = false;
  if (layer) {
    if (layer.visibility == 'inherit') {
      vis = dhtml_isLayerVisible(layer.parent);
    } else if (layer.visibility == 'visible') {
      vis = true;
    } else if (layer.visibility == 'show') {
      vis = true;
    }
  }
  return vis;
}

// set layer background color
function dhtml_setLayerBackgroundColor(name, color) {		
  var layer = dhtml_getLayerStyle(name);		
  if (layer) {
    if (layer.bgColor) layer.bgColor = color;
    if (layer.backgroundColor) layer.backgroundColor = color;
  }
}

// toggle layer to invisible
function dhtml_hideLayer(name, displayNone) {		
  var layer = dhtml_getLayerStyle(name);
  if (layer) {
    if (document.layers) {
      layer.visibility = "hide";
    } else {
      layer.visibility = "hidden";
    }
    if (displayNone) {
      layer.display = 'none';
    }
  }
}

// toggle layer to visible
function dhtml_showLayer(name, displayBlock) {
  var layer = dhtml_getLayerStyle(name);
  if (layer) {
    if (document.layers) {
      layer.visibility = "show";
    } else {
      layer.visibility = "visible";
    }
    if (displayBlock) {
      layer.display = 'block';
    }
  }
}

function dhtml_clipLayer(name, clipleft, cliptop, clipright, clipbottom) {		
  var layer = dhtml_getLayerStyle(name);
  if (layer) {
    if (layer.clip && layer.clip.left) {
      layer.clip.left   = clipleft;
      layer.clip.top    = cliptop;
      layer.clip.right  = clipright;
      layer.clip.bottom = clipbottom;
    } else {
      var newWidth = clipright - clipleft;
      var newHeight = clipbottom - cliptop;
      layer.height = newHeight;
      layer.width	= newWidth;
      layer.top	= (zoompan.imageTop + cliptop) + "px";
      layer.left	= (zoompan.imageLeft + clipleft) + "px";
    }
  }
}
