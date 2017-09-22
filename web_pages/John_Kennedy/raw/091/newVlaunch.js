/*this is the new vlaunch*/
/*var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")*/
  var thisdate = "";
  var one = "";
  var dateinfo = "";
  var clipinfo = "";
  var params ="";
  var clip = "";
  var title = "";
  var castNum = "";
  var date = "";
  var end = "";
  var isLive = false;
  var old_date = "20020225";
  var cut_date = "20031120";
  var currentdate = the_year+" "+eval(parseInt(the_month)+1)+" "+day();
  var videoDateDifference = "";
  var thisplayer = "";
  //var playerVersion = playerResults();
  var nWin = null;
  var thisclip = null;
  
function day()
{
	if(the_day < 10)
	{
		return "0"+the_day;
	}
	return the_day;
}


function cutoverDate(yr,m,d){
var cutdatestring = new Date(the_year, the_month, day());//month[the_month]+" "+day()+", "+the_year;
var thisVid_month = eval(parseInt(m)-1);
var paststring = new Date(yr, thisVid_month, d);//month[m-1]+" "+d+", "+yr;

var difference = cutdatestring.getTime() - paststring.getTime();
var daysDifference = Math.floor(difference/1000/60/60/24);
difference -= daysDifference*1000*60*60*24;
return daysDifference;
}


 /*returns the clip string*/
 function returnclip(file)
 {	
 	clipinfo = file.split('clip=');
	if(clipinfo[1].indexOf('.smil')!=-1 && isChoice=='wmv'){theclip = clipinfo[1].replace(/.smil/ig, ".asx");}
	else{theclip = clipinfo[1];/*alert("this is the clip info: "+clip);*/}
	return theclip;
 }


var isChoice = getCookieValue("UserChoice");

function templateNum(file)
{
	playerVersion = playerResults();/*alert(playerResults());*/
	if( playerVersion != true && isReal == "no")
	{
		nWin = templ5+"?clip="+thisclip;
	}


	else if((thisclip.indexOf('.asx')!=-1 && playerVersion) || (thisclip.indexOf('.smil')!=-1 && isReal=="yes")){nWin = templ1+"?"+thisclip;}
	
	else if(isLive)
	{
		
		var templ3="http://www.cbsnews.com/sections/i_video/main500251.shtml?"+file;
		if(playerVersion){nWin = templ3;}else{nWin = templ2;}
	}
	
	else if(videoDateDifference <= 30 && date >= cut_date)
	{
		
		if(isChoice){
			if(isChoice == "wmv"){if(playerVersion){thisclip = thisclip.replace(/\.rm/i, ".wmv");nWin = templ1+"?clip="+thisclip;}else{nWin = templ6+"?clip="+thisclip;}}
			else if(isChoice == "rm" && isReal){nWin = templ1+"?clip="+thisclip;}else{nWin = templ7+"?clip="+thisclip;}
		}else{nWin = templ4+"?clip="+thisclip;}
	}
	else if(date < old_date)
	{	
		
		if(isReal){ nWin = templ1+"?"+file;alert(nWin);}else{nWin = templ7+"?clip="+thisclip;}
		
	}
	else if((videoDateDifference > 30) && (date >= cut_date))
	{
		thisclip = thisclip.replace(/\.rm/i, ".wmv");
		if(playerVersion){nWin = templ1+"?clip="+thisclip;}else{nWin = templ6+"?clip="+thisclip;} 
	}
	else if(date < cut_date && date >= old_date)
	{	
		/*alert("real clip: bottom");*/
		thisclip = returnclip(file).replace(/\.wmv/i, ".rm");
		if(isReal){nWin = templ1+"?clip="+thisclip;}else{nWin = templ7+"?clip="+thisclip;}
	}
	return nWin;
}


function parseParams(string, arrays) {
	var params = new Array();
	var args = string.split('&');
	for (var i=0; i<args.length; i++) {
		var arg = args[i].split('=', 2);
		if (arrays) {
			if (!params[arg[0]]) {
				params[arg[0]] = new Array();
			}
			params[arg[0]][params.length] = arg[1];
		} else {
			params[arg[0]] = arg[1];
		}
	}
	return params;
}
function vplay(id) {
	var vWin = window.open('http://www.cbsnews.com/sections/i_video/main500251.shtml?id='+id+'n', 'CBSNewsVideo', 'width=995,height=985,scrollbars=0,location=0,menubar=0,resizable=0');
	vWin.focus();
}
/*this functin returns one of three player types old, new, and help*/
var wmvDate = "20031120";/*Any video equal to or greater than this date will get windows media files*/
function vlaunch(file) {
    
	if ((parent) && (parent.popPlayer)) {
		var params = parseParams(file);
        

		var videoId = params.id;
		var format = "wmv|rm";

		var clip = params.clip;
		if (clip) {
			var dirs = clip.split('/');
			var date = dirs[2] + "" + dirs[3] + "" + dirs[4];
			var filename = dirs[5];
			var pos = filename.indexOf('.');
			if (pos >= 0) {
				videoId = filename.substring(5, pos) + 'n';
			} else {
				videoId = filename.substring(5) + 'n';
			}

			if (date < wmvDate) {
				format = "rm";
			}
		}
		parent.popPlayer.playlist.removeAllVideos();
		parent.popPlayer.play(videoId, format);
	} else {
//		var vWin = window.open('http://www.cbsnews.com/htdocs/videoplayer/newVid/small_player/vplayer2.shtml?'+file, 'vvviewer', 'width=744,height=550,scrollbars=0,location=0,menubar=0,resizable=0');
        var vWin = window.open('http://www.cbsnews.com/sections/i_video/main500251.shtml?'+file, 'CBSNewsVideo', 'width=995,height=685,scrollbars=0,location=0,menubar=0,resizable=0');
		vWin.focus();
	}
	return;
		
 /*returns the date && (!clip.indexOf('.smil') || !clip.indexOf('.asx'))*/
	clip = returnclip(file);
	if(clip.indexOf('.')!=-1 ){
	clipinfo = file.split('.');
	one = clipinfo[0].split('=');
	dateinfo = one[1].split('/');
	thisdate = dateinfo[2]+","+dateinfo[3]+","+dateinfo[4];
	}
/*end return date*/		
	
 	/*alert("date:" + thisdate); */
 	
	date = dateinfo[2]+""+dateinfo[3]+""+dateinfo[4];
	videoDateDifference = cutoverDate(dateinfo[2],dateinfo[3],dateinfo[4]);
	thisplayer = isReal;
	thisclip = returnclip(file);
	isLive = thisclip.indexOf('LiveWebCast')!=-1;
	
	playerVersion = playerResults();
	newWin = templateNum(file);
		/*alert("end:  "+newWin);*/
		nWindow = window.open(newWin, 'CBSNewsVideo', 'width=995,height=685,scrollbars=0,location=0,menubar=0,resizable=0');//);
		nWindow.focus();
		
	
}
function emailVid(id) {
	launch('SendVideo', 540, 400, "/htdocs/send_video/framesource.html?id=" + id);
}
function showVideoHelp() {
	window.open("http://www.cbsnews.com/htdocs/videoplayer/newVid/framesource_mediahelp.html", "video_help", 'width=610,height=450,scrollbars=1,location=0,menubar=0,resizable=0');
}
