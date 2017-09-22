if(!document.all && navigator.appVersion >= "5"){
var layerRef="document.getElementById";
var styleSwitch=".style";
function showLayer(layerName){
eval(layerRef+'("'+layerName+'")'+styleSwitch+'.visibility="visible"');
}	
function hideLayer(layerName){
eval(layerRef+'("'+layerName+'")'+styleSwitch+'.visibility="hidden"');
}
}
else if (document.layers){
var layerRef="document.layers";
var styleSwitch="";
function showLayer(layerName){
eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
}	
function hideLayer(layerName){
eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
}
}
else if (document.all){
var layerRef="document.all";
var styleSwitch=".style";
function showLayer(layerName){
eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
}	
function hideLayer(layerName){
eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
}
}


// Removed unless a good reason to put it back in is found
//onload="hideCover();"

function closeAd(){
hideLayer('coverad');
}



function hideCover(){
hideLayer('Covering');
}


//hides all

function hideAll(num){
if (num=="99"){
hideLayer('menua');
//hideLayer('menub');
hideLayer('menuc');
hideLayer('menud');
hideLayer('menue');
hideLayer('menuf');
hideLayer('menug');
hideLayer('menuclosertop');
hideLayer('menucloserbottom');

}else if (num=="999"){
hideLayer('month01');
hideLayer('month02');
hideLayer('month03');
hideLayer('month04');
hideLayer('month05');
hideLayer('month06');
hideLayer('month07');
hideLayer('month08');
hideLayer('month09');
hideLayer('month10');
hideLayer('month11');
hideLayer('month12');
}

}



function showSome(num){
if (num=="10"){
hideLayer('coverad');
}

if (num=="102"){
hideAll('99');
showLayer('menua');
showLayer('menuclosertop');
showLayer('menucloserbottom');

}else if (num=="104"){
hideAll('99');
showLayer('menub');
showLayer('menuclosertop');
showLayer('menucloserbottom');


}else if (num=="106"){
hideAll('99');
showLayer('menuc');
showLayer('menuclosertop');
showLayer('menucloserbottom');


}else if (num=="108"){
hideAll('99');
showLayer('menud');
showLayer('menuclosertop');
showLayer('menucloserbottom');

}else if (num=="110"){
hideAll('99');
showLayer('menue');
showLayer('menuclosertop');
showLayer('menucloserbottom');

}else if (num=="112"){
hideAll('99');
showLayer('menuf');
showLayer('menuclosertop');
showLayer('menucloserbottom');

}else if (num=="114"){
hideAll('99');
showLayer('menug');
showLayer('menuclosertop');
showLayer('menucloserbottom');

//Clear all  function
}else if (num=="100"){
hideAll('99');
}
}


//Editorial Calendar Script
function editCal(num){

if (num=="101"){
hideAll('999');
showLayer('month01');

}else if (num=="102"){
hideAll('999');
showLayer('month02');

}else if (num=="103"){
hideAll('999');
showLayer('month03');

}else if (num=="104"){
hideAll('999');
showLayer('month04');

}else if (num=="105"){
hideAll('999');
showLayer('month05');

}else if (num=="106"){
hideAll('999');
showLayer('month06');

}else if (num=="107"){
hideAll('999');
showLayer('month07');

}else if (num=="108"){
hideAll('999');
showLayer('month08');

}else if (num=="109"){
hideAll('999');
showLayer('month09');

}else if (num=="110"){
hideAll('999');
showLayer('month10');

}else if (num=="111"){
hideAll('999');
showLayer('month11');

}else if (num=="112"){
hideAll('999');
showLayer('month12');
}
}


/* Begin scripts for image rollovers*/

//Main Navigation Rollovers

block101= new Image();
block102= new Image();
block103= new Image();
block104= new Image();
block105= new Image();
block106= new Image();
block107= new Image();
block108= new Image();
block109= new Image();
block110= new Image();
block111= new Image();
block112= new Image();
block113= new Image();
block114= new Image();

