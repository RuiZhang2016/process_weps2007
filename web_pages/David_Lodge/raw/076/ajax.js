
function xml_Request_Object()
{
	var req;
	if(window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		req = new ActiveXObject("Microsoft.XMLHTTP");
  	}
  	return(req);
}



function get_response(url) 
{
	var req = xml_Request_Object();
	req.open("GET", url, false);
	req.send(null);
	if(req.responseText.length > 0) return req.responseText;
	return 0;
}


function change_state(req, msg_block, done_func)
{
	if (req.readyState == 1) {
		msg_block.innerHTML = "Request: loading...";
	}	
	else if (req.readyState == 4) {
		if (req.status != 200) {
			msg_block.innerHTML = "Request: unsuccessful status:"+req.status;
		}
		else if (! req.responseText) {
			msg_block.innerHTML = "Request: bad response:"+req.responseText;
		}
		done_func();
	}
	else if (req.readyState == 0) {
		msg_block.innerHTML = "Request: initializing...";
	}	
	else if (req.readyState == 2) {
		msg_block.innerHTML = "Request: loaded";
	}	
	else if (req.readyState == 3) {
		msg_block.innerHTML = "Request: interactive";
	}	
	else msg_block.innerHTML = "Request: unknown error";
}



// 2 functions for asynch block replacement
function get_menu_loads(data, sel_img)
{
	var url = "/_loadmenu.php";
	if(data) url =  url + "?" + data;
	var req = xml_Request_Object();
	req.onreadystatechange = function(){swap_menu_loads(req, sel_img);};
	req.open("GET", url, true);
	req.send(null);
}

function swap_menu_loads(req, sel_img)
{
	if (req.readyState != 4) return;
	if (req.status != 200) return;
	var txt = req.responseText.split("\n\r");
	var elm;
	var tag;
	//elm = document.getElementById(txt[x]);
	for(x=0; x<txt.length; x++){
		elm = document.getElementById(txt[x]);
		if(elm) elm.innerHTML=txt[++x];
	}
	elm = document.getElementById(sel_img);
	if(elm) {
		tag=elm.src;
		elm.src=tag.replace(/menubox0/g, "menubox1");
	}
}





// 1 function for asynch block replacement
function get_ad_block(elm_id, data)
{
	var elm = document.getElementById(elm_id);
	if(! elm) return;
	
	var msg = document.getElementById(elm_id + '_msg');
	
	var url = "/_getadblock.php?eid=" + elm_id;
	if(data) url =  url + "&" + data;

	var req = xml_Request_Object();
	req.onreadystatechange = function(){change_state(req, msg, function(){elm.innerHTML=req.responseText;});};
	req.open("GET", url, true);
	req.send(null);
}



// 2 functions for asynch Genre changes
function submit_genre_form(form_id, msg_id)
{
	var frm = document.getElementById(form_id);
	if(! frm) return true;
	var tid = frm.tid.value; 
	if(! tid) return true;
	
	var msg_block = document.getElementById(msg_id);
	var val = 0;
	
	msg_block.innerHTML = 'Submitting...';

	var checked=new Array();
	for(var x=0; x<frm.genre_check.length; x++){
		if(frm.genre_check[x].checked) {
			checked.push(frm.genre_check[x].value);
		}
	}
	
	var url = "/_titlegenre.php?tid=" + tid + "&values=" + checked.join(",");

	var req = xml_Request_Object();
	req.onreadystatechange=function(){change_state(req,msg_block,function(){gform_parse(req, msg_block);});};
	req.open("GET", url, true);
	req.send(null);

	return false;
}


function gform_parse(req, msg_block) {
	if(req.responseText.length < 5) {
		msg_block.innerHTML = "Request Error: no data returned";
		return;
	}
	var spl = req.responseText.split("\n\r");
	var x=0;
	var fld = spl[x].substr(0,4);
	if(fld=="tid:") {
		var tid = spl[x].substr(4);
	}
	else {
		msg_block.innerHTML = "Request Error: malformed data, tid mssing";
		return;
	}
	
	x=1;
	var fld = spl[x].substr(0,4);
	if(fld=="msg:") {
		msg_block.innerHTML = spl[x].substr(4);
	}
	else {
		msg_block.innerHTML = "Request Error: malformed data, msg missing";
		return;
	}
	
	if(spl.length<3) return;

	x=2;
	var fld = spl[x].substr(0,4);
	if(fld=="ids:") {
		var id_str = spl[x].substr(4);
		var ids=id_str.split(",")
	}
	else return;

	var frm = document.getElementById("genreForm_" + tid);
	if(! frm) {
		msg_block.innerHTML = req.responseText;
		return;
	}
	var y;
	for(x=0; x<frm.genre_check.length; x++){
		frm.genre_check[x].checked="";
		for(y=0; y<ids.length; y++){
			if(ids[y]==frm.genre_check[x].value) {
				frm.genre_check[x].checked="checked";
				break;
			}
		}
	}
}







// 2 functions for asynch member title ratings
function submit_title_rating(form_id, msg_id)
{
	var frm = document.getElementById(form_id);
	if(! frm) return true;
	var tid = frm.subjectID.value;
	if(! tid) return true;
	
	var msg_block = document.getElementById(msg_id);
	var val = 0;
	
	msg_block.innerHTML = 'Submitting...';

	var url = "/_titlerating.php?tid=" + tid + "&value=" ;
	
	for(var x=0;x<=9;x++){
		if(frm.ballot_value[x].checked) {
			url=url+frm.ballot_value[x].value;
			break;
		}
	}

	var req = xml_Request_Object();
	req.onreadystatechange=function(){change_state(req,msg_block,function(){trate_parse(req, msg_block);});};
	req.open("GET", url, true);
	req.send(null);

	return false;
}



function trate_parse(req, msg_block) {
	if(req.responseText.length < 5) {
		msg_block.innerHTML = "Request Error: no data returned";
		return;
	}
	var spl = req.responseText.split("\n\r");
	var x=0;
	var fld = spl[x].substr(0,4);
	if(fld=="tid:") {
		var tid = spl[x].substr(4);
	}
	else {
		msg_block.innerHTML = "Request Error: malformed data, tid mssing";
		return;
	}
	
	x=1;
	var fld = spl[x].substr(0,4);
	if(fld=="msg:") {
		msg_block.innerHTML = spl[x].substr(4);
	}
	else {
		msg_block.innerHTML = "Request Error: malformed data, msg missing";
		return;
	}
	var stars;
	var s;
	for(x=2;x<spl.length;x++) {
		fld = spl[x].substr(0,4);
		stars = null;
		if(fld=="mrh:") {
			stars = document.getElementsByName("mrhstars_" + tid);
		}
		else if(fld=="mrv:") {
			stars = document.getElementsByName("mrvstars_" + tid);
		}
		else if(fld=="arh:") {
			stars = document.getElementsByName("arhstars_" + tid);
		}
		else if(fld=="arv:") {
			stars = document.getElementsByName("arvstars_" + tid);
		}
		
		if(stars) for(s=0;s<stars.length;s++) {
			stars[s].src = spl[x].substr(4);
		}
	}
}

