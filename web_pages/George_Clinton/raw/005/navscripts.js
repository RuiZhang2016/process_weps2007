function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
 var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function mmLoadMenus() {
  if (window.mm_menu_0019063312_0) return;
  window.mm_menu_0019063312_0 = new Menu("root",130,16,"Verdana, Arial, Helvetica, sans-serif",10,"#ffffff","#ffffff","#003366","#cc0000","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0019063312_0.addMenuItem("About Us","location='/aoc/index.cfm'");
  mm_menu_0019063312_0.addMenuItem("Architects","location='/aoc/architects/index.cfm'");
  mm_menu_0019063312_0.addMenuItem("Responsibilities","location='/aoc/responsibilities/index.cfm'");
  mm_menu_0019063312_0.addMenuItem("Annual Reports","location='/aoc/cfo/index.cfm'");
  mm_menu_0019063312_0.addMenuItem("Audit Committee","location='/aoc/cfo/committee/index.cfm'");
  mm_menu_0019063312_0.addMenuItem("Press Room","location='/aoc/press-room/index.cfm'");  
  mm_menu_0019063312_0.addMenuItem("FAQs","location='/aoc/frequently-asked-questions.cfm'");
   mm_menu_0019063312_0.hideOnMouseOut=true;
   mm_menu_0019063312_0.menuBorder=1;
   mm_menu_0019063312_0.menuLiteBgColor='#ffffff';
   mm_menu_0019063312_0.menuBorderBgColor='#555555';
   mm_menu_0019063312_0.bgColor='#ffffff';
window.mm_menu_0019063312_1 = new Menu("root",130,16,"Verdana, Arial, Helvetica, sans-serif",10,"#ffffff","#ffffff","#003366","#cc0000","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0019063312_1.addMenuItem("Overview","location='/cc/index.cfm'");
  mm_menu_0019063312_1.addMenuItem("Visiting","location='/cc/visit/index.cfm'");
  mm_menu_0019063312_1.addMenuItem("U.S. Capitol","location='/cc/capitol/index.cfm'");
  mm_menu_0019063312_1.addMenuItem("Office Buildings","location='/cc/cobs/index.cfm'");
  mm_menu_0019063312_1.addMenuItem("Grounds","location='/cc/grounds/index.cfm'");
  mm_menu_0019063312_1.addMenuItem("U.S. Botanic Garden","location='http://www.usbg.gov/'");
  mm_menu_0019063312_1.addMenuItem("Architecture","location='/cc/architecture/index.cfm'");
  mm_menu_0019063312_1.addMenuItem("Art","location='/cc/art/index.cfm'");
  mm_menu_0019063312_1.addMenuItem("Map","location='/cc/cc_map.cfm'");
   mm_menu_0019063312_1.hideOnMouseOut=true;
   mm_menu_0019063312_1.menuBorder=1;
   mm_menu_0019063312_1.menuLiteBgColor='#ffffff';
   mm_menu_0019063312_1.menuBorderBgColor='#555555';
   mm_menu_0019063312_1.bgColor='#ffffff';
window.mm_menu_0019063312_2 = new Menu("root",130,16,"Verdana, Arial, Helvetica, sans-serif",10,"#ffffff","#ffffff","#003366","#cc0000","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0019063312_2.addMenuItem("Overview","location='/cvc/index.cfm'");
  mm_menu_0019063312_2.addMenuItem("Project Information","location='/cvc/project_info/index.cfm'");
  mm_menu_0019063312_2.addMenuItem("Photos","location='/cvc/photos/index.cfm'");
  mm_menu_0019063312_2.addMenuItem("Renderings","location='/cvc/renderings/index.cfm'");
  mm_menu_0019063312_2.addMenuItem("FAQs","location='/cvc/faqs/index.cfm'");
  mm_menu_0019063312_2.addMenuItem("Exhibition Gallery","location='/cvc/exhibition_gallery/index.cfm'");
  mm_menu_0019063312_2.addMenuItem("Kids","location='/cvc/kids/index.cfm'");
   mm_menu_0019063312_2.hideOnMouseOut=true;
   mm_menu_0019063312_2.menuBorder=1;
   mm_menu_0019063312_2.menuLiteBgColor='#ffffff';
   mm_menu_0019063312_2.menuBorderBgColor='#555555';
   mm_menu_0019063312_2.bgColor='#ffffff'; 
 window.mm_menu_0019063312_3 = new Menu("root",130,16,"Verdana, Arial, Helvetica, sans-serif",10,"#ffffff","#ffffff","#003366","#cc0000","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0019063312_3.addMenuItem("Overview","location='/projects/index.cfm'");
  mm_menu_0019063312_3.addMenuItem("Past Projects","location='/projects/recently_featured.cfm'");
   mm_menu_0019063312_3.hideOnMouseOut=true;
   mm_menu_0019063312_3.menuBorder=1;
   mm_menu_0019063312_3.menuLiteBgColor='#ffffff';
   mm_menu_0019063312_3.menuBorderBgColor='#555555';
   mm_menu_0019063312_3.bgColor='#ffffff';  
  window.mm_menu_0019063312_4 = new Menu("root",160,16,"Verdana, Arial, Helvetica, sans-serif",10,"#ffffff","#ffffff","#003366","#cc0000","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0019063312_4.addMenuItem("Overview","location='/business/index.cfm'");
  mm_menu_0019063312_4.addMenuItem("Procedures","location='/business/procedures.cfm'");
  mm_menu_0019063312_4.addMenuItem("Procurement Opportunities","location='/business/procure-opps.cfm'");
   mm_menu_0019063312_4.hideOnMouseOut=true;
   mm_menu_0019063312_4.menuBorder=1;
   mm_menu_0019063312_4.menuLiteBgColor='#ffffff';
   mm_menu_0019063312_4.menuBorderBgColor='#555555';
   mm_menu_0019063312_4.bgColor='#ffffff'; 
  window.mm_menu_0019063312_5 = new Menu("root",145,16,"Verdana, Arial, Helvetica, sans-serif",10,"#ffffff","#ffffff","#003366","#cc0000","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0019063312_5.addMenuItem("Overview","location='/employment/index.cfm'");
  mm_menu_0019063312_5.addMenuItem("How to Apply","location='/employment/apply.cfm'");
  mm_menu_0019063312_5.addMenuItem("Vacancies","location='https://www.avuedigitalservices.com/vacancy.html?agency=AOC'");
  mm_menu_0019063312_5.addMenuItem("AOC Staff Section","location='/employment/aoc-staff/index.cfm'");
  mm_menu_0019063312_5.addMenuItem("Workers' Comp Program","location='/employment/aoc-staff/workers_comp/index.cfm'");
   mm_menu_0019063312_5.hideOnMouseOut=true;
   mm_menu_0019063312_5.menuBorder=1;
   mm_menu_0019063312_5.menuLiteBgColor='#ffffff';
   mm_menu_0019063312_5.menuBorderBgColor='#555555';
   mm_menu_0019063312_5.bgColor='#ffffff';  
  mm_menu_0019063312_5.writeMenus();
} // mmLoadMenus()