//default the afns_email_alert variable
var afns_email_alert;
if(afns_email_alert == undefined) {
	afns_email_alert = false;
}
var email_form_error_state = false;

function email_submit_ticket()
{
	from_email = document.getElementById("email_from").value;
	if(from_email.length > 25) {
		alert("The from address must be less than 25 characters");
		return false;
 	}

	if(email_form_error_state) {
		alert("Please check the recipient's address before resubmitting the form");
		return false;
	}

	var params = "action=ticket"
	post_request( 'comment_boxen', 'sms/sms.php', email_submit_message, params );
}

function email_clear_status() 
{
   email_form_error_state = false;
   document.getElementById("email_submit_line").style.visibility = "visible";
   email_setStatus('');
}


function email_submit_message(originalRequest)
{

	var xmlDoc = originalRequest.responseXML;

	var method = xmlDoc.documentElement.getElementsByTagName("method")[0].firstChild.nodeValue;
	var result = xmlDoc.documentElement.getElementsByTagName("result")[0].firstChild.nodeValue;
	var error = xmlDoc.documentElement.getElementsByTagName("error")[0].firstChild.nodeValue;

	if(error != "0") {
		email_error(error);
	}else {
		document.getElementById("email_ticket").value = result;
		document.getElementById("email_action").value = "message";

		//XXX: This should work, but it broke during transition to 2007_redesign
//		var params = Form.serialize($("email_form"));

		//Temporary replacement for the above (explicit)
		var params = "email=" + encodeURIComponent($("email_to").value) + 
				"&from=" + encodeURIComponent($("email_from").value) + 
				"&nid=" + encodeURIComponent($("email_nid").value) + 
				"&ticket=" + encodeURIComponent($("email_ticket").value) + 
				"&action=" + encodeURIComponent($("email_action").value) + 
				"&site=" + encodeURIComponent($("email_site").value) +
		                "&user_message=" + encodeURIComponent($("email_message").value);

		email_setStatus('Sending message...');
		post_request( 'comment_boxen','sms/sms.php', email_submit_done, params );
	}	
}

function email_submit_done(originalRequest)
{
	var xmlDoc = originalRequest.responseXML;

	var method = xmlDoc.documentElement.getElementsByTagName("method")[0].firstChild.nodeValue;
	var error = xmlDoc.documentElement.getElementsByTagName("error")[0].firstChild.nodeValue;

	if(error != "0") {
		email_error(error);
		email_form_error_state = true;
	}else {
		email_success();
		document.getElementById("email_form").reset()
	}
}

function email_error(error) {
	if(afns_email_alert) {
		alert(error)
	}else {
		email_setStatus( '<span class="error">' + error + '</span>' );
	}
}

function email_success() {
	var success_msg = "Your message has been sent.";

	if(afns_email_alert) {
		afns_track_click( 'email_ad_' + document.getElementById("email_nid").value );
		alert( success_msg );
	}else {
		afns_track_click( 'email_' + document.getElementById("email_nid").value );
		email_setStatus( success_msg );
	}		
}
function email_setStatus( html ){
	if(!afns_email_alert) {
		document.getElementById("email_status").innerHTML = html;
	}
}
