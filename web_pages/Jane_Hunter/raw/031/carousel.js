var pwsId;

function CarouselItem(merchantName, promoText, widgetID, pageID, clusterID){
	this.merchantName = merchantName;
	this.promoText = promoText;
	this.widgetID  = widgetID;
	this.pageID    = pageID;
	this.clusterID = clusterID;
	this.viewed    = false;
}

function toggleTab(obj) {
	var flipped;

	if (pwsId == obj.id) return;

	if(obj.className == 'tab566uberTabOff') {
		obj.className = 'tab566uberTabOn';
		flipped ="on";
	}

	if(obj.className == 'tab566uberTabOn')
		if (flipped !="on") {obj.className = 'tab566uberTabOff';}
}

var browser;
if(document.childNodes && !document.all && !navigator.taintEnabled && !accentColorName ){
	browser = "Safari";
}
if ((navigator.product == 'Gecko') && ( browser != "Safari" )){
	browser = "Netscape";
}
if (( browser != "Safari" ) && ( browser != "Netscape" )) {
	browser = "IE";
}

function switchTab(obj, href, target, asppServer, currentCategoryID) {
	var widgetServlet = "\widget?id=" + currentCategoryID + "&pwsid=";
	pwsId = obj.id;
	var prnt = document.getElementById('tab566uberTabs');
	var children = prnt.childNodes;
	for(var i = 0 ; i < children.length; i++) {
		children[i].className = 'tab566uberTabOff';
	}

	obj.className = 'tab566uberTabOn';
	injectHTML(target, widgetServlet.concat(carousel[href].widgetID));
	var asppImg = document.getElementById('carouselASPP');
	asppImg.src = asppServer.concat("/promoimp/",carousel[href].pageID,"xx",carousel[href].clusterID,"/aolt2");
}

var divTarget = null;
function injectHTML(target, href){
	var xmlhttp;
	var t = document.getElementById(target);
	divTarget = target;

 	try {xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");}
 	catch (e) {
  		try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
  		catch (E) {xmlhttp = null;}
 	}

 	if(!xmlhttp){
  		try {xmlhttp = new XMLHttpRequest();}
		catch(er) {xmlhttp = null;}
	}

	if(xmlhttp != null){
 		xmlhttp.open("GET", href,true);
 		xmlhttp.onreadystatechange=function(target) {
  			if (xmlhttp.readyState==4) {
   				if (xmlhttp.status == 200) {
   					if(browser == "IE") {
 						t.innerHTML =  xmlhttp.responseText;
   					} else {
						recursiveHide(t, true);
   						var divObj = document.createElement("div");
	   					divObj.innerHTML = xmlhttp.responseText;
	     				t.insertBefore(divObj, t.firstChild);
					}
  					return true;
 				} else {
  					alert("We're sorry. This selection is no longer available. This page will now be reloaded.");
					document.location.reload();
					return false;
				}
  			}
 		}
 		xmlhttp.send(null);
 	}
}

function recursiveHide(node, first) {
	if(node.childNodes.length > 0) {
		for(var i = 0; i < node.childNodes.length; i++) {
			var contextNode = node.childNodes[i];
			recursiveHide(contextNode, false);
		}
	}
	if(!first) {
		var parent = node.parentNode;
		if(node.style != null) {
			node.style.height="0";
			node.style.visibility = "hidden";
		}
	}
}

function CarouselSplitItem(widgetID, pageID, clusterID){
	this.widgetID  = widgetID;
	this.pageID    = pageID;
	this.clusterID = clusterID;
	this.viewed    = false;
}

function toggleSplitTab(obj) {
	var flipped;

	if (pwsId == obj.id) return;

	if(obj.className == 'tab302splitTabOff') {
    	obj.className = 'tab302splitTabSelect';
    	flipped ="on";
	}

	if(obj.className == 'tab302splitTabOn')
		if (flipped !="on"){obj.className = 'tab302splitTabSelect';}

	if(obj.className == 'tab302splitTabSelect')
		if (flipped !="on") {obj.className = 'tab302splitTabOff';}
}

function switchTabSplit(obj, href, target, asppServer, currentCategoryID) {
	var widgetServlet = "\widget?id=" + currentCategoryID + "&pwsid=";
	pwsId = obj.id;
	var prnt = document.getElementById('tab302splitTab');
	var children = prnt.childNodes;
	for(var i = 0 ; i < children.length; i++) {
		children[i].className = 'tab302splitTabOff';
	}

	obj.className = 'tab302splitTabOn';
	injectHTML(target, widgetServlet.concat(carousel[href].widgetID));
	var asppImg = document.getElementById('carouselASPP');
	asppImg.src = asppServer.concat("/promoimp/",carousel[href].pageID,"xx",carousel[href].clusterID,"/aolt2");
}