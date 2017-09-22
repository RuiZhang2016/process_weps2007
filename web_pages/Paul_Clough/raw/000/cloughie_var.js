/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=6;			// Number of first level items
	var LowBgColor='#eeeeee';			// Background color when mouse is not over
	var LowSubBgColor='#eeeeee';			// Background color when mouse is not over on subs
	var HighBgColor='#cccccc';			// Background color when mouse is over
	var HighSubBgColor='#cccccc';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='black';			// Font color when mouse is over
	var FontSubHighColor='black';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,sans serif,comic"	// Font family menu items
	var FontSize=9;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=240;				// Menu offset x coordinate
	var StartLeft=1;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=0;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='menu';			// Frame where first level appears
	var SecLineFrame='main';			// Frame where sub levels appear
	var DocTargetFrame='main';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['images/arrow.gif',13,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","javascript:top.location.href='index.html'","",0,20,138);

Menu2=new Array("Interests","","",4);
	Menu2_1=new Array("Text Reuse","textreuse.html","",0,20,150);	
	Menu2_2=new Array("Plagiarism detection","plagiarism.html","",0,20,150);
	Menu2_3=new Array("Corpus Linguistics","cl.html","",0);
	Menu2_4=new Array("CLIR","clir.html","",0);

Menu3=new Array("Publications","","",5);
	Menu3_1=new Array("Papers","papers.html","",0,20,150);
	Menu3_2=new Array("Presentations","presentations.html","",0);
	Menu3_3=new Array("Posters","posters.html","",0);
	Menu3_4=new Array("Software","software.html","",0);
	Menu3_5=new Array("Patents","patents.html","",0);

Menu4=new Array("Projects","","",3);
	Menu4_1=new Array("SPIRIT","javascript:NewWin=window.open('http://www.geo-spirit.org/project_full.html','NWin');window['NewWin'].focus()","",0,20,180);
	Menu4_2=new Array("Eurovision","javascript:NewWin=window.open('http://ir.shef.ac.uk/eurovision/index.html','NWin');window['NewWin'].focus()","",0,20,180);
	Menu4_3=new Array("METER","javascript:NewWin=window.open('http://www.dcs.shef.ac.uk/nlp/meter/','NWin');window['NewWin'].focus()","",0);

Menu5=new Array("Academic","academic.html","",0);

Menu6=new Array("Personal","","",4);
	Menu6_1=new Array("2W2L","javascript:NewWin=window.open('http://www.matthiasmedia.com.au/2wtl/','NWin');window['NewWin'].focus()","",0,20,140);
	Menu6_2=new Array("Out of hours","http://ir.shef.ac.uk/cloughie/me.htm","",0,20,140);
	Menu6_3=new Array("Foremarke 1","foremarke1.html","",0,20,140);
	Menu6_4=new Array("CV","javascript:NewWin=window.open('resume.pdf','NWin');window['NewWin'].focus()","",0,20,140);


