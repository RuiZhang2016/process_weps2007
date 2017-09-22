/*
 Milonic DHTML Website Navigation Menu - Version 3.5
 Written by Andy Woolley - Copyright 2002 (c) Milonic Solutions Limited. All Rights Reserved.
 Please visit http://www.milonic.co.uk/menu or e-mail menu3@milonic.com for more information.
 
 The Free use of this menu is only available to Non-Profit, Educational & Personal web sites.
 Commercial and Corporate licenses  are available for use on all other web sites & Intranets.
 All Copyright notices MUST remain in place at ALL times and, please keep us informed of your 
 intentions to use the menu and send us your URL.
*/


//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.



////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special  string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
function openNewWindow(winURL,winWidth,winHeight,winConfig){
     mmConfig=""
     mmConfig="width="+winWidth+","
     mmConfig+="height="+winHeight+","
     mmConfig+=winConfig
     var mmWin=open(winURL,"",mmConfig);
     mmWin.focus();
}

if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
	 effect = "Fade(duration=0.3);Alpha(style=0,opacity=90)"
}
else
{
	// effect = "Shadow(color='#777777', Direction=135, Strength=5)" // Stop IE5.5 bug when using more than one filter
}

timegap=300			// The time delay for menus to remain visible
followspeed=5		// Follow Scrolling speed
followrate=50		// Follow Scrolling Rate
suboffset_top=0;	// Sub menu offset Top position 
suboffset_left=0;	// Sub menu offset Left position
closeOnClick = true

style1=[					// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"#FBF1CF",			// Mouse Off Font Color
"#A49252",			// Mouse Off Background Color
"#A49252",			// Mouse On Font Color
"#FBF1CF",			// Mouse On Background Color
"#C6B578",			// Menu Border Color 
11,							// Font Size (default is px but you can specify mm, pt or a percentage)
"normal",					// Font Style (italic or normal)
"normal",						// Font Weight (bold or normal)
"Arial",	// Font Name
2,							// Menu Item Padding
"http://www.fiu.edu/docs/menu/arrow.gif",	// Sub Menu Image (Leave this blank if not needed)
,							// 3D Border & Separator bar
,					// 3D High Color
,					// 3D Low Color
,					// Current Page Item Font Color (leave this blank to disable)
,						// Current Page Item Background Color (leave this blank to disable)
"menu/arrow.gif",	// Top Bar image (Leave this blank to disable)
,					// Menu Header Font Color (Leave blank if headers are not needed)
,					// Menu Header Background Color (Leave blank if headers are not needed)
"#A0965A",				// Menu Item Separator Color
]


addmenu(menu=[		// This is the array that contains your menu properties and details
"prospective_students",			// Menu Name - This is needed in order for the menu to be called
184,					// Menu Top - The Top position of the menu in pixels
"offset=-300",			// Menu Left - The Left position of the menu in pixels
145,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
0,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional s on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
0, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use
,"Greeting from the President","http://law.fiu.edu/future_students/president.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Greeting from the Dean","http://law.fiu.edu/future_students/dean.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"The University","http://law.fiu.edu/future_students/university.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Mission Statement","http://law.fiu.edu/future_students/mission.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Miami & South Florida","http://law.fiu.edu/future_students/miami_sf.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Admissions","http://law.fiu.edu/admissions/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Student Life","http://law.fiu.edu/student_life/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
])

addmenu(menu=[		// This is the array that contains your menu properties and details
"current_students",			// Menu Name - This is needed in order for the menu to be called
184,					// Menu Top - The Top position of the menu in pixels
"offset=-165",			// Menu Left - The Left position of the menu in pixels
135,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
0,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional s on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
0, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use
,"Frequently Asked Questions","http://law.fiu.edu/current_students/faq.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Calendars","http://law.fiu.edu/academic_info/calendars.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Records & Registration","http://law.fiu.edu/registration/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Class & Examination Schedules","http://law.fiu.edu/academic_info/calendars.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Student Life","http://law.fiu.edu/student_life/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Photo Gallery","http://law.fiu.edu/current_students/photogallery.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Commencement","http://law.fiu.edu/commencement/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
])

