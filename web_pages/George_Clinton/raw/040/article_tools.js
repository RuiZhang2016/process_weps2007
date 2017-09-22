var afns_blog_tracked=false;
function afns_keepEmbedSelected(){
	if( document.getElementById("embedded_html").focused){
		document.getElementById("embedded_html").onfocus = afns_select_embed;
		document.getElementById("embedded_html").onselect = afns_select_embed;
	}
}
function afns_openBlogTool(){
	document.getElementById("embedded_html").onfocus = afns_select_embed;
	document.getElementById("embedded_html").onmousedown = afns_select_embed;
	document.getElementById("embedded_html").onmouseup = afns_select_embed;
	afns_blogTool.toggle();
	if( !afns_blog_tracked ){
		var title = unescape(afns_embedTitle);
		title = title.replace(/'/g,"");
		setTimeout( 'afns_track_click( "blogTool", "'+title+'" )', 0 );
		afns_blog_tracked = true;
	}
}

function afns_Expandable(id, name ){
	this.id = id;
	this.name = name;
	this.isOpen = false;
	this.sizes = new Object()
}
afns_Expandable.prototype.makeSize = function( name, maxX, maxY, minX, minY ){
	var size = new Object();
	size.maxX = maxX;
	size.maxY = maxY;
	size.minX = minX;
	size.minY = minY;
	this.sizes[name] = size;
}
afns_Expandable.prototype.setSize = function( name ){
	this.size = this.sizes[name];
	this.setMaxMin( this.size.maxX, this.size.maxY, this.size.minX, this.size.minY);
}
afns_Expandable.prototype.setMaxMin = function( maxX, maxY, minX, minY  ){
	this.maxX = maxX;
	this.maxY = maxY;
	this.minX = minX;
	this.minY = minY;
}
afns_Expandable.prototype.toggle = function(){
	this.getWrapper().style.display = "block"; 
	this.getWrapper().style.overflow = "hidden"; 
	this.getWrapper().style.visibility = "visible"; 
	if( this.isOpen ){
		this.shrink();
	}else{
		this.expand();
	}
}
var afns_expand_rate = 75;
if ( /MSIE/.test(navigator.userAgent) ) {
	afns_expand_rate = 40;
}
afns_Expandable.prototype.expand = function(){
	this.rateX = afns_expand_rate;
	this.rateY = afns_expand_rate;
	this.wrapper.style.width = this.minX+"px";
	this.wrapper.style.height = this.minY+"px";
	this.resize();
	afns_select_embed();
}
afns_Expandable.prototype.shrink = function(){
	this.rateX = afns_expand_rate*-1;
	this.rateY = afns_expand_rate*-1;
	this.wrapper.style.width = this.maxX+"px";
	this.wrapper.style.height = this.maxY+"px";
	this.resize();
}
afns_Expandable.prototype.getWrapper = function(){
	if( !this.wrapper ){
		this.wrapper = document.getElementById(this.id);
		this.wrapper.obj = this;
	}
	return this.wrapper;
}
afns_Expandable.prototype.resize = function(){
	setTimeout( "document.getElementById('"+this.id+"').obj.resizeIt()", 0 );
}
afns_Expandable.prototype.resizeIt = function(){
	var width = parseInt(this.wrapper.style.width);
	var height = parseInt(this.wrapper.style.height);
	var finalX = (this.isOpen) ? this.minX : this.maxX;
	var diffX = Math.abs( width - finalX);
	var finalY = (this.isOpen) ? this.minY : this.maxY;
	var diffY = Math.abs( height - finalY);
	
	if( diffX <= Math.abs( this.rateX ) ){
		this.wrapper.style.width = finalX+"px";
		diffX = 0;
	}
	if( diffY <= Math.abs( this.rateY ) ){
		this.wrapper.style.width = finalY+"px";
		diffY = 0;
	}	
	if( diffX > 0 || diffY > 0 ){
		if( diffX > 0 ){
			this.wrapper.style.width = width + this.rateX + "px";
		}
		if( diffY > 0 ){
			this.wrapper.style.height = height + this.rateY + "px";
		}
		this.resize();
	}else{
		if( !this.isOpen ){
			this.wrapper.style.width = this.maxX + "px";
			this.wrapper.style.height = "auto";
			this.wrapper.style.overflow = "visible";
			this.isOpen = true;
			afns_select_embed();
		}else{
			this.wrapper.style.visibility = "hidden";
			this.isOpen = false;
		}
	}
}
var AFNS_TOP = "1";
var AFNS_BOTTOM = "2";
var afns_currentlyOpen = null;

var afns_blogTool = new afns_Expandable('embedded','blogTool');
afns_blogTool.makeSize( AFNS_TOP, 350, 300, 0, 0 );
afns_blogTool.makeSize( AFNS_BOTTOM, 500, 300, 500, 0 );

var afns_textTool = new afns_Expandable('text_this','TextThis');
afns_textTool.makeSize( AFNS_TOP, 320, 150, 0, 0 );
afns_textTool.makeSize( AFNS_BOTTOM, 400, 150, 400, 0 );

function afns_toggle_tool( expandable, isTop ){
	var newPosition = (isTop) ? "tools-top" : "tools-bottom";
	if( expandable.getWrapper().parentNode.id != newPosition ){
		expandable.getWrapper().parentNode.removeChild( expandable.getWrapper() );
		document.getElementById( newPosition ).appendChild(expandable.getWrapper());
		expandable.isOpen = false;
	}
	if( isTop ){
		expandable.getWrapper().className = expandable.id+"-top";
		expandable.setSize( AFNS_TOP );
	}else{
		expandable.getWrapper().className = expandable.id+"-bottom";
		expandable.setSize( AFNS_BOTTOM );
	}
	if( !expandable.isOpen){
		if( afns_currentlyOpen != null && afns_currentlyOpen != expandable ){
			afns_currentlyOpen.toggle();
		}
		afns_currentlyOpen = expandable;
	}else if(  afns_currentlyOpen == expandable ){
		afns_currentlyOpen = null;
	} 
	expandable.toggle();
	if( !expandable.tracked ){
		var title = document.title;
		title = title.split(' |')[0];
		title = title.replace(/'/g,"");
		setTimeout( 'afns_track_click( "'+expandable.name+'", "'+title+'" )', 0 );
		expandable.tracked = true;
	}
	expandable.isTop = isTop;
}

function afns_text_this_toggle_top(){
	afns_toggle_tool( afns_textTool, true );
}
function afns_text_this_toggle_bottom(){
	afns_toggle_tool( afns_textTool, false );
}
function afns_blog_toggle_top(){
	afns_toggle_tool( afns_blogTool, true );
}
function afns_blog_toggle_bottom(){
	afns_toggle_tool( afns_blogTool, false );
}

function afns_select_embed(){
	if( afns_blogTool.isOpen ){
		document.getElementById("embedded_html").focus();
		document.getElementById("embedded_html").select();
	}
}
function afns_toggle( id, callback ){
	var embed_div=document.getElementById( id );
	embed_div.style.display = (embed_div.isOpen) ? "none" : "block";
	embed_div.isOpen = !embed_div.isOpen;
	callback();
}

var emdash = String.fromCharCode( 150 );
function afns_insert_embed(){
	var metrics = "utm_source=Distributed&utm_medium=Embedded%2BHTML&utm_campaign=Widgets";
	var baseLink = "http://www.theonion.com"+this.location.pathname;
	var link = baseLink+"?"+metrics;
	var title = unescape( afns_embedTitle );
	var teaser = null;
	var lineHeight=2;
	if( afns_embedTeaser ){
		fontSize="default";
		lineHeight="default";
		teaser = afns_embedTeaser.replace( /–/, "-" );
	}else{
		fontSize = afns_fontSize+"px";
		lineHeight = (afns_fontSize-1)+"px";
	}
	var markup = '<div class="onion_embed headline">';
	if( afns_embedImg ){
		markup += '<a class="img" target="theonion" href="'+link+'">'+afns_embedImg+'</a>';
	}else if (afns_embedImg_orig == "" ){
		document.getElementById( "check_image" ).checked="";
		document.getElementById( "check_image" ).disabled="disabled";
		document.getElementById( "check_image_label" ).style.color="#aaa";
	}
	markup += '<h2><a target="theonion" href="http://www.theonion.com/content?'+metrics+'"><img src="http://www.theonion.com/content/themes/onion/assets/logos/onion_super_tiny.png" width="92" height="12" alt="The Onion" /></a></h2>';
	markup += '<h3 style="font-size:'+fontSize+'!important;line-height:'+lineHeight+'!important;"><a target="theonion" href="'+link+'" >'+title+'</a></h3>';
	if( teaser ){
		markup += '<p class="embed_teaser">';
		markup += teaser;
		markup += '</p>';
	}
	markup += '</div>';	
	markup += '<img src="http://statistics.theonion.com/b/ss/theonionprod/1/H.6--NS/1234567?pe=lnk_d&pev2='+encodeURIComponent(title)+'&pev1='+encodeURIComponent(link)+'" height="1" width="1" style="display:none;" />';
	var styles = '<style type="text/css">'+afns_embedStyles+'</style>';
	
	document.getElementById("embedded_html").value = markup+styles+afns_trackingImage;
	document.getElementById("embedded_preview").innerHTML = markup;
	afns_select_embed();
	document.getElementById("embedded_close").style.bottom="4px";
	setTimeout('document.getElementById("embedded_close").style.bottom="5px"',1);
}
function afns_embedToggleImage(check){
	afns_embedImg = (check.checked) ? afns_embedImg_orig : null;
	afns_insert_embed();
}
function afns_embedToggleTeaser(check){
	afns_embedTeaser = (check.checked) ? afns_embedTeaser_orig : null;
	afns_insert_embed();
}
/*Facebook open*/
function fbs_click() {
	u=location.href+"&utm_source=facebook_1";
	t=document.title;
	window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');
	setTimeout( 'afns_track_click( "Facebook", "'+t+'" )', 0 );
	return false;
}
