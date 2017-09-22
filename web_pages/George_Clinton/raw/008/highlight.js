// $Id: highlight.js 82686 2006-08-28 21:10:15Z smcculla $

// derived from:
// ----------------------------------------
// google.js
// Google Highlighter
//
// Copyright(C)2001 - 2003
// Cal Henderson <cal@iamcal.com>
//
// Thanks to Ian Beveridge for bugfixes
//
// This code may be freely redistributed,
// providing this message remains intact.
// ----------------------------------------
// with signifincat mods here at eb

var google_text_color = '#000000';

var google_link_colors = new Array('#ffff66','#a0ffff','#99ff99','#ff9999','#ff66ff');

var agt=navigator.userAgent.toLowerCase();
var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));

function init_highlight_query(){
                var referer_url_parts = document.referrer.split('?');
                if (referer_url_parts[1]){
                        var url_args = referer_url_parts[1].split('&');
                        for(var i=0; i<url_args.length; i++){
                                var keyval = url_args[i].split('=');
                                if (keyval[0] == 'query'){
                                        go_google(decode_url(keyval[1]));
                                        return;
                                } else if(keyval[0] == 'srchType' && keyval[1] == 'adv'){
                                        go_adv(url_args);
                                        return;
                                }
                        }
                } 
		var url_parts = window.location.href.split('?');
		if (url_parts[1]){ 
			var url_args = url_parts[1].split('&');
			for(var i=0; i<url_args.length; i++){
				var keyval = url_args[i].split('=');
				if (keyval[0] == 'query'){
					go_google(decode_url(keyval[1]));
					return;
				} else if(keyval[0] == 'srchType' && keyval[1] == 'adv'){
                                        go_adv(url_args);
                                        return;
                                }
			}
		}
}
function init_highlight_referrer(){
		var url_parts = document.referrer.split('?');
		if (url_parts[1]){ 
			var url_args = url_parts[1].split('&');
			for(var i=0; i<url_args.length; i++){
				var keyval = url_args[i].split('=');
				if (keyval[0] == 'query'){
					go_google(decode_url(keyval[1]));
					return;
				}
			}
		}
}

function decode_url(url){
	return unescape(url.replace(/\+/g,' '));
}

function go_google(terms){
	terms = terms.replace(/\"/g,"");
	var terms_split = terms.split(' ');
	var c = 0;
	for(var i=0; i<terms_split.length; i++){
           if(!is_stopword(terms_split[i])) {
		highlight_spans(terms_split[i], document.getElementsByTagName('span'),google_link_colors[c]);
		c = (c == google_link_colors.length-1)?0:c+1;
           }
	}
}

function go_adv(terms){
        var advwords = '';
        for(var i=0; i<terms.length; i++){
           var keyval = terms[i].split('=');
           if((keyval[0] == 'txtAll') || (keyval[0] == 'txtAny') || (keyval[0] == 'txtExact') || (keyval[0] == 'txtNear')){
                advwords = advwords + decode_url(keyval[1]) + " ";
           }
        }
	go_google(advwords);
}

function is_stopword(term) {
  return (term == 'or' || term == 'and' || term == 'not' || term == 'OR' || term == 'AND' || term == 'NOT' || term.length < 3);
}

function highlight_spans(term, array, color) {
    for (var i = 0; i < array.length; ++i) {
        var container = array[i];

         // IE probably does this right, since "className" is the official
         // DHTML attribute, but most browsers seem to use "class" nonetheless
        var spanClass = null;
        if (is_ie) {
          spanClass = container.getAttribute('className');     
        } else {
          spanClass = container.getAttribute('class');     
        } 

        if (spanClass == 'querybold') {
            highlight_goolge(term, container, color);
        }
    }
}

function highlight_goolge(term, container, color){
	var term_low = term.toLowerCase();

	for(var i=0; i<container.childNodes.length; i++){
		var node = container.childNodes[i];

		if (node.nodeType == 3 && container.style.fontWeight != 'bold' && container.className.indexOf('bold') == -1){
//container.nodeName.toUpperCase() != 'A'){
			var data = node.data;
			var data_low = data.toLowerCase();
			if (data_low.indexOf(term_low) != -1){
				//term found!
				var new_node = document.createElement('SPAN');
				node.parentNode.replaceChild(new_node,node);
				var result;
				while((result = data_low.indexOf(term_low)) != -1){
					new_node.appendChild(document.createTextNode(data.substr(0,result)));
					new_node.appendChild(create_node_google(document.createTextNode(data.substr(result,term.length)),color));
					data = data.substr(result + term.length);
					data_low = data_low.substr(result + term.length);
				}
				new_node.appendChild(document.createTextNode(data));
			}
		}else{
			//recurse
			highlight_goolge(term, node, color);
		}
	}
}

function create_node_google(child, color){
	var node = document.createElement('SPAN');
	//node.style.backgroundColor = color;
	//node.style.color = google_text_color;
        node.style.fontWeight = 'bold';
	node.appendChild(child);
	return node;
}
