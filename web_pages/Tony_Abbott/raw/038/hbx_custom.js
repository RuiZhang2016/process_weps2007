
//Removes illegal characters
function hbxStrip(a) {
 a = a.split("|").join("");
 a = a.split("&").join("");
 a = a.split("'").join("");
 a = a.split("#").join("");
 a = a.split("$").join("");
 a = a.split("%").join("");
 a = a.split("^").join("");
 a = a.split("*").join("");
 a = a.split(":").join("");
 a = a.split("~").join("");
 a = a.split(";").join("");
 a = a.split("_").join(" ");
 return a;
}
// Removes leading whitespaces
function LTrim( value ) {	
	var re = /\s*((\S+\s*)*)/;
	return value.replace(re, "$1");
}
// Removes ending whitespaces
function RTrim( value ) {	
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");
}
// Removes leading and ending whitespaces
function trim( value ) {	
	return LTrim(RTrim(value));
}

function getMLC(b) {
switch (b)
{
case "Blogs Index":  		b = "/Opinion/Blogs";break
case "Cartoons":  		b = "/Opinion/Cartoons";break

case "The Nation":  		b = "/The Nation/The Nation";break
case "NSW":  			b = "/The Nation/The Nation/NSW";break
case "Vic":  			b = "/The Nation/The Nation/Vic";break
case "Qld":  			b = "/The Nation/The Nation/Qld";break
case "SA":  			b = "/The Nation/The Nation/SA";break
case "Vic":  			b = "/The Nation/The Nation/Vic";break
case "Tas":  			b = "/The Nation/The Nation/Tas";break
case "WA":  			b = "/The Nation/The Nation/WA";break
case "NT":  			b = "/The Nation/The Nation/NT";break
case "Higher Education":  	b = "/The Nation/Higher Education";break
case "Media":  			b = "/The Nation/Media";break
case "Features":  		b = "/The Nation/Features";break

case "The World": 		b= "/The World/The World";break
case "Science & nature":  	b = "/The World/Science and nature";break
case "World Wide Weird":  	b = "/The World/World Wide Weird";break

case "Business":  		b = "/Business/Business";break
case "Mining & Energy":  	b = "/Business/Mining and Energy";break
case "FT Business":  		b = "/Business/FT Business";break
case "Wealth":  		b = "/Business/Wealth";break
case "Property":  		b = "/Business/Property";break
case "Aviation":  		b = "/Business/Aviation";break
case "Vision 2010":  		b = "/Business/Vision 2010";break

case "Sport":  			b = "/Sport/Sport";break
case "Cricket":  		b = "/Sport/Cricket";break
case "Soccer":			b = "/Sport/Soccer";break
case "Golf":			b = "/Sport/Golf";break
case "Update":			b = "/Sport/Results";break

case "Defence":			b = "/Defence";break
case "National Security":	b = "/Defence/National Security";break

case "Arts & Books":		b = "/Arts and Books/Arts and Books";break
case "Reviews":			b = "/Arts and Books/Reviews";break
case "ALR":			b = "/Arts and Books/ALR";break
case "Books":			b = "/Arts and Books/Books";break
case "Books":			b = "/Arts and Books/Books";break

case "Health":			b = "/Lifestyle/Health";break
case "Travel":			b = "/Lifestyle/Travel";break
case "Motoring":		b = "/Lifestyle/Motoring";break

case "Defence":			b = "/Special Reports/Defence";break
case "Destination Europe":	b = "/Special Reports/Destination Europe";break
case "Destination Afloat":	b = "/Special Reports/Destination Afloat";break
case "Dest. Australia":		b = "/Special Reports/Dest. Australia";break
case "Luxury Travel":		b = "/Special Reports/Luxury Travel";break
case "Malaysia":		b = "/Special Reports/Malaysia";break
case "Hong Kong":		b = "/Special Reports/Hong Kong";break
case "Destination South Pacific":	b = "/Special Reports/Destination South Pacific";break
case "Canada, Alaska":		b = "/Special Reports/Canada, Alaska";break
default:  /*alert(b);*/ break
}
 return b;
}

//BEGIN EDITABLE SECTION
//CONFIGURATION VARIABLES

var hbxurl   	= window.location.href;
var hbxtitle = document.title;
var hbxarray = hbxtitle.split("|");
if (hbxurl == 'http://www.theaustralian.news.com.au/' || hbxurl =='http://www.theaustralian.news.com.au/0,,,00.html') {
hbx.pn  	= "Home Page";
hbx.mlc 	= "/Home";
} else if (hbxurl.indexOf("blogs.") > 0) { //Blogs
var hbxblog = hbxurl.split("/");
hbx.pn  	= hbxStrip(hbxblog[7]);
hbx.mlc 	= '/Opinion/Blogs/' + hbxblog[3];
} else if (hbxurl.indexOf("/index/") > 0) { //Index Pages
hbx.pn  	= "Index";
hbx.mlc 	= getMLC(trim(hbxarray[0]));

} else if (hbxurl.indexOf("/story/") > 0) { // Story Pages
hbx.pn  	= hbxStrip(trim(hbxarray[0]));
hbx.mlc 	= getMLC(trim(hbxarray[1]));
}