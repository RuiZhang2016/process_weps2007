function menuOver(linkID, classID) { return false; }
function menuOut(linkID, classID) { return false; }

function GetObj(objID) {
	var my_obj;
	if (document.getElementById) {
		if (document.getElementById(objID)) { my_obj = document.getElementById(objID); }
	}
	return my_obj
}

function UpdateObjStyle(objID, styleName, styleValue) {
	var my_obj = GetObj(objID);
	var my_style;
	if (my_obj != null) {
		my_style = my_obj.getAttribute("style");
		my_style.setAttribute(styleName, styleValue);
	}
}

function UpdateCalendarView(changeVal) {
	var monthField = document.calendarForm.intMonth;
	var yearField = document.calendarForm.intYear;
	var intMonth = Math.round(monthField.value);
	var intYear = Math.round(yearField.value);

	intMonth += changeVal;

	if (intMonth > 12) {
		intMonth = 1;
		intYear += 1;
	} else if (intMonth < 1) {
		intMonth = 12;
		intYear -= 1;
	}

	monthField.value = intMonth;
	yearField.value = intYear;
	document.calendarForm.submit();
}

function printData(design, title, objID) {
	var my_obj = GetObj(objID);
	var my_doc = "";
	var doc_window;
	if (my_obj != null) {
		my_doc = escape(my_obj.innerHTML);
		var doc_window = window.open("", "doc_window", "width=620, height=460, resizable=yes, scrollbars=yes");
		doc_window.document.open();
		doc_window.document.write("<HTML><HEAD><TITLE>" + unescape(title) + "</TITLE><LINK rel=\"stylesheet\" type=\"text/css\" href=\"/templates/" + design + "/styles.css\"></HEAD><BODY>" + unescape(my_doc) + "</BODY></HTML>");
		doc_window.document.close();
		doc_window.defaultStatus = unescape(title);
		doc_window.print();
	}else{
		alert("ERROR: There was a problem printing the " + objID + " text.");
	}
}

function searchSite(){
	var target = escape(prompt("SITE SEARCH:\nEnter your search phrase below.", ""));
	if ((target != "") && (target != null)) {
		document.location = "/templates/" + design + "/details.asp?id=" + siteID + "&PG=Search&target=" + target;
	}
}

function addFavorite() {
	var browserName = navigator.appName;
	var browserVer = parseInt(navigator.appVersion);
	if (browserName == "Microsoft Internet Explorer" && browserVer >= 4) {
		var uri = host + "/templates/default.asp?" + query;
		window.external.AddFavorite(uri, siteName);
	}
}

function sendContents(objID){
	if (document.getElementById) {
		var contents = "";
		var eForm = document.getElementById("emailThisPage");
		eForm.PageLink.value = document.location;
		if (objID != null) {
			contents = loadHTML(objID);
		}else{
			contents = document.documentElement.innerHTML;
		}
		eForm.PageContents.value = contents;
		eForm.submit();
	}
}

function printPage() {
	if (document.getElementById) {
		printData("!print", escape(document.title), "bodyCopy");
	}else{
		window.open("/templates/!print/default.asp?" + query, "", "width=620, height=460, resizable=yes, scrollbars=yes");
	}
}

function forgotPassword(hostName){
	var emailAddress = prompt("Please enter your e-mail address.","");
	if((emailAddress.indexOf(".") != -1) && (emailAddress.indexOf("@") != -1)){
		window.open(hostName+"/templates/sendPassword.asp?method=post&emailAddress="+ emailAddress, "password", "width=200, height=200");
	}
}

function toggleView(objID) {
	var my_obj = GetObj(objID);
	if (my_obj != null) {
		if (my_obj.style.display == "none") {
			my_obj.style.display = "block";
		}else{
			my_obj.style.display = "none";
		}
	}
}