addmenu(menu=[		// This is the array that contains your menu properties and details
"academic_info",			// Menu Name - This is needed in order for the menu to be called
184,					// Menu Top - The Top position of the menu in pixels
"offset=-49",			// Menu Left - The Left position of the menu in pixels
145,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
0,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional s on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
0, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use
,"College of Law Curriculum","http://law.fiu.edu/academic_info/curriculum.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Foundation Curriculum","http://law.fiu.edu/academic_info/curriculum.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Upper Level Curriculum","http://law.fiu.edu/academic_info/upper_level_curriculum.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Academic Programs","http://law.fiu.edu/academic_info/programs.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Academic Opportunities","http://law.fiu.edu/academic_info/academic_opps.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Grading Requirements and Grading System","http://law.fiu.edu/academic_info/grading_requirements_and_grading_system.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Academic Policies & Regulations","http://law.fiu.edu/academic_info/policies_regs.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Academic Calendar","http://law.fiu.edu/academic_info/academic_calendar.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Examination Schedule","http://law.fiu.edu/academic_info/exam_schedule.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Class Schedule","http://law.fiu.edu/academic_info/class_schedule.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Book List","book_list.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"First Week Course Assignments","http://law.fiu.edu/current_students/Current_Students_First_Week_%20Assignments_Fall_2006.pdf",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"1L's First Week Assignments","http://law.fiu.edu/admitted/1Ls_First_Week_Assignments_Fall_2006.pdf",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
])

addmenu(menu=[		// This is the array that contains your menu properties and details
"library_it",			// Menu Name - This is needed in order for the menu to be called
210,					// Menu Top - The Top position of the menu in pixels
"offset=-298",			// Menu Left - The Left position of the menu in pixels
145,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
0,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional s on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
0, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use
,"Ask a Librarian","http://law.fiu.edu/library_it/gen_info/ask_librarian.php",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Services and Policies","http://law.fiu.edu/library_it/gen_info/services_policies.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Hours and Directions","http://law.fiu.edu/library_it/gen_info/hours_directions.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Library Staff","http://law.fiu.edu/library_it/gen_info/staff.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Information Technology Lab","http://law.fiu.edu/library_it/technology_lab.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Web Research Links","http://law.fiu.edu/library_it/links.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Subscription Databases","http://law.fiu.edu/library_it/databases.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Search Library Catalog","http://fi.aleph.fcla.edu/F",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Infotrac","http://web6.infotrac.galegroup.com/itw/infomark/0/1/1/purl=rc6_LT?sw_aep=flstuniv",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"LexisNexis","http://www.lexis.com/",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Westlaw","http://web2.westlaw.com/signon/default.wl?newdoor=true",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"FIU Library Home","http://www.fiu.edu/~library/",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
])

addmenu(menu=[		// This is the array that contains your menu properties and details
"career_plan",			// Menu Name - This is needed in order for the menu to be called
210,					// Menu Top - The Top position of the menu in pixels
"offset=-105",			// Menu Left - The Left position of the menu in pixels
145,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
0,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional s on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
0, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use
,"Career Calendar of Events","http://calendar.fiu.edu/cgi-bin/webevent.cgi?cmd=opencal&cal=cal22&",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Resources &amp; Programs","http://law.fiu.edu/careers/resources/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Employment","http://law.fiu.edu/careers/employment/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Prospective Employers","http://law.fiu.edu/careers/employers/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"NALP Graduate Employment Survey","http://law.fiu.edu/careers/nalp/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Florida Bar Information","http://law.fiu.edu/careers/florida_bar_information/bar.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"CPPO Dicta","http://law.fiu.edu/careers/dicta/index.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Contact Us","http://law.fiu.edu/careers/our_office/contact.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
])

addmenu(menu=[		// This is the array that contains your menu properties and details
"dev_comm",			// Menu Name - This is needed in order for the menu to be called
210,					// Menu Top - The Top position of the menu in pixels
"offset=265",			// Menu Left - The Left position of the menu in pixels
145,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
0,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional s on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
0, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use
,"Giving Opportunities","http://law.fiu.edu/dev_comm/development_giving.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Volunteer Board","http://law.fiu.edu/dev_comm/development_volunteer.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Ways to Give","http://law.fiu.edu/dev_comm/development_ways.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Online Contribution","http://law.fiu.edu/dev_comm/contribute.htm",,"",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
])

dumpmenus()