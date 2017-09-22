<!--
function openAdminWindow(url){
	var editWin=window.open(url,"cmsadmin","top=50,left=150,width=650,height=520,scrollbars=1,menubar=0,resizable=yes");
	editWin.focus();
}

function openEditWin(url){
	var editWin=window.open(url,"cmsEditWindow","top=50,left=150,width=650,height=520,menubar=0,scrollbars=1,resizable=yes");
	editWin.focus();
}

function editText(pgID, componentID, admin_nav_id, seq){
    openEditWin("/cms/admin/editText.aspx?pgID=" + pgID + "&componentID=" + componentID + "&admin_nav_id=" + admin_nav_id + "&seq=" + seq);
}

function editNewsSettings(pgID, componentID){
    openEditWin("/cms/admin/editNewsSettings.aspx?pgID=" + pgID + "&componentID=" + componentID);
}

function editContactUsSettings(pgID, componentID){
    openEditWin("/cms/admin/contactUsSettings.aspx?pgID=" + pgID + "&componentID=" + componentID);
}

function addNewsStory(pgID, componentID, admin_nav_id, seq){
    openEditWin("/cms/admin/editNews.aspx?pgID=" + pgID + "&componentID=" + componentID + "&newNewsItem=1" + "&admin_nav_id=" + admin_nav_id + "&seq=" + seq);
}

function editNews(pgID, componentID, newsID, admin_nav_id, seq){
    openEditWin("/cms/admin/editNews.aspx?pgID=" + pgID + "&componentID=" + componentID + "&newsID=" + newsID + "&admin_nav_id=" + admin_nav_id + "&seq=" + seq);
}

function editSportsScheduleSettings(pgID, componentID){
    openEditWin("/cms/admin/editSportsScheduleSettings.aspx?pgID=" + pgID + "&componentID=" + componentID);
}

function addSportsScheduleItem(pgID, componentID, academicYearID, admin_nav_id, seq){
    openEditWin("/cms/admin/editSportsSchedule.aspx?pgID=" + pgID + "&componentID=" + componentID + "&academicYearID=" + academicYearID + "&newSchItem=1" + "&admin_nav_id=" + admin_nav_id + "&seq=" + seq);
}
	
function editSportsScheduleItem(pgID, componentID, scheduleID, admin_nav_id, seq){
    openEditWin("/cms/admin/editSportsSchedule.aspx?pgID=" + pgID + "&componentID=" + componentID + "&scheduleID=" + scheduleID + "&admin_nav_id=" + admin_nav_id + "&seq=" + seq);
}

function editCalendarSettings(pgID, componentID){
    openEditWin("/cms/admin/editCalendarSettings.aspx?pgID=" + pgID + "&componentID=" + componentID);
}

function addCalendarItem(pgID, componentID, academicYearID, admin_nav_id, seq){
    openEditWin("/cms/admin/editCalendarItem.aspx?pgID=" + pgID + "&componentID=" + componentID + "&academicYearID=" + academicYearID + "&newCalItem=1" + "&admin_nav_id=" + admin_nav_id + "&seq=" + seq);
}
	
function editCalendarItem(pgID, componentID, calendarID, admin_nav_id, seq){
    openEditWin("/cms/admin/editCalendarItem.aspx?pgID=" + pgID + "&componentID=" + componentID + "&calendarID=" + calendarID + "&admin_nav_id=" + admin_nav_id + "&seq=" + seq);
}

function openDirectionsWin(scheduleID){
	var locWin=window.open("/cms/components/scheduleDirections.aspx?scheduleID="+scheduleID,"Directions","top=50,left=150,width=300,height=200,menubar=0,scrollbars=1,resizable=yes");
	locWin.focus();
}

function openCalDirectionsWin(calendarID){
	var locWin=window.open("/cms/components/scheduleDirections.aspx?calendarID="+calendarID,"Directions","top=50,left=150,width=300,height=200,menubar=0,scrollbars=1,resizable=yes");
	locWin.focus();
}

function openSummaryWin(scheduleID){
	var locWin=window.open("/cms/components/scheduleSummary.aspx?scheduleID="+scheduleID,"Summary","top=50,left=150,width=300,height=200,menubar=0,scrollbars=1,resizable=yes");
	locWin.focus();
}

function setCursor(){
    var f=document.forms[0];
    if (f){
        for (x=0;x<f.length;x++){
            if (f[x].type=="text"){
                f[x].focus();
                break;
            }
        }
    }
}

function getElement(f, clientID, name){
    return f.elements[clientID + ":" + name];
}

function addSlideShow(pgID, component_id, admin_nav_id){
	var url="/cms/admin/newSlideShow.aspx?pgID=" + pgID + "&componentID=" + component_id + "&admin_nav_id=" + admin_nav_id + "&seq=1";
	var editWin=window.open(url,"slideshow","top=50,left=150,width=650,height=520,scrollbars=1,menubar=0,resizable=yes");
	editWin.focus();
}

function editSlideShow(pgID,component_id, ss_type_id,admin_nav_id){
	var url="/cms/admin/editSlideShow.aspx?pgID=" + pgID + "&componentID=" + component_id + "&ss_type_id=" + ss_type_id + "&admin_nav_id=" + admin_nav_id + "&seq=2";
	var editWin=window.open(url,"slideshow","top=50,left=150,width=650,height=555,scrollbars=1,menubar=0,resizable=yes");
	editWin.focus();
}

function CheckSlideShowSelect(l,f){
	var selected=l.options[l.selectedIndex].value;
	var currentSlideShowType="Contenttemplatecontrol2:ComponentRepeater:_ctl2:_ctl0:currentSlideShowType";
	f[currentSlideShowType].value=selected;
	alert(f[currentSlideShowType].value);
	f.submit();
}


/******************************************
* Contractible Headers Script- © Dynamic Drive (www.dynamicdrive.com)
* Visit http://www.dynamicdrive.com/ for full source code
* This notice must stay intact for use
******************************************/

var ns6=document.getElementById&&!document.all?1:0

var head="display:''"
var folder=''

function expandit(curobj){
folder=ns6?curobj.nextSibling.nextSibling.style:document.all[curobj.sourceIndex+1].style
if (folder.display=="none")
folder.display=""
else
folder.display="none"
}
//-->