block101.src="/img/TC_Header_Nav_NewsGlobe_off.gif";
block102.src="/img/TC_Header_Nav_NewsGlobe_on.gif";
block103.src="/img/TC_Header_Nav_Vectors_off.gif";
block104.src="/img/TC_Header_Nav_Vectors_on.gif";
block105.src="/img/TC_Header_Nav_TechZones_off.gif";
block106.src="/img/TC_Header_Nav_TechZones_on.gif";
block107.src="/img/TC_Header_Nav_Event_off.gif";
block108.src="/img/TC_Header_Nav_Event_on.gif";
block109.src="/img/TC_Header_Nav_Link_off.gif";
block110.src="/img/TC_Header_Nav_Link_on.gif";
block111.src="/img/TC_Header_Nav_TelcomLib_off.gif";
block112.src="/img/TC_Header_Nav_TelcomLib_on.gif";
block113.src="/img/TC_Header_Nav_Archive_off.gif";
block114.src="/img/TC_Header_Nav_Archive_on.gif";




function MainNavMenu(num){

if (num=="102"){
 document.NewsGlobe.src=block102.src;
// document.Vectors.src=block103.src;
 document.TechZones.src=block105.src;
 document.Event.src=block107.src;
 document.Link.src=block109.src;
 document.TelcomLib.src=block111.src;
 document.Archive.src=block113.src;

}else if (num=="104"){
 document.NewsGlobe.src=block101.src;
// document.Vectors.src=block104.src;
 document.TechZones.src=block105.src;
 document.Event.src=block107.src;
 document.Link.src=block109.src;
 document.TelcomLib.src=block111.src;
 document.Archive.src=block113.src;
  
}else if (num=="106"){
 document.NewsGlobe.src=block101.src;
// document.Vectors.src=block103.src;
 document.TechZones.src=block106.src;
 document.Event.src=block107.src;
 document.Link.src=block109.src;
 document.TelcomLib.src=block111.src;
 document.Archive.src=block113.src;
  
 }else if (num=="108"){
  document.NewsGlobe.src=block101.src;
// document.Vectors.src=block103.src;
 document.TechZones.src=block105.src;
 document.Event.src=block108.src;
 document.Link.src=block109.src;
 document.TelcomLib.src=block111.src;
 document.Archive.src=block113.src;
   
 }else if (num=="110"){
  document.NewsGlobe.src=block101.src;
// document.Vectors.src=block103.src;
 document.TechZones.src=block105.src;
 document.Event.src=block107.src;
 document.Link.src=block110.src;
 document.TelcomLib.src=block111.src;
 document.Archive.src=block113.src;
   
 }else if (num=="112"){
  document.NewsGlobe.src=block101.src;
// document.Vectors.src=block103.src;
 document.TechZones.src=block105.src;
 document.Event.src=block107.src;
 document.Link.src=block109.src;
 document.TelcomLib.src=block112.src;
 document.Archive.src=block113.src;
 
 }else if (num=="114"){
  document.NewsGlobe.src=block101.src;
// document.Vectors.src=block103.src;
 document.TechZones.src=block105.src;
 document.Event.src=block107.src;
 document.Link.src=block109.src;
 document.TelcomLib.src=block111.src;
 document.Archive.src=block114.src; 
 
}else if (num=="199"){
 document.NewsGlobe.src=block101.src;
 //document.Vectors.src=block103.src;
 document.TechZones.src=block105.src;
 document.Event.src=block107.src;
 document.Link.src=block109.src;
 document.TelcomLib.src=block111.src;
 document.Archive.src=block113.src;
 
}
}




//Curent issue header menu Rollovers

block201= new Image();
block202= new Image();
block203= new Image();
block204= new Image();
block205= new Image();
block206= new Image();

block207= new Image();
block208= new Image();
block209= new Image();
block210= new Image();

