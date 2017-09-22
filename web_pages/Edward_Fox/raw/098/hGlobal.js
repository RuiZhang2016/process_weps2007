var ns;
var ie;
if (navigator.appName == 'Netscape'){
ns = true;
doc = document.layers;
style = '';
px = '';
//-------------------------------
left_start = parseInt(document.NAVSPAN.left);
top_coord = parseInt(document.NAVSPAN.top);
SG = '';
CBBeginLayer = '<LAYER';
CBTop = 'TOP=';
CBRTop = 'TOP=';
CBLeft = ' LEFT=';
CBEndLayer = '><center><img src="/images/spacer.gif" height=3 width=1><br>';
CBCloseLayer = '</LAYER>';
CBBeginSubMenuLayer = CBBeginLayer;
CBEndSubMenuLayer = CBEndLayer;
CBBeginSubILayer = CBBeginLayer;
CBEndSubILayer = CBCloseLayer;
CBCloseTable = '';
eF = CBBeginSubILayer;
}
if (navigator.appName == 'Microsoft Internet Explorer'){
ie = true;
doc = document.all;
style = '.style';
px = 'px';
//-------------------------------
left_start = parseInt(NAVSPAN.style.left);
top_coord = parseInt(NAVSPAN.style.top);
SG = '</TR><TR><td width=226 colspan=5 onmouseover="si_rovr();" onmouseout="si_rout();"><img src="/images/spacer.gif" height=1 width=226></td></tr>';
CBMouseOver = ' onmouseover="si_rovr()\;" onmouseout="si_rout()\;"';
CBBeginLayer = '<TABLE CELLSPACING=0 CELLPADDING=0';
CBRTop = 'STYLE="position\: relative\; top\: ';
CBTop = 'STYLE="position\: absolute\; top\: ';
CBLeft = '\; left\: ';
CBEndLayer = '\; z-index\: 2"><TR><TD align=center>';
CBCloseLayer = '</TD></TR></TABLE>';
CBBeginSubMenuLayer = '<TABLE CELLSPACING=0 CELLPADDING=0 ';
CBEndSubMenuLayer = CBEndLayer + '<TABLE CELLSPACING=0 CELLPADDING=0 BORDER=0 STYLE="z-index\: 1">';
CBBlankRow = '<TR><TD WIDTH=226 COLSPAN=5' + CBMouseOver + '><img src="/images/spacer.gif" height=1 width=226></TD></TR>';
CBBeginSubILayer = '<TR><TD WIDTH=1' + CBMouseOver + '></TD><TD';
CBEndSubILayer = '</TD>';
CBCloseTable = '</TABLE>';
eF = '<TD WIDTH=1' + CBMouseOver + '></TD><TD ';
}
