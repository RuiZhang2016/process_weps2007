// expand/collapse guided nav topics
function toggleNav(topic) {
	var topicStyle = document.getElementById('div' + topic).style;
	if (topicStyle.display == "none") {
		topicStyle.display = "block";
		document.getElementById('img' + topic).src = "/common/image/nav/arrow_down.gif";
		document.getElementById('img' + topic).title = "Close list"; }
	else {
		topicStyle.display = "none";
		document.getElementById('img' + topic).src = "/common/image/nav/arrow_right.gif";
		document.getElementById('img' + topic).title = "Expand list";
	}
}