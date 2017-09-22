var DHTML = (document.getElementById || document.all || document.layers);

var browser = navigator.appVersion.toLowerCase();
var platform = navigator.userAgent.toLowerCase();
/*
	Opera identifies as msie compatible, but it really is not.
*/
var IE = ((browser.indexOf("msie") != -1) && (browser.indexOf("mozilla") == -1) && (platform.indexOf("opera") == -1));

var MOZ = false;

if(!IE) {
	MOZ = true;
}

function getObj(name) 
{
	if(document.getElementById && document.getElementById(name)) 
	{
		this.obj = document.getElementById(name);
		this.style = document.getElementById(name).style;
	}
	else if(document.all && document.all[name])
	{
		this.obj = document.all[name];
		this.style = document.all[name].style;
	} 
	else if(document.layers && document.layers[name]) 
	{
		this.obj = document.layers[name];
		this.style = document.layers[name];
	} else {
	}
} 
var nr_tabs = new Array();
function initpages(type, number_of)
{
	nr_tabs[type] = number_of;
}
initpages("tab", 3);

function show_tab(type, id) {
	//alert(nr_tabs[type]);
	if( !DHTML )return; 
	var display = type;
	display+=id;
	//nr_tabs[type] = 3;
	var ln = nr_tabs[type]; // get how many tabs are for this element
	for(var i=0;i < 4;i++) 
	{
		var foo = type;
		foo+=i;
		var x2 = new getObj(foo);
		x2.style.visibility = 'hidden'
		
		//var xx = new getObj(i);
		//xx.style.font-weight = 'normal'
	}
	
	/* change the one we want to kepp */
	var x = new getObj(display);
	x.style.visibility = 'visible'

	/* experiment with styling the ta bs */
	//var x3 = new getObj(id);
	//x3.style. = 'bold'
}

function sizeTab(type) {
	type += 0;
	var type_p = type+'_p';
        H = Math.max(document.getElementById(type).offsetHeight);
	H = H+5;
	if(H < 25) {
		H = 25;
	}
	document.getElementById(type_p).style.height = H+'px';
}
//window.onload = sizeTab('tab');
function startList() {
	if (document.all&&document.getElementById) {
		navRoot = document.getElementById("nav");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}	


function selectAll(name, action) {
	
	for(i=0; (a = document.getElementsByTagName("input")[i]);i++) {
		var aName = a.getAttribute("name");	
		
		if((aName == name) || (aName == 'selector')) {
			a.checked = action;	
		}

	}

}

/*
	Array of the tags that are allowed or accessable as buttons.
	Add to this array if you want to add in tags. 
*/

tagActive = new Array();
tagActive["u"] = -1;
tagActive["b"] = -1;
tagActive["i"] = -1;
tagActive["url"] = -1;
tagActive["quote"] = -1;
tagActive["email"] = -1;
tagActive["code"] = -1;

function applyBBcode(tag, form, messageArea) {
	
	/*
		Usage: This function takes in input like this:
		applyBBcode('url', '<formName>', <messgeareaname>);
		
		Note: just supports the following tags:
		b, i, u, url, quote, email

	
		Get the message area object.
	*/

	var messageArea = eval('document.' + form + '.' + messageArea);
	var selectedText = false;
	
	/*
		Check if it's ie and if it is get the selected text: 
	*/
	if(IE) {
	
		selectedText = document.selection.createRange().text;
	
	}
	
	if(selectedText) {
		
		/*
			IE specific.
		*/	
		
		document.selection.createRange().text = "[" + tag + "] " + selectedText + "[/"+tag+"]";
		
		return;

	} else if(messageArea.selectionEnd && (messageArea.selectionEnd - messageArea.selectionStart > 0)) {		
			
		/*
			mozilla specific 
		*/
		var textLength = messageArea.textLength;
		var selectionStart = messageArea.selectionStart;
		var selectionEnd = messageArea.selectionEnd;

		var txtBefore = (messageArea.value).substring(0,selectionStart);
		var selectedText = (messageArea.value).substring(selectionStart, selectionEnd);
		var afterText = (messageArea.value).substring(selectionEnd, textLength);
		
		
		messageArea.value = txtBefore + "[" + tag + "]" + selectedText + "[/" + tag + "]" + afterText;
		
		return;
		
	} else {
		/*
			Mark the tag as active / inactive based on this rule:
			active > 0
			inactive < 0
		*/

		tagActive[tag] = tagActive[tag] * -1;
		
		if(tagActive[tag] > 0) {
			
			eval('document.'+ form + '.applyBBcode'+tag+'.value += "*"');
			
			tag = '['+tag+']';
				

		} else {
			
			bbText = eval('document.' + form + '.applyBBcode'+tag+'.value');
			eval('document.' + form + '.applyBBcode'+tag+'.value = "' + bbText.substr(0,(bbText.length - 1)) + '"');
			
			tag = '[/'+tag+']';
		
		}
		
		messageArea.value += tag;
	}
	messageArea.focus();
	return;
}

function newWindow(url) {
	var popup = window.open(url, 'webgame', 'toolbar=no,location=no,directories=no,status=no,scrollbars=no,menubar=no,width=800,height=600');

	popup.focus();
}

window.onload=startList;
	       
