// UDMv4.42 //
/***************************************************************/
var um={'menuClasses':[],'itemClasses':[],'menuCode':[]};
/***************************************************************\

  ULTIMATE DROP DOWN MENU Version 4.42 by Brothercake
  http://www.udm4.com/
  
  This script may not be used or distributed without license

\***************************************************************/


/***************************************************************\
 * CORE CONFIGURATION
\***************************************************************/


//path to images folder 
um.baseSRC = "udm-resources/";


//navbar orientation
um.orientation = [
	"horizontal",	// alignment ["vertical"|"horizontal"|"popup"|"expanding"]
	"left",		// h align ["left"|"right"]
	"top",		// v align ["top"|"bottom"]
	"relative",	// positioning ["relative"|"absolute"|"fixed"|"allfixed"]
	"0",		// x position ["em"|"ex"|"px"|"0"]
	"0",		// y position ["em"|"ex"|"px"|"0"]
	"1000",		// z order ["0" to "10000"] (menu takes 20000 headroom)
	];
	

//navbar list output
um.list = [
	"rigid",	// horizontal overflow ["rigid"|"flexible"]
	"yes",		// -SPARE-
	"no", 		// -SPARE-
	];


//menu behaviors	
um.behaviors = [
	"100",		// open timer ["milliseconds"|"0"]
	"400",		// close timer ["milliseconds"|"never"|"0"]
	"yes",		// reposition menus to stay inside the viewport ["yes"|"no"]
	"default",	// manage windowed controls for win/ie ["default","hide","iframe","none"]
	];


//reset behaviors
um.reset = [
	"yes",		// reset from document mouse click ["yes"|"no"]
	"yes",		// reset from window resize ["yes"|"no"]
	"yes",		// reset from text resize ["yes"|"no"]
	"yes",		// reset after following link ["yes"|"no"]
	];


//horizontal continuation strip
um.hstrip = [
	"none",		// background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
	"yes",		// copy navbar item margin-right to margin-bottom ["yes"|"no"] ????????
	];
	
	
/***************************************************************\
 * MODULE SETTING
\***************************************************************/


//keyboard navigation [comment out or remove if not using]
//um.keys = [
	//"38",		// up ["n"] ("38" = up arrow key)
	//"39",		// right ["n"] ("39" = right arrow key)
	//"40",		// down ["n"] ("40" = down arrow key)
	//"37",		// left ["n"] ("37" = left arrow key)
	//"123",		// hotkey ["n"] ("38" = F12]
	//"none",		// hotkey modifier ["none"|"shiftKey"|"ctrlKey"|"altKey"|"metaKey"]
	//"27",		// escape ["n"|"none"] ("27" = escape key)
	//"document.getElementsByTagName('a')[0]", // exit focus ["js-expression"]
	//];


/***************************************************************\
 * NAVBAR DEFAULT STYLES (MAIN MENU BAR)
\***************************************************************/


//styles which apply to the navbar
um.navbar = [
	"-1",		// DROPDOWN nav -> menu x-offset (+-)["n" pixels] POSITIONS DROPDOWN LEFT OR RIGHT
	"0",		// DROPDOWN nav -> menu y-offset (+-)["n" pixels]
	"",	// width ["em"|"ex"|"px"] (VERTICAL NAVBAR ONLY - horizontal navbar items have "auto" width) ("%" doesn't work right) 
	];


