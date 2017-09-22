function showPage() {
  var formObj = document.utk_links.links;
  var n = formObj.options[formObj.selectedIndex].value;

  switch (n) {
    case "0": break;
    default:
      window.location.href = "http://www.tennessee.edu/masthead/location.php?links="+n; break;
  }
}

function checkTerms() {
  var formObj = document.utk_seek.qtype;
  var n = formObj.options[formObj.selectedIndex].value;

  switch (n) {
    case "none": break;
    default:
      document.utk_seek.submit();
  }
}

// Handles browser resizing problem for navigator 4
if (document.layers) {
  if (!window.orig_width) {
    window.onresize = reset_layers;
    window.orig_width = window.innerWidth;
    window.orig_height = window.innerHeight;
  }
}

function reset_layers() {
  if (window.innerWidth != orig_width || window.innerHeight != orig_height) {
    location.reload();
  }
}
