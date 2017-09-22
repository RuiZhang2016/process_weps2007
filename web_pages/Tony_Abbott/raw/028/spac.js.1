// ------------------------------------------------------------------------------------------------
// SPAC.JS (NineMSN Australia) - Copyright (c) 2000-2001 Engage, Inc. All Rights Reserved.// 
// (based on Generic Client 1.11 merged with Pacfusion 1.2 size fixes)
//// $Header: /9msnshared/spac.js,v 1.3 2006/06/20 14:43:11 pdwalker Exp $
// ------------------------------------------------------------------------------------------------
var spac_adServer = "http://direct.ninemsn.com.au";
var spac_autoPageID = true;
var spac_pageID = spac_getUniqueValue();
var spac_Keyword1 = "google"
var spac_SpeedThreshold = 112
var spac_cookie_speed = GetCookie('ConnectionSpeedText');
var spac_referral = document.referrer;
var spac_useragent = navigator.userAgent;
var spac_has_sbk_header;

if (spac_referral == null) {spac_referral = "";}
else {spac_referral = spac_referral.toLowerCase();}

if (spac_useragent == null) {spac_useragent = "";}
else {spac_useragent = spac_useragent.toLowerCase();}

function getMediaOneAdcode(adcode) {
var aamszRegEx = /AAMSZ=BANNER/i;
var mo_adcode = adcode.replace(aamszRegEx,"AAMSZ=PLATFORMNINE");
var moRegEx = /AAMSZ=PLATFORMNINE/i;
if ((spac_has_sbk_header == undefined || spac_has_sbk_header == null || spac_has_sbk_header == false) && moRegEx.test(mo_adcode)) {
return spac_getAdHTML(mo_adcode);
} else {
return "";
}
}
function spac_writeAd(aTargetParams){
if (spac_cookie_speed != null) {
if (parseInt(spac_cookie_speed) >= spac_SpeedThreshold) {aTargetParams=aTargetParams+"/speed=broadband";}
else if(parseInt(spac_cookie_speed) < spac_SpeedThreshold) {aTargetParams=aTargetParams+"/speed=modem";}}
if (spac_referral.match(spac_Keyword1)) {aTargetParams=aTargetParams+"/referral="+spac_Keyword1;}
else if (spac_useragent.match(spac_Keyword1)) {aTargetParams=aTargetParams+"/referral="+spac_Keyword1;}

//document.write(spac_getAdHTML(aTargetParams));
//document.write(getMediaOneAdcode(aTargetParams));

var mediaOneAdCode = getMediaOneAdcode(aTargetParams);
document.write(mediaOneAdCode);
document.write(spac_getAdHTML(aTargetParams));


}
function GetCookie (name) {
var spac_offset = name.length+1;
var startstr = document.cookie.indexOf(name,0);
if (startstr == -1) {return null}
else {
var endstr = document.cookie.indexOf(";", startstr);
if (endstr == -1) {endstr = document.cookie.length;}
return unescape(document.cookie.substring(startstr+spac_offset,endstr));}
}
function spac_returnAd(aTargetParams){return spac_getAdHTML( aTargetParams ); }
function spac_getAdHTML( aTargetParams )
{
var targetParams, adServer, method, frameWidth, frameHeight, frameTarget, i, sM='';
targetParams = aTargetParams.toUpperCase();
if ( targetParams.charAt(0)!="/"){targetParams="/"+targetParams;}
if ((adServer=((spac_getParamValue("ADSERVER",targetParams))))==""){adServer=spac_adServer;}
if ((method=spac_getParamValue("METHOD",targetParams))==""){method = "AUTO";}
if((frameTarget=spac_getParamValue("FRAMETARGET",targetParams))==""){frameTarget = "_new";}
else{frameTarget = frameTarget.toLowerCase();}
var frameWidth = "468";
var frameHeight = "60";
if ((frameSize=((spac_getParamValue("FRAMESIZE",targetParams))))=="")
{
frameSize=spac_getParamValue("AAMSZ",targetParams );
if ("0123456789".indexOf(frameSize.substring(0,1))==-1)
{
frameSize=frameSize.toUpperCase();
if(frameSize=="BANNER"){frameSize="468X60";sM="JSCRIPT";}
else if(frameSize=="BANNER2"){frameSize="468X60";sM="JSCRIPT";}
else if(frameSize=="BUTTON"){frameSize="1X1";sM="JSCRIPT";}
else if(frameSize=="CATEGORYTILE"){frameSize="126X150";}
else if(frameSize=="TILE"){frameSize="180X150";sM="JSCRIPT";}
else if(frameSize=="LOCALTILE"){frameSize="80X40";}
else if(frameSize=="LOGO"){frameSize="1X1";sM="JSCRIPT";}
else if(frameSize=="LARGEBANNER"){frameSize="380X51";sM="JSCRIPT";}
else if(frameSize=="HALFBANNER"){frameSize="234X60";sM="JSCRIPT";}
else if(frameSize=="MEDIABAR"){frameSize="126X110";}
else if(frameSize=="MEDIUM"){frameSize="300X250";sM="JSCRIPT";}
else if(frameSize=="VIDEOAD"){sM="JSCRIPT";}
else if(frameSize=="MEDIAOPENER"){sM="JSCRIPT";}
else if(frameSize=="MEDIACLOSER"){sM="JSCRIPT";}
else if(frameSize=="MESSENGERBOX"){frameSize="134X54";}
else if(frameSize.substring(0,4)=="MINI"){frameSize="120X60";sM="JSCRIPT";}
else if(frameSize=="PANEAD"){frameSize="224X33";}
else if(frameSize=="PART"){frameSize="122X122";sM="JSCRIPT";}
else if(frameSize=="PLATFORMNINE"){sM="JSCRIPT";}
else if(frameSize=="PREMIUM"){frameSize="122X92";sM="JSCRIPT";}
else if(frameSize=="PIXEL"){frameSize="1X1";sM="JSCRIPT";}
else if(frameSize=="TEXT"){frameSize="50X10";sM="JSCRIPT";}
else if(frameSize=="TICKER"){frameSize="50X10";sM="JSCRIPT";}
else if(frameSize=="MEDIUMRECTANGLE"){frameSize="350X250";sM="JSCRIPT";}
else if(frameSize=="TEXTLINK"){frameSize="468X20";}
else if(frameSize=="SKYSCRAPER"){frameSize="162X600";}
else if(frameSize=="VERTICALBANNER"){frameSize="120X240";sM="JSCRIPT";}
else if(frameSize=="TOOLBOX"){frameSize="110X160";}
else if(frameSize=="WAP"){frameSize="28X30";}
else if(frameSize=="PARTINT"){frameSize="460X85";}
else if(frameSize=="TAKEOVER"){frameSize="1X1";sM="JSCRIPT";}
else if(frameSize=="PROMOCLIP"){frameSize="1X1";sM="JSCRIPT";}
else if(frameSize=="AGTVERTICAL"){frameSize="132X331";}
else if(frameSize=="SPOTLIGHT"){frameSize="1X1";sM="JSCRIPT";}
else if(frameSize=="HOCKEYSTICK"){frameSize="180X280";sM="JSCRIPT";}
else if(frameSize=="SMALLRECTANGLE"){frameSize="300X125";sM="JSCRIPT";}
else if(frameSize=="POPUNDER"){frameSize="1X1";sM="JSCRIPT";}
else if(frameSize=="HALFPAGE"){frameSize="300X600";sM="JSCRIPT";}
else if(frameSize=="FLUTTER"){frameSize="1X1";sM="JSCRIPT";}
}
if(method=="AUTO" && sM != ""){method=sM}
}
if(frameSize!="")
{
var i=frameSize.indexOf("X");
if(i>=0){frameWidth=frameSize.substring(0,i);frameHeight=frameSize.substring(i+1);}
}
var uniqueValue=spac_getUniqueValue();
if(true==spac_autoPageID)
{
var autoPageID=spac_getParamValue("AUTOPAGEID",targetParams);
if (""==autoPageID||"TRUE"==autoPageID){targetParams=targetParams + "/PAGEID=" + spac_pageID;}
}
if(method=="AUTO"){method=spac_getMethod();}
targetParams = targetParams+"/ACC_RANDOM="+uniqueValue;
if(method=="IFRAME"||method=="JSCRIPT")
{
if(method=="IFRAME")
{
return("<iframe src=\""+adServer+"/hserver"+targetParams+"?\" width=\""+frameWidth+"\" height=\""+frameHeight+"\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\"  scrolling=\"no\"></iframe>");
}
else if(method== "JSCRIPT"){return("<script src=\""+adServer+"/jnserver"+targetParams+"?\"></script>");}
}
else if(method=="STREAM"){return("<a href=\""+adServer+"/xtserver"+targetParams+"?\"></a>");
}
else if(method=="POPUP")
{
var windowName=aTargetParams;
len=windowName.length;
for(i=0;i<len;i++)
{
ch=windowName.charAt(i)
if(ch=="/"||ch=="="||ch=="."||ch=="_"||ch=="-")
{
windowName=windowName.substring(0,i)+"_"+windowName.substring(i+1);
}
}
var features="width="+frameWidth+",height="+frameHeight;
var winPos;
if ((winPos=((spac_getParamValue("POPUPPOS",targetParams))))!="")
{
i=winPos.indexOf("X");
if(i>=0)
{
j=winPos.indexOf("Y",i+1);
if(j<0){j=winPos.length;}
features+=",left="+winPos.substring(i+1,j);
}
i=winPos.indexOf("Y");
if(i>=0)
{
j=winPos.indexOf("X",i+1);
if(j<0){j=winPos.length;}
features+=",top="+winPos.substring(i+1,j);
}
}
var adwin=window.open(adServer+"/hserver"+targetParams+"?",windowName,features);
adwin.focus();return("");
}
else
{
if (frameTarget!=""){frameTarget=" target=\""+frameTarget+"\"";}
return("<a href=\""+adServer+"/adclick"+targetParams+"?\" "+frameTarget+">" +
"<img src=\""+adServer+"/adserver"+targetParams+"?\" border=\"0\" width=\""+frameWidth+"\" height=\""+frameHeight+"\"></a>");
}
}
function spac_getMethod()
{
var agt=navigator.userAgent;
var ver=parseInt(navigator.appVersion);
var isMoz=(((agt.indexOf("Mozilla")!=-1)&&
(agt.indexOf("spoofer")==-1)&&
(agt.indexOf("compatible")==-1)&&
(agt.indexOf("opera")==-1)&&
(agt.indexOf("webtv")==-1)))
var isIE3Up=((agt.indexOf("MSIE")!=-1)&&(ver>=3));
if(isIE3Up||(isMoz&&ver>=5)){return("IFRAME");}
else if(isMoz && ver>=3){return ("JSCRIPT");}
else {return ("IMG");}
}
function spac_getParamValue( aName, aParam )
{
var retVal="";
var p=aParam.indexOf(aName);
if (p!=-1){
p=aParam.indexOf("=",p);
if(p!=-1)
{
p++;
while(p<aParam.length&&aParam.charAt(p)==" "){p++;}
var p2=aParam.indexOf(";", p);
if(p2!=-1){retVal=(aParam.substring(p,p2));}
else
{
p2=aParam.indexOf("/", p);
if(p2!=-1){retVal=(aParam.substring(p,p2));}
else{retVal=(aParam.substring(p,aParam.length));}
}
p = retVal.length - 1;
while(p>0&&retVal.charAt(p)==" "){p--;}
if(p>0){retVal=retVal.substring(0,p+1);}
}
}
return (retVal);
}
function spac_getUniqueValue(){
var now;
now = new Date();
return now.getTime();
}
function spac_getVersion(){return ("$Id: spac.js,v 1.3 2006/06/20 14:43:11 pdwalker Exp $");}

