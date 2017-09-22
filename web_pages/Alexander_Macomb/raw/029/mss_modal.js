function DisplayPopUp(state, schoolID, forceHover, referrer){
 var curUrl=location.href;
 if (curUrl.indexOf('cpn=') > -1) {document.cookie='hoverFromNewsletter=1;path=/';return;}
 
 var Height=500;Width=480;URL='';hoverName='';
 if (schoolID && schoolID != 0) {
    URL="/community/newsletters/popup/mss/page1.page?state="+state+"&schoolId="+schoolID+"&referrer="+referrer;
    hoverName='hoverNewsMss';
 } else {
    hoverName='hoverNewsGn';
    state = readCookie('state'); 
    URL="/community/newsletters/popup/newsletter.page?referrer="+referrer;
    if (state) {
        URL += "&state="+state;
    }
 }

 if (curUrl.indexOf('msl_confirm') > -1) {
    showPopWinOnLoad(URL, Width, Height, null, hoverName, forceHover);
 } else {
    showPopWinOnExit(URL, Width, Height, null, hoverName, forceHover); 
 } 
}

//http://www.quirksmode.org/js/cookies.html 
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
