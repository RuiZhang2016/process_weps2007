// use: <img onerror="hide_broken_img(this)" src="http://broken.com/image.gif" />
function hide_broken_avatar(img) {
  img.src='http://image.com.com/mp3/images/avatar.jpg';
}

// msoft activex controls no longer start up 'activated' after april 11/06 (require focus to activate)
// workaround requires object/embed tags to be included in external js
// hence this func (document.write call must be made from externally included .js file)... sb
// note: if 'allow script debugging' is *not* checked in ie settings, you will still get the activiation prompt!
function embed(tag){

    document.write(tag);
}


// generic function to toggle between tab sections
// use: see templates/frontdoor/modules/main.instant-music.tpl
// author: mike horn
function toggleTab(module,section) {

  // get all ULs in module
  var uls = document.getElementById(module).getElementsByTagName('ul');

  // find the tabs
  var tabs = new Array();
  for (i=0;i<uls.length;i++)
    if (uls[i].className == 'tabs') tabs = uls[i].getElementsByTagName('li');

  // get all DIVs in module
  var divs = document.getElementById(module).getElementsByTagName('div');

  // get sections
  var sections = new Array();
  for (i=0;i<divs.length;i++)
    if (divs[i].className == 'section') sections[sections.length++] = divs[i];

  // check if tab # is equal to section #
  if (tabs.length != sections.length) {
    alert('warning: your number of tabs ('+tabs.length+') differs from your number of sections ('+sections.length+')');
    return;
  }

  // turn on selected tab
  section = section-1;
  for (i=0;i<tabs.length;i++) {
    if (i == section) tabs[i].className = 'on'
    else tabs[i].className = '';
  }

  // turn on selected content
  for (i=0;i<sections.length;i++) {
    if (i == section) sections[i].style.display = 'block';
    else sections[i].style.display = 'none';
  }
}

// temp function to work the friends dropdown
// real one will probably use YUI
function friendsDropdown() {
  var dropdown = document.getElementById('friends-dropdown');
  if (dropdown.offsetHeight > 0) {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
  setTimeout("isHovering()", 1000);
}
function isHovering() {
  var dropdown = document.getElementById('friends-dropdown');

}

// Prefs window always opens the same size, position.
function openPrefsWin(sURL) {
  var popup = window.open(sURL, 'blank','toolbar=no,width=720,height=540');
}

// Audio player
function audioPlayer(url) {
  var popup = window.open(url, 'MP3AudioPlayer', 'toolbar=no,width=726,height=644');
}

// Video player
function videoPlayer(url) {

  //This script is from http://www.quirksmode.org/js/detect.html

  var detect = navigator.userAgent.toLowerCase();
  var OS,browser,version,total,thestring;

  if (checkIt('konqueror'))
  {
    browser = "Konqueror";
    OS = "Linux";
  }
  else if (checkIt('safari')) browser = "Safari"
  else if (checkIt('omniweb')) browser = "OmniWeb"
  else if (checkIt('opera')) browser = "Opera"
  else if (checkIt('webtv')) browser = "WebTV";
  else if (checkIt('icab')) browser = "iCab"
  else if (checkIt('msie')) browser = "Internet Explorer"
  else if (!checkIt('compatible'))
  {
    browser = "Netscape Navigator"
    version = detect.charAt(8);
  }
  else browser = "An unknown browser";

  if (!version) version = detect.charAt(place + thestring.length);

  if (!OS)
  {
    if (checkIt('linux')) OS = "Linux";
    else if (checkIt('x11')) OS = "Unix";
    else if (checkIt('mac')) OS = "Mac"
    else if (checkIt('win')) OS = "Windows"
    else OS = "an unknown operating system";
  }

  function checkIt(string)
  {
    place = detect.indexOf(string) + 1;
    thestring = string;
    return place;
  }

  if(browser == "Internet Explorer") {
    var popup = window.open(url, 'MP3VideoPlayer', 'toolbar=no,width=726,height=678');
  }
  else {
    var popup = window.open(url, 'MP3VideoPlayer', 'toolbar=no,width=726,height=644');
  }

}

// Generic popup
function genpop(url,name,width,height,resize,scroll) {
    popupWin = window.open(url, name,'width='+width+',height='+height+',resizable='+resize+',scrollbars='+scroll+',location=0,menubar=0,statusbar=0,toolbar=0');
}