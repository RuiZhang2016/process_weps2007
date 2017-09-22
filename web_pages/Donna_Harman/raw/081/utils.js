// js config object. used to store global vars
var CONFIG = {
	img_path : "/icons/" // global path to site image assets
};


// -----------------------------------------------------------------------------


// used in search results pages
function toggleQueryDetails() {
	if (!getDomObj('query-details-toggle') || !getDomObj('query-details')) return;

	var qd = DOM_OBJECTS['query-details'];
	var qdt = DOM_OBJECTS['query-details-toggle'];

	// default, non-persistent state of page is hidden
	if ( (qd.style.display == 'none') || (qd.style.display == '') ) {
		qd.style.display = 'block';
		qdt.style.backgroundImage = 'url(' + CONFIG['img_path'] + 'icon.circle.arrow.dn.gif)';
		qdt.innerHTML = 'Hide Query Details';

	} else {
		qd.style.display = 'none';
		qdt.style.backgroundImage = 'url(' + CONFIG['img_path'] + 'icon.circle.plus.gif)';
		qdt.innerHTML = 'Show Query Details';
	}

	qdt.blur();
} // END: toggleQueryDetails()


// -----------------------------------------------------------------------------


function uncheckSelectAll(current_checkbox, checkbox_name) {
	current_checkbox.form.elements[checkbox_name].checked = false;
} // END: uncheckSelectAll()


function toggleSelectAllInFieldset(checkbox) {
	// bail out if browser isn't capable of simple DOM methods...
	// this function is just necessary for the UI to update, anyway
	if (!document.getElementsByTagName) return;

	// if we are unchecking the checkbox, then bail out... we don't need to do anything
	if (!checkbox.checked) return;

	var fieldset = checkbox.parentNode;
	var all_checkboxes = fieldset.getElementsByTagName('INPUT');

	for (var i=0; i < all_checkboxes.length; i++) {
		if ( (all_checkboxes[i] == checkbox) || (all_checkboxes[i].title == "Pubmed") ) continue;
		// if (all_checkboxes[i] == checkbox) continue;
		// all_checkboxes[i].checked = checkbox.checked;
		all_checkboxes[i].checked = false;
	}
} // END: toggleSelectAllInFieldset()


// -----------------------------------------------------------------------------


// attach this to the onfocus of an INPUT or TEXTAREA, passing the 'this' object as the argument
function textFieldStoreAndClear(el) {
	el.originalText = (el.originalText == null) ? el.value : el.originalText;
	if (el.value == el.originalText) el.value = '';
}

// attach this to the onblur of an INPUT or TEXTAREA, passing the 'this' object as the argument
function textFieldRestore(el) {
	el.value = (el.value == '') ? el.originalText : el.value;
}

// takes title attribute from INPUTs with .ShowTitle and sticks it in the value attrib.
addWindowEvent('onload', function(){
	if (!document.getElementById) return;

	var all_inputs = document.getElementsByTagName('INPUT');
	var temp_class = "";

	for (var i=0; i < all_inputs.length; i++) {
		temp_class = " " + all_inputs[i].className;
		if (temp_class == " ") continue;

		if ( (temp_class.indexOf(" ShowTitle") > 0) && (all_inputs[i].value == "") ) {
			all_inputs[i].value = all_inputs[i].title;
			all_inputs[i].onfocus = function() { textFieldStoreAndClear(this) };
			all_inputs[i].onblur = function() { textFieldRestore(this) };
		}

		temp_class = "";
	}
});


// -----------------------------------------------------------------------------


var DOM_OBJECTS = []; // hash to store frequently used DOM objects

// utility function to get DOM objects
function getDomObj(object_name) {
	// bail out if browser is not capable
	if (!document.getElementById) return false;

	// return true if object was already fetched
	if (DOM_OBJECTS[object_name]) return true;

	// get the object and return the result of the get
	return (DOM_OBJECTS[object_name] = document.getElementById(object_name)) ? true : false;
} // END: getDomObj


// -----------------------------------------------------------------------------


