function sendAnalyticsEvent(str){ 
	ns=s_account;
	if(str!=null) ns+=","+str;
	void(s_gs(ns));
}

function sendLinkEvent(str,lnkname){
	ns=s_account;
	if(str!=""&&str!=null) ns+=","+str;
	s_linkType="o";
	s_lnk=true;
	s_linkName=lnkname;
	void(s_gs(ns));
}

function sendReportingCall(ro){
	if(ro){
		if(ro.setOverrides)	omniSetOverrides(ro.setOverrides);
	} void(sendAnalyticsEvent(""));
}

function sendLinkCall(linkName, ro){
	var lnkName = unescape(linkName);
	if(ro){
		if(ro.setOverrides)	omniSetOverrides(ro.setOverrides);
	} void(sendLinkEvent("", lnkName));
}

function omniSetOverrides(or){
	for(var i in or){
		this[i] = or[i];
	}
}