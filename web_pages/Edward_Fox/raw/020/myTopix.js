var DIV_ID_PREFIX = "myTopix_";
var DIV_ID_PREFIX_RESULT_ROW = "myTopixResultItem_"
var DIV_ID_MYTOPIX_SEARCH_RES= "myTopix_searchResults";
var DIV_ID_MYTOPIX_SEARCH_ADDTO = "myTopixAddResults";
var DIV_ID_SECTIONLIST_BOX= "sectionListContent";

var URL_MYTOPIX_PREFIX = "/ajax/?type=myTopix";

var MYTOPIX_NUM_ADDED = 0;
var ID_MYTOPIX_NUM_RES = "myTopix_numRes";
var ID_MYTOPIX_NUM_ADDED = "myTopix_numAdded";

var SECTIONLIST_NODES = new Array();
var SECTIONLIST_CURR = 0;

function sectionListNext()
{
	var useIndex = SECTIONLIST_CURR + 1;	
	if (useIndex > SECTIONLIST_NODES.length)
	{
		useIndex = 0;
	}
		
	var div = document.getElementById (DIV_ID_SECTIONLIST_BOX);
	var node = SECTIONLIST_NODES[useIndex];
	SECTIONLIST_CURR = useIndex;
	
	var url = URL_MYTOPIX_PREFIX + "&node=" + node + "&type=nodePreview";	
	var x = getHTTPObject ();
	
	x.open ("GET", url, true);	
	x.onreadystatechange = function () 
	{
		if (x.readyState == 4) 
		{
			div.innerHTML = x.responseText;
		}
	} 
	x.send(null);	
}

function myTopix_Remove (node)
{
	// make the div go away
	var div = document.getElementById (DIV_ID_PREFIX + node);
	
	// change the cookie
	var url = URL_MYTOPIX_PREFIX + "&node=" + node + "&action=remove";	
	var x = getHTTPObject ();
	
	x.open ("GET", url, true);	
	x.onreadystatechange = function () 
	{
		if (x.readyState == 4) 
		{
			div.parentNode.removeChild (div);
		}
	} 
	x.send(null);
	div.style.display = "none";
}

function myTopix_addNoUi (node)
{
	var url = URL_MYTOPIX_PREFIX + "&node=" + node + "&action=addPassive";	
	var x = getHTTPObject ();
		
	x.open ("GET", url, false);	
	x.send(null);
}

function myTopix_addFlyover (node, anchor, currentNode)
{
	var span = anchor.parentNode;
		
	if (currentNode == "topstories/topstories")
	{
		myTopix_add (node, true);
	}
	else
	{
		myTopix_addNoUi (node);
	}
	
	if (span != null)
	{
		span.innerHTML = 'Added';
	}	
	
	if (currentNode != "topstories/topstories")
	{
		span.innerHTML += ": <a href=/>Go to Front Page</a>";	
	}
}

function myTopix_add (node, noDhtml)
{
	var div = document.getElementById ("seched_nodePreview");
		
	// change the cookie
	var url = URL_MYTOPIX_PREFIX + "&node=" + node + "&action=add";	
	var x = getHTTPObject ();	
	
	x.open ("GET", url, true);	
	x.onreadystatechange = function () 
	{
		if (x.readyState == 4) 
		{
			div.innerHTML = x.responseText + div.innerHTML;
			
			if (! noDhtml)
			{
				document.getElementById (DIV_ID_PREFIX_RESULT_ROW + node).style.display = "none";
				var span = document.getElementById (ID_MYTOPIX_NUM_RES);
				
				if (span.innerHTML != "" && span.innerHTML != "0")
				{
					var num = 0 + span.innerHTML;
					span.innerHTML  = (num -1);
					MYTOPIX_NUM_ADDED++;
				}
				
				if (MYTOPIX_NUM_ADDED != 0)
				{
					var span = document.getElementById (ID_MYTOPIX_NUM_ADDED);
					span.innerHTML = "(" + MYTOPIX_NUM_ADDED + " added)";
				}
			}
		}
	} 
	x.send(null);
}

function myTopix_search (q)
{
	var url = URL_MYTOPIX_PREFIX + "&action=search&q=" + escape (q);
	var x = getHTTPObject ();
	var resultDiv = document.getElementById (DIV_ID_MYTOPIX_SEARCH_RES);
	
	MYTOPIX_NUM_ADDED = 0;
	
	resultDiv.innerHTML = "<div id=\"myTopix_searchResultsContent\"><b>Searching for:</b> \"" + (q) + "\"</div>";
		
	x.open ("GET", url, true);	
	x.onreadystatechange = function () 
	{
		if (x.readyState == 4) 
		{
			resultDiv.innerHTML = x.responseText;
		}
	} 
	x.send(null);	
	return false;
}

/********************************************
* move the blue boxes on the front page
*********************************************/

var ENABLE_DRAG = true;

if (ENABLE_DRAG)
{
	document.onmousedown = DragStart;
}

var CN_MOVE = "moveme";
var DRAGGING = null;
var ORIGINAL = null;
var OX = 0;
var OY = 0;

