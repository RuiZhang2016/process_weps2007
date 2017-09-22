var showHide = {
  init: function(id) {
    if(!document.getElementsByTagName || !document.getElementById) return;
  
    // id is optional; used to limit search in getElementsByClass
    var scope = (id) ? document.getElementById(id) : document;
  
    // hide blocks
    var blocks = getElementsByClass(scope, '*', 'showhide-block');
    for(var i = 0; i < blocks.length; i++) {
      blocks[i].style.display = 'none';
    }
    
    var linkblocks = getElementsByClass(scope, '*', 'showhide-link');
    for(var j = 0; j < linkblocks.length; j++) {
      var links = linkblocks[j].getElementsByTagName('a');
      // add handlers and make show link visible
      for(var a = 0; a < links.length; a++) {
        addEvent(links[a], 'click', showHide.toggle);
        links[a].onclick = function() { return false; } // kill link
        if(/-show/.test(links[a].id)) linkblocks[j].style.display = 'block';
      }
    }
  },

  toggle: function(e) {
    var input = window.event ? window.event.srcElement : e ? e.target : null;
    if(!input) return;
    
    // get ids
    var inputid = input.id;
    var divid = inputid.split('-')[0];
    var action = inputid.split('-')[1];
    var div = document.getElementById(divid);
    
    if(action == 'show') {
      div.style.display = 'block';
      // note: hide links are optional
      if(document.getElementById(divid+'-hide')) {
        document.getElementById(divid+'-hide').parentNode.style.display = 'block';
      }
    } else {
      div.style.display = 'none';
      document.getElementById(divid+'-show').parentNode.style.display = 'block';
    }    
    input.parentNode.style.display = 'none';
  }
}

// addEvent(window, 'load', showHide.init);

/*
<p class="showhide-link"><a href="#" id="morepos-show">See all</a></p>
<div class="showhide-block" id="morepos">
I should be hidden.
</div>
<p class="showhide-link"><a href="#" id="morepos-hide">Hide all</a></p>
*/