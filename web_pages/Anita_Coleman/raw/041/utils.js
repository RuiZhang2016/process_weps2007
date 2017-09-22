
//var win;


function BlockChg(fld, fldName) {
	alert("Not permitted to change '" + fldName + "'");
	fld.blur();
	}

function selSetSel(sel, val) {
	for (i=0;i<sel.length;i++) {
		if (sel[i].value == val) {
			sel.options[i].selected = true;
			break;
			}
		}
	}
	
function formatCurr(bWithDolsign, num) {
   if(isNaN(num))
     num = 0;
   var dol = Math.floor(num).toString();
   var cents = Math.floor((num*100+.5)%100).toString();
   for (var i = 0; i < Math.floor((dol.length-1)/3)-i; i++)
     dol = dol.slice(0,-(4*i+3))+','+dol.slice(-(4*i+3));
   while (cents.length<2)
     cents = '0' + cents;
   if (bWithDolsign) return "$"+dol+"."+cents;
   return dol+"."+cents;
 }

function NumFldChk(fld, len, tgt) {	
	if ((event.keyCode != 9) && ((event.keyCode < 16) || (event.keyCode > 18)))  {
		if (fld.value.length == len) tgt.select();
		}
	return(true);		
	}

function SetChkCode(bVal) {
	var strChk;
	if (bVal) {
		strChk = ' checked';
		}
	 else {
		strChk = '';
		}
	return(strChk);
	}
	
function PointerChg(obj, bOn) {
	if (bOn) {
		obj.style.cursor = 'hand'; 
		}
	 else {
		obj.style.cursor = ''; 
		}
	}
	
function PointerChgMsg(obj, bOn, Msg) {
	window.status=Msg;
	if (bOn) {
		obj.style.cursor = 'hand'; 
		}
	 else {
		obj.style.cursor = ''; 
		}
	}
	
function InstrWindow(URL, height, width) {

	var strOptions, win;

	strOptions="resizable,scrollbars,height=" + height + ",width=" + width;
	if (win) {
		if (win.closed) {
			win = window.open(URL, "instr", strOptions, true);
			}
		 else {
			win.focus();
			}
		}
	 else {
		win = window.open(URL, "instr", strOptions, true);
		}
	}


function CloneWin() {

	var strOptions, win;
	strOptions="directories,menubar,toolbar,titlebar,location,resizable,scrollbars,status,height=" + (document.body.clientHeight-50) + ",width=" + (document.body.clientWidth-50) + ",top=30, left=30";
	win = window.open(window.location, '', strOptions, true);
	}

function CloneWinHome() {

	var strOptions, win;
	strOptions="directories,menubar,toolbar,titlebar,location,resizable,scrollbars,status,height=" + (document.body.clientHeight-50) + ",width=" + (document.body.clientWidth-50) + ",top=30, left=30";
	win = window.open('../root/home.asp', '', strOptions, true);
	}

function WinPrintItems(URL, winname, height, width) {

	var strOptions, win;

	strOptions="toolbar,menubar,titlebar,resizable,scrollbars,status,height=" + height + ",width=" + width;
	if (win) {
		if (win.closed) {
			win = window.open(URL, winname, strOptions, true);
			}
		 else {
			win.focus();
			}
		}
	 else {
		win = window.open(URL, winname, strOptions, true);
		}
	}

function PopUpFullWin(URL, winname, height, width) {

	var strOptions, win;

	strOptions="directories,status,menubar,toolbar,titlebar,location,resizable,scrollbars,height=" + height + ",width=" + width;
	if (win) {
		if (win.closed) {
			win = window.open(URL, winname, strOptions, true);
			}
		 else {
			win.focus();
			}
		}
	 else {
		win = window.open(URL, winname, strOptions, true);
		}
	}

function PopUpStdWin(URL, winname, height, width) {

	var strOptions, win;

	strOptions="height=" + height + ",width=" + width;
	if (win) {
		if (win.closed) {
			win = window.open(URL, winname, strOptions, true);
			}
		 else {
			win.focus();
			}
		}
	 else {
		win = window.open(URL, winname, strOptions, true);
		}
	}


