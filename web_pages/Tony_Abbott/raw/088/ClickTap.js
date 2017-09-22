//function for tracking click
function clk(el, tag) { 
	if(document.images){ 
		(new Image()).src="/ClickTap_tracking.asp?reference="+window.location.href+"&url="+escape(el.href)+"&tag=" +escape(tag) ; 
		//window.location= "/ClickTap_tracking.asp?reference="+window.location.href+"&url="+escape(el.href)+"&tag=" +escape(tag) ; 
		//alert("/ClickTap_tracking.asp?reference="+window.location.href+"&url="+escape(el.href)+"&tag=" +escape(tag) ); 
	} 
	return true;
} 