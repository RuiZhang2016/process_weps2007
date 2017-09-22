function initCheckboxs(form) {
	for (var i = 0; i < form.elements.length; i++) {
		var elm = form.elements[i];
		alert
		if (elm.nodeName.toString().toUpperCase() == "INPUT") {
			if (elm.type.toString().toUpperCase() == "CHECKBOX") {
				initCheckbox(elm);
			} else if (elm.type.toString().toUpperCase() == "RADIO") {
				initCheckbox(elm);
				setPeers(elm);
			}
		}
	}
}

function initCheckbox(chk) {
	var my_div = chk.parentNode;
	if (my_div && (my_div.className == "checkbox" || my_div.className == "radio")) {
		if (chk.checked) {
			my_div.className += "_on";
		} else {
			my_div.className = my_div.className.replace(/_on$/, "");
		}
	}
}

		
function setUpCheckAll(id) {
	var fieldset = getDiv(id);
	if (fieldset != null) {
		var checkboxes = new Array();
		accumulateCheckboxes(fieldset, checkboxes);
		fieldset.checkboxes = checkboxes;
	}
	//alert(fieldset.checkboxes.length);
}

function accumulateCheckboxes(elm, arr) {
	if ((elm.nodeName.toString().toUpperCase() == "INPUT") && (elm.type.toString().toUpperCase() == "CHECKBOX")) {
		arr[arr.length] = elm;
	}
		
	for (var i = 0; i < elm.childNodes.length; i++) {
		accumulateCheckboxes(elm.childNodes[i], arr);
	}
}

function setCheckbox(chk, flag) {
	chk.checked = flag;
	var my_div = chk.parentNode;
	if (my_div != null) {
		if (chk.checked && my_div.className == "checkbox") {
			my_div.className += "_on";
		} else if (! chk.checked && my_div.className == "checkbox_on") {
			my_div.className = my_div.className.replace(/_on$/, "");
		}
	}
}

function setCheckboxes(div, flag) {
	if (div.checkboxes != null) {
		for (var i = 0; i < div.checkboxes.length; i++) {
			setCheckbox(div.checkboxes[i], flag);
		}
	}
}

function checkAll(id) {
	var div = getDiv(id);
	if (div!= null) {
		setCheckboxes(div, true);
	}
	
	//return true;
}

function unCheckAll(id) {
	var div = getDiv(id);
	if (div!= null) {
		setCheckboxes(div, false);
	}
	
	//return true;
}

function checkboxClick(div) {
	var my_checkbox = myControl(div);
	if (my_checkbox) {
		if (my_checkbox.checked) {
			my_checkbox.checked = false
			div.className = div.className.replace(/_on$/, "");
		} else {
			my_checkbox.checked = true
			div.className += "_on";
		}
	}
}

function myControl(div) {
	return div.childNodes[0];
}

function radioClick(div) {
	var my_radio = myControl(div);
	if (my_radio) {
		clearRadioGroup(my_radio);
		my_radio.checked = true
		div.className += "_on";
	}
}

function clearRadioGroup(radio) {
	//if (radio.peers == null) {
	//	setPeers(radio);
	//}
	for (var i = 0; i < radio.peers.length; i++) {
		var elm = radio.peers[i];
		elm.checked = false;
		elm.parentNode.className = elm.parentNode.className.replace(/_on$/, "");
	}
}

function setPeers(radio) {
	if (radio.peers != null) { return; }
	var group_name = radio.name;
	var form = radio.form;
	var peers = new Array();
	
	for (var i = 0; i < form.elements.length; i++) {
		var elm = form.elements[i];
		if (elm.nodeName.toString().toUpperCase() == "INPUT" && 
				elm.type.toString().toUpperCase() == "RADIO" && 
				elm.name.toString()== group_name) {
			peers[peers.length] = elm;
		}
	}
	for (var i = 0; i < peers.length; i++) {
			peers[i].peers = peers;
	}
}

