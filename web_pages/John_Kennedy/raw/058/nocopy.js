var allow = true;
function noCopy(obj){  	
  	obj.galleryimg="no"
    obj.onmouseup=function(){coverIt(obj)}
}
function coverIt(e){
	if (!allow){
		var shield=document.images.imgShield;
		if(shield){
			shield.width=e.width;
			shield.height=e.height;
			shield.style.left=el_L(e);
			shield.style.top=el_T(e);
		}
	}
}
function el_L(el){
	var lft = el.offsetLeft;
	var pel = el.offsetParent; 
	while (pel != null){
		lft += pel.offsetLeft; 
		pel = pel.offsetParent;
	}
	return lft;
} 
function el_T(el){
	var tp = el.offsetTop;
	var pel = el.offsetParent; 
	while (pel != null){
		tp += pel.offsetTop; 
		pel = pel.offsetParent;
	}
	return tp;
}
function clickIE() {
	allowClick();
	if (event.button!=1){
		allow = false;
	}else{
		allow = true;
	}
}
function clickNS(e) {
	allowClick();
	if (e.which!=1){
		allow = false;
	}else{
		allow = true;
	}
}
function allowClick(){
	var shield=document.images.imgShield;
	if(shield){
		shield.width=0;
		shield.height=0;
	}
}
if (document.all){
	document.onmousedown=clickIE;
}else{
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS;
}