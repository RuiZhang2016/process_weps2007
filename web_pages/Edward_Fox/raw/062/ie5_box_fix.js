function FixBoxModel(bForce){
	var browserTypeName = navigator.userAgent.toUpperCase();
	if (browserTypeName.indexOf("NETSCAPE") != -1 || browserTypeName.indexOf("SAFARI") != -1) return;
	// if(!window.external)return;
	var compat = document.compatMode;
	// alert('compat = ' + compat);
	if(typeof compat=="string"&&compat!="BackCompat")return;
	for(var i=0, S=document.styleSheets, il=S.length, C, R; i<il; i++){
		C = S[i]; if(!C) continue;
	//	alert('stylesheet name = ' + C.id);
		FixBoxModelCollection( C, bForce );
		}
	}

function FixBoxModelCollection( oStyleCol, bForce ){
	var I = oStyleCol.imports;
	for(var a=0, al=(I?I.length:0); a<al; a++){
		FixBoxModelCollection( I[a], bForce );
	}
	var R = oStyleCol.rules; if(!R) return;
	for(var j=0, jl=R.length, CR, CS; j<jl; j++){
		CR = R[j]; if(!CR) continue;
		CS = CR.style; if(!CS) continue;
		FixBoxModelStyle( CS, bForce );
	}
}

function FixBoxModelStyle(oStyle, bForce){
	//alert('FixBoxModelStyle executed & oStyle = ' + oStyle);
	if(!oStyle|| (oStyle.FixBoxModelDone&&!bForce) ) return;
	var p = FixBoxModel_parseInt;
	var cWidth = p(oStyle.width), cHeight = p(oStyle.height);
	var wBorder = p(oStyle.borderLeftWidth) + p(oStyle.borderRightWidth);
	var hBorder = p(oStyle.borderTopWidth) + p(oStyle.borderBottomWidth);
	var wPadding = p(oStyle.paddingLeft) + p(oStyle.paddingRight);
	var hPadding = p(oStyle.paddingTop) + p(oStyle.paddingBottom);
	if((wBorder>0||wPadding>0)&&cWidth>0) oStyle.width = cWidth + wBorder + wPadding;
	if((hBorder>0||hPadding>0)&&cHeight>0) oStyle.height = cHeight + hBorder + hPadding;
	//alert('width = ' + cWidth + '+' + wBorder + '+' + wPadding + '=' + oStyle.width);
	//alert('height = ' + cHeight + '+' + hBorder + '+' + hPadding + '=' + oStyle.height);
	
	oStyle.FixBoxModelDone = true;
}

function FixBoxModel_parseInt( s ){
	return parseInt(s,10)||0;
}

function checkforWinIE5() {

var brVers = navigator.userAgent.toUpperCase();
if (brVers.indexOf("MSIE 5") > -1 && brVers.indexOf("WINDOWS") > -1) {

FixBoxModel();

}

}

checkforWinIE5();