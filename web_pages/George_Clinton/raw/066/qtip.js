var zindex = 1000;
var qtip_timeouts = Array(); // for storing the timeouts for each qtip
var on_delay = 150; // time to wait before turning it on, in ms
var off_delay = 150; // time to wait before turning it off, in ms

/* returns an element's left (x) and top (y) coords as an object */
function getElementPosition(element) {
  var x=0,y=0;
  while (element!=null) {
    x+=element.offsetLeft-element.scrollLeft;
    y+=element.offsetTop-element.scrollTop;
    element=element.offsetParent;
  }
  return {x:x,y:y};
}

/* returns visible window width and height dimensions as an object */
function getWindowDimensions() {
  var x=0,y=0;
  if (self.innerHeight) { //all except Explorer
    x = self.innerWidth;
    y = self.innerHeight;
  } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
    x = document.documentElement.clientWidth;
    y = document.documentElement.clientHeight;
  } else if (document.body) { // other Explorers
    x = document.body.clientWidth;
    y = document.body.clientHeight;
  }
  return {width:x,height:y};
}

/* delays the toggle to prevent flicker */
function turnoff_qtip (id) {
  if (qtip_timeouts[id]) {
    clearTimeout(qtip_timeouts[id]);
  }
  qtip_timeouts[id] = setTimeout('toggle_qtip("'+id+'", false)', on_delay);
}

function turnon_qtip (id) {
  if (qtip_timeouts[id]) {
    clearTimeout(qtip_timeouts[id]);
  }
  qtip_timeouts[id] = setTimeout('toggle_qtip("'+id+'", true)', off_delay);
}

/* turns the qtip on or off */
function toggle_qtip(id, on) {
  if (qtip_timeouts[id]) {
    clearTimeout(qtip_timeouts[id]);
  }

  /* find all the elements */
  var rep = document.getElementById('rep_' + id);

  if (rep) { // don't do anything if the rep element doesnt exist
    var rep_handle = document.getElementById('rep_handle_' + id);
    var mini = document.getElementById('mini_' + id);
    var tip = document.getElementById('tip_' + id);
    var minibg = document.getElementById('bg_rep_' + id);
    var minibg_top = document.getElementById('bg_top_rep_' + id);
    var displayProperty = (on == true) ? 'block' : 'none';
    var is_visible = (mini != null) ? (mini.style.display == 'block') : null;

    /* init some stuff for positioning */
    var repheight = rep.offsetHeight;
    var repwidth = rep.offsetWidth;
    var reptop = getElementPosition(rep_handle).y; // ie 5.5 reports wrong top pos, so we use the wrapper/handle
    var tiptop = Math.round(repheight/2) - 4;
    var bodyheight = getWindowDimensions(rep).height;
    var tipheight = 26;
    var minitop = -5;
    var ua=navigator.userAgent.toLowerCase();
    var isIe = ua.indexOf("msie") > -1; //some lite browser detection
    var isIeMac = (ua.match(/.*mac.*/) != null && isIe); //for our special cases
    var posoffset = (isIeMac) ? -15 : 0; //ie5mac has some positioning offset (?)
    var margintop = 2;
    var marginbot = -6; //bottom margin to keep the shadow visible

    if (!on && is_visible) { // if turning off & visible
      mini.style.display = displayProperty; // hide the mini
      if (mini.className.match(/.*static.*/) == null) {
        mini.style.left = -1000; //move it offscreen if not static version
      }
      if (minibg != null) { // remove the iframe if exists
        minibg.removeNode(true);
      }
    }

    if (on && !is_visible) { // if turning on & not visible
      if (rep_handle == null || mini.className.match(/.*static.*/) != null) {
        rep.style.zIndex = zindex++;
        mini.style.display = displayProperty; // show the mini
      } else {
        mini.style.left = '-1000px';
        rep.style.zIndex = zindex++;
        mini.style.display = displayProperty; // show the mini
        /* position the qtip, relative to the link area (DT) */
        var miniheight = mini.offsetHeight; // get qtip's height for positioning

        /* if the qtip is outside the top of the viewable page, correct it */
        /* above top of page */
        if (reptop + minitop < posoffset + margintop) {
          tiptop += (reptop + minitop - posoffset + margintop);
          minitop = posoffset + margintop - reptop;
        }
        /* below bottom of page */
        if (reptop + minitop + miniheight > bodyheight + posoffset + marginbot)  {
          tiptop += (reptop + minitop + miniheight - bodyheight - posoffset - marginbot);
          minitop -= (reptop + minitop + miniheight - bodyheight - posoffset - marginbot);
        }

        /* now adjust the pointer (tip) */
        if (tiptop < minitop) { // pointer is above top of mini
          tiptop = 2; // move to top
        }
        if (tiptop + tipheight >= miniheight) { // pointer is below bottom of mini
          tiptop = miniheight - tipheight - 1 ; // move to bottom, minus its own height
        }

        /* glad all that's settled, now show it */
        mini.style.top = minitop + 'px';
        mini.style.left = repwidth + 73 + 'px';

        /* now set the tip; do this last coz ie pc has issues */
        tip.style.top = tiptop + 'px';
      }
      /* this is for ie-pc, important! force the tip display! */
      var dummy = tip.offsetWidth; //helps IE render the tip
      tip.style.display = displayProperty;
      /* end fix */

      /* build the shadow dynamically */
      if (!minibg_top && !isIeMac) { //don't do it again if it exists for this rep
        var newNode = document.createElement('DIV');
        newNode.id = 'bg_top_' + rep.id; // name it
        newNode.className = 'mini_bg_top'; // set its class
        mini.appendChild(newNode); // attach it to the DD

        newNode = document.createElement('DIV');
        newNode.id = 'bg_mid_' + rep.id; //name it
        newNode.className = 'mini_bg_mid';
        //newNode.style.height = mini.offsetHeight - 17;
        newNode.style.height = mini.offsetHeight - 25 + 3;
        mini.appendChild(newNode);

        newNode = document.createElement('DIV');
        newNode.id = 'bg_bot_' + rep.id; //name it
        newNode.className = 'mini_bg_bot';
        //newNode.style.top = mini.offsetHeight - 2;
        newNode.style.top = mini.offsetHeight - 10;
        mini.appendChild(newNode);
      }

      /* stack the layers in the right order */
      tip.style.zIndex = zindex++;
      rep.style.zIndex = zindex++;

      /* now if you're in IE and one of the static status qtips at page top, you get an iframe */
      /* this covers the styles SELECT at the top right of the Genre page */
      /* otherwise the SELECT ends up on top of the qtip */
      if (isIe && !isIeMac && mini.className.match(/.*static.*/) != null) {
        var newNode = document.createElement('IFRAME'); //dynamically build an iframe
        newNode.id = 'bg_' + rep.id; //name it
        newNode.src = '/null.html'; //causes SSL issue
        newNode.style.height = mini.offsetHeight - 8;
        newNode.className = mini.className; //give it the same styles as the mini
        newNode.style.display=displayProperty; //show it
        newNode.style.zIndex-=1; //puts it beneath the mini
        rep.appendChild(newNode); //attach it to the rep (the DL)
      }
    }
  }
}

