// It is a principal of this author to not record information about the visual qualities of HTML Elements ourside of the DOM.
// Most of the time, qualities that can be modified are already being tracked my the browser and tracking them again would add
// unnessary weight. The only time that an element should tracked outside of the DOM is during manipulation.

ahScrollBox = function(){ 
   //creating a method is equivalent
   //to creating an object in JS. - GM
   this.selectedObj = null; // Used to track the object event target.
   this.offsetX, this.offsetY; 
   this.scrollComps = false; // used to set moveScrolCompl event handler if scroll comp(s) exist on page.
   this.timeout; // used to store currently executing timeout reference.
   this.defaultMenuTimeout = 500;
   this.origFontSize; // This used in this.userFontResize;
   this.fontSizeEl = null; // Used to track element used to test for user change of font size using browser
   this.initialized = 0; // Used to determine of ahScrollBox has been initialized.
   document.ahScrollBox = this;
}

ahScrollBox.prototype.removeChild = function(parentId,childId){
  var parentId = parentId || 0;
  var childId  = childId || 0;
  var parentEl = this.getElementById(parentId);
  var childEl  = this.getElementById(childId);
  if(parentEl != null && childEl != null){
    return parentEl.removeChild(childEl);
  }	
  return false;
} 

ahScrollBox.prototype.getElementById = function(obj){
  // Obj can be string id or element. If el then just return el.
  var obj = obj || null;
  if(typeof obj == 'string'){
    if(document.getElementById) return document.getElementById(obj);
    else if(document.all) return document.all(obj);
  }else if(typeof obj == 'object') return obj;
  return null;
}

ahScrollBox.prototype.setSelectedElement = function(evt){
   var target = (evt.target) ? evt.target : evt.srcElement;
   if(target.id){
     this.selectedObj = this.getElementById(target.id);
   }   
   return (this.selectedObj != null);
}

//  Track element targeted with mousedown.
ahScrollBox.prototype.engage = function(evt){
  var evt = (evt) ? evt : event;
  ahScrollBox.setSelectedElement(evt)
   if(ahScrollBox.selectedObj){
      if(evt.clientY){ //IE 5+ and Net 6+
         ahScrollBox.offsetY = evt.clientY - ((ahScrollBox.selectedObj.offsetTop) ? ahScrollBox.selectedObj.offsetTop : 0) ;
      }else if(evt.offsetY){ //IE 4
         ahScrollBox.offsetY = evt.offsetY - ((evt.offsetY < -2) ? 0 : document.body.scrollTop);
      }
      return false;
   }
}

ahScrollBox.prototype.fadeMenu = function(evt,wrapId,iframeId,time){
  var wrapId = wrapId || null;
  var iframeId = iframeId || null;
  var time = time || this.defaultMenuTimeout;
  var evt = evt || null;
  this.timeout = setTimeout("ahScrollBox.switchMenuVisibility('" +wrapId+ "','" +iframeId+ "','hidden');",time);
  if(evt != null) evt.cancelBubble = true; 
}

ahScrollBox.prototype.stopFadeMenu = function(){
  this.stopTimeout();
}

ahScrollBox.prototype.stopTimeout = function(){
  clearTimeout(ahScrollBox.timeout);
}

// Stop strackimg the element being affected/modified
ahScrollBox.prototype.release = function(){
   if(ahScrollBox.selectedObj) ahScrollBox.selectedObj = null;
   return false;
}

ahScrollBox.prototype.getStyleObj = function(obj){
   var obj = obj || null;
   var el;
   if (obj.style) return obj.style;
   else{
      el = this.getElementById(obj);
      return (el != null) ? el.style : null;
   }
}

ahScrollBox.prototype.setStyle = function(obj,attrib,value){
  //value must be a string
  var obj = obj || null;
  var attrib = attrib || null;
  var value = value || '';
  var styleObj = this.getStyleObj(obj);
  if(styleObj != null && attrib != ''){
    eval("styleObj." + attrib + " = '" + value + "'");
    return true;
  }
  return false;
}

ahScrollBox.prototype.getStyle = function(obj,attrib){
  var obj = obj || null;
  var attrib = attrib || null;
  var styleObj = this.getStyleObj(obj);
  if(styleObj != null && attrib != ''){
    return eval('styleObj.' + attrib);
  }
  return false;
}

ahScrollBox.prototype.shiftTo = function(obj, x, y){
  // if strings are passed in then they must include the px suffix
  var obj = obj || null;
  var x = x || 0;
  var y = y || 0;
  if( this.setStyle(obj,'left',(typeof x == 'string')? x : x.toString() + 'px') 
      && this.setStyle(obj,'top',(typeof y == 'string')? y : y.toString() + 'px')) return true;
  else return false;
}