block201.src="/img/TC_Header_CurIss_Amer_off.gif";
block202.src="/img/TC_Header_CurIss_Amer_on.gif";
block203.src="/img/TC_Header_CurIss_Int_off.gif";
block204.src="/img/TC_Header_CurIss_Int_on.gif";
block205.src="/img/TC_Header_CurIss_Sub_off.gif";
block206.src="/img/TC_Header_CurIss_Sub_on.gif";

block207.src="/img/TC_Header_CurIss_Am_Arrow_off.gif";
block208.src="/img/TC_Header_CurIss_Am_Arrow_on.gif";
block209.src="/img/TC_Header_CurIss_Int_Arrow_off.gif";
block210.src="/img/TC_Header_CurIss_Int_Arrow_on.gif";



function issueMenu(num){

if (num=="202"){
 document.Amer.src=block202.src;
 document.Int.src=block203.src;
 document.AmArrow.src=block208.src;
 document.IntArrow.src=block209.src;

}else if (num=="204"){
 document.Amer.src=block201.src;
 document.Int.src=block204.src;
 document.AmArrow.src=block207.src;
 document.IntArrow.src=block210.src;
 
}else if (num=="206"){
 document.Sub.src=block206.src;
 
}else if (num=="205"){
 document.Sub.src=block205.src;
 
}else if (num=="299"){
 document.Amer.src=block201.src;
 document.Int.src=block203.src;
 document.AmArrow.src=block207.src;
 document.IntArrow.src=block209.src;
}
}


//Utility menu Rollovers


block301= new Image();
block302= new Image();
block303= new Image();
block304= new Image();
block305= new Image();
block306= new Image();
block307= new Image();
block308= new Image();

block301.src="/img/TC_Header_Util_About_off.gif";
block302.src="/img/TC_Header_Util_About_on.gif";
block303.src="/img/TC_Header_Util_Contact_off.gif";
block304.src="/img/TC_Header_Util_Contact_on.gif";
block305.src="/img/TC_Header_Util_Advertise_off.gif";
block306.src="/img/TC_Header_Util_Advertise_on.gif";
block307.src="/img/TC_Header_Util_Privacy_off.gif";
block308.src="/img/TC_Header_Util_Privacy_on.gif";


function utilMenu(num){

if (num=="302"){
 document.About.src=block302.src;
 document.Contact.src=block303.src;
 document.Advertise.src=block305.src;
 document.Privacy.src=block307.src;


}else if (num=="304"){
 document.About.src=block301.src;
 document.Contact.src=block304.src;
 document.Advertise.src=block305.src;
 document.Privacy.src=block307.src;

 
}else if (num=="306"){
 document.About.src=block301.src;
 document.Contact.src=block303.src;
 document.Advertise.src=block306.src;
 document.Privacy.src=block307.src;
 
 }else if (num=="308"){
 document.About.src=block301.src;
 document.Contact.src=block303.src;
 document.Advertise.src=block305.src;
 document.Privacy.src=block308.src;
 
}else if (num=="399"){
 document.About.src=block301.src;
 document.Contact.src=block303.src;
 document.Advertise.src=block305.src;
 document.Privacy.src=block307.src;

 
}
}



//TechZones  Rollovers

block501= new Image();
block502= new Image();
block503= new Image();
block504= new Image();
block505= new Image();
block506= new Image();
block507= new Image();
block508= new Image();
block509= new Image();
block510= new Image();
block511= new Image();
block512= new Image();


//sponsor logos
block550= new Image();
block551= new Image();
block552= new Image();
block553= new Image();
block554= new Image();
block555= new Image();
block556= new Image();

block560= new Image();
block561= new Image();
block562= new Image();
block563= new Image();
block564= new Image();
block565= new Image();
block566= new Image();



block501.src="/img/TC_TechZ_MobWire_off.jpg";
block502.src="/img/TC_TechZ_MobWire_over.jpg";

block503.src="/img/TC_TechZ_CarrierServ_off.jpg";
block504.src="/img/TC_TechZ_CarrierServ_over.jpg";

block505.src="/img/TC_TechZ_BBAccess_off.jpg";
block506.src="/img/TC_TechZ_BBAccess_over.jpg";

