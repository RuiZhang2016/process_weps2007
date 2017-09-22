// JavaScript Document
function linkAlert(URL){
	var newline = '\n';
	var sMessage = "You are about to leave the Australian Department of Health and Ageing website.";
	sMessage = sMessage + newline;
	sMessage = sMessage + "If this is your intention please click: "
	sMessage = sMessage + newline;
	sMessage = sMessage + "- OK to proceed or"
	sMessage = sMessage + newline;
	sMessage = sMessage + "- CANCEL to return to the current page"; 
	
	if (confirm(sMessage)) {
		window.location = URL;	
		return false;
	}else{
		return false;
	}
	
}

function largeWarn(URL){
var sMessage = "LARGE FILE WARNING \n";
var newline = '\n';
sMessage = sMessage + "If your browser opens files within the browser window, it is strongly recommended that the following procedure be used to access all these files:\n"
sMessage = sMessage + newline;
sMessage = sMessage + "Click the cancel button below";
sMessage = sMessage + newline;
sMessage = sMessage + "Click the link with the RIGHT mouse button, choose"
sMessage = sMessage + newline;
sMessage = sMessage + "Save Target As... (Internet Explorer)"
sMessage = sMessage + newline;
sMessage = sMessage + "OR"
sMessage = sMessage + newline;
sMessage = sMessage + "Save Link As... (Netscape),"
sMessage = sMessage + "Select an appropriate folder on a local drive to place the downloaded file.\n";
sMessage = sMessage + newline;
sMessage = sMessage + "Attempting to open large files within the browser window may lead to system problems.\n";
sMessage = sMessage + newline;
sMessage = sMessage + "- OK to proceed or"
sMessage = sMessage + newline;
sMessage = sMessage + "- CANCEL to return to the current page"; 
	
	if (confirm(sMessage)) {
		window.location = URL;	
		return false;
	}else{
		return false;
	}
	
}

function combinedWarning(URL){
var sMessage = "LARGE FILE WARNING \n";
var newline = '\n';
sMessage = sMessage + "If your browser opens files within the browser window, it is strongly recommended that the following procedure be used to access all these files:\n"
sMessage = sMessage + newline;
sMessage = sMessage + "Click the cancel button below";
sMessage = sMessage + newline;
sMessage = sMessage + "Click the link with the RIGHT mouse button, choose"
sMessage = sMessage + newline;
sMessage = sMessage + "Save Target As... (Internet Explorer)"
sMessage = sMessage + newline;
sMessage = sMessage + "OR"
sMessage = sMessage + newline;
sMessage = sMessage + "Save Link As... (Netscape),"
sMessage = sMessage + "Select an appropriate folder on a local drive to place the downloaded file.\n";
sMessage = sMessage + newline;
sMessage = sMessage + "Attempting to open large files within the browser window may lead to system problems.\n";
sMessage = sMessage + newline;
sMessage = sMessage + "- OK to proceed or"
sMessage = sMessage + newline;
sMessage = sMessage + "- CANCEL to return to the current page"; 
	
sMessage = sMessage + newline + newline;
sMessage = sMessage + "EXTERNAL FILE WARNING" + newline;
sMessage = sMessage +  "You are about to leave the Australian Department of Health and Ageing website.";
sMessage = sMessage + newline;
sMessage = sMessage + "If this is your intention please click: "
sMessage = sMessage + newline;
sMessage = sMessage + "- OK to proceed or"
sMessage = sMessage + newline;
sMessage = sMessage + "- CANCEL to return to the current page"; 
	
	if (confirm(sMessage)) {
		window.location = URL;	
		return false;
	}else{
		return false;
	}
	
}

