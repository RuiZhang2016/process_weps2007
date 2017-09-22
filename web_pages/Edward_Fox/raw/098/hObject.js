var r2_cnt;
var curr_row;

function SubI_Mkr(pL){
	var left_crd, top_crd, hO, vO, bL, eL;
	bL=CBBeginSubILayer;
	eL=CBEndSubILayer;
	if (j%2==1) {
		hO=113;
		r2_cnt++;
		if (ie) {
			bL = '<TD WIDTH=1' + CBMouseOver + '></TD><TD';
		}
	} else {
		hO = 0;
		curr_row++;
		if (ie) {
			eL = '</TD>';
		}
	}
	vO = -15 * r2_cnt;
	temp_s_i = bL + ' WIDTH=112 HEIGHT=15 BGCOLOR="';
	left_crd =  1 + hO;
	top_crd = j * 15 + vO;
	if (curr_row % 2 == 1) {
		temp_s_i += Menu.SI_EVEN_BGCOLOR;
		temp_bgcolor = Menu.SI_EVEN_BGCOLOR;
	} else {
		temp_s_i += Menu.SI_ODD_BGCOLOR;
		temp_bgcolor = Menu.SI_ODD_BGCOLOR;
	}
	temp_s_i += '" TOP=' + top_crd + ' LEFT=' + left_crd + ' ID="' + this.id_name + '" class="menucursor" onclick="top.location.href=\''+ this.url_name + '\'; si_rout();" onmouseover="si_rovr(\'' + pL + '\', \'' + this.id_name + '\', \'' + temp_bgcolor + '\')\;" onmouseout="si_rout()\;">';
	temp_s_i += '<A CLASS="si" onclick="this.blur(); si_rout();" HREF="' + this.url_name + '">&nbsp\;' + this.value_name + '</A>' + eL;
	return temp_s_i;
}

function ClassSubI_Mkr(pL){
	var left_crd, top_crd;
	if (j%2==1) {
		temp_bgcolor = Menu.CSI_ODD_BGCOLOR;
	} else {
		temp_bgcolor = Menu.CSI_EVEN_BGCOLOR;
	}
	vO = -15 * r2_cnt;
	left_crd =  1;
	top_crd = j * 47 + 21;
	if (ns) {
		temp_s_i = CBBeginLayer + ' WIDTH=332 HEIGHT=47 BGCOLOR="' + temp_bgcolor + '"';
		temp_s_i += ' TOP=' + top_crd + ' LEFT=' + left_crd + ' ID="' + this.id_name + '" class="menucursor" onclick="top.location.href=\''+ this.url_name + '\'" onmouseover="si_rovr(\'' + pL + '\', \'' + this.id_name + '\', \'' + temp_bgcolor + '\')\;" onmouseout="si_rout()\;">';
		if (this.icon != '/dhtml/hnavbar_class/images/icons/spacer.gif') {
			temp_s_i += '<table cellpadding=0 cellspacing=0 border=0 width=332><tr valign=middle><td width=43 align=center><img src="/images/spacer.gif" height=14 width=14><br><A CLASS="si" onclick="this.blur()" HREF="' + this.url_name + '"><img src="' + this.icon + '" border=0 height=19 width=25></A><br><img src="/images/spacer.gif" height=14 width=1></td><td width=289 align=center class=ct><B>' + this.bold_head + '</B> ' + this.desc_text + '<br><img src="/images/spacer.gif" height=3 width=1><br><font color=#CC0504>&#187\;&#160\;</font><A CLASS="cp" onclick="this.blur()" HREF="' + this.url_name + '">' + this.value_name + '</A></td></tr></table>' + CBCloseLayer;
		} else {
			temp_s_i += '<table cellpadding=0 cellspacing=0 border=0 width=332><tr valign=middle><td width=332 align=center class=ct><img src="/images/spacer.gif" height=6 width=1><br><B>' + this.bold_head + '</B> ' + this.desc_text + '<br><img src="/images/spacer.gif" height=3 width=1><br><font color=#CC0504>&#187\;&#160\;</font><A CLASS="cp" onclick="this.blur()" HREF="' + this.url_name + '">' + this.value_name + '</A></td></tr></table>' + CBCloseLayer;
		}
	} else {
		temp_s_i = CBBeginLayer + '<tr><td WIDTH=332 HEIGHT=47 BGCOLOR="' + temp_bgcolor + '"';
		temp_s_i += ' TOP=' + top_crd + ' LEFT=' + left_crd + ' ID="' + this.id_name + '" class="menucursor" onclick="si_rout(); top.location.href=\''+ this.url_name + '\'" onmouseover="si_rovr(\'' + pL + '\', \'' + this.id_name + '\', \'' + temp_bgcolor + '\')\;" onmouseout="si_rout()\;">';
		if (this.icon != '/dhtml/hnavbar_class/images/icons/spacer.gif') {
			temp_s_i += '<table cellpadding=0 cellspacing=0 border=0 width=332><tr valign=middle><td width=43 align=center><img src="/images/spacer.gif" height=14 width=14><br><A CLASS="si" onclick="si_rout(); this.blur()" HREF="' + this.url_name + '"><img src="' + this.icon + '" border=0 height=19 width=25></A><br><img src="/images/spacer.gif" height=14 width=1></td><td width=289 align=center class=ct><B>' + this.bold_head + '</B> ' + this.desc_text + '<br><img src="/images/spacer.gif" height=3 width=1><br><font color=#CC0504>&#187\;&#160\;</font><A CLASS="cp" onclick="si_rout(); this.blur()" HREF="' + this.url_name + '">' + this.value_name + '</A></td></tr></table></td></tr>';
		} else {
			temp_s_i += '<table cellpadding=0 cellspacing=0 border=0 width=332><tr valign=middle><td width=332 align=center class=ct><B>' + this.bold_head + '</B> ' + this.desc_text + '<br><img src="/images/spacer.gif" height=3 width=1><br><font color=#CC0504>&#187\;&#160\;</font><A CLASS="cp" onclick="si_rout(); this.blur()" HREF="' + this.url_name + '">' + this.value_name + '</A></td></tr></table></td></tr>';
		}
	
	}
	return temp_s_i;
}

