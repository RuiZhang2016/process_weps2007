<!--
	var fullDate = new Date();
		
	month = fullDate.getMonth();
	date = fullDate.getDate();
	year = fullDate.getFullYear();
	
	// JavaScript uses a zero-based array for months
	month += 1;
	
	// because we want two-digit formatting
	if (month < 10)
	{
		month = "0" + month;
	}
	if (date < 10)
	{
		date = "0" + date;
	}
	
	// format date string
	today = month + ". ";
	today += date + ". ";
	today += year;
	// -->

<!--
if (document.URL.indexOf('definitions') != -1 || document.URL.indexOf('issues') != -1) {
   document.write("<link rel=\"stylesheet\" href=\"/css/gs.css\" type=\"text/css\">"); 
}
// -->

<!--
    function jumpPage(newLoc) {
newPage=newLoc.options[newLoc.selectedIndex].value;
newPage="/modperl/go/" + newPage;
    if(newPage != "") {window.location.href=newPage}
}
// -->

<!--
    function comparePage(newLoc) {
newPage=newLoc.options[newLoc.selectedIndex].value;
newPage="/cgi-bin/cs_where/" + newPage;
    if(newPage != "") {window.location.href=newPage}
}
// -->

<!--
function updateSearchForm (selector)
{
	if (selector == "by_school")
	{
		document.searchForm.elements["field1"].value = "school name";
		document.searchForm.elements["field2"].value = "city, if known";
	}
	else if (selector == "by_address")
	{
		document.searchForm.elements["field1"].value = "your address";
		document.searchForm.elements["field2"].value = "city";
	}
	else if (selector == "by_county")
	{
		document.searchForm.elements["field1"].value = "not applicable";
		document.searchForm.elements["field2"].value = "not applicable";
	}
}
// -->

<!--
function checkSearchStateSelected(selectorId) {
    var val = document.getElementById(selectorId).value;
    var returnVal;
    if (val == "--" || val == "") {
        alert ("Please select a state.");
        returnVal = false;
    } else {
        returnVal = true;
    }
    return returnVal;
}
// -->
