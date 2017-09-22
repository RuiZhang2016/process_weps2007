<!-- hide

/* this menu.js is for use by the State Library website only. Other SL websites such as PLS, DAS, LIAC etc should use ext_menu.js 
Please ensure that both JavaScript files are always maintained and up to date */

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_nbGroup(event, grpName) { //v3.0
  var i,img,nbArr,args=MM_nbGroup.arguments;
  if (event == "init" && args.length > 2) {
    if ((img = MM_findObj(args[2])) != null && !img.MM_init) {
      img.MM_init = true; img.MM_up = args[3]; img.MM_dn = img.src;
      if ((nbArr = document[grpName]) == null) nbArr = document[grpName] = new Array();
      nbArr[nbArr.length] = img;
      for (i=4; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {
        if (!img.MM_up) img.MM_up = img.src;
        img.src = img.MM_dn = args[i+1];
        nbArr[nbArr.length] = img;
    } }
  } else if (event == "over") {
    document.MM_nbOver = nbArr = new Array();
    for (i=1; i < args.length-1; i+=3) if ((img = MM_findObj(args[i])) != null) {
      if (!img.MM_up) img.MM_up = img.src;
      img.src = (img.MM_dn && args[i+2]) ? args[i+2] : args[i+1];
      nbArr[nbArr.length] = img;
    }
  } else if (event == "out" ) {
    for (i=0; i < document.MM_nbOver.length; i++) {
      img = document.MM_nbOver[i]; img.src = (img.MM_dn) ? img.MM_dn : img.MM_up; }
  } else if (event == "down") {
    if ((nbArr = document[grpName]) != null)
      for (i=0; i < nbArr.length; i++) { img=nbArr[i]; img.src = img.MM_up; img.MM_dn = 0; }
    document[grpName] = nbArr = new Array();
    for (i=2; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {
      if (!img.MM_up) img.MM_up = img.src;
      img.src = img.MM_dn = args[i+1];
      nbArr[nbArr.length] = img;
  } }
}

function fwLoadMenus() {
  if (window.fw_menu_0) return;
    window.fw_menu_0_1 = new Menu("Our collections",139,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_0_1.addMenuItem("Our collections","location='/collections/'");
    fw_menu_0_1.addMenuItem("About the collections","location='/collections/collections.cfm'");
	fw_menu_0_1.addMenuItem("Documenting Life in NSW","location='/doclifensw/'");
    fw_menu_0_1.addMenuItem("Our catalogues","location='/collections/catalogues.cfm'");
	fw_menu_0_1.addMenuItem("Our indexes","location='/collections/indexes.cfm'");
    fw_menu_0_1.addMenuItem("New to the collections","location='/collections/acquisitions.cfm'");
     fw_menu_0_1.hideOnMouseOut=true;
    window.fw_menu_0_2 = new Menu("Visit us",93,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_0_2.addMenuItem("Visit us","location='/visit/'");
    fw_menu_0_2.addMenuItem("Opening hours","location='/visit/hours.cfm'");
    fw_menu_0_2.addMenuItem("Locating us","location='/visit/location.cfm'");
    fw_menu_0_2.addMenuItem("Library Shop","location='/shop/'");
    fw_menu_0_2.addMenuItem("Cafes","location='/visit/cafes.cfm'");
	fw_menu_0_2.addMenuItem("Venue Hire","location='/venue/'");
     fw_menu_0_2.hideOnMouseOut=true;
    window.fw_menu_0_3 = new Menu("Our organisation",145,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_0_3.addMenuItem("Our organisation","location='/organisation/'");
    fw_menu_0_3.addMenuItem("At a glance","location='/organisation/glance.cfm'");
	fw_menu_0_3.addMenuItem("Library Council","location='/organisation/council.cfm'");
	fw_menu_0_3.addMenuItem("Organisation structure","location='/organisation/structure.cfm'");
	fw_menu_0_3.addMenuItem("Mitchell Library centenary","location='/project2010/'");
	fw_menu_0_3.addMenuItem("Awards &amp; fellowships","location='/awards/'");
	fw_menu_0_3.addMenuItem("Our Graduate Program","location='/graduate/'");
    fw_menu_0_3.addMenuItem("Legislation and policies","location='/policies/'");
	fw_menu_0_3.addMenuItem("Collaborative initiatives","location='/organisation/projects.cfm'");
	fw_menu_0_3.addMenuItem("Building activities","location='/organisation/activities.cfm'");
    fw_menu_0_3.addMenuItem("Tenders","location='/tenders/'");
    fw_menu_0_3.addMenuItem("Contact us","location='/contact/'");
     fw_menu_0_3.hideOnMouseOut=true;
    window.fw_menu_0_4 = new Menu("Foundation",145,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_0_4.addMenuItem("The Foundation","location='/foundation/'");
  fw_menu_0_4.addMenuItem("The Custodians","location='/foundation/custodians.cfm'");
    fw_menu_0_4.addMenuItem("Friends of the State Library","location='/foundation/society.cfm'");
   fw_menu_0_4.addMenuItem("atmitchell.com","location='/foundation/atmitchell.cfm'");
   fw_menu_0_4.addMenuItem("Sponsorship","location='/foundation/sponsors.cfm'");
	fw_menu_0_4.addMenuItem("Bequests & memorial giving","location='/foundation/bequest.cfm'");
    fw_menu_0_4.hideOnMouseOut=true;
    window.fw_menu_0_5 = new Menu("Our publications",116,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
 	fw_menu_0_5.addMenuItem("Our publications","location='/publications/'");
    fw_menu_0_5.addMenuItem("Library publications","location='/publications/library.cfm'");
	fw_menu_0_5.addMenuItem("Staff papers","location='/staff/'");
    fw_menu_0_5.addMenuItem("Occasional papers","location='/publications/occasional.cfm'");
    fw_menu_0_5.addMenuItem("New to this site","location='/new/'");
    fw_menu_0_5.addMenuItem("Microforms for sale","location='/microform/'");
     fw_menu_0_5.hideOnMouseOut=true;
  window.fw_menu_0 = new Menu("root",130,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
  fw_menu_0.addMenuItem(fw_menu_0_1,"location='/collections/'");
  fw_menu_0.addMenuItem(fw_menu_0_2,"location='/visit/'");
  fw_menu_0.addMenuItem(fw_menu_0_3,"location='/organisation/'");
  fw_menu_0.addMenuItem(fw_menu_0_4,"location='/foundation/'");
  fw_menu_0.addMenuItem("Volunteers","location='/friends/'");
  fw_menu_0.addMenuItem(fw_menu_0_5,"location='/publications/'");
   fw_menu_0.hideOnMouseOut=true;
   fw_menu_0.childMenuIcon="http://www.sl.nsw.gov.au/images/arrows.gif";
    window.fw_menu_1_1 = new Menu("Online collections",140,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_1_1.addMenuItem("Online collections","location='/online/'");
	fw_menu_1_1.addMenuItem("Miles Franklin Collection","location='/franklin/'");
	fw_menu_1_1.addMenuItem("Heritage Collection","location='http://www.atmitchell.com/events/exhibitions/2006/heritage/'");
    fw_menu_1_1.addMenuItem("Sir Joseph Banks Archive","location='/banks/'");
    fw_menu_1_1.addMenuItem("Matthew Flinders Archive","location='/flinders/'");
	fw_menu_1_1.addMenuItem("Sport 2003","location='/sport2003/'");
    fw_menu_1_1.addMenuItem("Federation ephemera","location='/fedephemera/'");
	fw_menu_1_1.addMenuItem("Antarctica collections","location='/antarctica/'");
    fw_menu_1_1.addMenuItem("Pictorial collections","location='/online/pictorial.cfm'");
	fw_menu_1_1.addMenuItem("Manuscript collections","location='/online/manuscript.cfm'");
	fw_menu_1_1.addMenuItem("Map collections","location='/online/maps.cfm'");
	fw_menu_1_1.addMenuItem("Printed books collections","location='/online/printed.cfm'");
	fw_menu_1_1.addMenuItem("Sheet music","location='/online/music.cfm'");
     fw_menu_1_1.hideOnMouseOut=true;
    window.fw_menu_1_2 = new Menu("Guides to the collections",240,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_1_2.addMenuItem("Guides to the collections","location='/guides/'");
	 fw_menu_1_2.addMenuItem("Getting started","location='/start/'");
	 fw_menu_1_2.addMenuItem("Dance","location='/collguides/dance/'");
     fw_menu_1_2.addMenuItem("Guides to manuscripts","location='/mssguide/'");
     fw_menu_1_2.addMenuItem("Guide to the papers of Members of Parliament","location='http://parlpapers.sl.nsw.gov.au/'");	 
    fw_menu_1_2.hideOnMouseOut=true;
  window.fw_menu_1 = new Menu("root",163,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
  fw_menu_1.addMenuItem("Catalogue (1980+)","location='/webcat/'");
  fw_menu_1.addMenuItem("Pictures and Manuscripts","location='/picman/'");
  fw_menu_1.addMenuItem("Sydney Morning Herald index","location='/infoquick/'");
  fw_menu_1.addMenuItem("Australian Indigenous index","location='/infokoori/'");
fw_menu_1.addMenuItem("Full&nbsp;text&nbsp;Databases&nbsp;&amp;&nbsp;Indexes","location='/databases/'");
  fw_menu_1.addMenuItem("Internet links","location='/links/'");
  fw_menu_1.addMenuItem("HSC resources" ,"location='http://infocus.sl.nsw.gov.au/'");
  fw_menu_1.addMenuItem(fw_menu_1_1,"location='/online/'");
  fw_menu_1.addMenuItem(fw_menu_1_2,"location='/guides/'");
  fw_menu_1.addMenuItem("Site Search","location='/search/'");
   fw_menu_1.hideOnMouseOut=true;
   fw_menu_1.childMenuIcon="http://www.sl.nsw.gov.au/images/arrows.gif";
    window.fw_menu_2_1 = new Menu("Ask a Librarian",135,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_2_1.addMenuItem("Ask a Librarian","location='/ask/'");
    fw_menu_2_1.addMenuItem("Legislation and policies","location='/policies/'");
    fw_menu_2_1.addMenuItem("Professional researchers","location='/ask/researchers.cfm'");
     fw_menu_2_1.hideOnMouseOut=true;
	window.fw_menu_2_2 = new Menu("Using the Library",150,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_2_2.addMenuItem("Using the Library","location='/using/'");
	 fw_menu_2_2.addMenuItem("Applying for a Reader's Card","location='/using/register.cfm'");
    fw_menu_2_2.addMenuItem("Finding items","location='/using/find.cfm'");
    fw_menu_2_2.addMenuItem("Accessing items","location='/using/access.cfm'");
	fw_menu_2_2.addMenuItem("Copying items","location='/copy/copy.cfm'");
	fw_menu_2_2.addMenuItem("Publishing items","location='/using/publish.cfm'");
	    fw_menu_2_2.addMenuItem("Accessing the Internet","location='/using/internetaccess.cfm'");
	 fw_menu_2_2.addMenuItem("Popular requests","location='/requests/'");
     fw_menu_2_2.hideOnMouseOut=true;
  window.fw_menu_2 = new Menu("root",140,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
  fw_menu_2.addMenuItem(fw_menu_2_1,"location='/ask/'");
  fw_menu_2.addMenuItem(fw_menu_2_2,"location='/using/'");
  fw_menu_2.addMenuItem("Australian Indigenous","location='/indigenous/'");
    fw_menu_2.addMenuItem("Copying and imaging","location='/copy/'");
	fw_menu_2.addMenuItem("Disability Information","location='/access/'");
  fw_menu_2.addMenuItem("Family History","location='/family/'");
  fw_menu_2.addMenuItem("Health Information","location='/health/'");
  fw_menu_2.addMenuItem("Legal Information","location='http://liac.sl.nsw.gov.au/'");
  fw_menu_2.addMenuItem("Multicultural","location='/multicultural/'");
  fw_menu_2.addMenuItem("For public libraries","location='/pathfinder/libraries.cfm'");
  fw_menu_2.addMenuItem("For the library profession","location='/profession/'");
  fw_menu_2.addMenuItem("For students and teachers","location='/pathfinder/students.cfm'");
  fw_menu_2.addMenuItem("For media","location='/pathfinder/media.cfm'");
  fw_menu_2.hideOnMouseOut=true;
  fw_menu_2.childMenuIcon="http://www.sl.nsw.gov.au/images/arrows.gif";
    window.fw_menu_3_1 = new Menu("Exhibitions",115,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
    fw_menu_3_1.addMenuItem("Exhibitions","location='/exhibitions/'");
    fw_menu_3_1.addMenuItem("On display","location='/exhibitions/display.cfm'");
    fw_menu_3_1.addMenuItem("Coming exhibitions","location='/exhibitions/coming.cfm'");
    fw_menu_3_1.addMenuItem("Past exhibitions","location='/exhibitions/past.cfm'");
    fw_menu_3_1.hideOnMouseOut=true;
 window.fw_menu_3 = new Menu("root",95,17,"Arial, Helvetica, sans-serif",10,"#666666","#ffffff","#cccccc","#006699");
  fw_menu_3.addMenuItem(fw_menu_3_1,"location='/exhibitions/'");
  fw_menu_3.addMenuItem("Events","location='/whatson/events.cfm'");
  fw_menu_3.addMenuItem("Movies","location='/whatson/movies.cfm'");
  fw_menu_3.addMenuItem("Courses","location='/whatson/courses.cfm'");
  fw_menu_3.addMenuItem("Tours","location='/whatson/tours.cfm'");
  fw_menu_3.addMenuItem("SL U35 Club","location='/whatson/slu35club.cfm'");  
  fw_menu_3.addMenuItem("Bookings","location='/whatson/bookings.cfm'");
   fw_menu_3.hideOnMouseOut=true;
   fw_menu_3.childMenuIcon="http://www.sl.nsw.gov.au/images/arrows.gif";

  fw_menu_3.writeMenus();
} // fwLoadMenus()


// stop hiding -->
