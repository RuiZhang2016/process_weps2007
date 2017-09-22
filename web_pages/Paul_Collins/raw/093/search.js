function addPageBottom(dPage,s,sBack,sType){
  var iRnd;
	
	dPage.write("<table width=\"100%\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td valign=\"top\">");

	iRnd=Math.round(2*Math.random());
	
	switch(iRnd){
		case 0:
			dPage.write("<a href=\"http://www.hungersite.com\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/hungersite.gif\" alt=\"Donate Free Food. The Hunger Site\" width=\"120\" height=\"60\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 1:
			dPage.write("<a href=\"http://www.therainforestsite.com\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/rainforestsite.gif\" alt=\"Donate Free Land. The Rainforest Site\" width=\"120\" height=\"60\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 2:
			dPage.write("<a href=\"http://www.thebreastcancersite.com\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/breastcancersite.gif\" alt=\"Fund Free Mammograms. The Breast Cancer Site\" width=\"120\" height=\"60\" border=\"0\" />");
			dPage.write("</a>");
			break;
  }

	dPage.write("</td>");
	dPage.write("<td valign=\"top\">");

	iRnd=Math.round(6*Math.random());
	
	switch(iRnd){
		case 0:
			dPage.write("<a href=\"http://www.lonewolfpubs.com\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/lonewolfbutton.jpg\" alt=\"Lone Wolf Publications\" width=\"130\" height=\"37\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 1:
			dPage.write("<a href=\"http://www.bahwolf.com\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/bahbutton.jpg\" alt=\"Brian A. Hopkins.  Bram Stoker Award Winning Author.\" width=\"130\" height=\"60\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 2:
			dPage.write("<a href=\"http://macabredelights.homestead.com/index.html\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/johnbford.gif\" alt=\"Macabre Delights.  The Website of Author, John B. Ford.\" width=\"150\" height=\"48\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 3:
			dPage.write("<a href=\"http://www.hivepress.com/\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/hivepress.gif\" alt=\"Hive Press.\" width=\"144\" height=\"58\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 4:
			dPage.write("<a href=\"http://www.horror.org/\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/hwa.jpg\" alt=\"Horror Writers Association.\" width=\"100\" height=\"121\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 5:
			dPage.write("<a href=\"http://castledracula.cjb.net\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/castledracula.gif\" alt=\"Castle Dracula Search Engine.\" width=\"126\" height=\"172\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 6:
			dPage.write("<a href=\"http://www.deaddragon.com/\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/deaddragon.jpg\" alt=\"The Dead Dragon Society\" width=\"110\" height=\"110\" border=\"0\" />");
			dPage.write("</a>");
			break;
	}

	dPage.write("</td>");
	dPage.write("<td valign=\"top\">");
	dPage.write("<a href=\"http://www.speculativeliterature.org/Co-op/\" target=\"new\" class=\"pic\">");
	dPage.write("<img src=\""+sBack+"buttons/smallpresscoop.gif\" alt=\"SLF Small Press Co-operative\" width=\"100\" height=\"100\" border=\"0\" />");
	dPage.write("</a>");
	dPage.write("</td>");
	dPage.write("<td valign=\"top\">");
	
	iRnd=Math.round(6*Math.random());
	
	switch(iRnd){
		case 0:
			dPage.write("<a href=\"http://www.chrysalisbooks.co.uk/books/search?cat=5&subcat=100\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/papertiger.jpg\" alt=\"Paper Tiger SF and Fantasy Art Books\" width=\"130\" height=\"90\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 1:
			dPage.write("<a href=\"http://www.thealienonline.net\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/thealienonlinebutton.gif\" alt=\"The Alien Online\" width=\"130\" height=\"60\" border=\"0\" />");
			dPage.write("</a>");
			break;		
		case 2:
			dPage.write("<a href=\"http://www.pspublishing.co.uk\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"pub/p/pspublishing/logo.gif\" alt=\"PS Publishing\" width=\"115\" height=\"115\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 3:
			dPage.write("<a href=\"http://www.fictionwise.com/fwa/17607/home.html\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/fictionwise.gif\" alt=\"Fictionwise\" width=\"120\" height=\"49\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 4:
			dPage.write("<a href=\"http://www.gorelets.com/\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/gorelets.jpg\" alt=\"Gorelets - The Website of Michael A. Arnzen\" width=\"150\" height=\"50\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 5:
			dPage.write("<a href=\"http://www.locusmag.com\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"buttons/locusmag.gif\" alt=\"Locus Online\" width=\"130\" height=\"31\" border=\"0\" />");
			dPage.write("</a>");
			break;
		case 6:
			dPage.write("<a href=\"http://www.luna-books.com\" target=\"new\" class=\"pic\">");
			dPage.write("<img src=\""+sBack+"pub/l/lunabooks/logo.gif\" alt=\"Luna Books - The Fantasy Publisher Dedicated to Womem\" width=\"70\" height=\"75\" border=\"0\" />");
			dPage.write("</a>");
			break;
	}
	
	dPage.write("</td>");

	addAmazonUK(dPage);

	dPage.write("<td align=\"center\" valign=\"top\">");
	
	iRnd=Math.round(5*Math.random());
	
	switch(iRnd){
		case 0:
			dPage.write("<a href=\"http://www.amazon.com/exec/obidos/redirect-home/theeternalnig-20\" target=\"new\">");
			dPage.write("<img src=\""+sBack+"buttons/amazonlogo.gif\" alt=\"In Association with Amazon.com\" border=\"0\" height=\"60\" width=\"130\" />");
			dPage.write("</a>");
			break;
		case 1:
			dPage.write("<a href=\"http://www.riewriter.com/\" target=\"new\">");
			dPage.write("<img src=\""+sBack+"buttons/riewritesbutton.jpg\" alt=\"Rie Writes.  The Web Site of Writer Rie Sheriden\" border=\"0\" height=\"60\" width=\"160\" />");
			dPage.write("</a>");
			break;
		case 2:
			dPage.write("<a href=\"http://www.shadow-writer.co.uk/\" target=\"new\">");
			dPage.write("<img src=\""+sBack+"buttons/paulkane.gif\" alt=\"Paul Kane - Shadow Writer\" border=\"0\" height=\"50\" width=\"170\" />");
			dPage.write("</a>");
			break;
		case 3:
			dPage.write("<a href=\"http://www.terrortales.org/\" target=\"new\">");
			dPage.write("<img src=\""+sBack+"buttons/terrortales.gif\" alt=\"Terror Tales Online Horror\" border=\"0\" height=\"43\" width=\"128\" />");
			dPage.write("</a>");
			break;
		case 4:
			dPage.write("<a href=\"http://www.amberquill.com/\" target=\"new\">");
			dPage.write("<img src=\""+sBack+"pub/a/amberquill/logo.jpg\" alt=\"Amber Quill Press\" border=\"0\" height=\"50\" width=\"125\" />");
			dPage.write("</a>");
			break;
		case 5:
			dPage.write("<a href=\"http://www.stevenshrewsbury.com/\" target=\"new\">");
			dPage.write("<img src=\""+sBack+"buttons/godforsaken.gif\" alt=\"Steven L. Shrewsbury's Godforsaken\" border=\"0\" height=\"31\" width=\"88\" />");
			dPage.write("</a>");
			break;
	}	
	dPage.write("</td>");

	dPage.write("</tr>");
	dPage.write("</table>");
	
	addTopica(dPage);
	
	switch(sType){
		case "youngadult":
			addYoungAdultBottomBanner(dPage,sBack);
			break;
		default:
			addBottomBanner(dPage,sBack);
			addHorrorFindBanner(dPage);	
			break;
	}		
	
}

function addAmazonUK(dPage){
	dPage.write("<td align=\"center\" valign=\"top\">");
	dPage.write("<a href=\"http://www.amazon.co.uk/exec/obidos/redirect-home?tag=theeternanightsf&placement=multi_button6.gif&site=amazon\" target=\"new\">");
	dPage.write("<img src=\"http://www.associmg.com/assoc/uk/multi_button6.gif?tag=theeternanightsf\" alt=\"In Association with Amazon.co.uk\" border=\"0\" height=\"60\" width=\"120\" />");
	dPage.write("</a>");
	dPage.write("</td>");
}

function addBottomBanner(dPage,sBack){
	var aBanners=new Array();
	var aLink=new Array();
	var iRnd=Math.round(15*Math.random());
	
	aBanners[0]="<img src=\""+sBack+"banners/jusneuce-nocturne.jpg\" alt=\"Jus Neuce - Nocturne\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[1]="<img src=\""+sBack+"banners/feral-brianknight.gif\" alt=\"Brian Knight - Feral\" border=\"0\" width=\"476\" height=\"68\" />";
	var jRnd=Math.round(2*Math.random());
	switch (jRnd){
		case 0:
			aBanners[2]="<img src=\""+sBack+"banners/portnowhere1.jpg\" alt=\"Portnowhere\" border=\"0\" width=\"468\" height=\"60\" />";
			break;
		case 1:
			aBanners[2]="<img src=\""+sBack+"banners/portnowhere2.jpg\" alt=\"Portnowhere\" border=\"0\" width=\"468\" height=\"60\" />";
			break;
		case 2:
			aBanners[2]="<img src=\""+sBack+"banners/portnowhere3.jpg\" alt=\"Portnowhere\" border=\"0\" width=\"468\" height=\"60\" />";
			break;
	}
	aBanners[3]="<img src=\""+sBack+"banners/angelique.jpg\" alt=\"Angelique Armae - Award Winner Horror Writer\" border=\"0\" width=\"468\" height=\"79\" />";
	aBanners[4]="<img src=\""+sBack+"banners/dragonmoon.gif\" alt=\"Dragon Moon Press\" border=\"0\" width=\"500\" height=\"60\" />";
	aBanners[5]="<img src=\""+sBack+"banners/robinawilliams.jpg\" alt=\"Robina Williams - Jerome and the Seraph\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[6]="<img src=\""+sBack+"banners/amberquill.jpg\" alt=\"Amber Quill Press\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[7]="<img src=\""+sBack+"banners/easynet.gif\" alt=\"Easynet ISP\" border=\"0\" width=\"202\" height=\"49\" />";
	aBanners[8]="<img src=\""+sBack+"banners/scarlettdean.jpg\" alt=\"Scarlett Dean - Horror Writer\" border=\"0\" width=\"468\" height=\"75\" />";
	aBanners[9]="<img src=\""+sBack+"pub/m/mundania/banner.jpg\" alt=\"Mundania Press LLC\" border=\"0\" width=\"468\" height=\"66\" />";
	aBanners[10]="<img src=\""+sBack+"banners/chantingmonks.gif\" alt=\"Chanting Monks Press\" border=\"0\" width=\"468\" height=\"60\" />";
 	aBanners[11]="<img src=\""+sBack+"banners/necessaryevilpress.gif\" alt=\"Necessary Evil Press - Home to Horror, SF, and Post-Apocalyptic fiction.\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[12]="<img src=\""+sBack+"banners/hawkescraigangeline.gif\" alt=\"Angeline Hawkes-Craig - The Commandments\" border=\"0\" width=\"458\" height=\"58\" />";
	aBanners[13]="<img src=\""+sBack+"banners/vassalofel.gif\" alt=\"Gloria Oliver - Vassal Of El\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[14]="<img src=\""+sBack+"banners/lonewolf.gif\" alt=\"Lone Wolf Publications\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[15]="<img src=\""+sBack+"banners/letsbefrank.jpg\" alt=\"Let's Be Frank Publishing\" border=\"0\" width=\"310\" height=\"68\" />";

	aLink[0]="http://www.aiopublishing.com/Readers/Authors/Neuce/Neuce.htm";
	aLink[1]="http://www.brian-knight.com/";
	aLink[2]="http://www.portnowhere.net/";
	aLink[3]="http://www.angeliquearmae.com";
	aLink[4]="http://www.dragonmoonpress.com/";
	aLink[5]="http://www.robinawilliams.com/";
	aLink[6]="http://amberquill.com/";
	aLink[7]="http://www.easydial.co.uk";
	aLink[8]="http://www.scarlettdean.com/";
	aLink[9]="http://www.mundania.com/";
	aLink[10]="http://www.chantingmonks.com/";
	aLink[11]="http://www.necessaryevilpress.com";
	aLink[12]="http://www.angelinehawkes-craig.com/";
	aLink[13]="http://www.gloriaoliver.com/";
	aLink[14]="http://www.lonewolfpubs.com/";
	aLink[15]="http://lbfbooks.com";

	dPage.write("<table width=\"100%\" height=\"70\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td width=\"100%\" height=\"70\" align=\"center\" valign=\"center\">");
	dPage.write("<center>");
	dPage.write("<a href=\""+aLink[iRnd]+"\" target=\"new\">");
	dPage.write(aBanners[iRnd]);
	dPage.write("</a>");
	dPage.write("</center>");
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
}

function addYoungAdultBottomBanner(dPage,sBack){
	var aBanners=new Array();
	var aLink=new Array();
	var iRnd=Math.round(1*Math.random());

	aBanners[0]="<img src=\""+sBack+"banners/easynet.gif\" alt=\"Easynet ISP\" border=\"0\" width=\"202\" height=\"49\" />";
	aBanners[1]="<img src=\""+sBack+"banners/thefarenoughwindow.jpg\" alt=\"John Grant's The Far Enough Window\" border=\"0\" width=\"464\" height=\"58\" />";

	aLink[0]="http://www.easydial.co.uk";
	aLink[1]="http://www.bewrite.net/";

	dPage.write("<table width=\"100%\" height=\"70\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td width=\"100%\" height=\"70\" align=\"center\" valign=\"center\">");
	dPage.write("<center>");
	dPage.write("<a href=\""+aLink[iRnd]+"\" target=\"new\">");
	dPage.write(aBanners[iRnd]);
	dPage.write("</a>");
	dPage.write("</center>");
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
}

function addTopica(dPage){
dPage.write("<br />");
dPage.write("<br />");
dPage.write("<form action=\"http://www.topica.com/subscribe/eternalnight\" method=\"post\" target=\"new_window\">");
dPage.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"450\" align=\"center\">");
dPage.write("<tr>");
dPage.write("<td align=\"center\" bgcolor=\"#3300cc\">");
dPage.write("<a href=\"http://www.topica.com\" target=\"new\">");
dPage.write("<img src=\"http://statik.topica.com/images/topica_tab.gif\" alt=\"topica\" width=\"78\" height=\"50\" border=\"0\" />");
dPage.write("</a>");
dPage.write("</td>");
dPage.write("<td bgcolor=\"#3300cc\">");
dPage.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"1\">");
dPage.write("<tr>");
dPage.write("<td align=\"left\">");
dPage.write("<font style=\"font-size:14px\" face=\"arial, helvetica, sans serif\" color=\"#ccff00\">");
dPage.write("&nbsp;<B>Join The Eternal Night Mailing List</B>&nbsp;");
dPage.write("</font>");
dPage.write("</td>");
dPage.write("</tr>");
dPage.write("<tr>");
dPage.write("<td>&nbsp;");
dPage.write("</td>");
dPage.write("</tr>");
dPage.write("<tr>");
dPage.write("<td align=\"left\">");
dPage.write("<font style=\"font-size:9pt\" size=\"-1\">&nbsp;");
dPage.write("<input type=\"text\" size=\"45\" name=\"email\" value=\"your email\">");
dPage.write("</font>");
dPage.write("<font style=\"font-size:9pt\" face=\"Geneva,Helvetica,Arial,Sans Serif\" size=\"-1\">&nbsp;&nbsp;");
dPage.write("<input type=\"submit\" value=\"Join\">&nbsp;&nbsp;");
dPage.write("</font>");
dPage.write("</td>");
dPage.write("</tr>");
dPage.write("</table>");
dPage.write("</td>");
dPage.write("</tr>");
dPage.write("</table>");
dPage.write("</form>");
dPage.write("<br />");
dPage.write("<br />");
}

function addHorrorFindBanner(dPage){
dPage.write("<center>");
dPage.write("<script language=\"javascript\" src=\"http://www.horrorwebring.com/cgi-bin/banners/ads.pl?jscript;member=theeternalnight\"></script>");
dPage.write("<br>");
dPage.write("<small>");
dPage.write("<a href=\"http://exchange.horrorfind.com/\" target=\"new\">Horrorfind Banner Exchange</a>");
dPage.write("</small>");
dPage.write("</center>");
}