function SubI(iN, vN, uN, bH, dT, iC){
	this.id_name = iN;
	this.value_name = vN;
	this.url_name = uN;
	this.bold_head = bH;
	this.desc_text = dT;
	this.icon = iC;
}

SubI.prototype.mk_si = SubI_Mkr;
SubI.prototype.mk_csi = ClassSubI_Mkr;

function SubMenu_Mkr(){
	var y_rows = this.s_i.length;
	curr_row=0;
	var sW;
	var col_cnt=1;
	if (this.s_i.length == 0) {
		sW=1;
	} else {
		y_rows=Math.ceil(y_rows/2);
		sW=227;
		col_cnt=2;
	}
	temp_s_m = CBBeginSubMenuLayer;
	temp_s_m += ' WIDTH=' + sW + ' HEIGHT=' + (y_rows * 15 +1) + ' BGCOLOR="' + Menu.SM_BGCOLOR + '" ID="' + this.id_name + '" ' + CBTop + Menu.SM_TOP_COORD + CBLeft + '-596' + CBEndSubMenuLayer;
	if (ns) temp_s_m += CBBeginSubILayer + ' WIDTH=' + sW + ' HEIGHT=' + (y_rows * 15) + ' TOP=0 LEFT=0 BGCOLOR="' + Menu.SM_BGCOLOR + '" onmouseover="si_rovr()\;" onmouseout="si_rout()\;">' + CBEndSubILayer;
	r2_cnt = 0;
	for (j = 0; j < this.s_i.length; j++){
		temp_s_m += this.s_i[j].mk_si(this.id_name, col_cnt);
		if (j < (this.s_i.length - 1) && (j%2 == 1) && (ie)) temp_s_m += '</TR>';
	}
	if (this.s_i.length % 2 == 1 && j > 0) {
		temp_s_m += eF + ' WIDTH=112 HEIGHT=15 TOP=' + (parseInt(this.s_i.length / 2) * 15) + ' LEFT=114 BGCOLOR="';
	if (this.s_i.length % 4 == 1) {
		temp_s_m += Menu.SI_EVEN_BGCOLOR;
	} else {
		temp_s_m += Menu.SI_ODD_BGCOLOR;
	}
	temp_s_m +=  '" onmouseover="si_rovr()\;" onmouseout="si_rout()\;">' + CBEndSubILayer;
	}
	temp_s_m += SG + CBCloseTable + CBCloseLayer;
	return temp_s_m;
}

