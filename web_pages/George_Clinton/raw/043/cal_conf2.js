
//Define calendar(s): addCalendar ("Unique Calendar Name", "Window title", "Form element's name", Form name")
addCalendar("fromDate", "Select From Date", "fromdate", "search");
addCalendar("toDate", "Select To Date", "todate", "search");

addCalendar("dateDue", "Select Due Date", "dateDue", "edittask");
addCalendar("dateEnd", "Select End Date", "dateEnd", "edittask");
addCalendar("SendProofDate", "Select Date to Send Proof", "SendProofDate", "edittask");

addCalendar("toDateAdv", "Select To Date", "todate", "searchadv");
addCalendar("fromDateAdv", "Select From Date", "fromdate", "searchadv");

// default settings for English
// Uncomment desired lines and modify its values
 setFont("arial", 10);
 setWidth(90, 1, 15, 1);
// setColor("#cccccc", "#cccccc", "#ffffff", "#ffffff", "#333333", "#cccccc", "#333333");
// setFontColor("#333333", "#333333", "#333333", "#ffffff", "#333333");
setFormat("mm/dd/yy");
setSize(200, 200, -10, 0);

// setWeekDay(0);
// setMonthNames("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
// setDayNames("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
// setLinkNames("[Close]", "[Clear]");
