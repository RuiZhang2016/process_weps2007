// This MIGHT supress the stack overflow errors...of course, it also supresses all other errors.
window.onerror = null;

var numberloaded = 0;
var currentISBN = 0;
var expireDate= new Date(2050, 10, 23);
var intervalID;

function setCookie(cookieName,cookieContent,transientBoolean)
{
if (transientBoolean)
	{
	document.cookie = cookieName+"="+cookieContent;
	}
else
	{
	document.cookie = cookieName+"="+cookieContent+";expires="+expireDate.toGMTString();
	}
}

function cookieVal(cookieName)
{
thisCookie = document.cookie.split("; ")
for (i=0; i<thisCookie.length; i++)
	{
	if (cookieName == thisCookie[i].split("=")[0])
		{
		return thisCookie[i].split("=")[1]
		}
	}
return 0;
}

function LT_findObj2(objectId) {
    // cross-browser function to get an object's style object given its id
    if(document.getElementById && document.getElementById(objectId)) {
				// W3C DOM
				return document.getElementById(objectId);
    } else if (document.all && document.all(objectId)) {
				// MSIE 4 DOM
				return document.all(objectId);
    } else if (document.layers && document.layers[objectId]) {
				// NN 4 DOM.. note: this won't find nested layers
				return document.layers[objectId];
    }
		return false;
} // getStyleObject
function clearSnap()
{
setCookie("cookie_snapback", '', false);
}

function hideimage(imgObj,id)
{
imgObj.style.width = "0px";
imgObj.style.display = "none";
}

function thumbnailDidntLoad(imgObj,id)
{
imgObj.style.width = "0px";
imgObj.style.display = "none";
if (id != -1) { document.getElementById('isbn'+id).style.display = 'block'; }
}

function thumbnailLoaded(imgObj, id)
{
if (imgObj.width < 10)
	{
	thumbnailDidntLoad(imgObj, id); 
	}
numberloaded++;
}

function findbook(type, num, optISBN)
{
if (num == 0) { currentISBN = 0; }

if (optISBN)
	{
	var nowISBN = optISBN;
	}
else
	{
	var nowISBN = isbnArray[currentISBN];
	}
	
var gotourl ='';

if (type == 1) { gotourl = "http://www.amazon.com/exec/obidos/ASIN/" + nowISBN + "/ref=nosim/librarythin08-20"; }
//if (type == 2) { gotourl = "http://dogbert.abebooks.com/servlet/SearchResults?y=0&isbn=" + nowISBN + "&x=0"; }
if (type == 2) { gotourl = "http://www.abebooks.com/abe/ParaRoute?pid=16283&url=http://www.abebooks.com/servlet/SearchResults?y=0&isbn=" + nowISBN + "&x=0"; }
//alibris used
//if (type == 3) { gotourl = "http://click.linksynergy.com/fs-bin/click?id=kVwAz0miGiI&offerid=39828.122856000&type=2&subid=0&tmpid=939&RD_PARM1=http%253A%252F%252Fwww.alibris.com/search/search.cfm%253Fqsort%253Dp%2526qisbn%253D" + nowISBN; }
//alibris both
if (type == 3) { gotourl = "http://click.linksynergy.com/fs-bin/click?id=kVwAz0miGiI&offerid=39828.122856000&type=2&subid=0&tmpid=939&RD_PARM1=http%253A%252F%252Fwww.alibris.com/search/search.cfm%253Fqsort%253Dp%2526wtit%253D" + nowISBN; }
if (type == 4) { gotourl = "http://www.bookfinder.com/search/?isbn="+nowISBN+"&st=xl&ac=qr&src=librarything"; }
if (type == 5) { gotourl = "http://www.booksense.com/product/info.jsp?isbn=" + nowISBN; }
if (type == 6) { gotourl = "http://worldcatlibraries.org/wcpa/isbn/" + nowISBN; }
if (type == 7) { gotourl = "http://www.bordersstores.com/search/search.jsp?srchTerms=" + nowISBN + "&mediaType=1&srchType=Keyword"; }
//alibris new
if (type == 8) { gotourl = "http://click.linksynergy.com/fs-bin/click?id=kVwAz0miGiI&offerid=39828.122856000&type=2&subid=0&tmpid=939&RD_PARM1=http%253A%252F%252Fwww.alibris.com/search/detail.cfm%253FS%253DR%2526isbn%253D" + nowISBN; }

window.open(gotourl,"Find","")

closepopup();
}

