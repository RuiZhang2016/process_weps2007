// JavaScript Document

function switchTab() {
	var counting = 0;
	while (arguments[counting]!= true) {
		document.getElementById(arguments[counting]).style.display='block';
		counting++;
	}
		counting++;
	for (var i=counting; i<arguments.length; i++) {
		document.getElementById(arguments[i]).style.display='none'; 
	}
}
function switchImages() {
	var rootDir = '/dynamic_templates/movies/img/';
	var lastArg = arguments.length - 1;
	document.getElementById(arguments[1]).src =  rootDir + arguments[1] + '_on.gif';
	
	if (lastArg != 2) {
		for (var i=2; i<lastArg; i++) {
			if (document.getElementById(arguments[i]) != null)
				document.getElementById(arguments[i]).src = rootDir + arguments[i] + '_off.gif';
		}
	}
	document.getElementById(arguments[0]).src = rootDir + 'arrow_tab_' + arguments[lastArg] + '.gif';
}