ahScrollBox.prototype.switchVisibility = function(obj,state){
  // obj can be a string or DOM element object.
  var obj = obj || null;
  // optional parameter state should be string "hidden" or "visible";
  var state = state || null;
  if(state == 'visible' || state == 'hidden'){
    return ahScrollBox.setStyle(obj,'visibility',state);
  } else {
    obj = this.getElementById(obj);
    if(obj != null && obj.style){ 
      state = this.getComputedStyle(obj,'visibility');
      obj.style.visibility = (state == "hidden" || state == null) ? "visible" : "hidden";
      return true;
    }
  }
  return false;
}

ahScrollBox.prototype.switchDisplay = function(obj,state){
  // obj can be a string or DOM element object.
  var obj = obj || null;
  // optional parameter state should be string "block" or "none";
  var state = state || null;
  if(state == 'block' || state == 'none'){
    return this.setStyle(obj,'display',state);
  } else {
    obj = this.getElementById(obj);
    if(obj != null && obj.style){
      state = this.getComputedStyle(obj,'display');
      obj.style.display = (state == "none" || state == null) ? "block" : "none";
      return true;
    }
  }
}

ahScrollBox.prototype.switchMenuVisibility = function(wrapId,iframeId,state){
  // If state is passed, it should be passed as if for the switchVisibility method ('hidden','visible')
  var wrapId = wrapId || null;
  var iframeId = iframeId || null;
  var state = state || null;
  state = (state == 'hidden') ? 'hidden' : (state == 'visible') ? 'visible' : null;
  var wrapEl = this.getElementById(wrapId);
  if(wrapEl != null){
    this.switchVisibility(wrapId,state);
    if(iframeId != null){
      state = (state == 'hidden') ? 'none' : (state == 'visible') ? 'block' : null;
      this.setStyle(iframeId,'height',wrapEl.offsetHeight-2);
      //Minus size of drop shadow. Concidered making it a pram but will leave as is for now.
      this.switchDisplay(iframeId,state);
    }
  }
}

ahScrollBox.prototype.setHeight = function(obj,h){
  // obj can be id string or element obj
  var h = h || 0;
  return this.setStyle(obj,'height',(typeof h == 'string')? h : h.toString() + 'px');
}

ahScrollBox.prototype.getHeight = function(obj){
  // obj can be id string or element obj
  return this.getStyle(obj,'height');
}

ahScrollBox.prototype.setWidth = function(obj,w){
  // obj can be id string or element obj
  var w = w || 0;
  return this.setStyle(obj,'width',(typeof w == 'string')? w : w.toString() + 'px');
}

ahScrollBox.prototype.getWidth = function(obj){
  // obj can be id string or element obj
  return this.getStyle(obj,'width');
}

ahScrollBox.prototype.copyIframeContent = function(srcObj,destObj){
  // objs can be id strings or objects
  //The source is an iframe and the dest is a non-iframe element 
  var srcHTML = this._getIframeContent(srcObj)
  var destObj = this.getElementById(destObj)
  if(srcHTML && destObj != null) destObj.innerHTML = srcHTML;
}

ahScrollBox.prototype._getIframeContent = function(obj){
  //obj can be string or object reference
  var obj = obj || null;
  var  iframe = this.getElementById(obj);
  if(iframe == null) return false;

  var iframeWin = null;
  if(window.frames && window.frames[obj]) iframeWin = window.frames[obj];
  else if(iframe.contentWindow) iframeWin = iframe.contentWindow;
  else if(iframe.contentDocument) iframeWin = iframe.contentDocument.defaultView;
  if(iframeWin == null) return false;

  return iframeWin.document.body.innerHTML;
}

ahScrollBox.prototype.addEventListener = function(obj,eventType,funcRef,captureFlag){
  // Event type should be string minus 'on' prefix, eg. mousedown instead of onmousedown.
  // funcRef should be a reference to a function not a string.
  var obj = obj || 0;
  var eventType = eventType || 0;
  var funcRef = funcRef || 0;
  var captureFlag = captureFlag || true;
  if(obj && eventType && typeof funcRef == 'function'){
    if(typeof obj == 'string') obj = this.getElementById(obj);
    if(obj != null){
      if(obj.addEventListener) obj.addEventListener(eventType, funcRef, captureFlag);
      else if(obj.attachEvent) obj.attachEvent('on'+eventType, funcRef);
      else eval("obj.on" + eventType + "=funcRef");
    }
  }
}

ahScrollBox.prototype.cancelEvent = function(){
  // This happens last due to event bubbling so it won't interfere with element events.
  return false;
}

