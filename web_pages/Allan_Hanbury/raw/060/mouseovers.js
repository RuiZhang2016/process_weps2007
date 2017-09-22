if (document.images) {
  img1on = new Image();img1on.src = "http://www.jesus.org.uk/images/header/quick1_on.jpg";
  img2on = new Image();img2on.src = "http://www.jesus.org.uk/images/header/quick2_on.jpg";
  img3on = new Image();img3on.src = "http://www.jesus.org.uk/images/header/quick3_on.jpg";
  img4on = new Image();img4on.src = "http://www.jesus.org.uk/images/header/quick4_on.jpg";
  img5on = new Image();img5on.src = "http://www.jesus.org.uk/images/header/quick5_on.jpg";
  img7on = new Image();img7on.src = "http://www.jesus.org.uk/images/horizmenu/2b.gif";
  img8on = new Image();img8on.src = "http://www.jesus.org.uk/images/horizmenu/3b.gif";
  img9on = new Image();img9on.src = "http://www.jesus.org.uk/images/horizmenu/4b.gif";
  img10on = new Image();img10on.src = "http://www.jesus.org.uk/images/horizmenu/5b.gif";
  img11on = new Image();img11on.src = "http://www.jesus.org.uk/images/horizmenu/6b.gif";
  img12on = new Image();img12on.src = "http://www.jesus.org.uk/images/horizmenu/7b.gif";
  img13on = new Image();img13on.src = "http://www.jesus.org.uk/images/horizmenu/8b.gif";

  img1off = new Image();img1off.src = "http://www.jesus.org.uk/images/header/quick1.jpg";
  img2off = new Image();img2off.src = "http://www.jesus.org.uk/images/header/quick2.jpg";
  img3off = new Image();img3off.src = "http://www.jesus.org.uk/images/header/quick3.jpg";
  img4off = new Image();img4off.src = "http://www.jesus.org.uk/images/header/quick4.jpg";
  img5off = new Image();img5off.src = "http://www.jesus.org.uk/images/header/quick5.jpg";
  img7off = new Image();img7off.src = "http://www.jesus.org.uk/images/horizmenu/2.gif";
  img8off = new Image();img8off.src = "http://www.jesus.org.uk/images/horizmenu/3.gif";
  img9off = new Image();img9off.src = "http://www.jesus.org.uk/images/horizmenu/4.gif";
  img10off = new Image();img10off.src = "http://www.jesus.org.uk/images/horizmenu/5.gif";
  img11off = new Image();img11off.src = "http://www.jesus.org.uk/images/horizmenu/6.gif";
  img12off = new Image();img12off.src = "http://www.jesus.org.uk/images/horizmenu/7.gif";
  img13off = new Image();img13off.src = "http://www.jesus.org.uk/images/horizmenu/8.gif";
}

function imgOn(imgName) {
	if (document.images) {
		document [imgName].src = eval(imgName + "on.src");
		}
	}

function imgOff(imgName) {
	if (document.images) {
		document [imgName].src = eval(imgName + "off.src");
		}
	}


var win=null;

function NewWindow(mypage,myname,w,h,scroll,resize){
sh=screen.height-48;
sw=screen.width-10;
LeftPosition=(sw>w)?(sw-w)/2:0;
TopPosition=(sh>h)?(sh-h)/2:0;
actualwidth=(sw>w)?w:sw;
actualheight=(sh>h)?h:sh;
if ((actualwidth<w)||(actualheight<h)){scroll="yes"};
if (!resize) {resize="yes"};
settings='width='+actualwidth+',height='+actualheight+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable='+resize;
win=window.open(mypage,myname,settings);if (window.focus) {win.window.focus()}
}

var aWindow=null;
function openWin(URL) {
NewWindow(URL,aWindow,250,300,"yes","yes");
}

function openWin_rec(URL) {
NewWindow(URL,aWindow,350,400,"yes","yes");
}

function openWin_sitemap(URL) {
NewWindow(URL,aWindow,420,450,"yes","yes");
}

function openWin_biblecards(URL) {
NewWindow(URL,aWindow,860,640,"no","yes");
}

function openWin_contactform(URL) {
NewWindow(URL,aWindow,600,400,"no","no");
}

var bookmarkurl="http://www.jesus.org.uk"
var bookmarktitle="Jesus Army"

function bookmark(bookmarkurl,bookmarktitle){
if (window.sidebar&&window.sidebar.addPanel) {window.sidebar.addPanel("Jesus Army", "http://www.jesus.org.uk/sidebar.htm", "");} //NS6+
if (navigator.appName=='Microsoft Internet Explorer') {
//window.external.AddFavorite(bookmarkurl,bookmarktitle);
window.external.AddFavorite(location.href,document.title);}
else if (navigator.appName=="Netscape") {alert("Please click OK, then press <Ctrl-D> to bookmark this page.");}
else {alert("Sorry, your browser does not support this feature.");}
}