function PopUpStdWinResize(URL, winname, height, width) {

	var strOptions, win;

	strOptions="resizable,scrollbars,status,height=" + height + ",width=" + width;
	if (win) {
		if (win.closed) {
			win = window.open(URL, winname, strOptions, true);
			}
		 else {
			win.focus();
			}
		}
	 else {
		win = window.open(URL, winname, strOptions, true);
		}
	}


function PopUpStdResWin(URL, winname, height, width) {

	var strOptions, win;

	strOptions="resizable,scrollbars,status,height=" + height + ",width=" + width;
	if (win) {
		if (win.closed) {
			win = window.open(URL+'&NoMenu=y', winname, strOptions, true);
			}
		 else {
			win.focus();
			}
		}
	 else {
		win = window.open(URL+'&NoMenu=y', winname, strOptions, true);
		}
	}


function PopUpAddrMap(streetAddr, zip, country) {

	var strOptions;
	var URL;

	URL = "http://maps.yahoo.com/py/maps.py?addr=" + streetAddr + "&zip=" + zip;
	if (country != undefined) URL += '&country=' + country;

	PopUpStdResWin(URL, 'addrmap', 800, 700);
	}


function PopUpStdResWinRefresh(URL, winname, height, width) {

	var strOptions, win;

	strOptions="resizable,scrollbars,status,height=" + height + ",width=" + width;
/*	if (win) {
		if (!win.closed) {
			win.close();			
			}
		win = window.open(URL+'&NoMenu=y', winname, strOptions, true);
		}
	 else {*/
		win = window.open(URL+'&NoMenu=y', winname, strOptions, true);
//		}
	}

function PopUpStdResWinRefreshTopLeft(URL, winname, height, width) {

	var strOptions, win;

	strOptions="resizable,scrollbars,status,top=0,left=0,height=" + height + ",width=" + width;
/*	if (win) {
		if (!win.closed) {
			win.close();			
			}
		win = window.open(URL+'&NoMenu=y', winname, strOptions, true);
		}
	 else {*/
		win = window.open(URL+'&NoMenu=y', winname, strOptions, true);
//		}
	}

function PopUpTbarMenu(URL) {

	var strOptions, win, 
		winname = 'tbarmenu',
		height		= '500', 
		width		= '800';
	
	strOptions="directories,menubar,toolbar,titlebar,location,resizable,scrollbars,status,height=" + height + ",width=" + width;
	if (win) {
		if (!win.closed) {
			win.close();			
			}
		win = window.open(URL, winname, strOptions, true);
		}
	 else {
		win = window.open(URL, winname, strOptions, true);
		}
	}

function PopUpTbarMenuNamed(URL, winname) {

	var strOptions, win, 
		height		= '500', 
		width		= '800';
	
	strOptions="resizable,scrollbars,status,toolbar,menubar,height=" + height + ",width=" + width;
	if (win) {
		if (!win.closed) {
			win.close();			
			}
		win = window.open(URL, winname, strOptions, true);
		}
	 else {
		win = window.open(URL, winname, strOptions, true);
		}
	}

function PopUpStdResWinRefreshNoIDNoMenu(URL, winname, height, width) {

	var strOptions, win;

	strOptions="resizable,scrollbars,status,height=" + height + ",width=" + width;
	if (win) {
		if (!win.closed) {
			win.close();			
			}
		win = window.open(URL+'?NoMenu=y', winname, strOptions, true);
		}
	 else {
		win = window.open(URL+'?NoMenu=y', winname, strOptions, true);
		}
	}

function anetClassChg(obj, newClass) {

	obj.classname=newClass;
	}


function ClassChg(obj, strClsNew) {
	obj.className=strClsNew;
	}	
	
	
function TextMenuOver(txt) {
	txt.className="TextMenuOver";
	}	


function TextMenuOut(txt) {
	txt.className="TextMenuOut";
	}	


function TextButtonOver(txt) {
	txt.className="TextButtonOver";
	}	

function TextButtonOverMsg(txt, Msg) {
	txt.className="TextButtonOver";
	window.status=Msg;
	}


function TextButtonOut(txt) {
	txt.className="TextButtonOut";
	window.status='';
	}	