ahScrollBox.prototype.getComputedStyle = function(obj,attrib){
  // obj can be id string or HTML object
  // attrib must be in hyphenated, CSS format
  var obj = obj || null;
  var attrib = attrib || null;
  var curSize = null;
  /* Safari does not support getComputedStyle - DOM2 method */
  if(typeof obj == "string") obj = this.getElementById(obj);
  if(obj != null && attrib != null){
    if(window.getComputedStyle){
      var compStyleObj = window.getComputedStyle(obj,"");
      curSize = compStyleObj.getPropertyValue(attrib);
    }else if(obj.currentStyle){
      var parts = attrib.split('-');
      attrib = parts[0];
      for(var i = 1; i < parts.length; i++){
        attrib += parts[i].substr(0,1).toUpperCase() + parts[i].substring(1,parts[i].length);
      }
      curSize = eval('obj.currentStyle.' + attrib);
    }
  }
  return curSize
}

//Creates invisible document node to use for fontSize change test.
ahScrollBox.prototype.createFontSizeTest = function(){
  var div = document.createElement('div');
  div.style.fontSize = "11px";
  div.style.display = "none";  
  var text = document.createTextNode("test text");
  div.appendChild(text); 
  this.fontSizeEl = div;
  document.body.appendChild(ahScrollBox.fontSizeEl);
  ahScrollBox.origFontSize = ahScrollBox.getComputedStyle(ahScrollBox.fontSizeEl,'font-size');
  ahScrollBox.addEventListener(document.body,'mouseover',document.ahScrollBox.userFontResize,false);
}

// If user executes font resize with browser then do soft refresh which
// executes onloads, i.e. scrollComp initialization.
ahScrollBox.prototype.userFontResize = function(){
  // Can't use this reference because this method is assigned to an 
  // event handler for another object and this becomes that element object.
  if(document.ahScrollBox && document.ahScrollBox.fontSizeEl != null){
    curSize = document.ahScrollBox.getComputedStyle(document.ahScrollBox.fontSizeEl,'font-size');
    if(curSize != null && curSize != document.ahScrollBox.origFontSize) history.go(0);
  }
}


// This method returns the topY position of the 
ahScrollBox.prototype.moveScrollCompToSelectedItem = function(idRoot){
  var idRoot = idRoot || null;
  var listItem = this.getElementById(idRoot + 'SelectedItem');
  var wrapStyle = this.getStyleObj(idRoot + 'Wrapper');
  var wrapHeight = (wrapStyle != null) ? parseInt(wrapStyle.height) : null
  var listItemBottomY = listItem.offsetTop + listItem.offsetHeight;

  if(listItem != null && wrapHeight != null && listItemBottomY > wrapHeight){
    var panel = this.getElementById(idRoot + 'Panel');
    var bar = this.getElementById(idRoot + 'Bar');
    var pathStyle = this.getStyleObj(idRoot + 'Path');
    if(panel == null || bar == null && pathStyle == null ) return;

    var newPanelY;
    var newBarY;
    //Move Panel
    newPanelY = (wrapHeight/2) - listItemBottomY;
    newBarY = (listItemBottomY/panel.offsetHeight) * (parseInt(pathStyle.height));
    var barMaxY = parseInt(pathStyle.height) - bar.height;
    if(newBarY > barMaxY) newBarY = barMaxY;
    this.shiftTo(panel, null,newPanelY);
    this.shiftTo(bar,null,newBarY);
  }
}

// Move Panel and Bar;
ahScrollBox.prototype.moveScrollComp = function(evt){
   var evt = (evt) ? evt : event;
   if(ahScrollBox.selectedObj != null){
      var bar = ahScrollBox.selectedObj;
      var barStyle = ahScrollBox.getStyleObj(bar);
      var idRoot = bar.id.substring(0,bar.id.lastIndexOf("Bar"));
      var pathStyle  = ahScrollBox.getStyleObj(idRoot + "Path");
      var wrapHeight = parseInt(ahScrollBox.getHeight(idRoot + "Wrapper"));
      var panel      = ahScrollBox.getElementById(idRoot + "Panel");
      var panelStyle = ahScrollBox.getStyleObj(panel);

      // If the scrollPanel is taller then the content then don't scroll is inactive.
      // This test is handled here instead of scroll comp initialization in case content changes dynamically or via font increase by user.
      if(wrapHeight >= panel.offsetHeight){
         barStyle.top = "0px";
         panelStyle.top = "0px";
         return false;
      }   
      

      // Move Bar
      evt.cancelBubble = true;
      var newY = (evt.clientY) ? (evt.clientY - ahScrollBox.offsetY) : (evt.pageY) ? (evt.pageY - ahScrollBox.offsetY) : null;
      var barMaxY = parseInt(pathStyle.height) - bar.height;
      if(newY < 0) newY = 0; // bar start top position must be 0 in relation to container.
      else if(newY > barMaxY) newY = barMaxY;
      ahScrollBox.shiftTo(bar, null, newY);

      // Move Panel
      var ratio = parseInt(barStyle.top) / (parseInt(pathStyle.height) - parseInt(bar.height));
      var newPanelTop = 0 - ((panel.offsetHeight - wrapHeight) * ratio);
      // 0 should always be the panel start position. Use wrapper div with relative positioning.
      panelStyle.top = newPanelTop + "px";
      return false
   }
}

