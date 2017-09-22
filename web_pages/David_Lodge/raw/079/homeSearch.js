// rico setup
function ajaxSetup() {
	ajaxEngine.registerRequest("search", "/includes/xml/fellows.jsp");
	ajaxEngine.registerAjaxElement('homeSearchHeader');
	ajaxEngine.registerAjaxElement('homeSearchDetail');
}

// displays the search form in the sidebar search box
function resetHomeSearch() {
	var detail = document.getElementById("homeSearchDetail");
	if (detail) {
		detail.innerHTML = "<form name='searchFellows' onSubmit='submitHomeSearch();" + 
				    "return false;'><p>Our fellows have a broad range of environmental expertise. Search by issue or research area.<br/>" + 
					"<input id='keyword' name='keyword' class='criteria'>" + 
					"<input type='submit' value='Go'>" + 
					"</p></form>"; 
	}
}

// submits the search form
function submitHomeSearch() {
	ajaxEngine.sendRequest("search", 
				"source=homepage", 
				"keyword=" + document.getElementById('keyword').value);
}