//
function breadCrumb(){

if (window.location){	//just in case. haven't checked this out. are there any browser quirks with location.href?
var path="";		// to hold the complete breadcrumb path
var href=window.location.href;
pref = new Array();	// for "partial href"
s=href.split("/");		// s: array that hold the folders' names
fname=new Array();	// fname: "full name" that will be displayed
parts=new Array();	// hold fname's parts[1]_parts[2]

for (i=2;i<(s.length-1);i++)
{pref[2]=s[2]+"\/";
pref[i+1]=pref[i]+s[i+1]+"/";};
i=s.length-2;
pref[i+1]=pref[i]+s[i+1];
for (i=2;i<(s.length-1);i++)
{fname[i]=s[i];

/* Here you can suppress display of folders' names
by assigning an empty fname string,
or change names to be displayed.*/

if 	(s[i]=="ActualName"){fname[i]="ChosenName"}			//This is where you may rename or suppress directories
else if (s[i]=="localhost"){fname[i]=""}

else if (s[i]=="webdev01:1080"){fname[i]=""}				//This makes "yourdomain.com" invisible
else if (s[i]=="www.health.gov.au"){fname[i]=""}

// match folder names and change to preferred name see example below
// else if (s[i]=="folder"){fname[i]="preferred name"}

// statements for correct viewing on S:\ drive, change for when goes live;
else if (s[i]=="CO"){fname[i]=""}
else if (s[i]=="ISD"){fname[i]=""}
else if (s[i]=="CAB"){fname[i]=""}
else if (s[i]=="WEBS"){fname[i]=""}
else if (s[i]=="Comms%20Branch%20-%20Easter"){fname[i]=""}
else if (s[i]=="site"){fname[i]="home"}
// end local hack

// convert folder names to chapter names
else if (s[i]=="report"){fname[i]="Pricing Review Report"}
else if (s[i]=="01"){fname[i]="Establishment of the Review"}
else if (s[i]=="02"){fname[i]="The aged care framework"}
else if (s[i]=="03"){fname[i]="Financial appraisal of the sector"}
else if (s[i]=="04"){fname[i]="Economic modelling, productivity and efficiency"}
else if (s[i]=="05"){fname[i]="Demand for and supply of aged care services"}
else if (s[i]=="06"){fname[i]="Government financing of aged care"}
else if (s[i]=="07"){fname[i]="The supply of aged care services"}
else if (s[i]=="08"){fname[i]="Capital generation, prudential regulation and governance"}
else if (s[i]=="09"){fname[i]="Entry into care"}
else if (s[i]=="10"){fname[i]="Funding for care"}
else if (s[i]=="11"){fname[i]="The aged care workforce"}
else if (s[i]=="12"){fname[i]="Quality of care and consumer protection"}
else if (s[i]=="13"){fname[i]="Interaction between the Australian Government, states & territories"}
else if (s[i]=="14"){fname[i]="Findings and recommendations"}
else if (s[i]=="investinginagedcare"){fname[i]="home"}
// ensure folder names with files of the same title are excluded
else if (s[i]=="q_a"){fname[i]=""}
else if (s[i]=="factsheets"){fname[i]=""}
else if (s[i]=="book"){fname[i]=""}
else if (s[i]=="response"){fname[i]=""}
// end preferred naming

else if (s[i]=="S/:"){fname[i]=""}			//When developing your site locally, suppress local directories

//else if (s[i]=="Q|"){fname[i]=""}			//this is for Communicator 4.77win
//else if (s[i]=="MY%20SITES"){fname[i]=""}
//else if (s[i]=="MY SITES"){fname[i]=""}	//this is for Communicator 4.77win

//else if (s[i]=="consulting"){fname[i]="[Consulting]"}	//If you have a folder/directory you want to show but not have 
//else if (s[i]=="design"){fname[i]="web_design"}		//a link to it, put it in [square brackets]

//Note: this will disable auto capitalization

/* Parse fname string and put it back togather as pnoun ('propper noun')
You can actually give a name to a folder here, consisting of more than one word.
To do so, separate the words with an underline "_". */

if (fname[i].charAt(0) !== "<")			// look at the first character. unless it's an '<'...e.g.<img>
	{
	pnoun = fname[i].charAt(0).toUpperCase();	// first character to upper case
	for (j=1;j<(fname[i].length);j++)
		{
		var k = j-1;					// k designates the character following the "_"
		if (fname[i].charAt(j) == "_")		// if there is an "_"...
			{
			pnoun+= " ";			// ...replace it with a space.
			}
		else if (fname[i].charAt(k) == "_")	// If  there is a "_" in front... 
			{
			pnoun+=fname[i].charAt(j).toUpperCase(); // ...capitalize the following character
			}
		else 
		{
			pnoun+=fname[i].charAt(j);	// Append each original character in fname onto pnoun
		}
		}
	fname[i]=pnoun;	// Replace fname with pnoun. (Optionally add ".toUpperCase()" if you want ALL upper case names.)
	}
};	//ops! Just a reminder to myself--was afraid this might get lost :-)

/* This writes the breadcrumb links.
Notice: I'm appending "index.htm" to the link here. Change this to your file type extension.*/

for (i=2;i<(s.length-2);i++)
{
(fname[i] == "")?(path+=""):((fname[i].charAt(0)=="[")?(path+=fname[i]+" \» "):(path+="<a href=\""+href.substring(0,href.indexOf(pref[i])+pref[i].length)+"index.htm\">"+fname[i]+"</a> \» "));
}

i=s.length-2;
(fname[i] == "")?(path+=""):((fname[i].charAt(0)=="[")?(path+=fname[i]+" \» "):(path+="<a href=\""+href.substring(0,href.indexOf(pref[i])+pref[i].length)+"index.htm\">"+fname[i]+"</a> \» "));

i=s.length-1;
fullname=s[i].substring(0,s[i].indexOf("."));

/* For any files not adhering to the naming scheme, you may specify a custom display name here: 
You can give a name to a page here, consisting of more than one word.
To do so, separate the words with an underline "_".*/

var pgName = document.title; // set the last text in the trail to be the page title

//aReplaced = new Array(); // new Array that holds the regular expression objects
// Add more regular expressions to the array, copy syntax as below
//aReplaced[0] = new RegExp('- Pricing Review Report - Investing in Australia\'s Aged Care','g'); // creates a new Regular expression and loads to new Array aReplaced
//aReplaced[1] = new RegExp('- Pricing Review Report Summary - Investing in Australia\'s Aged Care','g');
//  aReplaced[2] = new RegExp('- Investing in Australia\'s Aged Care','g');


//for(var i=0; i <aReplaced.length; i++) {
//	pgName = pgName.replace(aReplaced[i], ' ');
//}

// Match page name and change if it does not suit..
if (fullname==""){fullname=pgName}
if (fullname=="pgName"){fullname=pgName}
//
if (fullname=="report"){fullname="Pricing Review Report"}
if (fullname=="tor"){fullname="Terms of Reference"}
if (fullname=="atoz"){fullname="A to Z"}
if (fullname=="abbrev"){fullname="Abbreviations"}
if (fullname=="recommend"){fullname="List of recommendations"}
if (fullname=="review"){fullname="Review Staff"}
// End current page name conversion

else if (fullname=="crptcnme"){fullname="some_name"}
else {};

pnoun = fullname.charAt(0).toUpperCase();		// first character to upper case
for (i=1;i<(fullname.length);i++)
{
var k = i-1;								// k designates the character following the "_"
if (fullname.charAt(i) == "_")					// if there is an "_"...
	{
	pnoun+= " ";						// ...replace it with a space.
	}
else if (fullname.charAt(k) == "_")				// If  there is a "_" in front...
	{
	pnoun+=fullname.charAt(i).toUpperCase();	// ...capitalize the following character
	}
else
	{
	pnoun+=fullname.charAt(i);				// Append each original character in fullname onto pnoun
	}
}
;path+=pnoun;
//url=window.location.protocol+"//"+path;	            //use only to display protocol type (ftp://; http://)
url=path;								//If you do, comment out this line instead
document.write(url);
}

}
