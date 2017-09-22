function overrideStyles(){
	if(document.childNodes && !document.all && !navigator.taintEnabled && !accentColorName ){
		document.write('<link rel="stylesheet" type="text/css" href="/css/safariWidget032905.css">');
	}
}