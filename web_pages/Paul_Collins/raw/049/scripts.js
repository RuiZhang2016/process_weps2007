<!--

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

// FUNCTION TO SET DISPLAY PROPERTY ON AN OBJECT
function MM_displayLayers() {
var i,p,v,obj,args=MM_displayLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='block')?'block':(v=='none')?'none':v; }
	//if (checkIt('mac')&&v=='visible') obj.pixelTop = obj.pixelTop ;
    obj.display=v; }
}

function showPersonal() 
{
	if (document.layers) // NS4
	{ 	document.PersonalLayer.visibility = "show";
		document.PersonalLayer.zIndex = "5";
		document.BusinessLayer.zIndex = "1";
		document.BusinessLayer.visibility = "hidden";						
	 } 
	else if (document.all) // IE3-4
	{ 	document.all.PersonalLayer.style.visibility = "visible";
		document.all.PersonalLayer.style.zIndex = "5";
		document.all.BusinessLayer.style.zIndex = "1";		
		document.all.BusinessLayer.style.visibility = "hidden";		
	 }	
	else // NS6, IE4+
	{	document.getElementById("PersonalLayer").style.visibility = "visible";
		document.getElementById("PersonalLayer").style.zIndex = "5";
		document.getElementById("BusinessLayer").style.zIndex = "1";		
		document.getElementById("BusinessLayer").style.visibility = "hidden";		
	 }



}

function showBusiness() 
{
	if (document.layers) // NS4
	{ 	document.BusinessLayer.visibility = "show";
		document.BusinessLayer.zIndex = "5";	
		document.PersonalLayer.zIndex = "1";				
		document.PersonalLayer.visibility = "hidden";							
	} 
	else if (document.all) // IE3-4
	{ 	document.all.BusinessLayer.style.visibility = "visible";
		document.all.BusinessLayer.style.zIndex = "5";
		document.all.PersonalLayer.style.zIndex = "1";				
		document.all.PersonalLayer.style.visibility = "hidden";					
	}	
	else //NS6, IE4+
	{	document.getElementById("BusinessLayer").style.visibility = "visible";
		document.getElementById("BusinessLayer").style.zIndex = "5";
		document.getElementById("PersonalLayer").style.zIndex = "1";			
		document.getElementById("PersonalLayer").style.visibility = "hidden";		
	}
}
var newwin;
function launchwin(winurl,winname,winfeatures)
{
	if (winfeatures == null) {
		winfeatures = 'height=500,width=500,resizable=yes,scrollbars=yes,toolbar=yes';
	}
	newwin = window.open(winurl,winname,winfeatures);
}

function getRef(obj){
	return (typeof obj == "string") ?
		 document.getElementById(obj) : obj;
}
function changeStyPHand(classpassed){
	getRef(document.pHeader).className=classpassed;
}
function changeStyPDefault(classpassed){
	getRef(document.pHeader).className=classpassed;
}
function changeStyBHand(classpassed){
	getRef(document.bHeader).className=classpassed;
}
function changeStyBDefault(classpassed){
	getRef(document.bHeader).className=classpassed;
}
function flip(name,src) {
	if (document.images)
		document.images[name].src = src;
}

//-->