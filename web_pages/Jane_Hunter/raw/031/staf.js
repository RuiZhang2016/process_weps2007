
// STaF Functions for Email this and IM this Functionalities
var IM_global_title;
var IM_global_url;
var IM_default_text_IE = "";
var IM_default_text_OT = "";

// To check AIM install in the local machine or not

function canRunAIM() {
    var agt = navigator.userAgent.toLowerCase();
    var isIE =  (agt.indexOf("msie") != -1);
    if (!isIE) 
       return true;

    var a = document.anchors;
    for (var i=0;i<a.length;i++) {
        if (a[i].name=="aimnotfound") 
		{
            return false;
        }
    }
    return true;
}

// To check AOL Client install in the local machine or not

function canRunAOLClient() {
    var agt = navigator.userAgent.toLowerCase();
    var isIE =  (agt.indexOf("msie") != -1);
    if (!isIE) 
        return true;

    var a = document.anchors;
    for (var i=0;i<a.length;i++) {
        if (a[i].name=="aolclientnotfound") {
            return false;
        }
    }
    return true;
}

// To send IM through AOL Client Messenger

function sendAOLCLNT() {
 
 var title = IM_global_title;
 var url   = IM_global_url;

 var uAgt	=	navigator.userAgent.toLowerCase();
 var isAOL	=	uAgt.indexOf(" aol ")	!= -1;
 var isIE =  uAgt.indexOf("msie") != -1;
 
 try {

  if (!isAOL) {
 	 if (!isIE) {
        document.location="aol://9293::"+ IM_default_text_OT + "<br><a href='" + url + "'>" + title + "</a>";
	 } else {
	   document.location="aol://9293::"+ IM_default_text_IE +"%3cbr%3e%3ca href='" + url + "'%3e" + title + "%3c%2fa%3e";
     }
  } else {
     document.location='aol://9293::' + IM_default_text_OT +'<br><a href="' + url + '">' + title + '</a>'
  }

 } catch (e) {
    AIMExpress.start();
 }
}

// To send IM through AIM
/*
function sendAIM() {
 
 var title = IM_global_title;
 var url   = IM_global_url;
 
		bodyCopy = "Hi,"+lFeed+lFeed;
		bodyCopy += "I was on AOL Shopping and thought you might be interested in checking this page out:"+lFeed;
		bodyCopy += escape(url)+lFeed+lFeed+lFeed;
		bodyCopy += "*****"+lFeed;
		bodyCopy += "AOL makes online shopping easy.  If you want to receive notice of exclusive savings, free shipping offers, One-Day Sales and more, please click here."+lFeed;
		bodyCopy += "http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare";

 var title = title.replace(/ /g, "+");
 var uAgt	=	navigator.userAgent.toLowerCase();
 var isIE	=	uAgt.indexOf(" msie ")	!= -1;
 var isAOLBrowser	=	uAgt.indexOf(" america online browser ") != -1; 
 if (!isIE) {
    var message = IM_default_text_OT + bodyCopy;
	alert(message)
 } else if(isAOLBrowser) {
    var message = IM_default_text_OT + bodyCopy;
 } else {
    var message = IM_default_text_IE + bodyCopy;
 }
	//message = escape(message);  

 try {
  document.location = 'aim:GoIm?message=' + message;
 } catch (e) {
  AIMExpress.start();
 }
}
*/

function sendAIM() {
 var lFeed = "<br>"
 var url   = IM_global_url; 
 var title = "Hi,"+lFeed
     title += "I was on AOL Shopping and thought you might be interested in checking this page out:"+lFeed;
     title += "<a href=\'"+ url +"\'>"+url+"</a>"+lFeed+lFeed;
     title += "*****"+lFeed;
     title += "AOL makes online shopping easy.  If you want to receive notice of exclusive savings, free shipping offers, One-Day Sales and more, please click here."+lFeed;
     title += "<a href='http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare'>http://preferences.in-store.com/aol/instore_specials.asp?source=instoreemailshare</a>";


 var title = title.replace(/ /g, "+");
 var uAgt	=	navigator.userAgent.toLowerCase();
 var isIE	=	uAgt.indexOf(" msie ")	!= -1;
 var NS = (navigator.userAgent.toLowerCase().indexOf('netscape') != -1);
 var isAOLBrowser	=	uAgt.indexOf(" america online browser ") != -1; 
 if (!isIE) {
 	if(NS)title = escape(title);
    var message = IM_default_text_OT + title;
 } else if(isAOLBrowser) {
    var message = IM_default_text_OT + title;
 } else {
    var message = IM_default_text_IE + title;
 }
	message = escape(message);  
 
 try {
  document.location = 'aim:GoIm?message=' + message;
 } catch (e) {
	AIMExpress.start();
 }
}

// If user is not using AOL Client then 
// send IM thro AIM if exists else if AOLClient exists then 
// send IM thro AOLClient else launch AIM Express and send IM

// If user in using the AOL Client then send IM thro AOL Client Instant Messenger


function sendIM(title, url) {

 if(title == '') {
	title = 'Click here to checkout';
 }

 IM_global_title = title;
 IM_global_url = url;

 var uAgt	=	navigator.userAgent.toLowerCase();
 var isAOL	=	uAgt.indexOf(" aol ")	!= -1;
 var isIE	=	uAgt.indexOf(" msie ")	!= -1;
 if (!isAOL) {
   if (!isIE) {

      sendAIM ();
   } else {
	  if (!canRunAIM()) {
		    AIMExpress.start();
      } else {
         sendAIM ();
      }
   }
 } else {
       sendAOLCLNT ();
 }

}

// To launch the STAF User Console

function openstaf(title, url, channel) {
   window.open("http://sendtoafriend.aol.com?type=disp&title="+escape(title)+"&channel="+escape(channel)+"&url="+escape(url)+"",null,"height=420,width=296,statusbar=0,toolbar=no,menubar=no,location=no")
}