function TextButtonAlertOver(txt) {
	txt.className="TextButtonAlertOver";
	}	

function TextButtonAlertOverMsg(txt, Msg) {
	txt.className="TextButtonAlertOver";
	window.status=Msg;
	}


function TextButtonAlertOut(txt) {
	txt.className="TextButtonAlertOut";
	window.status='';
	}	


function TextLinkOut(txt) {
	txt.className="TextLinkOut";
	}	

function TextLinkOver(txt, Msg) {
	txt.className="TextLinkOver";
	window.status=Msg;
	}


function UserMenuOver(txt, Msg) {
	txt.className="MainMenuOver";
	window.status=Msg;
	}


function UserMenuOut(txt) {
	txt.className="MainMenuOut";
	window.status='';
	}	





function MutExclCheckBox(PriChk, SecChk) {
	
	if (PriChk.checked) {
		SecChk.checked = false;		
		}
	}


function CheckBoxOneMustBe(PriChk, SecChk) {
	
	if (!PriChk.checked) {
		SecChk.checked = true;		
		}
	}


function CheckBoxIfOneBoth(PriChk, SecChk) {
	
	if (PriChk.checked) {
		SecChk.checked = true;		
		}

	}


function EsrResizeGen() {
	var lgTemp;

	lgTemp	= document.body.clientHeight - parseInt(LayerNav.style.height) - 80;
	if (lgTemp < 100) lgTemp = 100;
	LayerDetail.style.height = lgTemp;	
	lgTemp = Math.ceil((parseInt(document.body.clientWidth)/2) - (parseInt(LayerDetail.style.width)/2));	
	if (lgTemp < 10) lgTemp = 10;
	LayerDetail.style.left = lgTemp + 'px';
	
	//lgTemp = Math.ceil((parseInt(document.body.clientWidth)/2) - (parseInt(LayerNav.style.width)/2));	
	//if (lgTemp < 10) lgTemp = 10;
	//LayerNav.style.left = lgTemp + 'px';
	}


function EsrResizeGenWithOffset(lgOffset) {
	var lgTemp;

	lgTemp	= document.body.clientHeight - parseInt(LayerNav.style.height) - lgOffset;
	if (lgTemp < 100) lgTemp = 100;
	LayerDetail.style.height = lgTemp;	
	lgTemp = Math.ceil((parseInt(document.body.clientWidth)/2) - (parseInt(LayerDetail.style.width)/2));	
	if (lgTemp < 10) lgTemp = 10;
	LayerDetail.style.left = lgTemp + 'px';
	
	//lgTemp = Math.ceil((parseInt(document.body.clientWidth)/2) - (parseInt(LayerNav.style.width)/2));	
	//if (lgTemp < 10) lgTemp = 10;
	//LayerNav.style.left = lgTemp + 'px';
	}



function EsrResizeGenHdrWithOffset(lgOffset) {
	var lgTemp;

	lgTemp	= document.body.clientHeight - parseInt(LayerNav.style.height) + lgOffset;
	if (lgTemp < 100) lgTemp = 100;
	LayerDetail.style.height = lgTemp;	
	lgTemp = Math.ceil((parseInt(document.body.clientWidth)/2) - (parseInt(LayerDetail.style.width)/2));	
	if (lgTemp < 10) lgTemp = 10;
	LayerDetail.style.left = lgTemp + 'px';
	LayerDetailHdr.style.left = lgTemp + 'px';
	
	//lgTemp = Math.ceil((parseInt(document.body.clientWidth)/2) - (parseInt(LayerNav.style.width)/2));	
	//if (lgTemp < 10) lgTemp = 10;
	//LayerNav.style.left = lgTemp + 'px';
	}



function deleteElement(array, n) {
  //delete the nth element of array
  var length = array.length;
  if (n >= length || n<0)
    return;

  for (var i=n; i<length-1; i++)
    array[i] = array[i+1];
  array.length--;
	}


function ArrayDelElement(array, n) {
  //delete the nth element of array
  var length = array.length;
  if (n >= length || n<0)
    return;

  for (var i=n; i<length-1; i++)
    array[i] = array[i+1];
  array.length--;
	}