ahScrollBox.prototype.setScrollDisplay = function(idRoot,state){
  // This works differently then the other switches. If you don't pass a state then the state is set to off.
  // This is why this method name is started with set instead of switch. :)
  var state = state || 'none';
  this.switchDisplay(idRoot+'BarWrapper',state);
}

ahScrollBox.prototype.initScrollComp = function(idRoot){
   // id param should be the root used to name the elements of scroll comp, i.e. scrollBar, scrollPanel, and scrollPath;
   // Add event handler to target, i.e. scrollBar onmousedown event listener;

   // Was initially going to put content size test here and not place event handler if not needed but decided to put
   // test in moveScrollComp method so that if content changes dynamically then scroll can become active.
   var bar = this.getElementById(idRoot + "Bar");
   var wrapEl = this.getElementById(idRoot + "Wrapper");
   var wrapStyle = (wrapEl != null) ? wrapEl.style : null;
   var panelEl = this.getElementById(idRoot + "Panel");
   var barWrapperEl = this.getElementById(idRoot + "BarWrapper");

   if(bar != null && wrapStyle != null && panelEl != null){
     if(parseInt(wrapStyle.height) >= panelEl.offsetHeight && barWrapperEl != null){
       this.setScrollDisplay(idRoot,'none');
       var listWrapper = this.getElementById(idRoot + 'ListWrapper');
       var listWrapper = this.getElementById(idRoot + 'ListWrapper');
       if(listWrapper != null) var panelWidth = listWrapper.offsetWidth;
       this.setHeight(idRoot+'Wrapper',panelEl.offsetHeight);
       var barWrapperWidth = this.getWidth(idRoot+ 'BarWrapper')
       if(panelWidth != null && barWrapperWidth != null){
         this.setWidth(panelEl,parseInt(panelWidth) + parseInt(barWrapperWidth));
       }
     }else{
       // The following line of code blocks dragging of the wrapper during text content text selection.
       wrapEl.onmousedown = this.cancelEvent;
       bar.onmousedown = this.engage;
       var selectedItem = this.getElementById(idRoot + 'SelectedItem');
       // The following test is done here so that that the scrollbar initialization can be
       // triggered by an event as well as upon document initialization.
       if(this.initialized && !this.scrollComps) document.onmousemove = ahScrollBox.moveScrollComp;
       if(selectedItem != null) this.moveScrollCompToSelectedItem(idRoot);
       // This switch is used to add the moveScroll event handler if a scrollbar is on the page. See this.init()
       this.scrollComps = true;
     }
   }
}

ahScrollBox.prototype.debug = function(str){
  //Used for testing event listener/handlers
  var str = str || 'here';
  alert(str);
}

ahScrollBox.prototype.preload = function(){
  //this.createFontSizeTest();
}

ahScrollBox.prototype.onload = function(){
  if(this.scrollComps) document.onmousemove = ahScrollBox.moveScrollComp;
  document.onmouseup = this.release;
  this.initialized = 1;
}

// Instantiate Object
var ahScrollBox = new ahScrollBox;
ahScrollBox.preload();
ahScrollBox.onload();

// The following line of code is an example of the line used to initialize a scrollComp. The line should appear above the HTML code.
//addToOnLoad("ahScrollBox.initScrollComp('scroll')");

// The following is an example of the HTML Code used to create the scrollComp
/*
   <script language="JavaScript"><!--
      addToOnLoad("ahScrollBox.initScrollComp('restaurants')");
   //--></script>
   <div class="browseBySubHeaderBlock">Browse by Restaurants</div>
   <div class="browseByListWrapper">
      <div id="restaurantsWrapper" class="scrollPanelWrapper" style="height:160px;">
         <div id="restaurantsPanel" class="scrollPanel">
            Content Here
            Content Here
            Content Here
            Content Here
            Content Here
            Content Here
            Content Here
            Content Here
            Content Here
            Content Here
         </div>
         <div id="restaurantsBarWrapper" class="scrollBarWrapper" style="left:132px; width:11px; height:160px;">
            <div id="pathLine" class="browseByScrollPath" style="height:160px;"></div>
            <div id="restaurantsPath" style="position:absolute; top:1px; height:158px">
               <img id="restaurantsBar" style="position:absolute;top:0;" src="http://images.citysearch.com/./images/scroll_bar.gif" border="0"/>
            </div>
         </div>
      </div>   
   </div>
*/
