	function showHistogramForCat (a, node)
	{
		var div = document.getElementById ("catHistogramDiv");
		
		if (div == null)
		{
//			div = createDiv ();
//			div.id = "catHistogramDiv";
//			div.className = "";
//			div.style.zIndex = 999999999999999;
//			div.style.visibility = "hidden";
//			div.style.width = "730px";
//			div.style.height = "125px";			
//			div.style.position = "absolute";
//			div.style.top = parseInt (findPosY (a)) + 15 + "px";
			
//			document.body.appendChild
		}
		
//		var left = (document.body.offsetWidth - 730) /2;
//		div.style.left = left + "px";
		div.style.visibility = "visible";		
		
		div.innerHTML = "<center><b>Loading...</b></center>";		
		var url = "/ajax?blogs=&type=histogram&query_string=" + node + "&e=&o=1154553188&max_tiers=38&total=2579459&td=0000558";		
		getAndPopulate(url, "catHistogramDiv", false);
		div.innerHTML = div.innerHTML + "<br />&nbsp;";
		div.style.display = "inline";				
	}	

	function EndDragSlider (e)
	{
		DRAGGING = false;
		document.onmouseup = null;
		document.onclick = null;
		document.body.onselect = null;
		
//		tower.onmouseover = null;
//		tower.onmousemove = null;				

//		slider.style.display = "none";
//		originalSlider.style.visibility = "visible";		

		var loc =  getElementAttribute (histogramInfo[lastLeft], 'goto');
		
		if (loc)
		{
			document.getElementById ('searchResultsHolder').style.height = document.getElementById ('searchResultsHolder').scrollHeight + "px";		
			doSearchPagination (loc, true);
		}
		
		return true;
	}

	function DoDragSlider (e)
	{		
		var t = (new Date()).getTime();			
		if (DRAGGING) // && lastT + 1 <= t
		{		
			var ev = getEvent (e);			
			var where = parseInt(ev.clientX);		
			var x = (parseInt (slider.style.left) + (where - origX));

			if (ev.clientX > maxX || ev.clientX <= minX)
			{
				// noop
			}
			else
			{
	//			if (ev.clientX > maxX) x = maxX - 1;
	//			if (ev.clientX <= minX) x = minX - 1; // hack with the -1
	
				slider.style.left = ev.clientX;
				marker.style.left = parseInt (slider.style.left) + (adj - 2) + "px";
				flag.style.left = parseInt(marker.style.width) + parseInt (marker.style.left) + 1 + "px";
				origX = where;
	
				colorHistogramBars (findPosX (slider) + adj);				
			}
			
			return false;
		}

//		return false;
		return true;
	}

	var lastColoredIndex = 0;
	function colorHistogramBars (flagLeft)
	{
		var index = findHistogramDiv (flagLeft);
		lastLeft = index;
		
		for (var i = 0; i < histogram.childNodes.length; i++)		
		{
			if (! histogram.childNodes[i].style) continue;
						
			histogram.childNodes[i].style.backgroundColor = (histogram.childNodes[i].pos != null 
									&& histogram.childNodes[i].pos >= index) 
									? '#e1eafd' : '#8fb1fc'; 
									
									
		}

//		for (var i = 0; i < histogramInfo.length; i++)
//		{			
//			if (histogramInfo[i] == null) 
//			{
//				continue;
//			}
//			
//			if (histogramInfo[i].style.backgroundColor == 'red') continue;
//			if (histogramInfo[i].style.backgroundColor == '#e1eafd') continue;
//
//			histogramInfo[i].style.backgroundColor = 'green';		
//			continue;
//
//			histogramInfo[i].style.backgroundColor = (i >= index) ? '#e1eafd' : '#8fb1fc';
//			lastColoredIndex = i;		
//		}
		
//		showDateFlag ();							
		
//		return false;
	}

	function findHistogramDiv (absoluteLeft)
	{
		absoluteLeft = parseInt (absoluteLeft);
		var useI = 0;
		
		for (var i = 0; i < histogramInfo.length; i++)
		{
			if (histogramInfo[i] == null) continue;

			var x = i;
			var w = histogramInfo[i].scrollWidth;

			if (absoluteLeft >= x && absoluteLeft <= (x+w))
			{
				useI = i;
				break;
			}
		}

		return useI;
	}
	
	function showDateFlag ()
	{
//		var absoluteLeft = findPosX (slider);
//		var div = histogramInfo[lastLeft];
//		
//		if (div == null)
//		{
//			flag.innerHTML = "No results" + "<br />Move the thing";		
//		}
//		else
//		{
//			var msg = div.title;
//	
//			var msgParts = msg.split (" for ");
//			msg = msgParts[1];
//			
//			var numParts = msgParts[0].split(" ");
//	
//			var s = (numParts[1] != 1) ? 's' : '';
			flag.innerHTML = msg + "<br />" + numParts[1] + " results";
//			flag.innerHTML = numParts[1] + " result" + s + " on<br /> " + msg;			
//		}
		
//		return false;
	}


	var initLoc = null;
	function initHistogramDivPositions ()
	{
		histogramInfo = new Array ();
		var n = 0;
		var pos;
		var str;
		
		for (var i = 0; i < histogram.childNodes.length; i++)
		{
			if (! histogram.childNodes[i].id) 
			{
				str += histogram.childNodes[i].id + "<hr>";				
				continue;				
			}
						
			// || histogram.childNodes[i].className.indexOf ('histogramBar ') != 0

			if (histogramInfo.length == 0) firstHistogram = histogram.childNodes[i];

//			histogram.childNodes[i].onclick = function () {if (location.href.indexOf('debug') > -1) alert (this.id + "\n\n" + this.title)};
			
			// the array index is the DIV's absolute left position
			pos = findPosX(histogram.childNodes[i]);
			histogramInfo[pos] = histogram.childNodes[i];
			
			histogram.childNodes[i].pos = pos;			
			
//			if (histogram.childNodes[i].title.indexOf ('Jul 19, 2005') > 0)
//			{
//				alert (pos + "\n\n" + histogram.childNodes[i].id)
//			}			

			if (initLoc == null && getElementAttribute (histogram.childNodes[i], 'first') != null)
			{			
				minX = pos - adj;
			}
			
			if (initLoc == null && getElementAttribute (histogram.childNodes[i], 'initLoc') != null)
			{
				initLoc = pos;
				maxX = pos + 1;				
				
//				slider.style.left = (pos + 10  - 2 * adj) + 2 + "px";
//				marker.style.left = (parseInt(slider.style.left) + adj - 2) + "px";
//				flag.style.left = parseInt(marker.style.width) + parseInt (marker.style.left) + 1 + "px";
//				showDateFlag ();					
			}
			
			n++;
		}
		
		if (initLoc == null)
		{
			initLoc = pos;
		}
		
//		document.getElementById ('searchResultsHolder').innerHTML = str;
	}
	
	function InitSliderDrag (e)
	{	
		var ev = getEvent (e);	
		var elem = getSrcElem (e);
		
		if (elem.id != 'histogram-slider')
		{
			DRAGGING = false;
			return;
		}
						
//		alert (histogram.scrollWidth)
//		minX = findPosX (histogram) - adj;
		
								
//		slider = originalSlider.cloneNode (true);
//		slider.id = "histogram-slider2";
//		slider.style.backgroundImage = '';
//		slider.style.backgroundColor = 'green';		
		slider.style.position = "absolute";
//		slider.style.left = 0;
		
//		slider.style.left = findPosX (slider) + "px";
//		slider.style.top = findPosY (slider) + "px";		
		
//		document.body.appendChild (slider);				
//		originalSlider.style.visibility = "hidden";		
		
		initHistogramDivPositions ();

		origX = parseInt(ev.clientX);
		
		DRAGGING = true;
		document.onmousemove = DoDragSlider;
		document.onmouseup = EndDragSlider;
		document.onclick = EndDragSlider;
//		document.body.onselect = function () {return false}
		
//		tower = document.getElementById ("tower");				
//		tower.onmouseover = function () {return false};
//		tower.onmousemove = function () {return false};		
		
//		return false;
	}
	
	DRAGGING = false;
	var colorAll = true;
	var slider;
	var controls;
	var marker;
	var flag;
	var histogram;
	var adj;
	var maxX;
	var minX;
	var lastLeft;	
	var dateFlag = null;	
	var histogramInfo = null;
	var firstHistogram = null;	
	var origX;
	var slideDir;
	var originalSlider;
	var lastT = (new Date()).getTime();	
	var tower = null;
		
	function initHistogram (newest, oldest)
	{
		colorAll = true;
		slider = document.getElementById ("histogram-slider");
		controls = document.getElementById ("histogram-controls");
		marker = document.getElementById ("histogram-marker");
		flag = document.getElementById ("histogram-flag");
		histogram = document.getElementById ("histogram");
		
		adj = 0;
//		maxX = controls.scrollWidth - adj;
//		minX = 0 - adj;
		lastLeft;	
		dateFlag = null;	
		histogramInfo = null;
		firstHistogram = null;	
		origX;	
						
		initHistogramDivPositions ();
		
		histogram.onclick = HandleHistogramClick;
		return;		
		
//		document.onmousedown = null;
//		document.onmousedown = InitSliderDrag;
//		document.onmouseup = null;			
		
//		var useTop = findPosY(controls) - 9;		
//		if (document.all) useTop -= 4;		
//		if (navigator.userAgent.indexOf ('Safari') > -1)
//		{
//			useTop += 26;
//		}
				
//		slider.style.top = useTop;						
//		marker.style.top = parseInt (slider.style.top) - parseInt(marker.style.height) + 5;
//		flag.style.top = parseInt (marker.style.top);							

		slider.style.display = "none";
		flag.style.display = "none";
		marker.style.display = "none";				
		
		colorHistogramBars (initLoc);						
	}	
	
	function HandleHistogramClick (e)
	{
		var ev = getEvent (e);
		
//		if (ev.clientX <= histogramInfo.length)
//		{
//			document.forms[0].elements[0].value = ev.clientX;
			colorHistogramBars (ev.clientX + (mozilla ? 0 : 0));
			EndDragSlider (e);		
//		}	
	}
	
	var isMac = (navigator.platform.indexOf ('Mac') == 0);
	
	var mozilla = document.getElementById && !document.all;
	function getElementAttribute (elem, attname)
	{
	    if (mozilla)
	    {
	        if (elem)
	        {
	        	return elem.getAttribute(attname);	        	
	        }
	
			return null;
	    }

        return (elem.attributes[attname]) ? elem.attributes[attname].value : null;
	}
		
	function doSearchPagination (q, noAnchor)
	{	
		var baseUrl = q;
				
		baseUrl += "&ajaxSearchPaginate=1";

		document.getElementById ('searchResultsHolder').innerHTML = "<p style=\"text-align:center; padding:10px; 0;\"><img src=\"/pics/loading.gif\" /></p>"
		getAndPopulate( baseUrl, "searchResultsHolder", false);
		
		if (! noAnchor)
		{
			location = "#top";
		}
		
//		return true;
	}	
	
	function showHistogram (url, newest, oldest)
	{

		var x = getHTTPObject();
		var useDiv = document.getElementById ('search_histogram');
		
		if (x == null)
		{
			useDiv.style.display = "none";
			return;
		}
	
		x.open ("GET", url, true);

		x.onreadystatechange = function () 
		{
			if (x.readyState == 4) 
			{
//				alert (222)
				useDiv.innerHTML = x.responseText;
	            initHistogram (newest, oldest);				
			}
		} // callback

		x.send(null);	
	}