function openPopup(p_url, p_title, p_params, p_sessionid)
{
   var m_index = p_url.indexOf("?");
   var m_url = p_url;
   if ( p_sessionid && p_sessionid != "" ) {
		 if ( m_index < 1 ) {
				m_url = p_url + ";jsessionid=" + p_sessionid;
		 } else {
				var path = p_url.substr( 0, m_index );
				var qs = p_url.substr( m_index, m_url.length );
				m_url = path + ";jsessionid=" + p_sessionid + qs;
		 }
	 }
	 return window.open( m_url, p_title, p_params );
}

function openFullWin(p_url, p_width, p_height, p_sessionid)
{
	m_params = "toolbar=1,";
	m_params += "location=1,";
	m_params += "directories=1,";
	m_params += "status=1,";
	m_params += "menubar=1,";
	m_params += "scrollbars=1,";
	m_params += "resizable=1,";
	m_params += "width="+p_width+",";
	m_params += "height="+p_height;
	return openPopup(p_url, "popup", m_params, p_sessionid);
}

function openWin(p_url, p_width, p_height, p_sessionid)
{
	m_params = "toolbar=0,";
	m_params += "location=0,";
	m_params += "directories=0,";
	m_params += "status=0,";
	m_params += "menubar=0,";
	m_params += "scrollbars=1,";
	m_params += "resizable=0,";
	m_params += "width="+p_width+",";
	m_params += "height="+p_height;
	return openPopup(p_url, "popup", m_params, p_sessionid);
}

function openWin2(p_url, p_width, p_height, p_sessionid)
{
	m_params = "toolbar=0,";
	m_params += "location=0,";
	m_params += "directories=0,";
	m_params += "status=0,";
	m_params += "menubar=0,";
	m_params += "scrollbars=0,";
	m_params += "resizable=1,left=5000,top=5000,";
	m_params += "width="+p_width+",";
	m_params += "height="+p_height;
	return openPopup(p_url, "popup2", m_params, p_sessionid);
}

function closeWin()
{
	this.window.close();
}


function textCounter(f, c, max)
{
	if (f.value.length > max) {
		f.value = f.value.substring(0, max);
	} else {
		c.value = max - f.value.length;
	}
}

// start show, hide and position minis
function getImageX(imgID) 
{
	var obj = document.images[imgID]
	var x = obj.offsetLeft || 0
		while (obj = obj.offsetParent) 
			x += obj.offsetLeft
		return x
}

function getImageY(imgID) 
{
	var obj = document.images[imgID]
	var y = obj.offsetTop || 0
		while (obj = obj.offsetParent) 
			y += obj.offsetTop
		return y
}

function showImage(obj1,obj2) 
{
	var imgL = document.getElementById(obj2);
	if (window.print) {
		xPos = getImageX(obj1);
		yPos = getImageY(obj1); 
		imgL.style.left = xPos + "px";
		imgL.style.top = yPos + "px";
	}
	imgL.style.display= '';
}
  
function hideImage(obj) 
{
	var imgL = document.getElementById(obj);
	imgL.style.display = 'none';
}
// start show, hide and position minis

/* returns an element's left (x) and top (y) coords as an object */
function getElementPosition(element) {
  var x=0,y=0;
  while (element!=null) {
    /* these are for finding absolute positions */
    x+=element.offsetLeft;
    y+=element.offsetTop;
    element=element.offsetParent;
  }
  return {x:x,y:y};
}

/* returns visible window width and height dimensions as an object */
function getWindowDimensions() {
  var x=0,y=0;
  if (self.innerHeight) { //all except Explorer
    x = self.innerWidth;
    y = self.innerHeight;
  } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
    x = document.documentElement.clientWidth;
    y = document.documentElement.clientHeight;
  } else if (document.body) { // other Explorers
    x = document.body.clientWidth;
    y = document.body.clientHeight;
  }
  return {width:x,height:y};
}