function select(image,id)
{
if (image)
	{ var linkObj = document.getElementById("d"+id); }
else
	{ var linkObj = document.getElementById("isbn"+id); }

document.getElementById("popupcover").src = "http://images.amazon.com/images/P/" + isbnArray[id] + ".01._SCMZZZZZZZ_.jpg";

var x = findPosX(linkObj) + 15;
var y = findPosY(linkObj) - 15;

var popup = document.getElementById("popup");
popup.style.display = "block";
popup.style.left = x+"px";
popup.style.top = y+"px";

currentISBN = id;
}

function openUsercover(id,book)
{
imgObj = document.getElementById("uc"+id);
document.getElementById("uclargecover").src = '/i/covers/med/' + book + '-m.jpg';

var x = findPosX(imgObj) + 15;
var y = findPosY(imgObj) - 15;

var popup = document.getElementById("usercover");
popup.style.display = "block";
popup.style.left = x+"px";
popup.style.top = y+"px";
}

function closepopup()
{
var popup = document.getElementById("popup");
popup.style.display = "none";
}

function closeusercover()
{
var usercover = document.getElementById("usercover");
usercover.style.display = "none";
}

function findPosX(obj)
{
var curleft = 0;
if(obj.offsetParent)
	while(1) 
	{
	curleft += obj.offsetLeft;
	if(!obj.offsetParent)
	break;
	obj = obj.offsetParent;
	}
else if(obj.x)
	curleft += obj.x;
return curleft;
}

function findPosY(obj)
{
var curtop = 0;
if(obj.offsetParent)
	while(1)
	{
	curtop += obj.offsetTop;
	if(!obj.offsetParent)
	break;
	obj = obj.offsetParent;
	}
else if(obj.y)
	curtop += obj.y;
return curtop;
}

// EDIT FUNCTIONS

function changedateformat(format)
{
if (format == 'us')
	{
	document.getElementById("us").style.display = 'block';
	document.getElementById("euro").style.display = 'none';
	setCookie("cookie_euroformat", '', false);
	}
else
	{
	document.getElementById("us").style.display = 'none';
	document.getElementById("euro").style.display = 'block';
	setCookie("cookie_euroformat", '1', false);
	}
}

function showhideotherfields(id) // showhideotherfields is used in response.php
{
if (navigator.appName=="Netscape" && parseFloat(navigator.appVersion) < 5.0)
	{
	alert("Sorry. Your browser doesn't support this feature.")
	return;
	}	
if (!cookieVal("cookie_otherfields"))
	{
	setCookie("cookie_otherfields", '1', false);
	document.getElementById("divet").src = "pics/divet-on.gif";
	document.getElementById('t1').style.display=""; // do this right some day
	document.getElementById('t2').style.display="";
	document.getElementById('t3').style.display="";
	document.getElementById('t4').style.display="";
	document.getElementById('t5').style.display="";
	document.getElementById('t6').style.display="";
	}
else
	{
	setCookie("cookie_otherfields", '', false);
	document.getElementById("divet").src = "pics/divet.gif";
	document.getElementById('t1').style.display="none";
	document.getElementById('t2').style.display="none";
	document.getElementById('t3').style.display="none";
	document.getElementById('t4').style.display="none";
	document.getElementById('t5').style.display="none";
	document.getElementById('t6').style.display="none";
	}
}

function OnOffOtherFields()
{
if (!cookieVal("cookie_otherfields"))
	{
	setCookie("cookie_otherfields", '', false);
	document.getElementById("divet").src = "pics/divet.gif";
	document.getElementById('t1').style.display="none";
	document.getElementById('t2').style.display="none";
	document.getElementById('t3').style.display="none";
	document.getElementById('t4').style.display="none";
	document.getElementById('t5').style.display="none";
	document.getElementById('t6').style.display="none";
	}
}

// MORE STUFF

function gotoURL(url)
{
window.location = url;
}

function addbook(optionalURL)
{
var result = confirm("Add this book to your library?");
if ((optionalURL) && (result))
	{
	window.location = optionalURL;
	}
else
	{
	return result;
	}
}

function deletebook(optionalURL)
{
var result = confirm("Delete this book?");
if ((optionalURL) && (result))
	{
	window.location = optionalURL;
	}
else
	{
	return result;
	}
}