function ClassSubMenu_Mkr(){
	curr_row=0;
	var sW;
	var col_cnt=1;
	if (this.s_i.length == 0) {
		sW=1;
	} else {
		sW=227;
		col_cnt=2;
	}
	temp_s_m = CBBeginSubMenuLayer;
	if (ns) {
		temp_s_m += ' WIDTH=334 HEIGHT=' + (this.s_i.length * 47 + 1 + 21) + ' BGCOLOR="#FC0208" ID="' + this.id_name + '" ' + CBTop + Menu.CSM_TOP_COORD + CBLeft + '-596">';
		temp_s_m += CBBeginSubMenuLayer + ' onmouseover="si_rovr()" onmouseout="si_rout()" WIDTH=334 HEIGHT=21 BGCOLOR="' + Menu.CL_BGCOLOR + '" ' + CBRTop + '0' + CBLeft + '0>' + '<img src="/images/spacer.gif" height=2 width=1><br><center><font face=arial,sans-serif size=2 color=#FFFFFF><B>TODAY INSIDE CLASSIFIEDS</B></font></center>' + CBCloseLayer;
	} else {
		temp_s_m += ' WIDTH=334 HEIGHT=' + (this.s_i.length * 47 + 1 + 21) + ' BGCOLOR="#FC0208" ID="' + this.id_name + '" ' + CBTop + Menu.CSM_TOP_COORD + CBLeft + '-596">';
		temp_s_m += '<TR onmouseover="si_rovr()" onmouseout="si_rout()" valign=middle><TD align=center><table cellpadding=0 cellspacing=0 border=0 width=330><tr><td><img src="/images/spacer.gif" height=21 width=1></td><td align=center><font face=arial,sans-serif size=2 color=#FFFFFF><B>TODAY INSIDE CLASSIFIEDS</B></font></td></tr></table></td></tr><tr><td align=center><img src="/images/spacer.gif" height=1 width=1><br>';

	}
	for (j = 0; j < this.s_i.length; j++){
		temp_s_m += this.s_i[j].mk_csi(this.id_name, col_cnt);
		if (j < (this.s_i.length - 1) && (j%2 == 1) && (ie)) temp_s_m += '</TR>';
	}
	temp_s_m += SG + CBCloseTable + CBCloseLayer;
	return temp_s_m;
}

function SubMenu(iN, vN, uM, lstrt){
	this.lstrt = lstrt;
	this.value_name = vN;
	this.id_name = iN;
	this.menu_url = uM;
	this.s_i = new Array();
}

SubMenu.prototype.mk_submenu = SubMenu_Mkr;

function ClassSubMenu(iN, vN, uM, lstrt){
	this.lstrt = lstrt;
	this.value_name = vN;
	this.id_name = iN;
	this.menu_url = uM;
	this.s_i = new Array();
}

ClassSubMenu.prototype.mk_submenu = ClassSubMenu_Mkr;


function MenuI_Mkr(){
	if (ns) this.lstrt -= 2;
	var mibg, miend, mihgt;
	if (this.sT == 'miclass') { 
		// Added return ""; to prevent classifieds box draw.
		return "";
		mibg = Menu.CLASS_BGCOLOR;
		miend = '">';
		mihgt ='';
	} else {
		mibg = Menu.MI_BGCOLOR[0];
		miend = CBEndLayer;
		mihgt =' HEIGHT=20';
	}
	temp_m_i = CBBeginLayer + ' BGCOLOR="' + mibg + '" WIDTH=' + this.cell_width + mihgt + ' ID="' + this.id_name + '" onclick="mi_rout(); top.location.href=\''+ this.menu_url + '\'" onmouseover="mi_rovr(\'' + this.id_name + '\', \'' + this.s_m.id_name + '\','+this.lstrt + ')\;" onmouseout="mi_rout()\;" CLASS="menucursor" valign=middle ' + CBTop  + Menu.TOP_COORD + CBLeft + left_start + miend + '<A HREF="' + this.menu_url + '" onclick="mi_rout(); this.blur()" CLASS="' + this.sT + '">' + this.value_name + '</A>';
	left_start += this.cell_width+1;
	temp_m_i += CBCloseLayer;
	temp_m_i += this.s_m.mk_submenu(); 
	return temp_m_i;
}

function MenuI(iN, vN, sM, uM, cW, lmenu, cL){
	this.id_name = iN;
	this.lstrt = lmenu;
	this.value_name = vN;
	this.cell_width = cW;
	this.menu_url = uM;
	this.sT = cL;
	if (cL == 'miclass') {
		this.s_m = new ClassSubMenu(sM, vN, uM, lmenu);
	} else {
		this.s_m = new SubMenu(sM, vN, uM, lmenu);
	}
}

MenuI.prototype.mk_mi = MenuI_Mkr;

function Menu_Mkr(){
	temp_menu = '';
	for (i = 0; i < this.m_i.length; i++){
		temp_menu += this.m_i[i].mk_mi();
	}
	return temp_menu;
}

function Menu(){
	this.m_i = new Array();
}

Menu.prototype.mk_menu = Menu_Mkr;
