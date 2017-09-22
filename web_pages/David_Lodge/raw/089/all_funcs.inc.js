/* all independent javascript functions */

/* used in global header */
function skopos () {
document.write("<scr" + "ipt language=\"JavaScript\" src=\"http://www.skopos1.de/s/sps.php?s=7\" type=\"text/javascript\";></scr" + "ipt>");
}
//skopos();

/* used in global_header.php */
function rnd() {	
        rnd.seed = (rnd.seed*9301+49297) % 233280;
        return rnd.seed/(233280.0);
};

/* used in global_header.php */
function rand(number) {	
        return Math.ceil(rnd()*number);
};

rnd.today=new Date();
rnd.seed=rnd.today.getTime();

/* used in global_header.php */
function guidedtour_head(url,height) {	
win2=window.open(url,"pathwin","width=640,height="+height+",scrollbars=no,status");
win2.focus();
}

/* used in home.php */
function guidedtour(url,height) {
win2=window.open(url,"pathwin","width=640,height="+height+",scrollbars=no,status");
win2.focus();
}

/* used in global_header.php */
function launch(newURL, newName, newFeatures, orgName) {	
var remote = open(newURL, newName, newFeatures);
if (remote.opener == null)
remote.opener = window;
remote.opener.name = orgName;
return remote;
}

/* used in global_header.php */
function launchRemote(poppler,host) {

myPrice=open("","myPrice","width=250,height=250,resizable=yes,scrollbars=no,status=yes,toolbar=no,menubar=no,location=no");

if (myPrice.opener == null)
myPrice.opener = window;
myPrice.opener.name = "headerbox";

myPrice.document.open("text/html","replace");
myPrice.document.write("<html>\n<head>\n");
myPrice.document.write("<title>www.dooyoo.co.uk</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://img.dooyoo.com/DE_DE/css/popup.css\">\n</head>\n<body>\n<div class=\"msgbox\">\n");

if (poppler == 1) {
myPrice.document.write("<b style=\"color:#3cb93f\">The best product</b><br><br>\n");
myPrice.document.write("You find the best product - quickly, easily and<br>reliably.<br><br>\nTop lists, curent sales rankings and consumer reviews ensure you make the right choice. <br><br>\nFind your desired product here:<br>\n<b>PRODUCT SEARCH</b><br>\n");
myPrice.document.write("<form action=\""+host+"/search\" method=\"get\" target=\"headerbox\" onsubmit=\"setTimeout(\'window.self.close()\',3000)\" style=\"display:inline;\">\n");
myPrice.document.write("<input type=\"text\" name=\"term\" value=\"\" size=\"14\" style=\"width:146px\">\n<input type=\"image\" src=\"http://img.dooyoo.net/aurora_pix/go.gif\" border=\"0\">\n<input type=\"hidden\" name=\"rest\" value=\"\">\n</form>");
}
if (poppler == 2) {
myPrice.document.write("<b style=\"color:#3cb93f\">The best price</b><br><br>\n");
myPrice.document.write("Find the best price - in one click.<br><br>\nPrices of the most important and most reliable shops on the net are listed with us.<br><br>\nFind the best price for your desired product here:<br><b>PRICE SEARCH</b><br>\n");
myPrice.document.write("<form action=\""+host+"/search\" method=\"get\" target=\"headerbox\" onsubmit=\"setTimeout(\'window.self.close()\',3000)\" style=\"display:inline;\">\n");
myPrice.document.write("<input type=\"hidden\" name=\"rest\" value=\"prices\">\n<input type=\"text\" name=\"term\" value=\"\" size=\"14\" style=\"width:146px\">\n<input type=\"image\" src=\"http://img.dooyoo.net/aurora_pix/go.gif\" border=\"0\">\n</form>\n");
}
if (poppler == 3) {
myPrice.document.write("<b style=\"color:#3cb93f\">The best shop</b><br><br>\n");
myPrice.document.write("Find the best shop for your needs.<br>Read reviews and recommendations on a vast range of stores. Reliability and a good price are garunteed.<br><br>\n");
myPrice.document.write("dooyoo Partnershops have cheap and good offers. You will see on our <a href=\""+host+"/dooyoo/partnershop_list/\" target=\"headerbox\" onclick=\"setTimeout(\'window.self.close()\',3000)\">Partnershop List</a> which stores you can trust.\n<br><br>\n");
myPrice.document.write("Find the shops you want to read about here:<br><b>SHOP SEARCH</b><br>\n");
myPrice.document.write("<form action=\""+host+"/search\" method=\"get\" target=\"headerbox\" onsubmit=\"setTimeout(\'window.self.close()\',3000)\" style=\"display:inline;\">\n<input type=\"hidden\" name=\"rest\" value=\"pg-Shops\">\n");
myPrice.document.write("<input type=\"text\" name=\"term\" value=\"\" size=\"14\" style=\"width:146px\">\n<input type=\"image\" src=\"http://img.dooyoo.net/aurora_pix/go.gif\" border=\"0\">\n</form>\n");
}
if (poppler == 31) {
myPrice.document.write("<b style=\"color:#3cb93f\">The best shop</b><br><br>\n");
myPrice.document.write("Find the best shop for your needs.<br>Read reviews and recommendations on a vast range of stores. Reliability and a good price are garunteed.<br><br>\n");
myPrice.document.write("dooyoo Partnershops have cheap and good offers. You will see on our <a href=\""+host+"/shoplist/\" target=\"headerbox\" onclick=\"setTimeout(\'window.self.close()\',3000)\">Partnershop List</a> which stores you can trust.\n<br><br>\n");
myPrice.document.write("Find the shops you want to read about here:<br><b>SHOP SEARCH</b><br>\n");
myPrice.document.write("<form action=\""+host+"/search\" method=\"get\" target=\"headerbox\" onsubmit=\"setTimeout(\'window.self.close()\',3000)\" style=\"display:inline;\">\n<input type=\"hidden\" name=\"rest\" value=\"pg-Shops\">\n");
myPrice.document.write("<input type=\"text\" name=\"term\" value=\"\" size=\"14\" style=\"width:146px\">\n<input type=\"image\" src=\"http://img.dooyoo.net/aurora_pix/go.gif\" border=\"0\">\n</form>\n");
}

myPrice.document.write("</div>\n</body>\n</html>");
myPrice.document.close();
myPrice.focus();
}

