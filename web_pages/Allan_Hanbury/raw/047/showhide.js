function getNode( nodeId ) {
if( document.getElementById )
	return document.getElementById( nodeId );
else if( document.all && document.all( nodeId ) )

	return document.all( nodeId );
else if( document.layers && document.layers[ nodeId ] )
	return document.layers[ nodeId ];
else
	return false;
}

function show(object) {
	getNode(object).style.display = 'block';
	setCookie('the_news', 'show');
}

function hide(object) {
	getNode(object).style.display = 'none';
	setCookie('the_news', 'hide');
}

function setCookie( key, value ) {
	document.cookie = key + '=' + value + '; expires=' +
		new Date( 2010, 0, 1 ).toGMTString();
		
}
