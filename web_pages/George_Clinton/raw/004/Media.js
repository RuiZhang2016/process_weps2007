mediaList = new Array();

function Media(type){
	this.type = type;
	this.buffer = "";
}

Media.prototype.showMedia = function(type)
{
		if (this.type.toLowerCase() == "mov")
			this.showMov();
		if (this.type.toLowerCase() == "swf")
			this.detectFlash();
}

Media.prototype.detectFlash = function(){
	if (this.exists(flashVersion)){
				
		if (this.isLayer && useLayer){
			flashPresent=1;
			document.write("<div"+" id=\"flashLayer\" class=\"flashLayerClass\">")
		}
		if (flashVersion >= this.minVersion){
			this.addMedia();
			this.showSwf();
		}
		else this.showAlt();
		if (this.isLayer && useLayer) document.write("</div>");
		if ( (isMac && isIE) || (isN6) ) dhtml = 0;
	}
}


Media.prototype.showSwf = function(type){
	
		this.setMovieLoc();	
		this.setFlashVars();
		
		if (this.name == "false"){
			this.name = "swf"+mediaList.length;
		}
		var buffer = "";
		buffer +=("<" + "OBJECT CLASSID=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" id=\"" + this.name + "\" ");
		buffer +=(" CODEBASE=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" "); 
		buffer +=(" WIDTH=" + this.width + " HEIGHT=" + this.height);
		
		if (this.usePopup) buffer +=(" onMouseUp=\"Media.prototype.doAction()\" ");
		
		buffer +=(" > ");	
		buffer +=(" <"+"PARAM NAME=MOVIE VALUE='" + this.movieLoc + "'> ");
		buffer +=(" <"+"PARAM NAME=PLAY VALUE='true'> ");
		buffer +=(" <"+"PARAM NAME=LOOP VALUE='true'> ");
		if (this.bgcolor != "nobg") buffer +=(" <"+"PARAM NAME=bgcolor VALUE=#" + this.bgcolor + "> ");
		buffer +=(" <"+"PARAM NAME=QUALITY VALUE=high> ");
		
		// Flash Vars 
		buffer +=(" <"+"PARAM NAME=FlashVars VALUE='"+this.flashVars+"'> ");
			
		buffer +=(" <"+"PARAM NAME=MENU VALUE='" + this.menu + "'> ");
	
		// Revisit
		if ((this.wmode7 && (flashVersion >= 7)) || !this.wmode7){
			buffer +=(" <"+"PARAM NAME=WMODE VALUE='" + this.wmode + "'>");
		}
		buffer +=("<EMB"+"ED NAME=\"" + this.name + "\" SRC='" + this.movieLoc + "' ");
		
		// Init
		buffer +=("FlashVars='" + this.flashVars + "' ");
		buffer +=(" WIDTH='" + this.width + "' HEIGHT='" + this.height + "' play=true ");
		buffer +=(" loop=true QUALITY=best ALIGN=TOP ");
		if (this.bgcolor != "nobg") buffer +=(" BGCOLOR=#" + this.bgcolor + " ");
		buffer +=(" TYPE=application/x-shockwave-flash ");
		if ((this.wmode7 && (flashVersion >= 7)) || !this.wmode7){
			buffer +=(" wmode=" + this.wmode );
		}
		buffer +=(" PLUGINSPAGE=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\">");
		buffer +=("</EMBED>");
		buffer +=("</OBJECT>");
		this.buffer = buffer;
		if(Media.prototype.doNotShowMedia != true)
			document.write(this.buffer);
}


Media.prototype.setFlashVars = function(){

	// AOL Platform.
	this.flashVars = "?plat=" + plat;

	if (this.userName != "null") {
		this.flashVars += "&userName=" + this.userName;
	}
	if (this.vars.length >= 1) {
		this.flashVars += "&"+this.vars;
	}
	
	// flashAdvars
	if (this.useAdvals){
		this.flashVars += "&flashAdvars="+flashAdVars;
	}
	
	// check for custom vars
	if (this.useCustom){
		this.flashVars += "&customVars="+flashCustomVars;
	}
}
Media.prototype.setMovieLoc = function(){
	return this.movieLoc;
}
Media.prototype.showAlt = function(){
	if (this.altPage.length > 1){
		this.showAltPage();
	}
	else if (this.textAlt){
		this.showAltText();
	}
	else {
		this.showAltImage();
	}
}
Media.prototype.showAltPage = function(){
	var buffer = ("<"+"iframe src=\""+this.altPage+"\" width="+this.width+" height="+this.height+" frameborder=0 scrolling="+this.altPageScroll+"></iframe>");
	this.buffer = buffer;
	if(Media.prototype.doNotShowMedia != true)
		document.writeln(this.buffer);
}
Media.prototype.showAltImage = function(){
	var aInn = "";
	var aOut = "";
	var map = (this.usemap != "false")? "usemap=#"+this.usemap+" ": "";
	
	if(this.usemap == "false"){
		aInn = (this.altHref.length > 1)? "<"+"a href=\""+this.altHref+"\">" : "";
		aOut = (this.altHref.length > 1)? "</A>" : "";
	}
	var buffer = (aInn+"<"+"img src=\""+this.altImage+"\" " + map + " width="+this.width+" height="+this.height+" border=0>"+aOut);
	
	this.buffer = buffer;
	
	if(Media.prototype.doNotShowMedia != true)
		document.write(this.buffer);
}
Media.prototype.showAltText = function(){
	var aInn = (this.altHref.length >= 1)? "<"+"div style=\"text-align:left;padding:5px;background-color:#EEEEEE;width:"+this.width+"px;height:"+this.height+"px\"><"+"a href=\""+this.altHref+"\" target=\"_blank\">" : "";
	var aOut = (this.altHref.length >= 1)? "</A></div>" : "";
	var buffer = (aInn+this.altText+aOut);
	this.buffer = buffer;
	
	if(Media.prototype.doNotShowMedia != true)
		document.write(this.buffer);
};
Media.prototype.exists = function(obj){
	return (typeof obj != "undefined")? true: false;
};
Media.prototype.addMedia = function(){
	mediaList[mediaList.length] = this.movieLoc;
};
Media.prototype.debug = function(){
	document.write("<br clear=all>");
	for (var prop in this){
		var obj =  typeof this[prop];
		if (obj =="function")  {
			document.write("");
		}
		else {
			document.write("<B>"+prop+"</B> = " + this[prop] + "\<BR>");
		}
	}
};

function commandObj() {}
argObject = new Object();
action = new commandObj;

Media.prototype.doAction = function() {
	if (commandObj != null) {
		action = new commandObj(argObject.args);
		commandObj = null;
		action = null;
	}
}
