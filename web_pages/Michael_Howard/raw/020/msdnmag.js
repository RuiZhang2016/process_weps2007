function PrintButtonClick()
{
	if( typeof(frmRatings)=="object" ){
		var oPrint = frmRatings.document.getElementById("Print");
		if(oPrint != null) oPrint.click();
	}
	else
	{
		OnPrintPage();
	}
}
function ToggleMenu(oButton, oItems)
{
	if (oItems.style.display == "none")	
	{
		oItems.style.display = "block";
		oButton.src = "/msdnmag/images/minus.gif";
	}	
	else 
	{
		oItems.style.display = "none";
		oButton.src = "/msdnmag/images/plus.gif";
	}
	return;
}

function OpenMenu(oButton, oItems)
{
	if (oItems.style.display == "none")	
	{
		oItems.style.display = "block";
		oButton.src = "/msdnmag/images/minus.gif";
	}
	return;
}

function OnPrintPage(){
	var oWnd = window;
	var oDoc = oWnd.document;
	var strLoc = "default.aspx?print=true&loc=" + getParameter('loc');
	if (window.navigator.userAgent.indexOf("MSIE ")!=-1 && navigator.appVersion.substr(0, 1) >= 4){
		if( oWnd.printHiddenFrame == null){
			oDoc.body.insertAdjacentHTML("beforeEnd", "<iframe name='printHiddenFrame' width='0' height='0'></iframe>");
			framedoc = oWnd.printHiddenFrame.document;
			framedoc.open();
			framedoc.write(
				"<frameset name=test onload='printMe.focus();printMe.print();' rows=\"100%\">" +
				"<frame name=printMe src=\""+strLoc+"\">" +
				"</frameset>");
			framedoc.close();
		}
		else{
			oWnd.printHiddenFrame.printMe.focus();
			oWnd.printHiddenFrame.printMe.print();
		}
	}		
	else{
		oWnd.location.href = strLoc;
	}
	return true;
}

function OpenUrl(url)
{
	var childWin;
	childWin = window.open(url,'window','height=300,width=640,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes');
	childWin.focus();
	//return false;
}

function getParameter( parameterName ) {
  var queryString = window.location.search.substring(1).toLowerCase();
  //alert(queryString);
  //if (queryString.length==0) {return "null";}
  var parameters = new Array();
  parameters = queryString.split('&');
  for(var i = 0; i < parameters.length; i++) {
    //alert(parameters[i]);
    //alert(parameters[i].indexOf(parameterName));
    if (parameters[i].indexOf(parameterName.toLowerCase())>=0) {
      //alert(parameters[i]);
      var parameterValue = new Array();
      parameterValue = parameters[i].split('=');
      return parameterValue[1];
    }
  }
  return "null";
}


var x=0;
function change()
{
	var coll = document.body.getElementsByTagName("DIV");
	var coll2 = document.body.getElementsByTagName("IMG");
	if (x!=1)
	{
		for (i=0; i<coll.length; i++)
		{
			if (coll[i].style.display=='none' && coll[i].id.indexOf("menu")>-1)
				coll[i].style.display='block';
		}
		button1.value=" Collapse All "
		x=1
		for (i=0; i<coll2.length; i++)
		{
			if (coll2[i].id.indexOf("btns")>-1)
				coll2[i].src='/msdnmag/images/minus.gif';
		}
	}
	else 
	{
		for (i=0; i<coll.length; i++)
		{
			if (coll[i].style.display=='block' && coll[i].id.indexOf("menu")>-1)
				coll[i].style.display='none';
		}
		button1.value=" Expand All "
		x=0
		for (i=0; i<coll2.length; i++)
		{
			if (coll2[i].id.indexOf("btns")>-1)
				coll2[i].src='/msdnmag/images/plus.gif';
		}
	}
}

/*
function AuthorSearch(author)
{
	var reSpace = /\s/
	author=author.replace(reSpace,"%20");
	window.location.href="/msdnmag/find/default.aspx?type=Au&phrase=" + author;
}

function Go(value)
{
   if(value!="0" && value!=null)
   {
      return true;     
   }
   else
   {
      return false;
   }
}

function Jump(value)
{
	var re = /\d{6}/

   if(re.test(value)&&value.length==6)
   {
      return true;     
   }
   else
   {
		alert("Please enter a valid QuickJump Code");
		return false;
   }
}
*/


function ToggleImages(hideImage, showImage)
{
	if (document.getElementById)
	{
		var hImage=document.getElementById(hideImage)
			hImage.style.display=(hImage.style.display!="block")? "block" : "none"		

		var sImage=document.getElementById(showImage)
			sImage.style.display=(sImage.style.display!="none")? "none" : "block"		

	}
}


//function Default_Clicked(checked,lang)
//{
//if(checked == true)
//{
//Set_Cookie('msdnmagLoc', lang, 3650, "/","","");
//var lbl = document.getElementById('locBar1_lblLocal');
//lbl.innerHTML = "Default language set!";
//document.forms['locBar'].locBar1_chkDefault.disabled = true;
//}
//}

