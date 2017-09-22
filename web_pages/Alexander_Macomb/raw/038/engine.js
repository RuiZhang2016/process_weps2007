/*-----------------------------------------------------------------------------------------------------------------*/
/* UNCOMMENT THE FOLLOWING LINE IF YOU WILL BE RETURNING QUERY OBJECTS. (note: you may need to point the SRC to an alerternate location.*/
//document.writeln('<SCRIPT TYPE="text/javascript" LANGUAGE="JavaScript" SRC="/CFIDE/scripts/wddx.js"></SCRIPT >');

// perform the XMLHttpRequest();
function http(verb,url,rm,qry) {
    //reference our arguments
	callback = rm;
	if(!qry) qry = '';
	qryStr = toQueryString(qry);
	try{//this should work for most modern browsers excluding: IE Mac
		req = ( window.XMLHttpRequest ) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP") ;
		req.onreadystatechange = processReqChange;
		req.open(verb, noCache(url), true);
			if(verb.toLowerCase() == 'post')	
			req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.send(qryStr);
	}catch(e){//a browser not equiped to handle XMLHttp
		//alert("There was a problem retrieving the data:");
	}
}

// handle onreadystatechange event of req object
function processReqChange(){
 	switch(req.readyState){
		case 1: popWait(); break;
		case 2: break;
		case 3: break;
		case 4:
			killWait();
			if ( req.status == 200 ){// only if "OK"
				//try{ alert(isXML());
					rObj = ( isXML() ) ? req.responseXML : response2Obj(req.responseText) ;
					callback( rObj )
				//}catch(e){ 
				//	alert('Parsing Error: The string passed in could not be evaluated.');
				//}
			}else{ 
				alert("There was a problem retrieving the data:\n" + req.statusText);
			}
	        break;
	}
}

function isXML(){ return req.getResponseHeader("Content-Type").split(';')[0] == 'text/xml'; }

// HELPER FUNCTIONS
function response2Obj(str){
	//str = str.replace(/<script src=\"/__utm.js\"></script>/,'')
	eval(str);
	var r = eval(str.split('=')[0].replace(/\s/g,''));
	return r;
}

function toQueryString(obj){
	//determine the variable type
	if(typeof(obj) == 'string')
		return obj;
	if(typeof(obj) == 'object'){
		if(typeof(obj.elements) == 'undefined')//It's an Object()!
			return object2queryString(obj);
		else //It's a form!
			return form2queryString(obj);
	}	
}

function object2queryString(obj){
	var ar = new Array();
	for(x in obj) ar[ar.length] = x+'='+obj[x];
	return ar.join('&');
}

function form2queryString(form){
	var obj = new Object();
	var ar = new Array();
	for(var i=0;i<form.elements.length;i++){
		try {
			elm = form.elements[i];
			nm = elm.name;
			if(nm != ''){
				switch(elm.type.split('-')[0]){
					case "select":
						for(var s=0;s<elm.options.length;s++){
							if(elm.options[s].selected){
								if(typeof(obj[nm]) == 'undefined') obj[nm] = new Array();
								obj[nm][obj[nm].length] = escape(elm.options[s].value);
							}	
						}
						break;
					
					case "radio":
						if(elm.checked){
							if(typeof(obj[nm]) == 'undefined') obj[nm] = new Array();
							obj[nm][obj[nm].length] = escape(elm.value);
						}	
						break;
					
					case "checkbox":
						if(elm.checked){
							if(typeof(obj[nm]) == 'undefined') obj[nm] = new Array();
							obj[nm][obj[nm].length] = escape(elm.value);
						}	
						break;
					
					default:
						if(typeof(obj[nm]) == 'undefined') obj[nm] = new Array();
						obj[nm][obj[nm].length] = escape(elm.value);
						break;
				}
			}
		}catch(e){}
	}
	for(x in obj) ar[ar.length] = x+'='+obj[x].join(',');
return ar.join('&');
}



//IE likes to cache so we will fix it's wagon!
function noCache(url){
	var qs = new Array();
	var arr = url.split('?');
	var scr = arr[0];
	if(arr[1]) qs = arr[1].split('&');
	qs[qs.length]='nocache='+new Date().getTime();
return scr+'?'+qs.join('&');
}

function popWait(){ 
	proc = document.getElementById("JSMX_loading");
	
	if( proc == null ){
		var p = document.createElement("div");
		p.id = "JSMX_loading";
		document.body.appendChild(p);
	}
}
function killWait(){
	proc = document.getElementById("JSMX_loading");
	if( proc != null ) document.body.removeChild(proc);
}