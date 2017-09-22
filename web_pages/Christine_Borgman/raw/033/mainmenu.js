
	var NoOffFirstLineMenus=7;		// Number of first level items
	var LowBgColor='#003366';      //#e8f1f9'; //#dbe9fd';	// Background color when mouse is not over
	var LowSubBgColor='#003366'; //#eff7fa';	// Background color when mouse is not over on subs
	var HighBgColor='#003366';		// Background color when mouse is over
	var HighSubBgColor='#000066';	// Background color when mouse is over on subs
	var FontLowColor='#ffffff';		// Font color when mouse is not over
	var FontSubLowColor='#ffffff';	// Font color subs when mouse is not over
	var FontHighColor='yellow';		// Font color when mouse is over
	var FontSubHighColor='yellow';	// Font color subs when mouse is over
	var BorderColor='#003366';		// Border color
	var BorderSubColor='#B6C3D5';		// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="helvetica, arial, verdana, times, sans ms,technical"	// Font family menu items
	var FontSize=9;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';		// Item text position 'left', 'center' or 'right'
	var MenuCentered='center';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.03;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.1;			// vertical overlap child/ parent
	var StartTop=74;				// Menu offset x coordinate
	var StartLeft=10;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=2;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=1;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=0;			// Frames in cols or rows 1 or 0
	var DissapearDelay=800;			// delay before menu folds in
	var TakeOverBgColor=0;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=0;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',9,9,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}

// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"


Menu1=new Array("Home","index.php","",2,18,60);
	Menu1_1=new Array("About i-DLR","about.php","",0,25,150);
	Menu1_2=new Array("Guide to i-DLR","guide.php","",0);
			
Menu2=new Array("Subject Area","subject.php","",8,35,100);
	Menu2_1=new Array("Introduction to DL","","",9,35,240);
		Menu2_1_1=new Array("Definitions of Digital Libraries","index.php?cid=34","",0,35,250);
		Menu2_1_2=new Array("DL Education","index.php?cid=36","",0);
		Menu2_1_3=new Array("DL Courses","index.php?cid=37","",0);
		Menu2_1_4=new Array("DL Organizations","index.php?cid=35","",0);
		Menu2_1_5=new Array("DL Meetings and Conferences","index.php?cid=38","",0);
		Menu2_1_6=new Array("DL Discussion Lists","index.php?cid=41","",0);
		Menu2_1_7=new Array("DL Periodicals","index.php?cid=40","",0);
		Menu2_1_8=new Array("DL Projects and Initiatives","index.php?cid=39","",0);
		Menu2_1_9=new Array("Who's Who in DL","index.php?cid=42","",0);

	Menu2_2=new Array("Theoretical and Historical Foundation","","",4,35,210);
		Menu2_2_1=new Array("Development of digital collections and digital libraries","index.php?cid=4","",0,35,280);	
		Menu2_2_2=new Array("History of libraries","index.php?cid=1","",0);
		Menu2_2_3=new Array("Human information behavior","index.php?cid=2","",0);	
		Menu2_2_4=new Array("Information retrieval theory","index.php?cid=3","",0);

	Menu2_3=new Array("Information Access and Utilization of Digital Libraries","","",3,35,210);
		Menu2_3_1=new Array("Information behavior in digital libraries","index.php?cid=25","",0,35,280);
		Menu2_3_2=new Array("Usability and evaluation research","index.php?cid=24","",0);
		Menu2_3_3=new Array("User and uses of digital libraries","index.php?cid=23","",0);

	Menu2_4=new Array("Knowledge Organization in Digital Libraries","","",5,35,210);
		Menu2_4_1=new Array("Classification","index.php?cid=17","",0,35,210);

		Menu2_4_2=new Array("Database integration","index.php?cid=18","",0);
		Menu2_4_3=new Array("Document formats","index.php?cid=19","",0);
		Menu2_4_4=new Array("Indexing","index.php?cid=16","",0);
		Menu2_4_5=new Array("Metadata","index.php?cid=15","",0);

	Menu2_5=new Array("Collection Development and Maintenance","","",3,35,210);
		Menu2_5_1=new Array("Digital archives","index.php?cid=20","",0,35,210);
		Menu2_5_2=new Array("Digital conversion technology","index.php?cid=21","",0);
		Menu2_5_3=new Array("Digital preservation","index.php?cid=22","",0);

	Menu2_6=new Array("Social, Economic and Policy Issues","","",5,35,210);
		Menu2_6_1=new Array("Copyright issues and intellectual property rights","index.php?cid=28","",0,38,280);
		Menu2_6_2=new Array("Cost of building digital libraries","index.php?cid=29","",0);
		Menu2_6_3=new Array("Electronic publishing","index.php?cid=26","",0);
		Menu2_6_4=new Array("Funding for digital libraries","index.php?cid=30","",0);
		Menu2_6_5=new Array("Scholarly communication","index.php?cid=27","",0);
	
	Menu2_7=new Array("Technical Infrastructure of Digital Library","","",10,35,220);
		Menu2_7_1=new Array("Communication protocols","index.php?cid=13","",0,30,280);
		Menu2_7_2=new Array("Database construction of digital libraries","index.php?cid=6","",0);
		Menu2_7_3=new Array("Distributed collections","index.php?cid=7","",0);
		Menu2_7_4=new Array("Information retrieval engines","index.php?cid=5","",0);
		Menu2_7_5=new Array("Interface design","index.php?cid=12","",0);
		Menu2_7_6=new Array("Interoperability","index.php?cid=9","",0);
		Menu2_7_7=new Array("Multimedia formats and applications","index.php?cid=8","",0);
		Menu2_7_8=new Array("Network technology","index.php?cid=10","",0);
		Menu2_7_9=new Array("Query languages","index.php?cid=14","",0);
		Menu2_7_10=new Array("Web applications in digital libraries","index.php?cid=11","",0);

	Menu2_8=new Array("Professional Issues","","",3,35,210);
		Menu2_8_1=new Array("Bibliographic instruction","index.php?cid=33","",0,35,240);
		Menu2_8_2=new Array("Management of digital libraries","index.php?cid=32","",0);
		Menu2_8_3=new Array("Roles and responsibilities of the digital librarian","index.php?cid=31","",0);

