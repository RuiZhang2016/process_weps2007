function addTop(dPage,sBack,sPage,sBannerType){
	dPage.write("<table width=\"100%\" height=\"100\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	addLogo(dPage,sBack,sPage);
	dPage.write("<td height=\"100\">");
	dPage.write("<table width=\"100%\" height=\"100\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">");
	switch (sBannerType){
		case "book":
			addBookBanner(dPage,sBack);
			break;
		case "short":
			addShortBanner(dPage,sBack);
			break;
		case "artbooks":
			addArtBanner(dPage,sBack);
			break;
		default:
			addBookBanner(dPage,sBack);
	}
	dPage.write("</table>");
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
	dPage.write("<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td height=\30\" colspan=\"3\" align=\"center\" valign=\"center\">");
	dPage.write("<tr>");
	dPage.write("<td width=\"100%\" valign=\"top\" align=\"center\">");
	goNavigate(dPage, 1, sBack);
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
}

function addChronicleTop(dPage,sBack,sPage,sBannerType,sFrom){
	dPage.write("<table width=\"100%\" height=\"100\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	addLogo(dPage,sBack,sPage);
	dPage.write("<td height=\"100\">");
	dPage.write("<table width=\"100%\" height=\"100\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">");
	switch (sBannerType){
		case "book":
			addBookBanner(dPage,sBack);
			break;
		default:
			addBookBanner(dPage,sBack);
	}
	dPage.write("</table>");
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
	dPage.write("<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td height=\30\" colspan=\"3\" align=\"center\" valign=\"center\">");
	dPage.write("<tr>");
	dPage.write("<td width=\"100%\" valign=\"top\" align=\"center\">");
	goNavigate(dPage, 1, sBack);
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
	dPage.write("<table width=\"100%\" height=\"50\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td>");
	switch (sPage){
		case "Book Release Schedule":
			dPage.write("<img src=\""+sBack+"images/release1.jpg\" alt=\"The Eternal Night Events Diary\" width=\"220\" height=\"32\" border=\"0\" />");
			break;
		case "Chronicle":
			dPage.write("<img src=\""+sBack+"images/chronicle1.jpg\" alt=\"The Eternal Night Events Diary\" width=\"220\" height=\"32\" border=\"0\" />");
			break;
		case "Events Diary":
			dPage.write("<img src=\""+sBack+"images/diary1.jpg\" alt=\"The Eternal Night Events Diary\" width=\"220\" height=\"32\" border=\"0\" />");
			break;
		case "Fiction Index":
			dPage.write("<img src=\""+sBack+"images/fiction1.jpg\" alt=\"The Eternal Night Events Diary\" width=\"220\" height=\"32\" border=\"0\" />");
			break;
		case "Interviews Index":
			dPage.write("<img src=\""+sBack+"images/interviews1.jpg\" alt=\"The Eternal Night Events Diary\" width=\"220\" height=\"32\" border=\"0\" />");
			break;
		case "Sample Chapters Index":
			dPage.write("<img src=\""+sBack+"images/sample1.jpg\" alt=\"The Eternal Night Events Diary\" width=\"220\" height=\"32\" border=\"0\" />");
			break;
		case "The Chronicles Index":
			dPage.write("<img src=\""+sBack+"images/previous1.jpg\" alt=\"The Eternal Night Events Diary\" width=\"220\" height=\"32\" border=\"0\" />");
			break;	
		default:
			dPage.write("<Span class=\"title\">"+sPage+"</span><br ><br />");
			break;
	}
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
}

function addLogo(dPage,sBack,sOver){
	dPage.write("<td width=\"133\" height=\"100\" valign=\"top\" align=\"left\">");
	dPage.write("<a href=\""+sBack+"index.html\">");
	dPage.write("<img src=\""+sBack+"images/eternalnight.jpg\" alt=\"Home. The Eternal Night SF, Fantasy and Horror Books Web Site.  "+sOver+"\" height=\"100\" width=\"133\" border=\"0\" />");
	dPage.write("</a>");
	dPage.write("</td>");
}

function goGraphicArtist(dPage,sBack){
	goAlpha(dPage,sBack,"graphicartist");
}
function goGraphicAuthor(dPage,sBack){
	goAlpha(dPage,sBack,"graphicauthor");
}
function goWritersBlogs(dPage,sBack){
	goAlpha(dPage,sBack,"writersblogs");
}
function goMusicSubject(dPage,sBack){
	goAlpha(dPage,sBack,"musicsubject");
}
function goBooks(dPage,sBack){
	goAlpha(dPage,sBack,"books");
}
function goPublishers(dPage,sBack){
	goAlpha(dPage,sBack,"publishers");
}
function goPub(dPage,sBack){
	goAlpha(dPage,sBack,"pub");
}
function goTV(dPage,sBack){
	goAlpha(dPage,sBack,"tv");
}
function goLists(dPage,sBack){
	goAlpha(dPage,sBack,"lists");
}
function goShort(dPage,sBack){
	goAlpha(dPage,sBack,"short");
}
function goMag(dPage,sBack){
	goAlpha(dPage,sBack,"mag");
}
function goMagazine(dPage,sBack){
	goAlpha(dPage,sBack,"magazine");
}
function goMagazines(dPage,sBack){
	goAlpha(dPage,sBack,"magazines");
}
function goArt(dPage,sBack){
	goAlpha(dPage,sBack,"art");
}
function goArtBooks(dPage,sBack){
	goAlpha(dPage,sBack,"artbooks");
}
function goAuthorLink(dPage,sBack){
	goAlpha(dPage,sBack,"authorlink");
}
function goEditors(dPage,sBack){
	goAlpha(dPage,sBack,"editors");
}
function goSeries(dPage,sBack){
	goAlpha(dPage,sBack,"series");
}
function goLists(dPage,sBack){
	goAlpha(dPage,sBack,"lists");
}
function goAlpha(dPage,sBack,sType){
	dPage.write("<table width=\"100%\" height=\"33\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td width=\"100%\" height=\"33\" valign=\"center\" align=\"center\">");
	dPage.write("<a href=\""+sBack+sType+"a.html\">A</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"b.html\">B</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"c.html\">C</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"d.html\">D</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"e.html\">E</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"f.html\">F</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"g.html\">G</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"h.html\">H</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"i.html\">I</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"j.html\">J</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"k.html\">K</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"l.html\">L</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"m.html\">M</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"n.html\">N</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"o.html\">O</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"p.html\">P</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"q.html\">Q</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"r.html\">R</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"s.html\">S</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"t.html\">T</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"u.html\">U</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"v.html\">V</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"w.html\">W</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"x.html\">X</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"y.html\">Y</a>&nbsp;&nbsp;&nbsp;");
	dPage.write("<a href=\""+sBack+sType+"z.html\">Z</a>");
	if (sType=="art"){
		dPage.write("&nbsp;&nbsp;&nbsp;<a href=\""+sBack+sType+"general.html\">General</a>");
	}
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
}

function addBanner(dPage,sBack){
	var aBanners=new Array();
	var aLink=new Array();
	var iRnd=Math.round(18*Math.random());
	var jRnd;
	
	aBanners[0]="<img src=\""+sBack+"banners/calvani_embraced.jpg\" alt=\"Mayra Calvani - Embraced by the Shadows\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[1]="<img src=\""+sBack+"pub/b/bohemianink/banner.jpg\" alt=\"Bohemian Ink\" border=\"0\" width=\"458\" height=\"54\" />";
	aBanners[2]="<img src=\""+sBack+"banners/janagoliver-sojourn.gif\" alt=\"Jana G. Oliver - Sojourn\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[3]="<img src=\""+sBack+"banners/blackdeathbooks.gif\" alt=\"Black Death Books - The Last Name in Horror\" border=\"0\" width=\"458\" height=\"58\" />";
	aBanners[4]="<img src=\""+sBack+"banners/deadandgonethemovie.jpg\" alt=\"Dead and Gone - The Movie\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[5]="<img src=\""+sBack+"banners/themythhunters.gif\" alt=\"Christopher Golden - The Myth Hunters\" border=\"0\" width=\"468\" height=\"72\" />";
	aBanners[6]="<img src=\""+sBack+"banners/darkfuries.gif\" alt=\"Dark Furies Anthology\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[7]="<img src=\""+sBack+"banners/eulogy_banner_final.gif\" alt=\"Eulogies Anthology - Horror World Yearbook 2005\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[8]="<img src=\""+sBack+"banners/pyr-banner.gif\" alt=\"Pyr - Ignite your Imagination\" border=\"0\" width=\"468\" height=\"55\" />";
	aBanners[9]="<img src=\""+sBack+"banners/harryshannon-thepressureofdarkness.jpg\" alt=\"Harry Shannon's The Pressure of Darkness\" border=\"0\" width=\"480\" height=\"60\" />";
	aBanners[10]="<img src=\""+sBack+"banners/pendragonpress.jpg\" alt=\"Pendragon Press\" border=\"0\" width=\"468\" height=\"77\" />";
 	aBanners[11]="<img src=\""+sBack+"banners/passarellajohn_kindredspirit.jpg\" alt=\"John Passarella - Kindred Spirits\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[12]="<img src=\""+sBack+"banners/scottnicholson-theyhunger.jpg\" alt=\"Scott Nicholson - The Hunger\" border=\"0\" width=\"468\" height=\"60\" />";
	aBanners[13]="<img src=\""+sBack+"banners/starshipsofa.jpg\" alt=\"StarShipSofa - Science Fiction PodCasts\" border=\"0\" width=\"468\" height=\"117\" />";
	aBanners[14]="<img src=\""+sBack+"banners/ghostsofalbion.jpg\" alt=\"Amber Benson/Christopher Golden - Astray\" border=\"0\" width=\"468\" height=\"60\" />";

	aBanners[15]="<img src=\""+sBack+"banners/pyr_fastforward1.gif\" alt=\"Pyr - Fast Forward 1\" border=\"0\" width=\"700\" height=\"60\" />";
	aBanners[16]="<img src=\""+sBack+"banners/pyr_manwhomelted.gif\" alt=\"Pyr - The Man Who Melted\" border=\"0\" width=\"700\" height=\"60\" />";
	aBanners[17]="<img src=\""+sBack+"banners/pyr_sagramanda.gif\" alt=\"Pyr - Sagramanda\" border=\"0\" width=\"700\" height=\"60\" />";
	aBanners[18]="<img src=\""+sBack+"banners/pyr_starshippirate.gif\" alt=\"Pyr - Mike Resnick - Starship: Pirate\" border=\"0\" width=\"700\" height=\"60\" />";

	aLink[0]="http://www.fictionwise.com/ebooks/eBook37961.htm";
	aLink[1]="http://www.bohemian-ink.com/";
	aLink[2]="http://www.magespell.com/jgoliver/";
	aLink[3]="http://www.khpindustries.com/";
	aLink[4]="http://www.deadandgonethemovie.com/";
	aLink[5]="http://home.comcast.net/~crdg/myth/";
	aLink[6]="http://store.yahoo.com/shocklines/dafuwetaofba.html";
	aLink[7]="http://www.horrorworld.org/eulogies.htm";
	aLink[8]="http://www.pyrsf.com/";
	aLink[9]="http://store.yahoo.com/shocklines/profdabthbyh.html";
	aLink[10]="http://www.pendragonpress.co.uk/";
	aLink[11]="http://www.passarella.com";
	aLink[12]="http://www.hauntedcomputer.com/";
	aLink[13]="http://www.starshipsofa.com/";
	aLink[14]="http://www.subterraneanpress.com/Merchant2/merchant.mv?Screen=PROD&Store_Code=SP&Product_Code=benson";

	aLink[15]="http://www.pyrsf.com/FastForward-1.html";
	aLink[16]="http://www.pyrsf.com/ManWhoMelted.html";
	aLink[17]="http://www.pyrsf.com/Sagramanda.html";
	aLink[18]="http://www.pyrsf.com/StarshipPirate.html";
	
	dPage.write("<tr>");
	dPage.write("<td width=\"100%\" height=\"70\" align=\"center\" valign=\"center\">");
	dPage.write("<center>");
	dPage.write("<a href=\""+aLink[iRnd]+"\" target=\"new\">");
	dPage.write(aBanners[iRnd]);
	dPage.write("</a>");
	dPage.write("</center>");
	dPage.write("</td>");
	dPage.write("</tr>");
}
function addAuthorBanner(dPage,sBack){
	addBanner(dPage,sBack);
}
function addArtBanner(dPage,sBack){
	addBanner(dPage,sBack);
}
function addBookBanner(dPage,sBack){
	addBanner(dPage,sBack);
}
function addShortBanner(dPage,sBack){
	addBanner(dPage,sBack);
}
function addTVBanner(dPage,sBack){
	addBanner(dPage,sBack);
}
function addPubBanner(dPage,sBack){
	addBanner(dPage,sBack);
}
function addMagBanner(dPage,sBack){
	addBanner(dPage,sBack);
}

function goChronicleNavigate(dPage, iNo, sBack){
	
}

function goNavigate(dPage, iNo, sBack){
	if (iNo==2)
	{
		return;
	}
	dPage.write("<form name=\"navigate\" id=\"navigate\">");
	dPage.write("<table width=\"100%\" border=\"0\" cellspacing=\"2\" cellspadding=\"0\">");
	dPage.write("<tr>");
	dPage.write("<td width=\"50%\" align=\"center\">");
	dPage.write("<img src=\""+sBack+"images/archive_main.jpg\" alt=\"The Archive\" border=\"0\" height=\"65\" width=\"285\" />");
	dPage.write("<br/>");
	dPage.write("<select id=\"cboArchive\" name=\"cboArchive\" onChange=\"goChange(this.document,'"+sBack+"');\">");
	dPage.write("<option value=\"non\">Select...</option>");
	dPage.write("<option value=\"authors\">Authors/Books Index</option>");
	dPage.write("<option value=\"short\">Short Story Index</option>");
	dPage.write("<option value=\"editors\">Anthologies Index</option>");
	dPage.write("<option value=\"series\">Multi-Author Series Index</option>");
	dPage.write("<option value=\"artists\">Artists Index</option>");
	dPage.write("<option value=\"magazines\">Magazines Index</option>");
	dPage.write("<option value=\"graphicartist\">Graphic Novels (Artist) Index</option>");
	dPage.write("<option value=\"graphicauthor\">Graphic Novels (Author) Index</option>");
	dPage.write("<option value=\"awards\">Awards Index</option>");
	dPage.write("<option value=\"tv\">Telefantasy Index</option>");
	dPage.write("<option value=\"misc\">Miscellaneous Stuff</option>");
	dPage.write("<option value=\"lists\">Lists Index</option>");
	dPage.write("<option value=\"links\">Links Index</option>");
	dPage.write("<option value=\"aboutus\">About Us</option>");
	dPage.write("<option value=\"contactus\">Contact Us</option>");
	dPage.write("<option value=\"webrings\">Webrings</option>");
	dPage.write("</select>");
	dPage.write("</td>");
	dPage.write("<td width=\"50%\" align=\"center\">");
	dPage.write("<img src=\""+sBack+"images/chronicle_main.jpg\" alt=\"The Chronicle\" border=\"0\" height=\"65\" width=\"285\" />");
	dPage.write("<br/>");
	dPage.write("<select id=\"cboChronicle\" name=\"cboChronicle\" onChange=\"goChange(this.document,'"+sBack+"');\">");
	dPage.write("<option value=\"non\">Select...</option>");
	dPage.write("<option value=\"news\">Genre News</option>");
	dPage.write("<option value=\"previous\">Previous Chronicles</option>");
	dPage.write("<option value=\"fiction\">Fiction Index</option>");
	dPage.write("<option value=\"sample\">Sample Chapter Index</option>");
	dPage.write("<option value=\"serial\">Serial Fiction Index</option>");
	dPage.write("<option value=\"nonfiction\">Non-Fiction Index</option>");
	dPage.write("<option value=\"interviews\">Interviews Index</option>");
	//dPage.write("<option value=\"releases\">Releases Schedule</option>");
	//dPage.write("<option value=\"diary\">Events Diary</option>");
	dPage.write("<option value=\"conventions\">Conventions &amp; Fairs</option>");
	//dPage.write("<option value=\"competitions\">Competitions Index</option>");
	dPage.write("<option value=\"chronicle\">Site Chronicle</option>");
	dPage.write("<option value=\"links\">Links Index</option>");
	dPage.write("<option value=\"bookdeals\">Book Deals</option>");
	dPage.write("<option value=\"storiessold\">Short Stories Sold</option>");
	dPage.write("<option value=\"pressreleases\">Press Releases Index</option>");
	dPage.write("<option value=\"booksreceived\">Books Received</option>");
	dPage.write("<option value=\"writersblogs\">Writers' Blogs</option>");
	dPage.write("<option value=\"weblog\">Weblog</option>");
	dPage.write("<option value=\"webloggalleries\">Weblog Galleries</option>");
	dPage.write("</select>");
	dPage.write("</td>");
	dPage.write("</tr>");
	dPage.write("</table>");
	dPage.write("</form>");
}

function goChange(dPage,sBack)
{
	var sPage;
	var i;
	i=dPage.navigate.cboArchive.selectedIndex;
	sPage=dPage.navigate.cboArchive.options[i].value;
	if (sPage!="non")
	{
		switch (sPage){
			case "authors":
				sPage=sBack+"books/booksa.html";
				break;
			case "short":
				sPage=sBack+"short/shorta.html";
				break;
			case "editors":
				sPage=sBack+"editors/editorsa.html";
				break;
			case "series":
				sPage=sBack+"series/seriesa.html";
				break;
			case "artists":
				sPage=sBack+"artbooks/artbooksa.html";
				break;
			case "magazines":
				sPage=sBack+"magazine/magazinea.html";
				break;
			case "graphicartist":
				sPage=sBack+"graphic/graphicartista.html";
				break;
			case "graphicauthor":
				sPage=sBack+"graphic/graphicauthora.html";
				break;
			case "awards":
				sPage=sBack+"awards/awards.html";
				break;
			case "tv":
				sPage=sBack+"tv/tva.html";
				break;
			case "misc":
				sPage=sBack+"misc/misc-menu.html";
				break;
			case "lists":
				sPage=sBack+"lists/listsa.html";
				break;
			case "links":
				sPage=sBack+"links/linksa.html";
				break;
			case "aboutus":
				sPage=sBack+"aboutus.html";
				break;
			case "contactus":
				sPage=sBack+"contactus.html";
				break;
			case "webrings":
				sPage=sBack+"webrings/webringsa.html";
				break;
			default:
				sPage="non";
				break;
		}
	}
	if (sPage=="non")
	{
		i=dPage.navigate.cboChronicle.selectedIndex;
		sPage=dPage.navigate.cboChronicle.options[i].value;
		if (sPage!="non")
		{
			switch (sPage){
				case "previous":
					sPage=sBack+"chronicle/chronicles.html";
					break;
				case "fiction":
					sPage=sBack+"fiction/fiction2007.html";
					break;
				case "sample":
					sPage=sBack+"fiction/sample2007.html";
					break;
				case "serial":
					sPage=sBack+"fiction/serials.html";
					break;
				case "nonfiction":
					sPage=sBack+"nonfiction/nonfiction2007.html";
					break;
				case "interviews":
					sPage=sBack+"interviews/interviews2007.html";
					break;
//				case "releases":
//					sPage=sBack+"release/200609p.html";
//					break;
//				case "diary":
//					sPage=sBack+"diary/2006/sep.html";
//					break;
//				case "competitions":
//					sPage=sBack+"competitions/2005.html";
//					break;
				case "conventions":
					sPage=sBack+"conventions/conventions.html";
					break;
				case "chronicle":
					sPage=sBack+"chronicle/2006/dec.html";
					break;
				case "links":
					sPage=sBack+"links/linksa.html";
					break;
				case "pressreleases":
					sPage=sBack+"pressreleases/pressreleases2007.html";
					break;
				case "booksreceived":
					sPage=sBack+"booksreceived/2007/jan.html";
					break;
				case "bookdeals":
					sPage=sBack+"bookdeals/2007/jan.html";
					break;
				case "news":
					sPage=sBack+"news/2007/jan.html";
					break;
				case "storiessold":
					sPage=sBack+"storiessold/2007/jan.html";
					break;
				case "weblog":
					sPage=sBack+"weblog/2007/jan.html";
					break;
				case "webloggalleries":
					sPage=sBack+"weblog/galleries_country.html";
					break;
				case "writersblogs":
					sPage=sBack+"writersblogs/writersblogsa.html";
					break;
				default:
					sPage="non";
					break;
			}
		}
	}
	if (sPage=="non"){return;}
	location.href=sPage;
}