function NYI() {
	alert("Not Installed");
	}



function ListPromptNew(type, lb) {
	var	strVal, oOpt;
	
	strVal = prompt('New ' + type + '?','');
	if (strVal != null) {
		oOpt = document.createElement("OPTION");
		oOpt.text = strVal;
		//oOpt.value = strVal;
		lb.options.add(oOpt);
		}
	}
	
function ListValNew(type, lb, val, text) {
	var	oOpt;
	
	oOpt = document.createElement("OPTION");
	oOpt.text = text;
	oOpt.value = val;
	lb.options.add(oOpt);
	lb.style.width='auto';
	}

function ListValChg(type, lb, strVal, bAuto) {
	var	oOpt;
	
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			oOpt = lb.options[lb.selectedIndex];
			oOpt.text = strVal;
			oOpt.value = strVal;				
			}
		}
	}

function ListPromptChg(aoran, type, lb) {
	var	strVal, oOpt;
	
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			oOpt = lb.options[lb.selectedIndex];
			strVal = prompt('Change ' + type + '?', oOpt.text);			
			if (strVal != null) {				
				oOpt.text = strVal;
				//oOpt.value = strVal;				
				}
			}
		 else {
			alert('Please select ' + aoran + ' ' + type + ' to change');
			}
		}
	}		

function ListPromptChgNotify(aoran, type, lb, oObj) {
	var	oOpt;

	//oObj = new Object();
	oObj.ID = '';
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			oOpt = lb.options[lb.selectedIndex];
			oObj.text = prompt('Change ' + type + '?', oOpt.text);			
			if (oObj.text != null) {				
				oOpt.text = oObj.text;
				oObj.ID = oOpt.value;
				}
			}
		 else {
			alert('Please select ' + aoran + ' ' + type + ' to change');
			}
		}
	}		

function ListPromptDel(aoran, type, lb) {
	var	bVal, oOpt;
	
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			oOpt = lb.options[lb.selectedIndex];
			bVal = true;
			if (bVal) {				
				lb.remove(lb.selectedIndex);	
				if (lb.length == 0) {
					lb.style.width='500px';
					}
				 else {
					lb.options[0].selected = true;
					}
				}
			}
		 else {
			alert('Please select ' + aoran + ' ' + type + ' to delete');
			}
		}
	}		

function ListPromptDelNotify(aoran, type, lb) {
	var	bVal, oOpt;
	
	ID = '';
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			oOpt = lb.options[lb.selectedIndex];
			ID = oOpt.value;
			bVal = true;
			if (bVal) {				
				lb.remove(lb.selectedIndex);	
				if (lb.length == 0) {
					lb.style.width='500px';
					}
				 else {
					lb.options[0].selected = true;
					}
				}
			}
		 else {
			alert('Please select ' + aoran + ' ' + type + ' to delete');
			}
		}
	return(ID);
	}		


function FldMaxSz(obj, maxlen) {
	if (obj.value.length > maxlen) {
		obj.value = obj.value.substr(0,maxlen);
		alert('This field is restricted to ' + maxlen + ' characters');
		}
	}


//--- formerly of PublUtils   12/26/01 15:45

var Hdl;
var HdlID;
var Story;
var strChgColor = "red";



function LbInit(lb, txtBox) {

	var i;

	Hdl = new Array();
	HdlID = new Array();
	Story = new Array();
	
	document.getElementById("pMsgBox").value = "";
	txtBox.value = "";	
	
	}	


function StoryIndexFind(lb) {

	var	i;
	var bFound;
	var	strVal;	


	bFound = false;
	if (lb.selectedIndex >= 0) {
		strVal = lb.options[lb.selectedIndex].value;		
		
		for (i=0; i<Hdl.length; i++) {
			if (HdlID[i] == strVal) {
				bFound = true;
				break;
				}
			}
		}
				
	if (!bFound) {
	 	i = -1;	
	 	}		
		
	return(i);
	}
	

