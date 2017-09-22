//<!--
function MailToLinkClick(username, domain)
{
	var sEmail = "mailto:" + username + "@" + domain;
	document.location = sEmail;
}
function MailToLinkOver(username, domain)
{
	var sEmail = "mailto:" + username + "@" + domain;
	window.status = sEmail;
}
function MailToLinkOut()
{
	window.status = "";
}
//-->