var smFly;
var smStat;
var curSm = "x";
var smTop;
var smLeft;
var smWidth;
var smHeight;
var mmWidth;

var g_DEBUG = false;
var g_Domain = document.location.hostname;
if( !g_DEBUG  )
{
	window.onerror = new Function( "return true" );
}

function showSm(id)
{
	curSm = id;
	smFly = document.getElementById("sm" + id);
	mmStat = document.getElementById("mm" + id);
	
	smTop = findPosY(mmStat) + adjForLO(id, "y");
	smLeft = findPosX(mmStat) + adjForLO(id, "x");

	smFly.style.top = smTop;
	smFly.style.left = smLeft;
	
	smWidth = smFly.offsetWidth;
	smHeight = smFly.offsetHeight;	
	
	mmWidth = mmStat.offsetWidth;
	
	var sels = document.getElementsByTagName("select");
	for (var i = 0; i < sels.length; i++)
	{
		sels[i].style.visibility = "hidden";
	}
}

function adjForLO(id, pos)
{
	var num;
	var defY = 20;
	
	switch(id)
	{
		case "Search": 
			if(pos == "x")
			{	
				num=-246;
			}
			else
			{
				num=defY;
			}
			break;
		default: 
			if(pos == "x")
			{	
				num=-6;
			}
			else
			{
				num=defY;
			}
			break;
	}
	
	return num;
}

function hideSm()
{
	smFly = document.getElementById("sm" + curSm);
	smFly.style.left = -500;
	curSm = "x";
	
	var sels = document.getElementsByTagName("select");
	for (var i = 0; i < sels.length; i++)
	{
		sels[i].style.visibility = "";
	}
}

if(document.layers) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = mouseCheck;

function mouseCheck(e)
{
	if (curSm != "x")         
	{
		var mx;
		var my;
//Props to Maurits for fixing the scroll bug
// the problem with IE is that
// my counts from the top of the VIEWPORT
// and not from the top of the document
		
		mx = (document.all) ? event.x + get_scroll_dimensions()[0] : e.pageX;
		my = (document.all) ? event.y + get_scroll_dimensions()[1] : e.pageY;
// var info =
//	"event.x: " + (document.all ? event.x : null) + ", " +
//	"event.y: " + (document.all ? event.y : null) + ", " +
//	"e.pageX: " + (document.all ? null : e.pageX) + ", " +
//	"e.pageY: " + (document.all ? null : e.pageY) + ", " +
//	"mx: " + mx + ", " +
//	"my: " + my + ", " +
//	"smLeft: " + smLeft + ", " +
//	"smWidth: " + smWidth + ", " +
//	"smTop: " + smTop + ", " +
//	"smHeight: " + smHeight + ", " +
//	"mmWidth: " + mmWidth
//	;
// window.status = info;
// document.title = info;

		if(
			mx < smLeft || // left of submenu
			mx > (smLeft + smWidth) || // right of submenu
			my > (smTop + smHeight) || // below submenu
			my < (smTop - 25)  || // more than 25 pix above submenu
			(	my < smTop && // above submenu
				mx > (smLeft + mmWidth + 10) // to right of link
			)
		)
		{
			hideSm();			
		}
	}
}
window.onresize = resizeCheck;
function resizeCheck()
{
		hideSm();
}

/* Helper Functions */

function getObj(name)
{
	if (document.getElementById)
	{
		this.obj = document.getElementById(name);
		this.style = document.getElementById(name).style;
	}
	else if (document.all)
	{
		this.obj = document.all[name];
		this.style = document.all[name].style;
	}
	else if (document.layers)
	{
   		this.obj = document.layers[name];
   		this.style = document.layers[name];
	}	
}

function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	
	return curleft;
}

function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
		
	return curtop;
}

// useful function for finding out how far the page is scrolled
// returns an array of (x, y)
function get_scroll_dimensions()
{	var scroll_x = 0;
	var scroll_y = 0;

	if (typeof(window.pageYOffset) == "number")
	{	// Netscape compliant
		scroll_y = window.pageYOffset;
		scroll_x = window.pageXOffset;

	} else if(
		document.body
		&& (	document.body.scrollLeft
			|| document.body.scrollTop
		)
	)
	{      // DOM compliant
	      scroll_y = document.body.scrollTop;
	      scroll_x = document.body.scrollLeft;

	} else if(
		document.documentElement
		&& (	document.documentElement.scrollLeft
			|| document.documentElement.scrollTop
		)
	)
	{	// IE6 standards compliant mode
		scroll_y = document.documentElement.scrollTop;
		scroll_x = document.documentElement.scrollLeft;

	}

	return [ scroll_x, scroll_y ];
}

//props got to Dustin Diaz (http://www.dustindiaz.com/getelementsbyclass)
function getElementsByClass(node,searchClass,tag) {
	var classElements = new Array();
	var els = node.getElementsByTagName(tag); // use "*" for all elements
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++)
	{
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}