function canMove (elem)
{
	return (
		elem != null 
		&& elem.className.indexOf (CN_MOVE) > -1 
		&& elem.className.indexOf ("clone") < 0
		);
}

function getSrcElem (e)
{
	if (e == null) 
	{
		return event.srcElement;
	}
	else
	{
		return e.target;
	}
}

function getEvent (e)
{
	return (e == null) ? event : e;
}

var BOX_INFO = new Array();

function initPositions (parentElem)
{
	var children = parentElem.childNodes;
	BOX_INFO = new Array();

	for (var i = 0; i < children.length; i++)
	{
		BOX_INFO[i] = new Array ();
		BOX_INFO[i]['id'] = children[i].id;
		BOX_INFO[i]['x'] = findPosX (children[i]);
		BOX_INFO[i]['y'] = findPosY (children[i]);
	}
}

function findRightPlace (elem)
{
	var x = findPosX (elem);
	var y = findPosY (elem);

	// we actually only care about y
	var parent = document.getElementById ("seched_nodePreview");
	var placeBeforeId = BOX_INFO[BOX_INFO.length - 1]['id'];

	for (var i = BOX_INFO.length - 1; i >= 0; i--)
	{
		if (y < BOX_INFO[i]['y'])
		{
			placeBeforeId = BOX_INFO[i]['id'];
		}
	}

	elem.parentNode.removeChild (elem);
	parent.insertBefore (ORIGINAL, document.getElementById(placeBeforeId));
}

function persistMoveState ()
{
	initPositions (ORIGINAL.parentNode);
	var ids = "";
	
	for (var i = 0; i < BOX_INFO.length; i++)
	{
		if (BOX_INFO[i]['id'] && BOX_INFO[i]['id'] != 'myTopix_IGNORE')
		{
			var use = BOX_INFO[i]['id'].replace(/^myTopix_/g, '');
			ids += use + ",";
		}
	}	

	// ajax call to save the cookie with the new state
	var url = URL_MYTOPIX_PREFIX + "&nodes=" + ids + "&action=persistBoxOrder";	
	var x = getHTTPObject ();	
	x.open ("GET", url, false);	
	x.send(null);
}

function getMoveableParent (elem)
{
	if (elem.parentNode != null && elem.parentNode.href != null)
	{
		return null;
	}

	if (elem.className != "myTopix_move"  && (elem.className == "myTopix_removeBtn" || elem.href != null))
	{
		return null;
	}
	
	if (elem.className != null && elem.className.indexOf("elem") > -1)
	{
		return elem;
	}
	
	while (elem.parentNode)
	{		
		elem = elem.parentNode;
			
		if (elem.className != null &&  elem.className.indexOf ("moveme") > -1)
		{		
			return elem;
		}		
	}
	
	return null;
}

var HACK_MAGIC_NUMBER_MOVE = 0;

if (navigator.userAgent.indexOf ("MSIE") > -1)
{
	HACK_MAGIC_NUMBER_MOVE = 320;
}


function DragStart (e) 
{
	var elem = getMoveableParent (getSrcElem (e));
	
	if (! canMove (elem) || DRAGGING != null)
	{
		return;
	}

	initPositions (elem.parentNode);

	ORIGINAL = elem;

	DRAGGING = elem.cloneNode (true);
	DRAGGING.style.width = elem.scrollWidth;
	DRAGGING.style.left = findPosX(elem) + 0;	
	
//	DRAGGING.style.backgroundColor = "green";	
		
	DRAGGING.style.filter = "alpha(opacity=50)";	
	DRAGGING.style.opacity = ".5";
	DRAGGING.style.MozOpacity  = ".5";	
		
	DRAGGING.style.position = "absolute";
	DRAGGING.style.top = findPosY(elem);
	DRAGGING.style.left = findPosX(elem) - HACK_MAGIC_NUMBER_MOVE;	
	DRAGGING.style.zIndex = 2000;
	DRAGGING.className += " clone";
	DRAGGING.style.cursor = "move";
	DRAGGING.style.backgroundColor = "rgb(245,248,255)";
	DRAGGING.style.border = "1px solid #cad8fa";		
	
	document.body.appendChild (DRAGGING)
	document.onmousemove = DoDrag;
	document.onmouseup = DragEnd;
	document.onclick = DragEnd;
	
	var ev = getEvent (e);
	OX = ev.clientX;
	OY = ev.clientY;
	
	return false;
}

function DoDrag (e)
{
	if (DRAGGING == null) return;

	var ev = getEvent (e);

	var x = findPosX(DRAGGING) + (parseInt(ev.clientX) - OX);
	var y = findPosY(DRAGGING) + (parseInt(ev.clientY) - OY);

	try
	{
		DRAGGING.style.top = y;
		DRAGGING.style.left = x;
	}
	catch (err)
	{
		DRAGGING.style.backgroundColor = "green";
	}

	OX = ev.clientX;
	OY = ev.clientY;

	return false;	
}

function DragEnd (e)
{
	document.onmouseup = null;
	document.onclick = null;
	document.body.onselect = null;
	
	if (DRAGGING)
	{
		findRightPlace (DRAGGING);
	}

	persistMoveState();
	OX = OY = DRAGGING = null;
	
	return false;
}