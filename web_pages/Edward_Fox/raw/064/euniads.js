<!-- 
  function random() { 
    randomseed = (randomseed * randoma + randomc) % randomm; 
    return randomseed / randomm;
  } 
  var randomm = 714025; 
  var randoma = 4096; 
  var randomc = 150889; 
  randomseed = Date.parse(new Date()); 
  randomNumber = random() + ""; 

  var not_ns2 = false;
  if ((navigator.appVersion.indexOf ("2.0") == -1) 
       || (navigator.appName.indexOf("Netscape") == -1)) {
    not_ns2 = true;
  }
  // var page = "www.expage.com";
//  var page = "www.expage.com" + window.location.pathname;
//  var imageurl = oasurl + "adstream_jx.cgi/" + page + "/1"; 
//  var clickurl = oasurl + "click_nx.cgi/" + page + "/1"; 

  function oas_ad(pos) {
    var rand = randomNumber.substring(2,11);
	if(pos=='Frame1'){
	// Leaderboard
		var subdomain = 'deLB';
		var placement = 'leaderboard';
	}else if(pos=='Top'||pos=='Top1'||pos=='Top2'||pos=='Top3'){
	// Top Banner
		var subdomain = 'deBNT';
		var placement = 'banner';
	}else if(pos=='x20'){
	// SKYSCRAPER
		var subdomain = 'SKY';
		var placement = 'skyscraper';
	}else if(pos=='x35'){
	// PRE-LOADER
		var subdomain = 'dePL';
		var placement = 'ploader';
	}else if(pos=='x15'){
	// Superbutton
		var subdomain = 'deMR';
		var placement = 'mrec';
	}else if(pos=='x25'){
	// Superbutton2
		var subdomain = 'deMR2';
		var placement = 'mrec2';
	}else{
	// Bottom Banner (pos=Bottom, Bottom1, Bottom2, Bottom3)
		var subdomain = 'deBNB';
		var placement = 'bbanner';
	}
	
var linkurl = 'http://'+subdomain+'.imixserver.com/js.ng/site=intermix&affiliate=www.expage.com&mixpage=&placement='+placement+'&partner=No&random=';

	document.write("<SCRIPT language='JavaScript1.1' src='"+linkurl+"'"+rand+"'></SCRIPT>");
  }

/*
TOP BANNER 		- deBNT, banner			Top, Top1, Top2, Top3
BOTTOM BANNER 	- deBNB, bbanner		Bottom, Bottom1, Bottom2, Bottom3
LEADERBOARD		- deLB, leaderboard		Frame1
SKYSCRAPER 		- SKY, skyscraper 		x20
PRE-LOADER 		- dePL, ploader			x35
Superbutton 	- deMR, mrec			x15
Superbutton2 	- deMR2, mrec2			x25
*/  
 
// --> 