function getnocover(imgObj)
{
	var imageid = imgObj.id;
	intervalID = setInterval("LT_checkImageSize('"+imageid+"')", 100);
	//imgObj.src = "../pics/nocover.gif";
}

/* this friggin' sucks. IE sucks. Had to hack this together because even though the onload event has
	fired, IE still doesn't have the image data loaded into the object. The width is always 0 even for valid images!
	After doing a half second interval polling, we might fix the problem. 
	Unfortunately, we can't pass an object with interval polling or with timeout so we have to find the object id specifically.
	I'm not really sure that the id can even be reliably counted on for being there.
*/
function LT_checkImageSize(id) {
	var image;
	if (id)
		image = LT_findObj2(id);
	else
		image = LT_findObj2('largecover');
		
	
	if ((image.width > 0) && (image.width < 25))
	{
			// Its probably an amazon empty image. Set it to our own custom empty image. Stop polling.
			image.src = "../pics/nocover.gif";
			clearInterval(intervalID);
	}
	else if (image.width >= 25)
	{
		// Leave it alone. It should be a valid image. Stop polling.
		clearInterval(intervalID);
	}
}

function gotnocover(imgObj)
{
	//setTimeout('nullFunc()', 2000);
	var imageid = imgObj.id;
	intervalID = setInterval("LT_checkImageSize('"+imageid+"')", 100);
	/*
	if (imgObj.width < 3)
	{
		imgObj.src = "../pics/nocover.gif";
	}
	*/
}
function nullFunc() {};

function separateWork(book,work)
{
var result = confirm("Separate this book from work?");
if (result)
	{
	window.location= "/work_separate.php?book="+book+"&work="+work;
	}
else
	{
	return result;
	}
}


// ADD AJAX STUFF

var xmlHttp;
var currentDiv = 'simlib';

function createXMLHttpRequest()
{
if (window.ActiveXObject)
	{
	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} 
else if (window.XMLHttpRequest) 
	{
	xmlHttp = new XMLHttpRequest();
	}
}
    
function changerectype(div,work,type,excludedauthor)
{
currentDiv = div;
createXMLHttpRequest();
xmlHttp.onreadystatechange = handleStateChange;

if (div=='simlib')
	{
	var URL = "inc_bookrec_simlib2.php?workcode="+work+"&type="+type;
	}
else
	{
	var URL = "inc_bookrec_tag2.php?workcode="+work+"&type="+type+"&excludeauthor="+excludedauthor;
	}
xmlHttp.open("GET", URL, true);
xmlHttp.send(null);
document.getElementById(div+"head").innerHTML = "Loading...";
document.getElementById(div+"head").style.color = "red";
}

function loadCatalogingData(work,type)
{
currentDiv = type + "data";
createXMLHttpRequest();
xmlHttp.onreadystatechange = handleStateChange;

//var URL = "http://www.librarything.com/ajax_catalogingdata.php?type="+type+"&work="+work;
var URL = "/ajax_catalogingdata.php?type="+type+"&work="+work;

xmlHttp.open("GET", URL, true);
xmlHttp.send(null);
document.getElementById(currentDiv).innerHTML = "<span style='color: red;'>Loading...</span>";
}

function getMarcRecords(work)
{
//currentDiv = "marc";

// adding this because this seems to be using the version of handleStateChange in basicajax,
// which requires the existence of a var called currentid, rather than the handleStateChange
// in card4.js, which requires currentDiv
currentid = "marc";

//var URL = "http://www.librarything.com/ajax_seeMarcRecords.php?work="+work;
var URL = "/ajax_seeMarcRecords.php?work="+work;

createXMLHttpRequest();
xmlHttp.onreadystatechange = handleStateChange;
xmlHttp.open("GET", URL, true);
xmlHttp.send(null);
//document.getElementById(currentDiv).innerHTML = "<span style='color: red;'>Loading...</span>";
document.getElementById(currentid).innerHTML = "<span style='color: red;'>Loading...</span>";
}

//END AJAX STUFF

function getCollectionList()
{
currentDiv = 'collectionlist';
createXMLHttpRequest();
xmlHttp.onreadystatechange = handleStateChange;
var URL = '/ajax_collectionlist.php';
xmlHttp.open("GET", URL, true);
xmlHttp.send(null);
document.getElementById("collectionlist").innerHTML = '<p>loading</p>';
}
