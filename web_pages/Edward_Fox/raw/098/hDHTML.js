var lsi;
var l_p_lyr;
ST = setTimeout('hide_submenu()', 100);
clearTimeout(ST);
var lmi;

function si_rovr(pL, wC, wBG){
	clearTimeout(ST);
	if(pL){
		if (ie){document.all[wC].bgColor = Menu.SI_ROVR_BGCOLOR;}
		if (ns){document.layers[pL].document.layers[wC].bgColor = Menu.SI_ROVR_BGCOLOR;}
		last_bgcolor = wBG;
		lsi = wC;
		l_p_lyr = pL;
	}
}

function si_rout(){
	ST = setTimeout('hide_submenu()', 500);
	if (l_p_lyr){
		if (ie){document.all[lsi].bgColor = last_bgcolor;}
		if (ns){document.layers[l_p_lyr].document.layers[lsi].bgColor = last_bgcolor;}
	}
}

function mi_rovr(wM, wS, sLs){
	eval('doc.' + wM + '.bgColor = Menu.MI_ROVR_BGCOLOR');
	if (wS){
		show_submenu(wS, sLs);
	}
	if (lmi && lmi != wM){
		mi_roff();
	}
	lmi = wM;
	if (typeof(hideform_menus) != "undefined") {
		eval("for (var m=0; m < hideform_menus.length; m++) { if (wM == hideform_menus.substr(m,1)) {if (ns) document.layers['hideform'].visibility = 'hidden'; if (ie) document.all['hideform'].style.visibility = 'hidden';}}");
	}
}


function mi_rout(){
	ST = setTimeout('hide_submenu()', 500);
}

function mi_roff(){
	var mioff;
	(lmi == 'i') ? mioff = Menu.CLASS_BGCOLOR : mioff = Menu.MI_BGCOLOR[0];
	eval('doc.' + lmi + '.bgColor = mioff');
	if (typeof(hideform_menus) != "undefined") {
        	if (ns) document.layers['hideform'].visibility = 'visible';
        	if (ie) document.all['hideform'].style.visibility = 'visible';
	}
}

var l_sm_sh;
function show_submenu(wS, sLs){
	if (l_sm_sh && l_sm_sh != wS) {
		hide_submenu();
	}
	clearTimeout(ST);
	eval('doc.' + wS + style + '.left = sLs');
	l_sm_sh = wS;
}

function hide_submenu(){
	if (l_sm_sh){
		eval('doc.' + l_sm_sh + style + '.left = -596');
		mi_roff();
	}
}

function clear_menus(){
	if ((document.all) && (navigator.userAgent.indexOf('Mac') > -1)) {
		var my_subs = new Array('a','b','c','d','e','f','g','h','i');
		for (letter in my_subs) {
			eval('doc.' + my_subs[letter]+'sub' + style + '.left = -596');
		}
	}
}

function POPuP(u,n,w,h,f){ 
	var winF = "width="+w+",height="+h; 
	if (f) winF += ","+f;
	Popwin = this.open(u, n, windowFeatures);
	if (!Popwin.opener) Popwin.opener=self;
	if (Popwin.focus) Popwin.focus();
	return false;
}