//////////////////////////////////////////////////////////////////////////////////////////////
//Post ad calls - Used for returning ads to a page in one go depending on the divs detected //
//Authored: AMontaser/JDepenha                                                              //
//Date Created: 09/06/2006																	//
//Date Modified: 20/06/2006   AMontaser                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////
	var coldone='off';
	var collen;
	var funccount = 0;
	var arrx = new Array();
	var adstring;
		
		
function genpostadcall(adstring){
    //remove LOC= and AAMSZ= from ad string provided by site settings
	adstring = stripadstring(adstring);
    //Generic post ad call
	getAdElements();
	 
	if(collen>0 && funccount<collen){
	//make the ad call from the array depending on the function counter
	var divnumber= arrx[funccount][0];
	var adsize = arrx[funccount][1];
	var locstr=arrx[funccount][2];

	postadcall(divnumber,adsize,locstr,adstring);
	}
	
	//increment the function count
		funccount = funccount+1;
}

function genmovepostad(){

		var divsource = "msnadsource_" + funccount;
		var divdestination="msnaddestination_" + funccount;

		var objdivsource = document.getElementById(divsource);
		var objdestination = document.getElementById(divdestination);
			if (objdivsource!=null && objdestination !=null){
			    objdestination.appendChild(objdivsource);
			    document.getElementById(divsource).style.visibility = "visible";		
			    document.getElementById(divdestination).style.visibility = "visible";
			}
		
}


