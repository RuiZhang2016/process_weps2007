<!--
function getCookie(label) {
	var labelLen = label.length
	var cLen = document.cookie.length
	var i = 0
	var cEnd
	while (i < cLen) {
		var j = i + labelLen
		if(document.cookie.substring(i,j) == label) {
			cEnd = document.cookie.indexOf(";",j)
			if (cEnd == -1) {
				cEnd = document.cookie.length
			}
			return unescape(document.cookie.substring(j+1,cEnd))
			// I was getting an extra equals sign, so put in j+1 p.311
		}
		i++
	}
	return " "
}


// Switches view depending on Cookie user has, except for uk, submitform and form views 

var re = /\?.*/


var url = document.URL.replace(re, "")                          // remove query string
var paths = url.split("/")
var findQuery = /\?view=uk/
var findQuerySubmit = /\?view=submitform/
var findQueryForm = /\?view=form/
var queryString = findQuery.exec(document.URL)
var queryStringSubmit = findQuerySubmit.exec(document.URL)
var queryStringForm = findQueryForm.exec(document.URL)


if ( (getCookie('Country') == "uk") && 
	(queryString != "?view=uk") &&
	(paths[3] != "results")  &&
	(queryStringSubmit != "?view=submitform")&&
	 (queryStringForm != "?view=form")
	
	) { // don't switch pages that are already uk or search results
		location = url + "?view=uk";
		
}

// -->