function HeadlLoad(lb, strHeadlID, strHeadl, strStory) {
	
	var	lgHeadlSeq;
	

	lgHeadlSeq = Hdl.length;
	Hdl[lgHeadlSeq] = strHeadl;
	HdlID[lgHeadlSeq] = strHeadlID;		
	Story[lgHeadlSeq] = strStory;

	AddValue(lb, Hdl[lgHeadlSeq], HdlID[lgHeadlSeq]);

	}


	
function HeadlSeqIndexFind(lb, nSeq) {

	var	i;
	var bFound;
	var	Val;
	

	Val = lb.options[nSeq].value;	
	
	bFound = 0;
	for (i=0; i<Hdl.length; i++) {
		if (HdlID[i] == Val) {
			bFound = 1;
			break;
			}
		}
		
	if (!bFound) {
	 	i = -1;	
	 	}		
		
	return(i);
	}
	

function HeadlValueFind(strVal) {

	var	i;
	var bFound;
	var	Val;
	

	bFound = 0;
	for (i=0; i<Hdl.length; i++) {
		if (HdlID[i] == strVal) {
			bFound = 1;
			break;
			}
		}
		
	if (!bFound) {
	 	i = -1;	
	 	}		
		
	return(i);
	}
	



function StoryLoad(lb, txtBox) {

	var	i;	
	
	
	i = StoryIndexFind(lb);
						
	if (i >= 0) {
		txtBox.value = Story[i];
		}
	 else {
	 	//txtBox.value = "<no story found>";	
		txtBox.value = "";	
	 	}
	}


function StoryUpdate(lb, txtBox, strMsgBoxID) {

	var	i, Msg, tOpt, strIDNew;	
	
	
	lgRem = lb.selectedIndex;	
	tOpt = lb.options[lgRem];
	strIDNew = HeadlIDNew();

	i = StoryIndexFind(lb);
						
	if (i >= 0) {
		Story[i] = txtBox.value;
		lb.options[lb.selectedIndex].style.color = strChgColor;
		HdlID[i] = strIDNew;
		tOpt.value = strIDNew;
		}
	 else {
	 	txtBox.value = "<no story found>";	
	 	}
		
	StatusBox(strMsgBoxID, "changes pending");
	}


function StatusBox(strMsgBoxID, strMsg) {

	var	MsgBox;
	
	
	MsgBox = document.getElementById(strMsgBoxID);	
	MsgBox.innerText = strMsg;	
	MsgBox.style.color = strChgColor;
	}



function HeadlChg(lb, txtBox) {
	
	var	lgRem, lgHeadlSeq;
	var strNew, strIDNew;
	
	
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			lgRem = lb.selectedIndex;	
			tOpt = lb.options[lgRem];
			strNew = prompt("New Headline?", tOpt.text);
			if (strNew != null) {
				strIDNew = HeadlIDNew();
				tOpt.text = strNew;
				lgHeadlSeq = StoryIndexFind(lb);
				if (lgHeadlSeq >= 0) {
					Hdl[lgHeadlSeq] = strNew;
					HdlID[lgHeadlSeq] = strIDNew;
					tOpt.value = strIDNew;
					}
				else {
					alert("Unable to locate the headline - please reload the page and start over");
					}			
				}
			}
		else {
			alert("You must select a headline to change");
			}
		}
	}


function HeadlAdd(lb, txtBox) {
	
	var	lgHeadlSeq;
	var strNew, strValue, strValueBase;
	//var timNow;
	var	nRetryCt;
	
	var	tOpt;
	

	strNew = prompt("New Headline?", "");
	if (strNew != null) {
		//timNow = new Date();
		//strValue = "new," + timNow;
		strValue = HeadlIDNew();
		strValueBase = strValue;
		nRetryCt = 0;
		while ((HeadlValueFind(strValue) >= 0) && (nRetryCt < 100)) {
			strValue = strValueBase + nRetryCt;
			nRetryCt++;
			}	// and what if we die here?
			
		tOpt = document.createElement("OPTION");
		tOpt.text = strNew;
		tOpt.value = strValue;
		AddValue(lb, strNew, strValue)	
		lgHeadlSeq = Hdl.length;
		Hdl[lgHeadlSeq] = strNew;
		HdlID[lgHeadlSeq] = strValue;		
		Story[lgHeadlSeq] = "{replace this with the story text}";
		lb.selectedIndex = lb.length-1;
		StoryLoad(lb, txtBox);
		txtBox.select();
		txtBox.focus();
		}
	}




