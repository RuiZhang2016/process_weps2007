var affectedtags = new Array( 'a','body','td','span','font');
var relSizes = new Array( 'xx-small','x-small','small','medium','large','x-large','xx-large' );
var initialSize = 1;

function changeSize( tagToChg,amt ) {
	if (!document.getElementById) return
	var d = document,changeTag = null,relSize = initialSize,i,j,numTags;
	
	relSize += amt;
	if ( relSize < 0 ) relSize = 0;
	if ( relSize > 6 ) relSize = 6;
	initialSize = relSize;
		
	if ( !( changeTag = d.getElementById( tagToChg ) ) ) changeTag = d.getElementsByTagName( tagToChg )[0];

	changeTag.style.fontSize = relSizes[relSize];

	for ( i = 0 ; i < affectedtags.length ; i++) {
		numTags = changeTag.getElementsByTagName(affectedtags[i]);
		for ( j = 0 ; j < numTags.length ; j++) numTags[j].style.fontSize = relSizes[relSize];
	}
}