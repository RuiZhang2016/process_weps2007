<!--

// Preload Tab Images
var most_read =    new Image(); most_read.src =    "/templates/types/topmost/images/most_read_on.gif";
var most_emailed = new Image(); most_emailed.src = "/templates/types/topmost/images/most_emailed_on.gif";
var top_stories =  new Image(); top_stories.src =  "/templates/types/topmost/images/top_stories_off.gif";

var divids=new Array('mostread','mostemailed','topstories');
var tabids=new Array('most_read','most_emailed','top_stories');


function switchid(id,tab){  
        hideallids();
        showdiv(id,tab);
}

function hideallids(){
        //loop through the array and hide each element by id
        for (var i=0;i<divids.length;i++){
                hidediv(divids[i],tabids[i]);
        }                 
}

function hidediv(id,taboff) {
        //safe function to hide an element with a specified id
        if (document.getElementById) { // DOM3 = IE5, NS6
                document.getElementById(id).style.display = 'none';
        }
        else {
                if (document.layers) { // Netscape 4
                        document.id.display = 'none';
                }
                else { // IE 4
                        document.all.id.style.display = 'none';
                }
        }
        // switch tab image to off state
        document.getElementById(taboff).src = "/templates/types/topmost/images/"+taboff+"_off.gif";
}

function showdiv(id,tab) {
        //safe function to show an element with a specified id
                  
        if (document.getElementById) { // DOM3 = IE5, NS6
                document.getElementById(id).style.display = 'block';
        }
        else {
                if (document.layers) { // Netscape 4
                        document.id.display = 'block';
                }
                else { // IE 4
                        document.all.id.style.display = 'block';
                }
        }
        // switch tab image to current selection
        document.getElementById(tab).src = "/templates/types/topmost/images/"+tab+"_on.gif";
}
//-->
