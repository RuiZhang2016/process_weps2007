var clicked=""
var gtype=".gif"
var selstate="_over"
if (typeof(loc)=="undefined" || loc==""){
	var loc=""
	if (document.body&&document.body.innerHTML){
		var tt = document.body.innerHTML.toLowerCase();
		var last = tt.indexOf("nav_list.js\"");
		if (last>0){
			var first = tt.lastIndexOf("\"", last);
			if (first>0 && first<last) loc = document.body.innerHTML.substr(first+1,last-first-1);
		}
	}
}

document.write("<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr>");
tr(false);
writeButton("","http://www.engr.arizona.edu/emg","nav_list_b1",123,20,"Home","",0);
writeButton("","http://www.engr.arizona.edu/emg/about.html","nav_list_b2",123,20,"About Us","",0);
writeButton("","http://www.engr.arizona.edu/emg/mission/mission.html","nav_list_b3",123,20,"Mission","",0);
writeButton("","http://www.engr.arizona.edu/emg/curriculum/curriculum.html","nav_list_b4",123,20,"Curriculum","",0);
writeButton("","http://www.engr.arizona.edu/emg/people/people.html","nav_list_b5",123,20,"Faculty & Staff","",0);
writeButton("","http://www.engr.arizona.edu/emg/career/index.html","nav_list_b6",123,20,"Career","",0);
writeButton("","http://www.engr.arizona.edu/emg/student/student.html","nav_list_b7",123,20,"Student","",0);
writeButton("","http://www.engr.arizona.edu/emg/student/resume/resume.html","nav_list_b8",123,20,"Resumes","",0);
writeButton("","http://www.engr.arizona.edu/emg/contact/contact.html","nav_list_b9",123,20,"Contact Us","",0);
tr(true);
document.write("</tr></table>")
loc="";

function tr(b){if (b) document.write("<tr>");else document.write("</tr>");}

function turn_over(name) {
	if (document.images != null && clicked != name) {
		document[name].src = document[name+"_over"].src;
	}
}

function turn_off(name) {
	if (document.images != null && clicked != name) {
		document[name].src = document[name+"_off"].src;
	}
}

function reg(gname,name)
{
if (document.images)
	{
	document[name+"_off"] = new Image();
	document[name+"_off"].src = loc+gname+gtype;
	document[name+"_over"] = new Image();
	document[name+"_over"].src = loc+gname+"_over"+gtype;
	}
}

function evs(name){ return " onmouseover=\"turn_over('"+ name + "')\" onmouseout=\"turn_off('"+ name + "')\""}

function writeButton(urld, url, name, w, h, alt, target, hsp)
{
	gname = name;
	while(typeof(document[name])!="undefined") name += "x";
	reg(gname, name);
	tr(true);
	document.write("<td>");
	if (alt != "") alt = " alt=\"" + alt + "\"";
	if (target != "") target = " target=\"" + target + "\"";
	if (w > 0) w = " width=\""+w+"\""; else w = "";
	if (h > 0) h = " height=\""+h+"\""; else h = "";	
	if (url != "") url = " href=\"" + urld + url + "\"";
	
	document.write("<a " + url + evs(name) + target + ">");	
	
	if (hsp == -1) hsp =" align=\"right\"";
	else if (hsp > 0) hsp = " hspace=\""+hsp+"\"";
	else hsp = "";
	
	document.write("<img src=\""+loc+gname+gtype+"\" name=\"" + name + "\"" + w + h + alt + hsp + " border=\"0\" /></a></td>");
	tr(false);
}
