// $Id: scripts.js,v 1.19 2004/03/07 05:59:09 kevin Exp $
//
// Open Journal Systems 1.1
// Copyright (c) 2003-2004 The Public Knowledge Project
// http://www.pkp.ubc.ca
// 
// This file is part of Open Journal Systems.
// 
// Open Journal Systems is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// Open Journal Systems is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with Open Journal Systems; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
//
// admin/include/scripts.js
// Contains various JavaScript scripts used in the site


// Opens a new unnamed window with the specified features
function openPopWin(url, width, height, left, top, features) {
	window.open(
		url,
		'',
		"width=" + width
		+ ",height=" + height
		+ ",screenX=" + (left ? left : "30")
		+ ",screenY=" + (top ? top : "30")
		+ ",left=" + (left ? left : "30")
		+ ",top=" + (top ? top : "30")
		+ (features ? "," + features : ",scrollbars,resizeable")
	);
}


// Opens a new window with editor's biography
function openBioWin(id, type) {
	var url = 'editors.php?op=bio&id='+id;
	if(type) {
		url += '&type=' + type;
	}
    window.open(url, 'Biography', 'height=400,width=300,screenX=150,screenY=100,left=150,top=100,scrollbars=yes');
}
