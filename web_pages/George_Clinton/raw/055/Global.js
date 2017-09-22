function DisplaySideCar()
{
	if(document.getElementById('sidecar_empty') == null)
	{
		var sidecarCell = document.getElementById("SideCarCell");
		if (sidecarCell)
		{
			if(document.body.clientWidth > 1054)
				sidecarCell.style.display = 'block';
			else
				sidecarCell.style.display = 'none';
			if(document.body.clientWidth >= 1266)
				document.getElementById('GrandContainerTable').style.width = 1266;
			else	
				document.getElementById('GrandContainerTable').style.width = '100%';
		}
	}
}


function SetKeyboardInputFocus()
{
	try
	{
		if (100 > document.body.scrollTop)
		{
			var objSrchFrm = document.searchFrm;
			if (objSrchFrm != null) objSrchFrm.search_encarta.focus();
			else
			{
				objSrchFrm = document.filtSrch;
				if (objSrchFrm != null) objSrchFrm.filtSrchText.focus();
			}
		}
	}
	catch(err){}
}

function setFrameHeight(id, endObjId)
{
	try
	{
		var frameDoc=(navigator.userAgent.indexOf("MSIE")>0)?document.frames(id).document:document.getElementById(id).contentDocument;
		var objEnd=frameDoc.getElementById(endObjId);
		if (objEnd==null)
			document.getElementById(id).style.height=0;
		else if (objEnd.offsetTop>0)
			document.getElementById(id).style.height=objEnd.offsetTop;
	}
	catch(err){}
}

function LinkToUrl(url,sflag)
{
	window.open(url,sflag);
}

function encodeQueryString(query)
{
	var encodedQuery="";
	var i=0;
	while(i<query.length)
	{
		var c = query.charCodeAt(i);
		encodedQuery += query.charCodeAt(i)+" ";
		i++;
	}
	return encodedQuery;
}

function UTF8UrlEncode(input)
{
	var output = "";
	var currentChar = '';
	
	for(var counter = 0; counter < input.length; counter++) 
	{
		currentChar = input.charCodeAt(counter);
		
		if((48 <= currentChar) && (currentChar <= 57))
			output = output + input.charAt(counter);
		else if((65 <= currentChar) && (currentChar <= 90))
			output = output + input.charAt(counter);
		else if((97 <= currentChar) && (currentChar <= 122))
			output = output + input.charAt(counter);
		else
			output =  output + UTF8UrlEncodeChar(currentChar); 
	}
	return output;
}

function UTF8UrlEncodeChar(input)
{
	if(input <= 0x7F) return "%" + input.toString(16);

	var leadByte = 0xFF80; var hexString = ""; var leadByteSpace = 5;
	while(input > (Math.pow(2, leadByteSpace + 1) - 1))
	{
		hexString = "%" + ((input & 0x3F) | 0x80).toString(16) + hexString;
		leadByte = (leadByte >> 1);
		leadByteSpace--;
		input = input >> 6;
	} 
	return ("%" + (input | (leadByte & 0xFF)).toString(16) + hexString).toUpperCase();
}

function DisplayPrintWarning(PageCount,PageLimit,URL,Message)
{
	var strWarning = "";
	if(PageCount >PageLimit)
	{
		LowerLimit = PageCount - 3;
		UpperLimit = PageCount + 3;
		var RegExpLo = /\{0\}/gi;
		var RegExpUp = /\{1\}/gi;
		strWarning= Message.replace(RegExpLo,LowerLimit);
		strWarning = strWarning.replace(RegExpUp,UpperLimit);
		alert(strWarning);
	}
	window.open(URL,'_self');
}

function validateFbk(list, radio, frm)
{	
	if (radio[0].checked)
	{
		alert(errmsg1);
		return false;
	}
	if (list.selectedIndex <= 0)
	{
		alert(errmsg2);
		return false;
	}
	frm.action=fdbkURL;
	return true;
}

function KidsModSel(mod, clsname, fdesc)
{
	mod.className = clsname;
	if (fdesc == 1) mod.getElementsByTagName("div")[1].style.textDecoration="underline";
}

function KidsModUnsel(mod, clsname, fdesc)
{
	mod.className = clsname;
	if (fdesc == 1) mod.getElementsByTagName("div")[1].style.textDecoration="none";
}

function blogThis(serviceUrl)
{
	// Add a trailing / to the end of the URL (if needed).
	if (serviceUrl.charAt(serviceUrl.length - 1) != "/")
	{
		serviceUrl += "/";
	}
	
	// Get the URL of the window calling this function.
	var blogUrl = window.location.href;
	
	// Remove anchor
	var ihsh = blogUrl.lastIndexOf("#");
	if (ihsh != -1)
		blogUrl = blogUrl.substring(0, ihsh);
	
	// For articles, remove page number (and any other params)
	var ienc = blogUrl.indexOf("/encyclopedia_");
	if (ienc != -1)
	{
		var iund = blogUrl.indexOf("_", ienc+14);
		var isla = blogUrl.indexOf("/", ienc+14);
		if (iund != -1 && iund < isla)
			blogUrl = blogUrl.substring(0, iund) + blogUrl.substring(isla, blogUrl.length);
	}

    // Max Url length for Internet Explorer.
    var maxUrlLength = 2083;
    var openUrl = serviceUrl + "BlogIt.aspx?Title=" + escape(document.title) + "&SourceURL=" + escape(blogUrl) + "&description=";
    var sel = "";

    // Deal with the selection of text in the articles.

    // Mozilla browsers.
    if (window.getSelection)
    {
        openUrl += window.getSelection().toString();
    }
    // IE browsers.
    else if (document.selection.type.toLowerCase() == "text")
    {
        range = document.selection.createRange();
        range.expand("word");
        sel = escape(range.htmlText);

        if ((openUrl.length + sel.length) <= maxUrlLength)
        {
            openUrl += sel;
        }
    }

	window.open(openUrl, "blog_popup");
}



function URLencode(sStr) {
    newStr = escape(encodeURI(decodeURI(sStr)));
    return newStr;
     
  }
  
 
function emailThisLink(subject_prefix,title, bodyprefix, bodysuffix)
{
var url, subject,body;
url = window.location.href;

subject = escape(subject_prefix) + escape(title);
if(bodysuffix != '')
    body = escape(bodyprefix) + "%0A" + "%0A" +escape(title) + "%0A"+ "%0A"+URLencode (url) + "%0A" +escape(bodysuffix);
else
    body = escape(bodyprefix) + "%0A" + "%0A" +escape(title) + "%0A"+ "%0A"+ URLencode (url) ;
   

document.location = 'mailto:?subject='+subject + '&body='+body;
}



