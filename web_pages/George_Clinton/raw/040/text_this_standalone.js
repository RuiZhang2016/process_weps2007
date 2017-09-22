function text_standalone(email, from, nid) {
	afns_text_alert = true;
	text_form_error_state = false;

	//create form elements and attach them to the dom for submission by text_standalone_submit_message
	//text_form: id of form

	//<input name="email" id="text_email" type="text" value=""/>                                                                                       
	//<input name="from" id="text_from" type="text" value=""/>                
	//<input name="nid" id="text_nid" type="hidden" value="<?= $nid; ?>" />   
	//<input name="ticket" id="text_ticket" type="hidden" value="" />         
	//<input name="action" id="text_action" type="hidden" value="" />         

	text_form = document.createElement("form");
	text_form.id = "text_form"
	
	input_element = document.createElement("input")
	input_element.type = "hidden"
	input_element.name = "email"
	input_element.id = "text_email"
	text_form.appendChild(input_element)

	input_element = document.createElement("input")
	input_element.type = "hidden"
	input_element.name = "from"
	input_element.id = "text_from"
	text_form.appendChild(input_element)

	input_element = document.createElement("input")
	input_element.type = "hidden"
	input_element.name = "nid"
	input_element.id = "text_nid"
	text_form.appendChild(input_element)

	input_element = document.createElement("input")
	input_element.type = "hidden"
	input_element.name = "ticket"
	input_element.id = "text_ticket"
	text_form.appendChild(input_element)

	input_element = document.createElement("input")
	input_element.type = "hidden"
	input_element.name = "action"
	input_element.id = "text_action"
	text_form.appendChild(input_element)

	//add the form to the DOM so we can call it later
	document.getElementsByTagName("body")[0].appendChild(text_form);

	//set the values in the created form with the values that were passed to this function
	document.getElementById("text_email").value = email;
	document.getElementById("text_from").value = from;
	document.getElementById("text_nid").value = nid;

	text_submit_ticket()
}

