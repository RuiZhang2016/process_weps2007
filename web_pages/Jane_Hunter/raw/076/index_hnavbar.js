//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)index_hnavbar.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".index_hnavbar_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#6d5310;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".index_hnavbar_plain, a.index_hnavbar_plain:link, a.index_hnavbar_plain:visited{text-align:left;background-color:#6d5310;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.index_hnavbar_plain:hover, a.index_hnavbar_plain:active{background-color:#daa520;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xebea75;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,2,0,0)
mainMenuItem("index_hnavbar_b1",".gif",20,97,"javascript:;","","Home",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b2",".gif",20,97,"javascript:;","","Ancestry",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b3",".gif",20,97,"javascript:;","","Photo Albums ",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b4",".gif",20,97,"javascript:;","","Social",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b5",".gif",20,97,"javascript:;","","Links",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b6",".gif",20,97,"javascript:;","","Blogs",2,2,"index_hnavbar_plain");
endMainMenu("",0,0);

startSubmenu("index_hnavbar_b6","index_hnavbar_menu",97);
submenuItem("Ron's Blogs",loc+"../"+"../Blogs/LegSearch.html","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b6");

startSubmenu("index_hnavbar_b5","index_hnavbar_menu",141);
submenuItem("Genealogy",loc+"../"+"../Links/genes.htm","","index_hnavbar_plain");
submenuItem("Image Manipulation",loc+"../"+"../Links/images.htm","","index_hnavbar_plain");
submenuItem("Web Design",loc+"../"+"../Links/web.htm","","index_hnavbar_plain");
submenuItem("Web Protection",loc+"../"+"../Links/mal.htm","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b5");

startSubmenu("index_hnavbar_b4","index_hnavbar_menu",108);
submenuItem("Plus Groups",loc+"../"+"../social/18plus.html","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b4");

startSubmenu("index_hnavbar_b3","index_hnavbar_menu",104);
submenuItem("Family History",loc+"../"+"../"+"../fergys2/Photo_Album.htm","","index_hnavbar_plain");
submenuItem("Europe",loc+"../"+"../"+"../fergys2/Europe.html","","index_hnavbar_plain");
submenuItem("England",loc+"../"+"../"+"../fergys2/England_Album.htm","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b3");

startSubmenu("index_hnavbar_b2","index_hnavbar_menu",125);
submenuItem("Contents",loc+"../"+"../genealogy/ancestry.htm","","index_hnavbar_plain");
submenuItem("Ferguson Family",loc+"../"+"../genealogy/1.html","","index_hnavbar_plain");
submenuItem("Grimshaw Family",loc+"../"+"../Grimshaw/1.html","","index_hnavbar_plain");
submenuItem("Names",loc+"../"+"../genealogy/names.htm","","index_hnavbar_plain");
submenuItem("Surnames",loc+"../"+"../genealogy/surnames.htm","","index_hnavbar_plain");
submenuItem("Locations",loc+"../"+"../genealogy/Location_List.html","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b2");

startSubmenu("index_hnavbar_b1","index_hnavbar_menu",97);
submenuItem("Home",loc+"../"+"../genealogy/home.html","","index_hnavbar_plain");
submenuItem("Updates",loc+"../"+"../genealogy/updates.html","","index_hnavbar_plain");
submenuItem("Site Map",loc+"../"+"../genealogy/site.html","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b1");

loc="";
