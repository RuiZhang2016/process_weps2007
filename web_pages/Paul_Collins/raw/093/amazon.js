function addPublisher(dPage,sBack,sPublisher,iTDOpen,iTDClose,iBuyFrom,iName,iTROpen)
{

	var sURL;
	var sImg;
	var sName;
	var iHeight;
	var iWidth;
	
	if (iTROpen==1)
	{
		dPage.write("			<tr>");
	}
	if (iTDOpen==1)
	{
			dPage.write("				<td valign=\"top\" align=\"center\">");
	}
	if (iTDClose==undefined)
	{
			iTDClose=1;
	}
	if (iBuyFrom==undefined)
	{
			iBuyFrom=1;
	}
	if (iName==undefined)
	{
			iName=1;
	}
	if (iBuyFrom==1)
	{
		dPage.write("Available From");
	}
	switch (sPublisher)
	{
		case "AAPPL":
			sURL="http://www.aappl.com/";
			sImg="pub/a/aappl/logo.jpg";
			sName="Artists' And Photographers' Press Ltd";
			iHeight="49";
			iWidth="200";
			break;
		case "Ace":
			sURL="http://www.penguinputnam.com/";
			sImg="pub/a/ace/logo.gif";
			sName="Ace Science Fiction";
			iHeight="45";
			iWidth="34";
			break;
		case "Aio":
			sURL="http://www.aiopublishing.com/";
			sImg="pub/a/aio/logo.gif";
			sName="Aio Publishing";
			iHeight="82";
			iWidth="166";
			break;
		case "AllenUnwinAus":
			sURL="http://www.allenandunwin.com/";
			sImg="pub/a/allenunwinaus/logo.jpg";
			sName="Allen &amp; Unwin (Aus)";
			iHeight="38";
			iWidth="200";
			break;
		case "AmberQuill":
			sURL="http://amberquill.com/";
			sImg="pub/a/amberquill/logo.jpg";
			sName="Amber Quill Press";
			iHeight="50";
			iWidth="125";
			break;
		case "ArcheBooks":
			sURL="http://www.archebooks.com/";
			sImg="pub/a/archebooks/logo.jpg";
			sName="ArcheBooks Publishing";
			iHeight="45";
			iWidth="350";
			break;
		case "Arima":
			sURL="http://www.arimapublishing.co.uk/";
			sImg="pub/a/arima/logo.gif";
			sName="Arima Publishing";
			iHeight="60";
			iWidth="250";
			break;
		case "AvonBooks":
			sURL="http://www.harpercollins.com/imprints.asp?imprint=Avon";
			sImg="pub/a/avonbooks/logo.gif";
			sName="Avon Books (Harper Collins)";
			iHeight="31";
			iWidth="250";
			break;
		case "AweStruck":
			sURL="http://www.awe-struck.net/";
			sImg="pub/a/awestruck/logo.jpg";
			sName="Awe-Struck E-Books";
			iHeight="83";
			iWidth="133";
			break;
		case "Baen":
			sURL="http://www.baen.com/";
			sImg="pub/b/baen/logo.gif";
			sName="Baen Books";
			iHeight="125";
			iWidth="125";
			break;
		case "Ballantine":
			sURL="http://www.randomhouse.com/rhpg/";
			sImg="pub/b/ballantine/logo.gif";
			sName="Ballantine Books";
			iHeight="65";
			iWidth="65";
			break;
		case "BantamDell":
			sURL="http://www.randomhouse.com/bantamdell/";
			sImg="pub/b/bantamdell/logo.gif";
			sName="Bantam Dell";
			iHeight="52";
			iWidth="89";
			break;
		case "Benbella":
			sURL="http://www.benbellabooks.com/";
			sImg="pub/b/benbella/logo.jpg";
			sName="Benbella Books";
			iHeight="67";
			iWidth="99";
			break;
		case "Berkley":
			sURL="http://www.penguinputnam.com/";
			sName="Berkley (Penguin Group)";
			break;
		case "BlackDeath":
			sURL="http://www.khpindustries.com/";
			sImg="pub/b/blackdeathbooks/logo.gif";
			sName="Black Death Books (KHP Industries)";
			iHeight="193";
			iWidth="123";
			break;
		case "BleakHouse":
			sURL="http://www.bleakhousebooks.com/";
			sImg="pub/b/bleakhousebooks/logo.jpg";
			sName="Bleak House Books";
			iHeight="38";
			iWidth="213";
			break;
		case "BloodBinds":
			sURL="http://www.bloodbinds.com/";
			sImg="pub/b/bloodbinds/logo.jpg";
			sName="Blood Binds";
			iHeight="73";
			iWidth="227";
			break;
		case "Bloodletting":
			sURL="http://www.bloodlettingbooks.com";
			sImg="pub/b/bloodlettingpress/logo.jpg";
			sName="Bloodletting Press";
			iHeight="104";
			iWidth="250";
			break;
		case "BlueChrome":
			sURL="http://www.bluechrome.co.uk/";
			sImg="pub/b/bluechrome/logo.jpg";
			sName="Blue Chrome";
			iHeight="58";
			iWidth="200";
			break;
		case "BohemianInk":
			sURL="http://www.bohemian-ink.com/";
			sImg="pub/b/bohemianink/logo.jpg";
			sName="Bohemian Ink";
			iHeight="66";
			iWidth="200";
			break;
		case "BooksForABuck":
			sURL="http://www.booksforabuck.com/";
			sImg="";
			sName="Books for a Buck";
			break;
		case "Borderlands":
			sURL="http://www.borderlandspress.com/";
			sImg="pub/b/borderlandspress/logo.jpg"
			sName="Borderlands Press";
			iHeight="134";
			iWidth="125";
			break;
		case "Brazos":
			sURL="http://www.brazospress.com/";
			sImg="pub/b/brazospress/logo.jpg"
			sName="Brazos Press";
			iHeight="41";
			iWidth="200";
			break;
		case "Cambrian":
			sURL="http://www.cambrianpubs.com/";
			sImg="pub/c/cambrian/logo.gif";
			sName="Cambrian Publications";
			iHeight="144";
			iWidth="115";
			break;
		case "Carnifex":
			sURL="http://carnifexpress.net/";
			sImg="pub/c/carnifexpress/logo.jpg";
			sName="Carnifex Press";
			iHeight="83";
			iWidth="250";
			break;
		case "CemeteryDance":
			sURL="http://www.cemeterydance.com";
			sImg="pub/c/cemeterydance/logo.jpg";
			sName="Cemetery Dance";
			iHeight="180";
			iWidth="90";
			break;
		case "Cerridwen":
			sURL="http://www.cerridwenpress.com/";
			//sImg="pub/c/cemeterydance/logo.jpg";
			sImg="";
			sName="Cerridwen Press";
			//iHeight="180";
			//iWidth="90";
			break;
		case "Chimericana":
			sURL="http://www.lulu.com/chimericanabooks";
			sImg="pub/c/chimericana/logo.jpg";
			sName="Chimericana Books";
			iHeight="37";
			iWidth="250";
			break;
		case "Chippewa":
			sURL="http://www.chippewapublishing.com/";
			sImg="pub/c/chippewa/logo.gif";
			sName="Chippewa Publishing";
			iHeight="50";
			iWidth="204";
			break;
		case "CommaPress":
			sURL="http://www.commapress.co.uk/";
			sImg="pub/c/commapress/logo.jpg";
			sName="Comma Press";
			iHeight="80";
			iWidth="250";
			break;
		case "ContemporaryPress":
			sURL="http://contemporarypress.com/";
			sImg="pub/c/contemporarypress/logo.jpg";
			sName="Contemporary Press";
			iHeight="104";
			iWidth="174";
			break;
 		case "CosimoClassics":
			sURL="http://www.cosimobooks.com/";
			sImg="pub/c/cosimo/classics_logo.gif";
			sName="Cosimo Classics";
			iHeight="63";
			iWidth="173";
			break;
 		case "CosimoOnDemand":
			sURL="http://www.cosimobooks.com/";
			sImg="pub/c/cosimo/on_demand_logo.gif";
			sName="Cosimo-On-Demand";
			iHeight="48";
			iWidth="173";
			break;
 		case "Cosmos":
			sURL="http://www.cosmos-books.com/";
			sImg="pub/c/cosmosbooks/logo.gif";
			sName="Cosmos Books";
			iHeight="110";
			iWidth="106";
			break;
 		case "Crowswing":
			sURL="http://www.crowswingbooks.co.uk/";
			sImg="pub/c/crowswingbooks/logo.jpg";
			sName="Crowswing Books";
			iHeight="28";
			iWidth="250";
			break;
 		case "CyberPulp":
			sURL="http://www.cyberpulpbooks.com/";
			sImg="pub/c/cyberpulp/logo.jpg";
			sName="Cyber-Pulp";
			iHeight="116";
			iWidth="144";
			break;
		case "Dafina":
			sURL="http://www.kensingtonbooks.com/";
			sImg="pub/d/dafinabooks/logo.gif";
			sName="Dafina Books (Kensington Books)";
			iHeight="60";
			iWidth="41";
			break;
		case "DAW":
			sURL="http://www.penguinputnam.com/";
			sImg="pub/d/daw/logo.gif";
			sName="DAW (Penguin Group)";
			iHeight="45";
			iWidth="34";
			break;
		case "Delirium":
			sURL="http://www.deliriumbooks.com/";
			sImg="pub/d/deliriumbooks/logo.jpg";
			sName="Delirium Books";
			iHeight="31";
			iWidth="250";
			break;
		case "DelRey":
			sURL="http://www.delreybooks.com/";
			sImg="pub/d/delrey/logo.jpg";
			sName="Del Rey Books";
			iHeight="79";
			iWidth="324";
			break;
		case "DLSIJ":
			sURL="http://www.dlsijpress.com/";
			sImg="";
			sName="DLSIJ Press";
			//iHeight="60";
			//iWidth="274";
			break;
		case "Dorchester":
			sURL="http://www.dorchesterpub.com/";
			sImg="";
			sName="Dorchester Publishing";
			break;
		case "DoubleDragon":
			sURL="http://double-dragon-ebooks.com/";
			sImg="pub/d/doubledragon/logo.jpg";
			sName="Double Dragon Publishing";
			iHeight="68";
			iWidth="300";
			break;
		case "DowntownPress":
			sURL="http://www.downtownpress.com/";
			sImg="pub/s/simonandschuster/logo_us.gif";
			sName="Downtown Press (Simon and Schuster)";
			iHeight="35";
			iWidth="145";
			break;
		case "DragonflyPublishing":
			sURL="http://www.dragonflypubs.com/";
			sImg="pub/d/dragonflypublishing/logo.gif";
			sName="Dragonfly Publishing";
			iHeight="60";
			iWidth="130";
			break;
		case "DragonMoon":
			sURL="http://www.dragonmoonpress.com/";
			sImg="pub/d/dragonmoonpress/logo.jpg";
			sName="Dragon Moon Press";
			iHeight="71";
			iWidth="61";
			break;
		case "Earthling":
			sURL="http://www.earthlingpub.com/";
			//sImg="pub/e/earthling/logo.gif";
			sImg="";
			sName="Earthling Publications";
			iHeight="119";
			iWidth="143";
			break;
		case "Earthlight":
			sURL="http://www.simonsays.co.uk/";
			sImg="pub/s/simonandschuster/logo.gif";
			sName="Earthlight (Simon and Schuster)";
			iHeight="119";
			iWidth="143";
			break;
		case "Edge":
			sURL="http://www.edgewebsite.com/";
			sImg="pub/e/edge/logo.gif";
			sName="EDGE - Science Fiction and Fantasy Publishing";
			iHeight="30";
			iWidth="70";
			break;
		case "Eggplant":
			sURL="http://www.eggplant-productions.com/";
			sImg="pub/e/eggplantliteraryproductions/logo.jpg";
			sName="Eggplant Literary Productions";
			iHeight="132";
			iWidth="100";
			break;
		case "ElasticPress":
			sURL="http://www.elasticpress.com/";
			sImg="pub/e/elasticpress/logo.gif";
			sName="Elastic Press";
			iHeight="113";
			iWidth="100";
			break;
		case "ElderSigns":
			sURL="http://www.eldersignspress.com/";
			sImg="pub/e/eldersignspress/logo.jpg";
			sName="Elder Signs Press";
			iHeight="186";
			iWidth="150";
			break;
		case "Ellora":
			sURL="http://www.ellorascave.com/";
			//sImg="pub/e/ellora/logo.jpg";
			sImg="";
			sName="Ellora's Cave";
			iHeight="130";
			iWidth="131";
			break;
		case "Eos":
			sURL="http://www.harpercollins.com/imprints.asp?imprint=Eos";
			sImg="pub/e/eos/logo.gif";
			sName="Eos (Harper Collins)";
			iHeight="31";
			iWidth="31";
			break;
		case "Eraserhead":
			sURL="http://www.angelfire.com/az2/eraserheadpress/";
			sImg="pub/e/eraserheadpress/logo.jpg";
			sName="Eraserhead Press";
			iHeight="138";
			iWidth="150";
			break;
		case "eXtasy":
			sURL="http://www.extasybooks.com/";
			sImg="pub/z/zumaya/logo.jpg";
			sName="eXtasy Books (an imprint of Zumaya Publications)"
			iHeight="130";
			iWidth="131";
			break;
		case "Fandemonium":
			sURL="http://www.stargatenovels.com/";
			//sImg="pub/f/fandemonium/logo.jpg";
			sImg="";
			sName="Fandemonium Books"
			break;
		case "FFNF":
			sURL="http://www.ffnf.co.uk/";
			//sImg="pub/a/aappl/logo.jpg";
			sImg="";
			sName="Facts, Figures &amp; Fun!";
			//iHeight="49";
			//iWidth="200";
			break;
		case "Fitzhenry":
			sURL="http://www.fitzhenry.ca/";
			sImg="pub/f/fitzhenry/logo.jpg";
			sName="Fitzhenry and Whiteside"
			iHeight="50";
			iWidth="250";
			break;
		case "Forge":
			sURL="http://www.tor.com/";
			sImg="pub/f/forge/logo.jpg";
			sName="Forge"
			iHeight="88";
			iWidth="66";
			break;
		case "GoldenApple":
			sURL="http://www.goldenapple.u-net.com/";
			sImg="pub/g/goldenapple/logo.jpg";
			sName="Golden Apple"
			iHeight="89";
			iWidth="58";
			break;
		case "GoldenGryphon":
			sURL="http://www.goldengryphon.com/";
			sImg="";
			sName="Golden Gryphon Press";
			break;
		case "Greenwillow":
			sURL="http://www.harperchildrens.com/hch/";
			sImg="";
			sName="Greenwillow Books (Harper Children's)";
			break;
		case "Hadesgate":
			sURL="http://www.hadesgate.co.uk/";
			sImg="pub/h/hadesgate/logo.jpg";
			sName="Hadesgate Publications";
			iHeight="78";
			iWidth="250";
			break;
		case "HardShell":
			sURL="http://www.hardshell.com/";
			sImg="pub/h/hardshell/logo.jpg";
			sName="Hard Shell Word Factory";
			iHeight="114";
			iWidth="173";
			break;
		case "HarvillSecker":
			sURL="http://www.randomhouse.co.uk/harvillsecker/";
			sImg="pub/h/harvillsecker/logo.jpg";
			sName="Harvill Secker (Random House)";
			iHeight="152";
			iWidth="100";
			break;
		case "Hippocampus":
			sURL="http://www.hippocampuspress.com/";
			//sImg="pub/h/hippocampus/logo.jpg";
			sImg="";
			sName="Hippocampus Press";
			//iHeight="114";
			//iWidth="173";
			break;
		case "HodderChildren":
			sURL="http://www.hodderheadline.co.uk/";
			sImg="pub/h/hodderheadline/banner.jpg";
			sName="Hodder Children's Books";
			iHeight="50";
			iWidth="250";
			break;
		case "HQN":
			sURL="http://www.hqnauthors.com/";
			sImg="pub/h/hqn/logo.gif";
			sName="HQN";
			iHeight="50";
			iWidth="137";
			break;
		case "Hyperion":
			sURL="http://www.hyperionbooks.com/";
			sImg="pub/h/hyperionbooks/logo.gif";
			sName="Hyperion Books";
			iHeight="151";
			iWidth="19";
			break;
		case "Imajinn":
			sURL="http://www.imajinnbooks.com/";
			sImg="buttons/imajinn.jpg";
			sName="ImaJinn Books";
			iHeight="225";
			iWidth="90";
			break;
		case "Imannion":
			sURL="http://www.immanionpress.wox.org/";
			sImg="pub/i/immanion/logo.gif";
			sName="Immanion Press";
			iHeight="129";
			iWidth="150";
			break;
		case "Jove":
			sURL="http://penguinputnam.com/";
			sImg="";
			sName="Jove (Penguin Putnam)";
			//iHeight="60";
			//iWidth="48";
			break;
		case "Kensington":
			sURL="http://www.kensingtonbooks.com/";
			sImg="pub/k/kensingtonbooks/logo.gif";
			sName="Kensington Books";
			iHeight="60";
			iWidth="48";
			break;
		case "Leisure":
			sURL="http://www.dorchesterpub.com/";
			sImg="";
			sName="Leisure Books (Dorchester Publishing)";
			//iHeight="45";
			//iWidth="240";
			break;
		case "LiteCircle":
			sURL="http://www.litecircle.org/";
			//sImg="pub/l/litecircle/logo.jpg";
			sImg="";
			sName="The Lite Circle, Inc.";
			iHeight="45";
			iWidth="240";
			break;
		case "LiquidSilver":
			sURL="http://www.liquidsilverbooks.com/";
			sImg="pub/l/liquidsilverbooks/logo2.jpg";
			sName="Liquid Silver Books";
			iHeight="39";
			iWidth="250";
			break;
		case "LoneWolf":
			sURL="http://lonewolfpubs.com/";
			sImg="pub/l/lonewolf/logo.jpg";
			sName="Lone Wolf Publications";
			iHeight="85";
			iWidth="300";
			break;
		case "Lothian":
			sURL="http://www.lothian.com.au/";
			sImg="pub/l/lothianbooks/logo.gif";
			sName="Lothian Books";
			iHeight="69";
			iWidth="250";
			break;
		case "Lovespell":
			sURL="http://www.dorchesterpub.com/";
			//sImg="pub/l/leisurebooks/logo.jpg";
			sImg="";
			sName="Lovespell (Dorchester Publishing)";
			//iHeight="45";
			//iWidth="240";
			break;
		case "LTDBooks":
			sURL="http://www.ltdbooks.com/";
			sImg="buttons/ltdlogo.gif";
			sName="LTD Books";
			iHeight="100";
			iWidth="119";
			break;
		case "LuckyPress":
			sURL="http://www.luckypress.com/";
			sImg="";
			sName="Lucky Press";
			break;
		case "Luna":
			sURL="http://www.luna-books.com/";
			sImg="pub/l/lunabooks/logo.gif";
			sName="Luna Books";
			iHeight="75";
			iWidth="70";
			break;
		case "MadNorwegian":
			sURL="http://www.madnorwegian.com/";
			//sImg="pub/m/maelstrombooks/logo.gif";
			sImg="";
			sName="Mad Norwegian";
			iHeight="0";
			iWidth="0";
			break;
		case "Maelstrom":
			sURL="http://www.maelstrombooks.com/";
			sImg="pub/m/maelstrombooks/logo.gif";
			sName="Maelstrom Books";
			iHeight="205";
			iWidth="177";
			break;
		case "MedallionPress":
			sURL="http://www.medallionpress.com/";
			sImg="pub/m/medallionpress/logo.jpg";
			sName="Medallion Press";
			iHeight="140";
			iWidth="152";
			break;
		case "MeishaMerlin":
			sURL="http://www.meishamerlin.com/";
			sImg="pub/m/meishamerlin/logo.jpg";
			sName="Meisha Merlin";
			iHeight="45";
			iWidth="240";
			break;
		case "MelroseBooks":
			sURL="http://www.melrosebooks.com/";
			sImg="pub/m/melrosebooks/logo.jpg";
			sName="Melrose Books";
			iHeight="50";
			iWidth="369";
			break;
		case "Mundania":
			sURL="http://www.mundania.com/";
			sImg="pub/m/mundania/logo.jpg";
			sName="Mundania Press";
			iHeight="28";
			iWidth="200";
			break;
		case "MysticToad":
			sURL="http://www.portnowhere.net/";
			sImg="pub/m/mystictoad/logo.jpg";
			sName="Mystic Toad Press";
			iHeight="134";
			iWidth="120";
			break;
		case "NakedSnake":
			sURL="http://www.nakedsnakepress.com/";
			//sImg="pub/n/nal/logo.jpg";
			sImg="";
			sName="Naked Snake Press";
			break;
		case "NAL":
			sURL="http://www.penguinputnam.com/";
			sImg="pub/n/nal/logo.jpg";
			sName="North American Library (Penguin Group)";
			iHeight="25";
			iWidth="34";
			break;
		case "NecessaryEvil":
			sURL="http://www.necessaryevilpress.com/";
			sImg="pub/n/necessaryevilpress/logo.jpg";
			sName="Necessary Evil Press";
			iHeight="189";
			iWidth="150";
			break;
		case "NightShade":
			sURL="http://www.nightshadebooks.com/";
			sImg="pub/n/nightshade/logo.gif";
			sName="Night Shade Books";
			iHeight="123";
			iWidth="65";
			break;
		case "Obscura":
			sURL="http://www.wunzpub.com/";
			//sImg="pub/o/obscura/logo.gif";
			sName="Obscura Press";
			//iHeight="45";
			//iWidth="34";
			break;
		case "Onyx":
			sURL="http://www.penguinputnam.com/";
			sImg="pub/o/onyx/logo.gif";
			sName="Onyx (Penguin Group)";
			iHeight="45";
			iWidth="34";
			break;
		case "OpenBook":
			sURL="http://www.openbookpress.com/";
			sImg="";
			sName="Open Book Press";
			//iHeight="";
			//iWidth="";
			break;
		case "Orbit":
			sURL="http://www.orbitbooks.co.uk/";
			sImg="pub/o/orbit/logo.gif";
			sName="Orbit Books";
			iHeight="103";
			iWidth="88";
			break;
		case "Paraview":
			sURL="http://www.paraview.com/";
			sImg="pub/p/paraview/logo.gif";
			sName="Paraview Publishing";
			iHeight="64";
			iWidth="300";
			break;
		case "Pendragon":
			sURL="http://www.pendragonpress.co.uk/";
			sImg="pub/p/pendragonpress/logo.jpg";
			sName="Pendragon Press";
			iHeight="60";
			iWidth="157";
			break;
		case "perAspera":
			sURL="http://www.perasperapress.com/";
			sImg="pub/p/peraspera/logo.gif";
			sName="per Aspera";
			iHeight="86";
			iWidth="200";
			break;
		case "PermutedPress":
			sURL="http://www.permutedpress.com/";
			sImg="pub/p/permutedpress/logo.jpg";
			sName="Permuted Press";
			iHeight="36";
			iWidth="250";
			break;
		case "Phaze":
			sURL="http://www.phazebooks.com/";
			sImg="pub/p/phaze/logo.jpg";
			sName="Phaze";
			iHeight="91";
			iWidth="200";
			break;
		case "Phobos":
			sURL="http://www.phobosweb.com/";
			sImg="pub/p/phobos/logo.jpg";
			sName="Phobos";
			iHeight="100";
			iWidth="109";
			break;
		case "Pinnacle":
			sURL="http://www.kensingtonbooks.com/";
			sImg="pub/p/pinnaclebooks/logo.gif";
			sName="Pinnacle Books (Kensington Books)";
			iHeight="60";
			iWidth="36";
			break;
		case "PlumeBooks":
			sURL="http://www.penguinputnam.com/";
			sName="Plume Books (Penguin Group)";
			break;
		case "PocketBooks":
			sURL="http://www.simonsays.co.uk/";
			sImg="pub/p/pocketbooks/logo.jpg";
			sName="Pocket Books (Simon and Schuster UK)";
			iHeight="82";
			iWidth="61";
			break;
		case "PocketBooksUS":
			sURL="http://www.simonsays.com/";
			sImg="pub/p/pocketbooks/logo.jpg";
			sName="Pocket Books (Simon and Schuster USA)";
			iHeight="82";
			iWidth="61";
			break;
		case "PocketStar":
			sURL="http://www.simonsays.com/";
			sImg="pub/p/pocketbooks/logo.jpg";
			sName="Pocket Star (Simon and Schuster)";
			iHeight="82";
			iWidth="61";
			break;
		case "Prime":
			sURL="http://www.primebooks.net/";
			sImg="buttons/primebooks.gif";
			sName="Prime Books";
			iHeight="48";
			iWidth="150";
			break;
		case "Prometheus":
			sURL="http://www.prometheusbooks.com/";
			sImg="pub/p/prometheusbooks/logo.jpg";
			sName="Prometheus Books";
			iHeight="23";
			iWidth="250";
			break;
		case "PS":
			sURL="http://www.pspublishing.co.uk/";
			sImg="pub/p/pspublishing/logo.gif";
			sName="PS Publishing";
			iHeight="115";
			iWidth="115";
			break;
		case "PublishAmerica":
			sURL="http://www.publishamerica.com/";
			sImg="";
			sName="Publish America";
			break;
		case "Putnam":
			sURL="http://www.penguinputnam.com/";
			sImg="pub/p/putnam/logo.jpg";
			sName="Putnam (Penguin Group)";
			iHeight="45";
			iWidth="34";
			break;
		case "Pyr":
			sURL="http://www.pyrsf.com/";
			sImg="pub/p/pyr/logo.jpg";
			sName="Pyr&trade; (Prometheus Books)";
			iHeight="109";
			iWidth="149";
			break;
		case "RandomHouse":
			sURL="http://www.randomhouse.com/";
			sImg="";
			sName="Random House";
			break;
		case "RawDog":
			sURL="http://www.rawdogscreaming.com/";
			sImg="";
			sName="Raw Dog Screaming Press";
			break;
		case "Razorbill":
			sURL="http://us.penguingroup.com/";
			sImg="";
			sName="Razorbill (Penguin Group)";
			break;
		case "Riptide":
			sURL="http://www.riptidepress.com/";
			sImg="pub/r/riptidepress/logo.jpg";
			sName="Riptide Press";
			iHeight="32";
			iWidth="141";
			break;
		case "Roc":
			sURL="http://www.penguinputnam.com/";
			sImg="pub/r/roc/logo.gif"
			sName="Roc (Penguin Group)";
			iHeight="36";
			iWidth="50";
			break;
		case "Runestone":
			sURL="http://www.runestonepublishing.com/";
			sImg="pub/r/runestonepublishing/logo.gif"
			sName="Runestone Publishing";
			iHeight="76";
			iWidth="250";
			break;
		case "SaltBoy":
			sURL="http://saltboy.co.nr/";
			sImg="pub/s/saltboy/logo.jpg";
			sName="SaltBoy Bookmakers";
			iHeight="75";
			iWidth="250";
			break;
		case "ScrybePress":
			sURL="http://www.scrybepress.com/";
			sImg="pub/s/scrybepress/logo.gif";
			sName="Scrybe Press";
			iHeight="49";
			iWidth="240";
			break;
		case "Shocklines":
			sURL="http://store.yahoo.net/shocklines/";
			sImg="";
			sName="Shocklines Bookstore";
			break;
		case "Signet":
			sURL="http://www.penguinputnam.com/";
			sImg="";
			sName="Signet (Penguin Group)";
			break;
		case "SilverLake":
			sURL="http://www.silverlakepublishing.com/";
			sImg="pub/s/silverlakepublishing/logo.jpg";
			sName="Silver Lake Publishing";
			iHeight="63";
			iWidth="400";
			break;
		case "SimonSpotlight":
			sURL="http://www.simonsays.co.uk/";
			sImg="pub/s/simonspotlightentertainment/logo.jpg";
			sName="Simon Spotlight Entertainment<br />(Pocket Books / Simon and Schuster)";
			iHeight="103";
			iWidth="150";
			break;
		case "SimonUK":
			sURL="http://www.simonsays.co.uk/";
			sImg="pub/s/simonandschuster/logo.gif";
			sName="Simon and Schuster UK";
			iHeight="119";
			iWidth="143";
			break;
		case "SimonUSA":
			sURL="http://www.simonsays.com/";
			sImg="pub/s/simonandschuster/logo_us.gif";
			sName="Simon and Schuster USA";
			iHeight="35";
			iWidth="145";
			break;
		case "SmoochYA":
			sURL="http://www.smoochya.com/";
			sImg="";
			sName="SmoochYA.Com";
			//iHeight="119";
			//iWidth="143";
			break;
		case "Snowbooks":
			sURL="http://www.snowbooks.com/";
			sImg="pub/s/snowbooks/logo.jpg";
			sName="Snowbooks";
			iHeight="83";
			iWidth="145";
			break;
		case "Solaris":
			sURL="http://www.solarisbooks.com/";
			sImg="pub/s/solaris/logo.jpg";
			sName="Solaris Books";
			iHeight="112";
			iWidth="112";
			break;
		case "StMartins":
			sURL="http://www.stmartins.com/";
			sImg="pub/s/stmartinspress/logo.jpg";
			sName="St. Martin's Press";
			iHeight="83";
			iWidth="250";
			break;
		case "Tachyon":
			sURL="http://www.tachyonpublications.com/";
			sImg="";
			sName="Tachyon Publications";
			//iHeight="68";
			//iWidth="128";
			break;
		case "Telos":
			sURL="http://www.telos.co.uk/";
			sImg="buttons/telos.jpg";
			sName="Telos Publishing";
			iHeight="68";
			iWidth="128";
			break;
		case "TigressPress":
			sURL="http://www.tigresspress.com/";
			sImg="pub/t/tigresspress/logo.jpg";
			sName="Tigress Press";
			iHeight="162";
			iWidth="96";
			break;
		case "Tor":
			sURL="http://www.tor.com/";
			sImg="pub/t/tor/logo.gif";
			sName="Tor Books";
			iHeight="93";
			iWidth="71";
			break;
		case "TorUK":
			sURL="http://www.toruk.com/";
			sImg="pub/t/tor/logo.gif";
			sName="Tor UK";
			iHeight="93";
			iWidth="71";
			break;
		case "TraitorDachshund":
			sURL="http://www.juliaandthedreammaker.com/";
			sImg="";
			sName="Traitor Dachshund Books";
			break;
		case "Triskelion":
			sURL="http://www.triskelionpublishing.com/";
			sImg="pub/t/triskelion/logo.jpg";
			sName="Triskelion Publishing";
			iHeight="73";
			iWidth="229";
			break;
		case "TwilightTimes":
			sURL="http://www.twilighttimesbooks.com/";
			sImg="pub/t/twilighttimes/logo.gif";
			sName="Twilight Times Books";
			iHeight="60";
			iWidth="60";
			break;
		case "UKAPress":
			sURL="http://ukapress.com/";
			sImg="pub/u/ukapress/logo.gif";
			sName="UKA Press";
			iHeight="32";
			iWidth="250";
			break;
		case "Vivisphere":
			sURL="http://www.vivisphere.com/";
			sImg="pub/v/vivisphere/logo.jpg";
			sName="Vivisphere";
			iHeight="39";
			iWidth="224";
			break;
		case "WatsonGuptill":
			sURL="http://www.watsonguptill.com/";
			sImg="pub/w/watsonguptill/logo.jpg";
			sName="Watson-Guptill Publications";
			iHeight="71";
			iWidth="70";
			break;
		case "Wildside":
			sURL="http://www.wildsidepress.com/";
			sImg="pub/w/wildsidepress/logo.jpg";
			sName="Wildside Press";
			iHeight="120";
			iWidth="120";
			break;
		case "WhiskeyCreek":
			sURL="http://www.whiskeycreekpress.com/";
			//sImg="pub/w/whiskeycreek/logo.jpg";
			sImg="";
			sName="Whiskey Creek Press";
			iHeight="";
			iWidth="";
			break;
		case "WilliamHeinemann":
			sURL="http://www.randomhouse.co.uk/";
			//sImg="pub/w/williamheinemann/logo.jpg";
			sImg="";
			sName="William Heinemann (Random House UK)";
			//iHeight="120";
			//iWidth="120";
			break;
		case "Willowgate":
			sURL="http://www.willowgatepress.com/";
			//sImg="pub/w/wildsidepress/logo.jpg";
			sImg="";
			sName="Willowgate Press";
			//iHeight="120";
			//iWidth="120";
			break;
		case "WingsPress":
			sURL="http://www.wings-press.com/";
			sImg="pub/w/wingsepress/logo.jpg";
			sName="Wings ePress";
			iHeight="86";
			iWidth="88";
			break;
		case "WinterWolf":
			sURL="http://www.winterwolfpublishing.com/";
			sImg="";
			sName="Winterwolf Publishing";
			break;
		case "YardDog":
			sURL="http://www.yarddogpress.com/";
			sImg="";
			sName="Yard Dog Press";
			break;
		case "ZebraBooks":
			sURL="http://www.zebrabooks.com/";
			sImg="pub/z/zebrabooks/logo.gif";
			sName="Zebra Books";
			iHeight="60";
			iWidth="42";
			break;
		case "Zumaya":
			sURL="http://www.zumayapublications.com/";
			sImg="pub/z/zumaya/logo.jpg";
			sName="Zumaya Publications";
			iHeight="130";
			iWidth="131";
			break;
		default:
			break;
	}
	if (sURL!="")
	{
		dPage.write("					<a href=\""+sURL+"\" target=\"new\">");
		if (sImg!="")
		{
			dPage.write("						<br /><img src=\""+sBack+sImg+"\" alt=\""+sName+"\" border=\"0\" height=\""+iHeight+"\" width=\""+iWidth+"\" />");
		}
		if (iName==1)
		{
			dPage.write("						<br />"+sName);
		}
		dPage.write("					</a>");
		dPage.write("<br />");
	}

	if (iTDClose==1)
	{
		dPage.write("				</td>");
	}
}
function addAmazon(dPage,sBack,sASINUK,sASINUSA,sASINCA,sPubURL,sPubName,sPicture,iHeight,iWidth,iNoTD,sExtra,sExtraParameter)
{
	addAmazon2(dPage,sBack,sASINUK,sASINUSA,sASINCA,sPubURL,sPubName,sPicture,iHeight,iWidth,iNoTD,sExtra,sExtraParameter)
	if (iNoTD!=1)
	{
		dPage.write("				</td>");
	}

}
function addAmazon2(dPage,sBack,sASINUK,sASINUSA,sASINCA,sPubURL,sPubName,sPicture,iHeight,iWidth,iNoTD,sExtra,sExtraParameter)
{
	if (sPubURL==undefined)
	{
		sPubURL="";
	}
	if ((sASINUK!="" || sASINUSA!="") || sASINCA!="" || sPubURL!="")
	{
		if (iNoTD!=1)
		{
			dPage.write("				<td valign=\"top\" align=\"center\">");
		}
		if ((sASINUK!="" || sASINUSA!="") || sASINCA!="")
		{
			dPage.write("					Buy It At Amazon<br />");
		}
		if (sASINUK!="")
		{
			dPage.write("					<a href=\"http://www.amazon.co.uk/exec/obidos/ASIN/"+sASINUK+"/theeternanightsf\" target=\"new\">");
			dPage.write("						<img src=\""+sBack+"images/amazonuklogo_new.gif\" alt=\"Buy This Book At Amazon (UK)\" border=\"0\" height=\"30\" width=\"125\" />");
			dPage.write("					</a><br />");
		}
		if (sASINUSA!="")
		{
			dPage.write("					<a href=\"http://www.amazon.com/exec/obidos/ASIN/"+sASINUSA+"/theeternalnig-20\" target=\"new\">");
			dPage.write("						<img src=\""+sBack+"images/amazonlogo_new.gif\" alt=\"Buy This Book At Amazon (US)\" border=\"0\" height=\"32\" width=\"126\" />");
			dPage.write("					</a><br />");
		}
		if (sASINCA!="")
		{
			dPage.write("					<a href=\"http://www.amazon.ca/exec/obidos/ASIN/"+sASINCA+"/theeternaln01-20\" target=\"new\">");
			dPage.write("						<img src=\""+sBack+"images/amazoncalogo_new.gif\" alt=\"Buy This Book At Amazon (Ca)\" border=\"0\" height=\"32\" width=\"126\" />");
			dPage.write("					</a><br />");
			dPage.write("					<br />");
		}
		if (sPubURL!="")
				{
				dPage.write("					Buy direct from<br />");
				dPage.write("					<a href=\""+sPubURL+"\" target=\"new\">");
				if (sPicture!=undefined && sPicture!="")
				{
					dPage.write("						<img src=\""+sBack+sPicture+"\" alt=\""+sPubName+"\" border=\"0\" height=\""+iHeight+"\" width=\""+iWidth+"\" /><br />");
				}
				dPage.write("						"+sPubName);
				dPage.write("					</a>");
		}
		switch (sExtra)
		{
			case "BookSurge":
				dPage.write("					<br /><br />");
				dPage.write("					Available in the UK from<br />");
				dPage.write("					<a href=\"http://www.booksurge.com/\" target=\"new\">");
				dPage.write("						<img src=\"../../../buttons/booksurge.jpg\" alt=\"Booksurge\" width=\"180\" height=\"46\" border=\"0\" />");
				dPage.write("					</a>");
				break;
			case "shocklines":
				dPage.write("					<br /><br />");
				dPage.write("					Available from<br />");
				dPage.write("					<a href=\"http://store.yahoo.com/shocklines/"+sExtraParameter+"\" target=\"new\">");
				dPage.write("						<img src=\"../../../images/shocklines.jpg\" alt=\"Shocklines\" width=\"200\" height=\"35\" border=\"0\" />");
				dPage.write("					</a>");
				break;
			case "fictionwise":
				dPage.write("					<br /><br />");
				dPage.write("     		eBook Available From<br />");
				dPage.write("     		<a href=\"http://www.fictionwise.com/fwa/17607/home.html\" target=\"new\" class=\"pic\">");
				dPage.write("     		<img src=\"../../../buttons/fictionwise.gif\" alt=\"Fictionwise\" width=\"120\" height=\"49\" border=\"0\" />");
				dPage.write("     		</a>");
				break;
			default:
				break;
		}
	}
}
function addAmazonAuthor(dPage,sBack,sAuthorName)
{
	var sAuthorSearch=sAuthorName.replace(/ /gi,"%20");
	this.document.write("								<center>");
	this.document.write("									Search Amazon for Books by "+sAuthorName+"&nbsp;<br /><br />");
	this.document.write("									<a href=\"http://www.amazon.co.uk/exec/obidos/external-search?tag=theeternanightsf&keyword="+sAuthorSearch+"&mode=books-uk\" target=\"new\">");
	this.document.write("										<img src=\""+sBack+"images/amazonuklogo_new.gif\" alt=\""+sAuthorName+" At Amazon (UK)\" border=\"0\" height=\"30\" width=\"125\" />");
	this.document.write("									</a><br />");
	this.document.write("									<a href=\"http://www.amazon.com/exec/obidos/external-search?tag=theeternalnig-20&keyword="+sAuthorSearch+"&mode=books\" target=\"new\">");
	this.document.write("										<img src=\""+sBack+"images/amazonlogo_new.gif\" alt=\""+sAuthorName+" At Amazon (US)\" border=\"0\" height=\"32\" width=\"126\" />");
	this.document.write("									</a><br />");
	this.document.write("									<a href=\"http://www.amazon.ca/exec/obidos/external-search?tag=theeternalnig-20&keyword="+sAuthorSearch+"&mode=books\" target=\"new\">");
	this.document.write("										<img src=\""+sBack+"images/amazoncalogo_new.gif\" alt=\""+sAuthorName+" At Amazon (CA)\" border=\"0\" height=\"32\" width=\"126\" />");
	this.document.write("									</a>");
	this.document.write("								</center>");
}