function HeadlIDNew() {

	var		timNow;
	var		strID;


	timNow = new Date();
	strID = "new:" + timNow;

	return(strID);
	}


		
function MoveUp(lb) {
	
	var	lgRem;
	
	
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			lgRem = lb.selectedIndex;	
		
			tOpt = lb.options[lgRem];
			lb.options.remove(lgRem);
			lb.options.add(tOpt, lgRem-1);
			}
		else {
			alert("You must select a headline to move");
			}
		}
	}


function MoveDown(lb) {
	var	lgRem;
	
	if (lb.length > 0) {
		if (lb.selectedIndex >=0) {
			lgRem = lb.selectedIndex;
			tOpt = lb.options[lgRem];
			lb.options.remove(lgRem);
	
			if (lgRem < lb.length) {
				lb.options.add(tOpt, lgRem+1);	
				}
			 else {
				lb.options.add(tOpt, 0);	
				}	
			}
		else {
			alert("You must select a headline to move");
			}
		}
	}
	
		
function HeadlDel(lb, txtBox) {
	var	lgRem;
	
	if (lb.length > 0) {
		if (lb.selectedIndex >= 0) {
			lgRem = lb.selectedIndex;
			tOpt = lb.options[lgRem];
			lb.options.remove(lgRem);
			if (lgRem < lb.length) {
				lb.selectedIndex = lgRem;	
				}
			else {
				lb.selectedIndex = lgRem-1;	
				}
			
			StoryLoad(lb, txtBox);
			}
		else {
			alert("You must select a headline to delete");
			}			
		}
	}


function GetValue(lb) {
	
	alert("Value item '" + lb.options[lb.selectedIndex].value  + "'");
	}


function AddValue(lb, strText, strValue) {
	
	var	lgRem;
	var	tOpt;
	
	
	tOpt = document.createElement("OPTION");
	tOpt.text = strText;
	tOpt.value = strValue;	
	lb.options.add(tOpt);
	}


function LbSelect(lb, txt) {
	
	txt.value = lb.options[lb.selectedIndex].text;	
	}


function PrepReply(lb, txtSetStruct, txtSet1, txtSet2, txtSet3, txtSet4, txtSet5) {

	var	i, nStoryIndex;
	

	txtSetStruct.value = "5|" + lb.length + "|0|0|0|0|";
	txtSet1.value = lb.length + "|";
	
	for (i=0; i<lb.length; i++) {
		nStoryIndex = HeadlSeqIndexFind(lb, i);
		txtSet1.value += HdlID[nStoryIndex] + "|" + Hdl[nStoryIndex] + "|" + Story[nStoryIndex] + "|";
		}
	}







function TabNavUpdate(nTab){
	if (document.getElementById){
		for (i=1;i<tabNavNumTabs+1;i++){
			document.getElementById('contentblock'+i).style.display='none';
			document.getElementById('link'+i).className= 'TabLinkInactiveCont';
			}
		document.getElementById('contentblock'+nTab).style.display='block';
		document.getElementById('link'+nTab).className= 'TabLinkActive';
		}
	}


function TabNavNamed(TabGrp, tabSelName, fcnNotify){
	for (i=0;i<TabGrp.length; i++) {
		if (TabGrp[i].tabName == tabSelName) {
			document.getElementById(TabGrp[i].contDivName).style.display='block';
			document.getElementById(TabGrp[i].tabNavName).className= TabGrp[i].tabActClass;
			if (fcnNotify != undefined) fcnNotify(tabSelName)
			}
		 else {
			document.getElementById(TabGrp[i].contDivName).style.display='none';
			document.getElementById(TabGrp[i].tabNavName).className= TabGrp[i].tabInactClass;
			}
		}
	}

function TabClassChg(TabGrp, tabSelName, ActClass, InactClass){
	for (i=0;i<TabGrp.length; i++) {
		if (TabGrp[i].tabName == tabSelName) {
			TabGrp.tabActClass = ActClass;
			TabGrp.tabInactClass = InactClass;
			}
		}
	}
