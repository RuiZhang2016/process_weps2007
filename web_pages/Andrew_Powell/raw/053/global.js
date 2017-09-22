function addEvent( obj, type, fn ) {
	if (obj.addEventListener) {
		obj.addEventListener( type, fn, false );
		EventCache.add(obj, type, fn);
	}
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
		EventCache.add(obj, type, fn);
	}
	else {
		obj["on"+type] = obj["e"+type+fn];
	}
}

var EventCache = function(){
	var listEvents = [];
	return {
		listEvents : listEvents,
		add : function(node, sEventName, fHandler){
			listEvents.push(arguments);
		},
		flush : function(){
			var i, item;
			for(i = listEvents.length - 1; i >= 0; i = i - 1){
				item = listEvents[i];
				if(item[0].removeEventListener){
					item[0].removeEventListener(item[1], item[2], item[3]);
				};
				if(item[1].substring(0, 2) != "on"){
					item[1] = "on" + item[1];
				};
				if(item[0].detachEvent){
					item[0].detachEvent(item[1], item[2]);
				};
				item[0][item[1]] = null;
			};
		}
	};
}();
addEvent(window,'unload',EventCache.flush);


function goQuickLink(obj){
            url = obj.options[obj.selectedIndex].value;
            if (url){
                        location.href = url;
            }else{
                        alert("Please make a selection.");
            }
            return false;
}

function expandCol(theTR,img){
	var dataTR = eval('document.getElementById("' + theTR +'")');
	if (dataTR.style.display=="block" || dataTR.style.display=="" ){
		dataTR.style.display="none";
		img.src='/images/butFullRev.gif';
	}else{
		dataTR.style.display="";
		img.src='/images/butCloseRev.gif';
	}
}

function pop(url,width,height,popName,resize){
	var winName = "mypop";
	if (popName){
		winName = popName;
		if (popName == "1"){
			var date = new Date();
			winName = date.getTime();
		}
	}
	if (!resize) resize="yes";
	var args = "width="+width+",height="+height;
	window.open(url,winName,"resizable=" + resize + ",toolbar=no,"+args);
}

function nopop(url, winName, args){window.location=url;}

function imgSwap(objImg,imgName){
	objImg.src="/images/tabs/"+imgName;
}

function HeaderImgSwap(objImg,imgName){
        objImg.src=imgName;
}


var submitClicked = false;
var activeForm = null;

function disableButton(b, f, bt)
{
	if (!submitClicked)
	{
		if (bt != null)
		{
			bt.value="1";
		}
		else
		{
			var submitMessage = "  Please Wait...  ";
			b.value = submitMessage;
		}
		activeForm = f;
		b.disabled = true;
		submitClicked = true;
		setTimeout("submitIt()", 250);
	}
	else
	{
		return false;
	}
}

function submitIt()
{
	activeForm.submit();
	return false;
}

function checkandsubmit(submitForm)
{
	if (submitClicked == true)
	{
		return false;
	}
	else
	{
		submitClicked = true;
		submitForm.submit();
		return false;
	}
}

// called from some old flashes - SV 1/6/06
function stopPitch()
{
	window.location.href="/registration/1.html";
}

/* to replace the deprecated target attribute */
function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}

addEvent(window,'load',externalLinks)