function getAdElements(){
//Find all ad div tags on the page that conform to naming convention for post page ad calls.
//Creates an array of all the ad calls that will need to be made.
	if (coldone=='off'){
	    var objTypes= new Object();
	    var objdestinationdiv;
        var count=0;
	    for (count=0;count<50;count++){
	    var count2=count+1;
	    var locstr;
		    objdestinationdiv = window.document.getElementById("msnaddestination_"+count2);
		    if (objdestinationdiv==null)
		    {
			    break
		    }
			else
			
			{
		    
			    var type = objdestinationdiv.getAttribute("adsize");
			    var location = (objdestinationdiv.getAttribute("adloc"));
			    var typelocation = type + location;
			    
			    
			    if (isNaN(objTypes[typelocation])){
					objTypes[typelocation] = 0;
					}
					
			    objTypes[typelocation] = objTypes[typelocation]+1;
			    
			    if (location!=null && location!='')	{		    
					locstr = location+'.'+objTypes[typelocation];
			    }
			    else 
				{
					locstr = '';
			    }
			    //  Arrays within arrays:
			    var arry = new Array(count2,type,locstr);
			    //single row of the array
			    //adding single array to an array to make multidimensional array
			    arrx[count] = arry;
			    //test array added
			    collen=count2;
		    }	
	    }		
		    coldone='on';	
	    }

}

function postadcall(divnumber,adsize,locstr,adstring){

	
	if (location.protocol.indexOf('https')==-1){		
		var divsource = "msnadsource_" + divnumber;
		var divdestination = "msnaddestination_" + divnumber;

		adstring = adstring + "/AAMSZ=" + adsize + "/LOC=" +locstr + "/METHOD=JSCRIPT";
		spac_writeAd(adstring);
				
	}
}

function stripadstring(adstring){
    //remove LOC= and AAMSZ= from ad string
    var regstr = /LOC=[\w]+[\.\]+[0-9]+\/+/gi;
	adstring = adstring.replace(regstr,'');
	var regstr = /AAMSZ=[\w]+\/+/gi;
	adstring = adstring.replace(regstr,'');
	return adstring;
}







