function hide(divname) {
if (document.getElementById) { // DOM3 = IE5, NS6
document.getElementById(divname).style.visibility = 'hidden';
document.getElementById(divname).style.display = 'none';
}
else {
if (document.layers) { // Netscape 4
document.divname.visibility = 'hidden';
document.divname.display = 'none';
}
else { // IE 4
document.all.divname.style.visibility = 'hidden';
document.all.divname.style.display = 'none';
}
}}

function show(elementname) {
if (document.getElementById) { // DOM3 = IE5, NS6
document.getElementById(elementname).style.visibility = 'visible';
  if (document.getElementById(elementname).style.display != 'block') {
    document.getElementById(elementname).style.display = 'block';
  }
}
else {
if (document.layers) { // Netscape 4
document.elementname.visibility = 'visible';
  if (document.elementname.display == 'none') {
    document.elementname.display = 'block';
  }
}
else { // IE 4
document.all.elementname.style.visibility = 'visible';
  if (document.all.elementname.style.display == 'none') {
    document.all.elementname.style.display = 'block';
  }
}
}
} 
