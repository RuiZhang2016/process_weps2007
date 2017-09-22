function partnerCall(part, server, siteID) {
	repImg = new Image();
	var destUrl = ((docURL.split("//"))[1].split('.com')[1]).split("?")[0];
	repImg.src = 'http://mtv.ifc.mtvi.com/data/?tax0_SiteID=2&if_pv=tax_only&partner='+part+'&destUrl='+escape(destUrl);
}

function asmCall(server, siteID) {
	repImg = new Image();
	repImg.src	= "http://mtv.ifc.mtvi.com/data/?tax0_SiteID=2&if_pv=tax_only" + mep1;
	//http://vh1.ifc.mtvi.com/data?tax0_SiteID=1&if_pv=tax_only
}