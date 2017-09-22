/*********************************/
/* Addictional JS Functions      */
/*********************************/

function print_version_people(uid)
{
	var url = "printer_format_people.php?UID="+uid;
	window.open(url, 'printer', 'width=800,height=700,scrollbars=yes,status=no,toolbar=yes,location=no,menubar=no,resizable=yes');
}

function print_version_topics(uid)
{
	var url = "printer_format_topics.php?UID="+uid;
	window.open(url, 'printer', 'width=800,height=700,scrollbars=yes,status=no,toolbar=yes,location=no,menubar=no,resizable=yes');
}

function print_version_works(uid)
{
	var url = "printer_format_works.php?UID="+uid;
	window.open(url, 'printer', 'width=800,height=700,scrollbars=yes,status=no,toolbar=yes,location=no,menubar=no,resizable=yes');
}

function print_version_anthology(uid)
{
	var url = "printer_format_anthology.php?UID="+uid;
	window.open(url, 'printer', 'width=900,height=700,scrollbars=yes,status=no,toolbar=yes,location=no,menubar=no,resizable=yes');
}

function print_version_noaccess()
{
	alert("Sorry, but this function is available to paid members only");
}