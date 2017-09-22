/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=5;			// Number of first level items
	var LowBgColor='white';			// Background color when mouse is not over
	var LowSubBgColor='white';			// Background color when mouse is not over on subs
	var HighBgColor='red';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='red';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='center';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=95;				// Menu offset x coordinate
	var StartLeft=90;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=1;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['http://www.gpcservices.com/tri.gif',5,10,'http://www.gpcservices.com/tridown.gif',10,5,'http://www.gpcservices.com/trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Formation","","",4,20,75);  
	Menu1_1=new Array("Windows xp","http://www.gpcservices.com/windows/index.php","",0,20,120);	
	Menu1_2=new Array("Office","http://www.gpcservices.com/formation","",3,20,120);	
	Menu1_2_1=new Array("Word","http://www.gpcservices.com/formation/word","",0,20,120);
	Menu1_2_2=new Array("Excel","http://www.gpcservices.com/formation/excel","",0,20,120);
	Menu1_2_3=new Array("Powerpoint","http://www.gpcservices.com/formation/powerpoint","",0,20,120);
	Menu1_3=new Array("Trucs & Astuces","","",8,20,120);	
	Menu1_3_1=new Array("Astuce du jour","http://www.gpcservices.com/partenariat/pcastuces/index.htm","",0,20,120);
	Menu1_3_2=new Array("Propose une Astuce","http://www.gpcservices.com/astuces/editeur.php","",0,20,120);
	Menu1_3_3=new Array("Windows xp","http://www.gpcservices.com/astuces/news.php?itemid=1","",0,20,120);
	Menu1_3_4=new Array("Word","http://www.gpcservices.com/astuces/news.php?itemid=2","",0,20,120);
	Menu1_3_5=new Array("Excel","http://www.gpcservices.com/astuces/news.php?itemid=3","",0,20,120);
	Menu1_3_6=new Array("Powerpoint","http://www.gpcservices.com/astuces/news.php?itemid=4","",0,20,120);
	Menu1_3_7=new Array("Internet explorer","http://www.gpcservices.com/astuces/news.php?itemid=5","",0,20,120);
	Menu1_3_8=new Array("Outlook Express","http://www.gpcservices.com/astuces/news.php?itemid=6","",0,20,120);
	
	Menu1_4=new Array("Commentcamarche","http://www.gpcservices.com/commentcamarche","",0,20,120);	

Menu2=new Array("Services","","",6,20,65);
	Menu2_1=new Array("Bourse en ligne","http://www.gpcservices.com/bourse","",0,20,120);	
	Menu2_2=new Array("Antivirus en ligne","http://www.gpcservices.com/scan/","",0);
	Menu2_3=new Array("Annuaire internet","http://www.gpcservices.com/dwodp","",0);
        Menu2_4=new Array("Télécharger","http://gpcservices.logitheque.com","",0);
        Menu2_5=new Array("Petites annonces","http://annonces.gpcservices.com","",0); 
        Menu2_6=new Array("Comparateur","http://www.gpcservices.com/comparateur.php","",0);
                          

Menu3=new Array("Forum","","",3,20,55);
	Menu3_1=new Array("Aide en ligne","http://www.gpcservices.com/forum/","",0,20,120);
	Menu3_2=new Array("Conseils d'achat","http://www.gpcservices.com/forum/","",0);
	Menu3_3=new Array("SAV","http://www.gpcservices.com/forum/","",0);

Menu4=new Array("Boutique","","",5,20,65);
	Menu4_1=new Array("Ordinateurs","","",2,20,120);
        Menu4_1_1=new Array("Neuf","http://www.gpcservices.com/materiel-informatique.php","",0,20,120);
	Menu4_1_2=new Array("Occasion","http://www.gpcservices.com/occasion.php","",0,20,120);
	Menu4_2=new Array("Périphériques","http://www.gpcservices.com/peripheriques.php","",0);
	Menu4_3=new Array("Organisateurs","http://www.gpcservices.com/palm.php","",0);
	Menu4_4=new Array("Pièces détachées","http://www.gpcservices.com/materiel.php","",0);
	Menu4_5=new Array("Consomables","http://www.gpcservices.com/cartouches.php","",0);


Menu5=new Array("Actualités","javascript:top.location.href='http://www.gpcservices.com/news/actualites.php'","",0,20,60);