/* used in search_products.php sitemap.php prd_nav.php */
function launchDisclaimer(url,host) {
myDisc=open("","myDisc","width=500,height=200,top=100,resizable=yes,status=yes,toolbar=no,menubar=no,location=no,scrollbars=no");

myDisc.document.open("text/html","replace");

myDisc.document.write("<html>\n<head>\n");
myDisc.document.write("<title>www.dooyoo.de</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://img.dooyoo.com/DE_DE/css/styles.css\">\n</head>\n");
myDisc.document.write("<body>\n<table width=\"400\" align=\"center\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">");
myDisc.document.write("<tr>\n<td colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"16\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td class=\"line_dotted\" colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"1\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"16\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td class=\"pgbd\" colspan=\"2\"><b>Disclaimer</b></td>\n</tr>\n<tr>\n<td colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"12\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td align=\"center\" class=\"pgbd\" colspan=\"2\">Die folgenden Seiten enthalten Bilder und Inhalte, die f&uuml;r Kinder und Jugendliche unter 18 Jahren nicht geeignet sind. Bitte best&auml;tigen Sie, ob Sie berechtigt sind, derartige Inhalte anzusehen.</td>\n</tr>\n");
myDisc.document.write("<tr>\n<td colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"16\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td class=\"pgbd\" align=\"left\"><a href=\"\" onclick=\"opener.location.href=\'http://"+host+"\';window.close()\">Ich bin unter 18 Jahre alt</a></td>\n");
myDisc.document.write("<td class=\"pgbd\" align=\"right\"><a href=\"\" onclick=\"opener.location.href=\'http://"+url+"\';window.close()\">Ich bin &uuml;ber 18 Jahre alt</a></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"16\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td class=\"line_dotted\" colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"1\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("<tr>\n<td colspan=\"2\"><img src=\"http://img.dooyoo.de/pix/spaceman.gif\" width=\"1\" height=\"16\" border=\"0\" alt=\"\"></td>\n</tr>\n");
myDisc.document.write("</table>\n</body>\n</html>");

myDisc.document.close();
myDisc.focus();
}

/* used in home.php */
function RelaunchOnClick(url,width,height) {	
  window.open(url,'RelaunchOnClick','scrollbars=yes,screenX=50,screenY=50,left=50,top=50,resizable=no,width='+width+',height='+height+',status=no,location=no,toolbar=no');
}

/* used in prd.php, search_external.php */
function exterlink_prdres_overture(url, windowname) {	
var w = 300;
var h = 200;
var LeftPosition = screen.width/2-w/2;
var TopPosition = screen.height/2-h/2;
window.open(url,windowname,'menubar=no,toolbar=no,location=no,width='+w+',height='+h+',left='+LeftPosition+',top=90,status=no,scrollbars=no,resizable=no');
}

/* used in search_external.php */
function exterlink_search_overture(url, windowname) {
var w = 300;
var h = 200;
var LeftPosition = screen.width/2-w/2;
var TopPosition = screen.height/2-h/2;
window.open(url,windowname,'menubar=no,toolbar=no,location=no,width='+w+',height='+h+',left='+LeftPosition+',top=90,status=no,scrollbars=no,resizable=no');
}

/* used in community pages - ws10 - /www/dooyoo/htdocs/www.dooyoo.com/de/yoo2_community */
function openwin(x) {
url=x;
w=400;
h=400;
centerX = (screen.availWidth-w)/2;
centerY = (screen.availHeight-h)/2;
more = "width="+w+",height="+h;
more += ",screenX="+centerX+",screenY="+centerY;
more += ",left="+centerX+",top="+centerY;
more += ",locationbar=no, scrolbars=no, status=no, toolbar=no, menubar=no";
f1 = open(url,"nuWin",more);
}

function PopupOnClick(url,width,height)
{window.open(url,'PopupOnClick','scrollbars=yes,screenX=100,screenY=100,left=100,top=100,resizable=no,width='+width+',height='+height+',status=no,location=no,toolbar=no');}

function popupxall(url,height) {
win2=window.open(url,"pathwin","width=640,height="+height+",scrollbars=no,status");
win2.focus();
}

function PopUp(url,width,height) {
win2=window.open(url,"pathwin","width="+width+",height="+height+",scrollbars=no,status");
win2.creator=self;
win2.focus();
}

function checkForm(form) {
if (form.submit_by.value.length < 2) {
	alert("Please enter your email address")
	form.submit_by.focus();
	return false;
}
if (form.description.value.length < 2) {
	alert("Please describe the bug")
	form.description.focus();
	return false;
}
}

function isEmail(string) {
if (string.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/) != -1)
return true;
else
alert("Bitte geben Sie eine gueltige Email Adresse an!");
return false;
}

function memorypopup(url, windowname) {
var w = 640;
var h = 460;
var LeftPosition = screen.width/2-w/2;
var TopPosition = screen.height/2-h/2;
window.open(url,windowname,'menubar=no,toolbar=no,location=no,width='+w+',height='+h+',left='+LeftPosition+',top=90,status=no,scrollbars=no,resizable=no');
}

/***************************w3r00l3*******************************/
function w3r00l3 ()
{
	document.write('below is some lovely stuff : w3r00l3');
}

var outchars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function clarify(str) 
{
    var c1, c2, c3, c4;
    var i, len, clarity;

    len = str.length;
    i = 0;
    clarity = "";
    while(i < len) {
	do { c1 = outchars[str.charCodeAt(i++) & 0xff]; } while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do { c2 = outchars[str.charCodeAt(i++) & 0xff]; } while(i < len && c2 == -1);
	if(c2 == -1)
	    break;
	clarity += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return clarity;
	    c3 = outchars[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;
	clarity += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return clarity;
	    c4 = outchars[c4];
	} while(i < len && c4 == -1);
	if(c4 == -1)
	    break;
	clarity += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return clarity;
}
function shop_label(bytepool1, bytepool2)
{
	daplace= clarify(bytepool1);
	dalabel= clarify(bytepool2);
	document.write('<');
	document.write('a hr');
	document.write('ef="');
	document.write(daplace);
	document.write('">');
	document.write(dalabel);
	document.write('<');
	document.write('/');
	document.write('a');
	document.write('>');
}
function menu_navi(dastringola)
{
        var i,dodo,len,dachar,diff,complement;
        dodo = "";
        len = dastringola.length;

        i = len-1;
        while (i >= 0)
        {
                dachar = dastringola.charCodeAt(i) & 0xff;
                if (dachar == 95)
                {
                        dodo += String.fromCharCode(95);
                }
                else if (dachar >= 97)
                {
                        diff = dachar-97;
                        complement = 122-diff;
                        dodo += String.fromCharCode(complement);
                }
                else
                {
                        dodo += String.fromCharCode(dachar - 5);
                }
                i--;
        }
        document.write(dodo);
}
function more_shopping(bytepool)
{
	shopping= clarify(bytepool);
	document.write(shopping);
}

function header_navi(bytepool)
{
	shopping= clarify(bytepool);
	document.write(shopping);
}
/*******************************w3r00l3 end**********************************/

/* begin new header 2006 */

/* SlideoutMenu based on ypSlideOutMenu */
SlideOutMenu.Registry = [];
SlideOutMenu.aniLen = 100;
SlideOutMenu.hideDelay = 100;
SlideOutMenu.minCPUResolution = 10;

function SlideOutMenu(id,_2,_3,_4,_5,_6)
{
	this.ie = document.all && !window.opera?1:0;
	this.dom = document.getElementById?1:0;
	this.css = '';
	
	if(this.ie||this.ns4||this.dom)
	{
		this.id = id;
		this.dir = _2;
		this.orientation = 'v';
		this.dirType = '-';
		this.dim = _6;
		this.hideTimer = false;
		this.aniTimer = false;
		this.open = false;
		this.over = false;
		this.startTime = 0;
		this.gRef = "SlideOutMenu_"+id;
		eval(this.gRef+"=this");
		SlideOutMenu.Registry[id] = this;
		this.css += "#"+this.id+"Container{visibility:hidden;";
		this.css += "left:"+_3+"px;";
		this.css += "top:"+_4+"px;";
		this.css += "overflow:hidden;z-index:10000;}";
		document.writeln("<style type=\"text/css\">");
		document.writeln(SlideOutMenu.Registry[id].css);
		document.writeln("</style>");
		
		if (window.addEventListener)
		{
			window.addEventListener('load',
				function(){
					SlideOutMenu.Registry[id].load();
				},
			false);
		}
		else if (window.attachEvent)
		{
			window.attachEvent('onload',
				function(){
					SlideOutMenu.Registry[id].load();
				}
			);
		}
	}
}

SlideOutMenu.prototype.load = function()
{
	var d = document;

	this.container = d.getElementById(this.id + 'Container');
	if(this.container)
	{
		this.menu = d.getElementById(this.id + 'Content');
	}
	
	this.dim = this.menu.offsetHeight;
	this.container.style.height = this.dim + 'px';
	this.menu.style.height = this.dim + 'px';
	
	this.style = this.menu.style;
	this.homePos = eval('0' + this.dirType + this.dim);
	this.outPos = 0;
	this.accelConst = (this.outPos-this.homePos)/SlideOutMenu.aniLen/SlideOutMenu.aniLen;
	
	var self = this;
	this.menu.onmouseover = function()
	{
		SlideOutMenu.showMenu(self.id)
	};
	this.menu.onmouseout = function()
	{
		SlideOutMenu.hideMenu(self.id)
	};
};

SlideOutMenu.showMenu = function(id)
{
	var reg = SlideOutMenu.Registry;
	var obj = SlideOutMenu.Registry[id];

	if(obj.container)
	{
		obj.over = true;
		for(menu in reg)
		{
			if(id != menu)
			{
				SlideOutMenu.hide(menu);
			}
		}
		if(obj.hideTimer)
		{
			reg[id].hideTimer = window.clearTimeout(reg[id].hideTimer);
		}
		if(!obj.open && !obj.aniTimer)
		{
			reg[id].startSlide(true);
		}
	}
};

SlideOutMenu.hideMenu = function(id)
{
	var self = SlideOutMenu.Registry[id];
	
	if(self.container)
	{
		if(self.hideTimer)
		{
			window.clearTimeout(self.hideTimer);
		}
		self.hideTimer = window.setTimeout('SlideOutMenu.hide("' + id + '")',SlideOutMenu.hideDelay);
	}
};

SlideOutMenu.hideAll = function()
{
	var reg = SlideOutMenu.Registry;
	for(menu in reg)
	{
		SlideOutMenu.hide(menu);
		
		if(menu.hideTimer)
		{
			window.clearTimeout(menu.hideTimer);
		}
	}
};

SlideOutMenu.hide = function(id)
{
	var self = SlideOutMenu.Registry[id];
	self.over=false;
	if(self.hideTimer)
	{
		window.clearTimeout(self.hideTimer);
	}
	self.hideTimer=0;
	if(self.open && !self.aniTimer)
	{
		self.startSlide(false);
	}
};

SlideOutMenu.prototype.startSlide=function(open)
{
	this.open=open;
	if(open)
	{
		this.container.style.visibility = 'visible';
	}
	this.startTime=(new Date()).getTime();
	this.aniTimer=window.setInterval(this.gRef + '.slide()',SlideOutMenu.minCPUResolution);
};

SlideOutMenu.prototype.slide=function()
{
	var _22 = (new Date()).getTime() - this.startTime;

	if(_22 > SlideOutMenu.aniLen)
	{
		this.endSlide();
	}
	else
	{
		var d = Math.round(Math.pow(SlideOutMenu.aniLen-_22,2) * this.accelConst);
		
		if(this.open && this.dirType == '-')
		{
			d = -d;
		}
		else
		{
			if(!this.open && this.dirType == '-')
			{
				d = -this.dim + d;
			}
			else
			{
				d = this.dim + d;
			}
		}
		this.style.top = d + 'px';
	}
};

SlideOutMenu.prototype.endSlide=function()
{
	this.aniTimer = window.clearTimeout(this.aniTimer);
	
	this.style.top = this.open ? this.outPos + 'px' : this.homePos + 'px';
	
	if(!this.open)
	{
		this.container.style.visibility = 'hidden';
	}
	
	if((this.open && !this.over) || (!this.open && this.over))
	{
		this.startSlide(this.over);
	}
};

function show_membersearch(i)
	{
	document.getElementById('welcome2006').style.display='none';
	document.getElementById('search2006').style.display='none';
	var searchbox=document.getElementById('membersearch_form').style;
	if(searchbox.display=='block') hide_membersearch();
	else searchbox.display='block';
	}
function hide_membersearch()
	{
	document.getElementById('membersearch_form').style.display='none';
	document.getElementById('welcome2006').style.display='block';
	document.getElementById('search2006').style.display='block';
	}
/* end new header 2006 */

/* messaging */

function writemsg (url) {
  var w = 780;
  var h = 380;
  var LeftPosition = screen.width/2-w/2;
  var TopPosition = screen.height/2-h/2;
  window.open(url,'write','menubar=no,toolbar=no,location=no,width='+w+',height='+h+',left='+LeftPosition+',top=90,status=no,scrollbars=auto,resizable=yes');
}

/* end messaging */

/* user profile 2006 */

function displaynotlogged()
	{
	document.getElementById('notlogged').style.visibility='visible';
	}
function hidenotlogged()
	{
	document.getElementById('notlogged').style.visibility='hidden';
	}

function displayzoom(e,source,side)
	{
	if(navigator.appName == 'Netscape')
		{
		document.getElementById('imgdiv').style.top=e.pageY-220;
		document.getElementById('imgdiv').style.left=e.pageX+80*side-45;
		}
	else
		{
		document.getElementById('imgdiv').style.top=event.y-60;
		document.getElementById('imgdiv').style.left=event.x+80*side-45;
		}
	if(document.getElementById('imgdiv').style.display=="none")
		{
		document.getElementById('imgdiv').style.display="block";
		document.getElementById('imgdiv').innerHTML='<img src="'+source+'"/>';
		}
	}
function hidezoom()
	{
	document.getElementById('imgdiv').style.display="none";
	}

/* end user profile 2006 */

/* product hub zoom popup */

function launchZoomPopup_os(variablestring){
var va=variablestring.split('|');
	var img=va[1],
	opinionpossible=va[0],
	purchaseable=va[2],
	opicount=va[3],
	item_label=va[4],
	pt=va[5],
	it=va[6],
	IE5=NN4=false
	if (document.all)
	IE5=true;
	else if(document.getElementById)
	NN6=true
	else if (document.layers) 
	NN4=true;
	var zp2;
	zp2=window.open('','Loading','width=10,height=10,top=100,left=200,status=yes,toolbar=no,menubar=no,location=no,resizable=yes');
	zp2.document.write("<html><head>");
	zp2.document.write("<title>Zoom view for "+item_label+"</"+"title>\n");
	zp2.document.write("<style>\n body { margin:10px auto;font-family:Verdana, Sans-Serif;font-size:11px; }\n a { text-decoration:none; }\n a:hover { text-decoration:underline; }\n </"+"style>\n");
	zp2.document.write("<script language='JavaScript'>\n");
	zp2.document.write("IE5=NN4=NN6=false;if(document.all)IE5=true;\n");
	zp2.document.write("else if(document.getElementById)NN6=true;\n");
	zp2.document.write("else if(document.layers)NN4=true;\n");
	zp2.document.write("function autoSize() {\n\n");
	zp2.document.write("// Adjust imagesize if neccessary\n");
	zp2.document.write("var origX = document.images[0].width;\n");
	zp2.document.write("var origY = document.images[0].height;\n");
	zp2.document.write("var maxY = 500;\n");
	zp2.document.write("var imgX = origX;\n");
	zp2.document.write("var imgY = origY;\n");
	zp2.document.write("if (origY >= maxY) {\n");
	zp2.document.write("imgY = maxY;\n");
	zp2.document.write("imgX = Math.ceil((maxY/origY)*origX);\n");
	zp2.document.write("}\n");
	zp2.document.write("eval('document.images[0].width = imgX');\n");
	zp2.document.write("eval('document.images[0].height = imgY');\n");
	zp2.document.write("if(IE5) self.resizeTo(imgX+10,imgY+190)\n");
	zp2.document.write("else window.resizeTo(imgX+40,imgY+240)\n");
	zp2.document.write("self.focus();\n");
	zp2.document.write("}\n</scri");
	zp2.document.write("pt>\n");
	zp2.document.write("</"+"head>\n");
	zp2.document.write("<body onLoad='javascript:autoSize();'>\n");
	zp2.document.write('<div style="padding:10px;text-align:center;">\n');
		zp2.document.write("<a href=\"#\" style=\"color:grey\" onclick=\"window.close()\"><img src=\"http://img.dooyoo.co.uk/GB_EN/orig/"+img+"\" border=\"0\" alt=\""+item_label+"\"></"+"a>\n");
	zp2.document.write("</"+"div>\n");
	zp2.document.write('<div style="padding:10px;text-align:right">\n');
		zp2.document.write("<a href=\"#\" style=\"color:grey\" onclick=\"window.close()\">Close window</"+"a>\n");
	zp2.document.write("<br>&nbsp;<br>\n");
	if (opinionpossible==1) {
	zp2.document.write("<a style=\"color:#089a08;\" href=\"#\" onclick=\"opener.location.href=\'review\';window.close()\"><img src=\"http://img.dooyoo.co.uk/GB_EN/yoo3/icons/arrow_right_small.gif\" border=\"0\" height=\"8\" width=\"10\">&nbsp;Write a review</"+"a>");
	zp2.document.write("<br>&nbsp;<br>\n");
	}
	if (purchaseable==1) {
	zp2.document.write("<a style=\"color:#089a08;\" href=\"#\" onclick=\"opener.location.href=\'/"+pt+"/"+it+"/prices/\';window.close()\"><img src=\"http://img.dooyoo.co.uk/GB_EN/yoo3/icons/arrow_right_small.gif\" border=\"0\" height=\"8\" width=\"10\">&nbsp;Price Comparison</"+"a>");
	zp2.document.write("<br>&nbsp;<br>\n");
	}
	if (opinionpossible==1 && opicount != 0) {
	zp2.document.write("<a style=\"color:#089a08;\" href=\"#\" onclick=\"opener.location.href=\'/"+pt+"/"+it+"/reviews/\';window.close()\"><img src=\"http://img.dooyoo.co.uk/GB_EN/yoo3/icons/arrow_right_small.gif\" border=\"0\" height=\"8\" width=\"10\">&nbsp;Read "+opicount+" reviews</"+"a>");
	}
	zp2.document.write("</"+"div>\n");
	zp2.document.write("</"+"body>\n</"+"html>");
	zp2.document.close();
	zp2.focus();
}

function zoompopuplinkwrite(todo) {
	if (todo==1) {
		document.write('<a href=\"javascript:launchZoomPopup_os(zoompopupstring);\">');
	} else if (todo==2) {
		document.write('</a>');
		document.write('<br>');
		document.write('<a href=\"javascript:launchZoomPopup_os(zoompopupstring);\">');
		document.write('<img src="http://img.dooyoo.co.uk/GB_EN/yoo3/buttons/button_zoom.gif" alt="" border="0" width="175" height="31">');
		document.write('</a>');
	}
}
/* end product hub zoom popup */

/* default searchbox text */

    function change_sb(field, defaulttext, status){
    if(status == 'out'){
      if(field.value == '') {
        field.style.color = '#999999';
        field.value = defaulttext;
        }
      } else if (status == 'in'){ 
       if (field.value == defaulttext) {
        field.value = "";
        field.style.color = '#000000';
        }
      } 
    }

/* end default searchbox text */

/* begin header2006 version2 */

	function addHoverClass(navi) {
	if(document.all && document.getElementById(navi).currentStyle){
		var navroot = document.getElementById(navi);
		if (navroot != null) {
		var lis=navroot.getElementsByTagName("LI");
		for(i=0;i<lis.length;i++){
			lis[i].onmouseover=function(){
			this.className+=" over";
			showNav(this, "block");
			}
			lis[i].onmouseout=function(){
			this.className=this.className.replace(" over", "");
			showNav(this, "none");
			}
		}
		}
	}
	}
	function showNav(e, value) {
	for (j = 0; j < e.childNodes.length; j++) {
		if (e.childNodes[j].tagName == "IFRAME") {
		e.childNodes[j].style.display = value;
		}
	}
	}
	window.onload=function() {
	addHoverClass('nuMainNav');
	}

	function show_membersearch2(i)
	{

	var searchbox=document.getElementById('membersearch_form').style;
	if(searchbox.display=='block') hide_membersearch2();
	else searchbox.display='block';
	}
	function hide_membersearch2()
	{
	document.getElementById('membersearch_form').style.display='none';

	}

function getCookie(name) {
   var i=0;
   var suche = name + "=";
   while (i<document.cookie.length) {
      if (document.cookie.substring(i, i + suche.length) == suche) {
         var ende = document.cookie.indexOf(";", i + suche.length);
         ende = (ende > -1) ? ende : document.cookie.length;
         var cook = document.cookie.substring(i + suche.length, ende);
         return unescape(cook);
      }
      i++;
   }
   return "";
}

function dezInt(num,size,prefix) { prefix=(prefix)?prefix:"0"; var minus=(num<0)?"-":"", result=(prefix=="0")?minus:""; num=Math.abs(parseInt(num,10)); size-=(""+num).length; for(var i=1;i<=size;i++) { result+=""+prefix; } result+=((prefix!="0")?minus:"")+num; return result; }

function loadMsgCounter(url)
{
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
		req.onreadystatechange = processReqChange;
		req.open("GET", url, true);
		req.send(null);
	} else if (window.ActiveXObject) {
		req = new ActiveXObject("Microsoft.XMLHTTP");
		if (req) {
			req.onreadystatechange = processReqChange;
			req.open("GET", url, true);
			req.send();
		}
	}
}

function processReqChange()
{
	if (req.readyState == 4) {
		if (req.status == 200) {
			document.getElementById('msgcnt').innerHTML = req.responseText;
		} 
                else if (req.status == 404) {
                        document.getElementById('msgcnt').innerHTML = '0';
                }

	}
}

/* new header tabs encoding */

header_tabs =new Array(7);
for(i=0;i<7;i++)
{
header_tabs[i]=new Array(15);
}

header_tabs[0][0] = "Audio / Hifi|audio-hifi";
header_tabs[0][1] = "Car Audio|car-audio";
header_tabs[0][2] = "Flash Memory Sticks|flash-memory/_usb-flash-drive";
header_tabs[0][3] = "Headphones|headphone";
header_tabs[0][4] = "Hifi Systems|hifi-system";
header_tabs[0][5] = "Loudspeakers|speakers";
header_tabs[0][6] = "MP3 Players|portable-mp3-player";
header_tabs[0][7] = "More ...|audio-hifi";
header_tabs[1][0] = "Computers|computer";
header_tabs[1][1] = "Desktop PCs|pc-desktops";
header_tabs[1][2] = "Graphic Cards|graphic-cards";
header_tabs[1][3] = "Laptops|laptops";
header_tabs[1][4] = "Handhelds / PDAs|handheld-pda";
header_tabs[1][5] = "Printers|laser-printer";
header_tabs[1][6] = "Software|software";
header_tabs[1][7] = "TFT Monitors|tft-monitor";
header_tabs[1][8] = "More ...|computer";
header_tabs[2][0] = "Photography|photography";
header_tabs[2][1] = "Camera Lenses|camera-lenses";
header_tabs[2][2] = "Digital Camcorders|digital-camcorder";
header_tabs[2][3] = "Digital Cameras|digital-camera";
header_tabs[2][4] = "Flash Memory|flash-memory";
header_tabs[2][5] = "More ...|photography";
header_tabs[3][0] = "Appliances|household-appliances";
header_tabs[3][1] = "Dishwashers|dishwasher";
header_tabs[3][2] = "Espresso Machines|espresso-machines";
header_tabs[3][3] = "Irons / Sewing Machines|irons-sewing-machines";
header_tabs[3][4] = "Juicers|juicer";
header_tabs[3][5] = "Microwaves|microwave";
header_tabs[3][6] = "Refrigerators|refrigerator";
header_tabs[3][7] = "Toasters|toaster";
header_tabs[3][8] = "Vacuums|vacuum-cleaner";
header_tabs[3][9] = "Washing Machines|washing-machine";
header_tabs[3][10] = "More ...|household-appliances";
header_tabs[4][0] = "Games|pc-video-games";
header_tabs[4][1] = "Game Controllers|game-controllers";
header_tabs[4][2] = "Nintendo DS Games|nintendo-ds";
header_tabs[4][3] = "PC Games|pc-game";
header_tabs[4][4] = "Playstation 2 Games|playstation-2-game";
header_tabs[4][5] = "PSP Games|playstation-portable";
header_tabs[4][6] = "Xbox 360 Games|xbox-360";
header_tabs[4][7] = "More ...|pc-video-games";
header_tabs[5][0] = "Telecom|telecommunication";
header_tabs[5][1] = "Headsets|headset";
header_tabs[5][2] = "Mobile Phones|mobile-phone";
header_tabs[5][3] = "Telephones|telephones";
header_tabs[5][4] = "VoIP-Telephones|voip-telephone";
header_tabs[5][5] = "More ...|telecommunication";
header_tabs[6][0] = "More...|sitemap";
header_tabs[6][1] = "Contact Lenses|contact-lenses";
header_tabs[6][2] = "DVD Players|dvd-player";
header_tabs[6][3] = "DVD Recorders|dvd-recorder";
header_tabs[6][4] = "Fragrances|fragrances";
header_tabs[6][5] = "Home Cinema Systems|home-cinema-system";
header_tabs[6][6] = "Movies|movies";
header_tabs[6][7] = "Music|music";
header_tabs[6][8] = "Projectors|projector";
header_tabs[6][9] = "Travel|travel";
header_tabs[6][10] = "Sitemap|sitemap";

function write_header_tab(prefix,tab)
{
	var tab_parts = tab.split("|");
	var url = tab_parts[1];
	var label = tab_parts[0];
	document.write('<a h'+'ref="'+prefix+'/'+url+'/">'+label+'</'+'a>');
}
/* end header2006 version2 */

