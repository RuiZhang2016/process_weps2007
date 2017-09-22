function afns_drawPersonals( source_id, target_id ){
	if( source_id == null ){
		source_id = "personals_content";
	}
	if( target_id == null ){
		target_id = "personals";
	}
	//make this work on pages w no target in markup wout browser error
	try {
		var afns_personals_content = document.getElementById( source_id );
		afns_personals_content.parentNode.removeChild(afns_personals_content);
		document.getElementById( target_id ).appendChild(afns_personals_content);
		}
	catch(err) {
		jserror = 1;
		}
}
function afns_getByTagAndClass( tagName, className, root ){
	if( root == null ){
		root = document;
	}
	var nodeList = root.getElementsByTagName( tagName );
	return afns_getByClass( nodeList, className );
}
function afns_getByClass( nodeList, className ){
	for( var i=0; i < nodeList.length; i++){
		var node = nodeList[i];
		if( node.className.indexOf(className) > -1){
			return node;
		}
	}
	return null;
}

function afns_showAd(){
	//if has cookies, and we should show an ad
	if( afns_ad_redirect != "" && navigator.cookieEnabled ){
		//if not a partner
		if(location.search.indexOf("utm_campaign=Partnerships")>-1 || location.search.indexOf("utm_medium=Trade")>-1 ){
			return;
		}
		//if not us, or an old partner
		if(document.referrer.indexOf("theonion.com")>-1 || document.referrer.indexOf("cnn.com")>-1 || document.referrer.indexOf("nerve.com")>-1 || document.referrer.indexOf("gawker.com")>-1 || document.referrer.indexOf("journals.aol.com")>-1){
			return;
		}
		//if premercial_cookie not set
		if( document.referrer.indexOf(afns_ad_redirect)==-1 && !afns_readCookie(afns_ad_redirect)){
			//direct user to premercial: url has target=location.href
			location.href=afns_base_url+"ads/"+afns_ad_redirect+".php?target="+afns_url64;
		}
	}
}
afns_showAd();
function afns_getMetaTag( tagName ){
	var metaTags = document.getElementsByTagName("meta");
	for (i=0;i < metaTags.length;i++){
		if( metaTags[i].getAttribute("name") == tagName ){
			return metaTags[i];
		}
	}
	return null;
}
function email_popup(nid,base_url){
	if(base_url){
		base_url+="/";
	}
	email = open(base_url+"email_page/"+nid,"email_page_window", "width=425px, height=550px, scrollbars=auto, left=20px, top=20px")
}

function most_bla_popup(type, nid, base_url){
	if(base_url){
		base_url+="/";
	}
	email = open(base_url + type,"mostbla_window", "width=602px, height=360px, scrollbars=auto, left=20px, top=20px")
}

function email_close(){
	try{
		email.close();
	}catch(err){alert(err)}
}


function afns_track_click(action){
	var s = s_gi('theonionprod');
	s.linkTrackVars='events';
	s.linkTrackEvents='';
	s.tl(this,'o',action);
}
function empty(){}
function getHTTPObj(){var _req=null;if(window.ActiveXObject){_req=new ActiveXObject("Msxml2.XMLHTTP");if(!_req){_req=new ActiveXObject("Microsoft.XMLHTTP")}}else if(window.XMLHttpRequest){_req=new XMLHttpRequest}return _req}
function placeFragment(fromUrl,target){
	var httpObj = getHTTPObj();
	httpObj.onreadystatechange = function() {
        if (httpObj.readyState == 4) {
        	alert(httpObj.responseText);
            document.getElementById(target).innerHTML = httpObj.responseText;
        }
    };
    httpObj.open('GET', fromUrl, true);
    httpObj.send(null);
}
function afns_placeOnionStoreAd(){
	  var featured_products = new Array(
							'Bracelet_right_nav.jpg',
							'Cap_right_nav.jpg',
							'Gotchabox1_right_nav.jpg',
							'Gotchabox2_right_nav.jpg',
							'Gotchabox3_right_nav.jpg',
							'Headline-kit_right_nav.jpg',
							'Mug-Dead_right_nav.jpg',
							'Mug-FO_right_nav.jpg',
							'Tote_right_nav.jpg',
							'Tshirts1_right_nav.jpg',
							'Tshirts2_right_nav.jpg',
							'Tshirts3_right_nav.jpg',
							'Tshirts4_right_nav.jpg',
							'Tshirts5_right_nav.jpg',
							'Tshirts6_right_nav.jpg',
							'Tshirts7_right_nav.jpg',
							'Tshirts8_right_nav.jpg',
							'Tshirts9_right_nav.jpg',
							'Womens-Tees_right_nav.jpg'	
      		 				);
	var prodNum=Math.round((featured_products.length-1)*Math.random());			     
	  var featured_product = featured_products[prodNum];
	document.getElementById("onion_ad_img").src="themes/onion/assets/store/sidebar/"+featured_product;
}
function afns_createCookie(name,value,days){
	var expires = "";
	if (days){
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function afns_readCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++){
		var c = ca[i];
		while (c.charAt(0)==' '){
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) == 0){
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}

function afns_eraseCookie(name){
	afns_createCookie(name,"",-1);
}

function show_element(name)
{
        document.getElementById(name).className = (document.getElementById(name).className == 'Show') ? 'Hide' : 'Show';
}
function StoreProduct( name, image, price, link ){
	this.name=name;
	this.image=image;
	this.price=price;
}
function afns_moveDiv(fromId,toId){
	var fromDiv = document.getElementById(fromId);
	var toDiv = document.getElementById(toId);
	if(fromDiv && toDiv){
		toDiv.appendChild(fromDiv);
	}
}