// Code to display window every time broser opens this page language="JavaScript1.2"

var ie=document.all
var dom=document.getElementById
var ns4=document.layers
var ns6=document.getElementById&&!document.all
var calunits=document.layers? "" : "px"

var bouncelimit=32 //(must be divisible by 8)
var direction="up"
var lpos

function initbox(){
if (!dom&&!ie&&!ns4)
return
crossobj=(dom)?document.getElementById("dropin").style : ie? document.all.dropin : document.dropin
scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
crossobj.top=scroll_top-250+calunits
crossobj.visibility=(dom||ie)? "visible" : "show"
dropstart=setInterval("dropin()",50)
}

function dropin(){
scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
if (parseInt(crossobj.top)<lpos)
crossobj.top=parseInt(crossobj.top)+25+calunits
else{
clearInterval(dropstart)
bouncestart=setInterval("bouncein()",50)
}
}

function bouncein(){
crossobj.top=parseInt(crossobj.top)-bouncelimit+calunits
if (bouncelimit<0)
bouncelimit+=8
bouncelimit=bouncelimit*-1
if (bouncelimit==0){
clearInterval(bouncestart)
}
}

function dismissbox(){
if (window.bouncestart) clearInterval(bouncestart)
crossobj.visibility="hidden"
}

function truebody(){
return (document.compatMode!="BackCompat")? document.documentElement : document.body
}
function delay(x)
{
	var d=new Date()
	d=d.getSeconds()+x
	if (d>=60) d=d-60
	while (true)
	{
		var d1=new Date()
		if(d==d1.getSeconds())
			break;
	}	
}
function SetCooKie(name,value)
{
	var argv=SetCooKie.arguments;
	var argc=SetCooKie.arguments.length
	var expires=(argc>2) ? argv[2] : null
	var path=(argc>3) ? argv[3] : null
	var domain=(argc>4) ? argv[4] : null
	var secure=(argc>5) ? argv[5] : false
	document.cookie=name + "=" +escape(value) + 
	((expires==null) ? "" :( ";expires=" + expires.toGMTString())) +
	((path==null) ? "" :( ";path=" + path)) +
	((domain==null) ? "" :( ";domain=" + domain)) +
	((secure==true) ? "; secure " : "")
	
}
function DeleteCookie (name,path,domain) 
{
if (GetCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

/*function GetCookie(name)
{	
	var arg=name + "=" 
	var alen=arg.length
	var clen=document.cookie.length
	var i=0
	while((i<clen) && (i>=0))
	{
		
		var j=i+alen
		if (document.cookie.substring(i,j)==arg)
		{
			//getCookieVal(j)
			return true;
		}
		i=document.cookie.indexOf(" ", i) + i;
		if ( i==0) break;
	}
	return false;
}*/

function GetCookie(name)
{	
	var arg=name + "=" 
	var alen=arg.length
	var clen=document.cookie.length
	var i=0,prev=0;next=0;
	var retval=false;
	while(true)
	{
		next=document.cookie.indexOf("; ", prev);
		if(next<=0)
		{
			var chkval=document.cookie.substring(prev,clen);
			var eqpos=chkval.indexOf("=", 0);
			if(eqpos>0)
			{
				if((chkval.substring(0,eqpos+1))==arg)
				{
					retval=true;
					break;
				}	
			}	
			break;				
		}
		if(next>0)
		{
			var chkval=document.cookie.substring(prev,next);
			var eqpos=chkval.indexOf("=", 0);
			if(eqpos>0)
			{
				if((chkval.substring(0,eqpos+1))==arg)
				{
					retval=true;
					break;
				}	
			}
			
		}
		prev=next+2;	
	}
	return retval;
}


function getCookieVal(offset)
{
	var endstr=document.cookie.indexOf(";",offset)
	if(endstr==-1)
	{
		endstr=document.cookie.length;
	}
	return unescape(document.cookie.substring(offset,endstr));

}
function Delaynew()
{
	if (!ns4)
	{	
		document.getElementById("dropin").style.visibility="visible";
			
	}	
	else
		document.dropin.visibility="show";
	
	return;
}


function DropIn(main_bgcolor,main_texttype,main_textsize,main_textcolor,textbar,height,width,top,left,bordercolor,borderstyle,borderwidth,sec,showeverytime)
{
	lpos = top
	ans="no"
	//delay(sec)
	var chkshow=false;
	if (!showeverytime)
	{
		chkshow=GetCookie('popDropin');
		if (!chkshow)
		{
			SetCooKie('popDropin','added')
		}
	}
	else
	{
		DeleteCookie('popalert1','','')
	}
		
	
	if(!chkshow)
	{ 
		if (ns4)
		{
			templayer=document.layers[0]				
			templayer.left=left				
			templayer.top=top
			templayer.width=width
			templayer.height=height
		}
		else if (ns6)
		{
			document.getElementById("tbl").style.border = bordercolor+' '+borderwidth+'px '+borderstyle
			document.getElementById("dragtext").innerHTML=textbar
				
			document.getElementById("dropin").style.height=height +'px'
			document.getElementById("dropin").style.width =width +'px'
			document.getElementById("dropin").style.left =left +'px'
			document.getElementById("dropin").style.top =top +'px'
			document.getElementById("dragtext").style.backgroundColor=main_bgcolor
			document.getElementById("dragtext").style.color = main_textcolor
			document.getElementById("dragtext").style.fontFamily = main_texttype
			document.getElementById("dragtext").style.fontSize = main_textsize+'px'
		}
		else 
		{
			document.getElementById("tbl").style.border = bordercolor+' '+borderwidth+'px '+borderstyle
			document.getElementById("dragtext").innerHTML=textbar
				
			document.getElementById("dropin").style.height=height +'px'
			document.getElementById("dropin").style.width =width +'px'
			document.getElementById("dropin").style.left =left +'px'
			document.getElementById("dropin").style.top =top +'px'
			document.getElementById("dragtext").style.backgroundColor=main_bgcolor
			document.getElementById("dragtext").style.color = main_textcolor
			document.getElementById("dragtext").style.fontFamily = main_texttype
			document.getElementById("dragtext").style.fontSize = main_textsize+'px'
		}
		setTimeout("initbox()",(sec*1000));	
	}
}
//}




//window.onload=initbox