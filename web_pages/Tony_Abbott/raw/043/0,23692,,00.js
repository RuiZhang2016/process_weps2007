// Cookie scripts:
//
// These scripts came from Quirks Mode (http://www.quirksmode.org/js/cookies.html),
// but were originally written by Scott Andrew. The only modification I have made is
// to escape square brackets (to avoid Tcl interpreter errors).
//
function createCookie(name,value,days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name)
{
	createCookie(name,"",-1);
}


// Refresh Timeout variable:
var refreshTimeout;


// Initializes the comment form, filling in the form with values remembered from cookies.
function commentFormInit()
{
	var commentForm = document.getElementById("story-your-say") || document.getElementById("feedback-form") ||  document.getElementById("have-your-say");
	
	// Set up events:
	commentForm.onsubmit = function() {
	    if(validate(commentForm)) {
	        commentFormSave();
		} else {
		    return false;
		}
	}
	commentForm.onchange = commentFormChanged;

	// Read the saved values from user cookies and store them in the form: //
	if (readCookie("commentRemember") == "true") {
		commentForm.fullName.value = readCookie("commentFullName");
		commentForm.email.value    = readCookie("commentEmail");
		commentForm.location.value = readCookie("commentLocation");
		
		commentForm.remember.checked = true;
		if (readCookie("commentEmailMe") == "true") {
			commentForm.emailMe.checked = true;
		}
	} else {
		 if(commentForm.remember != null) {
		    commentForm.remember.checked = false;
		} else {
		    if(document.getElementById("remember")) {		    
			     document.getElementById("remember").checked = false;
			}
		}
	}

	// Start the page refresh countdown:
	//refreshTimeout = setTimeout(refreshPage, 480000);
}


// Called when the form is submitted. Saves the user preferences in cookies.
function commentFormSave()
{
	var form = document.storyCommentForm;
	
	if (form.remember.checked == true) {
		createCookie("commentRemember", "true", 1000);
	
		createCookie("commentFullName", form.fullName.value, 1000);
		createCookie("commentEmail",    form.email.value, 1000);
		createCookie("commentLocation", form.location.value, 1000);

		if (form.emailMe.checked)
			createCookie("commentEmailMe", "true", 1000);
	} else {
		eraseCookie("commentRemember");
		eraseCookie("commentFullName");
		eraseCookie("commentEmail");
		eraseCookie("commentLocation");
		eraseCookie("commentEmailMe");
	}
	
	return true;
}


// Refreshes the story page.
function refreshPage()
{
	//window.location.reload();
}


// Called when a comment form is changed. Clears the story page refresh timeout.
function commentFormChanged()
{
	/*if (refreshTimeout) {
		clearTimeout(refreshTimeout);
		refreshTimeout = null;
	}*/
}