function setSelected(menu_id) {
	var fld = getDiv(menu_id);
  var lbl = getDiv(menu_id+"_lbl");
	if (fld.value != null && fld.value.length > 0) {
		var element = getDiv(fld.value);
		if (element != null) {
			setSelectedElt(menu_id, fld, element);
		}
	}else if(fld.value != null){
    if(lbl != null && lbl.name != null && lbl.name.length > 0)
      lbl.innerHTML = lbl.name;
  }
}

function setSelectedElt(id, fld, element) {
  var lbl = getDiv(id+"_lbl");

	if (fld != null) {
		if (fld.value != null && fld.value.length > 0) {
			var old_element = getDiv(fld.value);
			if (old_element != null) {
				old_element.className = "";
			}
		}else{
      if(lbl != null)
        lbl.innerHTML = lbl.name;
    }
		
		if (element.id != null && element.id.length > 0) {
			fld.value = element.id;
		} else {
			fld.value = element.childNodes[0].innerHTML;
		}
	}
	
	                             
	if (lbl != null) {
		lbl.innerHTML= element.childNodes[0].innerHTML;
	}
	
	element.className = "current";
}

/*
rporras 121505. Added an extra validation to allow to have an empty value in case the field is not required.
*/
function menuSelect(element) {
	var div = getContainerWith(element, "DIV", "popup");
	var menu_id = div.id.replace(/_popup$/, "");
	var fld = getDiv(menu_id);
  
  //If the id is NONE then set the value to empty
  if(element.id == "NONE" || element.id == "none"){
    setSelectedElt(menu_id, fld, element);
    fld.value="";
  }else{
    setSelectedElt(menu_id, fld, element);
  }
  
	if (activeButton != null) {
		resetButton(activeButton);
		activeButton = null;
	}
	return false;
}


		
function setUpOrderedList(id) {
	var list = getDiv(id);
	if (list != null) {
		var nodes = list.childNodes;
		for (var i = 0, count = 1; i < nodes.length; i++) {
			if (nodes[i].nodeName.toString().toUpperCase() == "LI") {
				nodes[i].className += " i_" + count;
				count++;
			}
		}
	}
}




function adjustPopupMenu(id, offset) {
	var off = offset == null ? 0 : offset;
	var menu = getDiv(id);
	// getContainerWith() is defined in menu.js
	var relative_div = getContainerWith(menu, "DIV", "body")
	if (menu != null && relative_div != null) {
		var bottom = relative_div.offsetHeight;
		var new_top = bottom - menu.offsetHeight + off;
		menu.style.top = new_top + "px";
	}
}



/**********************************************************************/
// popup hondler taken from/inspred by 
// http://subimage.com/sublog/subModal

var gPopupIsShown = false;

function showPopup(id) {
	var mask = getDiv("popupMask");
	var dialogue = getDiv(id);
	mask.style.display = "block";
	dialogue.style.display = "block";
	gPopupIsShown = true;
	return false;
}

function closePopup(id) {
	var mask = getDiv("popupMask");
	var dialogue = getDiv(id);
	mask.style.display = "none";
	dialogue.style.display = "none";
	gPopupIsShown = false;
	return false;
}

// Tab key trap. iff popup is shown and key was [TAB], suppress it.
// @argument e - event - keyboard event that caused this function to be called.
function keyDownHandler(e) {
    if (gPopupIsShown && e.keyCode == 9)  return false;
}

//Takes a value and enables or disables the field received as a parameter if the value is matched.
function setDependency(link, fld, div, value){
  //If the menu item has an ID we use the name of the id
  if(link.id && link.id == value){
    document.getElementById(div).disabled = false;
  //If the item has no id we take the HTML inside the tag to make the validation 
  }else if(link.childNodes[0].innerHTML && link.childNodes[0].innerHTML == value){
    document.getElementById(div).disabled = false;
  }else{
    fld.value = '';
    setSelected(fld.name);
    document.getElementById(div).disabled = true;
  }
}

