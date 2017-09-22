var today = new Date();
var Events = new Array;

function DefineEvent(EventDate, EventDescription) {
	var tmp;
	tmp = "";
	tmp = tmp + EventDescription;
	Events[EventDate] = tmp;
}

function eventTitle() {
	var curdy, curmo, yr, mo, dy;

	curdy = today.getDate();
	curmo = today.getMonth()+1;

	mo = curmo;
	yr = GetFullYear(today);

	var todayDate = yr + "" + curmo + "" + curdy

	if (Events[todayDate]) {
		tmp = Events[todayDate];
		document.write(tmp);
	}
	else {
	document.write("Welcome to AOL Shopping");
	}
}

function GetFullYear(d) { 
	var yr;
	yr = d.getYear();
	if (yr < 1000)
	yr +=1900;
	return yr;
}