block507.src="/img/TC_TechZ_NetInfra_off.jpg";
block508.src="/img/TC_TechZ_NetInfra_over.jpg";

block509.src="/img/TC_TechZ_BackOff_off.jpg";
block510.src="/img/TC_TechZ_BackOff_over.jpg";

block511.src="/img/TC_TechZ_Topics_off.jpg";
block512.src="/img/TC_TechZ_Topics_over.jpg";


//Default Sponsored By
block550.src="/img/TC_TZBox_SponsoredBy_Off.gif";

block551.src="/img/TC_TZBox_MW_SponsoredBy_On.gif";
block552.src="/img/TC_TZBox_CS_SponsoredBy_On.gif";
block553.src="/img/TC_TZBox_BA_SponsoredBy_On.gif";
block554.src="/img/TC_TZBox_NI_SponsoredBy_On.gif";
block555.src="/img/TC_TZBox_BOSS_SponsoredBy_On.gif";

//All Topics Sponsored by
block556.src="/img/TC_TZBox_AllTopics_SponsoredBy_Off.gif";


// Default Sponsor Logo
block560.src="/img/TC_TZBox_AllZones_Sponsor.gif";

block561.src="/img/TC_TZBox_MW_Sponsor.gif";
block562.src="/img/TC_TZBox_CS_Sponsor.gif";
block563.src="/img/TC_TZBox_BA_Sponsor.gif";
block564.src="/img/TC_TZBox_NI_Sponsor.gif";
block565.src="/img/TC_TZBox_BOSS_Sponsor.gif";

//All topics Sponsor Logo
block566.src="/img/TC_TZBox_AllTopics_Sponsor.gif";


/*
block550.src="/img/spacer.gif";
block551.src="/img/spacer.gif";
block552.src="/img/spacer.gif";
block553.src="/img/spacer.gif";
block554.src="/img/spacer.gif";
block555.src="/img/spacer.gif";
block556.src="/img/spacer.gif";

block560.src="/img/spacer.gif";
block561.src="/img/spacer.gif";
block562.src="/img/spacer.gif";
block563.src="/img/spacer.gif";
block564.src="/img/spacer.gif";
block565.src="/img/spacer.gif";
block566.src="/img/spacer.gif";
*/

function displayTechChannels(num){

if (num=="502"){
 document.MobWire.src=block502.src;
 document.CarrierServ.src=block503.src;
 document.BBAccess.src=block505.src;
 document.NetInfra.src=block507.src;
 document.BackOff.src=block509.src;
 document.Topics.src=block511.src;

 document.SponsoredBy.src=block551.src;
 document.Sponsor.src=block561.src; 

}else if (num=="504"){
 document.MobWire.src=block501.src;
 document.CarrierServ.src=block504.src;
 document.BBAccess.src=block505.src;
 document.NetInfra.src=block507.src;
 document.BackOff.src=block509.src;
 document.Topics.src=block511.src;
 
 document.SponsoredBy.src=block552.src;
 document.Sponsor.src=block562.src;
  
  
}else if (num=="506"){
 document.MobWire.src=block501.src;
 document.CarrierServ.src=block503.src;
 document.BBAccess.src=block506.src;
 document.NetInfra.src=block507.src;
 document.BackOff.src=block509.src;
 document.Topics.src=block511.src;
 
 document.SponsoredBy.src=block553.src;
 document.Sponsor.src=block563.src;
  
  
 }else if (num=="508"){
  document.MobWire.src=block501.src;
 document.CarrierServ.src=block503.src;
 document.BBAccess.src=block505.src;
 document.NetInfra.src=block508.src;
 document.BackOff.src=block509.src;
 document.Topics.src=block511.src;
 
 document.SponsoredBy.src=block554.src;
 document.Sponsor.src=block564.src; 
   
 }else if (num=="510"){
  document.MobWire.src=block501.src;
 document.CarrierServ.src=block503.src;
 document.BBAccess.src=block505.src;
 document.NetInfra.src=block507.src;
 document.BackOff.src=block510.src;
 document.Topics.src=block511.src;

 document.SponsoredBy.src=block555.src;
 document.Sponsor.src=block565.src;

  
 //All Topics rollover
  
 }else if (num=="512"){
  document.MobWire.src=block501.src;
 document.CarrierServ.src=block503.src;
 document.BBAccess.src=block505.src;
 document.NetInfra.src=block507.src;
 document.BackOff.src=block509.src;
 document.Topics.src=block512.src;
 
 document.SponsoredBy.src=block556.src;
 document.Sponsor.src=block566.src;
 
 
//Mouse Off function 
}else if (num=="599"){
 document.MobWire.src=block501.src;
 document.CarrierServ.src=block503.src;
 document.BBAccess.src=block505.src;
 document.NetInfra.src=block507.src;
 document.BackOff.src=block509.src;
 document.Topics.src=block511.src;
 
 document.SponsoredBy.src=block550.src;
 document.Sponsor.src=block560.src;
}
}