//// this deletes the cookie when called
//function Delete_Cookie( name, path, domain ) {
//if ( Get_Cookie( name ) ) document.cookie = name + "=" +
//( ( path ) ? ";path=" + path : "") +
//( ( domain ) ? ";domain=" + domain : "" ) +
//";expires=Thu, 01-Jan-1970 00:00:01 GMT";
//}



//function Set_Cookie( name, value, expires, path, domain, secure ) 
//{
//// set time, it's in milliseconds
//var today = new Date();
//today.setTime( today.getTime() );

///*
//if the expires variable is set, make the correct 
//expires time, the current script below will set 
//it for x number of days, to make it for hours, 
//delete * 24, for minutes, delete * 60 * 24
//*/
//if ( expires )
//{
//expires = expires * 1000 * 60 * 60 * 24;
//}
//var expires_date = new Date( today.getTime() + (expires) );

//document.cookie = name + "=" +escape( value ) +
//( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
//( ( path ) ? ";path=" + path : "" ) + 
//( ( domain ) ? ";domain=" + domain : "" ) +
//( ( secure ) ? ";secure" : "" );
//}
//	
//	

//function getposOffset(overlay, offsettype, width){
////alert(overlay.offsetWidth);
//var totaloffset=(offsettype=="left")? overlay.offsetWidth - width : overlay.offsetTop + 20;
//var parentEl=overlay.offsetParent;
//while (parentEl!=null){
//totaloffset=(offsettype=="left")? parentEl.offsetLeft+totaloffset : totaloffset+parentEl.offsetTop;
//parentEl=parentEl.offsetParent;
//}
//return totaloffset;
//}

//function overlay(curobj, subobj){
//if (document.getElementById){
//var subobj=document.getElementById(subobj);
//var w = parseInt(subobj.style.width);
//subobj.style.left=getposOffset(curobj, "left", w)+"px";
//subobj.style.top=getposOffset(curobj, "top", w)+"px";
//subobj.style.display="block";
//return false
//}
//else
//return true
//}

//function overlayclose(subobj){
//document.getElementById(subobj).style.display="none";
//}

// ----- Popup Control ---------------------------------------------------------

function at_display(x)
{
  win = window.open();
  for (var i in x) win.document.write(i+' = '+x[i]+'<br>');
}

// ----- Show Aux -----

function at_show_aux(parent, child)
{
  var p = document.getElementById(parent);
  var c = document.getElementById(child);

  var top  = (c["at_position"] == "y") ? p.offsetHeight+2 : 0;
  var left = (c["at_position"] == "x") ? p.offsetWidth +2 : 0;

  for (; p; p = p.offsetParent)
  {
    top  += p.offsetTop;
    left += p.offsetLeft;
  }

  c.style.position   = "absolute";
  c.style.top        = top +'px';
  c.style.left       = left+'px';
  c.style.visibility = "visible";
}

// ----- Show -----

function at_show()
{
  p = document.getElementById(this["at_parent"]);
  c = document.getElementById(this["at_child" ]);

  at_show_aux(p.id, c.id);

  clearTimeout(c["at_timeout"]);
}

// ----- Hide -----

function at_hide()
{
  c = document.getElementById(this["at_child"]);

  c["at_timeout"] = setTimeout("document.getElementById('"+c.id+"').style.visibility = 'hidden'", 333);
}

// ----- Click -----

function at_click()
{
  p = document.getElementById(this["at_parent"]);
  c = document.getElementById(this["at_child" ]);

  if (c.style.visibility != "visible") at_show_aux(p.id, c.id);
  else c.style.visibility = "hidden";

  return false;
}

// ----- Attach -----

// PARAMETERS:
// parent   - id of visible html element
// child    - id of invisible html element that will be dropdowned
// showtype - "click" = you should click the parent to show/hide the child
//            "hover" = you should place the mouse over the parent to show
//                      the child
// position - "x" = the child is displayed to the right of the parent
//            "y" = the child is displayed below the parent
// cursor   - Omit to use default cursor or check any CSS manual for possible
//            values of this field

function at_attach(parent, child, showtype, position, cursor)
{
  p = document.getElementById(parent);
  c = document.getElementById(child);

  p["at_parent"]     = p.id;
  c["at_parent"]     = p.id;
  p["at_child"]      = c.id;
  c["at_child"]      = c.id;
  p["at_position"]   = position;
  c["at_position"]   = position;

  c.style.position   = "absolute";
  c.style.visibility = "hidden";

  if (cursor != undefined) p.style.cursor = cursor;

  switch (showtype)
  {
    case "click":
      p.onclick     = at_click;
      p.onmouseout  = at_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      break;
    case "hover":
      p.onmouseover = at_show;
      p.onmouseout  = at_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      break;
  }
}