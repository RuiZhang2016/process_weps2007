function divStyle(theDiv)
{
	if (document.getElementById) return document.getElementById(theDiv).style;
}

function changeStackBgColor(level, rollNum, rollover, multiStyle)
{ 
	var blockColor = '';
	var txtColor = '';
	var picColor = '';

	if (document.getElementById) {
		if (rollover == 'on') {
			if (multiStyle != null) {
				picColor = linkhex[multiStyle];
				txtColor = txthex[multiStyle];
				blockColor = blockhex[multiStyle];
			}
			else {
				picColor = linkhex;
				txtColor = txthex;
				blockColor = blockhex;
			}
		}
		else {
			if (multiStyle != null) {
				picColor = pichex[multiStyle];
				txtColor = linkhex[multiStyle];
				blockColor = pichex[multiStyle];
			}
			else {
				picColor = pichex;
				txtColor = linkhex;
				blockColor = pichex;
			}
		}

		if (document.getElementById('a' + rollNum + level)) {divStyle('a' + rollNum + level).backgroundColor=blockColor;}
		if (document.getElementById('b' + rollNum + level)) {divStyle('b' + rollNum + level).borderColor=picColor;}
		if (document.getElementById('c' + rollNum + level)) {divStyle('c' + rollNum + level).color=txtColor}
		if (document.getElementById('d' + rollNum + level)) {divStyle('d' + rollNum + level).borderColor=picColor;}
	}
}

function showThisTab(whichLayer, modNum) {

	if (modNum != null) {

	
	
		for (var i = 0; i < tabNames[modNum].length; i++) {
		eval("imgFlip('" + tabNames[modNum][i] + "_tab','" + tabNames[modNum][i] + "_tab_off')");
		}
	
	
	if (document.getElementById) {
		
		
			for (var i = 0; i < tabNames[modNum].length; i++) {
		
			eval("divStyle('pad" + tabNames[modNum][i] + "Tab').visibility = 'hidden'");
			
			}
		
		
			for (var i = 0; i < tabNames[modNum].length; i++) {
			eval("divStyle('moreTab" + tabNames[modNum][i] + "').visibility = 'hidden'");
			}
		

		eval("imgFlip('" + whichLayer + "_tab','" + whichLayer + "_tab_on')");
		divStyle('pad' + whichLayer + 'Tab').visibility = 'visible';
		divStyle('moreTab' + whichLayer).visibility = 'visible';
	}
	
	
	}
	
	else {
	
	for (var i = 0; i < tabNames.length; i++) {
		eval("imgFlip('" + tabNames[i] + "_tab','" + tabNames[i] + "_tab_off')");
	}
	if (document.getElementById) {
		for (var i = 0; i < tabNames.length; i++) {
			eval("divStyle('pad" + tabNames[i] + "Tab').visibility = 'hidden'");
		}
		for (var i = 0; i < tabNames.length; i++) {
			eval("divStyle('moreTab" + tabNames[i] + "').visibility = 'hidden'");
		}

		eval("imgFlip('" + whichLayer + "_tab','" + whichLayer + "_tab_on')");
		divStyle('pad' + whichLayer + 'Tab').visibility = 'visible';
		divStyle('moreTab' + whichLayer).visibility = 'visible';
	}
	
	
	}
}

function changeBgColor(blockDiv, textName, blockColor, linkColor) { 
	if (document.getElementById) {
		imgFlip(blockDiv,'Int_arrow_' + linkColor);
		divStyle(blockDiv).backgroundColor= '#' + blockColor;
		divStyle(textName).color= '#' + linkColor;
	}
}

function playHMFMovies(albumid, xmlLoc, movieid) {
launchVideo('track=all&format=&paid=0&albumid=' + albumid + '&type=listeningparty&player=moviePlayer&xmlFile=' + escape(xmlLoc) + "&movieid=" + movieid);
}

function playCSMovies(albumid, xmlLoc, movieid) {
launchVideo('track=all&format=&paid=0&albumid=' + albumid + '&type=listeningparty&lptype=cs&player=moviePlayer&xmlFile=' + escape(xmlLoc) + "&movieid=" + movieid);
}

 function openSummerFlip(url) {
	var flipbookUrl="/events/summer/2005/flipbook/index.jhtml?" + url;
			popper(flipbookUrl,'gallery','width=733,height=535,scrollbars=0');
		}