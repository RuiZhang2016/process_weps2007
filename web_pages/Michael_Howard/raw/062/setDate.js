function dateToString(date) {
	var yyyy = date.getYear();
	var mm = date.getMonth() + 1;
	var dd = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();

	if (mm < 10) mm = "0"+mm;
	if (dd < 10) dd = "0"+dd;
	if (hour < 10) hour = "0"+hour;
	if (min < 10) min = "0"+min;
	return ''+mm+dd+hour+min;
}

function getDay(today) {return today.getDay()}

var today = new Date();
var now = dateToString(today);
