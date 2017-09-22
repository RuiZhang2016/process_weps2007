function show(object) {
  document.getElementById(object).style.visibility = 'visible';
}
function hide(object) {
  document.getElementById(object).style.visibility = 'hidden';
}
function showsub(object1,object2) {
  document.getElementById(object1).style.visibility = 'visible';
  document.getElementById(object2).style.visibility = 'visible';
}
function hidesub(object1,object2) {
  document.getElementById(object1).style.visibility = 'hidden';
  document.getElementById(object2).style.visibility = 'hidden';
}
function showsubsub(object1,object2,object3) {
  document.getElementById(object1).style.visibility = 'visible';
  document.getElementById(object2).style.visibility = 'visible';
  document.getElementById(object3).style.visibility = 'visible';
}
function hidesubsub(object1,object2,object3) {
  document.getElementById(object1).style.visibility = 'hidden';
  document.getElementById(object2).style.visibility = 'hidden';
  document.getElementById(object3).style.visibility = 'hidden';
}

var newProductWindow = null

function productDescriptions(page) {
  if (!newProductWindow || newProductWindow.closed) {
   newProductWindow = this.open(page, "products", "toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,width=517,height=500");
  } else {
   newProductWindow = this.open(page, "products", "toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,width=517,height=500");
   newProductWindow.focus()
  }
}