// extension of an idea from simon willison
// http://simon.incutio.com/archive/2004/05/26/addLoadEvent
// adds function call to an arbitrary window event trigger
function addWindowEvent(event_name, function_to_add) {
  var current_event = window[event_name];

  if (typeof(current_event) != 'function') {
    window[event_name] = function_to_add;

  } else {
    window[event_name] = function() {
      current_event();
      function_to_add();
    };
  }
} // END: addWindowEvent()


// =============================================================================


var DEBUG = true;
var DEBUG_MESSAGE_TYPES = ["ERROR", "WARNING", 'STATUS'];
var debug_win;

function debug(message_type, message) {
	if (DEBUG && (DEBUG_MESSAGE_TYPES.join(" ").indexOf(message_type) > -1 )) {
		if (!debug_win) {
			debug_win = window.open("","","");
			debug_win.document.open();
		}
		message = message.replace(/</g, "&lt;");
		message = message.replace(/>/g, "&gt;");
		
		try {
			debug_win.document.write("");
		} catch(e) {
			debug_win = window.open("","","");
			debug_win.document.open();			
		}

		debug_win.document.write("<h1 style='font-size: 80%; margin:0;border-bottom: 1px solid #CCC;'>" + message_type  + "</h1>");
		debug_win.document.write("<pre style='font-size: 75%; margin: .5em 0 2em 0;'>" + message + "</pre>");
	}
} // END: debug()

/* Simple client-side validation of the My Directory Entries form for STKE.  Batch-mode only.
Adapted by SW from several sources (including JS and DHTML Cookbook, O'Reilly, 2003), 2006/08/09 */ 

// Routine to validate that a text field has at least a character or two

function isNotEmpty(elem) {
    var str = elem.value;
    if(str == null || str.length == 0) {
        return false;

    } else {
        return true;
    }
}


// Routine to validate that a pull-down selection has been made

function isChosen(select) {
    if (select.selectedIndex == 0) {
        return false;
    } else {
        return true;
    }
}


/* Batch-mode validation of the specific entries to be validated in the My Directory Entries form.
Fields that are supposed to be completed and are not are highlighted in yellow, and the user
gets an alert asking for full info.  Very ugly series of if-statements, but it works. */ 

function validateDirForm(form) {
   var fn = "";
   var sn = "";
   var ps = "";
   var inst = "";
   var wr = "";
    if (isNotEmpty(form.firstname)) {
        if (isNotEmpty(form.lastname)) {
	   if (isChosen(form.position)){
               if (isNotEmpty(form.institution_1)) {
	           if (isChosen(form.world_region_id)){
                            return true;
                   }
               }
           }
	} 
    }
    if (!isNotEmpty(form.firstname)){
      form.firstname.style.backgroundColor = "#ffffdd";
      fn = "First Name\n";}
    else {
      form.firstname.style.backgroundColor = "#ffffff";}
    if (!isNotEmpty(form.lastname)){
      form.lastname.style.backgroundColor = "#ffffdd";
      sn = "Last Name\n";}
    else {
      form.lastname.style.backgroundColor = "#ffffff";}
    if (!isChosen(form.position)){
      form.position.style.backgroundColor = "#ffffdd";
      ps = "Position\n";}
    else {
      form.position.style.backgroundColor = "#ffffff";}
    if (!isNotEmpty(form.institution_1)){
      form.institution_1.style.backgroundColor = "#ffffdd";
      form.institution_2.style.backgroundColor = "#ffffdd";
      inst = "Institution\n";}
    else {
      form.institution_1.style.backgroundColor = "#ffffff";
      form.institution_2.style.backgroundColor = "#ffffff";}
    if (!isChosen(form.world_region_id)){
      form.world_region_id.style.backgroundColor = "#ffffdd";
      wr = "World Region\n";}
    else {
      form.world_region_id.style.backgroundColor = "#ffffff";}
    alert("We ask that your directory information include at least the following: First Name, Last Name, Position, Institution, and World Region.\n\nPlease provide responses for:\n" + fn + sn + ps + inst + wr);
    return false;

}

//End of validation script


