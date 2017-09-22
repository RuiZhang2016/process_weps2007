//default the afns_text_alert variable
var afns_text_alert;
if(afns_text_alert == undefined) {
	afns_text_alert = false;
}
var text_form_error_state = false;


function cookie_value(name) {
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(name) == 0) {
            tmp = c.split("=");
            return tmp[1];
          }
      }
}

function text_submit_ticket()
{
	from_email = document.getElementById("text_from").value;
	if(from_email.length > 25) {
		alert("The from address must be less than 25 characters");
		return false;
 	}

	if(text_form_error_state) {
		alert("Please check the recipient's address before resubmitting the form");
		return false;
	}

	var params = "action=ticket"
	post_request( 'text_this', 'sms/sms.php', text_submit_message, params );
}

function text_clear_status() 
{
   text_form_error_state = false;
   document.getElementById("text_submit_line").style.visibility = "visible";
   text_setStatus('');
}


function text_submit_message(originalRequest)
{
	var xmlDoc = originalRequest.responseXML;

	var method = xmlDoc.documentElement.getElementsByTagName("method")[0].firstChild.nodeValue;
	var result = xmlDoc.documentElement.getElementsByTagName("result")[0].firstChild.nodeValue;
	var error = xmlDoc.documentElement.getElementsByTagName("error")[0].firstChild.nodeValue;

	if(error != "0") {
		text_error(error);
	}else {
		document.getElementById("text_ticket").value = result;
		document.getElementById("text_action").value = "message";

		//XXX: This should work and does work in the old site wrapper but started failing in 2007_redesign
//		var params = Form.serialize($("text_form"));

		//Temporary replacement for the above (explicit)
		var params = "email=" + encodeURIComponent($("text_email").value) + 
				"&from=" + encodeURIComponent($("text_from").value) + 
				"&nid=" + encodeURIComponent($("text_nid").value) + 
				"&ticket=" + encodeURIComponent($("text_ticket").value) + 
				"&action=" + encodeURIComponent($("text_action").value);

		text_setStatus('Sending SMS message...');
		post_request( 'comment_boxen','sms/sms.php', text_submit_done, params );
	}	
}

function text_submit_done(originalRequest)
{
	var xmlDoc = originalRequest.responseXML;

	var method = xmlDoc.documentElement.getElementsByTagName("method")[0].firstChild.nodeValue;
	var error = xmlDoc.documentElement.getElementsByTagName("error")[0].firstChild.nodeValue;

	if(error != "0") {
		text_error(error);
		text_form_error_state = true;
	}else {
		text_success();
		document.getElementById("text_form").reset()
	}
}

function text_error(error) {
	if(afns_text_alert) {
		alert(error)
	}else {
		text_setStatus( '<span class="error">' + error + '</span>' );
	}
}

function text_success() {
	var success_msg = "Your message has been sent.";

	if(afns_text_alert) {
		afns_track_click( 'textthis_ad_' + document.getElementById("text_nid").value );
		alert( success_msg );
	}else {
		afns_track_click( 'textthis_' + document.getElementById("text_nid").value );
		text_setStatus( success_msg );
	}		
}
function text_setStatus( html ){
	if(!afns_text_alert) {
		document.getElementById("text_status").innerHTML = html;
	}
}
