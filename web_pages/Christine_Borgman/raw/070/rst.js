// $Id: rst.js,v 1.7 2004/06/06 20:42:34 kevin Exp $
//
// Research Support Tool 2.0
// (c) The Public Knowledge Project 2003
// http://www.pkp.ubc.ca
//
// This file is part of the PKP Research Support Tool.
// 
// Research Support Tool is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// Research Support Tool is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with Research Support Tool; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
// 
// include/rst.js
// RST JavaScript functions used in the user interface

// Function to open up a RST window
function openRSTWin(url) {
	window.open(url, '', 'width=640,height=480,screenx=100,screeny=100,location=no,status=no,scrollbars=yes');

}


// Script to open up an RST context search using the currently selected text
function openRSTSearchTermWin(url) {
	var text;
	
	// Try to get the selected text
	if(window.getSelection) {
		text = window.getSelection();
		
	} else if(document.getSelection) {
		text = document.getSelection();
		
	} else if(document.selection && document.selection.createRange && document.selection.type.toLowerCase() == 'text') {
		var range = document.selection.createRange();
		text = range.text;
	}
	
	if(text) {
		openRSTWin(url + text);
	}
}
