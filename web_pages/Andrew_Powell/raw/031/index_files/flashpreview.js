//{{{ Lastfm
var Lastfm = {
  //{{{ Constants
  Version: '0.1a',
  RES_TRACK: 9,
  RES_ALBUM: 8,
  RES_ARTIST: 6,
  RES_BASE: 0,
  RES_TAG: 32,
  //}}}
  
  //{{{ Variables
  resources: new Array(),
  
  //}}}

  //{{{ Classes
  //{{{ Resource superclass
  Resource: {
    Resource: function(_restype, anchor, placebutton, icon) {
      
      this._restype  = _restype;
      this.anchor    = anchor;
      this.icon = this.icon ? this.icon : (icon ? icon : false);
      this.href      = typeof(this.anchor)=='object' ? this.anchor.href : this.anchor;
      this.index     = Lastfm.resources.length;
      this.linkcount = 0;
      this.track     = '';
      this.placebutton = placebutton;
    this.placeInfoBox = function () {
        var swfaddress = 'http://static.last.fm/flashpreview/7/';
        session = document.location.href.match(/^http:\/\/(betadev|test|www|beta|)\.last.fm\//) && getCookie ? getCookie('Session') : '';
        swfaddress = swfaddress+this.swf+'?url='+escape(this.href)+'&amp;index='+this.index+'&amp;session='+session+'&amp;self='+escape(document.location.href)+"&amp;"+(this.flp?'flp':'tsp')+"=1";
        this.swfCode = '<object align="absmiddle" id="LastfmFlashPlayer'+this.index+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+this.swfwidth+'" height="'+this.swfheight+'">'
          + '<param name="allowScriptAccess" value="always" />'
          + '<param name="movie" value="'+swfaddress+'" />'
          + '<param name="quality" value="high" />'
          + '<param name="url" value="'+this.href+'" />'
          + '<param name="index" value="'+this.index+'" />'
          + '<param name="session" value="'+session+'" />'
          + '<param name="self" value="'+escape(document.location.href)+'" />'
          + '<param name="quality" value="high" />'
          + '<param name="'+(this.flp?'flp':'tsp')+'" value="1" />'
          + '<embed align="absmiddle" src="'+swfaddress+'" quality="high" width="'+this.swfwidth+'" height="'+this.swfheight+'" name="LastfmFlashPlayer'+this.index+'" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'
          + '</object>';
        var code = '<div class="flashBox" id="LastfmResourceInfoBox'+this.index+'" style="z-index:100;position:absolute;height:'+this.swfheight+'px;width:'+this.swfwidth+'px;padding:0;display:none;"></div>';
        if(!this.placebutton) {
          document.write(code);
        } else {
          Lastfm.Insertion.before(code, this.button);
        }
        //get the div we just inserted.
        this.infoBox = document.getElementById('LastfmResourceInfoBox'+this.index);
        this.infoBox.style.position = 'absolute';
      }

      this.placeButton = function () {
        var icon   = this.icon ? this.icon : 'http://playground.audioscrobbler.com/steve/extlinks/new/icon.php?url='+this.href;

        var button = '<div tyle="display:inline;margin-top:2px;" class="miniplaybutton'+(this.flp?' flp':'')+'" id="LastfmResourceButton'+this.index+'">'
                     + '<a onFocus="this.blur()" href="javascript:;" onClick="Lastfm.previewNext('+this.index+');" style="text-decoration:none;"><img lign="absmiddle" src="'+icon+'" border="0" /></a>'
                   + '</div>';
        this.linkcount++;
        if(typeof this.anchor == 'object') {
          Lastfm.Insertion.before(button, this.anchor);
        } else {
          document.write(button);
        }

        //get the div we just inserted.
        this.button = document.getElementById('LastfmResourceButton'+this.index);
        if(this.postPlace)
          this.postPlace();
      }
      //X
      if(this.placebutton)
        this.placeButton();
      this.placeInfoBox();
      
      //{{{ public functions
      this.finish = function() {
        this.isStarted = false;
        if(this._finish) {
          this.finish = this._finish;
          this._finish = false;
        }
        this.finished();
        this.onend();
      }
      this.close = function() {
        this.closed();
        this.isStarted = false;
        this.onend();
      }
      this.stop = function() {
        this.isStarted = false;
        //reset finish so that it doesn't go to the next song.
        this.stopped();
        this.onend();
      }
      this.start = function(e) {
          if(!this.startedBefore) {
            this.init();
          }
          for(var i=0; i<Lastfm.resources.length; i++) {
            if(i!=this.index && Lastfm.getResource(i).isStarted) {
              Lastfm.getResource(i).close();
            }
          }
          this.startedBefore = true;
          this.isStarted = true;
          this.started(e);
          this.onstart(); //event
      }
      //}}}
    
      //{{{ events
      this.onstart = function() {
        
      }
      this.onend = function() {
        
      }
      //}}}
    },
    
    //{{{ Static functions
    extend: function(classtype) {
      if(classtype)
        classtype.prototype.Resource = Lastfm.Resource.Resource;
    }
    //}}}
    
  },
  //}}} end Resource
  //}}} end Classes
  
  //{{{ Static functions
  //X
  getResource: function (index) {
    return index<Lastfm.resources.length ? Lastfm.resources[index] : false;
  },
  
  ///deprecated just call previewplaylist method. 
  //used only to kick off playback through autostart
  previewNext: function(i) {
      this.autostartPlaylist();
  },
  //}}}
  
   autostartPlaylist: function() {
        playPreview(1);        
   },
   
  //{{{ Lib
  Insertion: {
    before: function(code, element) {
      if (element.insertAdjacentHTML) {
        element.insertAdjacentHTML('beforeBegin', code);
      } else {
        var range = element.ownerDocument.createRange();
        range.setStartBefore(element);
        var fragment = range.createContextualFragment(code);
        element.parentNode.insertBefore(fragment, element);
      }
    },
    
    inside: function(code, element) {
      if(element.innerHTML == '' || element.innerHTML) {
        element.innerHTML = code;
      } else {
        var range = document.createRange();
        range.selectNodeContents(element);
        range.deleteContents();
        var fragment = range.createContextualFragment(code);
        element.appendChild(fragment);
      }
    }
  },
  Position: {
    clone: function(source, target) {
      var valueT = 0, valueL = 0;
      do {
        valueT += source.offsetTop  || 0;
        valueL += source.offsetLeft || 0;
        source = source.offsetParent;
        //break;
      } while (source);
      target.style.top    = valueT + 'px';
      target.style.left   = valueL + 'px';
    }
  }
  //}}}
}

  //X
Lastfm.Track = function (a, placebutton, icon, flp) {
  //{{{ overrides
  this.swfwidth = 12;
  this.swfheight = 12;
  this.swf = 'playbutton_singletrack.swf';
  this.flp = flp;
  /*this.swfwidth = 225;
  this.swfheight = 60;
  this.swf = 'playbutton_artistoverview.swf';*/

  this.stopped = function() {
    Lastfm.Insertion.inside('', this.button);
    this.button.style.paddingRight = '0px';
    this.button.style.paddingLeft = '0px';
  }
  this.finished = function() {
    Lastfm.Insertion.inside('', this.button);
    this.button.style.paddingRight = '0px';
    this.button.style.paddingLeft = '0px';
  }
  this.started = function(e) {
    this.buffering();
    this.infoBox.style.display = 'inline';
    Lastfm.Insertion.inside(this.swfCode, this.infoBox);
    this.infoBox.style.paddingRight = '2px';
    this.infoBox.style.position = 'relative';
  }
  this.playing = function() {
    Lastfm.Insertion.inside('playing...', this.button);
  }
  this.buffering = function() {
    this.button.style.paddingRight = '4px';
    this.button.style.paddingLeft = '2px';
    Lastfm.Insertion.inside('buffering...', this.button);
  }
  this.init = function() {
    this.button.style.fontSize = '10px';
    this.button.originalHTML = this.button.innerHTML;
  }
  this.closed = function() {
    this.infoBox.style.display = 'none';
    Lastfm.Insertion.inside('', this.infoBox);
    Lastfm.Insertion.inside(this.button.originalHTML, this.button);
    this.button.style.paddingRight = '2px';
    this.button.style.paddingLeft = '0px';
  }
  /* 
  this.stopped = function() {
    this.close();
  }
  this.finished = function() {
    this.close();
  }
  this.started = function() {
    this.infoBox.style.display = 'inline';
    Lastfm.Insertion.inside(this.swfCode, this.infoBox);
  }
  this.playing = function() {
  }
  this.buffering = function() {
  }
  this.init = function() {
    
  }
  this.closed = function() {
    this.infoBox.style.display = 'none';
    Lastfm.Insertion.inside('', this.infoBox);
  }
  */
  this.postPlace = function() {
    this.button.style.marginRight='3px'; 
    this.button.style['float'] = 'none'; 
  }
  //}}}
  this.Resource(Lastfm.RES_TRACK, a, placebutton, icon);
}
Lastfm.Resource.extend(Lastfm.Track);
//}}}

    
//{{{ Ext
if (!Array.prototype.push) {
  Array.prototype.push = function() {
		var startLength = this.length;
		for (var i = 0; i < arguments.length; i++)
      this[startLength + i] = arguments[i];
	  return this.length;
  }
}
//}}}
//}}}


