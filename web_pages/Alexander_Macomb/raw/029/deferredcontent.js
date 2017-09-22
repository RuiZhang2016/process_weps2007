// Take content in a div with id="defer-xyz" and move it to a div with id="xyz"
function relocateDeferredContent() {
    var dc=document.getElementById("deferredContent");
    var divs=dc.getElementsByTagName("div");
    var replacements=new Array();
    for(var i=0;i<divs.length;i++){
        var deferredContent = divs[i];
        if (deferredContent.id.indexOf("defer-") == 0) {
            var placeHolder = document.getElementById(deferredContent.id.slice(6));
            replacements.push([deferredContent, placeHolder]);
        }
    }
    for(i=0;i<replacements.length;i++){
        replacements[i][0].parentNode.removeChild(replacements[i][0]);
        replacements[i][1].parentNode.replaceChild(replacements[i][0], replacements[i][1]);
        replacements[i][0].style.display = "block";
    }
    return true;
}