// ----------------------------------------------
// This function dynamically generates flash file
// parameters.
// -----------------------------------------------
function viewFlash(src, w, h, loop, play)
{
   var width = parseInt(w);
   var height = parseInt(h);

//alert('adWidth = '+width+ '\n Height = '+height);

   eval("win = window.open('','Flash', 'toolbar=0,scrollbars=0,location=0,status=0,resizable=1,menubar=0,width="+width+",height="+height+"');");
   win.document.writeln('<html>');
   win.document.writeln('<head><title>Flash Movie</title></head>');
   win.document.writeln('<body>');

   // for IE users use <object> tag
   objectTag = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0"';
   win.document.write(objectTag);
   win.document.write(' width="'+width+'"');
   win.document.writeln(' height="'+height+'">');
   win.document.writeln('<param name="movie" value="'+src+'">');
   win.document.writeln('<param name="loop" value="'+loop+'">');
   win.document.writeln('<param name="play" value="'+play+'">');

    // for Netscape users use <embed> tag
   win.document.writeln('<embed src="'+src+'" loop="'+loop+'" play="'+play+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" />'); 
   win.document.writeln('</object>');
   win.document.writeln('</body></html>');

}

// ----------------------------------------------
// This function dynamically generates a chat 
// pop-up. (ASV)
// -----------------------------------------------
function viewChat(instance_id, url)
{
   props = 'toolbar=0,scrollbars=0,location=0,status=0,resizable=1,menubar=0,width=584,height=410';
   win = window.open('','Chat',props);
   win.document.writeln('<html>');
   win.document.writeln('<head><title>Chat Room</title></head>');
   win.document.writeln('<body>');
   win.document.writeln('<applet codebase="'+url+'" archive="multichat.jar" CODE="GUIClient.class" width="562" height="385" align="BOTTOM">');
   win.document.writeln('<param name="CABBASE" value="multichat.cab">');
   win.document.writeln('<param name="roomid" value="'+instance_id+'">');
   win.document.writeln('</applet>');
   win.document.writeln('</body></html>');
}

//----------------------------------------------------
// Create a new pop up window for a given URL and type
//----------------------------------------------------
function popUp(URL, type) 
{
    switch(type)
    {
	 case "guestbook":
	    width = 675;
	    height = 500;
	    break;	    
	 case "forum":
	    width = 675;
	    height = 500;
	    break;	    
         default:
            width = 550;
            height = 580;
   }

   var token = URL.indexOf('?') > -1 ? '&amp;' : '?';
   uniqueId = genUniqueId();
   URL=URL+genUniqueParam(token);

   var leftPosition  = (screen.width - width - 20) / 2;
   var topPosition = (screen.height - height) / 4;

   //open centered
   eval("win = window.open(URL, '"+type+"', 'toolbar=0,scrollbars=1,location=0,status=1,resizable=1,menubar=0,width="+width+",height="+height+",left="+leftPosition+",top="+topPosition+"');");

   if (parseInt(navigator.appVersion) >= 4) 
   { 
      win.window.focus(); 
   }
}

// ----------------------
// Generate Unique Id
// ----------------------
function genUniqueId()
{
   day = new Date();
   return day.getTime();
}

// -------------------------------------------------
// Generate Unique parameter to be appended to the URL
// This will allow us to realod the HTML from the server
// -------------------------------------------------
function genUniqueParam(parameter)
{
   return parameter+'unique_id='+genUniqueId();
}

//
// Display the target image for this thumbnail
//
function displayThumb(src, width, height, title)
{
   var winWidth = 650;
   var winHeight = 510;

   eval("win = window.open('','Thumb', 'toolbar=0,scrollbars=1,location=0,status=0,resizable=1,menubar=0,width="+winWidth+",height="+winHeight+"');");

   // clear the content of the document
   win.document.open();

   win.document.writeln('<html>');

   if(null != title && title != "")
   {
       win.document.writeln('<head><title>' + title + '</title></head>');
   }
   else
   {
       win.document.writeln('<head><title>Thumbnail Image</title></head>');
   }
   win.document.writeln('<body>');

   win.document.writeln('<center><table border="0">');
   if (width == 0)
   {
      win.document.writeln('<tr><td align="center"><img src="'+src+'"></td></tr>');
   }
   else if (height == 0)
   {
      win.document.writeln('<tr><td align="center"><img width="'+width+'" src="'+src+'"></td></tr>');   
   } 
   else
   {
      win.document.writeln('<tr><td align="center"><img width="'+width+'" height="'+height+'" src="'+src+'"></td></tr>');   
   } 

   if(null != title && title != "")
   {
       win.document.writeln('<tr><td align="center">'+title+'</td></tr>');
   }
   win.document.writeln('</table></center>');

   win.document.writeln('</body></html>');
}

    function genURL(action,formname)
    {
		var sa = document.getElementById(formname).elements[0].value;
		var cy = document.getElementById(formname).elements[1].value;
		var st = document.getElementById(formname).elements[2].value;
		var pc = document.getElementById(formname).elements[3].value;
		var ct = document.getElementById(formname).elements[4].value;
		var lat =document.getElementById(formname).elements[5].value;
		var lng =document.getElementById(formname).elements[6].value;
		var uid =document.getElementById(formname).elements[7].value;
		var wid =document.getElementById(formname).elements[8].value;
		if(pc=="")
		{
			if(cy=="" || st=="")
			{
				alert("Type a City and State, or a Postal/ZIP Code, and then click Continue.");
				return false;
			}
		}
		var url = action+"&street_address="+sa+"&city="+cy+"&state="+st+"&postal_code="+pc+"&country="+ct+"&latitude="+lat+"&longitude="+lng+"&userid="+uid+"&website_id="+wid;
		popUp(url);

   }


//-----------
// BEGIN SCRIPTS FOR NAV MENUS
//-----------

// MENU GLOBALS

//var navcontname='navcontainer';
var navcontname;
var menumainwidth=100;
var navmode=0;
// 0 is right 1 is left
var fldr=0;
var fldrorg=0;
//containing menu ids
var menuids=new Array();

//item that opens this menu
var menuparitem=new Array();
var menuparindex=new Array();
var itemchildren=new Array();
var timerID;
var menuactv=0;


//item ids
var itemids=new Array();
var itemparids=new Array();
var itemchild=new Array();
var linkarr=new Array();

var xSize=0;
var ySize=0;


//index to menuids and menuparitem arrays
var menuids_ct=1;
//index to itemids and itemmenu arrays
var itemids_ct=0;
var step_ct=0;

var nodeposition=new Array();
var nodelength=new Array();

var absdepth=0;
var deptharr=new Array();

function parseMenus() {

	if (document.getElementById('nav-left')) {
		navmode=0;
		fldr=0;
	} else if (document.getElementById('nav-right')) {
		navmode=1;
		fldr=1;
	} else if (document.getElementById('nav-top')) {
		navmode=2;
		fldr=0;
	}
	fldrorg=fldr;

navcontname=document.getElementById('navcontainer');
menuids[0]=navcontname;
menuparitem[0]=navcontname;
deptharr[0]=navcontname;
nodeposition[0]=0;
nodelength[0]=deptharr[0].childNodes.length;



do {

 if (deptharr[absdepth].childNodes[nodeposition[absdepth]].tagName=="DIV") {
      if (deptharr[absdepth].childNodes[nodeposition[absdepth]].className.indexOf("submenu")!=-1) {
        menuids[menuids_ct]=deptharr[absdepth].childNodes[nodeposition[absdepth]];
        deptharr[absdepth+1]=menuids[menuids_ct];
        menuparitem[menuids_ct]=itemids[itemids_ct-1];
        menuparindex[menuids_ct]=itemids_ct;
        itemchildren[menuids_ct]=menuids[menuids_ct];
        itemchild[itemids_ct-1]=menuids[menuids_ct];
	
		//linkarr[itemids_ct].className="tertiary linkHasSub"; // use to apply arrows to subs using class "linkHasSub"
		
        rolladd="rollMenu(" + menuids_ct +")";
		rolladdout="rollMenu(0)";
		
        eval('menuparitem[menuids_ct].onmouseover=function(){' + rolladd + '}');
		eval('menuparitem[menuids_ct].onmouseout=function(){' + rolladdout + '}');
        nodelength[absdepth+1]=deptharr[absdepth].childNodes[nodeposition[absdepth]].childNodes.length-1;
        absdepth++;
        nodeposition[absdepth]=-1;
        menuids_ct++;
} else {

     itemids[itemids_ct]=deptharr[absdepth].childNodes[nodeposition[absdepth]];
     itemparids[itemids_ct]=menuids[menuids_ct-1];
     nodelength[absdepth+1]=deptharr[absdepth].childNodes[nodeposition[absdepth]].childNodes.length-1;
     absdepth++;
     deptharr[absdepth]=itemids[itemids_ct];
     nodeposition[absdepth]=-1;
  	 itemids_ct++;
	 }

 } else if (deptharr[absdepth].childNodes[nodeposition[absdepth]].tagName=="A") {
	 deptharr[absdepth].childNodes[nodeposition[absdepth]].id="sublink" + itemids_ct;
     linkarr[itemids_ct]=deptharr[absdepth].childNodes[nodeposition[absdepth]];
	}

    nodeposition[absdepth]++;
    if (nodeposition[absdepth]>nodelength[absdepth]) {
    do {
        absdepth--;
        nodeposition[absdepth]++;
    } while (nodeposition[absdepth]>nodelength[absdepth]);
    }

} while (nodeposition[0]<nodelength[0]);


}


function positionMenus() {

//menumainwidth=document.getElementById('navcontainer').clientWidth;
menumainheight=document.getElementById('navcontainer').clientHeight;

// Nav-Left
if (navmode==0) {
	
	for (i=1; i<menuids.length; i++) {

		ofst=0;
		ofsl=0;
		ofsw=0;
		
		menuids[i].style.position="absolute";
	    menuids[i].style.zIndex="10000" + i;
		ofsw=menuids[i].clientWidth;
		menuids[i].style.width=ofsw;
		
		ofst=linkarr[menuparindex[i]].offsetTop;
		ofsl=menuparitem[i].offsetLeft + menuparitem[i].clientWidth;
		
		edgeAdjuster(ofsl,ofst,ofsw,i);
	}
	
// Nav-Right	
} else if (navmode==1) {
	
	for (i=1; i<menuids.length; i++) {
		ofst=0;
		ofsl=0;
		ofsw=0;
		
		menuids[i].style.position="absolute";
		menuids[i].style.zIndex="10000" + i;
		ofsw=menuids[i].clientWidth;
		menuids[i].style.width=ofsw;
		
		ofst=linkarr[menuparindex[i]].offsetTop;
		ofsl=menuparitem[i].offsetLeft - menuids[i].clientWidth;

		edgeAdjuster(ofsl,ofst,ofsw,i);
	}

// Nav-Top
} else if (navmode==2) {
 	
 	for (i=1; i<menuids.length; i++) {
	     ofst=0;
 		 ofsl=0;
 		 ofsw=0;
 		 
    	 menuids[i].style.zIndex="10000" + i;
 		 ofsw=menuparitem[i].clientWidth;
 		 
 		 if (menuparitem[i].offsetParent.id) {
 		 ofst=menumainheight + 2;
	     } else {
	     ofst=linkarr[menuparindex[i]].offsetTop;
         ofsl=menuparitem[i].offsetLeft + menuparitem[i].clientWidth;
	     }
	     
	     
	     edgeAdjuster(ofsl,ofst,ofsw,i);
	}
 }

}

function edgeAdjuster(xfs,yfs,wdt,i) {
  
  getPageSizes();
  
        xpg=0;
		ypg=0;
		myobj=menuids[i];
		do {
		xtest = myobj.offsetLeft;
		ytest = myobj.offsetTop;

		if (myobj.offsetLeft>0) xpg += myobj.offsetLeft;
		if (myobj.offsetTop>0) ypg += myobj.offsetTop;
		myobj= myobj.offsetParent;

		} while ((myobj.tagName!="BODY")&&(myobj.tagName!="HTML"));
  
if((navmode==0)||(navmode==2)) {
  if (fldr==0) {
  if ((xpg + xfs + wdt)>xSize) {
  
  if(xpg>wdt) xfs-=wdt*2;
 
  fldr=1;
  }
  } else {
  if ((xpg -xfs)<0) {
  
  fldr=0;
  } else {
  
  xfs-=wdt*2;
  
  }

  }
}

if (navmode==1) {

	 if (fldr==0) {
  if ((xpg + wdt*2)>=xSize) {
   
  fldr=1;
  } else {
  
  xfs+=wdt*2;
  
  }
  
  
  } else {
  if ((xpg-wdt)<=-1) {

  xfs+=wdt*2;
  fldr=0;
  
  }
  
  }

}

  if(navmode==2) {
  
  if(menuids[i].offsetParent.offsetParent.id!="navcontainer") {
  menuids[i].style.left=xfs + "px";
  }
  
  } else {
  
  menuids[i].style.left=xfs + "px";
  }	
  menuids[i].style.top=yfs + "px";
  menuids[i].style.visibility="hidden";
  
}

//--end  function menuSetPositions() --

function getPageSizes() {
	if(typeof(window.innerWidth)=='number') {
    //IE
    xSize=window.innerWidth;
    ySize=window.innerHeight;
  } else if(document.documentElement &&
      (document.documentElement.clientWidth||document.documentElement.clientHeight)) {
    //IE 6 xhtml
    xSize=document.documentElement.clientWidth;
    ySize=document.documentElement.clientHeight;
  } else if(document.body&&(document.body.clientWidth||document.body.clientHeight)) {
    //IE 4 5 or 6 standard
    xSize=document.body.clientWidth;
    ySize=document.body.clientHeight;
  }
}


function processMenus() {
	parseMenus();
	positionMenus();
}

function resetMenus() {
	
	for (i=1; i<menuids.length; i++) {
	
  		menuids[i].style.left= "0px";
 	
	}
	fldr=fldrorg;
	positionMenus();

}

function rollMenu(ref)
{
olx=xSize;
oly=ySize;

getPageSizes();

if ((olx!=xSize)||(oly!=ySize)) resetMenus();

  if(ref>0) {
	clearTimeout(timerID);
	turnOff(ref);
    menuactv=1;
    itemchildren[ref].style.visibility="visible";
  }
  else
  {
    menuactv=0;
    clearTimeout(timerID);
    timerID = setTimeout('turnOff()', 300);
  }
}

function turnOff(ref)
{
 if (menuactv==0) {
   for (i=0; i<itemchildren.length; i++) {
        if ((itemchildren[i]) && (i!=ref)) itemchildren[i].style.visibility="hidden";
   }
  }

}

//-----------
// END SCRIPTS FOR NAV MENUS
//-----------
