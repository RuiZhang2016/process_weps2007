// code courtesy of Meg Hourihan
// http://www.oreillynet.com/pub/a/javascript/2001/12/21/js_toolbar.html

function format_sel(v) {
  var str = document.selection.createRange().text;
  document.comments_form.text.focus();
  var sel = document.selection.createRange();
  sel.text = "<" + v + ">" + str + "</" + v + ">";
  return;
}

function insert_link() {
  var str = document.selection.createRange().text;
  document.comments_form.text.focus();
  var my_link = prompt("Enter URL:","http://");
  if (my_link != null) {
    var sel = document.selection.createRange();
	sel.text = "<a href=\"" + my_link + "\">" + str + "</a>";
  }
  return;
}

function shortCuts() {
	if (event.ctrlKey != true) return;
	if (event.keyCode == 1) insert_link();
	if (event.keyCode == 2) format_sel('b');
	if (event.keyCode == 20) format_sel('i');
}