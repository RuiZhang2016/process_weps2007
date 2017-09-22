
// Supporting the ActiveX fix
// https://www.macromedia.com/devnet/activecontent/
var baseHref = '/promos/pms/js/';
document.write('<script language="javascript" src="' + baseHref + 'AC_ActiveX.js"></script>');
document.write('<script language="javascript" src="' + baseHref + 'AC_RunActiveContent.js"></script>');

function buildSwfUiFull( params){
	var defaultParams = [
	{key:"id", value:"movie"}, 
	{key:"name", value:"movie"},
	{key:"align", value:"middle"},	
	{key:"allowScriptAccess", value:"allways"},
	{key:"bgcolor", value:"#FFFFFF"},
	{key:"menu", value:"false"},
	{key:"codebase", value:"https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"},
	{key:"width", value:"200"},
	{key:"height", value:"200"},	
	{key:"src", value:""},		
	{key:"quality", value:"high"},
	{key:"wmode", value:"transparent"},
	{key:"pluginspage", value:"https://www.macromedia.com/go/getflashplayer"},
	{key:"movie", value:""},
	{key:"FlashVars", value:""}];
	
	if( params.length != null){
		for(x=0; x < params.length; x++){
			var param = params[x];
			// Lets search to replace the default param
			var paramAdded = false;
			if( param != null){
				for(y=0; defaultParams.length; y++){
					var defaultParam = defaultParams[y];
					if(param.key == defaultParam.key){
						paramAdded = true;
						defaultParam.value = param.value;
						break;
					}
				}
			}
			if(paramAdded)
				defaultParams.push( param);
		}
	}

	var result = "<script language=\"javascript\">\n AC_FL_RunContent(";
	for(x=0; x < defaultParams.length; x++){
		var currentKey = defaultParams[x];
		result += ("'"+currentKey.key+"',"+"'"+currentKey.value+"'"+((defaultParams.length-1) == x ? "" : ","));
	}
	result += ");</script>";
	
	return result;
}