//styles which apply to each navbar ITEM PRIMARY NAV LEVEL
um.items = [
	"0",		// margin between items ["n" pixels]
	"0",		// border size ["n" pixels] (single value only)
	"collapse",	// border collapse ["collapse"|"separate"] (only applies when margin = "0")
	"",// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"",	// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"",// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",	// left/right padding ["n" pixels] (single value only) SPACE BETWEEN MAIN NAVBAR ITEMS
	"",	// top/bottom padding ["n" pixels] (single value only)
	"#ffffff",	// background ["color"|"#hex"|"rgb()"|"image.gif"]
	"#ffffff",	// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
	"#ffffff",	// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
	"12px",		// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
	"arial,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
	"bold",		// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
	"none",		// text decoration ["none"|"underline"|"overline"|"line-through"]
	"left",		// text-align ["left"|"right"|"center"]
	"#660033",	// color ["color"|"#hex"|"rgb()"]
	"#000000",	// hover/focus color ["color"|"#hex"|"rgb()"]
	"#660033",	// visited color ["color"|"#hex"|"rgb()"]
	"normal",	// font-style ["normal"|"italic"|"oblique"]
	"normal",	// hover/focus font-style ["normal"|"italic"|"oblique"]
	"normal",	// visited font-style ["normal"|"italic"|"oblique"]
	"padding:2px 21px 0 0; white-space:nowrap;", // additional link CSS (careful!)
	"",		// additional hover/focus CSS (careful!)
	"",		// additional visited CSS (careful!)
	"none",	// menu indicator character/image ["text"|"image.gif"|"none"] 
	"none",	// menu indicator rollover character/image ["text"|"image.gif"|"none"] (must be same type)
	"",		// clipping width of indicator image ["n" pixels] (only when using image arrows)
	"",		// alt text of indicator image ["text"] (only when using image arrows)
	];


/***************************************************************\
 * MENU DEFAULT STYLES Dropdown
\***************************************************************/


//styles which apply to each menu dropdown group
um.menus = [
	"0",		// menu -> menu x-offset (+-)["n" pixels] ????
	"0",		// menu -> menu y-offset (+-)["n" pixels] ????
	"0",		// border size ["n" pixels] (single value only) 
	"",// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"solid",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",	// width ["em"|"ex"|"px"]
	"",		// padding ["n" pixels] (single value only) 
	"",	// background ["color"|"#hex"|"rgb()"|"image.gif"]
	"",		// additional menu CSS (careful!) (you can use a transition here but *not* a static filter)
	"",	// shadow background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
	"",		// shadow offset (+-) ["em"|"px"|"pt"|"%"|"0"]
	"",	// additional shadow layer CSS (if you use a Microsoft.Shadow filter here then Win/IE5.5+ will do that *instead* of default shadow)
	];


//styles which apply to each menu ITEM DROPDOWN
um.menuItems = [
	"0",		// margin around items ["n" pixels] (single value only; margins are like table cellspacing)
	"0",		// border size ["n" pixels] (single value only)
	"collapse",	// border collapse ["collapse"|"separate"] (only applies when margin = "0")
	"",	// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",	// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"",	// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",	// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"",	// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",		// left/right padding ["n" pixels] (single value only) 
	"",		// top/bottom padding ["n" pixels] (single value only) 
	"#ffffff",	// background ["color"|"#hex"|"rgb()"|"image.gif"]
	"#ffffff",	// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
	"#ffffff",	// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
	"11px",		// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
	"arial,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
	"normal",	// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
	"none",		// text decoration ["none"|"underline"|"overline"|"line-through"]
	"left",		// text-align ["left"|"right"|"center"]
	"#660033",		// color ["color"|"#hex"|"rgb()"]
	"#000000",		// hover/focus color ["color"|"#hex"|"rgb()"]
	"#660033",		// visited color ["color"|"#hex"|"rgb()"]
	"normal",	// font-style ["normal"|"italic"|"oblique"]
	"normal",	// hover/focus font-style ["normal"|"italic"|"oblique"]
	"normal",	// visited font-style ["normal"|"italic"|"oblique"]
	"padding:0 20px 0 0; white-space:nowrap;",		// additional link CSS (careful!)
	"",		// additional hover/focus CSS (careful!)
	"",		// additional visited CSS (careful!)
	"none",	// submenu indicator character/image ["text"|"image.gif"|"none"] 
	"none",	// submenu indicator rollover character/image ["text"|"image.gif"|"none"] (must be the same type)
	"0",		// clipping width of indicator image ["n" pixels] (only when using image arrows)
	"..",		// alt text of indicator image ["text"] (only when using image arrows)
	];


/***************************************************************\
 * DYNAMIC MENUS
\***************************************************************/



	
	
/***************************************************************\
\***************************************************************/

