window.name="newswindow";
window.onerror = stopError;
function stopError(){return true}
function gettopic(){return true}
function autopop(){poplist = window.open("/autosinsider/poplist.htm","poplist",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,width=750,height=500,status=1,top=screen.availTop,left=screen.availLeft');poplist.focus}
function webjump(){web = window.open("/update/nation/web.htm","web",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,width=200,height=500,status=1,top=screen.availTop,left=screen.500');web.focus}
function nationjump(){jump = window.open("/update/nation/jump.htm","jump",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,width=750,height=500,status=1,top=screen.availTop,left=screen.availLeft');jump.focus}
function openlink(linkURL){if (linkURL == null)linkURL = "";linkwindow = window.open(linkURL,"linkwindow",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,width=750,height=500,status=1,top=screen.availTop,left=screen.availLeft');linkwindow.focus}
function openschool(linkURL){if (linkURL == null)linkURL = "";schoolwindow = window.open(linkURL,"schoolwindow",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,width=750,height=330,status=1,top=screen.availTop,left=screen.availLeft');schoolwindow.focus}
function mom(linkURL){if (linkURL == null)linkURL = "";son = window.open(linkURL,"son",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,width=750,height=460,status=1,top=screen.availTop,left=screen.availLeft');son.focus}
function pop(linkURL){if (linkURL == null)linkURL = "";popwindow = window.open(linkURL,"popwindow",'toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1,width=750,height=550,status=1,top=screen.availTop,left=screen.availLeft');popwindow.focus}
function pixpop(linkURL){if (linkURL == null)linkURL = "";pixwindow = window.open(linkURL,"pixwindow",'toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1,width=750,height=680,status=1,top=screen.availTop,left=screen.availLeft');pixwindow.focus}
function pixpop2(linkURL){if (linkURL == null)linkURL = "";pixwindow = window.open(linkURL,"pixwindow",'toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1,width=750,height=600,status=1,top=screen.availTop,left=screen.availLeft');pixwindow.focus}
function pixpop3(linkURL){if (linkURL == null)linkURL = "";pixwindow = window.open(linkURL,"pixwindow",'toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1,width=750,height=900,status=1,top=screen.availTop,left=screen.availLeft');pixwindow.focus}
function getnewsgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/newsgallery/" + gallery + "/index.htm")}
function getwingsgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/wingsgallery/" + gallery + "/index.htm")}
function getjoyridesgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/joyridesgallery/" + gallery + "/index.htm")}
function getlionsgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/lionsgallery/" + gallery + "/index.htm")}
function getrvmgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/newsgallery/" + gallery + "/index.htm")}
function getphotosgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/photosgallery/" + gallery + "/index.htm")}
function getsportsgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/sportsgallery/" + gallery + "/index.htm")}
function getautosgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/autosgallery/" + gallery + "/index.htm")}
function getautoshowgallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/autoshowgallery/" + gallery  + "/index.htm")}
function getconceptcargallery(gallery) {pixpop("http://info.detnews.com/pix/photogalleries/conceptcargallery/" + gallery + "/index.htm")}
function openwingsgallery(gallery) {pixpop("http://info.detnews.com/wingsgallery/index.cfm?project=" + gallery + "/")}
function openjoyridesgallery(gallery) {pixpop("http://info.detnews.com/joyridesgallery/index.cfm?project=" + gallery + "/")}
function openjoyridesgallery2(gallery) {pixpop("http://info.detnews.com/joyridesgallery2/index.cfm?project=" + gallery + "/")}
function openlionsgallery(gallery) {pixpop("http://info.detnews.com/lionsgallery/index.cfm?project=" + gallery + "/")}
function openrvmgallery(gallery) {pixpop("http://info.detnews.com/rvmgallery/index.cfm?project=" + gallery + "/")}
function opennewsgallery(gallery) {pixpop("http://info.detnews.com/newsgallery/index.cfm?project=" + gallery + "/")}
function openpictopia(gallery) {pixpop3("http://info.detnews.com/pictopia/index.cfm?project=" + gallery + "/")}
function openphotosofthedaygallery(gallery) {pixpop("http://info.detnews.com/photosofthedaygallery/index.cfm?project=" + gallery + "/")}
function opensportsgallery(gallery) {pixpop("http://info.detnews.com/sportsgallery/index.cfm?project=" + gallery + "/")}
function opensportsgallery2(gallery) {pixpop2("http://info.detnews.com/sportsgallery2/index.cfm?project=" + gallery + "/")}
function openautosgallery(gallery) {pixpop("http://info.detnews.com/autosgallery/index.cfm?project=" + gallery + "/")}
function openautosgallery2(gallery) {pixpop("http://info.detnews.com/autosgallery2/index.cfm?project=" + gallery + "/")}
function openautoshowgallery(gallery) {pixpop("http://info.detnews.com/autoshowgallery/index.cfm?project=" + gallery + "/")}
function openconceptcargallery(gallery) {pixpop("http://info.detnews.com/conceptcargallery/index.cfm?project=" + gallery + "/")}
function openphotoggallery(gallery) {pixpop("http://info.detnews.com/photoggallery/index.cfm?project=" + gallery + "/")}
function opengallery(gallery) {pixpop("http://pc100.detnews.com/slideshow/frame.hbs?project=" + gallery + "/")}
function Events(){eventspop=window.open("http://info.detnews.com/includes/index/events/eventfinder.cfm","Events",'toolbar=0,menubar=0,scrollbars=1,resizable=1,status=0,width=325,height=620');eventspop.focus}
function galleryindex(){pixpop("http://pc100.detnews.com/slideshow/galleryindex.htm")}
function autosgalleryindex(){pixpop("http://pc100.detnews.com/autosgallery/galleryindex.htm")}
function gothere(form){if(form.pick.options[form.pick.selectedIndex].value != "")openlink(form.pick.options[form.pick.selectedIndex].value)}
function morningstar(){mom("http://detnews.stockgroup.com/")}
function companybox(Ticker){mom("http://detnews.stockgroup.com/snapshot_quote.asp?row=1&subtype=exact&search=1&lang=EN&uniqueid=&ticker=" + Ticker)} 
function shareit() {pop("http://info.detnews.com/share/index.cfm?referer=" + window.location)}
tvDate = new Date();var tvThisday = tvDate.getDay();var tvFiles = "twi_sunday.html*twi_monday.html*twi_tuesday.html*twi_wednesday.html*twi_thursday.html*twi_friday.html*twi_saturday.html";var tvNames = tvFiles.split("*");
function tvToday(){window.location="http://tvlistings.zap2it.com/partners/editorial_link.asp?partner_id=det&url=http://tv.zap2it.com/shows/bestbets/tv/include/" + tvNames[tvThisday]}
function tvTomorrow(){window.location="http://tvlistings.zap2it.com/partners/editorial_link.asp?partner_id=det&url=http://tv.zap2it.com/shows/bestbets/tv/include/" + tvNames[tvThisday + 1]}
function tvSportsToday(){window.location="http://tvlistings.zap2it.com/partners/editorial_link.asp?partner_id=det&url=http://tv.zap2it.com/shows/bestbets/sports/" + tvNames[tvThisday]}
function tvSportsTomorrow(){window.location="http://tvlistings.zap2it.com/partners/editorial_link.asp?partner_id=det&url=http://tv.zap2it.com/shows/bestbets/sports/" + tvNames[tvThisday + 1]}
thisDate = new Date(); var addDay = thisDate.getTime() + (1000 * 60 * 60 * 24); nextDate = new Date(); nextDate.setTime(addDay); fromDate = (thisDate.getMonth() + 1) + "/" + thisDate.getDate() + "/" + thisDate.getFullYear(); toDate = (nextDate.getMonth() + 1) + "/" + nextDate.getDate() + "/" + nextDate.getFullYear();
function tvCategory(cat){window.location="http://tvlistings.zap2it.com/partners/special_search_det.asp?Qcat=" + cat + "&QspecialCustid=100123815&QspecialSortBy=title&QspecialSearchBy=title&QspecialFromDate=" + fromDate + "&QspecialToDate=" + toDate  + "&QspecialTextType=1&QspecialWords=nothing123&Qreturncnt=25&partner_id=det"}
function comments(forum) {
	if (forum == "autostalk"){pop("http://info.detnews.com/autostalk/writeus.cfm?referer=" + window.location)}
	if (forum == "geartalk"){pop("http://info.detnews.com/autostalk/writeus.cfm?referer=" + window.location)}
	if (forum == "lions"){pop("http://info.detnews.com/detroitlionsonline/writeus.cfm?referer=" + window.location)}
	if (forum == "pistons"){pop("http://info.detnews.com/detroitpistonsonline/writeus.cfm?referer=" + window.location)}
	if (forum == "wings"){pop("http://info.detnews.com/wings/writeus.cfm?referer=" + window.location)}
	if (forum == "techtalk"){pop("http://info.detnews.com/techtalk/writeus.cfm?referer=" + window.location)}
	if (forum == "sports"){pop("http://info.detnews.com/sports/writeus.cfm?referer=" + window.location)}
	if (forum == "tigers"){pop("http://info.detnews.com/tigers/writeus.cfm?referer=" + window.location)}
	if (forum == "feedback"){pop("http://info.detnews.com/feedback/writeus.cfm?referer=" + window.location)}
}
function msinvestmentcenter() { newsquiz=window.open ("http://poweredby.morningstar.com/doc/CBCover/0,,DTN725,00.html","slideshow",'toolbar=0,menubar=0,scrollbars=1,statusbar=1,resizable=1,width=600,height=480')}
function msstockcenter() { newsquiz=window.open ("http://poweredby.morningstar.com/CoverPages/CoBrandstocksWI.html?CN=DTN725&PC=1","slideshow",'toolbar=0,menubar=0,scrollbars=1,statusbar=1,resizable=1,width=550,height=480')}
function msfundcenter() { newsquiz=window.open ("http://poweredby.morningstar.com/CoverPages/CoBrandfundsWI.html?CN=DTN725&PC=1","slideshow",'toolbar=0,menubar=0,scrollbars=1,statusbar=1,resizable=1,width=550,height=480')}
function msclassroom() { newsquiz=window.open ("http://poweredby.morningstar.com/PoweredBy/CUniv/course_cat/1,2088,F-1,00.html?CN=DTN725","slideshow",'toolbar=0,menubar=0,scrollbars=1,statusbar=1,resizable=1,width=550,height=480')}
function openWin(winURL, winName, winWidth, winHeight) {
  var winTop = 250;
  var winLeft = 75;
  if (screen.availWidth <= 800) {
    var winLeft = screen.availWidth - winWidth;
  }
  var theWin = window.open(winURL, winName, "width=" + winWidth + ",height=" + winHeight + ",top=" + winTop + ",left=" + winLeft + ",screenY=" + winTop + ",screenY=" + winLeft + ",toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,scrollbars=no");
}
function findreplace(inString, removeString, replaceString) {
	var outString = "", i = 0;
	while (i <= (inString.length - 1)) {
		if ((i <= (inString.length - removeString.length)) && (inString.substring(i, i + removeString.length)) == removeString){outString += replaceString; i += removeString.length}
		else {outString += inString.charAt(i); i++}
	} 
	return outString;
}
function removeSpaces(inString) {
	var outString = "";
	for (i = 0; i < inString.length; i++ ){if (inString.charAt(i) == " " && inString.charAt(i + 1) == " "){continue}outString += inString.charAt(i)}
	if (outString.charAt(0) == " "){outString = outString.substring(1, outString.length - 1)}
	if (outString.charAt(outString.length - 1) == " "){outString = outString.substring(0, outString.length - 1)}
	return outString;
}
function searchform(form){var search = ((document.search.searchtext.value == "") ? mom() : scriptsearch(document.search.searchtext.value, "phrase",'','','','searchresults.hts'))}
function searchadvanced(form){var search = ((document.advancedsearch.searchtext.value == "") ? mom() : scriptsearch(document.advancedsearch.searchtext.value, document.advancedsearch.searchtype.value,document.advancedsearch.section.value,document.advancedsearch.dateline.value,'','searchresults.hts'))}
function staffsearch(form){var search = ((document.advancedsearch.searchtext.value == "") ? mom() : scriptsearch(document.advancedsearch.searchtext.value, document.advancedsearch.searchtype.value,document.advancedsearch.section.value,document.advancedsearch.dateline.value,100,'searchresults.hts',document.advancedsearch.order.value))}
function changesearchtype(type){document.advancedsearch.searchtype.value = type}
function changesearchorder(order){document.advancedsearch.order.value = order}

function scriptsearch(searchterm, searchtype, selectedsection, dateline, limit, template, order, ticker){
	if (searchterm != "" && searchterm != null) {document.startsearch.getit.value = searchterm};
    var s = "\\*'*=*>*<*)*(*{*}*!*@*&*[*\"*]*.*,* and * not *;*?";
	var a = s.split("*");
	for (i = 0; i < a.length; i++) searchterm = findreplace(searchterm, a[i], "");
	if (template != "" && template != null){document.startsearch.ResultTemplate.value = template}
	if (ticker != "" && ticker != null){document.startsearch.companyticker.value = ticker}
	if (order == "Asc"){document.startsearch.SortOrder.value = "Asc"}
	if (limit == null || limit == "") {currentDate = new Date(); var twoWeeksAgo = currentDate.getTime() - (1000 * 60 * 60 * 24 * 14); twoWeekDate = new Date(); twoWeekDate.setTime(twoWeeksAgo); startSearchDate = (twoWeekDate.getMonth() + 1) + "/" + twoWeekDate.getDate() + "/" + twoWeekDate.getFullYear()}
	if (limit != null && limit != "" && limit > 0) {currentDate = new Date(); var howLongAgo = currentDate.getTime() - (1000 * 60 * 60 * 24 * 30 * limit); howLongDate = new Date(); howLongDate.setTime(howLongAgo); startSearchDate = (howLongDate.getMonth() + 1) + "/" + howLongDate.getDate() + "/" + howLongDate.getFullYear()}
	if (limit == 100) {startSearchDate = ""}
	if (searchtype == "phrase"){searchterm = removeSpaces(searchterm); searchterm = findreplace(searchterm, " ", "<SENTENCE>");}
	if (searchtype == "anywords"){searchterm = findreplace(removeSpaces(new String(searchterm.toLowerCase())), " ", " <OR> ")}
	if (searchtype != "phrase" && searchtype != "anywords"){searchterm = findreplace(removeSpaces(new String(searchterm.toLowerCase())), " ", " <AND> ");searchtype = "allwords"}
	if (selectedsection != "" && selectedsection != null){searchterm = "(SECTION=" + removeSpaces(new String(selectedsection.toLowerCase())) + ") <AND> " + searchterm} 
	if (dateline != "" && dateline != null){searchterm = "(DATELINE=" + removeSpaces(new String(dateline.toUpperCase())) + ")<AND>" + searchterm} 
	searchterm;
	if (startSearchDate != "" && startSearchDate != null){searchterm += "<AND>(FILEDATE>=" + startSearchDate + ")"}
	document.startsearch.SearchType.value = searchtype;
	document.startsearch.QueryText.value = searchterm;
	mom(); 
	document.startsearch.submit();
}
function notiframe(alternatepage){
	if (document.all || document.getElementByID){return true}
	else {window.location=alternatepage}
} 
function townie(){
	var town = document.picktown.town.options[document.picktown.town.selectedIndex].value;
	if (town != null && town != "") {
		var townarray = town.split(",");
		document.startsearch.getit.value = townarray[0]; document.startsearch.town.value = townarray[1]; document.startsearch.homes.value = townarray[2]; document.startsearch.profile.value = townarray[3]; 
		var dateline = (new String(townarray[0].toUpperCase()));
		scriptsearch('','','',dateline,12,'community.hts','','');
	}
}
function schoolit() {
	var school = document.picktown.schools.options[document.picktown.schools.selectedIndex].value;
	if (school != null && school != "") {
		openschool('http://www.ses.standardandpoors.com');
		setTimeout("schoolit2();", 3000);	
	}
}
function schoolit2() {
	schoolwindow.location = "http://www.ses.standardandpoors.com/NASApp/SPSOnline/SPSServlet/LoginPageRequest?StateCode=MI&Role=-1&StateResidence=-1";
	setTimeout("schoolit3();", 3000);
}
function schoolit3() {
	schoolwindow.location = "http://www.ses.standardandpoors.com/NASApp/SPSOnline/SPSServlet/ValidateLocationLevelRequest?LocLevel=2941";
	setTimeout("schoolit4();", 3000);
}
function schoolit4() {
	var school = document.picktown.schools.options[document.picktown.schools.selectedIndex].value;
	schoolwindow.location = school;
}

function NewWindow(height,width,url)
{window.open(url,"newWindow","menubars=0,scrollbars=1,resizable=1,height="+height+",width="+width);
}
function popAudioSlideshow (earl,name,widgets) 
{
	var url = earl;
	popupWin = window.open (url,'WebAudioSlideshow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=640,height=640');
	popupWin.opener.top.name="opener";
	popupWin.focus();
}
function webAudio (earl,name,widgets) 
{
	var url = earl;
	popupWin = window.open (url,name,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=640,height=640');
	popupWin.opener.top.name="opener";
	popupWin.focus();
}
function webVideo (earl,name,widgets) 
{
	var url = earl;
	popupWin = window.open (url,name,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=550');
	popupWin.opener.top.name="opener";
	popupWin.focus();
}
function popAudio (podcasturl,name,widgets) 
{
	var url = 'http://info.detnews.com/audio/audioindex.cfm';
	popupWin = window.open (url+'?podcasturl='+podcasturl,name,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=520,height=400');
	popupWin.opener.top.name="opener";
	popupWin.focus();
}
function popWagoner (url,name,widgets) 
{
	var url = 'http://info.detnews.com/audio/audioWagoner.cfm';
	popupWin = window.open (url,name,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=538,height=400');
	popupWin.opener.top.name="opener";
	popupWin.focus();
}
function popParis (url,name,widgets) 
{
	var url = 'http://info.detnews.com/video/videoParis.cfm';
	popupWin = window.open (url,name,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=550');
	popupWin.opener.top.name="opener";
	popupWin.focus();
}


function openAudioSlideshowFrame(earl,name,widgets) 
{
	var url = 'http://info.detnews.com/audio/audioSlideShowframe.cfm?earl='+earl;
	popupWin = window.open (url,name,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=680,height=680');
	popupWin.opener.top.name="opener";
	popupWin.focus();
}

function healthrisks() { newsquiz=window.open ("http://info.detnews.com/gets/health/healthrisks/index.cfm","Healthrisks",'toolbar=0,menubar=0,scrollbars=0,statusbar=1,resizable=1,width=580,height=500')}
