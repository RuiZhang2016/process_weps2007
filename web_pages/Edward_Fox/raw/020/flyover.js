var FLYOVERID = "flyover_id";
var FLYOVER_URL_PREFIX = "/ajax?type=flyover&node=";

var TIMEOUT_ID;
var CLEAR_TIMEOUT_ID;
var FO_NODE;
var FO_ANCHOR;
var FO_FASTSIG;
var FO_CUR_NODE;
var FO_LOCK = false;
var _LITE = false;

function reallyShowNodeFlyover ()
{
	clearTimeout (CLEAR_TIMEOUT_ID);
	var div = getDiv ();
	div.innerHTML = "";		
	pupulateFlyoverDiv(FO_NODE, div, FO_FASTSIG, FO_CUR_NODE);
}

function showNodeFlyover (node, anchor, fastsig, currentNode)
{
	TIMEOUT_ID;
	FO_NODE = node;
	FO_ANCHOR = anchor;
	FO_FASTSIG = fastsig;
	FO_CUR_NODE = currentNode;
	
	TIMEOUT_ID = setTimeout("reallyShowNodeFlyover()", 300);

/************
	var div = getDiv ();
	div.innerHTML = "";
	moveTo (div, findPosX (anchor), findPosY(anchor));	
	pupulateFlyoverDiv(node, div, fastsig, currentNode);
	div.style.visibility = "visible";
*************/	
}

function clearFlyout ()
{
	clearTimeout (TIMEOUT_ID);
	CLEAR_TIMEOUT_ID = setTimeout("hideNodeFlyover()", 500);
	FO_NODE = null;
	FO_ANCHOR = null;
	FO_FASTSIG = null;
	FO_CUR_NODE = null;
}

function pupulateFlyoverDiv (node, div, fastsig, currentNode)
{
	var url = makeFlyoverAjaxUrl (node, fastsig, currentNode);
	var x = getHTTPObject ();
	
	x.open ("GET", url, true);
	x.onreadystatechange = function () 
	{
		if (x.readyState == 4) 
		{
			div.innerHTML = x.responseText;
			moveTo (div, findPosX (FO_ANCHOR), findPosY(FO_ANCHOR));
			div.onmouseover = function (){this.style.visibility = "visible"; clearTimeout (CLEAR_TIMEOUT_ID);};						
			div.onmouseout = function () {clearFlyout ()};
			div.style.visibility = "visible";
		}
	} 
	x.send(null);	
}

function makeFlyoverAjaxUrl (node, fastsig, currentNode)
{
	return FLYOVER_URL_PREFIX + node + "&fastsig=" + fastsig + "&current=" + currentNode;
}

function moveTo (div, left, top)
{
	var availHeight = document.body.clientHeight;
	var availWidth = document.body.clientWidth;
		
	var divHeight = div.scrollHeight;
	var divWidth = div.scrollWidth;
			
	var endY = top + divHeight;
	var endX = left + divWidth + 20;	
		
	var widthFix = (-22); 
	
	if (endX > availWidth)
	{
		widthFix = (endX - availWidth) + 22;
	}
	
	div.style.top = top + 13;
	div.style.left = left - widthFix;
}

function hideNodeFlyover ()
{
	var div = document.getElementById (FLYOVERID);
	
	if (div != null)
	{
		div.style.visibility = "hidden";
	}
	
	FO_LOCK = false;	
}

function createDiv ()
{
	var element = document.createElement("DIV");
	
	// setup style and stuff
	element.id = FLYOVERID;
	element.className = "flyover";
	element.style.visibility = "hidden";
	
	document.body.appendChild(element);	
//	element.innerHTML = "LOADING";
	return element;
}

function getDiv ()
{
	var div = document.getElementById (FLYOVERID);
	
	if (div == null)
	{
		return createDiv();
	}
	
	return div;
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
	{
		curleft += obj.x;
	}
	
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
	{
		curtop += obj.y;
	}
	
	return curtop;
}

var maxSSDivs = 20;
var screenSaverCounter = 0;
var stopScreenSaver = 1;

function openPreview()
{
    if (stopScreenSaver == 1)
    {
        return;
    }
    window.scrollTo(0,0);
    var element = document.getElementById("sn" + "-" + screenSaverCounter);
    if (element == null)
    {
        element = document.createElement("DIV");
        element.className = "flyover";
        element.style.visibility = "hidden";
        element.id = "sn" + "-" + screenSaverCounter;
    }
    else
    {
        element.style.visibility = "hidden";
        document.body.removeChild(element);
    }
    screenSaverCounter++;
    if (screenSaverCounter >= maxSSDivs)
    {
        screenSaverCounter = 0;
    }
    document.body.appendChild(element);
    var url = "/ajax?type=alt-flyover&alt=1";
    var height = parseInt(window.innerHeight);
    var width = parseInt(window.innerWidth);
    if (isNaN(height) || height == 0)
    {
        height = document.body.clientHeight;
    }
    if (isNaN(width) || width == 0)
    {
        width = document.body.clientWidth;
    }
    if (height > 300 && width > 300)
    {
        sendUrl(url, function(x) {
            if (stopScreenSaver == 1)
            {
                return;
            }
            element.innerHTML = x.responseText;
            element.style.visibility = "visible";
            var yp = Math.round(Math.random() * (height - 250));
            var xp = Math.round(Math.random() * (width - 250));
            moveTo(element, xp, yp);
            if (!stopScreenSaver)
            {
                setTimeout(openPreview, 1000);
            }
        });
    }
}

function closeAll()
{
    for (var i=0; i<maxSSDivs; i++)
    {
        var element = document.getElementById("sn" + "-" + i);
        if (element != null)
        {
            element.style.visibility = "hidden";
        }
    }
}

function doScreenSaver()
{
    if (stopScreenSaver == 0)
    {
        return;
    }
    stopScreenSaver = 0;
    openPreview();
}

function validateSearch(frm)
{
    if (frm.q.value == "hella topix")
    {
        doScreenSaver();
        return false;
    }
    return true;
}

function initFlyovers()
{
  var anchors = document.getElementsByTagName( "a" );
  var xrefs = new Array();

  for( var i = 0; i < anchors.length; i++ )
  {
    if ( anchors[i].className.match( "xref" ) )
    {
    	
      xrefs[xrefs.length] = anchors[i];
    }    
  }

  for( var i = 0; i < xrefs.length; i++ )
  {
	//var newHref = xrefs[i].href;
	//newHref = newHref.replace (/\?mode=lite/, '');
	var newHref = xrefs[i].href.replace(/\?mode=lite/, '').replace( /^(http:\/\/[^\/]+)?\//, '' );
	xrefs[i].node = newHref;
  		
    xrefs[i].onmouseover = function () { showNodeFlyover( this.node, this, '', '' ); return false; };
    xrefs[i].onmouseout = clearFlyout;
  }
}

