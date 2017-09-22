/*
	Show error area: page must contain div with id 'jsError'
	If there is no such div then popup alert will show.
*/
function showError(text) {
	showErrorByKey(text,'msgError','jsError');
}

function showErrorByKey(text, msgErrorKey, jsErrorKey) {
	//At first try to find error from server 
	jsErrorDiv = getElement(msgErrorKey);
	if (jsErrorDiv == null) {
		jsErrorDiv = getElement(jsErrorKey);
	}
	if (jsErrorDiv) {
		jsErrorDiv.style.display="block";
		jsErrorDiv.style.visibility="visible";
		jsErrorDiv.innerHTML = text;
	} else {
		alert(text);
	}
}

//Hide error area: page must contain div with id 'jsError'
function hideError() {
	hideErrorByKey('msgError','jsError');
}

function hideErrorByKey(msgErrorKey,jsErrorKey) {
	//At first try to find error from server 
	jsErrorDiv = getElement(msgErrorKey);
	if (jsErrorDiv == null) {
		jsErrorDiv = getElement(jsErrorKey);
	}
	if (jsErrorDiv) {
		jsErrorDiv.style.visibility="hidden";
		jsErrorDiv.style.display="none";
	}
}

