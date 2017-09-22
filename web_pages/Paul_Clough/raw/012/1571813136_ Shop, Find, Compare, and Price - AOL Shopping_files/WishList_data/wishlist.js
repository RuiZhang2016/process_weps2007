// this function is currently not used... see remember.js for similar function
function printSelected() {
	var prid = '';
	var F = document.rememberForm;
	
	for(var i=0; i < F.elements.length;i++) {
		var bx = F.elements[i];
		if(bx.checked == true) {
			prid = prid + bx.value + ",";
		}							
	}
	if(prid.length > 1) {
		F.pid.value = prid.substring(0, prid.length - 1);
		F.view.value = "print";
		
		var href = "WishList?";
		for(var i=0; i < F.elements.length; i++) {
			var key = F.elements[i].name;
			var value = F.elements[i].value;
			href = href + "&" + key + "=" + value;					
		}
	}
	else {
		print();
	}

	return href;
}

function shareThem(shareType, aform, origin) {
	var prid = '';
	var F = aform;
	for(var i=0; i < F.elements.length;i++) {
		var bx = F.elements[i];
		if(bx.checked == true) {
			prid = prid + bx.name + ",";
		}							
	}
	if(prid.length > 0) {
		F.pid.value = prid.substring(0, prid.length - 1);
		F.action.value = "shareItems";
		F.view.value="shared";
		F.wid.value = "1";
		var href = "/instore/WishList";
		var first = true;
		for(var i=0; i < F.elements.length; i++) {
			if (F.elements[i].name == 'action' || F.elements[i].name == 'view' || F.elements[i].name == 'sn' || F.elements[i].name == 'wid' || F.elements[i].name == 'pid')
			{
				var key = F.elements[i].name;
				var value = F.elements[i].value;
				if(first) {
					href = href + "?" + key + "=" + value;
					first = false;
				}
				else {
					href = href + "&" + key + "=" + value;					
				}
			}
		}
		href = href + "&_xml=true";
		getXML(href, shareType);
	}
	else {
		var errorText = '';
		if (shareType == "email")
			errorText = "Please select an item to email someone about.";
		else
			errorText = "Please select an item to IM someone about.";

		if (origin == 'drawer') {
			isgE('rememberError').style.display = "block";
	        iswH(isgE('rememberErrorText'), errorText);
	        isgE('rememberErrorLink').focus();
		} else window.alert(errorText);
	}		
}

function buildShareEmail(response) {
	enc = response.documentElement.getElementsByTagName("encodedQueryString");

	if(enc != null) {
		var sendUrl = window.location.protocol + "//" + window.location.hostname + "/instore/WishList" + enc.item(0).firstChild.nodeValue;

		var lf = "%0d";
		var subjectLine = escape("Check out my shopping list on AOL Shopping");
		
		var bodyCopy = escape("Hi,")+lf;
		bodyCopy += escape("Here are some of the items on my personal Remember It shopping list from AOL Shopping. Check it out!")+lf+lf+lf;
		bodyCopy += sendUrl+lf+lf;
		bodyCopy += escape("AOL makes online shopping easy.  If you want to receive notice of exclusive savings, free shipping offers, One-Day Sales and more, please click the link below.")+lf;
		bodyCopy += escape("http://preferences.in-store.com/aol/instore_specials.asp?&source=instoreemailshare");
		
		var email = 'mailto:?subject='+ subjectLine + '&body=' + bodyCopy;
		location.href = email;
	}
	else {
		alert("Could not share items ... please contact the administrator ");
	}
}

function buildShareIM(response) {		
	enc = response.documentElement.getElementsByTagName("encodedQueryString");

	if(enc != null) {
		var sendUrl = window.location.protocol + "//" + window.location.hostname + "/instore/WishList" + enc.item(0).firstChild.nodeValue;

	    var ff = (navigator.userAgent.toLowerCase().indexOf('firefox') != -1);
		// note: '&' character must be URL encoded '%26' to work with aim
		// 512 character limit per im window
		var lf = "<br />"; // linefeed
			var bodyCopy = "<a href=" + sendUrl + ">Here's some items from my Remember It list on AOL Shopping!</a>"+lf;
			bodyCopy += "*****"+lf;
			bodyCopy += "<a href=http://preferences.in-store.com/aol/instore_specials.asp?%26source=instoreemailshare>Click here to receive notices of special offers.</a>"+lf;
		
	    if (!ff) bodyCopy = escape(bodyCopy);
		var agent = navigator.userAgent.toLowerCase();
		if (agent.indexOf("aol") != -1){
			bodyCopy = escape(bodyCopy);
			window.location = 'aol://9293::' + bodyCopy;
		}else{
			bodyCopy = escape(bodyCopy);		
			bodyCopy = bodyCopy.replace(/%20/g,"+");		
	    	window.location = 'aim:GoIm?message=' + bodyCopy;
		}
	}
	else {
		alert("Could not share items ... please contact the administrator ");
	}
}

function getXML (href, shareType) {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = null;
		}
	}
	if(!xmlhttp){
		try {
			xmlhttp = new XMLHttpRequest();
		}catch(er) {
			xmlhttp = null;
		}
	}
	if(xmlhttp != null){
		xmlhttp.open("GET", href,true);
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4) {
				if (xmlhttp.status == 200) {
					if (shareType == "email"){
						buildShareEmail(xmlhttp.responseXML);}
					else if (shareType == "im")
						buildShareIM(xmlhttp.responseXML);
					return true;
				}
				else {
					alert("XML get failed");					
					return false;
				}
			}
		} 		
		xmlhttp.send(null);
	}
}

function deleteProducts() {
	var prid = '';
	var F = document.rememberForm;
	for(var i=0; i < F.elements.length;i++) {
		var bx = F.elements[i];		
		if(bx.type == 'checkbox') {			
			if(bx.checked == true) {				
				prid = prid + bx.value + ",";
			}							
		}
	}
	if(prid.length > 1) {
		F.pid.value = prid.substring(0, prid.length - 1);
		F.action.value = "removeProduct";							
		F.submit();
	}
	else {alert('No items selected');}						
}
/*alert.js code*/
function openEditAlertWindow() {
    var agent = navigator.userAgent.toLowerCase();
	var winContent="/Blank.html";
	if (agent.indexOf("win") != -1 && agent.indexOf("aol") !=-1) {
        winContent="about:blank";
	}
   return isopenCenteredWindow(winContent,'_alert',705,300,true,false,true);
}

function isdoAlert(form, screenname) {
  if ( screenname == null || screenname.length == 0 ) {
       rememberItShowErrorBox(101);
       return;
   }
   var windowref = openEditAlertWindow();
   windowref.document.writeln(" ");
   form.target = windowref.name;
   form.action="/aol/ppxcreatealert";
   form.submit();
}

function wishlistAddAlert(formName) {
   var windowref = openEditAlertWindow();
   var form=null;
   if(isgE('rememberItemsFrame') && isgE('rememberItemsFrame').contentDocument) {
     form=eval("isgE('rememberItemsFrame').contentDocument." + formName);
   } else {
     form=eval("window.frames['rememberItemsFrame'].document." + formName);
   }
   windowref.document.writeln(" ");
   form.target = windowref.name;
   form.action="/aol/ppxcreatealert";
   form.submit();
}