Menu3=new Array("Digital Links","sitelist1.php?vsort=sitename","",3,35,100);
		Menu3_1=new Array("sort by Title","sitelist1.php?vsort=sitename","",0,25,190);
		Menu3_2=new Array("sort by Popularity","sitelist1.php?vsort=siteclick","",0);
		Menu3_3=new Array("sort by Date Last Reviewed","sitelist1.php?vsort=dtreviewed","",0);	

Menu4=new Array("Suggested Readings","doclist1.php","",3,35,150);
		Menu4_1=new Array("sort by Title","doclist1.php?vsort=title","",0,25,180);
		Menu4_2=new Array("sort by Author/Editor","doclist1.php?vsort=author","",0);
		Menu4_3=new Array("sort by Year","doclist1.php?vsort=year","",0);

Menu5=new Array("Introductory Papers","paperlist1.php","",2,25,150);
		Menu5_1=new Array("sort by Title","paperlist1.php?vsort=title","",0,25,180);
		Menu5_2=new Array("sort by Date Reviewed","paperlist1.php?vsort=date","",0);


Menu6=new Array("Reference","reference.php","",3,25,100);
		Menu6_1=new Array("Frequently Asked Questions","faqlist1.php","",0,25,180);
		Menu6_2=new Array("Glossary","glolist1.php","",0);
		Menu6_3=new Array("Suggested Keywords","suggestkey.php","",0);

Menu7=new Array("Contribute","","",2,35,90);
		Menu7_1=new Array("Submit a link","submitsite.php","",0,25,160);
		Menu7_2=new Array("Send Feedback","contact.php","",0);
		//Menu7_3=new Array("Take part in User Survey","../survey/index.php","",0);
		
		