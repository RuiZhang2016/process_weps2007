/*
	domCollapse()
	written by Christian Heilmann
	with help from Scott Benish and Craig Saila of the webdesign-L list
	homepage: http://www.onlinetools.org/tools/domcollapse.php

	Necessary Variables:

	normaltext: the text content of the link in the <p></p> when the div is not shown 
	normalcolour: the colour of the text in the <p></p> when the div is not shown 	
	normalbackground: the background of the <p></p>	when the div is not shown 
	highlighttext: the text content of the link in the <p></p> when the div is shown 
	highlightcolour: the colour of the text in the <p></p> when the div is shown 	
	highlightbackground: the background of the <p></p>	when the div is shown 
	
	the texts are normal text, HTML tags will not be rendered as such! 
	the colours can be any valid CSS colour definition.

	function domCollapse (which)
	Written by Christian Heilmann
	- collapses or displays <div></div> elements in the "collapse_div" div of the document.
	- changes the colour and the background of the corresponding <p></p>
	element in the "collapse_div" div.
	- changes the text content of the <a></a> inside the <p></p>
	
	Variables:
	which:	integer > shows or collapses the <div></div> with this number in the tree.
			dispall > shows all divs 
			hideall > collapses all divs
*/
function domCollapse(which){
	if (document.getElementById && document.createTextNode){
		if (which=="dispall") {domCollapseAll(1);}
		else if (which=="hideall") {domCollapseAll(0);}
		else {
			m=document.getElementById("collapse_div");
			trig=m.getElementsByTagName("div").item(which).style.display;
			t=m.getElementsByTagName("h2").item(which);
			h=t.getElementsByTagName("a").item(0).firstChild;
			if (trig=="block") trig="none";
			else if (trig=="" || trig=="none") trig="block";
			if (trig=="none"){
				h.nodeValue=h.nodeValue.replace(highlighttext,normaltext);
				t.style.background=normalbackground;
				t.style.color=normalcolour;
				}
			else {
				h.nodeValue=h.nodeValue.replace(normaltext,highlighttext);
				t.style.background=highlightbackground;
				t.style.color=highlightcolour;
				}
			m.getElementsByTagName("div").item(which).style.display=trig;
		}
	}
} 

/*
	function domCollapseAll(show)
	Written by Christian Heilmann
	- collapses or displays all <div></div> elements in the "collapse_div" div of the document.
	- changes the colour and the background of all <p></p> elements in the "collapse_div" div.
	- changes the text content of the <a></a> inside the <p></p> elements
	
	Variables:
	show:	0 > collapse all divs,set all colours to normal
			1 > show all divs,set all colours to highlight
*/
function domCollapseAll(show){
	if (document.getElementById && document.createTextNode){
		m=document.getElementById("collapse_div");
		for (i=0;i<m.getElementsByTagName("div").length;i++){
			t=m.getElementsByTagName("h2").item(i);
			h=t.getElementsByTagName("a").item(0).firstChild;
			if (show==1){
				h.nodeValue=h.nodeValue.replace(normaltext,highlighttext);
				t.style.background=highlightbackground;
				t.style.color=highlightcolour;
				m.getElementsByTagName("div").item(i).style.display="block";
			}
			else {
				h.nodeValue=h.nodeValue.replace(highlighttext,normaltext);
				t.style.background=normalbackground;
				t.style.color=normalcolour;
				m.getElementsByTagName("div").item(i).style.display="none";
			}
		}
	}
}
// Adding backwards compatibility
if (document.getElementById && document.createTextNode){
	document.write('<style type="text/css">#collapse_div div{display:none;}</style>')
	}

//written by JT, 3/31/04
function domCollapseById(divId,override)
	{
		var arrDivs = divId.split(",");
		//var cDate	= new Date();
		var cDate	= new Date("03/04/2074");
		//alert(nDate);
		for (i=0;i<arrDivs.length;i++)
			{
				var oppDisplay = "block";
				if (override=="EXPAND")
					{
						oppDisplay = "block";
						setCookie("shohide_" + arrDivs[i],"block",cDate,"/","educause.edu");
					}
				else if (override=="COLLAPSE") 
					{
						oppDisplay = "none";
						//setCookie("shohide_" + arrDivs[i],"none");
						setCookie("shohide_" + arrDivs[i],"none",cDate,"/","educause.edu");
					}
				else
					{
						if (document.getElementById(arrDivs[i]).style.display == "block")
							{
								oppDisplay = "none";
								//setCookie("shohide_" + arrDivs[i],"none");
								setCookie("shohide_" + arrDivs[i],"none",cDate,"/","educause.edu");
							}
						else
							{
								//setCookie("shohide_" + arrDivs[i],"block");
								setCookie("shohide_" + arrDivs[i],"block",cDate,"/","educause.edu");
							}
					}
				document.getElementById(arrDivs[i]).style.display = oppDisplay;
			}
	}
	
function domCollapseAllItems(newDisplay)
	{
		alert("Still thinking.  I have no idea what to do here, and I'm tired.  I'll try again tomorrow. \r\n\r\n~JT");
	}