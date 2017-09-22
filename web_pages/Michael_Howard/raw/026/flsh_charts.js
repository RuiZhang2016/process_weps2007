//$Id: flsh_charts.js,v 1.5 2006/10/12 20:43:01 daver Exp $
//$Source: /bbsrc/web/docs/en/jscommon/flsh_charts.js,v $
//$Revision: 1.5 $

function PutChart( Ticker ){
	if ( FlashMode && FlashVer >= 8 ) {
		var Cplay= '<div style="background-color: \#1f3319; WIDTH: 646px; HEIGHT: 570px; position: relative; top: 12px; left: 8px; MARGIN: 0 0 10px 0;">';
		Cplay += '<object align="middle" id="chart" height="570" width="646" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000">';
		Cplay += '<param name="FlashVars" value="ticker=' + Ticker + '">';
		Cplay += '<param value="sameDomain" name="allowScriptAccess">';
		Cplay += '<param value="/flashsrv/chartvs3.swf" name="movie">';
		Cplay += '<param value="high" name="quality">';
		Cplay += '<param value="#000000" name="bgcolor">';
		Cplay += '<param value="transparent" name="wmode">';
		Cplay += '<embed pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowScriptAccess="sameDomain" align="middle" name="chart" height="570" width="646" bgcolor="#1f3319" quality="high" wmode="transparent" FlashVars="ticker=' + Ticker + '" src="/flashsrv/chartvs3.swf"></embed>';
		Cplay += '</object>';
		Cplay += '</div>';
		document.write(Cplay);
	}else{
		document.write('<div style="WIDTH: 655px; HEIGHT: 85px; position: relative; top: 18px; left: 8px;">');
		document.write('<span style="font: bold 12pt verdana, arial, helvetica; color: #ef4d15"> Error!</span><br/>');
		document.write('The new Bloomberg Chart Builder requires Flash 8.0 or newer. <BR/>');
		document.write('<a class="style5red" href="http://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" id="Macromedia Flash" name="Macromedia Flash">Click here to download Flash.</a>');
		document.write('</div>');
	}
}

