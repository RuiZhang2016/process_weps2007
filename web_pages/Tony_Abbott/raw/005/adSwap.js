// $Id: adSwap.js,v 1.3 2005/04/21 06:16:11 jhedley Exp $
// 2006/12/5 AJB Added remove_* behaviour

// into the specified element, place the given html                                                                 
function ffx_swap(elName, html) {
    var d = document;
    if (!d.getElementById) {
        return;
    }
    var el = d.getElementById(elName);
    if (!el) {
        return;
    }
    var remove = false;
    if (typeof ffxAdExclusionList != "undefined") {
      var thisPage = window.location.pathname;
      for (var i=0; i<ffxAdExclusionList.length; i++) {
        var current = ffxAdExclusionList[i];
        if (current == 'remove_all_ads'){
          return;
        }
        else if (current == 'remove_article_ads'){
          if (thisPage.match(/\/news\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/[0-9]+.html/) || thisPage.match(/\/articles\/.*?/)){
            remove = true;
          }
        }
        else if (current == 'remove_index_ads'){
          if  (thisPage.match(/\/index.html$/) || !thisPage.match(/.html$/)){
            remove = true;
          }
        }
        else if (current == thisPage) {
          return;
        }
      }
    }
    if (remove == true) {return;}
    el.innerHTML = html;
}

// shuffles a list of html snippets into an element
function ffx_shuffle_swap(elName) { // and a list of html snippets
    // get the array of html from the arguments (not a real array)
    var snippets = new Array();
    for (var i = 1; i < arguments.length; i++) { snippets[i-1] = arguments[i]; } // skip the first el
    ffx_shuffle(snippets);
    var html = snippets.join("<br />"); // maybe should pass in?
    ffx_swap(elName, html);
}

    
    
// inline Fisher Yates shuffles the given array of objects    
function ffx_shuffle(list) {
    for (var i = list.length -1; i >= 0; --i) {
        var j =  Math.floor(Math.random() * (i + 1));
        if (i == j) continue;
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
}


