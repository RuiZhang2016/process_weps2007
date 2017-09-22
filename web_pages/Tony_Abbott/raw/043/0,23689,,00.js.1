/**
 * Form validator
 **/
 
/** 
 *  NOTE: Uses innerHTML() - would need to be adapted if serving as application/xhtml+xml
 */
 validators = new Array();
 
 validators["fullName"] = "[^ n]+"; 
 validators["full-name"] = "[^ n]+"; 
 validators["event-name"] = "[^ n]+"; 
 validators["event-date"] = "[^ n]+"; 
 validators["event-time"] = "[^ n]+"; 
 validators["event-venue"] = "[^ n]+"; 
 validators["name"] = "[^ n]+"; 
 validators["letter"] = "[^ n]+"; 
 validators["address"] = "[^ n]+"; 
 validators["yourAddress"] = "[^ n]+";
 validators["phone"] = "^[^a-zA-Z]{6,}$" // non-alphabetical
 validators["yourPhone"] = "^[^a-zA-Z]{6,}$" // non-alphabetical
 validators["ltotelephone"] = "^[^a-zA-Z]{6,}$" // non-alphabetical
 validators["location"] = "[^ n]+";
 validators["yourTown"] = "[^ n]+";
 validators["comment"] = "[^ n]+";
 validators["comments"] = "[^ n]+";
 validators["yourComments"] = "[^ n]+";
 validators["my-comment"] = "[^ n]+";
 validators["email"] = "^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z_]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$";
 validators["rcptName"] = "[^ n]+"; 
 validators["yourName"] = "[^ n]+"; 
 validators["yourEmail"] = "^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z_]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$";
 validators["rcptEmail"] = "^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z_]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$";
 validators["option"] = true;
 validators["yourState"] = true;

/* matchfields for use with passwords.*/
 matchfields = new Array(); 
 matchfields["pwd"] = "pwdvalidate"; 
 
 /* error messages go here */
 messages = new Array();
 messages["default"] = "Please check the value of field '1', it does not validate."; // 1 will be replaced by name of form element
 messages["fullName"] = "Please enter your name";
 messages["full-name"] = "Please enter your name";
 messages["event-name"] = "Please enter the name of this event";
 messages["event-date"] = "Please enter the date this event occurs";
 messages["event-time"] = "Please enter the time this event commences/ends";
 messages["event-venue"] = "Please enter the venue/location of this event";
 messages["name"] = "Please enter your name";
 messages["email"] = "Please enter your (valid) email address";
 messages["address"] = "Please enter your street address";
 messages["yourAddress"] = "Please enter your street address";
 messages["letter"] = "Please enter your letter to the editor";
 messages["phone"] = "Please enter your phone number";
 messages["yourPhone"] = "Please enter your phone number";
 messages["yourTown"] = "Please enter your suburb/town";
 messages["ltotelephone"] = "Please enter your phone number";
 messages["location"] = "Please enter your location";
 messages["comment"] = "Please enter your comments";
 messages["comments"] = "Please enter your comments";
 messages["yourComments"] = "Please enter your comments";
 messages["my-comment"] = "Please enter your comments";
 messages["rcptName"] = "Please enter a name for recipient";
 messages["rcptEmail"] = "Please enter valid email address for recipient";
 messages["yourName"] = "Please enter a name for sender";
 messages["yourEmail"] = "Please enter a valid email address for sender";
 messages["option"] = "Please select an option";


