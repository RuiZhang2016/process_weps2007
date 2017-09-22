// Browser Detection
browser_name = navigator.appName;
browser_version = parseFloat(navigator.appVersion); 
if (browser_name == "Netscape" && browser_version >= 3.0) 
        { roll = 'true'; }
else if (browser_name == "Microsoft Internet Explorer" && browser_version >= 4.0)
        { roll = 'true'; }
else { roll = 'false'; }

// Preload images, if browser supports mouseovers
if (roll == 'true') {
        var imglist = new Array (
                "images/wandm_nav_skipnav.gif",
                "images/wandm_nav_skipnav.gif",
                "images/wandm_nav_skipnav.gif"
                );
var imgs = new Array();
var count;
if (document.images)
 for (count=0; count<imglist.length; count++)
  {imgs[count]=new Image(); imgs[count].src=imglist[count];}}


// Use this code if you are only doing one mouseover
function msover1(img,ref) { if (roll == 'true') { document.images[img].src = ref; } }
function msout1(img,ref)  { if (roll == 'true') { document.images[img].src = ref; } }

function DOWNLOADPop(what){
window.open(what,'DOWNLOAD','top=10,screenx=10,left=10,screeny=10,width=620,height=412,buttons=no,scrollbars=yes,location=no,menubar=no,resizable=yes,status=no,directories=no,toolbar=no');
}

function clearField(obj){
	obj.value = '';
}

function openPrintWindow(strURL){
window.open(strURL,'PRINT','top=10,screenx=10,left=10,screeny=10,width=620,height=412,buttons=no,scrollbars=yes,location=no,menubar=no,resizable=yes,status=no,directories=no,toolbar=yes');
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//------------------------------------
// These are the dynamic nav functions
//------------------------------------

function showDiv(strDivName, intLeft){
	killDiv();
	var objDiv, objDivParent;

	if(bolCongress && strDivName == 'divname2'){
		try
		{	document.frmCongress.congress.style.visibility = 'hidden'; }
		catch(exception){}
	}
//alert(strDivName)
	if(bolCongress && strDivName == 'divname4'){
		try
		{	document.frmCongress.congress.style.visibility = 'hidden';}
		catch(exception){}
	}
	if(bolEmail && strDivName == 'divname4'){
		document.DataFields.firstname.style.visibility = 'hidden';
		document.DataFields.lastname.style.visibility = 'hidden';
		document.DataFields.street.style.visibility = 'hidden';
	}
	if(bolSearch && strDivName == 'divname4'){
		document.forms[1].keywords.style.visibility = 'hidden';
		document.forms[1].group.style.visibility = 'hidden';
	}
	if (document.all) {
		objDiv = eval('div' + strDivName);
		objDiv.style.top = '17px';
		objDiv.style.visibility = 'visible';	
	}else if (document.getElementById){
		if (strDivName == 'divname3') {
			document.getElementById('emailSubmit').style.visibility = 'hidden';
		}
		document.getElementById('div' + strDivName).style.top = '0px';
		document.getElementById('div' + strDivName).style.visibility = 'visible';
	}else {
		//objDivParent = eval('document.div' + strDivName + 'Mother');
		//objDiv = eval('document.div' + strDivName + 'Mother.document.div' + strDivName);
		//objDiv.left = intLeft;
		//objDiv.visibility = 'visible';
	}
	strCurrentDiv = strDivName;
}

function hideDiv(strDivName){
	strCurrentDiv = strDivName;
	intTimeout = window.setTimeout(killDiv,500);
}

function stopHide(strDivName){
	if(intTimeout){
		clearTimeout(intTimeout)
	}
}

function killDiv(){
	if(bolCongress){
		try
		{	document.frmCongress.congress.style.visibility = 'visible';}
catch(exception){}
	}
	if(bolEmail){
		document.DataFields.firstname.style.visibility = 'visible';
		document.DataFields.lastname.style.visibility = 'visible';
		document.DataFields.street.style.visibility = 'visible';
	}
	if(bolSearch){
		document.forms[1].keywords.style.visibility = 'visible';
		document.forms[1].group.style.visibility = 'visible';
	}
	var objDiv;
	if(strCurrentDiv != 'NA'){
		if (document.all) {
			objDiv = eval('div' + strCurrentDiv);
			objDiv.style.visibility = 'hidden';
		}else if (document.getElementById){
			document.getElementById('div' + strCurrentDiv).style.visibility = 'hidden';
			//document.getElementById('div' + strCurrentDiv).style.left = '1000px';
			document.getElementById('emailSubmit').style.visibility = 'visible';
		}else {
			//objDiv = eval('document.div' + strCurrentDiv + 'Mother.document.div' + strCurrentDiv);
			//objDiv.visibility = 'hidden';	
		}
	}
}