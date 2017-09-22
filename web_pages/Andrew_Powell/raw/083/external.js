function cleanUp() { 
 for (var i=0; i<document.images.length; i++) { 
  if (document.images[i].width >= 600) { document.images[i].alt=document.images[i].width + ';' + document.images[i].alt; document.images[i].width=600; } 
 }
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
  var anchor = anchors[i]; 
  if (anchor.getAttribute("rel")=="nofollow") { anchor.target="_blank"; } else {
   if (anchor.getAttribute("href")) {
    var urlpartarray = anchor.getAttribute("href").split("/");
    if (urlpartarray[2] && urlpartarray[0] && urlpartarray[0]=='http:' && urlpartarray[2]!='blogcritics.org' && urlpartarray[2]!='www.blogcritics.org') anchor.target = "_blank";
   } 
  } 
 } 
} 
window.onload = cleanUp;