/*  Pop up window links  */

//print window in pop up
//"Javascript:openPrintable('sigin_01.cfm')"
function openPrintable(URL){
PrintableWin=window.open(URL,"PrintableWin","width=675,height=450,left=50,top=50, toolbars=1, location=1, resize=1")
}

//figure window pop up
//"Javascript:openFigure('sigin_01.cfm')"
function openFigure(URL){
FigureWin=window.open(URL,"FigureWin","width=650, height=500, scrollbars=yes, left=100, x=100, top=100, y=100")
}


//"Javascript:openVideo('sigin_01.cfm')"
function openVideo(URL){
VideoWin=window.open(URL,"FigureWin","width=750, height=500, scrollbars=yes, left=30, x=30, top=30, y=30")
}


//"Javascript:openMediakit('sigin_01.cfm')"
function openMediakit(URL){
MediakitWin=window.open(URL,"MediakitWin","width=625, height=600, scrollbars=yes, left=100, x=100, top=100, y=100, toolbars=1, location=1, resize=1")
}

//techtionary window pop up
//"Javascript:openTechtionary('/2005/TechTopic/2005_08_15/Techtopic.html')"
function openTechtionary(URL){
TechtionaryWin=window.open(URL,"TechtionaryWin","width=770, height=580, scrollbars=no, left=20, x=20, top=30, y=30, toolbars=0, location=0, resizable=yes")
}









//	HTMLLinkElement.getAttribute("rel").indexOf("style") != -1
//	HTMLListElement.getAttribute("title")
//	HTMLLinkElement.getAttribute("rel").indexOf("alt") != -1

function setActiveStyleSheet(title) {
   var i, a, main;
   for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
     if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("title")) {
       a.disabled = true;
       if(a.getAttribute("title") == title) a.disabled = false;
     }
   }
}






//resize script

function resized(){
  if(pageWidth!=innerWidth || pageHeight!=innerHeight){
    location.reload()
  }
}


if(document.layers){
  pageWidth=innerWidth
  pageHeight=innerHeight
  window.onresize=resized
}





//sign in pop up
//"Javascript:openSignin('sigin_01.cfm')"
function openSignin(URL){
SigninWin=window.open(URL,"SigninWin","width=380,height=420,left=200,top=200")
}








function defocus(x) {

    if (navigator.appName == 'Microsoft Internet Explorer' || document.all)
        x.blur();
}

//<a href="#" onClick="defocus(this)">





// The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
// See:  http://www.msc.cornell.edu/~houle/javascript/randomizer.html

rnd.today=new Date();
rnd.seed=rnd.today.getTime();

function rnd() {
        rnd.seed = (rnd.seed*9301+49297) % 233280;
        return rnd.seed/(233280.0);
};

function rand(number) {
        return Math.ceil(rnd()*number);
};



// end central randomizer. -->


function popUp(URL) 
				{
				day = new Date();
				id = day.getTime();
				eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=550,height=500,left = 50,top = 20');");
				}

