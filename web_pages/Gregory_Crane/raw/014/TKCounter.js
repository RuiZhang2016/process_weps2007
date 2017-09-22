function BrowserIdentification() {
	var b = navigator.appName
	if (b=="Netscape") this.b = "ns"
	else if (b=="Microsoft Internet Explorer") this.b = "ie"
	else this.b = b
	this.version = navigator.appVersion
	this.v = parseInt(this.version)
	this.ns = (this.b=="ns" && this.v>=4)
	this.ns4 = (this.b=="ns" && this.v==4)
	this.ns5 = (this.b=="ns" && this.v==5)
	this.ie = (this.b=="ie" && this.v>=4)
	this.ie4 = (this.version.indexOf('MSIE 4')>0)
	this.ie5 = (this.version.indexOf('MSIE 5')>0)
	this.min = (this.ns||this.ie)
}
browserIs = new BrowserIdentification()

function counterHTML()
{
	var visitCount = getCurrentCount();
	if( !visitCount ) { return '' };

//	var counterString = '<table border="0" cellpadding="0" cellspacing="0"><tr><td nowrap><img src="' + imageBase + '/' + 'left.gif"/>'
	var counterString = '<img src="' + imageBase + '/' + 'left.gif"/>'
	
	for( var i = 0; i < visitCount.length; ++i)
	{
		counterString += '<img src="' + imageBase + '/' + visitCount.charAt(i) + '.gif"/>';
	}
	
//	counterString += '<img src="' + imageBase + '/' + 'right.gif"/></td></tr></table>\n';
	counterString += '<img src="' + imageBase + '/' + 'right.gif"/>\n';
	
	return counterString;
}

function writeCounterLater()
{
    setTimeout('writeCounter()', 1000);
}

function writeCounter3()
{
	var counterHTMLString = counterHTML();
	
	if( counterHTMLString.length )
	{
        var counterLayer = new DynLayer();
        counterLayer.setSize('auto','auto');
        counterLayer.setVisible(false);
        counterLayer.setHTML(counterHTMLString);
        counterLayer.create();
        counterLayer.setAnchorAlign('center');
        counterLayer.setAnchorVAlign('middle');
        counterLayer.anchorName = 'CounterAnchor';
        counterLayer.alignToAnchorNamed('CounterAnchor','center','middle');
        counterLayer.setVisible(true);
    }
	return false;
}

function writeCounter()
{
	var counterHTMLString = counterHTML();
	if( counterHTMLString.length )
	{		
		if(typeof(document.getElementById) == 'function') {
			document.getElementById('CounterDiv').innerHTML = counterHTMLString;
		}
		else if( !browserIs.ns )//if( browserIs.ie )
		{
			document.all['CounterDiv'].innerHTML = counterHTMLString;
		}
    }
	return false;
}

function writeCounterOLD()
{
	var counterHTMLString = counterHTML();
	
//alert(counterHTMLString);

	if( counterHTMLString.length )
	{
		if (browserIs.ns)
		{
	//    alert('document.CounterDiv: ' + document.CounterDiv);
	//    alert('document[\'CounterDiv\']: ' + document['CounterDiv']);
			//document.CounterDiv.document.open();
			document.CounterILayer.document.CounterLayer.document.write( counterHTMLString );
			//document.CounterLayer.document.write( 'Please let this text show up.' );
			document.CounterILayer.document.CounterLayer.document.close();
		}
		else if (browserIs.ie)
		{
		//alert(counterString);
			document.all['CounterDiv'].innerHTML = counterHTMLString;
		//	document.all['CounterLayerAnchor'].innerHTML = counterHTMLString;
		}
    }
	return false;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

function getCurrentCount()
{
	return getCookie('counter-value-' + counterUser + '-' + counterPage);
}