/* Called on form submit */
function validate(form) {
	var out = ""
	for (var i=0; i<form.elements.length; i++) {
		var element = form.elements[i];
		var validated = true;
		if(element.className.indexOf("is-optional") < 0) {
		        switch (element.type) {
			        case "reset": break;
			        case "submit": break;
			        case "button": break;
			        case "hidden": validated = validateText(element); break;
			        case "password": validated = validateText(element)&&validatePassword(element); break;
			        case "text": validated = validateText(element); break;
			        case "radio": validated = validateRadio(element, form); break;
			        case "textarea": validated = validateText(element); break;
			        case "checkbox": validated = validateCheckbox(element); break;
			        case "select": validated = validateSelect(element); break;
			        case "select-one": validated = validateSelectOne(element); break;
			        case "select-multiple": validated = validateSelectMultiple(element); break;
			        default: break;
		        }
			
		}
		
		if (!validated) {
			if (out.length > 0) out += "<br/>";
			out += ((messages[element.name])?messages[element.name]:messages["default"]).replace(/\1/g, element.name);
			element.className += " error-highlight";
			element.onfocus = function() {
			    this.className = this.className.replace("error-highlight", "");
			}
		} else {
		    if((element.className != "") && (element.className != "undefined") && (element.className != null)) {
		        element.className = element.className.replace("error-highlight", "");
			}
		}
	}
	
	if(document.getElementById("comment")) {
		if(!(assertCharLimit(document.getElementById("comment")))) {
		    return false;
			document.getElementById("comment").className += " error-highlight";
			document.getElementById("comment").onfocus = function() {
			    document.getElementById("comment").className = document.getElementById("comment").className.replace("error-highlight", "");
			}
		}
    }
	
	
	if (out.length > 0) {
	    if(typeof(singleErrorMessage) != "undefined") {
	        out = singleErrorMessage;
	    }
        
		if(!(document.getElementById("single-error"))) {
		    var errorAlert = document.createElement("p");
		    errorAlert.className = "error";
		    errorAlert.id = "single-error";
		} else {
		    var errorAlert = document.getElementById("single-error");
			errorAlert.innerHTML = "";
		}
		//var errorAlertText = document.createTextNode(out);
		//errorAlert.appendChild(errorAlertText);
		errorAlert.innerHTML = out;
		formFieldset = form.getElementsByTagName("fieldset")[0];
		if(formFieldset) {
		    formErrorLegend = formFieldset.getElementsByTagName("legend")[0];
		    if(formErrorLegend) {
		        if((formFieldset.className).indexOf("error-parent") >= 0 ) {
			        formErrorLegend.innerHTML = out;
					formErrorLegend.id = "single-error";
					formErrorLegend.className += " error";
			    }
			} else if((formFieldset.className).indexOf("error-parent") >= 0 ) {
		        formFieldset.insertBefore(errorAlert, formFieldset.firstChild);
		    } else {	    
		        form.insertBefore(errorAlert, form.firstChild);
			} 
		} else {
		    form.insertBefore(errorAlert, form.firstChild);
		}
		return false;
	}
	else return true;
 } 
 
 function validateRadio(element, theForm) {
	var elements = theForm.getElementsByTagName("input");
	if(validators[element.name]) {
		var redundant = false;
		var firstEncounter = -1;
		for (var i=0; i<elements.length&&!redundant; i++) {
			if(elements[i].type==element.type&&elements[i].name==element.name) {
				if(firstEncounter==-1) {
				    firstEncounter = i;
				}
				if(elements[i].value==element.value&&firstEncounter!=i) {
				    return true;
				}
				if(elements[i].checked) {
				   return true;
				}
				
				// onclick seems to work for label too
				element.onclick = function() {
			        if(document.getElementById("single-error")) {
			            document.getElementById("single-error").style.display = "none";
			        }
			    }
			}
		}
		return false;
	}
	else return true;
 } 
 
 function validateText(element) {
	if (validators[element.name]) {
		switch (typeof validators[element.name]) {
			case "string":var re = new RegExp(validators[element.name]);
				return re.test(element.value);
			case "function": return validators[element.name](element);
		} return true;
	}
	else return true;
 } 
 
 function validateCheckbox(element) {
	if (validators[element.name]) {
		switch (typeof validators[element.name]) {
			case "string": return (element.checked);
			case "function": return validators[element.name](element);
		} return true;
	}
	else return true;
 }
 
 function validateSelect(element) {
    if (validators[element.name]) {
		switch (typeof validators[element.name]) {
			case "string": return (element.value.length > 0);
			case "function": return validators[element.name](element);
		} return true;
     }
     else return true; 
 }
 
 function validateSelectOne(element) {
	if (validators[element.name]) {
		switch (typeof validators[element.name]) {
			case "string": return (element.value.length > 0);
			case "function": return validators[element.name](element);
		} return true;
	}
	else return true;
 } 
 
 function validateSelectMultiple(element) {
	if (validators[element.name]) {
		switch (typeof validators[element.name]) {
			case "string": return (element.value.length > 0);
			case "function": return validators[element.name](element);
		} return true;
	}
	else return true;
 } 
 
 function validatePassword(element) {
	if (matchfields[element.name]) {
		return (element.value==element.form.elements[matchfields[element.name]].value);
	}
	else return true;
 }

 function assertCharLimit(caller) {
     if(caller.getAttribute("class") != "char-limit") {
	     return true;
	 }
     if (caller.value.length > 1200) { 
		 if(!(document.getElementById("single-error"))) {
		    var errorAlert = document.createElement("p");
		    errorAlert.className = "error";
		    errorAlert.id = "single-error";
		} else {
		    var errorAlert = document.getElementById("single-error");
			errorAlert.innerHTML = "";
		}
		
		errorAlert.innerHTML += "Feedback forms are limited to 1200 characters. If you need to send a longer message please send us an email.";
		parentForm = document.getElementById("story-your-say");
		parentForm.insertBefore(errorAlert, parentForm.firstChild);
		return false;
	 } else {
	     return true;
     }
 }
 
 function pollValidate(pollForm) {
	var option = selectedValue(pollForm.option);
	var addr = pollForm.getAttribute("action") + "?option="+option;
	if(validate(pollForm)) {
		popUp("nipoll", addr);		
	}	
	return false;
}